# [`@fremtind/jkl-loader-react`](https://fremtind.github.io/jokul/loader-react/documentation/Loader/)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://fremtind.github.io/jokul/loader-react/documentation/Loader/).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://fremtind.github.io/jokul/developer/getting-started/)

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

Den enkleste bruken av komponenten er altså:

```tsx
<Loader textDescription="Laster inn" />
```

Dersom du for eksempel vil bruke loaderen inne i en primærknapp kan det gjøres på denne måten:

```tsx
<PrimaryButton>
    <Loader inline negative textDescription="Sender inn skjema" />
</PrimaryButton>
```

Prop'en `className` er praktisk dersom du vil benytte spacing-skalaen vår gjennom hjelpeklassene fra `jkl-core`:

```tsx
<Loader className="jkl-spacing--top-3" /> // Gir 4rem spacing over loaderen
```
