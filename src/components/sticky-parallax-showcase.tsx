"use client";

import { useEffect, useRef, useState } from "react";

type StickyParallaxShowcaseProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function StickyParallaxShowcase({ eyebrow, title, subtitle }: StickyParallaxShowcaseProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = sectionRef.current;
      if (!el) {
        return;
      }
      const scrollRange = el.offsetHeight - window.innerHeight;
      if (scrollRange <= 0) {
        setProgress(0);
        return;
      }
      const scrolled = -el.getBoundingClientRect().top;
      setProgress(Math.min(1, Math.max(0, scrolled / scrollRange)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const translateY = (progress - 0.5) * 28;
  const scale = 0.94 + progress * 0.06;
  const orbY = (0.5 - progress) * 60;

  return (
    <div ref={sectionRef} className="relative min-h-[220vh] w-full">
      <div className="sticky top-0 flex h-[min(100dvh,880px)] min-h-[520px] items-center justify-center overflow-hidden px-4 py-12">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.55]"
          style={{
            background: `radial-gradient(55% 45% at 50% ${45 + progress * 18}%, rgba(59,130,246,0.18), transparent 70%)`
          }}
        />
        <div
          className="pointer-events-none absolute h-[min(70vw,520px)] w-[min(70vw,520px)] rounded-full bg-gradient-to-br from-violet-500/25 to-sky-400/15 blur-3xl"
          style={{ transform: `translateY(${orbY}px)` }}
        />

        <div
          className="relative z-10 mx-auto w-full max-w-3xl text-center will-change-transform"
          style={{ transform: `translateY(${translateY}px) scale(${scale})` }}
        >
          <p className="apple-eyebrow text-zinc-400">{eyebrow}</p>
          <h2 className="apple-title mt-3 font-semibold tracking-tight text-white">{title}</h2>
          <p className="apple-lead mx-auto mt-4 max-w-2xl text-zinc-300/95">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
