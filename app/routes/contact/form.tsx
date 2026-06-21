import { useState } from "react";
import { useFetcher } from "react-router";

import { tr, useLang } from "~/lib/i18n";

const KINDS = ["kind1", "kind2", "kind3", "kind4", "kind5"] as const;

const PRODUCTS = ["p1name", "p2name", "product3"] as const;

const TOPICS = ["topic1", "topic2", "topic3", "topic4", "topic5", "topic6", "topic7"] as const;

const SENSITIVE = ["sensitive1", "sensitive2", "sensitive3", "sensitive4", "sensitive5"] as const;

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-2">
      <label className="text-fg-muted font-mono text-[11px] tracking-[0.14em] uppercase">
        {label}
        {required && <span className="text-shu ml-1.5">*</span>}
      </label>
      {children}
      {hint && <span className="text-fg-muted font-sans text-[12px]">{hint}</span>}
    </div>
  );
}

export function ContactForm() {
  const { lang } = useLang();
  const fetcher = useFetcher<{ ok: boolean }>();
  const [kind, setKind] = useState<string>("kind1");
  const [product, setProduct] = useState<string>("p1name");
  const [topics, setTopics] = useState<Record<string, boolean>>({});

  const submitted = fetcher.data?.ok === true;
  const submitting = fetcher.state !== "idle";

  const toggleTopic = (k: string) => setTopics((t) => ({ ...t, [k]: !t[k] }));

  if (submitted) {
    return (
      <section className="border-hairline border-b px-12 py-20">
        <div className="border-hairline bg-bg-sunken mx-auto max-w-[720px] border px-8 py-12 text-center">
          <div className="text-shu-300 mb-3 font-mono text-[11px] tracking-[0.2em] uppercase">
            {tr(lang, "contact.hero.eyebrow")}
          </div>
          <h2 className="font-display text-fg m-0 text-[32px] leading-[1.2] font-normal">
            {tr(lang, "contact.form.sent")}
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="border-hairline border-b px-12 pt-20 pb-30">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-16 md:grid-cols-[320px_1fr]">
        <aside>
          <div className="text-fg-muted mb-4 font-mono text-[10px] tracking-[0.2em] uppercase">
            {tr(lang, "contact.form.kindLabel")}
          </div>
          <div className="border-hairline flex flex-col border-t">
            {KINDS.map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setKind(k)}
                className={`border-hairline flex cursor-pointer items-center gap-3 border-0 border-b px-3 py-4 text-left font-sans text-[14px] font-medium ${
                  kind === k ? "bg-bg-sunken text-fg" : "text-ink-700 bg-transparent"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${kind === k ? "bg-shu" : "bg-ink-200"}`}
                />
                {tr(lang, `contact.form.${k}`)}
              </button>
            ))}
          </div>
          <div className="border-line bg-bg-sunken mt-10 rounded-sm border p-5">
            <div className="text-fg-muted mb-3 font-mono text-[10px] leading-[1.5] tracking-[0.16em] uppercase">
              {tr(lang, "contact.form.sensitiveLabel")}
            </div>
            <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
              {SENSITIVE.map((s) => (
                <li
                  key={s}
                  className="text-ink-700 flex gap-2 font-sans text-[12px] leading-[1.6]"
                >
                  <span className="text-fg-muted">※</span>
                  {tr(lang, `contact.form.${s}`)}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-hairline mt-6 border-t pt-5">
            <div className="text-fg-muted mb-3.5 font-mono text-[10px] tracking-[0.18em] uppercase">
              {tr(lang, "contact.form.companyLabel")}
            </div>
            <dl className="m-0 flex flex-col gap-2.5">
              <div className="flex flex-col gap-0.5">
                <dt className="text-fg-muted font-mono text-[10px] tracking-[0.12em] uppercase">
                  {tr(lang, "contact.form.companyLabel")}
                </dt>
                <dd className="text-fg m-0 font-sans text-[13px]">
                  {tr(lang, "contact.form.companyName")}
                </dd>
              </div>
              <div className="flex flex-col gap-0.5">
                <dt className="text-fg-muted font-mono text-[10px] tracking-[0.12em] uppercase">
                  {lang === "jp" ? "設立" : "Founded"}
                </dt>
                <dd className="text-fg m-0 font-sans text-[13px]">
                  {tr(lang, "contact.form.companyFounded")}
                </dd>
              </div>
              <div className="flex flex-col gap-0.5">
                <dt className="text-fg-muted font-mono text-[10px] tracking-[0.12em] uppercase">
                  {lang === "jp" ? "所在地" : "Location"}
                </dt>
                <dd className="text-fg m-0 font-sans text-[13px]">
                  {tr(lang, "contact.form.companyLocation")}
                </dd>
              </div>
              <div className="flex flex-col gap-0.5">
                <dt className="text-fg-muted font-mono text-[10px] tracking-[0.12em] uppercase">
                  Email
                </dt>
                <dd className="text-fg m-0 font-sans text-[13px]">
                  <a
                    href={`mailto:${tr(lang, "contact.form.companyEmail")}`}
                    className="border-line-strong text-fg border-b pb-px no-underline"
                  >
                    {tr(lang, "contact.form.companyEmail")}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </aside>

        <fetcher.Form method="post">
          <input
            type="hidden"
            name="kind"
            value={kind}
          />
          <input
            type="hidden"
            name="product"
            value={product}
          />
          <input
            type="hidden"
            name="topics"
            value={Object.entries(topics)
              .filter(([, on]) => on)
              .map(([k]) => k)
              .join(",")}
          />
          <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field
              label={tr(lang, "contact.form.labelName")}
              required
            >
              <input
                name="name"
                required
                placeholder={tr(lang, "contact.form.phName")}
                className="border-line bg-paper-white text-fg h-10.5 w-full rounded-sm border px-3.5 font-sans text-[14px]"
              />
            </Field>
            <Field
              label={tr(lang, "contact.form.labelOrg")}
              required
            >
              <input
                name="org"
                required
                placeholder={tr(lang, "contact.form.phOrg")}
                className="border-line bg-paper-white text-fg h-10.5 w-full rounded-sm border px-3.5 font-sans text-[14px]"
              />
            </Field>
            <Field label={tr(lang, "contact.form.labelRole")}>
              <input
                name="role"
                placeholder={tr(lang, "contact.form.phRole")}
                className="border-line bg-paper-white text-fg h-10.5 w-full rounded-sm border px-3.5 font-sans text-[14px]"
              />
            </Field>
            <Field
              label={tr(lang, "contact.form.labelEmail")}
              required
            >
              <input
                type="email"
                name="email"
                required
                placeholder={tr(lang, "contact.form.phEmail")}
                className="border-line bg-paper-white text-fg h-10.5 w-full rounded-sm border px-3.5 font-sans text-[14px]"
              />
            </Field>
          </div>
          <Field
            label={tr(lang, "contact.form.labelProduct")}
            required
          >
            <div className="flex flex-wrap gap-2">
              {PRODUCTS.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setProduct(p)}
                  className={`cursor-pointer rounded-sm border px-3.5 py-2 font-sans text-[13px] font-medium ${
                    product === p
                      ? "border-ink-900 bg-ink-900 text-washi"
                      : "border-line bg-surface text-fg"
                  }`}
                >
                  {p === "p1name" || p === "p2name"
                    ? tr(lang, `home.products.${p}`)
                    : tr(lang, `contact.form.${p}`)}
                </button>
              ))}
            </div>
          </Field>
          <Field
            label={tr(lang, "contact.form.labelTopics")}
            hint={tr(lang, "contact.form.topicsHint")}
          >
            <div className="flex flex-wrap gap-2">
              {TOPICS.map((t) => {
                const on = !!topics[t];
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => toggleTopic(t)}
                    className={`rounded-pill inline-flex cursor-pointer items-center gap-2 border px-3.5 py-2 font-sans text-[13px] font-medium ${
                      on
                        ? "border-shu bg-accent-wash text-shu-700"
                        : "border-line bg-surface text-ink-700"
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${on ? "bg-shu" : "bg-ink-200"}`} />
                    {tr(lang, `contact.form.${t}`)}
                  </button>
                );
              })}
            </div>
          </Field>
          <Field
            label={tr(lang, "contact.form.labelMessage")}
            required
            hint={tr(lang, "contact.form.messageHint")}
          >
            <textarea
              name="message"
              required
              rows={6}
              placeholder={tr(lang, "contact.form.phMessage")}
              className="border-line bg-paper-white text-fg w-full resize-y rounded-sm border px-3.5 py-3 font-sans text-[14px] leading-[1.6]"
            />
          </Field>
          <label className="mt-2 flex cursor-pointer items-start gap-2.5">
            <input
              type="checkbox"
              name="privacy"
              required
              className="accent-shu mt-0.75 h-3.75 w-3.75 shrink-0 cursor-pointer"
            />
            <span className="text-ink-700 font-sans text-[13px] leading-[1.6]">
              {lang === "jp" ? (
                <>
                  個人情報の取り扱いについて、{" "}
                  <a
                    href="#"
                    className="text-fg underline"
                  >
                    {tr(lang, "contact.form.privacyLink")}
                  </a>
                  に同意します。
                </>
              ) : (
                <>
                  I agree to the handling of personal information in line with the{" "}
                  <a
                    href="#"
                    className="text-fg underline"
                  >
                    {tr(lang, "contact.form.privacyLink")}
                  </a>
                  .
                </>
              )}
            </span>
          </label>
          <div className="border-hairline mt-7 flex flex-wrap items-center gap-4 border-t pt-6">
            <button
              type="submit"
              disabled={submitting}
              className="bg-accent text-fg-on-accent inline-flex h-12 cursor-pointer items-center rounded-sm px-7 font-sans text-[14px] tracking-[0.02em] disabled:opacity-60"
            >
              {tr(lang, "contact.form.submit")}
            </button>
            <span className="text-fg-muted font-sans text-[12px]">
              {tr(lang, "contact.form.afterSubmit")}
            </span>
          </div>
        </fetcher.Form>
      </div>
    </section>
  );
}
