import { getSupabase } from "@/lib/supabase";
import { isSupabaseConfigured } from "@/lib/supabase-config";
import { demoReleases, type Release } from "@/data/releases";
import { demoTracks } from "@/data/tracks";
import type { Track } from "@/types/music";

type DbReleaseRow = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  cover_image_url: string | null;
  theme_tags: string[] | null;
  published_at: string | null;
};

type DbTrackRow = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  moods: string[] | null;
  genres: string[] | null;
  use_cases: string[] | null;
  bpm: number | null;
  musical_key: string | null;
  duration_sec: number;
  price_personal: number | string;
  price_commercial: number | string;
  price_extended: number | string;
  preview_url: string;
  cover_image_url: string | null;
  published_at: string | null;
  releases: { slug: string; title: string } | { slug: string; title: string }[] | null;
};

function pickJoinedRelease(
  rel: DbTrackRow["releases"]
): { slug: string; title: string } | null {
  if (!rel) {
    return null;
  }
  return Array.isArray(rel) ? rel[0] ?? null : rel;
}

function toNumber(value: number | string): number {
  return typeof value === "number" ? value : Number(value);
}

function mapDbTrack(row: DbTrackRow): Track {
  const rel = pickJoinedRelease(row.releases);
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    description: row.description ?? "",
    moods: row.moods ?? [],
    genres: row.genres ?? [],
    useCases: row.use_cases ?? [],
    bpm: row.bpm ?? undefined,
    key: row.musical_key ?? undefined,
    durationSec: row.duration_sec,
    prices: {
      personal: toNumber(row.price_personal),
      commercial: toNumber(row.price_commercial),
      extended: toNumber(row.price_extended)
    },
    previewUrl: row.preview_url,
    coverImageUrl: row.cover_image_url ?? "",
    releaseTitle: rel?.title,
    releaseSlug: rel?.slug
  };
}

function defaultReleaseFromDb(row: DbReleaseRow): Release {
  const tags = row.theme_tags ?? [];
  const mascot = tags[0] ?? row.title;
  const blurb = (row.description ?? "").trim() || row.title;
  return {
    slug: row.slug,
    title: row.title,
    mascot,
    description: blurb,
    states: [
      {
        key: "calm",
        label: "Calm",
        subtitle: blurb.slice(0, 48) || "Softer side",
        bgFrom: "#334155",
        bgTo: "#0f172a",
        accent: "#94a3b8"
      },
      {
        key: "speed",
        label: "Drive",
        subtitle: "Momentum and motion",
        bgFrom: "#2563eb",
        bgTo: "#172554",
        accent: "#38bdf8"
      },
      {
        key: "boss",
        label: "Peak",
        subtitle: "High intensity",
        bgFrom: "#7f1d1d",
        bgTo: "#111827",
        accent: "#fb7185"
      }
    ]
  };
}

async function fetchTracksFromSupabase(): Promise<Track[]> {
  const { data, error } = await getSupabase()
    .from("tracks")
    .select(
      `
      id,
      title,
      slug,
      description,
      moods,
      genres,
      use_cases,
      bpm,
      musical_key,
      duration_sec,
      price_personal,
      price_commercial,
      price_extended,
      preview_url,
      cover_image_url,
      published_at,
      releases ( slug, title )
    `
    )
    .order("published_at", { ascending: false, nullsFirst: false });

  if (error) {
    throw error;
  }

  return (data as unknown as DbTrackRow[] | null)?.map(mapDbTrack) ?? [];
}

async function fetchReleasesFromSupabase(): Promise<Release[]> {
  const { data, error } = await getSupabase()
    .from("releases")
    .select("id, title, slug, description, cover_image_url, theme_tags, published_at")
    .order("published_at", { ascending: false, nullsFirst: false });

  if (error) {
    throw error;
  }

  const rows = (data as DbReleaseRow[] | null) ?? [];
  return rows.map((row) => {
    const demo = demoReleases.find((r) => r.slug === row.slug);
    if (demo) {
      const desc = (row.description ?? "").trim();
      return {
        ...demo,
        title: row.title || demo.title,
        description: desc || demo.description
      };
    }
    return defaultReleaseFromDb(row);
  });
}

export async function getAllTracks(): Promise<Track[]> {
  if (!isSupabaseConfigured()) {
    return demoTracks;
  }
  try {
    const tracks = await fetchTracksFromSupabase();
    if (tracks.length === 0) {
      console.warn("[music-catalog] Supabase returned no tracks; using demo catalog.");
      return demoTracks;
    }
    return tracks;
  } catch (err) {
    console.error("[music-catalog] Failed to load tracks from Supabase:", err);
    return demoTracks;
  }
}

export async function getTrackBySlug(slug: string): Promise<Track | undefined> {
  const tracks = await getAllTracks();
  return tracks.find((t) => t.slug === slug);
}

export async function getReleasesForDisplay(): Promise<Release[]> {
  if (!isSupabaseConfigured()) {
    return demoReleases;
  }
  try {
    const releases = await fetchReleasesFromSupabase();
    if (releases.length === 0) {
      console.warn("[music-catalog] Supabase returned no releases; using demo releases.");
      return demoReleases;
    }
    return releases;
  } catch (err) {
    console.error("[music-catalog] Failed to load releases from Supabase:", err);
    return demoReleases;
  }
}

export async function getReleaseBySlug(slug: string): Promise<Release | undefined> {
  const releases = await getReleasesForDisplay();
  return releases.find((r) => r.slug === slug);
}
