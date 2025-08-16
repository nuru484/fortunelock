import React from "react";
import {
  Package,
  Coins,
  Gem,
  Diamond,
  Scale,
  ShieldCheck,
  Clock,
  Calendar,
} from "lucide-react";

export interface PhysicalGoldListProps {
  goldItems: {
    id: number;
    type: "BAR" | "COIN" | "JEWELRY" | "OTHER";
    weightGrams: number;
    karat?: number | null;
    verified: boolean;
    createdAt: string;
  }[];
}

const PhysicalGoldList = ({ goldItems }: PhysicalGoldListProps) => {
  if (!goldItems || goldItems.length === 0) {
    return (
      <div className="bg-card border border-border shadow-sm rounded-xl overflow-hidden">
        <div className="p-16 text-center">
          <div className="w-20 h-20 bg-muted/50 rounded-full mx-auto mb-6 flex items-center justify-center ring-1 ring-border">
            <Package className="w-10 h-10 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold text-card-foreground mb-2">
            No physical gold items recorded
          </h3>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Your gold inventory will appear here once items are added to your
            collection
          </p>
        </div>
      </div>
    );
  }

  const formatWeight = (grams: number) => {
    return `${grams.toLocaleString()} g`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const getTypeConfig = (type: string) => {
    switch (type) {
      case "BAR":
        return {
          icon: Package,
          color: "text-primary",
          bgColor: "bg-primary/10",
          borderColor: "border-primary/30",
          label: "Gold Bar",
        };
      case "COIN":
        return {
          icon: Coins,
          color: "text-accent-foreground",
          bgColor: "bg-accent/20",
          borderColor: "border-accent/40",
          label: "Gold Coin",
        };
      case "JEWELRY":
        return {
          icon: Gem,
          color: "text-secondary-foreground",
          bgColor: "bg-secondary/20",
          borderColor: "border-secondary/40",
          label: "Jewelry",
        };
      case "OTHER":
        return {
          icon: Diamond,
          color: "text-muted-foreground",
          bgColor: "bg-muted/30",
          borderColor: "border-muted",
          label: "Other",
        };
      default:
        return {
          icon: Diamond,
          color: "text-muted-foreground",
          bgColor: "bg-muted/30",
          borderColor: "border-muted",
          label: "Unknown",
        };
    }
  };

  const totalWeight = goldItems.reduce(
    (sum, item) => sum + item.weightGrams,
    0
  );
  const verifiedCount = goldItems.filter((item) => item.verified).length;
  const averageKarat =
    goldItems
      .filter((item) => item.karat)
      .reduce((sum, item) => sum + (item.karat || 0), 0) /
      goldItems.filter((item) => item.karat).length || 0;

  return (
    <div className="bg-card border border-border shadow-sm rounded-xl overflow-hidden">
      {/* Enhanced Header */}
      <div className="bg-muted/30 border-b border-border px-8 py-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-1 h-12 bg-gradient-to-b from-primary via-accent to-primary rounded-full"></div>
            <div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight">
                Physical Gold Inventory
              </h2>
              <p className="text-muted-foreground text-base mt-1">
                Your complete collection of physical gold assets
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-popover/80 backdrop-blur-sm border border-border px-4 py-2 rounded-lg shadow-sm">
              <span className="text-sm font-medium text-popover-foreground">
                {goldItems.length}
              </span>
              <span className="text-xs text-muted-foreground ml-1">
                {goldItems.length === 1 ? "item" : "items"}
              </span>
            </div>
            <div className="bg-primary/10 border border-primary/30 px-4 py-2 rounded-lg">
              <span className="text-sm font-medium text-primary">
                {verifiedCount} verified
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/20 border-b border-border">
              <th className="font-semibold text-foreground py-5 px-8 text-left text-sm tracking-wide">
                ID
              </th>
              <th className="font-semibold text-foreground py-5 px-6 text-left text-sm tracking-wide">
                Type
              </th>
              <th className="font-semibold text-foreground py-5 px-6 text-right text-sm tracking-wide">
                Weight
              </th>
              <th className="font-semibold text-foreground py-5 px-6 text-center text-sm tracking-wide">
                Purity
              </th>
              <th className="font-semibold text-foreground py-5 px-6 text-center text-sm tracking-wide">
                Status
              </th>
              <th className="font-semibold text-foreground py-5 px-6 text-left text-sm tracking-wide">
                Date Added
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {goldItems.map((item, index) => {
              const typeConfig = getTypeConfig(item.type);
              const TypeIcon = typeConfig.icon;

              return (
                <tr
                  key={(item.id, index)}
                  className="hover:bg-muted/10 transition-colors duration-200 group"
                >
                  {/* ID */}
                  <td className="py-5 px-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full ring-2 ring-primary/20"></div>
                      <span className="font-mono text-sm font-medium text-foreground tracking-wider">
                        #{item.id.toString().padStart(4, "0")}
                      </span>
                    </div>
                  </td>

                  {/* Type */}
                  <td className="py-5 px-6">
                    <div
                      className={`inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg text-sm font-medium border transition-colors ${typeConfig.bgColor} ${typeConfig.color} ${typeConfig.borderColor}`}
                    >
                      <TypeIcon className="w-4 h-4" />
                      {typeConfig.label}
                    </div>
                  </td>

                  {/* Weight */}
                  <td className="py-5 px-6 text-right">
                    <div className="flex items-center justify-end gap-2.5">
                      <Scale className="w-4 h-4 text-accent" />
                      <span className="font-bold text-lg text-foreground tracking-tight">
                        {formatWeight(item.weightGrams)}
                      </span>
                    </div>
                  </td>

                  {/* Karat */}
                  <td className="py-5 px-6 text-center">
                    {item.karat ? (
                      <div className="bg-accent/20 text-accent-foreground px-3.5 py-2 rounded-lg text-sm font-semibold border border-accent/40 inline-flex items-center gap-2">
                        <Diamond className="w-3 h-3" />
                        {item.karat}K
                      </div>
                    ) : (
                      <span className="text-muted-foreground text-sm italic">
                        Not specified
                      </span>
                    )}
                  </td>

                  {/* Verification Status */}
                  <td className="py-5 px-6 text-center">
                    {item.verified ? (
                      <div className="inline-flex items-center gap-2.5 bg-primary/10 text-primary px-3.5 py-2 rounded-lg text-sm font-medium border border-primary/30">
                        <ShieldCheck className="w-4 h-4" />
                        Verified
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-2.5 bg-destructive/10 text-destructive px-3.5 py-2 rounded-lg text-sm font-medium border border-destructive/30">
                        <Clock className="w-4 h-4" />
                        Pending
                      </div>
                    )}
                  </td>

                  {/* Created At */}
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <div className="flex flex-col">
                        <span className="text-foreground font-medium text-sm">
                          {formatDate(item.createdAt)}
                        </span>
                        <span className="text-muted-foreground text-xs font-mono">
                          {formatTime(item.createdAt)}
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Enhanced Footer Summary */}
      <div className="bg-muted/20 px-8 py-6 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-accent mb-1">
              {formatWeight(totalWeight)}
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              Total Weight
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-primary mb-1">
              {Math.round((verifiedCount / goldItems.length) * 100)}%
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              Verification Rate
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-foreground mb-1">
              {averageKarat ? `${averageKarat.toFixed(1)}K` : "N/A"}
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              Average Purity
            </div>
          </div>
          <div className="text-center md:text-right">
            <div className="text-sm text-muted-foreground space-y-1">
              <div className="flex items-center justify-center md:justify-end gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>
                  {goldItems.filter((item) => item.type === "BAR").length} Bars
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>
                  {goldItems.filter((item) => item.type === "COIN").length}{" "}
                  Coins
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>
                  {goldItems.filter((item) => item.type === "JEWELRY").length}{" "}
                  Jewelry
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysicalGoldList;
