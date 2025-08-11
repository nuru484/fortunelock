"use client";
import { useGetUserDetailsQuery } from "@/redux/api/apiSlice";
import { useParams } from "next/navigation";
import React from "react";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import UserProfileCard from "@/components/admin/UserProfileCard";
import WalletInfo from "@/components/admin/WalletInfo";
import PortfolioInfo from "@/components/admin/PortfolioInfo";
import HoldingsList from "@/components/admin/HoldingsList";
import PhysicalGoldList from "@/components/admin/PhysicalGoldList";
import TransactionsList from "../../../../components/admin/TransactionsList";
import PaymentsList from "@/components/admin/PaymentsList";

const LoadingSkeleton = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header Skeleton */}
      <div className="mb-8">
        <Skeleton className="h-8 w-32 mb-4" />
        <Skeleton className="h-10 w-64" />
      </div>

      {/* Profile Card Skeleton */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 mb-8">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-16 w-16 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Skeleton className="h-40 rounded-2xl" />
        <Skeleton className="h-40 rounded-2xl" />
      </div>

      {/* List Skeletons */}
      {[...Array(4)].map((_, i) => (
        <Skeleton key={i} className="h-64 rounded-2xl mb-6" />
      ))}
    </div>
  </div>
);

const ErrorState = ({ onRetry }: { onRetry: () => void }) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
    <div className="container mx-auto px-4 max-w-md">
      <Alert className="border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-800">
        <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
        <AlertDescription className="text-red-800 dark:text-red-200 ml-2">
          <div className="space-y-3">
            <p className="font-semibold">Unable to load user details</p>
            <p className="text-sm opacity-90">
              There was an error retrieving the user information. Please check
              your connection and try again.
            </p>
            <div className="flex space-x-3">
              <Button
                onClick={onRetry}
                size="sm"
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Try Again
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.history.back()}
                className="border-red-300 text-red-700 hover:bg-red-50 dark:border-red-700 dark:text-red-300 dark:hover:bg-red-950"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Go Back
              </Button>
            </div>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  </div>
);

const UserDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading, error, refetch } = useGetUserDetailsQuery(id);

  // Loading state with professional skeleton
  if (isLoading) {
    return <LoadingSkeleton />;
  }

  // Error state with retry functionality
  if (error || !data?.data) {
    return <ErrorState onRetry={refetch} />;
  }

  const userData = data.data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Main Content */}
        <main className="space-y-8">
          {/* User Profile Section */}
          <section className="animate-in slide-in-from-bottom-4 duration-300">
            <UserProfileCard user={userData} />
          </section>

          {/* Key Metrics Grid */}
          <section className="animate-in slide-in-from-bottom-4 duration-300 delay-100">
            <div className="transform transition-all duration-200 hover:scale-[1.02]">
              <WalletInfo wallet={userData.wallet} />
            </div>
          </section>

          <section className="animate-in slide-in-from-bottom-4 duration-300 delay-100">
            <div className="transform transition-all duration-200 hover:scale-[1.02]">
              <PortfolioInfo portfolio={userData.portfolio} />
            </div>
          </section>

          {/* Holdings & Assets Section */}
          <section className="space-y-6">
            <div className="animate-in slide-in-from-bottom-4 duration-300 delay-200">
              <HoldingsList holdings={userData.holdings} />
            </div>
            <div className="animate-in slide-in-from-bottom-4 duration-300 delay-300">
              <PhysicalGoldList goldItems={userData.goldItems} />
            </div>
          </section>

          {/* Activity & History Section */}
          <section className="space-y-6">
            <div className="animate-in slide-in-from-bottom-4 duration-300 delay-400">
              <TransactionsList transactions={userData.transactions} />
            </div>
            <div className="animate-in slide-in-from-bottom-4 duration-300 delay-500">
              <PaymentsList payments={userData.payments} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default UserDetailsPage;
