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
import { FileText } from "lucide-react";

interface Holding {
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

interface HoldingsTableProps {
  holdings: Holding[];
}

const HoldingsTable: React.FC<HoldingsTableProps> = ({ holdings }) => {
  const formatCurrency = (amount: number, currency: string) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    }).format(amount);

  return (
    <Card className="bg-white border-gray-200 shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <FileText className="w-6 h-6 text-blue-600" />
          <CardTitle className="text-gray-900">Holdings History</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        {holdings.length === 0 ? (
          <p className="text-gray-600 text-center">No holdings found.</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Amount (grams)</TableHead>
                <TableHead>Price per Gram</TableHead>
                <TableHead>Total Cost</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {holdings.map((holding) => (
                <TableRow key={holding.id}>
                  <TableCell>{holding.transaction.referenceNumber}</TableCell>
                  <TableCell>{holding.amount.toFixed(4)}</TableCell>
                  <TableCell>
                    {formatCurrency(
                      holding.transaction.pricePerGram,
                      holding.transaction.currency
                    )}
                  </TableCell>
                  <TableCell>
                    {formatCurrency(
                      holding.transaction.totalCost,
                      holding.transaction.currency
                    )}
                  </TableCell>
                  <TableCell>
                    {new Date(holding.createdAt).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
};

export default HoldingsTable;
