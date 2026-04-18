import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

type CustomScoreProps = {
  params: Promise<{ locale: string }>;
};

export default async function CustomScorePage({ params }: CustomScoreProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = getDictionary(locale);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">{copy.customScore.title}</h1>
      <p className="max-w-2xl text-zinc-300">{copy.customScore.body}</p>
      <a
        href="mailto:hello@dimadmusic.com"
        className="inline-block rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-900"
      >
        {copy.customScore.cta}
      </a>
    </div>
  );
}
