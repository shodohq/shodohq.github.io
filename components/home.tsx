"use client";

import { tr, useLang } from "@/lib/i18n";
import { MissionGraph } from "./MissionGraph";

const withLang = (lang: string, href: string) => (lang === "en" ? `${href}?lang=en` : href);

export function HomeHero() {
  const { lang } = useLang();
  return (
    <section style={{ padding: "112px 48px 88px", borderBottom: "1px solid var(--hairline)", position: "relative" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, alignItems: "center", maxWidth: 1240, margin: "0 auto" }}>
        <div>
          <div style={{ font: "500 11px var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 28, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ display: "inline-block", width: 24, height: 1, background: "var(--ink-700)" }} />
            {tr(lang, "home.hero.eyebrow")}
          </div>
          <h1 style={{ font: "400 84px/1.06 var(--font-display)", letterSpacing: "-0.015em", color: "var(--fg)", margin: 0, maxWidth: 720 }}>
            {lang === "en" ? (
              <>
                A cyber defense
                <br />
                OS that keeps
                <br />
                <span style={{ color: "var(--accent)" }}>society running</span>.
              </>
            ) : (
              <>
                社会機能を
                <br />
                止めないための
                <br />
                <span style={{ color: "var(--accent)" }}>サイバー防衛OS</span>。
              </>
            )}
          </h1>
          <p style={{ marginTop: 36, maxWidth: 560, font: "400 17px/1.7 var(--font-sans)", color: "var(--ink-700)" }}>
            {tr(lang, "home.hero.body")}
          </p>
          <div style={{ marginTop: 40, display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <a
              href={withLang(lang, "/contact")}
              style={{
                height: 48,
                padding: "0 22px",
                background: "var(--accent)",
                color: "var(--washi)",
                border: 0,
                borderRadius: "var(--r-1)",
                font: "500 14px var(--font-sans)",
                cursor: "pointer",
                letterSpacing: "0.02em",
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              {tr(lang, "cta.pocArrow")}
            </a>
            <a
              href="#modules"
              style={{
                height: 48,
                padding: "0 22px",
                background: "transparent",
                color: "var(--fg)",
                border: "1px solid var(--border-strong)",
                borderRadius: "var(--r-1)",
                font: "500 14px var(--font-sans)",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              {tr(lang, "cta.viewPDS")}
            </a>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div
            style={{
              border: "1px solid var(--hairline)",
              background: "var(--surface)",
              borderRadius: "var(--r-2)",
              padding: 20,
              position: "relative",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span style={{ font: "500 10px var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-muted)" }}>
                Mission Graph · sample
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
                <span style={{ font: "500 10px var(--font-mono)", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--shu-700)" }}>
                  {tr(lang, "home.hero.criticalPath")}
                </span>
              </span>
            </div>
            <MissionGraph />
            <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--hairline)", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, font: "400 11px/1.5 var(--font-sans)", color: "var(--fg-muted)" }}>
              <div>
                <div className="t-mono-micro" style={{ marginBottom: 4 }}>NODES</div>
                <div className="tnum" style={{ font: "500 14px var(--font-mono)", color: "var(--fg)" }}>17</div>
              </div>
              <div>
                <div className="t-mono-micro" style={{ marginBottom: 4 }}>EDGES</div>
                <div className="tnum" style={{ font: "500 14px var(--font-mono)", color: "var(--fg)" }}>22</div>
              </div>
              <div>
                <div className="t-mono-micro" style={{ marginBottom: 4 }}>RISK</div>
                <div className="tnum" style={{ font: "500 14px var(--font-mono)", color: "var(--shu-700)" }}>0.74</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeProblem() {
  const { lang } = useLang();
  const blocks = [
    { jp: tr(lang, "home.problem.b1.jp"), en: tr(lang, "home.problem.b1.en"), body: tr(lang, "home.problem.b1.body") },
    { jp: tr(lang, "home.problem.b2.jp"), en: tr(lang, "home.problem.b2.en"), body: tr(lang, "home.problem.b2.body") },
    { jp: tr(lang, "home.problem.b3.jp"), en: tr(lang, "home.problem.b3.en"), body: tr(lang, "home.problem.b3.body") },
  ];
  return (
    <section style={{ padding: "112px 48px", borderBottom: "1px solid var(--hairline)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 80, marginBottom: 56 }}>
          <div>
            <div style={{ font: "500 11px var(--font-mono)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 14 }}>
              {tr(lang, "home.problem.eyebrow")}
            </div>
            <h2 style={{ font: "400 44px/1.15 var(--font-display)", color: "var(--fg)", margin: 0 }}>
              {lang === "en" ? (
                <>
                  You can see the
                  <br />
                  vulnerabilities,
                  <br />
                  but not the
                  <br />
                  <span style={{ color: "var(--accent)" }}>stoppage</span>.
                </>
              ) : (
                <>
                  脆弱性は
                  <br />
                  見えても、
                  <br />
                  <span style={{ color: "var(--accent)" }}>停止は</span>見えない。
                </>
              )}
            </h2>
          </div>
          <p style={{ font: "400 17px/1.7 var(--font-sans)", color: "var(--ink-700)", maxWidth: 540, alignSelf: "end" }}>
            {lang === "en" ? (
              <>
                Existing security tools tell you{" "}
                <em style={{ fontStyle: "normal", color: "var(--fg)" }}>“what is dangerous.”</em> What you actually need is{" "}
                <em style={{ fontStyle: "normal", color: "var(--fg)" }}>“what stops”</em> and{" "}
                <em style={{ fontStyle: "normal", color: "var(--fg)" }}>“what to fix first.”</em>
              </>
            ) : (
              <>
                既存のセキュリティ製品は<em style={{ fontStyle: "normal", color: "var(--fg)" }}>“何が危ないか”</em>を教えます。私たちが必要としているのは、
                <em style={{ fontStyle: "normal", color: "var(--fg)" }}>“何が止まるか”</em>
                <em style={{ fontStyle: "normal", color: "var(--fg)" }}>“何から直すべきか”</em>です。
              </>
            )}
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--ink-700)" }}>
          {blocks.map((b, i) => (
            <div
              key={b.jp}
              style={{
                padding: "32px 28px 36px",
                borderRight: i !== 2 ? "1px solid var(--hairline)" : 0,
              }}
            >
              <div style={{ font: "500 10px var(--font-mono)", color: "var(--accent)", letterSpacing: "0.16em" }}>0{i + 1}</div>
              <div style={{ marginTop: 18, font: "500 22px var(--font-display)", color: "var(--fg)" }}>{b.jp}</div>
              <div style={{ marginTop: 4, font: "500 11px var(--font-mono)", color: "var(--fg-muted)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                {b.en}
              </div>
              <p style={{ marginTop: 18, font: "400 14px/1.7 var(--font-sans)", color: "var(--ink-700)" }}>{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeInsight() {
  const { lang } = useLang();
  return (
    <section style={{ padding: "128px 48px", background: "var(--ink-900)", color: "var(--washi)", borderBottom: "1px solid var(--hairline)" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <div style={{ font: "500 11px var(--font-mono)", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--shu-300)", marginBottom: 28 }}>
          {tr(lang, "home.insight.eyebrow")}
        </div>
        <h2 style={{ font: "400 56px/1.18 var(--font-display)", color: "var(--washi)", margin: 0, letterSpacing: "-0.005em", maxWidth: 920 }}>
          {lang === "en" ? (
            <>
              Attackers do not exploit
              <br />
              <span style={{ color: "var(--shu-300)" }}>vulnerabilities</span> — they exploit
              <br />
              the <em style={{ fontStyle: "normal", color: "var(--shu-400)" }}>relationships</em> between
              <br />
              organisations, identities, vendors and recovery.
            </>
          ) : (
            <>
              攻撃者は<span style={{ color: "var(--shu-300)" }}>脆弱性</span>ではなく、
              <br />
              組織・ID・委託先・復旧体制の
              <br />
              <em style={{ fontStyle: "normal", color: "var(--shu-400)" }}>関係性</em>を悪用する。
            </>
          )}
        </h2>
        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }}>
          <p style={{ font: "400 16px/1.7 var(--font-sans)", color: "var(--ink-300)" }}>{tr(lang, "home.insight.body1")}</p>
          <p style={{ font: "400 16px/1.7 var(--font-sans)", color: "var(--ink-300)" }}>
            {lang === "en" ? (
              <>
                Pixie Defense Suite is not an attack-path tool. It is a{" "}
                <em style={{ fontStyle: "normal", color: "var(--washi)" }}>mission assurance platform</em> built around the Mission Graph.
              </>
            ) : (
              <>
                Pixie Defense Suite は、攻撃パスを探すツールではありません。Mission Graph を中核とする
                <em style={{ fontStyle: "normal", color: "var(--washi)" }}>任務保証プラットフォーム</em>です。
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

export function HomeModules() {
  const { lang } = useLang();
  const groups = [
    {
      title: tr(lang, "home.modules.g1"),
      en: tr(lang, "home.modules.g1.en"),
      modules: [
        { id: "PX-A", name: "Pixie Atlas",   role: tr(lang, "mod.PX-A.role"), body: tr(lang, "mod.PX-A.body") },
        { id: "PX-T", name: "Pixie Twin",    role: tr(lang, "mod.PX-T.role"), body: tr(lang, "mod.PX-T.body") },
        { id: "PX-C", name: "Pixie Command", role: tr(lang, "mod.PX-C.role"), body: tr(lang, "mod.PX-C.body") },
      ],
    },
    {
      title: tr(lang, "home.modules.g2"),
      en: tr(lang, "home.modules.g2.en"),
      modules: [
        { id: "PX-X", name: "Pixie Access",    role: tr(lang, "mod.PX-X.role"), body: tr(lang, "mod.PX-X.body") },
        { id: "PX-M", name: "Pixie Materials", role: tr(lang, "mod.PX-M.role"), body: tr(lang, "mod.PX-M.body") },
        { id: "PX-R", name: "Pixie Recover",   role: tr(lang, "mod.PX-R.role"), body: tr(lang, "mod.PX-R.body") },
        { id: "PX-S", name: "Pixie Shield",    role: tr(lang, "mod.PX-S.role"), body: tr(lang, "mod.PX-S.body") },
      ],
    },
    {
      title: tr(lang, "home.modules.g3"),
      en: tr(lang, "home.modules.g3.en"),
      modules: [
        { id: "PX-N", name: "Pixie Sentinel",     role: tr(lang, "mod.PX-N.role"), body: tr(lang, "mod.PX-N.body") },
        { id: "PX-F", name: "Pixie Forge",        role: tr(lang, "mod.PX-F.role"), body: tr(lang, "mod.PX-F.body") },
        { id: "PX-I", name: "Pixie Intelligence", role: tr(lang, "mod.PX-I.role"), body: tr(lang, "mod.PX-I.body") },
      ],
    },
  ];
  return (
    <section id="modules" style={{ padding: "120px 48px", borderBottom: "1px solid var(--hairline)", scrollMarginTop: 24 }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 80, marginBottom: 56 }}>
          <div>
            <div style={{ font: "500 11px var(--font-mono)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 14 }}>
              {tr(lang, "home.modules.eyebrow")}
            </div>
            <h2 style={{ font: "400 44px/1.15 var(--font-display)", color: "var(--fg)", margin: 0 }}>
              {tr(lang, "home.modules.h2.l1")}
              <br />
              {tr(lang, "home.modules.h2.l2")}
            </h2>
          </div>
          <p style={{ font: "400 16px/1.7 var(--font-sans)", color: "var(--ink-700)", maxWidth: 560, alignSelf: "end" }}>
            {tr(lang, "home.modules.body")}
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid var(--ink-700)" }}>
          {groups.map((g, gi) => (
            <div key={g.title} style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 0, borderBottom: "1px solid var(--hairline)" }}>
              <div style={{ padding: "32px 28px 32px 0", borderRight: "1px solid var(--hairline)" }}>
                <div style={{ font: "500 10px var(--font-mono)", letterSpacing: "0.18em", textTransform: "uppercase", color: gi === 0 ? "var(--accent)" : "var(--fg-muted)" }}>
                  0{gi + 1}
                </div>
                <div style={{ marginTop: 16, font: "500 22px var(--font-display)", color: "var(--fg)" }}>{g.title}</div>
                <div style={{ marginTop: 4, font: "500 11px var(--font-mono)", color: "var(--fg-muted)", letterSpacing: "0.14em", textTransform: "uppercase" }}>{g.en}</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: `repeat(${g.modules.length}, 1fr)`, gap: 0 }}>
                {g.modules.map((m, mi) => (
                  <article
                    key={m.id}
                    style={{
                      padding: "32px 24px",
                      borderLeft: mi === 0 ? 0 : "1px solid var(--hairline)",
                    }}
                  >
                    <div style={{ font: "500 10px var(--font-mono)", letterSpacing: "0.14em", color: "var(--fg-muted)" }}>{m.id}</div>
                    <div style={{ marginTop: 14, font: "500 18px var(--font-sans)", color: "var(--fg)", letterSpacing: "0.005em" }}>{m.name}</div>
                    <div style={{ marginTop: 4, font: "400 12px var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase", color: gi === 0 ? "var(--shu-700)" : "var(--fg-muted)" }}>
                      {m.role}
                    </div>
                    <p style={{ marginTop: 16, font: "400 13px/1.65 var(--font-sans)", color: "var(--ink-700)" }}>{m.body}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeWhy() {
  const { lang } = useLang();
  const reasons = [
    { jp: tr(lang, "home.why.r1.jp"), en: tr(lang, "home.why.r1.en"), body: tr(lang, "home.why.r1.body") },
    { jp: tr(lang, "home.why.r2.jp"), en: tr(lang, "home.why.r2.en"), body: tr(lang, "home.why.r2.body") },
    { jp: tr(lang, "home.why.r3.jp"), en: tr(lang, "home.why.r3.en"), body: tr(lang, "home.why.r3.body") },
    { jp: tr(lang, "home.why.r4.jp"), en: tr(lang, "home.why.r4.en"), body: tr(lang, "home.why.r4.body") },
  ];
  return (
    <section style={{ padding: "120px 48px", borderBottom: "1px solid var(--hairline)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 100px", gap: 40, marginBottom: 64 }}>
          <div>
            <div style={{ font: "500 11px var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 14 }}>
              {tr(lang, "home.why.eyebrow")}
            </div>
            <h2 style={{ font: "400 44px/1.15 var(--font-display)", color: "var(--fg)", margin: 0, maxWidth: 720 }}>
              {tr(lang, "home.why.h2.l1")}
              <br />
              {tr(lang, "home.why.h2.l2")}
            </h2>
          </div>
          {lang === "jp" && (
            <aside
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                font: "500 13px var(--font-jp-serif)",
                letterSpacing: "0.3em",
                color: "var(--fg-muted)",
                borderLeft: "1px solid var(--hairline)",
                padding: "0 16px",
                lineHeight: 2,
                justifySelf: "end",
              }}
            >
              {tr(lang, "home.why.aside")}
            </aside>
          )}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderTop: "1px solid var(--ink-700)" }}>
          {reasons.map((r, i) => (
            <div
              key={r.jp}
              style={{
                padding: "32px 24px 36px",
                borderRight: i !== 3 ? "1px solid var(--hairline)" : 0,
              }}
            >
              <div style={{ font: "500 10px var(--font-mono)", color: "var(--accent)", letterSpacing: "0.16em" }}>0{i + 1}</div>
              <div style={{ marginTop: 18, font: "500 20px var(--font-display)", color: "var(--fg)" }}>{r.jp}</div>
              <div style={{ marginTop: 4, font: "500 11px var(--font-mono)", color: "var(--fg-muted)", letterSpacing: "0.14em", textTransform: "uppercase" }}>{r.en}</div>
              <p style={{ marginTop: 18, font: "400 13px/1.7 var(--font-sans)", color: "var(--ink-700)" }}>{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeCTA() {
  const { lang } = useLang();
  return (
    <section style={{ padding: "128px 48px", background: "var(--ink-900)", color: "var(--washi)" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: 56, alignItems: "end" }}>
        <div>
          <div style={{ font: "500 11px var(--font-mono)", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--shu-300)", marginBottom: 24 }}>
            {tr(lang, "home.cta.eyebrow")}
          </div>
          <h2 style={{ font: "400 60px/1.1 var(--font-display)", color: "var(--washi)", margin: 0, letterSpacing: "-0.01em" }}>
            {tr(lang, "home.cta.h2.l1")}
            <br />
            {tr(lang, "home.cta.h2.l2")}
          </h2>
          <p style={{ marginTop: 24, maxWidth: 560, font: "400 16px/1.7 var(--font-sans)", color: "var(--ink-300)" }}>
            {tr(lang, "home.cta.body")}
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <a
            href={withLang(lang, "/contact")}
            style={{
              height: 52,
              padding: "0 28px",
              background: "var(--accent)",
              color: "var(--washi)",
              border: 0,
              borderRadius: "var(--r-1)",
              font: "500 14px var(--font-sans)",
              cursor: "pointer",
              letterSpacing: "0.02em",
              whiteSpace: "nowrap",
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            {tr(lang, "cta.pocArrow")}
          </a>
          <a
            href={withLang(lang, "/contact")}
            style={{
              height: 52,
              padding: "0 28px",
              background: "transparent",
              color: "var(--washi)",
              border: "1px solid var(--ink-600)",
              borderRadius: "var(--r-1)",
              font: "500 14px var(--font-sans)",
              cursor: "pointer",
              whiteSpace: "nowrap",
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            {tr(lang, "cta.partner")}
          </a>
        </div>
      </div>
    </section>
  );
}
