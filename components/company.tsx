"use client";

import { tr, useLang } from "@/lib/i18n";

export function CompanyHero() {
  const { lang } = useLang();
  return (
    <section style={{ padding: "112px 48px 88px", borderBottom: "1px solid var(--hairline)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 360px", gap: 80, alignItems: "end" }}>
        <div>
          <div style={{ font: "500 11px var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 28, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ display: "inline-block", width: 24, height: 1, background: "var(--ink-700)" }} />
            {tr(lang, "co.hero.eyebrow")}
          </div>
          <h1 style={{ font: "400 76px/1.08 var(--font-display)", letterSpacing: "-0.012em", color: "var(--fg)", margin: 0 }}>
            {lang === "en" ? (
              <>
                A society that can still
                <br />
                <span style={{ color: "var(--accent)" }}>decide</span> in a crisis.
              </>
            ) : (
              <>
                危機の中でも、
                <br />
                <span style={{ color: "var(--accent)" }}>判断できる</span>社会を。
              </>
            )}
          </h1>
          <p style={{ marginTop: 32, maxWidth: 560, font: "400 17px/1.7 var(--font-sans)", color: "var(--ink-700)" }}>
            {tr(lang, "co.hero.body")}
          </p>
        </div>
        {lang === "jp" && (
          <aside
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              font: "500 16px var(--font-jp-serif)",
              letterSpacing: "0.3em",
              color: "var(--fg)",
              borderLeft: "1px solid var(--hairline)",
              padding: "0 20px 0 24px",
              height: 360,
              lineHeight: 2,
              justifySelf: "end",
            }}
          >
            {tr(lang, "co.hero.aside")}
          </aside>
        )}
      </div>
    </section>
  );
}

export function CompanyPurpose() {
  const { lang } = useLang();
  return (
    <section style={{ padding: "120px 48px", background: "var(--ink-900)", color: "var(--washi)", borderBottom: "1px solid var(--hairline)" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <div style={{ font: "500 11px var(--font-mono)", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--shu-300)", marginBottom: 24 }}>
          {tr(lang, "co.purpose.eyebrow")}
        </div>
        <blockquote style={{ font: "400 48px/1.4 var(--font-display)", color: "var(--washi)", margin: 0, letterSpacing: "-0.005em", maxWidth: 880 }}>
          <span style={{ color: "var(--shu-300)" }}>{lang === "en" ? "\"" : "「"}</span>
          {tr(lang, "co.purpose.q.l1")}
          <br />
          {tr(lang, "co.purpose.q.l2.pre")}
          <em style={{ fontStyle: "normal", color: "var(--shu-400)" }}>{tr(lang, "co.purpose.q.l2.em")}</em>
          {tr(lang, "co.purpose.q.l2.post")}
          <span style={{ color: "var(--shu-300)" }}>{lang === "en" ? "\"" : "」"}</span>
        </blockquote>
      </div>
    </section>
  );
}

export function CompanyWhat() {
  const { lang } = useLang();
  const pillars = [
    { id: "01", jp: tr(lang, "co.what.p1.jp"), en: tr(lang, "co.what.p1.en"), body: tr(lang, "co.what.p1.body") },
    { id: "02", jp: tr(lang, "co.what.p2.jp"), en: tr(lang, "co.what.p2.en"), body: tr(lang, "co.what.p2.body") },
  ];
  return (
    <section style={{ padding: "120px 48px", borderBottom: "1px solid var(--hairline)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ font: "500 11px var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 14 }}>
          {tr(lang, "co.what.eyebrow")}
        </div>
        <h2 style={{ font: "400 44px/1.15 var(--font-display)", color: "var(--fg)", margin: 0, marginBottom: 48 }}>
          {tr(lang, "co.what.h2.pre")}
          <span style={{ color: "var(--accent)" }}>{tr(lang, "co.what.h2.em")}</span>
          {tr(lang, "co.what.h2.post")}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0, borderTop: "1px solid var(--ink-700)" }}>
          {pillars.map((p, i) => (
            <div
              key={p.id}
              style={{
                padding: "40px 32px 44px",
                borderRight: i !== 1 ? "1px solid var(--hairline)" : 0,
              }}
            >
              <div style={{ font: "500 11px var(--font-mono)", color: "var(--accent)", letterSpacing: "0.18em" }}>{p.id}</div>
              <div style={{ marginTop: 20, font: "500 28px var(--font-display)", color: "var(--fg)" }}>{p.jp}</div>
              <div style={{ marginTop: 4, font: "500 11px var(--font-mono)", color: "var(--fg-muted)", letterSpacing: "0.14em", textTransform: "uppercase" }}>{p.en}</div>
              <p style={{ marginTop: 20, font: "400 14px/1.75 var(--font-sans)", color: "var(--ink-700)", maxWidth: 480 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CompanyPrinciples() {
  const { lang } = useLang();
  const principles = [
    { jp: tr(lang, "co.p1.jp"), en: tr(lang, "co.p1.en"), body: tr(lang, "co.p1.body") },
    { jp: tr(lang, "co.p2.jp"), en: tr(lang, "co.p2.en"), body: tr(lang, "co.p2.body") },
    { jp: tr(lang, "co.p3.jp"), en: tr(lang, "co.p3.en"), body: tr(lang, "co.p3.body") },
    { jp: tr(lang, "co.p4.jp"), en: tr(lang, "co.p4.en"), body: tr(lang, "co.p4.body") },
    { jp: tr(lang, "co.p5.jp"), en: tr(lang, "co.p5.en"), body: tr(lang, "co.p5.body") },
  ];
  return (
    <section style={{ padding: "120px 48px", borderBottom: "1px solid var(--hairline)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ font: "500 11px var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 14 }}>
          {tr(lang, "co.principles.eyebrow")}
        </div>
        <h2 style={{ font: "400 44px/1.15 var(--font-display)", color: "var(--fg)", margin: 0, marginBottom: 56 }}>
          {tr(lang, "co.principles.h2")}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0, borderTop: "1px solid var(--ink-700)" }}>
          {principles.map((p, i) => (
            <div
              key={p.jp}
              style={{
                padding: "28px 20px 32px",
                borderRight: i !== 4 ? "1px solid var(--hairline)" : 0,
              }}
            >
              <div style={{ font: "500 10px var(--font-mono)", color: "var(--accent)", letterSpacing: "0.16em" }}>0{i + 1}</div>
              <div style={{ marginTop: 18, font: "500 18px var(--font-sans)", color: "var(--fg)" }}>{p.jp}</div>
              <div style={{ marginTop: 4, font: "500 11px var(--font-mono)", color: "var(--fg-muted)", letterSpacing: "0.14em", textTransform: "uppercase" }}>{p.en}</div>
              <p style={{ marginTop: 14, font: "400 13px/1.7 var(--font-sans)", color: "var(--ink-700)" }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CompanyInfo() {
  const { lang } = useLang();
  const rows: Array<[string, string]> = [
    [tr(lang, "co.info.r1.k"), tr(lang, "co.info.r1.v")],
    [tr(lang, "co.info.r2.k"), tr(lang, "co.info.r2.v")],
    [tr(lang, "co.info.r3.k"), tr(lang, "co.info.r3.v")],
    [tr(lang, "co.info.r4.k"), tr(lang, "co.info.r4.v")],
    [tr(lang, "co.info.r5.k"), tr(lang, "co.info.r5.v")],
    [tr(lang, "co.info.r6.k"), tr(lang, "co.info.r6.v")],
    [tr(lang, "co.info.r7.k"), tr(lang, "co.info.r7.v")],
  ];
  return (
    <section style={{ padding: "120px 48px", background: "var(--bg-sunken)", borderBottom: "1px solid var(--hairline)" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <div style={{ font: "500 11px var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 14 }}>
          {tr(lang, "co.info.eyebrow")}
        </div>
        <h2 style={{ font: "400 36px/1.2 var(--font-display)", color: "var(--fg)", margin: 0, marginBottom: 40 }}>{tr(lang, "co.info.h2")}</h2>
        <div style={{ borderTop: "1px solid var(--ink-700)" }}>
          {rows.map(([k, v]) => (
            <div
              key={k}
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: 32,
                padding: "20px 4px",
                borderBottom: "1px solid var(--hairline)",
              }}
            >
              <span style={{ font: "500 11px var(--font-mono)", color: "var(--fg-muted)", letterSpacing: "0.14em", textTransform: "uppercase" }}>{k}</span>
              <span style={{ font: "400 15px var(--font-sans)", color: "var(--fg)" }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
