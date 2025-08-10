// src/components/portfolio/PhysicalHoldingsTable.tsx
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
        return "bg-amber-100 text-amber-800 border-amber-300";
      case "coin":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "jewelry":
        return "bg-rose-100 text-rose-800 border-rose-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  return (
    <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <Vault className="w-5 h-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-purple-900 text-xl">
                Physical Gold Holdings
              </CardTitle>
              <p className="text-purple-700 text-sm">
                Gold deposited and stored in our vault
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 text-purple-700">
              <Shield className="w-4 h-4" />
              <span className="font-semibold">
                {physicalHoldings.totalGrams.toFixed(4)}g
              </span>
            </div>
            <p className="text-xs text-purple-600">Secured Holdings</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white/60 rounded-lg p-4 border border-purple-200">
            <div className="flex items-center gap-2 mb-2">
              <Scale className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">
                Total Weight
              </span>
            </div>
            <p className="text-lg font-bold text-purple-900">
              {physicalHoldings.totalGrams.toFixed(4)}g
            </p>
          </div>
          <div className="bg-white/60 rounded-lg p-4 border border-purple-200">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">
                Deposit Value
              </span>
            </div>
            <p className="text-lg font-bold text-purple-900">
              {formatCurrency(physicalHoldings.totalInvested, currency)}
            </p>
          </div>
          <div className="bg-white/60 rounded-lg p-4 border border-purple-200">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">
                Current Value
              </span>
            </div>
            <p className="text-lg font-bold text-purple-900">
              {formatCurrency(physicalHoldings.currentValue, currency)}
            </p>
          </div>
        </div>

        {/* Holdings Table */}
        {physicalHoldings.goldItems.length === 0 ? (
          <div className="bg-white/60 rounded-lg p-8 text-center border border-purple-200">
            <Vault className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <p className="text-purple-700 font-medium mb-2">
              No physical gold deposited
            </p>
            <p className="text-purple-600 text-sm">
              Deposit physical gold to see your items here
            </p>
          </div>
        ) : (
          <div className="bg-white/60 rounded-lg border border-purple-200 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-purple-100/50">
                  <TableHead className="text-purple-800">
                    Item Details
                  </TableHead>
                  <TableHead className="text-purple-800">
                    Specifications
                  </TableHead>
                  <TableHead className="text-purple-800">Weight</TableHead>
                  <TableHead className="text-purple-800">
                    Deposit Value
                  </TableHead>
                  <TableHead className="text-purple-800">
                    Current Value
                  </TableHead>
                  <TableHead className="text-purple-800">Storage</TableHead>
                  <TableHead className="text-purple-800">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {physicalHoldings.goldItems.map((item) => {
                  const currentValue = calculateCurrentValue(item.weightGrams);
                  const gainLoss = calculateGainLoss(
                    item.weightGrams,
                    item.transaction.pricePerGram
                  );
                  const isPositive = gainLoss >= 0;

                  return (
                    <TableRow key={item.id} className="hover:bg-purple-50/50">
                      <TableCell>
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
                            <p className="text-sm font-medium text-purple-900">
                              {item.description}
                            </p>
                          )}
                          {item.serialNumber && (
                            <p className="text-xs text-purple-600">
                              S/N: {item.serialNumber}
                            </p>
                          )}
                          <p className="text-xs text-purple-500">
                            Ref: {item.transaction.referenceNumber}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1 text-sm text-purple-800">
                          {item.karat && (
                            <div className="flex justify-between">
                              <span>Karat:</span>
                              <span className="font-medium">{item.karat}K</span>
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
                              <span className="font-medium">{item.origin}</span>
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="font-semibold text-purple-900">
                        {item.weightGrams.toFixed(4)}g
                      </TableCell>
                      <TableCell className="text-purple-800">
                        <div className="space-y-1">
                          <div>
                            {formatCurrency(
                              item.transaction.totalCost,
                              item.transaction.currency
                            )}
                          </div>
                          <div className="text-xs text-purple-600">
                            @
                            {formatCurrency(
                              item.transaction.pricePerGram,
                              item.transaction.currency
                            )}
                            /g
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-semibold text-purple-900">
                            {formatCurrency(currentValue, currency)}
                          </div>
                          <div
                            className={`text-xs font-medium ${
                              isPositive ? "text-emerald-600" : "text-red-600"
                            }`}
                          >
                            {isPositive ? "+" : ""}
                            {formatCurrency(gainLoss, currency)}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-purple-800">
                        <div className="space-y-1">
                          {item.storageLocation ? (
                            <>
                              <div className="flex items-center gap-1">
                                <Vault className="w-3 h-3 text-purple-600" />
                                <span className="text-xs font-medium">
                                  {item.storageLocation}
                                </span>
                              </div>
                              <p className="text-xs text-purple-600">
                                Secured Vault
                              </p>
                            </>
                          ) : (
                            <span className="text-xs text-purple-500">
                              Location TBA
                            </span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-2">
                          {item.verified ? (
                            <Badge
                              variant="outline"
                              className="bg-green-100 text-green-800 border-green-300"
                            >
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Verified
                            </Badge>
                          ) : (
                            <Badge
                              variant="outline"
                              className="bg-orange-100 text-orange-800 border-orange-300"
                            >
                              <AlertCircle className="w-3 h-3 mr-1" />
                              Pending
                            </Badge>
                          )}
                          <p className="text-xs text-purple-600">
                            {new Date(item.createdAt).toLocaleDateString()}
                          </p>
                        </div>
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

export default PhysicalHoldingsTable;
