# Plan: expose theme generation from `@fremtind/jokul`

> Implementation plan derived from the architecture diagram (28.10.2026).
> Scope: `packages/jokul` and `portal` in this repo.

## Context

The colour-generation algorithm that powers the theme builder ("temabyggeren") currently
lives inside the portal, at `portal/src/app/(frontend)/temabygger/generator/`. That is the
wrong home for it: per the architecture diagram, a third package
(`@fremtind/distributor-themes`, in a separate repo) needs to take a theme exported from the
theme builder and turn it into a real, buildable Jøkul theme. It can only do that if the
algorithm, the token-generation step and the build instructions are published from
`@fremtind/jokul`.

Today `@fremtind/jokul` owns the _token rules_ (style-dictionary configs, formats, filters)
and the colour _metadata_ (`src/tokens/metadata/*.json`, already exposed via the
`./tokens/metadata/*` export), but has no public API for generating a palette or building a
theme. The style-dictionary machinery is also hard-wired to the single in-repo brand `dnb`
and to paths relative to `packages/jokul`, and is excluded from the published build.

**Outcome:** `@fremtind/jokul` exposes palette generation and palette → brand-tokens-JSON
conversion through a browser-safe `./theme` entry, which the portal imports instead of
owning a copy. Theme CSS/SCSS building runs on Node and is available **only through the
`jokul theme` CLI**. It is not a public JS API.

**Out of scope:** `@fremtind/distributor-themes` is treated as an external consumer whose
needs the API must satisfy; it is not created here.

## Decisions already made

- **One public entry point, `@fremtind/jokul/theme` (browser-safe), plus CLI commands.**
  - The Node-only build code lives in `src/theme/node/` and is compiled as usual, but it
    is **not** listed in `package.json` `exports`. Only `bin/theme.mjs` uses it, through
    a relative import.
  - External consumers, such as the private `@fremtind/distributor-themes` repo
    (`DISTRIBUTOR-THEMES-REPO-PLAN.md`), use the CLI. That keeps the CLI's flags and
    output layout as the only contract.
  - A `./theme/node` export can be added later without a breaking change if a real need
    for a JS API comes up. Removing a published export, by contrast, would be breaking.
  - style-dictionary must never reach a browser bundle.
- `chroma-js` and `hsluv` become real `dependencies` of `@fremtind/jokul`, keeping the
  moved code byte-for-byte identical in behaviour.
- CLI gets both `jokul theme generate <hex>` and `jokul theme build <file>`.
- Generated themes keep emitting `[data-brand="<name>"]`. `data-theme` keeps its current
  meaning (light/dark), per `JokulModes` in `packages/jokul/src/utilities/types.ts`.
  The diagram's wording ("verdier som kan brukes i data-theme") is a typo.

---

## Step 1 — Move colour generation into `packages/jokul/src/theme/`

New directory, mirroring what the portal has today:

| New file                       | Source                             |
| ------------------------------ | ---------------------------------- |
| `src/theme/colors/types.ts`    | `temabygger/generator/types.ts`    |
| `src/theme/colors/utils.ts`    | `temabygger/generator/utils.ts`    |
| `src/theme/colors/generate.ts` | `temabygger/generator/generate.ts` |
| `src/theme/index.ts`           | new barrel                         |

Move the code as-is. Only two changes:

1. Replace the `@fremtind/jokul/tokens/metadata/*.json` self-imports with relative imports
   (`../../tokens/metadata/color.metadata.light.json`). Drop the
   `with { type: "json" }` attributes — these become bundler-inlined JSON, so verify
   `resolveJsonModule` is on in `packages/jokul/tsconfig.json` and that the named `color`
   import survives the Rollup build.
2. `generate.ts` currently has a `// @ts-ignore` on the light/dark merge and an unused
   `ColorGroup` import. Fix both while moving.

`src/theme/index.ts` re-exports: `generatePalette`, `generateContrastColor`,
`getLightnessFromHex`, `getLuminanceFromLightness`, `COLOR_SCHEMES`, and the types
`HexColor`, `ColorScheme`, `ColorGroup`, `ColorRole`, `ColorMetadata`, `Color`, `Palette`,
`SimplePalette`, `LightDarkPalette`, `EditableLightDarkPalette`, `SimpleLightDarkPalette`.

Note `ColorScheme` already exists in `src/utilities/types.ts` as `"light" | "dark"` — have
the theme module re-use that one rather than declaring a second identical type.

The unused "saturated" metadata sets are not used and can be removed, along with any logic connected to them.

> **Done.** Deviations from the above:
>
> - The JSON imports keep `with { type: "json" }` (`module: NodeNext` requires it, and
>   forbids named imports from JSON). They live in a fourth file,
>   `src/theme/colors/metadata.ts`, which exports `colorMetadataLight`/`colorMetadataDark`.
>   `types.ts` derives its types from that module, so the emitted `.d.ts` files inline the
>   metadata shape instead of pointing at a JSON path that does not exist under `build/`.
> - The `JokulBrands` augmentation from `DISTRIBUTOR-THEMES-REPO-PLAN.md` Part A was done
>   in this step as well.
> - The portal copy of the generator was removed in the first part of step 8.

## Step 2 — Theme file format (browser-safe)

The theme builder's interchange format lives in
`temabygger/_shared/themeDraftPayload.ts` (`ThemeDraftPayload` = `{ version: 1, draft }`)
with `ThemeDraft` in `temabygger/_context/types.ts`. The CLI and distributor-themes both
need to read this, so the _contract_ must move into jokul.

Add `src/theme/file/themeFile.ts` exporting:

- `THEME_FILE_VERSION` and a `JokulThemeFile` type:
  `{ version, name, colorTokens: EditableLightDarkPalette, includeDarkMode, fonts?: { regular, display } }`
- `parseThemeFile(value: unknown): JokulThemeFile | undefined` — ported from
  `parseThemeDraftPayload`
- `isHex`, `normalizeHex` — ported from `temabygger/_shared/utils.ts`

**Keep the font _catalogue_ in the portal.** `temabygger/_shared/fontOptions.ts`
(`FONT_OPTIONS`, `FontOptionId`) is a UI picker list containing third-party families
(SpareBank 1, DNB Sans, Open Sans); it should not become public jokul API. Instead
`JokulThemeFile.fonts` holds _resolved_ values (`{ family, weight: { normal, bold } }`), and
the portal maps `FontOptionId` → resolved values when it serializes. jokul owns the file
contract; the portal owns the picker.

## Step 3 — Palette → brand tokens JSON (browser-safe)

This is the diagram's "generere tokens fra fargetema på format brukt i temabyggeren". It is
pure data transformation — no style-dictionary — so it belongs in the browser-safe entry.

Add `src/theme/file/tokens.ts`:

- `paletteToColorTokens(palette)` → the shape in
  `src/tokens/brands/color.dnb.tokens.json`, i.e.
  `{ color: { type: "colorScheme", "@": { background: { page: { value: { light, dark } } } } } }`
- `themeToTokenFiles(theme: JokulThemeFile)` →
  `{ "color.<name>.tokens.json": …, "typography.<name>.tokens.json"?: … }`, matching the
  `color.<brand>.tokens.json` / `typography.<brand>.tokens.json` names that
  `createBrandConfig` expects.

Export both from `src/theme/index.ts`. The portal can then offer the tokens JSON as a
download without pulling in any Node code.

## Step 4 — Generalise the style-dictionary config

`src/tokens/style-dictionary/config.ts` currently has `createBrandConfig(brand: Brand)`
with `Brand = "dnb"` (closed union from `src/utilities/types.ts`) and relative paths that
assume `cwd === packages/jokul`. External themes have arbitrary names and run from a
different cwd.

Refactor `createBrandConfig` into:

```ts
createThemeConfig({
  name: string,            // arbitrary, no longer `Brand`
  tokenFiles: string[],    // the theme's color/typography tokens JSON
  outDir: string,
  selector?: string,       // defaults to `[data-brand="${name}"]`
  baseTokensDir?: string,  // defaults to the installed package's src/tokens
})
```

Keep `createBrandConfig(brand)` as a thin wrapper over it so
`src/tokens/style-dictionary/build.ts` and the existing `dnb` output are unchanged. Resolve
`baseTokensDir` from `import.meta.url` so it works from any cwd.

Reuse the existing registered formats as-is: `css/color-scheme-brand`
(`formats/css-color-scheme-brand.ts`, already takes a `selector` option),
`css/brand-fonts`, `scss/brand-index`, and the filters in `filters.ts`.

## Step 5 — Internal Node module (CLI only)

Add `src/theme/node/index.ts`. It is an internal module: it is compiled into
`build/es/theme/node/index.js` for the CLI to use, but it has **no `exports` entry** and no
public types. Mark the file `@internal` in a header comment.

- `buildTheme(theme: JokulThemeFile, options: { outDir, selector? })` — writes the token
  JSON from step 3 to a temp dir, builds via `createThemeConfig` +
  `new StyleDictionary(...).buildPlatform("css")`, and emits `_color-scheme.scss`,
  `_fonts.scss`, `_index.scss` into `outDir`.
- `writeThemeFile(theme, path)` / `readThemeFile(path)` convenience wrappers.

Two packaging changes this forces, both easy to miss:

- **`vite.build.config.mjs`**: the `rollupOptions.input` glob and the `dts` plugin both
  exclude `style-dictionary/`, so `config.ts`/`register.ts`/`formats/*` are never compiled
  or published. Narrow both exclusions to just `src/tokens/style-dictionary/build.ts` —
  that file calls `build()` at import time and must stay out of the bundle. (Consider
  guarding it behind an `import.meta.url === process.argv[1]` check instead.)
  `nodeExternals` already keeps `style-dictionary` external, so nothing is inlined.
  Also exclude `src/theme/node/**` from the `dts` plugin. Nobody imports it with types, and
  shipping `.d.ts` files would suggest that it is a public API.
- **`package.json` `files`**: currently publishes `./src/tokens/metadata` only. Widen to
  `./src/tokens` so the base `*.tokens.json` files ship — `createThemeConfig` needs them as
  the source the theme overrides.

**Make `style-dictionary` an optional peer dependency.** Add it to `peerDependencies` with
`peerDependenciesMeta: { "style-dictionary": { "optional": true } }`, and keep it in
`devDependencies` for the in-repo token build. Don't use `optionalDependencies`: npm and
pnpm install those by default. Only `jokul theme build` runs style-dictionary, so apps
that only use components should not get it installed. Handle it the same way as `sass`
in `DISTRIBUTOR-THEMES-REPO-PLAN.md`:

- `bin/theme.mjs` loads the Node module with a dynamic `import()` only for `theme build`.
- If `style-dictionary` is missing, the CLI exits 1 with an install hint.
- Consumers of the CLI list it in their own `devDependencies`.

## Step 6 — `package.json` exports and deps

```jsonc
"./theme": {
  "import": { "types": "./build/es/theme/index.d.ts",      "default": "./build/es/theme/index.js" },
  "require": { "types": "./build/cjs/theme/index.d.cts",   "default": "./build/cjs/theme/index.cjs" }
}
```

This is the only new export. There is deliberately no `./theme/node` (see "Decisions already
made"). Order matters: it must sit **above** the `"./*"` component wildcard. Check that the
wildcard can't accidentally resolve `@fremtind/jokul/theme/node` to the internal module. If
it can, add `"./theme/node": null` to block it explicitly. Add `chroma-js` and
`hsluv` to `dependencies`, and `@types/chroma-js` to `devDependencies`. No new build script
is needed: `vite.build.config.mjs` globs `src/**` automatically, so `src/theme/**` is picked
up once the style-dictionary exclusion is narrowed.

> **Partly done** (together with the first part of step 8):
>
> - The `"./theme"` export is in place, directly above `"./*"`. The `dependencies` and
>   `devDependencies` changes were already made in step 1.
> - `vite.build.config.mjs` already picks up `src/theme/**` without changes. The
>   style-dictionary exclusion only needs narrowing in step 5.
> - `"./theme/node": null` is **not needed**. The `"./*"` wildcard maps only to
>   `./build/{es,cjs}/components/*/index.*`, so `@fremtind/jokul/theme/node` resolves to
>   the non-existent `build/es/components/theme/node/index.js` and can never reach
>   `build/es/theme/node/`. Re-check this in step 5 by importing it from outside the repo.

## Step 7 — CLI

`bin/run-jokul-cli.mjs` currently only dispatches `codemod`. Add a `theme` command that
delegates to a new `bin/theme.mjs`.

- `generate` needs only the browser-safe `../build/es/theme/index.js`.
- `build` dynamically imports the internal `../build/es/theme/node/index.js`.

The CLI is the **public interface** for building themes. Treat its subcommands, flags and
output layout as semver-relevant. Extensions for external repos (multi-file build, `--css`,
`--index`, `--types`, `validate`) are described in `DISTRIBUTOR-THEMES-REPO-PLAN.md` Part A.

- `jokul theme generate <hex> [--name <name>] [--out <file>] [--method wcag|oklch] [--no-dark]`
  → writes a `JokulThemeFile` JSON
- `jokul theme build <theme-file> [--out <dir>] [--selector <sel>]`
  → writes tokens JSON + generated SCSS

Extend the existing `--help` text in `runJokulCli` (it currently documents only `codemod`).

## Step 8 — Point the portal at the package

Delete `portal/src/app/(frontend)/temabygger/generator/` and update importers to
`@fremtind/jokul/theme`. Confirmed importers:

- `_context/themeDraftReducer.ts` — `generatePalette`, `ColorScheme`, `EditableLightDarkPalette`
- `_context/types.ts` — `ColorScheme`, `EditableLightDarkPalette`
- `_context/initialColorTokens.ts` — `EditableLightDarkPalette`
- `_shared/utils.ts` — `HexColor` (and `isHex`/`normalizeHex` now come from the package;
  keep `hexErrorLabel` locally, it is UI copy)
- `_preview/ThemePreview.tsx` — `ColorScheme`

> **Incomplete list.** Bash/search tooling was unavailable for most of the planning session,
> so the full `temabygger/` tree was never enumerated. Start this step by running:
>
> ```sh
> find "portal/src/app/(frontend)/temabygger" -type f | sort
> rg -n "generator/(generate|types|utils)" "portal/src"
> ```
>
> The step routes live in an unidentified parenthesised Next.js route group; the known
> segments are `identitet`, `grunnfarge`, `farger` and `forhandsvisning`
> (see `_preview/ThemePreview.tsx` and `_shared/themeDraftPayload.ts`). Expect further hits
> under `_components/`, `_preview/` and the step pages.

Then rewrite `_shared/themeDraftPayload.ts` to wrap the package's `parseThemeFile`, and have
the theme-builder's export/download step emit a `JokulThemeFile` so its output is directly
consumable by `jokul theme build`. **Also unverified:** whether such an export/download step
exists yet — locate it (or add it) before wiring this up.

Leave `chroma-js`/`hsluv` in `portal/package.json` only if something outside the temabygger
still uses them (`colorjs.io` is also a portal dependency and may overlap).

> **Part 1 done** (export + import switch, without depending on steps 2–7):
>
> - `temabygger/generator/` is deleted. These 14 files now import from
>   `@fremtind/jokul/theme` (paths relative to `portal/src/app/(frontend)/temabygger/`):
>   - `_components/`: `ColorCombinationCard.tsx`, `ColorTokenField.tsx`
>   - `_context/`: `ThemePreviewContext.tsx`, `initialColorTokens.ts`,
>     `themeDraftReducer.ts` (its two generator imports are merged into one), `types.ts`
>   - `_preview/`: `ColorCombinations.tsx`, `ThemePreview.tsx`, `contrastEvaluation.ts`
>   - `_shared/`: `previewStyle.ts`, `themeTokenMail.ts`, `utils.ts`
>   - `_steps/`: `AdjustColorsStep.tsx`, `colorTokenMetadata.ts`
> - `hsluv` is removed from `portal/package.json`. `chroma-js` stays, because
>   `_preview/contrastEvaluation.ts` uses it directly.
> - The built `@fremtind/jokul/theme` (ESM and CJS, resolved from `portal/`) gives the
>   same palettes as the deleted portal copy for 20 sample colours. Portal `tsc --noEmit`
>   passes. A manual check of `/temabygger` in the browser is still outstanding.
> - `packages/jokul/README.md` has a short "Temagenerering" section for the new entry
>   (a first piece of step 9).
>
> **Still open (needs step 2):** `isHex`/`normalizeHex` from the package instead of
> `_shared/utils.ts`, `_shared/themeDraftPayload.ts` wrapping `parseThemeFile`, and the
> export/download step emitting a `JokulThemeFile`.

## Step 9 — "Instruksjoner for å bygge tema"

Add `packages/jokul/src/theme/README.md` (or a portal docs page) covering: export a theme
from the temabygger → `jokul theme build theme.json` → import the generated `_index.scss` →
set `data-brand="<name>"` on a wrapper. This is the green "Instruksjoner for å bygge tema"
box in the diagram and is what distributor-themes will follow.

---

## Verification

1. `cd packages/jokul && pnpm build` — confirm `build/es/theme/index.js` with matching
   `.d.ts`/`.d.cts`, and `build/es/theme/node/index.js` (no `.d.ts`), exist. Check that
   `import("@fremtind/jokul/theme/node")` from an outside directory fails with
   `ERR_PACKAGE_PATH_NOT_EXPORTED`, and that the `dnb`
   output under `src/styles/theme/brands/dnb/` is **byte-identical** to before (`git diff`
   should be empty — this proves the `createThemeConfig` refactor is behaviour-preserving).
2. Add unit tests next to the moved code: `generatePalette("#006F4E")` must produce the same
   values as the current portal implementation (snapshot the pre-move output _first_), and
   `paletteToColorTokens` round-trips into the shape of `color.dnb.tokens.json`. Run with
   `pnpm --filter @fremtind/jokul test`.
3. Simulate an external consumer end to end, from a directory **outside** the repo:
    ```sh
    node packages/jokul/bin/jokul.mjs theme generate "#006F4E" --name testtema --out /tmp/t.json
    node packages/jokul/bin/jokul.mjs theme build /tmp/t.json --out /tmp/testtema
    ```
    The generated `_color-scheme.scss` must contain `[data-brand="testtema"]` inside
    `@layer jokul.theme`. Running from outside the repo is the real check that
    `baseTokensDir` resolution and the `files` change work. Also run `theme build` in an
    environment without `style-dictionary` installed. It must exit 1 with the install hint,
    while `theme generate` still works.
4. Verify browser-safety: grep the built `build/es/theme/index.js` for `style-dictionary`
   and `node:` — there should be no matches.
5. `pnpm --filter portal dev` → open `/temabygger`, step through identitet → grunnfarge →
   farger, and confirm the generated palette and preview are unchanged from `main`. Then
   `pnpm --filter portal typecheck`.
