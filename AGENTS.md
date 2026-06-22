# AGENTS.md

## プロジェクト概要

Shodo HQ コーポレートサイト。React Router 8 (SSR) + Cloudflare Workers + Tailwind v4 + TypeScript。

## 公式ドキュメント

API が頻繁に変更されるため、実装前に必ず公式ドキュメントを参照。学習データの古い情報 (Remix, RR v6/v7, Tailwind v3) は参考のみ。

- React Router 8: https://reactrouter.com/
- Tailwind CSS v4: https://tailwindcss.com/docs
- Cloudflare Workers: https://developers.cloudflare.com/workers/

## 開発コマンド

すべて pnpm 経由 (npm / yarn 不可)。

| コマンド                       | 用途                                     |
| ------------------------------ | ---------------------------------------- |
| `pnpm dev`                     | 開発サーバ (HMR) - http://localhost:5173 |
| `pnpm build`                   | 本番ビルド                               |
| `pnpm typecheck`               | wrangler types + typegen + tsc           |
| `pnpm lint` / `pnpm fmt:check` | oxlint / oxfmt                           |
| `pnpm test` / `pnpm test:run`  | vitest (watch / 1 回)                    |
| `pnpm cf-typegen`              | wrangler の型生成                        |

`typecheck` は生成物に依存 (`.react-router/`、`worker-configuration.d.ts`)。失敗時は先に `pnpm dev` か `pnpm cf-typegen` を実行。

## プロジェクト構成

```
app/
  root.tsx              # HTML シェル / ErrorBoundary
  app.css               # Tailwind v4 エントリ
  entry.server.tsx      # SSR エントリ
  routes.ts             # flatRoutes() を export
  routes/               # ファイルベースルーティング
  components/           # 複数ルートで共有
  lib/                  # 共有ロジック (i18n / scroll-reveal / server-only)
workers/app.ts          # Cloudflare Workers fetch ハンドラ
public/                 # 静的アセット
.react-router/          # 生成物 (触らない)
build/                  # 生成物 (触らない)
```

## ファイル配置の規約

- ルート固有のコンポーネント: ページが小さい場合 (~300 行以下) は `app/routes/<page>.tsx` に co-locate、大きい場合は `app/routes/<page>/route.tsx` + セクションファイル群
- 複数ルートで共有: `app/components/` に集約 (汎用的なもののみ)
- ルート固有の server / client ロジック: `app/routes/<name>.server.ts` / `.client.ts`
- 共有の server-only ロジック: `app/lib/<name>.server.ts` (`app/lib/` は server-only)
- 共有のクライアントロジック: 基本 `app/lib/<name>.tsx`、本当に必要な時だけ `.client.tsx`
- 翻訳辞書: `app/lib/translations.ts`、`tr(lang, "group.key")` で参照

ルーティングは `app/routes.ts` の `flatRoutes()` で解決。新ページ追加で `routes.ts` 編集不要。

## テスト方針

- テストランナー: Vitest (`pnpm test:run` / `pnpm test`)
- 重要な純関数 / 副作用ロジックは TDD で書く
- 外部 API 関数は `fetch` を DI、時刻依存テストは `now` を DI
- 秘密鍵は `generateKeyPair` で動的生成 (リポジトリに鍵を含めない)
- UI コンポーネントは単体テスト対象外 (dev サーバで目視確認)
- テストファイル追加は明示的に依頼されたときのみ

## 行動メモ

- 既存ファイルの編集を優先し、無闇に新規ファイルを作らない
- 明示的に依頼されない限り commit / push / PR 作成は行わない
- 生成物 (`.react-router/`, `build/`, `worker-configuration.d.ts`) は手動で編集しない
- コードにコメントを追加しない (命名と構造で意図を伝える)

## AGENTS.md の更新基準

このファイルは AI エージェント (および人間) への作業指示。合意された規約・判断の唯一の集約場所。

### 加えるべきもの

- アーキテクチャ判断 (コード構造に影響)
- ビルド / 実行コマンド
- 外部ドキュメントへのリンク

### 加えるべきでない

- 運用手順 (deploy / dev onboarding) → `README.md`
- サービス固有の設定詳細 → コード or テスト
- バグの post-mortem → コミットメッセージ
- 自明な慣習 / コードを読めばわかる詳細

### フォーマットルール

- セクション: 最大 30 行
- コードブロック: 最大 10 行 (超えたら `see app/...` でファイル参照)
- 1 ルール = 1-2 文
- `package.json` / `wrangler.jsonc` / コードと重複しない
