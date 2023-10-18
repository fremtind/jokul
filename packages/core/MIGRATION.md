# Migrasjonsguide

## Semantiske variabler (ALPHA)

`jkl.core@13.3.0` introduserer semanstiske fargevariabler basert på variablene i Figma. Akkurat som i Figma er disse variablene i **alpha**. Det vil si at de kan, og sannsynligvis vil, endre navn underveis.

Variablene endrer automatisk verdi basert på dark/light mode. Navnene er direkte speilinger av navnene i Figma, med alle skråstreker og mellomrom erstattet av bindestrek, og prefixet med `jkl-color`. For eksempel blir "Background/Interactive Selected" til `--jkl-color-background-interactive-selected`.

De semantiske variablene kan brukes direkte i stilkode for å gi riktig farge ut fra funksjon:

```scss
.my-product-page {
    background-color: var(--jkl-color-background-page);
}
```

Variablene gis verdier slik at det alltid vil være tilstrekkelig kontrast mellom variabler som hører sammen, slik som f.eks. `jkl-color-background-action` og `jkl-color-text-on-action`.

## Til `jkl-core@13.0.0`

### Endring i byggoppsett for Sass

Tilde-prefikset er fjernet i all Sass-kode. Avhengig av oppsettet ditt kan det hende du
ikke trenger gjøre noe. Om bygget ditt brekker, konfigurer Sass sin `loadPaths` så den
inkluderer `node_modules`. Om du har konfigurert f. eks. Vite til å tåle tilder i paths kan den konfigurasjonen fjernes.

Her er et eksempel på endring i Gulp:

```diff
 sass({
+    loadPaths: ["./node_modules"],
-    importers: [
-        {
-            findFileUrl(url) {
-                if (!url.startsWith("~")) return null;
-                // Point to the packages node_modules (gulp is invoked in each individual package)
-                const base = path.join(process.cwd(), "node_modules", "/"); // base must end in /, -otherwise node_modules/ is discarded from the URL.
-                const resolved = new URL(url.substring(1), pathToFileURL(base));
-                return resolved;
-            },
-        },
-    ],
 }).on("error", throwSassError),
```

### Fjerning av deprecatede farger

Deprecatede fargevariabler er slettet, uten noen erstatning. Fargene skal ha vært ubrukte lenge. Om du fremdeles bruker dem, må du erstatte dem med andre farger. Hvis du er i tvil, velg [en av hovedfargene våre](https://jokul.fremtind.no/profil/farger/).

Det gjelder:

```scss
jkl.$color-suksess--darkbg;
jkl.$color-info--darkbg;
jkl.$color-advarsel--darkbg;
jkl.$color-feil--darkbg;
jkl.$color-error-color;
jkl.$color-error-color--darkbg;

colors.varslingsfarger("feil--alt");
colors.varslingsfarger("suksess--alt");
```

### Fjerning av utility-klasser for farger

Disse CSS-klassene er fjernet, uten noen direkte erstatning:

```
.jkl-color-hvit
.jkl-bgcolor-hvit
.jkl-color-snohvit
.jkl-bgcolor-snohvit
.jkl-color-sand
.jkl-bgcolor-sand
.jkl-color-dis
.jkl-bgcolor-dis
.jkl-color-varde
.jkl-bgcolor-varde
.jkl-color-svaberg
.jkl-bgcolor-svaberg
.jkl-color-stein
.jkl-bgcolor-stein
.jkl-color-fjellgra
.jkl-bgcolor-fjellgra
.jkl-color-skifer
.jkl-bgcolor-skifer
.jkl-color-granitt
.jkl-bgcolor-granitt
.jkl-color-svart
.jkl-bgcolor-svart
.jkl-color-suksess
.jkl-bgcolor-suksess
.jkl-color-info
.jkl-bgcolor-info
.jkl-color-advarsel
.jkl-bgcolor-advarsel
.jkl-color-feil
.jkl-bgcolor-feil
.jkl-color-suksess--darkbg
.jkl-bgcolor-suksess--darkbg
.jkl-color-info--darkbg
.jkl-bgcolor-info--darkbg
.jkl-color-advarsel--darkbg
.jkl-bgcolor-advarsel--darkbg
.jkl-color-feil--darkbg
.jkl-bgcolor-feil--darbg
```

Du kan bruke CSS-variabler for fargene som fremdeles er en del av profilen:

```css
/** Disse variablene er fremdeles tilgjengelige */
var(--jkl-color-svart);
var(--jkl-color-granitt);
var(--jkl-color-skifer);
var(--jkl-color-fjellgra);
var(--jkl-color-stein);
var(--jkl-color-svaberg);
var(--jkl-color-varde);
var(--jkl-color-dis);
var(--jkl-color-sand);
var(--jkl-color-snohvit);
var(--jkl-color-hvit);
var(--jkl-color-suksess);
var(--jkl-color-feil);
var(--jkl-color-info);
var(--jkl-color-advarsel);
```

## Til `jkl-core@12.0.0` - Flytting av labels og ikonstiler

Fra versjon 12 av `jkl-core` er komponentene `Label` og `SupportLabel`, samt deres stiler og typer, flyttet til `jkl-input-group` og `jkl-input-group-react`. I tillegg er stilene for ikonene våre flyttet ut til ikon-pakken.

Du må importere stilarkene til `input-group` og `icons` i prosjektet ditt, samt `input-group-react` dersom du bruker `Label` eller `SupportLabel` direkte.

```ts
import "@fremtind/jkl-core/core.min.css";
// Legg til disse importene:
// icons.min.css inneholder også stiler for animerte ikoner, animated-icons.min.css finnes ikke lenger
import "@fremtind/jkl-icons/icons.min.css";
import "@fremtind/jkl-input-group/input-group.min.css";
```

### Dersom du bruker `Label` eller `SupportLabel` direkte:

```tsx
// Tidligere:
// import { Label, SupportLabel } from "@fremtind/jkl-core";

import { Label, SupportLabel } from "@fremtind/jkl-input-group-react";
import "@fremtind/jkl-input-group/input-group.min.css";
```

## Til `jkl-core@11.0.0` – Compact Reboot

Denne majoren av Core har noen breaking changes for brukerne av **compact** og de som måtte bruke **kun CSS** av Select og Accordion.

Denne versjonen av Core har **ingen breaking changes** om du bruker React-komponentene og _ikke_ brukte kompakte varianter.

Gjennom våren og sommeren har vi jobbet med å redesigne _compact_ i Jøkul. Det er shippet allerede i Figma, og med denne versjonen av Core blir de nye kompaktvariantene også tilgjengelig i kode.

For dere som har brukt kompaktvarianter tidligere er det noen _breaking changes_:

-   HTML-attributtet `data-compactlayout` er nå `data-layout-density="compact"`.
-   React-propen `forceCompact`/`forceCompact={true}` er nå `density="compact"`.
-   Alle `--compact` CSS-klasser er fjernet til fordel for attributtet `data-density="compact"`.

Det er også noen nye features:

-   Det er kompaktvarianter av alle komponenter og de er faktisk **kompakte**, ikke bare "mobil på desktop".
-   Du kan skru _av_ igjen compact for deler av DOMen med:
    -   HTML-attributtet `data-layout-density="comfortable"`.
    -   React-propen `density="comfortable"` (gjelder kun komponenten, ikke children).
    -   HTML-attributtet `data-density="comfortable"` (samme som React-propen).

I tillegg har CSS-klassen `.jkl-expand-arrow` fra `select.css` og `accordion.css` har blitt til henholdsvis `.jkl-select__arrow` og `.jkl-accordion-item__arrow`.

### Si ifra om noe ser rart ut

Det har vært store endringer under panseret for å få til dette nye designet og APIet.

Om du finner bugs er det en stor hjelp om du [lager et issue](https://github.com/fremtind/jokul/issues/new/choose) på det.

## Til `jkl-core@10.0.0`

**NB:** Denne versjonen av core gjør bare navneendringer i Sass-kode, CSS-variabler, og CSS-animasjoner.

Hvis du:

-   Bare importerer CSS eller Sass-_stilark_ (for eksempel `@fremtind/jkl-core/core`)
-   Ikke bruker CSS-variabler fra Jøkul
-   Ikke bruker CSS-animasjoner fra Jøkul

så er det _ingen breaking change_ for deg og du kan bare oppgradere.

Endringene i denne versjonen, kort oppsummert:

-   ✨ _Alle_ variabler, mixins og funksjoner i `core` er tilgjengelige via `@fremtind/jkl-core/jkl`.
-   🛑 Mixins som har hatt prefixet `helper-` har fått dette fjernet.
-   🛑 `jkl-motion`-funksjonen (_ikke_ mixinen `motion`) er renamet til `easing`.
-   🛑 `jkl-timing`-funksjonen er renamet til `timing`.
-   🛑 `$jkl--timings` og `$jkl--easings` er fjernet. Bruk `jkl.timing("timing-navn")` og `jkl.easing("easing-navn")` for å slå opp verdier.
-   🛑 Variabler, funksjoner og mixins fra pakker _annet enn `core`_ er gjort private.
-   🛑 CSS-animasjoner er gjort private. Rop ut om du brukte dem, så kan vi finne på noe lurt sammen.
-   🛑 CSS-variabler som mangler `jkl-` prefix har nå fått dette. Legg til prefix om du brukte dem.
-   📚 Alle funksjoner og mixins i core har blitt dokumentert med SassDoc.
-   👷‍♂️ Ny Sass modulsyntaks brukt internt.

Se [Hvordan forenkle migreringen](#hvordan-forenkle-migreringen) for noen tips og triks til når du skal oppgradere.

### Alle mixins, variabler, og funksjoner tilgjengelige via `jkl`

Dette skal være alt du trenger fra nå for å bruke mixins, funksjoner og variabler fra Jøkul:

```scss
@use "@fremtind/jkl-core/jkl";
```

Har du egne `@use` for mixins, funksjoner eller variabler så bør disse fjernes. **Bare `@use "@fremtind/jkl-core/jkl";` er ansett som et stabilt API.**

NB: du må fremdeles hente _styles_ separat. Dette gjør du typisk én gang der du bygger opp stylesheeten din med alle avhengigheter.

```scss
@use "@fremtind/jkl-core/core";
```

### Navneendringer

Om du ikke bruker `helper-` prefikset til egen kode bør det holde med en _search & replace_ her. Ertsatt `helper-` med tom string:

```diff
-   @include jkl.helper-light-mode-variables {
+   @include jkl.light-mode-variables {
        /* ... */
    }

-   @include jkl.helper-dark-mode-variables {
+   @include jkl.dark-mode-variables {
        /* ... */
    }
```

Funksjonen `jkl-motion` har fått navnet `easing` for å skille den fra `motion`-mixinen og unngå "dobbel Jøkul" i navnet ved bruk av ny modulsyntaks.

Funksjonen `jkl-timing` er nå bare `timing` for å unngå "dobbel Jøkul" i navnet ved bruk av ny modulsyntaks.

Hvis du har brukt `$jkl--timings` eller `$jkl--easings` direkte for å hente verdier, bruk funksjonene over i stedet.

CSS-variabler som blir definert i Jøkul har nå alltid et `jkl-` prefix. Dette manglet en del steder (se commitene for fullstendig oversikt: [prefix](https://github.com/fremtind/jokul/pull/2868/commits/500ee0e1050de94d8cda07fb423c33837fbf2faa), [namespacing](https://github.com/fremtind/jokul/pull/2868/commits/83fea35f6076ba908378cbc3c834de559e83c1d5)), så hvis du har egen kode som leser eller overstyrer disse variablene må du legge til dette prefixet også.

### Modulsyntaks

Med denne releasen tar Jøkul i bruk Sass Modules (`@use` og `@forward`). Det **anbefales sterkt** at prosjektet ditt går over til den samme modulsyntaksen, men det vil fungere å `@import`ere som før i en periode.

Den gamle `@import`-syntaksen til Sass "frigjøres" til å bli en helt vanlig CSS-import. Med andre ord vil `@import` på sikt slutte å fungere som før. Det er planlagt at [Sass sin støtte for `@import` for å importere Sass fjernes senest 1. oktober 2022](https://github.com/sass/sass/blob/main/accepted/module-system.md#timeline).

Grunnen til at den nye syntaksen ikke er en _drop-in replacement_ [kan du lese mer om i for eksempel denne bloggposten](https://www.oddbird.net/2019/10/02/sass-modules/). Kort fortalt:

-   alle importer blir eksplisitte – vi får ikke lenger uventede variabler, mixins og funksjoner "med på kjøpet"
-   alle moduler namespaces, så vi unngår navnekolisjoner
-   private variabler, funksjoner og mixins blir en feature støttet av selve rammeverket, ikke bare gjennom konvensjoner som `_`-prefix

Om du foretrekker video er [denne YouTube-gjennomgangen](https://www.youtube.com/watch?v=dOnYNEXv9BM) fin.

#### Hvordan forenkle migreringen

Test om du kan bruke [sass-migrator](https://sass-lang.com/documentation/cli/migrator#module), `npx sass-migrator --migrate-deps module style.scss` hvor `style.scss` er "rot-stilarket" ditt. Verktøyet støtter dessverre ikke custom importers, men gi det et forsøk og se hva som skjer.

Om du må manuelt til verks kan disse stegene hjelpe, basert på erfaringen med å migrere internt i Jøkul:

-   Begynn med å fjerne alt av `@import` og erstatt med én `@use "@fremtind/jkl-core/jkl";`
-   Bruk _search and replace_ for alt det er verdt:
    -   ` rem(` erstattes av ` jkl.rem(`
    -   `#{rem` erstattes av `#{jkl.rem`
    -   `@include light-mode-variables` erstattes av `@include jkl.light-mode-variables`
    -   `@include dark-mode-variables` erstattes av `@include jkl.dark-mode-variables`
    -   `@include motion` erstattes av `@include jkl.motion`
    -   `@include text-style` erstattes av `@include jkl.text-style`
    -   `@include screenreader-only` erstattes av `@include jkl.screenreader-only`
    -   `@include no-grow-bold` erstattes av `@include jkl.no-grow-bold`
    -   `@include small-device` erstattes av `@include jkl.small-device`
    -   `@include medium-device` erstattes av `@include jkl.medium-device`
    -   `@include from-medium-device` erstattes av `@include jkl.from-medium-device`
    -   `@include large-device` erstattes av `@include jkl.large-device`
    -   `@include from-large-device` erstattes av `@include jkl.from-large-device`
    -   `@include xl-device` erstattes av `@include jkl.xl-device`
    -   `@include reset-outline` erstattes av `@include jkl.reset-outline`
    -   `@include keyboard-navigation` erstattes av `@include jkl.keyboard-navigation`

**NB**: Det at Sass kompilerer betyr _ikke_ at alt er i orden. Særlig funksjonskall som `rem()` kan behandles som _strings_ hvis funksjonen ikke blir funnet. Da ender du opp med CSS som ser ut som `font-size: rem(20px);` sendt rett til nettleseren, som ikke funker. Vær ekstra nøye med funksjoner, og test i en nettleser.

### SassDoc

Funksjoner, mixins, og en del variabler i `core` er dokumentert med [SassDoc]. Hvis du bruker extensionen [Some Sass](https://marketplace.visualstudio.com/items?itemName=SomewhatStationery.some-sass) (erstatter SCSS IntelliSense) kan du få denne dokumentasjonen opp i editoren.

## Til `jkl-core@9.0.0`

Vårrengjøringsreleasen.

tl;dr:

-   Oppdaterer breakpoints
-   Dropper IE-støtte
-   Fjerner `inverted` og `negative`-props
-   Renamet noen Sass-variabler og funksjoner du sannsynligvis ikke bruker

### Oppdaterer breakpoints

Denne oppdateringen endrer verdiene til breakpointsene i Jøkul. Vi gjør om på minsteverdien, og bytter om på semantikken bak brekkpunktene. Brekkpunktet går fra å være maksimumsverdien til størrelsen, til å bli minimumsstørrelsen (_breaking into medium_, for eksempel).

Du kan fortsette å bruke de samme mixinene i Sass (`small-device`, `from-medium-device`, og så videre).

Du bør gå igjennom de forskjellige sidene i appen din og sjekke at layouten fremdeles fungerer bra på ulike skjermstørrelser.

Husk også at du står fritt til å definere dine egne breakpoints, hvor enn du trenger det!

| Variabel            | Gammel verdi | Ny verdi |
| ------------------- | ------------ | -------- |
| $breakpoint--small  | 768          | Fjernet  |
| $breakpoint--medium | 992          | 680      |
| $breakpoint--large  | 1200         | 1200     |
| $breakpoint--xl     | 1600         | 1600     |

### Dropper IE-støtte

Versjonen fjerner støtte for Internet Explorer. Alt av gammelt rusk i Sasskode er ryddet vekk.

### Fjerner `inverted` og `negative`-props

Propsene `inverted` og `negative` er fjernet (de var merket som deprecated for en stund siden). Bruk `data-theme="dark"` om du trenger funksjonaliteten. Se [bloggposten om temaet](https://jokul.fremtind.no/blog/darkmode/) hvis du lurer på hvordan.

### Sass-endringer

Noen endringer i Sass-variabelnavn og funksjoner. Om du bruker den ferdigbyggede CSSen trenger du ikke tenke på disse. Sannsynligvis vil ikke disse skape noen problemer for deg selv om du bruker Sass-filene, men de er dokumentert her likevel.

Sass-funksjonen `relativeSize` har fått et nytt navn `relative-size` som følger navnekonvensjonen i Sass.

```diff
- font-size: relativeSize(30, 375, 812);
+ font-size: relative-size(30, 375, 812);
```

Sass-funksjonene `jkl--timing` og `jkl--motion` har fått navn uten dobbel `-`:

```diff
- transition-delay: jkl--timings("productive");
+ transition-delay: jkl-timings("productive");
```

Variabelen `$z-index--overflowHidden` heter nå `$z-index--overflow-hidden`:

```diff
- z-index: $z-index--overflowHidden;
+ z-index: $z-index--overflow-hidden;
```

## Til `jkl-core@8.0.0`

Denne oppdateringen fjerner skillet mellom layout og component spacing og samler disse i én ny skala. I tillegg fjernes tall-skalaen. Det er også gjort endringer på hvordan alle variabler i `@fremtind/jkl-core/variables` tas i bruk i stilark.

### Sass-mixin

Sass-mixinen har fått et nytt navn, og et litt annet API.
Den importeres også fra den nye `jkl`-eksporten i `jkl-core` på samme måte som de nye fargeverdiene fra v5.0.0. \
Alle variabler i `@fremtind/jkl-core/variables` blir nå videresendt via `@fremtind/jkl-core/jkl`.\
I denne oppdateringen er det følgende som blir videresendt: `breakpoints`, `shadow`, `spacing` og `z-index`.

Under ser du et eksempel:

```scss
@use "@fremtind/jkl-core/jkl"; // får automatisk namespace jkl.

.min-komponent {
    box-shadow: jkl.$drop-shadow--medium; //shadow
    margin: jkl.$spacing-m -#{jkl.$spacing-s}; //spacing
    z-index: jkl.$z-index--floating; //z-index

    @media screen and (max-width: #{jkl.$breakpoint-small}) {
        // breakpoints
    }
}
```

### Variabler i spacingskalaen

Under ser du tabeller for å oversette variabler til den nye skalaen.

| component-spacing          | Ny skala     |
| -------------------------- | ------------ |
| $component-spacing--xxs    | $spacing-3xs |
| $component-spacing--xs     | $spacing-2xs |
| $component-spacing--small  | $spacing-xs  |
| $component-spacing--medium | $spacing-s   |
| $component-spacing--large  | $spacing-m   |
| $component-spacing--xl     | $spacing-l   |
| $component-spacing--xxl    | $spacing-xl  |
| $component-spacing--giant  | $spacing-2xl |

| layout-spacing          | Ny skala     |
| ----------------------- | ------------ |
| $layout-spacing--xs     | $spacing-m   |
| $layout-spacing--small  | $spacing-l   |
| $layout-spacing--medium | $spacing-xl  |
| $layout-spacing--large  | $spacing-2xl |
| $layout-spacing--xl     | $spacing-3xl |
| $layout-spacing--xxl    | $spacing-4xl |

| tall-spacing | Ny skala     |
| ------------ | ------------ |
| $spacing-1   | $spacing-3xs |
| $spacing-2   | $spacing-2xs |
| $spacing-3   | $spacing-xs  |
| $spacing-4   | $spacing-s   |
| $spacing-5   | $spacing-m   |
| $spacing-6   | $spacing-l   |
| $spacing-7   | $spacing-xl  |
| $spacing-8   | $spacing-2xl |
| $spacing-9   | $spacing-3xl |
| $spacing-10  | $spacing-4xl |

### Klassenavn for spacingskalaen

Formatet for klassenavn har endret seg: `jkl-spacing-${navn}--${all | top | right | bottom | left}`

Eksempel: `jkl-spacing-3xs--top`.

Under ser du tabeller for å oversette klassenavn til den nye skalaen.

| component-spacing             | Ny skala        |
| ----------------------------- | --------------- |
| jkl-component-spacing--xxs    | jkl-spacing-3xs |
| jkl-component-spacing--xs     | jkl-spacing-2xs |
| jkl-component-spacing--small  | jkl-spacing-xs  |
| jkl-component-spacing--medium | jkl-spacing-s   |
| jkl-component-spacing--large  | jkl-spacing-m   |
| jkl-component-spacing--xl     | jkl-spacing-l   |
| jkl-component-spacing--xxl    | jkl-spacing-xl  |
| jkl-component-spacing--giant  | jkl-spacing-2xl |

| layout-spacing             | Ny skala        |
| -------------------------- | --------------- |
| jkl-layout-spacing--xs     | jkl-spacing-m   |
| jkl-layout-spacing--small  | jkl-spacing-l   |
| jkl-layout-spacing--medium | jkl-spacing-xl  |
| jkl-layout-spacing--large  | jkl-spacing-2xl |
| jkl-layout-spacing--xl     | jkl-spacing-3xl |
| jkl-layout-spacing--xxl    | jkl-spacing-4xl |

MERK: For tabellen under skal `position` bli erstattet med en av disse verdiene: `all`, `top`, `right`, `bottom`, `left`

| tall-spacing            | Ny skala                  |
| ----------------------- | ------------------------- |
|                         | jkl-spacing-3xs--position |
|                         | jkl-spacing-2xs--position |
|                         | jkl-spacing-xs--position  |
|                         | jkl-spacing-s--position   |
|                         | jkl-spacing-m--position   |
| jkl-spacing--position-1 | jkl-spacing-l--position   |
| jkl-spacing--position-2 | jkl-spacing-xl--position  |
| jkl-spacing--position-3 | jkl-spacing-2xl--position |
| jkl-spacing--position-4 | jkl-spacing-3xl--position |
| jkl-spacing--position-5 | jkl-spacing-4xl--position |

## Til `jkl-core@7.0.0`

Denne oppdateringen bytter ut hele fontskalaen, og gjør endringer i hvordan disse tas i bruk i stilarkene dine.

### Fontskalaen

Fontskalaen er endret betraktelig, både i organisering/navngiving og i utseende. Det er derfor vanskelig å lage en 1-til-1 oversettelse fra gamle til nye stiler, og alle løsninger som bruker fontskalaen bør derfor gås gjennom og tilpasses de nye stilene.

Fontskalaen finnes fortsatt i to varianter, for henholdsvis små og større skjermer. Varianten for små skjermer kan også brukes i informasjonstette løsninger, på samme måte som `compact` tidligere. Se portalen for [en oversikt](https://jokul.fremtind.no/profil/typografi) over de nye stilene med alle verdier.

Under finner du et utgangspunkt for å oversette til de nye stilene, men **husk at det ikke er meningen å oversette direkte**. Mer om dette under.

| Gammel fontskala | Nærmeste steg i ny skala |
| ---------------- | ------------------------ |
| Title large      | Title                    |
| Title small      | Title                    |
| Heading large    | Heading 1                |
| Heading-medium   | Heading 3                |
| Heading-small    | Heading 4                |
| Lead             | Heading 2                |
| Body             | Body                     |
| Small            | Small                    |
| Micro            | Small                    |

#### Løpende tekst

Den nye skalaen har ett tittelnivå, og fem overskriftsnivåer. I løpende tekst—dokumentasjon, bloggboster, etc.—brukes tittel som hovedtittel og overskriftsnivåene kan brukes i rekkefølge for lavere nivå-overskrifter.

#### Applikasjoner og komponenter

I applikasjoner og komponenter kan ikke tekst like enkelt karakteriseres som overskrift, tittel, avsnitt, o.l. Som en generell regel kan Title fortsatt brukes om sideoverskrift, Heading 1 og 2 brukes som overskrift for seksjoner av en side, og Heading 3, 4 og 5 brukes som overskrift i komponenter. Sørg for at du får et naturlig hierarki blandt nivåene i løsningen.

### Nytteklasser

For å ta i bruk fontskalaen i en løsning kan man fortsatt bruke nytteklasser eller Sass-mixins. Nytteklassene brukes på akkurat samme måte, men siden de har navn etter nivåene i skalaen **utgår alle andre klasser enn** `jkl-body` og `jkl-small`. Nye klasser for `jkl-title` og `jkl-heading-1` til `jkl-heading-5` tilkommer.

### Sass-mixin

Sass-mixinen har fått et nytt navn, og et litt annet API. Den importeres også fra den nye `jkl`-eksporten i `jkl-core` på samme måte som de nye fargeverdiene fra v5.0.0. Alle typografi-elementer som eksporteres fra denne filen har prefix `typography-`.

```scss
@use "@fremtind/jkl-core/jkl"; // får automatisk namespace jkl.

.min-komponent {
    // automatisk bytte for stor/liten skjerm:
    @include jkl.text-style("body");
}

.min-faste-komponent {
    // bruker alltid skala for liten skjerm:
    @include jkl.text-style("body/small-screen");
    // for stor skjerm brukes f.eks. "body/large-screen"
}
```

Hvis du trenger å overstyre fontvekt eller linjehøyde på tekststilen kan du legge inn disse verdiene inne i mixinen:

```scss
@include jkl.text-style("small") {
    font-weight: jkl.$typography-weight-bold;
}
```

### Variabler

Variabler for fontvekt eksporteres også fra den nye `jkl`-eksporten, også de med prefix `typography-`.

```scss
@use "@fremtind/jkl-core/jkl";

jkl.$typography-weight-normal; // normal fontvekt
jkl.$typography-weight-bold; // fet fontvekt
```

### Migrere kode i praksis

#### 1. Bytt ut nytteklasser

Alle nytteklasser (unntatt `jkl-body` og `jkl-small`) må byttes ut med riktig nytteklasse fra den nye skalaen i henhold til oppdatert design. Se evt. tabellen øverst for en rask guide.

**NB!**: Dersom komponenten har et eget stilark i tillegg til nytteklassen for tekststil anbefaler vi at du **flytter tekststilen inn i stilarket** ved hjelp av mixinen (se under.)

#### 2. Bytt ut mixins og varibler

Sørg for at du importerer `jkl` i alle stilark der du bruker typografi fra Jøkul:

```scss
@use "@fremtind/jkl-core/jkl";
```

| Der du før brukte...                              | ...bruk nå                                       |
| ------------------------------------------------- | ------------------------------------------------ |
| `@include jkl-text-style("desktop/title-large");` | `@include jkl.text-style("title/large-screen");` |
| `@include jkl-text-style("compact/title-large");` | `@include jkl.text-style("title/small-screen");` |
| `@include jkl-text-style("desktop/body");`        | `@include jkl.text-style("body/large-screen");`  |
| `@include jkl-text-style("compact/body");`        | `@include jkl.text-style("body/small-screen");`  |
| `@include jkl-text-style("desktop/small");`       | `@include jkl.text-style("small/large-screen");` |
| `@include jkl-text-style("compact/small");`       | `@include jkl.text-style("small/small-screen");` |

For andre tekststiler enn disse må du bytte ut med en av de nye teksttilene, med samme mønster som over.

**NB!**: Hvis du bytter mellom `desktop` og `compact` ut fra skjermstørrelse i løsningen din kan du nå la Jøkul håndtere dette for deg:

```scss
.min-komponent {
    // Dette...
    @include jkl.text-style("body");

    // ...tilsvarer dette:
    //
    // @include jkl.text-style("body/small-screen");
    //
    // @include from-medium-device {
    //     @include jkl.text-style("body/large-screen");
    // }
}
```

## Til `jkl-core@6.0.0`

Denne oppdateringen introduserer brukerstyrt dark mode, og krever noen endringer for å tas i bruk. Det er skrevet [en guide i portalen](https://jokul.fremtind.no/blog/auto-dark-mode/), men her er en rask gjennomgang:

Det er lagt inn en rotklasse `.jkl`, som må settes på rot i Jøkul-prosjekter. Klassen sørger for å sette riktig font, samt bakgrunns-og tekstfarge i både lys og mørk modus.

```html
<div id="app-root" class="jkl"></div>
```

**NB!**: Det er viktig at man går gjennom løsningen og sjekker at ting fungerer som forventet i dark mode, og gjør eventuelle endringer som må til. **Hvis du vil vente med dette** kan du tvinge løsningen til å vises i light mode ved å sette en attributt på rot i prosjektet:

```html
<div id="app-root" class="jkl" data-theme="light"></div>
```

### Tips for å gjøre klart til mørk modus:

-   Alle felter med annen bakgrunnsfarge enn hvit bør gis en spesifikk bakgrunnsfarge for mørk bakgrunn, slik at kontrasten blir riktig. Bruk gjerne de nye Sass-mixinene.
-   Felter som er uthevet med skygge bør utheves på en annen måte i mørk modus, f.eks. bakgrunnsfarge eller omriss.

## Fra `jkl-core@4.0.0` til `jkl-core@5.0.0`

Fargene har igjen fått en overhaling i `jkl-core@5.0.0`. **Hovedfargene** går i fra "Hvit", "Svart" og "Varde" til "Snohvit", "Granitt" og "Varde".
Alle de gamle gråtonene og vardetonene er tatt bort, mens "Svart", "Hvit" og bruksfargene står som før.

### Prinsipper

"Snohvit" skal fra nå av brukes som bakgrunnsfarge og "Granitt" skal brukes som farge på tekst.

Hover og Fokus skal ikke lenger bruke "$info" (mørk blå). Dersom du har laget egne komponenter som tar i bruk "$info" på hover og fokus, så må du også bruke litt tid på å skrive dette om til å bruke en av de nye prinsippene.

1. "Granitt" skal gå til "Stein" i light mode og "Snohvit" skal gå til "Svaberg" i dark mode.
2. Dersom du har elementer med rammer og ikke ønsker å gå lysere, ønsker vi at rammen går fra 1px til 2px.

Ta gjerne en titt på componentene i portalen eller ta kontakt i Support Designsystem på Teams dersom du er usikker.

### Hvordan bruke de nye fargestilene i CSS/Sass

Vi har laget en ny eksport fil med `color-`-prefix som vi anbefaler at du tar i bruk. Du skriver da `@use "@fremtind/jkl-core/jkl";` og skriver `jkl.$color-snovhit` for å bruke den i din stil-fil.
Dette ble gjort slik at det skal bli likt når typografi endringen kommer (skal også få prefix);
Om du ikke har lyst til å endre imports så eksponerer vi også alle fargene som før via `@use "@fremtind/jkl-core/variables/_colors.scss";`.

Dersom du har brukt de gamle valørene som bakgrunnsfarge eller lignende, kan du bruke denne tabellen som et cheat sheet når du tar i bruk `jkl-core@5.0.0`.

| Gammel variabel | Ny (eller nærmeste nye) variabel |
| --------------- | -------------------------------- |
| `$hvit`         | `$hvit`                          |
| `$svart`        | `$svart`                         |
|                 | `$snohvit` Ny standard hvit      |
|                 | `$granitt` Ny standard svart     |
| `$gra-10`       | `$snohvit`                       |
| `$gra-20`       | `$snohvit`                       |
| `$gra-30`       | `$sand`                          |
| `$gra-40`       | `$sand`                          |
| `$gra-50`       | `$dis`                           |
| `$gra-60`       | `$fjellgra`                      |
| `$gra-70`       | `$fjellgra`                      |
| `$gra-80`       | `$fjellgra`                      |
| `$gra-90`       | `$skifer`                        |
| `$gra-100`      | `$granitt`                       |
| `$varde-10`     | `$sand`                          |
| `$varde-20`     | `$dis`                           |
| `$varde-30`     | `$dis`                           |
| `$varde-40`     | `$varde`                         |
| `$varde-50`     | `$varde`                         |
| `$varde-60`     | `$fjellgra`                      |
| `$varde-70`     | `$fjellgra`                      |
| `$varde-80`     | `$fjellgra`                      |
| `$varde-90`     | `$skifer`                        |
| `$varde-100`    | `$granitt`                       |

# Fra `jkl-core@2.x.x` til `jkl-core@3.0.0` eller `jkl-core@4.0.0`

## Farger

Fargene har fått en overhaling i `jkl-core@3.0.0`. **Hovedfargene** er redusert til kun tre, men det har kommet til **Sekundærfarger** i form av 10-punkts skalaer for gråtoner og nyanser av fargen "Varde". ~~**Støttefargene** er delt opp i **Meldingsfarger** og **Illustrasjonsfarger**~~ Fra `jkl-core@4.0.0` finnes kun **Meldingsfarger** i tillegg til hoved- og sekundærfargene.

### Hvordan bruke de nye fargene i Figma

I Figma har fargestilene allerede endret navn, og vil være oppdatert i skissene dine dersom du har godtatt oppdateringen av biblioteket.

### Hvordan bruke de nye fargestilene i CSS/Sass

Vi eksponerer alle fargene som Sass-variabler fra `variables/_colors.scss`. De nye fargeskalaene er tilgjengelige som `$gra-10, $gra-20, ... $gra-100` og `$varde-10, $varde-20, ... $varde-100`. De nye meldingsfargene heter `$suksess, $info, $advarsel og $feil`.

Følgende variabler vil ikke fungere lenger fra `jkl-core@3.0.0`:

| Gammel variabel  | Ny (eller nærmeste nye) variabel |
| ---------------- | -------------------------------- |
| `$helhvit`       | `$hvit`                          |
| `$varm-fjellgra` | `$gra-60`                        |
| `$matt-svart`    | `$gra-80`                        |
| `$snohvit`       | `$gra-10`                        |
| `$himmelgra`     | `$gra-20`                        |

Fra `jkl-core@4.0.0` utgår også følgende variabler uten erstatning: `$jord`, `$sand`, `$sol`, `$blomst`, `$skog` og `$hav`.

## Tekststiler

Den største endringen i `jkl-core` v3.x.x er en overhaling av tekststilene. Der de tidligere eksisterte i de to kategoriene `desktop` og `mobile` er kategorinavnene nå endret til `desktop` og `compact` for bedre å formidle variasjon i bruk. Hver tekststil inneholder informasjon om tekststørrelse, linjehøyde, og fontvekt.

Variantene under `compact` er fortsatt de som skal brukes på mobile flater.

Overskriftstilene har også endret navn, slik at de ikke lenger er koblet til et semantisk overskriftsnivå. Dette gir oss større frihet i hvordan vi bruker typografien i nettløsninger. En effekt av dette er at typografikomponentene i Jøkul utgår. Dette er beskrevet nærmere lenger ned i guiden.

| Gammelt navn | Nytt navn      |
| ------------ | -------------- |
| h1-heading   | title-large    |
| h2-heading   | title-small    |
| h3-heading   | heading-large  |
| h4-heading   | heading-medium |
| h5-heading   | heading-small  |

### Hvordan bruke de nye tekststilene i Figma

I Figma har tekststilene allerede endret navn, og vil være oppdatert i skissene dine dersom du har godtatt oppdateringen av biblioteket.

### Hvordan bruke de nye tekststilene i CSS/Sass

Måten man bruker tekststilene på er gjort om totalt, for å bedre sørge for at konseptet i større grad er likt for designere og utviklere:

Tidligere benyttet man seg av tekststilene i Sass-stilark gjennom å bruke mixins med samme navn som tekststilen, men på litt annen form enn i Figma. Dette er nå erstattet med én mixin som kalles med navnet på tekststilen, der dette navnet er det samme som i Figma.

```scss
// Tidligere:
.jkl-component {
    @include body-paragraph--mobile;
}

// Nå:
.jkl-component {
    @include jkl-text-style("compact/body");
}
```

Tidligere fantes det mixins for tekststilene som automatisk vekslet mellom "desktop" og "mobile" etter skjermstørrelse (f.eks. `@include lead-paragraph`). Disse mixin-ene finnes ikke i det nye systemet, og man må derfor selv definere hvilke stiler som skal brukes på forskjellige skjermstørrelser. Det finnes imidlertid hjelpeklasser man kan bruke der man trenger responsivitet, som f.eks. i løpetekst.

```html
<p class="jkl-body">Lorem ipsum...</p>
```

Disse hjelpeklassene heter det samme som tekststilen, men uten `compact`/`desktop` foran, og med prefikset `jkl-`. Under følger en komplett oversikt over gamle og nye mixins og klassenavn (uendrede er ikke tatt med).

| Der du før brukte...                | ...bruk nå                                          |
| ----------------------------------- | --------------------------------------------------- |
| `@include lead-paragraph`           | Se under                                            |
| `@include lead-paragraph--desktop`  | `@include jkl-text-style("desktop/lead")`           |
| `@include lead-paragraph--mobile`   | `@include jkl-text-style("compact/lead")`           |
| `@include body-paragraph`           | Se under                                            |
| `@include body-paragraph--desktop`  | `@include jkl-text-style("desktop/body")`           |
| `@include body-paragraph--mobile`   | `@include jkl-text-style("compact/body")`           |
| `@include small-paragraph`          | Se under                                            |
| `@include small-paragraph--desktop` | `@include jkl-text-style("desktop/small")`          |
| `@include small-paragraph--mobile`  | `@include jkl-text-style("compact/small")`          |
| `@include micro-paragraph`          | Se under                                            |
| `@include micro-paragraph--desktop` | `@include jkl-text-style("desktop/micro")`          |
| `@include micro-paragraph--mobile`  | `@include jkl-text-style("compact/micro")`          |
| `@include body-paragraph`           | Se under                                            |
| `@include body-paragraph--desktop`  | `@include jkl-text-style("desktop/body")`           |
| `@include body-paragraph--mobile`   | `@include jkl-text-style("compact/body")`           |
| `@include h1-heading`               | Se under                                            |
| `@include h1-heading--desktop`      | `@include jkl-text-style("desktop/title-large")`    |
| `@include h1-heading--mobile`       | `@include jkl-text-style("compact/title-large")`    |
| `.jkl-h1`                           | `.jkl-title-large`                                  |
| `@include h2-heading`               | Se under                                            |
| `@include h2-heading--desktop`      | `@include jkl-text-style("desktop/title-small")`    |
| `@include h2-heading--mobile`       | `@include jkl-text-style("compact/title-small")`    |
| `.jkl-h2`                           | `.jkl-title-small`                                  |
| `@include h3-heading`               | Se under                                            |
| `@include h3-heading--desktop`      | `@include jkl-text-style("desktop/heading-large")`  |
| `@include h3-heading--mobile`       | `@include jkl-text-style("compact/heading-large")`  |
| `.jkl-h3`                           | `.jkl-heading-large`                                |
| `@include h4-heading`               | Se under                                            |
| `@include h4-heading--desktop`      | `@include jkl-text-style("desktop/heading-medium")` |
| `@include h4-heading--mobile`       | `@include jkl-text-style("compact/heading-medium")` |
| `.jkl-h4`                           | `.jkl-heading-medium`                               |
| `@include h5-heading`               | Se under                                            |
| `@include h5-heading--desktop`      | `@include jkl-text-style("desktop/heading-small")`  |
| `@include h5-heading--mobile`       | `@include jkl-text-style("compact/heading-small")`  |
| `.jkl-h5`                           | `.jkl-heading-small`                                |

For å erstatte de "responsive" mixin-ene anbefaler vi mønstret vi selv bruker i komponentene i Jøkul, med mixins for skjermstørrelse brukt sist i stildefinisjonen:

```scss
.jkl-component {
    @include jkl-text-style("desktop/title-large");
    // andre stiler

    @include small-device {
        // importert fra jkl-core/mixins/screens
        @include jkl-text-style("compact/title-large");
    }
}
```

## Typografielementer

I forbindelse med endringen av tekststilene utgår React-komponentene for typografi i pakken `@fremtind/jkl-typography-react`. De er fortsatt tilgjengelige for bruk i `v2.x.x` av den pakken, men vil bli tatt helt vekk i `v3.0.0`.

Vi anbefaler at du allerede nå refaktorerer til å bruke semantisk riktige html-elementer med riktig hjelpeklasse fra `jkl-core`:

```jsx
// I stedet for <H1>En overskrift</H1>:
<h1 className="jkl-title-large">En overskrift</h1>

// I stedet for <H1 styledAs="h2">En overskrift</H1>:
<h1 className="jkl-title-small">En overskrift</h1>

// I stedet for <Lead>Lorem ipsum...</Lead>:
<p className="jkl-lead">Lorem ipsum...</p>
```

Se tabellen over for å finne riktig navn på tekststilen du ønsker.
