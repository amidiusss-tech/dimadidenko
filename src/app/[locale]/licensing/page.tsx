import { notFound } from "next/navigation";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

type LicensingProps = {
  params: Promise<{ locale: string }>;
};

export default async function LicensingPage({ params }: LicensingProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = getDictionary(locale);

  return (
    <div className="space-y-10">
      <RevealOnScroll>
        <section className="space-y-3">
          <h1 className="apple-title font-semibold text-zinc-100">{copy.licensing.title}</h1>
          <p className="apple-lead max-w-3xl text-zinc-300/90">{copy.licensing.subtitle}</p>
        </section>
      </RevealOnScroll>

      <RevealOnScroll delayMs={80}>
        <section className="grid gap-5 md:grid-cols-3">
          {copy.licensing.plans.map((plan, index) => (
            <RevealOnScroll key={plan.name} delayMs={index * 70}>
              <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition hover:-translate-y-0.5 hover:border-white/20">
                <h2 className="text-xl font-semibold text-zinc-100">{plan.name}</h2>
                <p className="mt-2 text-sm font-medium text-zinc-200">{plan.price}</p>
                <ul className="apple-body mt-4 space-y-2 text-zinc-300/95">
                  {plan.bullets.map((line) => (
                    <li key={line}>- {line}</li>
                  ))}
                </ul>
              </article>
            </RevealOnScroll>
          ))}
        </section>
      </RevealOnScroll>
    </div>
  );
}
