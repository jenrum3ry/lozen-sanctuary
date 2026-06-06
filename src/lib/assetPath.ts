// next/image with unoptimized:true does not auto-prefix basePath to src.
// Use this helper for all local image paths.
const base =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "/lozen-sanctuary" : "");

export function assetPath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : "/" + path;
  if (base && cleanPath.startsWith(base)) {
    return cleanPath;
  }
  return base + cleanPath;
}
