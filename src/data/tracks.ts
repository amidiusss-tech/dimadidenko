import { Track } from "@/types/music";

export const demoTracks: Track[] = [
  {
    id: "trk_001",
    title: "Dark Piano Undercurrent",
    slug: "dark-piano-undercurrent",
    description: "Tense cinematic piano bed for suspense, dialogue, and slow build scenes.",
    moods: ["suspense", "dark", "minimal"],
    genres: ["cinematic", "ambient"],
    useCases: ["thriller", "dialogue scene", "trailer teaser"],
    bpm: 72,
    key: "D minor",
    durationSec: 126,
    prices: { personal: 29, commercial: 79, extended: 199 },
    previewUrl: "/audio/demo-preview.mp3",
    coverImageUrl: "/images/track-dark-piano.jpg",
    releaseTitle: "Shadows, Vol. 1",
    releaseSlug: "shadows-vol-1"
  },
  {
    id: "trk_002",
    title: "Tender Strings Theme",
    slug: "tender-strings-theme",
    description: "Emotional string theme for romance, memories, and reflective moments.",
    moods: ["emotional", "warm", "romantic"],
    genres: ["orchestral", "cinematic"],
    useCases: ["love scene", "drama", "short film"],
    bpm: 68,
    key: "G major",
    durationSec: 148,
    prices: { personal: 35, commercial: 99, extended: 249 },
    previewUrl: "/audio/demo-preview.mp3",
    coverImageUrl: "/images/track-tender-strings.jpg",
    releaseTitle: "Hearts, Vol. 1",
    releaseSlug: "hearts-vol-1"
  },
  {
    id: "trk_003",
    title: "Hybrid Pulse Chase",
    slug: "hybrid-pulse-chase",
    description: "Pulsing hybrid rhythm cue for action edits, reveals, and dynamic montages.",
    moods: ["epic", "urgent", "powerful"],
    genres: ["hybrid", "trailer"],
    useCases: ["action scene", "promo", "sports edit"],
    bpm: 124,
    key: "F minor",
    durationSec: 110,
    prices: { personal: 39, commercial: 119, extended: 289 },
    previewUrl: "/audio/demo-preview.mp3",
    coverImageUrl: "/images/track-hybrid-pulse.jpg",
    releaseTitle: "Momentum, Vol. 1",
    releaseSlug: "momentum-vol-1"
  }
];
