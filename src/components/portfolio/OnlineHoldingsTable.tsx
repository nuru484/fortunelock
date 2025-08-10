// src/components/portfolio/OnlineHoldingsTable.tsx
"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, TrendingUp, Scale } from "lucide-react";

interface OnlineHolding {
  id: number;
  amount: number;
  transactionId: number;
  createdAt: Date;
  transaction: {
    referenceNumber: string;
    pricePerGram: number;
    totalCost: number;
    currency: string;
    createdAt: Date;
  };
}

interface OnlineHoldingsTableProps {
  onlineHoldings: {
    totalGrams: number;
    totalInvested: number;
    currentValue: number;
    holdings: OnlineHolding[];
  };
  currentGoldPrice: number;
  currency: string;
}

const OnlineHoldingsTable: React.FC<OnlineHoldingsTableProps> = ({
  onlineHoldings,
  currentGoldPrice,
  currency,
}) => {
  const formatCurrency = (amount: number, curr: string) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: curr,
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    }).format(amount);

  const calculateCurrentValue = (amount: number) => amount * currentGoldPrice;
  const calculateGainLoss = (amount: number, originalPrice: number) =>
    (currentGoldPrice - originalPrice) * amount;
  const calculateGainLossPercentage = (originalPrice: number) =>
    ((currentGoldPrice - originalPrice) / originalPrice) * 100;

  return (
    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Monitor className="w-5 h-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-green-900 text-xl">
                Online Gold Holdings
              </CardTitle>
              <p className="text-green-700 text-sm">
                Gold purchased through the platform
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 text-green-700">
              <Scale className="w-4 h-4" />
              <span className="font-semibold">
                {onlineHoldings.totalGrams.toFixed(4)}g
              </span>
            </div>
            <p className="text-xs text-green-600">Total Holdings</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white/60 rounded-lg p-4 border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <Scale className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">
                Total Weight
              </span>
            </div>
            <p className="text-lg font-bold text-green-900">
              {onlineHoldings.totalGrams.toFixed(4)}g
            </p>
          </div>
          <div className="bg-white/60 rounded-lg p-4 border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">
                Total Invested
              </span>
            </div>
            <p className="text-lg font-bold text-green-900">
              {formatCurrency(onlineHoldings.totalInvested, currency)}
            </p>
          </div>
          <div className="bg-white/60 rounded-lg p-4 border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">
                Current Value
              </span>
            </div>
            <p className="text-lg font-bold text-green-900">
              {formatCurrency(onlineHoldings.currentValue, currency)}
            </p>
          </div>
        </div>

        {/* Holdings Table */}
        {onlineHoldings.holdings.length === 0 ? (
          <div className="bg-white/60 rounded-lg p-8 text-center border border-green-200">
            <Monitor className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <p className="text-green-700 font-medium mb-2">
              No online holdings found
            </p>
            <p className="text-green-600 text-sm">
              Start investing to see your holdings here
            </p>
          </div>
        ) : (
          <div className="bg-white/60 rounded-lg border border-green-200 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-green-100/50">
                  <TableHead className="text-green-800">
                    Transaction ID
                  </TableHead>
                  <TableHead className="text-green-800">Amount (g)</TableHead>
                  <TableHead className="text-green-800">
                    Purchase Price
                  </TableHead>
                  <TableHead className="text-green-800">Total Cost</TableHead>
                  <TableHead className="text-green-800">
                    Current Value
                  </TableHead>
                  <TableHead className="text-green-800">Gain/Loss</TableHead>
                  <TableHead className="text-green-800">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {onlineHoldings.holdings.map((holding) => {
                  const currentValue = calculateCurrentValue(holding.amount);
                  const gainLoss = calculateGainLoss(
                    holding.amount,
                    holding.transaction.pricePerGram
                  );
                  const gainLossPercentage = calculateGainLossPercentage(
                    holding.transaction.pricePerGram
                  );
                  const isPositive = gainLoss >= 0;

                  return (
                    <TableRow key={holding.id} className="hover:bg-green-50/50">
                      <TableCell className="font-medium text-green-900">
                        {holding.transaction.referenceNumber}
                      </TableCell>
                      <TableCell className="text-green-800">
                        {holding.amount.toFixed(4)}
                      </TableCell>
                      <TableCell className="text-green-800">
                        {formatCurrency(
                          holding.transaction.pricePerGram,
                          holding.transaction.currency
                        )}
                      </TableCell>
                      <TableCell className="text-green-800">
                        {formatCurrency(
                          holding.transaction.totalCost,
                          holding.transaction.currency
                        )}
                      </TableCell>
                      <TableCell className="font-semibold text-green-900">
                        {formatCurrency(currentValue, currency)}
                      </TableCell>
                      <TableCell
                        className={`font-semibold ${
                          isPositive ? "text-emerald-600" : "text-red-600"
                        }`}
                      >
                        <div className="flex flex-col">
                          <span>{formatCurrency(gainLoss, currency)}</span>
                          <span className="text-xs">
                            {isPositive ? "+" : ""}
                            {gainLossPercentage.toFixed(2)}%
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-green-800">
                        {new Date(holding.createdAt).toLocaleDateString()}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default OnlineHoldingsTable;
