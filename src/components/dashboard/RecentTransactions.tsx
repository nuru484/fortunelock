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
    <Card className="bg-card border-border shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <FileText className="w-6 h-6 text-primary" />
          <CardTitle className="text-card-foreground">
            Recent Transactions
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        {transactions.length === 0 ? (
          <div className="bg-muted/30 rounded-lg p-8 text-center border border-border">
            <p className="text-muted-foreground font-medium">
              No transactions found.
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
                    Type
                  </TableHead>
                  <TableHead className="text-secondary-foreground font-semibold">
                    Status
                  </TableHead>
                  <TableHead className="text-secondary-foreground font-semibold">
                    Amount (grams)
                  </TableHead>
                  <TableHead className="text-secondary-foreground font-semibold">
                    Total Cost
                  </TableHead>
                  <TableHead className="text-secondary-foreground font-semibold">
                    Date
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow
                    key={transaction.id}
                    className="hover:bg-muted/50 border-border transition-colors"
                  >
                    <TableCell className="font-medium text-card-foreground">
                      <span className="font-mono text-sm bg-secondary/30 px-2 py-1 rounded">
                        {transaction.referenceNumber}
                      </span>
                    </TableCell>
                    <TableCell className="text-card-foreground">
                      {transaction.type}
                    </TableCell>
                    <TableCell>
                      <span
                        className={
                          transaction.status === "SUCCESS"
                            ? "text-green-600 dark:text-green-400"
                            : transaction.status === "PENDING"
                            ? "text-primary"
                            : "text-red-600 dark:text-red-400"
                        }
                      >
                        {transaction.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-card-foreground">
                      {transaction.gramsPurchased.toFixed(4)}
                      <span className="text-muted-foreground ml-1">g</span>
                    </TableCell>
                    <TableCell className="text-card-foreground">
                      {formatCurrency(
                        transaction.totalCost,
                        transaction.currency
                      )}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {new Date(transaction.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        }
                      )}
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

export default RecentTransactions;
