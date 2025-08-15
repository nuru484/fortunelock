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
    <Card className="bg-card border-border shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-sm">
              <Monitor className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-card-foreground text-xl">
                Online Gold Holdings
              </CardTitle>
              <p className="text-muted-foreground text-sm">
                Gold purchased through the platform
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 text-card-foreground">
              <Scale className="w-4 h-4" />
              <span className="font-semibold">
                {onlineHoldings.totalGrams.toFixed(4)}g
              </span>
            </div>
            <p className="text-xs text-muted-foreground">Total Holdings</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-muted/50 rounded-lg p-4 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Scale className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-card-foreground">
                Total Weight
              </span>
            </div>
            <p className="text-lg font-bold text-card-foreground">
              {onlineHoldings.totalGrams.toFixed(4)}g
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-4 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-card-foreground">
                Total Invested
              </span>
            </div>
            <p className="text-lg font-bold text-card-foreground">
              {formatCurrency(onlineHoldings.totalInvested, currency)}
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-4 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-card-foreground">
                Current Value
              </span>
            </div>
            <p className="text-lg font-bold text-card-foreground">
              {formatCurrency(onlineHoldings.currentValue, currency)}
            </p>
            {onlineHoldings.currentValue > onlineHoldings.totalInvested ? (
              <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                Profit:{" "}
                {formatCurrency(
                  onlineHoldings.currentValue - onlineHoldings.totalInvested,
                  currency
                )}
              </p>
            ) : (
              <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                Loss:{" "}
                {formatCurrency(
                  onlineHoldings.totalInvested - onlineHoldings.currentValue,
                  currency
                )}
              </p>
            )}
          </div>
        </div>

        {/* Holdings Table */}
        {onlineHoldings.holdings.length === 0 ? (
          <div className="bg-muted/30 rounded-lg p-8 text-center border border-border">
            <Monitor className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-card-foreground font-medium mb-2">
              No online holdings found
            </p>
            <p className="text-muted-foreground text-sm">
              Start investing to see your holdings here
            </p>
          </div>
        ) : (
          <div className="bg-muted/30 rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary hover:bg-secondary/80">
                  <TableHead className="text-secondary-foreground font-semibold">
                    Transaction ID
                  </TableHead>
                  <TableHead className="text-secondary-foreground font-semibold">
                    Amount (g)
                  </TableHead>
                  <TableHead className="text-secondary-foreground font-semibold">
                    Purchase Price
                  </TableHead>
                  <TableHead className="text-secondary-foreground font-semibold">
                    Total Cost
                  </TableHead>
                  <TableHead className="text-secondary-foreground font-semibold">
                    Current Value
                  </TableHead>
                  <TableHead className="text-secondary-foreground font-semibold">
                    Gain/Loss
                  </TableHead>
                  <TableHead className="text-secondary-foreground font-semibold">
                    Date
                  </TableHead>
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
                    <TableRow
                      key={holding.id}
                      className="hover:bg-muted/50 border-border transition-colors"
                    >
                      <TableCell className="font-medium text-card-foreground">
                        <span className="font-mono text-sm bg-secondary/30 px-2 py-1 rounded">
                          {holding.transaction.referenceNumber}
                        </span>
                      </TableCell>
                      <TableCell className="text-card-foreground font-medium">
                        {holding.amount.toFixed(4)}
                        <span className="text-muted-foreground ml-1">g</span>
                      </TableCell>
                      <TableCell className="text-card-foreground">
                        {formatCurrency(
                          holding.transaction.pricePerGram,
                          holding.transaction.currency
                        )}
                        <span className="text-muted-foreground text-xs block">
                          per gram
                        </span>
                      </TableCell>
                      <TableCell className="text-card-foreground font-medium">
                        {formatCurrency(
                          holding.transaction.totalCost,
                          holding.transaction.currency
                        )}
                      </TableCell>
                      <TableCell className="font-semibold text-card-foreground">
                        {formatCurrency(currentValue, currency)}
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span
                            className={`font-semibold ${
                              isPositive
                                ? "text-green-600 dark:text-green-400"
                                : "text-red-600 dark:text-red-400"
                            }`}
                          >
                            {isPositive ? "+" : ""}
                            {formatCurrency(gainLoss, currency)}
                          </span>
                          <span
                            className={`text-xs ${
                              isPositive
                                ? "text-green-600/80 dark:text-green-400/80"
                                : "text-red-600/80 dark:text-red-400/80"
                            }`}
                          >
                            {isPositive ? "+" : ""}
                            {gainLossPercentage.toFixed(2)}%
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {new Date(holding.createdAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        )}

        {/* Total Summary Footer */}
        {onlineHoldings.holdings.length > 0 && (
          <div className="mt-6 bg-primary/10 border border-primary/20 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-card-foreground">
                  Portfolio Summary
                </span>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">
                  Total P&L:
                  <span
                    className={`ml-2 font-semibold ${
                      onlineHoldings.currentValue >=
                      onlineHoldings.totalInvested
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {formatCurrency(
                      onlineHoldings.currentValue -
                        onlineHoldings.totalInvested,
                      currency
                    )}
                    (
                    {(
                      ((onlineHoldings.currentValue -
                        onlineHoldings.totalInvested) /
                        onlineHoldings.totalInvested) *
                      100
                    ).toFixed(2)}
                    %)
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default OnlineHoldingsTable;
