"use client";

import { tr, useLang } from "@/lib/i18n";

export function Footer() {
  const { lang } = useLang();
  const cols = [
    {
      t: tr(lang, "footer.companyCol"),
      items: [
        [tr(lang, "footer.companyInfo"), "/company"],
        [tr(lang, "footer.news"), "#"],
        [tr(lang, "footer.careers"), "#"],
      ] as const,
    },
    {
      t: tr(lang, "footer.contactCol"),
      items: [
        [tr(lang, "footer.poc"), "/contact"],
        [tr(lang, "footer.partners"), "/contact"],
        ["contact@shodohq.com", "mailto:contact@shodohq.com"],
      ] as const,
    },
  ];
  const withLang = (href: string) => {
    if (lang !== "en") return href;
    if (href.startsWith("mailto:") || href === "#") return href;
    return `${href}?lang=en`;
  };
  return (
    <footer style={{ padding: "80px 48px 36px", borderTop: "1px solid var(--hairline)", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1.1fr", gap: 48 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <span style={{ font: "500 22px var(--font-display)", letterSpacing: "0.04em" }}>衝動</span>
            <span style={{ borderLeft: "1px solid var(--hairline)", paddingLeft: 12, font: "500 10px var(--font-mono)", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--fg-muted)" }}>
              {tr(lang, "footer.brand")}
            </span>
          </div>
          <p style={{ maxWidth: 360, font: "400 13px/1.65 var(--font-sans)", color: "var(--ink-700)" }}>
            {tr(lang, "footer.tagline")}
          </p>
          <p style={{ marginTop: 12, maxWidth: 360, font: "400 12px/1.6 var(--font-sans)", color: "var(--fg-muted)" }}>
            {tr(lang, "footer.subtag")}
            <br />
            {tr(lang, "footer.location")}
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.t}>
            <div style={{ font: "500 10px var(--font-mono)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 16 }}>
              {c.t}
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {c.items.map(([x, href]) => (
                <li key={x}>
                  <a href={withLang(href)} style={{ font: "400 13px var(--font-sans)", color: "var(--fg)", textDecoration: "none" }}>
                    {x}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1240, margin: "56px auto 0", paddingTop: 20, borderTop: "1px solid var(--hairline)", display: "flex", justifyContent: "space-between", font: "500 11px var(--font-mono)", letterSpacing: "0.1em", color: "var(--fg-muted)", textTransform: "uppercase" }}>
        <span>{tr(lang, "footer.copy")}</span>
        <span>{tr(lang, "footer.legal")}</span>
      </div>
    </footer>
  );
}
