import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Use /lozen-sanctuary for GitHub Pages project site.
  // Remove this line once sacredspaceanimalrescue.com custom domain is active.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === "production" ? "/lozen-sanctuary" : ""),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
