---
applyTo: '**'
---

## Response

- Always respond in Japanese.

## Coding Conventions

- Use meaningful names for variables and functions.
- Keep comments concise and specific.
- Avoid magic numbers; define them as named constants.
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

#### Vue

- Use Composition API (`<script setup>`).
- Ensure `defineProps` / `defineEmits` are properly typed.
- Always specify `:key` on `v-for` directives.
- Do not use `v-if` and `v-for` on the same element.
- Component names must be in PascalCase.
- Avoid unnecessary `watch` or `computed` usage.

#### Vuetify

- Prefer Vuetify components over custom implementations.
- Use Vuetify's theme and color system (e.g., `color` prop) consistently.
- Use the grid system (`v-row` / `v-col`) for responsive layouts.
- Use Vuetify's icon component (`v-icon`) for icons.

#### Vue Router

- Set a `name` for every route definition.
- Use `<RouterLink>` or `router.push()` for navigation; avoid raw `<a>` tags.
- Use `<RouterView>` with a `key` where appropriate to prevent unintended component reuse.
- Apply navigation guards (`beforeEach`, etc.) for authentication and authorization when needed.

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

| Route     | Path                               |
| --------- | ---------------------------------- |
| Home      | `/`                                |
| Profile   | `/profile`                         |
| Career    | `/career`                          |
| Contact   | `/contact`                         |
| Not Found | any undefined path (e.g., `/test`) |

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
feat(auth): add login with Google OAuth
fix(router): prevent duplicate navigation on back button
docs: update README with setup instructions
chore(deps): upgrade vuetify to v4
```

## Package Updates

- Use npm-check-updates listed in package.json and run the following command:
  - `npx ncu`
- For packages that have pending updates, analyze and report the release notes only for packages with major version bumps.
