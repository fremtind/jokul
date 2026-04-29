---
"@fremtind/jokul": major
---

Oppdaterer fargetokens til Jøkul sitt v5-fargesystem.

`packages/jokul/src/tokens/color.tokens.json` er nå base-fargetemaet som brukes når ingen brand er valgt. Brand-spesifikke fargetemaer ligger i `packages/jokul/src/tokens/brands/color.*.tokens.json` og aktiveres med `data-brand`.

Dette er en breaking change for kode som bruker gamle fargetokens direkte. Flere tokens fra dagens `main` er fjernet eller erstattet med nye semantiske roller:

- bruk `--jkl-color-background-contrast` i stedet for `--jkl-color-background-action`
- bruk `--jkl-color-text-on-contrast` i stedet for `--jkl-color-text-on-action` og `--jkl-color-text-inverted`
- bruk `--jkl-color-background-container` i stedet for `--jkl-color-background-container-high` og `--jkl-color-background-container-low`
- bruk contrast-tokens der `--jkl-color-background-container-inverted` tidligere ble brukt som invertert flate
- bruk feedback-tokens for `info`, `warning`, `error` og `success` i stedet for `--jkl-color-background-alert-*` og `--jkl-color-text-on-alert*`
- bruk semantiske border-roller som `default`, `subdued` og `strong` i stedet for gamle input- og separator-border tokens

`--jkl-color-background-interactive*` og `--jkl-color-text-interactive*` er fjernet. Der komponenter trenger hoverflater, bruker Jøkul nå lokale `color-mix()`-verdier som kode-alternativ til overlay/state layer i Figma.
