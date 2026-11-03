---
"@fremtind/jokul": minor
---

Typen `Brand` kan nå utvides med egne `data-brand`-verdier. Legg navnene til i det nye grensesnittet `JokulBrands` med module augmentation, så typesjekkes de som gyldige merkevarer:

```ts
declare module "@fremtind/jokul/utilities" {
    interface JokulBrands {
        "mitt-tema": true;
    }
}
```

Fargegeneratoren fra temabyggeren er flyttet inn i pakken, som forberedelse til en egen inngang for temagenerering. Derfor er `chroma-js` og `hsluv` nye avhengigheter. De ubrukte metadatafilene `color.metadata.saturated.light.json` og `color.metadata.saturated.dark.json` er fjernet fra `@fremtind/jokul/tokens/metadata`.
