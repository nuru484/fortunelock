// src/services/goldPriceService.ts
import { PrismaClient, GoldPrice, Currency } from "@/generated/prisma";
import {
  fetchGoldPrice,
  SUPPORTED_CURRENCIES,
  convertPriceToTargetCurrency,
} from "@/utils/goldPriceApi";

const prisma = new PrismaClient();

export class GoldPriceService {
  // Updates prices for all supported currencies
  static async updateAllCurrencyPrices(): Promise<{
    success: boolean;
    message: string;
  }> {
    try {
      const apiData = await fetchGoldPrice();
      if (!apiData) {
        return {
          success: false,
          message: "Failed to fetch gold price data from API",
        };
      }

      const {
        metal_prices,
        currency_rates,
        timestamp,
        weight_unit,
        weight_name,
      } = apiData;
      const baseCurrency = apiData.base_currency;

      // Update or create price records for each supported currency
      for (const currency of SUPPORTED_CURRENCIES) {
        const currencyRate = currency_rates[currency] || 1;
        const priceData = {
          pricePerGram: convertPriceToTargetCurrency(
            metal_prices.XAU.price,
            currency_rates[baseCurrency],
            currencyRate
          ),
          openPrice: convertPriceToTargetCurrency(
            metal_prices.XAU.open,
            currency_rates[baseCurrency],
            currencyRate
          ),
          highPrice: convertPriceToTargetCurrency(
            metal_prices.XAU.high,
            currency_rates[baseCurrency],
            currencyRate
          ),
          lowPrice: convertPriceToTargetCurrency(
            metal_prices.XAU.low,
            currency_rates[baseCurrency],
            currencyRate
          ),
          prevPrice: convertPriceToTargetCurrency(
            metal_prices.XAU.prev,
            currency_rates[baseCurrency],
            currencyRate
          ),
          askPrice: convertPriceToTargetCurrency(
            metal_prices.XAU.ask,
            currency_rates[baseCurrency],
            currencyRate
          ),
          bidPrice: convertPriceToTargetCurrency(
            metal_prices.XAU.bid,
            currency_rates[baseCurrency],
            currencyRate
          ),
          priceChange: convertPriceToTargetCurrency(
            metal_prices.XAU.change,
            currency_rates[baseCurrency],
            currencyRate
          ),
          priceChangePercent: metal_prices.XAU.change_percentage, // Percentage is currency-independent
          price24k: convertPriceToTargetCurrency(
            metal_prices.XAU.price_24k,
            currency_rates[baseCurrency],
            currencyRate
          ),
          price22k: convertPriceToTargetCurrency(
            metal_prices.XAU.price_22k,
            currency_rates[baseCurrency],
            currencyRate
          ),
          price21k: convertPriceToTargetCurrency(
            metal_prices.XAU.price_21k,
            currency_rates[baseCurrency],
            currencyRate
          ),
          price20k: convertPriceToTargetCurrency(
            metal_prices.XAU.price_20k,
            currency_rates[baseCurrency],
            currencyRate
          ),
          price18k: convertPriceToTargetCurrency(
            metal_prices.XAU.price_18k,
            currency_rates[baseCurrency],
            currencyRate
          ),
          price16k: convertPriceToTargetCurrency(
            metal_prices.XAU.price_16k,
            currency_rates[baseCurrency],
            currencyRate
          ),
          price14k: convertPriceToTargetCurrency(
            metal_prices.XAU.price_14k,
            currency_rates[baseCurrency],
            currencyRate
          ),
          price10k: convertPriceToTargetCurrency(
            metal_prices.XAU.price_10k,
            currency_rates[baseCurrency],
            currencyRate
          ),
        };

        await prisma.goldPrice.create({
          data: {
            ...priceData,
            currency: currency as Currency,
            baseCurrency,
            weightUnit: weight_unit,
            weightName: weight_name,
            source: "gold_api",
            apiTimestamp: BigInt(timestamp),
            recordedAt: new Date(),
            isActive: true,
          },
        });
      }

      return { success: true, message: "Gold prices updated successfully" };
    } catch (error) {
      console.error("Error updating gold prices:", error);
      return {
        success: false,
        message: `Error updating prices: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      };
    }
  }

  // Gets the latest price for a specific currency
  static async getLatestPrice(currency: Currency): Promise<GoldPrice | null> {
    try {
      const price = await prisma.goldPrice.findFirst({
        where: {
          currency,
          isActive: true,
        },
        orderBy: {
          recordedAt: "desc",
        },
      });
      return price;
    } catch (error) {
      console.error(`Error fetching latest price for ${currency}:`, error);
      return null;
    }
  }

  // Gets the latest prices for all supported currencies
  static async getLatestPricesAllCurrencies(): Promise<GoldPrice[]> {
    try {
      const prices = await Promise.all(
        SUPPORTED_CURRENCIES.map(async (currency) => {
          return await this.getLatestPrice(currency as Currency);
        })
      );
      return prices.filter((price): price is GoldPrice => price !== null);
    } catch (error) {
      console.error("Error fetching prices for all currencies:", error);
      return [];
    }
  }
}
