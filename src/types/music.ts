export type LicenseTier = "personal" | "commercial" | "extended";

export type Track = {
  id: string;
  title: string;
  slug: string;
  description: string;
  moods: string[];
  genres: string[];
  useCases: string[];
  bpm?: number;
  key?: string;
  durationSec: number;
  prices: Record<LicenseTier, number>;
  previewUrl: string;
  coverImageUrl: string;
  releaseTitle?: string;
  releaseSlug?: string;
};
