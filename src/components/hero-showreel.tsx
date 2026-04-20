"use client";

import { useEffect, useRef, useState } from "react";

type HeroShowreelProps = {
  posterSrc: string;
  videoSrc: string;
  /** Shown to assistive tech (e.g. localized name for the reel). */
  accessibleName: string;
  className?: string;
};

/**
 * Hero background reel: muted autoplay. Retries `play()` after `canplay` for
 * browsers that ignore `autoPlay` alone. If the file is missing (e.g. MP4 not
 * deployed), `controls` appear so the failure is visible.
 *
 * Layout: parent sets the frame (e.g. `h-[72vh] min-h-[460px] w-full`). Video
 * uses `object-cover` + `object-top` — fills the box without stretching; top
 * aligned to the top edge.
 */
export function HeroShowreel({ posterSrc, videoSrc, accessibleName, className = "" }: HeroShowreelProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !videoSrc) {
      return;
    }

    const tryPlay = () => {
      void el.play().catch(() => {});
    };

    if (el.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      tryPlay();
    } else {
      el.addEventListener("canplay", tryPlay, { once: true });
      return () => el.removeEventListener("canplay", tryPlay);
    }
  }, [videoSrc]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover object-top"
        src={videoSrc}
        poster={posterSrc}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        controls={showControls}
        aria-label={accessibleName}
        onError={() => setShowControls(true)}
      />
    </div>
  );
}
