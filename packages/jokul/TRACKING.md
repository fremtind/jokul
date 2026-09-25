# Sporing (Mixpanel)

Valgfri sporing av brukshendelser (f.eks. knappeklikk) til Mixpanel, via
`@fremtind/jokul/cookie-consent`. Sporing er en del av
`CookieConsentProvider` - ingen egen provider å sette opp.

Sporingen bygger på Mixpanels innebygde
[`autocapture`](https://docs.mixpanel.com/docs/tracking-methods/autocapture)
(automatisk DOM-hendelsesdeteksjon - klikk, samt rage click, dead click,
input-endring og skjema-innsending), scopet til elementer som er
eksplisitt merket med `data-jkl-tracked` - ikke resten av
forbrukerappens side. Komponenter merker seg selv deklarativt med
`data-*`-attributter; det er ingen tracking-hook å importere eller
kalle.

**Hvem er denne dokumentasjonen for?**

- **Utviklere som tar i bruk sporing i egen app** - start med
  [Beslutningsguide](#beslutningsguide) og
  [Sette opp egen sporing](#sette-opp-egen-sporing).
- **Designere og produkteiere** som vil forstå hva sporingen gir av
  innsikt, og hva som (ikke) samles inn om brukerne - start med
  [For designere og produkteiere](#for-designere-og-produkteiere).
- **Bidragsytere til Jøkul** som vil instrumentere en ny komponent - start
  med [Instrumentere flere komponenter](#instrumentere-flere-komponenter).
- **Jøkul-teamet** som vedlikeholder funksjonaliteten - se
  [Arkitektur](#arkitektur) og
  [Oppsett for Jøkul-teamet](#oppsett-for-jøkul-teamet-vedlikeholdere).

Kjenner du ikke Mixpanel-begrepene som brukes under (`autocapture`,
`distinct_id`, `rage click` osv.), se [Ordliste](#ordliste).

## Innhold

- [For designere og produkteiere](#for-designere-og-produkteiere)
- [Kortversjon (for utviklere)](#kortversjon-for-utviklere)
- [Beslutningsguide](#beslutningsguide)
- [Sette opp egen sporing](#sette-opp-egen-sporing)
- [Har appen din allerede egen Mixpanel-sporing?](#har-appen-din-allerede-egen-mixpanel-sporing)
- [Sporing til Jøkul-teamets prosjekt](#sporing-til-jøkul-teamets-prosjekt)
- [Hva sendes til Jøkul vs. til teamets eget prosjekt](#hva-sendes-til-jøkul-vs-til-teamets-eget-prosjekt)
  - [Eksempel: faktisk payload for et Button-klikk](#eksempel-faktisk-payload-for-et-button-klikk)
  - [Eksempel: faktisk payload for et tekstfelt (`Search`)](#eksempel-faktisk-payload-for-et-tekstfelt-search)
- [Komponenter med sporing](#komponenter-med-sporing)
- [Legge til egne felter med `tracking`-propen](#legge-til-egne-felter-med-tracking-propen)
- [Instrumentere flere komponenter](#instrumentere-flere-komponenter)
  - [Eksempel: klikk, endring og innsending i samme skjema](#eksempel-klikk-endring-og-innsending-i-samme-skjema)
  - [Hvorfor er det trygt å spore tekstfelt uten å sende innholdet?](#hvorfor-er-det-trygt-å-spore-tekstfelt-uten-å-sende-innholdet)
- [Fordeler og ulemper med autocapture](#fordeler-og-ulemper-med-autocapture)
- [Ordliste](#ordliste)
- [Ofte stilte spørsmål](#ofte-stilte-spørsmål)
- [Arkitektur](#arkitektur)
  - [Server-side rendering (SSR)](#server-side-rendering-ssr)
- [Oppsett for Jøkul-teamet (vedlikeholdere)](#oppsett-for-jøkul-teamet-vedlikeholdere)
- [Testing](#testing)

## For designere og produkteiere

Du trenger ikke å kunne kode for å ha nytte av denne funksjonaliteten -
denne seksjonen forklarer hva den gir dere av innsikt, og hva som (ikke)
samles inn om sluttbrukerne, i vanlig språk.

**Hvorfor er dette nyttig for meg?**

- Dere får **faktiske bruksdata** for Jøkul-komponenter i egen app - f.eks.
  hvor ofte en knapp faktisk klikkes, i stedet for å gjette basert på
  design-intensjon alene.
- To av signalene - **rage click** (brukeren klikker gjentatte ganger,
  raskt, på samme element - typisk tegn på frustrasjon) og **dead click**
  (klikket fører tilsynelatende ikke til noen synlig endring) - er spesielt
  relevante for design- og UX-arbeid: de peker konkret på komponenter eller
  flyter som oppleves som trege, forvirrende eller ødelagte i faktisk bruk,
  uten at dere trenger å sette opp egne brukertester for å oppdage det.
- Jøkul-teamet får tilsvarende, anonymisert innsikt på tvers av **alle**
  apper som bruker sporingen - dette bruker vi til å prioritere hvilke
  komponenter/mønstre som trenger mest oppmerksomhet i designsystemet.

**Hva samles inn om brukerne våre - og hva samles ikke inn?**

- Det samles **ingen navn, e-post, fødselsnummer eller annen direkte
  identifiserende informasjon**. Hver bruker/nettleser får en tilfeldig,
  SDK-generert ID (`distinct_id`) som gjør at man kan telle unike brukere
  og se gjentatte besøk fra samme nettleser - denne er ikke koblet til
  innlogging eller annen identitet i appen deres.
- Sporingen er **opt-in**: den aktiveres først når en sluttbruker
  eksplisitt gir statistikk-samtykke i `CookieConsent`-dialogen. Ingenting
  sendes før det skjer.
- Det som faktisk sendes til Jøkuls sentrale, anonymiserte prosjekt er
  begrenset til: hvilken komponent/variant som ble brukt, selve
  klikket/interaksjonen, en anonym bruker-ID, nettleser-/enhet-/skjermdata
  (for å prioritere nettleserstøtte og responsive design), og - hvis dere
  setter det opp - hvilken app/team det gjelder (`appName`). Ikke
  URL-er/ruter, ikke IP-adresse, og ingen fritekst brukeren måtte ha
  skrevet inn. Se
  [Hva sendes til Jøkul vs. til teamets eget prosjekt](#hva-sendes-til-jøkul-vs-til-teamets-eget-prosjekt)
  for en fullstendig oversikt og konkrete eksempler.
- Appens **eget** Mixpanel-prosjekt (hvis dere setter opp `mixpanelToken`)
  får derimot alt `autocapture` og Mixpanel naturlig samler inn (URL,
  nettleser, enhet osv.), pluss ev. egne felter dere selv velger å legge
  til via `tracking`-propen - dette er deres eget ansvar å vurdere
  personvernmessig, se [Ofte stilte spørsmål](#ofte-stilte-spørsmål).

**Hvordan får jeg tilgang til innsikten?**

- Egen apps data: samme sted dere allerede ser Mixpanel-dataene deres i
  dag (eller [Sette opp egen sporing](#sette-opp-egen-sporing) hvis dere
  ikke har gjort det ennå).
- Jøkuls aggregerte, sentrale innsikt: ta kontakt med Jøkul-teamet (Teams
  eller et GitHub-issue) - det finnes foreløpig ikke en selvbetjent, delt
  dashboard-løsning for dette.

**Vil du ha sporing på en komponent som mangler det i dag?**

Se [Komponenter med sporing](#komponenter-med-sporing) for hva som er
instrumentert i dag. Ønsker dere data på en komponent som mangler,
ta kontakt med Jøkul-teamet eller se
[Instrumentere flere komponenter](#instrumentere-flere-komponenter) hvis
noen hos dere selv vil bidra med koden.

## Kortversjon (for utviklere)

- Krever `CookieConsentProvider` + statistikk-samtykke. Samtykke hentes
  automatisk fra cookien - ingen egen prop å sette.
- `mixpanelToken` på `CookieConsentProvider` gir deg full oversikt i ditt
  eget Mixpanel-prosjekt.
- Komponentene sender i tillegg alltid en minimal, anonymisert versjon av
  klikk-hendelsen til Jøkul-teamets eget prosjekt - uavhengig av
  `mixpanelToken`.
- `mixpanel-browser` er en `optionalDependency`, installeres automatisk og
  importeres dynamisk (lat) kun når sporing faktisk skal initialiseres
  (samtykke + token) - ingen ekstra oppsett i forbrukerappens bundler, og
  ingen bunt-/nedlastingskostnad for apper som ikke bruker sporing.

## Beslutningsguide

Rask oversikt over de vanligste beslutningene, med lenke videre til
detaljene.

**Bør appen vår ta i bruk sporing (sette `mixpanelToken`)?**

- Ja, hvis dere ønsker produktanalyse på Jøkul-komponenter uten å bygge
  det selv, og dere allerede har (eller er komfortable med å sette opp)
  `CookieConsentProvider` med statistikk-samtykke.
- Vær oppmerksom på at et gitt statistikk-samtykke alltid sender en
  anonymisert versjon av samme hendelser til Jøkuls sentrale prosjekt også
  - uavhengig av om dere setter `mixpanelToken` eller ikke, og uten en
    egen bryter for å reservere seg mot kun dette i dag, se
  [Ofte stilte spørsmål](#ofte-stilte-spørsmål).
- Har appen deres allerede egen Mixpanel-instrumentering fra før? Det er
  trygt å kombinere - se
  [Har appen din allerede egen Mixpanel-sporing?](#har-appen-din-allerede-egen-mixpanel-sporing)
  for hvorfor, og en migreringsguide.

**Bør jeg legge til `data-jkl-tracked` på en ny komponent (som
bidragsyter til Jøkul)?**

- Ja, hvis komponenten har en tydelig brukshandling som er nyttig å måle
  bruksfrekvens eller friksjon på - typisk interaktive komponenter
  (knapper, lenker, skjemafelter, faner, expandere). Se
  [Instrumentere flere komponenter](#instrumentere-flere-komponenter).
- Vurder nøye hvilke ekstra `data-*`-attributter som faktisk gir nyttig
  innsikt (f.eks. `variant`/status) før de legges i
  `capture_extra_attrs` - ikke legg til attributter "for sikkerhets
  skyld".
- Legg **aldri** til fritekst eller andre potensielt
  personopplysning-holdige verdier (f.eks. rå brukerinput) som en delt
  `data-*`-attributt - disse fanges opp av BEGGE Mixpanel-prosjekter,
  inkludert Jøkuls sentrale.

**Bør jeg bruke `tracking`-propen for et felt jeg vil spore?**

- Ja, hvis feltet er teamspesifikt (f.eks. en ordre-ID eller et
  flow-navn) og ikke skal deles med Jøkuls aggregerte prosjekt - se
  [Legge til egne felter med `tracking`-propen](#legge-til-egne-felter-med-tracking-propen).
- Vurder heller å foreslå feltet som en ny, delt `data-jkl-*`-attributt på
  selve komponenten (se over) hvis det er noe som er nyttig på tvers av
  flere team - det gir bedre, mer konsistent datakvalitet enn at hvert
  team finner opp sitt eget navn for det samme.
- Unngå direkte personopplysninger (navn, e-post, fødselsnummer, fritekst
  fra bruker) i `tracking`-propen selv om den kun når eget prosjekt -
  Mixpanel gir ingen ekstra beskyttelse for slikt innhold utover andre
  felter.

## Sette opp egen sporing

```bash
npm install mixpanel-browser
```

```tsx
import { CookieConsentProvider } from "@fremtind/jokul/cookie-consent";

function App() {
    return (
        <CookieConsentProvider
            statistics
            mixpanelToken={process.env.MIXPANEL_TOKEN}
            appName="mitt-produkt"
        >
            {/* Resten av appen din */}
        </CookieConsentProvider>
    );
}
```

Sporing starter automatisk når brukeren gir statistikk-samtykke i
`CookieConsent`-dialogen. `statistics`-propen er det som faktisk gjør at
`CookieConsentProvider` spør om statistikk-samtykke i utgangspunktet -
uten den vises aldri spørsmålet, og sporing forblir en stille no-op
uansett token.

| Prop            | Type     | Standard | Beskrivelse                                                                   |
| ---------------- | -------- | -------- | ------------------------------------------------------------------------------ |
| `statistics`     | `boolean`| -        | Må settes til `true` for at `CookieConsentProvider` skal be om statistikk-samtykke i det hele tatt. Uten denne aktiveres sporing aldri, selv med `mixpanelToken` satt. |
| `mixpanelToken`  | `string` | -        | Ditt eget Mixpanel-prosjekt-token. Uten denne er egen sporing en no-op.        |
| `appName`        | `string` | -        | Identifiserer appen/teamet, nyttig ved delt Mixpanel-prosjekt. Sendes også til Jøkuls sentrale prosjekt (se [Hva sendes til Jøkul vs. til teamets eget prosjekt](#hva-sendes-til-jøkul-vs-til-teamets-eget-prosjekt)) - helt valgfritt. |

`mixpanel-browser` er en `optionalDependency` av `@fremtind/jokul` og
installeres derfor automatisk av npm/pnpm sammen med resten av pakken
(samme mønster som f.eks. `@floating-ui/react`). Selve
Mixpanel-instansene initialiseres først når samtykke og token faktisk er
til stede, så det påløper ingen nettverkstrafikk eller kjøretidskostnad
før det skjer.

## Har appen din allerede egen Mixpanel-sporing?

Mange team har trolig allerede egen, hendelsesbasert Mixpanel-instrumentering
(egne `mixpanel.init()`- og `track()`-kall) før de tar i bruk denne
funksjonaliteten. Kort oppsummert: **du kan trygt bruke `mixpanelToken` selv
om appen din allerede har sin egen Mixpanel-oppsett** - de forstyrrer ikke
hverandre - men noen av de gamle, håndskrevne sporingskallene bør etter
hvert fjernes for å unngå duplikate hendelser.

### Kolliderer vi med din egen instans?

Nei - av tre uavhengige grunner, alle bekreftet mot `mixpanel-browser` sin
kildekode:

1. **Egne, navngitte instanser.** `mixpanelToken`/`appName` initialiserer en
   Mixpanel-instans med et internt, unikt genert navn
   (`mixpanel.init(token, config, "__jkl_team__<n>")`), ikke SDK-ens
   default/anonyme instans. Et `mixpanel.init(...)`-kall du selv gjør et
   annet sted i appen (uten et navn, eller med et annet navn) er en
   fullstendig separat klient - config, `distinct_id`, super-properties og
   `reset()` påvirker aldri hverandre på tvers av instanser.
2. **Ingen `window.mixpanel`-kollisjon.** Vi importerer `mixpanel-browser`
   som ES-modul (`import mixpanel from "mixpanel-browser"`), som aldri
   setter en global `window.mixpanel` - det skjer kun med Mixpanels
   snippet-baserte installasjon (`<script>`-taggen fra onboardingsguiden
   deres). Bruker appen din snippet-varianten, er det fortsatt ingen
   konflikt: det globale objektet fra snippeten og vår modul-interne
   instans lever i helt separate navnerom.
3. **Egen, isolert lagringsnøkkel (`persistence_name`).** Dette er den
   eneste reelle kollisjonsrisikoen vi fant, og den er nå lukket: Mixpanel
   SDK-en nøkler som standard sin `localStorage`/cookie-persistens
   (`distinct_id`, super-properties, kø av ikke-sendte hendelser) på
   **token alene**, ikke på instansnavnet. Gjenbruker appen din samme
   Mixpanel-token til sin egen, separate `mixpanel.init()`, ville de to
   instansene uten en eksplisitt `persistence_name` ha delt lagringsnøkkel
   - og en `reset()` her (f.eks. ved samtykketrekk) ville da nullstilt
   appens egen persisterte tilstand også. Vi setter derfor alltid
   `persistence_name` til vårt eget unike instansnavn, slik at lagringen
   vår er fullstendig isolert uansett om token er delt eller ikke.
4. **Vi rører ikke ved funksjonalitet på DIN instans.** `cross_subdomain_cookie`
   (identitet på tvers av subdomener) og innstillinger for Mixpanels Session
   Replay/heatmaps (`record_sessions_percent`, `record_heatmap_data`,
   `capture_text_content`) settes **kun** på Jøkuls egen interne instans (se
   [Sporing til Jøkul-teamets prosjekt](#sporing-til-jøkul-teamets-prosjekt))
   - aldri på instansen vi oppretter for `mixpanelToken` din. Bruker teamet
   ditt Mixpanels Session Replay eller er avhengig av cross-subdomain-
   identitet på egen instans (uavhengig av oss, eller senere via samme
   token), begrenser eller endrer ingenting her den bruken.

### Mulig duplisering av hendelser (ikke en teknisk kollisjon, men verdt å sjekke)

Hvis appen din *selv* har skrudd på Mixpanels `autocapture` på sin egen
instans (uavhengig av oss) uten å begrense den med `block_selectors`, vil
begge instansene fange opp klikk på Jøkul-komponenter merket med
`data-jkl-tracked` - du får da to hendelser (én fra din egen instans, én fra
vår) for samme klikk, til samme Mixpanel-prosjekt hvis dere bruker samme
token. Dette er ikke skadelig (ingen datalekkasje, ingen tilstandsfeil),
men kan gi doble tall i rapporter. Løsning: legg til
`block_selectors: ["[data-jkl-tracked]"]` i din egen `autocapture`-config,
så overlater du sporing av disse elementene helt til oss.

### Migrere fra egen, hendelsesbasert sporing

Har du i dag håndskrevne `track("Button click", {...})`-lignende kall for
interaksjoner som nå dekkes av `data-jkl-tracked`-komponenter (se
[Komponenter med sporing](#komponenter-med-sporing)), kan du gå over til
denne funksjonaliteten gradvis:

1. **Behold begge parallelt i en overgangsperiode, uten frykt for
   kollisjon.** Siden hendelsesnavnene er ulike (`$mp_click` fra
   autocapture vs. dine egne semantiske navn) og instansene er isolert som
   beskrevet over, kan du kjøre gammel og ny sporing side om side mens du
   bygger opp tillit til de nye tallene.
2. **Fjern de håndskrevne kallene** for komponenter som allerede sender
   `data-jkl-tracked` (Button per i dag) - ellers dobbeltteller dere samme
   klikk i egen dashbord/rapportering.
3. **Egne, vilkårlige felter** du tidligere sendte som ekstra
   `track()`-argumenter (f.eks. `orderId`), legger du på den sporede
   komponenten via `tracking`-propen i stedet - se
   [Legge til egne felter med `tracking`-propen](#legge-til-egne-felter-med-tracking-propen).
4. **Bygg om dashbord/rapporter** som er basert på de gamle, semantiske
   hendelsesnavnene - de nye hendelsene heter `$mp_click`,
   `$mp_rage_click`, `$mp_dead_click`, `$mp_input_change` eller
   `$mp_form_submit` (SDK-konstanter, se
   [Hendelsesnavnene er generiske SDK-konstanter](#hendelsesnavnene-er-generiske-sdk-konstanter)),
   med komponentnavn og øvrig kontekst som properties i stedet for i
   navnet. Mixpanels "Custom Events"/Lexicon-funksjonalitet lar deg
   definere lesbare visningsnavn basert på disse property-verdiene uten å
   endre kode.
5. **Komponenter uten `data-jkl-tracked` ennå** (de fleste utover `Button`
   per i dag) må du fortsatt spore selv til det er lagt til - se
   [Instrumentere flere komponenter](#instrumentere-flere-komponenter) hvis
   du selv ønsker å bidra med `data-*`-attributter i Jøkul-koden.

## Sporing til Jøkul-teamets prosjekt

Med statistikk-samtykke sender instrumenterte komponenter automatisk en
klikk-hendelse også til Jøkul-teamets sentrale Mixpanel-prosjekt,
uavhengig av `mixpanelToken`. Dette gir Jøkul-teamet aggregert innsikt i
faktisk komponentbruk på tvers av apper - og, hvis dere setter `appName`,
hvilke apper/team som bruker hva.

Denne instansen er anonymisert utover det innlysende (ingen
`tracking`-felter, ingen URL-er/ruter):

- `ip: false` - Mixpanel gjør ikke IP-basert geo-oppslag av forespørselen.
- `property_blacklist` fjerner felter som kan inneholde URL-er eller annen
  app-spesifikk kontekst: `$elements` (DOM-foreldrekjeden med
  klasser/attributter), `$pathname`, `$host`, de generelle automatiske
  super-propertiene `$current_url`, `$referrer`, `$referring_domain`, og
  `$el_attr__href` - `autocapture` løfter `href`-attributtet til nærmeste
  lenke-forelder opp som en egen property UAVHENGIG av `$elements`, så uten
  denne ville f.eks. `Link`/`NavLink`-klikk lekke den bokstavelige
  URL-en/ruten sentralt selv om `$elements` er blacklistet.
- `cross_subdomain_cookie: false` - Mixpanel setter som standard
  lagringscookien på hele det ekstraherte rotdomenet (f.eks. `.minapp.no`),
  ikke det eksakte vertsnavnet. Siden instansnavnet vårt er identisk for
  ALLE forbrukerapper, ville to ulike apper på samme rotdomene ellers i
  praksis dele samme skjulte bruker-ID i dette sentrale prosjektet -
  forurenser adopsjonstallene, og kan gjøre at én apps samtykke-
  tilbaketrekning (`reset()`) sletter en annen apps tilstand. Denne
  innstillingen gjelder **kun** vår interne instans, se punkt 4 i
  [Kolliderer vi med din egen instans?](#kolliderer-vi-med-din-egen-instans).
- `secure_cookie: true` - cookien sendes aldri over en ikke-HTTPS-tilkobling
  (harmløs herding, satt på begge instanser).
- `record_sessions_percent: 0`, `record_heatmap_data: false` og
  `capture_text_content: false` er allerede Mixpanel SDK-ens egne
  standardverdier (ingen session replay/skjermopptak, ingen fanging av
  DOM-tekstinnhold som f.eks. dynamisk knappetekst), men pinnes eksplisitt
  for vår interne instans - en feil her ville betydd fullt skjermopptak av
  forbrukerappen sentralt hos oss, så vi stoler ikke bare på SDK-defaults.
  Gjelder også **kun** vår interne instans - se punkt 4 over.
- `distinct_id` (en tilfeldig UUID generert av SDK-en, ikke direkte
  identifiserende) beholdes bevisst - den trengs for å telle unike
  brukere.
- `appName`, nettleser-/enhet-/skjermdata (`$browser`, `$browser_version`,
  `$os`, `$device`, `$screen_height`, `$screen_width`) og
  viewport-/side-dimensjoner (`$viewportHeight`, `$viewportWidth`,
  `$pageHeight`, `$pageWidth`) sendes derimot bevisst med - dette er ikke
  persondata (kombinert med `ip: false` er re-identifiseringsrisikoen
  svært lav), og gir Jøkul-teamet grunnlag for både adopsjonsinnsikt
  (hvilke apper/team bruker komponentene) og produktbeslutninger
  (nettleserstøtte, responsive breakpoints).
- **"Do Not Track" respekteres automatisk.** Har brukerens nettleser
  Do-Not-Track-innstillingen skrudd på, sender ikke Mixpanel SDK-en NOE i
  det hele tatt fra den nettleseren - verken til teamets eller Jøkuls
  prosjekt - selv om statistikk-samtykke er gitt (SDK-default
  `ignore_dnt: false`, som vi ikke overstyrer).

## Hva sendes til Jøkul vs. til teamets eget prosjekt

Begge Mixpanel-instansene initialiseres av samme `autocapture`-klikk (på
`[data-jkl-tracked]`-elementer) og samme samtykke, så hendelsen sendes
alltid til **begge** prosjekter samtidig når begge tokens er satt - de er
kun forskjellig konfigurert med tanke på hvilke felter som følger med:

| Felt / property                                                                                                                                    | Teamets eget prosjekt | Jøkuls sentrale prosjekt |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------: | :------------------------: |
| `$mp_click`-hendelsen i seg selv (klikk på `[data-jkl-tracked]`)                                                                                    | ✅                      | ✅                          |
| `data-jkl-tracked` (komponentnavn)                                                                                                                  | ✅                      | ✅                          |
| Delte `data-*`-attributter (`data-jkl-variant`, `data-jkl-has-icon`, `data-jkl-checked`, `data-jkl-selected`, `data-loading`, `disabled`, osv. - se `SHARED_CAPTURE_EXTRA_ATTRS`) | ✅ | ✅ |
| `data-jkl-tracking` (egne felter fra `tracking`-propen)                                                                                             | ✅                      | ❌ - utelates fra `capture_extra_attrs`, fanges aldri opp |
| `appName` (super-property registrert via `register()`)                                                                                              | ✅                      | ✅ - for å identifisere hvilke apper/team som bruker komponentene |
| `distinct_id` (tilfeldig UUID fra SDK-en, ikke identifiserende)                                                                                     | ✅                      | ✅ - beholdt bevisst for å telle unike brukere |
| `$browser`, `$browser_version`, `$os`, `$device`, `$screen_height`, `$screen_width`, `$viewportHeight`, `$viewportWidth`, `$pageHeight`, `$pageWidth` (nettleser-/enhet-/skjermdata) | ✅ | ✅ - ikke persondata, verdifullt for å prioritere nettleserstøtte og responsive breakpoints |
| `$elements`, `$pathname`, `$host` (`autocapture`s DOM-/URL-kontekst - kan røpe interne ruter/DOM-innhold)                                          | ✅                      | ❌ - `property_blacklist`   |
| `$current_url`, `$referrer`, `$referring_domain` (SDK-ens generelle navigasjons-super-properties)                                                  | ✅                      | ❌ - `property_blacklist`   |
| `$el_attr__href` (href til nærmeste lenke-forelder - egen property, UAVHENGIG av `$elements`) | ✅ | ❌ - `property_blacklist` |
| IP-basert geo-oppslag (Mixpanels standardoppførsel)                                                                                                 | ✅                      | ❌ - `ip: false`            |

Kort sagt: teamets eget prosjekt får alt `autocapture` og Mixpanel SDK-en
naturlig genererer, pluss egne felter via `tracking`-propen. Jøkuls
sentrale prosjekt får `appName` og nettleser-/enhet-/skjermdata i tillegg
til komponentbruken - dette er ikke persondata (kombinert med at
`ip: false` er satt, er re-identifiseringsrisikoen svært lav) og gir
Jøkul-teamet grunnlag for både adopsjonsinnsikt (hvilke apper/team bruker
hva) og produktbeslutninger (nettleserstøtte, responsive breakpoints). Det
sentrale prosjektet får derimot ALDRI URL-er/ruter, DOM-innhold, eller
teamspesifikke felter fra `tracking`-propen - disse kan røpe
app-interne detaljer og har lav verdi for designsystemarbeid.

### Eksempel: faktisk payload for et Button-klikk

Gitt oppsettet

```tsx
<CookieConsentProvider mixpanelToken="team-token" appName="mitt-produkt">
    <Button
        variant="primary"
        tracking={{ orderId: "12345", flow: "checkout" }}
    >
        Fullfør kjøp
    </Button>
</CookieConsentProvider>
```

sender et klikk på knappen (forenklet, ikke-uttømmende - Mixpanel SDK-en
legger til flere felter i praksis, f.eks. `$insert_id`/`$lib_version`)
omtrent dette til **teamets eget prosjekt**:

```jsonc
{
    "event": "$mp_click",
    "properties": {
        "token": "team-token",
        "distinct_id": "b3f2c9a1-8e2d-4c6a-9c1a-...", // tilfeldig UUID, ikke identifiserende
        "mp_lib": "web",
        "appName": "mitt-produkt",
        // Automatiske SDK-/side-felter (også sendt sentralt, bortsett fra URL-feltene):
        "$current_url": "https://minapp.no/kasse",
        "$referrer": "https://minapp.no/handlekurv",
        "$referring_domain": "minapp.no",
        "$browser": "Chrome",
        "$browser_version": 129,
        "$os": "Mac OS X",
        "$screen_height": 1080,
        "$screen_width": 1920,
        // Automatiske autocapture-felter (viewport/side-dimensjoner også sendt sentralt):
        "$host": "minapp.no",
        "$pathname": "/kasse",
        "$viewportHeight": 940,
        "$viewportWidth": 1920,
        "$pageHeight": 2200,
        "$pageWidth": 1920,
        "$elements": [/* hele DOM-foreldrekjeden til elementet - tag, klasser, attributter osv. */],
        "$el_classes": ["jkl-button", "jkl-button--primary"],
        // Attributter fra capture_extra_attrs (jf. data-jkl-tracked på elementet):
        "$el_attr__data-jkl-tracked": "Button",
        "$el_attr__data-jkl-variant": "primary",
        "$el_attr__data-jkl-tracking": "{\"orderId\":\"12345\",\"flow\":\"checkout\"}"
    }
}
```

Den samme hendelsen til **Jøkuls sentrale prosjekt** - samme klikk, men en
**egen, separat** `distinct_id` (de to Mixpanel-instansene har hver sin
`persistence_name`, så de genererer/lagrer hver sin uavhengige, anonyme
ID - klikket kan altså **ikke** korreleres på tvers av de to prosjektene
via `distinct_id`), og strippet ned til:

```jsonc
{
    "event": "$mp_click",
    "properties": {
        "token": "jkl-central-token",
        "distinct_id": "b3f2c9a1-8e2d-4c6a-9c1a-...",
        "mp_lib": "web",
        "appName": "mitt-produkt",
        // Nettleser-/enhet-/skjermdata - beholdt, se tabellen over:
        "$browser": "Chrome",
        "$browser_version": 129,
        "$os": "Mac OS X",
        "$screen_height": 1080,
        "$screen_width": 1920,
        "$viewportHeight": 940,
        "$viewportWidth": 1920,
        "$pageHeight": 2200,
        "$pageWidth": 1920,
        "$el_attr__data-jkl-tracked": "Button",
        "$el_attr__data-jkl-variant": "primary"
        // Ingen data-jkl-tracking/orderId/flow, ingen
        // $current_url/$referrer/$referring_domain/$elements/$pathname/$host
        // (property_blacklist), og ingen IP-basert geo-oppslag (ip: false)
        // - se tabellen over.
    }
}
```

**Merk for `Link`/`NavLink`** (som rendrer `<a href="...">`): et klikk på
disse ville i tillegg inneholdt `$el_attr__href` (den bokstavelige
URL-en/ruten lenken peker til) i **teamets** payload over - men aldri i
Jøkuls sentrale payload, siden `$el_attr__href` også er en del av
`property_blacklist` der (se tabellen over).

### Eksempel: faktisk payload for et tekstfelt (`Search`)

Tekstfelt som `Search` gir en tilsvarende,
men enda strammere payload - `$mp_input_change` i stedet for `$mp_click`,
og **ingen** `.value`/innhold noe sted (se
[Hvorfor er det trygt å spore tekstfelt uten å sende innholdet?](#hvorfor-er-det-trygt-å-spore-tekstfelt-uten-å-sende-innholdet)).
Gitt

```tsx
<Search />
```

og at brukeren skriver inn et søkeord og forlater feltet (native
`change`, ikke per tastetrykk), sendes omtrent dette til **teamets eget
prosjekt** (samme automatiske SDK-/side-felter som over er utelatt for
lesbarhet):

```jsonc
{
    "event": "$mp_input_change",
    "properties": {
        "token": "team-token",
        "distinct_id": "b3f2c9a1-8e2d-4c6a-9c1a-...",
        "appName": "mitt-produkt",
        "$el_attr__data-jkl-tracked": "Search",
        "$el_attr__data-jkl-variant": "input"
        // Ingen "$el_attr__value" eller lignende - autocapture leser aldri
        // .value fra input/textarea-elementer, uansett event-type.
    }
}
```

Til Jøkuls sentrale prosjekt sendes akkurat de samme to
`$el_attr__*`-feltene (pluss nettleser-/enhetsdata), med en egen,
separat `distinct_id` - identisk `property_blacklist`-logikk som for
klikk-hendelser.

## Komponenter med sporing

Ingen ekstra props trengs for den automatiske sporingen - komponenten
merker seg selv med `data-*`-attributter, og `autocapture` gjør resten.

> Denne PR-en inneholder kun **fire eksempelkomponenter** - én for hvert
> sporingsmønster som finnes i designsystemet i dag: enkelt klikk
> (`Button`), av/på-tilstand (`Checkbox`), dropdown/valgt-tilstand
> (`Select`) og tekstfelt (`Search`). Resten av komponentene (26 til
> sammen, pluss tekstfeltfamilien `TextInput`/`TextArea`/`FileInput`) er
> instrumentert på nøyaktig samme måte, men er trukket ut i en egen PR
> (#6584) slik at denne PR-en er enklere å vurdere isolert - se
> [Instrumentere flere komponenter](#instrumentere-flere-komponenter) for
> mer om hvorfor og hvordan de to henger sammen.

| Komponent                | `data-jkl-tracked`          | Andre felter (begge prosjekt)                            | Kun eget prosjekt   |
| ------------------------- | ---------------------------- | --------------------------------------------------------- | -------------------- |
| `Button`                 | `"Button"`                   | `data-jkl-variant`, `data-jkl-has-icon`, `data-loading`   | `data-jkl-tracking`  |
| `Checkbox`                | `"Checkbox"`                 | `data-jkl-checked`                                         | `data-jkl-tracking`  |
| `Select`                  | `"Select"` (triggerknapp + dropdown-valg) | `data-jkl-selected` (trigger: åpen/lukket; dropdown-valg: valgt alternativ) | `data-jkl-tracking`  |
| `Search`                  | `"Search"`                   | `data-jkl-variant` (`"input"`/`"clear"`)                   | -                    |


## Legge til egne felter med `tracking`-propen

Komponenter med innebygd sporing (som `Button`) tar imot en `tracking`-prop
for egne, kontekstspesifikke felter:

```tsx
<Button
    variant="primary"
    onClick={handleKjop}
    tracking={{ orderId, flow: "checkout" }}
>
    Kjøp
</Button>
```

Feltene serialiseres til én `data-jkl-tracking`-attributt (JSON) på
rot-elementet, og fanges kun opp av teamets egen Mixpanel-instans - den
sentrale Jøkul-instansen sin `autocapture`-konfigurasjon leser aldri
attributtet, så feltene når den aldri, uansett innhold.

### Slik fungerer `tracking`-propen internt

`tracking`-propen er ikke magisk - den er bare enda et `data-*`-attributt,
som resten av autocapture-oppsettet:

1. Komponenten legger `tracking?: TrackingProps` til i sin `Props`-type
   ved å utvide `WithTracking` (fra
   `@fremtind/jokul/cookie-consent`/`cookie-consent/types.ts`), der
   `TrackingProps` bare er `Record<string, unknown>` - altså et fritt
   objekt uten noe påtvunget skjema.
2. Komponenten plukker `tracking` ut av `props` og serialiserer den til
   `data-jkl-tracking={tracking ? JSON.stringify(tracking) : undefined}`
   på rot-DOM-elementet (se `Button.tsx` for et konkret eksempel).
   `undefined` gjør at attributtet ikke havner i DOM-en i det hele tatt
   når `tracking` ikke er satt, i stedet for f.eks. strengen
   `"undefined"`.
3. Attributtet ligger dermed på samme element som `data-jkl-tracked`, men
   leses **kun** av teamets egen Mixpanel-instans (via `mixpanelToken`) -
   den sentrale Jøkul-instansen sin `capture_extra_attrs`-liste inneholder
   ikke `data-jkl-tracking`, så feltene forlater aldri nettleseren til
   Jøkul sitt prosjekt, uansett hva de inneholder.
4. Siden verdien er fri JSON, er det opp til hvert team å sende egne,
   forretningsspesifikke felter (f.eks. `orderId`, `flow`) - det finnes
   ingen sentral validering eller liste å oppdatere, i motsetning til
   `capture_extra_attrs` for vanlige `data-*`-attributter (se
   [Instrumentere flere komponenter](#instrumentere-flere-komponenter)).

## Instrumentere flere komponenter

Se [Komponenter med sporing](#komponenter-med-sporing) for de fire
eksempelkomponentene i denne PR-en - ett eksempel per sporingsmønster
(klikk, av/på-tilstand, dropdown/valgt-tilstand og tekstfelt). Se
[Hvorfor er det trygt å spore tekstfelt uten å sende innholdet?](#hvorfor-er-det-trygt-å-spore-tekstfelt-uten-å-sende-innholdet)
for begrunnelsen bak `Search`-eksemplet spesielt. Alle de resterende 24
komponentene (samt tekstfeltfamilien `TextInput`/`TextArea`/`FileInput`)
er instrumentert på nøyaktig samme måte i PR #6584 - se den PR-en for den
fullstendige komponenttabellen. Nye komponenttyper som ikke finnes i noen
av PR-ene ennå (f.eks. `Modal`, `Popover`, `Tooltip`) instrumenteres ved å
sette riktige `data-*`-attributter på rot-DOM-elementet, uten å importere
noe fra `cookie-consent` (bortsett fra `WithTracking`-typen hvis
komponenten skal støtte `tracking`-propen):

```tsx
<div data-jkl-tracked="MinKomponent" data-jkl-egen-status={status}>
    ...
</div>
```

`data-jkl-tracked` gjør elementet synlig for `autocapture` og gir
komponentnavnet som property (`$el_attr__data-jkl-tracked`). Fem
element-baserte undersporinger er skrudd på - `click`, `rage_click`,
`dead_click`, `input` og `submit` - alle scopet likt til
`[data-jkl-tracked]`; kun `pageview` og `scroll` (som ikke er
element-baserte i det hele tatt) er skrudd av, se
[Fordeler og ulemper med autocapture](#fordeler-og-ulemper-med-autocapture).
Alle andre `data-*`-attributter på elementet blir automatisk med som
properties også, så lenge de er lagt til i `capture_extra_attrs`-listen i
`trackingContext.ts` - meld fra til Jøkul-teamet (eller send en PR) for å
legge til nye attributtnavn der.

Gjenbruk gjerne det etablerte navnesettet
(`data-jkl-variant`, `data-jkl-has-icon`, `data-jkl-checked`,
`data-jkl-selected`, native `disabled`) i stedet for å finne opp nye navn
per komponent - siden `capture_extra_attrs` er én delt liste for ALLE
instrumenterte komponenter, gir gjenbruk mer konsistente og
sammenlignbare data på tvers av komponenter i Mixpanel.

### Eksempel: klikk, endring og innsending i samme skjema

Et vanlig spørsmål er hvordan man setter opp sporing på flere
hendelsestyper samtidig - typisk `onClick`, `onChange`/`onBlur` og
`onSubmit` på et skjema. Med `autocapture` trenger man **ingen egne
event-handlere for selve sporingen** - man setter kun `data-jkl-tracked`
(og ev. `data-jkl-variant`) på elementene som skal spores, så fanger de
fem element-baserte undersporingene (se over) opp de tilsvarende native
DOM-hendelsene automatisk:

```tsx
<form data-jkl-tracked="MittSkjema" onSubmit={handleSubmit}>
    <TextInput label="E-post" name="epost" />
    <Button type="submit">Send inn</Button>
</form>
```

Med kun markeringen over - ingen ekstra kode for selve sporingen:

- Et klikk på `Button` (som allerede har `data-jkl-tracked="Button"` på
  seg internt) fanges av `click`-undersporingen.
- Når `TextInput`-feltet forlates med en ny verdi (native `change`,
  altså etter en "blur" - ikke per tastetrykk), fanges det av
  `input`-undersporingen, som kun gir et "feltet ble endret"-signal, se
  [Hvorfor er det trygt å spore tekstfelt uten å sende innholdet?](#hvorfor-er-det-trygt-å-spore-tekstfelt-uten-å-sende-innholdet).
- Selve innsendingen av `<form data-jkl-tracked="MittSkjema">` fanges av
  `submit`-undersporingen - helt uavhengig av den vanlige React
  `onSubmit`-handleren man uansett trenger for egen forretningslogikk.

Man trenger med andre ord aldri å kalle Mixpanel-SDK-en direkte fra
`onClick`/`onChange`/`onBlur`/`onSubmit` selv for å få sporing -
`data-jkl-tracked`-attributtet er alt som kreves, og riktig hendelse
sendes automatisk basert på hvilket DOM-element som ble klikket, endret
eller sendt inn.

Oversikt over hvilken React-hendelse (den man uansett trenger for egen
forretningslogikk) som mappes til hvilken autocapture-undersporing:

| React-hendelse | Native DOM-hendelse | Autocapture-undersporing | Eksempel over |
| --------------- | -------------------- | -------------------------- | -------------- |
| `onClick`       | `click`              | `click` (og `rage_click`/`dead_click` ved gjentatte/uvirksomme klikk) | Klikk på `Button` |
| `onChange`/`onBlur` | `change` (fyres etter blur, ikke per tastetrykk) | `input` | `TextInput` forlates med ny verdi |
| `onSubmit`      | `submit`              | `submit`                   | Innsending av `<form data-jkl-tracked>` |

### Forskjellen på klikk- og inputbasert sporing

`click`- og `input`-undersporingen ser like ut på overflaten (begge er
bare `data-jkl-tracked` på et element), men de har ulik utløsningslogikk,
ulikt frekvensmønster og ulike properties i den ferdige hendelsen:

- **Klikkbasert (`Button`, `Checkbox`, `Select`)**: trigges av det native
  `click`-eventet - én hendelse per klikk, uansett om verdien "endres"
  eller ei (et klikk på en allerede avkrysset `Checkbox` gir likevel en
  ny `click`-hendelse). Egnet for komponenter der selve handlingen
  (trykket) er det interessante, ikke en verdi. Hendelsen kan i tillegg
  klassifiseres som `rage_click` (mange klikk på samme sted på kort tid)
  eller `dead_click` (klikk som ikke fører til noen synlig DOM-endring) -
  et signal `input`-undersporingen ikke har noe tilsvarende til.
- **Inputbasert (`Search`, `TextInput`, `TextArea`)**: trigges av det
  native `change`-eventet, altså først når feltet forlates/committes med
  en *ny* verdi (ikke per tastetrykk, og ikke i det hele tatt hvis
  verdien er uendret ved blur). Egnet for tekstfelt der selve
  tasteinnholdet aldri skal ut (se
  [Hvorfor er det trygt å spore tekstfelt uten å sende innholdet?](#hvorfor-er-det-trygt-å-spore-tekstfelt-uten-å-sende-innholdet)),
  så hendelsen bærer bevisst ingen verdi/`.value` - kun at *et* felt med
  gitt `data-jkl-tracked`/`data-jkl-variant` ble endret.
- Begge undersporingene er del av samme `autocapture`-konfigurasjon og
  scopet til samme selector (`[data-jkl-tracked]`), så hvilken av dem som
  faktisk trigges avgjøres utelukkende av hvilket DOM-element og hvilket
  native event som skjer - komponenten trenger ingen egen logikk for å
  velge riktig undersporing.

### Støtte `tracking`-propen i egen komponent

Utvid `Props`-typen med `WithTracking` (fra `@fremtind/jokul/cookie-consent`),
og legg feltet ut som en `data-jkl-tracking`-attributt (JSON), på samme
måte som `Button` gjør:

```tsx
data-jkl-tracking={tracking ? JSON.stringify(tracking) : undefined}
```

### Hvorfor er det trygt å spore tekstfelt uten å sende innholdet?

`Search` sitt tekstfelt er instrumentert med `data-jkl-tracked`, akkurat
som klikkbare komponenter. Tekstfeltfamilien for øvrig (`TextInput`,
`TextArea`, søkefeltene i `Combobox`/`Autosuggest`) er instrumentert på
nøyaktig samme måte i PR #6584. Dette kan virke overraskende - sporer vi
da hva folk skriver? **Nei.** Dette er verifisert direkte i
`mixpanel-browser` sin kildekode (`autocapture/utils.js`), ikke bare
antatt:

- `autocapture` sin `input`-undersporing leser **aldri** `.value` fra et
  `<input>`/`<textarea>`-element noe sted i koden - verken i
  `$mp_input_change`-hendelsen eller noen annen hendelse. Det finnes ingen
  kodesti som sender selve teksten brukeren har skrevet, uansett hvilke
  `data-*`-attributter feltet har.
- Hendelsen trigges på det native `change`-eventet (ikke `input`), altså
  når feltet blir forlatt/committet med en ny verdi - ikke per tastetrykk.
  Det er derfor et lavfrekvent, lavstøy "feltet ble brukt"-signal, ikke en
  strøm av tastetrykk.
- SDK-en har riktignok en egen, innebygd begrensning
  (`shouldTrackElementDetails`) som fjerner generell
  element-detaljfangst (klasser/andre attributter) for
  `input`/`select`/`textarea`/`contenteditable`-elementer, samt eksplisitt
  for `type="password"` og `type="hidden"`. Denne begrensningen treffer
  derimot ikke vår egen `capture_extra_attrs`-mekanisme (våre egne
  `data-jkl-*`-attributter), som leser rett fra elementet uansett tag -
  det er nettopp derfor vi likevel får ut `data-jkl-tracked`/
  `data-jkl-variant` fra tekstfelt, selv om SDK-en "skjuler" andre
  detaljer for dem.

Konklusjonen er at å merke et tekstfelt med `data-jkl-tracked` kun gir et
generisk "feltet ble endret"-signal (pluss våre egne, eksplisitt tillagte
`data-jkl-*`-attributter) - aldri selve teksten. For passordfelt (som
`TextInput` med `type="password"`) lar vi likevel bevisst være å sette
`data-jkl-tracked`, som et ekstra forsvarslag utover det SDK-en selv gjør
- ikke fordi det finnes en kjent kodesti som ville lekket noe, men fordi
passordfelt er et naturlig sted å være ekstra defensiv.

## Fordeler og ulemper med autocapture

**Fordeler:**

- Ingen kode å skrive eller kalle ved klikk - komponenten merker seg bare
  med `data-*`-attributter, og `autocapture` gjør resten.
- Trivielt å instrumentere nye komponenter (Modal, Popover, Menu osv.) -
  ingen tracking-hook å importere, kun riktige `data-*`-attributter på
  rot-elementet, se [under](#instrumentere-flere-komponenter).
- Fanger automatisk opp rikere DOM-/side-kontekst (element-hierarki,
  `$host`, `$pathname`, viewport-dimensjoner) enn et håndskrevet
  `track()`-kall ville gjort, uten at Jøkul selv må kode det - nyttig
  ekstra kontekst for teamets eget prosjekt.
- Får med `rage_click` og `dead_click` "gratis" - Mixpanels egne signaler
  for henholdsvis gjentatte frustrerte klikk og klikk som tilsynelatende
  ikke fører til noe. Begge er scopet til `[data-jkl-tracked]` på nøyaktig
  samme måte som vanlig klikk (bekreftet i `mixpanel-browser`s
  kildekode), og er blant de mest direkte designsystem-relevante
  signalene som finnes - de peker konkret på komponenter som oppleves
  som forvirrende eller ødelagte i faktisk bruk, noe et håndskrevet
  `track()`-kall aldri ville gitt uten betydelig egeninnsats.
- Selve DOM-hendelsesdeteksjonen er en veletablert, testet SDK-mekanisme
  vedlikeholdt av Mixpanel - ikke hjemmesnekret event-håndteringskode
  Jøkul selv må vedlikeholde og teste.
- Skalerer til stadig flere komponenter uten at selve komponentbiblioteket
  vokser med mer og mer tracking-logikk (kun deklarative attributter).

**Ulemper:**

- Generisk hendelsesnavn (`$mp_click`, `$mp_rage_click`, `$mp_dead_click`,
  osv.) i stedet for et semantisk navn som `"Button click"` - se
  [eget punkt under](#hendelsesnavnene-er-generiske-sdk-konstanter).
- Mer "bak kulissene"-magi: hva som faktisk sendes (og når) er styrt av
  Mixpanels egen SDK-kode, ikke et eksplisitt, lesbart `track()`-kall i
  Jøkuls egen kildekode - krever at man kjenner til `autocapture`s
  properties (`$elements`, `$el_attr__*` osv.) for å forstå payloaden.
- Legger automatisk til mer data per hendelse (bl.a. `$elements`) enn en
  minimal, håndskrevet payload ville gjort - må aktivt anonymiseres bort
  for Jøkuls interne prosjekt (gjort via `property_blacklist`, se
  [tabellen over](#hva-sendes-til-jøkul-vs-til-teamets-eget-prosjekt)),
  men er noe å være bevisst på for evt. fremtidige instanser/prosjekter.
- Nye egne `data-*`-attributter må aktivt legges til i
  `capture_extra_attrs`-listen i `trackingContext.ts` for å bli med i
  hendelsen - lett å glemme, se
  [Instrumentere flere komponenter](#instrumentere-flere-komponenter).
- `submit` er skrudd på for fremtidige skjema-komponenter, men gir ingen
  verdi før slike komponenter faktisk merker seg med `data-jkl-tracked` -
  inntil da er den en inert konfigurasjon. `input` er derimot aktivt i
  bruk allerede (`Search`, flere tekstfelt-komponenter følger i en
  oppfølgende PR - se
  [Hvorfor er det trygt å spore tekstfelt uten å sende innholdet?](#hvorfor-er-det-trygt-å-spore-tekstfelt-uten-å-sende-innholdet)).


### Hendelsesnavnene er generiske SDK-konstanter

Fordi sporingen bruker Mixpanels `autocapture` i stedet for håndskrevne
`track()`-kall, får hendelsene faste, generiske SDK-navn i stedet for
semantiske navn som `"Button click"`: `$mp_click` (klikk),
`$mp_rage_click` (gjentatte frustrerte klikk), `$mp_dead_click` (klikk
uten synlig effekt), `$mp_input_change` (input-endring) og `$mp_form_submit`
(skjema-innsending). Komponentnavnet er fortsatt tilgjengelig som en
property (`$el_attr__data-jkl-tracked`), men vises ikke i selve
hendelsesnavnet i Mixpanels UI.

Dette er en bevisst avveining til fordel for fordelene nevnt over. Ønsker
teamet ditt semantiske hendelsesnavn i Mixpanels dashboard, kan dere sette
opp "Custom Events"/Lexicon på Mixpanel-siden, basert på
`$el_attr__data-jkl-tracked` og andre properties - helt utenfor
kodebasen.

## Ordliste

Mixpanel-spesifikke begreper brukt i denne dokumentasjonen, forklart i
vanlig språk:

- **Autocapture**: Mixpanels innebygde funksjon for automatisk å fange
  opp DOM-hendelser (klikk, input, skjema-innsending osv.) uten
  håndskrevne `track()`-kall - selve grunnlaget for denne
  funksjonaliteten.
- **`distinct_id`**: en tilfeldig ID, generert av Mixpanel-SDK-en, som
  identifiserer samme nettleser/enhet over tid (til samtykket trekkes
  tilbake) - ikke koblet til navn, e-post eller innlogging i appen.
- **Super property**: et felt som automatisk legges til på ALLE
  hendelser fra en gitt Mixpanel-instans (f.eks. `appName`, satt via
  `register()`), i motsetning til felter som kun følger med én bestemt
  hendelse.
- **`property_blacklist`**: en Mixpanel-SDK-innstilling som fjerner
  navngitte felter fra utgående hendelser før de sendes, uansett hvor de
  kom fra (automatiske SDK-felter eller egendefinerte).
- **`persistence_name`**: styrer hvilken nøkkel Mixpanel-SDK-en bruker
  for å lagre tilstand (bl.a. `distinct_id`) i nettleserens
  `localStorage`/cookies - se [Arkitektur](#arkitektur).
- **Navngitt instans ("named instance")**: en egen, isolert
  Mixpanel-klient opprettet med `mixpanel.init(token, config, "navn")` -
  uavhengig av SDK-ens standard/anonyme instans.
- **Rage click**: gjentatte, raske klikk på samme element - et signal om
  at brukeren er frustrert (venter på noe som ikke skjer, eller klikker
  gjentatte ganger uten synlig resultat).
- **Dead click**: et klikk som ikke fører til noen synlig endring på
  siden - et signal om at elementet oppfattes som klikkbart, men ikke
  faktisk gjør noe (eller er defekt/tregt).

## Ofte stilte spørsmål

**Kan vi reservere appen vår mot Jøkuls sentrale sporing, men fortsatt
bruke egen sporing?**

Nei, ikke i dag - statistikk-samtykke slår på begge samtidig, se
[Sporing til Jøkul-teamets prosjekt](#sporing-til-jøkul-teamets-prosjekt).
Ønsker dere kun egen sporing uten den anonymiserte, sentrale delen, ta
kontakt med Jøkul-teamet - dette er foreløpig ikke støttet som en egen
innstilling.

**Hvem har tilgang til dataene i Jøkuls sentrale prosjekt?**

Jøkul-teamet. Ta kontakt med teamet (Teams eller et GitHub-issue) hvis du
som designer/produkteier ønsker innsikt fra det aggregerte datasettet -
se [For designere og produkteiere](#for-designere-og-produkteiere).

**Hva skjer når en bruker trekker samtykket sitt?**

Begge Mixpanel-instansene nullstilles (`reset()`) umiddelbart - ingen ny
sporing sendes, og lokalt lagret tilstand (som `distinct_id`) fjernes. Se
[Arkitektur](#arkitektur).

**Må vi gjøre en egen personvernvurdering hvis vi tar i bruk
`mixpanelToken`?**

Sannsynligvis ja. Selv om sporingen er opt-in (krever samtykke) og
anonymisert i den sentrale delen, er det appens/teamets eget ansvar å
vurdere sin egen bruk - hva dere selv velger å sende via
`tracking`-propen, hvor lenge dere lagrer det i Mixpanel, og hvem i teamet
som har tilgang - i tråd med organisasjonens personvernrutiner.

**Kan vi se hvilke rådata som faktisk sendes, uten å lese kildekoden?**

Ja - se [eksempelet med faktisk payload](#eksempel-faktisk-payload-for-et-button-klikk),
eller åpne nettleserens nettverksfane og se etter kall til
`api-eu.mixpanel.com` mens statistikk-samtykke er gitt.

**Hvorfor heter hendelsen `$mp_click` og ikke f.eks. `"Button click"`?**

Se [Hendelsesnavnene er generiske SDK-konstanter](#hendelsesnavnene-er-generiske-sdk-konstanter).

## Arkitektur

Sporingen ligger i `CookieConsentProvider`
(`packages/jokul/src/components/cookie-consent/CookieConsentContext.tsx`),
som kaller `useMixpanelTracking()`
(`.../tracking/trackingContext.ts`) med `consentGranted` utledet fra
samtykke-cookien den allerede leser - ingen egen samtykkemekanisme, og
ingen React Context lenger (ingenting nedstrøms trenger å konsumere
sporingstilstand - komponentene bare rendrer statiske `data-*`-attributter
uansett om sporing faktisk er aktiv).

Hooken bruker Mixpanel SDK-ens navngitte instanser
(`mixpanel.init(token, config, "navn")`) for å sende samme klikk-hendelse
til to prosjekter uten å laste SDK-en to ganger, og uten å kollidere med en
ev. egen bruk av `mixpanel-browser` sin default-singleton i
forbrukerappen:

- **Teamets instans** (`__jkl_team__<n>`): `mixpanelToken`, `autocapture`
  scopet til `[data-jkl-tracked]` med alle `capture_extra_attrs`
  (inkludert `data-jkl-tracking`).
- **Jøkuls interne instans** (`__jkl_internal__<n>`): Jøkul-teamets token,
  samme `autocapture`-scope, men uten `data-jkl-tracking` i
  `capture_extra_attrs`, pluss `ip: false` og `property_blacklist` (se
  over).

Instansnavnene får et unikt, tellende suffiks (`<n>`) per konfigurasjon.
Dette er nødvendig fordi `mixpanel.init(token, config, name)` er en no-op
hvis navnet allerede er i bruk - den returnerer da bare den FØRST opprettede
klienten og ignorerer nytt token/config. Med et fast navn ville en endret
`mixpanelToken` (f.eks. ved miljøbytte) stille fortsette å sende til det
gamle prosjektet.

Samme instansnavn brukes også som `persistence_name` i configen til begge
instansene. Uten dette nøkler Mixpanel SDK-en sin `localStorage`/cookie-
persistens kun på `token`, IKKE på instansnavnet - noe som ville latt oss
dele lagringsnøkkel (og dermed `distinct_id`, super-properties og
`reset()`-effekter) med enhver annen, separat `mixpanel-browser`-bruk i
forbrukerappen som gjenbruker samme token. Se
[Har appen din allerede egen Mixpanel-sporing?](#har-appen-din-allerede-egen-mixpanel-sporing)
for den fulle vurderingen av at vi ikke forstyrrer teamets egen
Mixpanel-konfigurasjon.

Ved rekonfigurering (endret `mixpanelToken`/`appName`, eller tapt
samtykke) - og ved selve avmontering av `CookieConsentProvider` -
`disable()`- og `reset()`-es alltid den forrige klienten (i en
`useEffect`-cleanup-funksjon) før en ev. ny initialiseres med et nytt
instansnavn. `reset()` nullstiller persistert Mixpanel-tilstand (f.eks.
`distinct_id`), mens `disable()` (en dokumentert, ikke-destruktiv
Mixpanel-API) gjør at ALLE fremtidige `track()`-kall på den gamle
klienten blir no-ops - `autocapture` sine `window`-nivå DOM-lyttere fra
den forkastede instansen fjernes riktignok ikke fysisk (udokumentert
hvordan man gjør det trygt på tvers av SDK-versjoner), men kan etter
`disable()` aldri lenger faktisk sende noe, selv om de skulle trigges.

`mixpanel-browser` er en `optionalDependency` og importeres derfor
dynamisk (`import("mixpanel-browser")`) inne i `useEffect`-en, KUN når
sporing faktisk skal initialiseres (samtykke + token finnes) - se
[`package.json`](./package.json). Konsumenter som utelater den valgfrie
avhengigheten helt, og/eller aldri gir samtykke eller setter et token,
verken laster ned eller kjører SDK-koden i det hele tatt - bunt-/
nettverkskostnaden betales kun av apper som faktisk bruker sporing. Et
mislykket/manglende modul-oppslag (f.eks. avhengigheten ikke installert)
fanges opp i et `try`/`catch` og logges kun i dev - appen krasjer aldri
pga. dette.

### Server-side rendering (SSR)

Sporingen er trygg å bruke i SSR-rammeverk (Next.js, Remix osv.):

- All `mixpanel.init()`/`register()`-logikk kjører inne i en `useEffect` i
  `useMixpanelTracking()`, og React kjører aldri effekter under
  server-rendring (`renderToString`/`renderToPipeableStream`) - ingenting
  Mixpanel-relatert utføres på serveren, uansett `mixpanelToken`.
- Selve `mixpanel-browser`-importen er dynamisk (`import()`, se over) og
  ligger INNE i den samme `useEffect`-en - modulen blir dermed aldri en
  gang importert/lastet under server-rendring, siden effekter ikke kjører
  der. Dette er en enda sterkere SSR-garanti enn en statisk import ville
  gitt (som uansett var verifisert trygg i et rent Node-miljø uten
  `window`/`document`, se test under).
- `getConsentCookie`/`document.cookie`-lesingen i
  `CookieConsentProvider` har allerede en `typeof document === "undefined"`-
  sjekk og faller tilbake til "intet samtykke gitt" på serveren -
  `CookieConsentProvider` (og dermed `useMixpanelTracking`) rendrer altså
  helt normalt server-side, uten samtykke, uten sporing.
- `data-jkl-tracked`-attributtene på komponenter (f.eks. `Button`) er rene
  props/markup og rendres identisk på server og klient - ingen
  hydreringsavvik.

Dekket av en dedikert test i Node-miljø (ikke jsdom), se
[`ssr.test.tsx`](./src/components/cookie-consent/ssr.test.tsx).

## Oppsett for Jøkul-teamet (vedlikeholdere)

Jøkuls Mixpanel-token bakes inn ved bygg via `JOKUL_MIXPANEL_TOKEN`:

- [`vite.build.config.mjs`](./vite.build.config.mjs)
  injiserer den som `globalThis.__JOKUL_MIXPANEL_TOKEN__` (lest via
  `getJokulMixpanelToken()` i `trackingContext.ts`).
- [`release.yml`](../../.github/workflows/release.yml) sender secreten
  `JOKUL_MIXPANEL_TOKEN` inn ved publisering.

Tom/udefinert i dev og tester - Jøkuls sporingsinstans blir da en no-op.

Ikke hemmelig i seg selv (klient-side Mixpanel-tokens er synlige i
nettverkstrafikk), men administreres som GitHub-secret for rotasjon og
oversikt. Må opprettes av noen med admin-tilgang.

## Testing

`getJokulMixpanelToken()` leser via en funksjon, ikke en modulkonstant, så
tester kan stubbe den:

```ts
vi.stubGlobal("__JOKUL_MIXPANEL_TOKEN__", "test-token");
// ...
vi.unstubAllGlobals();
```

Gi statistikk-samtykke i tester med `setConsentCookie` (fra
`@fremtind/jokul/cookie-consent`) - samme mekanisme som
`CookieConsent`-komponenten bruker etter et faktisk brukersamtykke.

`mixpanel-browser` mockes med `vi.mock("mixpanel-browser", ...)` for å
verifisere at riktig konfigurasjon (`autocapture`, `property_blacklist`,
`ip`, unike instansnavn) sendes til `.init()`, uten avhengighet av ekte
nettverkskall. Selve `autocapture`-oppførselen (at klikk på
`[data-jkl-tracked]`-elementer faktisk trigger en hendelse) er SDK-ens
ansvar og testes ikke på nytt her - komponenttester (f.eks.
`Button.test.tsx`) verifiserer i stedet at riktige `data-*`-attributter
rendres.

Se
[`trackingContext.test.tsx`](./src/components/cookie-consent/tracking/trackingContext.test.tsx)
og
[`Button.test.tsx`](./src/components/button/Button.test.tsx)
for eksempler.
