import type { AppendRowFn } from "~/lib/google-sheets.server";
import { tr } from "~/lib/i18n";

import type { ContactFormInput } from "./contact.schema";

const SHEET_RANGE = "Form!A:K";

export type SubmitDeps = {
  appendRow: AppendRowFn;
  lang: "jp" | "en";
  range?: string;
  now?: () => Date;
};

export type SubmitResult = { ok: true } | { ok: false; error: string };

function translateKind(lang: "jp" | "en", key: ContactFormInput["kind"]): string {
  return tr(lang, `contact.form.${key}`);
}

function translateProduct(lang: "jp" | "en", key: ContactFormInput["product"]): string {
  if (key === "product3") return tr(lang, "contact.form.product3");
  return tr(lang, `home.products.${key}`);
}

function translateTopics(lang: "jp" | "en", topics: ContactFormInput["topics"]): string {
  if (topics.length === 0) return "-";
  return topics.map((t) => tr(lang, `contact.form.${t}`)).join(" / ");
}

function normalizeLang(lang: string): "jp" | "en" {
  return lang === "en" ? "en" : "jp";
}

export async function submitContactForm(
  input: ContactFormInput,
  deps: SubmitDeps,
): Promise<SubmitResult> {
  const lang = normalizeLang(deps.lang);
  const now = deps.now ?? (() => new Date());
  const range = deps.range ?? SHEET_RANGE;

  const row: string[] = [
    now().toISOString(),
    lang,
    translateKind(lang, input.kind),
    input.name,
    input.org,
    input.role || "-",
    input.email,
    translateProduct(lang, input.product),
    translateTopics(lang, input.topics),
    input.message,
    "agreed",
  ];

  try {
    const result = await deps.appendRow({ range, values: [row] });
    if (result.updatedRows < 1) {
      return {
        ok: false,
        error: `Sheets API returned 0 rows updated (no row was actually written): ${JSON.stringify(result)}`,
      };
    }
    return { ok: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { ok: false, error: message };
  }
}
