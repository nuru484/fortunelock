// src/app/api/admin/users/[id]/details/route.ts
import { NextResponse } from "next/server";
import prisma from "@/config/prismaClient";
import { verifySessionWithUser } from "@/lib/dataAccessLayer";
import { Role } from "@/generated/prisma";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
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

    if (sessionResult.user.role !== Role.ADMIN) {
      return NextResponse.json(
        { error: "Access denied: Admin privileges required.", success: false },
        { status: 403 }
      );
    }

    const { id } = await params;
    const userId = parseInt(id);
    if (isNaN(userId) || userId <= 0) {
      return NextResponse.json(
        { error: "Invalid user ID provided.", success: false },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        wallet: true,
        portfolio: true,
        holdings: {
          include: {
            transaction: true,
          },
        },
        goldItems: true,
        transactions: {
          include: {
            payment: true,
          },
        },
        payments: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found.", success: false },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: user }, { status: 200 });
  } catch (error: unknown) {
    console.error("Error fetching user details:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json(
      {
        error: `Failed to fetch user details: ${errorMessage}.`,
        success: false,
      },
      { status: 500 }
    );
  }
}
