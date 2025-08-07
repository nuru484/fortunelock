// src/utils/goldPriceApi.ts
import axios, { AxiosError } from "axios";
import ENV from "@/config/env";

interface GoldApiResponse {
  timestamp: number;
  base_currency: string;
  metals: string;
  weight_unit: string;
  weight_name: string;
  metal_prices: {
    XAU: {
      open: number;
      high: number;
      low: number;
      prev: number;
      change: number;
      change_percentage: number;
      price: number;
      ask: number;
      bid: number;
      price_24k: number;
      price_22k: number;
      price_21k: number;
      price_20k: number;
      price_18k: number;
      price_16k: number;
      price_14k: number;
      price_10k: number;
    };
  };
  currency_rates: {
    [currency: string]: number;
  };
}

// Supported currencies matching your schema
export const SUPPORTED_CURRENCIES = ["EUR", "KWD", "GBP", "USD"] as const;
export type SupportedCurrency = (typeof SUPPORTED_CURRENCIES)[number];

export async function fetchGoldPrice(
  baseCurrency: string = "EUR"
): Promise<GoldApiResponse | null> {
  const apiKey = ENV.GOLD_API_KEY;

  if (!apiKey) {
    console.error("GOLD_API_KEY is not set");
    return null;
  }

  // Include all supported currencies in the request
  const currenciesParam = SUPPORTED_CURRENCIES.join(",");
  const apiUrl: string = `https://gold.g.apised.com/v1/latest?metals=XAU&base_currency=${baseCurrency}&currencies=${currenciesParam}&weight_unit=gram`;

  const config = {
    headers: { "x-api-key": apiKey },
    timeout: 10000,
  };

  try {
    const response = await axios.get(apiUrl, config);
    console.log("API Response: ", response.data.data);
    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError && error.code === "ECONNABORTED") {
      console.error("Request timed out. Check network or API availability.");
    } else {
      console.error("Error fetching gold price:", error);
    }
    return null;
  }
}

// Helper function to convert prices to different currencies
export function convertPriceToTargetCurrency(
  basePrice: number,
  baseCurrencyRate: number,
  targetCurrencyRate: number
): number {
  // Convert from base currency to USD equivalent, then to target currency
  return (basePrice / baseCurrencyRate) * targetCurrencyRate;
}
