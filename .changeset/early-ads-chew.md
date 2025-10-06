---
"@fremtind/jokul": minor
---

Legger til [CSS layers](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) for Jøkul sine grunnleggende stiler for å unngå konflikt både innad i Jøkul, og mellom dine egne stilark og stilene fra Jøkul.

Stilene til Jøkul ligger inne i laget `jokul`, som igjen har fem under-lag. Disse er, i rekkefølge fra minst til mest prioritert:

1. `resets`: Normalisering og reset av nettleser-stiler. Disse ønsker vi på sikt å bli kvitt, eller få trimmet ned kraftig.
2. `theme`: Her ligger variablene som legger grunnlag for designsystemet; spacing, farger, typografi, etc.
3. `global`: Foreløpig er dette laget tomt, men her kan det komme overordnede stiler som gjelder uten å sette klasser, slik som automatiske stiler for typografi basert på HTML-element.
4. `components`: Her bor alle stilene til komponentene våre (vil bli lagt inn i fremtidig(e) pull request(s)).
5. `utility`: Dette laget inneholder nytteklassene våre. De er høyest prioritert slik at de får effekt selv om de styrer egenskaper som også er satt gjennom f.eks. komponent-stilark.

Når du skriver dine egne stiler vil de som standard ha høyere prioritet enn _alle disse lagene_, slik at du kan være sikker på at stilarkene du skriver har effekt. Dersom du bruker dine egne lag i stilarkene dine kan du spesifisere at Jøkul sine stiler skal ha lavere prioritet:

```css
@layer jokul, dine-komponenter, dine-nytteklasser;
```
