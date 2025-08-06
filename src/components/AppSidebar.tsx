"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Briefcase,
  CreditCard,
  LayoutDashboard,
  User,
  Wallet,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useAuthUserQuery } from "@/redux/api/apiSlice";

// Navigation items for admins and users
const adminNavigationItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Users",
    path: "/dashboard/users",
    icon: User,
  },
  {
    name: "Transactions",
    path: "/dashboard/transactions",
    icon: CreditCard,
  },
  {
    name: "Gold Prices",
    path: "/dashboard/gold-prices",
    icon: BarChart3,
  },
];

const userNavigationItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Portfolio",
    path: "/dashboard/portfolio",
    icon: Briefcase,
  },
  {
    name: "Wallet",
    path: "/dashboard/wallet",
    icon: Wallet,
  },
  {
    name: "Transactions",
    path: "/dashboard/transactions",
    icon: CreditCard,
  },
  {
    name: "Gold Prices",
    path: "/dashboard/gold-prices",
    icon: BarChart3,
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const { data } = useAuthUserQuery(undefined);
  const isAdmin = ["SUPER_ADMIN", "ADMIN"].includes(data?.user?.role);

  console.log(data);

  const navigationItems = isAdmin ? adminNavigationItems : userNavigationItems;

  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-sidebar-border/20 shadow-sm"
    >
      <SidebarHeader className="flex items-center px-6 py-5 border-b border-sidebar-border/20">
        <SidebarMenuButton className="flex items-center gap-3 text-sidebar-foreground">
          <Briefcase className="h-7 w-7 text-sidebar-primary" />
          <span className="text-xl font-bold">GoldVault</span>
        </SidebarMenuButton>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarMenu className="space-y-1.5">
          {navigationItems.map((item) => {
            const isActive =
              pathname === item.path ||
              (item.path !== "/dashboard" && pathname?.startsWith(item.path));
            return (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  tooltip={item.name}
                  className={`px-4 py-3 gap-4 hover:bg-sidebar-foreground/10 transition-colors ${
                    isActive
                      ? "bg-sidebar-primary/10 text-sidebar-primary font-medium border-l-4 border-sidebar-primary"
                      : "text-sidebar-foreground/90"
                  }`}
                >
                  <Link href={item.path} className="flex items-center w-full">
                    <item.icon
                      className={`h-6 w-6 ${
                        isActive ? "text-sidebar-primary" : ""
                      }`}
                    />
                    <span className="ml-3">{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="mt-auto border-t border-sidebar-border/20">
        <SidebarMenuButton className="flex items-center gap-3 text-sidebar-foreground">
          <Briefcase className="h-6 w-6" />
          <div className="text-[12px] text-sidebar-foreground/70">
            GoldVault System
          </div>
        </SidebarMenuButton>
      </SidebarFooter>

      <SidebarRail className="bg-sidebar-foreground/5 w-1" />
    </Sidebar>
  );
}
