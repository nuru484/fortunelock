// components/admin/PhysicalGoldDepositForm.tsx
"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, Package } from "lucide-react";
import toast from "react-hot-toast";
import GoldPriceDisplay from "./GoldPriceDisplay";
import UserSelection from "./UserSelection";
import GoldItemDetails from "./GoldItemDetails";
import PricingValuation from "./PricingValuation";
import DepositDateInput from "./DepositDateInput";
import ConfirmationDialog from "./ConfirmationDialog";
import { useGetUserDetailsQuery } from "@/redux/api/apiSlice"; // For selected user

type GoldItemType = "BAR" | "COIN" | "JEWELRY" | "OTHER";
type Currency = "USD" | "EUR" | "GBP" | "KWD";

interface GoldItem {
  type: GoldItemType;
  description?: string;
  serialNumber?: string;
  karat?: number;
  purity?: number;
  weightGrams: number;
  origin?: string;
  storageLocation?: string;
}

interface TransactionSummary {
  weightGrams: number;
  pricePerGram: number;
  totalValue: number;
  currency: string;
}

interface DepositPayload {
  userId: number;
  goldItem: GoldItem;
  pricePerGram: number;
  currency: Currency;
  depositDate?: string;
}

interface PhysicalGoldDepositFormProps {
  initialData?: {
    id?: number; // For update mode
    userId: number;
    goldItem: GoldItem;
    pricePerGram: number;
    currency: Currency;
    depositDate?: string;
  };
  onSubmit: (payload: DepositPayload & { id?: number }) => Promise<void>; // Custom onSubmit for create/update
}

const PhysicalGoldDepositForm: React.FC<PhysicalGoldDepositFormProps> = ({
  initialData,
  onSubmit,
}) => {
  const isUpdate = !!initialData?.id;

  // State declarations
  const [selectedUserId, setSelectedUserId] = useState<number | null>(
    initialData?.userId || null
  );
  const [currency, setCurrency] = useState<Currency>(
    initialData?.currency || "USD"
  );
  const [pricePerGram, setPricePerGram] = useState<number>(
    initialData?.pricePerGram || 0
  );
  const [useCurrentPrice, setUseCurrentPrice] = useState<boolean>(
    !initialData // If initialData exists (update mode), start with manual entry
  );
  const [currentGoldPrice, setCurrentGoldPrice] = useState<number>(0);
  const [priceLoading, setPriceLoading] = useState<boolean>(false);
  const [depositDate, setDepositDate] = useState<string>(
    initialData?.depositDate || ""
  );
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false);
  const [transactionSummary, setTransactionSummary] =
    useState<TransactionSummary>({
      weightGrams: 0,
      pricePerGram: 0,
      totalValue: 0,
      currency: "USD",
    });

  const [goldItem, setGoldItem] = useState<GoldItem>(
    initialData?.goldItem || {
      type: "BAR",
      description: "",
      serialNumber: "",
      karat: 24,
      purity: 0.999,
      weightGrams: 0,
      origin: "",
      storageLocation: "",
    }
  );

  const { data: userDetails } = useGetUserDetailsQuery(selectedUserId, {
    skip: !selectedUserId,
  });
  const selectedUser = userDetails?.success ? userDetails.data : null;

  // Update transaction summary when relevant values change
  useEffect(() => {
    const totalValue = goldItem.weightGrams * pricePerGram;
    setTransactionSummary({
      weightGrams: goldItem.weightGrams,
      pricePerGram,
      totalValue,
      currency,
    });
  }, [goldItem.weightGrams, pricePerGram, currency]);

  // Handle price updates from GoldPriceDisplay
  const handlePriceUpdate = (newPrice: number) => {
    setCurrentGoldPrice(newPrice);
    if (useCurrentPrice) {
      setPricePerGram(newPrice);
    }
    // Reset loading state when price is received
    setPriceLoading(false);
  };

  // Handle using current market price
  const handleUseCurrentPrice = () => {
    if (currentGoldPrice > 0) {
      setUseCurrentPrice(true);
      setPricePerGram(currentGoldPrice);
    } else {
      // Set loading state and trigger price fetch
      setPriceLoading(true);
      setUseCurrentPrice(true);
      toast.error("Fetching current gold price...");
    }
  };

  // Handle manual price entry
  const handleManualPriceEntry = () => {
    setUseCurrentPrice(false);
    setPriceLoading(false);
  };

  // Handle currency change and update current price accordingly
  const handleCurrencyChange = (newCurrency: Currency) => {
    setCurrency(newCurrency);
    // Reset useCurrentPrice to trigger fresh price fetch for new currency
    if (useCurrentPrice) {
      setPriceLoading(true);
      setUseCurrentPrice(true);
    }
  };

  const handleGoldItemChange = <K extends keyof GoldItem>(
    field: K,
    value: GoldItem[K]
  ) => {
    setGoldItem((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !selectedUserId ||
      !goldItem.weightGrams ||
      goldItem.weightGrams <= 0 ||
      !pricePerGram ||
      pricePerGram <= 0
    ) {
      toast.error("Please fill in all required fields");
      return;
    }
    setIsConfirmOpen(true);
  };

  const confirmAction = async () => {
    if (!selectedUserId) return;

    const payload: DepositPayload & { id?: number } = {
      id: initialData?.id,
      userId: selectedUserId,
      goldItem: {
        type: goldItem.type,
        weightGrams: goldItem.weightGrams,
        ...(goldItem.karat && { karat: goldItem.karat }),
        ...(goldItem.purity && { purity: goldItem.purity }),
        ...(goldItem.description && { description: goldItem.description }),
        ...(goldItem.serialNumber && { serialNumber: goldItem.serialNumber }),
        ...(goldItem.origin && { origin: goldItem.origin }),
        ...(goldItem.storageLocation && {
          storageLocation: goldItem.storageLocation,
        }),
      },
      pricePerGram,
      currency,
      ...(depositDate && { depositDate }),
    };

    try {
      await onSubmit(payload);
      if (!isUpdate) {
        // Reset for create
        setSelectedUserId(null);
        setGoldItem({
          type: "BAR",
          description: "",
          serialNumber: "",
          karat: 24,
          purity: 0.999,
          weightGrams: 0,
          origin: "",
          storageLocation: "",
        });
        setPricePerGram(0);
        setDepositDate("");
        setUseCurrentPrice(true); // Reset to use current price for new entries
      }
      setIsConfirmOpen(false);
      toast.success(`${isUpdate ? "Updated" : "Deposited"} successfully`);
    } catch (error) {
      console.error(error);
      setIsConfirmOpen(false);
      toast.error("Operation failed");
    }
  };

  const isFormValid =
    selectedUserId &&
    goldItem.weightGrams > 0 &&
    pricePerGram > 0 &&
    goldItem.type;

  return (
    <div className="space-y-8">
      <GoldPriceDisplay
        currency={currency}
        onPriceUpdate={handlePriceUpdate}
        useCurrentPrice={useCurrentPrice}
      />

      <Card className="bg-card border-border shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Package className="w-6 h-6 text-primary" />
            <div>
              <CardTitle className="text-card-foreground">
                Physical Gold {isUpdate ? "Update" : "Deposit"}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Record or update physical gold deposits for users
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            <UserSelection
              selectedUserId={selectedUserId}
              onUserSelect={setSelectedUserId}
              currency={currency}
            />

            <GoldItemDetails
              goldItem={goldItem}
              onChange={handleGoldItemChange}
            />

            <PricingValuation
              currency={currency}
              onCurrencyChange={handleCurrencyChange}
              pricePerGram={pricePerGram}
              onPriceChange={setPricePerGram}
              useCurrentPrice={useCurrentPrice}
              onUseCurrentPrice={handleUseCurrentPrice}
              onManualPriceEntry={handleManualPriceEntry}
              currentGoldPrice={currentGoldPrice}
              priceLoading={priceLoading}
              weightGrams={goldItem.weightGrams}
              transactionSummary={transactionSummary}
            />

            <DepositDateInput
              depositDate={depositDate}
              onChange={setDepositDate}
            />

            <Button
              type="submit"
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg transition-colors"
              disabled={!isFormValid}
            >
              {false ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </div>
              ) : (
                `Record Physical Gold ${isUpdate ? "Update" : "Deposit"}`
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      <ConfirmationDialog
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={confirmAction}
        isProcessing={false}
        selectedUser={selectedUser}
        goldItem={goldItem}
        transactionSummary={transactionSummary}
        currency={currency}
        depositDate={depositDate}
      />
    </div>
  );
};

export default PhysicalGoldDepositForm;
