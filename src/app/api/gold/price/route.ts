// src/app/api/gold/price/route.ts
import { NextResponse } from "next/server";
import { GoldPriceService } from "@/services/goldPriceService";
import { fetchGoldPrice } from "@/utils/goldPriceApi";
import { Currency } from "@/generated/prisma";
import { verifySession } from "@/lib/dataAccessLayer";

// Store last update time to implement hourly updates
let lastUpdateTime = 0;
const UPDATE_INTERVAL = 60 * 60 * 1000; // 1 hour in milliseconds

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const currency = searchParams.get("currency") || "USD";
  const forceUpdate = searchParams.get("forceUpdate") === "true";
  const action = searchParams.get("action");

  try {
    // Check if user is authenticated
    const session = await verifySession();
    if (!session) {
      return NextResponse.json(
        { error: "Unauthenticated: Please log in." },
        { status: 401 }
      );
    }

    // Check if we need to update prices (hourly or forced)
    const currentTime = Date.now();
    const shouldUpdate =
      forceUpdate ||
      action === "update" ||
      currentTime - lastUpdateTime >= UPDATE_INTERVAL;

    if (shouldUpdate) {
      console.log("Updating gold prices from API...");

      const updateResult = await GoldPriceService.updateAllCurrencyPrices();

      if (updateResult.success) {
        lastUpdateTime = currentTime;
        console.log("Price update successful:", updateResult.message);
      } else {
        console.error("Price update failed:", updateResult.message);
        // Continue with existing data even if update fails
      }

      // If this was just an update request, return the update result
      if (action === "update") {
        return NextResponse.json(updateResult, {
          status: updateResult.success ? 200 : 500,
        });
      }
    }

    // Get latest price from database
    if (currency.toUpperCase() === "ALL") {
      // Return prices for all currencies
      const allPrices = await GoldPriceService.getLatestPricesAllCurrencies();
      return NextResponse.json(
        {
          prices: allPrices,
          lastUpdated: new Date(lastUpdateTime).toISOString(),
          nextUpdate: new Date(lastUpdateTime + UPDATE_INTERVAL).toISOString(),
        },
        { status: 200 }
      );
    } else {
      // Return price for specific currency
      const currencyEnum = currency.toUpperCase() as Currency;

      // Validate currency
      if (!Object.values(Currency).includes(currencyEnum)) {
        return NextResponse.json(
          { error: `Unsupported currency: ${currency}` },
          { status: 400 }
        );
      }

      const price = await GoldPriceService.getLatestPrice(currencyEnum);

      if (!price) {
        // If no price in DB, try to fetch from API as fallback
        console.log("No price found in DB, fetching from API...");
        const apiPrice = await fetchGoldPrice(currency);

        if (!apiPrice) {
          return NextResponse.json(
            { error: "Failed to fetch gold price" },
            { status: 500 }
          );
        }

        // Return API data directly (without storing, since the main update will handle that)
        return NextResponse.json(
          {
            price: {
              pricePerGram: apiPrice.metal_prices.XAU.price,
              currency: currency,
              source: "live_api",
              timestamp: apiPrice.timestamp,
            },
            currency,
          },
          { status: 200 }
        );
      }

      return NextResponse.json(
        {
          price: {
            id: price.id,
            pricePerGram: price.pricePerGram,
            currency: price.currency,
            openPrice: price.openPrice,
            highPrice: price.highPrice,
            lowPrice: price.lowPrice,
            prevPrice: price.prevPrice,
            askPrice: price.askPrice,
            bidPrice: price.bidPrice,
            priceChange: price.priceChange,
            priceChangePercent: price.priceChangePercent,
            price24k: price.price24k,
            price22k: price.price22k,
            price21k: price.price21k,
            price20k: price.price20k,
            price18k: price.price18k,
            price16k: price.price16k,
            price14k: price.price14k,
            price10k: price.price10k,
            weightUnit: price.weightUnit,
            weightName: price.weightName,
            source: price.source,
            recordedAt: price.recordedAt,
          },
          currency: price.currency,
          lastUpdated: new Date(lastUpdateTime).toISOString(),
          nextUpdate: new Date(lastUpdateTime + UPDATE_INTERVAL).toISOString(),
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Route handler error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// Optional: Handle POST requests for manual price updates
export async function POST() {
  try {
    console.log("Manual price update triggered via POST...");

    const updateResult = await GoldPriceService.updateAllCurrencyPrices();
    lastUpdateTime = Date.now();

    return NextResponse.json(updateResult, {
      status: updateResult.success ? 200 : 500,
    });
  } catch (error) {
    console.error("POST route handler error:", error);
    return NextResponse.json(
      {
        error: "Failed to update prices",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
