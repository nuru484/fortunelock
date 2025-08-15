"use client";
import React from "react";
import { CreditCard, Clock, Shield, Info } from "lucide-react";
import PaymentHandler from "@/components/wallet/PaymentHandler";
import WalletBalance from "@/components/wallet/WalletBalance";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DepositPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Information Sidebar - Left */}
          <div className="lg:col-span-2 space-y-6">
            <WalletBalance />

            {/* Processing Times */}
            <Card className="bg-[var(--card)] border border-[var(--border)] shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[var(--muted)] rounded-[var(--radius)] flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[var(--primary)]" />
                  </div>
                  <CardTitle className="text-[var(--card-foreground)] text-lg font-semibold">
                    Processing Times
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-[var(--border)]">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">💳</span>
                      <span className="text-sm text-[var(--muted-foreground)]">
                        Credit/Debit Cards
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-[var(--card-foreground)]">
                        Instant
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[var(--border)]">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">🍎</span>
                      <span className="text-sm text-[var(--muted-foreground)]">
                        Apple Pay
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-[var(--card-foreground)]">
                        Instant
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">📱</span>
                      <span className="text-sm text-[var(--muted-foreground)]">
                        Google Pay
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-[var(--card-foreground)]">
                        Instant
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Accepted Cards */}
            <Card className="bg-[var(--card)] border border-[var(--border)] shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[var(--muted)] rounded-[var(--radius)] flex items-center justify-center">
                    <CreditCard className="w-4 h-4 text-[var(--accent)]" />
                  </div>
                  <CardTitle className="text-[var(--card-foreground)] text-lg font-semibold">
                    Accepted Cards
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[var(--muted)] rounded-[var(--radius)] p-3 text-center border border-[var(--border)]">
                    <div className="text-sm font-medium text-[var(--muted-foreground)]">
                      💳 Visa
                    </div>
                  </div>
                  <div className="bg-[var(--muted)] rounded-[var(--radius)] p-3 text-center border border-[var(--border)]">
                    <div className="text-sm font-medium text-[var(--muted-foreground)]">
                      💳 Mastercard
                    </div>
                  </div>
                  <div className="bg-[var(--muted)] rounded-[var(--radius)] p-3 text-center border border-[var(--border)]">
                    <div className="text-sm font-medium text-[var(--muted-foreground)]">
                      🏧 Amex
                    </div>
                  </div>
                  <div className="bg-[var(--muted)] rounded-[var(--radius)] p-3 text-center border border-[var(--border)]">
                    <div className="text-sm font-medium text-[var(--muted-foreground)]">
                      💰 Discover
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Notice */}
            <div className="bg-[var(--muted)] border border-[var(--muted-secondary)] rounded-[var(--radius-lg)] p-4 shadow-sm">
              <div className="flex gap-3">
                <Shield className="w-5 h-5 text-[var(--chart-3)] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-[var(--card-foreground)] mb-1">
                    Secure Deposit
                  </h4>
                  <p className="text-xs text-[var(--muted-foreground)]">
                    All transactions are encrypted and protected by 256-bit SSL
                    security. Your funds are held in FDIC-insured accounts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form - Main Content */}
          <div className="lg:col-span-3">
            <PaymentHandler />
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="mt-8 bg-[var(--muted)] border border-[var(--muted-secondary)] rounded-[var(--radius)] p-4">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
            <div className="text-sm text-[var(--muted-foreground)]">
              <strong>Important:</strong> Deposited funds will be available
              immediately for gold purchases. All precious metals are stored in
              certified vaults with full insurance coverage. Minimum deposit is
              $50.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositPage;
