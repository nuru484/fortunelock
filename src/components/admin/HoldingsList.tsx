import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface HoldingsListProps {
  holdings: {
    id: number;
    amount: number;
    transactionId: number;
    createdAt: string;
  }[];
}

const HoldingsList = ({ holdings }: HoldingsListProps) => {
  if (!holdings || holdings.length === 0) {
    return (
      <Card className="bg-gradient-to-br from-slate-50 to-gray-100 border border-gray-200 shadow-lg">
        <CardContent className="p-12 text-center">
          <div className="text-gray-400 text-lg font-medium">
            No holdings data available
          </div>
          <div className="text-gray-500 text-sm mt-2">
            Holdings will appear here once transactions are processed
          </div>
        </CardContent>
      </Card>
    );
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
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

  return (
    <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100">
        <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-3">
          <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
          Online Holdings
          <span className="ml-auto text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-full border">
            {holdings.length} {holdings.length === 1 ? "record" : "records"}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 hover:bg-gray-50">
                <TableHead className="font-semibold text-gray-700 py-4 px-6 text-left">
                  ID
                </TableHead>
                <TableHead className="font-semibold text-gray-700 py-4 px-6 text-right">
                  Amount
                </TableHead>
                <TableHead className="font-semibold text-gray-700 py-4 px-6 text-center">
                  Transaction ID
                </TableHead>
                <TableHead className="font-semibold text-gray-700 py-4 px-6 text-left">
                  Created At
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {holdings.map((holding, index) => (
                <TableRow
                  key={holding.id}
                  className={`
                    border-b border-gray-100 hover:bg-blue-50 transition-colors duration-200
                    ${index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                  `}
                >
                  <TableCell className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="font-mono text-sm font-medium text-gray-800">
                        #{holding.id}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 px-6 text-right">
                    <span
                      className={`font-semibold text-lg ${
                        holding.amount >= 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {formatCurrency(holding.amount)}
                    </span>
                  </TableCell>
                  <TableCell className="py-4 px-6 text-center">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-mono">
                      {holding.transactionId}
                    </span>
                  </TableCell>
                  <TableCell className="py-4 px-6">
                    <div className="flex flex-col">
                      <span className="text-gray-800 font-medium text-sm">
                        {formatDate(holding.createdAt)}
                      </span>
                      <span className="text-gray-500 text-xs mt-1">
                        {new Date(holding.createdAt).toLocaleTimeString(
                          "en-US",
                          {
                            timeZoneName: "short",
                          }
                        )}
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>
              Total Holdings:{" "}
              <span className="font-semibold text-gray-800">
                {formatCurrency(
                  holdings.reduce((sum, holding) => sum + holding.amount, 0)
                )}
              </span>
            </span>
            <span>
              Last updated:{" "}
              {formatDate(holdings[0]?.createdAt || new Date().toISOString())}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HoldingsList;
