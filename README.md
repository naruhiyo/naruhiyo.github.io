# NaruHiyo Project Portfolio

[![MIT](https://img.shields.io/badge/license-MIT-blue)](LICENCE)

## Production Page

**[Welcome Access!](https://naruhiyo.github.io/)**

## Tech Stack

- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/) 5
- [MUI (Material UI)](https://mui.com/) 7
- [React Router DOM](https://reactrouter.com/) 7
- [Vite](https://vite.dev/) 8

## Quick Preview

```sh
docker run -p 8888:80 --rm ghcr.io/aecomet/portfolio
# => http://localhost:8888/
```

## Local Setup

```sh
node -v
# => v24.14.0

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

## Documentation

- [Architecture](docs/architecture.md) — ディレクトリ構成・コンポーネント・ルーティングなど
