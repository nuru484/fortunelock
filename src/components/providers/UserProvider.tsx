// src/components/providers/UserProvider.tsx
"use client";
import React, { createContext, useContext, ReactNode } from "react";

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
}

const UserContext = createContext<UserContextType>({
  user: null,
  isAuthenticated: false,
});

interface UserProviderProps {
  children: ReactNode;
  user: User | null;
}

export function UserProvider({ children, user }: UserProviderProps) {
  return (
    <UserContext.Provider value={{ user, isAuthenticated: !!user }}>
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
