import { tr, useLang } from "~/lib/i18n";

export function WhyNow() {
  const { lang } = useLang();
  const cards = [
    {
      n: tr(lang, "home.whyNow.c1head"),
      stat: tr(lang, "home.whyNow.c1stat"),
      body: tr(lang, "home.whyNow.c1body"),
      src: tr(lang, "home.whyNow.c1src"),
      note: null as string | null,
    },
    {
      n: tr(lang, "home.whyNow.c2head"),
      stat: tr(lang, "home.whyNow.c2stat"),
      body: tr(lang, "home.whyNow.c2body"),
      src: tr(lang, "home.whyNow.c2src"),
      note: tr(lang, "home.whyNow.c2note"),
    },
    {
      n: tr(lang, "home.whyNow.c3head"),
      stat: tr(lang, "home.whyNow.c3stat"),
      body: tr(lang, "home.whyNow.c3body"),
      src: tr(lang, "home.whyNow.c3src"),
      note: null as string | null,
    },
  ];

  return (
    <section className="border-hairline bg-bg-sunken border-b px-12 py-22">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-10 grid grid-cols-1 items-baseline gap-6 md:grid-cols-[320px_1fr] md:gap-20">
          <div className="text-fg-muted font-mono text-[11px] tracking-[0.18em] uppercase">
            {tr(lang, "home.whyNow.eyebrow")}
          </div>
          <p className="text-ink-700 max-w-[560px] font-sans text-[16px] leading-[1.7]">
            {tr(lang, "home.whyNow.intro")}
          </p>
        </div>
        <div className="border-ink-700 grid grid-cols-1 border-t md:grid-cols-3">
          {cards.map((c, i) => (
            <div
              key={c.n}
              className={`border-hairline flex flex-col border-b px-7 pt-7 pb-7.5 md:border-b-0 ${
                i !== 2 ? "md:border-hairline md:border-r" : ""
              }`}
            >
              <div className="flex items-baseline justify-between">
                <span className="text-fg font-sans text-[11px] font-medium">{c.n}</span>
                <span className="text-fg-muted font-mono text-[10px] tracking-[0.16em]">
                  0{i + 1}
                </span>
              </div>
              <div className="tnum font-display text-fg mt-3.5 text-[40px] leading-none font-normal tracking-[-0.01em]">
                {c.stat}
              </div>
              <p className="text-ink-700 mt-4 font-sans text-[13px] leading-[1.7]">{c.body}</p>
              {c.note && (
                <p className="text-fg-muted mt-3 font-sans text-[12px] leading-[1.6]">{c.note}</p>
              )}
              <div className="text-fg-subtle mt-auto pt-4 font-mono text-[10px] leading-[1.5] tracking-[0.04em]">
                {c.src}
              </div>
            </div>
          ))}
        </div>
        <p className="text-fg-subtle mt-5 max-w-[760px] font-sans text-[11px] leading-[1.6]">
          {tr(lang, "home.whyNow.disclaimer")}
        </p>
      </div>
    </section>
  );
}
