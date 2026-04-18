import { Locale } from "@/i18n/config";

export type StickySpotlightCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export const homeStickySpotlight: Record<Locale, StickySpotlightCopy> = {
  en: {
    eyebrow: "Spotlight",
    title: "Music built for the frame.",
    subtitle: "Cinematic stems, emotional arcs, and trailer energy — composed to sit under picture, not on top of it."
  },
  ru: {
    eyebrow: "Акцент",
    title: "Музыка под кадр.",
    subtitle: "Кинематографичные стемы, драматургия и энергия трейлера — написано так, чтобы усиливать картинку, а не перебивать её."
  },
  ja: {
    eyebrow: "スポットライト",
    title: "映像に寄り添う音楽。",
    subtitle: "シネマティックなステム、感情の弧、トレーラー級の推進力。画面の上に乗るのではなく、その下で支える作曲。"
  },
  de: {
    eyebrow: "Im Fokus",
    title: "Musik fürs Bild.",
    subtitle: "Cinematische Stems, emotionale Bögen und Trailer-Energie — komponiert, um das Bild zu tragen, nicht zu überdecken."
  },
  zh: {
    eyebrow: "焦点",
    title: "为画面而写的音乐。",
    subtitle: "电影感分轨、情绪弧线与预告片级张力——作曲目标是托住画面，而不是压住画面。"
  },
  es: {
    eyebrow: "Destacado",
    title: "Música pensada para el plano.",
    subtitle: "Stems cinematográficos, arcos emocionales y energía de trailer — compuesta para apoyar la imagen, no taparla."
  },
  fr: {
    eyebrow: "À la une",
    title: "Une musique faite pour l'image.",
    subtitle: "Stems cinématographiques, arcs émotionnels et énergie trailer — composée pour porter l'image, pas pour la masquer."
  }
};
