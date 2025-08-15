"use client";
import React from "react";
import { Shield } from "lucide-react";
import { useGetDashboardQuery } from "@/redux/api/apiSlice";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardSummary from "@/components/dashboard/DashboardSummary";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import Link from "next/link";
import { useUser } from "@/components/providers/UserProvider";

const DashboardPage: React.FC = () => {
  const { user } = useUser();
  const { data, isLoading } = useGetDashboardQuery(undefined);

  if (!user || isLoading) {
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {data?.success && (
            <>
              <DashboardSummary
                portfolio={data.portfolio}
                wallet={data.wallet}
                goldPrice={data.goldPrice}
              />
              <RecentTransactions transactions={data.recentTransactions} />
            </>
          )}

          {/* Quick Actions */}
          <Card className="bg-card border-border shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-card-foreground text-xl">
                Quick Actions
              </CardTitle>
              <p className="text-muted-foreground text-sm mt-1">
                Start your gold investment journey
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/dashboard/transactions" className="w-full">
                  <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-sm transition-all duration-200 hover:shadow-md">
                    <span className="text-base">Buy Gold</span>
                  </Button>
                </Link>
                <Link href="/dashboard/portfolio" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-all duration-200 hover:shadow-md"
                  >
                    <span className="text-base">View Portfolio</span>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <Card className="bg-muted/50 border-border shadow-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-card-foreground text-lg">
                    Secure & Protected
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Your investments are safe with us
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-card-foreground font-medium">
                      Bank-level encryption
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-card-foreground font-medium">
                      Real-time price updates
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                    <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-card-foreground font-medium">
                      Instant settlement
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                    <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-card-foreground font-medium">
                      24/7 monitoring
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card className="bg-card border-border shadow-sm">
            <CardContent className="pt-6">
              <div className="text-center space-y-2">
                <h3 className="text-card-foreground font-semibold">
                  Need Help Getting Started?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Our support team is available 24/7 to assist you with your
                  gold investment journey.
                </p>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary/80"
                  >
                    Contact Support
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary/80"
                  >
                    View FAQ
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
