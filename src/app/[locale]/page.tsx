import Link from "next/link";
import { notFound } from "next/navigation";
import { HeroShowreel } from "@/components/hero-showreel";
import { HomePodcastIsland } from "@/components/home-podcast-island";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { getReleasesForDisplay } from "@/data/music-catalog";
import { isLocale, locales } from "@/i18n/config";
import { getPodcastAudioSrc } from "@/lib/podcast-audio";
import { getShowreelSrc } from "@/lib/showreel";
import { getDictionary } from "@/i18n/dictionary";

/** ISR: refresh home catalog data periodically without hitting DB on every request. */
export const revalidate = 3600;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LocaleHomeProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocaleHomePage({ params }: LocaleHomeProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = getDictionary(locale);
  const releases = await getReleasesForDisplay();
  const showreelSrc = getShowreelSrc();
  const podcastSrc = getPodcastAudioSrc(locale);
  const albumsTitle =
    locale === "ru"
      ? "Альбомы"
      : locale === "ja"
        ? "アルバム"
        : locale === "de"
          ? "Alben"
          : locale === "zh"
            ? "专辑"
            : locale === "es"
              ? "Álbumes"
              : locale === "fr"
                ? "Albums"
                : "Albums";
  return (
    <div className="home-bleed">
      <div className="page-wide flex flex-col gap-10 md:gap-14">
        <RevealOnScroll>
          <section className="hero-stage relative overflow-hidden rounded-[2rem] border border-white/15 bg-black shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:rounded-[2.4rem]">
            <HeroShowreel
              className="h-[72vh] min-h-[460px] w-full"
              posterSrc="/images/showreel-poster.jpg"
              videoSrc={showreelSrc}
              accessibleName={copy.home.playShowreel}
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="hero-copy absolute inset-x-0 bottom-0 z-10 px-4 pb-4 pt-10 sm:px-5 sm:pb-5 sm:pt-12 md:px-6 md:pb-6 md:pt-14">
              <p className="apple-eyebrow brand-accent-line text-zinc-300">{copy.home.kicker}</p>
              <h1 className="apple-display mt-2 max-w-4xl font-semibold text-white sm:mt-2.5">{copy.home.title}</h1>
              <p className="apple-lead mt-2 max-w-xl text-zinc-200/95 sm:mt-2.5 md:max-w-2xl">{copy.home.description}</p>
              <div className="mt-3 flex flex-wrap gap-2 sm:mt-4 sm:gap-3">
                <Link
                  href={`/${locale}/catalog`}
                  className="btn-light-solid rounded-full font-semibold transition"
                >
                  {copy.home.browseCatalog}
                </Link>
                <Link
                  href={`/${locale}/licensing`}
                  className="btn-glass rounded-full font-semibold transition hover:bg-white/20"
                >
                  {copy.home.viewLicenses}
                </Link>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delayMs={20} variant="cinematic">
          <HomePodcastIsland copy={copy.home.podcast} audioSrc={podcastSrc} unsupportedText={copy.common.audioUnsupported} />
        </RevealOnScroll>

        <RevealOnScroll delayMs={40} variant="cinematic">
          <section className="space-y-6">
            <div className="flex items-end justify-between">
              <h2 className="apple-title section-accent-line-red ms-[0.65em] font-semibold text-zinc-100">
                {albumsTitle}
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {releases.map((release, index) => (
                <RevealOnScroll key={release.slug} delayMs={index * 45} variant="cinematic">
                  <article className="rounded-3xl border border-white/15 bg-white/[0.05] p-6 shadow-[0_14px_34px_rgba(0,0,0,0.28)] backdrop-blur-sm">
                    <p className="apple-eyebrow text-zinc-400">{release.mascot}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-zinc-50">{release.title}</h3>
                    <p className="mt-2 text-sm text-zinc-300/95">{release.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {release.states.map((state) => (
                        <span key={state.key} className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs text-zinc-200">
                          {state.label}
                        </span>
                      ))}
                    </div>
                    <div className="relative mt-5 inline-block overflow-hidden rounded-full border border-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                      <span
                        className="pointer-events-none absolute inset-0 bg-white/10 backdrop-blur-md"
                        aria-hidden
                      />
                      <span
                        role="status"
                        className="relative z-[1] block px-5 py-2.5 text-sm font-semibold text-white"
                      >
                        {copy.home.albumsButtonSoon}
                      </span>
                    </div>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </section>
        </RevealOnScroll>
      </div>
    </div>
  );
}
