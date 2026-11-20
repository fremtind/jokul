# Instruksjoner for å bygge tema for Jøkul

Et tema er en temafil (`theme.json`) med farger, og eventuelt fonter, for én merkevare. Den er utgangspunktet for et ferdig tema for Jøkul, som aktiveres med `data-brand="<navn>"` på et element som omslutter Jøkul-komponentene.

## 1. Lag en temafil

Du kan lage temafilen på to måter:

- Lag temaet i [temabyggeren](https://jokul.fremtind.no/temabygger) og velg «Last ned temafil».
- Generer et utgangspunkt fra én merkevarefarge:

    ```bash
    pnpm exec jokul theme generate "#006F4E" --name mitt-tema --title "Mitt tema" --out themes/mitt-tema/theme.json
    ```

    | Flagg              | Beskrivelse                                                      |
    | ------------------ | ---------------------------------------------------------------- |
    | `--name <navn>`    | Verdien til `data-brand`, i kebab-case. Standard er `mitt-tema`. |
    | `--title <tittel>` | Visningsnavn for temaet.                                         |
    | `--out <fil>`      | Hvor temafilen skrives. Uten `--out` skrives den til terminalen. |
    | `--no-dark`        | Temaet bruker de lyse fargene også i mørk modus.                 |

## 2. Bygg tokens og Sass-filer

`build` trenger `style-dictionary` installert lokalt:

```bash
pnpm add -D style-dictionary@^5.5.0
pnpm exec jokul theme build themes/mitt-tema/theme.json
```

Foreløpig støttes bare fontvalgene i temabyggeren, koblet til filer i [`conversion/fontRegistry.json`](./conversion/fontRegistry.json). Fontfilene legges manuelt i `src/fonts/brands/<navn>/` og må være tilgjengelige på `/fonts/brands/<navn>/` i løsningen som bruker temaet.

Resultatet skrives relativt til gjeldende mappe:

```text
src/
├── tokens/brands/
│   ├── color.<navn>.tokens.json
│   └── typography.<navn>.tokens.json
└── styles/theme/brands/<navn>/
    ├── _color-scheme.scss
    ├── _fonts.scss
    └── _index.scss
```

`--out <mappe>` erstatter resultatrotens `src`. Generert Sass bruker Jøkuls felles `styles/theme/_fonts.scss` under denne roten. Bygget kopierer ikke fonter og lager ikke kompilert CSS.

Ved testing i Jøkul-repoet: kjør `pnpm compile:scripts` fra `packages/jokul`, og bruk `node bin/jokul.mjs theme …` i stedet for `pnpm exec jokul theme …`.
