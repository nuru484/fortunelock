import { NextResponse } from "next/server";
import prisma from "@/config/prismaClient";
import bcrypt from "bcrypt";
import { createSession } from "@/lib/session";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          errors: { general: ["Email and password are required"] },
        },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, errors: { email: ["User not found"] } },
        { status: 404 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, errors: { password: ["Invalid password"] } },
        { status: 401 }
      );
    }

    await createSession(user.id, user.role);

    return NextResponse.json(
      { success: true, message: "Login successful" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in login:", error);
    return NextResponse.json(
      {
        success: false,
        errors: { general: ["Unexpected error during login"] },
      },
      { status: 500 }
    );
  }
}
