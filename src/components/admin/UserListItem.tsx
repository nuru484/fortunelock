// src/components/admin/UserListItem.tsx
import { useRouter } from "next/navigation";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, MapPin, Shield, ChevronRight } from "lucide-react";

interface UserListItemProps {
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    country: string;
  };
}

const UserListItem: React.FC<UserListItemProps> = ({ user }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/admin/users/${user.id}`);
  };

  const getRoleConfig = (role: string) => {
    switch (role.toLowerCase()) {
      case "admin":
        return {
          color: "bg-red-50 text-red-700 border-red-200 hover:bg-red-100",
          gradient: "from-red-500 to-red-600",
        };

      case "user":
        return {
          color: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100",
          gradient: "from-blue-500 to-blue-600",
        };
      default:
        return {
          color:
            "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100",
          gradient: "from-slate-500 to-slate-600",
        };
    }
  };

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  const roleConfig = getRoleConfig(user.role);

  return (
    <Card
      onClick={handleClick}
      className="group cursor-pointer bg-white hover:bg-slate-50/50 border border-slate-200/60 hover:border-slate-300/80 transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-0.5"
    >
      <CardContent className="">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1 min-w-0">
            <div className="relative">
              <Avatar
                className={`w-14 h-14 bg-gradient-to-br ${roleConfig.gradient} ring-2 ring-white shadow-lg`}
              >
                <AvatarFallback className="bg-transparent text-white font-bold text-base">
                  {getInitials(user.firstName, user.lastName)}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 border-2 border-white rounded-full"></div>
            </div>

            <div className="flex-1 min-w-0 space-y-2">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="font-bold text-slate-900 text-lg tracking-tight truncate">
                  {user.firstName} {user.lastName}
                </h3>
                <Badge
                  variant="outline"
                  className={`${roleConfig.color} transition-colors duration-200 font-medium px-2.5 py-1 text-xs`}
                >
                  <Shield className="w-3 h-3 mr-1.5" />
                  {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                </Badge>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span className="truncate font-medium">{user.email}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span className="font-medium">{user.country}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center text-slate-400 group-hover:text-slate-600 transition-colors duration-200 ml-4">
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserListItem;
