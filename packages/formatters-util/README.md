# [`@forbrukerradet/jkl-formatters-util`](https://jokul.fremtind.no/komponenter/formatters)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/formatters).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://jokul.fremtind.no/developer/getting-started/)

## Bruk av pakken

### Installasjon

1. Installér pakken med `yarn add @forbrukerradet/jkl-formatters-util` eller `npm i @forbrukerradet/jkl-formatters-util`.
2. Importér pakken i prosjektet ditt:

### Bruk

```js
import {
    formatNumber,
    formatFodselsnummer,
    formatKontonummer,
    formatKortnummer,
    formatTelefonnummer,
    formatAvstand,
    formatValuta,
} from "@forbrukerradet/jkl-formatters-util";

const formatertTelefonnummer = formatTelefonnummer("81549300");
```
