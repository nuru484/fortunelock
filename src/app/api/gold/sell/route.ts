// src/app/api/gold/sell/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/config/prismaClient";
import { verifySession, getUser } from "@/lib/dataAccessLayer";
import { v4 as uuidv4 } from "uuid";
import { fetchGoldPrice } from "@/utils/goldPriceApi";
import {
  Currency,
  TransactionType,
  TransactionStatus,
} from "@/generated/prisma";

// Request body type
interface SellGoldRequest {
  grams: number;
  currency: Currency;
}

// Response types
interface SellGoldResponse {
  message: string;
  transaction: {
    id: number;
    referenceNumber: string;
    userId: number;
    type: TransactionType;
    status: TransactionStatus;
    gramsPurchased: number;
    pricePerGram: number;
    totalCost: number;
    fee: number | null;
    currency: Currency;
    createdAt: Date;
    updatedAt: Date;
    paymentId: number | null;
  };
  totalValue: number;
  fee: number;
  netProceeds: number;
  pricePerGram: number;
}

interface ErrorResponse {
  error: string;
  available?: number;
  requested?: number;
}

// POST /api/gold/sell - Sell gold
export async function PATCH(
  req: NextRequest
): Promise<NextResponse<SellGoldResponse | ErrorResponse>> {
  try {
    const session = await verifySession();
    if (!session) {
      return NextResponse.json<ErrorResponse>(
        { error: "Unauthenticated: Please log in." },
        { status: 401 }
      );
    }

    const body: SellGoldRequest = await req.json();
    const { grams, currency } = body;

    // Validate grams input
    if (!grams || grams <= 0 || typeof grams !== "number") {
      return NextResponse.json<ErrorResponse>(
        { error: "Invalid grams amount." },
        { status: 400 }
      );
    }

    // Validate currency
    const validCurrencies: Currency[] = Object.values(Currency);
    if (!currency || !validCurrencies.includes(currency)) {
      return NextResponse.json<ErrorResponse>(
        { error: "Invalid currency." },
        { status: 400 }
      );
    }

    const user = await getUser();

    if (!user) {
      return NextResponse.json<ErrorResponse>(
        { error: "User not found." },
        { status: 404 }
      );
    }

    // Check portfolio holdings
    const portfolio = await prisma.portfolio.findUnique({
      where: { userId: user?.id },
    });

    if (!portfolio || portfolio.totalGrams < grams) {
      return NextResponse.json<ErrorResponse>(
        {
          error: "Insufficient gold holdings.",
          available: portfolio?.totalGrams || 0,
          requested: grams,
        },
        { status: 400 }
      );
    }

    const wallet = await prisma.wallet.findUnique({
      where: { userId: user?.id },
    });

    if (!wallet) {
      return NextResponse.json<ErrorResponse>(
        { error: "Wallet not found." },
        { status: 404 }
      );
    }

    // Fetch current gold price
    let goldPrice = await prisma.goldPrice.findFirst({
      where: { currency, isActive: true },
      orderBy: { recordedAt: "desc" },
    });

    let pricePerGram: number;

    if (!goldPrice) {
      const fetchedPrice = await fetchGoldPrice(currency);
      if (!fetchedPrice) {
        return NextResponse.json<ErrorResponse>(
          { error: "Failed to fetch current gold price." },
          { status: 500 }
        );
      }

      pricePerGram = fetchedPrice;

      goldPrice = await prisma.goldPrice.create({
        data: {
          pricePerGram,
          currency,
          source: "External API",
          recordedAt: new Date(),
          isActive: true,
        },
      });
    } else {
      pricePerGram = goldPrice.pricePerGram;
    }

    const totalValue: number = grams * pricePerGram;
    const fee: number = totalValue * 0.01; // 1% transaction fee
    const netProceeds: number = totalValue - fee;

    // Use transaction for atomicity
    const result = await prisma.$transaction(async (tx) => {
      // Create transaction record
      const transaction = await tx.transaction.create({
        data: {
          referenceNumber: `TXN-${uuidv4()}`,
          userId: user.id,
          type: TransactionType.SALE,
          status: TransactionStatus.SUCCESS,
          gramsPurchased: -grams, // Negative for sale
          pricePerGram,
          totalCost: totalValue,
          fee,
          currency,
        },
      });

      // Deduct from holdings using FIFO (First In, First Out)
      const holdings = await tx.holding.findMany({
        where: {
          userId: user?.id,
          amount: { gt: 0 }, // Only get holdings with positive amounts
        },
        orderBy: { createdAt: "asc" },
      });

      let remainingGrams: number = grams;
      for (const holding of holdings) {
        if (remainingGrams <= 0) break;

        const deduct: number = Math.min(holding.amount, remainingGrams);
        await tx.holding.update({
          where: { id: holding.id },
          data: { amount: holding.amount - deduct },
        });
        remainingGrams -= deduct;
      }

      // Calculate unrealized gain impact
      const avgCostPerGram: number =
        portfolio.totalInvested / portfolio.totalGrams;
      const gainFromSale: number = (pricePerGram - avgCostPerGram) * grams;

      // Update portfolio
      await tx.portfolio.update({
        where: { id: portfolio.id },
        data: {
          totalGrams: portfolio.totalGrams - grams,
          totalInvested: portfolio.totalInvested - avgCostPerGram * grams,
          currentValue: portfolio.currentValue - totalValue,
          unrealizedGain: portfolio.unrealizedGain - gainFromSale,
          lastCalculatedAt: new Date(),
        },
      });

      // Credit wallet with net proceeds
      await tx.wallet.update({
        where: { id: wallet.id },
        data: { balance: wallet.balance + netProceeds },
      });

      return transaction;
    });

    return NextResponse.json<SellGoldResponse>(
      {
        message: `Successfully sold ${grams} grams of gold.`,
        transaction: result,
        totalValue,
        fee,
        netProceeds,
        pricePerGram,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error selling gold:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json<ErrorResponse>(
      { error: `An unexpected error occurred: ${errorMessage}` },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
