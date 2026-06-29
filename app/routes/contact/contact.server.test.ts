import type { Mock } from "vitest";
import { beforeEach, describe, expect, it, vi } from "vitest";

import type { AppendRowFn, AppendRowResult } from "~/lib/google-sheets.server";

import type { ContactFormInput } from "./contact.schema";
import { submitContactForm } from "./contact.server";

vi.mock("~/lib/i18n", () => ({
  tr: (lang: string, key: string) => {
    const map: Record<string, Record<string, string>> = {
      "contact.form.kind1": { jp: "製品デモを希望", en: "Request a product demo" },
      "contact.form.kind2": { jp: "PoCについて相談したい", en: "Talk about a PoC" },
      "contact.form.kind3": { jp: "導入について相談したい", en: "Talk about adoption" },
      "contact.form.kind4": { jp: "技術的な質問をしたい", en: "Ask a technical question" },
      "contact.form.kind5": { jp: "パートナー・協業・その他", en: "Partnership / other" },
      "home.products.p1name": { jp: "Pixie for Operations", en: "Pixie for Operations" },
      "home.products.p2name": { jp: "Pixie for Code", en: "Pixie for Code" },
      "contact.form.product3": {
        jp: "まだ決まっていない / 相談しながら整理したい",
        en: "Not decided / figure out through consultation",
      },
      "contact.form.topic1": {
        jp: "重要業務停止リスクを把握したい",
        en: "Understand critical-operation stoppage risk",
      },
      "contact.form.topic2": {
        jp: "何から対策すべきか優先順位を決めたい",
        en: "Decide what to defend first",
      },
      "contact.form.topic3": {
        jp: "インシデント時の業務影響を整理したい",
        en: "Map operational impact during an incident",
      },
      "contact.form.topic4": {
        jp: "大量の検知結果から直すべきものを絞り込みたい",
        en: "Narrow a flood of detections to what to fix",
      },
      "contact.form.topic5": {
        jp: "残存脆弱性を抱えたまま出荷してよいか判断したい",
        en: "Judge whether to ship with residual vulnerabilities",
      },
      "contact.form.topic6": {
        jp: "長期サポート製品の脆弱性対応を継続したい",
        en: "Sustain vulnerability response for long-life products",
      },
      "contact.form.topic7": { jp: "まだ決まっていない", en: "Not decided yet" },
    };
    return map[key]?.[lang] ?? `${lang}:${key}`;
  },
}));

const validInput: ContactFormInput = {
  kind: "kind1",
  product: "p1name",
  topics: ["topic1", "topic3"],
  name: "山田 太郎",
  org: "株式会社サンプル",
  role: "情報セキュリティ 部長",
  email: "taro@example.com",
  message: "PoCについて相談したいです。",
};

const fixedIsoNow = "2024-06-15T10:30:00.000Z";

type MockAppendRow = Mock<AppendRowFn>;

function createMockAppendRow(): MockAppendRow {
  return vi.fn() as unknown as MockAppendRow;
}

const defaultAppendResult: AppendRowResult = {
  spreadsheetId: "sheet-1",
  updatedRows: 1,
  updatedColumns: 10,
  updatedCells: 10,
  updatedRange: "Form!A2:J2",
};

describe("submitContactForm", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(fixedIsoNow));
  });

  function setup(overrides: { lang?: "jp" | "en" } = {}) {
    const appendRowMock = createMockAppendRow();
    appendRowMock.mockResolvedValue(defaultAppendResult);
    const deps = {
      appendRow: appendRowMock as unknown as AppendRowFn,
      lang: (overrides.lang ?? "jp") as "jp" | "en",
    };
    return { deps, appendRowMock };
  }

  describe("happy path", () => {
    it("returns ok and calls appendRow with the right row", async () => {
      const { deps, appendRowMock } = setup();
      const result = await submitContactForm(validInput, deps);

      expect(result).toEqual({ ok: true });
      expect(appendRowMock.mock.calls).toHaveLength(1);

      const callArg = appendRowMock.mock.calls[0]![0];
      expect(callArg.range).toBe("Form!A:J");
      expect(callArg.values).toHaveLength(1);

      const row = callArg.values[0]!;
      expect(row[0]).toBe(fixedIsoNow);
      expect(row[1]).toBe("jp");
      expect(row[2]).toBe("製品デモを希望");
      expect(row[3]).toBe("山田 太郎");
      expect(row[4]).toBe("株式会社サンプル");
      expect(row[5]).toBe("情報セキュリティ 部長");
      expect(row[6]).toBe("taro@example.com");
      expect(row[7]).toBe("Pixie for Operations");
      expect(row[8]).toBe("重要業務停止リスクを把握したい / インシデント時の業務影響を整理したい");
      expect(row[9]).toBe("PoCについて相談したいです。");
    });

    it("translates to English when lang=en", async () => {
      const { deps, appendRowMock } = setup({ lang: "en" });
      const result = await submitContactForm(validInput, deps);

      expect(result).toEqual({ ok: true });
      const row = appendRowMock.mock.calls[0]![0].values[0]!;
      expect(row[1]).toBe("en");
      expect(row[2]).toBe("Request a product demo");
      expect(row[7]).toBe("Pixie for Operations");
      expect(row[8]).toBe(
        "Understand critical-operation stoppage risk / Map operational impact during an incident",
      );
    });

    it("falls back to jp when lang is unknown", async () => {
      const { deps, appendRowMock } = setup();
      await submitContactForm(validInput, { ...deps, lang: "fr" as never });
      const row = appendRowMock.mock.calls[0]![0].values[0]!;
      expect(row[1]).toBe("jp");
      expect(row[2]).toBe("製品デモを希望");
    });
  });

  describe("topics", () => {
    it("uses ' / ' as the separator for multiple topics", async () => {
      const { deps, appendRowMock } = setup();
      await submitContactForm({ ...validInput, topics: ["topic1", "topic2", "topic3"] }, deps);
      expect(appendRowMock.mock.calls[0]![0].values[0]![8]).toBe(
        "重要業務停止リスクを把握したい / 何から対策すべきか優先順位を決めたい / インシデント時の業務影響を整理したい",
      );
    });

    it("uses '-' for empty topics (not an empty string)", async () => {
      const { deps, appendRowMock } = setup();
      await submitContactForm({ ...validInput, topics: [] }, deps);
      expect(appendRowMock.mock.calls[0]![0].values[0]![8]).toBe("-");
    });
  });

  describe("role", () => {
    it("writes '-' when role is empty", async () => {
      const { deps, appendRowMock } = setup();
      await submitContactForm({ ...validInput, role: "" }, deps);
      expect(appendRowMock.mock.calls[0]![0].values[0]![5]).toBe("-");
    });
  });

  describe("product", () => {
    it("translates product3 (the 'not decided' option)", async () => {
      const { deps, appendRowMock } = setup();
      await submitContactForm({ ...validInput, product: "product3" }, deps);
      expect(appendRowMock.mock.calls[0]![0].values[0]![7]).toBe(
        "まだ決まっていない / 相談しながら整理したい",
      );
    });
  });

  describe("row column order", () => {
    it("emits columns in the documented order [timestamp, lang, kind, name, org, role, email, product, topics, message]", async () => {
      const { deps, appendRowMock } = setup();
      await submitContactForm(validInput, deps);
      const row = appendRowMock.mock.calls[0]![0].values[0]!;
      expect(row).toHaveLength(10);
      expect(row[0]).toBe(fixedIsoNow);
      expect(row[9]).toBe(validInput.message);
    });
  });

  describe("error handling", () => {
    it("returns ok=false with error message when appendRow throws", async () => {
      const appendRowMock = createMockAppendRow();
      appendRowMock.mockRejectedValue(new Error("network down"));
      const result = await submitContactForm(validInput, {
        appendRow: appendRowMock as unknown as AppendRowFn,
        lang: "jp",
      });
      expect(result).toEqual({ ok: false, error: "network down" });
    });

    it("returns ok=false with a fallback message for non-Error throws", async () => {
      const appendRowMock = createMockAppendRow();
      appendRowMock.mockRejectedValue("weird failure");
      const result = await submitContactForm(validInput, {
        appendRow: appendRowMock as unknown as AppendRowFn,
        lang: "jp",
      });
      expect(result).toEqual({ ok: false, error: "weird failure" });
    });

    it("returns ok=false when appendRow returns 0 updatedRows (no row actually written)", async () => {
      const appendRowMock = createMockAppendRow();
      appendRowMock.mockResolvedValue({
        spreadsheetId: "sheet-1",
        updatedRows: 0,
        updatedColumns: 0,
        updatedCells: 0,
      });
      const result = await submitContactForm(validInput, {
        appendRow: appendRowMock as unknown as AppendRowFn,
        lang: "jp",
      });
      expect(result.ok).toBe(false);
      if (result.ok === false) {
        expect(result.error).toMatch(/0 row/);
      }
    });
  });
});
