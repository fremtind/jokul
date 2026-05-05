# Jøkul codemods

Codemods er automatiserte kodeendringsverktøy for å lette migrering mellom Jøkul-versjoner.

## Bruk

```bash
# Tørrkjøring — se hva som ville bli endret
pnpm exec jokul codemod --dry-run

# Kjør på hele prosjektet
pnpm exec jokul codemod

# Kjør bare på spesifikke mapper/filer
pnpm exec jokul codemod src app/components

# Med verbose-utskrift (viser alle behandlede filer)
pnpm exec jokul codemod --verbose
```

Codemoden leser alle tekstfiler med disse endingene: `.ts`, `.tsx`, `.js`, `.jsx`, `.mjs`, `.mts`, `.cjs`, `.cts`, `.css`, `.scss`, `.sass`, `.md`, `.mdx`.

Mapper som hoppes over: `node_modules`, `build`, `dist`, `.git`, `.next`, `.turbo`, `coverage`, `storybook-static`, `.changeset`, `.github`.

---

## `import-paths` (standard)

Standardcodemoden for Jøkul 4 → 5-migrering. Kjøres automatisk med `jokul codemod`.

### Automatiske endringer

#### Importstier for stilark og Sass-hjelpere

| Gammel import | Ny import |
|---|---|
| `@fremtind/jokul/styles/core` | `@fremtind/jokul/styles/base.scss` |
| `@fremtind/jokul/styles/core/core` | `@fremtind/jokul/styles/base` |
| `@fremtind/jokul/styles/core/core.scss` | `@fremtind/jokul/styles/base.scss` |
| `@fremtind/jokul/styles/core/core.css` | `@fremtind/jokul/styles/base.css` |
| `@fremtind/jokul/styles/core/core.min.css` | `@fremtind/jokul/styles/base.min.css` |
| `@fremtind/jokul/styles` | `@fremtind/jokul/styles/components.scss` |
| `@fremtind/jokul/styles/styles` | `@fremtind/jokul/styles/components` |
| `@fremtind/jokul/styles/styles.scss` | `@fremtind/jokul/styles/components.scss` |
| `@fremtind/jokul/styles/styles.css` | `@fremtind/jokul/styles/components.css` |
| `@fremtind/jokul/styles/styles.min.css` | `@fremtind/jokul/styles/components.min.css` |
| `@fremtind/jokul/styles/core/jkl` | `@fremtind/jokul/styles/jkl` |
| `@fremtind/jokul/styles/core/jkl/index` | `@fremtind/jokul/styles/jkl` |
| `@fremtind/jokul/styles/fonts/webfonts` | `@fremtind/jokul/styles/theme/fonts` |
| `@fremtind/jokul/styles/fonts/webfonts.scss` | `@fremtind/jokul/styles/theme/fonts` |
| `@fremtind/jokul/styles/fonts` | `@fremtind/jokul/styles/theme/fonts` |
| `@fremtind/jokul/tailwind/v4` | `@fremtind/jokul/styles/tailwind` |
| `@fremtind/jokul/core` | `@fremtind/jokul/utilities` |
| `../core/jkl` (relativ) | `../styles/jkl` |
| `../../core/jkl` (relativ) | `../../styles/jkl` |
| `../../../core/jkl` (relativ) | `../../../styles/jkl` |

#### Fjerning av `webfonts.css`-import (CSS)

`@font-face`-definisjonene er flyttet inn i `styles/base.css` i Jøkul 5. Standalone CSS-importer av `webfonts.css` og `webfonts.min.css` fjernes automatisk (både `import`, `require()` og CSS `@import`).

Hvis `webfonts.css` fjernes uten at `base.css` eller `components.css` er importert i samme fil, gis det et varsel.

#### Stilimporter for beta-komponenter

| Gammel import | Ny import |
|---|---|
| `@fremtind/jokul/styles/components/description-list` | `@fremtind/jokul/styles/components/beta/description-list` |
| `@fremtind/jokul/styles/components/nav-link` | `@fremtind/jokul/styles/components/beta/nav-link` |
| `@fremtind/jokul/styles/components/select` | `@fremtind/jokul/styles/components/beta/select` |

Erstatningen skjer bare hvis beta-komponent-identifikatoren (`BETA_Select` o.l.) finnes i samme fil. Hvis stilimporten finnes uten komponentreferanse gis det et varsel om manuell vurdering.

#### Resortering av font-import (SCSS)

I SCSS-filer flyttes `@use "@fremtind/jokul/styles/theme/fonts"` til å stå _før_ `@use "@fremtind/jokul/styles/base"`, som kreves av Jøkul 5.

#### Font-familienavn

| Gammelt navn | Nytt navn |
|---|---|
| `"Fremtind Material Symbols"` | `"Jokul Icons"` |
| `"Fremtind Material Symbols Fallback"` | `"Jokul Icons Fallback"` |

#### CSS-fargetokens

Semantiske `--jkl-color-*` custom properties omdøpt fra v4 til v5. Gjelder både `var()`-bruk og direktedefinerte properties.

| Gammel token | Ny token |
|---|---|
| `--jkl-color-background-action` | `--jkl-color-background-contrast` |
| `--jkl-color-text-on-action` | `--jkl-color-text-on-contrast` |
| `--jkl-color-text-inverted` | `--jkl-color-text-on-contrast` |
| `--jkl-color-background-container-high` | `--jkl-color-background-container` |
| `--jkl-color-background-container-low` | `--jkl-color-background-container` |
| `--jkl-color-background-container-inverted` | `--jkl-color-background-contrast` |
| `--jkl-color-background-alert-info` | `--jkl-color-info-background-container` |
| `--jkl-color-background-alert-warning` | `--jkl-color-warning-background-container` |
| `--jkl-color-background-alert-error` | `--jkl-color-error-background-container` |
| `--jkl-color-background-alert-success` | `--jkl-color-success-background-container` |

#### Tailwind-fargeklasser

Tilsvarende omdøping for alle Tailwind v4-fargeklasser generert fra `--color-*`-variabler. Alle vanlige prefikser håndteres: `bg-`, `text-`, `border-`, `ring-`, `shadow-`, `fill-`, `stroke-`, `accent-`, `caret-`, `outline-`, `placeholder-`, `divide-`, `from-`, `via-`, `to-`, `decoration-`.

| Gammelt fargenøkkel | Nytt fargenøkkel | Eksempel på klasse |
|---|---|---|
| `background-action` | `background-contrast` | `bg-background-action` → `bg-background-contrast` |
| `text-on-action` | `text-on-contrast` | `text-text-on-action` → `text-text-on-contrast` |
| `text-inverted` | `text-on-contrast` | `text-text-inverted` → `text-text-on-contrast` |
| `background-container-high` | `background-container` | `bg-background-container-high` → `bg-background-container` |
| `background-container-low` | `background-container` | `bg-background-container-low` → `bg-background-container` |
| `background-container-inverted` | `background-contrast` | `bg-background-container-inverted` → `bg-background-contrast` |
| `background-alert-info` | `info-background-container` | `bg-background-alert-info` → `bg-info-background-container` |
| `background-alert-warning` | `warning-background-container` | `bg-background-alert-warning` → `bg-warning-background-container` |
| `background-alert-error` | `error-background-container` | `bg-background-alert-error` → `bg-error-background-container` |
| `background-alert-success` | `success-background-container` | `bg-background-alert-success` → `bg-success-background-container` |

Tailwind-modifikatorer (`hover:`, `dark:`, `md:`, `focus:` o.l.), opacity-modifikatorer (`/50`) og viktig-prefiks (`!`) håndteres korrekt.

---

### Varsler (krever manuell vurdering)

Disse mønstrene kan ikke omdøpes automatisk. Codemoden skriver ut ett varsel per fil der mønsteret finnes.

| Mønster | Varsel |
|---|---|
| `--jkl-color-text-on-alert-*` | Fjernede tokens. Bruk `--jkl-color-<rolle>-text-default`, f.eks. `--jkl-color-info-text-default`. |
| `--jkl-color-background-interactive` / `--jkl-color-text-interactive` | Fjernede tokens. Skal ikke brukes lenger. |
| `variant="outlined\|high\|low"` (på `Card`) | `variant`-prop er fjernet. Bruk `outlined` (boolean) for ramme, fjern `high`/`low`. |
| `bg-background-interactive` o.l. (Tailwind) | Fjernede Tailwind-klasser basert på `background-interactive`/`text-interactive`. |
| `border-border-separator` o.l. (Tailwind) | Fjernede Tailwind-kantklasser. Bruk `border-border-default`, `-subdued` eller `-strong`. |
