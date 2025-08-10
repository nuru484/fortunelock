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
import { User, Mail, Lock, Globe, Calendar, Users, Phone } from "lucide-react";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(4, "Password must be at least 4 characters"),
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.string().min(1, "Gender is required"),
  nationality: z.string().min(1, "Nationality is required"),
  country: z.string().min(1, "Country is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
});

// Define the form data type
type FormData = z.infer<typeof formSchema>;

// Country data interface
interface Country {
  name: {
    common: string;
    official: string;
  };
  cca2: string; // 2-letter country code
  cca3: string; // 3-letter country code
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

// Define the API error response type
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

const genderOptions = ["Male", "Female", "Other", "Prefer not to say"];

export default function SignupForm() {
  const [signupUser, { isLoading, error }] = useSignupUserMutation();
  const router = useRouter();
  const [countries, setCountries] = useState<Country[]>([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>("");

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

  // Fetch countries from REST Countries API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca2,cca3,idd,flag,demonyms"
        );
        const data: Country[] = await response.json();

        // Sort countries by common name
        const sortedCountries = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );

        setCountries(sortedCountries);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
        // Fallback to basic countries list if API fails
        const fallbackCountries = [
          "Afghanistan",
          "Albania",
          "Algeria",
          "Argentina",
          "Australia",
          "Austria",
          "Bangladesh",
          "Belgium",
          "Brazil",
          "Canada",
          "China",
          "Denmark",
          "Egypt",
          "Finland",
          "France",
          "Germany",
          "Ghana",
          "Greece",
          "India",
          "Indonesia",
          "Iran",
          "Iraq",
          "Ireland",
          "Israel",
          "Italy",
          "Japan",
          "Jordan",
          "Kenya",
          "Kuwait",
          "Malaysia",
          "Mexico",
          "Netherlands",
          "Nigeria",
          "Norway",
          "Pakistan",
          "Philippines",
          "Poland",
          "Portugal",
          "Qatar",
          "Russia",
          "Saudi Arabia",
          "Singapore",
          "South Africa",
          "South Korea",
          "Spain",
          "Sweden",
          "Switzerland",
          "Thailand",
          "Turkey",
          "UAE",
          "Ukraine",
          "United Kingdom",
          "United States",
          "Vietnam",
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

  // Get country calling code
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

  // Get nationality options (demonyms)
  const getNationalityOptions = (): string[] => {
    const nationalities = new Set<string>();

    countries.forEach((country) => {
      // Add demonyms if available
      if (country.demonyms?.eng?.m) {
        nationalities.add(country.demonyms.eng.m);
      }
      if (country.demonyms?.eng?.f) {
        nationalities.add(country.demonyms.eng.f);
      }

      // Fallback: create nationality from country name
      const countryName = country.name.common;
      if (countryName.endsWith("s")) {
        nationalities.add(countryName);
      } else {
        nationalities.add(`${countryName}n`);
      }
    });

    return Array.from(nationalities).sort();
  };

  // Watch country field to update phone number prefix
  const watchedCountry = form.watch("country");

  useEffect(() => {
    if (watchedCountry) {
      const callingCode = getCountryCallingCode(watchedCountry);
      setSelectedCountryCode(callingCode);
    }
  }, [watchedCountry, countries, getCountryCallingCode]);

  // Extract errors from RTK Query error
  const apiErrors = getErrorMessages(error);

  const handleSubmit = async (data: FormData) => {
    try {
      // Convert dateOfBirth string to Date object for API
      const formattedData = {
        ...data,
        dateOfBirth: new Date(data.dateOfBirth).toISOString(),
        middleName: data.middleName || undefined, // Convert empty string to undefined
      };

      const response = await signupUser(formattedData).unwrap();
      if (response.success) {
        toast.success(`Signup Successfull, redirecting to dashboard...`);

        router.push("/dashboard");
      }
    } catch (error) {
      // Error is automatically handled by RTK Query and available in the `error` state
      console.log("Signup failed:", error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-center px-4 sm:px-6 lg:px-8 bg-background">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-lg border border-border">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground">Sign Up</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Create an account to get started
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
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name *</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="John"
                            className="pl-10 bg-input border-input focus:ring-2 focus:ring-ring"
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
                      <FormLabel>Last Name *</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="Doe"
                            className="pl-10 bg-input border-input focus:ring-2 focus:ring-ring"
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
                    <FormLabel>Middle Name (Optional)</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Michael"
                          className="pl-10 bg-input border-input focus:ring-2 focus:ring-ring"
                          {...field}
                        />
                        <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </FormControl>
                    <FormMessage />
                    {apiErrors?.middleName && (
                      <p className="text-sm text-destructive">
                        {apiErrors.middleName[0]}
                      </p>
                    )}
                  </FormItem>
                )}
              />

              {/* Email and Password */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
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
                    <FormLabel>Password *</FormLabel>
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

              {/* Date of Birth and Gender */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date of Birth *</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type="date"
                            className="pl-10 bg-input border-input focus:ring-2 focus:ring-ring"
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
                      <FormLabel>Gender *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-input border-input focus:ring-2 focus:ring-ring">
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

              {/* Country and Nationality */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country of Residence *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        disabled={loadingCountries}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-input border-input focus:ring-2 focus:ring-ring">
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
                      <FormLabel>Nationality *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        disabled={loadingCountries}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-input border-input focus:ring-2 focus:ring-ring">
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
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <div className="flex gap-2">
                        <div className="flex items-center px-3 bg-muted rounded-md border border-input">
                          <Phone className="h-4 w-4 text-muted-foreground mr-2" />
                          <span className="text-sm font-medium min-w-[3rem]">
                            {selectedCountryCode || "+1"}
                          </span>
                        </div>
                        <div className="relative flex-1">
                          <Input
                            placeholder="1234567890"
                            className="bg-input border-input focus:ring-2 focus:ring-ring"
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

              <Button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Create Account"}
                <User className="h-4 w-4" />
              </Button>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Sign in
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
