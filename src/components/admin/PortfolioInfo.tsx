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
      <div className="bg-gradient-to-br from-emerald-50 to-teal-100 border border-emerald-200 shadow-lg rounded-xl">
        <div className="p-12 text-center">
          <div className="w-16 h-16 bg-emerald-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <PieChart className="w-8 h-8 text-emerald-600" />
          </div>
          <div className="text-emerald-600 text-lg font-medium mb-2">
            No portfolio data available
          </div>
          <div className="text-emerald-700 text-sm">
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
    <div className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-gray-100 px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full"></div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Portfolio Overview
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Gold Investment Summary
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 mb-1">Portfolio ID</div>
            <div className="font-mono text-lg font-semibold text-gray-800">
              #{portfolio.id}
            </div>
          </div>
        </div>
      </div>

      {/* Main Metrics Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Total Weight */}
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-4 rounded-lg border border-amber-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <Scale className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <div className="text-sm text-amber-600 font-medium">
                  Total Weight
                </div>
                <div className="text-2xl font-bold text-amber-800">
                  {formatWeight(portfolio.totalGrams)}
                </div>
              </div>
            </div>
          </div>

          {/* Total Invested */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-blue-600 font-medium">
                  Total Invested
                </div>
                <div className="text-2xl font-bold text-blue-800">
                  {formatCurrency(portfolio.totalInvested)}
                </div>
              </div>
            </div>
          </div>

          {/* Current Value */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-4 rounded-lg border border-emerald-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <Calculator className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-sm text-emerald-600 font-medium">
                  Current Value
                </div>
                <div className="text-2xl font-bold text-emerald-800">
                  {formatCurrency(portfolio.currentValue)}
                </div>
              </div>
            </div>
          </div>

          {/* Unrealized Gain/Loss */}
          <div
            className={`bg-gradient-to-br p-4 rounded-lg border hover:shadow-md transition-shadow ${
              isPositiveReturn
                ? "from-green-50 to-emerald-50 border-green-100"
                : "from-red-50 to-rose-50 border-red-100"
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isPositiveReturn ? "bg-green-100" : "bg-red-100"
                }`}
              >
                {isPositiveReturn ? (
                  <TrendingUp className="w-5 h-5 text-green-600" />
                ) : (
                  <TrendingDown className="w-5 h-5 text-red-600" />
                )}
              </div>
              <div>
                <div
                  className={`text-sm font-medium ${
                    isPositiveReturn ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {isPositiveReturn ? "Unrealized Gain" : "Unrealized Loss"}
                </div>
                <div
                  className={`text-2xl font-bold ${
                    isPositiveReturn ? "text-green-800" : "text-red-800"
                  }`}
                >
                  {formatCurrency(Math.abs(portfolio.unrealizedGain))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Summary */}
        <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <div className="w-1 h-5 bg-gray-500 rounded-full"></div>
            Performance Summary
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Return Percentage */}
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-1">Total Return</div>
              <div
                className={`text-3xl font-bold ${
                  isPositiveReturn ? "text-green-600" : "text-red-600"
                }`}
              >
                {isPositiveReturn ? "+" : ""}
                {returnPercentage.toFixed(2)}%
              </div>
            </div>

            {/* Average Cost per Gram */}
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-1">Avg Cost/Gram</div>
              <div className="text-2xl font-semibold text-gray-800">
                {portfolio.totalGrams > 0
                  ? formatCurrency(
                      portfolio.totalInvested / portfolio.totalGrams
                    )
                  : formatCurrency(0)}
              </div>
            </div>

            {/* Current Value per Gram */}
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-1">
                Current Value/Gram
              </div>
              <div className="text-2xl font-semibold text-gray-800">
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
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>
              Last calculated: {formatDate(portfolio.lastCalculatedAt)}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Live pricing
            </span>
            <span className="text-gray-400">•</span>
            <span>Auto-updated daily</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioInfo;
