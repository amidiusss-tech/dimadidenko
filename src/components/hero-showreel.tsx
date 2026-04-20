"use client";

type HeroShowreelProps = {
  posterSrc: string;
  videoSrc: string;
  /** Shown to assistive tech (e.g. localized name for the reel). */
  accessibleName: string;
  className?: string;
};

/**
 * Hero background reel: muted autoplay works under browser autoplay rules
 * (no extra tap, no lazy `play()` race with a dynamically inserted `<source>`).
 */
export function HeroShowreel({ posterSrc, videoSrc, accessibleName, className = "" }: HeroShowreelProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={videoSrc}
        poster={posterSrc}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        aria-label={accessibleName}
      />
    </div>
  );
}
