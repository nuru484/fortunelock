// components/admin/GoldPriceDisplay.tsx
"use client";
import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, Coins } from "lucide-react";
import { useGetGoldPricesQuery } from "@/redux/api/apiSlice";

interface GoldPriceDisplayProps {
  currency: string;
  onPriceUpdate: (price: number) => void;
  useCurrentPrice: boolean;
}

const GoldPriceDisplay: React.FC<GoldPriceDisplayProps> = ({
  currency,
  onPriceUpdate,
  useCurrentPrice,
}) => {
  const { data, isLoading, error } = useGetGoldPricesQuery(currency);
  const currentPrice = data?.price?.pricePerGram || 0;

  useEffect(() => {
    if (useCurrentPrice && currentPrice > 0) {
      onPriceUpdate(currentPrice);
    }
  }, [useCurrentPrice, currentPrice, onPriceUpdate]);

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    }).format(amount);

  return (
    <Card className="bg-card border-border shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Coins className="w-6 h-6 text-primary" />
            <div>
              <CardTitle className="text-card-foreground">
                Current Market Price
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Real-time gold pricing reference
              </CardDescription>
            </div>
          </div>
          {isLoading && (
            <Loader2 className="w-5 h-5 animate-spin text-primary" />
          )}
        </div>
      </CardHeader>
      <CardContent>
        {error || !data?.price ? (
          <div className="text-center text-red-600 dark:text-red-400 text-sm">
            Unable to fetch current gold price
          </div>
        ) : (
          <div className="text-2xl font-bold text-card-foreground">
            {formatCurrency(currentPrice)}{" "}
            <span className="text-base font-normal">per gram</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GoldPriceDisplay;
