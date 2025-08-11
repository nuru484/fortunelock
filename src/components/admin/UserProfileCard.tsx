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
          color: "bg-purple-100 text-purple-800 border-purple-200",
          icon: Shield,
          label: "Administrator",
        };
      case "USER":
        return {
          color: "bg-blue-100 text-blue-800 border-blue-200",
          icon: UserCheck,
          label: "User",
        };
      default:
        return {
          color: "bg-gray-100 text-gray-800 border-gray-200",
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

  // Handle null user case
  if (!user) {
    return (
      <div className="bg-gradient-to-br from-slate-50 to-gray-100 border border-gray-200 shadow-lg rounded-xl">
        <div className="p-12 text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <User className="w-8 h-8 text-gray-400" />
          </div>
          <div className="text-gray-400 text-lg font-medium mb-2">
            No user profile available
          </div>
          <div className="text-gray-500 text-sm">
            User information will be displayed here once loaded
          </div>
        </div>
      </div>
    );
  }

  const roleConfig = getRoleConfig(user.role);
  const RoleIcon = roleConfig.icon;

  return (
    <div className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 px-6 py-8 border-b border-gray-100">
        <div className="flex items-center gap-6">
          {/* Avatar */}
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              {getInitials(user.firstName, user.lastName)}
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></div>
          </div>

          {/* Name and Role */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
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
            <div className="text-sm text-gray-500 mb-1">User ID</div>
            <div className="font-mono text-lg font-semibold text-gray-800">
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
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <div className="w-1 h-5 bg-indigo-500 rounded-full"></div>
              Contact Information
            </h3>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <Mail className="w-4 h-4 text-red-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500">Email</div>
                <div className="font-medium text-gray-800">{user.email}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Phone className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500">Phone Number</div>
                <div className="font-medium text-gray-800">
                  {user.phoneNumber || (
                    <span className="text-gray-400 italic">Not provided</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <div className="w-1 h-5 bg-purple-500 rounded-full"></div>
              Personal Information
            </h3>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500">Country</div>
                <div className="font-medium text-gray-800">{user.country}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <Globe className="w-4 h-4 text-orange-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500">Nationality</div>
                <div className="font-medium text-gray-800">
                  {user.nationality || (
                    <span className="text-gray-400 italic">Not specified</span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-pink-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500">Gender</div>
                <div className="font-medium text-gray-800">
                  {user.gender || (
                    <span className="text-gray-400 italic">Not specified</span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                <Calendar className="w-4 h-4 text-teal-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500">Date of Birth</div>
                <div className="font-medium text-gray-800">
                  {user.dateOfBirth ? (
                    <div className="flex items-center gap-2">
                      <span>{formatDate(user.dateOfBirth)}</span>
                      <span className="text-sm text-gray-500">
                        (Age: {getAgeFromBirthDate(user.dateOfBirth)})
                      </span>
                    </div>
                  ) : (
                    <span className="text-gray-400 italic">Not provided</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>
            Profile Status:{" "}
            <span className="text-green-600 font-medium">Active</span>
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
