"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2061],{70868:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return p},Head:function(){return u},default:function(){return k}});var l=t(47160),r=t(70079);function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",em:"em",ul:"ul",li:"li",h3:"h3",h4:"h4",strong:"strong"},(0,l.ah)(),e.components),{Ingress:t,Grid:a,DoDontExample:s,CodeDemo:i}=n;return i||o("CodeDemo",!0),s||o("DoDontExample",!0),a||o("Grid",!0),t||o("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n.h1,null,"Stilguide for Sass"),"\n",r.createElement(t,null,"Lurer du på hvordan du skal begynne med Sass-kode i Jøkul?"),"\n",r.createElement(n.h2,null,"Sass"),"\n",r.createElement(n.p,null,r.createElement(n.a,{href:"https://sass-lang.com/guide"},"Sass")," er en preprocessor for CSS."),"\n",r.createElement(n.p,null,"Kort fortalt gir Sass oss en kraftig verktøykasse til å skrive CSS, med muligheter som nøsting, funksjoner, løkker og et modulsystem som lar oss dele opp kode i fornuftige biter før det kompileres til CSS – litt som TypeScript blir kompilert til JavaScript."),"\n",r.createElement(n.p,null,"Det er ",r.createElement(n.a,{href:"https://sass-lang.com/documentation/syntax"},"to syntakser i Sass"),"-verden: SCSS og Indented."),"\n",r.createElement(a,null,r.createElement(n.pre,null,r.createElement(n.code,{className:"language-scss"},"nav {\n    ul {\n        margin: 0;\n        padding: 0;\n        list-style: none;\n    }\n\n    li {\n        display: inline-block;\n    }\n\n    a {\n        display: block;\n        padding: 6px 12px;\n        text-decoration: none;\n    }\n}\n")),r.createElement(n.pre,null,r.createElement(n.code,{className:"language-sass"},"nav\n  ul\n    margin: 0\n    padding: 0\n    list-style: none\n\n  li\n    display: inline-block\n\n  a\n    display: block\n    padding: 6px 12px\n    text-decoration: none\n"))),"\n",r.createElement(n.p,null,"I Jøkul bruker vi SCSS-syntaksen. Den er et supersett av CSS, og er mer gjenkjennelig om du har en bakgrunn i å skrive CSS eller Less."),"\n",r.createElement(n.p,null,"Begrepene ",r.createElement(n.em,null,"Sass")," og ",r.createElement(n.em,null,"SCSS")," blir brukt om hverandre i Jøkul, og betyr enten Sass-prosjektet eller Sass-kode skrevet med SCSS-syntaks."),"\n",r.createElement(n.h2,null,"Namespacing"),"\n",r.createElement(n.p,null,"I CSS deler alle stilark det samme globale namespacet. Det får konsekvenser for hvordan vi navngir:"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"klasser"),"\n",r.createElement(n.li,null,"CSS-variabler"),"\n",r.createElement(n.li,null,"animasjoner"),"\n"),"\n",r.createElement(n.p,null,"I Jøkul skal disse starte med ",r.createElement(n.code,null,"jkl")," for å synliggjøre hvor CSSen kommer fra og unngå navnekollisjoner."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-scss"},"@include jkl.light-mode-variables {\n    --jkl-link-color: #{jkl.$color-granitt};\n}\n\n@include jkl.dark-mode-variables {\n    --jkl-link-color: #{jkl.$color-snohvit};\n}\n\n.jkl-link {\n    --_jkl-link-private: #{jkl.$color-stein};\n    color: var(--jkl-color);\n}\n")),"\n",r.createElement(n.p,null,"Navngiving av CSS-animasjoner løser vi på en litt spesiell måte. Mer om det i ",r.createElement(n.a,{href:"#animasjoner"},"kapittelet om animasjoner"),"."),"\n",r.createElement(n.h2,null,"Block Element Modifier"),"\n",r.createElement(n.p,null,"Vi bruker metodikken ",r.createElement(n.a,{href:"https://css-tricks.com/bem-101/"},"Block Element Modifier")," (BEM) som navnekonvensjon i Jøkul. BEM og namespacing hjelper oss med å unngå navnekollisjoner både innad i Jøkul, og med brukerne av Jøkul."),"\n",r.createElement(n.p,null,"Nøsting og ",r.createElement(n.em,null,"parent selector")," (",r.createElement(n.code,null,"&"),") i Sass gjør det enklere å skrive CSS på denne måten."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-scss"},".jkl-block {\n    /* ... */\n    &__element {\n        /* ... */\n        &--element-modifier {\n            /* ... */\n        }\n    }\n\n    &--block-modifier {\n        /* ... */\n    }\n}\n")),"\n",r.createElement(n.h3,null,"Unngå flere elementnivåer"),"\n",r.createElement(n.p,null,"Dersom du er i ferd med å skrive en ",r.createElement(n.code,null,"block__element__another-element"),"-selector, stopp og tenk om ",r.createElement(n.code,null,"element")," egentlig er en ",r.createElement(n.em,null,"annen")," ",r.createElement(n.code,null,"block"),"."),"\n",r.createElement(n.h2,null,"Moduler"),"\n",r.createElement(n.p,null,"I Jøkul bruker vi ",r.createElement(n.a,{href:"https://sass-lang.com/blog/the-module-system-is-launched"},"modul-syntaks")," med ",r.createElement(n.a,{href:"https://sass-lang.com/documentation/at-rules/use"},"@use")," og ",r.createElement(n.a,{href:"https://sass-lang.com/documentation/at-rules/forward"},"@forward"),", ikke ",r.createElement(n.code,null,"@import"),". Hver fil er en modul, på samme måte som du kanskje kjenner til fra TypeScript."),"\n",r.createElement(n.p,null,"Moduler bør holdes til ett tema. Et tema kan for eksempel være CSSen for en komponent, mixins som har å gjøre med skjermstørrelser, eller funksjoner for konvertering av data."),"\n",r.createElement(n.p,null,"Vi bruker ikke ",r.createElement(n.a,{href:"https://sass-lang.com/documentation/at-rules/forward#adding-a-prefix"},"prefixes")," sammen med ",r.createElement(n.code,null,"@forward"),". Grunnen er at vi ønsker at det skal være enkelt å navigere i Jøkul-koden. Man skal kunne finne igjen variabelen innad i Jøkul med det samme navnet som man kjenner fra det offentlige APIet."),"\n",r.createElement(a,null,r.createElement(s,{type:"do",description:"Vanlig forwarding uten å endre navn",content:r.createElement(i,{language:"scss",code:'@forward "one";\n@forward "two";'})}),r.createElement(s,{type:"dont",description:"Forwarding med prefix endrer navnet utad",content:r.createElement(i,{language:"scss",code:'@forward "one" as one-*;\n@forward "two" as two-*;'})})),"\n",r.createElement(n.h3,null,"Partials"),"\n",r.createElement(n.p,null,"Vi bruker partials (filer hvor navnet starter med ",r.createElement(n.code,null,"_"),") for alle filer som ikke skal kompileres til sin egen CSS-fil, men brukes som en ",r.createElement(n.em,null,"part")," i andre CSS-filer."),"\n",r.createElement(n.p,null,"Eksempler er moduler som består utelukkende av variabler, funksjoner og mixins. Det kan også være en modul med CSS for en komponent, men hvor alt skal samles opp i én enkelt CSS-fil til slutt (se for eksempel ",r.createElement(n.a,{href:"https://github.com/fremtind/jokul/tree/main/packages/table"},"packages/table"),")."),"\n",r.createElement(n.h3,null,"Mappe- og filstruktur"),"\n",r.createElement(n.p,null,"Hver mappe med Sass skal ha en ",r.createElement(n.code,null,"_index.scss")," hvor det listes opp ",r.createElement(n.code,null,"@forward")," for alle filer i mappa, litt som en ",r.createElement(n.code,null,"index.ts")," kan gjøre i TypeScript."),"\n",r.createElement(n.p,null,"For eksempel, hvis du har en mappe med to partials ",r.createElement(n.code,null,"_one.scss")," og ",r.createElement(n.code,null,"_two.scss")," må den samme mappen ha en ",r.createElement(n.code,null,"_index.scss")," som ser slik ut:"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-scss"},'// _index.scss\n@forward "one";\n@forward "two";\n')),"\n",r.createElement(n.p,null,"Et unntak er på rotnivå i komponentpakkene. Her skal ",r.createElement(n.code,null,"_index.scss")," ha én ",r.createElement(n.code,null,"@forward")," som peker på hovedfila (for eksempel ",r.createElement(n.code,null,"table.scss"),"), og så har ",r.createElement(n.em,null,"den")," fila ansvaret for å hente inn alt som skal være med."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-scss"},'// packages/table/_index.scss\n@forward "table";\n\n// packages/table/table.scss\n@use "table-caption";\n@use "table-cell";\n@use "table-head";\n@use "table-header";\n@use "table-row";\n')),"\n",r.createElement(n.p,null,"Grunnen til dette unntaket er at vi ønsker at Sass skal lage en ",r.createElement(n.code,null,"table.css")," fra koden vår. Det er enklest dersom vi har en ",r.createElement(n.code,null,"table.scss")," som henter inn alt den trenger."),"\n",r.createElement(n.h4,null,"Hvorfor ha en index?"),"\n",r.createElement(n.p,null,"Index-fila er der for å gjøre det litt enklere å ta i bruk koden andre steder. Sammenlign for eksempel disse to kodesnuttene."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-scss"},'@forward "variables";\n@forward "mixins";\n@forward "functions";\n')),"\n",r.createElement(n.p,null,"I koden over har vi tre mapper: ",r.createElement(n.code,null,"variables"),", ",r.createElement(n.code,null,"mixins")," og ",r.createElement(n.code,null,"functions"),". Jeg som bruker disse mappene trenger ikke forholde meg til hva som er i disse mappene. Jeg vil bare ha det som finnes av variabler, mixins og funksjoner."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-scss"},'@forward "variables/breakpoints";\n@forward "variables/colors" as color-* hide varslingsfarge;\n@forward "variables/shadow";\n@forward "variables/shadows" as shadow-*;\n@forward "variables/spacing" hide $spacing;\n@forward "variables/typography" as typography-*;\n@forward "variables/z-index";\n\n@forward "mixins/helpers";\n@forward "mixins/screens";\n@forward "mixins/text-style";\n@forward "mixins/ornaments";\n@forward "mixins/motion";\n@forward "mixins/screenreader";\n@forward "mixins/underline";\n@forward "mixins/navigation";\n\n@forward "functions/convert";\n@forward "functions/easing";\n@forward "functions/timing";\n@forward "functions/responsive-units";\n')),"\n",r.createElement(n.p,null,"I dette eksempelet har vi ingen index. Jeg som bruker er nødt til å hente inn alle enkeltfiler som finnes. Dersom noen legger til en ny fil må jeg sørge for å oppdatere koden min til å også hente inn denne. Koden min må også endres dersom én av filene endrer navn. Om jeg bare hadde forholdt meg til mappenavn hadde jeg ungått dette."),"\n",r.createElement(n.h3,null,"Offentlig API"),"\n",r.createElement(n.p,null,"Mappenavn og filnavn er ",r.createElement(n.strong,null,"ikke")," en del av APIet til en pakke og kan endres uten forvarsel, med unntak av:"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Filnavnet som matcher pakkens navn, for eksempel ",r.createElement(n.code,null,"core.scss")," og ",r.createElement(n.code,null,"table.scss"),". Disse navnene brukes av prosjekter som importerer CSS."),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"packages/core/_jkl.scss"),', som vi ser på som "hovedinngangen" til Sass-verktøy som mixins, funksjoner og variabler i ',r.createElement(n.code,null,"core")),"\n"),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"Stabilt")),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-scss"},'@use "~@fremtind/jkl-core/jkl";\n@use "~@fremtind/jkl-table/table";\n')),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"Ikke stabilt")),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-scss"},'@use "~@fremtind/jkl-core/functions";\n@use "~@fremtind/jkl-core/mixins";\n@use "~@fremtind/jkl-core/variables";\n@use "~@fremtind/jkl-table/table-row";\n')),"\n",r.createElement(n.h2,null,"Variabler"),"\n",r.createElement(n.p,null,"Det er to typer variabler du må forholde deg til:"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Sass-variabler som er tilgjengelige ",r.createElement(n.em,null,"build time")),"\n",r.createElement(n.li,null,"CSS-variabler som er tilgjengelige ",r.createElement(n.em,null,"run time")),"\n"),"\n",r.createElement(n.p,null,"Vi starter med CSS-variabler."),"\n",r.createElement(n.h3,null,"CSS-variabler"),"\n",r.createElement(n.p,null,"Vi bruker CSS-variabler for verdier som kan tenkes å endres når brukeren ser på siden. Det vanligste er å bruke CSS-variabler for farger, siden de kan endres hvis brukeren bytter tema."),"\n",r.createElement(n.p,null,"Alle CSS-variabler prefixes med ",r.createElement(n.code,null,"jkl")," for å synliggjøre at en variabel kommer fra Jøkul og for å unngå navnekollisjoner."),"\n",r.createElement(n.p,null,"Noen ganger trengs CSS-variabler internt i komponenten, uten intensjon om at de skal kunne endres utenfra. Om navnet starter med underscore betyr det at variabelen er privat. Disse er ikke en del av APIet og kan endres uten forvarsel."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-scss"},'@use "~@fremtind/jkl-core/jkl";\n\n@include jkl.light-mode-variables {\n    --jkl-table-row-border-color: #{jkl.$color-svaberg};\n}\n\n@include jkl.dark-mode-variables {\n    --jkl-table-row-border-color: #{jkl.$color-stein};\n}\n\n.jkl-table-row {\n    --_jkl-table-secret: "jeg kan endres uten forvarsel siden jeg starter med _";\n    border-color: var(--jkl-table-row-border-color);\n}\n')),"\n",r.createElement(n.h3,null,"Sass-variabler"),"\n",r.createElement(n.p,null,"Sass-variabler behandler vi som konstanter som har en fast verdi. Denne verdien kan gi mening å skille ut i en variabel for å unngå duplisering, eller for å tydeliggjøre en relasjon mellom verdier."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-scss"},'@use "~@fremtind/jkl-core/jkl";\n\n.jkl-table-row {\n    $_border-width: jkl.rem(1px);\n\n    border-width: $_border-width;\n\n    thead > & {\n        border-width: $_border-width;\n    }\n}\n')),"\n",r.createElement(n.p,null,"Med unntak av i ",r.createElement(n.code,null,"packages/core")," skal variabler som regel være private. Private variabler kan ikke brukes av andre moduler. Varibler er private om navnet starter med ",r.createElement(n.code,null,"_")," (underscore)."),"\n",r.createElement(n.p,null,"I motsetning til CSS-variabler skal public variabler ",r.createElement(n.em,null,"ikke")," prefikses med ",r.createElement(n.code,null,"jkl"),". De fleste variabler er uansett private. For public variabler lener vi oss på Sass sitt modulsystem med innebygget namespacing, så et prefiks er unødvendig."),"\n",r.createElement(n.p,null,"Variabler bør som regel være definert nærmest mulig der den brukes. Hvis en variabel bare er relevant innefor én selector, definer den der."),"\n",r.createElement(n.p,null,"Variabler som er definert utenfor en CSS selector anses som globale innenfor sin modul. Globale variabler bør være definert øverst i fila, under ",r.createElement(n.code,null,"@use"),"-statements."),"\n",r.createElement(n.h3,null,"Offentlig API"),"\n",r.createElement(n.p,null,"Sass-variabler som er public er en del av pakkens API. En variabel er public dersom navnet ",r.createElement(n.em,null,"ikke")," starter med ",r.createElement(n.code,null,"_")," (underscore) og variabelen er definert i det globale scopet (utenfor en CSS selector)."),"\n",r.createElement(n.p,null,"Sass-variabler som er public skal dokumenteres med ",r.createElement(n.a,{href:"#sassdoc"},"SassDoc"),"."),"\n",r.createElement(n.p,null,"Navnet til CSS- og Sass-variabelen og ",r.createElement(n.a,{href:"https://sass-lang.com/documentation/values/"},"typen verdi")," (for eksempel ",r.createElement(n.code,null,"String"),") er å anse som stabilt."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-scss"},'/* $_example-padding er brukt av to selectors, og hører hjemme som en global variabel */\n$_example-padding: jkl.$spacing-l;\n$_code-padding: jkl.$spacing-s;\n\n\n/// Variabler som ikke starter med _ og som er definert i globalt scope er en del av pakkens API og kan brukes av andre\n/// @type String\n$i-am-public: "Hello, world!";\n\n.jkl-example-1 {\n  padding: $_example-padding;\n\n  &__design {\n    $_design-padding: jkl.$spacing-s;\n    padding: $_design-padding;\n  }\n}\n\n.jkl-example-2 {\n  padding: $_example-padding;\n\n  &__code {\n    /* $_code-padding er bare brukt her, og burde vært definert her, slik som $_design-padding */\n    padding: $_code-padding: jkl.$spacing-s;\n  }\n}\n')),"\n",r.createElement(n.h2,null,"Mixins"),"\n",r.createElement(n.p,null,"Med unntak av i ",r.createElement(n.code,null,"packages/core")," skal mixins som regel være private. Private mixins kan ikke brukes av andre moduler. Mixins er private om navnet starter med ",r.createElement(n.code,null,"_")," (underscore)."),"\n",r.createElement(n.h3,null,"Offentlig API"),"\n",r.createElement(n.p,null,"Public mixins er en del av pakkens API. En mixin er public dersom navnet ",r.createElement(n.em,null,"ikke")," starter med ",r.createElement(n.code,null,"_")," (underscore). Mixins som er public skal dokumenteres med ",r.createElement(n.a,{href:"#sassdoc"},"SassDoc"),"."),"\n",r.createElement(n.p,null,"I public mixins er endring i navnet på parametere å anse som en ",r.createElement(n.em,null,"breaking change"),". Det er fordi utviklere kan ha brukt ",r.createElement(n.a,{href:"https://sass-lang.com/documentation/at-rules/mixin#keyword-arguments"},"keyword arguments"),"."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-scss"},"// Keyword arguments i bruk. Hvis navnet\n// på parameternavnet endres vil det brekke koden.\n@include jkl.forced-colors-svg-fallback($stroke: ButtonText, $fill: ButtonText);\n")),"\n",r.createElement(n.p,null,"Om du vil endre navnet på en bakoverkompatibel måte kan du beholdet det gamle navnet som et ",r.createElement(n.a,{href:"https://sass-lang.com/documentation/at-rules/mixin#optional-arguments"},"optional argument")," og håndtere begge parametere internt i mixinen."),"\n",r.createElement(n.h2,null,"Funksjoner"),"\n",r.createElement(n.p,null,"Med unntak av i ",r.createElement(n.code,null,"packages/core")," skal funksjoner som regel være private. Private funksjoner kan ikke brukes av andre moduler. Funksjoner er private om navnet starter med ",r.createElement(n.code,null,"_")," (underscore)."),"\n",r.createElement(n.h3,null,"Offentlig API"),"\n",r.createElement(n.p,null,"Public funksjoner er en del av pakkens API. En funksjon er public dersom navnet ",r.createElement(n.em,null,"ikke")," starter med ",r.createElement(n.code,null,"_")," (underscore)."),"\n",r.createElement(n.p,null,"Funksjoner som er public skal dokumenteres med ",r.createElement(n.a,{href:"#sassdoc"},"SassDoc"),"."),"\n",r.createElement(n.p,null,"I public funksjoner er endring i navnet på parametere å anse som en ",r.createElement(n.em,null,"breaking change"),". Det er fordi utviklere kan ha brukt ",r.createElement(n.a,{href:"https://sass-lang.com/documentation/at-rules/function#keyword-arguments"},"keyword arguments"),"."),"\n",r.createElement(n.p,null,"Om du vil endre navnet på en bakoverkompatibel måte kan du beholdet det gamle navnet som et ",r.createElement(n.a,{href:"https://sass-lang.com/documentation/at-rules/function#optional-arguments"},"optional argument")," og håndtere begge parametere internt i funksjonen."),"\n",r.createElement(n.h2,null,"Animasjoner"),"\n",r.createElement(n.p,null,"CSS-animasjoner er ansett som private, ikke som en del av det offisielle APIet til en pakke. Vi bruker et ",r.createElement(n.a,{href:"https://sass-lang.com/documentation/interpolation#in-sassscript"},"mønster basert på ",r.createElement(n.em,null,"interpolation"))," og ",r.createElement(n.a,{href:"https://sass-lang.com/documentation/modules/string#unique-id"},"string.unique-id()")," for å få garantert unike IDer per bygg."),"\n",r.createElement(n.p,null,"Vi prefikser likevel animasjonsnavnet med ",r.createElement(n.code,null,"jkl")," for å synliggjøre at animasjonen kommer fra Jøkul."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-scss"},'$_dismiss-animation-name: jkl-dismiss-#{string.unique-id()};\n\n.jkl-alert-message {\n    /* ... */\n    animation: $_dismiss-animation-name jkl.timing("lazy") jkl.easing("exit") forwards;\n    /* ... */\n}\n\n@keyframes #{$_dismiss-animation-name} {\n    from {\n        /* ... */\n    }\n\n    to {\n        /* ... */\n    }\n}\n')),"\n",r.createElement(n.h2,null,"SassDoc"),"\n",r.createElement(n.p,null,"All Sass-kode som er en del av pakkens offentlige API skal dokumenteres med ",r.createElement(n.a,{href:"http://sassdoc.com"},"SassDoc"),"."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-scss"},"/// Kalkuler riktig rem-verdi basert på en gitt pixelverdi\n/// @param {Number} $px-size - Pixelverdi, helst med unit\n/// @return {Number} - Pixelverdien konvertert til rem\n/// @example\n///     jkl.rem(16px);\n@function rem($px-size) {\n    // ...\n}\n")),"\n",r.createElement(n.p,null,"Dokumentasjonen er til hjelp både for de som skal vedlikeholde koden, og de som skal bruke den."),"\n",r.createElement(n.h3,null,"Kort om annotasjoner"),"\n",r.createElement(n.p,null,"Det er typisk bare et utvalg dem du trenger å vite om, men se gjerne over ",r.createElement(n.a,{href:"http://sassdoc.com/annotations/#description"},"listen med tilgjengelige annotasjoner"),"."),"\n",r.createElement(n.p,null,"Her er en kort oppsummering av de viktigste tingene du trenger å vite:"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,r.createElement(n.code,null,"@access")," bruker vi ikke. Det er gitt av navnet på variabelen/funksjonen/mixinen om den er public eller private, og annotasjonen skaper bare støy."),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"@author")," bruker vi bare når vi vil henvise til en opprinnelig forfatter utenfor Fremtind."),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"@content")," bruker vi til å beskrive hvordan mixins som har en ",r.createElement(n.code,null,"@content")," bruker den."),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"@deprecated")," bruker vi for å gi hint om at noe ikke bør brukes lenger, helst med forklaring om hva som bør brukes i stedet. Ting merket ",r.createElement(n.code,null,"@deprecated")," vil typisk bli fjernet fra Jøkul etter hvert."),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"@example")," er fint for å gi et kodeeksempel."),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"@output")," beskriver kort hva mixinen produserer av CSS."),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"@parameter")," beskriver hvert enkelt parameter i funksjonen/mixinen."),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"@return")," beskriver kort hva funksjonen returnerer."),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"@see")," hinter om relaterte variabler/funksjoner/mixins."),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"@type")," gir et ",r.createElement(n.a,{href:"https://sass-lang.com/documentation/values"},"typehint om variabler")," som kan brukes i SassDoc. Har ingen faktisk typesjekking."),"\n"),"\n",r.createElement(n.p,null,"Du trenger ikke alltid bruke alle annotasjonene. Dokumenter det du synes gir mening, så kan det heller finpusses under code review."),"\n",r.createElement(n.p,null,"Under er noen eksempler på hvordan du kan bruke de ulike annotasjonene."),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,r.createElement(n.code,null,"@content")," og ",r.createElement(n.code,null,"@example"))),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-scss"},"/// Forenkler media queries som skal gjelde mellom to skjermbredder.\n/// Maksverdien er _eksklusiv_ (verdien vil bli $max - 1px).\n/// @content Plasseres i et media query med min-width lik $min og max-width lik $max - 1px\n/// @example\n///    .class {\n///        @include jkl.screen-between(42px, 420px) {\n///            display: none;\n///        }\n///    }\n@mixin screen-between($min, $max) {\n    @media (min-width: $min) and (max-width: #{$max - 1px}) {\n        @content;\n    }\n}\n")),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,r.createElement(n.code,null,"@deprecated"))),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-scss"},"/// @deprecated Bruk heller .jkl-nav-card, .jkl-task-card eller .jkl-info-card\n.jkl-card {\n    // ...\n}\n")),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,r.createElement(n.code,null,"@param")," og ",r.createElement(n.code,null,"@output"))),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-scss"},'/// Hjelper for å sette riktig farge på SVGer i Chrome for brukere med Forced Color-modus.\n/// Se https://melanie-richards.com/blog/currentcolor-svg-hcm/ for detaljer\n/// @param {"Canvas" | "CanvasText" | "LinkText" | "GrayText" | "Highlight" | "HighlightText" | "ButtonFace" | "ButtonText"} $stroke - Definer hvilken systemfarge som skal brukes til stroke. Fargene har en forventet betydning for brukeren. Følg den semantiske betydningen til fargen, ikke velg fargen du selv synes "ser best ut".\n/// @param {"Canvas" | "CanvasText" | "LinkText" | "GrayText" | "Highlight" | "HighlightText" | "ButtonFace" | "ButtonText"} $fill [null] - Som $stroke, bare for fill. Valgfri.\n/// @output Setter angitte verdier på nåværende selector og dens svg og path children, inni et media query som treffer dersom forced-colors er aktiv.\n@mixin forced-colors-svg-fallback($stroke, $fill: null) {\n    // ...\n}\n')),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,r.createElement(n.code,null,"@type"))),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-scss"},"/// Tilsvarer 16px\n/// @type Number\n$spacing-m: 1rem;\n")),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,r.createElement(n.code,null,"@see"))),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-scss"},'/// Hent en timing til bruk i animasjoner. Se også `easing`-funksjonen og `motion`-mixinen.\n/// @param {"energetic" | "productive" | "expressive" | "lazy"} $mode - Navn på timingen du ønsker verdien til\n/// @return {String} - timingverdi til bruk i animasjoner\n/// @see easing\n/// @see motion\n@function timing($mode, $timings: $_timings) {\n    // ...\n}\n')))}var s=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?r.createElement(n,e,r.createElement(a,e)):a(e)};function o(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var i=t(72285),m=t(22756),c=t(95573),d=t(1634);const u=e=>{let{pageContext:n}=e;return r.createElement(m.p,{title:n.title})},p=e=>{let{location:n,data:t,pageContext:l,children:a}=e;const{frontmatter:s}=t.page,{types:o}=l;return r.createElement(d.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(c.M1,Object.assign({},s,{versions:l.versions})),r.createElement(c.w5,s),a,o&&r.createElement(i.l,{types:o}))};function k(e){return r.createElement(p,e,r.createElement(s,e))}},72285:function(e,n,t){t.d(n,{l:function(){return p}});var l=t(78217),r=t(41994),a=t(87505),s=t(70079);const o=e=>s.createElement("code",{className:"jkl-portal-inline-code"},e),i=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},m=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},c=(e,n)=>{const{scrollLeft:t,scrollWidth:l}=e,{clientWidth:r}=n,a=t>0,s=l-t>r;n.classList.toggle("left-shadow",a),n.classList.toggle("right-shadow",s)},d=e=>{const n=e.target,t=n.parentElement;c(n,t)},u=e=>{let{props:n}=e;const t=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&c(n,e)}}))})),l=t.current.parentElement.parentElement;n.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),s.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},s.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},s.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=n,l.map((e=>{var n,t;return[e.name?o(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?o(e.type.name):""]})))})));var l},p=e=>{let{types:n}=e;return s.createElement("section",{className:"jkl-spacing-104--bottom jkl-portal-paragraph"},s.createElement("h2",{className:"jkl-heading-1 jkl-spacing-104--top"},"React API"),s.createElement("p",{className:"jkl-body jkl-spacing-16--top"},"Her finner du en oversikt over props på komponentene i pakken."),s.createElement(l.U,{className:"jkl-spacing-40--top jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const l=t.props?Object.values(t.props).filter(m):[],a=t.props?Object.values(t.props).filter(i):[];return s.createElement(r.Q,{title:n,key:n,className:"jkl-portal-api-docs__item"},l.length>0&&s.createElement(u,{props:l}),a.length>0&&s.createElement(s.Fragment,null,s.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),s.createElement(u,{props:a})))}))))}},1634:function(e,n,t){t.d(n,{M:function(){return i}});var l=t(26372),r=t.n(l),a=t(49597),s=t(70079),o=t(34044);const i=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:l}=(0,s.useContext)(o.R),i="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return s.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||i?0:.35},className:r()("jkl-portal__main",n),id:"innhold"},t)}},78217:function(e,n,t){t.d(n,{U:function(){return s}});var l=t(26372),r=t.n(l),a=t(70079);const s=e=>{let{className:n,density:t,...l}=e;return a.createElement("div",{"data-testid":"jkl-accordion",className:r()("jkl-accordion",n),"data-density":t,...l})}},41994:function(e,n,t){t.d(n,{Q:function(){return m}});var l=t(53484),r=t(3438),a=t(84490),s=t(26372),o=t.n(s),i=t(70079);const m=e=>{let{children:n,title:t,className:s,startExpanded:m=!1,onClick:c,...d}=e;const u=(0,r.M)("title"),p=(0,r.M)("content"),{0:k,1:g}=(0,i.useState)(m),[v]=(0,a.v)(k,{easing:"exit",timing:"expressive"});return i.createElement("div",{"data-testid":"jkl-accordion-item",...d,className:o()("jkl-accordion-item",s,{"jkl-accordion-item--expanded":k})},i.createElement("button",{id:u,className:"jkl-accordion-item__title",type:"button","aria-expanded":k,"aria-controls":p,onClick:e=>{const n=!k;g(n),c&&c(e,n)}},t,i.createElement(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})),i.createElement("div",{id:p,ref:v,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":u,hidden:!k},i.createElement("div",{className:"jkl-accordion-item__content"},n)))}},87505:function(e,n,t){t.d(n,{w:function(){return d}});var l=t(70079),r=t(41699),a=t(65174),s=t(6914),o=t(82546),i=t(39126),m=t(66169),c=t(94509);const d=(0,l.forwardRef)(((e,n)=>{let{caption:t,columns:d,emptyTableText:u,rows:p,verticalAlign:k,...g}=e;return l.createElement(r.i,{fullWidth:!0,...g,ref:n},t&&l.createElement(s.R,{srOnly:!0},t),l.createElement(i.s,null,l.createElement(c.S,null,d.map(((e,n)=>l.createElement(m.x,{key:n,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===p.length&&u&&l.createElement(c.S,null,l.createElement(o.p,{colSpan:d.length},u)),p.map(((e,n)=>l.createElement(c.S,{key:n},e.map(((e,n)=>l.createElement(o.p,{key:n,"data-th":d[n],verticalAlign:k},e))))))))}));d.displayName="DataTable"}}]);