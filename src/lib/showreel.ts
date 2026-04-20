/**
 * Hero showreel MP4 URL.
 * Prefer `NEXT_PUBLIC_SHOWREEL_URL` (HTTPS CDN) on Vercel; otherwise same-origin `/video/showreel.mp4`
 * (must exist in `public/video/` — see `.gitignore`).
 */
export function getShowreelSrc(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SHOWREEL_URL?.trim();
  if (fromEnv) {
    return fromEnv;
  }
  return "/video/showreel.mp4";
}
