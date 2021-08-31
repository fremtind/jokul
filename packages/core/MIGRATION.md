# Migrasjonsguide

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
@use "~@fremtind/jkl-core/jkl"; // får automatisk namespace jkl.

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
@use "~@fremtind/jkl-core/jkl";

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
@use "~@fremtind/jkl-core/jkl";
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

Vi har laget en ny eksport fil med `color-`-prefix som vi anbefaler at du tar i bruk. Du skriver da `@use "~@fremtind/jkl-core/jkl";` og skriver `jkl.$color-snovhit` for å bruke den i din stil-fil.
Dette ble gjort slik at det skal bli likt når typografi endringen kommer (skal også få prefix);
Om du ikke har lyst til å endre imports så eksponerer vi også alle fargene som før via `@use "~@fremtind/jkl-core/variables/_colors.scss";`.

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
