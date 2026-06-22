# AGENTS.md

## プロジェクト概要

Shodo HQ のコーポレートサイト。

- フレームワーク: React Router 8 (SSR 有効 / `react-router.config.ts` の `ssr: true`)
- レンダリング: Cloudflare Workers (`workers/app.ts` が fetch ハンドラ)
- スタイリング: Tailwind CSS v4 (`@tailwindcss/vite` 経由)
- 言語: TypeScript (strict)
- パッケージマネージャ: pnpm (`pnpm-workspace.yaml` の `allowBuilds` に esbuild / sharp / workerd を許可)

## 公式ドキュメントを参照する

React Router 8 / Tailwind CSS v4 は API が大きく変わっており、頻繁に変更されている。実装前に必ず公式ドキュメントを参照し、対象バージョンでの API 仕様を確認すること。学習データに含まれる古い情報 (Remix、React Router v6/v7、Tailwind v3 など) は参考程度に留め、必ず現行バージョンで再確認する。

- React Router 8: https://reactrouter.com/
- Tailwind CSS v4: https://tailwindcss.com/docs
- Cloudflare Workers (Vite プラグイン): https://developers.cloudflare.com/workers/vite-plugin/

## 開発コマンド

すべて pnpm 経由。`npm` / `yarn` は使わない。

| コマンド          | 用途                                            |
| ----------------- | ----------------------------------------------- |
| `pnpm dev`        | 開発サーバ起動 (HMR)。`http://localhost:5173`   |
| `pnpm build`      | 本番ビルド (React Router のビルド)              |
| `pnpm preview`    | ビルド + `vite preview`                         |
| `pnpm typecheck`  | `wrangler types && react-router typegen && tsc` |
| `pnpm lint`       | oxlint (type-aware)                             |
| `pnpm lint:fix`   | oxlint の自動修正                               |
| `pnpm fmt`        | oxfmt でフォーマット                            |
| `pnpm fmt:check`  | oxfmt のチェックのみ                            |
| `pnpm test`       | vitest (watch モード)                           |
| `pnpm test:run`   | vitest (1 回実行、CI 用)                        |
| `pnpm cf-typegen` | wrangler の型生成 (Cloudflare bindings 用)      |

`typecheck` は生成物に依存するため、`.react-router/` や `worker-configuration.d.ts` が古いと失敗する。失敗したら `pnpm cf-typegen` や `pnpm dev` を一度走らせてから再実行する。

## プロジェクト構成

```
app/
  root.tsx              # HTML シェル / ErrorBoundary
  app.css               # Tailwind v4 エントリ + テーマトークン
  entry.server.tsx      # SSR エントリ
  routes.ts             # flatRoutes() を export
  routes/               # ファイルベースルーティング (詳細は下記)
  components/           # 複数ルートで共有するコンポーネント
  lib/                  # 共有ロジック (i18n / scroll-reveal / 翻訳辞書 / server-only クライアント等)
workers/
  app.ts                # Cloudflare Workers の fetch ハンドラ
public/                 # 静的アセット
.react-router/          # 生成物 (触らない)
build/                  # 生成物 (触らない)
worker-configuration.d.ts  # wrangler が生成する型
```

### ルーティング規約

`app/routes.ts` で `flatRoutes()` を export している。新しいページは `app/routes/<name>.tsx` (または `app/routes/<name>/route.tsx`) を追加するだけでルートとして認識される。`routes.ts` を編集する必要はない。

- パスとファイル名の対応は React Router の `flatRoutes` 規約に従う (`_index.tsx` が `/`、`_layout.tsx` がレイアウトなど)
- ページが大きくなったら React Router の [Folders for Organization](https://reactrouter.com/how-to/file-route-conventions#folders-for-organization) パターンを使う。`app/routes/<page>/route.tsx` がルートモジュール、それ以外のファイル (セクション・ヘルパー) はフォルダ内に自由に置ける (ファイル名に制約なし、ルートとして解釈されない)

### ファイル配置の規約

- **ルート固有のコンポーネント**:
  - ページが小さい場合 (目安 ~300 行以下): `app/routes/<page>.tsx` に co-locate
  - ページが大きい場合: `app/routes/<page>/route.tsx` (default export + meta + action) ＋ `app/routes/<page>/<section>.tsx` に分割 (例: `app/routes/_index/hero.tsx`, `app/routes/contact/form.tsx`)
- **複数ルートで共有するコンポーネント**: `app/components/` に集約 (例: `app/components/Nav.tsx`, `app/components/Footer.tsx`)。**汎用的なものだけ**。ページ固有のものはルートのフォルダに置く
- **ルート固有の server/client ロジック**: `app/routes/<name>.server.ts` / `app/routes/<name>.client.ts` (loader / action のヘルパーなど)
- **共有の server-only ロジック** (外部 API クライアント等): `app/lib/<name>.server.ts` (`app/lib/` は server-only。クライアント共有のロジックはここに置かない)
- **共有のクライアントロジック** (i18n / scroll-reveal 等):
  - 基本は `app/lib/<name>.tsx` (server / client 両方で import 可能)。`useEffect` 内ですべて完結するコードはこれで十分
  - `.client.ts(x)` 拡張子は React Router に server バンドルからの除外を指示する目印。これを使うと Layout などから呼ぶと SSR で `undefined` になるため、**本当に server バンドルから除外が必要な時だけ**使う (例: モジュールトップレベルで `window` を参照する / 初期化時に副作用がある / workerd 非対応の API を import する)
  - 判断に迷ったら `.tsx` から始める。動作しなければ `.client.tsx` に切り替える
- **翻訳辞書**: `app/lib/translations.ts` (`{ jp, en }` のツリー構造)。`tr(lang, "group.key")` で参照
- **型生成**: ルートファイル変更時は `pnpm typecheck` で `react-router typegen` を再実行する。生成された `./+types/<page>/route` を `import type` する

### パスエイリアス

`tsconfig.json` の `paths` で `~/*` → `./app/*` を設定済み。`vite.config.ts` の `resolve.alias` でも同じ設定が必要 (ないと SSR ランタイムで解決できない)。相対パスの代わりに `~/components/...` のように参照する。

## 外部サービス連携

- **お問い合わせフォーム**: 送信内容を Google Sheets に保存する想定
- **Google API**: `googleapis` パッケージは Cloudflare Workers (workerd) で動作しない。`fetch` で生 API を叩く独自実装を使う
- 外部 API クライアント (例: Google Sheets) は `app/lib/<service>.server.ts` に集約し、ルート固有の処理 (`app/routes/<name>.server.ts`) から呼び出す
- サードパーティ製 SDK を `pnpm add` する前に、workerd ランタイムで動作するか必ず確認する

### Google Sheets 連携の構成

| 環境変数                     | 種別                                             | 用途                                                        |
| ---------------------------- | ------------------------------------------------ | ----------------------------------------------------------- |
| `GOOGLE_SERVICE_ACCOUNT_KEY` | **secret** (`.dev.vars` / `wrangler secret put`) | GCP 発行の service account JSON (private key 含む)          |
| `GOOGLE_SHEETS_ENABLED`      | `vars` (`wrangler.jsonc`)                        | `true` で Sheets 接続、`false` で `{ ok: true }` スタブ返却 |
| `GOOGLE_SPREADSHEET_ID`      | `vars`                                           | 書き込み先スプレッドシート ID                               |
| `GOOGLE_SHEET_RANGE`         | `vars` (任意)                                    | デフォルト `Form!A:K`                                       |

#### vars と secret の分離

- **`wrangler.jsonc` `env.<env>.vars`**: 本番など環境ごとに固定したい公開情報 (コミットする)
- **`.dev.vars`** (gitignore 済み): 開発者個別の全 env vars (`secrets` + `vars` 両方)。`.dev.vars.example` をテンプレートとしてコミットし、各開発者は `.dev.vars.example` を `.dev.vars` にコピーして値を埋める
- **`wrangler secret put`**: 本番 / Preview のシークレットを Cloudflare に登録

**重要**: `secrets.required` は **使わない**。これがあると `.dev.vars` から vars がフィルタされて除外され (secrets のみロード)、`.dev.vars` 内の vars が `env` から読めなくなる。代わりに action 内の `if (!rawKey || !spreadsheetId)` チェックで起動時に `{ ok: false, error: "サーバー設定エラー" }` を返す

#### 環境別の vars (dev / production)

本番と開発で書き込むスプレッドシートを分けるため、`wrangler.jsonc` の `env.<name>.vars` を使う:

```jsonc
{
  "env": {
    "production": {
      "vars": {
        /* production 用 (--env production で使用) */
      },
    },
  },
}
```

- トップレベル (デフォルト): `pnpm dev` で使用 → 開発用スプレッドシートは `.dev.vars` から読み込まれる
- `env.production`: `wrangler deploy --env production` で使用
- 新しい環境 (例: `staging`) を追加する場合は `env.staging.vars` を追加

#### セットアップ手順

- **本番**:
  1. `npx wrangler secret put GOOGLE_SERVICE_ACCOUNT_KEY` で JSON 全体を貼り付け (改行は `\n` エスケープのまま OK、コード側で `\\n` → `\n` に正規化)
  2. `wrangler.jsonc` の `env.production.vars` を本番用に編集 (スプレッドシート ID, range)
  3. `wrangler deploy --env production` でデプロイ
- **新規開発者**:
  1. `.dev.vars.example` を `.dev.vars` にコピー
  2. 各値を自分の開発環境のものに置き換える (スプレッドシート作成 + SA に編集権限付与 → キー JSON 取得)
  3. `pnpm dev` で起動
- **secret 漏れチェック**: action 内の `if (!rawKey || !spreadsheetId)` で起動時に `{ ok: false, error: "サーバー設定エラー" }` を返す

#### 認証スコープ

- デフォルト: `https://www.googleapis.com/auth/spreadsheets` (Sheets API の完全 URL 形式必須)
- 短縮形 (`spreadsheets`) だとトークンエンドポイントが 200 を返すが `access_token` を含まない偽レスポンスを返す (デバッグしにくいバグ)

#### 行のカラム順

`[timestamp, lang, kind, name, org, role, email, product, topics, message, privacy]` (11 列固定、topics は `/` 区切り、空は `-`)

#### 言語取得

action 内で `shodo_lang` cookie から取得 (i18n 機構と整合)

## 主要ライブラリ

- **`@tanstack/react-form`**: フォーム状態管理 (お問い合わせフォーム等)
- **`zod`**: バリデーションスキーマ
- **`jose`**: Google Service Account の JWT 署名 (Sheets API 認証用)
- **`vitest`** (dev): テストランナー (Google Sheets クライアント等の単体テストに使用)

## 行動メモ

- 既存ファイルの編集を優先し、無闇に新規ファイルを作らない
- 明示的に依頼されない限り commit / push / PR 作成は行わない
- 生成物 (`.react-router/`, `build/`, `worker-configuration.d.ts`) は手動で編集しない
- コードにコメントを追加しない (命名と構造で意図を伝える。ユーザーから明示的に要求されたときのみ追加する)

## テスト方針

- テストランナーは **Vitest** (`pnpm test:run` / `pnpm test`)
- 設定: `vitest.config.ts` (Node 環境、`~/*` エイリアス対応)
- 重要な純関数 / 副作用ロジックは **TDD** で書く
  - 既存: `contact.schema.ts` (Zod) / `google-sheets.server.ts` (Sheets) / `contact.server.ts` (form→row 変換)
- 外部 API を叩く関数は `fetch` を DI し、テストでモックする
- 時刻に依存するテストは `now` を DI する
- 秘密鍵はテスト実行時に `generateKeyPair` で動的生成 (リポジトリに鍵を含めない)
- テストファイル追加は明示的に依頼されたときのみ
- UI コンポーネント (form.tsx 等) は単体テスト対象外 (dev サーバで目視確認)

## AGENTS.md の更新基準

このファイルは **AI エージェント (および人間) への作業指示** であり、プロジェクト内で合意された規約・判断・前提を唯一の場所に集約するリポジトリ内ドキュメント。**新しい規約や判断を 1 回でも導入したら、必ずこのファイルも同時更新する** (PR 単位)。

### 更新する場面

| 状況                                     | 例                                                                          |
| ---------------------------------------- | --------------------------------------------------------------------------- |
| 新しい規約・アーキテクチャ判断を導入した | Folders for Organization パターンの採用、`app/lib/` への辞書集約            |
| 命名・配置規則を変更した                 | `.client.tsx` 命名規則の推奨、フォルダ分割の基準 (~300 行)                  |
| 環境・依存関係が変わった                 | 新パッケージ追加、SDK 制約の発見 (例: `googleapis` は workerd で動作しない) |
| 行動指針を追加・修正した                 | commit ルール、コメント方針、テスト方針                                     |
| 落とし穴・回避策を記録したい             | `pnpm typecheck` は生成物に依存、生成物ディレクトリ一覧                     |
| 公式ドキュメントを参考にした判断         | React Router 8 / Tailwind v4 / Cloudflare Workers のリンク                  |

### 更新しない場面

- 個別ファイルの実装詳細 (それはコードコメントではなくコードで語る)
- 一時的な調査メモ (終わったら消すか、Issue / 別ドキュメントへ)
- 自明な慣習 (例: `pnpm dev` で開発サーバが立つ)

### 書き方の基準

- **結論 → 理由** の順で書く。「なぜそうするか」が後の自分 / 別エージェントの判断材料になる
- コードブロックで具体例を示せるなら必ず示す (命名規則・設定値など)
- 公式ドキュメントの URL があれば貼る (リンク切れ検知のため)
- 既存セクションの「リスト 1 項目追加」は OK。セクション丸ごと新設は重複がないか確認する
- 自分しか分からない暗黙知を **書き残す場所** として運用する (書いたら誰かに読まれる前提で)
