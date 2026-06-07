# Architecture

## 概要

NaruHiyo Project のポートフォリオサイトです。React + TypeScript で構築された SPA (Single Page Application) で、GitHub Pages にデプロイされています。

---

## 技術スタック

| カテゴリ | ライブラリ / ツール | バージョン |
| --- | --- | --- |
| UIフレームワーク | React | 19.x |
| 言語 | TypeScript | 5.x |
| UIコンポーネント | MUI (Material UI) | 7.x |
| ルーティング | React Router DOM | 7.x |
| スタイリング | SCSS (Sass) / Emotion | 1.x / 11.x |
| ビルドツール | Vite | 8.x |
| パッケージマネージャ | pnpm | 11 |
| リンター | ESLint + typescript-eslint | 10.x / 8.x |
| フォーマッター | Prettier | 3.x |
| Git hooks | Lefthook | 2.1.9 |
| コンテナ | Docker (Apache httpd) | httpd:2.4.67-alpine3.23 |

---

## ディレクトリ構成

```
naruhiyo.github.io/
├── src/
│   ├── index.html            # HTML テンプレート
│   ├── main.tsx              # エントリーポイント
│   ├── App.tsx               # ルートコンポーネント（ルーティング定義）
│   ├── assets/
│   │   ├── styles.scss       # グローバルスタイル
│   │   └── public/           # 静的ファイル（画像、favicon、robots.txt など）
│   ├── components/           # 再利用可能な UI コンポーネント
│   ├── pages/                # ページコンポーネント（ルートに対応）
│   └── types/                # TypeScript 型定義
├── build/                    # ビルド成果物（自動生成）
├── docs/                     # ドキュメント・設計資料
│   ├── architecture.md       # 本ファイル
│   └── AppLayout.drawio      # 画面レイアウト図（Draw.io）
├── Dockerfile                # マルチステージビルド定義
├── vite.config.mjs           # Vite 設定
├── tsconfig.json             # TypeScript 設定
├── eslint.config.mjs         # ESLint 設定
├── prettier.config.js        # Prettier 設定
└── package.json              # 依存関係・スクリプト定義
```

---

## ルーティング

`App.tsx` にすべてのルートを定義しています。

履歴戦略は `<HashRouter>`（hash-based）を採用しています。これにより GitHub Pages 上でリロード時の 404 を防止しています。

| パス | ページコンポーネント | 説明 |
| --- | --- | --- |
| `/` | `Top` | トップ（ランディング）ページ |
| `/collaborators` | `CollaboratorsPage` | コラボレーター紹介ページ |
| `/products` | `ProductsPage` | プロダクト紹介ページ |
| `/activities` | `ActivityPage` | アクティビティページ |
| `/contact` | `ContactPage` | コンタクトページ |
| `*` | — | `/` へリダイレクト |

### キーボードナビゲーション

矢印キー（←↑ / →↓）でページ間を順番に移動できます。順序は `ROUTE_ORDER` 配列で管理しています。

---

## コンポーネント構成

### pages/（ページ層）

各ルートに対応するページコンポーネントです。`components/` を組み合わせてページを構成します。

| ファイル | 対応ルート |
| --- | --- |
| `Top.tsx` | `/` |
| `Products.tsx` | `/products` |
| `Activities.tsx` | `/activities` |
| `Collaborators.tsx` | `/collaborators` |
| `ContactPage.tsx` | `/contact` |

### components/（コンポーネント層）

再利用可能な UI コンポーネントです。

| ファイル | 役割 |
| --- | --- |
| `Header.tsx` | ナビゲーションヘッダー |
| `Footer.tsx` | フッター |
| `PageHeader.tsx` | ページタイトル表示 |
| `Product.tsx` | プロダクトカード |
| `ProductList.tsx` | プロダクト一覧 |
| `Activity.tsx` | アクティビティカード |
| `ActivityList.tsx` | アクティビティ一覧 |
| `Collaborator.tsx` | コラボレーターカード |
| `CollaboratorList.tsx` | コラボレーター一覧 |
| `Contact.tsx` | コンタクトフォーム |

### types/（型定義層）

各ドメインの TypeScript 型定義です。

| ファイル | 定義内容 |
| --- | --- |
| `Product.ts` | `ProductSchema`, `ProductListSchema` |
| `Activity.ts` | `ActivitySchema`, `ActivityListSchema`, `ActivityStatSchema` |
| `Collaborator.ts` | コラボレーター型 |
| `Contact.ts` | コンタクトフォーム型 |
| `Header.ts` | `HeaderSchema`（ナビゲーション構造） |
| `Footer.ts` | フッターデータ型 |

---

## ビルドフロー

```
pnpm run build
    └─ Vite
        ├─ TypeScript コンパイル
        ├─ ESLint チェック（自動修正）
        ├─ HTML 生成（vite-plugin-html）
        ├─ アセット圧縮（gzip / vite-plugin-compression）
        └─ 出力先: build/
               ├─ [name].[hash].js      # エントリーファイル
               ├─ vendor.[hash].js      # チャンクファイル
               └─ [name].[hash][ext]    # アセットファイル
```

---

## Docker 構成

マルチステージビルドで本番イメージを最小化しています。

```
Stage 1: builder (node:26.3.0-slim)
    └─ pnpm install && pnpm run build
           ↓
Stage 2: production (httpd:2.4.67-alpine3.23)
    └─ build/ を Apache ドキュメントルートにコピー
       ポート 8888 で公開
       www-data ユーザーで実行（非 root）
```

---

## パスエイリアス

`@src` は `src/` ディレクトリへのエイリアスです。`tsconfig.json` と `vite.config.mjs` の両方に設定されています。

```ts
import Header from '@src/components/Header';
```

---

## CI/CD

```
push to main
  └── app-release.yml
        ├── 1. Build app      (pnpm install + pnpm build)
        ├── 2. Deploy         (Upload artifact → GitHub Pages)
        └── 3. Build image    (Docker multi-arch: amd64 + arm64 → ghcr.io)
```

Code quality is enforced via:

- **Pull requests**: `ci.yml` — format check (`prettier --check`) + ESLint + Vite build.
- **pre-commit (lefthook)**: format check + ESLint (blocks commit on failure).
- **pre-push (lefthook)**: AI code review (`scripts/review-diff.sh`) with severity tiers — Blocker and High findings block the push.

## 関連ドキュメント

- [AppLayout.drawio](AppLayout.drawio) — 画面レイアウト構成図
- [README.md](../README.md) — プロジェクト概要・セットアップ手順
