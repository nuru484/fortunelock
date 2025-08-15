"use client";
import React, { useState } from "react";
import {
  Shield,
  TrendingUp,
  Monitor,
  Vault,
  BarChart3,
  RefreshCw,
  Eye,
  EyeOff,
} from "lucide-react";
import { useGetPortfolioQuery } from "@/redux/api/apiSlice";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import PortfolioSummary from "@/components/portfolio/PortfolioSummary";
import OnlineHoldingsTable from "@/components/portfolio/OnlineHoldingsTable";
import PhysicalHoldingsTable from "@/components/portfolio/PhysicalHoldingsTable";
import { useUser } from "@/components/providers/UserProvider";
import { redirect } from "next/navigation";

const PortfolioPage: React.FC = () => {
  const [showBalances, setShowBalances] = useState(true);
  const { user } = useUser();
  const { data, isLoading, refetch } = useGetPortfolioQuery(undefined);

  const handleRefresh = () => {
    refetch();
  };

  if (!user) {
    redirect("/login");
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <div className="text-muted-foreground text-lg font-medium">
            Loading Portfolio...
          </div>
          <div className="text-muted-foreground text-sm">
            Fetching your latest holdings and performance
          </div>
        </div>
      </div>
    );
  }

  const totalHoldings =
    (data?.onlineHoldings?.totalGrams || 0) +
    (data?.physicalHoldings?.totalGrams || 0);
  const totalValue = data?.portfolio?.currentValue || 0;

  return (
    <div className="min-h-screen bg-background">
      {data?.success && (
        <div className="bg-secondary border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <BarChart3 className="w-4 h-4 text-card-foreground" />
                  <span className="text-sm font-medium text-card-foreground">
                    Total Holdings
                  </span>
                </div>
                <p className="text-lg font-bold text-card-foreground">
                  {showBalances ? `${totalHoldings.toFixed(4)}g` : "••••••"}
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <TrendingUp className="w-4 h-4 text-card-foreground" />
                  <span className="text-sm font-medium text-card-foreground">
                    Portfolio Value
                  </span>
                </div>
                <p className="text-lg font-bold text-card-foreground">
                  {showBalances
                    ? new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: data.wallet.currency,
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }).format(totalValue)
                    : "••••••"}
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Monitor className="w-4 h-4 text-card-foreground" />
                  <span className="text-sm font-medium text-card-foreground">
                    Online Holdings
                  </span>
                </div>
                <p className="text-lg font-bold text-card-foreground">
                  {showBalances
                    ? `${(data.onlineHoldings?.totalGrams || 0).toFixed(2)}g`
                    : "••••••"}
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Vault className="w-4 h-4 text-card-foreground" />
                  <span className="text-sm font-medium text-card-foreground">
                    Physical Holdings
                  </span>
                </div>
                <p className="text-lg font-bold text-card-foreground">
                  {showBalances
                    ? `${(data.physicalHoldings?.totalGrams || 0).toFixed(2)}g`
                    : "••••••"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-end gap-3 mt-4 px-4 sm:px-6 lg:px-8">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowBalances(!showBalances)}
          className="flex items-center gap-2 bg-muted/50 hover:bg-muted/80 border-border text-card-foreground hover:text-card-foreground shadow-sm transition-all duration-200"
        >
          {showBalances ? (
            <EyeOff className="w-4 h-4" />
          ) : (
            <Eye className="w-4 h-4" />
          )}
          <span className="hidden sm:inline">
            {showBalances ? "Hide" : "Show"} Values
          </span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleRefresh}
          className="flex items-center gap-2 bg-muted/50 hover:bg-muted/80 border-border text-card-foreground hover:text-card-foreground shadow-sm transition-all duration-200 disabled:opacity-50"
          disabled={isLoading}
        >
          <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
          <span className="hidden sm:inline">Refresh</span>
        </Button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {data?.success && (
            <>
              <PortfolioSummary
                portfolio={data.portfolio}
                wallet={data.wallet}
                performanceMetrics={data.performanceMetrics}
              />

              <Tabs defaultValue="online" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted/50">
                  <TabsTrigger
                    value="online"
                    className="flex items-center gap-2 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
                  >
                    <Monitor className="w-4 h-4" />
                    Online Holdings
                    <Badge variant="secondary" className="ml-2 bg-secondary/50">
                      {data.onlineHoldings?.holdings?.length || 0}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger
                    value="physical"
                    className="flex items-center gap-2 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
                  >
                    <Vault className="w-4 h-4" />
                    Physical Holdings
                    <Badge variant="secondary" className="ml-2 bg-secondary/50">
                      {data.physicalHoldings?.goldItems?.length || 0}
                    </Badge>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="online">
                  <OnlineHoldingsTable
                    onlineHoldings={data.onlineHoldings}
                    currentGoldPrice={data.performanceMetrics.currentGoldPrice}
                    currency={data.wallet.currency}
                  />
                </TabsContent>

                <TabsContent value="physical">
                  <PhysicalHoldingsTable
                    physicalHoldings={data.physicalHoldings}
                    currentGoldPrice={data.performanceMetrics.currentGoldPrice}
                    currency={data.wallet.currency}
                  />
                </TabsContent>
              </Tabs>
            </>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card border-border shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  <CardTitle className="text-card-foreground">
                    Security & Protection
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>256-bit SSL encryption</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Segregated vault storage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Full insurance coverage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>24/7 security monitoring</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <CardTitle className="text-card-foreground">
                    Investment Features
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Real-time gold price updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Instant buy/sell execution</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Physical delivery options</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Detailed performance analytics</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
