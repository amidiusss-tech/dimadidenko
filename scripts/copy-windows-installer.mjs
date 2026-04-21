/**
 * Copy the Inno Setup .exe into Next.js static folder so /downloads/... works.
 *
 * Usage (PowerShell):
 *   $env:INSTALLER_SRC="D:\projects\soft\saturator\dist\Extreme_Saturator_Setup_1.1.0.exe"
 *   npm run release:copy-win-installer
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const destName = "Extreme_Saturator_Setup_1.1.0.exe";
const destDir = path.join(root, "public", "downloads");
const dest = path.join(destDir, destName);

const src = process.env.INSTALLER_SRC?.trim();
if (!src) {
  console.error(
    "Set INSTALLER_SRC to the full path of the built installer .exe, then run again.\n" +
      "Example: INSTALLER_SRC=D:\\\\projects\\\\soft\\\\saturator\\\\dist\\\\Extreme_Saturator_Setup_1.1.0.exe"
  );
  process.exit(1);
}

if (!fs.existsSync(src)) {
  console.error("INSTALLER_SRC not found:", src);
  process.exit(1);
}

fs.mkdirSync(destDir, { recursive: true });
fs.copyFileSync(src, dest);
console.log("Copied installer to:", path.relative(root, dest));
