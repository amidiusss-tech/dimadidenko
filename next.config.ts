import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: []
  },
  /** Avoid server webpack chunk splits for this package (fixes missing ./611.js / vendor-chunks on Windows dev). */
  serverExternalPackages: ["@supabase/supabase-js"]
};

export default nextConfig;
