// src/components/portfolio/PortfolioSummary.tsx
"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Scale,
  Target,
  Activity,
} from "lucide-react";

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
  performanceMetrics: {
    totalReturn: number;
    totalReturnPercentage: number;
    averagePurchasePrice: number;
    currentGoldPrice: number;
  };
}

const PortfolioSummary: React.FC<PortfolioSummaryProps> = ({
  portfolio,
  wallet,
  performanceMetrics,
}) => {
  const formatCurrency = (amount: number, currency: string) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    }).format(amount);

  const formatPercentage = (percentage: number) =>
    `${percentage >= 0 ? "+" : ""}${percentage.toFixed(2)}%`;

  const isPositiveGain = portfolio.unrealizedGain >= 0;
  const gainColor = isPositiveGain ? "text-green-600" : "text-red-600";
  const gainBgColor = isPositiveGain ? "bg-green-50" : "bg-red-50";
  const gainBorderColor = isPositiveGain
    ? "border-green-200"
    : "border-red-200";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Portfolio Card */}
      <Card className="lg:col-span-2 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 border-amber-200 shadow-xl">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-amber-900 text-xl">
                  Portfolio Overview
                </CardTitle>
                <p className="text-amber-700 text-sm">
                  Your complete gold investment summary
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-amber-600">Last Updated</p>
              <p className="text-xs text-amber-700">
                {new Date(portfolio.lastCalculatedAt).toLocaleString()}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Total Holdings */}
            <div className="bg-white/60 rounded-xl p-4 border border-amber-200">
              <div className="flex items-center gap-2 mb-2">
                <Scale className="w-4 h-4 text-amber-600" />
                <p className="text-sm font-medium text-amber-700">
                  Total Gold Holdings
                </p>
              </div>
              <p className="text-2xl font-bold text-amber-900">
                {portfolio.totalGrams.toFixed(4)}
              </p>
              <p className="text-sm text-amber-600">grams</p>
            </div>

            {/* Total Invested */}
            <div className="bg-white/60 rounded-xl p-4 border border-amber-200">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-amber-600" />
                <p className="text-sm font-medium text-amber-700">
                  Total Invested
                </p>
              </div>
              <p className="text-2xl font-bold text-amber-900">
                {formatCurrency(portfolio.totalInvested, wallet.currency)}
              </p>
              <p className="text-sm text-amber-600">
                Avg:{" "}
                {formatCurrency(
                  performanceMetrics.averagePurchasePrice,
                  wallet.currency
                )}
                /g
              </p>
            </div>

            {/* Current Value */}
            <div className="bg-white/60 rounded-xl p-4 border border-amber-200">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-amber-600" />
                <p className="text-sm font-medium text-amber-700">
                  Current Value
                </p>
              </div>
              <p className="text-2xl font-bold text-amber-900">
                {formatCurrency(portfolio.currentValue, wallet.currency)}
              </p>
              <p className="text-sm text-amber-600">
                At:{" "}
                {formatCurrency(
                  performanceMetrics.currentGoldPrice,
                  wallet.currency
                )}
                /g
              </p>
            </div>

            {/* Unrealized Gain/Loss */}
            <div
              className={`rounded-xl p-4 border ${gainBgColor} ${gainBorderColor}`}
            >
              <div className="flex items-center gap-2 mb-2">
                {isPositiveGain ? (
                  <TrendingUp className="w-4 h-4 text-green-600" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-600" />
                )}
                <p className={`text-sm font-medium ${gainColor}`}>
                  Unrealized Gain/Loss
                </p>
              </div>
              <p className={`text-2xl font-bold ${gainColor}`}>
                {formatCurrency(portfolio.unrealizedGain, wallet.currency)}
              </p>
              <p className={`text-sm ${gainColor}`}>
                {formatPercentage(performanceMetrics.totalReturnPercentage)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Wallet & Performance Card */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200 shadow-xl">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-blue-900">Account Summary</CardTitle>
              <p className="text-blue-700 text-sm">
                Wallet & performance metrics
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Wallet Balance */}
          <div className="bg-white/60 rounded-xl p-4 border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-blue-600" />
              <p className="text-sm font-medium text-blue-700">
                Available Balance
              </p>
            </div>
            <p className="text-xl font-bold text-blue-900">
              {formatCurrency(wallet.balance, wallet.currency)}
            </p>
            <p className="text-xs text-blue-600">Ready for investment</p>
          </div>

          {/* Performance Metrics */}
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-blue-200">
              <span className="text-sm text-blue-700">Total Return</span>
              <span
                className={`font-semibold ${
                  performanceMetrics.totalReturn >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {formatCurrency(
                  performanceMetrics.totalReturn,
                  wallet.currency
                )}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-blue-200">
              <span className="text-sm text-blue-700">Return %</span>
              <span
                className={`font-semibold ${
                  performanceMetrics.totalReturnPercentage >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {formatPercentage(performanceMetrics.totalReturnPercentage)}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-blue-200">
              <span className="text-sm text-blue-700">Avg Buy Price</span>
              <span className="font-semibold text-blue-900">
                {formatCurrency(
                  performanceMetrics.averagePurchasePrice,
                  wallet.currency
                )}
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-blue-700">Current Price</span>
              <span className="font-semibold text-blue-900">
                {formatCurrency(
                  performanceMetrics.currentGoldPrice,
                  wallet.currency
                )}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PortfolioSummary;
