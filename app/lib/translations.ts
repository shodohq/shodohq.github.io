export const translations = {
  nav: {
    langJp: { jp: "JP", en: "JP" },
    langEn: { jp: "EN", en: "EN" },
    langSeparator: { jp: "·", en: "·" },
    brandKanji: { jp: "衝動", en: "衝動" },
    brandEn: { jp: "Shodo", en: "Shodo" },
    ctaLong: { jp: "PoCを相談する", en: "Request a PoC" },
    ctaShort: { jp: "PoC", en: "PoC" },
    contactLink: { jp: "Contact · お問い合わせ", en: "Contact" },
  },
  footer: {
    brand: { jp: "Shodo Inc. · 株式会社", en: "Shodo Inc." },
    tagline: {
      jp: "社会機能を止めないためのレジリエンス・インフラをつくる会社です。",
      en: "We build the resilience infrastructure that keeps society running.",
    },
    subtag: {
      jp: "Infrastructure for rapid resilience.",
      en: "Infrastructure for rapid resilience.",
    },
    location: { jp: "会津.", en: "Aizu." },
    companyCol: { jp: "Company", en: "Company" },
    contactCol: { jp: "Contact", en: "Contact" },
    companyInfo: { jp: "会社情報", en: "About" },
    inquiry: { jp: "お問い合わせ", en: "Contact" },
    email: { jp: "info@shodohq.com", en: "info@shodohq.com" },
    copy: { jp: "© 2026 株式会社衝動 · Shodo Inc.", en: "© 2026 Shodo Inc." },
  },
  home: {
    hero: {
      eyebrow: {
        jp: "Cyber Risk Response Platform",
        en: "Cyber Risk Response Platform",
      },
      h1l1: { jp: "事業継続と開発速度を守る、", en: "A cyber risk response" },
      h1l2: { jp: "", en: "platform that protects" },
      h1l3: { jp: "", en: "continuity and" },
      h1em: { jp: "サイバーリスク対応基盤", en: "development speed" },
      h1dot: { jp: "。", en: "." },
      body: {
        jp: "分断されたセキュリティ・業務・開発情報を統合し、サイバーリスクを「何が止まるか」「何を先に直すか」「どう対応するか」までつなげます。",
        en: "We integrate fragmented security, business and development information, and connect cyber risk all the way through to “what stops,” “what to fix first,” and “how to respond.”",
      },
      quote: {
        jp: "危険度順ではなく、事業を止めない順番で対応する。",
        en: "Not in order of severity — in the order that keeps the business running.",
      },
      ctaPrimary: { jp: "ご相談ください  →", en: "Talk to us  →" },
      ctaSecondary: { jp: "製品を見る", en: "See the products" },
      cardLabel: { jp: "Risk Graph · sample", en: "Risk Graph · sample" },
      cardCriticalPath: { jp: "1 critical path", en: "1 critical path" },
      cardNodes: { jp: "NODES", en: "NODES" },
      cardEdges: { jp: "EDGES", en: "EDGES" },
      cardRisk: { jp: "RISK", en: "RISK" },
    },
    whyNow: {
      eyebrow: {
        jp: "Why Now · 市場背景",
        en: "Why now · Market context",
      },
      intro: {
        jp: "攻撃は速く、経路は複雑に、影響は事業全体へ。",
        en: "Attacks are faster, paths are more complex, and the impact reaches the whole business.",
      },
      c1head: { jp: "攻撃の速度", en: "Speed of attack" },
      c1stat: { jp: "29分", en: "29 min" },
      c1body: {
        jp: "侵入から横展開までの平均時間は、短時間化しています。",
        en: "The average time from intrusion to lateral movement keeps getting shorter.",
      },
      c1src: {
        jp: "出典：CrowdStrike, 2026 Global Threat Report",
        en: "Source: CrowdStrike, 2026 Global Threat Report",
      },
      c2head: { jp: "経路の複雑化", en: "Complex paths" },
      c2stat: { jp: "約3割", en: "~30%" },
      c2body: {
        jp: "不正アクセス被害事例のうち、取引先・委託先などを通じた二次被害として公表された割合。",
        en: "Share of disclosed unauthorised-access cases that occurred as secondary damage via suppliers or vendors.",
      },
      c2src: {
        jp: "出典：トレンドマイクロ 2025年上半期国内セキュリティインシデント分析",
        en: "Source: Trend Micro, H1 2025 Japan security incident analysis",
      },
      c2note: {
        jp: "IPA「情報セキュリティ10大脅威 2025」でも、サプライチェーン・委託先を狙った攻撃は組織向け脅威の上位に位置づけられています。",
        en: "IPA “10 Major Security Threats 2025” also ranks supply-chain and vendor-targeted attacks among the top threats to organisations.",
      },
      c3head: { jp: "業務への影響", en: "Operational impact" },
      c3stat: { jp: "100日超", en: "100+ days" },
      c3body: {
        jp: "侵害後の完全復旧には、100日を超えるケースもあります。",
        en: "Full recovery after a breach can take more than 100 days.",
      },
      c3src: {
        jp: "出典：IBM, Cost of a Data Breach Report 2024",
        en: "Source: IBM, Cost of a Data Breach Report 2024",
      },
      disclaimer: {
        jp: "※各数値は外部公開資料に基づく市場背景であり、当社製品の効果・性能を示すものではありません。",
        en: "※ Each figure is drawn from publicly available third-party reports and indicates market context — it does not represent the effect or performance of our products.",
      },
    },
    problem: {
      eyebrow: { jp: "Problem · 課題", en: "Problem · 課題" },
      h2l1: { jp: "リスクは見えている。", en: "The risk is visible." },
      h2l2: { jp: "けれど、", en: "But it never reaches" },
      h2em: { jp: "判断と実行", en: "decision and action" },
      h2l3: { jp: "に", en: "" },
      h2dot: { jp: "つながらない。", en: "." },
      body: {
        jp: "結果として、高スコア順・検知順の総当たり対応に陥り、工数は増える一方で、重要なリスクが残りやすくなります。",
        en: "The result is brute-force response in order of score or detection — effort keeps rising, while the risks that matter are left behind.",
      },
      b1jp: { jp: "情報がつながらない", en: "Information stays disconnected" },
      b1en: { jp: "Disconnected", en: "Disconnected" },
      b1body: {
        jp: "セキュリティや運用に必要な情報が、複数のツールや部門に分散している。",
        en: "The information security and operations need is scattered across multiple tools and departments.",
      },
      b2jp: { jp: "優先度が業務に合わない", en: "Priorities miss the business" },
      b2en: { jp: "Misaligned", en: "Misaligned" },
      b2body: {
        jp: "検知結果が重要業務への影響度と結びつかず、本当の優先度が見えない。",
        en: "Detections are not tied to impact on critical operations, so the real priority stays invisible.",
      },
      b3jp: { jp: "何を直すべきか分からない", en: "Unclear what to fix" },
      b3en: { jp: "No action", en: "No action" },
      b3body: {
        jp: "優先すべきリスクが、コード修正・ID見直し・経路遮断・復旧手順などの具体作業に落ちない。",
        en: "Risks never translate into concrete work — code fixes, ID reviews, path isolation, recovery steps.",
      },
    },
    platform: {
      eyebrow: {
        jp: "How it works · 中核思想",
        en: "How it works · 中核思想",
      },
      h2: {
        jp: "分断されたリスク情報を、判断と対応へつなぎ直す。",
        en: "Reconnect fragmented risk information to decision and response.",
      },
      quote: {
        jp: "危険度順ではなく、事業を止めない順番で対応する。",
        en: "Not in order of severity — in the order that keeps the business running.",
      },
      s1n: { jp: "01", en: "01" },
      s1key: { jp: "CONNECT", en: "CONNECT" },
      s1jp: { jp: "つなぐ", en: "つなぐ" },
      s1body: {
        jp: "分断されたセキュリティ・業務・開発情報を統合する。",
        en: "Integrate fragmented security, business and development information.",
      },
      s2n: { jp: "02", en: "02" },
      s2key: { jp: "INTERPRET", en: "INTERPRET" },
      s2jp: { jp: "意味づける", en: "意味づける" },
      s2body: {
        jp: "リスクを業務影響・攻撃経路・復旧の観点で評価する。",
        en: "Evaluate each risk by business impact, attack path and recovery.",
      },
      s3n: { jp: "03", en: "03" },
      s3key: { jp: "FOCUS", en: "FOCUS" },
      s3jp: { jp: "絞り込む", en: "絞り込む" },
      s3body: {
        jp: "本当に優先すべきリスクを特定する。",
        en: "Identify the risks that truly deserve priority.",
      },
      s4n: { jp: "04", en: "04" },
      s4key: { jp: "ACT", en: "ACT" },
      s4jp: { jp: "対応に繋ぐ", en: "対応に繋ぐ" },
      s4body: {
        jp: "業務・運用・開発それぞれの対策案へ落とす。",
        en: "Turn them into concrete countermeasures for business, operations and development.",
      },
    },
    products: {
      eyebrow: { jp: "Products · 製品", en: "Products · 製品" },
      h2l1: { jp: "守る対象に合わせた、", en: "Two platforms," },
      h2l2: { jp: "2つの", en: "matched to " },
      h2em: { jp: "サイバーリスク対応基盤", en: "what you protect" },
      h2dot: { jp: "。", en: "." },
      body: {
        jp: "どちらも検知で終わらせず、リスクを優先順位と具体的な対応につなげます。業務側と開発側、それぞれの現場に向けた2製品です。",
        en: "Both go beyond detection — connecting risk to priority and concrete response, for the business side and the development side respectively.",
      },
      layersLabel: { jp: "対象領域", en: "Layers" },
      p1tag: { jp: "Product 01", en: "Product 01" },
      p1name: { jp: "Pixie Defense Suite", en: "Pixie Defense Suite" },
      p1role: {
        jp: "重要業務停止リスクの対応基盤",
        en: "Response platform for critical-operation stoppage risk",
      },
      p1layer1: { jp: "業務", en: "Business" },
      p1layer2: { jp: "運用", en: "Operations" },
      p1layer3: { jp: "復旧", en: "Recovery" },
      p1body: {
        jp: "放置すると何が止まるか、何から対策すべきかを示す。",
        en: "Shows what would stop if a risk is left unaddressed, and what to defend first.",
      },
      p2tag: { jp: "Product 02", en: "Product 02" },
      p2name: { jp: "Pixie Shield", en: "Pixie Shield" },
      p2role: {
        jp: "開発現場向けの脆弱性対応基盤",
        en: "Vulnerability response platform for development teams",
      },
      p2layer1: { jp: "開発", en: "Development" },
      p2layer2: { jp: "コード", en: "Code" },
      p2body: {
        jp: "検知結果から、何を先に直し、どう直すかを示す。",
        en: "Shows, from detection results, what to fix first and how to fix it.",
      },
    },
    useCases: {
      eyebrow: {
        jp: "Use Cases · ユースケース",
        en: "Use cases · ユースケース",
      },
      h2: {
        jp: "課題から入る、代表的なユースケース。",
        en: "Entry points, by the question you start from.",
      },
      body: {
        jp: "製品からではなく、課題から。それぞれに合う製品へとつながります。",
        en: "Start from a question, not a product. Each connects to the platform that fits.",
      },
      q1: {
        jp: "限られた予算で、何から対策すべきか決めたい。",
        en: "We need to decide what to defend first on a limited budget.",
      },
      q2: {
        jp: "侵害時に、どの業務が止まるのか即座に把握したい。",
        en: "In a breach, we need to know instantly which operations stop.",
      },
      q3: {
        jp: "大量の検知結果から、直すべきものを絞り込みたい。",
        en: "We need to narrow a flood of detections down to what to fix.",
      },
      q4: {
        jp: "残存脆弱性を抱えたまま出荷してよいか判断したい。",
        en: "We need to judge whether to ship with residual vulnerabilities.",
      },
    },
    company: {
      eyebrow: {
        jp: "Company · 会社情報",
        en: "Company",
      },
      h2: {
        jp: "会津から、セキュリティソフトウェアをつくる。",
        en: "A team building security software in Aizu.",
      },
      k1: { jp: "会社名", en: "Company" },
      v1: {
        jp: "株式会社衝動 · Shodo Inc.",
        en: "Shodo Inc. (株式会社衝動)",
      },
      k2: { jp: "設立", en: "Founded" },
      v2: { jp: "2025.05.01", en: "2025.05.01" },
      k3: { jp: "所在地", en: "Location" },
      v3: {
        jp: "福島県 会津若松市",
        en: "Aizuwakamatsu, Fukushima",
      },
      k4: { jp: "代表者", en: "Representative" },
      v4: { jp: "髙木 皓介", en: "Kosuke Takagi" },
    },
    cta: {
      eyebrow: {
        jp: "Contact · お問い合わせ",
        en: "Contact · お問い合わせ",
      },
      h2: { jp: "ご相談ください。", en: "Talk to us." },
      body: {
        jp: "製品デモ、PoC、導入相談、技術的なご質問まで承ります。事業の重要業務に対する具体的なリスクを起点に、最適な進め方をご提案します。",
        en: "From product demos and PoCs to implementation and technical questions. Starting from the concrete risks to your critical operations, we propose the best way forward.",
      },
      button: {
        jp: "お問い合わせフォームへ  →",
        en: "Go to contact form  →",
      },
    },
  },
  contact: {
    hero: {
      eyebrow: {
        jp: "Contact · お問い合わせ",
        en: "Contact",
      },
      h2: { jp: "ご相談ください。", en: "Talk to us." },
      body: {
        jp: "製品デモ、PoC、導入相談、技術的なご質問まで承ります。事業の重要業務に対する具体的なリスクを起点に、最適な進め方をご提案します。",
        en: "From product demos and PoCs to implementation and technical questions. Starting from the concrete risks to your critical operations, we propose the best way forward.",
      },
      note: {
        jp: "初回のお問い合わせでは、実ネットワーク構成、未修正の脆弱性詳細、ベンダー名、顧客名、社外秘のプロジェクト名などの機微情報は不要です。まずは関心のある製品、課題、相談内容をお知らせください。",
        en: "For a first inquiry, sensitive information — actual network topology, unpatched vulnerability details, vendor or customer names, confidential project names — is not required. Just tell us the products, challenges or topics you are interested in.",
      },
    },
    form: {
      kindLabel: {
        jp: "問い合わせ種別",
        en: "Inquiry type",
      },
      kind1: {
        jp: "製品デモを希望",
        en: "Request a product demo",
      },
      kind2: {
        jp: "PoCについて相談したい",
        en: "Talk about a PoC",
      },
      kind3: {
        jp: "導入について相談したい",
        en: "Talk about adoption",
      },
      kind4: {
        jp: "技術的な質問をしたい",
        en: "Ask a technical question",
      },
      kind5: {
        jp: "パートナー・協業・その他",
        en: "Partnership / other",
      },
      sensitiveLabel: {
        jp: "初回のお問い合わせで、機微情報は不要です",
        en: "Sensitive information is not needed for a first inquiry",
      },
      sensitive1: {
        jp: "実ネットワーク構成",
        en: "Actual network topology",
      },
      sensitive2: {
        jp: "未修正の脆弱性詳細",
        en: "Unpatched vulnerability details",
      },
      sensitive3: {
        jp: "ベンダー名・顧客名",
        en: "Vendor or customer names",
      },
      sensitive4: {
        jp: "社外秘のプロジェクト名",
        en: "Confidential project names",
      },
      sensitive5: {
        jp: "認証情報・アクセス情報",
        en: "Credentials or access information",
      },
      companyLabel: { jp: "会社情報", en: "Company" },
      companyName: {
        jp: "株式会社衝動 · Shodo Inc.",
        en: "Shodo Inc. (株式会社衝動)",
      },
      companyFounded: { jp: "2025.05.01", en: "2025.05.01" },
      companyLocation: {
        jp: "福島県 会津若松市",
        en: "Aizuwakamatsu, Fukushima",
      },
      companyEmail: { jp: "info@shodohq.com", en: "info@shodohq.com" },
      labelName: { jp: "氏名 · Name", en: "Name" },
      phName: { jp: "山田 太郎", en: "Jane Doe" },
      labelOrg: {
        jp: "会社・組織名 · Organization",
        en: "Organisation",
      },
      phOrg: { jp: "株式会社○○", en: "Acme Inc." },
      labelRole: {
        jp: "部署・役職 · Role",
        en: "Department · Role",
      },
      phRole: {
        jp: "情報セキュリティ部 部長",
        en: "Head of Information Security",
      },
      labelEmail: { jp: "メールアドレス · Email", en: "Email" },
      phEmail: { jp: "name@example.com", en: "name@example.com" },
      labelProduct: {
        jp: "関心のある製品 · Product",
        en: "Product of interest",
      },
      product1: { jp: "Pixie Defense Suite", en: "Pixie Defense Suite" },
      product2: { jp: "Pixie Shield", en: "Pixie Shield" },
      product3: {
        jp: "まだ決まっていない / 相談しながら整理したい",
        en: "Not decided yet / want to figure it out together",
      },
      labelTopics: {
        jp: "相談テーマ · Topics",
        en: "Topics",
      },
      topicsHint: { jp: "複数選択可", en: "Multiple allowed" },
      topic1: {
        jp: "重要業務停止リスクを把握したい",
        en: "Understand critical-operation stoppage risk",
      },
      topic2: {
        jp: "何から対策すべきか優先順位を決めたい",
        en: "Decide what to defend first",
      },
      topic3: {
        jp: "インシデント時の業務影響を整理したい",
        en: "Map operational impact during an incident",
      },
      topic4: {
        jp: "大量の検知結果から直すべきものを絞り込みたい",
        en: "Narrow a flood of detections to what to fix",
      },
      topic5: {
        jp: "残存脆弱性を抱えたまま出荷してよいか判断したい",
        en: "Judge whether to ship with residual vulnerabilities",
      },
      topic6: {
        jp: "長期サポート製品の脆弱性対応を継続したい",
        en: "Sustain vulnerability response for long-life products",
      },
      topic7: { jp: "まだ決まっていない", en: "Not decided yet" },
      labelMessage: { jp: "ご相談内容 · Message", en: "Message" },
      messageHint: {
        jp: "関心領域・想定ユースケースのみで結構です。実構成情報の記載は不要です。",
        en: "Topic and intended use case are enough — no actual configuration details needed.",
      },
      phMessage: {
        jp: "現在の課題、関心のある製品、PoCで確認したいこと、技術的に相談したい点などをご記入ください。初回のお問い合わせでは、機微情報の記載は不要です。",
        en: "Tell us your current challenges, the products you are interested in, what you want to verify in a PoC, or any technical points you would like to discuss. For a first inquiry, no sensitive information is needed.",
      },
      privacy: {
        jp: "個人情報の取り扱いについて、プライバシーポリシーに同意します。",
        en: "I agree to the handling of personal information in line with the Privacy Policy.",
      },
      privacyLink: {
        jp: "プライバシーポリシー",
        en: "Privacy Policy",
      },
      submit: { jp: "送信する", en: "Send" },
      afterSubmit: {
        jp: "お預かりした情報は当社のプライバシーポリシーに基づき取り扱います。",
        en: "Submissions are handled in line with our Privacy Policy.",
      },
      sent: {
        jp: "送信ありがとうございます。担当者よりご連絡いたします。",
        en: "Thanks for your message. We will be in touch.",
      },
      errors: {
        required: {
          jp: "この項目は必須です。",
          en: "This field is required.",
        },
        emailInvalid: {
          jp: "有効なメールアドレスを入力してください。",
          en: "Please enter a valid email address.",
        },
        privacyRequired: {
          jp: "プライバシーポリシーへの同意が必要です。",
          en: "You must agree to the privacy policy.",
        },
        submitFailed: {
          jp: "送信に失敗しました。しばらく経ってから再度お試しください。",
          en: "Submission failed. Please try again later.",
        },
      },
    },
  },
} as const;

export type Lang = "jp" | "en";
