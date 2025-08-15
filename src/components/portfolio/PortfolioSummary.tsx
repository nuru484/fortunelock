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
  const gainColor = isPositiveGain
    ? "text-green-600 dark:text-green-400"
    : "text-red-600 dark:text-red-400";
  const gainBgColor = isPositiveGain ? "bg-muted/50" : "bg-muted/50";
  const gainBorderColor = isPositiveGain ? "border-border" : "border-border";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Portfolio Card */}
      <Card className="lg:col-span-2 bg-card border-border shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-sm">
                <Scale className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <CardTitle className="text-card-foreground text-xl">
                  Portfolio Overview
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  Your complete gold investment summary
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Last Updated</p>
              <p className="text-xs text-muted-foreground">
                {new Date(portfolio.lastCalculatedAt).toLocaleString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Total Holdings */}
            <div className="bg-muted/50 rounded-lg p-4 border border-border">
              <div className="flex items-center gap-2 mb-2">
                <Scale className="w-4 h-4 text-primary" />
                <p className="text-sm font-medium text-card-foreground">
                  Total Gold Holdings
                </p>
              </div>
              <p className="text-2xl font-bold text-card-foreground">
                {portfolio.totalGrams.toFixed(4)}
              </p>
              <p className="text-sm text-muted-foreground">grams</p>
            </div>

            {/* Total Invested */}
            <div className="bg-muted/50 rounded-lg p-4 border border-border">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-primary" />
                <p className="text-sm font-medium text-card-foreground">
                  Total Invested
                </p>
              </div>
              <p className="text-2xl font-bold text-card-foreground">
                {formatCurrency(portfolio.totalInvested, wallet.currency)}
              </p>
              <p className="text-sm text-muted-foreground">
                Avg:{" "}
                {formatCurrency(
                  performanceMetrics.averagePurchasePrice,
                  wallet.currency
                )}
                /g
              </p>
            </div>

            {/* Current Value */}
            <div className="bg-muted/50 rounded-lg p-4 border border-border">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-primary" />
                <p className="text-sm font-medium text-card-foreground">
                  Current Value
                </p>
              </div>
              <p className="text-2xl font-bold text-card-foreground">
                {formatCurrency(portfolio.currentValue, wallet.currency)}
              </p>
              <p className="text-sm text-muted-foreground">
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
              className={`rounded-lg p-4 border ${gainBgColor} ${gainBorderColor}`}
            >
              <div className="flex items-center gap-2 mb-2">
                {isPositiveGain ? (
                  <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-600 dark:text-red-400" />
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
      <Card className="bg-card border-border shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-sm">
              <Activity className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-card-foreground">
                Account Summary
              </CardTitle>
              <p className="text-muted-foreground text-sm">
                Wallet & performance metrics
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Wallet Balance */}
          <div className="bg-muted/50 rounded-lg p-4 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-primary" />
              <p className="text-sm font-medium text-card-foreground">
                Available Balance
              </p>
            </div>
            <p className="text-xl font-bold text-card-foreground">
              {formatCurrency(wallet.balance, wallet.currency)}
            </p>
            <p className="text-xs text-muted-foreground">
              Ready for investment
            </p>
          </div>

          {/* Performance Metrics */}
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-sm text-muted-foreground">
                Total Return
              </span>
              <span
                className={`font-semibold ${
                  performanceMetrics.totalReturn >= 0
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {formatCurrency(
                  performanceMetrics.totalReturn,
                  wallet.currency
                )}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-sm text-muted-foreground">Return %</span>
              <span
                className={`font-semibold ${
                  performanceMetrics.totalReturnPercentage >= 0
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {formatPercentage(performanceMetrics.totalReturnPercentage)}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-sm text-muted-foreground">
                Avg Buy Price
              </span>
              <span className="font-semibold text-card-foreground">
                {formatCurrency(
                  performanceMetrics.averagePurchasePrice,
                  wallet.currency
                )}
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-muted-foreground">
                Current Price
              </span>
              <span className="font-semibold text-card-foreground">
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
