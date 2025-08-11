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
      <div className="bg-gradient-to-br from-amber-50 to-yellow-100 border border-amber-200 shadow-lg rounded-xl">
        <div className="p-12 text-center">
          <div className="text-amber-600 text-lg font-medium mb-2">
            No physical gold items recorded
          </div>
          <div className="text-amber-700 text-sm">
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
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "COIN":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "JEWELRY":
        return "bg-rose-100 text-rose-800 border-rose-200";
      case "OTHER":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
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
    <div className="bg-white border border-amber-200 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-b border-amber-100 px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="w-2 h-8 bg-gradient-to-b from-amber-500 to-yellow-600 rounded-full"></div>
          <h2 className="text-2xl font-bold text-amber-900">
            Physical Gold Items
          </h2>
          <div className="ml-auto flex gap-3">
            <span className="text-sm font-medium text-amber-700 bg-white px-3 py-1 rounded-full border border-amber-200">
              {goldItems.length} {goldItems.length === 1 ? "item" : "items"}
            </span>
            <span className="text-sm font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-200">
              {verifiedCount} verified
            </span>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-amber-50 hover:bg-amber-50 border-b border-amber-100">
              <th className="font-semibold text-amber-900 py-4 px-6 text-left">
                ID
              </th>
              <th className="font-semibold text-amber-900 py-4 px-6 text-left">
                Type
              </th>
              <th className="font-semibold text-amber-900 py-4 px-6 text-right">
                Weight
              </th>
              <th className="font-semibold text-amber-900 py-4 px-6 text-center">
                Karat
              </th>
              <th className="font-semibold text-amber-900 py-4 px-6 text-center">
                Status
              </th>
              <th className="font-semibold text-amber-900 py-4 px-6 text-left">
                Created At
              </th>
            </tr>
          </thead>
          <tbody>
            {goldItems.map((item, index) => (
              <tr
                key={item.id}
                className={`
                  border-b border-amber-50 hover:bg-amber-25 transition-colors duration-200
                  ${index % 2 === 0 ? "bg-white" : "bg-amber-25/30"}
                `}
              >
                {/* ID */}
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="font-mono text-sm font-medium text-gray-800">
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
                  <span className="font-semibold text-lg text-amber-800">
                    {formatWeight(item.weightGrams)}
                  </span>
                </td>

                {/* Karat */}
                <td className="py-4 px-6 text-center">
                  {item.karat ? (
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold border border-yellow-200">
                      {item.karat}K
                    </span>
                  ) : (
                    <span className="text-gray-400 text-sm">N/A</span>
                  )}
                </td>

                {/* Verified Status */}
                <td className="py-4 px-6 text-center">
                  <div className="flex items-center justify-center">
                    {item.verified ? (
                      <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium border border-green-200">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Verified
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium border border-orange-200">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        Pending
                      </span>
                    )}
                  </div>
                </td>

                {/* Created At */}
                <td className="py-4 px-6">
                  <div className="flex flex-col">
                    <span className="text-gray-800 font-medium text-sm">
                      {formatDate(item.createdAt)}
                    </span>
                    <span className="text-gray-500 text-xs mt-1">
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
      <div className="bg-amber-50 px-6 py-4 border-t border-amber-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="text-amber-800">
            <span className="font-medium">Total Weight:</span>
            <span className="font-bold ml-2 text-lg">
              {formatWeight(totalWeight)}
            </span>
          </div>
          <div className="text-amber-800">
            <span className="font-medium">Verification Rate:</span>
            <span className="font-bold ml-2">
              {Math.round((verifiedCount / goldItems.length) * 100)}%
            </span>
          </div>
          <div className="text-amber-700 text-right md:text-left">
            <span className="font-medium">Last Updated:</span>
            <span className="ml-2">{formatDate(latestDate)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysicalGoldList;
