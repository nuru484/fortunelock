"use client";

import { logout } from "@/app/actions/logout";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  return (
    <form action={logout}>
      <Button
        type="submit"
        variant="outline"
        className="flex items-center gap-2 px-4 py-2 transition-all duration-200 hover:bg-muted"
      >
        <LogOut className="h-4 w-4 text-muted-foreground" />
        <span>Logout</span>
      </Button>
    </form>
  );
}
