# Plan: distributor themes in a private "overlay" Storybook

> To be saved in the repo as `STORYBOOK-DISTRIBUTOR-THEMES-PLAN.md`, next to `THEME-GENERATION-PLAN.md`.
> Scope: `.storybook/` and `packages/jokul` in this repo, plus a CI job in the private
> `@fremtind/distributor-themes` repo.
> **Prerequisite:** steps 1–7 of `THEME-GENERATION-PLAN.md`: the theme API, `buildTheme` and the `jokul theme build` CLI.

## Context

`@fremtind/distributor-themes` is private. It holds the distributors' generated themes and the list of which distributor uses which theme. The Jøkul Storybook is built from the public `fremtind/jokul` repo and deployed to **public** GitHub Pages: `latest` and release tags (`.github/workflows/storybook_branch_preview.yml`), and PR previews (`pull_request.yml`, `preview` job). Anything compiled into that Storybook is public, including theme CSS, brand names in the toolbar, and font files.

**Approach:** jokul gets an optional, env-driven hook for loading extra themes into Storybook. Public builds never set it, so they stay exactly as today. The private repo checks out the public jokul repo at the tag matching its `@fremtind/jokul` dependency, points the hook at its own built themes, builds Storybook and deploys it to an access-controlled host. Nothing secret enters jokul's repo, CI or Pages.

How it works today (the code this plan touches):
- `.storybook/globals/brand.tsx` builds the "Merkevare" toolbar menu from `BRANDS` and `brandTitles: Record<Brand, string>`, and sets `body.dataset.brand`.
- `BRANDS = ["dnb"] as const` and `type Brand` live in `packages/jokul/src/utilities/types.ts:10-11`. `JokulModes["data-brand"]` uses `Brand`.
- Brand CSS currently arrives only through SCSS: `.storybook/global.scss` → `styles/base` → `theme/_index.scss` → `theme/brands/_index.scss` (written by `tokens/style-dictionary/build.ts`).
- Layer order `jokul { resets, theme, global, components, utility }` is declared in `styles/_layers.scss`. CSS that is added later inside `@layer jokul.theme` slots into the right place automatically.
- `.storybook/main.ts` has a single `viteFinal` that adds the React plugin and the modern SCSS API.
- Release tags look like `@fremtind/jokul@6.1.3`.

---

## Decisions

- **The contract is compiled CSS, not SCSS.** The generated `_fonts.scss` does `@use "../../fonts"` with a path relative to jokul's own source tree (`createBrandConfig` → `baseFontsModule: "../../fonts"`). That cannot resolve from a different repo. So the private repo hands over plain `.css` files, with font `url()`s relative to each CSS file. Vite then bundles the fonts as normal assets.
- **One env var, one manifest file:** `JOKUL_EXTRA_THEMES=/abs/or/relative/path/to/manifest.json`.
- **The public workflows never set this variable.** A guard step makes the public Pages deploys fail if it is ever set.

### Manifest format (`jokul-extra-themes.json`)

```jsonc
{
  "$schema": "…/extra-themes.schema.json",   // optional
  "themes": [
    { "name": "distributor-x", "title": "Distributør X", "css": "./distributor-x/theme.css" }
  ]
}
```
- `name` must match `^[a-z][a-z0-9-]*$`, must be unique, and must not collide with `BRANDS`. It becomes the `data-brand` value. The CSS must use the selector `[data-brand="<name>"]`.
- `css` paths are resolved relative to the manifest. Fonts referenced from the CSS are resolved relative to the CSS file.
- `title` is shown in the toolbar. The private repo can build it from its distributor → theme mapping, e.g. "Distributør X (tema Y)".

---

## Step 1: let `buildTheme` emit compiled CSS (jokul, internal `src/theme/node`, exposed only via the CLI)

> Superseded by `DISTRIBUTOR-THEMES-REPO-PLAN.md` Part A. It defines `--css`, the fonts
> convention, and `manifest.json` in the same format as `jokul-extra-themes.json` below.
> Use that plan as the source of truth.

This extends `THEME-GENERATION-PLAN.md` step 5. Add an option to `buildTheme(theme, { outDir, selector?, css?: boolean, fontsDir? })`:
- When `css: true`, compile the generated `_index.scss` with `sass` (already used in the repo) into `outDir/theme.css`.
  - Set `loadPaths` to the installed package's `src/styles/theme` so that `@use "../../fonts"` resolves. Alternatively, generate the external `_fonts.scss` with `baseFontsModule` pointing at an absolute or package path, which is cleaner. Pick one when implementing step 5.
  - Set `$webfonts-dir-<name>` to `"./fonts"` so font URLs end up relative to `theme.css`.
- When `fontsDir` is given, copy the `.woff2` files into `outDir/fonts/`.
- Expose this in the CLI: `jokul theme build <file> --out <dir> --css [--fonts <dir>]`.
- Add `sass` as an optional peer dependency of `@fremtind/jokul` (`peerDependenciesMeta`), the same way as `style-dictionary`.

Output layout per theme: `outDir/theme.css`, `outDir/fonts/*.woff2`. The private repo then writes the manifest pointing at these.

## Step 2: Vite plugin for extra themes (`.storybook/extra-themes.ts`, new file)

Export `extraThemesPlugin(manifestPath?: string): Plugin`. It should:
- Resolve the virtual module id `virtual:jokul-extra-themes` (use the `\0` prefix in `resolveId`).
- In `load`:
  - If `manifestPath` is undefined, return `export default [];`.
  - Otherwise read and validate the manifest. Validation covers the name regex, duplicates, collisions with `BRANDS`, and that every CSS file exists. Fail the build with a clear error on invalid data.
  - Emit one `import "<abs css path>";` per theme, then `export default [{ name, title }, …];`.
  - Call `this.addWatchFile(manifestPath)` so dev mode reloads when the manifest changes.
- Also export the resolved theme directories, so `main.ts` can add them to `server.fs.allow` (Vite blocks dev-serving files outside the workspace root).

Add `.storybook/virtual-modules.d.ts`:
```ts
declare module "virtual:jokul-extra-themes" {
    const themes: ReadonlyArray<{ name: string; title: string }>;
    export default themes;
}
```
Make sure it is included by whatever tsconfig type-checks `.storybook` (check the root `tsconfig.json`).

## Step 3: wire up `.storybook/main.ts`

In `viteFinal`:
- Read `process.env.JOKUL_EXTRA_THEMES`.
- Add `extraThemesPlugin(path)` to `plugins` next to `react()`.
- When the path is set, add `server: { fs: { allow: [<repo root>, ...themeDirs] } }`. Include the repo root explicitly, because setting `allow` replaces Vite's default.

Optional: when the env var is set, add a `.storybook/manager.ts` that sets `brandTitle` (e.g. from `JOKUL_STORYBOOK_TITLE`, defaulting to "Jøkul – distributørtemaer"). That way it is obvious you are in the private build. Pass the value to the manager with Storybook's `env` config or a `STORYBOOK_`-prefixed variable.

## Step 4: merge brands in `.storybook/globals/brand.tsx`

- `import extraThemes from "virtual:jokul-extra-themes";`
- `brands = [...BRANDS.map(...existing), ...extraThemes.map(({ name, title }) => ({ title, value: name }))]`
- `applyBrand` and `brandDecorator` need no changes. They already accept any string.

## Step 5: make `Brand` augmentable (`packages/jokul/src/utilities/types.ts`)

This lets distributor-themes ship typed brand names (the diagram's "Typer for temaene"), and lets `JokulModes["data-brand"]` accept them:
```ts
export const BRANDS = ["dnb"] as const;
/** Kan utvides av konsumenter via module augmentation */
export interface JokulBrands extends Record<(typeof BRANDS)[number], true> {}
export type Brand = keyof JokulBrands;
```
- `build.ts`, `createBrandConfig` and `brandTitles` keep iterating `BRANDS`. Change `brandTitles` to `Partial<Record<Brand, string>>`, because augmented names won't have an entry there. The existing `?? brand` fallback covers that.
- Check that `JokulBrands` is reachable from a public entry, e.g. re-exported from `@fremtind/jokul` or `@fremtind/jokul/theme`, so `declare module "@fremtind/jokul" { interface JokulBrands { "distributor-x": true } }` works. Document this in the theme README (plan step 9).
- Run `pnpm --filter @fremtind/jokul typecheck` to confirm the build-time loop over `BRANDS` still type-checks.

## Step 6: guard the public deploys

In `storybook_branch_preview.yml` and in the `preview` job of `pull_request.yml`, add a step before the build:
```yaml
- name: Sikre at private temaer ikke publiseres
  run: test -z "${JOKUL_EXTRA_THEMES:-}" || { echo "JOKUL_EXTRA_THEMES må ikke settes i offentlige bygg"; exit 1; }
```
Also add a short section to `CONTRIBUTING`/README (or the theme README) explaining the hook, and stating that real distributor themes must never be committed here.

## Step 7: a public demo theme (optional, recommended)

Commit a made-up theme, e.g. `.storybook/demo-themes/jokul-extra-themes.json` with one theme `demo`, generated with `jokul theme generate "#7B3FA0" --name demo && jokul theme build … --css`. Add a `dev:storybook:demo` script that sets `JOKUL_EXTRA_THEMES` to it. This exercises the hook in the public repo, so it doesn't rot. Use it in the verification below. Do **not** enable it in the deploy workflows.

## Step 8: CI and hosting in distributor-themes (private repo; describe here, implement there)

Workflow `storybook.yml`, triggered on push to `main` and on manual dispatch:
1. Check out distributor-themes, install, and run `jokul theme build` for each theme with `--css`. Write `dist/jokul-extra-themes.json`.
2. Read the installed version: `node -p "require('@fremtind/jokul/package.json').version"`. Then check out `fremtind/jokul` at ref `@fremtind/jokul@<version>` into `./jokul`. The repo is public, so no token is needed.
3. In `./jokul`, run `pnpm install && pnpm build`, then `JOKUL_EXTRA_THEMES=$GITHUB_WORKSPACE/dist/jokul-extra-themes.json pnpm build:storybook`.
4. Deploy `jokul/storybook-static` to the chosen private host. Options:
   - GitHub Pages with private visibility, which needs GitHub Enterprise Cloud
   - Azure Static Web Apps or S3/CloudFront behind company SSO
   - Chromatic with a private project
5. Add `<meta name="robots" content="noindex">` through a `previewHead`/`managerHead` addition behind the env flag. This could be part of step 3.

**Open decision:** which private host to use. It does not block steps 1–7.

---

## Verification

1. Run `pnpm build && pnpm build:storybook` with no env var. The brand menu shows only "Jøkul (ingen merkevare)" and "DNB". Compare the list of files in `storybook-static/assets` against a build from `main`: there should be no new CSS or fonts.
2. Run `pnpm dev:storybook:demo`. "Demo" appears under Merkevare. Switching to it changes the colours and fonts of the Button and Card stories, and switching back resets them. Editing the manifest triggers a reload.
3. Run the build with a bad manifest (duplicate name, `name: "dnb"`, missing CSS file). The build fails with a readable error.
4. Leak check: after step 1, `grep -r "demo" storybook-static/assets/*.css` finds no matches.
5. Run `pnpm --filter @fremtind/jokul typecheck` and `pnpm --filter @fremtind/jokul test`. In a scratch file, check that augmenting `JokulBrands` lets `<div data-brand="distributor-x">` type-check through `JokulModes`.
6. Guard: run the guard step locally with `JOKUL_EXTRA_THEMES=x`. It exits 1.
7. End to end, from a directory outside the repo: follow step 8 manually against a local copy of jokul and the demo theme, then open `storybook-static/index.html` with `npx http-server`.
