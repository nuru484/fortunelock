// src/components/admin/PendingGoldItems.tsx
"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package } from "lucide-react";

interface GoldItem {
  id: number;
  type: string;
  weightGrams: number;
  karat: number | null;
  createdAt: Date;
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
}

interface PendingGoldItemsProps {
  items: GoldItem[];
}

const PendingGoldItems: React.FC<PendingGoldItemsProps> = ({ items }) => {
  return (
    <Card className="bg-white border-gray-200 shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <Package className="w-6 h-6 text-amber-600" />
          <CardTitle className="text-gray-900">
            Pending Physical Deposits
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {items.length === 0 ? (
          <p className="text-gray-600 text-center p-6">No pending deposits.</p>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[200px]">User</TableHead>
                  <TableHead className="min-w-[80px]">Type</TableHead>
                  <TableHead className="min-w-[100px]">Weight (g)</TableHead>
                  <TableHead className="min-w-[80px]">Karat</TableHead>
                  <TableHead className="min-w-[100px]">Deposited</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <div className="max-w-[200px]">
                        <div className="truncate font-medium">
                          {item.user.firstName} {item.user.lastName}
                        </div>
                        <div className="truncate text-sm text-gray-500">
                          {item.user.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {item.type}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {item.weightGrams.toFixed(2)}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {item.karat ?? "N/A"}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PendingGoldItems;
