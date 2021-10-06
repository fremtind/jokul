# [`@fremtind/jkl-loader-react`](https://jokul.fremtind.no/komponenter/loader)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/loader).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://jokul.fremtind.no/developer/getting-started/)

## Bruk av React-komponenten

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-loader-react` eller `npm i @fremtind/jkl-loader-react`. Stil-pakken blir automatisk installert som en avhengighet.

2. Importer _både_ React-pakken og stil-pakken i prosjektet ditt:

```js
import { Loader } from "@fremtind/jkl-loader-react";
import "@fremtind/jkl-loader/loader.min.css";
```

### Bruk

Komponenten tar følgende props:

-   `textDescription`: **Påkrevd**. Tekstlig forklaring av innlasting, f.eks. "Laster inn skjema". `string`
-   `negative`: Angir om loaderen skal brukes på mørk bakgrunn. `boolean`
-   `inline`: Angir om loaderen skal brukes inne i et annet element. `boolean`
-   `className`: Eventuell(e) css-klassenavn for komponenten. `string`
-   `politeness`: Sett politeness setting på aria-live. `polite` (default) eller `assertive`.

Den enkleste bruken av komponenten er altså:

```tsx
<Loader textDescription="Laster inn" />
```

Prop'en `className` er praktisk dersom du vil benytte spacing-skalaen vår gjennom hjelpeklassene fra `jkl-core`:

```tsx
<Loader className="jkl-spacing--top-3" /> // Gir 4rem spacing over loaderen
```

Dersom du vil bruke inline loader i knapp har funksjonalitet for det blitt eksponert via props i `jkl-button-react`.
