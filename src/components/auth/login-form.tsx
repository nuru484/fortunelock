"use client";
import { useRouter } from "next/navigation";
import { useLoginUserMutation } from "@/redux/api/apiSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useState } from "react";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(4, "Password must be at least 4 characters"),
});

type FormData = z.infer<typeof formSchema>;

interface ApiErrorResponse {
  success: false;
  errors: {
    general?: string[];
    email?: string[];
    password?: string[];
  };
}

function isFetchBaseQueryError(
  error: FetchBaseQueryError | SerializedError
): error is FetchBaseQueryError {
  return "status" in error;
}

function isSerializedError(
  error: FetchBaseQueryError | SerializedError
): error is SerializedError {
  return "message" in error;
}

function getErrorMessages(
  error: FetchBaseQueryError | SerializedError | undefined
): ApiErrorResponse["errors"] | null {
  if (!error) return null;

  if (isFetchBaseQueryError(error)) {
    if (error.data && typeof error.data === "object") {
      const apiError = error.data as ApiErrorResponse;
      return apiError.errors;
    }
    return { general: [`Request failed with status ${error.status}`] };
  }

  if (isSerializedError(error)) {
    return { general: [error.message || "An unexpected error occurred"] };
  }

  return { general: ["An unexpected error occurred"] };
}

export default function LoginForm() {
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const apiErrors = getErrorMessages(error);

  const handleSubmit = async (data: FormData) => {
    try {
      const response = await loginUser(data).unwrap();
      if (response.success) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log("Login failed:", error);
    }
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Welcome Back
        </h2>
        <p className="text-sm text-muted-foreground">
          Sign in to access your secure vault
        </p>
      </div>

      {apiErrors?.general && (
        <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20 mb-6">
          <p className="text-sm text-destructive">{apiErrors.general[0]}</p>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-medium">
                  Email Address
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Enter your email"
                      className="pl-10 h-12 bg-background/50 border-border/60 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200"
                      {...field}
                    />
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </FormControl>
                <FormMessage />
                {apiErrors?.email && (
                  <p className="text-sm text-destructive">
                    {apiErrors.email[0]}
                  </p>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-medium">
                  Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10 pr-10 h-12 bg-background/50 border-border/60 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200"
                      {...field}
                    />
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
                {apiErrors?.password && (
                  <p className="text-sm text-destructive">
                    {apiErrors.password[0]}
                  </p>
                )}
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                className="w-4 h-4 text-gold bg-background border-border rounded focus:ring-gold/20"
              />
              <span className="text-muted-foreground">Remember me</span>
            </label>
            <Link
              href="/forgot-password"
              className="text-sm text-gold hover:text-gold/80 transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 hover:to-gold/70 text-background font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                Signing In...
              </>
            ) : (
              <>
                Sign In Securely
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>

          <div className="text-center pt-6 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              New to Fortune Lock Depository?{" "}
              <Link
                href="/signup"
                className="font-medium text-gold hover:text-gold/80 transition-colors"
              >
                Create Account
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}
