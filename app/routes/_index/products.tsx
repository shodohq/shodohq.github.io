import { tr, useLang } from "~/lib/i18n";

export function Products() {
  const { lang } = useLang();
  const products = [
    {
      tag: tr(lang, "home.products.p1tag"),
      name: tr(lang, "home.products.p1name"),
      role: tr(lang, "home.products.p1role"),
      layers: [
        tr(lang, "home.products.p1layer1"),
        tr(lang, "home.products.p1layer2"),
        tr(lang, "home.products.p1layer3"),
      ],
      body: tr(lang, "home.products.p1body"),
    },
    {
      tag: tr(lang, "home.products.p2tag"),
      name: tr(lang, "home.products.p2name"),
      role: tr(lang, "home.products.p2role"),
      layers: [tr(lang, "home.products.p2layer1"), tr(lang, "home.products.p2layer2")],
      body: tr(lang, "home.products.p2body"),
    },
  ];
  const l1 = tr(lang, "home.products.h2l1");
  const l2 = tr(lang, "home.products.h2l2");
  const em = tr(lang, "home.products.h2em");
  const dot = tr(lang, "home.products.h2dot");

  return (
    <section
      id="products"
      className="border-hairline scroll-mt-6 border-b px-5 py-16 md:px-12 md:py-30"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-10 grid grid-cols-1 gap-6 md:mb-14 md:grid-cols-[320px_1fr] md:gap-20">
          <div>
            <div className="text-fg-muted mb-3.5 font-mono text-[11px] tracking-[0.18em] uppercase">
              {tr(lang, "home.products.eyebrow")}
            </div>
            <h2 className="font-display text-fg m-0 text-[28px] leading-[1.2] font-normal md:text-[40px]">
              {l1}
              <br />
              {l2}
              <span className="text-shu">{em}</span>
              {dot}
            </h2>
          </div>
          <p className="text-ink-700 max-w-[540px] self-end font-sans text-[16px] leading-[1.7]">
            {tr(lang, "home.products.body")}
          </p>
        </div>
        <div className="border-ink-700 border-hairline grid grid-cols-1 border-t border-b md:grid-cols-2">
          {products.map((p, i) => (
            <article
              key={p.name}
              className={`flex flex-col gap-0 px-9 pt-10 pb-11 ${
                i === 0 ? "md:border-hairline md:border-r" : ""
              }`}
            >
              <div className="text-shu font-mono text-[10px] tracking-[0.18em] uppercase">
                {p.tag}
              </div>
              <div className="font-display text-fg mt-4 text-[28px] font-medium tracking-[0.005em]">
                {p.name}
              </div>
              <div className="text-ink-700 mt-2 font-sans text-[15px] leading-[1.6] font-normal">
                {p.role}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="text-fg-muted mr-1 font-mono text-[10px] tracking-[0.14em] uppercase">
                  {tr(lang, "home.products.layersLabel")}
                </span>
                {p.layers.map((l) => (
                  <span
                    key={l}
                    className="rounded-pill border-line bg-bg text-fg border px-3 py-1 font-sans text-[12px] font-medium"
                  >
                    {l}
                  </span>
                ))}
              </div>
              <p className="border-hairline text-ink-700 mt-6 border-t pt-5 font-sans text-[14px] leading-[1.7]">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
