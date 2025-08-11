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
      <div className="bg-gradient-to-br from-slate-50 to-gray-100 border border-gray-200 shadow-lg rounded-xl">
        <div className="p-12 text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <CreditCard className="w-8 h-8 text-gray-400" />
          </div>
          <div className="text-gray-400 text-lg font-medium mb-2">
            No transactions found
          </div>
          <div className="text-gray-500 text-sm">
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
          color: "text-green-600",
          bgColor: "bg-green-100",
          label: "Purchase",
          borderColor: "border-green-200",
        };
      case "SALE":
        return {
          icon: ArrowUpRight,
          color: "text-red-600",
          bgColor: "bg-red-100",
          label: "Sale",
          borderColor: "border-red-200",
        };
      default:
        return {
          icon: CreditCard,
          color: "text-gray-600",
          bgColor: "bg-gray-100",
          label: type,
          borderColor: "border-gray-200",
        };
    }
  };

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "SUCCESS":
        return {
          icon: CheckCircle,
          color: "text-green-700",
          bgColor: "bg-green-100",
          label: "Completed",
          borderColor: "border-green-200",
        };
      case "PENDING":
        return {
          icon: Clock,
          color: "text-yellow-700",
          bgColor: "bg-yellow-100",
          label: "Pending",
          borderColor: "border-yellow-200",
        };
      case "FAILED":
        return {
          icon: XCircle,
          color: "text-red-700",
          bgColor: "bg-red-100",
          label: "Failed",
          borderColor: "border-red-200",
        };
      default:
        return {
          icon: Clock,
          color: "text-gray-700",
          bgColor: "bg-gray-100",
          label: status,
          borderColor: "border-gray-200",
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
    <div className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-gray-100 px-6 py-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Transaction History
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Complete record of your gold trades
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-full border">
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
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-white border border-gray-200 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="ALL">All Status</option>
              <option value="SUCCESS">Completed</option>
              <option value="PENDING">Pending</option>
              <option value="FAILED">Failed</option>
            </select>
          </div>

          <div className="flex gap-4 text-sm">
            <span className="text-green-600 font-medium">
              {totalPurchases} Purchases
            </span>
            <span className="text-red-600 font-medium">{totalSales} Sales</span>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 hover:bg-gray-50 border-b border-gray-100">
              <th className="font-semibold text-gray-700 py-4 px-6 text-left">
                Transaction
              </th>
              <th className="font-semibold text-gray-700 py-4 px-6 text-left">
                Type
              </th>
              <th className="font-semibold text-gray-700 py-4 px-6 text-center">
                Status
              </th>
              <th className="font-semibold text-gray-700 py-4 px-6 text-right">
                Weight
              </th>
              <th className="font-semibold text-gray-700 py-4 px-6 text-right">
                Amount
              </th>
              <th className="font-semibold text-gray-700 py-4 px-6 text-left">
                Date
              </th>
              <th className="font-semibold text-gray-700 py-4 px-6 text-center">
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
                    border-b border-gray-50 hover:bg-blue-25 transition-colors duration-200
                    ${index % 2 === 0 ? "bg-white" : "bg-gray-25/30"}
                  `}
                >
                  {/* Transaction ID */}
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span className="font-mono text-sm font-medium text-gray-800">
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
                      <Scale className="w-4 h-4 text-amber-600" />
                      <span className="font-semibold text-amber-800">
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
                            ? "text-red-600"
                            : "text-green-600"
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
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <div className="flex flex-col">
                        <span className="text-gray-800 font-medium text-sm">
                          {formatDate(tx.createdAt)}
                        </span>
                        <span className="text-gray-500 text-xs">
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
                            ? "bg-green-100 text-green-800 border-green-200"
                            : tx.payment.status === "pending" ||
                              tx.payment.status === "PENDING"
                            ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                            : "bg-red-100 text-red-800 border-red-200"
                        }`}
                      >
                        <CreditCard className="w-4 h-4" />
                        {tx.payment.status}
                      </span>
                    ) : (
                      <span className="text-gray-400 text-sm italic">N/A</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer Summary */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="text-gray-700">
            <span className="font-medium">Total Transactions:</span>
            <span className="font-bold ml-2">{transactions.length}</span>
          </div>
          <div className="text-gray-700">
            <span className="font-medium">Total Volume:</span>
            <span className="font-bold ml-2">
              {formatWeight(
                transactions.reduce((sum, tx) => sum + tx.gramsPurchased, 0)
              )}
            </span>
          </div>
          <div className="text-gray-700 md:text-right">
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
