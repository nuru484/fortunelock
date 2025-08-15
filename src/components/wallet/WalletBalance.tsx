"use client";
import React from "react";
import { Wallet, Shield, AlertCircle } from "lucide-react";
import { useGetWalletBalanceQuery } from "@/redux/api/apiSlice";

const WalletBalance: React.FC = () => {
  const { data, isLoading, error } = useGetWalletBalanceQuery(undefined);

  if (isLoading) {
    return (
      <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
        <div className="animate-pulse">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-muted rounded-full"></div>
            <div className="flex-1">
              <div className="h-4 bg-muted rounded w-24 mb-2"></div>
              <div className="h-3 bg-muted rounded w-32"></div>
            </div>
          </div>
          <div className="h-8 bg-muted rounded w-40 mb-4"></div>
          <div className="h-4 bg-muted rounded w-48"></div>
        </div>
      </div>
    );
  }

  if (error || !data?.success) {
    return (
      <div className="bg-card rounded-lg border border-destructive/20 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
            <AlertCircle className="w-5 h-5 text-destructive" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground">Wallet Balance</h3>
            <p className="text-xs text-destructive">Error loading balance</p>
          </div>
        </div>
        <div className="p-3 bg-destructive/5 rounded-lg border border-destructive/10">
          <p className="text-sm text-destructive font-medium">
            Unable to load wallet balance
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Please try refreshing the page or contact support if the issue
            persists
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-card to-muted/20 rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center ring-2 ring-primary/20">
            <Wallet className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground text-lg">
              Wallet Balance
            </h3>
            <p className="text-sm text-muted-foreground">
              Available for investment
            </p>
          </div>
        </div>
        <div className="p-2 bg-accent/10 rounded-lg">
          <Shield className="w-5 h-5 text-accent" />
        </div>
      </div>

      <div className="mb-6">
        <div className="p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
          <p className="text-4xl font-bold text-foreground mb-1">
            {data.data.currency}{" "}
            <span className="text-primary">
              {data.data.balance.toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })}
            </span>
          </p>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <p className="text-xs text-muted-foreground">Real-time balance</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground">
          Last updated: {new Date(data.data.updatedAt).toLocaleString()}
        </p>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-accent rounded-full"></div>
          <span className="text-xs text-accent font-medium">Live</span>
        </div>
      </div>
    </div>
  );
};

export default WalletBalance;
