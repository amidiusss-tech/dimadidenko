/** Must match the filename you ship (Inno Setup output / CDN object). */
export const WINDOWS_INSTALLER_FILENAME = "Extreme_Saturator_Setup_1.0.0.exe";

/**
 * Windows installer link for the Soft page.
 * - Default: same-origin static file `public/downloads/<WINDOWS_INSTALLER_FILENAME>`.
 * - Production on CDN: set `NEXT_PUBLIC_WINDOWS_INSTALLER_URL` to a full HTTPS URL.
 */
export function getWindowsInstallerHref(): string {
  const override = process.env.NEXT_PUBLIC_WINDOWS_INSTALLER_URL?.trim();
  if (override) return override;
  return `/downloads/${WINDOWS_INSTALLER_FILENAME}`;
}
