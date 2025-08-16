// src/app/dashboard/layout.tsx
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/AppSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { UserProvider } from "@/components/providers/UserProvider";
import { DashboardFooter } from "@/components/DashboardFooter";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <SidebarProvider>
        <DashboardSidebar />
        <SidebarInset>
          <DashboardHeader />
          <main className="flex flex-1 flex-col p-4">{children}</main>
          <DashboardFooter />
        </SidebarInset>
      </SidebarProvider>
    </UserProvider>
  );
}
