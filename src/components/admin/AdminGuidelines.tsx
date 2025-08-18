// components/admin/AdminGuidelines.tsx
"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

const AdminGuidelines: React.FC = () => {
  return (
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
  );
};

export default AdminGuidelines;
