import Image from "next/image";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getWindowsInstallerHref, WINDOWS_INSTALLER_FILENAME } from "@/lib/release-downloads";

type SoftPageProps = {
  params: Promise<{ locale: string }>;
};

function WaveformStrip() {
  return (
    <div className="relative h-16 w-full md:h-[4.5rem]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "14px 100%, 100% 16px",
          maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)"
        }}
      />
      <svg className="relative h-full w-full" viewBox="0 0 960 72" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="es-soft-wave" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.95)" />
            <stop offset="52%" stopColor="rgba(168, 85, 247, 0.9)" />
            <stop offset="100%" stopColor="rgba(251, 191, 36, 0.75)" />
          </linearGradient>
          <filter id="es-soft-glow" x="-20%" y="-60%" width="140%" height="220%">
            <feGaussianBlur stdDeviation="2.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <polyline
          fill="none"
          stroke="url(#es-soft-wave)"
          strokeWidth="2.25"
          strokeLinejoin="round"
          strokeLinecap="round"
          filter="url(#es-soft-glow)"
          vectorEffect="non-scaling-stroke"
          points="0,44 26,44 34,18 48,58 62,22 76,52 90,16 104,50 118,28 132,56 146,20 160,48 174,30 188,54 202,24 216,46 230,14 244,52 258,34 272,50 286,26 300,44 314,20 328,48 342,32 356,50 370,18 384,44 398,28 412,46 426,22 440,52 454,16 468,48 482,30 496,54 510,24 524,46 538,14 552,50 566,36 580,48 594,22 608,52 622,18 636,46 650,30 664,50 678,26 692,44 706,20 720,48 734,34 748,52 762,24 776,46 790,16 804,50 818,32 832,54 846,22 860,48 874,28 888,46 902,20 916,44 930,36 944,48 960,44"
        />
      </svg>
    </div>
  );
}

const copyByLocale = {
  en: {
    title: "Soft",
    subtitle: "Extreme Saturator",
    description:
      "Aggressive multi-mode saturation plugin with realtime waveform feedback. From warm glue to total destruction.",
    features: [
      "Modes: Tanh, Hard Clip, Foldback, Tape Warm, Tape Crunch, Tape LoFi",
      "Controls: Input, Drive, Pre HP, Pre Emphasis, Tone, Mix, Output",
      "Extreme mode toggle (E)",
      "Realtime oscilloscope"
    ],
    downloadsTitle: "Downloads",
    downloadsLead: "Platform builds, one matrix. Windows ships now; macOS and Linux are queued next.",
    downloadsSlug: "EXTREME_SATURATOR",
    downloadsBuild: "v1.0.0 · win-x64",
    windowsLabel: "Windows",
    macosLabel: "macOS",
    linuxLabel: "Linux",
    windowsMeta: ".exe · signed installer",
    macosMeta: ".pkg · notarized (planned)",
    linuxMeta: ".deb · apt-ready (planned)",
    comingSoon: "Soon",
    downloadCta: "Get build",
    featuresTitle: "Features",
    uiTitle: "Interface",
    uiAlt: "Extreme Saturator plugin interface.",
    supportLabel: "Support & suggestions:"
  },
  ru: {
    title: "Софт",
    subtitle: "Extreme Saturator",
    description:
      "Агрессивный сатуратор с несколькими режимами и живым осциллографом. От мягкого клея до полного дестроя.",
    features: [
      "Режимы: Tanh, Hard Clip, Foldback, Tape Warm, Tape Crunch, Tape LoFi",
      "Параметры: Input, Drive, Pre HP, Pre Emphasis, Tone, Mix, Output",
      "Переключатель Extreme (E)",
      "Осциллограф в реальном времени"
    ],
    downloadsTitle: "Загрузки",
    downloadsLead: "Сборки по платформам в одном месте. Сейчас доступен Windows; macOS и Linux — следующими в очереди.",
    downloadsSlug: "EXTREME_SATURATOR",
    downloadsBuild: "v1.0.0 · win-x64",
    windowsLabel: "Windows",
    macosLabel: "macOS",
    linuxLabel: "Linux",
    windowsMeta: ".exe · подписанный установщик",
    macosMeta: ".pkg · нотаризация (в планах)",
    linuxMeta: ".deb · под apt (в планах)",
    comingSoon: "Скоро",
    downloadCta: "Скачать сборку",
    featuresTitle: "Возможности",
    uiTitle: "Интерфейс",
    uiAlt: "Интерфейс плагина Extreme Saturator.",
    supportLabel: "Поддержка и предложения:"
  }
} as const;

export default async function SoftPage({ params }: SoftPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = (locale === "ru" ? copyByLocale.ru : copyByLocale.en);
  const windowsInstallerHref = getWindowsInstallerHref();

  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.18em] text-zinc-400">{copy.title}</p>
        <h1 className="apple-title font-semibold text-zinc-100">{copy.subtitle}</h1>
        <p className="apple-lead max-w-3xl text-zinc-300/90">{copy.description}</p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-6">
        <h2 className="text-xl font-semibold text-zinc-100">{copy.uiTitle}</h2>
        <div className="relative mt-4 aspect-[760/420] w-full max-w-4xl overflow-hidden rounded-xl border border-white/[0.1] bg-zinc-950/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
          <Image
            src="/soft/extreme-saturator-ui.png"
            alt={copy.uiAlt}
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 100vw, 896px"
            priority
          />
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
        <h2 className="text-xl font-semibold text-zinc-100">{copy.featuresTitle}</h2>
        <ul className="mt-4 space-y-2 text-zinc-300">
          {copy.features.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </section>

      <section className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.12] bg-[linear-gradient(165deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02)_38%,rgba(0,0,0,0.18)_100%)] shadow-[0_0_0_1px_rgba(0,0,0,0.35)_inset]">
        <div
          className="pointer-events-none absolute -left-24 -top-32 h-72 w-72 rounded-full opacity-55 blur-3xl"
          style={{ background: "radial-gradient(circle at 30% 30%, rgba(56, 189, 248, 0.35), transparent 62%)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-36 -right-16 h-80 w-80 rounded-full opacity-45 blur-3xl"
          style={{ background: "radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.32), transparent 62%)" }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px, 28px 28px",
            maskImage: "radial-gradient(ellipse 85% 70% at 50% 40%, black, transparent 78%)"
          }}
        />

        <div className="relative p-6 md:p-8">
          <header className="flex flex-col gap-6 border-b border-white/10 pb-7 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-zinc-50 md:text-[1.65rem]">{copy.downloadsTitle}</h2>
              <p className="max-w-xl text-sm leading-relaxed text-zinc-400">{copy.downloadsLead}</p>
            </div>
            <div className="text-left md:text-right">
              <p className="font-mono text-[11px] leading-relaxed text-zinc-500">{copy.downloadsSlug}</p>
              <p className="mt-1 font-mono text-[11px] text-cyan-200/80">{copy.downloadsBuild}</p>
            </div>
          </header>

          <div className="py-7">
            <WaveformStrip />
          </div>

          <div className="divide-y divide-white/10">
            <a
              href={windowsInstallerHref}
              download={windowsInstallerHref.startsWith("/") ? WINDOWS_INSTALLER_FILENAME : undefined}
              className="group relative flex flex-col gap-5 py-7 pl-4 transition md:flex-row md:items-center md:justify-between md:gap-8 md:pl-5"
            >
              <span
                aria-hidden
                className="absolute left-0 top-6 bottom-6 w-px bg-gradient-to-b from-cyan-300/90 via-fuchsia-400/80 to-amber-300/70 opacity-90 transition group-hover:opacity-100"
              />
              <div className="flex min-w-0 flex-1 items-start gap-4 md:gap-6">
                <div className="relative mt-0.5 flex h-[52px] w-[52px] shrink-0 items-center justify-center p-2">
                  <Image
                    src="/soft/windows-logo.png"
                    alt=""
                    width={88}
                    height={88}
                    className="h-full w-full object-contain invert-[0.92] brightness-110 contrast-105"
                    sizes="52px"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-lg font-medium tracking-[-0.02em] text-zinc-50 md:text-xl">{copy.windowsLabel}</p>
                  <p className="mt-1 font-mono text-[12px] text-zinc-500">{copy.windowsMeta}</p>
                </div>
              </div>
              <span className="btn-light-solid inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium md:w-auto">
                {copy.downloadCta}
                <svg className="h-4 w-4 opacity-80 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 12h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>

            <div className="relative flex flex-col gap-5 py-7 pl-4 md:flex-row md:items-center md:justify-between md:gap-8 md:pl-5">
              <span aria-hidden className="absolute left-0 top-6 bottom-6 w-px bg-white/12" />
              <div className="flex min-w-0 flex-1 items-start gap-4 md:gap-6">
                <div className="relative mt-0.5 flex h-[52px] w-[52px] shrink-0 items-center justify-center p-2">
                  <Image
                    src="/soft/macos-apple.png"
                    alt=""
                    width={88}
                    height={88}
                    className="h-full w-full object-contain invert-[0.92] brightness-110 contrast-105"
                    sizes="52px"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-lg font-medium tracking-[-0.02em] text-zinc-200 md:text-xl">{copy.macosLabel}</p>
                  <p className="mt-1 font-mono text-[12px] text-zinc-500">{copy.macosMeta}</p>
                </div>
              </div>
              <span className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500 md:w-auto">
                {copy.comingSoon}
              </span>
            </div>

            <div className="relative flex flex-col gap-5 py-7 pl-4 md:flex-row md:items-center md:justify-between md:gap-8 md:pl-5">
              <span aria-hidden className="absolute left-0 top-6 bottom-6 w-px bg-white/12" />
              <div className="flex min-w-0 flex-1 items-start gap-4 md:gap-6">
                <div className="relative mt-0.5 flex h-[52px] w-[52px] shrink-0 items-center justify-center p-1.5">
                  <Image
                    src="/soft/linux-tux.png"
                    alt=""
                    width={104}
                    height={104}
                    className="h-full w-full scale-110 object-contain invert-[0.92] brightness-110 contrast-105"
                    sizes="52px"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-lg font-medium tracking-[-0.02em] text-zinc-200 md:text-xl">{copy.linuxLabel}</p>
                  <p className="mt-1 font-mono text-[12px] text-zinc-500">{copy.linuxMeta}</p>
                </div>
              </div>
              <span className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500 md:w-auto">
                {copy.comingSoon}
              </span>
            </div>
          </div>
        </div>
      </section>

      <p className="text-sm text-zinc-400">
        {copy.supportLabel}{" "}
        <a href="https://t.me/amidioo" target="_blank" rel="noreferrer" className="text-zinc-200 underline hover:text-white">
          https://t.me/amidioo
        </a>
      </p>
    </div>
  );
}
