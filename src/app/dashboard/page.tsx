// src/app/dashboard/page.tsx
"use client";
import React from "react";
import { ArrowLeft, Shield, Home } from "lucide-react";
import { useAuthUserQuery, useGetDashboardQuery } from "@/redux/api/apiSlice";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Toaster } from "react-hot-toast";
import DashboardSummary from "@/components/dashboard/DashboardSummary";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import Link from "next/link";

const DashboardPage: React.FC = () => {
  const { data: user, isLoading: userLoading } = useAuthUserQuery(undefined);
  const { data: dashboardData, isLoading: dashboardLoading } =
    useGetDashboardQuery(undefined);

  if (userLoading || dashboardLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <div className="text-gray-600 text-lg font-medium">Loading...</div>
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
              Please log in to view your dashboard
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

      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.history.back()}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Back</span>
              </Button>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Dashboard
                  </h1>
                  <p className="text-gray-600">Your gold depository overview</p>
                </div>
              </div>
            </div>
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

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {dashboardData?.success && (
            <>
              <DashboardSummary
                portfolio={dashboardData.portfolio}
                wallet={dashboardData.wallet}
                goldPrice={dashboardData.goldPrice}
              />
              <RecentTransactions
                transactions={dashboardData.recentTransactions}
              />
            </>
          )}

          {/* Quick Actions */}
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-gray-900">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/dashboard/transactions">
                  <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold">
                    Buy Gold
                  </Button>
                </Link>
                <Link href="/dashboard/portfolio">
                  <Button className="w-full h-12 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white font-semibold">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <Card className="bg-green-50 border-green-200">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-green-600" />
                <CardTitle className="text-green-900 text-lg">
                  Secure & Protected
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-green-800">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <span>Bank-level encryption</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <span>Real-time price updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <span>Instant settlement</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <span>24/7 monitoring</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">
                Your investments are protected by industry-leading security
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              For support and inquiries, contact our team
            </p>
            <a
              href="mailto:support@fortunelockdepository.com"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              support@fortunelockdepository.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DashboardPage;
