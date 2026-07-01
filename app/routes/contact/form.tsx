import { useForm } from "@tanstack/react-form";
import { useMemo } from "react";
import { useFetcher } from "react-router";

import { tr, useLang } from "~/lib/i18n";
import type { Lang } from "~/lib/translations";

import {
  KIND_VALUES,
  PRODUCT_VALUES,
  TOPIC_VALUES,
  makeContactFormSchema,
  type ContactFormInput,
} from "./contact.schema";

const DEFAULT_VALUES: ContactFormInput = {
  kind: "kind1",
  product: "p1name",
  topics: [],
  name: "",
  org: "",
  role: "",
  email: "",
  message: "",
};

function FieldLabel({
  label,
  required,
  hint,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-2">
      <label className="text-fg-muted font-mono text-[11px] tracking-[0.14em] uppercase">
        {label}
        {required && <span className="text-shu ml-1.5">*</span>}
      </label>
      {hint && !error && <span className="text-fg-muted font-sans text-[12px]">{hint}</span>}
      {error && (
        <span
          className="text-shu font-sans text-[12px]"
          role="alert"
        >
          {error}
        </span>
      )}
      {children}
    </div>
  );
}

function buildFormData(value: ContactFormInput): FormData {
  const fd = new FormData();
  fd.append("kind", value.kind);
  fd.append("product", value.product);
  fd.append("topics", value.topics.join(","));
  fd.append("name", value.name);
  fd.append("org", value.org);
  fd.append("role", value.role);
  fd.append("email", value.email);
  fd.append("message", value.message);
  return fd;
}

function ErrorBanner({ message, lang }: { message: string; lang: Lang }) {
  return (
    <div
      role="alert"
      className="border-shu bg-accent-wash text-shu-700 mb-6 rounded-sm border px-4 py-3 font-sans text-[13px]"
    >
      <p className="m-0">{message}</p>
      <p className="m-0 mt-2">
        {tr(lang, "contact.form.facebookFallback.note")}{" "}
        <a
          href="https://www.facebook.com/shodohq/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-shu border-shu/40 border-b font-sans text-[13px] no-underline"
        >
          {tr(lang, "contact.form.facebookFallback.linkLabel")}
        </a>
      </p>
    </div>
  );
}

export function ContactForm() {
  const { lang } = useLang();
  const fetcher = useFetcher<{ ok: boolean; error?: string }>();
  const submitted = fetcher.data?.ok === true;
  const submitting = fetcher.state !== "idle";
  const submitError = fetcher.data && fetcher.data.ok === false ? fetcher.data.error : undefined;

  const schema = useMemo(() => makeContactFormSchema(lang), [lang]);

  const form = useForm({
    defaultValues: DEFAULT_VALUES as ContactFormInput,
    validators: { onChange: schema },
    onSubmit: async ({ value }) => {
      const result = schema.safeParse(value);
      if (!result.success) return;
      fetcher.reset();
      void fetcher.submit(buildFormData(result.data), { method: "post" });
    },
  });

  if (submitted) {
    return (
      <section className="border-hairline border-b px-5 py-12 md:px-12 md:py-20">
        <div className="border-hairline bg-bg-sunken mx-auto max-w-[720px] border px-8 py-12 text-center">
          <div className="text-shu-300 mb-3 font-mono text-[11px] tracking-[0.2em] uppercase">
            {tr(lang, "contact.hero.eyebrow")}
          </div>
          <h2 className="font-display text-fg m-0 text-[28px] leading-[1.2] font-normal md:text-[32px]">
            {tr(lang, "contact.form.sent")}
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="border-hairline border-b px-5 pt-16 pb-16 md:px-12 md:pt-20 md:pb-30">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 md:grid-cols-[320px_1fr] md:gap-16">
        <aside>
          <div className="text-fg-muted mb-4 font-mono text-[10px] tracking-[0.2em] uppercase">
            {tr(lang, "contact.form.kindLabel")}
          </div>
          <form.Field
            name="kind"
            children={(field) => (
              <div className="border-hairline flex flex-col border-t">
                {KIND_VALUES.map((k) => {
                  const active = field.state.value === k;
                  return (
                    <button
                      key={k}
                      type="button"
                      onClick={() => field.handleChange(k)}
                      className={`border-hairline flex cursor-pointer items-center gap-3 border-0 border-b px-3 py-4 text-left font-sans text-[14px] font-medium ${
                        active ? "bg-bg-sunken text-fg" : "text-ink-700 bg-transparent"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${active ? "bg-shu" : "bg-ink-200"}`}
                      />
                      {tr(lang, `contact.form.${k}`)}
                    </button>
                  );
                })}
              </div>
            )}
          />
          <div className="border-line bg-bg-sunken mt-10 rounded-sm border p-5">
            <div className="text-fg-muted mb-3 font-mono text-[10px] leading-[1.5] tracking-[0.16em] uppercase">
              {tr(lang, "contact.form.sensitiveLabel")}
            </div>
            <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
              {(
                ["sensitive1", "sensitive2", "sensitive3", "sensitive4", "sensitive5"] as const
              ).map((s) => (
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

        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            void form.handleSubmit();
          }}
        >
          {submitError && (
            <ErrorBanner
              message={submitError}
              lang={lang}
            />
          )}

          <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            <form.Field
              name="name"
              children={(field) => {
                const err = field.state.meta.errors[0]?.message;
                return (
                  <FieldLabel
                    label={tr(lang, "contact.form.labelName")}
                    required
                    error={err}
                  >
                    <input
                      name={field.name}
                      required
                      placeholder={tr(lang, "contact.form.phName")}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="border-line bg-paper-white text-fg h-10.5 w-full rounded-sm border px-3.5 font-sans text-[14px]"
                    />
                  </FieldLabel>
                );
              }}
            />
            <form.Field
              name="org"
              children={(field) => {
                const err = field.state.meta.errors[0]?.message;
                return (
                  <FieldLabel
                    label={tr(lang, "contact.form.labelOrg")}
                    required
                    error={err}
                  >
                    <input
                      name={field.name}
                      required
                      placeholder={tr(lang, "contact.form.phOrg")}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="border-line bg-paper-white text-fg h-10.5 w-full rounded-sm border px-3.5 font-sans text-[14px]"
                    />
                  </FieldLabel>
                );
              }}
            />
            <form.Field
              name="role"
              children={(field) => (
                <FieldLabel label={tr(lang, "contact.form.labelRole")}>
                  <input
                    name={field.name}
                    placeholder={tr(lang, "contact.form.phRole")}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="border-line bg-paper-white text-fg h-10.5 w-full rounded-sm border px-3.5 font-sans text-[14px]"
                  />
                </FieldLabel>
              )}
            />
            <form.Field
              name="email"
              children={(field) => {
                const err = field.state.meta.errors[0]?.message;
                return (
                  <FieldLabel
                    label={tr(lang, "contact.form.labelEmail")}
                    required
                    error={err}
                  >
                    <input
                      type="email"
                      name={field.name}
                      required
                      placeholder={tr(lang, "contact.form.phEmail")}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="border-line bg-paper-white text-fg h-10.5 w-full rounded-sm border px-3.5 font-sans text-[14px]"
                    />
                  </FieldLabel>
                );
              }}
            />
          </div>

          <form.Field
            name="product"
            children={(field) => {
              const err = field.state.meta.errors[0]?.message;
              return (
                <FieldLabel
                  label={tr(lang, "contact.form.labelProduct")}
                  required
                  error={err}
                >
                  <div className="flex flex-wrap gap-2">
                    {PRODUCT_VALUES.map((p) => {
                      const active = field.state.value === p;
                      return (
                        <button
                          key={p}
                          type="button"
                          onClick={() => field.handleChange(p)}
                          className={`cursor-pointer rounded-sm border px-3.5 py-2 font-sans text-[13px] font-medium ${
                            active
                              ? "border-ink-900 bg-ink-900 text-washi"
                              : "border-line bg-surface text-fg"
                          }`}
                        >
                          {p === "p1name" || p === "p2name"
                            ? tr(lang, `home.products.${p}`)
                            : tr(lang, `contact.form.${p}`)}
                        </button>
                      );
                    })}
                  </div>
                </FieldLabel>
              );
            }}
          />

          <form.Field
            name="topics"
            mode="array"
            children={(field) => (
              <FieldLabel
                label={tr(lang, "contact.form.labelTopics")}
                hint={tr(lang, "contact.form.topicsHint")}
              >
                <div className="flex flex-wrap gap-2">
                  {TOPIC_VALUES.map((t) => {
                    const on = field.state.value.includes(t);
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => {
                          if (on) {
                            const i = field.state.value.indexOf(t);
                            if (i >= 0) field.removeValue(i);
                          } else {
                            field.pushValue(t);
                          }
                        }}
                        className={`rounded-pill inline-flex cursor-pointer items-center gap-2 border px-3.5 py-2 font-sans text-[13px] font-medium ${
                          on
                            ? "border-shu bg-accent-wash text-shu-700"
                            : "border-line bg-surface text-ink-700"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${on ? "bg-shu" : "bg-ink-200"}`}
                        />
                        {tr(lang, `contact.form.${t}`)}
                      </button>
                    );
                  })}
                </div>
              </FieldLabel>
            )}
          />

          <form.Field
            name="message"
            children={(field) => {
              const err = field.state.meta.errors[0]?.message;
              return (
                <FieldLabel
                  label={tr(lang, "contact.form.labelMessage")}
                  required
                  hint={!err ? tr(lang, "contact.form.messageHint") : undefined}
                  error={err}
                >
                  <textarea
                    name={field.name}
                    required
                    rows={6}
                    placeholder={tr(lang, "contact.form.phMessage")}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="border-line bg-paper-white text-fg w-full resize-y rounded-sm border px-3.5 py-3 font-sans text-[14px] leading-[1.6]"
                  />
                </FieldLabel>
              );
            }}
          />

          <div className="border-hairline mt-7 flex flex-wrap items-center gap-4 border-t pt-6">
            <form.Subscribe
              selector={(s) => [s.canSubmit, s.isSubmitting] as const}
              children={([canSubmit, isFormSubmitting]) => (
                <button
                  type="submit"
                  disabled={!canSubmit || submitting || isFormSubmitting}
                  className="bg-accent text-fg-on-accent inline-flex h-12 cursor-pointer items-center rounded-sm px-7 font-sans text-[14px] tracking-[0.02em] disabled:opacity-60"
                >
                  {tr(lang, "contact.form.submit")}
                </button>
              )}
            />
            <span className="text-fg-muted font-sans text-[12px]">
              {tr(lang, "contact.form.afterSubmit")}
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
