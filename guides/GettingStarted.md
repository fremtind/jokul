## Komme i gang

Du kan bruke Jøkul på to måter, med rene stilark eller med React-komponenter. Alle CSS-stilark finnes i både vanlig og minifisert utgave. Vi anbefaler å bruke den minifiserte.

### Komme i gang med React-komponenter

Hvis du vil ta i bruk en Jøkul React-komponent, trenger du å laste inn både stilen og komponenten. Hvis du har satt opp en CSS loader i pakkesystemet, kan du kan laste ned stilen direkte i React. Du kan også velge å legge den inn i en av dine `.less`- eller `.scss`-filer.

> For å normalisere stilen og få tilgang til rotstilen, laster du inn `core.min.css` fra `@fremtind/jkl-core`. Det trenger du bare å gjøre en gang.

### Installere avhengigheter

`npm i @fremtind/jkl-accordion @fremtind/jkl-accordion-react`

### Ta i bruk komponenten

```
import "@fremtind/jkl-accordion/accordion.min.css";
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion";

const Component = () => (
    <Accordion>
        <AccordionItem title="Tittel 1">Innhold i første</AccordionItem>
        <AccordionItem title="Tittel 2">Innhold i andre</AccordionItem>
    </Accordion>
);
```
