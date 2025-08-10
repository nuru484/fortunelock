// src/app/api/admin/users/[id]/route.ts
import { NextResponse } from "next/server";
import prisma from "@/config/prismaClient";
import { verifySessionWithUser } from "@/lib/dataAccessLayer";
import { Role } from "@/generated/prisma";

interface UserDetails {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  dateOfBirth: Date | null;
  gender: string | null;
  phoneNumber: string | null;
  nationality: string | null;
  country: string | null;
  createdAt: Date;
}

interface UserPortfolio {
  totalGrams: number;
  totalInvested: number;
  currentValue: number;
  unrealizedGain: number;
  lastCalculatedAt: Date;
}

interface UserWallet {
  balance: number;
  currency: string;
  updatedAt: Date;
}

interface UserResponse {
  success: boolean;
  user: UserDetails;
  portfolio: UserPortfolio | null;
  wallet: UserWallet | null;
}

interface ErrorResponse {
  error: string;
  success: false;
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
    // Verify authentication and admin role
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

    // Check if user is admin
    if (sessionResult.user.role !== Role.ADMIN) {
      return NextResponse.json(
        { error: "Access denied: Admin privileges required.", success: false },
        { status: 403 }
      );
    }

    const { id } = await params;

    // Parse and validate user ID
    const userId = parseInt(id);
    if (isNaN(userId) || userId <= 0) {
      const errorResponse: ErrorResponse = {
        error: "Invalid user ID provided.",
        success: false,
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Fetch user with related data
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        role: true,
        dateOfBirth: true,
        gender: true,
        phoneNumber: true,
        nationality: true,
        country: true,
        createdAt: true,
      },
    });

    if (!user) {
      const errorResponse: ErrorResponse = {
        error: "User not found.",
        success: false,
      };
      return NextResponse.json(errorResponse, { status: 404 });
    }

    // Fetch user's portfolio
    const portfolio = await prisma.portfolio.findUnique({
      where: { userId },
      select: {
        totalGrams: true,
        totalInvested: true,
        currentValue: true,
        unrealizedGain: true,
        lastCalculatedAt: true,
      },
    });

    // Fetch user's wallet
    const wallet = await prisma.wallet.findUnique({
      where: { userId },
      select: {
        balance: true,
        currency: true,
        updatedAt: true,
      },
    });

    const response: UserResponse = {
      success: true,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        dateOfBirth: user.dateOfBirth,
        gender: user.gender,
        phoneNumber: user.phoneNumber,
        nationality: user.nationality,
        country: user.country,
        createdAt: user.createdAt,
      },
      portfolio: portfolio
        ? {
            totalGrams: portfolio.totalGrams,
            totalInvested: portfolio.totalInvested,
            currentValue: portfolio.currentValue,
            unrealizedGain: portfolio.unrealizedGain,
            lastCalculatedAt: portfolio.lastCalculatedAt,
          }
        : null,
      wallet: wallet
        ? {
            balance: wallet.balance,
            currency: wallet.currency,
            updatedAt: wallet.updatedAt,
          }
        : null,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error: unknown) {
    console.error("Error fetching user details:", error);

    // Handle specific database errors
    if (error && typeof error === "object" && "code" in error) {
      const dbError = error as { code: string; message: string };

      if (dbError.code === "P2025") {
        const errorResponse: ErrorResponse = {
          error: "User not found.",
          success: false,
        };
        return NextResponse.json(errorResponse, { status: 404 });
      }
    }

    // Generic error handling
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    const errorResponse: ErrorResponse = {
      error: `Failed to fetch user details: ${errorMessage}. Please try again.`,
      success: false,
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
