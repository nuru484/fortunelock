import { NextResponse } from "next/server";
import prisma from "@/config/prismaClient";
import { verifySession, getUser } from "@/lib/dataAccessLayer";
import { Currency } from "@/generated/prisma";

interface PortfolioResponse {
  success: boolean;
  message: string;
  portfolio: {
    id: number;
    totalGrams: number;
    totalInvested: number;
    currentValue: number;
    unrealizedGain: number;
    lastCalculatedAt: Date;
  };
  holdings: {
    id: number;
    amount: number;
    transactionId: number;
    createdAt: Date;
    transaction: {
      referenceNumber: string;
      pricePerGram: number;
      totalCost: number;
      currency: Currency;
      createdAt: Date;
    };
  }[];
  wallet: {
    balance: number;
    currency: Currency;
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

    // Fetch portfolio, holdings, and wallet
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

    const holdings = await prisma.holding.findMany({
      where: { userId: user.id },
      select: {
        id: true,
        amount: true,
        transactionId: true,
        createdAt: true,
        transaction: {
          select: {
            referenceNumber: true,
            pricePerGram: true,
            totalCost: true,
            currency: true,
            createdAt: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

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

    // Prepare response
    const response: PortfolioResponse = {
      success: true,
      message: "Portfolio retrieved successfully.",
      portfolio: portfolio || {
        id: 0,
        totalGrams: 0,
        totalInvested: 0,
        currentValue: 0,
        unrealizedGain: 0,
        lastCalculatedAt: new Date(),
      },
      holdings,
      wallet,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    return NextResponse.json(
      { error: "Failed to fetch portfolio.", success: false },
      { status: 500 }
    );
  }
}
