"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  /** Stagger sibling reveals (ms) */
  delayMs?: number;
  variant?: "default" | "cinematic";
};

export function RevealOnScroll({ children, className = "", delayMs = 0, variant = "default" }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-io ${variant === "cinematic" ? "reveal-io--cinematic" : ""} ${visible ? "reveal-io--visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
