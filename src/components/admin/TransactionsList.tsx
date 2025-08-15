import React, { useState } from "react";
import {
  ArrowUpRight,
  ArrowDownLeft,
  Clock,
  CheckCircle,
  XCircle,
  CreditCard,
  Filter,
  Calendar,
  Scale,
} from "lucide-react";

export interface TransactionsListProps {
  transactions: {
    id: number;
    type: "PURCHASE" | "SALE";
    status: "PENDING" | "SUCCESS" | "FAILED";
    gramsPurchased: number;
    totalCost: number;
    currency: "USD" | "EUR" | "GBP" | "KWD";
    createdAt: string;
    payment?: {
      status: string;
    } | null;
  }[];
}

const TransactionsList = ({ transactions }: TransactionsListProps) => {
  const [filter, setFilter] = useState<string>("ALL");

  if (!transactions || transactions.length === 0) {
    return (
      <div className="bg-background border border-muted shadow-lg rounded-lg">
        <div className="p-12 text-center">
          <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
            <CreditCard className="w-8 h-8 text-muted-foreground" />
          </div>
          <div className="text-muted-foreground text-lg font-medium mb-2">
            No transactions found
          </div>
          <div className="text-muted-foreground text-sm">
            Your transaction history will appear here once you start trading
          </div>
        </div>
      </div>
    );
  }

  const getTypeConfig = (type: string) => {
    switch (type) {
      case "PURCHASE":
        return {
          icon: ArrowDownLeft,
          color: "text-accent-foreground",
          bgColor: "bg-accent",
          label: "Purchase",
          borderColor: "border-accent",
        };
      case "SALE":
        return {
          icon: ArrowUpRight,
          color: "text-destructive-foreground",
          bgColor: "bg-destructive",
          label: "Sale",
          borderColor: "border-destructive",
        };
      default:
        return {
          icon: CreditCard,
          color: "text-muted-foreground",
          bgColor: "bg-muted",
          label: type,
          borderColor: "border-muted",
        };
    }
  };

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "SUCCESS":
        return {
          icon: CheckCircle,
          color: "text-accent-foreground",
          bgColor: "bg-accent",
          label: "Completed",
          borderColor: "border-accent",
        };
      case "PENDING":
        return {
          icon: Clock,
          color: "text-primary-foreground",
          bgColor: "bg-primary",
          label: "Pending",
          borderColor: "border-primary",
        };
      case "FAILED":
        return {
          icon: XCircle,
          color: "text-destructive-foreground",
          bgColor: "bg-destructive",
          label: "Failed",
          borderColor: "border-destructive",
        };
      default:
        return {
          icon: Clock,
          color: "text-muted-foreground",
          bgColor: "bg-muted",
          label: status,
          borderColor: "border-muted",
        };
    }
  };

  const getCurrencyConfig = (currency: string) => {
    switch (currency) {
      case "USD":
        return { symbol: "$", flag: "🇺🇸", name: "USD" };
      case "EUR":
        return { symbol: "€", flag: "🇪🇺", name: "EUR" };
      case "GBP":
        return { symbol: "£", flag: "🇬🇧", name: "GBP" };
      case "KWD":
        return { symbol: "د.ك", flag: "🇰🇼", name: "KWD" };
      default:
        return { symbol: currency, flag: "💱", name: currency };
    }
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const formatWeight = (grams: number) => {
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

  const filteredTransactions = transactions.filter((tx) => {
    if (filter === "ALL") return true;
    return tx.status === filter;
  });

  const totalPurchases = transactions.filter(
    (tx) => tx.type === "PURCHASE"
  ).length;
  const totalSales = transactions.filter((tx) => tx.type === "SALE").length;
  const totalValue = transactions.reduce((sum, tx) => sum + tx.totalCost, 0);

  return (
    <div className="bg-card border border-muted shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-muted border-b border-muted-secondary px-6 py-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Transaction History
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Complete record of your gold trades
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-muted-foreground bg-card px-3 py-1 rounded-full border border-muted">
              {filteredTransactions.length}{" "}
              {filteredTransactions.length === 1
                ? "transaction"
                : "transactions"}
            </span>
          </div>
        </div>

        {/* Filter and Stats */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-card border border-muted rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="ALL">All Status</option>
              <option value="SUCCESS">Completed</option>
              <option value="PENDING">Pending</option>
              <option value="FAILED">Failed</option>
            </select>
          </div>

          <div className="flex gap-4 text-sm">
            <span className="text-accent-foreground font-medium">
              {totalPurchases} Purchases
            </span>
            <span className="text-destructive-foreground font-medium">
              {totalSales} Sales
            </span>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted hover:bg-muted border-b border-muted-secondary">
              <th className="font-semibold text-foreground py-4 px-6 text-left">
                Transaction
              </th>
              <th className="font-semibold text-foreground py-4 px-6 text-left">
                Type
              </th>
              <th className="font-semibold text-foreground py-4 px-6 text-center">
                Status
              </th>
              <th className="font-semibold text-foreground py-4 px-6 text-right">
                Weight
              </th>
              <th className="font-semibold text-foreground py-4 px-6 text-right">
                Amount
              </th>
              <th className="font-semibold text-foreground py-4 px-6 text-left">
                Date
              </th>
              <th className="font-semibold text-foreground py-4 px-6 text-center">
                Payment
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((tx, index) => {
              const typeConfig = getTypeConfig(tx.type);
              const statusConfig = getStatusConfig(tx.status);
              const currencyConfig = getCurrencyConfig(tx.currency);
              const TypeIcon = typeConfig.icon;
              const StatusIcon = statusConfig.icon;

              return (
                <tr
                  key={tx.id}
                  className={`
                    border-b border-muted-secondary hover:bg-muted-secondary transition-colors duration-200
                    ${index % 2 === 0 ? "bg-card" : "bg-muted/30"}
                  `}
                >
                  {/* Transaction ID */}
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-mono text-sm font-medium text-foreground">
                        #{tx.id}
                      </span>
                    </div>
                  </td>

                  {/* Type */}
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${typeConfig.bgColor} ${typeConfig.color} ${typeConfig.borderColor}`}
                    >
                      <TypeIcon className="w-4 h-4" />
                      {typeConfig.label}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="py-4 px-6 text-center">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${statusConfig.bgColor} ${statusConfig.color} ${statusConfig.borderColor}`}
                    >
                      <StatusIcon className="w-4 h-4" />
                      {statusConfig.label}
                    </span>
                  </td>

                  {/* Weight */}
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Scale className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-primary-foreground">
                        {formatWeight(tx.gramsPurchased)}
                      </span>
                    </div>
                  </td>

                  {/* Amount */}
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-lg">{currencyConfig.flag}</span>
                      <span
                        className={`font-semibold text-lg ${
                          tx.type === "PURCHASE"
                            ? "text-destructive-foreground"
                            : "text-accent-foreground"
                        }`}
                      >
                        {tx.type === "PURCHASE" ? "-" : "+"}
                        {formatCurrency(tx.totalCost, tx.currency)}
                      </span>
                    </div>
                  </td>

                  {/* Date */}
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <div className="flex flex-col">
                        <span className="text-foreground font-medium text-sm">
                          {formatDate(tx.createdAt)}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {new Date(tx.createdAt).toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Payment Status */}
                  <td className="py-4 px-6 text-center">
                    {tx.payment ? (
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${
                          tx.payment.status === "completed" ||
                          tx.payment.status === "SUCCESS"
                            ? "bg-accent text-accent-foreground border-accent"
                            : tx.payment.status === "pending" ||
                              tx.payment.status === "PENDING"
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-destructive text-destructive-foreground border-destructive"
                        }`}
                      >
                        <CreditCard className="w-4 h-4" />
                        {tx.payment.status}
                      </span>
                    ) : (
                      <span className="text-muted-foreground text-sm italic">
                        N/A
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer Summary */}
      <div className="bg-muted px-6 py-4 border-t border-muted-secondary">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="text-foreground">
            <span className="font-medium">Total Transactions:</span>
            <span className="font-bold ml-2">{transactions.length}</span>
          </div>
          <div className="text-foreground">
            <span className="font-medium">Total Volume:</span>
            <span className="font-bold ml-2">
              {formatWeight(
                transactions.reduce((sum, tx) => sum + tx.gramsPurchased, 0)
              )}
            </span>
          </div>
          <div className="text-foreground md:text-right">
            <span className="font-medium">Total Value:</span>
            <span className="font-bold ml-2">
              {transactions.length > 0
                ? formatCurrency(totalValue, transactions[0].currency)
                : "$0.00"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsList;
