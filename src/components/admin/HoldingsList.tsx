import React, { useState } from "react";
import {
  Coins,
  Calendar,
  ArrowUpDown,
  Filter,
  CheckCircle,
  Clock,
} from "lucide-react";

export interface HoldingsListProps {
  holdings: {
    id: number;
    amount: number;
    createdAt: string;
    transaction: {
      id: number;
      referenceNumber: string;
      status: string;
      type: string;
      source: string;
      pricePerGram: number;
      totalCost: number;
      fee: number;
      currency: string;
      createdAt: string;
    };
  }[];
}

const HoldingsList = ({ holdings }: HoldingsListProps) => {
  const [filter, setFilter] = useState<string>("ALL");
  const [sortBy, setSortBy] = useState<string>("date");

  if (!holdings || holdings.length === 0) {
    return (
      <div className="bg-gradient-to-br from-muted to-muted-secondary border border-border shadow-lg rounded-xl">
        <div className="p-12 text-center">
          <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
            <Coins className="w-8 h-8 text-primary" />
          </div>
          <div className="text-primary text-lg font-medium mb-2">
            No gold holdings found
          </div>
          <div className="text-primary-foreground text-sm">
            Your gold holdings will be displayed here once transactions are
            processed
          </div>
        </div>
      </div>
    );
  }

  const getStatusConfig = (status: string) => {
    const lowerStatus = status.toLowerCase();

    if (lowerStatus.includes("success") || lowerStatus.includes("completed")) {
      return {
        icon: CheckCircle,
        color: "text-chart-4",
        bgColor: "bg-chart-4/20",
        borderColor: "border-chart-4/50",
        label: "Completed",
      };
    } else if (
      lowerStatus.includes("pending") ||
      lowerStatus.includes("processing")
    ) {
      return {
        icon: Clock,
        color: "text-chart-5",
        bgColor: "bg-chart-5/20",
        borderColor: "border-chart-5/50",
        label: "Processing",
      };
    } else {
      return {
        icon: Clock,
        color: "text-muted-foreground",
        bgColor: "bg-muted",
        borderColor: "border-border",
        label: status,
      };
    }
  };

  const formatGoldAmount = (amount: number) => {
    return `${amount.toLocaleString()} g`;
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
    }).format(amount);
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

  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const created = new Date(dateString);
    const diffInMinutes = Math.floor(
      (now.getTime() - created.getTime()) / (1000 * 60)
    );

    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  const shortenReferenceNumber = (refNumber: string) => {
    if (refNumber.length <= 20) return refNumber;
    return `${refNumber.substring(0, 15)}...`;
  };

  const filteredAndSortedHoldings = holdings
    .filter((holding) => {
      if (filter === "ALL") return true;
      return holding.transaction.status
        .toLowerCase()
        .includes(filter.toLowerCase());
    })
    .sort((a, b) => {
      if (sortBy === "amount") return b.amount - a.amount;
      if (sortBy === "date") {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return dateB - dateA;
      }
      return 0;
    });

  const totalGoldHoldings = holdings.reduce(
    (sum, holding) => sum + holding.amount,
    0
  );
  const totalValue = holdings.reduce(
    (sum, holding) => sum + holding.transaction.totalCost,
    0
  );
  const completedHoldings = holdings.filter((h) =>
    h.transaction.status.toLowerCase().includes("success")
  ).length;

  return (
    <div className="bg-card border border-border shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-muted to-muted-secondary border-b border-border px-6 py-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-primary to-primary-foreground rounded-full"></div>
            <div>
              <h2 className="text-2xl font-bold text-card-foreground">
                Gold Holdings
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Your complete gold portfolio and transaction history
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-muted-foreground bg-card px-3 py-1 rounded-full border">
              {filteredAndSortedHoldings.length}{" "}
              {filteredAndSortedHoldings.length === 1 ? "holding" : "holdings"}
            </span>
          </div>
        </div>

        {/* Filters and Stats */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-card border border-border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="ALL">All Status</option>
                <option value="success">Completed</option>
                <option value="pending">Processing</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-card border border-border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="date">Sort by Date</option>
                <option value="amount">Sort by Amount</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4 text-sm">
            <span className="text-chart-4 font-medium">
              {completedHoldings} Completed
            </span>
            <span className="text-primary font-medium">
              {holdings.length - completedHoldings} Processing
            </span>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted hover:bg-muted border-b border-border">
              <th className="font-semibold text-muted-foreground py-4 px-6 text-left">
                Reference
              </th>
              <th className="font-semibold text-muted-foreground py-4 px-6 text-right">
                Gold Amount
              </th>
              <th className="font-semibold text-muted-foreground py-4 px-6 text-right">
                Purchase Value
              </th>
              <th className="font-semibold text-muted-foreground py-4 px-6 text-center">
                Status
              </th>
              <th className="font-semibold text-muted-foreground py-4 px-6 text-left">
                Created
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedHoldings.map((holding, index) => {
              const statusConfig = getStatusConfig(holding.transaction.status);
              const StatusIcon = statusConfig.icon;

              return (
                <tr
                  key={holding.id}
                  className={`
                    border-b border-border hover:bg-muted transition-colors duration-200
                    ${index % 2 === 0 ? "bg-card" : "bg-muted/30"}
                  `}
                >
                  {/* Reference Number */}
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                        <Coins className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-card-foreground">
                          Gold Purchase
                        </div>
                        <div className="text-sm text-muted-foreground font-mono">
                          {shortenReferenceNumber(
                            holding.transaction.referenceNumber
                          )}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Gold Amount */}
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-lg">🥇</span>
                      <div className="text-right">
                        <div className="font-semibold text-lg text-card-foreground">
                          {formatGoldAmount(holding.amount)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          @{" "}
                          {formatCurrency(
                            holding.transaction.pricePerGram,
                            holding.transaction.currency
                          )}
                          /g
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Purchase Value */}
                  <td className="py-4 px-6 text-right">
                    <div className="text-right">
                      <div className="font-semibold text-lg text-card-foreground">
                        {formatCurrency(
                          holding.transaction.totalCost,
                          holding.transaction.currency
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Fee:{" "}
                        {formatCurrency(
                          holding.transaction.fee,
                          holding.transaction.currency
                        )}
                      </div>
                    </div>
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

                  {/* Created At */}
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <div className="flex flex-col">
                        <span className="text-card-foreground font-medium text-sm">
                          {formatDate(holding.createdAt)}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {getTimeAgo(holding.createdAt)}
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer Summary */}
      <div className="bg-muted px-6 py-4 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="text-muted-foreground">
            <span className="font-medium">Total Holdings:</span>
            <span className="font-bold ml-2 text-primary">
              {formatGoldAmount(totalGoldHoldings)}
            </span>
          </div>
          <div className="text-muted-foreground">
            <span className="font-medium">Success Rate:</span>
            <span className="font-bold ml-2 text-chart-4">
              {Math.round((completedHoldings / holdings.length) * 100)}%
            </span>
          </div>
          <div className="text-muted-foreground md:text-right">
            <span className="font-medium">Total Value:</span>
            <span className="font-bold ml-2">
              {holdings.length > 0
                ? formatCurrency(totalValue, holdings[0].transaction.currency)
                : "$0.00"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoldingsList;
