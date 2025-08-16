"use client";
import React, { useState } from "react";
import { useUser } from "@/components/providers/UserProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User,
  Settings,
  Bell,
  Shield,
  CreditCard,
  HelpCircle,
  Edit3,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Power,
} from "lucide-react";
import { logout } from "@/app/actions/logout";
import { Badge } from "./ui/badge";
import { useGetUserDetailsQuery } from "@/redux/api/apiSlice";

interface UserProfileDropdownProps {
  userId: number;
}

const UserProfileDropdown: React.FC<UserProfileDropdownProps> = ({
  userId,
}) => {
  const { user } = useUser();
  const [isProfileDialogOpen, setIsProfileDialogOpen] = useState(false);
  const [isSettingsDialogOpen, setIsSettingsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [loading, setLoading] = useState(false);

  const { data: userDetailsResponse } = useGetUserDetailsQuery(userId);

  // Extract user details from API response
  const userDetails = userDetailsResponse?.data;

  if (!user || !userDetails) return null;

  const userInitials = `${userDetails.firstName?.charAt(0) || ""}${
    userDetails.lastName?.charAt(0) || ""
  }`;

  // Helper function to format dates
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Helper function to format currency
  const formatCurrency = (amount: number, currency: string = "USD") => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(amount);
  };

  // Helper function to calculate time ago
  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInMs = now.getTime() - date.getTime();
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInHours < 1) return "Less than an hour ago";
    if (diffInHours < 24)
      return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
    if (diffInDays < 7)
      return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
    return formatDate(dateString);
  };

  // Get primary address if available
  const primaryAddress = userDetails.addresses?.[0];
  const addressString = primaryAddress
    ? `${primaryAddress.street}, ${primaryAddress.city}, ${
        primaryAddress.state || ""
      } ${primaryAddress.postalCode}, ${primaryAddress.country}`.replace(
        /,\s,/g,
        ","
      )
    : "No address provided";

  // Get account verification status
  const isVerified = userDetails.identity?.verified || false;
  const verificationDate = userDetails.identity?.verifiedAt
    ? formatDate(userDetails.identity.verifiedAt)
    : null;

  const handleLogout = async () => {
    setLoading(true);
    await logout();
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="relative h-10 w-10 rounded-full hover:bg-accent focus:bg-accent focus:ring-2 focus:ring-ring"
          >
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={userDetails.profilePicture ?? undefined}
                alt={`${userDetails.firstName} ${userDetails.lastName}`}
              />
              <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                {userInitials}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-80 p-0 bg-popover border-border shadow-lg"
          align="end"
          forceMount
        >
          <div className="p-4 bg-card">
            <div className="flex items-center space-x-3">
              <Avatar className="h-12 w-12 ring-2 ring-border">
                <AvatarImage
                  src={userDetails.profilePicture ?? undefined}
                  alt={`${userDetails.firstName} ${userDetails.lastName}`}
                />
                <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
                  {userInitials}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none text-foreground">
                  {userDetails.firstName} {userDetails.lastName}
                </p>
                <p className="text-xs text-muted-foreground">
                  {userDetails.email}
                </p>
              </div>
            </div>
          </div>
          <DropdownMenuSeparator className="bg-border" />
          <DropdownMenuLabel className="text-xs text-muted-foreground px-4 py-2">
            Account
          </DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => setIsProfileDialogOpen(true)}
            className="cursor-pointer px-4 py-2 hover:bg-accent focus:bg-accent text-foreground"
          >
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setIsSettingsDialogOpen(true)}
            className="cursor-pointer px-4 py-2 hover:bg-accent focus:bg-accent text-foreground"
          >
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer px-4 py-2 hover:bg-accent focus:bg-accent text-foreground">
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-border" />
          <DropdownMenuLabel className="text-xs text-muted-foreground px-4 py-2">
            Support
          </DropdownMenuLabel>
          <DropdownMenuItem className="cursor-pointer px-4 py-2 hover:bg-accent focus:bg-accent text-foreground">
            <HelpCircle className="mr-2 h-4 w-4" />
            <span>Help & Support</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-border" />
          <DropdownMenuItem
            onClick={handleLogout}
            disabled={loading}
            className="cursor-pointer px-4 py-2 hover:bg-destructive/10 focus:bg-destructive/10 text-destructive disabled:opacity-50"
          >
            <Power className="mr-2 h-4 w-4" />
            <span>{loading ? "Logging out..." : "Sign Out"}</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Profile Dialog */}
      <Dialog open={isProfileDialogOpen} onOpenChange={setIsProfileDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl text-card-foreground">
              Profile
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              View and manage your profile information
            </DialogDescription>
          </DialogHeader>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3 bg-muted">
              <TabsTrigger
                value="profile"
                className="data-[state=active]:bg-background data-[state=active]:text-foreground"
              >
                Profile Info
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className="data-[state=active]:bg-background data-[state=active]:text-foreground"
              >
                Security
              </TabsTrigger>
              <TabsTrigger
                value="activity"
                className="data-[state=active]:bg-background data-[state=active]:text-foreground"
              >
                Activity
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-20 w-20 ring-2 ring-primary/20">
                      <AvatarImage
                        src={userDetails.profilePicture ?? undefined}
                        alt={`${userDetails.firstName} ${userDetails.lastName}`}
                      />
                      <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">
                        {userInitials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-2xl text-card-foreground">
                        {userDetails.firstName}{" "}
                        {userDetails.middleName
                          ? `${userDetails.middleName} `
                          : ""}
                        {userDetails.lastName}
                      </CardTitle>
                      <CardDescription className="text-base text-muted-foreground">
                        {userDetails.email}
                      </CardDescription>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline" className="text-xs">
                          {userDetails.role}
                        </Badge>
                        {isVerified && (
                          <Badge
                            variant="secondary"
                            className="text-xs bg-green-100 text-green-700"
                          >
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-foreground">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        defaultValue={userDetails.firstName || ""}
                        className="bg-background border-input text-foreground"
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-foreground">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        defaultValue={userDetails.lastName || ""}
                        className="bg-background border-input text-foreground"
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="middleName" className="text-foreground">
                        Middle Name
                      </Label>
                      <Input
                        id="middleName"
                        defaultValue={userDetails.middleName || ""}
                        className="bg-background border-input text-foreground"
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth" className="text-foreground">
                        Date of Birth
                      </Label>
                      <Input
                        id="dateOfBirth"
                        defaultValue={
                          userDetails.dateOfBirth
                            ? formatDate(userDetails.dateOfBirth)
                            : ""
                        }
                        className="bg-background border-input text-foreground"
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="flex items-center gap-2 text-foreground"
                      >
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue={userDetails.email}
                        className="bg-background border-input text-foreground"
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="flex items-center gap-2 text-foreground"
                      >
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        defaultValue={userDetails.phoneNumber || "Not provided"}
                        className="bg-background border-input text-foreground"
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender" className="text-foreground">
                        Gender
                      </Label>
                      <Input
                        id="gender"
                        defaultValue={userDetails.gender || "Not specified"}
                        className="bg-background border-input text-foreground"
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nationality" className="text-foreground">
                        Nationality
                      </Label>
                      <Input
                        id="nationality"
                        defaultValue={
                          userDetails.nationality || "Not specified"
                        }
                        className="bg-background border-input text-foreground"
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country" className="text-foreground">
                        Country
                      </Label>
                      <Input
                        id="country"
                        defaultValue={userDetails.country}
                        className="bg-background border-input text-foreground"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="address"
                      className="flex items-center gap-2 text-foreground"
                    >
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      Address
                    </Label>
                    <Textarea
                      id="address"
                      defaultValue={addressString}
                      className="bg-background border-input text-foreground"
                      readOnly
                    />
                  </div>

                  {/* Portfolio Information */}
                  {userDetails.portfolio && (
                    <div className="mt-6 pt-6 border-t border-border">
                      <h3 className="text-lg font-semibold text-foreground mb-4">
                        Portfolio Overview
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            Total Gold
                          </p>
                          <p className="text-lg font-semibold text-foreground">
                            {userDetails.portfolio.totalGrams.toFixed(4)} g
                          </p>
                        </div>
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            Current Value
                          </p>
                          <p className="text-lg font-semibold text-foreground">
                            {formatCurrency(userDetails.portfolio.currentValue)}
                          </p>
                        </div>
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            Unrealized Gain
                          </p>
                          <p
                            className={`text-lg font-semibold ${
                              userDetails.portfolio.unrealizedGain >= 0
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {formatCurrency(
                              userDetails.portfolio.unrealizedGain
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-end">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <Edit3 className="mr-2 h-4 w-4" />
                      Update Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-card-foreground">
                    <Shield className="h-5 w-5 text-primary" />
                    Account Security
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Manage your account security settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2 text-foreground">
                        Password
                      </h4>
                      <div className="flex justify-between items-center p-3 border border-border rounded-lg bg-muted/30">
                        <span className="text-sm text-muted-foreground">
                          ••••••••••••
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-border hover:bg-accent"
                        >
                          Change Password
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2 text-foreground">
                        Two-Factor Authentication
                      </h4>
                      <div className="flex justify-between items-center p-3 border border-border rounded-lg bg-muted/30">
                        <div>
                          <p className="text-sm text-foreground">
                            Secure your account with 2FA
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Add an extra layer of security
                          </p>
                        </div>
                        <Switch className="data-[state=checked]:bg-primary" />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2 text-foreground">
                        Account Verification
                      </h4>
                      <div className="flex justify-between items-center p-3 border border-border rounded-lg bg-muted/30">
                        <div className="flex items-center gap-2">
                          {isVerified ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <AlertTriangle className="h-4 w-4 text-yellow-500" />
                          )}
                          <span className="text-sm text-foreground">
                            {isVerified
                              ? "Account Verified"
                              : "Verification Pending"}
                          </span>
                        </div>
                        <Badge
                          variant="secondary"
                          className={`${
                            isVerified
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {isVerified ? "Verified" : "Pending"}
                        </Badge>
                      </div>
                      {verificationDate && (
                        <p className="text-xs text-muted-foreground mt-2">
                          Verified on {verificationDate}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border border-destructive/20">
                <CardHeader>
                  <CardTitle className="text-destructive">
                    Danger Zone
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Irreversible and destructive actions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center p-3 border border-destructive/20 rounded-lg bg-destructive/5">
                    <div>
                      <p className="text-sm font-medium text-destructive">
                        Delete Account
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Permanently delete your account and all data
                      </p>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    >
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-card-foreground">
                    <Calendar className="h-5 w-5 text-primary" />
                    Account Activity
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Recent account activity and login history
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 border border-border rounded-lg bg-muted/30">
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Account Created
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatDate(userDetails.createdAt)}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-3 border border-border rounded-lg bg-muted/30">
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Profile Last Updated
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {getTimeAgo(userDetails.updatedAt)}
                        </p>
                      </div>
                    </div>

                    {userDetails.wallet && (
                      <div className="flex justify-between items-center p-3 border border-border rounded-lg bg-muted/30">
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            Wallet Balance
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {formatCurrency(
                              userDetails.wallet.balance,
                              userDetails.wallet.currency
                            )}
                          </p>
                        </div>
                        <Badge
                          variant="outline"
                          className="border-primary text-primary bg-primary/10"
                        >
                          {userDetails.wallet.currency}
                        </Badge>
                      </div>
                    )}

                    {userDetails.transactions &&
                      userDetails.transactions.length > 0 && (
                        <div className="flex justify-between items-center p-3 border border-border rounded-lg bg-muted/30">
                          <div>
                            <p className="text-sm font-medium text-foreground">
                              Last Transaction
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {getTimeAgo(
                                userDetails.transactions[
                                  userDetails.transactions.length - 1
                                ].createdAt
                              )}
                            </p>
                          </div>
                          <Badge variant="outline">
                            {userDetails.transactions.length} transaction
                            {userDetails.transactions.length > 1 ? "s" : ""}
                          </Badge>
                        </div>
                      )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      {/* Settings Dialog */}
      <Dialog
        open={isSettingsDialogOpen}
        onOpenChange={setIsSettingsDialogOpen}
      >
        <DialogContent className="max-w-2xl bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2 text-card-foreground">
              <Settings className="h-6 w-6 text-primary" />
              Settings
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Configure your application preferences
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <Bell className="h-5 w-5 text-primary" />
                  Notifications
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Manage how you receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Email Notifications
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Receive updates via email
                    </p>
                  </div>
                  <Switch
                    defaultChecked
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Transaction Alerts
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Get notified of all transactions
                    </p>
                  </div>
                  <Switch
                    defaultChecked
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Price Alerts
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Gold price movement notifications
                    </p>
                  </div>
                  <Switch className="data-[state=checked]:bg-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Privacy</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Control your privacy settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Profile Visibility
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Make your profile visible to others
                    </p>
                  </div>
                  <Switch className="data-[state=checked]:bg-primary" />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Data Analytics
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Help improve our service
                    </p>
                  </div>
                  <Switch
                    defaultChecked
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => setIsSettingsDialogOpen(false)}
                className="border-border hover:bg-accent text-foreground"
              >
                Cancel
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Save Changes
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UserProfileDropdown;
