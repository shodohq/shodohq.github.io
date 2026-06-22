import { env } from "cloudflare:workers";

import { createGoogleSheetsClient } from "~/lib/google-sheets.server";
import { LANG_COOKIE_NAME } from "~/lib/i18n";
import { tr } from "~/lib/i18n";
import type { Lang } from "~/lib/translations";

import type { Route } from "./+types/route";
import { makeContactFormSchema } from "./contact.schema";
import { submitContactForm } from "./contact.server";
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

function readLangFromCookie(request: Request): Lang {
  const cookie = request.headers.get("cookie") ?? "";
  const match = cookie.match(new RegExp(`(?:^|;\\s*)${LANG_COOKIE_NAME}=([^;]+)`));
  const value = match?.[1];
  return value === "en" ? "en" : "jp";
}

function parseFormData(formData: FormData) {
  const topicsRaw = formData.get("topics");
  const topics =
    typeof topicsRaw === "string" && topicsRaw.length > 0
      ? topicsRaw.split(",").filter(Boolean)
      : [];
  return {
    kind: formData.get("kind") ?? "",
    product: formData.get("product") ?? "",
    topics,
    name: formData.get("name") ?? "",
    org: formData.get("org") ?? "",
    role: formData.get("role") ?? "",
    email: formData.get("email") ?? "",
    message: formData.get("message") ?? "",
    privacy: formData.get("privacy") === "on",
  };
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const raw = parseFormData(formData);
  const lang = readLangFromCookie(request);
  const schema = makeContactFormSchema(lang);
  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false as const, error: tr(lang, "contact.form.errors.required") };
  }

  if ((env.GOOGLE_SHEETS_ENABLED as string) !== "true") {
    return { ok: true as const };
  }

  const rawKey = env.GOOGLE_SERVICE_ACCOUNT_KEY;
  const spreadsheetId = env.GOOGLE_SPREADSHEET_ID;
  const range = env.GOOGLE_SHEET_RANGE ?? "Form!A:K";
  if (!rawKey || !spreadsheetId) {
    return { ok: false as const, error: tr(lang, "contact.form.errors.submitFailed") };
  }

  let credentials: { client_email: string; private_key: string };
  try {
    credentials = JSON.parse(rawKey);
  } catch {
    return { ok: false as const, error: tr(lang, "contact.form.errors.submitFailed") };
  }

  const client = createGoogleSheetsClient({
    clientEmail: credentials.client_email,
    privateKey: credentials.private_key,
    spreadsheetId,
  });

  const result = await submitContactForm(parsed.data, {
    appendRow: client.appendRow,
    lang,
    range,
  });

  if (result.ok === false) {
    console.error("[contact] Sheets submission failed:", result.error);
    return { ok: false as const, error: tr(lang, "contact.form.errors.submitFailed") };
  }
  return result;
}

export default function Contact() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
    </main>
  );
}
