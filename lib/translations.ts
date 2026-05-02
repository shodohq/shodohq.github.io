export type Bilingual = { jp: string; en?: string };
export type Lang = "jp" | "en";

export const TRANSLATIONS: Record<string, Bilingual> = {
  // ========== Common ==========
  "cta.poc":            { jp: "PoCを相談する", en: "Request a PoC" },
  "cta.pocArrow":       { jp: "PoCを相談する  →", en: "Request a PoC  →" },
  "cta.pocShort":       { jp: "PoC", en: "PoC" },
  "cta.viewPDS":        { jp: "Pixie Defense Suiteを見る", en: "See Pixie Defense Suite" },
  "cta.partner":        { jp: "協業の相談", en: "Discuss partnership" },
  "cta.send":           { jp: "送信する  →", en: "Send  →" },

  "nav.pds":            { jp: "Pixie Defense Suite", en: "Pixie Defense Suite" },
  "nav.useCases":       { jp: "Use Cases", en: "Use Cases" },
  "nav.company":        { jp: "Company", en: "Company" },
  "nav.contact":        { jp: "Contact · お問い合わせ", en: "Contact" },
  "nav.menu":           { jp: "メニュー", en: "Menu" },

  "footer.tagline":     { jp: "社会機能を止めないためのレジリエンス・インフラをつくる会社です。",
                          en: "We build the resilience infrastructure that keeps society running." },
  "footer.subtag":      { jp: "Infrastructure for rapid resilience.", en: "Infrastructure for rapid resilience." },
  "footer.location":    { jp: "会津.", en: "Aizu." },
  "footer.companyCol":  { jp: "Company", en: "Company" },
  "footer.contactCol":  { jp: "Contact", en: "Contact" },
  "footer.companyInfo": { jp: "会社情報", en: "About" },
  "footer.news":        { jp: "News · 報道", en: "News · Press" },
  "footer.careers":     { jp: "Careers", en: "Careers" },
  "footer.poc":         { jp: "PoC相談", en: "PoC inquiry" },
  "footer.partners":    { jp: "Partners", en: "Partners" },
  "footer.brand":       { jp: "Shodo · 株式会社", en: "Shodo Inc." },
  "footer.copy":        { jp: "© 2026 株式会社衝動 · Shodo Inc.", en: "© 2026 Shodo Inc." },
  "footer.legal":       { jp: "Privacy · Terms · Trust", en: "Privacy · Terms · Trust" },

  // ========== Home ==========
  "home.hero.eyebrow":  { jp: "重要インフラ・防衛 · Critical infrastructure",
                          en: "Critical infrastructure & defense" },
  "home.hero.body":     {
    jp: "Pixie Defense Suiteは、組織・ID・委託先・システム・OT・ソフトウェア部品・復旧体制を Mission Graph として統合し、重要業務停止に至る構造的リスクと対策の優先度を明らかにします。",
    en: "Pixie Defense Suite integrates organisations, identities, vendors, systems, OT, software components and recovery procedures into a single Mission Graph — revealing the structural risks that stop critical operations and the order in which to fix them."
  },
  "home.hero.criticalPath": { jp: "1 critical path", en: "1 critical path" },

  "home.problem.eyebrow": { jp: "Problem · 課題", en: "Problem" },
  "home.problem.b1.jp": { jp: "分断された防御", en: "Disconnected defense" },
  "home.problem.b1.en": { jp: "Disconnected defense", en: "Eight tools, no unity" },
  "home.problem.b1.body": {
    jp: "EDR、SIEM、IAM、SBOM、OT監視、GRC — 重要インフラの防御は、いま八つ以上の道具に分散しています。",
    en: "EDR, SIEM, IAM, SBOM, OT monitoring, GRC — critical infrastructure defense is scattered across eight or more disconnected tools."
  },
  "home.problem.b2.jp": { jp: "関係性の連鎖", en: "Chains of relations" },
  "home.problem.b2.en": { jp: "Chains of relations", en: "It is the chain that breaks" },
  "home.problem.b2.body": {
    jp: "しかし重大インシデントは脆弱性単体ではなく、組織・ID・委託先・復旧手順の関係性の連鎖から生まれます。",
    en: "Major incidents do not come from a single vulnerability — they come from chains of relationships across organisations, identities, vendors and recovery procedures."
  },
  "home.problem.b3.jp": { jp: "見えない停止", en: "Invisible stoppage" },
  "home.problem.b3.en": { jp: "Invisible stoppage", en: "No one can explain it" },
  "home.problem.b3.body": {
    jp: "結果として「何が止まりうるか」「何から直すべきか」を一枚で説明できる組織は、ほとんど存在しません。",
    en: "As a result, almost no organisation can explain on a single page what could stop, and what to fix first."
  },

  "home.insight.eyebrow": { jp: "Core insight · 中核思想", en: "Core insight" },
  "home.insight.body1": {
    jp: "だからこそ、防御側もまた関係性の側に立たなければなりません。重要業務を起点に、人・ID・システム・委託先・OT・ソフトウェア部品・復旧手順をひとつのグラフとして統合する。",
    en: "Defenders must also stand on the side of relationships. Starting from each mission-critical operation, integrate people, identities, systems, vendors, OT, software components and recovery procedures into a single graph."
  },

  "home.modules.eyebrow": { jp: "Pixie Defense Suite · モジュール", en: "Pixie Defense Suite · Modules" },
  "home.modules.h2.l1":   { jp: "一つの平面で、", en: "One surface," },
  "home.modules.h2.l2":   { jp: "すべての関係を見る。", en: "every relationship." },
  "home.modules.body": {
    jp: "Pixie Defense Suite は十のモジュールで構成されます。Mission Graph を中核に、ID・委託先・SBOM・復旧・OT監視・経営判断までをひとつの平面でつなぎます。",
    en: "Pixie Defense Suite is built from ten modules. Around the Mission Graph at its core, it connects identity, vendors, SBOM, recovery, OT monitoring and executive decisions on a single plane."
  },

  "home.modules.g1":      { jp: "Core Platform", en: "Core Platform" },
  "home.modules.g1.en":   { jp: "コア基盤", en: "Core platform" },
  "home.modules.g2":      { jp: "Risk Modules", en: "Risk Modules" },
  "home.modules.g2.en":   { jp: "リスク領域", en: "Risk domains" },
  "home.modules.g3":      { jp: "Future", en: "Future" },
  "home.modules.g3.en":   { jp: "拡張領域", en: "Future modules" },

  "mod.PX-A.role":  { jp: "資産棚卸し", en: "Asset inventory" },
  "mod.PX-A.body":  { jp: "組織・資産・ID・委託先・業務・OT・クラウドを横断棚卸し。",
                      en: "Cross-cutting inventory of organisation, assets, identities, vendors, operations, OT and cloud." },
  "mod.PX-T.role":  { jp: "Mission Graph", en: "Mission Graph" },
  "mod.PX-T.body":  { jp: "企業構造を Mission Graph として表現する中核基盤。",
                      en: "The core engine that represents the enterprise as a Mission Graph." },
  "mod.PX-C.role":  { jp: "意思決定画面", en: "Decision surface" },
  "mod.PX-C.body":  { jp: "経営層・SOC・OT・CSIRTが同じグラフを見るための画面。",
                      en: "A surface where executives, SOC, OT and CSIRT see the same graph together." },
  "mod.PX-X.role":  { jp: "ID・委託先", en: "Identity & vendors" },
  "mod.PX-X.body":  { jp: "特権・委託先接続・リモート保守を解析。",
                      en: "Analyses privilege, vendor connections and remote maintenance paths." },
  "mod.PX-M.role":  { jp: "SBOM・部品", en: "SBOM & components" },
  "mod.PX-M.body":  { jp: "SBOM/HBOM/VEX/EOLを業務影響に接続。",
                      en: "Connects SBOM, HBOM, VEX and EOL data to business impact." },
  "mod.PX-R.role":  { jp: "復旧可能性", en: "Recoverability" },
  "mod.PX-R.body":  { jp: "バックアップ・RTO/RPO・代替運用を分析。",
                      en: "Analyses backups, RTO/RPO and alternate operations." },
  "mod.PX-S.role":  { jp: "対策優先度", en: "Defense priority" },
  "mod.PX-S.body":  { jp: "対策のROI、統制、チケット化を提示。",
                      en: "Surfaces defense ROI, controls and ticketed remediation." },
  "mod.PX-N.role":  { jp: "アラート文脈化", en: "Alert context" },
  "mod.PX-N.body":  { jp: "SIEM/EDR/PAM/IdPのアラートをグラフ上で文脈化。",
                      en: "Places alerts from SIEM, EDR, PAM and IdP into graph context." },
  "mod.PX-F.role":  { jp: "Secure by Design", en: "Secure by Design" },
  "mod.PX-F.body":  { jp: "内製ソフト・CI/CD・APIの設計検証を支援。",
                      en: "Supports design-time verification for internal software, CI/CD and APIs." },
  "mod.PX-I.role":  { jp: "構造的脅威", en: "Structural threat" },
  "mod.PX-I.body":  { jp: "匿名化された業界横断の類似構造リスク通知。",
                      en: "Anonymised, cross-industry alerts on structurally similar risks." },

  "home.why.eyebrow":   { jp: "Why Shodo · 衝動を選ぶ理由", en: "Why Shodo" },
  "home.why.h2.l1":     { jp: "既存の道具と", en: "Four axes that" },
  "home.why.h2.l2":     { jp: "重ならない四つの軸。", en: "don't overlap with what you have." },
  "home.why.aside":     { jp: "任務保証 MISSION ASSURANCE", en: "MISSION ASSURANCE" },

  "home.why.r1.jp": { jp: "Mission Graph", en: "Mission Graph" },
  "home.why.r1.en": { jp: "Graph-first", en: "Graph-first" },
  "home.why.r1.body": {
    jp: "攻撃パスではなく、業務停止までの構造を起点に設計。脆弱性スキャナーや CSPM では到達できない領域。",
    en: "Designed not from attack paths but from the structure that leads to business stoppage — territory unreachable by vuln scanners or CSPM."
  },
  "home.why.r2.jp": { jp: "Recovery-aware", en: "Recovery-aware" },
  "home.why.r2.en": { jp: "復旧可能性", en: "Recoverability" },
  "home.why.r2.body": {
    jp: "予防だけでなく、止まったあと何時間で何が戻るか — RTO・代替運用・手動運転の信頼性まで評価。",
    en: "Not only prevention. We evaluate how many hours until what comes back — RTO, alternate operations, the reliability of manual fallback."
  },
  "home.why.r3.jp": { jp: "Defense ROI", en: "Defense ROI" },
  "home.why.r3.en": { jp: "対策の優先度", en: "Priority of action" },
  "home.why.r3.body": {
    jp: "一つの統制でいくつのリスクパスが潰れるか。投資対効果を経営層に示せる形で提示。",
    en: "How many risk paths a single control closes — presented in a form executives can act on."
  },
  "home.why.r4.jp": { jp: "Temporal context", en: "Temporal context" },
  "home.why.r4.en": { jp: "時間条件", en: "Time conditions" },
  "home.why.r4.body": {
    jp: "夜間・保守時間・契約終了後・災害時 — 時間条件で変化するリスクを Temporal Mission Graph で扱う。",
    en: "Night-time, maintenance windows, post-contract, disaster — risk changes with time. We model it as a Temporal Mission Graph."
  },

  "home.cta.eyebrow":   { jp: "次の一手 · Take the next step", en: "Take the next step" },
  "home.cta.h2.l1":     { jp: "止まる前に、", en: "See the path," },
  "home.cta.h2.l2":     { jp: "道筋を見ておく。", en: "before it stops." },
  "home.cta.body": {
    jp: "重要インフラ・防衛関連の組織向けに、Mission Graph デモと PoC を実施しています。NDA前の詳細情報は不要です。関心領域だけお知らせください。",
    en: "For critical infrastructure and defense-related organisations, we run Mission Graph demos and PoCs. No pre-NDA details needed — just tell us your area of interest."
  },

  // ========== PDS ==========
  "pds.why.eyebrow":    { jp: "なぜ Mission Graph か", en: "Why a Mission Graph" },
  "pds.why.aside":      { jp: "関係性 RELATIONSHIP", en: "RELATIONSHIPS" },
  "pds.why.h2.l1":      { jp: "脆弱性を並べても、", en: "Listing vulnerabilities" },
  "pds.why.h2.l2":      { jp: "業務は守れない。", en: "will not protect operations." },
  "pds.why.body1": {
    jp: "一覧化されたCVEや構成不備は、防御計画を立てるには平面的すぎます。実際のインシデントは、複数のID・委託先・OT・復旧手順を跨いで連鎖します。",
    en: "Tabulated CVEs and misconfigurations are too flat for defense planning. Real incidents chain across identities, vendors, OT and recovery procedures."
  },
  "pds.why.body2": {
    jp: "Mission Graph は、その連鎖そのものを一級市民として扱います。重要業務を頂点に、停止までの経路を計算可能にします。",
    en: "The Mission Graph treats that chain itself as a first-class citizen. With each mission at the top, it makes paths to stoppage computable."
  },

  "pds.twin.eyebrow":   { jp: "Pixie Twin · 企業のデジタル双子", en: "Pixie Twin · Digital twin of the enterprise" },
  "pds.twin.h2.l1":     { jp: "企業構造を、", en: "Turn enterprise structure" },
  "pds.twin.h2.l2":     { jp: "そのまま", en: "directly" },
  "pds.twin.h2.l3":     { jp: "グラフにする。", en: "into a graph." },
  "pds.twin.body": {
    jp: "Pixie Twin は、組織のデジタル双子です。七つのレイヤーを縦断する関係性を抽出し、Mission Graph を構築します。各レイヤーは独立に更新可能で、リアルタイムに整合します。",
    en: "Pixie Twin is the digital twin of your organisation. It extracts the relationships that cut across seven layers to build the Mission Graph — each layer updatable independently, kept consistent in real time."
  },

  "pds.twin.l1.jp": { jp: "重要業務", en: "Mission" },
  "pds.twin.l1.en": { jp: "Mission", en: "Critical operations" },
  "pds.twin.l1.ex": { jp: "電力供給 · 送配電監視 · 顧客対応", en: "Power supply · grid monitoring · customer ops" },
  "pds.twin.l2.jp": { jp: "システム", en: "System / Application" },
  "pds.twin.l2.en": { jp: "System / Application", en: "Applications" },
  "pds.twin.l2.ex": { jp: "基幹SaaS · 内製ツール · ICS", en: "Core SaaS · in-house tools · ICS" },
  "pds.twin.l3.jp": { jp: "ID・権限", en: "Identity & Privilege" },
  "pds.twin.l3.en": { jp: "Identity & Privilege", en: "Identities" },
  "pds.twin.l3.ex": { jp: "社員 · 委託先 · 共有アカウント", en: "Employees · vendors · shared accounts" },
  "pds.twin.l4.jp": { jp: "委託先", en: "Vendor / Supplier" },
  "pds.twin.l4.en": { jp: "Vendor / Supplier", en: "Vendors" },
  "pds.twin.l4.ex": { jp: "保守ベンダー · MSP · クラウド", en: "Maintenance vendors · MSPs · cloud" },
  "pds.twin.l5.jp": { jp: "ソフト部品", en: "Software / SBOM" },
  "pds.twin.l5.en": { jp: "Software / SBOM", en: "Software supply" },
  "pds.twin.l5.ex": { jp: "OSS · ライブラリ · ファーム", en: "OSS · libraries · firmware" },
  "pds.twin.l6.jp": { jp: "インフラ・OT", en: "Infra / OT" },
  "pds.twin.l6.en": { jp: "Infra / OT", en: "Infrastructure & OT" },
  "pds.twin.l6.ex": { jp: "ネットワーク · 監視 · PLC", en: "Network · monitoring · PLCs" },
  "pds.twin.l7.jp": { jp: "復旧手順", en: "Recovery" },
  "pds.twin.l7.en": { jp: "Recovery", en: "Recovery procedures" },
  "pds.twin.l7.ex": { jp: "バックアップ · 代替運用 · 手動", en: "Backups · alternate ops · manual" },

  "pds.wf.eyebrow":     { jp: "Workflow · 導入ワークフロー", en: "Workflow · How it lands" },
  "pds.wf.h2":          { jp: "四段階で、関係性に降りる。", en: "Four steps into the relationships." },
  "pds.wf.s1.jp": { jp: "Discover", en: "Discover" },
  "pds.wf.s1.en": { jp: "把握", en: "Onboard" },
  "pds.wf.s1.body": {
    jp: "既存の資産・ID・委託先・OT・SBOM・バックアップ情報を取り込み、最初の Mission Graph を構築。",
    en: "Ingest existing assets, identities, vendors, OT, SBOM and backup data to build the first Mission Graph."
  },
  "pds.wf.s2.jp": { jp: "Analyze", en: "Analyze" },
  "pds.wf.s2.en": { jp: "解析", en: "Score" },
  "pds.wf.s2.body": {
    jp: "重要業務を頂点に、停止までの構造的経路と Mission Risk Score を算出。",
    en: "With each mission at the top, compute the structural paths to stoppage and the Mission Risk Score."
  },
  "pds.wf.s3.jp": { jp: "Decide", en: "Decide" },
  "pds.wf.s3.en": { jp: "判断", en: "Decide" },
  "pds.wf.s3.body": {
    jp: "一つの統制が潰すリスクパス本数を提示。経営層・SOC・OT が同一画面で判断。",
    en: "Surface how many risk paths a single control closes. Executives, SOC and OT decide on one screen."
  },
  "pds.wf.s4.jp": { jp: "Verify", en: "Verify" },
  "pds.wf.s4.en": { jp: "検証", en: "Verify" },
  "pds.wf.s4.body": {
    jp: "対策後のグラフ差分・復旧 RTO・代替運用の信頼性を継続的に検証。",
    en: "Continuously verify graph deltas after action, recovery RTO and the reliability of alternate operations."
  },

  "pds.out.eyebrow":    { jp: "Outputs · 出力される成果物", en: "Outputs · What you take away" },
  "pds.out.h2":         { jp: "現場と経営、同じ平面で。", en: "Frontline and boardroom, one surface." },
  "pds.out.o1.title":   { jp: "Mission Risk Map", en: "Mission Risk Map" },
  "pds.out.o1.en":      { jp: "業務停止リスクマップ", en: "Operations stoppage map" },
  "pds.out.o1.body": {
    jp: "重要業務ごとに、停止経路と現在のリスクスコア。",
    en: "For each critical operation, the paths to stoppage and the current risk score."
  },
  "pds.out.o2.title":   { jp: "Defense ROI Report", en: "Defense ROI Report" },
  "pds.out.o2.en":      { jp: "対策ROIレポート", en: "Action ROI report" },
  "pds.out.o2.body": {
    jp: "一つの統制でいくつのリスクパスが消えるか。投資判断資料。",
    en: "How many risk paths each control closes — material for investment decisions."
  },
  "pds.out.o3.title":   { jp: "Recovery Verification", en: "Recovery Verification" },
  "pds.out.o3.en":      { jp: "復旧可能性検証", en: "Recovery verification" },
  "pds.out.o3.body": {
    jp: "想定シナリオごとの RTO・代替運用・手動運転の信頼性。",
    en: "For each scenario, the RTO, alternate operations and manual-fallback reliability."
  },
  "pds.out.o4.title":   { jp: "Vendor Exposure", en: "Vendor Exposure" },
  "pds.out.o4.en":      { jp: "委託先依存マップ", en: "Vendor dependence map" },
  "pds.out.o4.body": {
    jp: "委託先別のID・接続経路・特権・契約期間と業務影響。",
    en: "Per-vendor identities, connection paths, privileges, contract windows and business impact."
  },
  "pds.out.o5.title":   { jp: "Software Bill Trace", en: "Software Bill Trace" },
  "pds.out.o5.en":      { jp: "SBOM トレース", en: "SBOM trace" },
  "pds.out.o5.body": {
    jp: "部品から業務影響まで、CVE・VEX・EOL の影響範囲を追跡。",
    en: "From component to business impact — trace the reach of CVE, VEX and EOL."
  },
  "pds.out.o6.title":   { jp: "Executive Summary", en: "Executive Summary" },
  "pds.out.o6.en":      { jp: "経営層サマリー", en: "Executive summary" },
  "pds.out.o6.body": {
    jp: "構造的リスクと優先対策を、説明可能な形で月次出力。",
    en: "Structural risks and priority actions, in an explainable monthly briefing."
  },

  "pds.aud.eyebrow":    { jp: "Audience · 対象顧客", en: "Audience" },
  "pds.aud.h2":         { jp: "社会機能の側に立つ組織と。", en: "Organisations that stand on the side of society." },
  "pds.aud.c1.jp": { jp: "重要インフラ", en: "Critical infrastructure" },
  "pds.aud.c1.en": { jp: "Critical infrastructure", en: "Critical infrastructure" },
  "pds.aud.c1.body": { jp: "電力 · 通信 · 水道 · 交通 · 医療", en: "Power · telecom · water · transport · healthcare" },
  "pds.aud.c2.jp": { jp: "防衛関連企業", en: "Defense industrial base" },
  "pds.aud.c2.en": { jp: "Defense industrial base", en: "Defense industrial base" },
  "pds.aud.c2.body": { jp: "装備品 · OT工場 · サプライチェーン", en: "Defense materiel · OT plants · supply chain" },
  "pds.aud.c3.jp": { jp: "製造業・OT", en: "Manufacturing & OT" },
  "pds.aud.c3.en": { jp: "Manufacturing & OT", en: "Manufacturing & OT" },
  "pds.aud.c3.body": { jp: "化学 · 半導体 · 重工業 · 食品", en: "Chemicals · semiconductors · heavy industry · food" },
  "pds.aud.c4.jp": { jp: "金融・決済", en: "Finance & payments" },
  "pds.aud.c4.en": { jp: "Finance & payments", en: "Finance & payments" },
  "pds.aud.c4.body": { jp: "銀行 · 取引所 · クリアリング", en: "Banks · exchanges · clearing" },
  "pds.aud.c5.jp": { jp: "官公庁・自治体", en: "Government" },
  "pds.aud.c5.en": { jp: "Government", en: "Government" },
  "pds.aud.c5.body": { jp: "中央省庁 · 自治体 · 独法", en: "Ministries · municipalities · agencies" },
  "pds.aud.c6.jp": { jp: "SIer · MSSP", en: "Partners" },
  "pds.aud.c6.en": { jp: "Partners", en: "Partners" },
  "pds.aud.c6.body": { jp: "MSSP · 監査会社 · CSIRT", en: "MSSPs · auditors · CSIRTs" },

  "pds.poc.eyebrow":    { jp: "PoC · 進め方", en: "PoC · How we run it" },
  "pds.poc.h2":         { jp: "NDA 前は、関心領域だけで十分です。", en: "Before NDA, your interest is enough." },
  "pds.poc.p1": {
    jp: "対象業務と関心領域の擦り合わせ。NDA前は構成情報を共有不要。",
    en: "Align on target operations and area of interest. No configuration data needed before NDA."
  },
  "pds.poc.p2": {
    jp: "抽象化サンプルと既往データから、最小 Mission Graph を構築。",
    en: "From abstracted samples and prior data, build the minimum Mission Graph."
  },
  "pds.poc.p3": {
    jp: "想定リスクパスと優先対策を提示。経営層向けレビュー。",
    en: "Surface likely risk paths and priority actions. Review with the executive team."
  },
  "pds.poc.p4": {
    jp: "本番データでの段階導入計画。データ取り扱いと法務枠組みの確定。",
    en: "Plan a staged rollout on production data. Finalise data handling and the legal framework."
  },

  // ========== UC ==========
  "uc.hero.eyebrow":    { jp: "Use Cases · ユースケース", en: "Use Cases" },
  "uc.hero.body": {
    jp: "重要インフラで起きる重大インシデントは、ほぼ常に複数の弱点が構造的に連鎖した結果です。以下は、Pixie Defense Suite が Mission Graph 上で扱う代表的なリスクパターンを、抽象化したシナリオとして整理したものです。",
    en: "Major incidents in critical infrastructure are almost always the result of multiple weaknesses structurally chained together. Below are abstracted scenarios of the typical risk patterns Pixie Defense Suite handles on the Mission Graph."
  },
  "uc.hero.disclaimer": {
    jp: "※ 実顧客の構成・攻撃手順・検知ルール・脆弱性詳細は公開しません。すべて防御側の分析例として再構成したものです。",
    en: "Note: real customer configurations, attack steps, detection rules and vulnerability details are not published. Everything here is reconstructed as a defender-side analytical example."
  },

  "uc.idx.01.jp": { jp: "委託先リモート保守リスク", en: "Vendor remote access" },
  "uc.idx.01.en": { jp: "Vendor remote access", en: "Vendor remote access" },
  "uc.idx.02.jp": { jp: "ID · 特権アカウントリスク", en: "Identity & privilege" },
  "uc.idx.02.en": { jp: "Identity & privilege", en: "Identity & privilege" },
  "uc.idx.03.jp": { jp: "SBOM · ソフトウェアサプライチェーン", en: "Software supply chain" },
  "uc.idx.03.en": { jp: "Software supply chain", en: "Software supply chain" },
  "uc.idx.04.jp": { jp: "ランサムウェア後の復旧不能リスク", en: "Recovery from ransomware" },
  "uc.idx.04.en": { jp: "Recovery from ransomware", en: "Recovery from ransomware" },
  "uc.idx.05.jp": { jp: "OT · 監視データ信頼性リスク", en: "OT data integrity" },
  "uc.idx.05.en": { jp: "OT data integrity", en: "OT data integrity" },
  "uc.idx.06.jp": { jp: "正規作業者 · 誤変更リスク", en: "Insider & change drift" },
  "uc.idx.06.en": { jp: "Insider & change drift", en: "Insider & change drift" },
  "uc.idx.07.jp": { jp: "類似構造リスクインテリジェンス", en: "Structural risk intelligence" },
  "uc.idx.07.en": { jp: "Structural risk intelligence", en: "Structural risk intelligence" },

  "uc.label.essence":   { jp: "本質 · Essence", en: "Essence" },
  "uc.label.chain":     { jp: "Chain · 連鎖", en: "Chain" },
  "uc.label.examines":  { jp: "Pixie が見るもの · What Pixie examines", en: "What Pixie examines" },
  "uc.label.output":    { jp: "Pixie の出力 · Output", en: "Output" },
  "uc.label.effect":    { jp: "対策効果の例 · Effect example", en: "Effect example" },
  "uc.label.missionImpact": { jp: "Mission Impact", en: "Mission Impact" },
  "uc.terminal":        { jp: "重要業務停止", en: "Mission stoppage" },

  // ========== Company ==========
  "co.hero.eyebrow":    { jp: "Company · 会社情報", en: "Company" },
  "co.hero.body": {
    jp: "株式会社衝動は、危機の中で社会機能を止めないためのレジリエンス・インフラをつくる会社です。サイバー領域では Pixie Defense Suite を、災害領域では復旧モジュール群を提供します。",
    en: "Shodo Inc. builds the resilience infrastructure that keeps society running through a crisis. In cyber, we ship Pixie Defense Suite; in disaster, recovery modules."
  },
  "co.hero.aside":      { jp: "衝動 — 社会機能を、止めない", en: "Shodo — keep society running" },

  "co.purpose.eyebrow": { jp: "Purpose · 存在意義", en: "Purpose" },
  "co.purpose.q.l1":    { jp: "社会機能は、誰かが守らなければ止まる。", en: "Society does not run unless someone protects it." },
  "co.purpose.q.l2.pre":{ jp: "私たちはその", en: "We will be that " },
  "co.purpose.q.l2.em": { jp: "誰か", en: "someone" },
  "co.purpose.q.l2.post":{ jp: "になる。", en: "." },

  "co.principles.eyebrow": { jp: "Principles · 原則", en: "Principles" },
  "co.principles.h2":      { jp: "私たちが守る、五つの態度。", en: "Five attitudes we hold to." },

  "co.p1.jp": { jp: "Resilience", en: "Resilience" },
  "co.p1.en": { jp: "回復可能性", en: "Recoverability" },
  "co.p1.body": { jp: "止めないことではなく、止まっても戻れること。",
                  en: "Not the absence of stoppage, but the ability to return after one." },
  "co.p2.jp": { jp: "Safety", en: "Safety" },
  "co.p2.en": { jp: "安全性", en: "Safety" },
  "co.p2.body": { jp: "人命と社会機能の側に、常に立つ。",
                  en: "Always stand on the side of human life and societal function." },
  "co.p3.jp": { jp: "Responsible", en: "Responsible" },
  "co.p3.en": { jp: "責任ある運用", en: "Responsible practice" },
  "co.p3.body": { jp: "攻撃的に見える表現を避け、防御に徹する。",
                  en: "Avoid offensive framing. Stay strictly on the defensive side." },
  "co.p4.jp": { jp: "Defense-first", en: "Defense-first" },
  "co.p4.en": { jp: "防御一義", en: "Defense first" },
  "co.p4.body": { jp: "攻撃パスを売らない。意思決定だけを支援する。",
                  en: "We do not sell attack paths. We support decisions only." },
  "co.p5.jp": { jp: "Human-centered", en: "Human-centered" },
  "co.p5.en": { jp: "人を中心に", en: "People at the centre" },
  "co.p5.body": { jp: "判断する人と、影響を受ける人の側に立つ。",
                  en: "Stand on the side of those who decide and those who are affected." },

  "co.info.eyebrow":    { jp: "Company info · 会社概要", en: "Company info" },
  "co.info.h2":         { jp: "基本情報。", en: "The basics." },
  "co.info.r1.k":       { jp: "会社名", en: "Company name" },
  "co.info.r1.v":       { jp: "株式会社衝動 · Shodo Inc.", en: "Shodo Inc. (株式会社衝動)" },
  "co.info.r2.k":       { jp: "設立", en: "Founded" },
  "co.info.r2.v":       { jp: "2025年5月", en: "May 2025" },
  "co.info.r3.k":       { jp: "代表者", en: "Representative" },
  "co.info.r3.v":       { jp: "代表取締役 ※ 開示準備中", en: "CEO — disclosure pending" },
  "co.info.r4.k":       { jp: "所在地", en: "Location" },
  "co.info.r4.v":       { jp: "会津", en: "Aizu" },
  "co.info.r5.k":       { jp: "事業内容", en: "Business" },
  "co.info.r5.v":       {
    jp: "Pixie Defense Suite の開発 · 提供 / 重要インフラ向け技術コンサルティング",
    en: "Development and delivery of Pixie Defense Suite / technical consulting for critical infrastructure"
  },
  "co.info.r6.k":       { jp: "出資", en: "Investors" },
  "co.info.r6.v":       { jp: "スパークル株式会社 ほか", en: "Sparkle Inc. and others" },
  "co.info.r7.k":       { jp: "由来", en: "Origin" },
  "co.info.r7.v":       { jp: "会津大学・東京都立大学の学生によって設立",
                          en: "Founded by students of University of Aizu and Tokyo Metropolitan University" },

  "co.what.eyebrow":    { jp: "What we build · 私たちがつくるもの", en: "What we build" },
  "co.what.h2.pre":     { jp: "一つの平面に、", en: "One surface," },
  "co.what.h2.em":      { jp: "集中する", en: "one focus" },
  "co.what.h2.post":    { jp: "。", en: "." },
  "co.what.p1.jp":      { jp: "プラットフォーム", en: "Platform" },
  "co.what.p1.en":      { jp: "Platform", en: "Platform" },
  "co.what.p1.body":    {
    jp: "Pixie Defense Suite — 組織・ID・委託先・OT・ソフトウェア部品・復旧体制を Mission Graph として統合し、業務停止に至る構造的リスクを可視化します。",
    en: "Pixie Defense Suite — integrating organisation, identity, vendors, OT, software components and recovery into a single Mission Graph to surface structural risks that stop operations."
  },
  "co.what.p2.jp":      { jp: "コンサルティング", en: "Consulting" },
  "co.what.p2.en":      { jp: "Consulting", en: "Consulting" },
  "co.what.p2.body":    {
    jp: "重要インフラ・防衛関連組織向けに、Mission Graph の導入、構造的リスク評価、対策優先度の意思決定を支援します。",
    en: "For critical infrastructure and defense organisations, we support Mission Graph adoption, structural risk assessment and prioritised action decisions."
  },

  // ========== Contact ==========
  "ct.hero.eyebrow":    { jp: "Contact · お問い合わせ", en: "Contact" },
  "ct.hero.h1.l1":      { jp: "関心領域だけ、", en: "Just tell us" },
  "ct.hero.h1.l2":      { jp: "お知らせください。", en: "what you’re curious about." },
  "ct.hero.body": {
    jp: "実構成・脆弱性情報・ベンダー名・防衛関連プロジェクト名は NDA 前にお伺いしません。最初は関心テーマと業務領域だけで十分です。",
    en: "We do not ask for actual configurations, vulnerability details, vendor names or defense project names before NDA. Topic and business domain are enough to start."
  },

  "ct.kindLabel":       { jp: "問い合わせ種別", en: "Inquiry type" },
  "ct.k.poc":           { jp: "重要インフラ向けPoC相談", en: "Critical-infrastructure PoC" },
  "ct.k.defense":       { jp: "防衛 · 公共領域での協業", en: "Defense / public-sector collaboration" },
  "ct.k.partner":       { jp: "SIer · MSSP · 監査会社", en: "SIer · MSSP · Auditor" },
  "ct.k.press":         { jp: "講演 · 取材 · 寄稿", en: "Talks · press · writing" },
  "ct.k.career":        { jp: "採用 · 共同研究", en: "Careers · joint research" },

  "ct.dontAsk":         { jp: "聞かないこと", en: "What we don't ask" },
  "ct.dontAsk.1":       { jp: "実ネットワーク構成", en: "Actual network topology" },
  "ct.dontAsk.2":       { jp: "VPN製品名・重要システム名", en: "VPN or critical-system product names" },
  "ct.dontAsk.3":       { jp: "未修正の脆弱性情報", en: "Unpatched vulnerability details" },
  "ct.dontAsk.4":       { jp: "委託先名 · 防衛関連プロジェクト名", en: "Vendor or defense project names" },

  "ct.f.name":          { jp: "氏名 · Name", en: "Name" },
  "ct.f.namePh":        { jp: "山田 太郎", en: "Jane Doe" },
  "ct.f.org":           { jp: "会社・組織名 · Organization", en: "Organisation" },
  "ct.f.orgPh":         { jp: "株式会社○○", en: "Acme Inc." },
  "ct.f.role":          { jp: "部署・役職 · Role", en: "Department · Role" },
  "ct.f.rolePh":        { jp: "情報セキュリティ部 部長", en: "Head of Information Security" },
  "ct.f.email":         { jp: "メールアドレス · Email", en: "Email" },
  "ct.f.domain":        { jp: "対象領域 · Domain", en: "Domain" },
  "ct.f.topics":        { jp: "関心テーマ · Topics", en: "Topics" },
  "ct.f.topicsHint":    { jp: "複数選択可", en: "Multiple allowed" },
  "ct.f.message":       { jp: "ご相談内容 · Message", en: "Message" },
  "ct.f.messageHint":   { jp: "関心領域 · 想定ユースケースのみで結構です。実構成情報の記載は不要です。",
                          en: "Just topic and intended use case is fine — no actual configuration details needed." },
  "ct.f.messagePh":     { jp: "例: 委託先リモート保守経路の構造的リスクを評価したい。",
                          en: "e.g. We want to assess structural risk in our vendor remote-access paths." },
  "ct.f.privacy":       { jp: "お預かりした情報は当社の プライバシーポリシー に基づき取り扱います。",
                          en: "Submissions are handled in line with our Privacy Policy." },
  "ct.f.sent":          { jp: "送信ありがとうございます。担当者よりご連絡いたします。",
                          en: "Thanks for your message. We will be in touch." },

  "ct.d.critical":      { jp: "重要インフラ", en: "Critical infrastructure" },
  "ct.d.defense":       { jp: "防衛関連", en: "Defense" },
  "ct.d.ot":            { jp: "製造OT", en: "Manufacturing / OT" },
  "ct.d.finance":       { jp: "金融", en: "Finance" },
  "ct.d.telecom":       { jp: "通信", en: "Telecom" },
  "ct.d.gov":           { jp: "官公庁", en: "Government" },
  "ct.d.other":         { jp: "その他", en: "Other" },

  "ct.t.vendor":        { jp: "委託先接続リスク", en: "Vendor access risk" },
  "ct.t.identity":      { jp: "ID · 特権リスク", en: "Identity & privilege" },
  "ct.t.sbom":          { jp: "SBOMリスク", en: "SBOM risk" },
  "ct.t.recovery":      { jp: "復旧可能性", en: "Recoverability" },
  "ct.t.ot":            { jp: "OTリスク", en: "OT risk" },
  "ct.t.exec":          { jp: "経営層向け可視化", en: "Executive visibility" },
};
