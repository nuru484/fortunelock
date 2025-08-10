// src/app/api/portfolio/route.ts
import { NextResponse } from "next/server";
import prisma from "@/config/prismaClient";
import { verifySessionWithUser } from "@/lib/dataAccessLayer";
import { Currency, TransactionSource } from "@/generated/prisma";

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
  onlineHoldings: {
    totalGrams: number;
    totalInvested: number;
    currentValue: number;
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
        source: TransactionSource;
      };
    }[];
  };
  physicalHoldings: {
    totalGrams: number;
    totalInvested: number;
    currentValue: number;
    goldItems: {
      id: number;
      type: string;
      description: string | null;
      serialNumber: string | null;
      karat: number | null;
      purity: number | null;
      weightGrams: number;
      origin: string | null;
      storageLocation: string | null;
      verified: boolean;
      createdAt: Date;
      transaction: {
        referenceNumber: string;
        pricePerGram: number;
        totalCost: number;
        currency: Currency;
        createdAt: Date;
      };
    }[];
  };
  wallet: {
    balance: number;
    currency: Currency;
  };
  performanceMetrics: {
    totalReturn: number;
    totalReturnPercentage: number;
    averagePurchasePrice: number;
    currentGoldPrice: number;
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

    // Fetch all data in parallel
    const [
      portfolio,
      onlineHoldings,
      physicalGoldItems,
      wallet,
      currentGoldPrice,
    ] = await Promise.all([
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

      // Online holdings (purchased through the platform)
      prisma.holding.findMany({
        where: {
          userId,
          transaction: {
            source: TransactionSource.ONLINE,
          },
        },
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
              source: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
      }),

      // Physical gold items (deposited physically)
      prisma.goldItem.findMany({
        where: {
          userId,
          transaction: {
            source: TransactionSource.PHYSICAL_DEPOSIT,
          },
        },
        select: {
          id: true,
          type: true,
          description: true,
          serialNumber: true,
          karat: true,
          purity: true,
          weightGrams: true,
          origin: true,
          storageLocation: true,
          verified: true,
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
      }),

      // Wallet
      prisma.wallet.findUnique({
        where: { userId },
        select: { balance: true, currency: true },
      }),

      // Current gold price
      prisma.goldPrice.findFirst({
        where: { isActive: true },
        orderBy: { recordedAt: "desc" },
        select: { pricePerGram: true, currency: true },
      }),
    ]);

    // Default wallet if doesn't exist
    let finalWallet = wallet;
    if (!finalWallet) {
      finalWallet = { balance: 0, currency: Currency.USD };
    }

    // Calculate online holdings metrics
    const onlineMetrics = {
      totalGrams: onlineHoldings.reduce(
        (sum, holding) => sum + holding.amount,
        0
      ),
      totalInvested: onlineHoldings.reduce(
        (sum, holding) => sum + holding.transaction.totalCost,
        0
      ),
      currentValue: 0,
    };

    // Calculate physical holdings metrics
    const physicalMetrics = {
      totalGrams: physicalGoldItems.reduce(
        (sum, item) => sum + item.weightGrams,
        0
      ),
      totalInvested: physicalGoldItems.reduce(
        (sum, item) => sum + item.transaction.totalCost,
        0
      ),
      currentValue: 0,
    };

    // Calculate current values based on current gold price
    if (currentGoldPrice) {
      onlineMetrics.currentValue =
        onlineMetrics.totalGrams * currentGoldPrice.pricePerGram;
      physicalMetrics.currentValue =
        physicalMetrics.totalGrams * currentGoldPrice.pricePerGram;
    }

    // Calculate performance metrics
    const totalGrams = onlineMetrics.totalGrams + physicalMetrics.totalGrams;
    const totalInvested =
      onlineMetrics.totalInvested + physicalMetrics.totalInvested;
    const totalCurrentValue =
      onlineMetrics.currentValue + physicalMetrics.currentValue;
    const totalReturn = totalCurrentValue - totalInvested;
    const totalReturnPercentage =
      totalInvested > 0 ? (totalReturn / totalInvested) * 100 : 0;
    const averagePurchasePrice =
      totalGrams > 0 ? totalInvested / totalGrams : 0;

    // Prepare response
    const response: PortfolioResponse = {
      success: true,
      message: "Portfolio retrieved successfully.",
      portfolio: portfolio || {
        id: 0,
        totalGrams: totalGrams,
        totalInvested: totalInvested,
        currentValue: totalCurrentValue,
        unrealizedGain: totalReturn,
        lastCalculatedAt: new Date(),
      },
      onlineHoldings: {
        ...onlineMetrics,
        holdings: onlineHoldings,
      },
      physicalHoldings: {
        ...physicalMetrics,
        goldItems: physicalGoldItems,
      },
      wallet: finalWallet,
      performanceMetrics: {
        totalReturn,
        totalReturnPercentage,
        averagePurchasePrice,
        currentGoldPrice: currentGoldPrice?.pricePerGram || 0,
      },
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    return NextResponse.json(
      { error: `Failed to fetch portfolio: ${error}`, success: false },
      { status: 500 }
    );
  }
}
