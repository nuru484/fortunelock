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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <div className="text-muted-foreground text-lg font-medium">
            Loading...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
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
          <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-foreground text-lg font-semibold">
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link href="/admin/users" className="block">
                  <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-colors shadow-md hover:shadow-lg">
                    Manage Users
                  </Button>
                </Link>
                <Link href="/admin/gold-prices" className="block">
                  <Button className="w-full h-12 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold transition-colors shadow-md hover:shadow-lg">
                    Update Gold Prices
                  </Button>
                </Link>
                <Link href="/admin/transactions" className="block">
                  <Button className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-colors shadow-md hover:shadow-lg">
                    View All Transactions
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* System Notice */}
          <Card className="bg-gradient-to-r from-card to-muted border-border shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                </div>
                <CardTitle className="text-foreground text-lg font-semibold">
                  System Overview
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 animate-pulse"></div>
                  <span className="text-foreground font-medium">
                    Real-time monitoring
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary/5 rounded-lg border border-secondary/10">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                  <span className="text-foreground font-medium">
                    Audit logs available
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg border border-accent/10">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-foreground font-medium">
                    Compliance checks
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg border border-border">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full flex-shrink-0"></div>
                  <span className="text-foreground font-medium">
                    Secure vault management
                  </span>
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
