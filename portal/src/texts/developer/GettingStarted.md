---
title: kom i gang
path: /utvikler/komigang
---

# Slik bruker du Jøkul

Komponentene i Jøkul kan brukes som rene stilark eller som React-komponenter. Alle CSS-stilark finnes i både vanlig og minifisert utgave. Vi anbefaler å bruke den minifiserte i produksjon. Vi tilbyr også hjelpefunksjoner for vanlige utfordringer i både Sass og Javascript.

Dersom du kun bruker stilarkene (f.eks. hvis prosjektet ditt ikke bruker React) må du sørge for å gi komponentene riktig HTML-struktur. Se gjerne på React-implementasjonen, eller inspiser eksemplene i portalen, som referanse.

## Kom i gang med React-komponenter

Hvis du vil ta i bruk en Jøkul React-komponent, trenger du å laste inn både stilen og komponenten. Hvis du har satt opp en CSS-loader i pakkesystemet, kan du kan laste ned stilen direkte i React. Du kan også velge å legge den inn i en av dine `.scss`- eller `.css`-filer.

> For å normalisere stilen og få tilgang til rotstilen, laster du inn `core.min.css` fra `@fremtind/jkl-core`. Det trenger du bare å gjøre én gang i prosjektet ditt.

## Installer avhengigheter

Dersom du bruker React-komponenten installerer du den med `yarn add @fremtind/jkl-accordion-react`. Stilpakken installeres automatisk som avhengighet.

Dersom du kun bruker stilpakken installerer du den med `yarn add @fremtind/jkl-accordion`.

> Vi bruker Yarn for pakkehåndtering i Jøkul. Hvis ditt prosjekt bruker NPM kan du selvfølgelig installere pakkene med `npm i` som vanlig.

## Ta i bruk komponenten

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
