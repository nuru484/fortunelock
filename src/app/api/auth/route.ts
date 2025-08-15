// src/app/api/auth/route.ts
import { NextResponse } from "next/server";
import { verifySessionWithUser } from "@/lib/dataAccessLayer";

export async function GET() {
  try {
    const sessionResult = await verifySessionWithUser();

    if (!sessionResult) {
      return NextResponse.json(
        {
          error: "Unauthenticated: Please log in.",
          success: false,
          user: null,
        },
        { status: 401 }
      );
    }

    const { user } = sessionResult;

    // Add cache headers for better performance
    const response = NextResponse.json({
      user,
      success: true,
    });

    return response;
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        success: false,
        user: null,
      },
      { status: 500 }
    );
  }
}
