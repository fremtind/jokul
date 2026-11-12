# Instruksjoner for å bygge tema for Jøkul

Et tema er en temafil (`theme.json`) med farger, og eventuelt fonter, for én merkevare. Den er utgangspunktet for et ferdig tema for Jøul, som aktiveres med `data-brand="<navn>"` på et element som omslutter Jøkul-komponentene.

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

## 2. Bygg tokens og CSS-Sass-filer

> [!warning]
> Denne funksjonaliteten er ikke implementert ennå

Uten `fonts` i temafilen bruker temaet Jøkuls standardfonter. Egne fonter legger du inn under `fonts`, og fontfilene (`.woff2`) i en `fonts/`-mappe ved siden av temafilen:

```text
themes/mitt-tema/
├── theme.json
└── fonts/
    ├── MittTema-Regular.woff2
    └── MittTema-Bold.woff2
```

Legg til følgende i `theme.json`-filen du genererte med temabyggeren eller CLI-et:

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

> [!tip]
> `build` trenger `style-dictionary` og `sass` installert lokalt

```bash
pnpm add -D style-dictionary sass
pnpm exec jokul theme build themes/*/theme.json --out dist/themes
```

Hvert tema bygges til `<out>/<navn>/`:

| Fil                                                         | Beskrivelse                            |
| ----------------------------------------------------------- | -------------------------------------- |
| `_index.scss`                                               | Farger og fonter for temaet.           |
| `_color-scheme.scss`, `_fonts.scss`                         | Delene som `_index.scss` videresender. |
| `fonts/`                                                    | Kopi av fontfilene.                    |
| `theme.css`                                                 | Kompilert CSS.                         |
| `color.<navn>.tokens.json`, `typography.<navn>.tokens.json` | Tokens temaet er bygget fra.           |

| Flagg           | Beskrivelse                  |
| --------------- | ---------------------------- |
| `--out <mappe>` | Standard er gjeldende mappe. |
