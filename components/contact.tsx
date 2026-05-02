"use client";

import { useState, type ReactNode, type InputHTMLAttributes } from "react";
import { tr, useLang } from "@/lib/i18n";

export function ContactHero() {
  const { lang } = useLang();
  return (
    <section style={{ padding: "96px 48px 72px", borderBottom: "1px solid var(--hairline)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ font: "500 11px var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 28, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ display: "inline-block", width: 24, height: 1, background: "var(--ink-700)" }} />
          {tr(lang, "ct.hero.eyebrow")}
        </div>
        <h1 style={{ font: "400 72px/1.08 var(--font-display)", letterSpacing: "-0.012em", color: "var(--fg)", margin: 0, maxWidth: 1000 }}>
          {tr(lang, "ct.hero.h1.l1")}
          <br />
          {tr(lang, "ct.hero.h1.l2")}
        </h1>
        <p style={{ marginTop: 32, maxWidth: 720, font: "400 17px/1.7 var(--font-sans)", color: "var(--ink-700)" }}>
          {tr(lang, "ct.hero.body")}
        </p>
      </div>
    </section>
  );
}

function Field({ label, hint, required, children }: { label: string; hint?: string; required?: boolean; children: ReactNode }) {
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: input control is passed in via children (Input/textarea)
    <label style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
      <span style={{ font: "500 11px var(--font-mono)", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--fg-muted)" }}>
        {label}
        {required && <span style={{ color: "var(--accent)", marginLeft: 6 }}>*</span>}
      </span>
      {children}
      {hint && <span style={{ font: "400 12px var(--font-sans)", color: "var(--fg-muted)" }}>{hint}</span>}
    </label>
  );
}

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      style={{
        height: 42,
        padding: "0 14px",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-1)",
        font: "400 14px var(--font-sans)",
        color: "var(--fg)",
        background: "var(--paper-white)",
        width: "100%",
        boxSizing: "border-box",
      }}
    />
  );
}

export function ContactForm() {
  const { lang } = useLang();
  const [kind, setKind] = useState("poc");
  const [domain, setDomain] = useState("critical");
  const [topics, setTopics] = useState<Record<string, boolean>>({ vendor: true });
  const [submitError, setSubmitError] = useState("");

  const kinds: Array<[string, string]> = [
    ["poc",     tr(lang, "ct.k.poc")],
    ["defense", tr(lang, "ct.k.defense")],
    ["partner", tr(lang, "ct.k.partner")],
    ["press",   tr(lang, "ct.k.press")],
    ["career",  tr(lang, "ct.k.career")],
  ];
  const domains: Array<[string, string]> = [
    ["critical", tr(lang, "ct.d.critical")],
    ["defense",  tr(lang, "ct.d.defense")],
    ["ot",       tr(lang, "ct.d.ot")],
    ["finance",  tr(lang, "ct.d.finance")],
    ["telecom",  tr(lang, "ct.d.telecom")],
    ["gov",      tr(lang, "ct.d.gov")],
    ["other",    tr(lang, "ct.d.other")],
  ];
  const topicList: Array<[string, string]> = [
    ["vendor",   tr(lang, "ct.t.vendor")],
    ["identity", tr(lang, "ct.t.identity")],
    ["sbom",     tr(lang, "ct.t.sbom")],
    ["recovery", tr(lang, "ct.t.recovery")],
    ["ot",       tr(lang, "ct.t.ot")],
    ["exec",     tr(lang, "ct.t.exec")],
  ];
  const toggleTopic = (k: string) => setTopics((t) => ({ ...t, [k]: !t[k] }));

  return (
    <section style={{ padding: "80px 48px 120px", borderBottom: "1px solid var(--hairline)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "320px 1fr", gap: 64 }}>
        <aside>
          <div style={{ font: "500 10px var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 16 }}>
            {tr(lang, "ct.kindLabel")}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid var(--hairline)" }}>
            {kinds.map(([k, label]) => (
              <button
                key={k}
                type="button"
                onClick={() => setKind(k)}
                style={{
                  textAlign: "left",
                  padding: "16px 12px",
                  background: kind === k ? "var(--bg-sunken)" : "transparent",
                  border: 0,
                  borderBottom: "1px solid var(--hairline)",
                  cursor: "pointer",
                  font: "500 14px var(--font-sans)",
                  color: kind === k ? "var(--fg)" : "var(--ink-700)",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: kind === k ? "var(--accent)" : "var(--ink-200)",
                  }}
                />
                {label}
              </button>
            ))}
          </div>
          <div
            style={{
              marginTop: 40,
              padding: 20,
              border: "1px solid var(--border)",
              background: "var(--bg-sunken)",
              borderRadius: "var(--r-2)",
            }}
          >
            <div style={{ font: "500 10px var(--font-mono)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 10 }}>
              {tr(lang, "ct.dontAsk")}
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              {[tr(lang, "ct.dontAsk.1"), tr(lang, "ct.dontAsk.2"), tr(lang, "ct.dontAsk.3"), tr(lang, "ct.dontAsk.4")].map((t) => (
                <li key={t} style={{ font: "400 12px/1.6 var(--font-sans)", color: "var(--ink-700)", display: "flex", gap: 8 }}>
                  <span style={{ color: "var(--fg-muted)" }}>※</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitError(tr(lang, "ct.f.unavailable"));
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
            <Field label={tr(lang, "ct.f.name")} required>
              <Input placeholder={tr(lang, "ct.f.namePh")} />
            </Field>
            <Field label={tr(lang, "ct.f.org")} required>
              <Input placeholder={tr(lang, "ct.f.orgPh")} />
            </Field>
            <Field label={tr(lang, "ct.f.role")}>
              <Input placeholder={tr(lang, "ct.f.rolePh")} />
            </Field>
            <Field label={tr(lang, "ct.f.email")} required>
              <Input type="email" placeholder="name@example.com" />
            </Field>
          </div>
          <Field label={tr(lang, "ct.f.domain")} required>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {domains.map(([k, l]) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setDomain(k)}
                  style={{
                    padding: "8px 14px",
                    border: "1px solid",
                    borderColor: domain === k ? "var(--ink-900)" : "var(--border)",
                    background: domain === k ? "var(--ink-900)" : "var(--surface)",
                    color: domain === k ? "var(--washi)" : "var(--fg)",
                    font: "500 13px var(--font-sans)",
                    borderRadius: "var(--r-1)",
                    cursor: "pointer",
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
          </Field>
          <Field label={tr(lang, "ct.f.topics")} hint={tr(lang, "ct.f.topicsHint")}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {topicList.map(([k, l]) => {
                const on = !!topics[k];
                return (
                  <button
                    key={k}
                    type="button"
                    onClick={() => toggleTopic(k)}
                    style={{
                      padding: "8px 14px",
                      border: "1px solid",
                      borderColor: on ? "var(--accent)" : "var(--border)",
                      background: on ? "var(--accent-wash)" : "var(--surface)",
                      color: on ? "var(--shu-700)" : "var(--ink-700)",
                      font: "500 13px var(--font-sans)",
                      borderRadius: "var(--r-pill)",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: on ? "var(--accent)" : "var(--ink-200)",
                      }}
                    />
                    {l}
                  </button>
                );
              })}
            </div>
          </Field>
          <Field label={tr(lang, "ct.f.message")} required hint={tr(lang, "ct.f.messageHint")}>
            <textarea
              rows={6}
              style={{
                width: "100%",
                padding: "12px 14px",
                border: "1px solid var(--border)",
                borderRadius: "var(--r-1)",
                font: "400 14px/1.6 var(--font-sans)",
                color: "var(--fg)",
                background: "var(--paper-white)",
                resize: "vertical",
                boxSizing: "border-box",
              }}
              placeholder={tr(lang, "ct.f.messagePh")}
            />
          </Field>
          <input type="hidden" name="kind" value={kind} />
          {submitError && (
            <div
              role="alert"
              style={{
                marginTop: 24,
                padding: "14px 16px",
                border: "1px solid var(--accent)",
                borderRadius: "var(--r-1)",
                background: "var(--accent-wash)",
                color: "var(--shu-700)",
                font: "500 14px/1.5 var(--font-sans)",
              }}
            >
              {submitError}
            </div>
          )}
          <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid var(--hairline)", display: "flex", alignItems: "center", gap: 16 }}>
            <button
              type="submit"
              style={{
                height: 48,
                padding: "0 28px",
                background: "var(--accent)",
                color: "var(--washi)",
                border: 0,
                borderRadius: "var(--r-1)",
                font: "500 14px var(--font-sans)",
                cursor: "pointer",
                letterSpacing: "0.02em",
              }}
            >
              {tr(lang, "cta.send")}
            </button>
            <span style={{ font: "400 12px var(--font-sans)", color: "var(--fg-muted)" }}>
              {tr(lang, "ct.f.privacy")}
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
