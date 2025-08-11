// src/components/admin/GoldPricesOverview.tsx
"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface GoldPrice {
  currency: string;
  pricePerGram: number;
  recordedAt: Date;
}

interface GoldPricesOverviewProps {
  prices: GoldPrice[];
}

const GoldPricesOverview: React.FC<GoldPricesOverviewProps> = ({ prices }) => {
  const formatCurrency = (amount: number, currency: string) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    }).format(amount);

  return (
    <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-green-600" />
          <CardTitle className="text-green-900">Current Gold Prices</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {prices.map((price) => (
            <div
              key={price.currency}
              className="p-4 bg-white rounded-lg shadow"
            >
              <p className="text-lg font-semibold">{price.currency}</p>
              <p className="text-2xl font-bold text-green-900">
                {formatCurrency(price.pricePerGram, price.currency)}
              </p>
              <p className="text-sm text-gray-600">
                Updated: {new Date(price.recordedAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GoldPricesOverview;
