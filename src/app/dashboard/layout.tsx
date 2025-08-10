// src/app/dashboard/layout.tsx
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import DashboardSidebar from "../../components/AppSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { UserProvider } from "@/components/providers/UserProvider";
import { verifySessionWithUser } from "@/lib/dataAccessLayer";
import { redirect } from "next/navigation";
import Footer from "@/components/Footer";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sessionResult = await verifySessionWithUser();

  if (!sessionResult?.user) {
    redirect("/login");
  }

  return (
    <UserProvider user={sessionResult.user}>
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
