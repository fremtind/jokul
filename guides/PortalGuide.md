# Portal guide

## Jøkul portal

For at et designsystem skal fungere, må dokumentasjonen av system holde høy kvalitet. Hvis utviklere og designer ikke vet hvilke muligheter og begrensninger som finnes i systemet, så kommer man til å gjøre feil og dobbeltarbeid. Vi i kjerneteamet setter stor stolthet i å levere Jøkul med god dokumentasjon. Vi har bygd dokumentasjonsriggen selv for å sikre oss at den gir oss akkurat det vi trenger for Jøkul. Systemet baserer seg på [gatsby](https://www.gatsbyjs.org/), [react-live](https://github.com/FormidableLabs/react-live) og markdown. De aller fleste tekster hentes fra markdown-filer i prosjektet for å senke terskelen for at alle skal kunne bidra til dokumentasjonen.

### Komponent eksempler

Under komponenter seksjonen ligger alle komponentene fra Jøkul dokumentert. Der skal det være:

-   fungerende utgave av komponenten i alle fornuftige statuser
-   beskrivelse av hva komponenten er og hvordan den skal brukes
-   eksempel kode som kan endres på
-   type informasjon
-   import informasjon
-   endringslogg for pakkene
-   lenke til koden på github
-   vise design av komponenten med dyplenke til figma

For å legge til et nytt eksempel, lag en ny fil med samme navn som pakken til komponenten under `/src/pages/components`. Den skal laste inn `README.md` fra _stil-pakken_, og `CHANGELOG.md` fra alle relevante pakker. Husk å sette tittel på komponenten i `ComponentLayout`.

```
import React from "react";
import ReactMarkdown from "react-markdown";

import { ComponentLayout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { KomponentExample } from "../../examples";

// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-komponent/README.md";
// @ts-ignore
import changelog from "!raw-loader!@fremtind/jkl-komponent/CHANGELOG.md";
// @ts-ignore
import changelogReact from "!raw-loader!@fremtind/jkl-komponent-react/CHANGELOG.md";

export default function KomponentPage() {
    return (
        <ComponentLayout title="Komponent" mainExample={<KomponentExample />} packageName="komponent">
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </ComponentLayout>
    );
}
```

> Husk å legg til komponenten din i `/src/components/index.tsx` for at den skal dukke opp i Alle komponenter lenken

Selve eksemplet ligger under `/src/examples`. Legg til en ny fil her `KomponentExample.tsx`. Legg merke til at enkelte av filene, som markdown og definisjonsfila lastes inn med `raw-loader`, dette er for at webpack ikke skal gjøre noe med fila, dermed kan vi selv ta ansvar for at fila blir parset på den måten vi ønsker.

```
import React from "react";
import { Example } from "../components";
import { Komponent } from "@fremtind/jkl-komponent-react";
import "@fremtind/jkl-komponent/komponent.min.css";
import "@fremtind/jkl-core/core.min.css";
// @ts-ignore
import type from "!raw-loader!@fremtind/jkl-komponent-react/build/Komponent.d.ts";

const example = `<Komponent>
    innhold i komponenten
</Komponent>`;

const exampleImport = `import { Komponent } from "@fremtind/jkl-komponent-react";
import "@fremtind/jkl-komponent/komponent.min.css";`;

const CheckboxExample = () => (
    <Example
        exampleComponents={{ Komponent }}
        exampleCode={example}
        type={type}
        exampleImport={exampleImport}
    />
);

export default CheckboxExample;
```

Her laster du inn alt du trenger for å rendre komponenten, som feks tilhørende css-fil. Typen eller typene om det er flere komponenter lastes inn fra definisjonsfila, så vil eksempelkomponenten håntere parsing til et fornuftig format. Selve eksemplet er en template literal med koden. Viktig er at alle react komponenter som taes i bruk må sendes inn i exampleComponents for at de skal bli importert riktig. Om du trenger tilgang til feks `useState` hooken for å vise eksemplet ditt så kan du gjøre det med:

```
const example = `() => {
    const [state, setState] = React.useState({});

    return (<Komponent>
        innhold i komponenten
    </Komponent>
)}`;
```

> Husk å legge til eksempelkomponenten din i `index.ts`

Sist men ikke minst så ønsker du sannsynligvis at komponenten din skal være synlig i menyen, det gjøres ved å legge den til i `/src/components/Menu/links.ts`.

```
export const componentLinks = [
    ...,
    makeComponentLink("Komponent", "komponent"),
];
```

> Visste du at ved å henge på ?fullscreen bak komponenten i urlen, så får du kun komponenten? Feks: https://fremtind.github.io/jokul/components/button/?fullscreen
