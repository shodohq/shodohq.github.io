import { tr, useLang } from "~/lib/i18n";

export function Problem() {
  const { lang } = useLang();
  const blocks = [
    {
      jp: tr(lang, "home.problem.b1jp"),
      en: tr(lang, "home.problem.b1en"),
      body: tr(lang, "home.problem.b1body"),
    },
    {
      jp: tr(lang, "home.problem.b2jp"),
      en: tr(lang, "home.problem.b2en"),
      body: tr(lang, "home.problem.b2body"),
    },
    {
      jp: tr(lang, "home.problem.b3jp"),
      en: tr(lang, "home.problem.b3en"),
      body: tr(lang, "home.problem.b3body"),
    },
  ];
  const l1 = tr(lang, "home.problem.h2l1");
  const l2 = tr(lang, "home.problem.h2l2");
  const em = tr(lang, "home.problem.h2em");
  const l3 = tr(lang, "home.problem.h2l3");
  const dot = tr(lang, "home.problem.h2dot");

  return (
    <section className="border-hairline border-b px-12 py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-[320px_1fr] md:gap-20">
          <div>
            <div className="text-fg-muted mb-3.5 font-mono text-[11px] tracking-[0.18em] uppercase">
              {tr(lang, "home.problem.eyebrow")}
            </div>
            <h2 className="font-display text-fg m-0 text-[40px] leading-[1.2] font-normal">
              {l1}
              <br />
              {l2}
              {l3 ? (
                <>
                  <span className="text-shu">{em}</span>
                  {l3}
                  <br />
                  {dot}
                </>
              ) : (
                <>
                  <br />
                  <span className="text-shu">{em}</span>
                  {dot}
                </>
              )}
            </h2>
          </div>
          <p className="text-ink-700 max-w-[540px] self-end font-sans text-[16px] leading-[1.7]">
            {tr(lang, "home.problem.body")}
          </p>
        </div>
        <div className="border-ink-700 grid grid-cols-1 border-t md:grid-cols-3">
          {blocks.map((b, i) => (
            <div
              key={b.jp}
              className={`border-hairline border-b px-7 pt-8 pb-9 md:border-b-0 ${
                i !== 2 ? "md:border-hairline md:border-r" : ""
              }`}
            >
              <div className="text-shu font-mono text-[10px] tracking-[0.16em]">0{i + 1}</div>
              <div className="font-display text-fg mt-4.5 text-[22px] font-medium">{b.jp}</div>
              <div className="text-fg-muted mt-1 font-mono text-[11px] tracking-[0.14em] uppercase">
                {b.en}
              </div>
              <p className="text-ink-700 mt-4.5 font-sans text-[14px] leading-[1.7]">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
