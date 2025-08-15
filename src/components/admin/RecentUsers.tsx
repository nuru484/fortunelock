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
import { UserPlus } from "lucide-react";

interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  country: string;
  createdAt: Date;
}

interface RecentUsersProps {
  users: User[];
}

const RecentUsers: React.FC<RecentUsersProps> = ({ users }) => {
  return (
    <Card className="bg-card border border-muted shadow-lg px-8">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <UserPlus className="w-6 h-6 text-primary" />
          <CardTitle className="text-foreground">Recent Signups</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {users.length === 0 ? (
          <p className="text-muted-foreground text-center p-6">
            No recent signups.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[150px]">Name</TableHead>
                  <TableHead className="min-w-[200px]">Email</TableHead>
                  <TableHead className="min-w-[100px]">Country</TableHead>
                  <TableHead className="min-w-[100px]">Signed Up</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">
                      {user.firstName} {user.lastName}
                    </TableCell>
                    <TableCell>
                      <div className="max-w-[200px] truncate">{user.email}</div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {user.country}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {new Date(user.createdAt).toLocaleDateString()}
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

export default RecentUsers;
