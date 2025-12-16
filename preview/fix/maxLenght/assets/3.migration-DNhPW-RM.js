import{j as n}from"./iframe-DvP7N9Q0.js";import{useMDXComponents as o}from"./index-BXyWImzB.js";import{b as i,c as s}from"./blocks-CyYWSu9n.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BA2bvFDM.js";import"./index-DyT7yAgX.js";import"./index-B9ZglBjW.js";const m=`# Migrasjonsguide

Ting å passe på når man går over fra gammel pakkestruktur til monopakke

## Vi er en ren ESM-modul

Før du begynner å bruke pakken bør du sette deg inn i hva dette har å si i praksis:

https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

## Core

Det første som bør gjøres er å bytte bort fra \`@fremtind/jkl-core\`. Dette fordi flere
av komponentene i monopakka ikke vil fungere med den gamle core-pakka.

Der man bruker jkl-mixins i SCSS må importen endres

\`\`\`diff
- @use "@fremtind/jkl-core/jkl";
+ @use "@fremtind/jokul/styles/core/jkl";
\`\`\`

For basis stilene i core

\`\`\`diff
- @use "@fremtind/jkl-core/core";
+ @use "@fremtind/jokul/styles/core/core";
\`\`\`

Hvis man bruker Link/NavLink komponentene i løsningen må imports også endres for disse
siden de ikke lenger er en del av core

\`\`\`diff
- import { Link, NavLink } from "@fremtind/jkl-core";
+ import { Link, NavLink } from "@fremtind/jokul/link";
\`\`\`

og i tillegg må man nå også spesifikt importere stilene til lenker side de heller ikke
lenger er en del av core

\`\`\`diff
+ @use "@fremtind/jokul/styles/components/link";
\`\`\`

Dersom man bruker ScreenReaderOnly må denne importen oppdateres

\`\`\`diff
- import { ScreenReaderOnly } from "@fremtind/jkl-core";
+ import { ScreenReaderOnly } from "@fremtind/jokul/screen-reader-only";
\`\`\`

Dersom man bruker TS hjelpeklasser som feks \`WithChildren\`

\`\`\`diff
- import type { WithChildren } from "@fremtind/jkl-core";
+ import type { WithChildren } from "@fremtind/jokul/core";
\`\`\`

## Fonter

Tidligere lå font-filer tilgjengelig på stien
\`node_modules/@fremtind/jkl-webfonts/fonts/\`
mens de nå er flyttet til
\`node_modules/@fremtind/jokul/src/fonts/\`

Dersom du har script som kopierer font-filer må disse oppdateres med ny path

SCSS for å dra inn stilene på oppdateres

\`\`\`diff
- @use "@fremtind/jkl-webfonts/webfonts";
+ @use "@fremtind/jokul/styles/fonts/webfonts";
\`\`\`

Hvis du sender inn \`$webfonts-dir\` variabelen er det også her path må oppdateres.

## Komponenter

Med noen unntak gjøres dette på samme måte for alle:

1. Import av React komponent endres
\`\`\`diff
- import { Feedback } from "@fremtind/jkl-feedback-react";
+ import { Feedback } from "@fremtind/jokul/feedback";
\`\`\`
2. Import av styling endres
\`\`\`diff
- @use "@fremtind/jkl-feedback/feedback";
+ @use "@fremtind/jokul/styles/components/feedback";
\`\`\`

Les mer om hvordan du bruker stilark i \`@fremtind/jokul\` i [README-filen](./README.md#stilark)


### Autosuggest

Komponenten er flyttet ut fra TextInput

Import av React komponent endres

\`\`\`diff
- import { Autosuggest } from "@fremtind/jkl-text-input-react";
+ import { Autosuggest } from "@fremtind/jokul/autosuggest";
\`\`\`

Import av styling

\`\`\`diff
+ @use "@fremtind/jokul/styles/components/autosuggest";
\`\`\`

### ExpandButton

ExpandButton har blitt renamet til Expander

Import av React komponent endres

\`\`\`diff
- import { ExpandButton } from "@fremtind/jkl-expand-button-react";
+ import { Expander } from "@fremtind/jokul/expander";
\`\`\`

Import av styling endres

\`\`\`diff
- @use "@fremtind/jkl-expand-button/expand-button";
+ @use "@fremtind/jokul/styles/components/expander";
\`\`\`

Prop \`density\` er fjernet, her kan man heller bruke \`data-density\` HTML attributet.

Prop \`hideLabel\` er fjernet, ønskes en skjult label kan \`aria-label\` brukes i
stedet for \`children\`.

Komponenten har blitt polymorf og dermed fått en \`as\` prop. Typing
av \`onClick\` on \`onKeyDown\` vil da være avhengig av hva som sendes inn her.

### Icons

Icons har blitt entallifisert og heter nå Icon

Import av React komponent endres

\`\`\`diff
- import { CloseIcon } from "@fremtind/jkl-icons-react";
+ import { CloseIcon } from "@fremtind/jokul/icon";
\`\`\`

Import av styling endres

\`\`\`diff
- @use "@fremtind/jkl-icons/icons";
+ @use "@fremtind/jokul/styles/components/icon";
\`\`\`
`;function t(e){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Migrering"}),`
`,n.jsx(s,{children:m})]})}function c(e={}){const{wrapper:r}={...o(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(t,{...e})}):t()}export{c as default};
