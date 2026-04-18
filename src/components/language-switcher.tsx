"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Locale, locales } from "@/i18n/config";

const localeNames: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
  ja: "日本語",
  de: "Deutsch",
  zh: "中文",
  es: "Español",
  fr: "Français"
};

type LanguageSwitcherProps = {
  locale: Locale;
  localeLabel: string;
};

export function LanguageSwitcher({ locale, localeLabel }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onPointerDown = (event: PointerEvent) => {
      const root = rootRef.current;
      if (root && !root.contains(event.target as Node)) {
        close();
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={localeLabel}
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-zinc-200 transition hover:border-white/25 hover:bg-white/10"
      >
        <span className="text-zinc-400">{localeLabel}</span>
        <span className="uppercase tracking-wide text-zinc-100">{locale}</span>
        <span className={`text-zinc-500 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden>
          ▾
        </span>
      </button>

      <div
        role="listbox"
        className={`absolute right-0 z-30 mt-2 min-w-[11rem] origin-top-right rounded-2xl border border-white/15 bg-zinc-950/95 py-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition duration-200 ease-out ${
          open ? "pointer-events-auto translate-y-0 scale-100 opacity-100" : "pointer-events-none -translate-y-1 scale-95 opacity-0"
        }`}
      >
        {locales.map((code) => {
          const active = code === locale;
          return (
            <Link
              key={code}
              href={`/${code}`}
              role="option"
              aria-selected={active}
              onClick={close}
              className={`flex items-center justify-between gap-4 px-3 py-2 text-sm transition hover:bg-white/10 ${
                active ? "bg-white/10 text-white" : "text-zinc-300"
              }`}
            >
              <span>{localeNames[code]}</span>
              <span className="text-xs uppercase tracking-wide text-zinc-500">{code}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
