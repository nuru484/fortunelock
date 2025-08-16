"use client";
import React, { useState, useEffect } from "react";
import {
  useDepositPhysicalGoldMutation,
  useGetAllUsersQuery,
  useGetUserDetailsQuery,
  useGetGoldPricesQuery,
} from "@/redux/api/apiSlice";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
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
import { Label } from "@/components/ui/label";
import {
  AlertCircle,
  Loader2,
  Search,
  User,
  Package,
  Calculator,
  CheckCircle,
  Coins,
  Shield,
  X,
  Calendar,
} from "lucide-react";
import toast from "react-hot-toast";

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

interface ApiUser {
  id: number;
  firstName: string;
  lastName: string;
  middleName?: string | null;
  email: string;
  phoneNumber?: string | null;
  nationality?: string | null;
  country: string;
  dateOfBirth?: Date | null;
  gender?: string | null;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  profilePicture?: string | null;
}

interface TransactionSummary {
  weightGrams: number;
  pricePerGram: number;
  totalValue: number;
  currency: string;
}

interface DepositPayload {
  userId: number;
  goldItem: {
    type: GoldItemType;
    description?: string;
    serialNumber?: string;
    karat?: number;
    purity?: number;
    weightGrams: number;
    origin?: string;
    storageLocation?: string;
  };
  pricePerGram: number;
  currency: Currency;
  adminNotes?: string;
  depositDate?: string;
}

const PhysicalGoldDepositForm: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [userSearchTerm, setUserSearchTerm] = useState<string>("");
  const [showUserSearch, setShowUserSearch] = useState<boolean>(true);
  const [currency, setCurrency] = useState<Currency>("USD");
  const [pricePerGram, setPricePerGram] = useState<number>(0);
  const [useCurrentPrice, setUseCurrentPrice] = useState<boolean>(true);
  const [depositDate, setDepositDate] = useState<string>("");
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false);
  const [transactionSummary, setTransactionSummary] =
    useState<TransactionSummary>({
      weightGrams: 0,
      pricePerGram: 0,
      totalValue: 0,
      currency: "USD",
    });

  const [goldItem, setGoldItem] = useState<GoldItem>({
    type: "BAR",
    description: "",
    serialNumber: "",
    karat: 24,
    purity: 0.999,
    weightGrams: 0,
    origin: "",
    storageLocation: "",
  });

  const [depositPhysicalGold, { isLoading: isDepositing }] =
    useDepositPhysicalGoldMutation();

  const { data: usersData, isLoading: usersLoading } = useGetAllUsersQuery({
    page: 1,
    limit: 100,
    search: userSearchTerm,
  });

  const { data: userDetailsData } = useGetUserDetailsQuery(selectedUserId, {
    skip: !selectedUserId,
  });

  const {
    data: goldPriceData,
    isLoading: priceLoading,
    error: priceError,
  } = useGetGoldPricesQuery(currency);

  const currentGoldPrice = goldPriceData?.price?.pricePerGram || 0;

  useEffect(() => {
    if (useCurrentPrice && currentGoldPrice > 0) {
      setPricePerGram(currentGoldPrice);
    }
  }, [useCurrentPrice, currentGoldPrice]);

  useEffect(() => {
    const totalValue = goldItem.weightGrams * pricePerGram;
    setTransactionSummary({
      weightGrams: goldItem.weightGrams,
      pricePerGram,
      totalValue,
      currency,
    });
  }, [goldItem.weightGrams, pricePerGram, currency]);

  const selectedUser = userDetailsData?.success ? userDetailsData.data : null;
  const selectedUserPortfolio = userDetailsData?.success
    ? userDetailsData.data.portfolio
    : null;

  const handleUserSelect = (user: ApiUser) => {
    setSelectedUserId(user.id);
    setUserSearchTerm(
      `${user.firstName}${user.middleName ? ` ${user.middleName}` : ""} ${
        user.lastName
      }`
    );
    setShowUserSearch(false);
  };

  const handleClearUserSelection = () => {
    setSelectedUserId(null);
    setUserSearchTerm("");
    setShowUserSearch(true);
  };

  const handleUserSearchChange = (value: string) => {
    setUserSearchTerm(value);
    if (value.trim() === "") {
      setShowUserSearch(false);
    } else {
      setShowUserSearch(true);
      if (
        selectedUserId &&
        selectedUser &&
        value !==
          `${selectedUser.firstName}${
            selectedUser.middleName ? ` ${selectedUser.middleName}` : ""
          } ${selectedUser.lastName}`
      ) {
        setSelectedUserId(null);
      }
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

  const confirmDeposit = async () => {
    if (!selectedUserId) return;

    try {
      const payload: DepositPayload = {
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

      await depositPhysicalGold(payload).unwrap();

      setSelectedUserId(null);
      setUserSearchTerm("");
      setShowUserSearch(true);
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
      setPricePerGram(useCurrentPrice ? currentGoldPrice : 0);
      setDepositDate("");
      setIsConfirmOpen(false);

      toast.success(
        `Successfully deposited ${goldItem.weightGrams} grams of gold for ${
          selectedUser?.firstName
        }${selectedUser?.middleName ? ` ${selectedUser.middleName}` : ""} ${
          selectedUser?.lastName
        }`,
        { duration: 5000 }
      );
    } catch (error: unknown) {
      console.error("Deposit error:", error);
      setIsConfirmOpen(false);

      const errorMessage =
        error &&
        typeof error === "object" &&
        "data" in error &&
        error.data &&
        typeof error.data === "object" &&
        "error" in error.data
          ? String(error.data.error)
          : "Failed to deposit physical gold. Please try again.";

      toast.error(errorMessage, { duration: 5000 });
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

  const isFormValid =
    selectedUserId &&
    goldItem.weightGrams > 0 &&
    pricePerGram > 0 &&
    goldItem.type;

  return (
    <>
      <div className="space-y-8">
        {/* Current Gold Price Card */}
        <Card className="bg-card border-border shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Coins className="w-6 h-6 text-primary" />
                <div>
                  <CardTitle className="text-card-foreground">
                    Current Market Price
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Real-time gold pricing reference
                  </CardDescription>
                </div>
              </div>
              {priceLoading && (
                <Loader2 className="w-5 h-5 animate-spin text-primary" />
              )}
            </div>
          </CardHeader>
          <CardContent>
            {priceError || !goldPriceData?.price ? (
              <div className="text-center text-red-600 dark:text-red-400 text-sm">
                Unable to fetch current gold price
              </div>
            ) : (
              <div className="text-2xl font-bold text-card-foreground">
                {formatCurrency(currentGoldPrice, currency)}{" "}
                <span className="text-base font-normal">per gram</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Main Form */}
        <Card className="bg-card border-border shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Package className="w-6 h-6 text-primary" />
              <div>
                <CardTitle className="text-card-foreground">
                  Physical Gold Deposit
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Record physical gold deposits for users
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* User Selection */}
              <Card className="bg-muted/50 border-border">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    <CardTitle className="text-lg text-card-foreground">
                      Select User
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Search Input */}
                  <div>
                    <Label className="text-sm font-semibold text-muted-foreground">
                      Search User
                    </Label>
                    <div className="relative mt-2">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Search by name or email..."
                        value={userSearchTerm}
                        onChange={(e) => handleUserSearchChange(e.target.value)}
                        className="pl-10 bg-muted/30 border-border focus:ring-ring"
                      />
                      {selectedUserId && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={handleClearUserSelection}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-muted/80"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Search Results */}
                  {showUserSearch && userSearchTerm && !selectedUserId && (
                    <div className="space-y-2 max-h-60 overflow-y-auto border border-border rounded-lg bg-card">
                      {usersLoading ? (
                        <div className="flex items-center justify-center py-4">
                          <Loader2 className="w-5 h-5 animate-spin text-primary" />
                          <span className="ml-2 text-sm text-muted-foreground">
                            Searching users...
                          </span>
                        </div>
                      ) : usersData?.success && usersData?.users?.length ? (
                        usersData.users.map((user: ApiUser) => (
                          <div
                            key={user.id}
                            onClick={() => handleUserSelect(user)}
                            className="p-3 border-b border-border last:border-b-0 cursor-pointer transition-all hover:bg-muted/50"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium text-card-foreground">
                                  {user.firstName}{" "}
                                  {user.middleName ? `${user.middleName} ` : ""}
                                  {user.lastName}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {user.email}
                                </p>
                              </div>
                              <div className="text-xs text-muted-foreground">
                                ID: {user.id}
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-center text-muted-foreground py-4">
                          No users found
                        </p>
                      )}
                    </div>
                  )}

                  {/* Selected User Display */}
                  {selectedUser && (
                    <Card className="bg-secondary border-primary/20 border-2">
                      <CardContent className="pt-6">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-primary" />
                              <p className="font-semibold text-primary">
                                Selected User
                              </p>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={handleClearUserSelection}
                              className="h-6 w-6 p-0 hover:bg-muted/80"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                          <div>
                            <p className="font-semibold text-secondary-foreground text-lg">
                              {selectedUser.firstName}{" "}
                              {selectedUser.middleName
                                ? `${selectedUser.middleName} `
                                : ""}
                              {selectedUser.lastName}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {selectedUser.email}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              User ID: {selectedUser.id}
                            </p>
                            {selectedUser.phoneNumber && (
                              <p className="text-xs text-muted-foreground">
                                Phone: {selectedUser.phoneNumber}
                              </p>
                            )}
                            {selectedUser.nationality && (
                              <p className="text-xs text-muted-foreground">
                                Nationality: {selectedUser.nationality}
                              </p>
                            )}
                            {selectedUser.country && (
                              <p className="text-xs text-muted-foreground">
                                Country: {selectedUser.country}
                              </p>
                            )}
                          </div>
                          {selectedUserPortfolio && (
                            <div className="pt-2 border-t border-border">
                              <p className="text-sm font-medium text-secondary-foreground mb-2">
                                Current Portfolio
                              </p>
                              <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>
                                  <p className="text-muted-foreground">
                                    Total Gold
                                  </p>
                                  <p className="font-semibold text-secondary-foreground">
                                    {selectedUserPortfolio.totalGrams.toFixed(
                                      4
                                    )}{" "}
                                    grams
                                  </p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">
                                    Invested
                                  </p>
                                  <p className="font-semibold text-secondary-foreground">
                                    {formatCurrency(
                                      selectedUserPortfolio.totalInvested,
                                      currency
                                    )}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">
                                    Current Value
                                  </p>
                                  <p className="font-semibold text-secondary-foreground">
                                    {formatCurrency(
                                      selectedUserPortfolio.currentValue,
                                      currency
                                    )}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </CardContent>
              </Card>

              {/* Gold Item Details */}
              <Card className="bg-muted/50 border-border">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-primary" />
                    <CardTitle className="text-lg text-card-foreground">
                      Gold Item Details
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-sm font-semibold text-muted-foreground">
                        Item Type *
                      </Label>
                      <Select
                        value={goldItem.type}
                        onValueChange={(value: GoldItemType) =>
                          handleGoldItemChange("type", value)
                        }
                      >
                        <SelectTrigger className="mt-2 bg-muted/30 border-border focus:ring-ring">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          <SelectItem value="BAR">🔸 Gold Bar</SelectItem>
                          <SelectItem value="COIN">🪙 Gold Coin</SelectItem>
                          <SelectItem value="JEWELRY">💍 Jewelry</SelectItem>
                          <SelectItem value="OTHER">📦 Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-sm font-semibold text-muted-foreground">
                        Weight (grams) *
                      </Label>
                      <Input
                        type="number"
                        step="0.0001"
                        min="0"
                        value={goldItem.weightGrams || ""}
                        onChange={(e) =>
                          handleGoldItemChange(
                            "weightGrams",
                            parseFloat(e.target.value) || 0
                          )
                        }
                        placeholder="0.0000"
                        className="mt-2 bg-muted/30 border-border focus:ring-ring"
                      />
                    </div>

                    <div>
                      <Label className="text-sm font-semibold text-muted-foreground">
                        Karat
                      </Label>
                      <Input
                        type="number"
                        min="1"
                        max="24"
                        value={goldItem.karat || ""}
                        onChange={(e) =>
                          handleGoldItemChange(
                            "karat",
                            parseInt(e.target.value) || undefined
                          )
                        }
                        placeholder="24"
                        className="mt-2 bg-muted/30 border-border focus:ring-ring"
                      />
                    </div>

                    <div>
                      <Label className="text-sm font-semibold text-muted-foreground">
                        Purity (0-1)
                      </Label>
                      <Input
                        type="number"
                        step="0.001"
                        min="0"
                        max="1"
                        value={goldItem.purity || ""}
                        onChange={(e) =>
                          handleGoldItemChange(
                            "purity",
                            parseFloat(e.target.value) || undefined
                          )
                        }
                        placeholder="0.999"
                        className="mt-2 bg-muted/30 border-border focus:ring-ring"
                      />
                    </div>

                    <div>
                      <Label className="text-sm font-semibold text-muted-foreground">
                        Serial Number
                      </Label>
                      <Input
                        type="text"
                        value={goldItem.serialNumber || ""}
                        onChange={(e) =>
                          handleGoldItemChange("serialNumber", e.target.value)
                        }
                        placeholder="Optional"
                        className="mt-2 bg-muted/30 border-border focus:ring-ring"
                      />
                    </div>

                    <div>
                      <Label className="text-sm font-semibold text-muted-foreground">
                        Origin
                      </Label>
                      <Input
                        type="text"
                        value={goldItem.origin || ""}
                        onChange={(e) =>
                          handleGoldItemChange("origin", e.target.value)
                        }
                        placeholder="Optional"
                        className="mt-2 bg-muted/30 border-border focus:ring-ring"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-semibold text-muted-foreground">
                      Description
                    </Label>
                    <Textarea
                      value={goldItem.description || ""}
                      onChange={(e) =>
                        handleGoldItemChange("description", e.target.value)
                      }
                      placeholder="Optional description of the gold item..."
                      className="mt-2 bg-muted/30 border-border focus:ring-ring"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-semibold text-muted-foreground">
                      Storage Location
                    </Label>
                    <Input
                      type="text"
                      value={goldItem.storageLocation || ""}
                      onChange={(e) =>
                        handleGoldItemChange("storageLocation", e.target.value)
                      }
                      placeholder="Vault location or identifier"
                      className="mt-2 bg-muted/30 border-border focus:ring-ring"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Pricing */}
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
                      <Select
                        value={currency}
                        onValueChange={(value: Currency) => setCurrency(value)}
                      >
                        <SelectTrigger className="mt-2 bg-muted/30 border-border focus:ring-ring">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          <SelectItem value="USD">
                            🇺🇸 USD - US Dollar
                          </SelectItem>
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

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Label className="text-sm font-semibold text-muted-foreground">
                          Price per Gram *
                        </Label>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setUseCurrentPrice(true);
                            setPricePerGram(currentGoldPrice);
                          }}
                          disabled={!currentGoldPrice || priceLoading}
                          className="text-xs bg-muted/50 border-border hover:bg-muted/80 hover:text-card-foreground"
                        >
                          Use Current Price
                        </Button>
                      </div>
                      <Input
                        type="number"
                        step="0.01"
                        min="0"
                        value={pricePerGram || ""}
                        onChange={(e) => {
                          setUseCurrentPrice(false);
                          setPricePerGram(parseFloat(e.target.value) || 0);
                        }}
                        placeholder="0.00"
                        className="mt-2 bg-muted/30 border-border focus:ring-ring"
                      />
                    </div>
                  </div>

                  {goldItem.weightGrams > 0 && pricePerGram > 0 && (
                    <Card className="bg-secondary border-border">
                      <CardContent className="pt-6">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-secondary-foreground">
                            Transaction Summary
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground">
                                Weight
                              </p>
                              <p className="font-semibold text-secondary-foreground">
                                {goldItem.weightGrams.toFixed(4)} grams
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">
                                Price/gram
                              </p>
                              <p className="font-semibold text-secondary-foreground">
                                {formatCurrency(pricePerGram, currency)}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">
                                Total Value
                              </p>
                              <p className="font-bold text-secondary-foreground text-lg">
                                {formatCurrency(
                                  transactionSummary.totalValue,
                                  currency
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </CardContent>
              </Card>

              {/* Deposit Date */}
              <Card className="bg-muted/50 border-border">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <CardTitle className="text-lg text-card-foreground">
                      Deposit Date
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Input
                    type="date"
                    value={depositDate}
                    onChange={(e) => setDepositDate(e.target.value)}
                    className="bg-muted/30 border-border focus:ring-ring"
                  />
                </CardContent>
              </Card>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg transition-colors"
                disabled={!isFormValid || isDepositing}
              >
                {isDepositing ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing Deposit...
                  </div>
                ) : (
                  `Record Physical Gold Deposit`
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col bg-card border-border">
          <DialogHeader className="flex-shrink-0">
            <DialogTitle className="text-xl font-bold text-card-foreground flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              Confirm Physical Gold Deposit
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Please review the deposit details before confirming this
              transaction.
            </DialogDescription>
          </DialogHeader>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto space-y-6 my-6 pr-2">
            {/* User Information */}
            {selectedUser && (
              <Card className="bg-secondary border-border">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <User className="w-5 h-5 text-secondary-foreground" />
                    <h4 className="font-semibold text-secondary-foreground">
                      User Details
                    </h4>
                  </div>
                  <div className="space-y-2">
                    <p className="text-secondary-foreground">
                      <span className="font-medium">Name:</span>{" "}
                      {selectedUser.firstName}{" "}
                      {selectedUser.middleName
                        ? `${selectedUser.middleName} `
                        : ""}
                      {selectedUser.lastName}
                    </p>
                    <p className="text-secondary-foreground">
                      <span className="font-medium">Email:</span>{" "}
                      {selectedUser.email}
                    </p>
                    <p className="text-secondary-foreground">
                      <span className="font-medium">User ID:</span>{" "}
                      {selectedUser.id}
                    </p>
                    {selectedUser.phoneNumber && (
                      <p className="text-secondary-foreground">
                        <span className="font-medium">Phone:</span>{" "}
                        {selectedUser.phoneNumber}
                      </p>
                    )}
                    {selectedUser.nationality && (
                      <p className="text-secondary-foreground">
                        <span className="font-medium">Nationality:</span>{" "}
                        {selectedUser.nationality}
                      </p>
                    )}
                    {selectedUser.country && (
                      <p className="text-secondary-foreground">
                        <span className="font-medium">Country:</span>{" "}
                        {selectedUser.country}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Gold Item Details */}
            <Card className="bg-muted/50 border-border">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Package className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-card-foreground">
                    Gold Item Details
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-card-foreground">
                      <span className="font-medium">Type:</span> {goldItem.type}
                    </p>
                    <p className="text-card-foreground">
                      <span className="font-medium">Weight:</span>{" "}
                      {goldItem.weightGrams} grams
                    </p>
                    {goldItem.karat && (
                      <p className="text-card-foreground">
                        <span className="font-medium">Karat:</span>{" "}
                        {goldItem.karat}
                      </p>
                    )}
                    {goldItem.purity && (
                      <p className="text-card-foreground">
                        <span className="font-medium">Purity:</span>{" "}
                        {goldItem.purity}
                      </p>
                    )}
                  </div>
                  <div>
                    {goldItem.serialNumber && (
                      <p className="text-card-foreground">
                        <span className="font-medium">Serial:</span>{" "}
                        {goldItem.serialNumber}
                      </p>
                    )}
                    {goldItem.origin && (
                      <p className="text-card-foreground">
                        <span className="font-medium">Origin:</span>{" "}
                        {goldItem.origin}
                      </p>
                    )}
                    {goldItem.storageLocation && (
                      <p className="text-card-foreground">
                        <span className="font-medium">Storage:</span>{" "}
                        {goldItem.storageLocation}
                      </p>
                    )}
                  </div>
                </div>
                {goldItem.description && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-card-foreground">
                      <span className="font-medium">Description:</span>{" "}
                      {goldItem.description}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Transaction Summary */}
            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calculator className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-primary">
                    Transaction Summary
                  </h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-card-foreground">Weight:</span>
                    <span className="font-semibold text-card-foreground">
                      {transactionSummary.weightGrams.toFixed(4)} grams
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-card-foreground">
                      Price per gram:
                    </span>
                    <span className="font-semibold text-card-foreground">
                      {formatCurrency(
                        transactionSummary.pricePerGram,
                        currency
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-card-foreground">Deposit Date:</span>
                    <span className="font-semibold text-card-foreground">
                      {depositDate || "Current Date"}
                    </span>
                  </div>
                  <div className="h-px bg-border"></div>
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-semibold text-primary">
                      Total Value:
                    </span>
                    <span className="font-bold text-primary">
                      {formatCurrency(transactionSummary.totalValue, currency)}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    * No fees applied to physical deposits
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Warning */}
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-red-600 dark:text-red-400 mb-1">
                    Important Notice
                  </p>
                  <p className="text-red-600 dark:text-red-400">
                    This action will permanently record a physical gold deposit
                    for the selected user. The transaction cannot be easily
                    reversed. Please ensure all details are accurate before
                    confirming.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="flex-shrink-0 gap-3">
            <Button
              variant="outline"
              onClick={() => setIsConfirmOpen(false)}
              className="flex-1 bg-muted/50 border-border hover:bg-muted/80 hover:text-card-foreground"
              disabled={isDepositing}
            >
              Cancel
            </Button>
            <Button
              onClick={confirmDeposit}
              disabled={isDepositing}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
            >
              {isDepositing ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Recording Deposit...
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

export default PhysicalGoldDepositForm;
