# NaruHiyo Project Portfolio

[![MIT](https://img.shields.io/badge/license-MIT-blue)](LICENCE)

## Production Page

**[Welcome Access!](https://naruhiyo.github.io/)**

## Tech Stack

- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/) 5
- [MUI (Material UI)](https://mui.com/) 7
- [React Router DOM](https://reactrouter.com/) 7 (HashRouter)
- [Vite](https://vite.dev/) 8
- **pnpm 11** — パッケージマネージャ
- **Lefthook** — pre-commit (format + lint) + pre-push (AI code review)

## Quick Preview

```sh
docker run -p 8888:80 --rm ghcr.io/aecomet/portfolio
# => http://localhost:8888/
```

## Local Setup

```sh
node -v
# => v26.3.0

npm i -g pnpm

pnpm install

pnpm run dev
# => Local:   http://localhost:8888/
```

## Build

```sh
pnpm run build
# => build/
```

## CI/CD

| Trigger      | Workflow          | Description                         |
| ------------ | ----------------- | ----------------------------------- |
| push to main | `app-release.yml` | Build → Deploy to Pages → Docker    |
| Pull Request | `ci.yml`          | Format check + ESLint + Build       |
| pre-commit   | lefthook          | Format check + ESLint               |
| pre-push     | lefthook          | AI code review (blocker/high gates) |

## Documentation

- [Architecture](docs/architecture.md) — ディレクトリ構成・コンポーネント・ルーティングなど
