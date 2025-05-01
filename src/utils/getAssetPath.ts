import { SITE } from "@/config";

/**
 * Get the full path for a static asset, including the base URL
 * @param path - the asset path relative to the public directory
 * @returns the full path including base URL
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${SITE.base}/${cleanPath}`;
} 