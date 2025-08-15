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

  const pricePerGram = goldPriceData?.price?.pricePerGram || 0;
  const walletBalance = walletData?.data?.balance || 0;
  const walletCurrency = walletData?.data?.currency || currency;

  useEffect(() => {
    const subtotal = grams * pricePerGram;
    const platformFee = subtotal * 0.01;
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
        <Card className="bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20 shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-foreground text-lg">
                    Live Gold Price
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Real-time market pricing
                  </CardDescription>
                </div>
              </div>
              {priceLoading && (
                <div className="p-2 bg-muted/50 rounded-lg">
                  <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                </div>
              )}
            </div>
          </CardHeader>

          <CardContent>
            {error || !goldPriceData?.price ? (
              <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                <div className="flex items-center gap-2 text-destructive">
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-medium">
                    Error loading gold price data. Please try again.
                  </span>
                </div>
              </div>
            ) : (
              <div className="p-4 bg-background/50 rounded-lg border border-accent/10">
                <div className="text-3xl font-bold text-foreground mb-2">
                  <span className="text-accent">
                    {formatCurrency(pricePerGram, currency)}
                  </span>
                  <span className="text-lg font-normal text-muted-foreground ml-2">
                    per gram
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <p className="text-sm text-muted-foreground">
                    24K Gold • Updated in real-time
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Purchase Form */}
        <Card className="bg-card border-border shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-foreground text-lg">
                  Purchase Gold
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Enter the amount you want to purchase
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Amount (grams)
                  </label>
                  <Input
                    type="number"
                    value={grams || ""}
                    onChange={(e) => setGrams(parseFloat(e.target.value) || 0)}
                    min="0.01"
                    step="0.01"
                    placeholder="0.00"
                    className="text-lg font-medium h-12 border-border focus:ring-primary focus:border-primary"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Minimum: 0.01 grams
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Currency
                  </label>
                  <Select value={currency} onValueChange={setCurrency}>
                    <SelectTrigger className="h-12 text-lg font-medium border-border">
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
                <Card className="bg-gradient-to-br from-muted/50 to-background border-border">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-foreground flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-primary" />
                      Transaction Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 px-3 bg-background/50 rounded-lg">
                        <span className="text-muted-foreground">
                          Gold Amount:
                        </span>
                        <span className="font-semibold text-foreground">
                          {grams.toFixed(4)} grams
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 px-3 bg-background/50 rounded-lg">
                        <span className="text-muted-foreground">
                          Price per Gram:
                        </span>
                        <span className="font-semibold text-foreground">
                          {formatCurrency(pricePerGram, currency)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 px-3 bg-background/50 rounded-lg">
                        <span className="text-muted-foreground">Subtotal:</span>
                        <span className="font-semibold text-foreground">
                          {formatCurrency(
                            transactionDetails.subtotal,
                            currency
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 px-3 bg-background/50 rounded-lg">
                        <span className="text-muted-foreground">
                          Platform Fee (1%):
                        </span>
                        <span className="font-semibold text-foreground">
                          {formatCurrency(
                            transactionDetails.platformFee,
                            currency
                          )}
                        </span>
                      </div>
                      <div className="h-px bg-border my-2"></div>
                      <div className="flex justify-between items-center py-3 px-4 bg-primary/5 rounded-lg border border-primary/10">
                        <span className="font-semibold text-foreground text-lg">
                          Total Amount:
                        </span>
                        <span className="font-bold text-primary text-lg">
                          {formatCurrency(transactionDetails.total, currency)}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Wallet Balance */}
              <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <Wallet className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">
                        Available Balance:
                      </span>
                    </div>
                    <span className="text-lg font-bold text-primary">
                      {formatCurrency(walletBalance, walletCurrency)}
                    </span>
                  </div>
                  {hasInsufficientFunds && grams > 0 && (
                    <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                        <div>
                          <span className="text-sm font-medium text-destructive block">
                            Insufficient funds
                          </span>
                          <span className="text-xs text-destructive">
                            You need{" "}
                            {formatCurrency(
                              transactionDetails.total - walletBalance,
                              currency
                            )}{" "}
                            more.
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Button
                type="submit"
                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg transition-colors shadow-md hover:shadow-lg"
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
        <DialogContent className="max-w-md bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-foreground">
              Confirm Gold Purchase
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Please review your transaction details before proceeding.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 my-6">
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-4 rounded-lg border border-accent/20">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span className="font-semibold text-foreground">
                  Purchase Details
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Amount:</span>
                  <span className="font-semibold text-foreground">
                    {grams} grams
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Price per gram:</span>
                  <span className="font-semibold text-foreground">
                    {formatCurrency(pricePerGram, currency)}
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Subtotal:</span>
                  <span className="font-semibold text-foreground">
                    {formatCurrency(transactionDetails.subtotal, currency)}
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Platform fee:</span>
                  <span className="font-semibold text-foreground">
                    {formatCurrency(transactionDetails.platformFee, currency)}
                  </span>
                </div>
                <div className="h-px bg-border my-2"></div>
                <div className="flex justify-between text-base py-2">
                  <span className="font-semibold text-foreground">Total:</span>
                  <span className="font-bold text-primary">
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
              className="flex-1 border-border hover:bg-muted"
            >
              Cancel
            </Button>
            <Button
              onClick={confirmPurchase}
              disabled={isLoading}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
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
