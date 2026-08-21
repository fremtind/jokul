# Migrasjonsguide

## Innhold

- [Migrering til Jøkul 6](#jøkul-60)
- [Migrering til Jøkul 5](#jøkul-50)
- [Migrering til Jøkul 4](#jøkul-40)
- [Oppgradering av Jøkul til versjon 1.x.x](#oppgradering-av-jøkul-til-versjon-1xx)

## Tilgjengelige codemods

```bash
pnpm exec jokul codemod [--dry-run] [--verbose] [sti ...]
```

Se [codemods/CODEMODS.md](./codemods/CODEMODS.md) for full oversikt over hva hver codemod fikser automatisk og hva som krever manuell vurdering.

## Jøkul 6.0

### `DateInput` bygger på native `<input type="date">`

`DateInput` er skrevet om fra bunnen. Kalenderen er skilt ut i en egen intern `Calendar`-komponent, og selve feltet bruker nå nettleserens native datofelt. Det gir bedre tilgjengelighet og mobilstøtte, men endrer API-et.

#### Nytt datoformat: ISO (`yyyy-mm-dd`)

`value`, `defaultValue`, `min` og `max` er nå ISO-strenger, ikke `dd.mm.yyyy`.

```tsx
// Før
<DatePicker defaultValue="24.12.2019" />

// Etter
<DateInput defaultValue="2019-12-24" />
```

#### Nye stilimporter

> **Codemoden fikser dette automatisk.**

Den publiserte stilmappa het `datepicker` og finnes ikke lenger. Både mappe- og filnavn er omdøpt:

```scss
// Før
@use "@fremtind/jokul/styles/components/datepicker";
@use "@fremtind/jokul/styles/components/datepicker/datepicker.scss";

// Etter
@use "@fremtind/jokul/styles/components/date-input";
@use "@fremtind/jokul/styles/components/date-input/date-input.scss";

// Før
import "@fremtind/jokul/styles/components/datepicker/_index.scss";
import "@fremtind/jokul/styles/components/datepicker/datepicker.min.css";

// Etter
import "@fremtind/jokul/styles/components/date-input/_index.scss";
import "@fremtind/jokul/styles/components/date-input/date-input.min.css";
```

#### `min`/`max` erstatter `disableBeforeDate`/`disableAfterDate`

| Før | Etter              |
|---|--------------------|
| `disableBeforeDate={formatInput(date)}` | `min="2026-07-22"` |
| `disableAfterDate={formatInput(date)}` | `max="2027-07-22"` |

#### `onChange`, `onFocus` og `onBlur` gir vanlige React-eventer

Tidligere fikk du `(event, date, { error, value })` i alle tre. Nå er de vanlige React-handlere som kun får `event`, og datoen leses fra `event.target.value` som en ISO-streng (tom streng når feltet er tomt).

```tsx
// Før
<DatePicker
onChange={(event, date, { error }) => {
if (!error) setDate(date);
}}
/>

// Etter
<DateInput
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>
```

Feilkodene `WRONG_FORMAT`, `OUTSIDE_LOWER_BOUND` og `OUTSIDE_UPPER_BOUND` finnes ikke lenger. Grenser håndteres av `min`/`max` på det native feltet, og feilmeldinger settes med `errorLabel`.

#### Fjernede props og hjelpefunksjoner

| Fjernet | Erstatning |
|---|---|
| `disableBeforeDate` (norsk format) | `min` (ISO-format) |
| `disableAfterDate` (norsk format) | `max` (ISO-format) |
| `defaultShow` / `initialShow` | – Kalenderen er en popover som åpnes med kalenderknappen |
| `extended` | – Kalenderen har alltid måneds- og årsvelger |
| `invalid` | `errorLabel` – setter både `aria-invalid` og feilstilen på feltet |
| `yearsToShow` | – Årsvelgeren utledes fra `min`/`max`, med ±5 år som standard |
| `months` | – Månedsnavn kommer fra `Intl` med `nb-NO` |
| `days` | – Ukedagsnavn kommer fra `Intl` med `nb-NO`, uken starter mandag |
| `monthLabel` / `yearLabel` | – Velgerne har faste, skjulte labels («Måned» og «År») |
| `showCalendarLabel` / `hideCalendarLabel` | – Kalenderknappen har fast `aria-label` «Åpne kalender». Kalenderen lukkes med `Esc` eller klikk utenfor |
| `action` | – Egne handlinger må plasseres utenfor feltet |
| `textInputProps` | Send attributtene direkte på `<DateInput>` – ukjente props videresendes til `<input type="date">` |
| Kompakt inntasting (`11112022`) og auto-punktum | Native inntasting i nettleseren |
| `formatInput(date)` | `toValidInputValue(date)` |

### `Flex` er forenklet til en ren flex-container

`Flex` eksponerer nå flexbox-egenskapene direkte, i stedet for å generere et eget klassesystem med kolonneoppsett og breakpoints. Stilarket er dermed redusert fra rundt 460 genererte regler til under 20. Ingen av endringene fanges av codemoden fordi funksjonene som har meningsfulle endringer ble så lite brukt.

#### `layout` og `fill` er fjernet

Kolonnesystemet med 12 kolonner, uniforme oppsett (`"3"`) og asymmetriske oppsett (`"4.8"`) er tatt ut. `Flex` styrer flexbox-egenskaper, ikke bredden på barna. Bruk CSS Grid, som løser dette bedre enn `flex-basis`-utregningen gjorde:

```tsx
// Før
<Flex layout={{ small: "1", large: "3" }} gap="m">

// Etter
<div className="grid">
```

```scss
.grid {
    display: grid;
    gap: var(--jkl-spacing-m);
    grid-template-columns: 1fr;

    @include jkl.from-large-device {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

`fill` erstattes med `flex: 1` på elementet som skal fylle resten av plassen.

#### `gap` er forenklet til én streng

`gap` tar én verdi. Objektsyntaksen med breakpoints er fjernet sammen med resten av breakpoint-genereringen. Enkeltverdier og to-verdi-syntaksen er uendret.

```tsx
// Før
<Flex gap={{ small: "s", large: "xl" }}>

// Etter
<Flex className="rad">
```

```scss
.rad {
    gap: var(--jkl-spacing-s);

    @include jkl.from-large-device {
        gap: var(--jkl-spacing-xl);
    }
}
```

#### Ingen standardverdier for `gap` og `wrap`

`Flex` la tidligere på `gap="m"` og `flex-wrap: wrap` uten at du ba om det. Nå gjelder CSS-ens egne initialverdier: ingen avstand og ingen linjebryting. **Dette endrer utseendet på eksisterende kode uten at du får noen feilmelding.**

```tsx
// Før — ga avstand og linjebryting automatisk
<Flex>

// Etter — sett verdiene eksplisitt
<Flex gap="m" wrap>
```

Samtidig er to feil rettet, som også kan endre utseendet:

| Verdi | Før | Etter |
|---|---|---|
| `wrap={false}` | Ingen effekt, innholdet brøt likevel | `nowrap` |
| `wrap="reverse"` | Ingen effekt | `wrap-reverse` |

#### De genererte hjelpeklassene finnes ikke lenger

`Flex` rendrer nå kun klassen `jkl-flex`. Klassenavnene var globale og uprefiksede, så det er verdt å søke etter dem i egne stilark selv om du ikke har brukt dem bevisst.

| Fjernet klasse | Erstatning |
|---|---|
| `align-items-*`, `align-content-*` | `alignItems` / `alignContent` |
| `justify-content-*` | `justifyContent` |
| `flex-direction-*`, `flex-wrap-*` | `direction` / `wrap` |
| `screen-<breakpoint>-row-gap-*`, `screen-<breakpoint>-col-gap-*` | `gap`, eller eget stilark |
| `screen-<breakpoint>-<layout>` | CSS Grid, se over |
| `display-inline-flex` | Eget stilark |

#### Stilene settes inline

Verdiene settes som custom properties i `style`-attributtet:

```html
<div class="jkl-flex" style="--gap: var(--jkl-spacing-m); --flex-direction: column"></div>
```

Har du en streng `Content-Security-Policy`, må `style-src` tillate `unsafe-inline`, eller du må sende nonce/hash for inline-stiler. Overstyring gjøres ved å sette custom propertyene selv:

```scss
.min-flex {
    --gap: var(--jkl-spacing-xl);
}
```

#### Spacing-verdier uten tokens er fjernet

`20`, `28`, `48`, `56`, `72` og `80` var gyldige i typen, men hadde aldri noen tilsvarende `--jkl-spacing-*`-token og ga derfor aldri noen avstand. Nå får du en typefeil i stedet for stille feil oppførsel. Rund av til nærmeste steg i skalaen:

```tsx
// Før — kompilerte, men ga ingen avstand
<Flex gap="20">

// Etter
<Flex gap="16">
```

Typen avledes nå direkte fra designtokenene, så den kan ikke lenger komme i utakt med skalaen.

## Jøkul 5.0

Jøkul 5.0 rydder opp i token-strukturen, fontoppsettet og importstiene. De fleste endringene kan gjøres automatisk med codemoden:

```bash
pnpm exec jokul codemod --dry-run
pnpm exec jokul codemod
```

Codemoden fikser importstier, CSS-tokens og Tailwind-klasser automatisk, og varsler der endringer krever manuell vurdering. Seksjonene nedenfor merker hva som faller i hvilken kategori.

### Nye importstier for stilark og Sass-hjelpere

> **Codemoden fikser dette automatisk.**

| Funksjon | Gammel import | Ny import |
|---|---|---|
| Grunnstiler | `@fremtind/jokul/styles/core` | `@fremtind/jokul/styles/base.scss` |
| Stilark for ALLE komponenter | `@fremtind/jokul/styles` | `@fremtind/jokul/styles/components.scss` |
| Sass-hjelpere | `@fremtind/jokul/styles/core/jkl` | `@fremtind/jokul/styles/jkl` |
| Webfonts (SCSS) | `@fremtind/jokul/styles/fonts/webfonts` | `@fremtind/jokul/styles/theme/fonts` |
| Webfonts (CSS) | `@fremtind/jokul/styles/fonts/webfonts.css` | _Fjern importen_ — fontene er nå inkludert i `base.css` |
| Tailwind v3 preset | `@fremtind/jokul/tailwind` | `@fremtind/jokul/tailwind` _(uendret)_ |
| Tailwind v4 theme | `@fremtind/jokul/tailwind/v4` | `@fremtind/jokul/styles/tailwind` |

Stilene som tidligere lå i `styles/fonts/webfonts` er nå inkludert i `styles/base.scss`, så hvis du bruker grunnstilene trenger du ikke importere font-stilene separat.

### Beta-komponenter har egne stilark

> **Codemoden fikser dette automatisk** når beta-komponenten brukes i samme fil som stilimporten. Hvis filen kun har stilimporten uten å importere React-komponenten varsler codemoden og ber om manuell vurdering.

Stilarkene for beta-komponentene var tidligere bakt sammen med sine ikke-Beta varianter. De er nå eksportert for seg.

| Komponent | Gammel import | Ny import |
|---|---|---|
| Description List | `@fremtind/jokul/styles/components/description-list` | `@fremtind/jokul/styles/components/beta/description-list.scss` |
| Nav Link | `@fremtind/jokul/styles/components/nav-link` | `@fremtind/jokul/styles/components/beta/nav-link.scss` |
| Select | `@fremtind/jokul/styles/components/select` | `@fremtind/jokul/styles/components/beta/select.scss` |

Beta-komponentene er flyttet fra `components-beta/` til `components/beta/` internt i pakken. Eksportstiene fra `@fremtind/jokul` til React-komponentene er uendret.

### `core`-konseptet er fjernet

> **Codemoden fikser dette automatisk.**

Typer som tidligere ble eksportert fra `@fremtind/jokul/core` ligger nå i `@fremtind/jokul/utilities`:

```diff
- import type { WithChildren, DataTestAutoId } from "@fremtind/jokul/core";
+ import type { WithChildren, DataTestAutoId } from "@fremtind/jokul/utilities";
```

### Fremtind Grotesk er erstattet med Inter

Den innebygde fonten er byttet ut. Hvis du har egne stilarkbruk eller serveroppsett som kopierer/refererer til `FremtindGrotesk-*.woff2` må du bytte til `InterVariable.woff2` (og `InterVariable-Italic.woff2` for kursiv).

### Font-familien `Jokul Material Symbols` er omdøpt til `Jokul Icons`

> **Codemoden fikser `font-family`-referanser i CSS og SCSS automatisk.** Mixin-bruk (`jkl.use-font-family`) må oppdateres manuelt.

Hvis du har egne stilark som refererer til ikonfonten direkte må navnet oppdateres:

```diff
- font-family: "Jokul Material Symbols", "Jokul Material Symbols Fallback", sans-serif;
+ font-family: "Jokul Icons", "Jokul Icons Fallback", sans-serif;
```

```diff
- @include jkl.use-font-family("Jokul Material Symbols");
+ @include jkl.use-font-family("Jokul Icons");
```

### Semantiske fargetokens er omdøpt og omstrukturert

Fargesystemet er restrukturert som en del av v5-oppgraderingen. Tokens fra Jøkul 4 som refereres direkte i CSS må oppdateres.

**Fikses automatisk av codemoden:**

| Gammel token | Ny token |
|---|---|
| `--jkl-color-background-action` | `--jkl-color-background-contrast` |
| `--jkl-color-text-on-action` | `--jkl-color-text-on-contrast` |
| `--jkl-color-text-inverted` | `--jkl-color-text-on-contrast` |
| `--jkl-color-background-container-high` | `--jkl-color-background-container` |
| `--jkl-color-background-container-low` | `--jkl-color-background-container` |
| `--jkl-color-background-container-inverted` | `--jkl-color-background-contrast` |
| `--jkl-color-background-alert-info` | `--jkl-color-info-background-container` |
| `--jkl-color-background-alert-warning` | `--jkl-color-warning-background-container` |
| `--jkl-color-background-alert-error` | `--jkl-color-error-background-container` |
| `--jkl-color-background-alert-success` | `--jkl-color-success-background-container` |

**Krever manuell vurdering (codemoden varsler):**

| Gammel token | Handling |
|---|---|
| `--jkl-color-text-on-alert-*` | Bruk `--jkl-color-<rolle>-text-default`, f.eks. `--jkl-color-info-text-default` |
| `--jkl-color-background-interactive*` | Fjernet — skal ikke brukes lenger |
| `--jkl-color-text-interactive*` | Fjernet — skal ikke brukes lenger |

Border-tokens er samlet i semantiske roller. Bytt fra gamle input- og separator-tokens til `--jkl-color-border-default`, `--jkl-color-border-subdued` eller `--jkl-color-border-strong`.

### Tailwind-fargeklasser er omdøpt og omstrukturert

Jøkul 5-temaet for Tailwind (`@fremtind/jokul/styles/tailwind`) definerer nye fargenøkler. Klassenavnene som ble generert fra det gamle Jøkul 4-temaet (`@fremtind/jokul/tailwind/v4`) er endret i takt med fargetokenene.

**Fikses automatisk av codemoden** (alle vanlige Tailwind-prefikser: `bg-`, `text-`, `border-`, `ring-`, o.fl.):

| Gammel klasse (fargenøkkel) | Ny klasse (fargenøkkel) |
|---|---|
| `bg-background-action` | `bg-background-contrast` |
| `text-text-on-action` | `text-text-on-contrast` |
| `text-text-inverted` | `text-text-on-contrast` |
| `bg-background-container-high` | `bg-background-container` |
| `bg-background-container-low` | `bg-background-container` |
| `bg-background-container-inverted` | `bg-background-contrast` |
| `bg-background-alert-info` | `bg-info-background-container` |
| `bg-background-alert-warning` | `bg-warning-background-container` |
| `bg-background-alert-error` | `bg-error-background-container` |
| `bg-background-alert-success` | `bg-success-background-container` |

Codemoden håndterer Tailwind-modifikatorer (`hover:`, `dark:`, `md:` o.l.) korrekt.

**Krever manuell vurdering (codemoden varsler):**

- `bg-background-interactive`, `text-text-interactive` o.l. — Fjernet. Ingen direkte erstatning.
- `border-border-separator`, `border-border-action`, `border-border-input` o.l. — Fjernet. Bruk `border-border-default`, `border-border-subdued` eller `border-border-strong`.
### `Card`-komponenten har fått nytt API

> **Codemoden varsler** om bruk av `variant="outlined|high|low"` og forklarer hva som skal gjøres.

`variant`-prop-en er fjernet fra `Card`. Kort med ramme bruker nå boolean-prop-en `outlined`, og høyde-/dybdevarianter er fjernet til fordel for standard flate.

```diff
- <Card variant="outlined">Innhold</Card>
+ <Card outlined>Innhold</Card>
```

```diff
- <Card variant="high">Innhold</Card>
- <Card variant="low">Innhold</Card>
+ <Card>Innhold</Card>
```

## Jøkul 4.0

Jøkul 4.0 inneholder hovedsakelig opprydding og standardisering av API-er, typografi og sizing.

### Breaking changes

- [`data-density` er erstattet med `data-size`](#density-til-size)
- [Typography-mixins og navn er oppdatert til nytt navnesystem](#typografi)
- [`BETA_`-prefiks er fjernet fra stabile komponenter](#beta-komponenter)
- [`LinkList variant="ordered"` er erstattet med `TableOfContents`](#linklist-variantordered-erstattet-med-tableofcontents)
- [`BETA_DescriptionList` er fjernet](#beta-varianten-av-description-list-droppes)

---

### Density til size

Tidligere kalte vi størrelsesdimensjonen density, i tillegg til at fontstørrelsene endret seg avhengig av skjermstørrelser.

Nå bruker vi ordet size for å gjøre det tydeligere at det som endrer seg er komponentenes størrelse, og ikke den faktiske tettheten i grensesnittet.

Selv om disse konseptene ikke er helt like så kan du som regel bytte ut `data-density="compact"` med `data-size="small"`.

| Før                             | Etter               |
| ------------------------------- | ------------------- |
| `data-density="compact"`        | `data-size="small"` |
| `data-layout-density="compact"` | `data-size="small"` |

- [Les mer om endringene her](https://jokul-portal.intern.app.prodaws.fremtind.no/fundamenter/storrelser).
- [Se oversikt over tokens for avstander her](https://jokul-portal.intern.app.prodaws.fremtind.no/fundamenter/avstander).

#### Komponenter har mistet størrelse som prop

Langtlevende komponenter har hatt mulighet for å sette density som en prop. Dette er fjernet til fordel for data-attributter. **Sett `data-size` på seksjoner med innhold**.

Før:

```ts
<section/div/article>
    ...
    <Button density="compact">Klikk på meg</Button>
    ...
</section/div/article>
```

Etter:

```ts
<section/div/article data-size="small">
    ...
    <Button>Klikk på meg</Button>
    ...
</section/div/article>
```

---

### Typografi

Endrede typografi-tokens gir endringer i mixin-parametre.
Der du har brukt `body` eller `small`, må du nå velge mellom en variant av paragraph eller text.

**Hva som skal brukes ser du i [oversikten i portalen](https://jokul-portal.intern.app.prodaws.fremtind.no/fundamenter/typografi)**, men i korte trekk:

- Dersom du har brukt mixinen vår, men gjort linjehøyden mindre er det mest sannsynlig text og ikke paragraph som skal brukes.
- Dersom du har overskrevet størrelsen på teksten til å være mindre enn 16px skal du nå bruke micro.
- Dersom du er usikker: kontakt en designer på teamet ditt, eller Jøkul-teamet.

Før:

```css
@include jkl.text-style("body");
@include jkl.text-style("small");
```

Etter:

```css
@include jkl.text-style("paragraph-medium");
@include jkl.text-style("paragraph-small");

// Eller
@include jkl.text-style("text-medium");
@include jkl.text-style("text-small");
@include jkl.text-style("text-micro");
```

---

### Beta-komponenter

Beta-komponenter blir stabile. Betakomponentene prefixes med <code>BETA\_</code> for å gjøre det enkelt å finne. For å bruke stabile komponenter må du derfor fjerne prefixen. Dette gjelder:

- Search
- Table of Contents

Før:

```ts
<BETA_Search ...
<BETA_TableOfContents ...
```

Etter:

```ts
<Search ...
<TableOfContents ...
```

---

### LinkList variant="ordered" erstattet med TableOfContents

Beta-versjonen av `LinkList` er tatt inn som stabil.

- Der du tidligere brukte `variant="ordered"` bruker du nå den nye komponenten TableOfContents.

Før:

```tsx
<LinkList variant="ordered">
    <LinkList.Item>
        <LinkList.Link href="#">Lenketekst</LinkList.Link>
    </LinkList.Item>
</LinkList>
```

Etter:

```tsx
<TableOfContents>
    <TableOfContents.Link href="#">Lenketekst</TableOfContents.Link>
</TableOfContents>
```

- Der du tidligere brukte `variant="unordered"`, eller uten å sette `variant`, bruker du den nå alltid uten `variant`.

Før:

```tsx
<LinkList variant="unordered">
    <LinkList.Item>
        <LinkList.Link href="#">Lenketekst</LinkList.Link>
    </LinkList.Item>
</LinkList>
```

Etter:

```tsx
<LinkList>
    <LinkList.Link href="#">Lenketekst</LinkList.Link>
</LinkList>
```

---

### Beta-varianten av Description List droppes

Vi har ikke vært så fornøyd med APIet i `BETA_DescriptionList`, og har derfor valgt å droppe denne. Den stabile versjonen av `DescriptionList` er beholdt. Utseende og ny funksjonalitet fra beta-varianten er tatt med inn i den stabile varianten.

Hvis du ikke har tatt i bruk `BETA_DescriptionList` trenger du ikke gjøre noen endringer.

Hvis du **har** tatt i bruk `BETA_DescriptionList`, kan du bytte til `DescriptionList` på følgende måte:

```tsx
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
```

---

## Oppgradering av Jøkul til versjon 1.x.x

Dette dokumentet inneholder teknisk dokumentasjon av endringer fra siste stabile 0.x.x-versjon som vil kreve kodeendringer ved oppgradering til versjon 1.x.x. Eventuelle visuelle endringer i komponentene vil ikke beskrives her, da disse allerede er representert i skissene i Figma. Det vil heller ikke tas med ny funksjonalitet dersom den ikke er påkrevd i bruk. Se dokumentasjonen til hver enkelt komponent for oppdatert informasjon om komponentenes funksjonalitet.

### BulletList

Pakkene `@fremtind/jkl-bullet-list` og `@fremtind/jkl-bullet-list-react` finnes ikke lenger, og er erstattet av `@fremtind/jkl-list` og `@fremtind/jkl-list-react`. Der du tidligere har brukt komponenten `<BulletList>` skal du nå bruke `<UnorderedList>`. Det er i tillegg lagt til en `<OrderedList>`-komponent. Listene brukes ellers på samme måte som tidligere.

### Dropdown/Select

Pakkene `@fremtind/jkl-dropdown` og `@fremtind/jkl-dropdown-react` finnes ikke lenger, og er erstattet av `@fremtind/jkl-select` og `@fremtind/jkl-select-react`. Komponenten `<Select>` erstatter `<Dropdown>`. Om du tidligere har brukt `<Select>` for å få ut et vanlig `<select>` HTML-element må du nå bruke `<NativeSelect>`.

Prop-en `initialInputValue` er tatt vekk og erstattet med `value`, slik at komponenten kan brukes kontrollert. Dette sikrer også lik bruk i `<Select>` og `<NativeSelect>`.

### Logo

I `<LogoAnimated>`-komponenten har prop-en `showSymbol` blitt omdøpt til `isSymbol`.

### RadioButton

Hovedkomponenten for bruk av radio buttons har skiftet navn til `<RadioButtons>`. Den brukes ellers likt som før.

### TextField

Varianten `<TextField inline />` er erstattet av `<InlineTextField>`. Denne komponenten tar ikke lenger inn `errorLabel` eller `helpLabel`. Om det skal vises error state kan man bruke den nye prop-en `invalid`

Ting å passe på når man går over fra gammel pakkestruktur til monopakke

## Vi er en ren ESM-modul

Før du begynner å bruke pakken bør du sette deg inn i hva dette har å si i praksis:

https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

### Core

Det første som bør gjøres er å bytte bort fra `@fremtind/jkl-core`. Dette fordi flere
av komponentene i monopakka ikke vil fungere med den gamle core-pakka.

Der man bruker jkl-mixins i SCSS må importen endres

```diff
- @use "@fremtind/jkl-core/jkl";
+ @use "@fremtind/jokul/styles/core/jkl";
```

For basis stilene i core

```diff
- @use "@fremtind/jkl-core/core";
+ @use "@fremtind/jokul/styles/core/core";
```

Hvis man bruker Link/NavLink komponentene i løsningen må imports også endres for disse
siden de ikke lenger er en del av core

```diff
- import { Link, NavLink } from "@fremtind/jkl-core";
+ import { Link, NavLink } from "@fremtind/jokul/link";
```

og i tillegg må man nå også spesifikt importere stilene til lenker side de heller ikke
lenger er en del av core

```diff
+ @use "@fremtind/jokul/styles/components/link";
```

Dersom man bruker ScreenReaderOnly må denne importen oppdateres

```diff
- import { ScreenReaderOnly } from "@fremtind/jkl-core";
+ import { ScreenReaderOnly } from "@fremtind/jokul/screen-reader-only";
```

Dersom man bruker TS hjelpeklasser som feks `WithChildren`

```diff
- import type { WithChildren } from "@fremtind/jkl-core";
+ import type { WithChildren } from "@fremtind/jokul/core";
```

### Fonter

Tidligere lå font-filer tilgjengelig på stien
`node_modules/@fremtind/jkl-webfonts/fonts/`
mens de nå er flyttet til
`node_modules/@fremtind/jokul/src/fonts/`

Dersom du har script som kopierer font-filer må disse oppdateres med ny path

SCSS for å dra inn stilene på oppdateres

```diff
- @use "@fremtind/jkl-webfonts/webfonts";
+ @use "@fremtind/jokul/styles/fonts/webfonts";
```

Hvis du sender inn `$webfonts-dir` variabelen er det også her path må oppdateres.

### Komponenter

Med noen unntak gjøres dette på samme måte for alle:

1. Import av React komponent endres

```diff
- import { Feedback } from "@fremtind/jkl-feedback-react";
+ import { Feedback } from "@fremtind/jokul/feedback";
```

2. Import av styling endres

```diff
- @use "@fremtind/jkl-feedback/feedback";
+ @use "@fremtind/jokul/styles/components/feedback";
```

Les mer om hvordan du bruker stilark i `@fremtind/jokul` i [README-filen](./README.md#stilark)

#### Autosuggest

Komponenten er flyttet ut fra TextInput

Import av React komponent endres

```diff
- import { Autosuggest } from "@fremtind/jkl-text-input-react";
+ import { Autosuggest } from "@fremtind/jokul/autosuggest";
```

Import av styling

```diff
+ @use "@fremtind/jokul/styles/components/autosuggest";
```

#### ExpandButton

ExpandButton har blitt renamet til Expander

Import av React komponent endres

```diff
- import { ExpandButton } from "@fremtind/jkl-expand-button-react";
+ import { Expander } from "@fremtind/jokul/expander";
```

Import av styling endres

```diff
- @use "@fremtind/jkl-expand-button/expand-button";
+ @use "@fremtind/jokul/styles/components/expander";
```

Prop `density` er fjernet, her kan man heller bruke `data-density` HTML attributet.

Prop `hideLabel` er fjernet, ønskes en skjult label kan `aria-label` brukes i
stedet for `children`.

Komponenten har blitt polymorf og dermed fått en `as` prop. Typing
av `onClick` on `onKeyDown` vil da være avhengig av hva som sendes inn her.

#### Icons

Icons har blitt entallifisert og heter nå Icon

Import av React komponent endres

```diff
- import { CloseIcon } from "@fremtind/jkl-icons-react";
+ import { CloseIcon } from "@fremtind/jokul/icon";
```

Import av styling endres

```diff
- @use "@fremtind/jkl-icons/icons";
+ @use "@fremtind/jokul/styles/components/icon";
```
