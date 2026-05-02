"use client";

import { tr, useLang } from "@/lib/i18n";

export function PDSWhyGraph() {
  const { lang } = useLang();
  return (
    <section style={{ padding: "120px 48px", background: "var(--bg-sunken)", borderBottom: "1px solid var(--hairline)" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto", display: "grid", gridTemplateColumns: "220px 1fr", gap: 64 }}>
        <div>
          <div style={{ font: "500 11px var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-muted)" }}>
            {tr(lang, "pds.why.eyebrow")}
          </div>
          {lang === "jp" && (
            <aside
              style={{
                marginTop: 64,
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                font: "500 13px var(--font-jp-serif)",
                letterSpacing: "0.3em",
                color: "var(--fg-muted)",
                borderLeft: "1px solid var(--hairline)",
                padding: "0 16px",
                lineHeight: 2,
              }}
            >
              {tr(lang, "pds.why.aside")}
            </aside>
          )}
        </div>
        <div>
          <h2 style={{ font: "400 40px/1.25 var(--font-display)", color: "var(--fg)", margin: 0, maxWidth: 720 }}>
            {tr(lang, "pds.why.h2.l1")}
            <br />
            {tr(lang, "pds.why.h2.l2")}
          </h2>
          <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            <p style={{ font: "400 15px/1.75 var(--font-sans)", color: "var(--ink-700)" }}>{tr(lang, "pds.why.body1")}</p>
            <p style={{ font: "400 15px/1.75 var(--font-sans)", color: "var(--ink-700)" }}>{tr(lang, "pds.why.body2")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PDSTwin() {
  const { lang } = useLang();
  const layers = Array.from({ length: 7 }, (_, i) => ({
    jp: tr(lang, `pds.twin.l${i + 1}.jp`),
    en: tr(lang, `pds.twin.l${i + 1}.en`),
    ex: tr(lang, `pds.twin.l${i + 1}.ex`),
  }));
  return (
    <section style={{ padding: "120px 48px", borderBottom: "1px solid var(--hairline)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <div style={{ font: "500 11px var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 14 }}>
              {tr(lang, "pds.twin.eyebrow")}
            </div>
            <h2 style={{ font: "400 44px/1.15 var(--font-display)", color: "var(--fg)", margin: 0, maxWidth: 540 }}>
              {tr(lang, "pds.twin.h2.l1")}
              <br />
              {tr(lang, "pds.twin.h2.l2")}
              <br />
              {tr(lang, "pds.twin.h2.l3")}
            </h2>
            <p style={{ marginTop: 32, font: "400 15px/1.75 var(--font-sans)", color: "var(--ink-700)", maxWidth: 480 }}>
              {tr(lang, "pds.twin.body")}
            </p>
          </div>
          <div style={{ borderTop: "1px solid var(--ink-700)" }}>
            {layers.map((l, i) => (
              <div
                key={l.jp}
                style={{
                  display: "grid",
                  gridTemplateColumns: "64px 1fr 1.4fr",
                  gap: 24,
                  padding: "20px 4px",
                  borderBottom: "1px solid var(--hairline)",
                  alignItems: "baseline",
                }}
              >
                <span style={{ font: "500 11px var(--font-mono)", color: "var(--accent)", letterSpacing: "0.14em" }}>L{i + 1}</span>
                <div>
                  <div style={{ font: "500 16px var(--font-sans)", color: "var(--fg)" }}>{l.jp}</div>
                  <div style={{ font: "500 10px var(--font-mono)", color: "var(--fg-muted)", letterSpacing: "0.14em", textTransform: "uppercase", marginTop: 2 }}>{l.en}</div>
                </div>
                <div style={{ font: "400 13px/1.6 var(--font-sans)", color: "var(--ink-700)" }}>{l.ex}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PDSWorkflow() {
  const { lang } = useLang();
  const steps = Array.from({ length: 4 }, (_, i) => ({
    n: `0${i + 1}`,
    jp: tr(lang, `pds.wf.s${i + 1}.jp`),
    en: tr(lang, `pds.wf.s${i + 1}.en`),
    body: tr(lang, `pds.wf.s${i + 1}.body`),
  }));
  return (
    <section style={{ padding: "120px 48px", background: "var(--bg-sunken)", borderBottom: "1px solid var(--hairline)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ font: "500 11px var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 14 }}>
          {tr(lang, "pds.wf.eyebrow")}
        </div>
        <h2 style={{ font: "400 44px/1.15 var(--font-display)", color: "var(--fg)", margin: 0, marginBottom: 56 }}>{tr(lang, "pds.wf.h2")}</h2>
        <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderTop: "1px solid var(--ink-700)" }}>
          {steps.map((s, i) => (
            <li
              key={s.n}
              style={{
                padding: "28px 24px 32px",
                borderRight: i !== 3 ? "1px solid var(--hairline)" : 0,
                position: "relative",
              }}
            >
              <div style={{ font: "500 11px var(--font-mono)", color: "var(--accent)", letterSpacing: "0.14em" }}>STEP {s.n}</div>
              <div style={{ marginTop: 18, font: "500 22px var(--font-display)", color: "var(--fg)" }}>{s.jp}</div>
              <div style={{ marginTop: 4, font: "500 11px var(--font-mono)", color: "var(--fg-muted)", letterSpacing: "0.14em", textTransform: "uppercase" }}>{s.en}</div>
              <p style={{ marginTop: 18, font: "400 13px/1.7 var(--font-sans)", color: "var(--ink-700)" }}>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function PDSOutputs() {
  const { lang } = useLang();
  const outputs = Array.from({ length: 6 }, (_, i) => ({
    title: tr(lang, `pds.out.o${i + 1}.title`),
    en: tr(lang, `pds.out.o${i + 1}.en`),
    body: tr(lang, `pds.out.o${i + 1}.body`),
  }));
  return (
    <section style={{ padding: "120px 48px", borderBottom: "1px solid var(--hairline)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ font: "500 11px var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 14 }}>
          {tr(lang, "pds.out.eyebrow")}
        </div>
        <h2 style={{ font: "400 44px/1.15 var(--font-display)", color: "var(--fg)", margin: 0, marginBottom: 48 }}>{tr(lang, "pds.out.h2")}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {outputs.map((o) => (
            <article
              key={o.title}
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface)",
                borderRadius: "var(--r-2)",
                padding: 24,
                minHeight: 180,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div style={{ font: "500 10px var(--font-mono)", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--fg-muted)" }}>{o.en}</div>
              <div style={{ font: "500 18px var(--font-sans)", color: "var(--fg)" }}>{o.title}</div>
              <p style={{ font: "400 13px/1.65 var(--font-sans)", color: "var(--ink-700)" }}>{o.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PDSAudience() {
  const { lang } = useLang();
  const cohorts = Array.from({ length: 6 }, (_, i) => ({
    jp: tr(lang, `pds.aud.c${i + 1}.jp`),
    en: tr(lang, `pds.aud.c${i + 1}.en`),
    body: tr(lang, `pds.aud.c${i + 1}.body`),
  }));
  return (
    <section style={{ padding: "120px 48px", background: "var(--bg-sunken)", borderBottom: "1px solid var(--hairline)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 48 }}>
          <div>
            <div style={{ font: "500 11px var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 14 }}>
              {tr(lang, "pds.aud.eyebrow")}
            </div>
            <h2 style={{ font: "400 40px/1.2 var(--font-display)", color: "var(--fg)", margin: 0 }}>{tr(lang, "pds.aud.h2")}</h2>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--ink-700)" }}>
          {cohorts.map((c, i) => (
            <div
              key={c.jp}
              style={{
                padding: "28px 24px 32px",
                borderRight: i % 3 !== 2 ? "1px solid var(--hairline)" : 0,
                borderBottom: i < 3 ? "1px solid var(--hairline)" : 0,
              }}
            >
              <div style={{ font: "500 22px var(--font-display)", color: "var(--fg)" }}>{c.jp}</div>
              <div style={{ marginTop: 4, font: "500 11px var(--font-mono)", color: "var(--fg-muted)", letterSpacing: "0.14em", textTransform: "uppercase" }}>{c.en}</div>
              <p style={{ marginTop: 14, font: "400 13px/1.65 var(--font-sans)", color: "var(--ink-700)" }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PDSPoC() {
  const { lang } = useLang();
  const phases = [
    { d: "01", body: tr(lang, "pds.poc.p1") },
    { d: "02", body: tr(lang, "pds.poc.p2") },
    { d: "03", body: tr(lang, "pds.poc.p3") },
    { d: "04", body: tr(lang, "pds.poc.p4") },
  ];
  return (
    <section style={{ padding: "120px 48px", borderBottom: "1px solid var(--hairline)" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <div style={{ font: "500 11px var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 14 }}>
          {tr(lang, "pds.poc.eyebrow")}
        </div>
        <h2 style={{ font: "400 44px/1.15 var(--font-display)", color: "var(--fg)", margin: 0, marginBottom: 48 }}>{tr(lang, "pds.poc.h2")}</h2>
        <ol style={{ listStyle: "none", padding: 0, margin: 0, borderTop: "1px solid var(--ink-700)" }}>
          {phases.map((p) => (
            <li
              key={p.d}
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: 32,
                padding: "24px 0",
                borderBottom: "1px solid var(--hairline)",
                alignItems: "baseline",
              }}
            >
              <span style={{ font: "500 12px var(--font-mono)", color: "var(--accent)", letterSpacing: "0.18em" }}>PHASE {p.d}</span>
              <p style={{ font: "400 16px/1.7 var(--font-sans)", color: "var(--fg)" }}>{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
