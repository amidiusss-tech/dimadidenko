import { notFound } from "next/navigation";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { TrackCard } from "@/components/track-card";
import { getAllTracks } from "@/data/music-catalog";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

type CatalogProps = {
  params: Promise<{ locale: string }>;
};

export default async function CatalogPage({ params }: CatalogProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = getDictionary(locale);
  const tracks = await getAllTracks();
  const allTags = Array.from(new Set(tracks.flatMap((track) => [...track.moods, ...track.genres]))).sort();

  return (
    <div className="space-y-10">
      <RevealOnScroll>
        <section className="space-y-3">
          <h1 className="apple-title font-semibold text-zinc-100">{copy.catalog.title}</h1>
          <p className="apple-lead text-zinc-300/90">{copy.catalog.subtitle}</p>
        </section>
      </RevealOnScroll>

      <RevealOnScroll delayMs={60}>
        <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <p className="apple-eyebrow mb-3 text-zinc-400">{copy.catalog.tagCloud}</p>
          <div className="flex flex-wrap gap-2 text-sm">
            {allTags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-zinc-200">
                #{tag}
              </span>
            ))}
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll delayMs={100}>
        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {tracks.map((track, index) => (
            <RevealOnScroll key={track.id} delayMs={index * 60}>
              <TrackCard
                track={track}
                locale={locale}
                singleLabel={copy.track.single}
                fromLabel={copy.common.fromPrice}
                openLabel={copy.common.openTrack}
              />
            </RevealOnScroll>
          ))}
        </section>
      </RevealOnScroll>
    </div>
  );
}
