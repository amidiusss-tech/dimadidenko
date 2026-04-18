"use client";

import { useEffect, useRef, useState } from "react";

type HeroShowreelProps = {
  posterSrc: string;
  videoSrc: string;
  playLabel: string;
  className?: string;
};

/**
 * Showreel loads only after the user taps play — no multi‑MB download in the background,
 * which keeps first paint fast on slow or high-latency connections.
 */
export function HeroShowreel({ posterSrc, videoSrc, playLabel, className = "" }: HeroShowreelProps) {
  const [loadVideo, setLoadVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!loadVideo || !el) {
      return;
    }
    el.load();
    void el.play().catch(() => {});
  }, [loadVideo]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        loop
        playsInline
        preload="none"
        poster={posterSrc}
        {...(loadVideo ? { autoPlay: true } : {})}
      >
        {loadVideo ? <source src={videoSrc} type="video/mp4" /> : null}
      </video>

      {!loadVideo ? (
        <button
          type="button"
          className="absolute inset-0 z-20 flex cursor-pointer items-center justify-center bg-black/25 transition hover:bg-black/35"
          aria-label={playLabel}
          onClick={() => setLoadVideo(true)}
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white shadow-lg backdrop-blur-sm transition hover:bg-white/25 md:h-20 md:w-20">
            <svg className="ml-1 h-7 w-7 md:h-8 md:w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          </span>
        </button>
      ) : null}
    </div>
  );
}
