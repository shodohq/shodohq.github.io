import { tr, useLang } from "~/lib/i18n";

export function Platform() {
  const { lang } = useLang();
  const steps = [
    {
      n: tr(lang, "home.platform.s1n"),
      key: tr(lang, "home.platform.s1key"),
      jp: tr(lang, "home.platform.s1jp"),
      body: tr(lang, "home.platform.s1body"),
    },
    {
      n: tr(lang, "home.platform.s2n"),
      key: tr(lang, "home.platform.s2key"),
      jp: tr(lang, "home.platform.s2jp"),
      body: tr(lang, "home.platform.s2body"),
    },
    {
      n: tr(lang, "home.platform.s3n"),
      key: tr(lang, "home.platform.s3key"),
      jp: tr(lang, "home.platform.s3jp"),
      body: tr(lang, "home.platform.s3body"),
    },
    {
      n: tr(lang, "home.platform.s4n"),
      key: tr(lang, "home.platform.s4key"),
      jp: tr(lang, "home.platform.s4jp"),
      body: tr(lang, "home.platform.s4body"),
    },
  ];

  return (
    <section className="border-hairline bg-ink-900 text-washi border-b px-5 py-16 md:px-12 md:py-30">
      <div className="mx-auto max-w-[1240px]">
        <div className="text-shu-300 mb-5.5 font-mono text-[11px] tracking-[0.22em] uppercase">
          {tr(lang, "home.platform.eyebrow")}
        </div>
        <h2 className="font-display text-washi m-0 max-w-[820px] text-[32px] leading-[1.2] font-normal md:text-[44px]">
          {tr(lang, "home.platform.h2")}
        </h2>
        <p className="text-ink-300 mt-5 max-w-[560px] font-sans text-[15px] leading-[1.7]">
          {tr(lang, "home.platform.quote")}
        </p>
        <ol className="border-ink-600 m-0 mt-10 grid list-none grid-cols-1 gap-0 border-t p-0 md:mt-14 md:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={`border-hairline border-b px-6 pt-7 pb-2 md:border-b-0 ${
                i !== 3 ? "md:border-ink-700 md:border-r" : ""
              }`}
            >
              <div className="text-shu-300 font-mono text-[11px] tracking-[0.18em]">{s.n}</div>
              <div className="text-washi mt-4.5 font-mono text-[13px] tracking-[0.16em]">
                {s.key}
              </div>
              <div className="font-display text-washi mt-1.5 text-[22px] font-medium">{s.jp}</div>
              <p className="text-ink-300 mt-4 font-sans text-[13px] leading-[1.7]">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
