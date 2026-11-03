# Instruksjoner for å bygge tema

Et tema er en temafil (`theme.json`) med farger, og eventuelt fonter, for én merkevare. Med `jokul theme build` blir temafilen til Sass og CSS. Den aktiveres med `data-brand="<navn>"` på et element som omslutter Jøkul-komponentene.

## 1. Lag en temafil

Du kan lage temafilen på to måter:

- Lag temaet i [temabyggeren](https://jokul.fremtind.no/temabygger) og velg «Last ned temafil».
- Generer et utgangspunkt fra én merkevarefarge:

    ```bash
    pnpm exec jokul theme generate "#006F4E" --name mitt-tema --title "Mitt tema" --out themes/mitt-tema/theme.json
    ```

    | Flagg              | Beskrivelse                                                         |
    | ------------------ | ------------------------------------------------------------------- |
    | `--name <navn>`    | Verdien til `data-brand`, i kebab-case. Standard er `mitt-tema`.    |
    | `--title <tittel>` | Visningsnavn for temaet.                                            |
    | `--out <fil>`      | Hvor temafilen skrives. Uten `--out` skrives den til stdout.        |
    | `--method <metode>` | `wcag` (standard) eller `oklch`.                                   |
    | `--no-dark`        | Temaet bruker de lyse fargene også i mørk modus.                    |

Kontroller temafilene med:

```bash
pnpm exec jokul theme validate themes/*/theme.json
```

### Fonter

Uten `fonts` i temafilen bruker temaet Jøkuls standardfonter. Egne fonter legger du inn under `fonts`, og fontfilene (`.woff2`) i en `fonts/`-mappe ved siden av temafilen:

```text
themes/mitt-tema/
├── theme.json
└── fonts/
    ├── MittTema-Regular.woff2
    └── MittTema-Bold.woff2
```

```json
"fonts": {
    "regular": { "family": "'Mitt Tema', sans-serif", "weight": { "normal": "400", "bold": "700" } },
    "display": { "family": "'Mitt Tema', sans-serif", "weight": { "normal": "400", "bold": "700" } },
    "mono": { "family": "'Mitt Tema Mono', monospace" },
    "faces": [
        { "family": "Mitt Tema", "weight": 400, "style": "normal", "fileName": "MittTema-Regular.woff2" },
        { "family": "Mitt Tema", "weight": 700, "style": "normal", "fileName": "MittTema-Bold.woff2" }
    ]
}
```

`validate` og `build` feiler hvis en fil i `faces` mangler i `fonts/`.

## 2. Bygg temaet

`build` trenger `style-dictionary`, og `--css` trenger i tillegg `sass`:

```bash
pnpm add -D style-dictionary sass
pnpm exec jokul theme build themes/*/theme.json --out dist/themes --css --index --types
```

Hvert tema bygges til `<out>/<navn>/`:

| Fil                                   | Beskrivelse                                             |
| ------------------------------------- | ------------------------------------------------------- |
| `_index.scss`                         | Farger og fonter for temaet.                            |
| `_color-scheme.scss`, `_fonts.scss`   | Delene som `_index.scss` videresender.                  |
| `fonts/`                              | Kopi av fontfilene.                                     |
| `theme.css`                           | Med `--css`.                                            |
| `color.<navn>.tokens.json`, `typography.<navn>.tokens.json` | Tokens temaet er bygget fra.      |

| Flagg                    | Beskrivelse                                                                                       |
| ------------------------ | ------------------------------------------------------------------------------------------------- |
| `--out <mappe>`          | Standard er gjeldende mappe.                                                                      |
| `--selector <selektor>`  | Erstatter `[data-brand="<navn>"]`. Kan bare brukes med ett tema.                                  |
| `--css`                  | Kompilerer `theme.css` for hvert tema.                                                            |
| `--index`                | Skriver `<out>/_index.scss`, som videresender alle temaene, og `<out>/manifest.json`. Sammen med `--css` skrives også `<out>/all.css`. |
| `--types`                | Skriver `<out>/brands.d.ts`, se [TypeScript](#typescript).                                        |

## 3. Ta i bruk temaet

Temaet kommer i tillegg til Jøkuls vanlige stilark. Importer enten Sass:

```scss
@use "dist/themes/mitt-tema";
// eller alle temaene med --index
@use "dist/themes";
```

eller CSS:

```ts
import "dist/themes/mitt-tema/theme.css";
// eller alle temaene med --index --css
import "dist/themes/all.css";
```

Bruker du Sass og flytter fontfilene, kan du sette mappen med `@use "dist/themes/mitt-tema" with ($webfonts-dir-mitt-tema: "/fonts/mitt-tema");`.

Aktiver temaet på et element rundt komponentene:

```tsx
<div data-brand="mitt-tema">
    <App />
</div>
```

### TypeScript

`data-brand` godtar bare kjente temaer. Ta med `brands.d.ts` fra `--types` i `tsconfig.json`, så kjenner TypeScript igjen temaene dine:

```json
{
    "include": ["src", "dist/themes/brands.d.ts"]
}
```

Filen utvider `JokulBrands` i `@fremtind/jokul/utilities`. Du kan også skrive utvidelsen selv:

```ts
declare module "@fremtind/jokul/utilities" {
    interface JokulBrands {
        "mitt-tema": true;
    }
}
```

## Programmatisk bruk

`@fremtind/jokul/theme` kan brukes i nettleseren, og har det som trengs for å lage og lese temafiler uten CLI-et: `generatePalette`, `validateThemeFile`, `parseThemeFile` og `themeToTokenFiles`.
