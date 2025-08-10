// src/app/admin/deposit-gold/page.tsx
"use client";
import React from "react";
import { ArrowLeft, Shield, Package, AlertTriangle } from "lucide-react";
import PhysicalGoldDepositForm from "@/components/admin/PhysicalGoldDepositForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Toaster } from "react-hot-toast";
import { useUser } from "@/components/providers/UserProvider";

const AdminDepositGoldPage: React.FC = () => {
  const { user } = useUser();

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <div className="text-gray-600 text-lg font-medium">Loading...</div>
        </div>
      </div>
    );
  }

  // Check if user is authenticated and is admin
  if (!user || user.role !== "ADMIN") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <CardTitle className="text-2xl text-red-900">
              Access Denied
            </CardTitle>
            <CardDescription className="text-gray-600">
              {!user
                ? "Please log in to access admin features"
                : "Administrator privileges required"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold"
              onClick={() =>
                (window.location.href = !user ? "/login" : "/dashboard")
              }
            >
              {!user ? "Sign In" : "Go to Dashboard"}
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
          duration: 5000,
          style: {
            background: "#fff",
            color: "#333",
            boxShadow:
              "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
          },
          success: {
            iconTheme: {
              primary: "#10b981",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />

      {/* Header */}
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
                <span className="hidden sm:inline">Back</span>
              </Button>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Physical Gold Deposits
                  </h1>
                  <p className="text-gray-600">
                    Record and manage physical gold deposits for users
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge
                variant="secondary"
                className="bg-blue-100 text-blue-800 font-medium"
              >
                <Shield className="w-3 h-3 mr-1" />
                Admin Access
              </Badge>
              <div className="hidden md:flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm text-gray-500">Logged in as</p>
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Information Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Admin Guidelines */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <CardTitle className="text-blue-900 text-lg">
                    Admin Guidelines
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-blue-800">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                    <span>
                      Verify physical gold authenticity before recording
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                    <span>Double-check weight measurements and purity</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                    <span>Record serial numbers for trackability</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                    <span>Use current market prices when possible</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                    <span>Include detailed admin notes for audit trail</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Notice */}
            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  <CardTitle className="text-yellow-900 text-lg">
                    Security Notice
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-yellow-800">
                  <p>
                    <strong>Important:</strong> Physical gold deposits are
                    permanent records and cannot be easily reversed.
                  </p>
                  <p>
                    All deposits are automatically marked as verified and will
                    immediately update the user&apos;s portfolio and investment
                    balance.
                  </p>
                  <p>
                    Ensure all information is accurate before confirming the
                    deposit.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Process Steps */}
            <Card className="bg-green-50 border-green-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-green-900 text-lg">
                  Deposit Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm text-green-800">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Select User</p>
                      <p className="text-green-700">
                        Search and select the user receiving the deposit
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Gold Item Details</p>
                      <p className="text-green-700">
                        Record weight, type, purity, and identifying information
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Set Valuation</p>
                      <p className="text-green-700">
                        Use current market price or set custom valuation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                      4
                    </div>
                    <div>
                      <p className="font-medium">Review & Confirm</p>
                      <p className="text-green-700">
                        Verify all details before finalizing the deposit
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card className="bg-gray-50 border-gray-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-gray-900 text-lg">
                  Need Help?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  If you encounter any issues or need assistance with physical
                  gold deposits, please contact technical support.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() =>
                    (window.location.href =
                      "mailto:admin-support@fortunelockdepository.com")
                  }
                >
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Form */}
          <div className="lg:col-span-3">
            <PhysicalGoldDepositForm />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">
                Administrative functions are logged and monitored for security
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              Fortune Lock Depository - Admin Panel
            </p>
            <p className="text-xs text-gray-500">
              For urgent issues, contact emergency support line
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdminDepositGoldPage;
