// src/components/gold/GoldPurchaseForm.tsx
"use client";
import React, { useState, useEffect } from "react";
import {
  useBuyGoldMutation,
  useGetWalletBalanceQuery,
  useGetGoldPricesQuery,
} from "@/redux/api/apiSlice";
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
  AlertCircle,
  Loader2,
  TrendingUp,
  Calculator,
  Wallet,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import toast from "react-hot-toast";

interface TransactionDetails {
  pricePerGram: number;
  grams: number;
  subtotal: number;
  platformFee: number;
  total: number;
}

const GoldPurchaseForm: React.FC = () => {
  const [grams, setGrams] = useState<number>(0);
  const [currency, setCurrency] = useState<string>("USD");
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false);
  const [transactionDetails, setTransactionDetails] =
    useState<TransactionDetails>({
      pricePerGram: 0,
      grams: 0,
      subtotal: 0,
      platformFee: 0,
      total: 0,
    });

  const [buyGold, { isLoading }] = useBuyGoldMutation();
  const { data: walletData } = useGetWalletBalanceQuery(undefined);
  const {
    data: goldPriceData,
    isLoading: priceLoading,
    error,
  } = useGetGoldPricesQuery(currency);

  // Use the actual data structure from gold price API
  const pricePerGram = goldPriceData?.price?.pricePerGram || 0;
  const walletBalance = walletData?.data?.balance || 0;
  const walletCurrency = walletData?.data?.currency || currency;

  // Calculate transaction details whenever inputs change
  useEffect(() => {
    const subtotal = grams * pricePerGram;
    const platformFee = subtotal * 0.01; // 1% fee
    const total = subtotal + platformFee;

    setTransactionDetails({
      pricePerGram,
      grams,
      subtotal,
      platformFee,
      total,
    });
  }, [grams, pricePerGram]);

  const hasInsufficientFunds = transactionDetails.total > walletBalance;
  const isValidAmount = grams > 0 && grams >= 0.01;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidAmount || hasInsufficientFunds) return;
    setIsConfirmOpen(true);
  };

  const confirmPurchase = async () => {
    try {
      await buyGold({ grams, currency }).unwrap();
      setGrams(0);
      setIsConfirmOpen(false);
      toast.success(`Successfully purchased ${grams} grams of gold!`, {
        duration: 4000,
        position: "top-right",
      });
    } catch (error) {
      console.error("Purchase error:", error);
      setIsConfirmOpen(false);
      toast.error("Failed to purchase gold. Please try again.", {
        duration: 4000,
        position: "top-right",
      });
    }
  };

  const formatCurrency = (amount: number, currencyCode: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    }).format(amount);
  };

  return (
    <>
      <div className="space-y-8">
        {/* Current Gold Price Card */}
        <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-amber-600" />
                <div>
                  <CardTitle className="text-amber-900">
                    Live Gold Price
                  </CardTitle>
                  <CardDescription className="text-amber-700">
                    Real-time market pricing
                  </CardDescription>
                </div>
              </div>
              {priceLoading && (
                <Loader2 className="w-5 h-5 animate-spin text-amber-600" />
              )}
            </div>
          </CardHeader>
          <CardContent>
            {error || !goldPriceData?.price ? (
              <div className="text-center text-red-500">
                Error loading gold price data. Please try again.
              </div>
            ) : (
              <>
                <div className="text-3xl font-bold text-amber-900">
                  {formatCurrency(pricePerGram, currency)}{" "}
                  <span className="text-lg font-normal">per gram</span>
                </div>
                <p className="text-sm text-amber-700 mt-1">
                  24K Gold • Updated in real-time
                </p>
              </>
            )}
          </CardContent>
        </Card>

        {/* Purchase Form */}
        <Card className="bg-white border-gray-200 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Calculator className="w-6 h-6 text-blue-600" />
              <div>
                <CardTitle className="text-gray-900">Purchase Gold</CardTitle>
                <CardDescription>
                  Enter the amount you want to purchase
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Amount (grams)
                  </label>
                  <Input
                    type="number"
                    value={grams || ""}
                    onChange={(e) => setGrams(parseFloat(e.target.value) || 0)}
                    min="0.01"
                    step="0.01"
                    placeholder="0.00"
                    className="text-lg font-medium h-12"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Minimum: 0.01 grams
                  </p>
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
                      <SelectItem value="USD">🇺🇸 USD - US Dollar</SelectItem>
                      <SelectItem value="EUR">🇪🇺 EUR - Euro</SelectItem>
                      <SelectItem value="GBP">
                        🇬🇧 GBP - British Pound
                      </SelectItem>
                      <SelectItem value="KWD">
                        🇰🇼 KWD - Kuwaiti Dinar
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Transaction Summary */}
              {grams > 0 && (
                <Card className="bg-gray-50 border-gray-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-gray-900">
                      Transaction Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Gold Amount:</span>
                        <span className="font-semibold">
                          {grams.toFixed(4)} grams
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Price per Gram:</span>
                        <span className="font-semibold">
                          {formatCurrency(pricePerGram, currency)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Subtotal:</span>
                        <span className="font-semibold">
                          {formatCurrency(
                            transactionDetails.subtotal,
                            currency
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">
                          Platform Fee (1%):
                        </span>
                        <span className="font-semibold">
                          {formatCurrency(
                            transactionDetails.platformFee,
                            currency
                          )}
                        </span>
                      </div>
                      <div className="h-px bg-gray-300"></div>
                      <div className="flex justify-between items-center text-lg">
                        <span className="font-semibold text-gray-900">
                          Total Amount:
                        </span>
                        <span className="font-bold text-blue-600">
                          {formatCurrency(transactionDetails.total, currency)}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Wallet Balance */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Wallet className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-blue-900">
                        Available Balance:
                      </span>
                    </div>
                    <span className="text-lg font-bold text-blue-900">
                      {formatCurrency(walletBalance, walletCurrency)}
                    </span>
                  </div>
                  {hasInsufficientFunds && grams > 0 && (
                    <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-md">
                      <div className="flex items-center gap-2 text-red-700">
                        <AlertCircle className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          Insufficient funds. You need{" "}
                          {formatCurrency(
                            transactionDetails.total - walletBalance,
                            currency
                          )}{" "}
                          more.
                        </span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg"
                disabled={
                  isLoading ||
                  !isValidAmount ||
                  hasInsufficientFunds ||
                  priceLoading ||
                  !!error ||
                  !goldPriceData?.price
                }
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing Purchase...
                  </div>
                ) : (
                  `Purchase ${
                    grams > 0
                      ? `${grams} grams for ${formatCurrency(
                          transactionDetails.total,
                          currency
                        )}`
                      : "Gold"
                  }`
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-900">
              Confirm Gold Purchase
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Please review your transaction details before proceeding.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 my-6">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-amber-600" />
                <span className="font-semibold text-amber-900">
                  Purchase Details
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-amber-800">Amount:</span>
                  <span className="font-semibold text-amber-900">
                    {grams} grams
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-800">Price per gram:</span>
                  <span className="font-semibold text-amber-900">
                    {formatCurrency(pricePerGram, currency)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-800">Subtotal:</span>
                  <span className="font-semibold text-amber-900">
                    {formatCurrency(transactionDetails.subtotal, currency)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-800">Platform fee:</span>
                  <span className="font-semibold text-amber-900">
                    {formatCurrency(transactionDetails.platformFee, currency)}
                  </span>
                </div>
                <div className="h-px bg-amber-300 my-2"></div>
                <div className="flex justify-between text-base">
                  <span className="font-semibold text-amber-900">Total:</span>
                  <span className="font-bold text-amber-900">
                    {formatCurrency(transactionDetails.total, currency)}
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
              onClick={confirmPurchase}
              disabled={isLoading}
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing...
                </div>
              ) : (
                "Confirm Purchase"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GoldPurchaseForm;
