"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useSignupUserMutation } from "@/redux/api/apiSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import {
  User,
  Mail,
  Lock,
  Globe,
  Calendar,
  Users,
  Phone,
  ArrowRight,
  Eye,
  EyeOff,
  CheckCircle,
} from "lucide-react";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain uppercase, lowercase, and number"
    ),
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.string().min(1, "Gender is required"),
  nationality: z.string().min(1, "Nationality is required"),
  country: z.string().min(1, "Country is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
});

type FormData = z.infer<typeof formSchema>;

interface Country {
  name: {
    common: string;
    official: string;
  };
  cca2: string;
  cca3: string;
  idd: {
    root?: string;
    suffixes?: string[];
  };
  flag: string;
  demonyms?: {
    eng?: {
      f: string;
      m: string;
    };
  };
}

interface ApiErrorResponse {
  success: false;
  errors: {
    general?: string[];
    email?: string[];
    password?: string[];
    firstName?: string[];
    middleName?: string[];
    lastName?: string[];
    dateOfBirth?: string[];
    gender?: string[];
    nationality?: string[];
    country?: string[];
    phoneNumber?: string[];
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

const genderOptions = ["Male", "Female", "Other", "Prefer not to say"];

export default function SignupForm() {
  const [signupUser, { isLoading, error }] = useSignupUserMutation();
  const router = useRouter();
  const [countries, setCountries] = useState<Country[]>([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      middleName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      nationality: "",
      country: "",
      phoneNumber: "",
    },
  });

  // Password strength indicator
  const password = form.watch("password");
  const getPasswordStrength = (password: string) => {
    if (!password) return 0;
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength(password);

  // Fetch countries from REST Countries API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca2,cca3,idd,flag,demonyms"
        );
        const data: Country[] = await response.json();

        const sortedCountries = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );

        setCountries(sortedCountries);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
        // Fallback countries list
        const fallbackCountries = [
          "United States",
          "United Kingdom",
          "Canada",
          "Australia",
          "Germany",
          "France",
          "Italy",
          "Spain",
          "Japan",
          "South Korea",
          "Singapore",
          "Ghana",
          "Nigeria",
          "South Africa",
          "Kenya",
          "Egypt",
          "Morocco",
          "Brazil",
          "Mexico",
          "Argentina",
          "India",
          "China",
          "Thailand",
        ].map((name) => ({
          name: { common: name, official: name },
          cca2: "",
          cca3: "",
          idd: { root: "", suffixes: [] },
          flag: "",
        }));
        setCountries(fallbackCountries);
      } finally {
        setLoadingCountries(false);
      }
    };

    fetchCountries();
  }, []);

  const getCountryCallingCode = useCallback(
    (countryName: string): string => {
      const country = countries.find((c) => c.name.common === countryName);
      if (country?.idd?.root && country?.idd?.suffixes?.[0]) {
        return `${country.idd.root}${country.idd.suffixes[0]}`;
      }
      return "";
    },
    [countries]
  );

  const getNationalityOptions = (): string[] => {
    const nationalities = new Set<string>();

    countries.forEach((country) => {
      if (country.demonyms?.eng?.m) {
        nationalities.add(country.demonyms.eng.m);
      }
      if (country.demonyms?.eng?.f) {
        nationalities.add(country.demonyms.eng.f);
      }

      const countryName = country.name.common;
      if (countryName.endsWith("s")) {
        nationalities.add(countryName);
      } else {
        nationalities.add(`${countryName}n`);
      }
    });

    return Array.from(nationalities).sort();
  };

  const watchedCountry = form.watch("country");

  useEffect(() => {
    if (watchedCountry) {
      const callingCode = getCountryCallingCode(watchedCountry);
      setSelectedCountryCode(callingCode);
    }
  }, [watchedCountry, countries, getCountryCallingCode]);

  const apiErrors = getErrorMessages(error);

  const handleSubmit = async (data: FormData) => {
    if (!termsAccepted) {
      toast.error("Please accept the terms and conditions");
      return;
    }

    try {
      const formattedData = {
        ...data,
        dateOfBirth: new Date(data.dateOfBirth).toISOString(),
        middleName: data.middleName || undefined,
      };

      const response = await signupUser(formattedData).unwrap();
      if (response.success) {
        toast.success(
          "Account created successfully! Redirecting to dashboard..."
        );
        router.push("/dashboard");
      }
    } catch (error) {
      console.log("Signup failed:", error);
    }
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Create Your Account
        </h2>
        <p className="text-sm text-muted-foreground">
          Start your journey with secure precious metals investment
        </p>
      </div>

      {apiErrors?.general && (
        <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20 mb-6">
          <p className="text-sm text-destructive">{apiErrors.general[0]}</p>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          {/* Personal Information Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b border-border/30 pb-2">
              Personal Information
            </h3>

            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-medium">
                      First Name *
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="John"
                          className="pl-10 h-12 bg-background/50 border-border/60 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200"
                          {...field}
                        />
                        <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </FormControl>
                    <FormMessage />
                    {apiErrors?.firstName && (
                      <p className="text-sm text-destructive">
                        {apiErrors.firstName[0]}
                      </p>
                    )}
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-medium">
                      Last Name *
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Doe"
                          className="pl-10 h-12 bg-background/50 border-border/60 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200"
                          {...field}
                        />
                        <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </FormControl>
                    <FormMessage />
                    {apiErrors?.lastName && (
                      <p className="text-sm text-destructive">
                        {apiErrors.lastName[0]}
                      </p>
                    )}
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="middleName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-medium">
                    Middle Name (Optional)
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Michael"
                        className="pl-10 h-12 bg-background/50 border-border/60 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200"
                        {...field}
                      />
                      <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Date of Birth and Gender */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-medium">
                      Date of Birth *
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type="date"
                          className="pl-10 h-12 bg-background/50 border-border/60 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200"
                          max={
                            new Date(
                              Date.now() - 18 * 365.25 * 24 * 60 * 60 * 1000
                            )
                              .toISOString()
                              .split("T")[0]
                          }
                          {...field}
                        />
                        <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </FormControl>
                    <FormMessage />
                    {apiErrors?.dateOfBirth && (
                      <p className="text-sm text-destructive">
                        {apiErrors.dateOfBirth[0]}
                      </p>
                    )}
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-medium">
                      Gender *
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 bg-background/50 border-border/60 focus:border-gold focus:ring-2 focus:ring-gold/20">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <SelectValue placeholder="Select gender" />
                          </div>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {genderOptions.map((gender) => (
                          <SelectItem key={gender} value={gender}>
                            {gender}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                    {apiErrors?.gender && (
                      <p className="text-sm text-destructive">
                        {apiErrors.gender[0]}
                      </p>
                    )}
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b border-border/30 pb-2">
              Contact Information
            </h3>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-medium">
                    Email Address *
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="your.email@example.com"
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
                    Password *
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
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
                  {/* Password strength indicator */}
                  {password && (
                    <div className="mt-2">
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((level) => (
                          <div
                            key={level}
                            className={`h-1 flex-1 rounded ${
                              passwordStrength >= level
                                ? passwordStrength <= 2
                                  ? "bg-red-500"
                                  : passwordStrength <= 3
                                  ? "bg-yellow-500"
                                  : "bg-green-500"
                                : "bg-border"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Password strength:{" "}
                        {passwordStrength <= 2
                          ? "Weak"
                          : passwordStrength <= 3
                          ? "Medium"
                          : "Strong"}
                      </p>
                    </div>
                  )}
                  <FormMessage />
                  {apiErrors?.password && (
                    <p className="text-sm text-destructive">
                      {apiErrors.password[0]}
                    </p>
                  )}
                </FormItem>
              )}
            />

            {/* Country and Nationality */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-medium">
                      Country of Residence *
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      disabled={loadingCountries}
                    >
                      <FormControl>
                        <SelectTrigger className="h-12 bg-background/50 border-border/60 focus:border-gold focus:ring-2 focus:ring-gold/20">
                          <div className="flex items-center gap-2">
                            <Globe className="h-4 w-4 text-muted-foreground" />
                            <SelectValue
                              placeholder={
                                loadingCountries
                                  ? "Loading countries..."
                                  : "Select country"
                              }
                            />
                          </div>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem
                            key={country.name.common}
                            value={country.name.common}
                          >
                            <div className="flex items-center gap-2">
                              <span>{country.flag}</span>
                              <span>{country.name.common}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                    {apiErrors?.country && (
                      <p className="text-sm text-destructive">
                        {apiErrors.country[0]}
                      </p>
                    )}
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nationality"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-medium">
                      Nationality *
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      disabled={loadingCountries}
                    >
                      <FormControl>
                        <SelectTrigger className="h-12 bg-background/50 border-border/60 focus:border-gold focus:ring-2 focus:ring-gold/20">
                          <div className="flex items-center gap-2">
                            <Globe className="h-4 w-4 text-muted-foreground" />
                            <SelectValue
                              placeholder={
                                loadingCountries
                                  ? "Loading nationalities..."
                                  : "Select nationality"
                              }
                            />
                          </div>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {getNationalityOptions().map((nationality) => (
                          <SelectItem key={nationality} value={nationality}>
                            {nationality}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                    {apiErrors?.nationality && (
                      <p className="text-sm text-destructive">
                        {apiErrors.nationality[0]}
                      </p>
                    )}
                  </FormItem>
                )}
              />
            </div>

            {/* Phone Number */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-medium">
                    Phone Number *
                  </FormLabel>
                  <FormControl>
                    <div className="flex gap-2">
                      <div className="flex items-center px-3 bg-muted/50 rounded-md border border-border/60 min-w-[100px]">
                        <Phone className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-sm font-medium">
                          {selectedCountryCode || "+1"}
                        </span>
                      </div>
                      <div className="relative flex-1">
                        <Input
                          placeholder="1234567890"
                          className="h-12 bg-background/50 border-border/60 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200"
                          {...field}
                        />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                  {apiErrors?.phoneNumber && (
                    <p className="text-sm text-destructive">
                      {apiErrors.phoneNumber[0]}
                    </p>
                  )}
                </FormItem>
              )}
            />
          </div>

          {/* Terms and Conditions */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-4 bg-muted/20 rounded-lg border border-border/30">
              <div className="relative">
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="sr-only"
                />
                <label
                  htmlFor="terms"
                  className={`flex items-center justify-center w-5 h-5 rounded border-2 cursor-pointer transition-colors ${
                    termsAccepted
                      ? "bg-gold border-gold text-background"
                      : "border-border/60 hover:border-gold/50"
                  }`}
                >
                  {termsAccepted && <CheckCircle className="w-3 h-3" />}
                </label>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-gold hover:text-gold/80 transition-colors"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-gold hover:text-gold/80 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  . I understand that Fortune Lock Depository will securely
                  store my personal information and use it for account
                  management and regulatory compliance.
                </p>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 hover:to-gold/70 text-background font-semibold rounded-lg shadow-lg hover:shadow-xl transition-allduration-200 flex items-center justify-center gap-2"
            disabled={isLoading || !termsAccepted}
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                Creating Account...
              </>
            ) : (
              <>
                Create Secure Account
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>

          <div className="text-center pt-6 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              Already have a Fortune Lock account?{" "}
              <Link
                href="/login"
                className="font-medium text-gold hover:text-gold/80 transition-colors"
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}
