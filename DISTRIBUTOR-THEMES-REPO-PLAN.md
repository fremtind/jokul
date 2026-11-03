# Plan: the private `@fremtind/distributor-themes` repository

> Scope: a new private repo `fremtind/distributor-themes`, plus a few additions to the
> jokul CLI that extend `THEME-GENERATION-PLAN.md` (steps 2, 5 and 7).
> A private Storybook is out of scope for now.

## Context

The architecture diagram gives `@fremtind/distributor-themes` three jobs:

1. Hold the distributors' themes, generated with `@fremtind/jokul`.
2. Provide types for the themes, i.e. the valid `data-brand` values.
3. Record which distributor uses which theme.

Themes come either from files exported by the temabygger or straight from a colour.
Consuming apps must be able to import **one theme**, or **all themes in a single import**.

**Guiding principle:** the private repo runs the `jokul` CLI and never imports jokul
internals. The two repos are connected only through:

- the theme file format (`JokulThemeFile`, versioned)
- the CLI commands and their flags
- the CLI's output layout, including its machine-readable manifest
- the `[data-brand="<name>"]` selector

The CLI produces everything that is specific to jokul: token names, style-dictionary
output, Sass font wiring and the `JokulBrands` augmentation. The private repo is therefore
just data (theme files, fonts, the distributor mapping) and a build script of about 100
lines.

**Decisions made:**
- Publish to **GitHub Packages** (`npm.pkg.github.com`, `@fremtind` scope).
- **CSS is the primary format, with SCSS also provided.**
- Some themes **ship their own licensed font files**.

---

## Part A: CLI additions in jokul (prerequisites)

These extend `THEME-GENERATION-PLAN.md` step 7. Each one moves logic out of the private
repo and into jokul.

| Addition | Why |
|---|---|
| `jokul theme build <file...>` takes **several** theme files and writes each to `<out>/<name>/` | One CLI call builds every theme; the private repo doesn't loop |
| `--css` compiles the generated `_index.scss` with `sass` into `<out>/<name>/theme.css` | CSS is the primary format. See the note on `sass` below the table |
| Fonts by convention: if a `fonts/` folder sits next to the theme file, copy its `*.woff2` to `<out>/<name>/fonts/` | No per-theme `--fonts` flag needed when building many themes |
| `--index` also writes `<out>/all.css`, `<out>/_index.scss` (forwards every theme) and `<out>/manifest.json` | jokul generates the single import |
| `--types` writes `<out>/brands.d.ts` containing `declare module "@fremtind/jokul/utilities" { interface JokulBrands { "<name>": true; … } }` | Only jokul knows the name of its augmentable interface (see below) |
| `jokul theme validate <file...>` parses each file with `parseThemeFile` and exits non-zero with readable errors | Used by CI and by `theme:add` |

**`sass` and `style-dictionary` are optional peer dependencies of jokul**, not regular
dependencies. Only the theme build in the CLI needs them, so apps that just use components
should not get them installed.

- Use `peerDependencies` together with
  `peerDependenciesMeta: { "<pkg>": { "optional": true } }`.
- List both packages in jokul's own `devDependencies` for the in-repo build.
  `style-dictionary` is already there; `sass` needs to be added to `packages/jokul`.
- Don't use `optionalDependencies`: npm and pnpm install those by default, so they
  wouldn't keep the packages out of consumer installs.
- `bin/theme.mjs` loads them with a dynamic `await import(…)` only when they are needed:
  `style-dictionary` for `theme build`, and `sass` for `--css` as well.
- If the import fails, the CLI exits 1 with a clear message, e.g. *"`--css` krever
  `sass`. Installer det med `pnpm add -D sass`."*
- The private repo lists both packages in its own `devDependencies` (Part B).

**`manifest.json`** is the CLI's machine-readable output contract:

```jsonc
{ "jokulVersion": "6.2.0", "themes": [
  { "name": "theme-a", "title": "Tema A", "css": "./theme-a/theme.css", "scss": "./theme-a/_index.scss" }
] }
```

**Make `Brand` augmentable** (`packages/jokul/src/utilities/types.ts`). Without this,
distributor themes can't be type-checked as `data-brand` values:

```ts
export const BRANDS = ["dnb"] as const;
/** Kan utvides av konsumenter via module augmentation */
export interface JokulBrands extends Record<(typeof BRANDS)[number], true> {}
export type Brand = keyof JokulBrands;
```

- `JokulModes["data-brand"]` keeps using `Brand`.
- Re-export `JokulBrands` from `@fremtind/jokul` so that the augmentation resolves.
- In the portal's `brandTitles`, use `Partial<Record<Brand, string>>`. The existing
  `?? brand` fallback handles names that have no entry.

> **Done in `THEME-GENERATION-PLAN.md` step 1.** `@fremtind/jokul` has no root (`"."`)
> export, so the augmentable module is `@fremtind/jokul/utilities` (it re-exports
> `types.ts`). `--types` must therefore emit
> `declare module "@fremtind/jokul/utilities" { interface JokulBrands { … } }`, and the
> `brands.d.ts` file needs a top-level `import "@fremtind/jokul/utilities";` so the block
> is an augmentation rather than an ambient module declaration. `brandTitles` lives in
> `.storybook/globals/brand.tsx`, not the portal.

**Theme file contract amendment** (`THEME-GENERATION-PLAN.md` step 2).
`JokulThemeFile.fonts` currently holds only `{ family, weight }`, which isn't enough to emit
`@font-face` rules. Add an optional `faces` list that maps onto the existing
`brandFontFace` tokens (see `font.face.*` in
`src/tokens/brands/typography.dnb.tokens.json`):

```ts
fonts?: {
  regular: …; display: …; mono?: …;
  faces?: Array<{ family: string; weight: number; style: "normal" | "italic"; fileName: string }>;
}
```

`fileName` is resolved against the `fonts/` folder next to the theme file. `validate` fails
if a referenced file is missing.

**External `_fonts.scss`** (`THEME-GENERATION-PLAN.md` step 5). The in-repo
`_fonts.scss` does `@use "../../fonts"`, which can't resolve from another repo. For
external builds, leave that `@use` out and emit `$webfonts-dir-<name>: "./fonts" !default;`.
SCSS consumers can then override it with `@use … with (…)`, and the compiled CSS gets
font URLs relative to `theme.css`.

---

## Part B: the private repo

### Layout

```
distributor-themes/
├─ themes/
│  └─ <name>/
│     ├─ theme.json          # JokulThemeFile (exported from the temabygger or generated)
│     └─ fonts/*.woff2       # optional, licensed fonts
├─ distributors.json         # distributor → theme mapping
├─ schemas/distributors.schema.json
├─ scripts/
│  ├─ build.mjs              # runs the CLI and writes the JS entry
│  └─ theme-add.mjs          # imports or generates a theme
├─ test/build.test.ts
├─ .changeset/
├─ .github/workflows/{ci.yml,release.yml}
├─ .npmrc                    # @fremtind:registry=https://npm.pkg.github.com
└─ package.json
```

`dist/` is gitignored and produced by `pnpm build`. Each folder name must equal `name` in
its `theme.json`; `build.mjs` checks this.

### `distributors.json`

```jsonc
{
  "$schema": "./schemas/distributors.schema.json",
  "distributors": [
    { "id": "distributor-x", "name": "Distributør X", "theme": "theme-a" }
  ]
}
```

Several distributors can share a theme. The build fails if a `theme` is missing from the
manifest or if an `id` appears twice.

### Adding or generating a theme

The scripts are thin wrappers around the CLI:

- **From the temabygger:** `pnpm theme:add <download.json> [--fonts <dir>]`. This runs
  `jokul theme validate <file>`, then copies the file to `themes/<name>/theme.json` and any
  fonts to `themes/<name>/fonts/`.
- **From a colour:** `pnpm theme:generate <name> <hex> [--no-dark]`. This runs
  `jokul theme generate <hex> --name <name> --out themes/<name>/theme.json`.
- Then add the distributor entry to `distributors.json`, add a changeset and open a PR.

### `scripts/build.mjs`

It uses only the CLI and the manifest:

1. Glob `themes/*/theme.json`.
2. Run `pnpm exec jokul theme validate …all`.
3. Run `pnpm exec jokul theme build …all --out dist/themes --css --index --types`.
4. Read `dist/themes/manifest.json` and cross-check it against `distributors.json` and the
   folder names.
5. Write `dist/index.js` and `dist/index.d.ts`, containing:
   - `THEMES`: an `as const` list of `{ name, title }` taken from the manifest
   - `DISTRIBUTORS`: taken from `distributors.json`
   - `getThemeForDistributor(id)`
   - the types `ThemeName` and `DistributorId`
   - `/// <reference path="./themes/brands.d.ts" />`, so importing the package also augments `JokulBrands`

### `package.json`

```jsonc
{
  "name": "@fremtind/distributor-themes",
  "publishConfig": { "registry": "https://npm.pkg.github.com" },
  "files": ["dist"],
  "exports": {
    ".":               { "types": "./dist/index.d.ts", "default": "./dist/index.js" },
    "./css":           "./dist/themes/all.css",            // all themes, one import
    "./css/*":         "./dist/themes/*/theme.css",        // a single theme
    "./scss":          "./dist/themes/_index.scss",
    "./scss/*":        "./dist/themes/*/_index.scss",
    "./manifest.json": "./dist/themes/manifest.json"
  },
  "scripts": {
    "build": "node scripts/build.mjs",
    "theme:add": "node scripts/theme-add.mjs",
    "theme:generate": "node scripts/theme-add.mjs --generate",
    "test": "vitest run"
  },
  "peerDependencies": { "@fremtind/jokul": "^5.0.0 || ^6.0.0" },  // runtime: every major that supports data-brand themes
  "devDependencies": {
    "@fremtind/jokul": "6.2.0",   // build time only: pinned, this is the CLI that generates the themes
    "sass": "^1.x",               // optional peer of jokul, needed by `jokul theme build --css`
    "style-dictionary": "^5.x"    // optional peer of jokul, needed by `jokul theme build` (match the major jokul uses)
  }
}
```

**Why the build-time and runtime versions differ.** The published package contains only
static CSS, SCSS and JS, so the jokul version that *built* the themes is irrelevant to
consumers. What matters at runtime is whether the consumer's jokul understands
`[data-brand]` themes inside `@layer jokul.theme`. Brand colour schemes via `data-brand`
arrived in 5.x (CHANGELOG, 5.x section), so the peer range starts at v5.

- **Check the exact 5.x minor first.** The earliest 5.x releases may predate brand
  colours or brand fonts. Find the first 5.x minor that has both (CHANGELOG entries
  `c25012b`, `b26782d`, and the `color.tokens.json`/`brands/` entry), and use that as
  the lower bound if it is later than 5.0.0.
- **Types on older versions.** `brands.d.ts` augments `JokulBrands`. On jokul versions
  without that interface, the declaration creates an unused interface and does no harm.
  `ThemeName` from the package's own `index.d.ts` still works.
- **Widen the range for new majors deliberately.** When jokul 7 ships, add `|| ^7.0.0`
  only after the compatibility check below passes.

How consumers use it:

```ts
import "@fremtind/distributor-themes/css";              // all themes
import "@fremtind/distributor-themes/css/theme-a";      // or just one
import { getThemeForDistributor } from "@fremtind/distributor-themes";
<div data-brand={getThemeForDistributor("distributor-x")}>…</div>   // type-checked via JokulBrands
```

```scss
@use "@fremtind/distributor-themes/scss/theme-a" with ($webfonts-dir-theme-a: "/assets/fonts");
```

### CI and release

- **`ci.yml`** (on PRs): install, `pnpm build`, `pnpm test`. The Vitest suite checks that:
  - the manifest agrees with `distributors.json`
  - every `theme.css` contains `[data-brand="<name>"]` inside `@layer jokul.theme`
  - every referenced font exists in `dist`
  - **Compatibility matrix**, one job per supported major (latest 5.x and latest 6.x):
    install that jokul version as a throwaway and collect every `--jkl-color-*` custom
    property its base `[data-brand]`-less color scheme defines. Assert that each built
    `theme.css` defines all of them. This guarantees a theme built with the newest CLI
    still covers the variables that older jokul versions read.
- **`release.yml`** (on push to `main`): changesets action, then `pnpm build`, then publish
  to GitHub Packages using `GITHUB_TOKEN` with `packages: write`.
- **Renovate** bumps the pinned `@fremtind/jokul` devDependency. CI then rebuilds every
  theme against the new version, the compatibility matrix confirms that older majors are
  still covered, and a changeset turns it into a patch release. The peer range is left
  unchanged. This is
  how token changes in jokul reach the distributor themes without hand edits.

---

## Order of work

1. In jokul: `THEME-GENERATION-PLAN.md` steps 1–7, plus Part A (the `JokulBrands`
   augmentation, font `faces`, external `_fonts.scss`, multi-file build,
   `--css`/`--index`/`--types`, `validate`).
2. Scaffold the private repo: layout, `.npmrc`, `package.json`, schema, `build.mjs`,
   `theme-add.mjs`, tests.
3. Bring the first real distributor theme in through a temabygger export and `theme:add`.
4. Set up CI, release and Renovate.

## Verification

1. **jokul CLI.** From a temp directory outside the jokul repo:
   - Run `jokul theme build` on two theme files (one with fonts) with
     `--css --index --types`.
   - Check that `all.css`, `_index.scss`, `manifest.json`, `brands.d.ts` and
     `<name>/fonts/*.woff2` exist.
   - Check that `jokul theme validate` exits 1 on a broken file.
   - In a directory where `sass` is not installed, check that `--css` exits 1 with the
     install hint, and that the build without `--css` still works.
2. **Private repo.** Run `pnpm build && pnpm test`. Then `npm pack`, install the tarball in
   a scratch Vite app and confirm:
   - importing `/css` styles both themes
   - importing `/css/theme-a` styles only that theme
   - the fonts load (check the Network tab)
   - `/scss/theme-a` compiles with the `with (…)` override
   - `data-brand={getThemeForDistributor(...)}` type-checks, and an unknown theme name fails
   - all of the above still holds with the scratch app pinned to the lowest supported
     5.x jokul
3. **Coupling check.** `rg "@fremtind/jokul" scripts/` should match only CLI invocations,
   with no module imports.
4. **Publishing.** Publish a `0.0.0-test` prerelease to GitHub Packages and install it from
   another private repo using a token with `read:packages`.
