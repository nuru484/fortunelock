// src/app/dashboard/portfolio/page.tsx
"use client";
import React, { useState } from "react";
import {
  ArrowLeft,
  Shield,
  PieChart,
  TrendingUp,
  Monitor,
  Vault,
  BarChart3,
  RefreshCw,
  Download,
  Eye,
  EyeOff,
} from "lucide-react";
import { useAuthUserQuery, useGetPortfolioQuery } from "@/redux/api/apiSlice";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Toaster } from "react-hot-toast";
import PortfolioSummary from "@/components/portfolio/PortfolioSummary";
import OnlineHoldingsTable from "@/components/portfolio/OnlineHoldingsTable";
import PhysicalHoldingsTable from "@/components/portfolio/PhysicalHoldingsTable";

const PortfolioPage: React.FC = () => {
  const [showBalances, setShowBalances] = useState(true);
  const { data: user, isLoading: userLoading } = useAuthUserQuery(undefined);
  const {
    data: portfolioData,
    isLoading: portfolioLoading,
    refetch,
  } = useGetPortfolioQuery(undefined);

  const handleRefresh = () => {
    refetch();
  };

  if (userLoading || portfolioLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <div className="text-gray-600 text-lg font-medium">
            Loading Portfolio...
          </div>
          <div className="text-gray-500 text-sm">
            Fetching your latest holdings and performance
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <CardTitle className="text-2xl">Authentication Required</CardTitle>
            <CardDescription className="text-gray-600">
              Please log in to view your portfolio
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold"
              onClick={() => (window.location.href = "/login")}
            >
              Sign In to Continue
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const totalHoldings =
    portfolioData?.onlineHoldings?.totalGrams ||
    0 + portfolioData?.physicalHoldings?.totalGrams ||
    0;
  const totalValue = portfolioData?.portfolio?.currentValue || 0;
  const totalReturn = portfolioData?.performanceMetrics?.totalReturn || 0;
  const isPositiveReturn = totalReturn >= 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#fff",
            color: "#333",
            boxShadow:
              "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
          },
          success: {
            iconTheme: { primary: "#10b981", secondary: "#fff" },
          },
          error: {
            iconTheme: { primary: "#ef4444", secondary: "#fff" },
          },
        }}
      />

      {/* Enhanced Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.history.back()}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Dashboard</span>
              </Button>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                  <PieChart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Portfolio
                  </h1>
                  <div className="flex items-center gap-4">
                    <p className="text-gray-600">
                      Your gold investment overview
                    </p>
                    {portfolioData?.success && (
                      <Badge
                        variant={isPositiveReturn ? "default" : "destructive"}
                        className="text-xs"
                      >
                        {isPositiveReturn ? "+" : ""}
                        {portfolioData.performanceMetrics.totalReturnPercentage.toFixed(
                          2
                        )}
                        %
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowBalances(!showBalances)}
                className="flex items-center gap-2"
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
                className="flex items-center gap-2"
                disabled={portfolioLoading}
              >
                <RefreshCw
                  className={`w-4 h-4 ${
                    portfolioLoading ? "animate-spin" : ""
                  }`}
                />
                <span className="hidden sm:inline">Refresh</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Export</span>
              </Button>
              <div className="hidden md:flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm text-gray-500">Welcome back,</p>
                  <p className="font-semibold text-gray-900">
                    {user.firstName} {user.lastName}
                  </p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {user.firstName?.charAt(0)}
                  {user.lastName?.charAt(0)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      {portfolioData?.success && (
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-b border-amber-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <BarChart3 className="w-4 h-4 text-amber-600" />
                  <span className="text-sm font-medium text-amber-700">
                    Total Holdings
                  </span>
                </div>
                <p className="text-lg font-bold text-amber-900">
                  {showBalances ? `${totalHoldings.toFixed(4)}g` : "••••••"}
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <TrendingUp className="w-4 h-4 text-amber-600" />
                  <span className="text-sm font-medium text-amber-700">
                    Portfolio Value
                  </span>
                </div>
                <p className="text-lg font-bold text-amber-900">
                  {showBalances
                    ? new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: portfolioData.wallet.currency,
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }).format(totalValue)
                    : "••••••"}
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Monitor className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700">
                    Online Holdings
                  </span>
                </div>
                <p className="text-lg font-bold text-green-900">
                  {showBalances
                    ? `${(
                        portfolioData.onlineHoldings?.totalGrams || 0
                      ).toFixed(2)}g`
                    : "••••••"}
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Vault className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-purple-700">
                    Physical Holdings
                  </span>
                </div>
                <p className="text-lg font-bold text-purple-900">
                  {showBalances
                    ? `${(
                        portfolioData.physicalHoldings?.totalGrams || 0
                      ).toFixed(2)}g`
                    : "••••••"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {portfolioData?.success && (
            <>
              {/* Portfolio Summary */}
              <PortfolioSummary
                portfolio={portfolioData.portfolio}
                wallet={portfolioData.wallet}
                performanceMetrics={portfolioData.performanceMetrics}
              />

              {/* Holdings Tabs */}
              <Tabs defaultValue="online" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger
                    value="online"
                    className="flex items-center gap-2"
                  >
                    <Monitor className="w-4 h-4" />
                    Online Holdings
                    <Badge variant="secondary" className="ml-2">
                      {portfolioData.onlineHoldings?.holdings?.length || 0}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger
                    value="physical"
                    className="flex items-center gap-2"
                  >
                    <Vault className="w-4 h-4" />
                    Physical Holdings
                    <Badge variant="secondary" className="ml-2">
                      {portfolioData.physicalHoldings?.goldItems?.length || 0}
                    </Badge>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="online">
                  <OnlineHoldingsTable
                    onlineHoldings={portfolioData.onlineHoldings}
                    currentGoldPrice={
                      portfolioData.performanceMetrics.currentGoldPrice
                    }
                    currency={portfolioData.wallet.currency}
                  />
                </TabsContent>

                <TabsContent value="physical">
                  <PhysicalHoldingsTable
                    physicalHoldings={portfolioData.physicalHoldings}
                    currentGoldPrice={
                      portfolioData.performanceMetrics.currentGoldPrice
                    }
                    currency={portfolioData.wallet.currency}
                  />
                </TabsContent>
              </Tabs>
            </>
          )}

          {/* Security & Trust Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  <CardTitle className="text-green-900">
                    Security & Protection
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-green-800">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                    <span>256-bit SSL encryption</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                    <span>Segregated vault storage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                    <span>Full insurance coverage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                    <span>24/7 security monitoring</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-blue-900">
                    Investment Features
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-blue-800">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Real-time gold price updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Instant buy/sell execution</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Physical delivery options</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Detailed performance analytics</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <Shield className="w-6 h-6 text-amber-400" />
                <span className="text-xl font-bold">
                  Fortune Lock Depository
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Your trusted partner for secure gold investment and storage
                solutions.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-4">
                Security Certifications
              </h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>SOC 2 Type II Certified</p>
                <p>LBMA Approved Storage</p>
                <p>Lloyd&apos;s of London Insured</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <h3 className="font-semibold text-lg mb-4">24/7 Support</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Email: support@fortunelockdepository.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Live Chat Available</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Fortune Lock Depository. All rights reserved. Licensed and
              regulated financial institution.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;
