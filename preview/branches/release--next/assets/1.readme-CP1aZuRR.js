import{j as e}from"./iframe-xAy-jSDa.js";import{useMDXComponents as s}from"./index-fcJLDO16.js";import{b as i,c as o}from"./blocks-FM0gagcM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BaxgQ-xW.js";import"./index-BCIyO_YV.js";import"./index-CrEPdVi8.js";const l=`# @fremtind/jokul

- [Migrering til monopakke](#migrering-til-monopakke)
- [Codemods](#codemods)
- [React-komponenter](#react-komponenter)
- [Stilark](#stilark)
- [Fonter](#fonter)
- [Hooks](#hooks)
- [Utilities](#utilities)
- [Tailwind](#tailwind)

## Migrering til \`@fremtind/jokul\`

Dersom du bruker dagens pakkestruktur med pakker for hver komponent har vi laget en [migrasjonsguide](./MIGRATION.md) for hvordan du går over til å bruke \`@fremtind/jokul\`.

## Codemods

Hvis du oppgraderer til \`5.0.0\` eller nyere kan du bruke codemoden vår for å oppdatere importstier til dagens struktur.

Primær-CLI-et er \`jokul\`, og codemods kjøres som \`jokul codemod\`. Hvordan du starter det avhenger av package manageren din:

\`\`\`bash
# pnpm
pnpm exec jokul codemod --dry-run
pnpm exec jokul codemod

# npm
npx jokul codemod --dry-run
npx jokul codemod

# Valgfritt: begrens kjøringen til bestemte mapper
jokul codemod src app --dry-run
jokul codemod src app
\`\`\`

Codemoden oppdaterer sikre stier automatisk og varsler når den finner tvetydige stilimports for beta-komponenter som må vurderes manuelt. Den fjerner \`@fremtind/jokul/styles/fonts/webfonts.css\`-imports siden \`@font-face\`-definisjonene nå ligger i \`styles/base.css\`, bytter ut det gamle font-family-navnet \`Fremtind Material Symbols\` med \`Jokul Icons\`, og flagger fjernede Sass-fargevariabler, gamle \`light-mode-variables\`/\`dark-mode-variables\`-mixins og utdaterte \`text-style\`-navn (\`"body"\`, \`"small"\`).

## React-komponenter

Alle Jøkul komponenter installeres fra denne pakka.

\`\`\`jsx
import { Feedback } from "@fremtind/jokul/components/feedback";
\`\`\`

For en full liste over komponenter kan du kikke i [components-mappa](src/components/)

## Stilark

Stilarkene i Jøkul tilbys som Sass-filer, og som ferdigbygget CSS i både formatert og minifisert versjon. Vi anbefaler å bruke Sass-versjonene dersom du bruker en bundler, siden det kan optimalisere størrelsen på de ferdige stilene.

Dersom du bruker Vite bør du be bundleren om å bruke det moderne Sass-APIet for å unngå advarsler i konsollen. Det gjør du ved å legge til følgende i \`vite.config.js\`:

\`\`\`js
css: {
    preprocessorOptions: {
        scss: { api: 'modern' },
    },
},
\`\`\`

### Felles stiler

Det finnes en del grunnleggende stiler som må med for at ting skal fungere riktig, disse
kan du importere med

\`\`\`scss
@use "@fremtind/jokul/styles/base";
\`\`\`

eller i ts/js

\`\`\`tsx
// Finnes også ferdig bygget, med filendelsene .css og .min.css
import "@fremtind/jokul/styles/base.scss";
\`\`\`

### Stiler for komponenter

Når du bruker en komponent må du også importere stilen

Dette kan gjøres med

\`\`\`scss
@use "@fremtind/jokul/styles/components/[komponent]";
\`\`\`

eller direkte i tsx der du bruker komponenten

\`\`\`tsx
// Ved å importere _index.scss får du også med stilarkene fra
// eventuelle avhengigheter til komponenten, helt automatisk
import "@fremtind/jokul/styles/components/[komponent]/_index.scss";

// Det finnes også ferdigbygde stilark for komponentene, men
// da får du ikke med stilene til eventuelle avhengigheter
import "@fremtind/jokul/styles/components/[komponent]/[komponent].min.css";
\`\`\`

### Import alle stiler

Du kan importere stilarkene for alle Jøkulkomponentene på en gang med

\`\`\`scss
@use "@fremtind/jokul/styles/components.scss";
\`\`\`

eller i ts/js

\`\`\`tsx
// Finnes også ferdig bygget, med filendelsene .css og .min.css
import "@fremtind/jokul/styles/components.scss";
\`\`\`

Vær obs på at du da kan få med en del mer stilark enn du trenger så vurder dette opp mot
størrelsen på bundelen du sender ut. Bruker du SSR kan dette ende med veldig mye overhead.

## Fonter

### SCSS

Dersom du har valgt å importere alle Jøkul-stiler i forrige steg trenger du bare å gjøre selve font-filene tilgjengelig for nedlasting fra serveren din på path \`/fonts\`. Disse filene vil være
tilgjengelig på _"relative/path/to/node_modules/@fremtind/jokul/src/fonts"_.

Hvis du har valgt å bare ta inn de stilene du faktisk bruker må du sette opp CSS for fontene selv.
Dette gjør du med

\`\`\`scss
// Variabelen \`$webfonts-dir\` angir hvor på disk filene ligger.
// Hvis den ikke spesifiseres vil stilarket se etter fontfilene i mappen \`/fonts\`.
@use "@fremtind/jokul/styles/theme/fonts" with (
    $webfonts-dir: "relative/path/to/node_modules/@fremtind/jokul/src/fonts"
);
\`\`\`

### CSS

Om du ikke bruker Sass kan du bruke CSS-versjonen. Denne versjonen ser **kun** etter fontfilene på URLen \`/fonts\`, så det beste er å sørge for å kopiere fonter på en måte som gjør at de blir tilgjengelig på den URLen.

Om du er nødt til å legge fontfilene et annet sted må \`@font-face\`-definisjonene fra \`node_modules/@fremtind/jokul/styles/base.css\` kopieres inn i prosjektet. Deretter må du endre URLen i hver \`@font-face\`-definisjon manuelt så det stemmer med hvor fontfilene ligger. **Husk at man må gjenta prosessen hver gang man oppdaterer pakken!**

\`\`\`css
@font-face {
    font-family: "Jokul";
    font-display: fallback;
    font-weight: 400;
    font-style: normal;
    /* Endre URLen så den stemmer */
    src: url("/relative/path/to/font/files/InterVariable.woff2") format("woff2");
}
\`\`\`

## SASS mixins

OBS: Vi har et kjent problem med dette i Vite v6, se [#4378](https://github.com/fremtind/jokul/issues/4378)

For å få tilgang til mixins vi tilbyr kan du i din .scss fil bruke

\`\`\`scss
@use "@fremtind/jokul/styles/jkl";
\`\`\`

## Hooks

Hooks importeres via \`/hooks\`-stien.

\`\`\`jsx
import { useAnimatedDetails, useLocalStorage } from "@fremtind/jokul/hooks";
\`\`\`

For en full liste over hooks kan du kikke i [hooks-mappa](src/hooks/)

## Utilities

Utilities importeres via \`/utilities\`-stien.

\`\`\`jsx
import { tabListener, unicode } from "@fremtind/jokul/utilities";
\`\`\`

For en full liste over utilities kan du kikke i [utilities-mappa](src/utilities/)

## Tailwind

Jøkul har støtte for Tailwind gjennom et offisielt preset du kan legge til i Tailwind-konfigurasjonen din.

Hvis du bruker Tailwind sammen med Jøkul anbefaler vi at du [skrur av Tailwind sine egne reset-regler](https://v3.tailwindcss.com/docs/preflight#disabling-preflight) (preflight), ettersom de kan overskrive Jøkul sine egne grunnstiler.

### Versjon 3

Dersom du bruker versjon 3 av Tailwind kan du legge til vårt preset i konfigurasjonen på denne måten:

\`\`\`ts
import { jokulPreset } from "@fremtind/jokul/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
    presets: [jokulPreset],
    // Dine tilpasninger og tema her
};
\`\`\`

### Versjon 4

Dersom du bruker versjon 4 av Tailwind laster du inn vårt theme rett etter importen av Tailwind:

\`\`\`css
@import "tailwindcss";
@import "@fremtind/jokul/styles/tailwind";
\`\`\`

### Farger

Preset-et kommer med alle semantiske farger fra Jøkul definert. Vi anbefaler å bruke Tailwind sin plugin til VSCode eller IntelliJ for å få autocomplete for farger og andre verdier i preset-et.

\`\`\`html
<main class="bg-background-page">
    <h1 class="text-text-default">Hei, Tailwind!</h1>
    <div class="bg-background-container-low">
        <p class="text-text-subdued">Shhh...</p>
    </div>
</main>
\`\`\`

### Spacing

Alle steg i spacing-skalaen til Jøkul er tilgjengelige alle steder der avstander brukes i Tailwind. Sammen med breakpoints (fra Jøkul eller egne) kan du lage dynamisk spacing.

\`\`\`html
<h1 class="heading-1 mt-24 md:mt-40">Hei, Tailwind!</h1>
\`\`\`

### Typografi

Preset-en inkluderer også hjelpeklasser for alle tekststilene i Jøkul via en plugin. Denne er automatisk lastet inn dersom du bruker \`jokulPreset\`.

\`\`\`html
<h1 class="title">Min Tailwind-applikasjon</h1>
<p class="body">Lorem ipsum…</p>
\`\`\`

I tillegg finnes verdier for fontvekt og -størrelse, og for linjehøyder fra skalaen til Jøkul.

\`\`\`html
<p>Dette er <em class="font-bold">veldig</em> viktig</p>
\`\`\`
`;function r(n){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Om Jøkul"}),`
`,e.jsx(o,{children:l})]})}function g(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r()}export{g as default};
