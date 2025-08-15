"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, DollarSign, Scale, ArrowUp, ArrowDown } from "lucide-react";

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

  const gainLossPercentage =
    portfolio.totalInvested > 0
      ? (portfolio.unrealizedGain / portfolio.totalInvested) * 100
      : 0;

  const isPositiveGain = portfolio.unrealizedGain >= 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Gold Holdings Card */}
      <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow duration-200">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Scale className="w-5 h-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-card-foreground text-lg">
                Gold Holdings
              </CardTitle>
              <p className="text-xs text-muted-foreground">
                Physical gold owned
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <p className="text-2xl font-bold text-card-foreground">
              {portfolio.totalGrams.toFixed(4)}
              <span className="text-lg font-medium text-muted-foreground ml-1">
                grams
              </span>
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Current Value:</span>
              <span className="font-semibold text-card-foreground">
                {formatCurrency(portfolio.currentValue, wallet.currency)}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Invested:</span>
              <span className="font-medium text-card-foreground">
                {formatCurrency(portfolio.totalInvested, wallet.currency)}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm pt-2 border-t border-border">
              <span className="text-muted-foreground">P&L:</span>
              <div className="flex items-center gap-1">
                {isPositiveGain ? (
                  <ArrowUp className="w-3 h-3 text-green-500" />
                ) : (
                  <ArrowDown className="w-3 h-3 text-red-500" />
                )}
                <span
                  className={`font-semibold ${
                    isPositiveGain
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {formatCurrency(portfolio.unrealizedGain, wallet.currency)}
                  <span className="text-xs ml-1">
                    ({isPositiveGain ? "+" : ""}
                    {gainLossPercentage.toFixed(2)}%)
                  </span>
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Wallet Balance Card */}
      <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow duration-200">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
              <Wallet className="w-5 h-5 text-secondary-foreground" />
            </div>
            <div>
              <CardTitle className="text-card-foreground text-lg">
                Wallet Balance
              </CardTitle>
              <p className="text-xs text-muted-foreground">Available funds</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <p className="text-2xl font-bold text-card-foreground">
              {formatCurrency(wallet.balance, wallet.currency)}
            </p>
          </div>
          <div className="bg-muted/30 rounded-lg p-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Status:</span>
              <span
                className={`font-medium ${
                  wallet.balance > 0
                    ? "text-green-600 dark:text-green-400"
                    : "text-orange-600 dark:text-orange-400"
                }`}
              >
                {wallet.balance > 0 ? "Ready to invest" : "Add funds"}
              </span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            {wallet.balance > 0
              ? "Start buying gold with your available balance"
              : "Top up your wallet to begin investing"}
          </p>
        </CardContent>
      </Card>

      {/* Gold Price Card */}
      <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow duration-200">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-card-foreground text-lg">
                Current Gold Price
              </CardTitle>
              <p className="text-xs text-muted-foreground">Live market rate</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <p className="text-2xl font-bold text-card-foreground">
              {formatCurrency(goldPrice.pricePerGram, goldPrice.currency)}
            </p>
            <p className="text-sm text-muted-foreground">per gram (24K)</p>
          </div>
          <div className="bg-muted/30 rounded-lg p-3">
            <div className="text-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mb-1 animate-pulse"></div>
              <span className="text-xs text-muted-foreground">
                Live pricing
              </span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Price updates every few seconds
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardSummary;
