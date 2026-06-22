import { exportPKCS8, generateKeyPair } from "jose";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

type EnvOverrides = Partial<{
  GOOGLE_SHEETS_ENABLED: string;
  GOOGLE_SERVICE_ACCOUNT_KEY: string;
  GOOGLE_SPREADSHEET_ID: string;
  GOOGLE_SHEET_RANGE: string;
  ENVIRONMENT: string;
}>;

const envState: EnvOverrides = {};

vi.mock("cloudflare:workers", () => ({
  get env() {
    return envState;
  },
}));

vi.mock("~/lib/google-sheets.server", () => ({
  createGoogleSheetsClient: vi.fn(),
}));

import { createGoogleSheetsClient } from "~/lib/google-sheets.server";

import { action } from "./route";

const mockedCreateClient = vi.mocked(createGoogleSheetsClient);

function buildRequest(form: Record<string, string>): Request {
  const fd = new FormData();
  for (const [k, v] of Object.entries(form)) fd.append(k, v);
  return new Request("https://example.com/contact", {
    method: "POST",
    body: fd,
    headers: { cookie: "shodo_lang=jp" },
  });
}

const validForm: Record<string, string> = {
  kind: "kind1",
  product: "p1name",
  topics: "topic1",
  name: "山田 太郎",
  org: "株式会社サンプル",
  role: "情報セキュリティ 部長",
  email: "taro@example.com",
  message: "PoCについて相談したいです。",
  privacy: "on",
};

async function makeKeyPairPem() {
  const { privateKey } = await generateKeyPair("RS256", { extractable: true });
  const privatePem = await exportPKCS8(privateKey);
  return { privatePem };
}

let privatePem: string;

describe("contact action", () => {
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>;
  let consoleWarnSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(async () => {
    const kp = await makeKeyPairPem();
    privatePem = kp.privatePem;
    envState.GOOGLE_SHEETS_ENABLED = "true";
    envState.GOOGLE_SERVICE_ACCOUNT_KEY = JSON.stringify({
      client_email: "test@project.iam.gserviceaccount.com",
      private_key: privatePem,
    });
    envState.GOOGLE_SPREADSHEET_ID = "sheet-1";
    envState.GOOGLE_SHEET_RANGE = "Form!A:K";
    delete envState.ENVIRONMENT;
    mockedCreateClient.mockReset();
    consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
    consoleWarnSpy.mockRestore();
  });

  describe("happy path", () => {
    it("returns { ok: true } when appendRow succeeds", async () => {
      mockedCreateClient.mockReturnValue({
        appendRow: vi.fn().mockResolvedValue({
          spreadsheetId: "sheet-1",
          updatedRows: 1,
          updatedColumns: 11,
          updatedCells: 11,
          updatedRange: "Form!A2:K2",
        }),
      });

      const result = await action({
        request: buildRequest(validForm),
      } as Parameters<typeof action>[0]);

      expect(result).toEqual({ ok: true });
    });
  });

  describe("stub mode (GOOGLE_SHEETS_ENABLED !== 'true')", () => {
    it("returns { ok: true } in development with a warn log", async () => {
      envState.GOOGLE_SHEETS_ENABLED = "false";
      envState.ENVIRONMENT = "development";

      const result = await action({
        request: buildRequest(validForm),
      } as Parameters<typeof action>[0]);

      expect(result).toEqual({ ok: true });
      expect(consoleWarnSpy).toHaveBeenCalledWith(expect.stringMatching(/stub/i));
      expect(mockedCreateClient).not.toHaveBeenCalled();
    });

    it("returns { ok: false, error } in production with a FATAL error log", async () => {
      envState.GOOGLE_SHEETS_ENABLED = "false";
      envState.ENVIRONMENT = "production";

      const result = await action({
        request: buildRequest(validForm),
      } as Parameters<typeof action>[0]);

      expect(result.ok).toBe(false);
      if (result.ok === false) {
        expect(result.error).toMatch(/失敗|fail/i);
      }
      expect(consoleErrorSpy).toHaveBeenCalledWith(expect.stringMatching(/FATAL/i));
      expect(mockedCreateClient).not.toHaveBeenCalled();
    });
  });

  describe("configuration errors", () => {
    it("returns { ok: false } when GOOGLE_SERVICE_ACCOUNT_KEY is missing", async () => {
      delete envState.GOOGLE_SERVICE_ACCOUNT_KEY;

      const result = await action({
        request: buildRequest(validForm),
      } as Parameters<typeof action>[0]);

      expect(result.ok).toBe(false);
      if (result.ok === false) {
        expect(result.error).toMatch(/失敗|fail/i);
      }
      expect(consoleErrorSpy).toHaveBeenCalled();
      expect(mockedCreateClient).not.toHaveBeenCalled();
    });

    it("returns { ok: false } when GOOGLE_SPREADSHEET_ID is missing", async () => {
      delete envState.GOOGLE_SPREADSHEET_ID;

      const result = await action({
        request: buildRequest(validForm),
      } as Parameters<typeof action>[0]);

      expect(result.ok).toBe(false);
    });

    it("returns { ok: false } when GOOGLE_SERVICE_ACCOUNT_KEY is not valid JSON", async () => {
      envState.GOOGLE_SERVICE_ACCOUNT_KEY = "not-json{";

      const result = await action({
        request: buildRequest(validForm),
      } as Parameters<typeof action>[0]);

      expect(result.ok).toBe(false);
      expect(consoleErrorSpy).toHaveBeenCalled();
      expect(mockedCreateClient).not.toHaveBeenCalled();
    });
  });

  describe("runtime errors", () => {
    it("returns { ok: false } when createGoogleSheetsClient throws synchronously (e.g. malformed PEM)", async () => {
      mockedCreateClient.mockImplementation(() => {
        throw new Error("Invalid PEM");
      });

      const result = await action({
        request: buildRequest(validForm),
      } as Parameters<typeof action>[0]);

      expect(result.ok).toBe(false);
      if (result.ok === false) {
        expect(result.error).toMatch(/失敗|fail/i);
      }
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringMatching(/unhandled/i),
        expect.anything(),
      );
    });

    it("returns { ok: false } when submitContactForm returns { ok: false }", async () => {
      mockedCreateClient.mockReturnValue({
        appendRow: vi.fn().mockResolvedValue({
          spreadsheetId: "sheet-1",
          updatedRows: 0,
          updatedColumns: 0,
          updatedCells: 0,
        }),
      });

      const result = await action({
        request: buildRequest(validForm),
      } as Parameters<typeof action>[0]);

      expect(result.ok).toBe(false);
      if (result.ok === false) {
        expect(result.error).toMatch(/失敗|fail/i);
      }
    });

    it("returns { ok: false } when appendRow throws (Sheets API error)", async () => {
      mockedCreateClient.mockReturnValue({
        appendRow: vi.fn().mockRejectedValue(new Error("Sheets API append failed: 403")),
      });

      const result = await action({
        request: buildRequest(validForm),
      } as Parameters<typeof action>[0]);

      expect(result.ok).toBe(false);
      expect(consoleErrorSpy).toHaveBeenCalled();
    });
  });

  describe("validation", () => {
    it("returns { ok: false, error: required } when privacy is missing", async () => {
      const form = { ...validForm };
      delete form.privacy;

      const result = await action({
        request: buildRequest(form),
      } as Parameters<typeof action>[0]);

      expect(result).toEqual({
        ok: false,
        error: expect.stringMatching(/必須|required/i),
      });
      expect(mockedCreateClient).not.toHaveBeenCalled();
    });

    it("returns { ok: false, error: required } when email is invalid", async () => {
      const result = await action({
        request: buildRequest({ ...validForm, email: "not-an-email" }),
      } as Parameters<typeof action>[0]);

      expect(result).toEqual({
        ok: false,
        error: expect.stringMatching(/必須|required/i),
      });
      expect(mockedCreateClient).not.toHaveBeenCalled();
    });
  });
});
