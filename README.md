# Shodo HQ コーポレートサイト

React Router 8 (SSR) + Cloudflare Workers + Tailwind v4 で構築された Shodo HQ のコーポレートサイト。規約・判断は [AGENTS.md](./AGENTS.md) を参照。

## 開発

```bash
pnpm install
pnpm dev   # http://localhost:5173
```

## テスト

```bash
pnpm test:run   # 1 回実行 (CI 用)
pnpm test       # watch モード
```

## ビルド

```bash
pnpm build   # .react-router/types/ + build/ を生成
```

## デプロイ (Cloudflare Workers)

vars は `wrangler.jsonc` のトップレベルに直接配置 (env 階層なし)。
`wrangler deploy` だけで `shodohq` worker に env vars が反映される。

### 初回セットアップ (本番)

```bash
# 1. SA key を secret として登録
npx wrangler secret put GOOGLE_SERVICE_ACCOUNT_KEY
# 標準入力に GCP service account JSON 全体を貼り付け
# (改行は \n エスケープのまま、コード側で \\n → \n に正規化)

# 2. wrangler.jsonc の vars を本番用に編集
#    - GOOGLE_SPREADSHEET_ID を本番シート ID に置換

# 3. 本番スプレッドシートに SA を編集者として招待

# 4. デプロイ
pnpm build
npx wrangler deploy
```

### 新規開発者

```bash
# 1. テンプレートをコピー
cp .dev.vars.example .dev.vars

# 2. .dev.vars を編集 (自分のスプレッドシート ID と SA key)
#    - スプレッドシート作成 → SA に編集権限付与 → JSON 取得

# 3. 開発サーバ起動
pnpm dev
```

## リンク

- [React Router 8](https://reactrouter.com/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
