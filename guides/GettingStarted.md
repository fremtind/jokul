## Kom i gang

Jøkul kan brukes på to måter, rene stilark eller React komponenter. Alle css-stilark kommer både vanlig og minifisert. Vi anbefaler å bruke den minifiserte.

### Quick start

For å ta ibruk en Jøkul React komponent så trenger man å laste inn både stil og komponent. Stilen kan lastes direkte i React om man har satt opp en css loader i pakke systemet, eller det kan legges inn i en av dine `.less` eller `.scss` filer.

> Du bør `core.min.css` fra `@fremtind/jkl-core` for å få normalisert stilen og få tilgang på rot-stil. Trenger bare gjøres en gang.

### Installer avhengigheter

`npm i @fremtind/jkl-accordion @fremtind/jkl-accordion-react`

### Ta i bruk komponenten

```tsx
import "@fremtind/jkl-accordion/accordion.min.css";
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion";

const Component = () => (
    <Accordion>
        <AccordionItem title="Tittel 1">Innhold i første</AccordionItem>
        <AccordionItem title="Tittel 2">Innhold i andre</AccordionItem>
    </Accordion>
);
```
