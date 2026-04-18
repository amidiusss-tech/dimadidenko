import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { defaultLocale, Locale } from "@/i18n/config";

function getPreferredLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) {
    return defaultLocale;
  }

  const normalized = acceptLanguage.toLowerCase();

  if (normalized.includes("ru")) {
    return "ru";
  }

  if (normalized.includes("ja")) {
    return "ja";
  }

  if (normalized.includes("en")) {
    return "en";
  }

  if (normalized.includes("de")) {
    return "de";
  }

  if (normalized.includes("zh")) {
    return "zh";
  }

  if (normalized.includes("es")) {
    return "es";
  }

  if (normalized.includes("fr")) {
    return "fr";
  }

  return defaultLocale;
}

export default async function Home() {
  const headerStore = await headers();
  const locale = getPreferredLocale(headerStore.get("accept-language"));
  redirect(`/${locale}`);
}
