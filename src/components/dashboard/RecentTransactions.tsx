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

interface Transaction {
  id: number;
  referenceNumber: string;
  type: string;
  status: string;
  gramsPurchased: number;
  totalCost: number;
  currency: string;
  createdAt: Date;
}

interface RecentTransactionsProps {
  transactions: Transaction[];
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  transactions,
}) => {
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
          <CardTitle className="text-gray-900">Recent Transactions</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        {transactions.length === 0 ? (
          <p className="text-gray-600 text-center">No transactions found.</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Amount (grams)</TableHead>
                <TableHead>Total Cost</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.referenceNumber}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>
                    <span
                      className={
                        transaction.status === "SUCCESS"
                          ? "text-green-600"
                          : transaction.status === "PENDING"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }
                    >
                      {transaction.status}
                    </span>
                  </TableCell>
                  <TableCell>{transaction.gramsPurchased.toFixed(4)}</TableCell>
                  <TableCell>
                    {formatCurrency(
                      transaction.totalCost,
                      transaction.currency
                    )}
                  </TableCell>
                  <TableCell>
                    {new Date(transaction.createdAt).toLocaleDateString()}
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

export default RecentTransactions;
