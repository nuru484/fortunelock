// src/components/providers/UserProvider.tsx
"use client";
import React, { createContext, useContext, ReactNode } from "react";
import { useAuthUserQuery } from "@/redux/api/apiSlice";

interface User {
  id: number;
  email: string;
  firstName: string;
  middleName?: string | null;
  lastName: string;
  role: string;
  country: string;
  profilePicture?: string | null;
}

interface UserContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: unknown;
}

const UserContext = createContext<UserContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
});

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const { data, isLoading, error } = useAuthUserQuery(undefined);

  const user = data?.user ?? null;
  const isAuthenticated = !!user;

  return (
    <UserContext.Provider value={{ user, isAuthenticated, isLoading, error }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
