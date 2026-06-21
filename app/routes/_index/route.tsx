import { Company } from "./company";
import { ContactCta } from "./contact-cta";
import { Hero } from "./hero";
import { Platform } from "./platform";
import { Problem } from "./problem";
import { Products } from "./products";
import { UseCases } from "./use-cases";
import { WhyNow } from "./why-now";

export function meta() {
  return [
    {
      title: "株式会社衝動 — 事業継続と開発速度を守る、サイバーリスク対応基盤",
    },
    {
      name: "description",
      content:
        "分断されたセキュリティ・業務・開発情報を統合し、サイバーリスクを「何が止まるか」「何を先に直すか」「どう対応するか」までつなげます。",
    },
  ];
}

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyNow />
      <Problem />
      <Platform />
      <Products />
      <UseCases />
      <Company />
      <ContactCta />
    </main>
  );
}
