"use client";

import { useRef } from "react";
import { guessAudioMimeType } from "@/lib/audio-mime";

type AudioPreviewPlayerProps = {
  src: string;
  previewLabel: string;
  unsupportedText: string;
  tipText: string;
};

export function AudioPreviewPlayer({ src, previewLabel, unsupportedText, tipText }: AudioPreviewPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const mime = guessAudioMimeType(src);

  return (
    <div className="space-y-3 rounded-xl border border-zinc-800 bg-zinc-900 p-4">
      <p className="text-xs uppercase tracking-wide text-zinc-400">{previewLabel}</p>
      <audio ref={audioRef} controls preload="none" className="w-full">
        <source src={src} {...(mime ? { type: mime } : {})} />
        {unsupportedText}
      </audio>
      <p className="text-xs text-zinc-500">{tipText}</p>
    </div>
  );
}
