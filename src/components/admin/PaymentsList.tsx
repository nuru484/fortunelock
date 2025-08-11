import React, { useState } from "react";
import {
  CreditCard,
  Smartphone,
  Building2,
  Wallet,
  CheckCircle,
  Clock,
  XCircle,
  AlertCircle,
  Filter,
  Calendar,
  ArrowUpDown,
} from "lucide-react";

export interface PaymentsListProps {
  payments: {
    id: number;
    method: string;
    amount: number;
    currency: "USD" | "EUR" | "GBP" | "KWD";
    status: string;
    processedAt?: string | null;
  }[];
}

const PaymentsList = ({ payments }: PaymentsListProps) => {
  const [filter, setFilter] = useState<string>("ALL");
  const [sortBy, setSortBy] = useState<string>("date");

  if (!payments || payments.length === 0) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 shadow-lg rounded-xl">
        <div className="p-12 text-center">
          <div className="w-16 h-16 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <CreditCard className="w-8 h-8 text-blue-600" />
          </div>
          <div className="text-blue-600 text-lg font-medium mb-2">
            No payment records found
          </div>
          <div className="text-blue-700 text-sm">
            Your payment history will be displayed here once transactions are
            processed
          </div>
        </div>
      </div>
    );
  }

  const getMethodConfig = (method: string) => {
    const lowerMethod = method.toLowerCase();

    if (
      lowerMethod.includes("card") ||
      lowerMethod.includes("credit") ||
      lowerMethod.includes("debit")
    ) {
      return {
        icon: CreditCard,
        color: "text-blue-600",
        bgColor: "bg-blue-100",
        borderColor: "border-blue-200",
        label: "Card Payment",
      };
    } else if (
      lowerMethod.includes("paypal") ||
      lowerMethod.includes("apple") ||
      lowerMethod.includes("google")
    ) {
      return {
        icon: Smartphone,
        color: "text-purple-600",
        bgColor: "bg-purple-100",
        borderColor: "border-purple-200",
        label: "Digital Wallet",
      };
    } else if (
      lowerMethod.includes("bank") ||
      lowerMethod.includes("transfer") ||
      lowerMethod.includes("wire")
    ) {
      return {
        icon: Building2,
        color: "text-green-600",
        bgColor: "bg-green-100",
        borderColor: "border-green-200",
        label: "Bank Transfer",
      };
    } else if (
      lowerMethod.includes("wallet") ||
      lowerMethod.includes("balance")
    ) {
      return {
        icon: Wallet,
        color: "text-indigo-600",
        bgColor: "bg-indigo-100",
        borderColor: "border-indigo-200",
        label: "Wallet Balance",
      };
    } else {
      return {
        icon: CreditCard,
        color: "text-gray-600",
        bgColor: "bg-gray-100",
        borderColor: "border-gray-200",
        label: method,
      };
    }
  };

  const getStatusConfig = (status: string) => {
    const lowerStatus = status.toLowerCase();

    if (
      lowerStatus.includes("success") ||
      lowerStatus.includes("completed") ||
      lowerStatus.includes("paid")
    ) {
      return {
        icon: CheckCircle,
        color: "text-green-700",
        bgColor: "bg-green-100",
        borderColor: "border-green-200",
        label: "Completed",
      };
    } else if (
      lowerStatus.includes("pending") ||
      lowerStatus.includes("processing")
    ) {
      return {
        icon: Clock,
        color: "text-yellow-700",
        bgColor: "bg-yellow-100",
        borderColor: "border-yellow-200",
        label: "Processing",
      };
    } else if (
      lowerStatus.includes("failed") ||
      lowerStatus.includes("declined") ||
      lowerStatus.includes("error")
    ) {
      return {
        icon: XCircle,
        color: "text-red-700",
        bgColor: "bg-red-100",
        borderColor: "border-red-200",
        label: "Failed",
      };
    } else if (
      lowerStatus.includes("refund") ||
      lowerStatus.includes("cancelled")
    ) {
      return {
        icon: AlertCircle,
        color: "text-orange-700",
        bgColor: "bg-orange-100",
        borderColor: "border-orange-200",
        label: "Refunded",
      };
    } else {
      return {
        icon: Clock,
        color: "text-gray-700",
        bgColor: "bg-gray-100",
        borderColor: "border-gray-200",
        label: status,
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
    const processed = new Date(dateString);
    const diffInMinutes = Math.floor(
      (now.getTime() - processed.getTime()) / (1000 * 60)
    );

    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  const filteredAndSortedPayments = payments
    .filter((payment) => {
      if (filter === "ALL") return true;
      return payment.status.toLowerCase().includes(filter.toLowerCase());
    })
    .sort((a, b) => {
      if (sortBy === "amount") return b.amount - a.amount;
      if (sortBy === "date") {
        const dateA = a.processedAt ? new Date(a.processedAt).getTime() : 0;
        const dateB = b.processedAt ? new Date(b.processedAt).getTime() : 0;
        return dateB - dateA;
      }
      return 0;
    });

  const totalAmount = payments.reduce(
    (sum, payment) => sum + payment.amount,
    0
  );
  const completedPayments = payments.filter(
    (p) =>
      p.status.toLowerCase().includes("success") ||
      p.status.toLowerCase().includes("completed") ||
      p.status.toLowerCase().includes("paid")
  ).length;

  return (
    <div className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100 px-6 py-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Payment History
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Complete record of all payment transactions
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-full border">
              {filteredAndSortedPayments.length}{" "}
              {filteredAndSortedPayments.length === 1 ? "payment" : "payments"}
            </span>
          </div>
        </div>

        {/* Filters and Stats */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-white border border-gray-200 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="ALL">All Status</option>
                <option value="success">Completed</option>
                <option value="pending">Processing</option>
                <option value="failed">Failed</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-gray-200 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="date">Sort by Date</option>
                <option value="amount">Sort by Amount</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4 text-sm">
            <span className="text-green-600 font-medium">
              {completedPayments} Completed
            </span>
            <span className="text-blue-600 font-medium">
              {payments.length - completedPayments} Pending
            </span>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 hover:bg-gray-50 border-b border-gray-100">
              <th className="font-semibold text-gray-700 py-4 px-6 text-left">
                Payment ID
              </th>
              <th className="font-semibold text-gray-700 py-4 px-6 text-left">
                Method
              </th>
              <th className="font-semibold text-gray-700 py-4 px-6 text-right">
                Amount
              </th>
              <th className="font-semibold text-gray-700 py-4 px-6 text-center">
                Status
              </th>
              <th className="font-semibold text-gray-700 py-4 px-6 text-left">
                Processed
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedPayments.map((payment, index) => {
              const methodConfig = getMethodConfig(payment.method);
              const statusConfig = getStatusConfig(payment.status);
              const currencyConfig = getCurrencyConfig(payment.currency);
              const MethodIcon = methodConfig.icon;
              const StatusIcon = statusConfig.icon;

              return (
                <tr
                  key={payment.id}
                  className={`
                    border-b border-gray-50 hover:bg-blue-25 transition-colors duration-200
                    ${index % 2 === 0 ? "bg-white" : "bg-gray-25/30"}
                  `}
                >
                  {/* Payment ID */}
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="font-mono text-sm font-medium text-gray-800">
                        #{payment.id}
                      </span>
                    </div>
                  </td>

                  {/* Method */}
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 ${methodConfig.bgColor} rounded-full flex items-center justify-center border ${methodConfig.borderColor}`}
                      >
                        <MethodIcon
                          className={`w-5 h-5 ${methodConfig.color}`}
                        />
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">
                          {methodConfig.label}
                        </div>
                        <div className="text-sm text-gray-500">
                          {payment.method}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Amount */}
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-lg">{currencyConfig.flag}</span>
                      <div className="text-right">
                        <div className="font-semibold text-lg text-gray-800">
                          {formatCurrency(payment.amount, payment.currency)}
                        </div>
                        <div className="text-sm text-gray-500">
                          {currencyConfig.name}
                        </div>
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

                  {/* Processed At */}
                  <td className="py-4 px-6">
                    {payment.processedAt ? (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <div className="flex flex-col">
                          <span className="text-gray-800 font-medium text-sm">
                            {formatDate(payment.processedAt)}
                          </span>
                          <span className="text-gray-500 text-xs">
                            {getTimeAgo(payment.processedAt)}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm italic">Pending</span>
                      </div>
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
            <span className="font-medium">Total Payments:</span>
            <span className="font-bold ml-2">{payments.length}</span>
          </div>
          <div className="text-gray-700">
            <span className="font-medium">Success Rate:</span>
            <span className="font-bold ml-2 text-green-600">
              {Math.round((completedPayments / payments.length) * 100)}%
            </span>
          </div>
          <div className="text-gray-700 md:text-right">
            <span className="font-medium">Total Value:</span>
            <span className="font-bold ml-2">
              {payments.length > 0
                ? formatCurrency(totalAmount, payments[0].currency)
                : "$0.00"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsList;
