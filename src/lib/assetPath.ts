// next/image with unoptimized:true does not auto-prefix basePath to src.
// Use this helper for all local image paths.
const base =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "/lozen-sanctuary" : "");

export function assetPath(path: string): string {
  return `${base}${path}`;
}
