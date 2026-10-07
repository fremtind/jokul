# Funn: Jokul sin nye `tracking`-prop vs. teamenes egne navnekonvensjoner

Bakgrunn: Jokul (branch `data-layer`) vurderer å legge en `tracking`-prop på
alle komponenter. Pio påpekte at dette kan krasje med navn teamene allerede
bruker selv, spesielt i kombinasjon med polymorfe `as={...}`-komponenter
(f.eks. `<Link as={TrackableLink} tracking={...} />`).

Dette dokumentet oppsummerer et bredt søk gjennom **alle** repoene i
jokul-consumers-workspacet (bm-frontends, digital-monorepo, bsf-*, seopp-*,
fremtind.no, skadesaker-frontend, rk-bmsok, rk-tff-oppslag,
kundekommunikasjon-frontend, flyt-frontend, product-config-manager,
3d-insurance-game m.fl.).

## Ja — `tracking` er allerede i bruk flere steder, ikke bare fremtind.no

### fremtind.no (reell kollisjon med `as`-polymorfi)
`TrackableLink`, `Button`, `Card` og `LinkList` har alle en påkrevd
`tracking`-prop (shape `{module, text, external?, supplementaryEvents?}`).
Mønsteret `<JokulKomponent as={TrackableLink} tracking={{...}} />` er i bruk
**13 steder**, bl.a.:
- `components/linklist/LinkList.tsx` (`JklLinkList.Link as={TrackableLink}`)
- `components/portable-text/link/LinkComponent.tsx` (`JokulLink as={TrackableLink}`)
- `components/portable-text/reportList/ReportList.tsx`
- `components/portable-text/reportTable/ReportTable.tsx` (x3)
- `components/portable-text/newsdesk/Newsdesk.tsx`
- `components/footer/Footer.tsx`
- `pages/page-not-found/PageNotFoundPage.tsx`
- `pages/error-page/ErrorPage.tsx` (x4)

Her er `tracking` direkte tvetydig: siden `as={TrackableLink}` sprer alle
ukjente props videre til `TrackableLink`, vil det være uklart om en ny, nativ
`tracking`-prop fra Jokul skal tolkes av verts-komponenten (Jokuls egen
sporing) eller videreformidles til `TrackableLink`.

### bm-frontends (samme propnavn, men ikke via `as`-polymorfi i dag)
Også her brukes `tracking={{...}}` som eget prop-navn på flere egne
komponenter:
- `kjop/src/components/ContactInfo/index.tsx` — `tracking: { flowName, stepName }`
- `kjop/.../Form/MoreInfo.tsx`, `ContactForm.tsx`, `ConfirmTerms.tsx`, `HasProductCheck.tsx`
- `ha/src/sider/AnsattUtmelding.tsx`, `AnsattInnmelding.tsx` (→ `AnsattUtmeldingSkjemaFlyt`)
- `ha/src/features/antallsliste/.../EndreAntall(Yrkesskade).tsx` (→ `CustomSkjemaFlyt`)
- `ha/src/features/agreement-updates/flow/kjoretoy/Mileage(PerYear)/*.tsx`
- `ha/src/components/GlobalFeedback/GlobalFeedback.tsx` (→ `Tilbakemelding`)

I disse tilfellene blir `tracking` destrukturert ut og brukt internt i
komponenten — den spres **ikke** videre inn i en Jokul-komponent via `as=`
eller `{...rest}`. Derfor er det ingen aktiv kollisjon akkurat nå, men navnet
`tracking` er tydelig en etablert konvensjon også utenfor fremtind.no, så
risikoen for fremtidig kollisjon (f.eks. hvis noen senere bygger en
polymorf wrapper slik fremtind.no har gjort) er reell.

### skadesaker-frontend (samme arkitekturmønster, annet propnavn)
Har egen `TrackableLink` brukt med `as={TrackableLink}` flere steder, men
prop-navnet er `linkId` + `additionalEventsToTrack`, ikke `tracking` — ingen
navnekollisjon her.

### Øvrige repoer
digital-monorepo (kfp-tracking m.fl.), bsf-*, seopp-*, rk-bmsok,
rk-tff-oppslag, kundekommunikasjon-frontend, flyt-frontend,
product-config-manager, 3d-insurance-game: bruker egne sporingssystemer
(`track()`, `Trackingkey`, `Trackable[]`, `trackingConfig`, `trackEvent*`),
men **ingen** av disse bruker `tracking` som et JSX-prop-navn på en
komponent. Ingen kollisjon funnet.

## Konklusjon
`tracking` som propnavn er **ikke unikt for fremtind.no** — det er en
etablert konvensjon i minst to team (fremtind.no og bm-frontends). Risikoen
Pio peker på er bekreftet reell for fremtind.no sine 13 `as={TrackableLink}`-
bruksteder i dag, og navnet er i bruk nok andre steder at det bør unngås helt
for den nye Jokul-propen.

## Navneforslag (sjekket mot alle repoer, ingen treff som JSX-prop)
| Navn | Kolliderer? |
|---|---|
| `tracking` | **Ja** (fremtind.no, bm-frontends) |
| `analytics` | Unngås — brukt som modul-/funksjonsnavn 29+ steder |
| `jklTracking` | Nei |
| `trackingProps` | Nei |
| `trackingMeta` | Nei |
| `dataTracking` | Nei |
| `trackId` | Nei |
| `eventTracking` | Nei |
| `telemetry` | Nei |

**Anbefaling:** `jklTracking` — tydelig Jokul-navnerom-prefikset, null
kollisjon i dag og lav fremtidig risiko siden navnet er eid av biblioteket
(samme idé som Radix sin `asChild` eller MUI sine `data-mui-*`-prefikser).
Alternativ: `trackingProps`.

## Konsekvenser for teamene: hva forenkles, hva kompliseres?

Å la Jokul "ta over" sporing (dvs. tilby en innebygd tracking-prop/mekanisme
på komponentene sine) er ikke bare et navnespørsmål — det er en reell
arkitekturendring for konsumentene. Under følger en vurdering av fordeler og
ulemper, basert på hvordan teamene faktisk har bygget sine egne løsninger i
dag.

### Fordeler — hva blir enklere

- **Mindre boilerplate og duplisert kode.** I dag har minst to team
  (fremtind.no og skadesaker-frontend) bygget sin egen `TrackableLink` fra
  bunnen av — begge wrapper en Jokul/router-`Link`, håndterer `onClick`,
  `onKeyDown` og kaller et sporings-kall manuelt. Dette er i praksis samme
  jobb gjort to ganger. En innebygd `tracking`-mekanisme i Jokul fjerner
  behovet for å bygge og vedlikeholde slike wrapper-komponenter i det hele
  tatt.
- **Konsistent sporing på tvers av team.** Når sporing er en del av selve
  komponentbiblioteket, blir det vanskeligere å "glemme" å spore en
  interaksjon, og event-formatet blir mer ensartet på tvers av produkter —
  noe som gjør det enklere å aggregere/sammenligne data sentralt (f.eks. for
  Fremtind som helhet, ikke bare per app).
- **Automatisk støtte i nye komponenter.** Nye Jokul-komponenter får sporing
  "gratis" uten at hvert team må bygge sin egen trackable-variant først.
- **Sentralisert vedlikehold.** Forbedringer/bugfikser i sporingslogikken
  (f.eks. riktig håndtering av tastatur vs. museklikk, dobbeltklikk,
  tilgjengelighet) skjer ett sted (Jokul) i stedet for i N forskjellige
  implementasjoner som kan drifte fra hverandre over tid.

### Ulemper — hva blir mer komplisert

- **Migreringskostnad for team som allerede har en `tracking`-prop.**
  fremtind.no (13 bruksteder) og bm-frontends (flere komponenter) må
  omdøpe/migrere sin eksisterende `tracking`-prop for å unngå kollisjon.
  Dette er ikke bare et navnebytte — det er endringer i flere filer, typer
  og eventuelt tester (f.eks. `TrackableLink.test.tsx`).
- **Ulikt skjema/shape på sporingsdata.** Hvert team har i dag sin egen
  modell for hva et sporingsevent inneholder: fremtind.no bruker
  `{module, text, external?, supplementaryEvents?}`, skadesaker-frontend
  bruker `linkId` + `additionalEventsToTrack`, bm-frontends bruker egne
  `Trackingkey`-enums og `Trackable[]`-lister, digital-monorepo (kfp-tracking)
  har sitt eget analytics-rammeverk med `trackingConfig`/`trackingId`. Hvis
  Jokuls `tracking`-prop har et fast, generisk skjema, må alle disse
  tilpasse eller bygge adaptere rundt sine eksisterende datamodeller — det
  kan oppleves som en innsnevring av fleksibilitet de har i dag.
- **Risiko for dobbel sporing i overgangsperioden.** Så lenge et team har
  både sin egen wrapper (som trigger sporing manuelt via `onClick`) og en
  nyinnført, native Jokul-sporing på samme element, kan samme interaksjon bli
  sporet to ganger hvis man ikke rydder opp samtidig.
- **Tvetydighet ved polymorf bruk (`as={...}`).** Dette er selve
  problemstillingen Pio reiste: når en konsument bytter ut elementet med
  `as={EgenKomponent}`, er det uklart om `tracking`-propen skal tolkes av
  Jokul-komponenten selv eller videreformidles til `EgenKomponent`. Dette må
  dokumenteres eksplisitt (presedens/oppførsel), ellers risikerer man
  stille feil eller forvirrende TypeScript-feil der formene ikke matcher.
- **Tettere kobling til Jokuls valg av sporingsmodell.** Teamene bruker i
  dag ulike analytics-bakender (egne `track()`-funksjoner, Mixpanel,
  DNB/SB1-spesifikke løsninger i kfp-tracking, osv.). En innebygd
  Jokul-prop låser i praksis konsumentene til et bestemt kontrakt/format for
  hvordan sporingsdata sendes videre, selv om de fortsatt kan velge hvor
  dataene til slutt havner.
- **Koordinert utrulling.** Siden propen etter planen skal finnes på *alle*
  komponenter, må alle konsumentteam oppgradere Jokul-versjon og ta stilling
  til den nye propen samtidig — i motsetning til i dag hvor hvert team har
  bygget sin løsning i eget tempo og uavhengig av de andre.

### Oppsummert
Gevinsten er størst for team som *ikke* allerede har bygget egne
trackable-wrappere (mindre å vedlikeholde fremover), mens kostnaden er
størst for fremtind.no og bm-frontends, som må migrere eksisterende
`tracking`-bruk og trolig tilpasse sitt sporingsskjema til Jokuls format.
Den tekniske kollisjonsrisikoen ved polymorf bruk (`as=`) er løsbar med et
distinkt propnavn (se anbefaling over), men selve skjemaforskjellen og
migreringsarbeidet er en reell kostnad uavhengig av hva propen heter.

## Hvordan team tracker i dag, repo for repo

Supplerende oversikt over selve sporingsmetoden (ikke bare propnavn), så vi
vet hva vi faktisk konkurrerer med/bygger på:

- **bm-frontends**: egen `common/lib/tracking/`-modul. `tracking.ts` er en
  tynn fasade, `mixpanel.ts` gjør selve `mixpanel.track(...)`-kallene med
  egne event-navn og en generert `TrackingDetails`-type. Ingen autocapture.
- **fremtind.no**: egen `TrackableLink`-komponent (se over) pluss GTM/GA4
  via `root.tsx`/`rootLoader.ts`. Sentry er også koblet inn samme sted
  (`useInitSentry.ts`), så sporing og feilovervåking initialiseres sammen.
- **seopp-kunde-frontend**: ingen egen Mixpanel/GTM-modul funnet i
  `src/`. Det eneste tracking-treffet er i `vite.config.ts` og
  `PublicPropertiesContext.tsx`, som ser ut til å handle om noe annet
  (sannsynligvis falsk positiv/konfig, ikke faktisk brukersporing).
- **seopp-admin-frontend**: samme bilde som seopp-kunde-frontend. Treffene
  er i dashboard-komponenter og queries, ikke en egen tracking-modul. Dette
  er trolig et internt admin-verktøy uten brukersporing.
- **skadesaker-frontend**: egen `app/tracking/`-mappe med `tracking.ts`,
  `mixpanel.ts` og en egen `tracking.model.ts`-type, pluss mocks for
  testing (`mocks/tracking.ts`). Samme mønster som bm-frontends; manuelle
  `mixpanel.track(...)`-kall, ingen autocapture.
- **digital-monorepo (KFP-appene)**: sporing går gjennom et felles
  bibliotek (`kfp-tracking`) og wires sentralt inn i
  `kfp-app-setup/ReactRoot.tsx` for alle ~90 apper samtidig, i stedet for
  at hver app bygger sin egen løsning. Se Del 2 i `plan.md` for detaljer.

Felles for alle: **ingen bruker Mixpanel autocapture eller GTM sine
innebygde klikk-triggere**. Alle har bygget en manuell
track-funksjon/abstraksjon selv, uansett om de kaller den `tracking.ts`,
`mixpanel.ts` eller noe KFP-spesifikt.

## Repoer/apper uten noen sporing i det hele tatt

Søkte gjennom alle 22 topp-nivå-repoene i jokul-consumers-workspacet
(ikke `digital-monorepo`, som er dekket separat over) etter
Mixpanel/GTM/`dataLayer`/`gtag`/`track(`/`Trackable`/segment/hotjar/
posthog/matomo/amplitude o.l. Følgende 15 repoer har **ingen treff i det
hele tatt**, altså ingen synlig brukersporing i dag:

- `3d-insurance-game`
- `bsf-ee-bestilling-web`
- `bsf-ee-web`
- `bsf-innsikt`
- `bsf-portveien2`
- `bsf-support-admin`
- `bsf-taksthub`
- `bsf-web`
- `flyt-frontend`
- `kundekommunikasjon-frontend`
- `product-config-manager`
- `rk-bmsok`
- `rk-tff-oppslag`
- `seopp-skadesaker-component-lib`
- `seopp-testhub-frontend`

Noen av disse er trolig interne saksbehandlings-/admin-verktøy
(`bsf-support-admin`, `seopp-skadesaker-component-lib`,
`seopp-testhub-frontend`) der fravær av sporing kan være et bevisst valg,
ikke en mangel. Men flere er kundevendte flyt-apper (`bsf-ee-web`,
`bsf-taksthub`, `flyt-frontend`, `kundekommunikasjon-frontend`,
`rk-bmsok`, `rk-tff-oppslag`) der fravær av sporing i dag betyr at Jokuls
nye, innebygde `data-track-*`-attributter kan være den første sporingen
disse appene noensinne får, helt uten ekstra arbeid fra teamet utover å
skru på autocapture/dataLayer. Det er trolig den enkleste, mest
lavthengende gevinsten av hele denne funksjonaliteten.

Dette er et øyeblikksbilde fra en enkeltgjennomgang av lokale kloner, ikke
en autoritativ oversikt. Noen repoer kan ha sporing satt opp utenfor
kildekoden (f.eks. via en tag manager konfigurert i et eksternt UI), som
ikke vises i et kodesøk.
