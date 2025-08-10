// src/utils/stripePayment.ts
import ENV from "@/config/env";
import Stripe from "stripe";

// Stripe configuration
const STRIPE_SECRET_KEY = ENV.STRIPE_SECRET_KEY;

if (!STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set in environment variables");
}

const stripe = new Stripe(STRIPE_SECRET_KEY);

// Helper function to initialize Stripe payment
export async function initializeStripePayment(
  email: string,
  amount: number,
  currency: string,
  paymentId: string,
  callbackUrl?: string
) {
  const baseUrl = process.env.NEXT_BASE_URL || "http://localhost:3000";

  // Ensure unit_amount is an integer (round to nearest cent)
  const unitAmountInCents = Math.round(amount * 100);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    customer_email: email,
    line_items: [
      {
        price_data: {
          currency: currency.toLowerCase(),
          product_data: {
            name: "Wallet Deposit",
          },
          unit_amount: unitAmountInCents,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: callbackUrl
      ? `${callbackUrl}?session_id={CHECKOUT_SESSION_ID}`
      : `${baseUrl}/dashboard/wallet/deposit/callback?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: callbackUrl
      ? `${callbackUrl}?session_id={CHECKOUT_SESSION_ID}`
      : `${baseUrl}/dashboard/wallet/deposit/callback?session_id={CHECKOUT_SESSION_ID}`,
    metadata: {
      paymentId,
    },
  });

  return session;
}

// Helper function to verify Stripe payment
export async function verifyStripePayment(sessionId: string) {
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  return session;
}
