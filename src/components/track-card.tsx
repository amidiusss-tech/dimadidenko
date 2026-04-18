import Link from "next/link";
import { Track } from "@/types/music";
import { Locale } from "@/i18n/config";

type TrackCardProps = {
  track: Track;
  locale: Locale;
  singleLabel: string;
  fromLabel: string;
  openLabel: string;
};

function formatDuration(durationSec: number) {
  const minutes = Math.floor(durationSec / 60);
  const seconds = durationSec % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export function TrackCard({ track, locale, singleLabel, fromLabel, openLabel }: TrackCardProps) {
  return (
    <article className="group rounded-3xl border border-white/15 bg-white/[0.05] p-6 shadow-[0_14px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08]">
      {track.releaseSlug ? (
        <Link
          href={`/${locale}/release/${track.releaseSlug}`}
          className="mb-2 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-200 transition hover:bg-white/20"
        >
          {track.releaseTitle ?? singleLabel}
        </Link>
      ) : (
        <p className="mb-2 text-xs uppercase tracking-[0.14em] text-zinc-300">{track.releaseTitle ?? singleLabel}</p>
      )}
      <h3 className="text-xl font-semibold text-zinc-50">{track.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-zinc-300/95">{track.description}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-300">
        {track.moods.slice(0, 3).map((mood) => (
          <span key={mood} className="rounded-full border border-white/15 bg-black/20 px-2.5 py-1 font-medium text-zinc-200">
            #{mood}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between text-sm text-zinc-200">
        <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 font-medium">{formatDuration(track.durationSec)}</span>
        <span>
          {fromLabel} ${track.prices.personal}
        </span>
      </div>
      <Link
        href={`/${locale}/track/${track.slug}`}
        className="btn-light-solid mt-5 inline-block rounded-full px-4 py-2 text-sm font-semibold transition"
      >
        {openLabel}
      </Link>
    </article>
  );
}
