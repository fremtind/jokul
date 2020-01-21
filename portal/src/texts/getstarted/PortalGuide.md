---
title: portalen
path: /komigang/portalen
order: 6
---

# Dokumentasjon til portalen

For at et designsystem skal fungere, må dokumentasjonen av systemet holde høy kvalitet. Hvis utviklere og designer ikke vet hvilke muligheter og begrensninger som finnes i systemet, kommer man til å gjøre feil og dobbeltarbeid. Vi i kjerneteamet setter stor stolthet i å levere Jøkul med god dokumentasjon. Vi har bygd dokumentasjonsriggen selv for å sikre oss at den gir oss akkurat det vi trenger for Jøkul og for å gjøre utvikleropplevelsen så smidig som mulig. Det skal bare være én kilde til sannhet.

## Komponenteksempler

Eksemplene hentes direkte fra pakken der koden ligger. Det er mulig å kjøre opp eksemplene alene per pakke, eller som en del av portalen. I portalen ligger alle komponentene fra Jøkul dokumentert. Der skal det være

-   fungerende utgave av komponenten i alle fornuftige varianter og statuser
-   beskrivelse av hva komponenten er og hvordan den skal brukes
-   lenke til koden på github (genereres automatisk, se under)

Snakk gjerne med en designer om hvordan du best setter opp eksempelet for å få med alle varianter uten at det blir rotete. Husk at eksempelet skal vises i portalen.

## Slik dokumenterer vi komponentene

For å lage nytt eksempel til portalen oppretter du en `.mdx` fil i `<pakkenavn>/documentation`. MDX er en versjon av [Markdown](https://www.markdownguide.org) som lar deg bygge inn React direkte i dokumentet. MDX-filen vil plukkes opp automatisk av portalen, gitt at den har en `title` definert i [frontmatter](https://www.gatsbyjs.org/docs/adding-markdown-pages/#frontmatter-for-metadata-in-markdown-files) (se under). I tillegg til tittelen forventer portalen å finne pakkenavnet (uten `@fremtind/jkl-`) til stilpakken og React-pakken. Lenker til GitHub genereres automatisk ut fra dette.

Dokumentasjonsfilen til `Accordion` kan for eksempel se ut som dette:

```mdx
---
title: Accordion
scss: accordion
react: accordion-react
---

import Example from "./Example";

<Example />

Her kommer informasjon om bruken av komponenten (kommer fra design), formatert i Markdown.

## Overskrifter må være nivå to eller lavere
```

Det er mulig å hente inn flere eksempler, eller bare komponenten i seg selv, slik at du kan vise enkelteksempler underveis i dokumentasjonen:

```mdx
---
title: Button
scss: button
react: button-react
---

import Example from "./Example";
import { PrimaryButton } from "../src";

<Example /> // Eksempel med alle knappetypene

Litt generell informasjon om knappene

## Primærknapp

Slik kan du bruke primærknappen: <PrimaryButton>Send inn</PrimaryButton> // Rendres som en knapp!
```

Du kan lese mer om MDX og hvordan det brukes på [MDX-prosjektets hjemmeside](https://mdxjs.com/).
