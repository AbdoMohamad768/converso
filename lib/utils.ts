import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn(...inputs)
 *
 * Small utility that combines `clsx` and `tailwind-merge` to produce
 * a cleaned, conflict-resolved Tailwind CSS `className` string.
 *
 * Behavior summary:
 * - Accepts the same inputs as `clsx` (strings, arrays, objects, boolean expressions).
 * - `clsx` joins and filters falsy values into a single class string.
 * - `twMerge` then deduplicates and resolves conflicting Tailwind utility classes
 *   (for example, handling multiple `px-*`, `text-*`, or color utilities so the
 *   final string contains the expected winner according to Tailwind precedence).
 *
 * Usage examples:
 *   - Conditional classes:
 *     `cn("px-4", condition && "text-red-500")` -> "px-4 text-red-500" when truthy
 *   - Merging component variants:
 *     `cn(buttonVariants({ variant, size, className }))` -> produces the final
 *       className for a button while resolving any Tailwind conflicts.
 *   - Inline usage in JSX:
 *     `<Link className={cn(pathname === item.href && "text-primary font-bold")} />`
 *
 * Notes:
 * - Keep this helper small and focused; it is intentionally a thin wrapper so
 *   callers can use all of `clsx`'s expressive inputs while benefiting from
 *   Tailwind-specific merging.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
