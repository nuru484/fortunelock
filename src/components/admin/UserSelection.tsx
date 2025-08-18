"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Loader2, Search, User, CheckCircle, X } from "lucide-react";
import {
  useGetAllUsersQuery,
  useGetUserDetailsQuery,
} from "@/redux/api/apiSlice";

interface UserSelectionProps {
  selectedUserId: number | null;
  onUserSelect: (userId: number | null) => void;
  currency: string;
}

interface BasicUser {
  id: number;
  firstName: string;
  middleName?: string | null;
  lastName: string;
  email: string;
}

interface Portfolio {
  totalGrams: number;
  totalInvested: number;
  currentValue: number;
}

interface DetailedUser extends BasicUser {
  phoneNumber?: string | null;
  nationality?: string | null;
  country: string;
  portfolio?: Portfolio | null;
}

const UserSelection: React.FC<UserSelectionProps> = ({
  selectedUserId,
  onUserSelect,
  currency,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(true);

  const { data: usersData, isLoading: usersLoading } = useGetAllUsersQuery({
    page: 1,
    limit: 100,
    search: searchTerm,
  });
  const { data: userDetails } = useGetUserDetailsQuery(selectedUserId, {
    skip: !selectedUserId,
  });

  const selectedUser: DetailedUser | null = userDetails?.success
    ? userDetails.data
    : null;
  const portfolio = selectedUser?.portfolio;

  const handleSelect = (user: BasicUser) => {
    onUserSelect(user.id);
    setSearchTerm(
      `${user.firstName}${user.middleName ? ` ${user.middleName}` : ""} ${
        user.lastName
      }`
    );
    setShowSearch(false);
  };

  const handleClear = () => {
    onUserSelect(null);
    setSearchTerm("");
    setShowSearch(true);
  };

  const handleChange = (value: string) => {
    setSearchTerm(value);
    setShowSearch(!!value.trim());
    if (
      selectedUserId &&
      value !==
        `${selectedUser?.firstName}${
          selectedUser?.middleName ? ` ${selectedUser.middleName}` : ""
        } ${selectedUser?.lastName}`
    ) {
      onUserSelect(null);
    }
  };

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    }).format(amount);

  return (
    <Card className="bg-muted/50 border-border">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
          <User className="w-5 h-5 text-primary" />
          <CardTitle className="text-lg text-card-foreground">
            Select User
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label className="text-sm font-semibold text-muted-foreground">
            Search User
          </Label>
          <div className="relative mt-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => handleChange(e.target.value)}
              className="pl-10 bg-muted/30 border-border focus:ring-ring"
            />
            {selectedUserId && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={handleClear}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-muted/80"
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
        {showSearch && searchTerm && !selectedUserId && (
          <div className="space-y-2 max-h-60 overflow-y-auto border border-border rounded-lg bg-card">
            {usersLoading ? (
              <div className="flex items-center justify-center py-4">
                <Loader2 className="w-5 h-5 animate-spin text-primary" />
                <span className="ml-2 text-sm text-muted-foreground">
                  Searching users...
                </span>
              </div>
            ) : usersData?.success && usersData?.users?.length ? (
              usersData.users.map((user: BasicUser) => (
                <div
                  key={user.id}
                  onClick={() => handleSelect(user)}
                  className="p-3 border-b border-border last:border-b-0 cursor-pointer transition-all hover:bg-muted/50"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-card-foreground">
                        {user.firstName}{" "}
                        {user.middleName ? `${user.middleName} ` : ""}
                        {user.lastName}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      ID: {user.id}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted-foreground py-4">
                No users found
              </p>
            )}
          </div>
        )}
        {selectedUser && (
          <Card className="bg-secondary border-primary/20 border-2">
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <p className="font-semibold text-primary">Selected User</p>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={handleClear}
                    className="h-6 w-6 p-0 hover:bg-muted/80"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <div>
                  <p className="font-semibold text-secondary-foreground text-lg">
                    {selectedUser.firstName}{" "}
                    {selectedUser.middleName
                      ? `${selectedUser.middleName} `
                      : ""}
                    {selectedUser.lastName}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {selectedUser.email}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    User ID: {selectedUser.id}
                  </p>
                  {selectedUser.phoneNumber && (
                    <p className="text-xs text-muted-foreground">
                      Phone: {selectedUser.phoneNumber}
                    </p>
                  )}
                  {selectedUser.nationality && (
                    <p className="text-xs text-muted-foreground">
                      Nationality: {selectedUser.nationality}
                    </p>
                  )}
                  {selectedUser.country && (
                    <p className="text-xs text-muted-foreground">
                      Country: {selectedUser.country}
                    </p>
                  )}
                </div>
                {portfolio && (
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm font-medium text-secondary-foreground mb-2">
                      Current Portfolio
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Total Gold</p>
                        <p className="font-semibold text-secondary-foreground">
                          {portfolio.totalGrams.toFixed(4)} grams
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Invested</p>
                        <p className="font-semibold text-secondary-foreground">
                          {formatCurrency(portfolio.totalInvested)}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Current Value</p>
                        <p className="font-semibold text-secondary-foreground">
                          {formatCurrency(portfolio.currentValue)}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
};

export default UserSelection;
