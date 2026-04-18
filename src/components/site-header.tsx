import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Locale } from "@/i18n/config";
import { Dictionary } from "@/i18n/dictionary";

type SiteHeaderProps = {
  locale: Locale;
  copy: Dictionary;
};

export function SiteHeader({ locale, copy }: SiteHeaderProps) {
  const links = [
    { href: `/${locale}/catalog`, label: copy.header.catalog },
    { href: `/${locale}/licensing`, label: copy.header.licensing },
    { href: `/${locale}/custom-score`, label: copy.header.customScore },
    { href: `/${locale}/about`, label: copy.header.about }
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-black/45 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <Link href={`/${locale}`} className="text-base font-semibold tracking-tight text-zinc-100">
          {copy.brand}
        </Link>
        <div className="flex items-center gap-5">
          <nav className="hidden items-center gap-2 text-sm text-zinc-300 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-transparent px-3 py-1 transition hover:border-white/15 hover:bg-white/5 hover:text-white/95"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher locale={locale} localeLabel={copy.localeLabel} />
        </div>
      </div>
    </header>
  );
}
