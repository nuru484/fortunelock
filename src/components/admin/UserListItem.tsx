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
    router.push(`/dashboard/users/${user.id}`);
  };

  const getRoleConfig = (role: string) => {
    switch (role.toLowerCase()) {
      case "admin":
        return {
          color:
            "bg-destructive text-destructive-foreground border-destructive hover:bg-destructive/80",
          gradient: "from-destructive to-destructive-foreground",
        };
      case "user":
        return {
          color:
            "bg-primary text-primary-foreground border-primary hover:bg-primary/80",
          gradient: "from-primary to-primary-foreground",
        };
      default:
        return {
          color:
            "bg-muted text-muted-foreground border-muted hover:bg-muted/80",
          gradient: "from-muted to-muted-foreground",
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
      className="group cursor-pointer bg-card hover:bg-muted/50 border border-muted hover:border-muted-foreground/80 transition-all duration-300 hover:shadow-lg hover:shadow-muted/50 hover:-translate-y-0.5"
    >
      <CardContent className="">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1 min-w-0">
            <div className="relative">
              <Avatar
                className={`w-14 h-14 bg-gradient-to-br ${roleConfig.gradient} ring-2 ring-card shadow-lg`}
              >
                <AvatarFallback className="bg-transparent text-card-foreground font-bold text-base">
                  {getInitials(user.firstName, user.lastName)}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent border-2 border-card rounded-full"></div>
            </div>

            <div className="flex-1 min-w-0 space-y-2">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="font-bold text-foreground text-lg tracking-tight truncate">
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
                <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="truncate font-medium">{user.email}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium">{user.country}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors duration-200 ml-4">
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserListItem;
