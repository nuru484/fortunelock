import React from "react";

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
      <div className="bg-background border border-muted shadow-lg rounded-lg">
        <div className="p-12 text-center">
          <div className="text-primary text-lg font-medium mb-2">
            No physical gold items recorded
          </div>
          <div className="text-primary-foreground text-sm">
            Your gold inventory will appear here once items are added
          </div>
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
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "BAR":
        return "▬";
      case "COIN":
        return "⬟";
      case "JEWELRY":
        return "💍";
      case "OTHER":
        return "◈";
      default:
        return "◈";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "BAR":
        return "bg-accent text-accent-foreground border-accent";
      case "COIN":
        return "bg-secondary text-secondary-foreground border-secondary";
      case "JEWELRY":
        return "bg-muted text-muted-foreground border-muted";
      case "OTHER":
        return "bg-card text-card-foreground border-card";
      default:
        return "bg-card text-card-foreground border-card";
    }
  };

  const totalWeight = goldItems.reduce(
    (sum, item) => sum + item.weightGrams,
    0
  );
  const verifiedCount = goldItems.filter((item) => item.verified).length;
  const latestDate =
    goldItems.length > 0 ? goldItems[0]?.createdAt : new Date().toISOString();

  return (
    <div className="bg-card border border-muted shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-muted border-b border-muted-secondary px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
          <h2 className="text-2xl font-bold text-primary-foreground">
            Physical Gold Items
          </h2>
          <div className="ml-auto flex gap-3">
            <span className="text-sm font-medium text-primary-foreground bg-card px-3 py-1 rounded-full border border-muted">
              {goldItems.length} {goldItems.length === 1 ? "item" : "items"}
            </span>
            <span className="text-sm font-medium text-accent-foreground bg-accent px-3 py-1 rounded-full border border-accent">
              {verifiedCount} verified
            </span>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted hover:bg-muted border-b border-muted-secondary">
              <th className="font-semibold text-primary-foreground py-4 px-6 text-left">
                ID
              </th>
              <th className="font-semibold text-primary-foreground py-4 px-6 text-left">
                Type
              </th>
              <th className="font-semibold text-primary-foreground py-4 px-6 text-right">
                Weight
              </th>
              <th className="font-semibold text-primary-foreground py-4 px-6 text-center">
                Karat
              </th>
              <th className="font-semibold text-primary-foreground py-4 px-6 text-center">
                Status
              </th>
              <th className="font-semibold text-primary-foreground py-4 px-6 text-left">
                Created At
              </th>
            </tr>
          </thead>
          <tbody>
            {goldItems.map((item, index) => (
              <tr
                key={item.id}
                className={`
                  border-b border-muted-secondary hover:bg-muted-secondary transition-colors duration-200
                  ${index % 2 === 0 ? "bg-card" : "bg-muted/30"}
                `}
              >
                {/* ID */}
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-mono text-sm font-medium text-foreground">
                      #{item.id}
                    </span>
                  </div>
                </td>

                {/* Type */}
                <td className="py-4 px-6">
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(
                      item.type
                    )}`}
                  >
                    <span className="text-lg">{getTypeIcon(item.type)}</span>
                    {item.type}
                  </span>
                </td>

                {/* Weight */}
                <td className="py-4 px-6 text-right">
                  <span className="font-semibold text-lg text-primary-foreground">
                    {formatWeight(item.weightGrams)}
                  </span>
                </td>

                {/* Karat */}
                <td className="py-4 px-6 text-center">
                  {item.karat ? (
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold border border-secondary">
                      {item.karat}K
                    </span>
                  ) : (
                    <span className="text-muted-foreground text-sm">N/A</span>
                  )}
                </td>

                {/* Verified Status */}
                <td className="py-4 px-6 text-center">
                  <div className="flex items-center justify-center">
                    {item.verified ? (
                      <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium border border-accent">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Verified
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium border border-destructive">
                        <div className="w-2 h-2 bg-destructive rounded-full"></div>
                        Pending
                      </span>
                    )}
                  </div>
                </td>

                {/* Created At */}
                <td className="py-4 px-6">
                  <div className="flex flex-col">
                    <span className="text-foreground font-medium text-sm">
                      {formatDate(item.createdAt)}
                    </span>
                    <span className="text-muted-foreground text-xs mt-1">
                      {new Date(item.createdAt).toLocaleTimeString("en-US", {
                        timeZoneName: "short",
                      })}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Summary */}
      <div className="bg-muted px-6 py-4 border-t border-muted-secondary">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="text-primary-foreground">
            <span className="font-medium">Total Weight:</span>
            <span className="font-bold ml-2 text-lg">
              {formatWeight(totalWeight)}
            </span>
          </div>
          <div className="text-primary-foreground">
            <span className="font-medium">Verification Rate:</span>
            <span className="font-bold ml-2">
              {Math.round((verifiedCount / goldItems.length) * 100)}%
            </span>
          </div>
          <div className="text-primary-foreground text-right md:text-left">
            <span className="font-medium">Last Updated:</span>
            <span className="ml-2">{formatDate(latestDate)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysicalGoldList;
