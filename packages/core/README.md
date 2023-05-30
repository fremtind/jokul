# [`@fremtind/jkl-core`](https://jokul.fremtind.no/komponenter/mixins)

Inneholder grunnstilen til designsystemet Jøkul. Inneholder også et normaliserings-stilark som sørger for at alle nettlesere har samme utgangspunkt når de skal vise en Fremtind-side.

Dersom du skal bygge komponenter for Fremtind, utover de som finnes i Jøkul, bør du bruke variablene her. Det sørger for at farger, sperring, typografisk skala og liknende holder seg oppdatert mot endringer i designsystemet.

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/mixins).

## Installasjon

1. `npm i @fremtind/jkl-core`.
2. Importér stil-pakken i prosjektet ditt.

```js
import { initTabListener, Link } from "@fremtind/jkl-core";
initTabListener();

// Importer stilark via JavaScript med CSS-loader.
import "@fremtind/jkl-core/core.min.css";
```

```scss
// Eller importer stilark via SCSS.
@use "@fremtind/jkl-core/core";

// Bruk Jøkuls mixins, funksjoner og variabler via jkl-modulen.
@use "@fremtind/jkl-core/jkl";

@include jkl.light-mode-variables {
    // ...
}
```

## Bruk

### Klassen `jkl`

For at CSSen i Jøkul skal fungere som forventet må du sette klassen `jkl` på rotnivå i applikasjonen din.

Vi bruker `jkl`-klassen til å blant annet:

-   Sette riktige fonter.
-   Gi standardfarger til tekst og bakgrunn.
-   Noen CSS resets.

Du har kanskje en komponent som heter `Layout` eller `App` hvor du kan sette denne klassen? Om du er usikker, sett klassen på `body`.

```tsx
import React, { FC } from "react";
import { WithChildren } from "@fremtind/jkl-core";

export const Layout: FC<WithChildren> = ({ children }) => {
    return <div className="jkl">{children}</div>;
};
```

### `initTabListener()`

Av tilgjengelighetshensyn viser vi fokusomriss på interaktive elementer når man navigerer en løsning ved hjelp av tastaturet. Normalt blir disse omrissene også vist når man bruker musen for navigasjon, noe vi ikke ønsker.

Hjelpefunksjonen `initTabListener()` sørger for å sette et flagg på `<body>` når man navigerer med musen, som skjuler omrissene. Importer og kall funksjonen på rotnivå i prosjektet ditt (der siden rendres).

```js
import { initTabListener } from "@fremtind/jkl-core";

initTabListener();
```

### Kompakt modus

Noen løsninger, spesielt rådgiverløsninger, har behov for å vise veldig mye informasjon på skjermen samtidig. Derfor ønsker vi å tilby kompakte versjoner av komponentene til dette formålet.

For å gjøre det enklere å ha kompakt modus på en hel løsning tillater vi å sette en attributt `data-layout-density="compact"` på `<body>` (eller et annet element) slik at alle komponenter inne i dette elementet blir kompakte.

### `getValuePair()`

Noen komponenter, som `Select` og `RadioButtons`, kan ta inn verdier enten som en streng eller som et `ValuePair`-objekt med en `value` og et `label`. Hjelpefunksjonen `getValuePair` konstruerer et `ValuePair` fra en `string`, for å sikre enkel implementasjon av disse komponentene. Funksjonen sender gjennom `ValuePair`-objekter uendret:

```js
import { getValuePair } from "@fremtind/jkl-core";

getValuePair("En verdi"); // { label: "En verdi", value: "En verdi" }

const value = { label: "En annen verdi", value: "value2" };
getValuePair(value); // returnerer objektet som det er
```

Denne er fin å bruke sammen med `map()` for å rendre valg:

```jsx
const choices = ["Valg 1", "Valg 2", "Valg 3"];
return choices.map(getValuePair).map((choice) => (
    <option selected={choice.value === selectedValue} value={choice.value}>
        choice.label
    </option>
));
```

### Vind

Vind er et subset av [Tailwind CSS](https://tailwindcss.com), med grunnlag i Jøkuls design tokens, som fokuserer på:

-   Layout, som Flex, Padding, og Margin
-   Typografi

#### Bruk med Webpack, Vite og liknende

```js
import "@fremtind/jkl-core/core.min.css";
// Vind trenger core for å fungere
import "@fremtind/jkl-core/vind.min.css";
```

#### Bruk med Sass

```scss
@use "@fremtind/jkl-core/core";
// Vind trenger core for å fungere
@use "@fremtind/jkl-core/vind";
```

#### API

Du finner igjen disse tingene du kanskje kjenner fra Tailwind:

-   [Flex Direction](https://tailwindcss.com/docs/flex-direction)
-   [Flex Grow](https://tailwindcss.com/docs/flex-grow)
-   [Flex Shrink](https://tailwindcss.com/docs/flex-shrink)
-   [Gap](https://tailwindcss.com/docs/gap)
-   [Justify Content](https://tailwindcss.com/docs/justify-content)
-   [Align Items](https://tailwindcss.com/docs/align-items)
-   [Padding](https://tailwindcss.com/docs/padding)
-   [Margin](https://tailwindcss.com/docs/margin)
-   [Space Between](https://tailwindcss.com/docs/space)
-   [Font Family](https://tailwindcss.com/docs/font-family) (`font-serif` finnes ikke)
-   [Font Weight](https://tailwindcss.com/docs/font-weight) (kun `font-normal` og `font-bold`)

##### Typografi

Vi har egne utils for typografi som passer med vår egen typografiskala.

```scss
.title {
    @include jkl.text-style("title");
}

.title-small {
    @include jkl.text-style("title-small");
}

.heading-1 {
    @include jkl.text-style("heading-1");
}

.heading-2 {
    @include jkl.text-style("heading-2");
}

.heading-3 {
    @include jkl.text-style("heading-3");
}

.heading-4 {
    @include jkl.text-style("heading-4");
}

.heading-5 {
    @include jkl.text-style("heading-5");
}

.body {
    @include jkl.text-style("body");

    &.font-bold {
        @include jkl.no-grow-bold;
    }
}

.small {
    @include jkl.text-style("small");

    &.font-bold {
        @include jkl.no-grow-bold;
    }
}
```

#### Savner du noe fra Tailwind?

Åpne et issue med feature-ønsker, så kan vi finne ut av det sammen.

#### Jeg vil bruke Tailwind for å bygge løsningene mine. Hvordan bruker jeg Jøkul-verdier?

Per nå har vi ikke noen ferdig konfigurasjon som er klar for Tailwind eller andre utility-baserte verktøy, men vi eksporterer alle design tokens som JavaScript.

Du kan importere tokensene i `tailwind.config.js` og bygge opp konfigurasjonen din på den måten:

```js
import { tokens, breakpoints } from "@fremtind/jkl-core";
import plugin from "tailwindcss/plugin";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        colors: tokens.color,
        spacing: tokens.spacing,
        fontSize: null,
        lineHeight: null,
    },
    plugins: [
        plugin(function ({ addComponents }) {
            addComponents({
                ".title": {
                    ...tokens.typography.title.small,
                    [`@media (min-width: ${breakpoints.medium}px)`]: {
                        ...tokens.typography.title.base,
                    },
                },
                ".title-small": {
                    ...tokens.typography.titleSmall.small,
                    [`@media (min-width: ${breakpoints.medium}px)`]: {
                        ...tokens.typography.titleSmall.base,
                    },
                },
                ".heading-1": {
                    ...tokens.typography.heading_1.small,
                    [`@media (min-width: ${breakpoints.medium}px)`]: {
                        ...tokens.typography.heading_1.base,
                    },
                },
                ".heading-2": {
                    ...tokens.typography.heading_2.small,
                    [`@media (min-width: ${breakpoints.medium}px)`]: {
                        ...tokens.typography.heading_2.base,
                    },
                },
                ".heading-3": {
                    ...tokens.typography.heading_3.small,
                    [`@media (min-width: ${breakpoints.medium}px)`]: {
                        ...tokens.typography.heading_3.base,
                    },
                },
                ".heading-4": {
                    ...tokens.typography.heading_4.small,
                    [`@media (min-width: ${breakpoints.medium}px)`]: {
                        ...tokens.typography.heading_4.base,
                    },
                },
                ".heading-5": {
                    ...tokens.typography.heading_5.small,
                    [`@media (min-width: ${breakpoints.medium}px)`]: {
                        ...tokens.typography.heading_5.base,
                    },
                },
                ".body": {
                    ...tokens.typography.body.small,
                    [`@media (min-width: ${breakpoints.medium}px)`]: {
                        ...tokens.typography.body.base,
                    },
                },
                ".small": {
                    ...tokens.typography.small.small,
                    [`@media (min-width: ${breakpoints.medium}px)`]: {
                        ...tokens.typography.small.base,
                    },
                },
            });
        }),
    ],
};
```
