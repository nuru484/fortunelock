"use client";

import { logout } from "@/app/actions/logout";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  return (
    <form action={logout}>
      <Button
        type="submit"
        variant="ghost"
        className="w-full justify-start flex items-center gap-2 hover:cursor-pointer"
      >
        <LogOut className="h-4 w-4 text-muted-foreground" />
        <span>Logout</span>
      </Button>
    </form>
  );
}
