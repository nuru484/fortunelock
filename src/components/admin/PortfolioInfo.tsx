import React from "react";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Scale,
  Calculator,
  Clock,
  PieChart,
} from "lucide-react";

export interface PortfolioInfoProps {
  portfolio: {
    id: number;
    totalGrams: number;
    totalInvested: number;
    currentValue: number;
    unrealizedGain: number;
    lastCalculatedAt: string;
  } | null;
}

const PortfolioInfo = ({ portfolio }: PortfolioInfoProps) => {
  if (!portfolio) {
    return (
      <div className="bg-card border-border shadow-lg rounded-lg">
        <div className="p-12 text-center">
          <div className="w-16 h-16 bg-muted/50 rounded-full mx-auto mb-4 flex items-center justify-center">
            <PieChart className="w-8 h-8 text-primary" />
          </div>
          <div className="text-card-foreground text-lg font-medium mb-2">
            No portfolio data available
          </div>
          <div className="text-muted-foreground text-sm">
            Your portfolio summary will appear here once data is loaded
          </div>
        </div>
      </div>
    );
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const formatWeight = (grams: number) => {
    if (grams >= 1000) {
      return `${(grams / 1000).toFixed(2)} kg`;
    }
    return `${grams.toFixed(2)} g`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getReturnPercentage = () => {
    if (portfolio.totalInvested === 0) return 0;
    return (portfolio.unrealizedGain / portfolio.totalInvested) * 100;
  };

  const returnPercentage = getReturnPercentage();
  const isPositiveReturn = portfolio.unrealizedGain >= 0;

  return (
    <div className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-secondary border-b border-border px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-8 bg-primary rounded-full"></div>
            <div>
              <h2 className="text-2xl font-bold text-card-foreground">
                Portfolio Overview
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Gold Investment Summary
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground mb-1">
              Portfolio ID
            </div>
            <div className="font-mono text-lg font-semibold text-card-foreground">
              #{portfolio.id}
            </div>
          </div>
        </div>
      </div>

      {/* Main Metrics Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Total Weight */}
          <div className="bg-muted/50 p-4 rounded-lg border border-border hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Scale className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-sm text-card-foreground font-medium">
                  Total Weight
                </div>
                <div className="text-2xl font-bold text-card-foreground">
                  {formatWeight(portfolio.totalGrams)}
                </div>
              </div>
            </div>
          </div>

          {/* Total Invested */}
          <div className="bg-muted/50 p-4 rounded-lg border border-border hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-sm text-card-foreground font-medium">
                  Total Invested
                </div>
                <div className="text-2xl font-bold text-card-foreground">
                  {formatCurrency(portfolio.totalInvested)}
                </div>
              </div>
            </div>
          </div>

          {/* Current Value */}
          <div className="bg-muted/50 p-4 rounded-lg border border-border hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Calculator className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-sm text-card-foreground font-medium">
                  Current Value
                </div>
                <div className="text-2xl font-bold text-card-foreground">
                  {formatCurrency(portfolio.currentValue)}
                </div>
              </div>
            </div>
          </div>

          {/* Unrealized Gain/Loss */}
          <div className="bg-muted/50 p-4 rounded-lg border border-border hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                {isPositiveReturn ? (
                  <TrendingUp className="w-5 h-5 text-primary-foreground" />
                ) : (
                  <TrendingDown className="w-5 h-5 text-primary-foreground" />
                )}
              </div>
              <div>
                <div
                  className={`text-sm font-medium ${
                    isPositiveReturn
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {isPositiveReturn ? "Unrealized Gain" : "Unrealized Loss"}
                </div>
                <div
                  className={`text-2xl font-bold ${
                    isPositiveReturn
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {formatCurrency(Math.abs(portfolio.unrealizedGain))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Summary */}
        <div className="bg-muted/50 rounded-lg p-6 border border-border">
          <h3 className="text-lg font-semibold text-card-foreground mb-4 flex items-center gap-2">
            <div className="w-1 h-5 bg-primary rounded-full"></div>
            Performance Summary
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Return Percentage */}
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-1">
                Total Return
              </div>
              <div
                className={`text-3xl font-bold ${
                  isPositiveReturn
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {isPositiveReturn ? "+" : ""}
                {returnPercentage.toFixed(2)}%
              </div>
            </div>

            {/* Average Cost per Gram */}
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-1">
                Avg Cost/Gram
              </div>
              <div className="text-2xl font-semibold text-card-foreground">
                {portfolio.totalGrams > 0
                  ? formatCurrency(
                      portfolio.totalInvested / portfolio.totalGrams
                    )
                  : formatCurrency(0)}
              </div>
            </div>

            {/* Current Value per Gram */}
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-1">
                Current Value/Gram
              </div>
              <div className="text-2xl font-semibold text-card-foreground">
                {portfolio.totalGrams > 0
                  ? formatCurrency(
                      portfolio.currentValue / portfolio.totalGrams
                    )
                  : formatCurrency(0)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-secondary px-6 py-4 border-t border-border">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>
              Last calculated: {formatDate(portfolio.lastCalculatedAt)}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Live pricing
            </span>
            <span className="text-muted-foreground">•</span>
            <span>Auto-updated daily</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioInfo;
