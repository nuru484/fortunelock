import React from "react";
import { Wallet, DollarSign } from "lucide-react";

export interface WalletInfoProps {
  wallet: {
    id: number;
    balance: number;
    currency: "USD" | "EUR" | "GBP" | "KWD";
    updatedAt: string;
  } | null;
}

const WalletInfo = ({ wallet }: WalletInfoProps) => {
  if (!wallet) {
    return (
      <div className="bg-card border-border shadow-lg rounded-lg">
        <div className="p-12 text-center">
          <div className="w-16 h-16 bg-muted/50 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Wallet className="w-8 h-8 text-primary" />
          </div>
          <div className="text-card-foreground text-lg font-medium mb-2">
            No wallet data available
          </div>
          <div className="text-muted-foreground text-sm">
            Your wallet information will be displayed here once loaded
          </div>
        </div>
      </div>
    );
  }

  const getCurrencyConfig = (currency: string) => {
    switch (currency) {
      case "USD":
        return {
          symbol: "$",
          name: "US Dollar",
          locale: "en-US",
          bgColor: "bg-muted/50",
          borderColor: "border-border",
          textColor: "text-card-foreground",
          flag: "🇺🇸",
        };
      case "EUR":
        return {
          symbol: "€",
          name: "Euro",
          locale: "de-DE",
          bgColor: "bg-muted/50",
          borderColor: "border-border",
          textColor: "text-card-foreground",
          flag: "🇪🇺",
        };
      case "GBP":
        return {
          symbol: "£",
          name: "British Pound",
          locale: "en-GB",
          bgColor: "bg-muted/50",
          borderColor: "border-border",
          textColor: "text-card-foreground",
          flag: "🇬🇧",
        };
      case "KWD":
        return {
          symbol: "د.ك",
          name: "Kuwaiti Dinar",
          locale: "ar-KW",
          bgColor: "bg-muted/50",
          borderColor: "border-border",
          textColor: "text-card-foreground",
          flag: "🇰🇼",
        };
      default:
        return {
          symbol: currency,
          name: currency,
          locale: "en-US",
          bgColor: "bg-muted/50",
          borderColor: "border-border",
          textColor: "text-card-foreground",
          flag: "💱",
        };
    }
  };

  const formatCurrency = (amount: number, currency: string) => {
    const config = getCurrencyConfig(currency);
    return new Intl.NumberFormat(config.locale, {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const currencyConfig = getCurrencyConfig(wallet.currency);

  return (
    <div className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-secondary border-b border-border px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-8 bg-primary rounded-full"></div>
            <div>
              <h2 className="text-2xl font-bold text-card-foreground flex items-center gap-2">
                <Wallet className="w-6 h-6" />
                Digital Wallet
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Active Balance Overview
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground mb-1">Wallet ID</div>
            <div className="font-mono text-lg font-semibold text-card-foreground">
              #{wallet.id}
            </div>
          </div>
        </div>
      </div>

      {/* Main Balance Display */}
      <div className="p-6">
        <div
          className={`bg-muted/50 rounded-lg p-6 border ${currencyConfig.borderColor} mb-6`}
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold shadow-lg">
                <DollarSign className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-sm text-muted-foreground">
                  Available Balance
                </div>
                <div
                  className={`text-4xl font-bold ${currencyConfig.textColor}`}
                >
                  {formatCurrency(wallet.balance, wallet.currency)}
                </div>
              </div>
            </div>

            {/* Currency Info */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border">
              <span className="text-2xl">{currencyConfig.flag}</span>
              <span className={`font-semibold ${currencyConfig.textColor}`}>
                {currencyConfig.name}
              </span>
              <span className="text-muted-foreground">({wallet.currency})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletInfo;
