import { tr, useLang } from "~/lib/i18n";

export function UseCases() {
  const { lang } = useLang();
  const cases = [
    { q: tr(lang, "home.useCases.q1"), product: tr(lang, "home.products.p1name") },
    { q: tr(lang, "home.useCases.q2"), product: tr(lang, "home.products.p1name") },
    { q: tr(lang, "home.useCases.q3"), product: tr(lang, "home.products.p2name") },
    { q: tr(lang, "home.useCases.q4"), product: tr(lang, "home.products.p2name") },
  ];

  return (
    <section className="border-hairline bg-bg-sunken border-b px-12 py-30">
      <div className="mx-auto max-w-[1240px]">
        <div className="text-fg-muted mb-3.5 font-mono text-[11px] tracking-[0.2em] uppercase">
          {tr(lang, "home.useCases.eyebrow")}
        </div>
        <h2 className="font-display text-fg m-0 mb-3 text-[40px] leading-[1.2] font-normal">
          {tr(lang, "home.useCases.h2")}
        </h2>
        <p className="text-ink-700 mt-3 max-w-[560px] font-sans text-[16px] leading-[1.7]">
          {tr(lang, "home.useCases.body")}
        </p>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {cases.map((c, i) => (
            <article
              key={i}
              className="border-line bg-surface flex flex-col gap-4.5 rounded-sm border px-7 pt-7 pb-6"
            >
              <div className="flex items-baseline gap-3.5">
                <span className="text-shu font-mono text-[11px] tracking-[0.14em]">0{i + 1}</span>
                <p className="font-display text-fg m-0 text-[19px] leading-[1.5] font-medium">
                  {c.q}
                </p>
              </div>
              <div className="border-hairline mt-auto flex items-center gap-2 border-t pt-4">
                <span className="bg-shu h-1.25 w-1.25 rounded-full" />
                <span className="text-ink-700 font-mono text-[12px] tracking-[0.06em]">
                  {c.product}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
