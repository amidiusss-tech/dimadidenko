import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

type AboutProps = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: AboutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = getDictionary(locale);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">{copy.about.title}</h1>
      <p className="max-w-3xl text-zinc-300">{copy.about.body}</p>
    </div>
  );
}
