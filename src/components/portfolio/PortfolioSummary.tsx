"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface PortfolioSummaryProps {
  portfolio: {
    totalGrams: number;
    totalInvested: number;
    currentValue: number;
    unrealizedGain: number;
    lastCalculatedAt: Date;
  };
  wallet: {
    balance: number;
    currency: string;
  };
}

const PortfolioSummary: React.FC<PortfolioSummaryProps> = ({
  portfolio,
  wallet,
}) => {
  const formatCurrency = (amount: number, currency: string) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    }).format(amount);

  const gainColor =
    portfolio.unrealizedGain >= 0 ? "text-green-600" : "text-red-600";

  return (
    <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-amber-600" />
          <CardTitle className="text-amber-900">Portfolio Overview</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-sm text-amber-700">Total Gold Holdings</p>
            <p className="text-2xl font-bold text-amber-900">
              {portfolio.totalGrams.toFixed(4)} grams
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-amber-700">Total Invested</p>
            <p className="text-2xl font-bold text-amber-900">
              {formatCurrency(portfolio.totalInvested, wallet.currency)}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-amber-700">Current Value</p>
            <p className="text-2xl font-bold text-amber-900">
              {formatCurrency(portfolio.currentValue, wallet.currency)}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-amber-700">Unrealized Gain/Loss</p>
            <p className={`text-2xl font-bold ${gainColor}`}>
              {formatCurrency(portfolio.unrealizedGain, wallet.currency)}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-amber-700">Wallet Balance</p>
            <p className="text-2xl font-bold text-amber-900">
              {formatCurrency(wallet.balance, wallet.currency)}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-amber-700">Last Updated</p>
            <p className="text-2xl font-bold text-amber-900">
              {new Date(portfolio.lastCalculatedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioSummary;
