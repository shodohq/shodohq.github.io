import { env } from "cloudflare:workers";
import { isRouteErrorResponse, useRouteLoaderData } from "react-router";

import { createGoogleSheetsClient } from "~/lib/google-sheets.server";
import { LANG_COOKIE_NAME } from "~/lib/i18n";
import { tr } from "~/lib/i18n";
import type { Lang } from "~/lib/translations";

import type { Route } from "./+types/route";
import { makeContactFormSchema } from "./contact.schema";
import { SHEET_RANGE, submitContactForm } from "./contact.server";
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
  };
}

export async function action({ request }: Route.ActionArgs) {
  try {
    const formData = await request.formData();
    const raw = parseFormData(formData);
    const lang = readLangFromCookie(request);
    const schema = makeContactFormSchema(lang);
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      return { ok: false as const, error: tr(lang, "contact.form.errors.required") };
    }

    const useStub = env.GOOGLE_SHEETS_ENABLED !== "true";
    const isProduction = env.ENVIRONMENT === "production";
    if (useStub) {
      if (isProduction) {
        console.error(
          "[contact] FATAL: stub mode (GOOGLE_SHEETS_ENABLED !== 'true') is not allowed in production",
        );
        return {
          ok: false as const,
          error: tr(lang, "contact.form.errors.submitFailed"),
        };
      }
      console.warn(
        "[contact] Stub mode: submission not persisted (set GOOGLE_SHEETS_ENABLED='true' to enable)",
      );
      return { ok: true as const };
    }

    const rawKey = env.GOOGLE_SERVICE_ACCOUNT_KEY;
    const spreadsheetId = env.GOOGLE_SPREADSHEET_ID;
    const range = env.GOOGLE_SHEET_RANGE ?? SHEET_RANGE;
    if (!rawKey || !spreadsheetId) {
      console.error("[contact] Missing GOOGLE_SERVICE_ACCOUNT_KEY or GOOGLE_SPREADSHEET_ID");
      return {
        ok: false as const,
        error: tr(lang, "contact.form.errors.submitFailed"),
      };
    }

    let credentials: { client_email: string; private_key: string };
    try {
      credentials = JSON.parse(rawKey);
    } catch (err) {
      console.error("[contact] Failed to parse GOOGLE_SERVICE_ACCOUNT_KEY:", err);
      return {
        ok: false as const,
        error: tr(lang, "contact.form.errors.submitFailed"),
      };
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
      return {
        ok: false as const,
        error: tr(lang, "contact.form.errors.submitFailed"),
      };
    }
    return result;
  } catch (err) {
    console.error("[contact] Unhandled error in action:", err);
    const lang = readLangFromCookie(request);
    return {
      ok: false as const,
      error: tr(lang, "contact.form.errors.submitFailed"),
    };
  }
}

export default function Contact() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
    </main>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const data = useRouteLoaderData("root") as { lang?: Lang } | undefined;
  const lang: Lang = data?.lang === "en" ? "en" : "jp";
  console.error("[contact] Route error boundary triggered:", error);
  if (isRouteErrorResponse(error)) {
    console.error(`[contact] ${error.status} ${error.statusText}`);
  }
  return (
    <main>
      <ContactHero />
      <section className="border-hairline border-b px-5 py-12 md:px-12 md:py-20">
        <div className="border-hairline bg-bg-sunken mx-auto max-w-[720px] border px-8 py-12 text-center">
          <div className="text-shu-300 mb-3 font-mono text-[11px] tracking-[0.2em] uppercase">
            {tr(lang, "contact.hero.eyebrow")}
          </div>
          <h1 className="font-display text-fg m-0 mb-4 text-[24px] leading-[1.2] font-normal md:text-[28px]">
            {tr(lang, "contact.form.errorBoundary.title")}
          </h1>
          <p className="text-ink-700 m-0 mb-8 font-sans text-[14px] leading-[1.7]">
            {tr(lang, "contact.form.errorBoundary.body")}
          </p>
          <a
            href="/contact"
            className="border-line-strong text-fg inline-block border-b pb-px font-sans text-[14px] no-underline"
          >
            {tr(lang, "contact.form.errorBoundary.retry")}
          </a>
        </div>
      </section>
    </main>
  );
}
