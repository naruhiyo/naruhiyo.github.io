---
applyTo: '**'
---

## Response

- Always respond in Japanese.

## Coding Conventions

- Use meaningful names for variables and functions.
- Keep comments concise and specific.
- Avoid magic numbers; define them as named constants or CSS variables.
- Prioritize code readability.

## Code Review

Always perform a code review before committing. **Before running `git commit`, verify that every item in the checklist below is satisfied. Do not skip this step regardless of how small the change is.**

### Commit Workflow

Always follow this order — never skip a step:

1. Stage changes: `git add`
2. Review staged diff: `git --no-pager diff --staged`
3. Confirm every item in the checklist below is satisfied
4. Run `git commit`

### Review Checklist

#### React

- Use functional components with hooks; do not use class components.
- Keep React imports minimal — do not import `React` globally (automatic JSX runtime is enabled).
  Import named exports only when needed: `import { useState, useEffect } from 'react'`.
- Add `React.memo()` / `memo()` to pure presentational components that receive stable props.
- Do not create inline objects or functions in JSX props (causes unnecessary re-renders).
- Ensure `useEffect` dependencies are correct and complete.
- Use named exports for components; default exports are allowed for page-level components.
- Component file names and component names must be in PascalCase.

#### React Router

- Use `<Link>` or `<NavLink>` from `react-router-dom` for navigation; avoid raw `<a>` tags for internal links.
- Use `React.lazy` + `Suspense` for route-level code splitting.
- Define routes centrally in `App.tsx`.

#### TypeScript

- All props, state, and function return types must be explicitly typed.
- Do not use `any`; use `unknown` or specific types instead.
- Define data schemas as TypeScript types in `src/types/`.
- Extract static/constant data to `src/data/` and type it with the appropriate schema.

#### SCSS

- Do not use magic numbers for spacing or transition durations — use the CSS variables defined in `:root`.
  Available variables: `--space-sm`, `--space-md`, `--space-lg`, `--space-xl`, `--space-2xl`, `--space-3xl`,
  `--transition-fast`, `--transition-normal`, `--transition-slow`.
- Use semantic HTML elements (`<header>`, `<main>`, `<footer>`, `<section>`, `<nav>`, `<article>`) instead of generic `<div>` wrappers where appropriate.

### Lint / Format

Verify there are no ESLint errors or warnings:

```sh
pnpm lint
```

Verify code conforms to Prettier formatting:

```sh
pnpm format
```

### Route Verification

Before committing, start the dev server and confirm all routes are accessible:

```sh
pnpm dev
```

Manually verify the following routes are reachable without errors:

| Route         | Path            |
| ------------- | --------------- |
| Home          | `/`             |
| Collaborators | `/collaborators` |
| Products      | `/products`     |
| Activities    | `/activities`   |
| Contact       | `/contact`      |
| Not Found     | any undefined path (e.g., `/test`) — redirects to `/` |

### Build Verification

Confirm the build completes successfully before committing:

```sh
pnpm build
```

## Git Commits

All commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

| Type       | Description                                               |
| ---------- | --------------------------------------------------------- |
| `feat`     | A new feature                                             |
| `fix`      | A bug fix                                                 |
| `docs`     | Documentation changes only                                |
| `style`    | Code style changes (formatting, missing semicolons, etc.) |
| `refactor` | Code changes that neither fix a bug nor add a feature     |
| `perf`     | Performance improvements                                  |
| `test`     | Adding or updating tests                                  |
| `chore`    | Changes to build process, tooling, or dependencies        |
| `ci`       | Changes to CI/CD configuration                            |
| `revert`   | Reverting a previous commit                               |

### Examples

```
feat(collaborators): add GitHub stats to member cards
fix(router): prevent scroll position reset on back navigation
docs: update architecture.md with data layer description
chore(deps): upgrade react-router-dom to v7
```

## Package Updates

- Use npm-check-updates listed in package.json and run the following command:
  - `npx ncu`
- For packages that have pending updates, analyze and report the release notes only for packages with major version bumps.
