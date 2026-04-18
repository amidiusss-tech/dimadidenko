import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllTracks, getReleaseBySlug } from "@/data/music-catalog";
import { isLocale } from "@/i18n/config";

type ReleasePageProps = {
  params: Promise<{ locale: string; slug: string }>;
  searchParams: Promise<{ state?: string }>;
};

function getStateText(locale: string) {
  if (locale === "ru") {
    return { title: "Состояние альбома", tracks: "Треки в папке", open: "Открыть трек" };
  }
  if (locale === "ja") {
    return { title: "アルバム状態", tracks: "フォルダ内トラック", open: "トラックを開く" };
  }
  return { title: "Album state", tracks: "Tracks in folder", open: "Open track" };
}

export default async function ReleasePage({ params, searchParams }: ReleasePageProps) {
  const { locale, slug } = await params;
  const stateQuery = (await searchParams).state;

  if (!isLocale(locale)) {
    notFound();
  }

  const release = await getReleaseBySlug(slug);
  if (!release) {
    notFound();
  }

  const activeState =
    release.states.find((item) => item.key === stateQuery) ??
    release.states[0];

  const allTracks = await getAllTracks();
  const tracks = allTracks.filter((track) => track.releaseSlug === release.slug);
  const text = getStateText(locale);

  return (
    <div
      className="album-state-bg rounded-[2rem] border-2 border-black/25 p-7 shadow-[0_12px_0_rgba(0,0,0,0.25)] md:p-10"
      style={{ background: `linear-gradient(145deg, ${activeState.bgFrom}, ${activeState.bgTo})` }}
    >
      <div className="relative z-10 space-y-8">
        <section className="space-y-4">
          <p className="inline-flex rounded-full border-2 border-black/25 bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-zinc-900">
            {release.mascot}
          </p>
          <h1 className="text-4xl font-black text-white md:text-5xl">{release.title}</h1>
          <p className="max-w-2xl text-white/90">{release.description}</p>
        </section>

        <section className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/90">{text.title}</p>
          <div className="flex flex-wrap gap-3">
            {release.states.map((state) => {
              const isActive = state.key === activeState.key;
              return (
                <Link
                  key={state.key}
                  href={`/${locale}/release/${release.slug}?state=${state.key}`}
                  className={`rounded-full border-2 px-4 py-2 text-sm font-bold transition ${
                    isActive
                      ? "border-black/30 bg-white text-zinc-900"
                      : "border-black/20 bg-white/25 text-white hover:bg-white/35"
                  }`}
                >
                  {state.label}
                </Link>
              );
            })}
          </div>
          <p
            className="inline-block rounded-full border-2 border-black/20 px-3 py-1 text-sm font-semibold text-zinc-900"
            style={{ backgroundColor: activeState.accent }}
          >
            {activeState.subtitle}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-black text-white">
            {text.tracks}: {tracks.length}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {tracks.map((track) => (
              <article key={track.id} className="rounded-2xl border-2 border-black/25 bg-white/85 p-4 text-zinc-900">
                <h3 className="text-lg font-black">{track.title}</h3>
                <p className="mt-1 text-sm">{track.description}</p>
                <Link
                  href={`/${locale}/track/${track.slug}`}
                  className="mt-3 inline-block rounded-full border-2 border-black/25 bg-lime-300 px-4 py-2 text-xs font-bold uppercase tracking-[0.1em]"
                >
                  {text.open}
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
