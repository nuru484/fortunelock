import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

// Define comprehensive error types
export interface ApiErrorResponse {
  success?: boolean;
  message?: string;
  errors?: {
    [field: string]: string[] | string;
  };
  details?: string;
  code?: string | number;
}

export interface ProcessedError {
  message: string;
  fieldErrors: Record<string, string[]>;
  generalErrors: string[];
  statusCode?: number;
  originalError?: FetchBaseQueryError | SerializedError;
}

// Type guards
function isFetchBaseQueryError(
  error: FetchBaseQueryError | SerializedError
): error is FetchBaseQueryError {
  return "status" in error && "data" in error;
}

function isSerializedError(
  error: FetchBaseQueryError | SerializedError
): error is SerializedError {
  return "message" in error && !("status" in error);
}

// Helper to normalize error messages to string array
function normalizeToStringArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.filter((item) => typeof item === "string");
  }
  if (typeof value === "string") {
    return [value];
  }
  return [];
}

// Helper to extract status code from various error formats
function extractStatusCode(error: FetchBaseQueryError): number | undefined {
  if (typeof error.status === "number") {
    return error.status;
  }
  if (typeof error.status === "string") {
    const parsed = parseInt(error.status, 10);
    return isNaN(parsed) ? undefined : parsed;
  }
  return undefined;
}

// Helper to get user-friendly error messages based on status codes
function getStatusMessage(status: number): string {
  const statusMessages: Record<number, string> = {
    400: "Bad request. Please check your input.",
    401: "Authentication failed. Please log in again.",
    403: "Access denied. You don't have permission to perform this action.",
    404: "The requested resource was not found.",
    409: "Conflict. This resource already exists or cannot be modified.",
    422: "Validation failed. Please check your input.",
    429: "Too many requests. Please try again later.",
    500: "Server error. Please try again later.",
    502: "Service unavailable. Please try again later.",
    503: "Service temporarily unavailable. Please try again later.",
    504: "Request timeout. Please try again.",
  };

  return statusMessages[status] || `Request failed with status ${status}`;
}

// Main error processing function
export function processRTKError(
  error: FetchBaseQueryError | SerializedError | undefined
): ProcessedError {
  // Default error structure
  const defaultError: ProcessedError = {
    message: "An unexpected error occurred",
    fieldErrors: {},
    generalErrors: [],
  };

  if (!error) {
    return defaultError;
  }

  // Handle FetchBaseQueryError (API errors)
  if (isFetchBaseQueryError(error)) {
    const statusCode = extractStatusCode(error);
    const result: ProcessedError = {
      message: "",
      fieldErrors: {},
      generalErrors: [],
      statusCode,
      originalError: error,
    };

    // Handle network errors
    if (error.status === "FETCH_ERROR") {
      result.message = "Network error. Please check your connection.";
      result.generalErrors = [result.message];
      return result;
    }

    if (error.status === "PARSING_ERROR") {
      result.message = "Server response error. Please try again.";
      result.generalErrors = [result.message];
      return result;
    }

    if (error.status === "TIMEOUT_ERROR") {
      result.message = "Request timeout. Please try again.";
      result.generalErrors = [result.message];
      return result;
    }

    // Handle API response errors
    if (error.data && typeof error.data === "object") {
      const apiError = error.data as ApiErrorResponse;

      // Extract main message
      if (apiError.message) {
        result.message = apiError.message;
      } else if (statusCode) {
        result.message = getStatusMessage(statusCode);
      }

      // Extract field-specific errors
      if (apiError.errors && typeof apiError.errors === "object") {
        Object.entries(apiError.errors).forEach(([field, fieldError]) => {
          const normalizedErrors = normalizeToStringArray(fieldError);
          if (normalizedErrors.length > 0) {
            result.fieldErrors[field] = normalizedErrors;
          }
        });
      }

      // Extract general errors
      if (apiError.errors?.general) {
        result.generalErrors = normalizeToStringArray(apiError.errors.general);
      } else if (result.message) {
        result.generalErrors = [result.message];
      }

      // Handle details
      if (apiError.details) {
        result.generalErrors.push(apiError.details);
      }
    } else if (statusCode) {
      // No data but we have status code
      result.message = getStatusMessage(statusCode);
      result.generalErrors = [result.message];
    } else {
      // Fallback for unknown fetch errors
      result.message = "Request failed";
      result.generalErrors = [result.message];
    }

    return result;
  }

  // Handle SerializedError (usually from rejected promises)
  if (isSerializedError(error)) {
    const message = error.message || "An unexpected error occurred";
    return {
      message,
      fieldErrors: {},
      generalErrors: [message],
      originalError: error,
    };
  }

  // Fallback for unknown error types
  return defaultError;
}

// Convenience functions for specific use cases
export function getFieldError(
  error: FetchBaseQueryError | SerializedError | undefined,
  fieldName: string
): string | undefined {
  const processed = processRTKError(error);
  return processed.fieldErrors[fieldName]?.[0];
}

export function getGeneralError(
  error: FetchBaseQueryError | SerializedError | undefined
): string | undefined {
  const processed = processRTKError(error);
  return processed.generalErrors[0];
}

export function getAllFieldErrors(
  error: FetchBaseQueryError | SerializedError | undefined
): Record<string, string[]> {
  const processed = processRTKError(error);
  return processed.fieldErrors;
}

export function hasFieldError(
  error: FetchBaseQueryError | SerializedError | undefined,
  fieldName: string
): boolean {
  const processed = processRTKError(error);
  return (
    fieldName in processed.fieldErrors &&
    processed.fieldErrors[fieldName].length > 0
  );
}

export function getErrorSummary(
  error: FetchBaseQueryError | SerializedError | undefined
): string {
  const processed = processRTKError(error);

  if (processed.generalErrors.length > 0) {
    return processed.generalErrors[0];
  }

  if (Object.keys(processed.fieldErrors).length > 0) {
    const firstFieldError = Object.values(processed.fieldErrors)[0];
    return firstFieldError[0];
  }

  return processed.message;
}

// Hook for easier usage in React components
export function useRTKError(
  error: FetchBaseQueryError | SerializedError | undefined
) {
  const processed = processRTKError(error);

  return {
    ...processed,
    hasError: !!(
      error &&
      (processed.generalErrors.length > 0 ||
        Object.keys(processed.fieldErrors).length > 0)
    ),
    getFieldError: (fieldName: string) => processed.fieldErrors[fieldName]?.[0],
    hasFieldError: (fieldName: string) => hasFieldError(error, fieldName),
    summary: getErrorSummary(error),
  };
}
