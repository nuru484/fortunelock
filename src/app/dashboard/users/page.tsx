"use client";
import { useGetAllUsersQuery } from "@/redux/api/apiSlice";
import React, { useState } from "react";
import UserList from "@/components/admin/UserList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

const UsersPage = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(50);
  const [search, setSearch] = useState("");

  const { data, isLoading } = useGetAllUsersQuery({
    page,
    limit,
    search,
  });

  const users = data?.users || [];
  const pagination = data?.pagination || { totalPages: 1, totalUsers: 0 };

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <div className="text-foreground text-lg font-medium">
            Loading Users...
          </div>
          <div className="text-muted-foreground text-sm">
            Fetching user directory
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Search & Filters Card */}
          <Card className="bg-card border-border shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="text-foreground flex items-center gap-2 text-lg">
                <div className="p-1 bg-accent/10 rounded">
                  <Search className="w-4 h-4 text-accent" />
                </div>
                Search & Filters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search by name, email, or country..."
                      value={search}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="pl-10 bg-background border-border focus:border-primary focus:ring-primary transition-colors"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className={`${
                      search
                        ? "bg-accent/10 text-accent border-accent/20"
                        : "bg-muted/50 text-muted-foreground border-border"
                    } transition-colors`}
                  >
                    {search ? `Filtered: "${search}"` : "All Users"}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-primary/5 text-primary border-primary/20"
                  >
                    {pagination.totalUsers || 0} total
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <UserList users={users} />

          {/* Pagination Card */}
          {pagination.totalPages > 1 && (
            <Card className="bg-card border-border shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <Button
                    variant="outline"
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                    className="flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed border-border hover:bg-muted transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </Button>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="text-center">
                      <span className="text-sm text-muted-foreground">
                        Showing{" "}
                        <span className="font-medium text-foreground">
                          {(page - 1) * limit + 1}
                        </span>{" "}
                        to{" "}
                        <span className="font-medium text-foreground">
                          {Math.min(page * limit, pagination.totalUsers || 0)}
                        </span>{" "}
                        of{" "}
                        <span className="font-medium text-foreground">
                          {pagination.totalUsers || 0}
                        </span>{" "}
                        users
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="bg-primary/10 text-primary border-primary/20 px-3 py-1"
                      >
                        Page {page} of {pagination.totalPages}
                      </Badge>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    disabled={page === pagination.totalPages}
                    onClick={() => setPage(page + 1)}
                    className="flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed border-border hover:bg-muted transition-colors"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>

                {/* Page navigation for mobile */}
                <div className="mt-4 sm:hidden">
                  <div className="flex items-center justify-center gap-2">
                    {[...Array(Math.min(5, pagination.totalPages))].map(
                      (_, i) => {
                        const pageNum = i + 1;
                        const isActive = pageNum === page;
                        return (
                          <Button
                            key={pageNum}
                            variant={isActive ? "default" : "outline"}
                            size="sm"
                            onClick={() => setPage(pageNum)}
                            className={
                              isActive
                                ? "bg-primary text-primary-foreground"
                                : "border-border hover:bg-muted"
                            }
                          >
                            {pageNum}
                          </Button>
                        );
                      }
                    )}
                    {pagination.totalPages > 5 && (
                      <>
                        <span className="text-muted-foreground">...</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setPage(pagination.totalPages)}
                          className="border-border hover:bg-muted"
                        >
                          {pagination.totalPages}
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
