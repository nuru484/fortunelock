"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  useGetGoldPricesQuery,
  useUpdateGoldPricesMutation,
} from "@/redux/api/apiSlice";
import {
  TrendingUp,
  TrendingDown,
  RefreshCw,
  Clock,
  Weight,
  DollarSign,
  AlertCircle,
} from "lucide-react";

const GoldPriceDisplay = () => {
  const [currency, setCurrency] = useState<string>("USD");
  const { data, isLoading, error, refetch } = useGetGoldPricesQuery(currency);
  const [updateGoldPrices, { isLoading: isUpdating }] =
    useUpdateGoldPricesMutation();

  const handleUpdate = async () => {
    try {
      await updateGoldPrices(undefined);
      refetch();
    } catch (error) {
      console.error("Failed to update gold prices:", error);
    }
  };

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  if (isLoading) {
    return (
      <Card className="w-full max-w-6xl mx-auto shadow-lg bg-card border-border">
        <CardContent className="p-8">
          <div className="flex items-center justify-center text-muted-foreground">
            <RefreshCw className="w-6 h-6 animate-spin mr-2" />
            Loading gold prices...
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error || !data?.price) {
    return (
      <Card className="w-full max-w-6xl mx-auto shadow-lg bg-card border-border">
        <CardContent className="p-8">
          <div className="flex flex-col items-center gap-4">
            <div className="p-3 bg-destructive/10 rounded-full">
              <AlertCircle className="w-6 h-6 text-destructive" />
            </div>
            <div className="text-center">
              <p className="font-medium text-foreground mb-1">
                Error loading gold price data
              </p>
              <p className="text-sm text-muted-foreground">
                Please check your connection and try again
              </p>
            </div>
            <Button
              onClick={handleUpdate}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              variant="default"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Retry
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const goldData = {
    price: data.price.pricePerGram,
    change: data.price.priceChange || 0,
    change_percentage: data.price.priceChangePercent || 0,
    bid: data.price.bidPrice,
    ask: data.price.askPrice,
    high: data.price.highPrice,
    low: data.price.lowPrice,
    prev: data.price.prevPrice,
    open: data.price.openPrice,
    price_24k: data.price.price24k,
    price_22k: data.price.price22k,
    price_21k: data.price.price21k,
    price_20k: data.price.price20k,
    price_18k: data.price.price18k,
    price_16k: data.price.price16k,
    price_14k: data.price.price14k,
    price_10k: data.price.price10k,
  };

  const isPositiveChange = goldData.change >= 0;

  const goldPurities = [
    { karat: "24k", price: goldData.price_24k, purity: "99.9%" },
    { karat: "22k", price: goldData.price_22k, purity: "91.7%" },
    { karat: "21k", price: goldData.price_21k, purity: "87.5%" },
    { karat: "20k", price: goldData.price_20k, purity: "83.3%" },
    { karat: "18k", price: goldData.price_18k, purity: "75.0%" },
    { karat: "16k", price: goldData.price_16k, purity: "66.7%" },
    { karat: "14k", price: goldData.price_14k, purity: "58.3%" },
    { karat: "10k", price: goldData.price_10k, purity: "41.7%" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Header Card */}
      <Card className="shadow-lg bg-gradient-to-r from-card to-muted/20 border-border">
        <CardHeader className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-lg ring-2 ring-primary/20">
              <DollarSign className="w-6 h-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-foreground">
                Live Gold Prices
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Real-time precious metal pricing
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Select
              value={currency}
              onValueChange={(value: string) => setCurrency(value)}
            >
              <SelectTrigger className="w-[140px] bg-background border-border focus:ring-primary focus:border-primary">
                <SelectValue placeholder="Currency" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                {["USD", "EUR", "GBP", "KWD"].map((curr) => (
                  <SelectItem key={curr} value={curr}>
                    {curr}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              onClick={handleUpdate}
              variant="outline"
              disabled={isUpdating}
              className="flex items-center gap-2 border-border hover:bg-muted hover:border-muted-foreground transition-colors"
            >
              <RefreshCw
                className={`w-4 h-4 ${isUpdating ? "animate-spin" : ""}`}
              />
              {isUpdating ? "Updating..." : "Refresh"}
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Main Price Card */}
      <Card className="shadow-lg bg-card border-border">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Current Price */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-lg border border-primary/20">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-foreground">
                  Current Price
                </p>
                <div className="p-1 bg-primary/20 rounded">
                  <Weight className="w-4 h-4 text-primary" />
                </div>
              </div>
              <p className="text-2xl font-bold text-foreground">
                {formatPrice(goldData.price, data.currency)}
              </p>
              <p className="text-xs text-muted-foreground">
                per {data.price.weightName?.toLowerCase() || "gram"}
              </p>
            </div>

            {/* 24h Change */}
            <div
              className={`p-6 rounded-lg border ${
                isPositiveChange
                  ? "bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20"
                  : "bg-gradient-to-br from-destructive/5 to-destructive/10 border-destructive/20"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-foreground">
                  24h Change
                </p>
                <div
                  className={`p-1 rounded ${
                    isPositiveChange ? "bg-accent/20" : "bg-destructive/20"
                  }`}
                >
                  {isPositiveChange ? (
                    <TrendingUp className="w-4 h-4 text-accent" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-destructive" />
                  )}
                </div>
              </div>
              <p
                className={`text-2xl font-bold ${
                  isPositiveChange ? "text-accent" : "text-destructive"
                }`}
              >
                {isPositiveChange ? "+" : ""}
                {formatPrice(goldData.change, data.currency)}
              </p>
              <p
                className={`text-xs ${
                  isPositiveChange ? "text-accent/70" : "text-destructive/70"
                }`}
              >
                {isPositiveChange ? "+" : ""}
                {goldData.change_percentage.toFixed(2)}%
              </p>
            </div>

            {/* Bid/Ask Spread */}
            <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-6 rounded-lg border border-secondary/20">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-foreground">Bid/Ask</p>
                <Badge
                  variant="secondary"
                  className="text-xs bg-secondary/20 text-secondary border-secondary/30"
                >
                  Spread
                </Badge>
              </div>
              <div className="space-y-1">
                <p className="text-lg font-bold text-foreground">
                  {formatPrice(goldData.bid, data.currency)}
                </p>
                <p className="text-sm text-muted-foreground">
                  Ask: {formatPrice(goldData.ask, data.currency)}
                </p>
              </div>
            </div>

            {/* High/Low */}
            <div className="bg-gradient-to-br from-muted/30 to-muted/50 p-6 rounded-lg border border-border">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-foreground">24h Range</p>
                <Badge
                  variant="outline"
                  className="text-xs bg-background/50 border-border"
                >
                  H/L
                </Badge>
              </div>
              <div className="space-y-1">
                <p className="text-lg font-bold text-foreground">
                  {formatPrice(goldData.high, data.currency)}
                </p>
                <p className="text-sm text-muted-foreground">
                  Low: {formatPrice(goldData.low, data.currency)}
                </p>
              </div>
            </div>
          </div>

          {/* Market Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-background/50 p-4 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-1">
                Previous Close
              </p>
              <p className="text-lg font-semibold text-foreground">
                {formatPrice(goldData.prev, data.currency)}
              </p>
            </div>
            <div className="bg-background/50 p-4 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-1">
                Opening Price
              </p>
              <p className="text-lg font-semibold text-foreground">
                {formatPrice(goldData.open, data.currency)}
              </p>
            </div>
            <div className="bg-background/50 p-4 rounded-lg border border-border">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Last Updated</p>
              </div>
              <p className="text-sm font-semibold text-foreground">
                {formatTimestamp(data.lastUpdated)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gold Purity Prices */}
      <Card className="shadow-lg bg-card border-border">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Weight className="w-5 h-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-xl font-bold text-foreground">
                Gold Prices by Purity
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Prices per {data.price.weightName?.toLowerCase() || "gram"} for
                different karat ratings
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {goldPurities.map((item, index) => (
              <div
                key={item.karat}
                className={`p-4 rounded-lg border hover:shadow-md transition-all duration-200 ${
                  index === 0
                    ? "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20"
                    : "bg-gradient-to-br from-background to-muted/20 border-border hover:border-primary/20"
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <Badge
                    variant={index === 0 ? "default" : "outline"}
                    className={
                      index === 0
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border hover:border-primary/30 transition-colors"
                    }
                  >
                    {item.karat.toUpperCase()}
                  </Badge>
                  <span className="text-xs text-muted-foreground font-medium bg-background/50 px-2 py-1 rounded">
                    {item.purity}
                  </span>
                </div>
                <p
                  className={`text-lg font-bold mb-1 ${
                    index === 0 ? "text-primary" : "text-foreground"
                  }`}
                >
                  {formatPrice(item.price, data.currency)}
                </p>
                <p className="text-xs text-muted-foreground">per gram</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Market Data Footer */}
      <Card className="shadow-lg bg-gradient-to-r from-muted/20 to-background border-border">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground gap-2">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-1">
                <span>Currency:</span>
                <Badge
                  variant="outline"
                  className="text-xs bg-primary/5 text-primary border-primary/20"
                >
                  {data.currency}
                </Badge>
              </div>
              <div className="flex items-center gap-1">
                <span>Source:</span>
                <span className="font-medium text-foreground">
                  {data.price.source}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span>Unit:</span>
                <span className="font-medium text-foreground">
                  {data.price.weightName}
                </span>
              </div>
            </div>
            <div className="text-xs flex items-center gap-1">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>Updated: {formatTimestamp(data.lastUpdated)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoldPriceDisplay;
