// src/components/admin/AdminRecentTransactions.tsx
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
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
}

interface AdminRecentTransactionsProps {
  transactions: Transaction[];
}

const AdminRecentTransactions: React.FC<AdminRecentTransactionsProps> = ({
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
    <Card className="bg-white border-gray-200 shadow-lg px-8">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <FileText className="w-6 h-6 text-blue-600" />
          <CardTitle className="text-gray-900">Recent Transactions</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {transactions.length === 0 ? (
          <p className="text-gray-600 text-center p-6">
            No recent transactions.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[100px]">Ref #</TableHead>
                  <TableHead className="min-w-[200px]">User</TableHead>
                  <TableHead className="min-w-[80px]">Type</TableHead>
                  <TableHead className="min-w-[80px]">Status</TableHead>
                  <TableHead className="min-w-[80px]">Grams</TableHead>
                  <TableHead className="min-w-[100px]">Cost</TableHead>
                  <TableHead className="min-w-[100px]">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((tx) => (
                  <TableRow key={tx.id}>
                    <TableCell className="font-mono text-sm">
                      {tx.referenceNumber}
                    </TableCell>
                    <TableCell>
                      <div className="max-w-[200px]">
                        <div className="truncate font-medium">
                          {tx.user.firstName} {tx.user.lastName}
                        </div>
                        <div className="truncate text-sm text-gray-500">
                          {tx.user.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {tx.type}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`whitespace-nowrap ${
                          tx.status === "SUCCESS"
                            ? "text-green-600"
                            : tx.status === "PENDING"
                            ? "text-yellow-600"
                            : "text-red-600"
                        }`}
                      >
                        {tx.status}
                      </span>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {tx.gramsPurchased.toFixed(4)}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {formatCurrency(tx.totalCost, tx.currency)}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {new Date(tx.createdAt).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AdminRecentTransactions;
