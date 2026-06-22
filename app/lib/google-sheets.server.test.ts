import { exportPKCS8, generateKeyPair, jwtVerify } from "jose";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { createGoogleSheetsClient } from "./google-sheets.server";

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SHEETS_BASE = "https://sheets.googleapis.com/v4/spreadsheets";

async function makeKeyPair() {
  const { publicKey, privateKey } = await generateKeyPair("RS256", { extractable: true });
  const privatePem = await exportPKCS8(privateKey);
  return { publicKey, privatePem };
}

function okJson(body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}

function errorJson(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

function appendResponse(updates: Record<string, unknown> = {}) {
  return okJson({
    spreadsheetId: "test-spreadsheet-id",
    updates: { updatedRows: 1, updatedColumns: 1, updatedCells: 1, ...updates },
  });
}

function tokenResponse(access = "TOKEN", expiresIn = 3600) {
  return okJson({ access_token: access, expires_in: expiresIn });
}

describe("createGoogleSheetsClient", () => {
  let privatePem: string;
  let publicKey: CryptoKey;
  let clientEmail: string;
  let fetchMock: ReturnType<typeof vi.fn>;
  let nowMs: number;
  const spreadsheetId = "test-spreadsheet-id";
  const range = "Form!A:K";

  beforeEach(async () => {
    const kp = await makeKeyPair();
    publicKey = kp.publicKey;
    privatePem = kp.privatePem;
    clientEmail = "test@project.iam.gserviceaccount.com";
    fetchMock = vi.fn();
    nowMs = new Date("2030-01-01T00:00:00Z").getTime();
  });

  function build(
    overrides: Partial<{ clientEmail: string; privateKey: string; scope: string }> = {},
  ) {
    return createGoogleSheetsClient(
      {
        clientEmail: overrides.clientEmail ?? clientEmail,
        privateKey: overrides.privateKey ?? privatePem,
        spreadsheetId,
        scope: overrides.scope,
      },
      { fetch: fetchMock as unknown as typeof fetch, now: () => nowMs },
    );
  }

  function sheetsCall() {
    return fetchMock.mock.calls.find(([url]) => String(url).startsWith(SHEETS_BASE))!;
  }

  describe("JWT signing", () => {
    it("requests an access token by posting a signed JWT", async () => {
      fetchMock.mockResolvedValueOnce(tokenResponse("TOKEN_1"));
      fetchMock.mockResolvedValueOnce(appendResponse({ updatedRows: 1, updatedCells: 3 }));

      await build().appendRow({ range, values: [["a", "b", "c"]] });

      expect(fetchMock).toHaveBeenCalledTimes(2);
      const [tokenUrl, tokenInit] = fetchMock.mock.calls[0]!;
      expect(tokenUrl).toBe(TOKEN_URL);

      const body = new URLSearchParams(tokenInit.body as string);
      expect(body.get("grant_type")).toBe("urn:ietf:params:oauth:grant-type:jwt-bearer");
      const assertion = body.get("assertion")!;
      const { payload, protectedHeader } = await jwtVerify(assertion, publicKey, {
        issuer: clientEmail,
        audience: TOKEN_URL,
      });
      expect(protectedHeader.alg).toBe("RS256");
      expect(protectedHeader.typ).toBe("JWT");
      expect(payload.iss).toBe(clientEmail);
      expect(payload.aud).toBe(TOKEN_URL);
      expect(payload.scope).toBe("https://www.googleapis.com/auth/spreadsheets");
      expect(payload.iat!).toBe(Math.floor(nowMs / 1000));
      expect(payload.exp!).toBe(payload.iat! + 3600);
    });

    it("uses default scope 'https://www.googleapis.com/auth/spreadsheets' when not specified", async () => {
      fetchMock.mockResolvedValueOnce(tokenResponse("TOKEN_1"));
      fetchMock.mockResolvedValueOnce(appendResponse());

      await build().appendRow({ range, values: [["a"]] });

      const assertion = new URLSearchParams(fetchMock.mock.calls[0]![1].body as string).get(
        "assertion",
      )!;
      const { payload } = await jwtVerify(assertion, publicKey, {
        issuer: clientEmail,
        audience: TOKEN_URL,
      });
      expect(payload.scope).toBe("https://www.googleapis.com/auth/spreadsheets");
    });
  });

  describe("token caching", () => {
    it("reuses the cached token within expiry", async () => {
      fetchMock.mockResolvedValueOnce(tokenResponse("TOKEN_X"));
      fetchMock.mockResolvedValueOnce(appendResponse());
      fetchMock.mockResolvedValueOnce(appendResponse());

      const client = build();
      await client.appendRow({ range, values: [["1"]] });
      await client.appendRow({ range, values: [["2"]] });

      const tokenCalls = fetchMock.mock.calls.filter(([url]) => url === TOKEN_URL);
      expect(tokenCalls).toHaveLength(1);
    });

    it("refreshes the token once expired", async () => {
      fetchMock.mockResolvedValueOnce(tokenResponse("TOKEN_OLD", 3600));
      fetchMock.mockResolvedValueOnce(appendResponse());

      const client = build();
      await client.appendRow({ range, values: [["1"]] });

      nowMs += 3600 * 1000 + 60 * 1000;
      fetchMock.mockResolvedValueOnce(tokenResponse("TOKEN_NEW", 3600));
      fetchMock.mockResolvedValueOnce(appendResponse());
      await client.appendRow({ range, values: [["2"]] });

      const tokenCalls = fetchMock.mock.calls.filter(([url]) => url === TOKEN_URL);
      expect(tokenCalls).toHaveLength(2);
    });
  });

  describe("values.append request", () => {
    it("POSTs to the values.append endpoint with USER_ENTERED", async () => {
      fetchMock.mockResolvedValueOnce(tokenResponse("TOKEN_1"));
      fetchMock.mockResolvedValueOnce(
        appendResponse({
          updatedRange: "Form!A2:K2",
          updatedRows: 1,
          updatedColumns: 11,
          updatedCells: 11,
        }),
      );

      const client = build();
      const result = await client.appendRow({
        range,
        values: [["2024-01-01T00:00:00Z", "jp", "kind1", "山田", "Acme"]],
      });

      const [url, init] = sheetsCall();
      const expectedUrl = `${SHEETS_BASE}/${spreadsheetId}/values/${encodeURIComponent(range)}:append?valueInputOption=USER_ENTERED`;
      expect(url).toBe(expectedUrl);
      expect(init.method).toBe("POST");
      expect((init.headers as Record<string, string>).Authorization).toBe("Bearer TOKEN_1");
      expect(JSON.parse(init.body as string)).toEqual({
        range,
        majorDimension: "ROWS",
        values: [["2024-01-01T00:00:00Z", "jp", "kind1", "山田", "Acme"]],
      });
      expect(result.updatedRange).toBe("Form!A2:K2");
      expect(result.updatedRows).toBe(1);
      expect(result.updatedColumns).toBe(11);
    });

    it("supports multiple rows in a single call", async () => {
      fetchMock.mockResolvedValueOnce(tokenResponse());
      fetchMock.mockResolvedValueOnce(appendResponse({ updatedRows: 2, updatedCells: 6 }));

      const client = build();
      await client.appendRow({
        range,
        values: [
          ["a", "b", "c"],
          ["d", "e", "f"],
        ],
      });

      const body = JSON.parse(sheetsCall()[1].body as string);
      expect(body.values).toHaveLength(2);
    });
  });

  describe("error handling", () => {
    it("throws on token endpoint 4xx", async () => {
      fetchMock.mockResolvedValueOnce(errorJson(401, { error: "invalid_client" }));

      const client = build();
      await expect(client.appendRow({ range, values: [["a"]] })).rejects.toThrow(/token/i);
    });

    it("throws on Sheets API 4xx with the error body included", async () => {
      fetchMock.mockResolvedValueOnce(tokenResponse());
      fetchMock.mockResolvedValueOnce(
        errorJson(403, {
          error: {
            code: 403,
            message: "The caller does not have permission",
            status: "PERMISSION_DENIED",
          },
        }),
      );

      const client = build();
      await expect(client.appendRow({ range, values: [["a"]] })).rejects.toThrow(/permission/i);
    });

    it("throws on Sheets API 5xx", async () => {
      fetchMock.mockResolvedValueOnce(tokenResponse());
      fetchMock.mockResolvedValueOnce(errorJson(500, { error: { message: "Internal error" } }));

      const client = build();
      await expect(client.appendRow({ range, values: [["a"]] })).rejects.toThrow(/internal/i);
    });
  });

  describe("private key handling", () => {
    it("accepts a PEM with escaped \\n (typical GCP service account JSON)", async () => {
      const escapedPem = privatePem.replace(/\n/g, "\\n");
      fetchMock.mockResolvedValueOnce(tokenResponse());
      fetchMock.mockResolvedValueOnce(appendResponse());

      const c = build({ privateKey: escapedPem });
      await c.appendRow({ range, values: [["x"]] });

      const assertion = new URLSearchParams(fetchMock.mock.calls[0]![1].body as string).get(
        "assertion",
      )!;
      await expect(
        jwtVerify(assertion, publicKey, { issuer: clientEmail, audience: TOKEN_URL }),
      ).resolves.toBeDefined();
    });
  });
});
