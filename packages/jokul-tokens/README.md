# Overview

This is the design token foundation for the Jøkul Design System. It has two jobs:

1. Generates CSS custom property files (color palettes + typography/spacing scales) consumed by apps and other Jøkul packages.
2. Exposes a TypeScript/JS API for programmatic color palette generation.

## Core Algorithm — Palette Generation

The key insight is that the entire color system is derived algorithmically from a single brand hex color — no manual hex spreadsheets.

Pipeline in src/colors/colors.ts:

1. 9 semantic color roles are defined (background, surface, content, subtle-content, border, etc.), each with a target luminance for light and dark modes.
2. Given a brand hex, the package uses HSLuv (perceptually-uniform color space) to shift the color to each role's target luminance.
3. If the resulting color's OKLCh chroma exceeds a maxChroma cap for that role (e.g., backgrounds shouldn't be vivid), chroma is clamped.
4. This runs for both light and dark modes automatically.

6 color groups are generated from hardcoded base colors: brand (user-supplied), neutral, info, success, danger, warning.

## CSS Output

`generateCSSTokens(hex)` produces a CSS file inside `@layer jokul.theme` with four blocks covering both explicit (`data-color-scheme="light/dark"`) and `prefers-color-scheme` media query variants.
Example output for brand `#6A359D`:

```css
:root, [data-color-scheme='light'] {
  --color-brand: #6A359D;
  --color-on-brand: #ffffff;
  --color-brand-background: #f4f3f6;
  --color-brand-subtle-surface: #dccfe8;
  --color-brand-content: #251236;
  /* ... */
}
```

## Package Exports

```ts
// Programmatic API
import { generatePalette } from "@fremtind/jokul-tokens/colors";
```

```scss
// CSS
@import "@fremtind/jokul-tokens/styles/theme.css";
@import "@fremtind/jokul-tokens/styles/scale.css";
```

## CLI Tool (`bin/tokens.ts`)

```sh
pnpm jokul tokens generate --color <hex> --out-dir ./build/css
```

Generates a `theme.css` for any arbitrary brand color.

## Per-Brand Scripts

`src/tokens/generate/brand1.ts` through `brand5.ts`, `neutral.ts`, and `jokul.ts` are standalone scripts that hardcode a brand hex + font face declarations to produce brand-specific theme.css files (e.g., Fremtind's various insurance sub-brands).

In short: rather than manually curating color tokens, this package derives an entire accessible, light/dark-mode-aware color system from a single hex value using perceptually-uniform color math.
