import { NextResponse } from "next/server";
import prisma from "@/config/prismaClient";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const { email, password, firstName, lastName, country } =
      await request.json();

    if (!email || !password || !firstName || !lastName || !country) {
      return NextResponse.json(
        {
          success: false,
          errors: {
            general: ["All fields are required"],
          },
        },
        { status: 400 }
      );
    }

    // Check if any user already exists
    const anyUser = await prisma.user.findFirst();

    // Check for duplicate email
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { success: false, errors: { email: ["Email already exists"] } },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        country,
        role: anyUser ? "USER" : "ADMIN",
      },
    });

    return NextResponse.json(
      { success: true, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in signup:", error);
    return NextResponse.json(
      {
        success: false,
        errors: { general: ["Unexpected error during signup"] },
      },
      { status: 500 }
    );
  }
}
