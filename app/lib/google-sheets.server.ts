import { importPKCS8, SignJWT } from "jose";

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const DEFAULT_SCOPE = "https://www.googleapis.com/auth/spreadsheets";
const TOKEN_EXPIRY_SECONDS = 3600;
const TOKEN_REFRESH_MARGIN_SECONDS = 60;
const USER_AGENT = "shodohq-contact-form/1.0 (Google Sheets)";

export type GoogleSheetsConfig = {
  clientEmail: string;
  privateKey: string;
  spreadsheetId: string;
  scope?: string;
};

export type GoogleSheetsDeps = {
  fetch?: typeof fetch;
  now?: () => number;
};

export type AppendRowInput = {
  range: string;
  values: ReadonlyArray<ReadonlyArray<string | number>>;
};

export type AppendRowFn = (input: AppendRowInput) => Promise<AppendRowResult>;

export type AppendRowResult = {
  spreadsheetId: string;
  updatedRange?: string;
  updatedRows: number;
  updatedColumns: number;
  updatedCells: number;
};

type TokenCache = {
  accessToken: string;
  expiresAt: number;
};

export type GoogleSheetsClient = {
  appendRow: (input: AppendRowInput) => Promise<AppendRowResult>;
};

function normalizePrivateKey(key: string): string {
  return key.includes("\\n") ? key.replace(/\\n/g, "\n") : key;
}

function readErrorMessage(status: number, body: unknown): string {
  if (body && typeof body === "object") {
    const b = body as { error?: { message?: string } | string; error_description?: string };
    if (typeof b.error === "object" && b.error?.message) return b.error.message;
    if (typeof b.error === "string" && b.error_description) {
      return `${b.error}: ${b.error_description}`;
    }
    if (typeof b.error === "string") return b.error;
  }
  return `HTTP ${status}`;
}

export function createGoogleSheetsClient(
  config: GoogleSheetsConfig,
  deps: GoogleSheetsDeps = {},
): GoogleSheetsClient {
  const fetchImpl = deps.fetch ?? fetch;
  const now = deps.now ?? (() => Date.now());
  const scope = config.scope ?? DEFAULT_SCOPE;
  const keyPromise = importPKCS8(normalizePrivateKey(config.privateKey), "RS256");
  let cache: TokenCache | null = null;

  async function getAccessToken(): Promise<string> {
    const nowSec = Math.floor(now() / 1000);
    if (cache && cache.expiresAt - TOKEN_REFRESH_MARGIN_SECONDS > nowSec) {
      return cache.accessToken;
    }

    const key = await keyPromise;
    const jwt = await new SignJWT({ scope })
      .setProtectedHeader({ alg: "RS256", typ: "JWT" })
      .setIssuer(config.clientEmail)
      .setAudience(TOKEN_URL)
      .setIssuedAt(nowSec)
      .setExpirationTime(nowSec + TOKEN_EXPIRY_SECONDS)
      .sign(key);

    const res = await fetchImpl(TOKEN_URL, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        assertion: jwt,
      }).toString(),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      throw new Error(`Google token endpoint failed: ${readErrorMessage(res.status, body)}`);
    }

    const data = (await res.json()) as { access_token?: string; expires_in?: number };
    if (!data.access_token) {
      throw new Error("Google token endpoint returned no access_token");
    }
    const ttl = data.expires_in ?? TOKEN_EXPIRY_SECONDS;
    cache = { accessToken: data.access_token, expiresAt: nowSec + ttl };
    return data.access_token;
  }

  return {
    async appendRow({ range, values }: AppendRowInput): Promise<AppendRowResult> {
      const accessToken = await getAccessToken();
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values/${encodeURIComponent(
        range,
      )}:append?valueInputOption=USER_ENTERED`;

      const res = await fetchImpl(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "content-type": "application/json",
          "user-agent": USER_AGENT,
        },
        body: JSON.stringify({ range, majorDimension: "ROWS", values }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(`Sheets API append failed: ${readErrorMessage(res.status, body)}`);
      }

      const data = (await res.json()) as {
        spreadsheetId?: string;
        updates?: {
          updatedRange?: string;
          updatedRows?: number;
          updatedColumns?: number;
          updatedCells?: number;
        };
      };

      return {
        spreadsheetId: data.spreadsheetId ?? config.spreadsheetId,
        updatedRange: data.updates?.updatedRange,
        updatedRows: data.updates?.updatedRows ?? 0,
        updatedColumns: data.updates?.updatedColumns ?? 0,
        updatedCells: data.updates?.updatedCells ?? 0,
      };
    },
  };
}
