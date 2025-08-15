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
      {/* Users Card */}
      <Card className="bg-gradient-to-r from-card to-muted border-border hover:shadow-lg transition-shadow">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Users className="w-5 h-5 text-primary flex-shrink-0" />
            </div>
            <CardTitle className="text-foreground text-sm lg:text-base font-semibold">
              Users
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
            {stats.totalUsers}
          </p>
          <div className="space-y-1">
            <p className="text-xs lg:text-sm text-muted-foreground">
              Verified:{" "}
              <span className="text-foreground font-medium">
                {stats.totalVerifiedUsers}
              </span>
            </p>
            <p className="text-xs lg:text-sm text-muted-foreground">
              Admins:{" "}
              <span className="text-foreground font-medium">
                {stats.totalAdmins}
              </span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Gold Holdings Card */}
      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 hover:shadow-lg transition-shadow">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Scale className="w-5 h-5 text-primary flex-shrink-0" />
            </div>
            <CardTitle className="text-foreground text-sm lg:text-base font-semibold">
              Gold Holdings
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-2xl lg:text-3xl font-bold text-primary mb-2">
            {stats.totalGoldGrams.toFixed(2)} g
          </p>
          <p className="text-xs lg:text-sm text-muted-foreground">
            TVL:{" "}
            <span className="text-foreground font-medium">
              {formatCurrency(stats.totalValueLocked)}
            </span>
          </p>
        </CardContent>
      </Card>

      {/* Transactions Card */}
      <Card className="bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20 hover:shadow-lg transition-shadow">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent/20 rounded-lg">
              <Activity className="w-5 h-5 text-accent flex-shrink-0" />
            </div>
            <CardTitle className="text-foreground text-sm lg:text-base font-semibold">
              Transactions
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-2xl lg:text-3xl font-bold text-accent mb-2">
            {stats.totalTransactions}
          </p>
          <p className="text-xs lg:text-sm text-muted-foreground">
            Revenue:{" "}
            <span className="text-foreground font-medium">
              {formatCurrency(stats.totalRevenue)}
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSummary;
