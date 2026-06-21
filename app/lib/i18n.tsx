import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import { translations, type Lang } from "./translations";

export const LANG_COOKIE_NAME = "shodo_lang";
const LANG_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

type Entry = { jp: string; en: string };

type Dict = typeof translations;

type Leaves<T, Prefix extends string = ""> = {
  [K in keyof T & string]: T[K] extends Entry ? `${Prefix}${K}` : Leaves<T[K], `${Prefix}${K}.`>;
}[keyof T & string];

export type TranslationPath = Leaves<Dict>;

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LangContext = createContext<LangContextValue>({
  lang: "jp",
  setLang: () => {},
});

function readCookieLang(): Lang | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${LANG_COOKIE_NAME}=([^;]+)`));
  const value = match?.[1];
  return value === "en" || value === "jp" ? value : null;
}

function writeCookieLang(lang: Lang) {
  if (typeof document === "undefined") return;
  document.cookie = `${LANG_COOKIE_NAME}=${lang}; path=/; max-age=${LANG_COOKIE_MAX_AGE}; samesite=lax`;
}

type LangProviderProps = {
  initialLang: Lang;
  children: React.ReactNode;
};

export function LangProvider({ initialLang, children }: LangProviderProps) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    const fromCookie = readCookieLang();
    if (fromCookie && fromCookie !== lang) {
      setLangState(fromCookie);
    }
    document.documentElement.lang = lang === "en" ? "en" : "ja";
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    writeCookieLang(next);
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  }, []);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

function resolve(entry: Entry | undefined, lang: Lang): string {
  if (!entry) return "";
  return lang === "en" ? entry.en : entry.jp;
}

function getEntry(path: TranslationPath): Entry | undefined {
  const parts = path.split(".");
  let cursor: unknown = translations;
  for (const part of parts) {
    if (cursor && typeof cursor === "object" && part in cursor) {
      cursor = (cursor as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }
  return cursor as Entry | undefined;
}

export function tr(lang: Lang, path: TranslationPath): string {
  return resolve(getEntry(path), lang);
}
