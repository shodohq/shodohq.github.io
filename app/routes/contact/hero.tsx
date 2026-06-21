import { tr, useLang } from "~/lib/i18n";

export function ContactHero() {
  const { lang } = useLang();
  return (
    <section className="border-hairline border-b px-5 pt-12 pb-12 md:px-12 md:pt-24 md:pb-18">
      <div className="mx-auto max-w-[1240px]">
        <div className="text-fg-muted mb-7 flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] uppercase">
          <span className="bg-ink-700 inline-block h-px w-6" />
          {tr(lang, "contact.hero.eyebrow")}
        </div>
        <h1 className="font-display text-fg m-0 max-w-[1000px] text-[clamp(34px,5vw,72px)] leading-[1.08] font-normal tracking-[-0.012em]">
          {tr(lang, "contact.hero.h2")}
        </h1>
        <p className="text-ink-700 mt-8 max-w-[720px] font-sans text-[17px] leading-[1.7]">
          {tr(lang, "contact.hero.body")}
        </p>
        <p className="text-fg-muted mt-4.5 max-w-[720px] font-sans text-[14px] leading-[1.7]">
          {tr(lang, "contact.hero.note")}
        </p>
      </div>
    </section>
  );
}
