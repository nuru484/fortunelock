"use client";
import React from "react";
import { Wallet, Shield } from "lucide-react";
import { useGetWalletBalanceQuery } from "@/redux/api/apiSlice";

const WalletBalance: React.FC = () => {
  const { data, isLoading, error } = useGetWalletBalanceQuery(undefined);

  if (isLoading) {
    return (
      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl border border-amber-200 p-6 shadow-sm">
        <div className="animate-pulse">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-amber-200 rounded-full"></div>
            <div>
              <div className="h-4 bg-amber-200 rounded w-24 mb-1"></div>
              <div className="h-3 bg-amber-200 rounded w-32"></div>
            </div>
          </div>
          <div className="h-8 bg-amber-200 rounded w-40 mb-4"></div>
          <div className="h-4 bg-amber-200 rounded w-48"></div>
        </div>
      </div>
    );
  }

  if (error || !data?.success) {
    return (
      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl border border-red-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <Wallet className="w-5 h-5 text-red-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Wallet Balance</h3>
            <p className="text-xs text-red-600">Error loading balance</p>
          </div>
        </div>
        <p className="text-red-600">Unable to load wallet balance</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl border border-amber-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
            <Wallet className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Wallet Balance</h3>
            <p className="text-xs text-gray-500">Available for investment</p>
          </div>
        </div>
        <Shield className="w-5 h-5 text-green-600" />
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-3xl font-bold text-gray-900">
            {data.data.currency}{" "}
            {data.data.balance.toLocaleString("en-US", {
              minimumFractionDigits: 2,
            })}
          </p>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-3">
        Last updated: {new Date(data.data.updatedAt).toLocaleString()}
      </p>
    </div>
  );
};

export default WalletBalance;
