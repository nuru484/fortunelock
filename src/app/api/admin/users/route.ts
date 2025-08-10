// src/app/api/admin/users/route.ts
import { NextResponse } from "next/server";
import prisma from "@/config/prismaClient";
import { verifySessionWithUser } from "@/lib/dataAccessLayer";
import { Role } from "@/generated/prisma";

interface UserListItem {
  id: number;
  firstName: string;
  middleName: string | null;
  lastName: string;
  email: string;
  gender: string | null;
  role: Role;
  phoneNumber: string | null;
  profilePicture: string | null;
  nationality: string | null;
  country: string;
  createdAt: Date;
  updatedAt: Date;
  dateOfBirth: Date | null;
}

interface UsersResponse {
  success: boolean;
  users: UserListItem[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

interface ErrorResponse {
  error: string;
  success: false;
}

export async function GET(req: Request): Promise<NextResponse> {
  try {
    // Verify authentication and user
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

    // Parse query parameters
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const limit = Math.min(
      parseInt(url.searchParams.get("limit") || "50"),
      100
    );
    const search = url.searchParams.get("search") || "";
    const userId = parseInt(url.searchParams.get("userId") || "0");

    if (
      userId &&
      userId !== sessionResult.user.id &&
      sessionResult.user.role !== Role.ADMIN
    ) {
      return NextResponse.json(
        {
          error:
            "Access denied: Admin privileges required to view other users' details.",
          success: false,
        },
        { status: 403 }
      );
    }

    // Build search conditions
    const whereClause = {
      ...(search
        ? {
            OR: [
              { firstName: { contains: search, mode: "insensitive" as const } },
              { lastName: { contains: search, mode: "insensitive" as const } },
              { email: { contains: search, mode: "insensitive" as const } },
            ],
          }
        : {}),
      ...(userId ? { id: userId } : {}),
    };

    // Validate pagination parameters
    if (page < 1) {
      const errorResponse: ErrorResponse = {
        error: "Invalid page number. Must be 1 or greater.",
        success: false,
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    if (limit < 1) {
      const errorResponse: ErrorResponse = {
        error: "Invalid limit. Must be 1 or greater.",
        success: false,
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Get total count for pagination
    const totalUsers = await prisma.user.count({
      where: whereClause,
    });

    // Calculate pagination
    const totalPages = Math.ceil(totalUsers / limit);
    const skip = (page - 1) * limit;

    // Fetch users
    const users = await prisma.user.findMany({
      where: whereClause,
      select: {
        id: true,
        email: true,
        firstName: true,
        middleName: true,
        lastName: true,
        dateOfBirth: true,
        gender: true,
        phoneNumber: true,
        nationality: true,
        profilePicture: true,
        country: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: [
        { createdAt: "desc" },
        { lastName: "asc" },
        { firstName: "asc" },
      ],
      skip,
      take: limit,
    });

    const response: UsersResponse = {
      success: true,
      users: users.map((user) => ({
        id: user.id,
        firstName: user.firstName,
        middleName: user.middleName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        country: user.country,
        dateOfBirth: user.dateOfBirth,
        nationality: user.nationality,
        profilePicture: user.profilePicture,
        gender: user.gender,
        phoneNumber: user.phoneNumber,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      })),
      pagination: {
        page,
        limit,
        total: totalUsers,
        totalPages,
      },
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error: unknown) {
    console.error("Error fetching users:", error);

    // Generic error handling
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    const errorResponse: ErrorResponse = {
      error: `Failed to fetch users: ${errorMessage}. Please try again.`,
      success: false,
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
