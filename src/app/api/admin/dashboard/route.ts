// src/app/api/admin/dashboard/route.ts
import { NextResponse } from "next/server";
import prisma from "@/config/prismaClient";
import { verifySessionWithUser } from "@/lib/dataAccessLayer";
import { Currency, Role, TransactionStatus } from "@/generated/prisma";

interface AdminDashboardResponse {
  success: boolean;
  message: string;
  stats: {
    totalUsers: number;
    totalAdmins: number;
    totalVerifiedUsers: number;
    totalGoldGrams: number;
    totalValueLocked: number;
    totalTransactions: number;
    totalRevenue: number;
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
    user: {
      id: number;
      firstName: string;
      lastName: string;
      email: string;
    };
  }[];
  pendingVerifications: {
    id: number;
    documentType: string;
    documentNumber: string;
    createdAt: Date;
    user: {
      id: number;
      firstName: string;
      lastName: string;
      email: string;
    };
  }[];
  pendingGoldItems: {
    id: number;
    type: string;
    weightGrams: number;
    karat: number | null;
    createdAt: Date;
    user: {
      id: number;
      firstName: string;
      lastName: string;
      email: string;
    };
  }[];
  goldPrices: {
    currency: Currency;
    pricePerGram: number;
    recordedAt: Date;
  }[];
  recentUsers: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    country: string;
    createdAt: Date;
  }[];
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

    if (result.user.role !== Role.ADMIN) {
      return NextResponse.json(
        { error: "Unauthorized: Admin access required.", success: false },
        { status: 403 }
      );
    }

    // Fetch all admin dashboard data in parallel
    const [
      totalUsers,
      totalAdmins,
      totalVerifiedUsers,
      totalGoldAggregate,
      totalTransactions,
      totalRevenueAggregate,
      recentTransactions,
      pendingVerifications,
      pendingGoldItems,
      goldPrices,
      recentUsers,
    ] = await Promise.all([
      // Total users
      prisma.user.count(),

      // Total admins
      prisma.user.count({ where: { role: Role.ADMIN } }),

      // Total verified users (KYC)
      prisma.identity.count({ where: { verified: true } }),

      // Total gold grams and value locked
      prisma.portfolio.aggregate({
        _sum: {
          totalGrams: true,
          currentValue: true,
        },
      }),

      // Total transactions
      prisma.transaction.count(),

      // Total revenue from fees
      prisma.transaction.aggregate({
        _sum: { fee: true },
        where: { status: TransactionStatus.SUCCESS },
      }),

      // Recent transactions (last 10)
      prisma.transaction.findMany({
        select: {
          id: true,
          referenceNumber: true,
          type: true,
          status: true,
          gramsPurchased: true,
          totalCost: true,
          currency: true,
          createdAt: true,
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
        take: 10,
      }),

      // Pending KYC verifications
      prisma.identity.findMany({
        where: { verified: false },
        select: {
          id: true,
          documentType: true,
          documentNumber: true,
          createdAt: true,
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
        take: 10,
      }),

      // Pending physical gold deposits
      prisma.goldItem.findMany({
        where: { verified: false },
        select: {
          id: true,
          type: true,
          weightGrams: true,
          karat: true,
          createdAt: true,
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
        take: 10,
      }),

      // Current gold prices for all currencies
      Promise.all(
        Object.values(Currency).map((curr) =>
          prisma.goldPrice.findFirst({
            where: { currency: curr, isActive: true },
            select: { pricePerGram: true, currency: true, recordedAt: true },
            orderBy: { recordedAt: "desc" },
          })
        )
      ).then((prices) => prices.filter(Boolean)),

      // Recent users (last 5)
      prisma.user.findMany({
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          country: true,
          createdAt: true,
        },
        orderBy: { createdAt: "desc" },
        take: 5,
      }),
    ]);

    // Prepare stats
    const stats = {
      totalUsers,
      totalAdmins,
      totalVerifiedUsers,
      totalGoldGrams: totalGoldAggregate._sum.totalGrams || 0,
      totalValueLocked: totalGoldAggregate._sum.currentValue || 0,
      totalTransactions,
      totalRevenue: totalRevenueAggregate._sum.fee || 0,
    };

    const response: AdminDashboardResponse = {
      success: true,
      message: "Admin dashboard data retrieved successfully.",
      stats,
      recentTransactions,
      pendingVerifications,
      pendingGoldItems,
      goldPrices: goldPrices as {
        currency: Currency;
        pricePerGram: number;
        recordedAt: Date;
      }[],
      recentUsers,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Error fetching admin dashboard data:", error);
    return NextResponse.json(
      { error: "Failed to fetch admin dashboard data.", success: false },
      { status: 500 }
    );
  }
}
