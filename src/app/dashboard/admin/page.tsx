// src/app/admin/dashboard/page.tsx
"use client";
import React from "react";
import { Shield } from "lucide-react";
import { useGetAdminDashboardQuery } from "@/redux/api/apiSlice";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AdminSummary from "@/components/admin/AdminSummary";
import AdminRecentTransactions from "@/components/admin/AdminRecentTransactions";
import PendingVerifications from "@/components/admin/PendingVerifications";
import PendingGoldItems from "@/components/admin/PendingGoldItems";
import GoldPricesOverview from "@/components/admin/GoldPricesOverview";
import RecentUsers from "@/components/admin/RecentUsers";
import Link from "next/link";
import { useUser } from "@/components/providers/UserProvider";

const AdminDashboardPage: React.FC = () => {
  const { user } = useUser();
  const { data, isLoading } = useGetAdminDashboardQuery(undefined);

  if (!user || user.role !== "ADMIN" || isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <div className="text-gray-600 text-lg font-medium">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Main Content */}
      <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6 lg:space-y-8">
          {data.success && (
            <>
              <AdminSummary stats={data.stats} />

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <PendingVerifications
                  verifications={data.pendingVerifications}
                />
                <PendingGoldItems items={data.pendingGoldItems} />
              </div>

              <AdminRecentTransactions transactions={data.recentTransactions} />

              <GoldPricesOverview prices={data.goldPrices} />

              <RecentUsers users={data.recentUsers} />
            </>
          )}

          {/* Quick Actions */}
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-gray-900">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link href="/admin/users">
                  <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold">
                    Manage Users
                  </Button>
                </Link>
                <Link href="/admin/gold-prices">
                  <Button className="w-full h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold">
                    Update Gold Prices
                  </Button>
                </Link>
                <Link href="/admin/transactions">
                  <Button className="w-full h-12 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold">
                    View All Transactions
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* System Notice */}
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <CardTitle className="text-blue-900 text-lg">
                  System Overview
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-blue-800">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span>Real-time monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span>Audit logs available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span>Compliance checks</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span>Secure vault management</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
