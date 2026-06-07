# Agents Guide for naruhiyo.github.io

## Tech Stack

- **Runtime**: Node.js 26.3.0
- **Language**: TypeScript
- **Framework**: React 19
- **UI Library**: MUI (Material UI) 7
- **Router**: React Router DOM 7 (HashRouter)
- **Build**: Vite 8
- **Styling**: SCSS / Emotion
- **Formatter**: Prettier
- **Linter**: ESLint
- **Package manager**: pnpm 11
- **Git hooks**: Lefthook (pre-commit: format + lint, pre-push: AI review)
- **Container**: Docker (multi-stage: node slim → httpd alpine)

## Reference Documents (read before working)

| File                              | Purpose                                               |
| --------------------------------- | ----------------------------------------------------- |
| `.github/copilot-instructions.md` | Coding conventions, commit workflow, review checklist |
| `docs/architecture.md`            | Project structure, routing, build pipeline            |
| `.agent/tdd/SKILL.md`             | TDD workflow — always follow when writing code        |
| `README.md`                       | Project overview, getting started                     |

## Skills Available

| Skill | File                  | When to use                           |
| ----- | --------------------- | ------------------------------------- |
| `tdd` | `.agent/tdd/SKILL.md` | When writing or modifying source code |

## Key Commands

```sh
pnpm dev           # Start dev server
pnpm build         # Build to build/
pnpm lint          # Run ESLint
pnpm format:check  # Check formatting
pnpm format        # Auto-format
```

## Rules

- All code changes must follow the TDD cycle (RED → GREEN → REFACTOR).
- Always run `pnpm lint` and `pnpm build` before committing.
- Commit messages must follow Conventional Commits.
- Import assets using `@src/` path alias.
