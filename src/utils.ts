export function getRelativeUrl(path: string, base: string | undefined): string {
  if (!base) return path;
  // Remove leading and trailing slashes
  const cleanBase = base.replace(/^\/|\/$/g, "");
  const cleanPath = path.replace(/^\/|\/$/g, "");
  
  // Combine and ensure leading slash
  return `/${[cleanBase, cleanPath].filter(Boolean).join("/")}`;
} 