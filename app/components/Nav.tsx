import { Link } from "react-router";

import { tr, useLang } from "~/lib/i18n";

export function Nav() {
  const { lang, setLang } = useLang();

  return (
    <header className="border-hairline bg-bg/92 sticky top-0 z-50 flex h-[72px] items-stretch gap-8 border-b px-5 backdrop-blur-sm [@media(min-width:1101px)]:px-12">
      <Link
        to="/"
        className="flex items-center gap-3 no-underline"
      >
        <span className="font-display text-fg text-[22px] leading-none tracking-[0.04em]">
          {tr(lang, "nav.brandKanji")}
        </span>
        <span className="border-hairline text-fg-muted border-l pl-3 font-mono text-[10px] leading-none tracking-[0.26em] uppercase">
          {tr(lang, "nav.brandEn")}
        </span>
      </Link>
      <div className="ml-auto flex items-center gap-3.5">
        <button
          type="button"
          onClick={() => setLang(lang === "jp" ? "en" : "jp")}
          className="text-fg-muted cursor-pointer border-0 bg-transparent font-mono text-[11px] tracking-[0.14em]"
          aria-label="Toggle language"
        >
          <span className={lang === "jp" ? "text-fg" : "text-fg-muted"}>
            {tr(lang, "nav.langJp")}
          </span>
          <span className="mx-1.5 opacity-50">{tr(lang, "nav.langSeparator")}</span>
          <span className={lang === "en" ? "text-fg" : "text-fg-muted"}>
            {tr(lang, "nav.langEn")}
          </span>
        </button>
        <Link
          to="/contact"
          className="bg-accent text-fg-on-accent inline-flex h-9 items-center rounded-sm px-4 font-sans text-[13px] tracking-[0.02em] whitespace-nowrap no-underline"
        >
          <span className="[@media(max-width:780px)]:hidden">{tr(lang, "nav.ctaLong")}</span>
          <span className="hidden [@media(max-width:780px)]:inline">
            {tr(lang, "nav.ctaShort")}
          </span>
        </Link>
      </div>
    </header>
  );
}
