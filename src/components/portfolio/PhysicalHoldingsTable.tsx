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
import {
  Vault,
  Shield,
  CheckCircle,
  AlertCircle,
  Package,
  Scale,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PhysicalGoldItem {
  id: number;
  type: string;
  description: string | null;
  serialNumber: string | null;
  karat: number | null;
  purity: number | null;
  weightGrams: number;
  origin: string | null;
  storageLocation: string | null;
  verified: boolean;
  createdAt: Date;
  transaction: {
    referenceNumber: string;
    pricePerGram: number;
    totalCost: number;
    currency: string;
    createdAt: Date;
  };
}

interface PhysicalHoldingsTableProps {
  physicalHoldings: {
    totalGrams: number;
    totalInvested: number;
    currentValue: number;
    goldItems: PhysicalGoldItem[];
  };
  currentGoldPrice: number;
  currency: string;
}

const PhysicalHoldingsTable: React.FC<PhysicalHoldingsTableProps> = ({
  physicalHoldings,
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

  const calculateCurrentValue = (weightGrams: number) =>
    weightGrams * currentGoldPrice;
  const calculateGainLoss = (weightGrams: number, originalPrice: number) =>
    (currentGoldPrice - originalPrice) * weightGrams;
  const calculateGainLossPercentage = (originalPrice: number) =>
    ((currentGoldPrice - originalPrice) / originalPrice) * 100;

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "bar":
        return <Package className="w-4 h-4" />;
      case "coin":
        return <Scale className="w-4 h-4" />;
      default:
        return <Vault className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "bar":
        return "bg-accent text-accent-foreground border-accent";
      case "coin":
        return "bg-primary text-primary-foreground border-primary";
      case "jewelry":
        return "bg-destructive text-destructive-foreground border-destructive";
      default:
        return "bg-muted text-muted-foreground border-muted";
    }
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <Card className="bg-card border-border shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-sm">
              <Vault className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-card-foreground text-xl">
                Physical Gold Holdings
              </CardTitle>
              <p className="text-muted-foreground text-sm">
                Gold deposited and stored in our vault
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 text-card-foreground">
              <Shield className="w-4 h-4" />
              <span className="font-semibold">
                {physicalHoldings.totalGrams.toFixed(4)}g
              </span>
            </div>
            <p className="text-xs text-muted-foreground">Secured Holdings</p>
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
              {physicalHoldings.totalGrams.toFixed(4)}g
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-4 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-card-foreground">
                Deposit Value
              </span>
            </div>
            <p className="text-lg font-bold text-card-foreground">
              {formatCurrency(physicalHoldings.totalInvested, currency)}
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
              {formatCurrency(physicalHoldings.currentValue, currency)}
            </p>
            {physicalHoldings.currentValue > physicalHoldings.totalInvested ? (
              <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                Profit:{" "}
                {formatCurrency(
                  physicalHoldings.currentValue -
                    physicalHoldings.totalInvested,
                  currency
                )}
              </p>
            ) : (
              <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                Loss:{" "}
                {formatCurrency(
                  physicalHoldings.totalInvested -
                    physicalHoldings.currentValue,
                  currency
                )}
              </p>
            )}
          </div>
        </div>

        {/* Holdings Table */}
        {physicalHoldings.goldItems.length === 0 ? (
          <div className="bg-muted/30 rounded-lg p-8 text-center border border-border">
            <Vault className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-card-foreground font-medium mb-2">
              No physical gold deposited
            </p>
            <p className="text-muted-foreground text-sm">
              Deposit physical gold to see your items here
            </p>
          </div>
        ) : (
          <div className="bg-muted/30 rounded-lg border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary hover:bg-secondary/80">
                    <TableHead className="text-secondary-foreground font-semibold min-w-[200px]">
                      Item Details
                    </TableHead>
                    <TableHead className="text-secondary-foreground font-semibold min-w-[120px]">
                      Specifications
                    </TableHead>
                    <TableHead className="text-secondary-foreground font-semibold min-w-[80px]">
                      Weight
                    </TableHead>
                    <TableHead className="text-secondary-foreground font-semibold min-w-[120px]">
                      Deposit Value
                    </TableHead>
                    <TableHead className="text-secondary-foreground font-semibold min-w-[120px]">
                      Current Value
                    </TableHead>
                    <TableHead className="text-secondary-foreground font-semibold min-w-[100px]">
                      Storage
                    </TableHead>
                    <TableHead className="text-secondary-foreground font-semibold min-w-[100px]">
                      Status
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {physicalHoldings.goldItems.map((item) => {
                    const currentValue = calculateCurrentValue(
                      item.weightGrams
                    );
                    const gainLoss = calculateGainLoss(
                      item.weightGrams,
                      item.transaction.pricePerGram
                    );
                    const gainLossPercentage = calculateGainLossPercentage(
                      item.transaction.pricePerGram
                    );
                    const isPositive = gainLoss >= 0;

                    return (
                      <TableRow
                        key={item.id}
                        className="hover:bg-muted/50 border-border transition-colors"
                      >
                        <TableCell className="max-w-[200px]">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className={getTypeColor(item.type)}
                              >
                                {getTypeIcon(item.type)}
                                <span className="ml-1 capitalize">
                                  {item.type}
                                </span>
                              </Badge>
                            </div>
                            {item.description && (
                              <p
                                className="text-sm font-medium text-card-foreground break-words leading-relaxed"
                                title={item.description}
                              >
                                {truncateText(item.description, 30)}
                              </p>
                            )}
                            {item.serialNumber && (
                              <p className="text-xs text-card-foreground break-all">
                                S/N: {truncateText(item.serialNumber, 20)}
                              </p>
                            )}
                            <p className="text-xs text-card-foreground break-all">
                              Ref:{" "}
                              {truncateText(
                                item.transaction.referenceNumber,
                                20
                              )}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell className="min-w-[120px]">
                          <div className="space-y-1 text-sm text-card-foreground">
                            {item.karat && (
                              <div className="flex justify-between">
                                <span>Karat:</span>
                                <span className="font-medium">
                                  {item.karat}K
                                </span>
                              </div>
                            )}
                            {item.purity && (
                              <div className="flex justify-between">
                                <span>Purity:</span>
                                <span className="font-medium">
                                  {(item.purity * 100).toFixed(2)}%
                                </span>
                              </div>
                            )}
                            {item.origin && (
                              <div className="flex justify-between">
                                <span>Origin:</span>
                                <span className="font-medium break-words">
                                  {truncateText(item.origin, 15)}
                                </span>
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="font-semibold text-card-foreground min-w-[80px]">
                          {item.weightGrams.toFixed(4)}g
                        </TableCell>
                        <TableCell className="text-card-foreground min-w-[120px]">
                          <div className="space-y-1">
                            <div className="break-words">
                              {formatCurrency(
                                item.transaction.totalCost,
                                item.transaction.currency
                              )}
                            </div>
                            <div className="text-xs text-card-foreground break-words">
                              @
                              {formatCurrency(
                                item.transaction.pricePerGram,
                                item.transaction.currency
                              )}
                              /g
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="min-w-[120px]">
                          <div className="space-y-1">
                            <div className="font-semibold text-card-foreground break-words">
                              {formatCurrency(currentValue, currency)}
                            </div>
                            <div
                              className={`text-xs font-medium break-words ${
                                isPositive
                                  ? "text-green-600 dark:text-green-400"
                                  : "text-red-600 dark:text-red-400"
                              }`}
                            >
                              {isPositive ? "+" : ""}
                              {formatCurrency(gainLoss, currency)}
                              <span
                                className={`ml-1 ${
                                  isPositive
                                    ? "text-green-600/80 dark:text-green-400/80"
                                    : "text-red-600/80 dark:text-red-400/80"
                                }`}
                              >
                                ({isPositive ? "+" : ""}
                                {gainLossPercentage.toFixed(2)}%)
                              </span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-card-foreground min-w-[100px]">
                          <div className="space-y-1">
                            {item.storageLocation ? (
                              <>
                                <div className="flex items-center gap-1">
                                  <Vault className="w-3 h-3 text-card-foreground flex-shrink-0" />
                                  <span className="text-xs font-medium break-words">
                                    {truncateText(item.storageLocation, 15)}
                                  </span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                  Secured Vault
                                </p>
                              </>
                            ) : (
                              <span className="text-xs text-muted-foreground">
                                Location TBA
                              </span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="min-w-[100px]">
                          <div className="space-y-2">
                            {item.verified ? (
                              <Badge
                                variant="outline"
                                className="bg-secondary text-secondary-foreground border-secondary"
                              >
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Verified
                              </Badge>
                            ) : (
                              <Badge
                                variant="outline"
                                className="bg-primary text-primary-foreground border-primary"
                              >
                                <AlertCircle className="w-3 h-3 mr-1" />
                                Pending
                              </Badge>
                            )}
                            <p className="text-xs text-muted-foreground">
                              {new Date(item.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                }
                              )}
                            </p>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
        )}

        {/* Total Summary Footer */}
        {physicalHoldings.goldItems.length > 0 && (
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
                      physicalHoldings.currentValue >=
                      physicalHoldings.totalInvested
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {formatCurrency(
                      physicalHoldings.currentValue -
                        physicalHoldings.totalInvested,
                      currency
                    )}
                    (
                    {(
                      ((physicalHoldings.currentValue -
                        physicalHoldings.totalInvested) /
                        physicalHoldings.totalInvested) *
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

export default PhysicalHoldingsTable;
