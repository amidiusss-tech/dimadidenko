import type { NextConfig } from "next";

/** `next dev --turbo` — skip `webpack()` so Turbopack does not warn about unused webpack config. */
const isTurboDev = process.argv.includes("dev") && process.argv.includes("--turbo");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: []
  },
  /** Avoid server webpack chunk splits for this package (fixes missing ./611.js / vendor-chunks on Windows dev). */
  serverExternalPackages: ["@supabase/supabase-js"],
  /**
   * Windows: ghost chunks (Cannot find module './611.js') come from a stale `.next` / webpack cache.
   * Use `npm run dev:fresh` or `npm run start:fresh` after errors.
   * Webpack cache off in dev only for `npm run dev:webpack` (plain `next dev`).
   */
  ...(!isTurboDev
    ? {
        webpack(config: { cache?: boolean }, { dev }: { dev: boolean }) {
          if (dev) {
            config.cache = false;
          }
          return config;
        }
      }
    : {})
};

export default nextConfig;
