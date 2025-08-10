// src/components/admin/PhysicalGoldDepositForm.tsx
"use client";
import React, { useState, useEffect } from "react";
import {
  useDepositPhysicalGoldMutation,
  useGetAllUsersQuery,
  useGetUserByIdQuery,
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
  email: string;
}

interface Portfolio {
  totalGrams: number;
  totalInvested: number;
  currentValue: number;
}

interface SelectedUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  portfolio?: Portfolio;
}

interface TransactionSummary {
  weightGrams: number;
  pricePerGram: number;
  totalValue: number;
  currency: string;
}

interface UsersQueryResult {
  users: ApiUser[];
  totalUsers: number;
  currentPage: number;
  totalPages: number;
}

interface UserByIdResult {
  user: ApiUser;
  portfolio?: Portfolio;
}

interface GoldPriceResult {
  price: {
    pricePerGram: number;
    currency: Currency;
    recordedAt: string;
  };
}

interface DepositMutationResult {
  message: string;
  success: boolean;
  transaction: {
    id: number;
    referenceNumber: string;
    gramsPurchased: number;
  };
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
}

const PhysicalGoldDepositForm: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [userSearchTerm, setUserSearchTerm] = useState<string>("");
  const [currency, setCurrency] = useState<Currency>("USD");
  const [pricePerGram, setPricePerGram] = useState<number>(0);
  const [useCurrentPrice, setUseCurrentPrice] = useState<boolean>(true);
  const [adminNotes, setAdminNotes] = useState<string>("");
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
  }) as { data?: UsersQueryResult; isLoading: boolean };

  const { data: selectedUserData } = useGetUserByIdQuery(selectedUserId, {
    skip: !selectedUserId,
  }) as { data?: UserByIdResult };

  const {
    data: goldPriceData,
    isLoading: priceLoading,
    error: priceError,
  } = useGetGoldPricesQuery(currency) as {
    data?: GoldPriceResult;
    isLoading: boolean;
    error?: unknown;
  };

  const currentGoldPrice = goldPriceData?.price?.pricePerGram || 0;

  // Update price per gram when currency changes or current price is selected
  useEffect(() => {
    if (useCurrentPrice && currentGoldPrice > 0) {
      setPricePerGram(currentGoldPrice);
    }
  }, [useCurrentPrice, currentGoldPrice]);

  // Calculate transaction summary
  useEffect(() => {
    const totalValue = goldItem.weightGrams * pricePerGram;
    setTransactionSummary({
      weightGrams: goldItem.weightGrams,
      pricePerGram,
      totalValue,
      currency,
    });
  }, [goldItem.weightGrams, pricePerGram, currency]);

  const selectedUser: SelectedUser | null = selectedUserData?.user
    ? {
        id: selectedUserData.user.id,
        firstName: selectedUserData.user.firstName,
        lastName: selectedUserData.user.lastName,
        email: selectedUserData.user.email,
        portfolio: selectedUserData.portfolio,
      }
    : null;

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
        ...(adminNotes && { adminNotes }),
      };

      (await depositPhysicalGold(payload).unwrap()) as DepositMutationResult;

      // Reset form
      setSelectedUserId(null);
      setUserSearchTerm("");
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
      setAdminNotes("");
      setIsConfirmOpen(false);

      toast.success(
        `Successfully deposited ${goldItem.weightGrams} grams of gold for ${selectedUser?.firstName} ${selectedUser?.lastName}`,
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
        <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Coins className="w-6 h-6 text-amber-600" />
                <div>
                  <CardTitle className="text-amber-900">
                    Current Market Price
                  </CardTitle>
                  <CardDescription className="text-amber-700">
                    Real-time gold pricing reference
                  </CardDescription>
                </div>
              </div>
              {priceLoading && (
                <Loader2 className="w-5 h-5 animate-spin text-amber-600" />
              )}
            </div>
          </CardHeader>
          <CardContent>
            {priceError || !goldPriceData?.price ? (
              <div className="text-center text-red-500 text-sm">
                Unable to fetch current gold price
              </div>
            ) : (
              <div className="text-2xl font-bold text-amber-900">
                {formatCurrency(currentGoldPrice, currency)}{" "}
                <span className="text-base font-normal">per gram</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Main Form */}
        <Card className="bg-white border-gray-200 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Package className="w-6 h-6 text-blue-600" />
              <div>
                <CardTitle className="text-gray-900">
                  Physical Gold Deposit
                </CardTitle>
                <CardDescription>
                  Record physical gold deposits for users
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* User Selection */}
              <Card className="bg-gray-50 border-gray-200">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-600" />
                    <CardTitle className="text-lg">Select User</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-sm font-semibold text-gray-700">
                      Search User
                    </Label>
                    <div className="relative mt-2">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Search by name or email..."
                        value={userSearchTerm}
                        onChange={(e) => setUserSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {userSearchTerm && (
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {usersLoading ? (
                        <div className="flex items-center justify-center py-4">
                          <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
                          <span className="ml-2 text-sm text-gray-600">
                            Searching users...
                          </span>
                        </div>
                      ) : usersData?.users?.length ? (
                        usersData.users.map((user: ApiUser) => (
                          <div
                            key={user.id}
                            onClick={() => {
                              setSelectedUserId(user.id);
                              setUserSearchTerm(
                                `${user.firstName} ${user.lastName}`
                              );
                            }}
                            className={`p-3 rounded-lg border cursor-pointer transition-all ${
                              selectedUserId === user.id
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium text-gray-900">
                                  {user.firstName} {user.lastName}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {user.email}
                                </p>
                              </div>
                              {selectedUserId === user.id && (
                                <CheckCircle className="w-5 h-5 text-blue-600" />
                              )}
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-center text-gray-500 py-4">
                          No users found
                        </p>
                      )}
                    </div>
                  )}

                  {selectedUser && (
                    <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="pt-6">
                        <div className="space-y-3">
                          <div>
                            <p className="font-semibold text-blue-900">
                              Selected User
                            </p>
                            <p className="text-blue-800">
                              {selectedUser.firstName} {selectedUser.lastName}
                            </p>
                            <p className="text-sm text-blue-600">
                              {selectedUser.email}
                            </p>
                          </div>
                          {selectedUser.portfolio && (
                            <div className="pt-2 border-t border-blue-200">
                              <p className="text-sm font-medium text-blue-900 mb-2">
                                Current Portfolio
                              </p>
                              <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>
                                  <p className="text-blue-600">Total Gold</p>
                                  <p className="font-semibold text-blue-900">
                                    {selectedUser.portfolio.totalGrams.toFixed(
                                      4
                                    )}{" "}
                                    grams
                                  </p>
                                </div>
                                <div>
                                  <p className="text-blue-600">Invested</p>
                                  <p className="font-semibold text-blue-900">
                                    {formatCurrency(
                                      selectedUser.portfolio.totalInvested,
                                      currency
                                    )}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-blue-600">Current Value</p>
                                  <p className="font-semibold text-blue-900">
                                    {formatCurrency(
                                      selectedUser.portfolio.currentValue,
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
              <Card className="bg-gray-50 border-gray-200">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-amber-600" />
                    <CardTitle className="text-lg">Gold Item Details</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-sm font-semibold text-gray-700">
                        Item Type *
                      </Label>
                      <Select
                        value={goldItem.type}
                        onValueChange={(value: GoldItemType) =>
                          handleGoldItemChange("type", value)
                        }
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="BAR">🔸 Gold Bar</SelectItem>
                          <SelectItem value="COIN">🪙 Gold Coin</SelectItem>
                          <SelectItem value="JEWELRY">💍 Jewelry</SelectItem>
                          <SelectItem value="OTHER">📦 Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-sm font-semibold text-gray-700">
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
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label className="text-sm font-semibold text-gray-700">
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
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label className="text-sm font-semibold text-gray-700">
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
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label className="text-sm font-semibold text-gray-700">
                        Serial Number
                      </Label>
                      <Input
                        type="text"
                        value={goldItem.serialNumber || ""}
                        onChange={(e) =>
                          handleGoldItemChange("serialNumber", e.target.value)
                        }
                        placeholder="Optional"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label className="text-sm font-semibold text-gray-700">
                        Origin
                      </Label>
                      <Input
                        type="text"
                        value={goldItem.origin || ""}
                        onChange={(e) =>
                          handleGoldItemChange("origin", e.target.value)
                        }
                        placeholder="Optional"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-semibold text-gray-700">
                      Description
                    </Label>
                    <Textarea
                      value={goldItem.description || ""}
                      onChange={(e) =>
                        handleGoldItemChange("description", e.target.value)
                      }
                      placeholder="Optional description of the gold item..."
                      className="mt-2"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-semibold text-gray-700">
                      Storage Location
                    </Label>
                    <Input
                      type="text"
                      value={goldItem.storageLocation || ""}
                      onChange={(e) =>
                        handleGoldItemChange("storageLocation", e.target.value)
                      }
                      placeholder="Vault location or identifier"
                      className="mt-2"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Pricing */}
              <Card className="bg-gray-50 border-gray-200">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-green-600" />
                    <CardTitle className="text-lg">
                      Pricing & Valuation
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-sm font-semibold text-gray-700">
                        Currency *
                      </Label>
                      <Select
                        value={currency}
                        onValueChange={(value: Currency) => setCurrency(value)}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
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
                        <Label className="text-sm font-semibold text-gray-700">
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
                          className="text-xs"
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
                        className="mt-2"
                      />
                    </div>
                  </div>

                  {goldItem.weightGrams > 0 && pricePerGram > 0 && (
                    <Card className="bg-white border-green-200">
                      <CardContent className="pt-6">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-green-900">
                            Transaction Summary
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm text-green-600">Weight</p>
                              <p className="font-semibold text-green-900">
                                {goldItem.weightGrams.toFixed(4)} grams
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-green-600">
                                Price/gram
                              </p>
                              <p className="font-semibold text-green-900">
                                {formatCurrency(pricePerGram, currency)}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-green-600">
                                Total Value
                              </p>
                              <p className="font-bold text-green-900 text-lg">
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

              {/* Admin Notes */}
              <Card className="bg-gray-50 border-gray-200">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Admin Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={adminNotes}
                    onChange={(e) => setAdminNotes(e.target.value)}
                    placeholder="Optional internal notes about this deposit..."
                    rows={4}
                  />
                </CardContent>
              </Card>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg"
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

      {/* Confirmation Dialog - Now Scrollable */}
      <Dialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col">
          <DialogHeader className="flex-shrink-0">
            <DialogTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-600" />
              Confirm Physical Gold Deposit
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Please review the deposit details before confirming this
              transaction.
            </DialogDescription>
          </DialogHeader>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto space-y-6 my-6 pr-2">
            {/* User Information */}
            {selectedUser && (
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <User className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-blue-900">
                      User Details
                    </h4>
                  </div>
                  <div className="space-y-2">
                    <p className="text-blue-900">
                      <span className="font-medium">Name:</span>{" "}
                      {selectedUser.firstName} {selectedUser.lastName}
                    </p>
                    <p className="text-blue-900">
                      <span className="font-medium">Email:</span>{" "}
                      {selectedUser.email}
                    </p>
                    <p className="text-blue-900">
                      <span className="font-medium">User ID:</span>{" "}
                      {selectedUser.id}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Gold Item Details */}
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Package className="w-5 h-5 text-amber-600" />
                  <h4 className="font-semibold text-amber-900">
                    Gold Item Details
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-amber-700">
                      <span className="font-medium">Type:</span> {goldItem.type}
                    </p>
                    <p className="text-amber-700">
                      <span className="font-medium">Weight:</span>{" "}
                      {goldItem.weightGrams} grams
                    </p>
                    {goldItem.karat && (
                      <p className="text-amber-700">
                        <span className="font-medium">Karat:</span>{" "}
                        {goldItem.karat}
                      </p>
                    )}
                    {goldItem.purity && (
                      <p className="text-amber-700">
                        <span className="font-medium">Purity:</span>{" "}
                        {goldItem.purity}
                      </p>
                    )}
                  </div>
                  <div>
                    {goldItem.serialNumber && (
                      <p className="text-amber-700">
                        <span className="font-medium">Serial:</span>{" "}
                        {goldItem.serialNumber}
                      </p>
                    )}
                    {goldItem.origin && (
                      <p className="text-amber-700">
                        <span className="font-medium">Origin:</span>{" "}
                        {goldItem.origin}
                      </p>
                    )}
                    {goldItem.storageLocation && (
                      <p className="text-amber-700">
                        <span className="font-medium">Storage:</span>{" "}
                        {goldItem.storageLocation}
                      </p>
                    )}
                  </div>
                </div>
                {goldItem.description && (
                  <div className="mt-4 pt-4 border-t border-amber-200">
                    <p className="text-amber-700">
                      <span className="font-medium">Description:</span>{" "}
                      {goldItem.description}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Transaction Summary */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calculator className="w-5 h-5 text-green-600" />
                  <h4 className="font-semibold text-green-900">
                    Transaction Summary
                  </h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-green-700">Weight:</span>
                    <span className="font-semibold text-green-900">
                      {transactionSummary.weightGrams.toFixed(4)} grams
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-700">Price per gram:</span>
                    <span className="font-semibold text-green-900">
                      {formatCurrency(
                        transactionSummary.pricePerGram,
                        currency
                      )}
                    </span>
                  </div>
                  <div className="h-px bg-green-300"></div>
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-semibold text-green-900">
                      Total Value:
                    </span>
                    <span className="font-bold text-green-900">
                      {formatCurrency(transactionSummary.totalValue, currency)}
                    </span>
                  </div>
                  <div className="text-xs text-green-600 mt-2">
                    * No fees applied to physical deposits
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Admin Notes */}
            {adminNotes && (
              <Card className="bg-gray-50 border-gray-200">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Admin Notes
                  </h4>
                  <p className="text-gray-700 text-sm bg-white p-3 rounded border">
                    {adminNotes}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Warning */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-yellow-900 mb-1">
                    Important Notice
                  </p>
                  <p className="text-yellow-800">
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
              className="flex-1"
              disabled={isDepositing}
            >
              Cancel
            </Button>
            <Button
              onClick={confirmDeposit}
              disabled={isDepositing}
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
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
