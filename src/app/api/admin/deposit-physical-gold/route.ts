// src/app/api/admin/deposit-physical-gold/route.ts
import { NextResponse } from "next/server";
import prisma from "@/config/prismaClient";
import { verifySessionWithUser } from "@/lib/dataAccessLayer";
import { v4 as uuidv4 } from "uuid";
import {
  Currency,
  TransactionSource,
  TransactionType,
  GoldItemType,
  DepositMethod,
  Role,
  Transaction,
  GoldItem,
  Portfolio,
} from "@/generated/prisma";

interface GoldItemInput {
  type: GoldItemType;
  description?: string;
  serialNumber?: string;
  karat?: number;
  purity?: number;
  weightGrams: number;
  origin?: string;
  storageLocation?: string;
}

interface PhysicalDepositRequest {
  userId: number;
  goldItem: GoldItemInput;
  pricePerGram: number;
  currency: Currency;
  adminNotes?: string;
}

interface SessionUser {
  id: number;
  role: Role;
  firstName: string;
  lastName: string;
  email: string;
}

interface SessionResult {
  session: unknown;
  user: SessionUser;
}

interface TransactionResponse {
  id: number;
  referenceNumber: string;
  type: TransactionType;
  source: TransactionSource;
  status: string;
  gramsPurchased: number;
  pricePerGram: number;
  totalCost: number;
  currency: Currency;
}

interface GoldItemResponse {
  id: number;
  type: GoldItemType;
  description: string | null;
  serialNumber: string | null;
  karat: number | null;
  purity: number | null;
  weightGrams: number;
  origin: string | null;
  storageLocation: string | null;
  verified: boolean;
  depositMethod: DepositMethod;
}

interface PortfolioResponse {
  totalGrams: number;
  totalInvested: number;
  currentValue: number;
}

interface PhysicalDepositResponse {
  message: string;
  success: boolean;
  transaction: TransactionResponse;
  goldItem: GoldItemResponse;
  portfolio: PortfolioResponse;
}

interface ErrorResponse {
  error: string;
  success: false;
}

interface TargetUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface ExistingGoldItem {
  id: number;
  serialNumber: string | null;
}

interface DatabaseError extends Error {
  code?: string;
}

interface GoldPriceRecord {
  pricePerGram: number;
}

interface TransactionResult {
  transaction: Transaction;
  goldItem: GoldItem;
  portfolio: Portfolio;
}

export async function POST(
  req: Request
): Promise<NextResponse<PhysicalDepositResponse | ErrorResponse>> {
  try {
    // Verify authentication and admin role
    const sessionResult =
      (await verifySessionWithUser()) as SessionResult | null;

    if (!sessionResult?.session) {
      return NextResponse.json(
        {
          error: "Unauthenticated: Please log in.",
          success: false,
        } as ErrorResponse,
        { status: 401 }
      );
    }

    if (!sessionResult.user) {
      return NextResponse.json(
        {
          error: "Authenticated user not found",
          success: false,
        } as ErrorResponse,
        { status: 404 }
      );
    }

    // Check if user is admin
    if (sessionResult.user.role !== Role.ADMIN) {
      return NextResponse.json(
        {
          error: "Access denied: Admin privileges required.",
          success: false,
        } as ErrorResponse,
        { status: 403 }
      );
    }

    const adminId = sessionResult.user.id;

    // Parse and validate request body
    const body: PhysicalDepositRequest = await req.json();
    const { userId, goldItem, pricePerGram, currency } = body;

    // Validate userId
    if (!userId || typeof userId !== "number") {
      const errorResponse: ErrorResponse = {
        error: "Invalid user ID provided.",
        success: false,
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Validate gold item data
    if (!goldItem || typeof goldItem !== "object") {
      const errorResponse: ErrorResponse = {
        error: "Invalid gold item data provided.",
        success: false,
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Validate weight
    if (!goldItem.weightGrams || goldItem.weightGrams <= 0) {
      const errorResponse: ErrorResponse = {
        error: "Invalid weight. Weight must be greater than 0.",
        success: false,
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Validate gold item type
    const validTypes: GoldItemType[] = ["BAR", "COIN", "JEWELRY", "OTHER"];
    if (!goldItem.type || !validTypes.includes(goldItem.type)) {
      const errorResponse: ErrorResponse = {
        error: `Invalid gold item type. Supported types: ${validTypes.join(
          ", "
        )}`,
        success: false,
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Validate price per gram
    if (!pricePerGram || pricePerGram <= 0) {
      const errorResponse: ErrorResponse = {
        error: "Invalid price per gram. Must be greater than 0.",
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

    // Validate karat if provided
    if (goldItem.karat && (goldItem.karat < 1 || goldItem.karat > 24)) {
      const errorResponse: ErrorResponse = {
        error: "Invalid karat value. Must be between 1 and 24.",
        success: false,
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Validate purity if provided
    if (goldItem.purity && (goldItem.purity < 0 || goldItem.purity > 1)) {
      const errorResponse: ErrorResponse = {
        error: "Invalid purity value. Must be between 0 and 1.",
        success: false,
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Check if user exists
    const targetUser = (await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, firstName: true, lastName: true, email: true },
    })) as TargetUser | null;

    if (!targetUser) {
      const errorResponse: ErrorResponse = {
        error: "Target user not found.",
        success: false,
      };
      return NextResponse.json(errorResponse, { status: 404 });
    }

    // Check for duplicate serial number if provided
    if (goldItem.serialNumber) {
      const existingItem = (await prisma.goldItem.findUnique({
        where: { serialNumber: goldItem.serialNumber },
      })) as ExistingGoldItem | null;

      if (existingItem) {
        const errorResponse: ErrorResponse = {
          error: `Gold item with serial number ${goldItem.serialNumber} already exists.`,
          success: false,
        };
        return NextResponse.json(errorResponse, { status: 409 });
      }
    }

    const totalCost = parseFloat(
      (goldItem.weightGrams * pricePerGram).toFixed(4)
    );

    // Execute transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create transaction record with PHYSICAL_DEPOSIT source
      const transaction = await tx.transaction.create({
        data: {
          referenceNumber: `DEP-${uuidv4()}`,
          userId,
          type: TransactionType.PURCHASE,
          source: TransactionSource.PHYSICAL_DEPOSIT,
          status: "SUCCESS",
          gramsPurchased: goldItem.weightGrams,
          pricePerGram,
          totalCost,
          fee: null, // No fee for physical deposits
          currency,
        },
      });

      // Create gold item record
      const createdGoldItem = await tx.goldItem.create({
        data: {
          userId,
          transactionId: transaction.id,
          type: goldItem.type,
          description: goldItem.description || null,
          serialNumber: goldItem.serialNumber || null,
          karat: goldItem.karat || null,
          purity: goldItem.purity || null,
          weightGrams: goldItem.weightGrams,
          origin: goldItem.origin || null,
          storageLocation: goldItem.storageLocation || null,
          depositMethod: DepositMethod.PHYSICAL,
          verified: true, // Admin deposits are automatically verified
          verifiedBy: adminId,
        },
      });

      // Update or create portfolio
      const existingPortfolio = await tx.portfolio.findUnique({
        where: { userId },
      });

      let updatedPortfolio: Portfolio;

      if (existingPortfolio) {
        const newTotalGrams = parseFloat(
          (existingPortfolio.totalGrams + goldItem.weightGrams).toFixed(6)
        );
        const newTotalInvested = parseFloat(
          (existingPortfolio.totalInvested + totalCost).toFixed(4)
        );

        // Get current gold price for calculating current value
        const currentPrice = (await tx.goldPrice.findFirst({
          where: { currency, isActive: true },
          orderBy: { recordedAt: "desc" },
          select: { pricePerGram: true },
        })) as GoldPriceRecord | null;

        const currentGoldPrice = currentPrice?.pricePerGram || pricePerGram;
        const newCurrentValue = parseFloat(
          (newTotalGrams * currentGoldPrice).toFixed(4)
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
        // Get current gold price for new portfolio
        const currentPrice = (await tx.goldPrice.findFirst({
          where: { currency, isActive: true },
          orderBy: { recordedAt: "desc" },
          select: { pricePerGram: true },
        })) as GoldPriceRecord | null;

        const currentGoldPrice = currentPrice?.pricePerGram || pricePerGram;
        const currentValue = parseFloat(
          (goldItem.weightGrams * currentGoldPrice).toFixed(4)
        );

        updatedPortfolio = await tx.portfolio.create({
          data: {
            userId,
            totalGrams: goldItem.weightGrams,
            totalInvested: totalCost,
            currentValue,
            unrealizedGain: parseFloat((currentValue - totalCost).toFixed(4)),
            lastCalculatedAt: new Date(),
          },
        });
      }

      return {
        transaction,
        goldItem: createdGoldItem,
        portfolio: updatedPortfolio,
      } as TransactionResult;
    });

    // Prepare successful response
    const successResponse: PhysicalDepositResponse = {
      message: `Successfully deposited ${goldItem.weightGrams} grams of physical gold for user ${targetUser.firstName} ${targetUser.lastName}.`,
      success: true,
      transaction: {
        id: result.transaction.id,
        referenceNumber: result.transaction.referenceNumber,
        type: result.transaction.type,
        source: result.transaction.source,
        status: result.transaction.status,
        gramsPurchased: result.transaction.gramsPurchased,
        pricePerGram: result.transaction.pricePerGram,
        totalCost: result.transaction.totalCost,
        currency: result.transaction.currency,
      },
      goldItem: {
        id: result.goldItem.id,
        type: result.goldItem.type,
        description: result.goldItem.description,
        serialNumber: result.goldItem.serialNumber,
        karat: result.goldItem.karat,
        purity: result.goldItem.purity,
        weightGrams: result.goldItem.weightGrams,
        origin: result.goldItem.origin,
        storageLocation: result.goldItem.storageLocation,
        verified: result.goldItem.verified,
        depositMethod: result.goldItem.depositMethod,
      },
      portfolio: {
        totalGrams: result.portfolio.totalGrams,
        totalInvested: result.portfolio.totalInvested,
        currentValue: result.portfolio.currentValue,
      },
    };

    return NextResponse.json(successResponse, { status: 201 });
  } catch (error: unknown) {
    console.error("Error depositing physical gold:", error);

    // Handle specific database errors
    if (error && typeof error === "object" && "code" in error) {
      const dbError = error as DatabaseError;

      if (dbError.code === "P2002") {
        const errorResponse: ErrorResponse = {
          error:
            "Duplicate entry conflict. Please check serial number or reference.",
          success: false,
        };
        return NextResponse.json(errorResponse, { status: 409 });
      }

      if (dbError.code === "P2025") {
        const errorResponse: ErrorResponse = {
          error: "Required record not found. Please verify user ID.",
          success: false,
        };
        return NextResponse.json(errorResponse, { status: 404 });
      }
    }

    // Generic error handling
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    const errorResponse: ErrorResponse = {
      error: `Physical gold deposit failed: ${errorMessage}. Please try again or contact support.`,
      success: false,
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
