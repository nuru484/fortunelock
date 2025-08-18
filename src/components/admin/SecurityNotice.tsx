// components/admin/SecurityNotice.tsx
"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

const SecurityNotice: React.FC = () => {
  return (
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
              <span className="font-semibold text-destructive">Important:</span>{" "}
              Physical gold deposits are permanent records and cannot be easily
              reversed.
            </p>
          </div>
          <p className="text-muted-foreground">
            All deposits are automatically marked as verified and will
            immediately update the user&apos;s portfolio and investment balance.
          </p>
          <p className="text-muted-foreground">
            Ensure all information is accurate before confirming the deposit.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SecurityNotice;
