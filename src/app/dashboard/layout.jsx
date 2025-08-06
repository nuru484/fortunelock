// src/app/dashboard/layout.jsx
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import DashboardSidebar from "../../components/AppSidebar";
import ModeToggleButton from "@/components/ModeToggleButton";
import LogoutButton from "@/components/auth/LogoutButton";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 justify-between items-center gap-2 border-b bg-background px-4">
          <div className="flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
            <SidebarTrigger className="-ml-1" />
            <h1 className="text-lg font-semibold text-foreground">Dashboard</h1>
          </div>

          <div className="flex gap-2">
            <ModeToggleButton />
            <LogoutButton />
          </div>
        </header>
        <main className="flex flex-1 flex-col p-4">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
