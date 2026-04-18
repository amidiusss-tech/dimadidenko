import { notFound } from "next/navigation";
import { AudioPreviewPlayer } from "@/components/audio-preview-player";
import { getTrackBySlug } from "@/data/music-catalog";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

type TrackPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function TrackPage({ params }: TrackPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = getDictionary(locale);
  const track = await getTrackBySlug(slug);

  if (!track) {
    notFound();
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
      <section className="space-y-6">
        <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">{track.releaseTitle ?? copy.track.single}</p>
        <h1 className="text-3xl font-semibold text-zinc-100 md:text-4xl">{track.title}</h1>
        <p className="max-w-3xl text-zinc-300/95">{track.description}</p>

        <div className="grid gap-3 text-sm text-zinc-200 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5">
            {copy.track.bpm}: {track.bpm ?? "-"}
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5">
            {copy.track.key}: {track.key ?? "-"}
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5">
            {copy.track.duration}: {track.durationSec}
            {copy.track.secondsShort}
          </div>
        </div>

        <div className="space-y-2 text-sm text-zinc-300/95">
          <p>
            {copy.track.moods}: {track.moods.join(", ")}
          </p>
          <p>
            {copy.track.genres}: {track.genres.join(", ")}
          </p>
          <p>
            {copy.track.useCases}: {track.useCases.join(", ")}
          </p>
        </div>

        <AudioPreviewPlayer
          src={track.previewUrl}
          previewLabel={copy.common.previewPlayer}
          unsupportedText={copy.common.audioUnsupported}
          tipText={copy.common.previewTip}
        />
      </section>

      <aside className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
        <h2 className="text-xl font-semibold text-zinc-100">{copy.track.licenseOptions}</h2>
        <div className="space-y-3 text-sm text-zinc-200">
          <p>
            {copy.track.personal}: ${track.prices.personal}
          </p>
          <p>
            {copy.track.commercial}: ${track.prices.commercial}
          </p>
          <p>
            {copy.track.extended}: ${track.prices.extended}
          </p>
        </div>
        <button className="btn-light-solid mt-2 w-full rounded-full px-4 py-2.5 text-sm font-semibold transition">
          {copy.track.buy}
        </button>
      </aside>
    </div>
  );
}
