// src/utils/goldPriceApi.ts
import axios, { AxiosRequestConfig } from "axios";

interface GoldApiResponse {
  price?: number;
}

interface FCSApiResponse {
  response?: {
    price?: string;
  }[];
}

type ApiResponse = GoldApiResponse | FCSApiResponse;

interface GoldPriceAPI {
  url: string;
  headers?: Record<string, string>;
  transform: (data: ApiResponse) => number | null;
}

export async function fetchGoldPrice(currency: string): Promise<number | null> {
  const apis: GoldPriceAPI[] = [
    {
      url: `https://www.goldapi.io/api/XAU/${currency}`,
      headers: { "x-access-token": process.env.GOLD_API_KEY || "" },
      transform: (data: ApiResponse): number | null => {
        const goldApiData = data as GoldApiResponse;
        if (goldApiData.price) {
          return goldApiData.price / 31.1035;
        }
        return null;
      },
    },
  ];

  for (const api of apis) {
    try {
      const config: AxiosRequestConfig = {
        timeout: 5000,
        ...(api.headers ? { headers: api.headers } : {}),
      };

      const response = await axios.get(api.url, config);
      console.log(response.data);
      const pricePerGram = api.transform(response.data);

      if (pricePerGram && pricePerGram > 0) {
        console.log(
          `Gold price fetched successfully for ${currency}: $${pricePerGram.toFixed(
            2
          )}/gram`
        );
        return pricePerGram;
      }
    } catch (error) {
      if (error instanceof Error) {
        console.warn(`Failed to fetch from API: ${api.url}`, error.message);
      } else {
        console.warn(`Failed to fetch from API: ${api.url}`, String(error));
      }
    }
  }

  console.error(`All gold price APIs failed for ${currency}`);
  return null;
}
