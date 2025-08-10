// src/app/dashboard/transactions/page.tsx
"use client";
import React from "react";
import GoldPurchaseForm from "@/components/gold/GoldPurchaseForm";
import WalletBalance from "@/components/wallet/WalletBalance";

const GoldBuyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Wallet Balance - Left Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <WalletBalance />
          </div>

          {/* Purchase Form - Main Content */}
          <div className="lg:col-span-3">
            <GoldPurchaseForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldBuyPage;
