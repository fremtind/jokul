# [`@fremtind/jkl-select-react`](https://jokul.fremtind.no/komponenter/select)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/select).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://jokul.fremtind.no/developer/getting-started/)

## Bruk av React-pakken

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-select-react` eller `npm i @fremtind/jkl-select-react`. Stil-pakken blir automatisk installert som en avhengighet.

2. Importer _både_ React-pakken (velg komponenten(e) du trenger) og stil-pakken i prosjektet ditt:

```js
import { Select, NativeSelect } from "@fremtind/jkl-select-react";
import "@fremtind/jkl-select/select.min.css";
```

### Bruk

De to versjonene av select benytter seg av forskjellige tilnærminger: `Select` konstruerer en nedtrekksliste ved hjelp av JavaScript slik at vi kan gi den stil som matcher den visuelle profilen vår. `NativeSelect` bruker et vanlig `<select>`-element fra HTML. Dette kan være fordelaktig blant annet til lange lister på mobil, for å få brukt den innebygde velgeren i OSet.

Begge variantene kan ta imot et array av `string`-verdier _eller_ et array av `SelectValuePair`-objekter. Dersom du sender inn `string`-verdier blir de brukt som både tekst for valget og som `value` for valgt verdi:

```jsx
const values = ["Leilighet", "Rekkehus", "Enebolig"];

<NativeSelect label="Velg boligtype" values={values} />;

// Slik vil et av de genererte <option>-elementene se ut:
// <option value="Leilighet">Leilighet</option>
```

`SelectValuePair`-objekter har to verdier, `label` og `value`, slik at du kan separere vist tekst fra verdien du behandler i løsningen din. Begge verdiene er `string`-verdier:

```jsx
const valuePairs = [
    { label: "Mindre enn 5 år", value: "0-5" },
    { label: "6 til 10 år", value: "6-10" },
    { label: "Mer enn 10 år", value: "11+" },
];

<NativeSelect label="Hvor lenge har du røyket?" values={valuePairs} />;

// Slik vil et av de genererte <option>-elementene se ut:
// <option value="11+">Mer enn 10 år</option>
```

Håndteringen av `OnChange` vil være litt forskjellig mellom de to variantene av komponenten:

-   `Select` sender kun en `string` med verdien av det valgte elementet
-   `NativeSelect` bruker ren HTML og sender dermed et `ChangeEvent`-objekt

Kontroll av komponenten er også litt forskjellig mellom de to variantene:

-   `NativeSelect` fungerer som en kontrollert komponent via `value`-prop'en
