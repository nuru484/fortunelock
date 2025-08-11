// src/components/admin/PendingVerifications.tsx
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
import { AlertCircle } from "lucide-react";

interface Verification {
  id: number;
  documentType: string;
  documentNumber: string;
  createdAt: Date;
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
}

interface PendingVerificationsProps {
  verifications: Verification[];
}

const PendingVerifications: React.FC<PendingVerificationsProps> = ({
  verifications,
}) => {
  return (
    <Card className="bg-white border-gray-200 shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <AlertCircle className="w-6 h-6 text-yellow-600" />
          <CardTitle className="text-gray-900">
            Pending KYC Verifications
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {verifications.length === 0 ? (
          <p className="text-gray-600 text-center p-6">
            No pending verifications.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[200px]">User</TableHead>
                  <TableHead className="min-w-[120px]">Document Type</TableHead>
                  <TableHead className="min-w-[120px]">Document #</TableHead>
                  <TableHead className="min-w-[100px]">Submitted</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {verifications.map((ver) => (
                  <TableRow key={ver.id}>
                    <TableCell>
                      <div className="max-w-[200px]">
                        <div className="truncate font-medium">
                          {ver.user.firstName} {ver.user.lastName}
                        </div>
                        <div className="truncate text-sm text-gray-500">
                          {ver.user.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {ver.documentType}
                    </TableCell>
                    <TableCell className="font-mono text-sm">
                      {ver.documentNumber}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {new Date(ver.createdAt).toLocaleDateString()}
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

export default PendingVerifications;
