import { Link } from "react-router";

import { tr, useLang } from "~/lib/i18n";

export function ContactCta() {
  const { lang } = useLang();

  return (
    <section className="bg-ink-900 text-washi px-5 py-16 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-[1040px] grid-cols-1 items-end gap-12 md:grid-cols-[1fr_auto] md:gap-14">
        <div>
          <div className="text-shu-300 mb-6 font-mono text-[11px] tracking-[0.22em] uppercase">
            {tr(lang, "home.cta.eyebrow")}
          </div>
          <h2 className="font-display text-washi m-0 text-[40px] leading-[1.12] font-normal tracking-[-0.01em] md:text-[56px]">
            {tr(lang, "home.cta.h2")}
          </h2>
          <p className="text-ink-300 mt-6 max-w-[580px] font-sans text-[16px] leading-[1.7]">
            {tr(lang, "home.cta.body")}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link
            to="/contact"
            className="bg-accent text-fg-on-accent inline-flex h-13 items-center rounded-sm px-7 font-sans text-[14px] tracking-[0.02em] whitespace-nowrap no-underline"
          >
            {tr(lang, "home.cta.button")}
          </Link>
        </div>
      </div>
    </section>
  );
}
