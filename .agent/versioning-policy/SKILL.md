---
name: versioning-policy
description: セマンティックバージョニング（SemVer）に基づくリリース規約。patch/minor/major の使い分けを定義。
---

# Versioning Policy - セマンティックバージョニング規約

## このワークスペース（4リポジトリ）共通のリリース規約

全リポジトリ（aecomet.github.io, backoff-util, gozoku, naruhiyo.github.io）で共通して適用。

---

## SemVer 定義

| バージョン | 形式    | 適用条件                                                                                                                                    | 例              |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| **Patch**  | `x.y.Z` | **後方互換性のあるバグ修正**<br>- バグフィックス<br>- セキュリティ修正（依存含む）<br>- ドキュメント修正<br>- 内部リファクタ（API変更なし） | v2.4.0 → v2.4.1 |
| **Minor**  | `x.Y.0` | **後方互換性のある機能追加**<br>- 新機能・新API追加<br>- 既存機能の拡張<br>- 依存パッケージのマイナー更新                                   | v2.4.0 → v2.5.0 |
| **Major**  | `X.0.0` | **破壊的変更（Breaking Change）**<br>- 既存APIの削除・署名変更<br>- 互換性のない挙動変更<br>- 依存パッケージのメジャー更新                  | v2.4.0 → v3.0.0 |

---

## 今回の失敗例（反面教師）

| 修正内容                            | 誤った対応              | 正しい対応                  |
| ----------------------------------- | ----------------------- | --------------------------- |
| バージョン表示 v2.3.0 → v2.5.0 更新 | Minor (v9.2.0 → v9.3.0) | **Patch** (v9.2.0 → v9.2.1) |

**理由**: 単なる表示文字列の修正はバグフィックス相当 → Patch

---

## リリース手順（自動化済み）

```bash
# Patch リリース（バグ修正・セキュリティ・表示修正など）
npm version patch -m "chore(release): v%s"

# Minor リリース（機能追加・依存マイナー更新など）
npm version minor -m "chore(release): v%s"

# Major リリース（破壊的変更）
npm version major -m "chore(release): v%s"
```

### 実行フロー

1. 変更をコミット・PRマージ
2. `main` ブランチを pull
3. 適切な `npm version <patch|minor|major>` 実行
4. `git push origin main && git push origin --tags`
5. `gh release create vX.Y.Z ...` で GitHub Release 作成
6. **backoff-util のみ**: `npm publish --access public`

---

## 判断フロー

```
変更内容
    │
    ├─ API変更なし・バグ修正・表示修正・セキュリティ → **Patch**
    │
    ├─ 新機能追加・既存機能拡張・依存マイナー更新 → **Minor**
    │
    └─ 既存API削除・シグニチャ変更・破壊的挙動変更・依存メジャー更新 → **Major**
```

---

## 依存パッケージ更新時の判断

| 更新内容                           | バージョン |
| ---------------------------------- | ---------- |
| パッチ更新のみ                     | Patch      |
| マイナー更新含む（破壊的変更なし） | Minor      |
| メジャー更新含む（破壊的変更あり） | Major      |

> ※ 依存更新PRを一括マージする場合、含まれる更新の**最大レベル**に合わせる

---

## コミットメッセージ規約（Conventional Commits）

```bash
# Patch
chore(release): v2.4.1
fix: correct version display in projects page

# Minor
chore(release): v2.5.0
feat: add new retry strategy option

# Major
chore(release): v3.0.0
feat!: change backoff algorithm signature
BREAKING CHANGE: `retry(fn)` now requires options object
```

---

## チェックリスト（リリース前）

- [ ] 変更内容が Patch/Minor/Major のどれに該当するか判断済み
- [ ] `npm version <type>` で正しいコマンドを選択
- [ ] CHANGELOG 更新（またはリリースノートで代替）
- [ ] 全テスト合格（typecheck, lint, unit, e2e）
- [ ] GitHub Release 作成
- [ ] backoff-util の場合: `npm publish` 実行

---

## 関連リポジトリ

- aecomet.github.io (Vue 3 + Vite + Vuetify)
- backoff-util (TypeScript Library, tsdown build)
- gozoku (Vue 3 + Vite + Leaflet)
- naruhiyo.github.io (React 19 + Vite + React Router)

全リポジトリで `package.json` の `version` フィールドと `npm version` コマンドで管理。
