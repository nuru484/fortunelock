// components/admin/DepositProcess.tsx
"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const DepositProcess: React.FC = () => {
  return (
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
              <p className="font-semibold text-foreground">Select User</p>
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
              <p className="font-semibold text-foreground">Gold Item Details</p>
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
              <p className="font-semibold text-foreground">Set Valuation</p>
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
              <p className="font-semibold text-foreground">Review & Confirm</p>
              <p className="text-muted-foreground mt-1">
                Verify all details before finalizing the deposit
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DepositProcess;
