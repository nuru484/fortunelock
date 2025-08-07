"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Wallet } from "lucide-react";

interface DashboardSummaryProps {
  portfolio: {
    totalGrams: number;
    totalInvested: number;
    currentValue: number;
    unrealizedGain: number;
  };
  wallet: {
    balance: number;
    currency: string;
  };
  goldPrice: {
    pricePerGram: number;
    currency: string;
  };
}

const DashboardSummary: React.FC<DashboardSummaryProps> = ({
  portfolio,
  wallet,
  goldPrice,
}) => {
  const formatCurrency = (amount: number, currency: string) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    }).format(amount);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-amber-600" />
            <CardTitle className="text-amber-900">Gold Holdings</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-amber-900">
            {portfolio.totalGrams.toFixed(4)} grams
          </p>
          <p className="text-sm text-amber-700">
            Current Value:{" "}
            {formatCurrency(portfolio.currentValue, wallet.currency)}
          </p>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <Wallet className="w-6 h-6 text-blue-600" />
            <CardTitle className="text-blue-900">Wallet Balance</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-blue-900">
            {formatCurrency(wallet.balance, wallet.currency)}
          </p>
          <p className="text-sm text-blue-700">Available to invest</p>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-green-600" />
            <CardTitle className="text-green-900">Current Gold Price</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-green-900">
            {formatCurrency(goldPrice.pricePerGram, goldPrice.currency)}
          </p>
          <p className="text-sm text-green-700">Per gram (24K)</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardSummary;
