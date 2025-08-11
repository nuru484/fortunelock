// src/components/DashboardHeader.tsx
"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useUser } from "@/components/providers/UserProvider";
import {
  Package,
  TrendingUp,
  CreditCard,
  PieChart,
  Shield,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import UserProfileDropdown from "./UserProfileDropdown";
import { SidebarTrigger } from "@/components/ui/sidebar";
import ModeToggleButton from "./ModeToggleButton";

const pageConfigs = [
  {
    paths: ["/dashboard"],
    title: "Dashboard",
    description: "Your dashboard overview",
    icon: PieChart,
    gradientFrom: "amber-400",
    gradientTo: "yellow-500",
  },
  {
    paths: ["/dashboard/admin"],
    title: "Dashboard",
    description: "Admin dashboard overview",
    icon: PieChart,
    gradientFrom: "amber-400",
    gradientTo: "yellow-500",
  },
  {
    paths: ["/admin/deposit-gold"],
    title: "Physical Gold Deposits",
    description: "Record and manage physical gold deposits for users",
    icon: Package,
    gradientFrom: "amber-500",
    gradientTo: "orange-500",
    badge: {
      text: "Admin Access",
      icon: Shield,
      className: "bg-blue-100 text-blue-800 font-medium",
    },
  },
  {
    paths: ["/dashboard/transactions", "/dashboard/gold/buy"],
    title: "Buy Gold",
    description: "Invest in digital gold with real-time pricing",
    icon: TrendingUp,
    gradientFrom: "amber-400",
    gradientTo: "yellow-500",
  },
  {
    paths: ["/dashboard/wallet", "/dashboard/deposit"],
    title: "Gold Depository Wallet",
    description: "Securely deposit funds to invest in precious metals",
    icon: CreditCard,
    gradientFrom: "blue-500",
    gradientTo: "indigo-600",
  },
  {
    paths: ["/dashboard/portfolio"],
    title: "Portfolio",
    description: "Your gold investment overview",
    icon: PieChart,
    gradientFrom: "amber-400",
    gradientTo: "yellow-500",
  },
  {
    paths: ["/dashboard/deposit-gold"],
    title: "Gold Deposit",
    description: "Deposit gold on behalf of verified users",
    icon: PieChart,
    gradientFrom: "amber-400",
    gradientTo: "yellow-500",
  },
  {
    paths: ["/dashboard/users"],
    dynamicPaths: [/^\/dashboard\/users\/[^/]+$/],
    title: "User Management",
    description: "Manage and monitor user accounts",
    icon: Users,
    gradientFrom: "amber-400",
    gradientTo: "yellow-500",
  },
  {
    paths: ["/dashboard/gold-prices"],
    title: "Gold Prices",
    description: "Manage and monitor gold prices",
    icon: Users,
    gradientFrom: "amber-400",
    gradientTo: "yellow-500",
  },
];

interface DashboardHeaderProps {
  additionalContent?: React.ReactNode;
  performanceData?: {
    totalReturnPercentage: number;
    isPositive: boolean;
  };
}

const DashboardHeader: React.FC<DashboardHeaderProps> = () => {
  const pathname = usePathname();
  const { user } = useUser();

  if (!user) {
    return null;
  }

  // Find matching page configuration
  const currentPageConfig = pageConfigs.find((config) => {
    // Check static paths
    if (config.paths.some((path) => pathname.endsWith(path))) {
      return true;
    }
    // Check dynamic paths (if any)
    if (config.dynamicPaths) {
      return config.dynamicPaths.some((regex) => regex.test(pathname));
    }
    return false;
  });

  // If no config found, don't render the header
  if (!currentPageConfig) {
    return null;
  }

  const IconComponent = currentPageConfig.icon;

  return (
    <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50 px-8 py-4">
      <div className="flex items-center justify-between h-20">
        <div className="flex items-center gap-6">
          <SidebarTrigger />

          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 bg-gradient-to-r from-${currentPageConfig.gradientFrom} to-${currentPageConfig.gradientTo} rounded-xl flex items-center justify-center shadow-lg`}
            >
              <IconComponent className="w-6 h-6 text-white" />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {currentPageConfig.title}
              </h1>
              <div className="flex items-center gap-4">
                <p className="text-gray-600">{currentPageConfig.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Show admin badge if applicable */}
          {currentPageConfig.badge && (
            <Badge
              variant="secondary"
              className={currentPageConfig.badge.className}
            >
              <currentPageConfig.badge.icon className="w-3 h-3 mr-1" />
              {currentPageConfig.badge.text}
            </Badge>
          )}

          {/* User info */}
          <div className="hidden md:flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-gray-500">Welcome back</p>
              <p className="font-semibold text-gray-900">
                {user.firstName} {user.lastName}
              </p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
              <UserProfileDropdown />
            </div>

            <div className="w-10 h-10">
              <ModeToggleButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
