// src/app/api/wallet/deposit/route.ts
import { NextResponse } from "next/server";
import { verifySessionWithUser } from "@/lib/dataAccessLayer";
import prisma from "@/config/prismaClient";
import { Currency } from "@/generated/prisma";
import {
  initializeStripePayment,
  verifyStripePayment,
} from "@/utils/stripePayment";

// POST: Initialize deposit
export async function POST(request: Request) {
  try {
    // Check authentication
    const result = await verifySessionWithUser();

    if (!result?.session) {
      return NextResponse.json(
        { error: "Unauthenticated: Please log in.", success: false },
        { status: 401 }
      );
    }

    if (!result.user) {
      return NextResponse.json(
        { error: "Authenticated user not found", success: false },
        { status: 404 }
      );
    }

    const userId = result.user.id;

    const body = await request.json();
    const { amount, currency = "USD", callbackUrl } = body;

    // Validation
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: "Valid amount is required" },
        { status: 400 }
      );
    }

    // Validate currency
    const currencyEnum = currency.toUpperCase() as Currency;
    if (!Object.values(Currency).includes(currencyEnum)) {
      return NextResponse.json(
        { error: `Unsupported currency: ${currency}` },
        { status: 400 }
      );
    }

    // Get user details
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, firstName: true, lastName: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Create payment record
    const payment = await prisma.payment.create({
      data: {
        userId: user.id,
        method: "Stripe",
        reference: `dep_${user.id}_${Date.now()}`,
        amount: parseFloat(amount.toString()),
        currency: currencyEnum,
        status: "PENDING",
      },
    });

    // Initialize Stripe payment
    const stripeSession = await initializeStripePayment(
      user.email,
      parseFloat(amount.toString()),
      currency,
      String(payment.id),
      callbackUrl
    );

    if (!stripeSession.id) {
      // Update payment status to failed
      await prisma.payment.update({
        where: { id: payment.id },
        data: { status: "FAILED" },
      });

      return NextResponse.json(
        { error: "Failed to initialize payment" },
        { status: 500 }
      );
    }

    // Update payment record with Stripe session ID as reference
    await prisma.payment.update({
      where: { id: payment.id },
      data: { reference: stripeSession.id },
    });

    return NextResponse.json(
      {
        success: true,
        data: {
          paymentId: payment.id,
          reference: stripeSession.id,
          authorizationUrl: stripeSession.url,
          amount: parseFloat(amount.toString()),
          currency: currencyEnum,
        },
        message: "Payment initialized successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Deposit initialization error:", error);
    return NextResponse.json(
      {
        error: "Failed to initialize deposit",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// PUT: Verify and complete deposit
export async function PUT(request: Request) {
  try {
    const sessionResult = await verifySessionWithUser();

    if (!sessionResult?.session) {
      return NextResponse.json(
        { error: "Unauthenticated: Please log in.", success: false },
        { status: 401 }
      );
    }

    if (!sessionResult.user) {
      return NextResponse.json(
        { error: "Authenticated user not found", success: false },
        { status: 404 }
      );
    }

    const body = await request.json();
    const { reference, paymentId } = body;

    if (!reference) {
      return NextResponse.json(
        { error: "Payment reference is required" },
        { status: 400 }
      );
    }

    // Verify payment with Stripe
    const verificationResponse = await verifyStripePayment(reference);

    if (!verificationResponse.payment_status) {
      return NextResponse.json(
        { error: "Failed to verify payment" },
        { status: 400 }
      );
    }

    // Check if payment was successful
    if (verificationResponse.payment_status !== "paid") {
      // Update payment record
      if (paymentId) {
        await prisma.payment.update({
          where: { id: parseInt(paymentId) },
          data: {
            status: "FAILED",
            processedAt: new Date(),
          },
        });
      }

      return NextResponse.json(
        {
          error: "Payment was not successful",
          paymentStatus: verificationResponse.payment_status,
        },
        { status: 400 }
      );
    }

    // Find the payment record
    const payment = await prisma.payment.findFirst({
      where: { reference },
      include: { user: true },
    });

    if (!payment) {
      return NextResponse.json(
        { error: "Payment record not found" },
        { status: 404 }
      );
    }

    // Check if payment is already processed
    if (payment.status === "SUCCESS") {
      return NextResponse.json(
        {
          success: true,
          message: "Payment already processed",
          data: {
            paymentId: payment.id,
            amount: payment.amount,
            currency: payment.currency,
            reference: payment.reference,
          },
        },
        { status: 200 }
      );
    }

    // Start transaction to update payment and wallet
    const result = await prisma.$transaction(async (tx) => {
      // Update payment status
      const updatedPayment = await tx.payment.update({
        where: { id: payment.id },
        data: {
          status: "SUCCESS",
          processedAt: new Date(),
        },
      });

      // Get or create wallet
      let wallet = await tx.wallet.findUnique({
        where: { userId: payment.userId },
      });

      if (!wallet) {
        wallet = await tx.wallet.create({
          data: {
            userId: payment.userId,
            balance: payment.amount,
            currency: payment.currency,
          },
        });
      } else {
        // Update wallet balance
        wallet = await tx.wallet.update({
          where: { userId: payment.userId },
          data: {
            balance: {
              increment: payment.amount,
            },
            updatedAt: new Date(),
          },
        });
      }

      return { payment: updatedPayment, wallet };
    });

    return NextResponse.json(
      {
        success: true,
        message: "Deposit completed successfully",
        data: {
          paymentId: result.payment.id,
          amount: result.payment.amount,
          currency: result.payment.currency,
          newBalance: result.wallet.balance,
          reference: result.payment.reference,
          processedAt: result.payment.processedAt,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Deposit verification error:", error);
    return NextResponse.json(
      {
        error: "Failed to verify deposit",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const result = await verifySessionWithUser();

    if (!result?.session) {
      return NextResponse.json(
        { error: "Unauthenticated: Please log in.", success: false },
        { status: 401 }
      );
    }

    if (!result.user) {
      return NextResponse.json(
        { error: "Authenticated user not found", success: false },
        { status: 404 }
      );
    }

    const userId = result.user.id;

    const wallet = await prisma.wallet.findUnique({
      where: { userId: userId },
      select: {
        balance: true,
        currency: true,
        updatedAt: true,
      },
    });

    const finalWallet = wallet || {
      balance: 0,
      currency: Currency.USD,
      updatedAt: new Date(),
    };

    return NextResponse.json(
      {
        success: true,
        data: {
          balance: finalWallet.balance,
          currency: finalWallet.currency,
          updatedAt: finalWallet.updatedAt,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get wallet balance error:", error);
    return NextResponse.json(
      {
        error: "Failed to get wallet balance",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
