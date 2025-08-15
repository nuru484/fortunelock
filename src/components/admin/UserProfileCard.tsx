import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Calendar,
  Globe,
  User,
  Shield,
  UserCheck,
} from "lucide-react";

export interface UserProfileCardProps {
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    role: "ADMIN" | "USER";
    country: string;
    phoneNumber?: string | null;
    nationality?: string | null;
    gender?: string | null;
    dateOfBirth?: string | null;
  } | null;
}

const UserProfileCard = ({ user }: UserProfileCardProps) => {
  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  const getRoleConfig = (role: string) => {
    switch (role) {
      case "ADMIN":
        return {
          color: "bg-accent text-accent-foreground border-accent",
          icon: Shield,
          label: "Administrator",
        };
      case "USER":
        return {
          color: "bg-primary text-primary-foreground border-primary",
          icon: UserCheck,
          label: "User",
        };
      default:
        return {
          color: "bg-muted text-muted-foreground border-muted",
          icon: User,
          label: role,
        };
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getAgeFromBirthDate = (dateOfBirth: string) => {
    const today = new Date();

    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  if (!user) {
    return (
      <div className="bg-background border border-muted shadow-lg rounded-lg">
        <div className="p-12 text-center">
          <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
            <User className="w-8 h-8 text-muted-foreground" />
          </div>
          <div className="text-muted-foreground text-lg font-medium mb-2">
            No user profile available
          </div>
          <div className="text-muted-foreground text-sm">
            User information will be displayed here once loaded
          </div>
        </div>
      </div>
    );
  }

  const roleConfig = getRoleConfig(user.role);
  const RoleIcon = roleConfig.icon;

  return (
    <div className="bg-card border border-muted shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-muted px-6 py-8 border-b border-muted-secondary">
        <div className="flex items-center gap-6">
          {/* Avatar */}
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-card-foreground text-2xl font-bold shadow-lg">
              {getInitials(user.firstName, user.lastName)}
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent border-2 border-card rounded-full"></div>
          </div>

          {/* Name and Role */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              {user.firstName} {user.lastName}
            </h2>
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${roleConfig.color}`}
            >
              <RoleIcon className="w-4 h-4" />
              {roleConfig.label}
            </div>
          </div>

          {/* User ID */}
          <div className="text-right">
            <div className="text-sm text-muted-foreground mb-1">User ID</div>
            <div className="font-mono text-lg font-semibold text-foreground">
              #{user.id}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-1 h-5 bg-primary rounded-full"></div>
              Contact Information
            </h3>

            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
              <div className="w-8 h-8 bg-destructive rounded-full flex items-center justify-center">
                <Mail className="w-4 h-4 text-destructive-foreground" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="font-medium text-foreground">{user.email}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Phone className="w-4 h-4 text-accent-foreground" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-muted-foreground">
                  Phone Number
                </div>
                <div className="font-medium text-foreground">
                  {user.phoneNumber || (
                    <span className="text-muted-foreground italic">
                      Not provided
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-1 h-5 bg-accent rounded-full"></div>
              Personal Information
            </h3>

            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-muted-foreground">Country</div>
                <div className="font-medium text-foreground">
                  {user.country}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <Globe className="w-4 h-4 text-secondary-foreground" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-muted-foreground">Nationality</div>
                <div className="font-medium text-foreground">
                  {user.nationality || (
                    <span className="text-muted-foreground italic">
                      Not specified
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-muted-foreground">Gender</div>
                <div className="font-medium text-foreground">
                  {user.gender || (
                    <span className="text-muted-foreground italic">
                      Not specified
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Calendar className="w-4 h-4 text-accent-foreground" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-muted-foreground">
                  Date of Birth
                </div>
                <div className="font-medium text-foreground">
                  {user.dateOfBirth ? (
                    <div className="flex items-center gap-2">
                      <span>{formatDate(user.dateOfBirth)}</span>
                      <span className="text-sm text-muted-foreground">
                        (Age: {getAgeFromBirthDate(user.dateOfBirth)})
                      </span>
                    </div>
                  ) : (
                    <span className="text-muted-foreground italic">
                      Not provided
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-muted px-6 py-4 border-t border-muted-secondary">
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>
            Profile Status:{" "}
            <span className="text-accent-foreground font-medium">Active</span>
          </span>
          <span>
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
