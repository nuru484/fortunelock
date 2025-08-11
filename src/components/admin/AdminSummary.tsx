// src/components/admin/AdminSummary.tsx
"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Scale, Activity } from "lucide-react";

interface AdminSummaryProps {
  stats: {
    totalUsers: number;
    totalAdmins: number;
    totalVerifiedUsers: number;
    totalGoldGrams: number;
    totalValueLocked: number;
    totalTransactions: number;
    totalRevenue: number;
  };
}

const AdminSummary: React.FC<AdminSummaryProps> = ({ stats }) => {
  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
      <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <CardTitle className="text-blue-900 text-sm lg:text-base">
              Users
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-xl lg:text-2xl font-bold text-blue-900">
            {stats.totalUsers}
          </p>
          <p className="text-xs lg:text-sm text-blue-700">
            Verified: {stats.totalVerifiedUsers}
          </p>
          <p className="text-xs lg:text-sm text-blue-700">
            Admins: {stats.totalAdmins}
          </p>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <Scale className="w-6 h-6 text-amber-600 flex-shrink-0" />
            <CardTitle className="text-amber-900 text-sm lg:text-base">
              Gold Holdings
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-xl lg:text-2xl font-bold text-amber-900">
            {stats.totalGoldGrams.toFixed(2)} g
          </p>
          <p className="text-xs lg:text-sm text-amber-700">
            TVL: {formatCurrency(stats.totalValueLocked)}
          </p>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <Activity className="w-6 h-6 text-green-600 flex-shrink-0" />
            <CardTitle className="text-green-900 text-sm lg:text-base">
              Transactions
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-xl lg:text-2xl font-bold text-green-900">
            {stats.totalTransactions}
          </p>
          <p className="text-xs lg:text-sm text-green-700">
            Revenue: {formatCurrency(stats.totalRevenue)}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSummary;
