"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { TRANSLATIONS, type Bilingual, type Lang } from "./translations";

const I18N_KEY = "shodo.lang";

function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "jp";
  try {
    const url = new URL(window.location.href);
    const q = url.searchParams.get("lang");
    if (q === "en" || q === "jp") return q;
  } catch {}
  try {
    const s = localStorage.getItem(I18N_KEY);
    if (s === "en" || s === "jp") return s;
  } catch {}
  const nl = (navigator.language || "").toLowerCase();
  return nl.startsWith("en") ? "en" : "jp";
}

type LangCtx = { lang: Lang; setLang: (l: Lang) => void };
const LangContext = createContext<LangCtx>({ lang: "jp", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("jp");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setLangState(detectInitialLang());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try { localStorage.setItem(I18N_KEY, lang); } catch {}
    try {
      const url = new URL(window.location.href);
      if (lang === "en") url.searchParams.set("lang", "en");
      else url.searchParams.delete("lang");
      window.history.replaceState({}, "", url.toString());
    } catch {}
    document.documentElement.lang = lang === "en" ? "en" : "ja";
  }, [lang, hydrated]);

  const setLang = useCallback((l: Lang) => setLangState(l === "en" ? "en" : "jp"), []);
  return (
    <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

export function tr(lang: Lang, key: string): string {
  const entry = TRANSLATIONS[key];
  if (!entry) return key;
  if (lang === "en" && entry.en != null) return entry.en;
  return entry.jp ?? key;
}

export function pick(lang: Lang, obj: Bilingual | undefined | null): string {
  if (!obj) return "";
  if (lang === "en" && obj.en != null) return obj.en;
  return obj.jp ?? obj.en ?? "";
}

export type { Bilingual, Lang };
