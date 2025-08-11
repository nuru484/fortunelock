// src/app/dashboard/layout.tsx
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/AppSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { UserProvider } from "@/components/providers/UserProvider";
import Footer from "@/components/Footer";

// export const dynamic = "force-dynamic";
// export const revalidate = 0;

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
          <Footer />
        </SidebarInset>
      </SidebarProvider>
    </UserProvider>
  );
}
