import type { Dictionary } from "@/i18n/dictionary";
import { guessAudioMimeType } from "@/lib/audio-mime";

type HomePodcastIslandProps = {
  copy: Dictionary["home"]["podcast"];
  audioSrc: string;
  unsupportedText: string;
};

export function HomePodcastIsland({ copy, audioSrc, unsupportedText }: HomePodcastIslandProps) {
  const mime = guessAudioMimeType(audioSrc);

  return (
    <section
      className="rounded-[2rem] border border-white/15 bg-white/[0.04] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.35)] backdrop-blur-md md:rounded-[2.4rem] md:p-8"
      aria-labelledby="home-podcast-heading"
    >
      <h2 id="home-podcast-heading" className="apple-title text-2xl font-semibold text-zinc-50 md:text-3xl">
        {copy.title}
      </h2>

      <div className="mt-6 rounded-2xl border border-white/10 bg-black/35 p-4 md:p-5">
        <audio key={audioSrc} controls preload="none" className="w-full accent-red-500">
          <source src={audioSrc} {...(mime ? { type: mime } : {})} />
          {unsupportedText}
        </audio>
      </div>

      <p className="mt-3 text-xs text-zinc-500">{copy.tip}</p>
    </section>
  );
}
