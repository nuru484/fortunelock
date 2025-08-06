// src/app/api/gold/price/route.ts
import { NextResponse } from "next/server";
import prisma from "@/config/prismaClient";
import { fetchGoldPrice } from "@/utils/goldPriceApi";
import { Currency } from "@/generated/prisma";

// Define types for better type safety
type SupportedCurrency = "USD" | "GBP" | "EUR" | "GHS" | "NGN";

interface HistoricalPrice {
  price: number;
  currency: string;
  date: string;
}

interface ApiResponse {
  currency: string;
  dataSource: string;
  timestamp: string;
  currentPrice?: number | null;
  historicalPrices?: HistoricalPrice[];
  historicalCount?: number;
}

// Helper function to get historical prices from DB
async function getHistoricalPricesFromDB(
  currency: Currency,
  days: number = 365
) {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  return await prisma.goldPrice.findMany({
    where: {
      currency,
      recordedAt: {
        gte: startDate,
      },
    },
    select: {
      pricePerGram: true,
      currency: true,
      recordedAt: true,
    },
    orderBy: {
      recordedAt: "asc",
    },
  });
}

// Helper function to get latest price from DB
async function getLatestPriceFromDB(currency: Currency) {
  return await prisma.goldPrice.findFirst({
    where: {
      currency,
      isActive: true,
    },
    select: {
      pricePerGram: true,
      currency: true,
      recordedAt: true,
    },
    orderBy: {
      recordedAt: "desc",
    },
  });
}

// API route to fetch current and historical gold prices
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const currencyParam = searchParams.get("currency")?.toUpperCase();

    const type = searchParams.get("type") || "both";
    const days = parseInt(searchParams.get("days") || "365");

    // Validate currency parameter
    const supportedCurrencies: SupportedCurrency[] = [
      "USD",
      "GBP",
      "EUR",
      "GHS",
      "NGN",
    ];
    if (
      !currencyParam ||
      !supportedCurrencies.includes(currencyParam as SupportedCurrency)
    ) {
      return NextResponse.json(
        { error: "Valid currency (USD, GBP, EUR, GHS, NGN) is required." },
        { status: 400 }
      );
    }

    // Convert string to Prisma Currency enum
    const currency = currencyParam as Currency;

    let currentPrice: number | null = null;
    let historicalPrices: HistoricalPrice[] = [];
    let dataSource = "api";

    // Try to fetch current price from API first
    if (type === "current" || type === "both") {
      try {
        console.log(`Fetching current gold price for ${currency} from APIs...`);
        currentPrice = await fetchGoldPrice(currencyParam);

        console.log("Current Gold Price: ", currentPrice);

        if (!currentPrice) {
          console.warn(`API failed for ${currency}, falling back to DB...`);
          const latestFromDB = await getLatestPriceFromDB(currency);
          if (latestFromDB) {
            currentPrice = latestFromDB.pricePerGram;
            dataSource = "database";
          }
        }
      } catch (error) {
        console.error(
          `Error fetching current price from API for ${currency}:`,
          error
        );
        // Fallback to DB
        const latestFromDB = await getLatestPriceFromDB(currency);
        if (latestFromDB) {
          currentPrice = latestFromDB.pricePerGram;
          dataSource = "database";
        }
      }
    }

    // Get historical prices from DB
    if (type === "historical" || type === "both") {
      const dbPrices = await getHistoricalPricesFromDB(currency, days);
      historicalPrices = dbPrices.map((price) => ({
        price: price.pricePerGram,
        currency: price.currency,
        date: price.recordedAt.toISOString(),
      }));
    }

    const response: ApiResponse = {
      currency: currencyParam,
      dataSource,
      timestamp: new Date().toISOString(),
    };

    if (type === "current" || type === "both") {
      response.currentPrice = currentPrice;
    }

    if (type === "historical" || type === "both") {
      response.historicalPrices = historicalPrices;
      response.historicalCount = historicalPrices.length;
    }

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Error retrieving gold prices:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while retrieving gold prices." },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// Cron job function to update gold prices
export async function updateGoldPricesCron() {
  const currencies: SupportedCurrency[] = ["USD", "GBP", "EUR", "GHS", "NGN"];

  const results = {
    successful: [] as string[],
    failed: [] as string[],
    startTime: new Date(),
  };

  console.log(
    `[${new Date().toISOString()}] Starting gold price update cron job...`
  );

  for (const currencyString of currencies) {
    try {
      console.log(`Fetching gold price for ${currencyString}...`);
      const pricePerGram = await fetchGoldPrice(currencyString);

      if (pricePerGram && pricePerGram > 0) {
        // Convert string to Prisma Currency enum for database operations
        const currency = currencyString as Currency;

        // Deactivate old prices for this currency
        await prisma.goldPrice.updateMany({
          where: {
            currency,
            isActive: true,
          },
          data: {
            isActive: false,
          },
        });

        // Insert new price
        await prisma.goldPrice.create({
          data: {
            pricePerGram,
            currency,
            source: "goldapi.io",
            recordedAt: new Date(),
            isActive: true,
          },
        });

        results.successful.push(currencyString);
        console.log(
          `✓ Gold price updated for ${currencyString}: ${pricePerGram.toFixed(
            2
          )}/gram`
        );
      } else {
        results.failed.push(currencyString);
        console.warn(`✗ Invalid price fetched for ${currencyString}`);
      }
    } catch (error) {
      results.failed.push(currencyString);
      console.error(
        `✗ Failed to update gold price for ${currencyString}:`,
        error
      );
    }
  }

  const endTime = new Date();
  const duration = endTime.getTime() - results.startTime.getTime();

  console.log(
    `[${endTime.toISOString()}] Gold price update completed in ${duration}ms`
  );
  console.log(
    `Successful: ${results.successful.length} (${results.successful.join(
      ", "
    )})`
  );
  console.log(
    `Failed: ${results.failed.length} (${results.failed.join(", ")})`
  );

  return results;
}

// API endpoint to manually trigger cron job (useful for testing)
export async function POST() {
  try {
    const results = await updateGoldPricesCron();
    return NextResponse.json(
      {
        message: "Gold price update completed",
        results,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error running manual gold price update:", error);
    return NextResponse.json(
      { error: "Failed to update gold prices" },
      { status: 500 }
    );
  }
}
