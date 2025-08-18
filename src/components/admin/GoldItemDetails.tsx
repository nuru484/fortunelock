// components/admin/GoldItemDetails.tsx
"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package } from "lucide-react";

type GoldItemType = "BAR" | "COIN" | "JEWELRY" | "OTHER";

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

interface GoldItemDetailsProps {
  goldItem: GoldItem;
  onChange: <K extends keyof GoldItem>(field: K, value: GoldItem[K]) => void;
}

const GoldItemDetails: React.FC<GoldItemDetailsProps> = ({
  goldItem,
  onChange,
}) => {
  return (
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
              onValueChange={(value: GoldItemType) => onChange("type", value)}
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
                onChange("weightGrams", parseFloat(e.target.value) || 0)
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
                onChange("karat", parseInt(e.target.value) || undefined)
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
                onChange("purity", parseFloat(e.target.value) || undefined)
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
              onChange={(e) => onChange("serialNumber", e.target.value)}
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
              onChange={(e) => onChange("origin", e.target.value)}
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
            onChange={(e) => onChange("description", e.target.value)}
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
            onChange={(e) => onChange("storageLocation", e.target.value)}
            placeholder="Vault location or identifier"
            className="mt-2 bg-muted/30 border-border focus:ring-ring"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default GoldItemDetails;
