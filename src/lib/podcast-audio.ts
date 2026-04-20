import type { Locale } from "@/i18n/config";

/**
 * Podcast / «Моя музыка» audio URL for the active locale.
 *
 * **Default (no env):** `/audio/podcast-{locale}.wav` — put files in `public/audio/`, e.g. `public/audio/podcast-ru.wav`.
 *
 * **Override:** set `NEXT_PUBLIC_PODCAST_AUDIO_RU` (and/or `_EN`, `_JA`, …) to any absolute or same-origin URL (CDN, Blob).
 * `NEXT_PUBLIC_PODCAST_AUDIO_FALLBACK` is used when a locale-specific variable is unset.
 */
export function getPodcastAudioSrc(locale: Locale): string {
  const fromEnv = (key: string) => process.env[key]?.trim() || undefined;

  const byLocale: Record<Locale, string | undefined> = {
    en: fromEnv("NEXT_PUBLIC_PODCAST_AUDIO_EN"),
    ru: fromEnv("NEXT_PUBLIC_PODCAST_AUDIO_RU"),
    ja: fromEnv("NEXT_PUBLIC_PODCAST_AUDIO_JA"),
    de: fromEnv("NEXT_PUBLIC_PODCAST_AUDIO_DE"),
    zh: fromEnv("NEXT_PUBLIC_PODCAST_AUDIO_ZH"),
    es: fromEnv("NEXT_PUBLIC_PODCAST_AUDIO_ES"),
    fr: fromEnv("NEXT_PUBLIC_PODCAST_AUDIO_FR")
  };

  return (
    byLocale[locale] ??
    fromEnv("NEXT_PUBLIC_PODCAST_AUDIO_FALLBACK") ??
    `/audio/podcast-${locale}.wav`
  );
}
