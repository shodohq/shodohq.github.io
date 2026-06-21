import { tr, useLang } from "~/lib/i18n";

export function Company() {
  const { lang } = useLang();
  const rows = [
    { k: tr(lang, "home.company.k1"), v: tr(lang, "home.company.v1") },
    { k: tr(lang, "home.company.k2"), v: tr(lang, "home.company.v2") },
    { k: tr(lang, "home.company.k3"), v: tr(lang, "home.company.v3") },
    { k: tr(lang, "home.company.k4"), v: tr(lang, "home.company.v4") },
  ];

  return (
    <section
      id="company"
      className="border-hairline scroll-mt-6 border-b px-5 py-16 md:px-12 md:py-28"
    >
      <div className="mx-auto grid max-w-[1040px] grid-cols-1 items-center gap-12 md:grid-cols-[1fr_1.1fr] md:gap-20">
        <div>
          <div className="text-fg-muted mb-3.5 font-mono text-[11px] tracking-[0.2em] uppercase">
            {tr(lang, "home.company.eyebrow")}
          </div>
          <h2 className="font-display text-fg m-0 max-w-[420px] text-[26px] leading-[1.25] font-normal md:text-[36px]">
            {tr(lang, "home.company.h2")}
          </h2>
        </div>
        <div className="border-ink-700 border-t">
          {rows.map((r) => (
            <div
              key={r.k}
              className="border-hairline grid grid-cols-1 items-baseline gap-2 border-b py-4.5 md:grid-cols-[140px_1fr] md:gap-6"
            >
              <span className="text-fg-muted font-mono text-[11px] tracking-[0.12em] uppercase">
                {r.k}
              </span>
              <span className="text-fg font-sans text-[15px]">{r.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
