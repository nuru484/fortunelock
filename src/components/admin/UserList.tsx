// src/components/admin/UserList.tsx
import React from "react";
import UserListItem from "./UserListItem";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck } from "lucide-react";

interface UserListProps {
  users: Array<{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    country: string;
  }>;
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  if (users.length === 0) {
    return (
      <Card className="bg-gray-50 border-gray-200">
        <CardContent className="p-12 text-center">
          <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No users found
          </h3>
          <p className="text-gray-600">
            Try adjusting your search criteria to find users.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white border-gray-200 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
            <UserCheck className="w-5 h-5 text-white" />
          </div>
          <div>
            <CardTitle className="text-gray-900 text-xl">
              User Directory
            </CardTitle>
            <p className="text-gray-600 text-sm">
              {users.length} user{users.length !== 1 ? "s" : ""} found
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-3">
          {users.map((user) => (
            <UserListItem key={user.id} user={user} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserList;
