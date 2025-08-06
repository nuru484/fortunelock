// src/app/api/gold/buy/route.ts
import { NextResponse } from "next/server";
import prisma from "@/config/prismaClient";
import { verifySession, getUser } from "@/lib/dataAccessLayer";
import { v4 as uuidv4 } from "uuid";
import { fetchGoldPrice } from "@/utils/goldPriceApi";

// Types based on Prisma schema
interface PurchaseRequest {
  grams: number;
  currency: "USD" | "EUR" | "GHS" | "NGN" | "GBP";
}

interface Wallet {
  id: number;
  userId: number;
  balance: number;
  currency: string;
}

interface User {
  id: number;
}

interface Transaction {
  id: number;
  referenceNumber: string;
  userId: number;
  type: "PURCHASE" | "SALE";
  status: "PENDING" | "SUCCESS" | "FAILED";
  gramsPurchased: number;
  pricePerGram: number;
  totalCost: number;
  fee: number | null;
  currency: string;
}

interface Portfolio {
  id: number;
  userId: number;
  totalGrams: number;
  totalInvested: number;
  currentValue: number;
}

// POST /api/gold/purchase - Purchase gold
export async function POST(req: Request): Promise<NextResponse> {
  try {
    const session = await verifySession();
    if (!session) {
      return NextResponse.json(
        { error: "Unauthenticated: Please log in." },
        { status: 401 }
      );
    }

    const { grams, currency }: PurchaseRequest = await req.json();

    // Validation
    if (!grams || grams <= 0 || typeof grams !== "number") {
      return NextResponse.json(
        { error: "Invalid grams amount." },
        { status: 400 }
      );
    }

    const validCurrencies: string[] = ["USD", "EUR", "GHS", "NGN", "GBP"];
    if (!currency || !validCurrencies.includes(currency)) {
      return NextResponse.json({ error: "Invalid currency." }, { status: 400 });
    }

    const user: User | null = await getUser();
    if (!user) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    const wallet: Wallet | null = await prisma.wallet.findUnique({
      where: { userId: user.id },
    });
    if (!wallet) {
      return NextResponse.json({ error: "Wallet not found." }, { status: 404 });
    }

    // Fetch gold price
    const pricePerGram = await fetchGoldPrice(currency);
    if (!pricePerGram) {
      return NextResponse.json(
        { error: "Failed to fetch current gold price." },
        { status: 500 }
      );
    }

    const totalCost: number = grams * pricePerGram;
    const transactionFee: number = totalCost * 0.01; // 1% platform fee
    const totalAmount: number = totalCost + transactionFee;

    // Check wallet balance
    if (wallet.balance < totalAmount) {
      return NextResponse.json(
        {
          error: "Insufficient wallet balance.",
          required: totalAmount,
          available: wallet.balance,
        },
        { status: 400 }
      );
    }

    // Complete Transaction
    const result: Transaction = await prisma.$transaction(async (tx) => {
      // Create transaction record
      const transaction = await tx.transaction.create({
        data: {
          referenceNumber: `TXN-${uuidv4()}`,
          userId: user.id,
          type: "PURCHASE",
          status: "SUCCESS",
          gramsPurchased: grams,
          pricePerGram,
          totalCost: totalCost,
          fee: transactionFee,
          currency,
        },
      });

      // Create holding
      await tx.holding.create({
        data: {
          userId: user.id,
          transactionId: transaction.id,
          amount: grams,
        },
      });

      // Update or create portfolio
      const portfolio: Portfolio | null = await tx.portfolio.findUnique({
        where: { userId: user.id },
      });
      if (portfolio) {
        await tx.portfolio.update({
          where: { id: portfolio.id },
          data: {
            totalGrams: portfolio.totalGrams + grams,
            totalInvested: portfolio.totalInvested + totalCost,
            currentValue: portfolio.currentValue + totalCost,
            lastCalculatedAt: new Date(),
          },
        });
      } else {
        await tx.portfolio.create({
          data: {
            userId: user.id,
            totalGrams: grams,
            totalInvested: totalCost,
            currentValue: totalCost,
            unrealizedGain: 0,
          },
        });
      }

      // Deduct from wallet
      await tx.wallet.update({
        where: { id: wallet.id },
        data: { balance: wallet.balance - totalAmount },
      });

      return transaction;
    });

    return NextResponse.json(
      {
        message: `Successfully purchased ${grams} grams of gold.`,
        transaction: result,
        payment: {
          method: "WALLET",
          totalAmount,
          breakdown: {
            goldCost: totalCost,
            platformFee: transactionFee,
            processingFee: 0,
          },
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Error purchasing gold:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `An unexpected error occurred: ${errorMessage}` },
      { status: 500 }
    );
  }
}
