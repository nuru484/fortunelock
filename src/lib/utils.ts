import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and merges Tailwind classes using twMerge
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}
