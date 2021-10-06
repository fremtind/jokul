# [`@fremtind/jkl-progress-bar-react`](https://jokul.fremtind.no/komponenter/progessbar)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/progessbar).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://jokul.fremtind.no/developer/getting-started/)

## Bruk av React-pakken

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-progress-bar-react` eller `npm i @fremtind/jkl-progress-bar-react`. Stil-pakken blir automatisk installert som en avhengighet.
2. Importér _både_ React-pakken og stil-pakken i prosjektet ditt:

```js
import { ProgressBar } from "@fremtind/jkl-progress-bar-react";
import "@fremtind/jkl-progress-bar/checkbox.min.css";
```

### Bruk

Brukes for å indikere til brukeren hvor langt i en prosess man er kommet. Bør ikke brukes på korte operasjoner, da det kan gi signal om at det kan ta lang tid å gjøre seg ferdig.

`ProgressBar` tar et `progress` objekt med `current` som indikerer nåverdi og `total` som er ferdigtilstand(100%).

```jsx
<ProgressBar progress={{ current: 50, total: 100 }} />
```

Hvis man ikke angir `progressTextValue` vil skjermlesere lese opp prosenten, om man legger ved en rolle, så vil den isteden lese teksten.
