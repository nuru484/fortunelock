"use client";
import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Line, LineChart, XAxis, YAxis, CartesianGrid } from "recharts";
import {
  useGetGoldPricesQuery,
  useUpdateGoldPricesMutation,
} from "@/redux/api/apiSlice";

// Define interfaces based on API response and Prisma schema
interface HistoricalPrice {
  price: number;
  currency: string;
  date: string;
}

interface GoldPriceResponse {
  currency: string;
  dataSource: string;
  timestamp: string;
  currentPrice?: number | null;
  historicalPrices?: HistoricalPrice[];
  historicalCount?: number;
}

const GoldPriceChart = () => {
  const [currency, setCurrency] = useState<
    "USD" | "GBP" | "EUR" | "GHS" | "NGN"
  >("USD");
  const [days, setDays] = useState<"30" | "90" | "180" | "365">("365");
  const { data, isLoading } = useGetGoldPricesQuery({
    currency,
    type: "both",
    days,
  });

  console.log(data);
  const [updateGoldPrices] = useUpdateGoldPricesMutation();

  const chartData = useMemo(() => {
    return (
      (data as GoldPriceResponse)?.historicalPrices?.map((price) => ({
        date: new Date(price.date).toLocaleDateString(),
        price: price.price,
      })) || []
    );
  }, [data]);

  const handleUpdate = async () => {
    await updateGoldPrices(undefined);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Gold Price Trends</CardTitle>
        <div className="flex gap-4">
          <Select
            value={currency}
            onValueChange={(value: "USD" | "GBP" | "EUR" | "GHS" | "NGN") =>
              setCurrency(value)
            }
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Currency" />
            </SelectTrigger>
            <SelectContent>
              {["USD", "GBP", "EUR", "GHS", "NGN"].map((curr) => (
                <SelectItem key={curr} value={curr}>
                  {curr}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={days}
            onValueChange={(value: "30" | "90" | "180" | "365") =>
              setDays(value)
            }
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Days" />
            </SelectTrigger>
            <SelectContent>
              {["30", "90", "180", "365"].map((day) => (
                <SelectItem key={day} value={day}>
                  {day} days
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button onClick={handleUpdate}>Update Prices</Button>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ChartContainer
            config={{
              price: {
                label: `Price (${currency})`,
                color: "hsl(var(--chart-1))",
              },
            }}
          >
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="price"
                stroke="var(--color-price)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        )}
        {(data as GoldPriceResponse)?.currentPrice && (
          <div className="mt-4">
            Current Price:{" "}
            {(data as GoldPriceResponse).currentPrice!.toFixed(2)} {currency}
            /gram
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GoldPriceChart;
