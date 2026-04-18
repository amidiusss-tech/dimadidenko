export const locales = ["en", "ru", "ja", "de", "zh", "es", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ru";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
