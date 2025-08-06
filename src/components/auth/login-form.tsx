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
import { Mail, Lock, ArrowRight } from "lucide-react";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(4, "Password must be at least 4 characters"),
});

// Define the form data type
type FormData = z.infer<typeof formSchema>;

// Define the API error response type
interface ApiErrorResponse {
  success: false;
  errors: {
    general?: string[];
    email?: string[];
    password?: string[];
  };
}

// Helper function to check if error is FetchBaseQueryError
function isFetchBaseQueryError(
  error: FetchBaseQueryError | SerializedError
): error is FetchBaseQueryError {
  return "status" in error;
}

// Helper function to check if error is SerializedError
function isSerializedError(
  error: FetchBaseQueryError | SerializedError
): error is SerializedError {
  return "message" in error;
}

// Helper function to extract error messages from RTK Query error
function getErrorMessages(
  error: FetchBaseQueryError | SerializedError | undefined
): ApiErrorResponse["errors"] | null {
  if (!error) return null;

  if (isFetchBaseQueryError(error)) {
    // Handle FetchBaseQueryError
    if (error.data && typeof error.data === "object") {
      const apiError = error.data as ApiErrorResponse;
      return apiError.errors;
    }
    return { general: [`Request failed with status ${error.status}`] };
  }

  if (isSerializedError(error)) {
    // Handle SerializedError
    return { general: [error.message || "An unexpected error occurred"] };
  }

  // Fallback
  return { general: ["An unexpected error occurred"] };
}

export default function LoginForm() {
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const router = useRouter();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Extract errors from RTK Query error
  const apiErrors = getErrorMessages(error);

  const handleSubmit = async (data: FormData) => {
    try {
      const response = await loginUser(data).unwrap();
      if (response.success) {
        router.push("/dashboard");
      }
    } catch (error) {
      // Error is automatically handled by RTK Query and available in the `error` state
      console.log("Login failed:", error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-center px-4 sm:px-6 lg:px-8 bg-background">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-lg border border-border">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground">Login</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Sign in to your account to continue
            </p>
          </div>

          {apiErrors?.general && (
            <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20 mb-6">
              <p className="text-sm text-destructive">{apiErrors.general[0]}</p>
            </div>
          )}

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="you@example.com"
                          className="pl-10 bg-input border-input focus:ring-2 focus:ring-ring"
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type="password"
                          placeholder="••••••••"
                          className="pl-10 bg-input border-input focus:ring-2 focus:ring-ring"
                          {...field}
                        />
                        <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
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

              <Button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                disabled={isLoading}
              >
                {isLoading ? "Signing In..." : "Sign In"}
                <ArrowRight className="h-4 w-4" />
              </Button>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Don&apos;t have an account?{" "}
                  <a
                    href="/signup"
                    className="font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
