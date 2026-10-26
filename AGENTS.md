# AGENTS.md

This file provides guidance to coding agents working with code in this repository.

Jøkul is Fremtind's design system. Documentation and most code comments are in Norwegian — write new docs, changesets and commit messages in Norwegian too.

## Commands

All commands run from the repo root unless noted. Package manager is pnpm (version pinned in `package.json`), Node version in `.nvmrc`.

```bash
pnpm boot                 # install + husky + build (first-time setup)
pnpm dev                  # portal (:3333) + Storybook (:6007)
pnpm dev:portal           # portal only
pnpm dev:storybook        # Storybook only
pnpm build                # build all @fremtind/* packages
pnpm lint                 # check with Biome (does not write changes)
pnpm lint:fix             # apply Biome fixes (writes changes)
pnpm typecheck            # packages + portal
pnpm test                 # run library and portal unit tests once
pnpm ci:test              # what CI runs: test + lint:ci + typecheck
```

Library tests run once by default with `pnpm --filter @fremtind/jokul test`. For continuous testing during development, use `pnpm --filter @fremtind/jokul test:watch` instead.

Run a single test file or select tests by name from the repo root. The package's `test` script already uses the correct Vitest config:

```bash
pnpm --filter @fremtind/jokul test src/components/button/Button.test.tsx
pnpm --filter @fremtind/jokul test -t "renders correctly"
```

Component dev server (Ink TUI that picks a component and serves its `development/` folder) — run **inside** `packages/jokul`:

```bash
cd packages/jokul && pnpm dev
```

Playwright (`playwright.config.ts` has no `webServer`; each spec boots its own Vite server from the component's `development/` folder):

```bash
pnpm integration:ci           # chromium project: packages/jokul/**/integration/*.spec.ts
pnpm integration:interactive  # Playwright UI
pnpm integration:new          # the visual-regression/ project
CI=true pnpm integration:axe  # Axe/WCAG only — the CI=true prefix is required
```

Other: `pnpm changeset`, `pnpm check:security-overrides`, `pnpm --filter @fremtind/jokul figma:test` (Figma Code Connect dry run), `pnpm --filter portal typegen` (Sanity schema → types).

**Never run `pnpm reboot` or `pnpm clean` as generic troubleshooting.** `clean` is `git clean -xfd -e '*.env*'` and deletes untracked and ignored files. Preview with `git clean -ndx -e '*.env*'` first.

## Workspace layout

pnpm workspace (`pnpm-workspace.yaml`): `packages/*`, `portal`, `utils`, `actions/*`.

- `packages/jokul` — the published monopackage `@fremtind/jokul`: all React components, SCSS, design tokens, hooks, utilities, the `jokul` CLI (`bin/`) and codemods.
- `portal` — Next.js 16 App Router docs site (jokul.fremtind.no). Content comes from Sanity CMS (`portal/src/sanity`, studio at `/studio`) plus MDX; it embeds the built Storybook.
- `packages/mcp-server` — MCP server exposing Jøkul docs/components to AI agents.
- `packages/stylelint-config-jkl` — shared stylelint config, referenced from root `package.json`.
- `utils` — not published: `utils/playwright` (`TestHelper`, Axe fixture), `utils/vite` (dev-server plumbing), `utils/dev-example` (the `ComponentExample` harness the `development/` folders render into).
- `.storybook` — single Storybook over `packages/jokul/**/*.stories.*`.
- `actions/*` — local composite GitHub Actions used by the workflows.

## Component anatomy

A typical component lives in `packages/jokul/src/components/<kebab-name>/`. Follow similar components and add only the files needed for the change:

| Path | Purpose |
| --- | --- |
| `<PascalName>.tsx`, `types.ts` | implementation |
| `index.ts` | public exports |
| `styles/_index.scss`, `styles/<kebab-name>.scss` | SCSS (see below) |
| `stories/*.stories.tsx` | Storybook and portal documentation |
| `<PascalName>.test.tsx` | unit tests |
| `development/`, `integration/` | examples and Playwright tests when needed |

When adding a component:

1. Export it from `index.ts`. Do **not** add a `package.json` exports entry — the `"./*"` wildcard already resolves `@fremtind/jokul/<name>` (for example `@fremtind/jokul/button`).
2. Register the stylesheet in `packages/jokul/src/styles/components.scss` (`@use "../components/<name>/styles" as <name>;`), otherwise it is excluded from the bundled CSS.
3. Add `development/` examples if the component needs integration tests.

### Import conventions

`tsconfig.json` uses `module: NodeNext` + `verbatimModuleSyntax`, so relative imports inside `packages/jokul` **must carry the `.js` extension** even from `.tsx` sources: `import { Button } from "./Button.js";`.

## SCSS architecture

Cascade layer order is declared once, in `packages/jokul/src/styles/_layers.scss`:

```scss
@layer jokul { @layer resets, theme, global, components, utility; }
```

- Component rules must be wrapped in `@layer jokul.components { ... }` or they land outside the designed order.
- Mixins/functions come from `@use "../../../styles/jkl";` (`jkl.rem()`, `jkl.text-style()`, `jkl.$font-weight-bold`, …), aggregated by `src/styles/jkl/_index.scss`.
- Styling is driven by per-component CSS custom properties fed from tokens (`--jkl-button-padding-block: var(--jkl-unit-10)`), so theming happens through tokens, never Sass variables.
- `styles/base.scss` composes everything *except* component styles. A component's `styles/_index.scss` forwards its own sheet and `@use`s the styles of components it depends on, so importing `_index.scss` pulls in dependencies automatically — the prebuilt `.min.css` does not.

## Tokens

Source of truth is DTCG JSON in `packages/jokul/src/tokens/` (`color`, `dimension`, `motion`, `typography`, brand overrides in `brands/`, light/dark/saturated metadata in `metadata/`). Style Dictionary (`src/tokens/style-dictionary/build.ts`, custom formats in `formats/`) emits CSS, SCSS, TypeScript and Tailwind output via `pnpm generate:tokens`, which `build` always runs first. Generated files carry a "Do not edit directly" header — `src/styles/theme/brands/_index.scss` is one of them. Token changes need a rebuild before they show up.


## Testing rules

- **Visual regression screenshots are CI-only.** Running them locally yields false diffs from platform rendering. For an intentional visual change, delete the affected files in `integration/__screenshots__/` and let the GitHub Action regenerate and commit them to your branch after you open the PR.
- Axe tests are safe locally via `CI=true pnpm integration:axe`.
- Unit tests use vitest + jsdom + `@testing-library/react` + `vitest-axe`.

## Contribution requirements

- **Conventional Commits** are enforced by commitlint; `pnpm commit` (or `pnpm cosign` for signed) gives a guided prompt. lint-staged runs Biome and stylelint on pre-commit.
- Add a **changeset** (`pnpm changeset`) when a change should produce a new `@fremtind/jokul` release; pure test or documentation changes do not need one.
- When changing or adding component behaviour, update relevant **stories** (the documentation surface) and flag that the component's information in Sanity may also need updating. Only change external Sanity content when explicitly requested as part of the task.
- Breaking changes must be documented in `packages/jokul/MIGRATION.md` under a heading for the new major, with `diff` examples where possible.
- Flag design changes that should be mirrored in Figma. Only change Figma when explicitly requested as part of the task.

## Branching and releases

Releases and backports are automated; see the root `README.md` for the current workflow. Do not publish, deploy or trigger backports unless explicitly requested.

