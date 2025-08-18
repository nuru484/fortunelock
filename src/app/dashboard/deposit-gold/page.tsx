// pages/admin/deposit-gold.tsx (AdminDepositGoldPage for create)
"use client";
import React from "react";
import { Shield } from "lucide-react";
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
import AdminGuidelines from "@/components/admin/AdminGuidelines";
import SecurityNotice from "@/components/admin/SecurityNotice";
import DepositProcess from "@/components/admin/DepositProcess";
import HelpSection from "@/components/admin/HelpSection";
import { useDepositPhysicalGoldMutation } from "@/redux/api/apiSlice";

export type Currency = "USD" | "EUR" | "GBP" | "KWD";
export type GoldItemType = "BAR" | "COIN" | "JEWELRY" | "OTHER";

export interface GoldItem {
  type: GoldItemType;
  description?: string;
  serialNumber?: string;
  karat?: number;
  purity?: number;
  weightGrams: number;
  origin?: string;
  storageLocation?: string;
}

export interface DepositPhysicalGoldPayload {
  id?: number;
  userId: number;
  goldItem: GoldItem;
  pricePerGram: number;
  currency: Currency;
  depositDate?: string;
}

const AdminDepositGoldPage: React.FC = () => {
  const { user } = useUser();
  const [depositPhysicalGold] = useDepositPhysicalGoldMutation();

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

  const handleCreate = async (payload: DepositPhysicalGoldPayload) => {
    // Remove id from payload for create operation since it's optional
    const { ...createPayload } = payload;
    delete createPayload.id;
    await depositPhysicalGold(createPayload).unwrap();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <AdminGuidelines />
            <SecurityNotice />
            <DepositProcess />
            <HelpSection />
          </div>
          <div className="lg:col-span-3">
            <PhysicalGoldDepositForm onSubmit={handleCreate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDepositGoldPage;
