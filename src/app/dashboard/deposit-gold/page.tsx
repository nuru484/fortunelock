"use client";
import React from "react";
import { Shield, AlertTriangle, CheckCircle } from "lucide-react";
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

  if (!user || user.role !== "ADMIN") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center">
        <Card className="w-full max-w-md shadow-lg border-border">
          <CardHeader className="text-center">
            <div className="p-3 bg-destructive/10 rounded-full w-fit mx-auto mb-4">
              <Shield className="w-12 h-12 text-destructive" />
            </div>
            <CardTitle className="text-2xl text-foreground">
              Access Denied
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {!user
                ? "Please log in to access admin features"
                : "Administrator privileges required"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-colors"
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
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {/* Admin Guidelines */}
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-foreground text-lg font-semibold">
                    Admin Guidelines
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3 p-2 rounded-md bg-background/50">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">
                      Verify physical gold authenticity before recording
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-2 rounded-md bg-background/50">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">
                      Double-check weight measurements and purity
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-2 rounded-md bg-background/50">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">
                      Record serial numbers for trackability
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-2 rounded-md bg-background/50">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">
                      Use current market prices when possible
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-2 rounded-md bg-background/50">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">
                      Include detailed admin notes for audit trail
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Notice */}
            <Card className="bg-gradient-to-br from-destructive/5 to-destructive/10 border-destructive/20 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-destructive/20 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                  </div>
                  <CardTitle className="text-foreground text-lg font-semibold">
                    Security Notice
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-background/50 rounded-lg border border-destructive/10">
                    <p className="text-foreground">
                      <span className="font-semibold text-destructive">
                        Important:
                      </span>{" "}
                      Physical gold deposits are permanent records and cannot be
                      easily reversed.
                    </p>
                  </div>
                  <p className="text-muted-foreground">
                    All deposits are automatically marked as verified and will
                    immediately update the user&apos;s portfolio and investment
                    balance.
                  </p>
                  <p className="text-muted-foreground">
                    Ensure all information is accurate before confirming the
                    deposit.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Deposit Process */}
            <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <CardTitle className="text-foreground text-lg font-semibold">
                    Deposit Process
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                    <div className="w-7 h-7 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        Select User
                      </p>
                      <p className="text-muted-foreground mt-1">
                        Search and select the user receiving the deposit
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                    <div className="w-7 h-7 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        Gold Item Details
                      </p>
                      <p className="text-muted-foreground mt-1">
                        Record weight, type, purity, and identifying information
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                    <div className="w-7 h-7 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        Set Valuation
                      </p>
                      <p className="text-muted-foreground mt-1">
                        Use current market price or set custom valuation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                    <div className="w-7 h-7 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        Review & Confirm
                      </p>
                      <p className="text-muted-foreground mt-1">
                        Verify all details before finalizing the deposit
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Help Section */}
            <Card className="bg-gradient-to-br from-card to-muted border-border shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-foreground text-lg font-semibold">
                  Need Help?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  If you encounter any issues or need assistance with physical
                  gold deposits, please contact technical support.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-border hover:bg-muted hover:border-muted-foreground transition-colors"
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

          <div className="lg:col-span-3">
            <PhysicalGoldDepositForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDepositGoldPage;
