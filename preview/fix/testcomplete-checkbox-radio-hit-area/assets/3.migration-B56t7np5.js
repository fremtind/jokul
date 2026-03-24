import{j as e}from"./iframe-BSEGZWwn.js";import{useMDXComponents as i}from"./index-CmVm-Ls-.js";import{b as s,c as o}from"./blocks-DOxZv460.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BTQ5OP-v.js";import"./index-CcS-0AP5.js";import"./index-BDMvNCm0.js";const a=`# Migrasjonsguide

## Jøkul 4.0

### Density-modusene er fjernet til fordel for size-moduser

Tidligere kalte vi størrelsesdimensjonen density, i tillegg til at fontstørrelsene endret seg avhengig av skjermstørrelser.

Nå bruker vi ordet size for å gjøre det tydeligere at det som endrer seg er komponentenes størrelse, og ikke den faktiske tettheten i grensesnittet.

Selv om disse konseptene ikke er helt like så kan du som regel bytte ut \`data-density="compact"\` med \`data-size="small"\`.

- [Les mer om endringene her](https://jokul-portal.intern.app.prodaws.fremtind.no/fundamenter/storrelser).
- [Se oversikt over tokens for avstander her](https://jokul-portal.intern.app.prodaws.fremtind.no/fundamenter/avstander).

Før:
\`\`\` ts
data-density="compact"
// Eller
data-layout-density="compact"
\`\`\`

Etter:

\`\`\` ts
data-size="small"
\`\`\`

#### Komponenter har mistet størrelse som prop

Langtlevende komponenter har hatt mulighet for å sette density som en prop. Dette er fjernet til fordel for data-attributter. **Sett \`data-size\` på seksjoner med innhold**.

Før:
\`\`\` ts
<section/div/article>
    ...
    <Button density="compact">Klikk på meg</Button>
    ...
</section/div/article>
\`\`\`

Etter:

\`\`\` ts
<section/div/article data-size="small">
    ...
    <Button>Klikk på meg</Button>
    ...
</section/div/article>
\`\`\`

### Endrede typografi-tokens gir endringer i mixin-parametre

Der du har brukt \`body\` eller \`small\`, må du nå velge mellom en variant av paragraph eller text.

**Hva som skal brukes ser du i [oversikten i portalen](https://jokul-portal.intern.app.prodaws.fremtind.no/fundamenter/typografi)**, men i korte trekk:

- Dersom du har brukt mixinen vår, men gjort linjehøyden mindre er det mest sannsynlig text og ikke paragraph som skal brukes.
- Dersom du har overskrevet størrelsen på teksten til å være mindre enn 16px skal du nå bruke micro.
- Dersom du er usikker: kontakt en designer på teamet ditt, eller Jøkul-teamet.

Før:
\`\`\` css
@includes jkl.text-style("body");
@includes jkl.text-style("small");
\`\`\`

Etter:
\`\`\` css
@includes jkl.text-style("paragraph-medium");
@includes jkl.text-style("paragraph-small");

// Eller
@includes jkl.text-style("text-medium");
@includes jkl.text-style("text-small");
@includes jkl.text-style("text-micro");
\`\`\`

### Beta-komponenter blir stabile

Betakomponentene prefixes med <code>BETA_</code> for å gjøre det enkelt å finne. For å bruke stabile komponenter må du derfor fjerne prefixen. Dette gjelder:

- Search
- Table of Contents

Før:
\`\`\` ts
<BETA_Search ...
<BETA_TableOfContents ...
\`\`\`

Etter:
\`\`\` ts
<Search ...
<TableOfContents ...
\`\`\`

#### Link List variant="ordered" erstattet med Table of Contents

Beta-versjonen av \`LinkList\` er tatt inn som stabil.

- Der du tidligere brukte \`variant="ordered"\` bruker du nå den nye komponenten TableOfContents.

Før:
\`\`\`tsx
<LinkList variant="ordered">
    <LinkList.Item>
        <LinkList.Link href="#">
            Lenketekst
        </LinkList.Link>
    </LinkList.Item>
</LinkList>
\`\`\`

Etter:
\`\`\`tsx
<TableOfContents>
    <TableOfContents.Link href="#">
        Lenketekst
    </TableOfContents.Link>
</TableOfContents>
\`\`\`

- Der du tidligere brukte \`variant="unordered"\`, eller uten å sette \`variant\`, bruker du den nå alltid uten \`variant\`.

Før:
\`\`\`tsx
<LinkList variant="unordered">
    <LinkList.Item>
        <LinkList.Link href="#">
            Lenketekst
        </LinkList.Link>
    </LinkList.Item>
</LinkList>
\`\`\`

Etter:
\`\`\`tsx
<LinkList>
    <LinkList.Link href="#">
        Lenketekst
    </LinkList.Link>
</LinkList>
\`\`\`

#### Beta-varianten av Description List droppes

Vi har ikke vært så fornøyd med APIet i \`BETA_DescriptionList\`, og har derfor valgt å droppe denne. Den stabile versjonen av \`DescriptionList\` er beholdt. Utseende og ny funksjonalitet fra beta-varianten er tatt med inn i den stabile varianten.

Hvis du ikke har tatt i bruk \`BETA_DescriptionList\` trenger du ikke gjøre noen endringer.

Hvis du **har** tatt i bruk \`BETA_DescriptionList\`, kan du bytte til \`DescriptionList\` på følgende måte:

\`\`\`tsx
// Før:
<BETA_DescriptionList alignment="justified" showSeparators={true}>
    <BETA_DescriptionList.Item
        title="Dekning"
        value="Kasko"
    />
    <BETA_DescriptionList.Item
        title="Egenandel"
        value={["2 000 kr for glass", "6 000 kr for øvrige skader"]}
    />
</BETA_DescriptionList>

// Etter:
<DescriptionList alignment="justified" separators={true}>
    <DescriptionTerm>Dekning</DescriptionTerm>
    <DescriptionDetail>Kasko</DescriptionDetail>

    <DescriptionTerm>Egenandel</DescriptionTerm>
    <DescriptionDetail>2 000 kr for glass</DescriptionDetail>
    <DescriptionDetail>6 000 kr for øvrige skader</DescriptionDetail>
</DescriptionList>
\`\`\`

## Oppgradering av Jøkul til versjon 1.x.x

Dette dokumentet inneholder teknisk dokumentasjon av endringer fra siste stabile 0.x.x-versjon som vil kreve kodeendringer ved oppgradering til versjon 1.x.x. Eventuelle visuelle endringer i komponentene vil ikke beskrives her, da disse allerede er representert i skissene i Figma. Det vil heller ikke tas med ny funksjonalitet dersom den ikke er påkrevd i bruk. Se dokumentasjonen til hver enkelt komponent for oppdatert informasjon om komponentenes funksjonalitet.

### BulletList

Pakkene \`@fremtind/jkl-bullet-list\` og \`@fremtind/jkl-bullet-list-react\` finnes ikke lenger, og er erstattet av \`@fremtind/jkl-list\` og \`@fremtind/jkl-list-react\`. Der du tidligere har brukt komponenten \`<BulletList>\` skal du nå bruke \`<UnorderedList>\`. Det er i tillegg lagt til en \`<OrderedList>\`-komponent. Listene brukes ellers på samme måte som tidligere.

### Dropdown/Select

Pakkene \`@fremtind/jkl-dropdown\` og \`@fremtind/jkl-dropdown-react\` finnes ikke lenger, og er erstattet av \`@fremtind/jkl-select\` og \`@fremtind/jkl-select-react\`. Komponenten \`<Select>\` erstatter \`<Dropdown>\`. Om du tidligere har brukt \`<Select>\` for å få ut et vanlig \`<select>\` HTML-element må du nå bruke \`<NativeSelect>\`.

Prop-en \`initialInputValue\` er tatt vekk og erstattet med \`value\`, slik at komponenten kan brukes kontrollert. Dette sikrer også lik bruk i \`<Select>\` og \`<NativeSelect>\`.

### Logo

I \`<LogoAnimated>\`-komponenten har prop-en \`showSymbol\` blitt omdøpt til \`isSymbol\`.

### RadioButton

Hovedkomponenten for bruk av radio buttons har skiftet navn til \`<RadioButtons>\`. Den brukes ellers likt som før.

### TextField

Varianten \`<TextField inline />\` er erstattet av \`<InlineTextField>\`. Denne komponenten tar ikke lenger inn \`errorLabel\` eller \`helpLabel\`. Om det skal vises error state kan man bruke den nye prop-en \`invalid\`


Ting å passe på når man går over fra gammel pakkestruktur til monopakke

## Vi er en ren ESM-modul

Før du begynner å bruke pakken bør du sette deg inn i hva dette har å si i praksis:

https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

### Core

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

### Fonter

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

### Komponenter

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


#### Autosuggest

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

#### ExpandButton

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

#### Icons

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
`;function r(n){return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Migrering"}),`
`,e.jsx(o,{children:a})]})}function c(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r()}export{c as default};
