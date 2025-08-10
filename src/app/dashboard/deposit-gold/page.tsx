// src/app/admin/deposit-gold/page.tsx
"use client";
import React from "react";
import { Shield, AlertTriangle } from "lucide-react";
import PhysicalGoldDepositForm from "@/components/admin/PhysicalGoldDepositForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useUser } from "@/components/providers/UserProvider";

const AdminDepositGoldPage: React.FC = () => {
  const { user } = useUser();

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
    </div>
  );
};

export default AdminDepositGoldPage;
