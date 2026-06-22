import { Link } from "react-router";

import { useLang } from "~/lib/i18n";
import { tr } from "~/lib/i18n";

export function Footer() {
  const { lang } = useLang();

  const cols: { title: string; items: [string, string][] }[] = [
    {
      title: tr(lang, "footer.companyCol"),
      items: [
        [tr(lang, "footer.companyInfo"), "/#company"],
        [tr(lang, "footer.news"), "#"],
        [tr(lang, "footer.careers"), "#"],
      ],
    },
    {
      title: tr(lang, "footer.contactCol"),
      items: [
        [tr(lang, "footer.poc"), "/contact"],
        [tr(lang, "footer.partners"), "/contact"],
        ["contact@shodohq.com", "mailto:contact@shodohq.com"],
      ],
    },
  ];

  return (
    <footer className="border-hairline bg-bg border-t px-5 pt-12 pb-7 md:px-12 md:pt-20 md:pb-9">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1.1fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="font-display text-fg text-[22px] tracking-[0.04em]">
              {tr(lang, "nav.brandKanji")}
            </span>
            <span className="border-hairline text-fg-muted border-l pl-3 font-mono text-[10px] tracking-[0.26em] uppercase">
              {tr(lang, "footer.brand")}
            </span>
          </div>
          <p className="text-ink-700 max-w-[360px] font-sans text-[13px] leading-[1.65]">
            {tr(lang, "footer.tagline")}
          </p>
          <p className="text-fg-muted mt-3 max-w-[360px] font-sans text-[12px] leading-[1.6]">
            {tr(lang, "footer.subtag")}
            <br />
            {tr(lang, "footer.location")}
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-fg-muted mb-4 font-mono text-[10px] tracking-[0.18em] uppercase">
              {c.title}
            </div>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              {c.items.map(([label, href]) => {
                const isExternal = href.startsWith("http") || href.startsWith("mailto:");
                const isAnchor = href.startsWith("#");
                const className = "font-sans text-[13px] text-fg no-underline hover:underline";
                if (isExternal || isAnchor) {
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        className={className}
                      >
                        {label}
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={label}>
                    <Link
                      to={href}
                      className={className}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-hairline text-fg-muted mx-auto mt-14 flex max-w-[1240px] flex-col gap-2 border-t pt-5 font-mono text-[11px] tracking-[0.1em] uppercase md:flex-row md:justify-between">
        <span>{tr(lang, "footer.copy")}</span>
        <span>{tr(lang, "footer.legal")}</span>
      </div>
    </footer>
  );
}
