"use client";

import { Fragment } from "react";
import { type Bilingual, pick, tr, useLang, type Lang } from "@/lib/i18n";

const J = (jp: string, en: string): Bilingual => ({ jp, en });

type ChainNode = [Bilingual, Bilingual?];
type Metric = [Bilingual, Bilingual, Bilingual];
type UCData = {
  id: string;
  jp: Bilingual;
  en: Bilingual;
  essence: Bilingual;
  chain: ChainNode[];
  lookFor: Bilingual[];
  output: Bilingual;
  metrics?: Metric[];
};

export function UCHero() {
  const { lang } = useLang();
  return (
    <section
      id="use-cases"
      style={{
        padding: "120px 48px 72px",
        borderTop: "1px solid var(--ink-700)",
        borderBottom: "1px solid var(--hairline)",
        background: "var(--bg)",
        scrollMarginTop: 24,
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: 32, alignItems: "baseline" }}>
          <div style={{ font: "500 11px var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)" }}>
            §02 · Use Cases
          </div>
          <div style={{ font: "500 11px var(--font-mono)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-muted)" }}>
            {tr(lang, "uc.hero.eyebrow")}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: 32, marginTop: 36 }}>
          <span />
          <h2 style={{ font: "400 56px/1.14 var(--font-display)", letterSpacing: "-0.012em", color: "var(--fg)", margin: 0, maxWidth: 1040 }}>
            {lang === "en" ? (
              <>
                Operations stop not from a single vulnerability,
                <br />
                but from a <span style={{ color: "var(--accent)" }}>chain of relationships</span>.
              </>
            ) : (
              <>
                単一の脆弱性ではなく、
                <br />
                <span style={{ color: "var(--accent)" }}>関係性の連鎖</span>で業務は止まる。
              </>
            )}
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: 32, marginTop: 28 }}>
          <span />
          <div style={{ maxWidth: 760 }}>
            <p style={{ margin: 0, font: "400 17px/1.75 var(--font-sans)", color: "var(--ink-700)" }}>{tr(lang, "uc.hero.body")}</p>
            <p style={{ marginTop: 16, font: "400 13px/1.75 var(--font-sans)", color: "var(--fg-muted)" }}>{tr(lang, "uc.hero.disclaimer")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function UCIndex() {
  const { lang } = useLang();
  const items = Array.from({ length: 7 }, (_, i) => {
    const n = `0${i + 1}`;
    return [n, tr(lang, `uc.idx.${n}.jp`), tr(lang, `uc.idx.${n}.en`)] as const;
  });
  return (
    <section style={{ padding: "64px 48px", borderBottom: "1px solid var(--hairline)", background: "var(--bg-sunken)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 0, borderTop: "1px solid var(--ink-700)", borderBottom: "1px solid var(--hairline)" }}>
        {items.map(([n, jp, en], i) => (
          <a
            key={n}
            href={`#uc-${n}`}
            style={{
              padding: "24px 16px",
              borderRight: i !== items.length - 1 ? "1px solid var(--hairline)" : 0,
              textDecoration: "none",
              display: "block",
            }}
          >
            <div style={{ font: "500 11px var(--font-mono)", color: "var(--accent)", letterSpacing: "0.18em" }}>{n}</div>
            <div style={{ marginTop: 12, font: "500 13px/1.55 var(--font-sans)", color: "var(--fg)" }}>{jp}</div>
            <div style={{ marginTop: 6, font: "500 10px var(--font-mono)", color: "var(--fg-muted)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              {en}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function ChainGraph({ chain, terminal, lang }: { chain: ChainNode[]; terminal?: string; lang: Lang }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {chain.map((n, i) => (
        <div key={pick(lang, n[0])} style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 16, alignItems: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: 52 }}>
            <span
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: "var(--washi)",
                border: `1.5px solid ${i === chain.length - 1 ? "var(--accent)" : "var(--ink-700)"}`,
                marginTop: 6,
              }}
            />
            {i < chain.length - 1 && <span style={{ width: 1, flex: 1, background: "var(--ink-300)", marginTop: 4 }} />}
          </div>
          <div style={{ paddingBottom: i < chain.length - 1 ? 14 : 0 }}>
            <div
              style={{
                font: i === chain.length - 1 ? "500 14px var(--font-sans)" : "400 14px var(--font-sans)",
                color: i === chain.length - 1 ? "var(--shu-700)" : "var(--fg)",
              }}
            >
              {pick(lang, n[0])}
            </div>
            {n[1] && <div style={{ marginTop: 3, font: "400 12px/1.55 var(--font-sans)", color: "var(--fg-muted)" }}>{pick(lang, n[1])}</div>}
          </div>
        </div>
      ))}
      <div style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 16, alignItems: "center", marginTop: 4 }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <span style={{ width: 1, height: 18, background: "var(--ink-300)" }} />
        </div>
        <span />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 16, alignItems: "center" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <span style={{ width: 14, height: 14, background: "var(--accent)", transform: "rotate(45deg)" }} />
        </div>
        <div>
          <div style={{ font: "500 11px var(--font-mono)", color: "var(--fg-muted)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
            {tr(lang, "uc.label.missionImpact")}
          </div>
          <div style={{ marginTop: 2, font: "500 16px var(--font-display)", color: "var(--shu-700)" }}>
            {terminal || tr(lang, "uc.terminal")}
          </div>
        </div>
      </div>
    </div>
  );
}

function UCCase({ id, jp, en, essence, chain, lookFor, output, metrics, alt }: UCData & { alt?: boolean }) {
  const { lang } = useLang();
  return (
    <section
      id={`uc-${id}`}
      style={{
        padding: "120px 48px",
        borderBottom: "1px solid var(--hairline)",
        background: alt ? "var(--bg-sunken)" : "var(--bg)",
        scrollMarginTop: 24,
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 32, alignItems: "baseline", marginBottom: 16 }}>
          <span style={{ font: "500 12px var(--font-mono)", color: "var(--accent)", letterSpacing: "0.2em" }}>UC · {id}</span>
          <div style={{ font: "500 11px var(--font-mono)", color: "var(--fg-muted)", letterSpacing: "0.16em", textTransform: "uppercase" }}>{pick(lang, en)}</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 380px", gap: 48, alignItems: "flex-start", marginBottom: 56 }}>
          <span />
          <h2 style={{ font: "400 44px/1.18 var(--font-display)", color: "var(--fg)", margin: 0, maxWidth: 700 }}>{pick(lang, jp)}</h2>
          <div style={{ paddingTop: 8 }}>
            <div style={{ font: "500 10px var(--font-mono)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 10 }}>
              {tr(lang, "uc.label.essence")}
            </div>
            <p style={{ font: "400 14px/1.75 var(--font-sans)", color: "var(--ink-700)", margin: 0 }}>{pick(lang, essence)}</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "380px 1fr 380px", gap: 48, alignItems: "flex-start", borderTop: "1px solid var(--ink-700)", paddingTop: 40 }}>
          <div>
            <div style={{ font: "500 10px var(--font-mono)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 18 }}>
              {tr(lang, "uc.label.chain")}
            </div>
            <ChainGraph chain={chain} lang={lang} />
          </div>

          <div>
            <div style={{ font: "500 10px var(--font-mono)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 18 }}>
              {tr(lang, "uc.label.examines")}
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {lookFor.map((q, i) => (
                <li
                  key={pick(lang, q)}
                  style={{
                    padding: "14px 0",
                    borderTop: i === 0 ? 0 : "1px solid var(--hairline)",
                    font: "400 14px/1.65 var(--font-sans)",
                    color: "var(--fg)",
                    display: "grid",
                    gridTemplateColumns: "36px 1fr",
                    gap: 8,
                    alignItems: "baseline",
                  }}
                >
                  <span style={{ font: "500 11px var(--font-mono)", color: "var(--ink-300)" }}>Q{(i + 1).toString().padStart(2, "0")}</span>
                  <span>{pick(lang, q)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div style={{ font: "500 10px var(--font-mono)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 18 }}>
              {tr(lang, "uc.label.output")}
            </div>
            <div style={{ borderLeft: "2px solid var(--accent)", paddingLeft: 18 }}>
              <p style={{ margin: 0, font: "400 15px/1.75 var(--font-sans)", color: "var(--fg)" }}>{pick(lang, output)}</p>
            </div>
            {metrics && (
              <div style={{ marginTop: 28, borderTop: "1px solid var(--hairline)", paddingTop: 20 }}>
                <div style={{ font: "500 10px var(--font-mono)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 14 }}>
                  {tr(lang, "uc.label.effect")}
                </div>
                <div style={{ display: "grid", gap: 10 }}>
                  {metrics.map(([label, before, after]) => (
                    <div key={pick(lang, label)} style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "baseline", gap: 12 }}>
                      <span style={{ font: "400 12px/1.5 var(--font-sans)", color: "var(--fg-muted)" }}>{pick(lang, label)}</span>
                      <span style={{ font: "500 13px var(--font-mono)", color: "var(--fg)", fontVariantNumeric: "tabular-nums" }}>
                        <span style={{ color: "var(--ink-300)" }}>{pick(lang, before)}</span>
                        <span style={{ margin: "0 8px", color: "var(--ink-300)" }}>→</span>
                        <span style={{ color: "var(--shu-700)" }}>{pick(lang, after)}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const CASES: UCData[] = [
  {
    id: "01",
    jp: J("委託先リモート保守経路から、OT影響に至るリスク", "Vendor remote access — paths reaching OT impact"),
    en: J("Vendor remote access", "Vendor remote access"),
    essence: J(
      "委託先接続、共有アカウント、踏み台端末、監視不足、OT境界、復旧属人化が連鎖し、保守時間外でも到達可能な経路が残る。",
      "Vendor connections, shared accounts, bastion hosts, missing monitoring, OT boundaries and tribal recovery chain together to leave reachable paths even outside maintenance hours."
    ),
    chain: [
      [J("保守ベンダー", "Maintenance vendor"), J("契約上限と申請の整合性", "Contract scope vs. request alignment")],
      [J("VPN", "VPN"), J("MFA 例外あり", "MFA exceptions exist")],
      [J("共有アカウント", "Shared account"), J("複数ベンダー共用", "Shared across vendors")],
      [J("踏み台端末", "Bastion endpoint"), J("監視ログ欠損", "Monitoring gaps")],
      [J("内製管理ツール", "In-house admin tool"), J("バージョン旧 / 権限過剰", "Stale version / over-privileged")],
      [J("認証基盤", "Identity provider"), J("横断的な信頼関係", "Cross-tenant trust")],
      [J("OT 監視", "OT monitoring"), J("保守時間帯のみ境界開放", "Boundary opens only during maintenance")],
    ],
    lookFor: [
      J("委託先がどこまで到達可能か(到達可能性)", "How far each vendor can actually reach (reachability)"),
      J("共有アカウント / MFA 例外が業務影響経路上にあるか", "Whether shared accounts / MFA exceptions sit on impact paths"),
      J("作業申請(チケット)と接続ログが一致しているか", "Whether work orders match observed connections"),
      J("保守時間外でも経路が残っているか(時間条件)", "Whether paths remain outside maintenance windows (time conditions)"),
      J("その経路は最終的にどの重要業務に至るか", "Which mission-critical operation each path ultimately reaches"),
    ],
    output: J(
      "Vendor Access Graph として、ベンダー別 · 接続経路別の業務影響を可視化。Work Order Correlation により未承認接続を識別し、Privileged Session Context で保守作業中の権限拡張範囲を明らかにします。",
      "Vendor Access Graph visualises per-vendor, per-path business impact. Work Order Correlation flags unapproved connections; Privileged Session Context surfaces the privilege footprint during maintenance."
    ),
    metrics: [
      [J("高リスクパス", "High-risk paths"), J("12 本", "12"), J("3 本", "3")],
      [J("共有アカウント", "Shared accounts"), J("7 件", "7"), J("0 件", "0")],
      [J("MFA 例外", "MFA exceptions"), J("4 件", "4"), J("1 件", "1")],
      [J("未監視保守経路", "Unmonitored maintenance paths"), J("5 本", "5"), J("1 本", "1")],
    ],
  },
  {
    id: "02",
    jp: J("ID · 特権アカウントが攻撃パスになる構造リスク", "Identity & privilege as a structural attack surface"),
    en: J("Identity & privilege", "Identity & privilege"),
    essence: J(
      "グループネスト、サービスアカウント、緊急用 ID、特権の横断利用が、SSO · PAM · クラウド · OT 踏み台を貫いて重要業務に到達する。",
      "Group nesting, service accounts, break-glass IDs and cross-domain privilege use thread through SSO, PAM, cloud and OT bastions to reach critical operations."
    ),
    chain: [
      [J("一般ユーザー ID", "User identity"), J("退職者 / 異動後残存", "Stale after departure / role change")],
      [J("IdP / SSO", "IdP / SSO"), J("グループネスト経由で過剰権限", "Over-privileged via group nesting")],
      [J("特権昇格", "Privilege escalation"), J("緊急用アカウントの常用化", "Break-glass used routinely")],
      [J("サービスアカウント", "Service account"), J("所有者不明 · MFA 不可", "No owner / MFA-incapable")],
      [J("横断 SaaS / クラウド IAM", "Cross-org SaaS / cloud IAM"), J("横展開", "Lateral spread")],
      [J("本番 OT 踏み台", "Production OT bastion"), J("管理境界の交差", "Management boundary crossing")],
    ],
    lookFor: [
      J("ある ID が侵害された場合の業務影響(Privilege Blast Radius)", "Business impact if a given identity is compromised (privilege blast radius)"),
      J("グループネストによる過剰権限(Toxic Combination)", "Over-privilege from group nesting (toxic combinations)"),
      J("MFA 例外が業務影響経路上にあるか", "Whether MFA exceptions sit on impact paths"),
      J("緊急用 / サービスアカウントの所有者と利用文脈", "Owners and usage context for break-glass / service accounts"),
      J("特権 ID の横断利用 — IT と OT の管理境界を超えていないか", "Cross-domain use of privileged IDs — across IT/OT boundaries"),
    ],
    output: J(
      "Identity Attack Path Graph で、各 ID から重要業務までの到達距離と業務影響の総和を算出。Toxic Combination Detection で潜在的な権限結合を発見し、Access Review を業務影響順に自動生成します。",
      "Identity Attack Path Graph computes, for each identity, the distance to mission and the aggregate business impact. Toxic Combination Detection finds latent privilege joins; Access Review is auto-generated, ordered by impact."
    ),
    metrics: [
      [J("過剰権限 ID", "Over-privileged IDs"), J("186 件", "186"), J("24 件", "24")],
      [J("特権横断パス", "Cross-domain privilege paths"), J("21 本", "21"), J("4 本", "4")],
      [J("MFA 例外", "MFA exceptions"), J("12 件", "12"), J("2 件", "2")],
    ],
  },
  {
    id: "03",
    jp: J("SBOM · ソフトウェアサプライチェーンの業務影響", "SBOM and software supply chain — business impact"),
    en: J("Software supply chain", "Software supply chain"),
    essence: J(
      "部品台帳としての SBOM だけでは「どの業務が止まるか」は分からない。ランタイムと業務までの三段リネージが必要。",
      "An SBOM as a parts list alone cannot tell you which operations stop. You need a three-stage lineage — component to runtime to mission."
    ),
    chain: [
      [J("上流 OSS / OEM 部品", "Upstream OSS / OEM parts"), J("CVE / KEV / EOL", "CVE / KEV / EOL")],
      [J("内製ライブラリ", "Internal library"), J("依存伝播", "Dependency propagation")],
      [J("CI / CD", "CI / CD"), J("署名 · プロビナンス", "Signing & provenance")],
      [J("配布物 / コンテナ", "Artifacts / containers"), J("どのノードで稼働するか", "On which nodes they run")],
      [J("認証基盤 / 内製管理", "Auth & internal admin"), J("リスクの中継点", "Risk hop points")],
      [J("業務プロセス", "Business process"), J("顧客 · 拠点への波及", "Reach to customers and sites")],
    ],
    lookFor: [
      J("脆弱な部品はどのアプリ · どのランタイムに含まれるか", "Which apps and runtimes contain the vulnerable component"),
      J("その部品は実際に到達可能(Reachability)か、VEX で除外できるか", "Whether it is actually reachable, or excluded via VEX"),
      J("どの業務 · 認証 · 保守プロセスに接続しているか", "Which operations, auth and maintenance flows it touches"),
      J("顧客 · 拠点 · 拠点間契約への波及範囲(Blast Radius)はどこか", "The blast radius across customers, sites and inter-site contracts"),
      J("パッチが当てられない場合、代替対策で同等のリスク低減が可能か", "If patching is impossible, whether compensating controls give equivalent reduction"),
    ],
    output: J(
      "Component-to-Runtime-to-Mission の三段マッピングと、Reachability / VEX による影響確定。パッチ不能なリスクには Pixie Shield が代替対策と Defense ROI を提示します。",
      "A three-stage component → runtime → mission mapping, with reachability and VEX confirming actual impact. For unpatchable risks, Pixie Shield surfaces compensating controls and their Defense ROI."
    ),
    metrics: [
      [J("到達可能 CVE", "Reachable CVEs"), J("47 件", "47"), J("11 件", "11")],
      [J("VEX 確定除外", "VEX-confirmed exclusions"), J("0 件", "0"), J("36 件", "36")],
      [J("業務影響 Critical", "Critical-impact operations"), J("8 業務", "8"), J("2 業務", "2")],
    ],
  },
  {
    id: "04",
    jp: J("ランサムウェア後の復旧不能リスク", "Inability-to-recover risk after ransomware"),
    en: J("Recovery from ransomware", "Recovery from ransomware"),
    essence: J(
      "攻撃そのものより、復旧できないことが致命傷になる。バックアップは取れていても、復旧手順 · 復旧用 ID · 代替運用 · 復旧担当者が同時に揃わなければ業務は戻らない。",
      "It is the inability to recover, more than the attack itself, that is fatal. Backups alone are not enough — recovery procedures, recovery identities, alternate operations and recovery staff must all align for operations to return."
    ),
    chain: [
      [J("暗号化発生", "Encryption event"), J("基幹 + バックアップ管理基盤", "Core systems + backup management")],
      [J("復旧手順書", "Recovery runbook"), J("停止対象システム内に所在", "Stored inside the very system that is down")],
      [J("復旧用 ID", "Recovery identities"), J("AD / DNS / NTP / PKI に依存", "Depend on AD / DNS / NTP / PKI")],
      [J("代替運用", "Alternate operations"), J("未整備 · 未訓練", "Not built / not drilled")],
      [J("手動運転", "Manual operation"), J("担当者の属人化", "Tribal knowledge")],
      [J("復旧シーケンス", "Recovery sequence"), J("RTO / RPO 逸脱", "Breach of RTO / RPO")],
    ],
    lookFor: [
      J("バックアップは取れているか — そして「復元テスト」がされているか", "Are backups present — and have restore tests actually been run"),
      J("復旧手順書が停止対象システム内にないか(Recovery Dependency)", "Whether the runbook itself depends on the system being down (recovery dependency)"),
      J("復旧に必要な ID(AD · DNS · NTP · PKI · バックアップ管理基盤)は使えるか", "Whether recovery-time identities (AD / DNS / NTP / PKI / backup admin) are usable"),
      J("代替連絡網 · 手動運用が現実的に可能か", "Whether alternate comms and manual operation are realistically feasible"),
      J("RTO / RPO を満たせる復旧シーケンスが存在するか", "Whether a sequence exists that actually meets RTO / RPO"),
    ],
    output: J(
      "Recovery Dependency Graph で復旧の循環依存を発見。Minimum Viable Mission を起点に、復旧シーケンス最適化と Manual Operation Readiness の整備優先度を提示します。",
      "Recovery Dependency Graph finds circular recovery dependencies. From Minimum Viable Mission backwards, it surfaces recovery-sequence optimisation and Manual Operation Readiness priorities."
    ),
    metrics: [
      [J("復旧不能ポイント", "Unrecoverable points"), J("4 箇所", "4"), J("1 箇所", "1")],
      [J("RTO 逸脱業務", "Operations breaching RTO"), J("6 業務", "6"), J("1 業務", "1")],
      [J("循環依存", "Circular dependencies"), J("3 本", "3"), J("0 本", "0")],
    ],
  },
  {
    id: "05",
    jp: J("OT · 監視データ信頼性リスク(見えている世界が壊される)", "OT data integrity — when the world you see is corrupted"),
    en: J("OT data integrity", "OT data integrity"),
    essence: J(
      "攻撃者が制御そのものを変えなくても、監視データを改ざん · 遅延させれば、運用判断が崩れる。これはサイバー · フィジカル整合性の問題。",
      "Attackers do not need to change controls — tampering with or delaying telemetry alone collapses operational decisions. This is a cyber-physical integrity problem."
    ),
    chain: [
      [J("OT センサー", "OT sensor"), J("値の異常 / 欠損", "Anomalies / dropouts")],
      [J("中継ゲートウェイ", "Relay gateway"), J("時刻同期 · 片系停止", "Time-sync drift / single-leg loss")],
      [J("ヒストリアン", "Historian"), J("ログ整合性", "Log integrity")],
      [J("統合監視 / SCADA", "SCADA / unified monitor"), J("可視化レイヤー", "Presentation layer")],
      [J("AI / 予測保全", "AI / predictive maintenance"), J("入力データ依存", "Depends on input data")],
      [J("運用判断", "Operator decision"), J("誤指示 · 過剰反応", "Wrong instruction / over-reaction")],
    ],
    lookFor: [
      J("センサー値からダッシュボードまでのデータ流(Data Lineage)", "Data lineage from sensor to dashboard"),
      J("ログ欠損 / 監視経路の片系停止 / 時刻同期ズレ", "Log gaps, single-leg failures, time-sync drift"),
      J("センサー間の物理的整合性(温度と圧力の矛盾など)", "Physical consistency across sensors (e.g. temp vs. pressure)"),
      J("AI / 予測保全モデルの入力データ異常", "Anomalies in inputs to AI / predictive-maintenance models"),
      J("監視喪失 · 制御喪失(Loss of View / Loss of Control)時の代替確認手段", "Alternate verification under Loss of View / Loss of Control"),
    ],
    output: J(
      "Data Lineage Graph と Telemetry Confidence Score により、判断材料の信頼度を定量化。Cyber-Physical Consistency Check で物理的に矛盾するデータを検知します。",
      "Data Lineage Graph and Telemetry Confidence Score quantify how trustworthy each decision input is. Cyber-Physical Consistency Check flags data that violates physical reality."
    ),
    metrics: [
      [J("Confidence Low センサー", "Low-confidence sensors"), J("23 点", "23"), J("4 点", "4")],
      [J("冗長化欠落経路", "Paths missing redundancy"), J("7 本", "7"), J("1 本", "1")],
    ],
  },
  {
    id: "06",
    jp: J("正規作業者 · 誤変更による誘発リスク", "Risk induced by legitimate workers and erroneous changes"),
    en: J("Insider & change drift", "Insider & change drift"),
    essence: J(
      "正規権限による操作でも、作業文脈とズレれば重大リスクになる。攻撃ではなく、運用の正常な手順そのものが業務停止の引き金になる。",
      "Even legitimate, authorised actions become high risk when they drift from the work context. The trigger is not an attack — it is normal operational procedure itself."
    ),
    chain: [
      [J("作業申請", "Work order"), J("対象 · 時間帯 · 承認者", "Scope, window, approver")],
      [J("実作業", "Actual work"), J("対象範囲のズレ", "Scope drift")],
      [J("一時権限", "Temporary privilege"), J("作業後も残存", "Persists after work")],
      [J("構成変更", "Configuration change"), J("ロールバック未確認", "Rollback not verified")],
      [J("監査", "Audit"), J("事後検知 · タイムラグ", "Post-hoc detection, with lag")],
      [J("運用影響", "Operational impact"), J("想定外の業務停止", "Unintended stoppage")],
    ],
    lookFor: [
      J("作業申請(チケット) と実アクセス対象が一致しているか", "Whether the work order matches the actual targets accessed"),
      J("作業時間外の操作 · 想定外スコープへのアクセス(Change Drift)", "Out-of-window or out-of-scope actions (change drift)"),
      J("一時権限が作業後も残存していないか", "Whether temporary privileges persist after the job"),
      J("承認者 · 作業者 · 監査者が分離されているか(Segregation of Duties)", "Approver / operator / auditor separation (SoD)"),
      J("変更がロールバック可能か、対象業務への影響は何か", "Whether the change is rollbackable, and the business impact"),
    ],
    output: J(
      "Work Context Authorization により、作業申請内容に紐づく権限のみを動的に許可。Change Drift Detection で範囲外変更を即時に文脈化し、Rollback Readiness を提示します。",
      "Work Context Authorization grants only the privileges tied to the live work order. Change Drift Detection contextualises out-of-scope changes in real time; Rollback Readiness is surfaced explicitly."
    ),
    metrics: [
      [J("範囲外変更", "Out-of-scope changes"), J("34 件 / 月", "34 / mo"), J("6 件 / 月", "6 / mo")],
      [J("一時権限残存", "Persisting temp privileges"), J("21 件", "21"), J("2 件", "2")],
    ],
  },
  {
    id: "07",
    jp: J("他社事例から、自社の類似構造リスクを見つける", "Find structurally similar risks in your own org from peer incidents"),
    en: J("Structural risk intelligence", "Structural risk intelligence"),
    essence: J(
      "通常の脅威インテリジェンスは「攻撃者 · IP · ハッシュ · CVE」を共有する。Pixie は「壊れ方」そのものの構造を共有する。",
      "Conventional threat intelligence shares actors, IPs, hashes and CVEs. Pixie shares the structure of how things break."
    ),
    chain: [
      [J("他社インシデント", "Peer incident"), J("構造パターン抽出", "Extracted structural pattern")],
      [J("匿名化 / 一般化", "Anonymisation / generalisation"), J("プライバシー保護", "Privacy preservation")],
      [J("業界 · 業務適合度", "Industry & operation fit"), J("同種の重要業務", "Same class of critical ops")],
      [J("自社 Twin", "Your own Twin"), J("グラフ類似度マッチング", "Graph-similarity matching")],
      [J("類似構造の発見", "Similar-structure discovery"), J("部分一致 · 完全一致", "Partial / full matches")],
      [J("先行的な助言", "Pre-emptive advice"), J("対策候補 · 優先度", "Candidate actions & priority")],
    ],
    lookFor: [
      J("他社で発生したインシデントの構造的フィンガープリント", "Structural fingerprints of incidents at other organisations"),
      J("自社 Twin 内に類似のサブグラフが存在するか", "Whether your Twin contains a similar subgraph"),
      J("業界 · 業種 · 業務種別への適合度", "Fit to your industry, sector and operation class"),
      J("類似度 · 信頼度 · ソース情報", "Similarity, confidence and source information"),
      J("推奨される予防対策 — 自社で実行可能か", "Recommended preventive actions — and whether you can run them"),
    ],
    output: J(
      "Structural Risk Fingerprint と Graph Similarity Matching により、攻撃が起きる前に「同じ壊れ方」の存在を通知。Privacy-Preserving Intelligence で、参加企業のデータは匿名化されたまま流通します。",
      "Structural Risk Fingerprint and Graph Similarity Matching alert you to \"the same way of breaking\" before the attack happens. Privacy-Preserving Intelligence keeps participants' data anonymised in flight."
    ),
  },
];

export function UCAll() {
  return (
    <Fragment>
      {CASES.map((c, i) => (
        <UCCase key={c.id} {...c} alt={i % 2 === 1} />
      ))}
    </Fragment>
  );
}
