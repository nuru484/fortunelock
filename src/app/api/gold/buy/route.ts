// src/app/api/gold/buy/route.ts
import { NextResponse } from "next/server";
import prisma from "@/config/prismaClient";
import { verifySession, getUser } from "@/lib/dataAccessLayer";
import { v4 as uuidv4 } from "uuid";
import { Currency } from "@/generated/prisma";

interface PurchaseRequest {
  grams: number;
  currency: Currency;
}

interface WalletData {
  id: number;
  userId: number;
  balance: number;
  currency: Currency;
  updatedAt: Date;
}

interface UserData {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

interface PortfolioData {
  id: number;
  userId: number;
  totalGrams: number;
  totalInvested: number;
  currentValue: number;
  unrealizedGain: number;
}

interface GoldPriceData {
  pricePerGram: number;
}

interface TransactionBreakdown {
  goldCost: number;
  platformFee: number;
  totalAmount: number;
}

interface TransactionResult {
  id: number;
  referenceNumber: string;
  userId: number;
  type: string;
  status: string;
  gramsPurchased: number;
  pricePerGram: number;
  totalCost: number;
  fee: number | null;
  currency: Currency;
  createdAt: Date;
  updatedAt: Date;
}

interface PurchaseResponse {
  message: string;
  success: boolean;
  transaction: TransactionResult;
  breakdown: TransactionBreakdown;
  portfolio: {
    totalGrams: number;
    totalInvested: number;
    currentValue: number;
  };
  wallet: {
    newBalance: number;
    currency: Currency;
  };
}

interface ErrorResponse {
  error: string;
  success: false;
  required?: number;
  available?: number;
}

export async function POST(req: Request): Promise<NextResponse> {
  try {
    // Verify authentication
    const session = await verifySession();
    if (!session) {
      const errorResponse: ErrorResponse = {
        error: "Unauthenticated: Please log in.",
        success: false,
      };
      return NextResponse.json(errorResponse, { status: 401 });
    }

    // Parse and validate request body
    const body: PurchaseRequest = await req.json();
    const { grams, currency } = body;

    // Validate grams
    if (!grams || grams <= 0 || typeof grams !== "number" || grams < 0.01) {
      const errorResponse: ErrorResponse = {
        error: "Invalid grams amount. Minimum purchase is 0.01 grams.",
        success: false,
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Validate currency
    const validCurrencies: Currency[] = ["USD", "EUR", "GBP", "KWD"];
    if (!currency || !validCurrencies.includes(currency)) {
      const errorResponse: ErrorResponse = {
        error: `Invalid currency: ${currency}. Supported currencies: ${validCurrencies.join(
          ", "
        )}`,
        success: false,
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Get user
    const user: UserData | null = await getUser();
    if (!user) {
      const errorResponse: ErrorResponse = {
        error: "User not found.",
        success: false,
      };
      return NextResponse.json(errorResponse, { status: 404 });
    }

    // Get wallet
    const wallet: WalletData | null = await prisma.wallet.findUnique({
      where: { userId: user.id },
    });

    if (!wallet) {
      const errorResponse: ErrorResponse = {
        error: "Wallet not found. Please contact support.",
        success: false,
      };
      return NextResponse.json(errorResponse, { status: 404 });
    }

    // Check wallet currency matches requested currency
    if (wallet.currency !== currency) {
      const errorResponse: ErrorResponse = {
        error: `Wallet currency (${wallet.currency}) does not match requested currency (${currency}). Please use ${wallet.currency} or switch wallet currency.`,
        success: false,
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Fetch current gold price
    const goldPriceRecord: GoldPriceData | null =
      await prisma.goldPrice.findFirst({
        where: {
          currency,
          isActive: true,
        },
        orderBy: { recordedAt: "desc" },
        select: { pricePerGram: true },
      });

    if (!goldPriceRecord?.pricePerGram || goldPriceRecord.pricePerGram <= 0) {
      const errorResponse: ErrorResponse = {
        error: "Failed to fetch current gold price. Please try again later.",
        success: false,
      };
      return NextResponse.json(errorResponse, { status: 503 });
    }

    const pricePerGram = goldPriceRecord.pricePerGram;
    const goldCost = parseFloat((grams * pricePerGram).toFixed(4));
    const platformFee = parseFloat((goldCost * 0.01).toFixed(4)); // 1% platform fee
    const totalAmount = parseFloat((goldCost + platformFee).toFixed(4));

    // Check wallet balance
    if (wallet.balance < totalAmount) {
      const shortfall = parseFloat((totalAmount - wallet.balance).toFixed(4));
      const errorResponse: ErrorResponse = {
        error: `Insufficient wallet balance. You need ${shortfall.toFixed(
          4
        )} ${currency} more.`,
        success: false,
        required: totalAmount,
        available: wallet.balance,
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Execute transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create transaction record
      const transaction: TransactionResult = await tx.transaction.create({
        data: {
          referenceNumber: `TXN-${uuidv4()}`,
          userId: user.id,
          type: "PURCHASE",
          status: "SUCCESS",
          gramsPurchased: grams,
          pricePerGram,
          totalCost: goldCost,
          fee: platformFee,
          currency,
        },
      });

      // Create holding record
      await tx.holding.create({
        data: {
          userId: user.id,
          transactionId: transaction.id,
          amount: grams,
        },
      });

      // Update or create portfolio
      const existingPortfolio: PortfolioData | null =
        await tx.portfolio.findUnique({
          where: { userId: user.id },
        });

      let updatedPortfolio: PortfolioData;

      if (existingPortfolio) {
        const newTotalGrams = parseFloat(
          (existingPortfolio.totalGrams + grams).toFixed(6)
        );
        const newTotalInvested = parseFloat(
          (existingPortfolio.totalInvested + goldCost).toFixed(4)
        );
        const newCurrentValue = parseFloat(
          (existingPortfolio.currentValue + goldCost).toFixed(4)
        );

        updatedPortfolio = await tx.portfolio.update({
          where: { id: existingPortfolio.id },
          data: {
            totalGrams: newTotalGrams,
            totalInvested: newTotalInvested,
            currentValue: newCurrentValue,
            unrealizedGain: parseFloat(
              (newCurrentValue - newTotalInvested).toFixed(4)
            ),
            lastCalculatedAt: new Date(),
          },
        });
      } else {
        updatedPortfolio = await tx.portfolio.create({
          data: {
            userId: user.id,
            totalGrams: grams,
            totalInvested: goldCost,
            currentValue: goldCost,
            unrealizedGain: 0,
            lastCalculatedAt: new Date(),
          },
        });
      }

      // Deduct from wallet balance
      const newWalletBalance = parseFloat(
        (wallet.balance - totalAmount).toFixed(4)
      );
      await tx.wallet.update({
        where: { id: wallet.id },
        data: {
          balance: newWalletBalance,
          updatedAt: new Date(),
        },
      });

      return {
        transaction,
        portfolio: updatedPortfolio,
        newWalletBalance,
      };
    });

    // Prepare successful response
    const successResponse: PurchaseResponse = {
      message: `Successfully purchased ${grams} grams of gold.`,
      success: true,
      transaction: result.transaction,
      breakdown: {
        goldCost,
        platformFee,
        totalAmount,
      },
      portfolio: {
        totalGrams: result.portfolio.totalGrams,
        totalInvested: result.portfolio.totalInvested,
        currentValue: result.portfolio.currentValue,
      },
      wallet: {
        newBalance: result.newWalletBalance,
        currency: wallet.currency,
      },
    };

    return NextResponse.json(successResponse, { status: 201 });
  } catch (error: unknown) {
    console.error("Error purchasing gold:", error);

    // Handle specific database errors
    if (error && typeof error === "object" && "code" in error) {
      const dbError = error as { code: string; message: string };

      if (dbError.code === "P2002") {
        const errorResponse: ErrorResponse = {
          error: "Transaction reference conflict. Please try again.",
          success: false,
        };
        return NextResponse.json(errorResponse, { status: 409 });
      }

      if (dbError.code === "P2025") {
        const errorResponse: ErrorResponse = {
          error: "Required record not found. Please refresh and try again.",
          success: false,
        };
        return NextResponse.json(errorResponse, { status: 404 });
      }
    }

    // Generic error handling
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    const errorResponse: ErrorResponse = {
      error: `Transaction failed: ${errorMessage}. Please try again or contact support.`,
      success: false,
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
