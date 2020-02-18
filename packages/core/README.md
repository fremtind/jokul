# `@fremtind/jkl-core`

-   Stil
    -   Bruk av stilark
    -   Bruk av variabler og mixins
        -   Variabler
        -   mixins
    -   Implementere kompakt modus
-   Javascript
    -   initTabListener()
    -   getValuePair()

## Stil

Inneholder grunnstilen til designsystemet Jøkul i form av CSS, minifisert CSS og SCSS. Inneholder også et normaliserings-stilark som sørger for at alle nettlesere har samme utgangspunkt når de skal vise en Fremtind-side. Dersom du skal bygge komponenter for Fremtind, utover de som finnes i Jøkul, bør du bruke variablene her. Det sørger for at farger, sperring, typografisk skala, o.l. holder seg oppdatert mot endringer i designsystemet.

### Bruk av stilark

For å ta i bruk grunnstilen anbefaler vi å importere det minifiserte stilarket på denne måten:

```js
import "@fremtind/jkl-core/core.min.css";
```

Dette stilarket inneholder all grunnstilen du trenger for å bruke Jøkul videre, inkludert stiler for avsnitt, etiketter, hjelpetekster og overskrifter.

### Bruk av variabler og mixins

Når du skal utvikle egne komponenter basert på Jøkul anbefaler vi at du tar inn `@fremtind/jkl-core` som en avhengighet, og benytter deg av variablene for farger, avstand etc. Slik sørger du for at designet holder seg oppdatert og følger retningslinjene. Variablene, og mixins som letter bruken av dem, får du tilgang til gjennom egne `.scss`-filer:

```
@fremtind/jkl-core
  |
  |- variables/
  |   |
  |   |- _all.scss
  |   |- _breakpoints.scss
  |   |- _colors.scss
  |   |- _font-size.scss
  |   |- _shadow.scss
  |   |- _spacing.scss
  |   |- _z-index.scss
  |
  |- mixins/
  |   |
  |   |- _all.scss
  |   |- _helpers.scss
  |   |- _motion.scss
  |   |- _ornaments.scss
  |   |- _screenreader.scss
  |   |- _screens.scss
```

#### Variabler

Vi anbefaler å bruke variablene som design tokens, det vil si at du lager egne variabler for egenskapene til komponenten din, som henter verdier fra variablene i Jøkul. For eksempel kan det se slik ut i en knapp:

```scss
$button-background-color: $svart;
/* ... */
.jkl-button {
    background-color: $button-background-color;
    /* ... */
}
```

#### Tekststiler

Du får tilgang til tekststilene i Jøkul gjennom mixin-en `jkl-text-style()`. Den tar navnet på tekststilen som argument, og navnet samsvarer med navnet i Figma, f.eks. `"compact/body"`. Legg merke til at det ikke er bygget inn noen responsivitet i tekststilene. Dette må du implementere selv der/om du ønsker det, f.eks. ved hjelp av media queries.

Tekststilene eksponeres også som CSS-klasser, dersom du vil bruke dem direkte i generert HTML i stedet for å skrive egne stilklasser. Disse klassene _er_ responsive, og gir den kompakte varianten av tekststilen på små skjermer.

#### Mixins

Det er utviklet mixins for å lette bruk av vanlige mønstre. Disse ligger i mappen `mixins`.

### Implementere kompakt modus

Noen løsninger, spesielt rådgiverløsninger, har behov for å vise veldig mye informasjon på skjermen samtidig. Derfor ønsker vi å tilby kompakte versjoner av komponentene til dette formålet. Vi bruker BEM-modifieren `--compact` for å markere kompakt variant av en komponent.

For å gjøre det enklere å ha kompakt modus på en hel løsning tillater vi å sette en attributt `data-compactlayout` på `<body>` (eller et annet element) slik at alle komponenter inne i dette elementet blir kompakte. Når du skriver kompakt versjon av en komponent i Jøkul skal selektoren derfor se slik ut:

```scss
.jkl-my-component {
    // Normal stil

    &--compact,
    *[data-compactlayout] & {
        // Kompakt stil
    }
}
```

## Javascript

Pakken inneholder også noen nyttige funksjoner som brukes av flere komponenter, eller som anbefales brukt på Fremtind-sider.

### `initTabListener()`

Av tilgjengelighetshensyn viser vi fokusomriss på interaktive elementer når man navigerer en løsning ved hjelp av tastaturet. Normalt blir disse omrissene også vist når man bruker musen for navigasjon, noe vi ikke ønsker. Hjelpefunksjonen `initTabListener()` sørger for å sette et flagg på `<body>` når man navigerer med musen, som skjuler omrissene. Importer og kall funksjonen på rot i prosjektet ditt (der siden rendres):

```js
import { initTabListener } from "@fremtind/jkl-core";

initTabListener();
```

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
