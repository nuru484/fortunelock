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
  },
  {
    paths: ["/dashboard/admin"],
    title: "Dashboard",
    description: "Admin dashboard overview",
    icon: PieChart,
  },
  {
    paths: ["/admin/deposit-gold"],
    title: "Physical Gold Deposits",
    description: "Record and manage physical gold deposits for users",
    icon: Package,
    badge: {
      text: "Admin Access",
      icon: Shield,
      className:
        "bg-destructive/10 text-destructive border-destructive/20 font-medium",
    },
  },
  {
    paths: ["/dashboard/transactions", "/dashboard/gold/buy"],
    title: "Buy Gold",
    description: "Invest in digital gold with real-time pricing",
    icon: TrendingUp,
  },
  {
    paths: ["/dashboard/wallet", "/dashboard/deposit"],
    title: "Gold Depository Wallet",
    description: "Securely deposit funds to invest in precious metals",
    icon: CreditCard,
  },
  {
    paths: ["/dashboard/portfolio"],
    title: "Portfolio",
    description: "Your gold investment overview",
    icon: PieChart,
  },
  {
    paths: ["/dashboard/deposit-gold"],
    title: "Gold Deposit",
    description: "Deposit gold on behalf of verified users",
    icon: PieChart,
  },
  {
    paths: ["/dashboard/users"],
    dynamicPaths: [/^\/dashboard\/users\/[^/]+$/],
    title: "User Management",
    description: "Manage and monitor user accounts",
    icon: Users,
  },
  {
    paths: ["/dashboard/gold-prices"],
    title: "Gold Prices",
    description: "Manage and monitor gold prices",
    icon: TrendingUp,
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
    <div className="bg-background/95 backdrop-blur-sm shadow-sm border-b border-border sticky top-0 z-50 px-4 md:px-8 py-4">
      <div className="flex items-center justify-between h-16 md:h-20">
        {/* Left side - Menu button and page title */}
        <div className="flex items-center gap-3 md:gap-6 flex-1 min-w-0">
          <SidebarTrigger />

          <div className="flex items-center gap-3 min-w-0 flex-1">
            {/* Page icon */}
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <IconComponent className="w-5 h-5 text-primary" />
            </div>

            {/* Page title and description */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-3">
                <h1 className="text-lg md:text-2xl font-bold text-foreground truncate">
                  {currentPageConfig.title}
                </h1>
                {/* Show admin badge inline on mobile */}
                {currentPageConfig.badge && (
                  <Badge
                    variant="secondary"
                    className={`${currentPageConfig.badge.className} flex sm:hidden text-xs`}
                  >
                    <currentPageConfig.badge.icon className="w-3 h-3 mr-1" />
                    Admin
                  </Badge>
                )}
              </div>
              <div className="hidden md:flex items-center gap-4 mt-1">
                <p className="text-sm text-muted-foreground">
                  {currentPageConfig.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Badge, User profile, and Theme toggle */}
        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
          {/* Show admin badge on larger screens */}
          {currentPageConfig.badge && (
            <Badge
              variant="secondary"
              className={`${currentPageConfig.badge.className} hidden sm:flex`}
            >
              <currentPageConfig.badge.icon className="w-3 h-3 mr-1" />
              {currentPageConfig.badge.text}
            </Badge>
          )}

          {/* User info section */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Welcome text - only on larger screens */}
            <div className="hidden lg:block text-right">
              <p className="text-xs text-muted-foreground">Welcome back</p>
              <p className="text-sm font-semibold text-foreground">
                {user.firstName} {user.lastName}
              </p>
            </div>

            {/* User profile dropdown */}
            <div className="relative">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg flex items-center justify-center border border-primary/20">
                <UserProfileDropdown />
              </div>
            </div>

            {/* Theme toggle */}
            <div className="w-9 h-9 md:w-10 md:h-10">
              <ModeToggleButton />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile description - shown only on smaller screens */}
      <div className="md:hidden mt-2 pb-1">
        <p className="text-xs text-muted-foreground">
          {currentPageConfig.description}
        </p>
      </div>
    </div>
  );
};

export default DashboardHeader;
