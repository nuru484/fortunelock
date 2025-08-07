// src/components/wallet/PaymentCallbackPage.tsx
"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useVerifyDepositMutation } from "@/redux/api/apiSlice";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  XCircle,
  Loader2,
  Home,
  Wallet,
  CreditCard,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

// Define the type for paymentDetails
interface PaymentDetails {
  currency: string;
  amount: number;
  reference: string;
  paymentId: string;
  newBalance: number;
}

const PaymentCallbackPage: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [verifyDeposit] = useVerifyDepositMutation();

  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [message, setMessage] = useState("");
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(
    null
  );

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const sessionId = searchParams.get("session_id");

        if (!sessionId) {
          setStatus("error");
          setMessage("No payment session ID found in the callback URL.");
          return;
        }

        const response = await verifyDeposit({
          reference: sessionId,
        }).unwrap();

        if (response.success) {
          setStatus("success");
          setMessage(response.message || "Payment verified successfully!");
          setPaymentDetails(response.data);
        } else {
          setStatus("error");
          setMessage("Payment verification failed.");
        }
      } catch (error) {
        console.error(error);
        setStatus("error");
        setMessage("An error occurred while verifying payment.");
      }
    };

    verifyPayment();
  }, [searchParams, verifyDeposit]);

  const goHome = () => {
    router.push("/dashboard");
  };

  const goToWallet = () => {
    router.push("/dashboard/wallet");
  };

  const formatCurrency = (amount: number, currencyCode: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Payment Status
                </h1>
                <p className="text-gray-600">
                  Verifying your deposit transaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Loading State */}
        {status === "loading" && (
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="pt-12 pb-12">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
                  <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Verifying Payment
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Please wait while we confirm your deposit...
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Success State */}
        {status === "success" && (
          <div className="space-y-8">
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="pt-12 pb-8">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-12 h-12 text-green-500" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                      Deposit Successful!
                    </h2>
                    <p className="text-gray-600 text-lg">
                      Your wallet has been credited successfully
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Details */}
            {paymentDetails && (
              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-900 flex items-center gap-2">
                    <Wallet className="w-5 h-5" />
                    Transaction Details
                  </CardTitle>
                  <CardDescription className="text-green-700">
                    Your deposit has been processed and added to your wallet
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 border border-green-100">
                        <p className="text-sm font-medium text-green-800 mb-1">
                          Deposit Amount
                        </p>
                        <p className="text-2xl font-bold text-green-900">
                          {formatCurrency(
                            paymentDetails.amount,
                            paymentDetails.currency
                          )}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-green-100">
                        <p className="text-sm font-medium text-green-800 mb-1">
                          New Wallet Balance
                        </p>
                        <p className="text-2xl font-bold text-green-900">
                          {formatCurrency(
                            paymentDetails.newBalance,
                            paymentDetails.currency
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-green-100">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="font-medium text-green-800">
                            Transaction ID
                          </p>
                          <p className="text-green-700 font-mono break-all">
                            {paymentDetails.paymentId}
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-green-800">
                            Reference
                          </p>
                          <p className="text-green-700 font-mono break-all">
                            {paymentDetails.reference.substring(0, 20)}...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={goHome}
                className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg"
              >
                <Home className="w-5 h-5 mr-2" />
                Go to Dashboard
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                onClick={goToWallet}
                variant="outline"
                className="flex-1 h-12 border-gray-300 hover:bg-gray-50 font-semibold text-lg"
              >
                <Wallet className="w-5 h-5 mr-2" />
                View Wallet
              </Button>
            </div>
          </div>
        )}

        {/* Error State */}
        {status === "error" && (
          <div className="space-y-8">
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="pt-12 pb-8">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto">
                    <XCircle className="w-12 h-12 text-red-500" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                      Payment Failed
                    </h2>
                    <p className="text-gray-600 text-lg">
                      We couldn&apos;t process your deposit
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Error Details */}
            <Card className="bg-gradient-to-r from-red-50 to-rose-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-900 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  What went wrong?
                </CardTitle>
                <CardDescription className="text-red-700">
                  {message}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-white rounded-lg p-4 border border-red-100">
                  <div className="space-y-3 text-sm text-red-800">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                      <span>Your card was not charged</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                      <span>No funds were deducted from your account</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                      <span>
                        You can try again with the same or different payment
                        method
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                      <span>Contact support if the problem persists</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => router.push("/dashboard/wallet/deposit")}
                className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Try Again
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                onClick={goHome}
                variant="outline"
                className="flex-1 h-12 border-gray-300 hover:bg-gray-50 font-semibold text-lg"
              >
                <Home className="w-5 h-5 mr-2" />
                Go to Dashboard
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <CreditCard className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">
                Secure payment processing powered by Stripe
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              For support and inquiries, contact our team
            </p>
            <a
              href="mailto:support@fortunelockdepository.com"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              support@fortunelockdepository.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PaymentCallbackPage;
