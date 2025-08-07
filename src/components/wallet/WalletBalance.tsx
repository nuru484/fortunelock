"use client";
import React from "react";
import { Wallet } from "lucide-react";
import { useGetWalletBalanceQuery } from "@/redux/api/apiSlice";

const WalletBalance: React.FC = () => {
  const { data, isLoading, error } = useGetWalletBalanceQuery(undefined);

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="animate-pulse text-gray-600">Loading balance...</div>
      </div>
    );
  }

  if (error || !data?.success) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <p className="text-red-600">Error loading balance</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        <Wallet className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold text-gray-800">Wallet Balance</h3>
      </div>
      <p className="text-2xl font-bold text-gray-900">
        {data.data.currency} {data.data.balance.toFixed(2)}
      </p>
      <p className="text-sm text-gray-500">
        Last updated: {new Date(data.data.updatedAt).toLocaleString()}
      </p>
    </div>
  );
};

export default WalletBalance;
