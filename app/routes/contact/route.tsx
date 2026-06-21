import type { Route } from "./+types/route";
import { ContactForm } from "./form";
import { ContactHero } from "./hero";

export function meta() {
  return [
    { title: "Contact — 株式会社衝動" },
    {
      name: "description",
      content:
        "製品デモ、PoC、導入相談、技術的なご質問まで承ります。事業の重要業務に対する具体的なリスクを起点に、最適な進め方をご提案します。",
    },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  await request.formData();
  return { ok: true as const };
}

export default function Contact() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
    </main>
  );
}
