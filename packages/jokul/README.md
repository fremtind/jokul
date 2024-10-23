# @fremtind/jokul

Her finner du alle React-komponenter, stilark og diverse utilities

## Komponenter

Alle komponentene våre installeres fra denne pakka, enten fra roten

```jsx
import { CalendarIcon, List, Link, Message, TextInput } from "@fremtind/jokul";
```

eller organisert i mapper dersom du foretrekker det

```jsx
import { CalendarIcon, List, Link, Message, TextInput } from "@fremtind/jokul/components";
```

For en full liste over komponenter kan du kikke i [components-mappa](src/components/)

## Stilark

Det finnes en del grunnleggende stiler som må med for at ting skal fungere riktig, disse
kan du importere med

```scss
@use "@fremtind/jokul/styles/core/core";
```

Når du bruker en komponent må du også importere stilen

Dette kan gjøres med

```scss
@use "@fremtind/jokul/styles/[komponent]";
```

### Import alle stiler

Eller du kan importere alle stiler på en gang med

```scss
@use "@fremtind/jokul/styles";
```

Vær obs på at du da kan få med en del mer stilark enn du trenger så vurder dette opp mot
størrelsen på bundelen du sender ut. Bruker du SSR kan dette ende med veldig mye overhead.

## Fonter

### SCSS

Dersom du har valgt å importere alle Jøkul-stiler i forrige steg trenger du bare å gjøre selve font-filene tilgjengelig for nedlasting fra serveren din på path `/fonts`. Disse filene vil være
tilgjengelig på _"relative/path/to/node_modules/@fremtind/jokul/src/fonts/assets"_.

Hvis du har valgt å bare ta inn de stilene du faktisk bruker må du sette opp CSS for fontene selv.
Dette gjør du med

```scss
// Variabelen `$webfonts-dir` angir hvor på disk filene ligger.
// Hvis den ikke spesifiseres vil stilarket se etter fontfilene i mappen `/fonts`.
@use "@fremtind/jokul/fonts" with (
    $webfonts-dir: "relative/path/to/node_modules/@fremtind/jokul/src/fonts/assets"
);
```

### CSS

Om du ikke bruker Sass kan du bruke CSS-versjonen. Denne versjonen ser **kun** etter fontfilene på URLen `/fonts`, så det beste er å sørge for å kopiere fonter på en måte som gjør at de blir tilgjengelig på den URLen.

Om du er nødt til å legge fontfilene et annet sted må CSS-filen `node_modules/@fremtind/jkl-webfonts/webfonts.css`
kopieres inn i prosjektet. Deretter må du endre URLen i hver `@font-face`-definisjon manuelt så det stemmer med hvor fontfilene ligger. **Husk at man må gjenta prosessen hver gang man oppdaterer pakken!**

```css
@font-face {
    font-family: "Fremtind Grotesk";
    font-display: fallback;
    font-weight: normal;
    font-style: normal;
    src: local("Fremtind Grotesk"),
        /* Endre de to neste linjene så de stemmer */
            url("/relative/path/to/font/files/FremtindGrotesk-Regular-Web.woff2") format("woff2"), url("/relative/path/to/font/files/FremtindGrotesk-Regular-Web.woff")
            format("woff");
}
```

## SASS mixins

For å få tilgang til mixins vi tilbyr kan du i din .scss fil bruke

```scss
@use "@fremtind/jokul/core/jkl";
```

## Hooks

Akkurat som med komponenter kan disse importeres fra roten

```jsx
import { useAnimatedDetails, useLocalStorage } from "@fremtind/jokul";
```

eller via /hooks stien

```jsx
import { useAnimatedDetails, useLocalStorage } from "@fremtind/jokul/hooks";
```

For en full liste over komponenter kan du kikke i [hooks-mappa](src/hooks/)

## Utilities

Du gjettet riktig, disse kan også hentes fra roten av pakka

```jsx
import { tabListener, unicode } from "@fremtind/jokul";
```

Eller via /utilities stien

```jsx
import { tabListener, unicode } from "@fremtind/jokul/utilities";
```

For en full liste over utilities kan du kikke i [utilities-mappa](src/utilities/)
