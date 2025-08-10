// src/app/api/dashboard/route.ts
import { NextResponse } from "next/server";
import prisma from "@/config/prismaClient";
import { verifySessionWithUser } from "@/lib/dataAccessLayer";
import { Currency } from "@/generated/prisma";

interface DashboardResponse {
  success: boolean;
  message: string;
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    country: string;
    role: string;
  };
  portfolio: {
    id: number;
    totalGrams: number;
    totalInvested: number;
    currentValue: number;
    unrealizedGain: number;
    lastCalculatedAt: Date;
  };
  wallet: {
    balance: number;
    currency: Currency;
  };
  recentTransactions: {
    id: number;
    referenceNumber: string;
    type: string;
    status: string;
    gramsPurchased: number;
    totalCost: number;
    currency: Currency;
    createdAt: Date;
  }[];
  goldPrice: {
    pricePerGram: number;
    currency: Currency;
    recordedAt: Date;
  };
}

export async function GET(): Promise<NextResponse> {
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

    // Fetch all user-owned resources in parallel
    // No additional ownership checks needed since we're filtering by user.id
    const [portfolio, wallet, recentTransactions] = await Promise.all([
      // Portfolio - owned by user.id
      prisma.portfolio.findUnique({
        where: { userId },
        select: {
          id: true,
          totalGrams: true,
          totalInvested: true,
          currentValue: true,
          unrealizedGain: true,
          lastCalculatedAt: true,
        },
      }),

      // Wallet - owned by user.id
      prisma.wallet.findUnique({
        where: { userId },
        select: { balance: true, currency: true },
      }),

      // Transactions - owned by user.id
      prisma.transaction.findMany({
        where: { userId },
        select: {
          id: true,
          referenceNumber: true,
          type: true,
          status: true,
          gramsPurchased: true,
          totalCost: true,
          currency: true,
          createdAt: true,
        },
        orderBy: { createdAt: "desc" },
        take: 5,
      }),
    ]);

    let finalWallet = wallet;
    if (!finalWallet) {
      finalWallet = { balance: 0, currency: Currency.USD };
    }

    // Fetch current gold price
    const goldPrice = await prisma.goldPrice.findFirst({
      where: { currency: finalWallet.currency, isActive: true },
      select: { pricePerGram: true, currency: true, recordedAt: true },
      orderBy: { recordedAt: "desc" },
    });

    let finalGoldPrice = goldPrice;
    if (!finalGoldPrice) {
      finalGoldPrice = {
        pricePerGram: 0,
        currency: finalWallet.currency,
        recordedAt: new Date(),
      };
    }

    // Prepare response
    const response: DashboardResponse = {
      success: true,
      message: "Dashboard data retrieved successfully.",
      user: {
        id: userId,
        email: result.user.email,
        firstName: result.user.firstName,
        lastName: result.user.lastName,
        country: result.user.country,
        role: result.user.role,
      },
      portfolio: portfolio || {
        id: 0,
        totalGrams: 0,
        totalInvested: 0,
        currentValue: 0,
        unrealizedGain: 0,
        lastCalculatedAt: new Date(),
      },
      wallet: {
        balance: finalWallet.balance,
        currency: finalWallet.currency,
      },
      recentTransactions,
      goldPrice: finalGoldPrice,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard data.", success: false },
      { status: 500 }
    );
  }
}
