"use client";

import { useState } from "react";
import { tr, useLang } from "@/lib/i18n";

type ActiveKey = "home" | "company" | "contact";

export function Nav({ active }: { active?: ActiveKey }) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  const items: Array<[string, string, ActiveKey]> = [
    [tr(lang, "nav.company"), "/company", "company"],
  ];

  const withLang = (href: string) => {
    if (lang !== "en") return href;
    if (href.includes("#")) return href.replace("#", "?lang=en#");
    return `${href}?lang=en`;
  };

  return (
    <>
      <header
        style={{
          height: 72,
          borderBottom: "1px solid var(--hairline)",
          display: "flex",
          alignItems: "stretch",
          padding: "0 48px",
          gap: 32,
          background: "rgba(250, 247, 241, 0.92)",
          backdropFilter: "saturate(140%)",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <a
          href={withLang("/")}
          style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}
        >
          <span
            style={{
              font: "500 22px var(--font-display)",
              color: "var(--fg)",
              letterSpacing: "0.04em",
              lineHeight: 1,
            }}
          >
            衝動
          </span>
          <span
            style={{
              borderLeft: "1px solid var(--hairline)",
              paddingLeft: 12,
              font: "500 10px var(--font-mono)",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "var(--fg-muted)",
              lineHeight: 1,
            }}
          >
            Shodo
          </span>
        </a>
        <nav
          data-desktop-nav
          style={{ display: "flex", alignItems: "stretch", gap: 28, marginLeft: 16 }}
        >
          {items.map(([label, href, key]) => {
            const isActive = active === key;
            return (
              <a
                key={key}
                href={withLang(href)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  font: "500 13px var(--font-sans)",
                  letterSpacing: "0.02em",
                  color: isActive ? "var(--fg)" : "var(--fg-muted)",
                  whiteSpace: "nowrap",
                  borderBottom: isActive ? "1px solid var(--ink-900)" : "1px solid transparent",
                  marginBottom: -1,
                }}
              >
                {label}
              </a>
            );
          })}
        </nav>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 14 }}>
          <button
            type="button"
            data-lang-toggle
            onClick={() => setLang(lang === "jp" ? "en" : "jp")}
            style={{
              background: "transparent",
              border: 0,
              cursor: "pointer",
              font: "500 11px var(--font-mono)",
              letterSpacing: "0.14em",
              color: "var(--fg-muted)",
            }}
            aria-label="Toggle language"
          >
            <span style={{ color: lang === "jp" ? "var(--fg)" : "var(--fg-muted)" }}>JP</span>
            <span style={{ margin: "0 6px", opacity: 0.5 }}>·</span>
            <span style={{ color: lang === "en" ? "var(--fg)" : "var(--fg-muted)" }}>EN</span>
          </button>
          <a
            href={withLang("/contact")}
            data-cta
            style={{
              height: 36,
              padding: "0 16px",
              background: "var(--accent)",
              color: "var(--washi)",
              border: 0,
              borderRadius: "var(--r-1)",
              font: "500 13px var(--font-sans)",
              cursor: "pointer",
              letterSpacing: "0.02em",
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            <span data-cta-long>{tr(lang, "cta.poc")}</span>
            <span data-cta-short style={{ display: "none" }}>
              {tr(lang, "cta.pocShort")}
            </span>
          </a>
          <button
            type="button"
            data-mobile-nav-trigger
            data-open={open ? "true" : "false"}
            onClick={() => setOpen(!open)}
            aria-label={tr(lang, "nav.menu")}
          >
            <span />
          </button>
        </div>
      </header>
      <div data-mobile-nav-drawer data-open={open ? "true" : "false"}>
        {items.map(([label, href, key]) => (
          <a
            key={key}
            href={withLang(href)}
            data-active={active === key ? "true" : "false"}
          >
            {label}
          </a>
        ))}
        <a
          href={withLang("/contact")}
          data-active={active === "contact" ? "true" : "false"}
        >
          {tr(lang, "nav.contact")}
        </a>
        <button
          type="button"
          onClick={() => setLang(lang === "jp" ? "en" : "jp")}
          style={{
            margin: "12px 0 0",
            padding: "14px 4px",
            background: "transparent",
            border: 0,
            borderTop: "1px solid var(--hairline)",
            cursor: "pointer",
            textAlign: "left",
            font: "500 12px var(--font-mono)",
            letterSpacing: "0.2em",
            color: "var(--fg-muted)",
          }}
        >
          <span style={{ color: lang === "jp" ? "var(--fg)" : "var(--fg-muted)" }}>JP</span>
          <span style={{ margin: "0 8px", opacity: 0.5 }}>·</span>
          <span style={{ color: lang === "en" ? "var(--fg)" : "var(--fg-muted)" }}>EN</span>
        </button>
      </div>
    </>
  );
}
