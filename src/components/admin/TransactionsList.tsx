import React, { useState } from "react";
import {
  Clock,
  CheckCircle,
  XCircle,
  CreditCard,
  Filter,
  Calendar,
  Scale,
  TrendingUp,
  TrendingDown,
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
      <div className="bg-card border border-border shadow-sm rounded-xl overflow-hidden">
        <div className="p-16 text-center">
          <div className="w-20 h-20 bg-muted/50 rounded-full mx-auto mb-6 flex items-center justify-center ring-1 ring-border">
            <CreditCard className="w-10 h-10 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold text-card-foreground mb-2">
            No transactions found
          </h3>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Your transaction history will appear here once you start trading
            gold
          </p>
        </div>
      </div>
    );
  }

  const getTypeConfig = (type: string) => {
    switch (type) {
      case "PURCHASE":
        return {
          icon: TrendingDown,
          color: "text-destructive",
          bgColor: "bg-destructive/10",
          label: "Purchase",
          borderColor: "border-destructive/30",
          ringColor: "ring-destructive/20",
        };
      case "SALE":
        return {
          icon: TrendingUp,
          color: "text-primary",
          bgColor: "bg-primary/10",
          label: "Sale",
          borderColor: "border-primary/30",
          ringColor: "ring-primary/20",
        };
      default:
        return {
          icon: CreditCard,
          color: "text-muted-foreground",
          bgColor: "bg-muted/30",
          label: type,
          borderColor: "border-muted",
          ringColor: "ring-muted",
        };
    }
  };

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "SUCCESS":
        return {
          icon: CheckCircle,
          color: "text-primary",
          bgColor: "bg-primary/10",
          label: "Completed",
          borderColor: "border-primary/30",
        };
      case "PENDING":
        return {
          icon: Clock,
          color: "text-accent-foreground",
          bgColor: "bg-accent/20",
          label: "Pending",
          borderColor: "border-accent/40",
        };
      case "FAILED":
        return {
          icon: XCircle,
          color: "text-destructive",
          bgColor: "bg-destructive/10",
          label: "Failed",
          borderColor: "border-destructive/30",
        };
      default:
        return {
          icon: Clock,
          color: "text-muted-foreground",
          bgColor: "bg-muted/20",
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
    return `${grams.toFixed(3)} g`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
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
  const totalWeight = transactions.reduce(
    (sum, tx) => sum + tx.gramsPurchased,
    0
  );

  return (
    <div className="bg-card border border-border shadow-sm rounded-xl overflow-hidden">
      {/* Enhanced Header */}
      <div className="bg-muted/30 border-b border-border px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-1 h-12 bg-gradient-to-b from-primary via-accent to-primary rounded-full"></div>
            <div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight">
                Transaction History
              </h2>
              <p className="text-muted-foreground text-base mt-1">
                Complete record of your gold trading activities
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-popover/80 backdrop-blur-sm border border-border px-4 py-2 rounded-lg shadow-sm">
              <span className="text-sm font-medium text-popover-foreground">
                {filteredTransactions.length}
              </span>
              <span className="text-xs text-muted-foreground ml-1">
                {filteredTransactions.length === 1
                  ? "transaction"
                  : "transactions"}
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced Filter and Stats */}
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-popover border border-border rounded-lg px-4 py-2.5 text-sm font-medium text-popover-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-all cursor-pointer hover:bg-accent"
            >
              <option value="ALL">All Status</option>
              <option value="SUCCESS">Completed</option>
              <option value="PENDING">Pending</option>
              <option value="FAILED">Failed</option>
            </select>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-destructive rounded-full"></div>
              <span className="text-foreground font-medium">
                {totalPurchases} Purchases
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-foreground font-medium">
                {totalSales} Sales
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/20 border-b border-border">
              <th className="font-semibold text-foreground py-5 px-8 text-left text-sm tracking-wide">
                ID
              </th>
              <th className="font-semibold text-foreground py-5 px-6 text-left text-sm tracking-wide">
                Type
              </th>
              <th className="font-semibold text-foreground py-5 px-6 text-center text-sm tracking-wide">
                Status
              </th>
              <th className="font-semibold text-foreground py-5 px-6 text-right text-sm tracking-wide">
                Weight
              </th>
              <th className="font-semibold text-foreground py-5 px-6 text-right text-sm tracking-wide">
                Amount
              </th>
              <th className="font-semibold text-foreground py-5 px-6 text-left text-sm tracking-wide">
                Date & Time
              </th>
              <th className="font-semibold text-foreground py-5 px-6 text-center text-sm tracking-wide">
                Payment
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredTransactions.map((tx, index) => {
              const typeConfig = getTypeConfig(tx.type);
              const statusConfig = getStatusConfig(tx.status);
              const currencyConfig = getCurrencyConfig(tx.currency);
              const TypeIcon = typeConfig.icon;
              const StatusIcon = statusConfig.icon;

              return (
                <tr
                  key={(tx.id, index)}
                  className="hover:bg-muted/10 transition-colors duration-200 group"
                >
                  {/* Transaction ID */}
                  <td className="py-5 px-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full ring-2 ring-primary/20"></div>
                      <span className="font-mono text-sm font-medium text-foreground tracking-wider">
                        #{tx.id.toString().padStart(4, "0")}
                      </span>
                    </div>
                  </td>

                  {/* Type */}
                  <td className="py-5 px-6">
                    <div
                      className={`inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg text-sm font-medium border transition-colors ${typeConfig.bgColor} ${typeConfig.color} ${typeConfig.borderColor}`}
                    >
                      <TypeIcon className="w-4 h-4" />
                      {typeConfig.label}
                    </div>
                  </td>

                  {/* Status */}
                  <td className="py-5 px-6 text-center">
                    <div
                      className={`inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg text-sm font-medium border transition-colors ${statusConfig.bgColor} ${statusConfig.color} ${statusConfig.borderColor}`}
                    >
                      <StatusIcon className="w-4 h-4" />
                      {statusConfig.label}
                    </div>
                  </td>

                  {/* Weight */}
                  <td className="py-5 px-6 text-right">
                    <div className="flex items-center justify-end gap-2.5">
                      <Scale className="w-4 h-4 text-accent" />
                      <span className="font-semibold text-foreground text-base">
                        {formatWeight(tx.gramsPurchased)}
                      </span>
                    </div>
                  </td>

                  {/* Amount */}
                  <td className="py-5 px-6 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <span className="text-lg" title={currencyConfig.name}>
                        {currencyConfig.flag}
                      </span>
                      <span
                        className={`font-bold text-lg tracking-tight ${
                          tx.type === "PURCHASE"
                            ? "text-destructive"
                            : "text-primary"
                        }`}
                      >
                        {tx.type === "PURCHASE" ? "-" : "+"}
                        {formatCurrency(tx.totalCost, tx.currency)}
                      </span>
                    </div>
                  </td>

                  {/* Date & Time */}
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <div className="flex flex-col">
                        <span className="text-foreground font-medium text-sm">
                          {formatDate(tx.createdAt)}
                        </span>
                        <span className="text-muted-foreground text-xs font-mono">
                          {formatTime(tx.createdAt)}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Payment Status */}
                  <td className="py-5 px-6 text-center">
                    {tx.payment ? (
                      <div
                        className={`inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg text-sm font-medium border transition-colors ${
                          tx.payment.status === "completed" ||
                          tx.payment.status === "SUCCESS"
                            ? "bg-primary/10 text-primary border-primary/30"
                            : tx.payment.status === "pending" ||
                              tx.payment.status === "PENDING"
                            ? "bg-accent/20 text-accent-foreground border-accent/40"
                            : "bg-destructive/10 text-destructive border-destructive/30"
                        }`}
                      >
                        <CreditCard className="w-4 h-4" />
                        <span className="capitalize">
                          {tx.payment.status.toLowerCase()}
                        </span>
                      </div>
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

      {/* Enhanced Footer Summary */}
      <div className="bg-muted/20 px-8 py-6 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-foreground mb-1">
              {transactions.length}
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              Total Transactions
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-accent mb-1">
              {formatWeight(totalWeight)}
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              Total Volume
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-foreground mb-1">
              {transactions.length > 0
                ? formatCurrency(totalValue, transactions[0].currency)
                : "$0.00"}
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              Total Value
            </div>
          </div>
          <div className="text-center md:text-right">
            <div className="text-sm text-muted-foreground space-y-1">
              <div className="flex items-center justify-center md:justify-end gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>
                  {transactions.filter((tx) => tx.status === "SUCCESS").length}{" "}
                  Completed
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>
                  {transactions.filter((tx) => tx.status === "PENDING").length}{" "}
                  Pending
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <div className="w-2 h-2 bg-destructive rounded-full"></div>
                <span>
                  {transactions.filter((tx) => tx.status === "FAILED").length}{" "}
                  Failed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsList;
