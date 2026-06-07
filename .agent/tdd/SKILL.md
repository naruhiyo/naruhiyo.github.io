---
name: tdd
description: naruhiyo.github.io の TDD 実装ワークフロー。テストを先に書き、最小限のコードで通過させ、リファクタリングするサイクルを厳守する。
---

# TDD for naruhiyo.github.io

## 基本サイクル

1. **RED**: 失敗するテストを書く。テストだけが仕様である。
2. **GREEN**: テストを通す最小限のコードを書く。汎用性や美しさは不要。
3. **REFACTOR**: テストが通っている状態を維持しながらコードを改善する。

## プロジェクト概要

React 19 + React Router 7 製ポートフォリオサイト。

```
src/
├── main.tsx                 # アプリケーションエントリ
├── App.tsx                  # ルートコンポーネント
├── index.html               # HTML テンプレート
├── assets/
│   ├── styles.scss          # グローバルスタイル
│   └── public/images/       # 画像・動画リソース
├── components/              # 共通コンポーネント
│   ├── Activity.tsx
│   ├── ActivityList.tsx
│   ├── Collaborator.tsx
│   ├── CollaboratorList.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── GenericList.tsx
│   ├── Header.tsx
│   ├── PageHeader.tsx
│   ├── Product.tsx
│   └── ProductList.tsx
├── data/                    # 静的なデータ
│   ├── activities.ts
│   ├── collaborators.ts
│   └── products.ts
├── pages/                   # ルートページ
│   ├── Activities.tsx
│   ├── Collaborators.tsx
│   ├── ContactPage.tsx
│   ├── Products.tsx
│   └── Top.tsx
└── types/                   # TypeScript 型定義
    ├── Activity.ts
    ├── Collaborator.ts
    ├── Contact.ts
    ├── Footer.ts
    ├── Header.ts
    └── Product.ts
```

## 技術スタック

| カテゴリ       | ツール                                                                 |
| -------------- | ---------------------------------------------------------------------- |
| フレームワーク | React 19                                                               |
| ルーティング   | React Router DOM 7                                                     |
| ビルド         | Vite 8                                                                 |
| 言語           | TypeScript 6 (strict)                                                  |
| JSX            | `react-jsx`                                                            |
| パスエイリアス | `@src/*` → `src/*`                                                     |
| スタイル       | SCSS (Sass)                                                            |
| リンター       | ESLint 10 (flat config) + typescript-eslint + eslint-plugin-react      |
| フォーマッター | Prettier 3 (printWidth 120, singleQuote, no trailingComma, tabWidth 2) |
| Git hooks      | Lefthook 2 (pre-commit: lint + format check)                           |
| コミット       | Conventional Commits                                                   |
| CI/CD          | GitHub Actions (build → Pages deploy → Docker)                         |
| パッケージ管理 | pnpm                                                                   |

## テスト環境（推奨セットアップ）

テストフレームワーク未導入のため、以下のセットアップを推奨：

```sh
pnpm add -D vitest @testing-library/react @testing-library/jest-dom happy-dom
```

### vitest 設定例（`vitest.config.mts`）

```ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@src': path.resolve(__dirname, 'src') }
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: []
  }
});
```

### npm scripts 追加例

```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest"
  }
}
```

## テスト配置

```
__tests__/
├── unit/                     # 単位テスト
│   ├── components/           # コンポーネントのテスト
│   │   ├── Header.test.tsx
│   │   ├── Product.test.tsx
│   │   └── Footer.test.tsx
│   ├── pages/                # ページのテスト
│   │   └── Top.test.tsx
│   └── data/                 # データのテスト
│       └── activities.test.ts
├── integration/              # 統合テスト（ルーティング・画面遷移）
└── vitest.config.mts         # Vitest 設定
```

## テスト記法

- `describe` / `test` / `expect`（vitest, globals: true）
- `vi.fn()` でモック、`vi.spyOn()` でスパイ
- `@src/...` alias で import（`import { Header } from '@src/components/Header'`）
- 1テスト = 1アサーションが理想。複数アサーションする場合はテスト名に理由を明記
- `.test.tsx` 拡張子で記述（JSX を含むため）
- `@testing-library/react` の `render`, `screen`, `fireEvent` を使用する
- `data-testid` 属性をコンポーネントに付与して要素を特定する（class 名やテキスト内容に依存しない）

## テストパターン

### React コンポーネントのレンダリングテスト

```tsx
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '@src/components/Header';

describe('Header', () => {
  test('renders site title', () => {
    render(<Header />);
    expect(screen.getByText('NaruHiyo')).toBeDefined();
  });
});
```

### Props を受け取るコンポーネントのテスト

```tsx
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Product from '@src/components/Product';

describe('Product', () => {
  test('renders product name and description', () => {
    const product = { name: 'MyApp', description: 'A cool app', url: 'https://example.com' };
    render(<Product product={product} />);
    expect(screen.getByText('MyApp')).toBeDefined();
    expect(screen.getByText('A cool app')).toBeDefined();
  });
});
```

### イベントハンドラのテスト

```tsx
import { describe, expect, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '@src/components/Contact';

describe('Contact', () => {
  test('calls onSend when button is clicked', () => {
    const onSend = vi.fn();
    render(<Contact onSend={onSend} />);
    fireEvent.click(screen.getByTestId('send-button'));
    expect(onSend).toHaveBeenCalledTimes(1);
  });
});
```

### React Router を含むテスト

```tsx
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Top from '@src/pages/Top';

describe('Top page', () => {
  test('renders welcome message', () => {
    render(
      <MemoryRouter>
        <Top />
      </MemoryRouter>
    );
    expect(screen.getByText(/welcome/i)).toBeDefined();
  });
});
```

### データモジュールのテスト

```ts
import { describe, expect, test } from 'vitest';
import { activities } from '@src/data/activities';

describe('activities data', () => {
  test('all activities have a name', () => {
    activities.forEach((a) => {
      expect(a.name).toBeDefined();
      expect(a.name.length).toBeGreaterThan(0);
    });
  });
});
```

## 実装のルール

- GREEN フェーズでは **テストが通る最小限** を書く。余計なロジックを追加しない。
- REFACTOR フェーズでのみ、重複の除去・命名の改善・抽象化を行う。
- 一度に複数のテストを書かない。1テスト → 1実装 → リファクタリング のサイクルを守る。
- 全てのテストが常に GREEN である状態を保つ。
- 関数コンポーネント + Hooks をデフォルトとする。
- `data-testid` を用いてテスト対象の要素を特定する（class 名やテキスト内容に依存すると、リファクタリングで壊れやすいため）。
- ESLint ルール `@typescript-eslint/no-explicit-any: error` に従い、`any` 型の使用は禁止。

## コミットメッセージ

プロジェクトの規約に従い Conventional Commits を使用する。

```
test(component): add Header render test
feat(component): implement Header with navigation
refactor(component): extract nav items to config
```

## プッシュ前の自己同期

`git push` する前に、この SKILL.md 自身とドキュメント群を最新のコードベースに合わせて更新する。

### 同期チェックリスト

1. **SKILL.md のプロジェクト構成を実物と照合**
   - `src/` 以下の実際のファイル一覧と「プロジェクト概要」セクションが一致しているか確認
   - 追加・削除・移動があれば更新する

2. **テストパターンを実装と照合**
   - 新しいコンポーネントや機能が増えていればサンプルコードを追加
   - 使われていない型や関数のパターンは削除

3. **プロジェクトドキュメントを更新**
   - `docs/architecture.md` — ディレクトリ構造・API・ビルド設定が実態に合っているか
   - `README.md` — セットアップ手順や特徴が最新か
   - `.github/copilot-instructions.md` — コーディング規約が最新か

4. **テスト・ビルドの通過確認**

   ```sh
   pnpm test
   pnpm build
   ```

5. **この SKILL.md 自身も更新内容を反映する**
   （`.agent/tdd/SKILL.md` に配置。プロジェクトと一緒にコミットされる）
