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
      <Card className="w-full max-w-6xl mx-auto shadow-lg">
        <CardContent className="p-8">
          <div className="flex items-center justify-center text-gray-500">
            <RefreshCw className="w-6 h-6 animate-spin mr-2" />
            Loading gold prices...
          </div>
        </CardContent>
      </Card>
    );
  }

  // Fixed condition - check for the actual data structure
  if (error || !data?.price) {
    return (
      <Card className="w-full max-w-6xl mx-auto shadow-lg">
        <CardContent className="p-8">
          <div className="text-center text-red-500">
            Error loading gold price data. Please try again.
          </div>
          <Button
            onClick={handleUpdate}
            className="mt-4 mx-auto block"
            variant="outline"
          >
            Retry
          </Button>
        </CardContent>
      </Card>
    );
  }

  // Use the actual data structure from your backend
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
      <Card className="shadow-lg">
        <CardHeader className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold">
                Live Gold Prices
              </CardTitle>
              <p className="text-sm text-gray-600">
                Real-time precious metal pricing
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Select
              value={currency}
              onValueChange={(value: string) => setCurrency(value)}
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Currency" />
              </SelectTrigger>
              <SelectContent>
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
              className="flex items-center gap-2"
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
      <Card className="shadow-lg">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Current Price */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl border border-yellow-200">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-yellow-800">
                  Current Price
                </p>
                <Weight className="w-4 h-4 text-yellow-600" />
              </div>
              <p className="text-2xl font-bold text-yellow-900">
                {formatPrice(goldData.price, data.currency)}
              </p>
              <p className="text-xs text-yellow-700">
                per {data.price.weightName?.toLowerCase() || "gram"}
              </p>
            </div>

            {/* 24h Change */}
            <div
              className={`p-6 rounded-xl border ${
                isPositiveChange
                  ? "bg-gradient-to-br from-green-50 to-green-100 border-green-200"
                  : "bg-gradient-to-br from-red-50 to-red-100 border-red-200"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <p
                  className={`text-sm font-medium ${
                    isPositiveChange ? "text-green-800" : "text-red-800"
                  }`}
                >
                  24h Change
                </p>
                {isPositiveChange ? (
                  <TrendingUp className="w-4 h-4 text-green-600" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-600" />
                )}
              </div>
              <p
                className={`text-2xl font-bold ${
                  isPositiveChange ? "text-green-900" : "text-red-900"
                }`}
              >
                {isPositiveChange ? "+" : ""}
                {formatPrice(goldData.change, data.currency)}
              </p>
              <p
                className={`text-xs ${
                  isPositiveChange ? "text-green-700" : "text-red-700"
                }`}
              >
                {isPositiveChange ? "+" : ""}
                {goldData.change_percentage.toFixed(2)}%
              </p>
            </div>

            {/* Bid/Ask Spread */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-blue-800">Bid/Ask</p>
                <Badge variant="secondary" className="text-xs">
                  Spread
                </Badge>
              </div>
              <div className="space-y-1">
                <p className="text-lg font-bold text-blue-900">
                  {formatPrice(goldData.bid, data.currency)}
                </p>
                <p className="text-sm text-blue-700">
                  Ask: {formatPrice(goldData.ask, data.currency)}
                </p>
              </div>
            </div>

            {/* High/Low */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-purple-800">24h Range</p>
                <Badge variant="outline" className="text-xs">
                  H/L
                </Badge>
              </div>
              <div className="space-y-1">
                <p className="text-lg font-bold text-purple-900">
                  {formatPrice(goldData.high, data.currency)}
                </p>
                <p className="text-sm text-purple-700">
                  Low: {formatPrice(goldData.low, data.currency)}
                </p>
              </div>
            </div>
          </div>

          {/* Market Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Previous Close</p>
              <p className="text-lg font-semibold text-gray-800">
                {formatPrice(goldData.prev, data.currency)}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Opening Price</p>
              <p className="text-lg font-semibold text-gray-800">
                {formatPrice(goldData.open, data.currency)}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-gray-500" />
                <p className="text-sm text-gray-600">Last Updated</p>
              </div>
              <p className="text-sm font-semibold text-gray-800">
                {formatTimestamp(data.lastUpdated)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gold Purity Prices */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <Weight className="w-5 h-5 text-yellow-600" />
            Gold Prices by Purity
          </CardTitle>
          <p className="text-sm text-gray-600">
            Prices per {data.price.weightName?.toLowerCase() || "gram"} for
            different karat ratings
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {goldPurities.map((item) => (
              <div
                key={item.karat}
                className="bg-gradient-to-br from-amber-50 to-yellow-50 p-4 rounded-lg border border-amber-200 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <Badge
                    variant="outline"
                    className="text-amber-700 border-amber-300"
                  >
                    {item.karat.toUpperCase()}
                  </Badge>
                  <span className="text-xs text-amber-600 font-medium">
                    {item.purity}
                  </span>
                </div>
                <p className="text-lg font-bold text-amber-900">
                  {formatPrice(item.price, data.currency)}
                </p>
                <p className="text-xs text-amber-700">per gram</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Market Data Footer */}
      <Card className="shadow-lg">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 gap-2">
            <div className="flex items-center gap-4">
              <span>
                Currency: <strong>{data.currency}</strong>
              </span>
              <span>
                Source: <strong>{data.price.source}</strong>
              </span>
              <span>
                Unit: <strong>{data.price.weightName}</strong>
              </span>
            </div>
            <div className="text-xs">
              Data refreshed: {formatTimestamp(data.lastUpdated)}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoldPriceDisplay;
