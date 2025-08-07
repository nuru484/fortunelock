import { NextResponse } from "next/server";
import prisma from "@/config/prismaClient";
import { verifySession, getUser } from "@/lib/dataAccessLayer";
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
    // Verify authentication
    const session = await verifySession();
    if (!session) {
      return NextResponse.json(
        { error: "Unauthenticated: Please log in.", success: false },
        { status: 401 }
      );
    }

    // Get user
    const user = await getUser();
    if (!user) {
      return NextResponse.json(
        { error: "User not found.", success: false },
        { status: 404 }
      );
    }

    // Fetch portfolio
    const portfolio = await prisma.portfolio.findUnique({
      where: { userId: user.id },
      select: {
        id: true,
        totalGrams: true,
        totalInvested: true,
        currentValue: true,
        unrealizedGain: true,
        lastCalculatedAt: true,
      },
    });

    // Fetch wallet
    const wallet = await prisma.wallet.findUnique({
      where: { userId: user.id },
      select: { balance: true, currency: true },
    });

    if (!wallet) {
      return NextResponse.json(
        { error: "Wallet not found.", success: false },
        { status: 404 }
      );
    }

    // Fetch recent transactions (last 5)
    const recentTransactions = await prisma.transaction.findMany({
      where: { userId: user.id },
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
    });

    // Fetch current gold price
    const goldPrice = await prisma.goldPrice.findFirst({
      where: { currency: wallet.currency, isActive: true },
      select: { pricePerGram: true, currency: true, recordedAt: true },
      orderBy: { recordedAt: "desc" },
    });

    if (!goldPrice) {
      return NextResponse.json(
        { error: "Failed to fetch gold price.", success: false },
        { status: 503 }
      );
    }

    // Prepare response
    const response: DashboardResponse = {
      success: true,
      message: "Dashboard data retrieved successfully.",
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        country: user.country,
        role: user.role,
      },
      portfolio: portfolio || {
        id: 0,
        totalGrams: 0,
        totalInvested: 0,
        currentValue: 0,
        unrealizedGain: 0,
        lastCalculatedAt: new Date(),
      },
      wallet,
      recentTransactions,
      goldPrice,
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
