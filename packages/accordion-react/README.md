# [`@fremtind/jkl-accordion-react`](https://fremtind.github.io/jokul/komponenter/accordion)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://fremtind.github.io/jokul/komponenter/accordion).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://fremtind.github.io/jokul/developer/getting-started/)

## Bruk av React-pakken

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-accordion-react` eller `npm i @fremtind/jkl-accordion-react`. Stil-pakken blir automatisk installert som en avhengighet.

2. Importer _både_ React-pakken (velg komponenten(e) du trenger) og stil-pakken i prosjektet ditt:

```js
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";
import "@fremtind/jkl-accordion/accordion.min.css";
```

### Bruk

En enkel bruk av `Accordion` kan se slik ut:

```jsx
<Accordion>
    <AccordionItem title="Accordion #1">Her er det som går inni accordion. Det kan være så mangt.</AccordionItem>
    <AccordionItem title="Accordion #2">Her er annet innhold til accordion.</AccordionItem>
</Accordion>
```

Merk at `AccordionItem` kan ha annet innhold enn ren tekst. Komponenten tar inn prop-en `children` som er av typen `ReactNode.`

Dersom det er ønskelig at komponenten er utvidet når komponenten lastes inn kan prop-en `startExpanded` benyttes.
