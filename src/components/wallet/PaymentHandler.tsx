// src/components/wallet/PaymentHandler.tsx
"use client";
import React, { useState, useEffect } from "react";
import {
  useInitializeDepositMutation,
  useVerifyDepositMutation,
} from "@/redux/api/apiSlice";
import { loadStripe } from "@stripe/stripe-js";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CreditCard, Loader2, CheckCircle, X, Calculator } from "lucide-react";
import toast from "react-hot-toast";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

interface DepositDetails {
  amount: number;
  currency: string;
  processingFee: number;
  total: number;
}

const PaymentHandler = () => {
  const [amount, setAmount] = useState<number>(0);
  const [currency, setCurrency] = useState<string>("USD");
  const [paymentId, setPaymentId] = useState(null);
  const [reference, setReference] = useState("");
  const [status, setStatus] = useState("idle"); // idle, initializing, pending, verifying, success, error
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false);
  const [depositDetails, setDepositDetails] = useState<DepositDetails>({
    amount: 0,
    currency: "USD",
    processingFee: 0,
    total: 0,
  });

  const [initializeDeposit, { isLoading: isInitializing }] =
    useInitializeDepositMutation();
  const [verifyDeposit, { isLoading: isVerifying }] =
    useVerifyDepositMutation();

  const currencies = [
    { code: "USD", flag: "🇺🇸", name: "US Dollar" },
    { code: "EUR", flag: "🇪🇺", name: "Euro" },
    { code: "GBP", flag: "🇬🇧", name: "British Pound" },
    { code: "KWD", flag: "🇰🇼", name: "Kuwaiti Dinar" },
  ];

  // Calculate deposit details whenever inputs change - NO FEES
  useEffect(() => {
    const processingFee = 0; // No processing fees
    const total = amount; // Total equals the amount (no additional fees)

    setDepositDetails({
      amount,
      currency,
      processingFee,
      total,
    });
  }, [amount, currency]);

  const isValidAmount = amount > 0 && amount >= 1;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidAmount) return;
    setIsConfirmOpen(true);
  };

  const confirmDeposit = async () => {
    try {
      const callbackUrl = `${window.location.origin}/dashboard/wallet/deposit/callback`;

      // Send the exact amount (no fees added)
      const response = await initializeDeposit({
        amount: depositDetails.amount, // Changed from depositDetails.total to depositDetails.amount
        currency,
        callbackUrl,
      }).unwrap();

      if (response.success) {
        setPaymentId(response.data.paymentId);
        setReference(response.data.reference);
        setStatus("pending");
        setIsConfirmOpen(false);

        // Redirect to Stripe Checkout
        const stripe = await stripePromise;
        await stripe!.redirectToCheckout({
          sessionId: response.data.reference,
        });
      }
    } catch (error) {
      console.error("Deposit error:", error);
      setIsConfirmOpen(false);
      toast.error("Failed to initialize deposit. Please try again.", {
        duration: 4000,
        position: "top-right",
      });
    }
  };

  const handleVerifyPayment = async () => {
    if (!reference) {
      toast.error("No payment reference found");
      return;
    }

    try {
      setStatus("verifying");

      const response = await verifyDeposit({
        reference,
        paymentId,
      }).unwrap();

      if (response.success) {
        toast.success(
          `Deposit successful! New balance: ${response.data.currency} ${response.data.newBalance}`,
          {
            duration: 4000,
            position: "top-right",
          }
        );
        setStatus("success");

        // Reset form
        setTimeout(() => {
          setAmount(0);
          setPaymentId(null);
          setReference("");
          setStatus("idle");
        }, 3000);
      }
    } catch (error) {
      console.error("Verification error:", error);
      setStatus("error");
      toast.error("Payment verification failed", {
        duration: 4000,
        position: "top-right",
      });
    }
  };

  const resetPayment = () => {
    setAmount(0);
    setPaymentId(null);
    setReference("");
    setStatus("idle");
  };

  const formatCurrency = (amount: number, currencyCode: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    }).format(amount);
  };

  if (status === "pending") {
    return (
      <Card className="bg-white border-gray-200 shadow-lg">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
              <Loader2 className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Payment Initiated
              </h3>
              <p className="text-blue-700 text-sm">
                Complete your payment in the Stripe Checkout window, then click
                verify below.
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleVerifyPayment}
                disabled={isVerifying}
                className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white h-12"
              >
                {isVerifying ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Verifying...
                  </div>
                ) : (
                  "Verify Payment"
                )}
              </Button>

              <Button
                onClick={resetPayment}
                variant="outline"
                className="flex-1 h-12"
              >
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (status === "success") {
    return (
      <Card className="bg-white border-gray-200 shadow-lg">
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-green-900 mb-2">
              Deposit Successful!
            </h3>
            <p className="text-green-700 text-lg">
              Your wallet has been credited successfully.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <div className="space-y-8">
        {/* Deposit Form */}
        <Card className="bg-white border-gray-200 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Calculator className="w-6 h-6 text-blue-600" />
              <div>
                <CardTitle className="text-gray-900">Deposit Funds</CardTitle>
                <CardDescription>
                  Add money to your wallet instantly - No fees!
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Amount
                  </label>
                  <Input
                    type="number"
                    value={amount || ""}
                    onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                    min="1"
                    step="0.01"
                    placeholder="0.00"
                    className="text-lg font-medium h-12"
                  />
                  <p className="text-xs text-gray-500 mt-1">Minimum: $1.00</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Currency
                  </label>
                  <Select value={currency} onValueChange={setCurrency}>
                    <SelectTrigger className="h-12 text-lg font-medium">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      {currencies.map((curr) => (
                        <SelectItem key={curr.code} value={curr.code}>
                          {curr.flag} {curr.code} - {curr.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Transaction Summary - Simplified without fees */}
              {amount > 0 && (
                <Card className="bg-green-50 border-green-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-green-900 flex items-center gap-2">
                      Deposit Summary
                      <span className="text-sm bg-green-200 text-green-800 px-2 py-1 rounded-full">
                        No Fees!
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-green-600">Deposit Amount:</span>
                        <span className="font-semibold text-green-900">
                          {formatCurrency(depositDetails.amount, currency)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-green-600">Processing Fee:</span>
                        <span className="font-semibold text-green-900">
                          {formatCurrency(0, currency)}
                        </span>
                      </div>
                      <div className="h-px bg-green-300"></div>
                      <div className="flex justify-between items-center text-lg">
                        <span className="font-semibold text-green-900">
                          You&apos;ll Receive:
                        </span>
                        <span className="font-bold text-green-600">
                          {formatCurrency(depositDetails.amount, currency)}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg"
                disabled={isInitializing || !isValidAmount}
              >
                {isInitializing ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Initializing...
                  </div>
                ) : (
                  `Deposit ${
                    amount > 0
                      ? formatCurrency(depositDetails.amount, currency)
                      : "Funds"
                  }`
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Confirmation Dialog - Updated to remove fee display */}
      <Dialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-900">
              Confirm Deposit
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Please review your deposit details before proceeding.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 my-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <CreditCard className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-900">
                  Deposit Details
                </span>
                <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full ml-auto">
                  No Fees!
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-800">Deposit Amount:</span>
                  <span className="font-semibold text-blue-900">
                    {formatCurrency(depositDetails.amount, currency)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-800">Processing Fee:</span>
                  <span className="font-semibold text-blue-900">
                    {formatCurrency(0, currency)}
                  </span>
                </div>
                <div className="h-px bg-blue-300 my-2"></div>
                <div className="flex justify-between text-base">
                  <span className="font-semibold text-blue-900">
                    You&apos;ll Receive:
                  </span>
                  <span className="font-bold text-blue-900">
                    {formatCurrency(depositDetails.amount, currency)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="gap-3">
            <Button
              variant="outline"
              onClick={() => setIsConfirmOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={confirmDeposit}
              disabled={isInitializing}
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
            >
              {isInitializing ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing...
                </div>
              ) : (
                "Confirm Deposit"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PaymentHandler;
