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
  depositDate?: string;
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
    const { userId, goldItem, pricePerGram, currency, depositDate } = body;

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

    // Validate deposit date if provided
    let createdAtDate: Date = new Date();
    if (depositDate) {
      const parsedDate = new Date(depositDate);
      if (isNaN(parsedDate.getTime())) {
        const errorResponse: ErrorResponse = {
          error: "Invalid deposit date provided.",
          success: false,
        };
        return NextResponse.json(errorResponse, { status: 400 });
      }
      createdAtDate = parsedDate;
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
          createdAt: createdAtDate,
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
          createdAt: createdAtDate,
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
            lastCalculatedAt: createdAtDate,
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
            lastCalculatedAt: createdAtDate,
            createdAt: createdAtDate,
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

interface PhysicalUpdateRequest {
  id: number;
  goldItem: GoldItemInput;
  pricePerGram?: number;
  currency?: Currency;
  depositDate?: string;
}

interface SessionUser {
  id: number;
  role: Role;
}

interface SessionResult {
  session: unknown;
  user: SessionUser;
}

interface PhysicalUpdateResponse {
  message: string;
  success: boolean;
  transaction: {
    id: number;
    referenceNumber: string;
    type: TransactionType;
    source: TransactionSource;
    status: string;
    gramsPurchased: number;
    pricePerGram: number;
    totalCost: number;
    currency: Currency;
  };
  goldItem: {
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
  };
  portfolio: {
    totalGrams: number;
    totalInvested: number;
    currentValue: number;
  };
}

interface ErrorResponse {
  error: string;
  success: false;
}

export async function PUT(
  req: Request
): Promise<NextResponse<PhysicalUpdateResponse | ErrorResponse>> {
  try {
    const sessionResult =
      (await verifySessionWithUser()) as SessionResult | null;

    if (!sessionResult?.session)
      return NextResponse.json(
        { error: "Unauthenticated: Please log in.", success: false },
        { status: 401 }
      );

    if (!sessionResult.user)
      return NextResponse.json(
        { error: "Authenticated user not found", success: false },
        { status: 404 }
      );

    if (sessionResult.user.role !== Role.ADMIN)
      return NextResponse.json(
        { error: "Access denied: Admin privileges required.", success: false },
        { status: 403 }
      );

    const adminId = sessionResult.user.id;
    const body: PhysicalUpdateRequest = await req.json();
    const { id, goldItem, pricePerGram, currency, depositDate } = body;

    if (!id)
      return NextResponse.json(
        { error: "Invalid ID provided.", success: false },
        { status: 400 }
      );

    const result = await prisma.$transaction(async (tx) => {
      const existingGoldItem = await tx.goldItem.findUnique({
        where: { id },
        include: { transaction: true, user: { include: { portfolio: true } } },
      });

      if (!existingGoldItem) throw new Error("Gold item not found");

      if (existingGoldItem.depositMethod !== DepositMethod.PHYSICAL)
        throw new Error("Not a physical deposit");

      const existingTransaction = existingGoldItem.transaction;
      const portfolio = existingGoldItem.user.portfolio;

      if (!portfolio) throw new Error("Portfolio not found");

      if (currency && currency !== existingTransaction.currency)
        throw new Error("Currency cannot be changed");

      const finalCurrency: Currency = currency || existingTransaction.currency;

      const newType = goldItem.type || existingGoldItem.type;
      const validTypes: GoldItemType[] = ["BAR", "COIN", "JEWELRY", "OTHER"];
      if (!validTypes.includes(newType)) throw new Error("Invalid type");

      const newWeight = goldItem.weightGrams ?? existingGoldItem.weightGrams;
      if (newWeight <= 0) throw new Error("Invalid weight");

      const newKarat = goldItem.karat ?? existingGoldItem.karat;
      if (newKarat && (newKarat < 1 || newKarat > 24))
        throw new Error("Invalid karat");

      const newPurity = goldItem.purity ?? existingGoldItem.purity;
      if (newPurity && (newPurity < 0 || newPurity > 1))
        throw new Error("Invalid purity");

      const newPrice = pricePerGram ?? existingTransaction.pricePerGram;
      if (newPrice <= 0) throw new Error("Invalid price per gram");

      let newDate = existingGoldItem.createdAt;
      if (depositDate) {
        newDate = new Date(depositDate);
        if (isNaN(newDate.getTime())) throw new Error("Invalid deposit date");
      }

      const newSerial = goldItem.serialNumber ?? existingGoldItem.serialNumber;
      if (newSerial !== existingGoldItem.serialNumber && newSerial) {
        const duplicate = await tx.goldItem.findUnique({
          where: { serialNumber: newSerial },
        });
        if (duplicate) throw new Error("Duplicate serial number");
      }

      const newTotalCost = parseFloat((newWeight * newPrice).toFixed(4));

      const updatedGoldItem = await tx.goldItem.update({
        where: { id },
        data: {
          type: newType,
          description: goldItem.description ?? existingGoldItem.description,
          serialNumber: newSerial,
          karat: newKarat,
          purity: newPurity,
          weightGrams: newWeight,
          origin: goldItem.origin ?? existingGoldItem.origin,
          storageLocation:
            goldItem.storageLocation ?? existingGoldItem.storageLocation,
          createdAt: newDate,
          verifiedBy: adminId,
        },
      });

      const updatedTransaction = await tx.transaction.update({
        where: { id: existingTransaction.id },
        data: {
          gramsPurchased: newWeight,
          pricePerGram: newPrice,
          totalCost: newTotalCost,
          currency: finalCurrency,
          createdAt: newDate,
        },
      });

      const deltaGrams = newWeight - existingGoldItem.weightGrams;
      const deltaInvested = newTotalCost - existingTransaction.totalCost;

      const newTotalGrams = parseFloat(
        (portfolio.totalGrams + deltaGrams).toFixed(6)
      );
      const newTotalInvested = parseFloat(
        (portfolio.totalInvested + deltaInvested).toFixed(4)
      );

      const currentPriceRecord = await tx.goldPrice.findFirst({
        where: { currency: finalCurrency, isActive: true },
        orderBy: { recordedAt: "desc" },
      });

      const currentPrice = currentPriceRecord?.pricePerGram || newPrice;
      const newCurrentValue = parseFloat(
        (newTotalGrams * currentPrice).toFixed(4)
      );

      const updatedPortfolio = await tx.portfolio.update({
        where: { id: portfolio.id },
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

      return {
        transaction: updatedTransaction,
        goldItem: updatedGoldItem,
        portfolio: updatedPortfolio,
      };
    });

    const targetUser = await prisma.user.findUnique({
      where: { id: result.goldItem.userId },
      select: { firstName: true, lastName: true },
    });

    return NextResponse.json(
      {
        message: `Updated ${result.goldItem.weightGrams}g deposit for ${targetUser?.firstName} ${targetUser?.lastName}.`,
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
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Update error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    let status = 500;
    if (errorMessage.includes("not found")) status = 404;
    else if (errorMessage.includes("Duplicate")) status = 409;
    else if (
      errorMessage.includes("Invalid") ||
      errorMessage.includes("cannot be changed")
    )
      status = 400;
    return NextResponse.json(
      { error: errorMessage, success: false },
      { status }
    );
  }
}
