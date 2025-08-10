// src/lib/dataAccessLayer.ts
import "server-only";
import { cookies } from "next/headers";
import { decrypt } from "./session";
import prisma from "@/config/prismaClient";

export async function verifySession() {
  try {
    const cookie = (await cookies()).get("session")?.value;

    if (!cookie) {
      return null;
    }

    // Decrypt and validate the session
    const session = await decrypt(cookie);

    if (!session || !session.userId || !session.expiresAt) {
      return null;
    }

    // Check if session is expired
    if (new Date(session.expiresAt) < new Date()) {
      return null;
    }

    return session;
  } catch (error) {
    console.error("Session verification error:", error);
    return null;
  }
}

export async function verifySessionWithUser() {
  try {
    const session = await verifySession();
    if (!session) {
      return null;
    }

    const user = await prisma.user.findUnique({
      where: {
        id: session.userId,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        country: true,
      },
    });

    if (!user) {
      return null;
    }

    return { session, user };
  } catch (error) {
    console.error("Session verification error:", error);
    return null;
  }
}

export async function verifySessionWithRole(requiredRole?: string[]) {
  try {
    const result = await verifySessionWithUser();
    if (!result) {
      return null;
    }

    // Check role if specified
    if (requiredRole && !requiredRole.includes(result.user.role)) {
      return null;
    }

    return result.user;
  } catch (error) {
    console.error("Role verification error:", error);
    return null;
  }
}

// Option 4: Resource ownership verification
export async function verifyResourceOwnership(resourceUserId: number) {
  try {
    const session = await verifySession();
    if (!session) {
      return { authorized: false, reason: "not_authenticated" };
    }

    // Check if the session user owns the resource
    if (session.userId !== resourceUserId) {
      return { authorized: false, reason: "not_owner" };
    }

    return { authorized: true, session };
  } catch (error) {
    console.error("Resource ownership verification error:", error);
    return { authorized: false, reason: "verification_error" };
  }
}
