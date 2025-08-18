// components/admin/ConfirmationDialog.tsx
"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Loader2,
  Shield,
  User,
  Package,
  Calculator,
  AlertCircle,
} from "lucide-react";

type GoldItemType = "BAR" | "COIN" | "JEWELRY" | "OTHER";

interface User {
  id: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  nationality?: string;
  country?: string;
}

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

interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isProcessing: boolean;
  selectedUser: User | null;
  goldItem: GoldItem;
  transactionSummary: TransactionSummary;
  currency: string;
  depositDate: string;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  isProcessing,
  selectedUser,
  goldItem,
  transactionSummary,
  currency,
  depositDate,
}) => {
  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    }).format(amount);

  const formatGoldItemType = (type: GoldItemType): string => {
    const typeMap: Record<GoldItemType, string> = {
      BAR: "Gold Bar",
      COIN: "Gold Coin",
      JEWELRY: "Gold Jewelry",
      OTHER: "Other Gold Item",
    };
    return typeMap[type] || type;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
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

        <div className="flex-1 overflow-y-auto space-y-6 my-6 pr-2">
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
                    <span className="font-medium">Type:</span>{" "}
                    {formatGoldItemType(goldItem.type)}
                  </p>
                  <p className="text-card-foreground">
                    <span className="font-medium">Weight:</span>{" "}
                    {goldItem.weightGrams.toFixed(4)} grams
                  </p>
                  {goldItem.karat && (
                    <p className="text-card-foreground">
                      <span className="font-medium">Karat:</span>{" "}
                      {goldItem.karat}K
                    </p>
                  )}
                  {goldItem.purity && (
                    <p className="text-card-foreground">
                      <span className="font-medium">Purity:</span>{" "}
                      {(goldItem.purity * 100).toFixed(1)}%
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
                  <span className="text-card-foreground">Price per gram:</span>
                  <span className="font-semibold text-card-foreground">
                    {formatCurrency(transactionSummary.pricePerGram)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-card-foreground">Deposit Date:</span>
                  <span className="font-semibold text-card-foreground">
                    {depositDate || new Date().toLocaleDateString()}
                  </span>
                </div>
                <div className="h-px bg-border"></div>
                <div className="flex justify-between items-center text-lg">
                  <span className="font-semibold text-primary">
                    Total Value:
                  </span>
                  <span className="font-bold text-primary">
                    {formatCurrency(transactionSummary.totalValue)}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  * No fees applied to physical deposits
                </div>
              </div>
            </CardContent>
          </Card>

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
            onClick={onClose}
            className="flex-1 bg-muted/50 border-border hover:bg-muted/80 hover:text-card-foreground"
            disabled={isProcessing}
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            disabled={isProcessing}
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
          >
            {isProcessing ? (
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
  );
};

export default ConfirmationDialog;
