import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = getDictionary(locale);

  return (
    <>
      <SiteHeader locale={locale} copy={copy} />
      <main className="relative z-10 apple-body mx-auto max-w-7xl px-6 py-12 md:px-10">{children}</main>
    </>
  );
}
