// components/admin/PricingValuation.tsx
"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator } from "lucide-react";

type Currency = "USD" | "EUR" | "GBP" | "KWD";

interface PricingValuationProps {
  currency: Currency;
  onCurrencyChange: (value: Currency) => void;
  pricePerGram: number;
  onPriceChange: (value: number) => void;
  useCurrentPrice: boolean;
  onUseCurrentPrice: () => void;
  onManualPriceEntry: () => void; // New callback for manual entry
  currentGoldPrice: number;
  priceLoading: boolean;
  weightGrams: number;
  transactionSummary: { totalValue: number };
}

const PricingValuation: React.FC<PricingValuationProps> = ({
  currency,
  onCurrencyChange,
  pricePerGram,
  onPriceChange,
  useCurrentPrice,
  onUseCurrentPrice,
  onManualPriceEntry,
  currentGoldPrice,
  priceLoading,
  weightGrams,
  transactionSummary,
}) => {
  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    }).format(amount);

  const handleManualPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    onManualPriceEntry(); // Notify parent that user is manually entering price
    onPriceChange(value);
  };

  return (
    <Card className="bg-muted/50 border-border">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-primary" />
          <CardTitle className="text-lg text-card-foreground">
            Pricing & Valuation
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label className="text-sm font-semibold text-muted-foreground">
              Currency *
            </Label>
            <Select value={currency} onValueChange={onCurrencyChange}>
              <SelectTrigger className="mt-2 bg-muted/30 border-border focus:ring-ring">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                <SelectItem value="USD">🇺🇸 USD - US Dollar</SelectItem>
                <SelectItem value="EUR">🇪🇺 EUR - Euro</SelectItem>
                <SelectItem value="GBP">🇬🇧 GBP - British Pound</SelectItem>
                <SelectItem value="KWD">🇰🇼 KWD - Kuwaiti Dinar</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Label className="text-sm font-semibold text-muted-foreground">
                Price per Gram *
              </Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={onUseCurrentPrice}
                disabled={!currentGoldPrice || priceLoading}
                className="text-xs bg-muted/50 border-border hover:bg-muted/80 hover:text-card-foreground"
              >
                {priceLoading ? "Loading..." : "Use Current Price"}
              </Button>
            </div>
            <Input
              type="number"
              step="0.01"
              min="0"
              value={pricePerGram || ""}
              onChange={handleManualPriceChange}
              placeholder="0.00"
              className={`mt-2 bg-muted/30 border-border focus:ring-ring ${
                useCurrentPrice ? "border-green-500" : ""
              }`}
            />
            {useCurrentPrice && currentGoldPrice && (
              <p className="text-xs text-muted-foreground mt-1">
                Using current market price: {formatCurrency(currentGoldPrice)}
              </p>
            )}
          </div>
        </div>
        {weightGrams > 0 && pricePerGram > 0 && (
          <Card className="bg-secondary border-border">
            <CardContent className="pt-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-secondary-foreground">
                  Transaction Summary
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Weight</p>
                    <p className="font-semibold text-secondary-foreground">
                      {weightGrams.toFixed(4)} grams
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Price/gram</p>
                    <p className="font-semibold text-secondary-foreground">
                      {formatCurrency(pricePerGram)}
                      {useCurrentPrice && (
                        <span className="text-xs text-green-600 ml-1">
                          (Current Market)
                        </span>
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Value</p>
                    <p className="font-bold text-secondary-foreground text-lg">
                      {formatCurrency(transactionSummary.totalValue)}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
};

export default PricingValuation;
