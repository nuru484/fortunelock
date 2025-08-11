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
      <div className="bg-gradient-to-br from-indigo-50 to-blue-100 border border-indigo-200 shadow-lg rounded-xl">
        <div className="p-12 text-center">
          <div className="w-16 h-16 bg-indigo-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Wallet className="w-8 h-8 text-indigo-600" />
          </div>
          <div className="text-indigo-600 text-lg font-medium mb-2">
            No wallet data available
          </div>
          <div className="text-indigo-700 text-sm">
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
          color: "from-green-500 to-emerald-600",
          bgColor: "from-green-50 to-emerald-50",
          borderColor: "border-green-200",
          textColor: "text-green-800",
          flag: "🇺🇸",
        };
      case "EUR":
        return {
          symbol: "€",
          name: "Euro",
          locale: "de-DE",
          color: "from-blue-500 to-indigo-600",
          bgColor: "from-blue-50 to-indigo-50",
          borderColor: "border-blue-200",
          textColor: "text-blue-800",
          flag: "🇪🇺",
        };
      case "GBP":
        return {
          symbol: "£",
          name: "British Pound",
          locale: "en-GB",
          color: "from-purple-500 to-violet-600",
          bgColor: "from-purple-50 to-violet-50",
          borderColor: "border-purple-200",
          textColor: "text-purple-800",
          flag: "🇬🇧",
        };
      case "KWD":
        return {
          symbol: "د.ك",
          name: "Kuwaiti Dinar",
          locale: "ar-KW",
          color: "from-orange-500 to-amber-600",
          bgColor: "from-orange-50 to-amber-50",
          borderColor: "border-orange-200",
          textColor: "text-orange-800",
          flag: "🇰🇼",
        };
      default:
        return {
          symbol: wallet.currency,
          name: wallet.currency,
          locale: "en-US",
          color: "from-gray-500 to-slate-600",
          bgColor: "from-gray-50 to-slate-50",
          borderColor: "border-gray-200",
          textColor: "text-gray-800",
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
    <div className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
      {/* Header */}
      <div
        className={`bg-gradient-to-r ${currencyConfig.bgColor} border-b border-gray-100 px-6 py-6`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`w-2 h-8 bg-gradient-to-b ${currencyConfig.color} rounded-full`}
            ></div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Wallet className="w-6 h-6" />
                Digital Wallet
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Active Balance Overview
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 mb-1">Wallet ID</div>
            <div className="font-mono text-lg font-semibold text-gray-800">
              #{wallet.id}
            </div>
          </div>
        </div>
      </div>

      {/* Main Balance Display */}
      <div className="p-6">
        <div
          className={`bg-gradient-to-br ${currencyConfig.bgColor} rounded-xl p-6 border ${currencyConfig.borderColor} mb-6`}
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div
                className={`w-12 h-12 bg-gradient-to-br ${currencyConfig.color} rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg`}
              >
                <DollarSign className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-600">Available Balance</div>
                <div
                  className={`text-4xl font-bold ${currencyConfig.textColor}`}
                >
                  {formatCurrency(wallet.balance, wallet.currency)}
                </div>
              </div>
            </div>

            {/* Currency Info */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border ${currencyConfig.borderColor}`}
            >
              <span className="text-2xl">{currencyConfig.flag}</span>
              <span className={`font-semibold ${currencyConfig.textColor}`}>
                {currencyConfig.name}
              </span>
              <span className="text-gray-500">({wallet.currency})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletInfo;
