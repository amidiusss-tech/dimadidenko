export type AlbumState = "calm" | "speed" | "boss";

export type Release = {
  slug: string;
  title: string;
  mascot: string;
  description: string;
  states: Array<{
    key: AlbumState;
    label: string;
    subtitle: string;
    bgFrom: string;
    bgTo: string;
    accent: string;
  }>;
};

export const demoReleases: Release[] = [
  {
    slug: "shadows-vol-1",
    title: "Shadows, Vol. 1",
    mascot: "Ghost Fox",
    description: "Noir cartoon world of mystery cues and sneaky rhythm.",
    states: [
      { key: "calm", label: "Moon Walk", subtitle: "Soft stealth vibe", bgFrom: "#3b2c67", bgTo: "#1e1936", accent: "#fcd34d" },
      { key: "speed", label: "Turbo Sneak", subtitle: "Fast puzzle chase", bgFrom: "#4338ca", bgTo: "#0f172a", accent: "#22d3ee" },
      { key: "boss", label: "Final Duel", subtitle: "Dark dramatic clash", bgFrom: "#7f1d1d", bgTo: "#111827", accent: "#fb7185" }
    ]
  },
  {
    slug: "hearts-vol-1",
    title: "Hearts, Vol. 1",
    mascot: "Cloud Bunny",
    description: "Warm cartoon romance world with dreamy orchestral color.",
    states: [
      { key: "calm", label: "Sunny Garden", subtitle: "Tender and soft", bgFrom: "#f472b6", bgTo: "#fb7185", accent: "#fef08a" },
      { key: "speed", label: "Spark Run", subtitle: "Bouncy optimistic motion", bgFrom: "#f97316", bgTo: "#ec4899", accent: "#67e8f9" },
      { key: "boss", label: "Heart Storm", subtitle: "Emotional peak moment", bgFrom: "#be185d", bgTo: "#7c2d12", accent: "#fdba74" }
    ]
  },
  {
    slug: "momentum-vol-1",
    title: "Momentum, Vol. 1",
    mascot: "Blue Falcon",
    description: "Arcade action world packed with punchy cinematic energy.",
    states: [
      { key: "calm", label: "Ready Zone", subtitle: "Focused before launch", bgFrom: "#2563eb", bgTo: "#0f766e", accent: "#fde047" },
      { key: "speed", label: "Dash Mode", subtitle: "Maximum kinetic flow", bgFrom: "#0891b2", bgTo: "#4338ca", accent: "#facc15" },
      { key: "boss", label: "Mega Showdown", subtitle: "High-stakes finale", bgFrom: "#b91c1c", bgTo: "#1d4ed8", accent: "#f59e0b" }
    ]
  }
];
