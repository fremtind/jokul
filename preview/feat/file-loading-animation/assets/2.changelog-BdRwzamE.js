import{j as e}from"./iframe-DtM7RXj6.js";import{useMDXComponents as i}from"./index-yeFBcLwA.js";import{b as r,c as a}from"./blocks-BJa2gWCU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5GIev4G.js";import"./index-BK5QRlWO.js";import"./index-MVqCHK6K.js";const m=`# Change Log

## 3.7.0

### Minor Changes

- 9ee6989: **Støtte for Tailwind 4**

  Denne oppdateringen legger til støtte for versjon 4 av Tailwind. For å ta i bruk Jøkul-verdier i ditt Tailwind 4-oppsett importerer du Jøkul-temaet rett etter importen av Tailwind i hovedstilarket ditt:

  \`\`\`diff
    @import "tailwindcss";
  + @import "@fremtind/jokul/tailwind/v4";
  \`\`\`

  Versjon 3 er fortsatt støttet på samme måte som tidligere.

### Patch Changes

- e001cef: Tilpasser størrelsen på \`Expander\` når den brukes i \`ExpandableTableRow\`, slik at ikke raden blir så høy når density er satt til compact.

## 3.6.1

### Patch Changes

- 0177006: Fikser en bug der \`onClick\`-eventet sendt inn til \`MenuItem\` ble trigget to ganger.

## 3.6.0

### Minor Changes

- 7fe2a5f: Bytt ut \`date-fns\` med \`dayjs\` for behandling av datoer i kalenderen.

  For å gjøre oss klare for å droppe CommonJS i biblioteket bytter vi vekk fra \`date-fns\` for å håndtere datoer i kalenderen i \`DatePicker\`. Pakken har en del feil i genereringen av typer, som gjør at man kan få feil ved import/bygg avhengig av om man bruker CJS eller ESM.

  Siden \`date-fns\` var en relativt stor pakke var den behandlet som en _optional dependency_, slik at du selv måtte installere den for å bruke \`DatePicker\`. \`dayjs\` er en så liten pakke at vi har bygget inn relevant kode i kalenderen. Dermed får du én avhengighet mindre av å bruke Jøkul 🎉

### Patch Changes

- 7f19854: Skrur av uønsket fontskalering i MacOS

  Begrens fontskalering for Apple-enheter til bare å gjelde enheter med touch som hovedinput (som iPhone) for å unngå uønskede effekter i Safari i MacOS.

## 3.5.3

### Patch Changes

- 28d545e: Fiks bug som gjorde at \`align\`-propen ikke fungerte i \`TableHead\`

## 3.5.2

### Patch Changes

- 1cc090e: Legg til støtte for ReactNode i supportText, og className i DescriptionListItem.tsx

## 3.5.1

### Patch Changes

- 6766086: Sørger for at komponentene \`Message\` og \`SystemMessage\` er eksportert riktig fra Jøkul-pakken.

## 3.5.0

### Minor Changes

- f055f7e: \`System Message\` tar nå inn variant, istedenfor å måtte bruke flere typer System Messages. Markert egendefinerte System Messages som deprecated.

  \`\`\`typescript jsx
  // Før
  <ErrorSystemMessage>...</ErrorSystemMessage>

  // Etter
  <SystemMessage variant="error">...</SystemMessage>
  \`\`\`

- 97c4200: Tag tar nå inn variant, istedenfor å måtte bruke flere typer tags. Markert egendefinerte tags som deprecated.

  \`\`\`typescript jsx
  // Før
  <ErrorTag>...</ErrorTag>

  // Etter
  <Tag variant="error">...</Tag>
  \`\`\`

- 29ff5ae: \`Message\` tar nå inn variant, istedenfor å måtte bruke flere typer meldinger. Markert egendefinerte messages som deprecated.

  \`\`\`typescript jsx
  // Før
  <ErrorMessage>...</ErrorMessage>

  // Etter
  <Message variant="error">...</Message>
  \`\`\`

## 3.4.0

### Minor Changes

- a3a203d: Tydeligere visuell indikasjon på hvilke kolonner som er sorterbare, samt nye sorteringsikoner.
- b447808: - \`RadioPanel\` og \`CheckboxPanel\` setter nå \`value\` tilsvarende \`label\` by default.
  - \`RadioPanelGroup\` er markert som deprecated. Bruk heller \`FieldGroup\`.
- 75839aa: Endrer alle steder vi har brukt gamle brand-farger direkte i komponentene til å bruke semantiske fargetokens. Dette angår stort sett utgående komponenter, og skal ikke ha betydning for utseende.

### Patch Changes

- 0eda9e8: Skeleton-loadere er nå utformet med en CSS-maske, slik at fargen på sveipet i animasjonen alltid matcher bakgrunnsfargen loaderen er plassert på.
- 6dc3dd2: Korrigerte ModalInstance-typedefinisjonen og oppdaterte returtypen til useModal, slik at instance ikke lenger er typet som any.
- f33b677: Legger tilbake fontskalering for iOS basert på brukerinnstillinger, på en måte om ikke overskriver fonten vår i designsystemet.

## 3.3.1

### Patch Changes

- 9af9cc3: **Feilretting: Fjerner CSS som overskrev Fremtind Grotesk font**

  Fjernet en \`@supports\`-regel som førte til at Fremtind Grotesk på Apple-enheter ble overskrevet.

## 3.3.0

### Minor Changes

- b40db27: Legg til en \`Search\`-komponent. Før har man måttet bruke en kombinasjon av props på \`TextInput\` for å få den til å se ut som et søkefelt. Med denne komponenten slipper du det, og den blir semantisk riktigere.

  I tillegg følger det med:

  - en \`Search.Button\`, som er en egen knapp tiltenkt kun søkefeltet.
  - en knapp som enkelt tømmer søkefeltet.

  Du kan bruke komponenten enten med eller uten et \`form\`-element, avhengig av behov. Husk at dersom du wrapper søkefeltet i et skjema kan du også sette \`type="submit"\` på \`Search.Button\` for å håndtere søking (uten et tredjepartsbibliotek).

  **OBS**: \`Search\` bruker \`InputGroup\`, og støtter derfor alle props som også finnes i den. Vær oppmerksom på at \`label\` er skjult by default. Dette kan du endre med \`labelProps\`-propen.

- a45a566: Legger til en utility-funksjon for å slå sammen flere React refs

  \`\`\`tsx
  import { mergeRefs } from "@fremtind/jokul/utilities";

  const MyComponent = forwardRef<HTMLInputElement>((props, ref) => {
      const internalRef = useRef<HTMLInputElement>(null);
      const combinedRef = mergeRefs(ref, internalRef);

      return <input type="text" ref={combinedRef} {...props} />;
  }
  \`\`\`

  Du kan sende inn så mange refs du vil: \`mergeRefs(ref1, ref2, ref3, ref4)\`.
  Det finnes også en memoisert versjon \`useMergeRefs\` som oppdateres kun
  når noen av \`ref\`-ene endrer seg

- 57c1d4f: LinkList får nytt visuelt uttrykk i beta-versjon. I forbindelse med dette er det gjort følgende endringer:

  - Lagt til \`TableOfContents\`, som brukes likt som \`LinkList\` med \`variant="ordered"\` satt. Endringene under er gjeldende for både \`LinkList\` og \`TableOfContents\`.
  - \`LinkList\` krever ikke lenger \`LinkList.Item\`.
  - \`LinkList\` krever nå en [\`label\` som beskriver innholdet i lista](https://www.w3.org/WAI/WCAG21/Techniques/html/H97). Denne skjules automatisk med \`hideLabel\`-propen.
  - \`LinkList\` er nå semantisk en \`nav\`-komponent fordi den skal brukes for samlinger av navigasjonslenker.

  Før:

  \`\`\`typescript jsx
  <LinkList>
    <LinkList.Item>
      <LinkList.Link href="#">...</LinkList.Link>
    </LinkList.Item>
  </LinkList>
  \`\`\`

  Etter:

  \`\`\`typescript jsx
  <LinkList>
    <LinkList.Link href="#">...</LinkList.Link>
  </LinkList>
  \`\`\`

- 9f18961: Legg til ny versjon av Description List som beta-komponent:

  - \`DescriptionList\` bygges opp av en ny komponent \`DescriptionListItem\`.
  - \`DescriptionListItem\` tar inn title og value, og har en valgfri \`supportText\`, som alltid ligger nederst i raden.
  - \`DescriptionList\` får mulighet til å vise skillelinjer mellom hvert item.
  - \`DescriptionList\` får en \`alignment\`-prop, med mulighet for å vise items \`horizontal\`, \`vertical\` og \`justified\`. I smale visninger vil den alltid brekke til vertikalt, som den gamle også gjorde.

  Legg til ny versjon av NavLink som beta-komponent:

  - NavLink får nytt utseende, basert på \`LinkListLink\` med en pil til høyre.
  - NavLink tar inn \`title\`, og en valgfri \`description\`.

### Patch Changes

- b68ade2: Fikser typekompatibilitet med React 19 for useIntersectionObserver. Hooken aksepterer nå nullable refs.
- cce0ef3: Organiserer Card-stiler i @layer jokul.components slik at de kan overstyres enklere.

## 3.2.0

### Minor Changes

- 28ba168: Vis total antall treff i TablePagination-komponenten.
- 1391356: alwaysOpen i \`CheckboxPanel\` og \`RadioPanel\` er markert som deprecated. Vi ønsker ikke lenger å skjule informasjon for brukerne før de tar et valg i en flyt.

### Patch Changes

- 474d28f: Markert extraLabel som deprecated, med amount som erstatning. Vi ønsker å rendyrke denne komponenten til å vise produkter, dekninger, utbetalinger og lignende.
- 0858502: Alltid vis counter dersom counter er satt

## 3.1.0

### Minor Changes

- d2d539e: Legg til refaktorert Select som beta.

### Patch Changes

- 8713b86: Nå vil radio- og checkboxpanel ha bedre støtte for extralabel ut av boksen, med enklere stiler.

## 3.0.0

### Major Changes

- def9c2f: Oppdaterer \`Flex\`-komponenten med ny funksjonalitet for responsivitet og layout.

  - De fleste flex-egenskaper er eksponert via props
  - Mulighet for å styre hvordan komponenten vises ved hjelp av props
  - Støtte for forskjellige verdier på forskjellige breakpoints
  - Mulighet for å styre layout med kolonner
  - Stilene til flex blir ikke lenger satt inline slik at de kan overstyres

  **BREAKING**
  Avstander i \`Flex\` baserer seg nå på våre nye, semantiske spacing-tokens. Man må derfor oppdatere vardiene for \`gap\` og lignende props.

  \`\`\`diff
  - <Flex gap={16}>
  + <Flex gap="s">
  \`\`\`

  For mer informasjon om bruk av komponenten, og det nye APIet, se portalen og eksemplene i Storybook.

### Patch Changes

- bc3e9f1: Annonserer toast-innhold for skjermlesere umiddelbart.
- 676f44e: ToggleSlider er markert som deprecated. Bruk heller SegmentedControl.
- 23152ee: Importerer stilarket for \`Checkbox\` i \`CheckboxPanel\`, slik at checkboxer i paneler får riktige stiler.

## 2.0.0

### Major Changes

- fcfa2c6: **BREAKING**: Cookie Consent krever nå en
  \`aboutPage\`-prop. Dette er en lenke til siden brukerne kan gå for å få informasjon om cookiene som settes i løsningen. Eksempelvis https://www.fremtind.no/informasjonskapsler.

  Dersom du mangler en sånn side må den lages for løsnignen, **det er ikke tilstrekkelig å sende brukeren til
  Fremtind.no-siden**.

  **BREAKING**: Cookie Consent tar ikke lenger inn
  \`marketing\` som en gyldig prop. Dette er fordi vi ikke bruker cookies til markedsføring. Den dagen vi begynner med det krever det et eget samtykke.

  **Minor changes**:

  - ModalenAction viser nå knappene i \`row-reverse\` istedenfor
    \`row\` for å støtte under høyrestilling av knappene på en bedre måte.

## 1.6.0

### Minor Changes

- 98bdec6: Erstattet PenIcon med nytt ikon fra Material.
- 4598e1e: Legger til \`description\`-propen i input-felt.

## 1.5.1

### Patch Changes

- 74e9d27: - Gjør \`Image\`-komponenten om til en \`forwardRef\` for å støtte \`refs\` fra \`parent\`-komponenter.
  - Setter \`img\` i \`Card\` til \`object-fit: cover\` som standard, slik at bilder dekker kortet uten å forvrenge proporsjonene.
- 1a60d17: Støtte for skalering av tekst på iOS-enheter
- 68b580f: Retter opp i en visuell inkonsistens mellom Tooltip og Help komponentene, som hadde ulik oppførsel for bakgrunnsfarge i light og dark mode. Begge bruker nå \`--jkl-color-background-container-inverted\`.
- 9eba724: La til css slik at tekstfargen på lenker i Help arver fargen til teksten og derfor følger tema.

## 1.5.0

### Minor Changes

- 6c47b7a: Legger til [CSS layers](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) for Jøkul sine grunnleggende stiler for å unngå konflikt både innad i Jøkul, og mellom dine egne stilark og stilene fra Jøkul.

  Stilene til Jøkul ligger inne i laget \`jokul\`, som igjen har fem under-lag. Disse er, i rekkefølge fra minst til mest prioritert:

  1. \`resets\`: Normalisering og reset av nettleser-stiler. Disse ønsker vi på sikt å bli kvitt, eller få trimmet ned kraftig.
  2. \`theme\`: Her ligger variablene som legger grunnlag for designsystemet; spacing, farger, typografi, etc.
  3. \`global\`: Foreløpig er dette laget tomt, men her kan det komme overordnede stiler som gjelder uten å sette klasser, slik som automatiske stiler for typografi basert på HTML-element.
  4. \`components\`: Her bor alle stilene til komponentene våre (vil bli lagt inn i fremtidig(e) pull request(s)).
  5. \`utility\`: Dette laget inneholder nytteklassene våre. De er høyest prioritert slik at de får effekt selv om de styrer egenskaper som også er satt gjennom f.eks. komponent-stilark.

  Når du skriver dine egne stiler vil de som standard ha høyere prioritet enn _alle disse lagene_, slik at du kan være sikker på at stilarkene du skriver har effekt. Dersom du bruker dine egne lag i stilarkene dine kan du spesifisere at Jøkul sine stiler skal ha lavere prioritet:

  \`\`\`css
  @layer jokul, dine-komponenter, dine-nytteklasser;
  \`\`\`

- d306833: - Introduserer et nytt sett med **semantiske spacing-variabler** for mer konsistent bruk av avstand i design og kode.

  - Restrukturerer og forbedrer **byggesystemet for tokens** for å gjøre vedlikehold og utvidelser enklere.

  ### Nye spacing-variabler

  \`\`\`css
  --jkl-spacing-xs
  --jkl-spacing-s
  --jkl-spacing-m
  --jkl-spacing-l
  --jkl-spacing-xl
  --jkl-spacing-2xl
  \`\`\`

- 656db36: Flytter knappene i modalen til høyre side på store skjermer. Oppdaterer også eksemplene for å vise at hovedhandlingen bør stå til høyre når vi følger dette mønstret.
- 6852e3e: Core-stilarket \`@fremtind/jokul/styles/core.css\` er refaktorert for å sørge for at CSS-lagene alltid opptrer i riktig rekkefølge. For å opprettholde dette i din egen kodebase bør du importere \`core\`-stilarket _før_ du importerer komponentstilarkene du bruker.
- 8705b2f: CardImage har fått muligheten til å blø ut i alle kanter av kortet det er plassert i, dersom det ikke er annet innhold i kortet. Sett \`placement\` til \`full\` for å bruke komponenten på denne måten.

### Patch Changes

- ed30758: Plasser stilene til alle komponenter som ikke er avhengige av andre komponenters stiler inne i CSS-laget \`jokul.components\`.
- 3b2293c: Legger til globale stiler for elementer som bruker [popover-APIet](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API), som sørger for at popovers animeres inn og ut med en enkel overtoning dersom ikke noe annet er spesifisert i selve komponenten. Siden disse stilene ligger i \`jokul.global\`-laget er de enkle å overstyre.
- de25ed3: Endret border z-index slik at hover-tilstand vises over checked input.
- 9f552db: Legger til en minimumsbredde for knapper med tekstinnhold, slik at det ikke ser rart ut når valgene er korte ord som "Ja" eller "Nei".
- f084272: Sørg for at alle tokens og variabler bygges

  Etter refaktoreringen av tokens-byggsteget falt en del variabler som
  fortsatt ble brukt ut av de resulterende filene. Her sørger vi for at
  alle tokens og variabler som trengs i systemet er tilgjengelige som før,
  i tillegg til de nye verdiene vi vil ha ut.

## 1.4.1

### Patch Changes

- 2c289e8: Merker IconButton og egne komponenter for Primary, Secondary, Tertiary og Ghost button som deprecated. Legger også til en tekst om at Tertiary-varianten er tenkt fjernet i fremtinden fordi den ligner veldig på en lenke

## 1.4.0

### Minor Changes

- 48100dd: Legg til Help-komponenten. Denne erstatter dagens Popuptip, som vil tas ut over jul en gang. Vi skriver oss sakte men sikkert bort fra [Floating-UI](https://floating-ui.com/) som hjelpeverktøy for å få ting til å legge seg oppå annet innhold. I dette tilfellet bruker vi [native popover fra CSS](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/popover).

## 1.3.0

### Minor Changes

- eb9e319: Utvidet ExpandablePanel med Header-prop for et mer konsistent og intuitivt API. Nå kan du bruke <ExpandablePanel.Header> direkte for å definere headeren til panelet. Storybook-eksempler og relevante typer er oppdatert for å støtte endringen.

  **Eksempel på bruk:**

  \`\`\`tsx
  <ExpandablePanel>
    <ExpandablePanel.Header>Klikk for å åpne panelet</ExpandablePanel.Header>
    <ExpandablePanel.Content>
      Her er innholdet i panelet.
    </ExpandablePanel.Content>
  </ExpandablePanel>
  \`\`\`

## 1.2.4

### Patch Changes

- 5e23ffd: fjerner alt-tekst fra placeholder-bilde etter innlasting

## 1.2.3

### Patch Changes

- d3770c2: ExpandablePanel's filled version now has a border in forced-colors mode

## 1.2.2

### Patch Changes

- c4363f0: Legg til fallback-font for ikonene.

  Ettersom ikonfonten er stor, og kan ta litt tid å laste inn, har vi lagt til en fallback-font for ikonene der størrelsen er satt til 0%. Uten dette kan man risikere at navnet på ikonet vises som ren tekst før ikonfonten er lastet. Vi anbefaler uansett at man legger inn en \`<link rel="preload">\` for ikonfonten i løsningen sin, slik at den lastes så raskt som mulig.

## 1.2.1

### Patch Changes

- a726eca: - Eksporter Segmented Control riktig.
  - Legger til Props på fieldset og ikke hver radio-knapp i Segmented Control.
- fd147a1: SystemMessage tar ikke lenger opp høyde etter å ha blitt dismissed

## 1.2.0

### Minor Changes

- f09834d: Endrer fontvekten for \`bold\` ikoner til \`400\` for å samsvare bedre med fonten vår når den brukes sammen med fet skrift.

### Patch Changes

- 5d3dd20: Fix option colors in select for Chrome on Windows in dark mode

## 1.1.2

### Patch Changes

- 5be6060: Fikser en bug der useAnimatedHeight ikke fungerte når brukeren foretrekker redusert bevegelse
- 9a4f03d: Endret Menu til å bruke [SlotComponent](https://github.com/fremtind/jokul/blob/main/packages/jokul/src/utilities/polymorphism/SlotComponent.tsx) for en mer robust og pålitelig håndtering av triggerElement.

## 1.1.1

### Patch Changes

- 7bcab64: fikser bug som gjorde at tooltip ikke vistes i modaler

## 1.1.0

### Minor Changes

- a7caf53: bedre støtte for nedlastingslenker
- 1563f3c: ny komponent: segmented control

### Patch Changes

- 06804df: Add dark box shadow for popover in dark mode
- f62ee78: Primary button has an outline in forced colors mode and all buttons have a hover effect in forced colors mode

## 1.0.0

### Major Changes

- 3406c20: Import av komponenter fra roten av \`@fremtind/jokul\` er ikke lenger mulig.

  For å fikse dette må alle importer oppdateres til å peke direkte på den spesifikke modulen:

  **FØR:**

  \`\`\`typescript
  import { Card } from "@fremtind/jokul";
  \`\`\`

  **ETTER:**

  \`\`\`typescript
  import { Card } from "@fremtind/jokul/card";
  \`\`\`

  \`ScreenReaderOnly\`-komponenten er også flyttet og må nå importeres fra \`@fremtind/jokul/screen-reader-only\`.

- 4ac8c73: BREAKING CHANGE: Fjerner flere komponenter so har vært merket som deprecated lenge, samt spacing-variabler basert på t-skjortestørrelser og tallbaserte typografivariabler.

  - Fjerner komponentene \`Accordion\` og \`AccordionItem\`, som har vært merket som deprecated ganske lenge. I stedet for disse komponentene kan man bruke \`ExpandablePanel\`.
  - Fjerner komponentene \`NavCard\`, \`InfoCard\` og \`TaskCard\`, som har vært merket som deprecated ganske lenge. I stedet for disse komponentene kan man bygge opp tilsvarende kort ved hjelp av den generelle \`Card\`-komponenten, \`CardImage\`-komponenten, og andre Jøkul-komponenter. Se eksemplene i portalen/Storybook for hvordan dette kan gjøres.
  - Fjerner den utgåtte versjonen av \`Expander\`, samt \`ExpandButton\`-komponenten. Nye \`Expander\` kan brukes i stedet.
  - Spacingvariabler og hjelpeklasser basert på t-skjortestørrelser (f.eks. \`spacing-xl\`) er fjernet. Bruk heller variablene på formen \`spacing-40\` eller den nye \`unit\`-skalaen.
  - Gamle, nummererte typografivariabler for størrelse og linjehøyde. Disse bør ikke ha vært i direkte bruk ute i løsningene deres.

### Patch Changes

- e37cecd: Fikset en feil som forårsaket advarsler i React 19 og typefeil i React 18 relatert til inert-attributten.
- 01e2b18: - fiks overlapp mellom chips og actions
  - bedre aria-label på actions
  - endre cursors for å vise intent bedre
  - chips kan nå wrappe (for å unngå at comboboxen overflower)
- c3bad0f: makes sure menu has a visible border in forced colors mode
- e4967c9: La til sys-color-toksen som json. De er ikke generert med style dictionary enda, da vi skal vente med å publisere.
- 0fc189c: Gjorde om system colors til å peke på ref-colors og ikke brand-colors. Flyttet også sys-colors til egen fil, slik at allerede eksisterende tokens fortsat kan bygges uten problem. Sys-colors er ikke blitt generert enda.
- a726267: Fikser en feil der knappene i kalenderen ikke fungerte når man klikket seg til første eller siste mulige måned i datovelgeren.
- e6a6d55: Invert colors for selected filter-chip in forced colors mode
- 2610a20: Rettet en feil med type-resolution for brukere av \`pnpm\` workspaces.

  Brukere i \`pnpm\` workspaces, spesielt de som håndterer flere React-versjoner (f.eks. v18 og v19), opplevde at props for Jøkul-komponenter ble feilaktig resolvet til \`any\`.

  For å løse dette har vi lagt til \`@types/react\` i vår \`peerDependencies\`. Dette følger den offisielle anbefalingen fra [pnpm-dokumentasjonen](https://pnpm.io/typescript#workspace-usage).

- 73f2e61: Remove extra underline and add hover in forced colors mode

## 0.71.2

### Patch Changes

- fb54ec3: Gjør typer for file-input tilgjengelig for konsumenter

## 0.71.1

### Patch Changes

- 79c94c3: fikset type-feil i usemenuwideevents hook

## 0.71.0

### Minor Changes

- 04d9540: streken under lenker er dyttet høyere opp, og linja er nå responsiv til tekststørrelsen

### Patch Changes

- 8a9434b: Fikset en feil der TextArea ikke automatisk utvidet seg når brukeren skrev inn tekst.
- 43ae6d8: Oppgradert/slettet avhengigheter i monorepo

## 0.70.0

### Minor Changes

- 60470d5: File har blitt redesigna for mer fleksibel bruk i løsningene utenfor FileInput.

  ## Endringer

  1. Navneendring: FileInputFile -> UploadedFile
  2. Navneendring: FileInputFileValidation -> UploadedFileValidation
  3. Navneendring i FileProps: SupportLabel -> ErrorLabel
  4. Navneendring: validateFile -> validateFileInputFiles for å tydeliggjøre at valideringa skjer i input, ikke i File
     selv
  5. Typeendring: Alle typer knytta til File er flytta til en egen mappe (/file) istedenfor sammen med FileInput
  6. Typeendring: State er forenkla til å kun ta imot "error", "loading" eller undefined
  7. Fjernet: FileInputFileState hentes nå direkte fra FileProps

  ## Next steps

  1. Dekomponenere FileInput enda mer, for å tilgjengeliggjøre Dropzone og en egen FileUpload knapp.
  2. Vurdere flere varianter av filer, dersom det er behov for dette i for eksempel dialoger

## 0.69.2

### Patch Changes

- c89ebef: Kun et versjonshopp for å synkronisere versjoner etter ny releaseflyt

## 0.69.1

### Patch Changes

- 27b0912: Hooks: For å sørge for bedre kompatibilitet med React 19 har vi oppdatert typene for alle hooks og komponenter som tar inn en \`ref\` til en komponent. Du vil nå ikke lenger få feilmelding om at \`RefObject<HTMLElement | null> is not assignable to RefObject<HTMLElement>\`.

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.69.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.68.6...@fremtind/jokul@0.69.0) (2025-06-19)

### Features

- Message med støtte for flere native HTML-props ([f0af345](https://github.com/fremtind/jokul/commit/f0af345ac6b441b498fb675f6a0b2e1c4ceb60ca))

## [0.68.5](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.68.4...@fremtind/jokul@0.68.5) (2025-06-17)

### Bug Fixes

- oppdater byggscript og tokens for farger og typografi ([d54b952](https://github.com/fremtind/jokul/commit/d54b952af173769b43232248a0ed79b87f1638eb))

# [0.68.4](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.68.3...@fremtind/jokul@0.68.4)

### BREAKING CHANGES

Fjernet Vind utility-klasser (margin, padding, typografi, flex utilities)
Erstattet Vind-klasserefaranser med Jøkul spacing-klasser i utviklingseksempler
**Migrasjon**: Bruk [Tailwind-pakken vår](https://github.com/fremtind/jokul/blob/main/packages/jokul/README.md#tailwind) eller eksisterende Jøkul spacing-klasser i stedet for Vind-klassene

## [0.68.2](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.68.1...@fremtind/jokul@0.68.2) (2025-06-12)

### Bug Fixes

- oklch farge tokens ([223e457](https://github.com/fremtind/jokul/commit/223e457328414946d7ca5948e14a5a88389dc07e))

# [0.68.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.67.0...@fremtind/jokul@0.68.0) (2025-06-11)

### Features

- toast har fått en ny prop (action) etter behov for å kunne knytte en handling til toast. ([fbbc9f3](https://github.com/fremtind/jokul/commit/fbbc9f307cce41be2c9610d691f9a2a592685999)), closes [#4679](https://github.com/fremtind/jokul/issues/4679)

# [0.67.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.66.2...@fremtind/jokul@0.67.0) (2025-06-03)

### Features

- eksponér props fra toast ([e93a756](https://github.com/fremtind/jokul/commit/e93a7563b734689798fe6ad2b6f8d653d8ef6c4b))
- eksponer toastprops interfacet fra toast ([98c8452](https://github.com/fremtind/jokul/commit/98c8452aecc7d5783b6672d81a5f308eb38d5117))

## [0.66.2](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.66.1...@fremtind/jokul@0.66.2) (2025-06-02)

### Bug Fixes

- gi namespace til importerte stiler i core ([de56bbf](https://github.com/fremtind/jokul/commit/de56bbf05ad61bac325ffd5c21f15e29c830a7f8))

# [0.66.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.64.2...@fremtind/jokul@0.66.0) (2025-05-28)

### Bug Fixes

- fiks feil som gjør at button hopper i GUI ([fda5101](https://github.com/fremtind/jokul/commit/fda5101ae271740e4addf812421daab9d0d275ae))

### Features

- slett gammel portal relaterte filer ([9e5d3e5](https://github.com/fremtind/jokul/commit/9e5d3e56ea35bfa4b6aeb9a868229f4cd36c7dff))

# [0.65.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.64.2...@fremtind/jokul@0.65.0) (2025-05-28)

### Bug Fixes

- fiks feil som gjør at button hopper i GUI ([fda5101](https://github.com/fremtind/jokul/commit/fda5101ae271740e4addf812421daab9d0d275ae))

### Features

- slett gammel portal relaterte filer ([9e5d3e5](https://github.com/fremtind/jokul/commit/9e5d3e56ea35bfa4b6aeb9a868229f4cd36c7dff))

# [0.64.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.63.0...@fremtind/jokul@0.64.0) (2025-05-22)

### Features

- slett gammel portal relaterte filer ([c8b29da](https://github.com/fremtind/jokul/commit/c8b29dad90153fd0d1a72810edf28b895f436e6c))

# [0.63.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.62.5...@fremtind/jokul@0.63.0) (2025-05-21)

### Features

- adds option to programmatically close toasts ([9db6fe8](https://github.com/fremtind/jokul/commit/9db6fe8a03a2f2a9b2e09bf533d954539429d903)), closes [#4869](https://github.com/fremtind/jokul/issues/4869)

## [0.62.5](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.62.4...@fremtind/jokul@0.62.5) (2025-05-21)

### Bug Fixes

- fiks scroll i tab-list ([50e798d](https://github.com/fremtind/jokul/commit/50e798dd946a8bff19bcdf90168ee585a2707ed2)), closes [#4171](https://github.com/fremtind/jokul/issues/4171)

## [0.62.4](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.62.3...@fremtind/jokul@0.62.4) (2025-05-21)

### Bug Fixes

- sørg for at ikon for eksterne lenker henger sammen med siste ord ([17207d9](https://github.com/fremtind/jokul/commit/17207d9e0adf07f1a43e2de6fc095513fa83567b))

# [0.62.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.61.0...@fremtind/jokul@0.62.0) (2025-05-13)

### Features

- gjort caption required i Table ([82730b8](https://github.com/fremtind/jokul/commit/82730b82898d04fa68940b6dcc30e7e14496cd08))

### BREAKING CHANGES

- Required prop: caption in Table

# [0.61.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.60.0...@fremtind/jokul@0.61.0) (2025-05-08)

### Features

- gjør navtab polymorf med støtte for egendefinert link-komponent ([5fb6c5b](https://github.com/fremtind/jokul/commit/5fb6c5b6fce56d9e2e6f061b1fd28980495e1fa8)), closes [#4801](https://github.com/fremtind/jokul/issues/4801)

### BREAKING CHANGES

- \`component\`-propen er fjernet og erstattet med \`as\`-propen, som gir bedre typesikkerhet og autocompletion
  basert på komponenten du sender inn.
- \`componentProps\` er fjernet. Istedenfor får du autocompletion for de propsene som er gyldige for akkurat den komponenten du har valgt med \`as\`-propen.

# [0.60.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.59.0...@fremtind/jokul@0.60.0) (2025-05-05)

### Features

- byttet ut buttons i calendar navigation til ghostbuttons ([27a4962](https://github.com/fremtind/jokul/commit/27a4962545cf5d1be0d2070758a741ae4e04d0b1))

# [0.59.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.58.5...@fremtind/jokul@0.59.0) (2025-05-05)

### Features

- la useLocalStorage ta inn setStateAction ([9ad28d6](https://github.com/fremtind/jokul/commit/9ad28d6a758b7cfafd7bd029ff4082a98003d7d7))

## [0.58.2](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.58.1...@fremtind/jokul@0.58.2) (2025-04-23)

### Bug Fixes

- sørg for at datepicker beholder omriss med åpen velger ([95d62e3](https://github.com/fremtind/jokul/commit/95d62e35026fd787febb32417cf5d31f6cfd0d4d))

# [0.58.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.57.8...@fremtind/jokul@0.58.0) (2025-04-08)

### Bug Fixes

- sikre korrekt innrykk for tekst i checklistitem ([69ff5da](https://github.com/fremtind/jokul/commit/69ff5dafba60e83c4197529099d199a3d33c00b3)), closes [#4673](https://github.com/fremtind/jokul/issues/4673)

### BREAKING CHANGES

- Fikser opp i layout issue i CheckListItem-komponenten. Når tekst i et listepunkt gikk over flere
  linjer, startet de påfølgende linjene feilaktig helt til venstre (under ikonet).

## [0.57.7](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.57.6...@fremtind/jokul@0.57.7) (2025-04-07)

### Bug Fixes

- makes sure the aria-label on File's success icon is actually exposed to ATs ([201d554](https://github.com/fremtind/jokul/commit/201d55466a64ac41f9767d45aa0911073a6194a8)), closes [#4723](https://github.com/fremtind/jokul/issues/4723)

## [0.57.3](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.57.2...@fremtind/jokul@0.57.3) (2025-03-26)

### Bug Fixes

- la File-komponenten ta inn props for div-elementet ([166bfbe](https://github.com/fremtind/jokul/commit/166bfbe6800626f803211877a8c290be62326b59))

## [0.57.1](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.57.0...@fremtind/jokul@0.57.1) (2025-03-24)

### Bug Fixes

- tabbing to radio/checkbox now scrolls it into view ([f3bd63b](https://github.com/fremtind/jokul/commit/f3bd63b8599ec9b6f111f5493ac2644317fcff47)), closes [#4649](https://github.com/fremtind/jokul/issues/4649)

# [0.57.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.56.4...@fremtind/jokul@0.57.0) (2025-03-24)

### Bug Fixes

- legg til stilavhengigheter for file-input ([df54fb0](https://github.com/fremtind/jokul/commit/df54fb0ed3cb36ff1f8c311d77c609915228b254))

### Features

- la File ta inn alle attributter fra div-elementet ([7e434f1](https://github.com/fremtind/jokul/commit/7e434f14f57e81d95ecadf8d15076c3f06233417))

## [0.56.4](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.56.3...@fremtind/jokul@0.56.4) (2025-03-18)

### Bug Fixes

- forslag på organisering ([76aca4f](https://github.com/fremtind/jokul/commit/76aca4f75ff9be2e63d911863cfa88190def658d))
- midlertidig lineheights ([cc77cbc](https://github.com/fremtind/jokul/commit/cc77cbc8dfb61450c1f74074619e1ea8bfecd180))
- strl gruppering ([f456457](https://github.com/fremtind/jokul/commit/f45645719dcac572e1682c9aa16b578a56b5cf0e))

## [0.56.1](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.56.0...@fremtind/jokul@0.56.1) (2025-03-04)

### Bug Fixes

- seperate table to its own branch ([7dc6544](https://github.com/fremtind/jokul/commit/7dc65443ff0e9c3ba34b942881ceead09567c176))
- stories for komponenter ([f599d4c](https://github.com/fremtind/jokul/commit/f599d4cd4b5bcd7854e078c94181b49bfbbde772))

# [0.56.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.55.1...@fremtind/jokul@0.56.0) (2025-03-04)

### Features

- la til komplett modal-story ([c758d5d](https://github.com/fremtind/jokul/commit/c758d5d405135a00c36baeed511ff9c802ada8f4))

# [0.55.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.54.0...@fremtind/jokul@0.55.0) (2025-03-03)

### Features

- la til story for radiobutton ([1493a5d](https://github.com/fremtind/jokul/commit/1493a5d4158d893ca94694f8604339e550bb9631))

# [0.54.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.53.0...@fremtind/jokul@0.54.0) (2025-02-27)

### Features

- la til story for progressbar ([6563733](https://github.com/fremtind/jokul/commit/6563733ef42dbe282d9da3913d5907ded97582e6))
- lagde story for popover ([ee8986a](https://github.com/fremtind/jokul/commit/ee8986afa11205eea9ce93e98e1108495adadd32))
- skriveleif ([720a779](https://github.com/fremtind/jokul/commit/720a7794c38e84e2dc3d4240113fd9e6d1d3c940))

# [0.53.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.52.0...@fremtind/jokul@0.53.0) (2025-02-27)

### Features

- jobbet med stories for Modal ([d548997](https://github.com/fremtind/jokul/commit/d548997d2653805e3a5e2a1ea2e060b21d0c0d4c))
- la til påkrevde props i ModalContainer ([8ffe438](https://github.com/fremtind/jokul/commit/8ffe438726be0f88d412b1fb24d8250a994ebaaf))
- work in progress ([4510bc0](https://github.com/fremtind/jokul/commit/4510bc0b17c0acb99aac77c40a3abd2850bc7065))

# [0.52.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.51.0...@fremtind/jokul@0.52.0) (2025-02-27)

### Features

- la til story for pagination ([685bcdb](https://github.com/fremtind/jokul/commit/685bcdb8d6bd925e9d63f4e4c77b89fb39b2788f))

# [0.51.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.50.0...@fremtind/jokul@0.51.0) (2025-02-27)

### Features

- fjernet ubrukt import ([caa3900](https://github.com/fremtind/jokul/commit/caa390084c9cdc886f2962acc5fe2b4a66894a95))
- lagde story for NavLink ([9e37b73](https://github.com/fremtind/jokul/commit/9e37b73f011aa4e0faae082f71bf5c4af130a1eb))

# [0.50.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.49.0...@fremtind/jokul@0.50.0) (2025-02-26)

### Features

- pagination will use className if provided ([67102e0](https://github.com/fremtind/jokul/commit/67102e09e097fcf6c01a6f5b8f910755417fea87))

# [0.49.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.48.6...@fremtind/jokul@0.49.0) (2025-02-25)

### Features

- fjerne ubrukt import ([7c44f21](https://github.com/fremtind/jokul/commit/7c44f21487085fae509159468c9883f8b1c5ae79))
- fjernet screenshots ([a411e54](https://github.com/fremtind/jokul/commit/a411e5477d5679da442704be02f1644c99f9f299))
- lagde story for message ([b197b7e](https://github.com/fremtind/jokul/commit/b197b7ede8473f5e3081287dccd5ffa8272dbde3))
- skrev tilbake message-komponenten ([a015a16](https://github.com/fremtind/jokul/commit/a015a16ee3b10c68228ec01f357b26356f78b040))
- wip ([83198b0](https://github.com/fremtind/jokul/commit/83198b07b205126a86a7fb8ba0b75d837b4f4fcf))

### Reverts

- la tilbake screen shots ([28a67ba](https://github.com/fremtind/jokul/commit/28a67ba2b8c3eb08cf22c39bc17f0d78ef754e21))

## [0.48.6](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.48.5...@fremtind/jokul@0.48.6) (2025-02-24)

### Bug Fixes

- checks if element exists before reading height ([c789206](https://github.com/fremtind/jokul/commit/c789206d085b831acca54f97fe0a5ace7396f22a))

## [0.48.5](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.48.4...@fremtind/jokul@0.48.5) (2025-02-19)

### Bug Fixes

- byttet active-state med focus for delte input-felt ([16c8113](https://github.com/fremtind/jokul/commit/16c81133f5284fa674d47d3bb29dc55bbd50b525)), closes [#4570](https://github.com/fremtind/jokul/issues/4570)

## [0.48.4](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.48.3...@fremtind/jokul@0.48.4) (2025-02-18)

### Bug Fixes

- gjør at understrek på lenker bryter sammen med teksten ([9ab41eb](https://github.com/fremtind/jokul/commit/9ab41eb52bdd907780604356934215381ac5c273))
- riktig plassering av ikonet i nav-link ([9568759](https://github.com/fremtind/jokul/commit/9568759eef9af2acd7e29bc455d08dc43df13201))

## [0.48.3](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.48.2...@fremtind/jokul@0.48.3) (2025-02-17)

### Bug Fixes

- fiks importer av delte stilark for input-panels et al ([51bf077](https://github.com/fremtind/jokul/commit/51bf077be36d5bb575eb26107474c2cbd68678e5))
- mer robust regex for omskriving av sass-importer ved bygg ([f88922c](https://github.com/fremtind/jokul/commit/f88922cf7929c9f163ce85a08c7b17d076ca1c86))

## [0.48.2](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.48.1...@fremtind/jokul@0.48.2) (2025-02-17)

### Bug Fixes

- import av stiler i text-input og noen andre komponenter ([af3dd12](https://github.com/fremtind/jokul/commit/af3dd126b4c30d3eae4f385bcd09568dd4952d37))

# [0.48.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.47.0...@fremtind/jokul@0.48.0) (2025-02-17)

### Bug Fixes

- datepicker respects invalid prop ([b64119d](https://github.com/fremtind/jokul/commit/b64119da5366693abd7f13b695fb44b02d488b37))

### Features

- datepicker automatically pulls in popover styling ([1105744](https://github.com/fremtind/jokul/commit/11057444b0632650e961b6a454d0d00ba4c32088))
- exports chip from "@fremtind/jokul/components" ([6ba8769](https://github.com/fremtind/jokul/commit/6ba8769023ce2e16d6ace84835bf6c50167a331f))

# [0.47.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.46.0...@fremtind/jokul@0.47.0) (2025-02-13)

### Features

- splits text-input into text-input and text-area ([04806d2](https://github.com/fremtind/jokul/commit/04806d21df9b735a9ffe78bfd144a5198c99df77))

### BREAKING CHANGES

- TextArea er ikke lenger en del av TextInput mappa og har fått sin egen
  import-sti

\`\`\`diff
- import { TextArea } from "@fremtind/jokul/components/text-input"
+ import { TextArea } from "@fremtind/jokul/components/text-area"
\`\`\`

# [0.46.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.45.3...@fremtind/jokul@0.46.0) (2025-02-12)

### Features

- supports setting cookie path for cookie-consent ([f501696](https://github.com/fremtind/jokul/commit/f5016965726b2db9e17cd825686e4a0aa7f7dbff))

## [0.45.2](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.45.1...@fremtind/jokul@0.45.2) (2025-02-10)

### Bug Fixes

- rett opp feil eksport i cookie-consent ([fcdccb5](https://github.com/fremtind/jokul/commit/fcdccb5254e2e7c0b6b3a88727d5bfb91b24fbe4))

## [0.45.1](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.45.0...@fremtind/jokul@0.45.1) (2025-02-10)

### Bug Fixes

- makes cookie-consent automatically pull in modal SCSS ([98155b4](https://github.com/fremtind/jokul/commit/98155b4cea7a0654bf6d8229acb0348546e8f9f1))

# [0.45.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.44.7...@fremtind/jokul@0.45.0) (2025-02-10)

### Features

- splits input-panel into checkbox and radio ([e405f46](https://github.com/fremtind/jokul/commit/e405f466c71dbcc4da632bfd078921d8d75f1b84))
- splits link into link and nav-link ([9c438a4](https://github.com/fremtind/jokul/commit/9c438a4e6f140df73ed7885880a3bf6d56a93c29))
- splits progress-bar into progress-bar and countdown ([ab909f0](https://github.com/fremtind/jokul/commit/ab909f089c9803f48bcdcbedfb9e634014b1701a))

## [0.44.7](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.44.6...@fremtind/jokul@0.44.7) (2025-02-07)

### Bug Fixes

- sørg for at custom stiler funker med tailwind-preset ([37e16d5](https://github.com/fremtind/jokul/commit/37e16d550a773a57b1f8926ac823736a36d3d02b))

## [0.44.6](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.44.5...@fremtind/jokul@0.44.6) (2025-02-04)

### Bug Fixes

- no longer updates Table while rendering TableHead ([4dc0239](https://github.com/fremtind/jokul/commit/4dc0239debf646a34343e752285598762ee92a2b))

## 0.44.5 (2025-02-03)

### Bug Fixes

- onOpenChange i ExpandablePanel.tsx trigger nå bare på onChange dersom den ikke er controlled ([cf8628f](https://github.com/fremtind/jokul/commit/cf8628f531693dc8f414b84c1ea3e82ff465426a))

## 0.44.4 (2025-01-30)

### Bug Fixes

- supports importing autosuggest and file-input from root path ([107de36](https://github.com/fremtind/jokul/commit/107de364e6a3e47085538ef41cc3a421bd9e2268))

## [0.44.3](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.44.2...@fremtind/jokul@0.44.3) (2025-01-30)

### Bug Fixes

- deaktiver innebygde tailwind-tema i vår preset ([71a8648](https://github.com/fremtind/jokul/commit/71a8648c9e9a2867518f61c12f936e985854935e))

## [0.44.1](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.44.0...@fremtind/jokul@0.44.1) (2025-01-28)

### Bug Fixes

- actions in a modal stack on small screens ([b467520](https://github.com/fremtind/jokul/commit/b467520926cbe9958f924b89d99a46c27740b4bd))

# [0.44.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.43.1...@fremtind/jokul@0.44.0) (2025-01-24)

### Features

- legg til typografistiler i tailwind-preset ([955c545](https://github.com/fremtind/jokul/commit/955c54535f89a3e45abcddb7d8a71b583ede375a)), closes [#4495](https://github.com/fremtind/jokul/issues/4495)

### BREAKING CHANGES

- Ny importsti for Tailwind-preset og -plugins

## [0.43.1](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.43.0...@fremtind/jokul@0.43.1) (2025-01-23)

### Reverts

- rull tilbake tailwind-plugin som førte til bug i core ([af1ed99](https://github.com/fremtind/jokul/commit/af1ed99284c11d6a799c0621fa34064289c49104)), closes [#4493](https://github.com/fremtind/jokul/issues/4493)

# [0.43.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.42.3...@fremtind/jokul@0.43.0) (2025-01-23)

### Features

- adds a data attribute indicating if consent is open or not ([c9306ee](https://github.com/fremtind/jokul/commit/c9306ee03b83877b1c7b6f312b0300511ccc3d46))
- adds an id to the upload button in FileInput ([5effddc](https://github.com/fremtind/jokul/commit/5effddc813192052d710c52d124514f3c1ceba00))

## 0.42.1 (2025-01-22)

### Bug Fixes

- allows adding the same file twice ([1904ae3](https://github.com/fremtind/jokul/commit/1904ae3fe28a845bcf9f9ff4c9ac5384e787e436)), closes [#4471](https://github.com/fremtind/jokul/issues/4471)

# [0.42.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.41.1...@fremtind/jokul@0.42.0) (2025-01-21)

### Bug Fixes

- import needed funcs from vitest ([1eea829](https://github.com/fremtind/jokul/commit/1eea829d47c91d5e799bd17c0c897d246a56a5d1))
- oppdater test for å sikre riktig stoppunkt ([95b2c71](https://github.com/fremtind/jokul/commit/95b2c71adc5ff80d874f89b35057fd7db41c333e))
- use vi rather than jest ([bed5dac](https://github.com/fremtind/jokul/commit/bed5dacddbfa4765e25764d14b9bcc9f9c63f171))

### Features

- typography tokens ([35bdd54](https://github.com/fremtind/jokul/commit/35bdd5411a64320d9ad06b2025efb2f82daf07d3))

## [0.41.1](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.41.0...@fremtind/jokul@0.41.1) (2025-01-20)

### Bug Fixes

- adds axe plugin and fixes warnings ([b4e8fda](https://github.com/fremtind/jokul/commit/b4e8fda4ee78c479348459c6840386ae50431d9d))

# [0.41.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.40.3...@fremtind/jokul@0.41.0) (2025-01-20)

### Bug Fixes

- changes CookieConsent to single step ui ([bae8c78](https://github.com/fremtind/jokul/commit/bae8c781921366cb4f53fb4a9d575e3f42a342ae)), closes [#4403](https://github.com/fremtind/jokul/issues/4403)

### BREAKING CHANGES

- - The "blocking" prop now controls if the dialog is a modal or not
- Interfaces "Consent" and "ConsentComponentBaseProps" and
  "CookieConsentProviderProps" are changed to types
- Methods "openConsentModalWithSettings" and "openConsentModalWithDefaults"
  are replaced with "openConsentModal" when using the hook

## [0.40.3](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.40.2...@fremtind/jokul@0.40.3) (2025-01-14)

### Bug Fixes

- sync figma and code ([340981e](https://github.com/fremtind/jokul/commit/340981eb25c3669899f95dbf5bd1f97aa8380f08))

## 0.40.2 (2025-01-14)

### Bug Fixes

- only has focus style with keyboard-nav ([a1c4e43](https://github.com/fremtind/jokul/commit/a1c4e43711806b60adfaba20ff919c8962dc7c87))

## [0.40.1](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.40.0...@fremtind/jokul@0.40.1) (2025-01-14)

### Bug Fixes

- makes stroke corners round again ([abc5eab](https://github.com/fremtind/jokul/commit/abc5eab4a3260be228b248460d1089c02547987a)), closes [#4424](https://github.com/fremtind/jokul/issues/4424)
- sending className to ExpandablePanel no longer removes component styles ([12273f4](https://github.com/fremtind/jokul/commit/12273f42d3746bcc0af62f272e67e4fd5956b814)), closes [#4425](https://github.com/fremtind/jokul/issues/4425)

# [0.40.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.39.0...@fremtind/jokul@0.40.0) (2025-01-13)

### Bug Fixes

- links only have underline for the text content ([9e20b9f](https://github.com/fremtind/jokul/commit/9e20b9f862ef21c5836348738a9d4e099543befb))

### Features

- adds new icon: OpenInNew ([8693e05](https://github.com/fremtind/jokul/commit/8693e054cf29ce818e0082b723cb28eac0107a29))
- external links use OpenInNew icon instead of arrow ([fc7bba2](https://github.com/fremtind/jokul/commit/fc7bba2c04c0f0c837b119f94077f1bf3aea7498))
- uses the new material icons for link arrows ([58b8f72](https://github.com/fremtind/jokul/commit/58b8f72a92c6b70bbcb99a5c8ff155d007334591))

# [0.39.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.38.0...@fremtind/jokul@0.39.0) (2025-01-10)

### Bug Fixes

- cicd pipe failing & refactor tailwind setup ([c9ade19](https://github.com/fremtind/jokul/commit/c9ade19eaaf8135efc9e1c59c6f47cc25559dd4c))
- rename tailwind related files ([747c320](https://github.com/fremtind/jokul/commit/747c32046626ee2dbaa0fd730b82551cf7ecbd31))

### Features

- initial jokul tailwind config ([2849412](https://github.com/fremtind/jokul/commit/284941255f0d6af17684dfd891226d8a4ce668d0))

# 0.38.0 (2025-01-09)

### Features

- legg til defaultOpen som prop i ExpandablePanel ([3305bac](https://github.com/fremtind/jokul/commit/3305bac91646fc62d830ccf34afd0755555a2cd0)), closes [#4420](https://github.com/fremtind/jokul/issues/4420)

## [0.37.17](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.37.16...@fremtind/jokul@0.37.17) (2025-01-09)

### Bug Fixes

- file validation is case insensitive ([d208a14](https://github.com/fremtind/jokul/commit/d208a14d6022d0febe91e54373f668950f8c0cd2))

## [0.37.16](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.37.15...@fremtind/jokul@0.37.16) (2025-01-09)

### Bug Fixes

- fixes margin of toast icon ([01aa575](https://github.com/fremtind/jokul/commit/01aa5753ece8ab47f71d072b1808d251b7922b34))
- no focus-outline when using mouse navigation ([ccdae2c](https://github.com/fremtind/jokul/commit/ccdae2c5243c878a4ea1e0a2e1626289ff2b41ae)), closes [#4393](https://github.com/fremtind/jokul/issues/4393)
- puts icon next to content on mobile devices ([ef68f75](https://github.com/fremtind/jokul/commit/ef68f75a4448fe7d69197753fd5e37232b903949)), closes [#3995](https://github.com/fremtind/jokul/issues/3995)
- small improvements to forced colors mode ([b14d3de](https://github.com/fremtind/jokul/commit/b14d3ded90cbf8eaf7353f46fca1b9e632d0875d))

## [0.37.15](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.37.14...@fremtind/jokul@0.37.15) (2025-01-08)

### Bug Fixes

- prefers gap/overflow shorthands ([be856d4](https://github.com/fremtind/jokul/commit/be856d40a274c7cfa88da109b2812e34840907a7))

## [0.37.14](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.37.13...@fremtind/jokul@0.37.14) (2025-01-07)

### Bug Fixes

- only shows focus triangle when expander has focus ([e0daa1d](https://github.com/fremtind/jokul/commit/e0daa1d87616e783f1d605ae2bd9f7d78f8752ec))

## [0.37.13](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.37.12...@fremtind/jokul@0.37.13) (2025-01-06)

### Bug Fixes

- tables with a sticky header has tabindex ([d74ebc7](https://github.com/fremtind/jokul/commit/d74ebc7acde3fb84e3f9c0105c82b0cf4a7d9ca6))

## [0.37.12](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.37.11...@fremtind/jokul@0.37.12) (2024-12-19)

### Bug Fixes

- erstatt legacy spacing med units ([e52d9a8](https://github.com/fremtind/jokul/commit/e52d9a812dec03681b434d1275b0b88ddf0f0957))
- erstatte spacing med units i alle komponenter ([69df782](https://github.com/fremtind/jokul/commit/69df78284a7674fa54bf73d40b20971d99987ddf))
- feedback fiks ([49a1d9b](https://github.com/fremtind/jokul/commit/49a1d9bff12871721a53d02901843eb2f296b6b2))
- fjern uløst konflikt fra stilark ([f450464](https://github.com/fremtind/jokul/commit/f4504648cbeb5f38f525aa45ab60144fe0a20301))
- gjør legacy spacing tilgjengelig for spacing-mixin ([a196a47](https://github.com/fremtind/jokul/commit/a196a47ff7f0cd701d22d44bd73c606632b09b16))
- legg tilbake margin rundt liste i cookie consent ([da8dfe6](https://github.com/fremtind/jokul/commit/da8dfe6f74765781067d01d79ec79e9ec0221cbc))
- påbegynt å bruke units i komponenter ([ac00dc4](https://github.com/fremtind/jokul/commit/ac00dc485a413448a6adc6bd60c62bfa190f7b15))
- rett opp paddinger i file input ([035e550](https://github.com/fremtind/jokul/commit/035e55094e0a0d283843ee72ac843f4e7e69bbcb))
- sørg for å generere css-variabler for units ([3b53680](https://github.com/fremtind/jokul/commit/3b53680e14e3fd2f48685376871a9a84dbdab27b))
- unit tokens ([5da3ddc](https://github.com/fremtind/jokul/commit/5da3ddcb9291f68c1d87b2e8e7acc65ce4ceb610))

## [0.37.11](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.37.10...@fremtind/jokul@0.37.11) (2024-12-18)

### Bug Fixes

- implements new focus state ([119a8a7](https://github.com/fremtind/jokul/commit/119a8a76efc5162b9ec48e6357c5297b4ac5f05c))
- properly hides content in closed expander ([5fdf878](https://github.com/fremtind/jokul/commit/5fdf8782c41c017f4c3e3de3a400e7c768691519))
- removes hover effect on summary when content is hovered ([1367ed4](https://github.com/fremtind/jokul/commit/1367ed4d412c4151255276a969223d1c36c623a6))
- updates focus styles after review with designer ([ec80048](https://github.com/fremtind/jokul/commit/ec80048ac37499e67b6d56633b66d7a498aa92ba))
- warns if button is missing accessible name ([7ad40ab](https://github.com/fremtind/jokul/commit/7ad40ab4910f78fa131d4290fc391767be112fa8))

## [0.37.10](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.37.9...@fremtind/jokul@0.37.10) (2024-12-18)

### Bug Fixes

- riktig størrelse på pila i AccorionItem ([b7d313a](https://github.com/fremtind/jokul/commit/b7d313ac3912ad9e56e34f58cc4300d423ec9ebc)), closes [#4385](https://github.com/fremtind/jokul/issues/4385)

## [0.37.9](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.37.8...@fremtind/jokul@0.37.9) (2024-12-18)

### Bug Fixes

- allows content to be interacted with ([24f3d52](https://github.com/fremtind/jokul/commit/24f3d52c77d4d75e3ea4a0df01c2b92c231cdb5a))
- makes sure SR announces popuptip content ([f4f5d43](https://github.com/fremtind/jokul/commit/f4f5d438e0cfe7f4fda46cd9b61401166fd7aa96))
- returns focus to main element after selection ([25037a4](https://github.com/fremtind/jokul/commit/25037a4a7afdad6286c901d2d0dc8c93e46a8589))

## [0.37.8](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.37.7...@fremtind/jokul@0.37.8) (2024-12-17)

### Bug Fixes

- bruk moderne sass globals i urlencodecolor ([e3a16e9](https://github.com/fremtind/jokul/commit/e3a16e9a19ceabca1aa2c67357e4618ff10a3481))
- eksponer index-filer for alle stilpakkene i exports ([4013f6a](https://github.com/fremtind/jokul/commit/4013f6afe6522e12c33a23a998e38c6f26616942)), closes [#4378](https://github.com/fremtind/jokul/issues/4378)

## [0.37.7](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.37.6...@fremtind/jokul@0.37.7) (2024-12-17)

### Bug Fixes

- toggles open state on arrow button click ([be32bd5](https://github.com/fremtind/jokul/commit/be32bd5a3f9b828ebd3fae7e0a4734f42fb566af))

## [0.37.6](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.37.5...@fremtind/jokul@0.37.6) (2024-12-16)

### Bug Fixes

- eksporter listprops ([f64693f](https://github.com/fremtind/jokul/commit/f64693f386c21f78de2e58e27f819b68be5b98b2))
- fjern gamle playwright screenshots ([0837721](https://github.com/fremtind/jokul/commit/0837721926c6d21211d87b1282891ed7c138bb7e))
- slett gamle cookie-screenshots ([b091475](https://github.com/fremtind/jokul/commit/b09147525c949a7e8212beb3235072c3571531db))

## [0.37.4](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.37.3...@fremtind/jokul@0.37.4) (2024-12-11)

### Bug Fixes

- fixes styling when using \`actionButton\` prop ([f73b44b](https://github.com/fremtind/jokul/commit/f73b44b7cfa16d2eb939c41df9ede510f2953a4a))
- makes focus on action-button look better ([da9b1ee](https://github.com/fremtind/jokul/commit/da9b1ee810acd1ddbfa8d31601a356ffd35a9dbc))

## [0.37.3](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.37.2...@fremtind/jokul@0.37.3) (2024-12-09)

### Bug Fixes

- fallback to document.body for floating portal reference ([12ac4fb](https://github.com/fremtind/jokul/commit/12ac4fb8703444504e638f4b85dfd2ddbcdc07b7))

## [0.37.2](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.37.1...@fremtind/jokul@0.37.2) (2024-12-09)

### Bug Fixes

- lets screenreaders know if links are external ([e7b3e83](https://github.com/fremtind/jokul/commit/e7b3e834540c4aa55a3e3c76e431d69d3f2d41da))

## [0.37.1](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.37.0...@fremtind/jokul@0.37.1) (2024-12-09)

### Bug Fixes

- fixes an issue with nested density-layouts ([235fd1f](https://github.com/fremtind/jokul/commit/235fd1fe755376c0e49c3a02b3e6585050258012))

# [0.37.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.36.4...@fremtind/jokul@0.37.0) (2024-12-04)

### Features

- allows sending props to inner TextInput ([fc23a6d](https://github.com/fremtind/jokul/commit/fc23a6d6f344d158a8035245580f06ae3aaa0b57))

## [0.36.4](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.36.3...@fremtind/jokul@0.36.4) (2024-12-03)

### Bug Fixes

- makes cascading of layout density work again ([1e87f31](https://github.com/fremtind/jokul/commit/1e87f3108faa3ab19ebf436ce7bb5699b29628cb)), closes [#4340](https://github.com/fremtind/jokul/issues/4340)

## [0.36.2](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.36.1...@fremtind/jokul@0.36.2) (2024-11-29)

### Bug Fixes

- sørg for at vi tar med undermapper når vi bygger stiler ([be58af8](https://github.com/fremtind/jokul/commit/be58af895aa81724ef27a2c991a159f5d598aa08))

# [0.36.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.35.1...@fremtind/jokul@0.36.0) (2024-11-28)

### Bug Fixes

- adds transform as a transition-property to support animations ([3306beb](https://github.com/fremtind/jokul/commit/3306beb7ca6ba3926ef85a703649357d6ace4b71))
- better hover ([0e967a6](https://github.com/fremtind/jokul/commit/0e967a65a912ca711980e95d4fdff961e447f260))
- deprecate Accordion component ([55a08d9](https://github.com/fremtind/jokul/commit/55a08d95d49fe98f4e275a18655bfb0eef1616b1))
- fixes width of expand row button ([b2a761c](https://github.com/fremtind/jokul/commit/b2a761ca4885566859635b7b05e20817bbd3ed7a))
- open expandable on native toggle event ([77dd4c1](https://github.com/fremtind/jokul/commit/77dd4c1bf3feb6f9feb98575a61ec3ca0d0bf907))
- title should be bold when open ([e45ee69](https://github.com/fremtind/jokul/commit/e45ee6902cbd8d24e8c26627ac3b371853cebda6))
- visible height of expander in open state should match closed ([cebec61](https://github.com/fremtind/jokul/commit/cebec61f0d31b53c15d9662c40582fe978f366fc))

### Code Refactoring

- makes Expander a true polymorfic component ([217b73f](https://github.com/fremtind/jokul/commit/217b73fb712e1858233e5ec6aff68443fc780c1c))

### Features

- adds new expandable component ([37e731e](https://github.com/fremtind/jokul/commit/37e731e08e8f5d22971c5622a0ba839d68e33daf))

### BREAKING CHANGES

- Prop \`isExpanded\` er endret til \`open\`
  Prop \`expandDirection\` er fjernet
  Prop \`density\` er fjernet, styr dette med \`data-density\` HTML attributet
  Prop \`hideLabel\` er fjernet, wrap heller children i \`ScreenReaderOnly\`

## 0.35.1 (2024-11-27)

### Bug Fixes

- deprecate useAnimatedDetails hook ([79a24ef](https://github.com/fremtind/jokul/commit/79a24ef5e26d93999fcac6ab7798949f4ed2ea07))

# [0.35.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.34.1...@fremtind/jokul@0.35.0) (2024-11-20)

### Code Refactoring

- fjern dismissableAction property ([c6f22d8](https://github.com/fremtind/jokul/commit/c6f22d847c80d3e41929217573dc084d40221e68)), closes [#4288](https://github.com/fremtind/jokul/issues/4288)

### BREAKING CHANGES

- Fjernet den påkrevde dismissableAction-propen fra Tag-komponenten.

## 0.34.1 (2024-11-19)

### Bug Fixes

- erstatt bruk av utdaterte sass-funksjoner ([a497458](https://github.com/fremtind/jokul/commit/a497458c73a3b2bd4f67d97833c0b788af3fecd0)), closes [#4300](https://github.com/fremtind/jokul/issues/4300)

# [0.34.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.33.2...@fremtind/jokul@0.34.0) (2024-11-18)

### Bug Fixes

- fjern en bug der PopupTip forble bold etter å lukkes ([8683672](https://github.com/fremtind/jokul/commit/8683672acd8d5ebe1c83d2d117efc94efa51400d))

### Features

- eksponer onOpenChange-funksjon for Tooltip ([7025fa1](https://github.com/fremtind/jokul/commit/7025fa1344a8c5083b79053de30587d38a171565))

## [0.33.2](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.33.1...@fremtind/jokul@0.33.2) (2024-11-18)

### Bug Fixes

- fixes the test-test ([5ac2535](https://github.com/fremtind/jokul/commit/5ac2535b1004d55e773ab3bde6dea6c9381b4794))
- generate missing screenshots, fail on diff ([d0a2cb2](https://github.com/fremtind/jokul/commit/d0a2cb23b826c2fb06d2a5fc117bf541fdf13633))

## [0.33.1](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.33.0...@fremtind/jokul@0.33.1) (2024-11-15)

### Bug Fixes

- removes scss warnings about mixins ([4bfa5e0](https://github.com/fremtind/jokul/commit/4bfa5e0c39c2b8e75efbb09becf4079b9753856f))

# [0.33.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.32.2...@fremtind/jokul@0.33.0) (2024-11-14)

### Features

- endre tooltipProp til å ta inn en komponent ([7837f29](https://github.com/fremtind/jokul/commit/7837f2936d481bcafb0314ee942c6e9850d3e7dd)), closes [#4260](https://github.com/fremtind/jokul/issues/4260)
- endre tooltipProp til å ta inn en komponent ([0071fcb](https://github.com/fremtind/jokul/commit/0071fcbb1677b51d16f20ca97fe1e18547270e7c)), closes [#4260](https://github.com/fremtind/jokul/issues/4260)
- ta i bruk nytt API for tooltip i Autosuggest ([b17a819](https://github.com/fremtind/jokul/commit/b17a819d86fb5c00bfed53c9613e3ea37011871e))

### BREAKING CHANGES

- For å få et tooltip i Autosuggest må du nå sende inn et PopupTip til prop-en tooltip. Prop-en
  tooltipProps finnes ikke lenger.
- Fjernet tooltipProp og lagt til tooltip i FieldGroup.tsx.
- Fjernet tooltipProp og lagt til tooltip i InputGroup.

## [0.32.2](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.32.1...@fremtind/jokul@0.32.2) (2024-11-14)

### Bug Fixes

- en a som ikke skulle være der ([e834251](https://github.com/fremtind/jokul/commit/e834251d46f597861fe378e3a45372ff9b26c07e))

## [0.32.1](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.32.0...@fremtind/jokul@0.32.1) (2024-11-14)

### Bug Fixes

- fjernet ekstra parantes ([c2c4e37](https://github.com/fremtind/jokul/commit/c2c4e37ffd9ccbcab8864dbe58a21d9a9a8ccbe8))

# [0.32.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.31.5...@fremtind/jokul@0.32.0) (2024-11-14)

### Features

- implementation of chip component ([d97eed1](https://github.com/fremtind/jokul/commit/d97eed1e5d0f79034def098bb6f987ac6f4f0cff))

## [0.31.5](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.31.4...@fremtind/jokul@0.31.5) (2024-11-12)

### Bug Fixes

- inline downshift to try to work around module resolution issues ([10dc74d](https://github.com/fremtind/jokul/commit/10dc74da44841a9c93db60c8ba6f68435f0ce6d1))

## [0.31.4](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.31.3...@fremtind/jokul@0.31.4) (2024-11-12)

### Bug Fixes

- la bruker interagere med åpent PopupTip ([1ff8ff7](https://github.com/fremtind/jokul/commit/1ff8ff7e7c2f1a3d115520e014e5621965efd58c))

## [0.31.3](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.31.2...@fremtind/jokul@0.31.3) (2024-11-12)

### Bug Fixes

- sørg for riktig spesifisitet i density-mixins ([c7a2e51](https://github.com/fremtind/jokul/commit/c7a2e514f350a713fbbd6451dbe8466c52bc21bd))

## [0.31.2](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.31.1...@fremtind/jokul@0.31.2) (2024-11-11)

### Bug Fixes

- tatt i bruk clsx i stedet for classnames ([502e63f](https://github.com/fremtind/jokul/commit/502e63f3d595c58c2b454f8abaf00378ed2cd492))

## [0.31.1](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.31.0...@fremtind/jokul@0.31.1) (2024-11-11)

### Bug Fixes

- la til @types/react slik at bazel i monorepo skal resolve typer riktig ([2a25339](https://github.com/fremtind/jokul/commit/2a25339c7448af64b3252af19f01f11f7a925b48))

# [0.31.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.30.8...@fremtind/jokul@0.31.0) (2024-11-11)

### Bug Fixes

- endret rekkefølge på default i package.json ([b122bb4](https://github.com/fremtind/jokul/commit/b122bb483ba8c0b6fc34004571b3355aea8d0626))
- make styles alphabetic again ([e64bd51](https://github.com/fremtind/jokul/commit/e64bd514af3e706f3433c99265e3c6b6e6505dfe))

### Features

- la til autosuggest i all-pakka ([d6d716f](https://github.com/fremtind/jokul/commit/d6d716f37b92b5a9a4ca9e8e5191e9d34a15d0d4))

## [0.30.8](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.30.7...@fremtind/jokul@0.30.8) (2024-11-11)

### Bug Fixes

- buttons should be inline-block elements ([8275e93](https://github.com/fremtind/jokul/commit/8275e93090fb0f53926f2a6399a55ba598b7c9ee))

## [0.30.7](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.30.6...@fremtind/jokul@0.30.7) (2024-11-11)

### Bug Fixes

- fikset medium og large device i useScreen ([049e91c](https://github.com/fremtind/jokul/commit/049e91c7d38b0db8d0df5ead865f27e7ee057870))

## [0.30.6](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.30.5...@fremtind/jokul@0.30.6) (2024-11-11)

### Bug Fixes

- la til flex rundt feedback buttons ([edc1ed4](https://github.com/fremtind/jokul/commit/edc1ed498a9999c269ceac764ced13fc15af7f4a))

## [0.30.5](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.30.4...@fremtind/jokul@0.30.5) (2024-11-07)

### Bug Fixes

- endret rekkefølge på default i Jokul pakken ([ce1eff9](https://github.com/fremtind/jokul/commit/ce1eff9a82d1563b68360cc5ee5c05410fe00cc5))

## [0.30.4](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.30.3...@fremtind/jokul@0.30.4) (2024-11-07)

### Bug Fixes

- button labels have the same width as the button ([e4a4ed3](https://github.com/fremtind/jokul/commit/e4a4ed3a033526e588d88208b4c09afe24390ea7)), closes [#4259](https://github.com/fremtind/jokul/issues/4259)
- buttons should render as block elements ([1f34208](https://github.com/fremtind/jokul/commit/1f3420886e46bc6eb07685a2137df17f024f6ef7))

## [0.30.3](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.30.2...@fremtind/jokul@0.30.3) (2024-11-06)

### Bug Fixes

- legg til react-dom som dependency og inline react-is ([aaf8aa9](https://github.com/fremtind/jokul/commit/aaf8aa9c6df520dcf7152f326411805c9ac6ffd6))

## [0.30.1](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.30.0...@fremtind/jokul@0.30.1) (2024-11-04)

### Bug Fixes

- include font files in artifact ([822980a](https://github.com/fremtind/jokul/commit/822980afff3cf267f9f1db7106ceac5ddcfccf41))

# [0.30.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.29.0...@fremtind/jokul@0.30.0) (2024-11-04)

### Bug Fixes

- ikke les opp material symbols i Tooltip ([d589410](https://github.com/fremtind/jokul/commit/d58941093ddc69ec30d7f89a62137a869e4cf63f))

### Features

- fjern framer motion helt i @fremtind/jokul ([f62d754](https://github.com/fremtind/jokul/commit/f62d754e1f592869abe71ad4df1b0a51a9ebd686))
- gå vekk fra framer motion for animasjon av jokul/tooltip ([4577a36](https://github.com/fremtind/jokul/commit/4577a3654b9b54515623351697a9627e890bc2ef))
- reduser bevegelse i tooltip v/prefersReducedMotion ([c4867d9](https://github.com/fremtind/jokul/commit/c4867d9fbef47e7912498a875b247891d9636fb5))

# [0.29.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.28.1...@fremtind/jokul@0.29.0) (2024-11-01)

### Bug Fixes

- namespace css variables ([ca958e4](https://github.com/fremtind/jokul/commit/ca958e45dceee96ade66dbc1b8de9d43310c1056))

### Features

- add CheckboxPanel and move RadioPanel ([3bb0476](https://github.com/fremtind/jokul/commit/3bb0476c2b57e6b8dea8de2123176718247a776e)), closes [#4108](https://github.com/fremtind/jokul/issues/4108)
- export all types that are part of publick APIs ([6765892](https://github.com/fremtind/jokul/commit/676589222af4ff083c51346dd470ed1a5a99a718))

## [0.28.1](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.28.0...@fremtind/jokul@0.28.1) (2024-10-31)

### Bug Fixes

- fixes the color of the action-button in error state ([26968e8](https://github.com/fremtind/jokul/commit/26968e8c06bfe947271a4872b4939c5397df4d60)), closes [#4194](https://github.com/fremtind/jokul/issues/4194)
- minor color fixes for error state ([d4d86ab](https://github.com/fremtind/jokul/commit/d4d86abdcbff09ec14b8c2f87caad83cc54f749a)), closes [#4194](https://github.com/fremtind/jokul/issues/4194)

# [0.28.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.27.6...@fremtind/jokul@0.28.0) (2024-10-31)

### Features

- legg til file-input component i package.json exports ([63c9d64](https://github.com/fremtind/jokul/commit/63c9d6478e9b19e8e255073e24a1007e93b48f05))

## [0.27.6](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.27.5...@fremtind/jokul@0.27.6) (2024-10-31)

### Bug Fixes

- fix broken imports ([b7c5d11](https://github.com/fremtind/jokul/commit/b7c5d1183f030ebb093d2ba1a1536646c5698ed2))

## [0.27.5](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.27.4...@fremtind/jokul@0.27.5) (2024-10-31)

### Bug Fixes

- remove remaining barrel imports ([8293515](https://github.com/fremtind/jokul/commit/8293515ed59df8d65cb82e0ccb3c7fdced70a901))

## [0.27.3](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.27.2...@fremtind/jokul@0.27.3) (2024-10-30)

### Bug Fixes

- works properly when used as controlled ([8daeae4](https://github.com/fremtind/jokul/commit/8daeae486928aa77ebd102881ce27c329eed4ddc))

## [0.27.1](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.27.0...@fremtind/jokul@0.27.1) (2024-10-29)

### Bug Fixes

- plasser popover i kontekst nærmeste portal ([fe5d4b7](https://github.com/fremtind/jokul/commit/fe5d4b74190ff50019445ef9dfaf771f460e477a))

# [0.27.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.26.0...@fremtind/jokul@0.27.0) (2024-10-29)

### Features

- new component: RadioPanel ([98d5dd8](https://github.com/fremtind/jokul/commit/98d5dd858bf3f55566d7541d6104c4524b061723)), closes [#3946](https://github.com/fremtind/jokul/issues/3946)

# [0.26.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.25.4...@fremtind/jokul@0.26.0) (2024-10-28)

### Features

- specific exports for each component ([1af8c6f](https://github.com/fremtind/jokul/commit/1af8c6f2f0449586b58807d25bf1027f89487abe)), closes [#4223](https://github.com/fremtind/jokul/issues/4223)

## [0.25.3](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.25.2...@fremtind/jokul@0.25.3) (2024-10-25)

### Bug Fixes

- fixes irregular scss imports ([1caa0ef](https://github.com/fremtind/jokul/commit/1caa0efbbce9815ffeb9b46acaaeb008beb7f1ed))

## [0.25.2](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.25.1...@fremtind/jokul@0.25.2) (2024-10-25)

### Bug Fixes

- make vind importable by moving it out of core ([43377d7](https://github.com/fremtind/jokul/commit/43377d722637a4c7e666724a9c44c069b12aca22))

## [0.25.1](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.25.0...@fremtind/jokul@0.25.1) (2024-10-25)

### Bug Fixes

- flytt semikolon i importer til riktig sted i cjs-filer ([7036872](https://github.com/fremtind/jokul/commit/7036872e70b69727e6bfe98564b65396fe6070a8))

# [0.25.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.24.1...@fremtind/jokul@0.25.0) (2024-10-25)

### Bug Fixes

- rydd opp i importer i testene ([8df5125](https://github.com/fremtind/jokul/commit/8df51250ec32beb809880f24d38e5d1d3b243fe4))

### Features

- bygg og eksporter separate typer for esm og cjs ([7b6dd3f](https://github.com/fremtind/jokul/commit/7b6dd3fbd1c2aac79773ed73f447c068d7d2cec4))
- endre alle eksporter og importer i jokul/components ([d911615](https://github.com/fremtind/jokul/commit/d911615155dc24a1e4ab219e12ba183ee471c4e0))
- endre importer/eksporter i jokul core og utilities ([755c25a](https://github.com/fremtind/jokul/commit/755c25a622035d8cfc9c6bda16388bf0993497bf))
- endre importer/eksporter i jokul hooks ([9cc9ee9](https://github.com/fremtind/jokul/commit/9cc9ee9dc8a7e74db06597770275b4d4c5f0d2f0))

## [0.24.1](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.24.0...@fremtind/jokul@0.24.1) (2024-10-24)

### Bug Fixes

- fixes a bug where Datepicker would scroll the page when opened ([5cf776b](https://github.com/fremtind/jokul/commit/5cf776b8971a750c210fcba65ab5f83f1ce932be)), closes [#4207](https://github.com/fremtind/jokul/issues/4207)

# [0.24.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.23.4...@fremtind/jokul@0.24.0) (2024-10-24)

### Bug Fixes

- rett opp feil export og print ut filstier under bygg ([1a2bed3](https://github.com/fremtind/jokul/commit/1a2bed3886f78e7f2ab613f55fd9c4f7a7ee2435))
- rett opp interne imports i flyttede sass-filer ([c7fd848](https://github.com/fremtind/jokul/commit/c7fd848d828ef0d55a354ce8337a356fc9376903))

### Features

- fjern unødvendige export paths for stilarkene ([495ad4a](https://github.com/fremtind/jokul/commit/495ad4aae3c3c15bdca9b7de1e48d87d529a014e))
- lag ny byggmappe for stilark for enklere import ([977a594](https://github.com/fremtind/jokul/commit/977a594628263e700c27f0168fea9bc687920485))

### BREAKING CHANGES

- Stiler må nå importeres fra f.eks. @fremtind/jokul/styles/components/card i stedet for bare
  @fremtind/jokul/styles/card

## [0.23.4](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.23.3...@fremtind/jokul@0.23.4) (2024-10-24)

### Bug Fixes

- use newest and best way of importing date-fns ([f178596](https://github.com/fremtind/jokul/commit/f17859642d7b4cc38fc3ec3b6606bdf05d120c5a))

## [0.23.3](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.23.2...@fremtind/jokul@0.23.3) (2024-10-24)

### Bug Fixes

- reorganise fonts folder ([f22e3ce](https://github.com/fremtind/jokul/commit/f22e3ce5562f297253f38c91f9904e3c9d373548))

## [0.23.2](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.23.1...@fremtind/jokul@0.23.2) (2024-10-23)

### Bug Fixes

- definer riktig returtype for useTooltip ([8c2b937](https://github.com/fremtind/jokul/commit/8c2b937e6230f997b44b541a1ccbe2ef39c522cd))

## 0.23.1 (2024-10-23)

### Bug Fixes

- properly export fonts ([65a9dd8](https://github.com/fremtind/jokul/commit/65a9dd83d313a4fb10fd8809d6f0f406e4b9086b))

# [0.23.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.22.3...@fremtind/jokul@0.23.0) (2024-10-22)

### Features

- add font-package ([4807af2](https://github.com/fremtind/jokul/commit/4807af2cc1e2851b31b88d71834fd786a722f053))

## [0.22.3](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.22.2...@fremtind/jokul@0.22.3) (2024-10-17)

### Bug Fixes

- finished renaming contextual-menu => menu ([18ada17](https://github.com/fremtind/jokul/commit/18ada17a8b8ee8bad339c588ec307c2c482ce79a))

## [0.22.2](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.22.1...@fremtind/jokul@0.22.2) (2024-10-17)

### Bug Fixes

- copies .d.ts files to where we expect them to be ([5e98c92](https://github.com/fremtind/jokul/commit/5e98c9205379bb6f8b4132ebbaa90fad4f8776b8))
- menu no longer depends on classnames module ([79ff5a6](https://github.com/fremtind/jokul/commit/79ff5a6a137eecb91b423ba6370aed1eef29499c))
- radio-button has correct dot color in dark mode error state ([b0447f2](https://github.com/fremtind/jokul/commit/b0447f2cde71982e27f51315d5ae5206fd307fc5)), closes [#4179](https://github.com/fremtind/jokul/issues/4179)

## [0.22.1](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.22.0...@fremtind/jokul@0.22.1) (2024-10-16)

### Bug Fixes

- bruk riktig størrelse på animerte ikoner ([75d4db5](https://github.com/fremtind/jokul/commit/75d4db5590c776950158000912dace7e26f58f4e))
- bruk riktig variant av ikon i expander/expand-button ([eda8204](https://github.com/fremtind/jokul/commit/eda8204729a87489072b9d025d0143f53e48de44))

# 0.22.0 (2024-10-16)

### Features

- new component: Pagination ([ba84a79](https://github.com/fremtind/jokul/commit/ba84a799449abd5d09f8b1a0532da911839c4f4b)), closes [#4141](https://github.com/fremtind/jokul/issues/4141)

## [0.21.2](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.21.1...@fremtind/jokul@0.21.2) (2024-10-14)

### Bug Fixes

- flytt action prop på topp for å unngå overskriving av props ([6a405e4](https://github.com/fremtind/jokul/commit/6a405e4fe8a5446275278eb8851b6ee6b0d8ccc9))

# [0.21.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.20.1...@fremtind/jokul@0.21.0) (2024-10-11)

### Bug Fixes

- bruk riktig tekststørrelse på compact knapper ([8cae9eb](https://github.com/fremtind/jokul/commit/8cae9ebb4a85fef8d6a691ed51868f32b8cabc41))

### Features

- knytt ikonstørrelse til tekststiler ([503cb2b](https://github.com/fremtind/jokul/commit/503cb2b6ce26b5cf8d8af03d5a32df25a46bfa5e))
- la ikonstørrelse styres via CSS-variabel ([bf610d3](https://github.com/fremtind/jokul/commit/bf610d399768c7f13437631d1a37cebbe396c3ef))

# 0.20.0 (2024-10-11)

### Features

- eksporter Flex-komponenten fra components ([b088bc4](https://github.com/fremtind/jokul/commit/b088bc4bf0174d6a69216396f8bbeffde97b3782))
- ny nyttekomponent Flex ([87eb564](https://github.com/fremtind/jokul/commit/87eb564ef3a5a6a2b84c9bea1e129f54fd738c92))

## [0.19.2](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.19.1...@fremtind/jokul@0.19.2) (2024-10-07)

### Bug Fixes

- breadcrumb needs link styles ([8b8370c](https://github.com/fremtind/jokul/commit/8b8370c099d46d6e049ad0e085d33f687f0b58d5))

# [0.19.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.18.0...@fremtind/jokul@0.19.0) (2024-10-07)

### Features

- felles stylesheet ([92ad326](https://github.com/fremtind/jokul/commit/92ad32645fef6bb161fe041a65c42935a73fb493))

# [0.18.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.17.1...@fremtind/jokul@0.18.0) (2024-10-07)

### Features

- inkluder stiler for avhengigheter i sass-index ([e150ad8](https://github.com/fremtind/jokul/commit/e150ad804c19717044e57eb69be4e5e080bba091))

## [0.17.1](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.17.0...@fremtind/jokul@0.17.1) (2024-10-04)

### Bug Fixes

- close Select's listbox when tooltip trigger receives focus ([c450730](https://github.com/fremtind/jokul/commit/c450730bb9e86e8c84e3e399cb1b807ed9227405)), closes [#4134](https://github.com/fremtind/jokul/issues/4134)

# [0.17.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.16.1...@fremtind/jokul@0.17.0) (2024-10-04)

### Bug Fixes

- tighten scope of CSS variables ([409bac3](https://github.com/fremtind/jokul/commit/409bac31972c40dc46635373a96e888563fea646))
- tooltip observes data-layout-density attribute ([9601a3f](https://github.com/fremtind/jokul/commit/9601a3f9c31ca076729cda234f3d04787ff334ec))

### Features

- extract utility for calculating theme and density ([65a850c](https://github.com/fremtind/jokul/commit/65a850ca988f077b2e4759262beed239b84a99d9))
- move Menu component to jokul package ([c00fd64](https://github.com/fremtind/jokul/commit/c00fd645fd6964668c0e529fee8259cdefda7e16))

# 0.16.0 (2024-10-03)

### Bug Fixes

- sync Calendar i allpakka ([701ee93](https://github.com/fremtind/jokul/commit/701ee932172634c3cc8527136b97b67fe0324303))

### Features

- utvid popover-apiet til å støtte nye props & ta i bruk popover i datepicker ([b1dc174](https://github.com/fremtind/jokul/commit/b1dc1741c9c7eb0b21ce7f7e0c3c17475fc0d9d7))

# [0.15.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.14.1...@fremtind/jokul@0.15.0) (2024-10-03)

### Features

- forenkle stil og struktur i knapper og endre API ([6495ce7](https://github.com/fremtind/jokul/commit/6495ce74691107350479cb2d0c7c5d4acea96b03))

# [0.14.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.13.0...@fremtind/jokul@0.14.0) (2024-09-30)

### Bug Fixes

- use <form> element for the Feedback main question ([5583847](https://github.com/fremtind/jokul/commit/558384712cecd511cc7bf0ed86bee2346e7162e9)), closes [#4103](https://github.com/fremtind/jokul/issues/4103)

### Features

- support exposing Feedback as a landmark if needed ([e29277c](https://github.com/fremtind/jokul/commit/e29277c1954f970fce980d0060d7dd4ad15cbf2e))

# [0.13.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.12.1...@fremtind/jokul@0.13.0) (2024-09-30)

### Bug Fixes

- include input-group styles in files ([c4fbb7e](https://github.com/fremtind/jokul/commit/c4fbb7ee1a209bf0c7e2bdb51fdf15f4f23ca0ac))

### Features

- move description-list to jokul package ([e6e6c19](https://github.com/fremtind/jokul/commit/e6e6c196e5eb02e4e8d9093a2e3c65c250a0abe3))
- move expandbutton to expander in jokul package ([22ef144](https://github.com/fremtind/jokul/commit/22ef144b62bc7854d9ec2960f938baf718478c88))
- move logo into jokul package ([dd09c08](https://github.com/fremtind/jokul/commit/dd09c08b1f2e4f848eedd3b9084d031ac628a4f9))
- move progress-bar to jokul package ([26fcb4d](https://github.com/fremtind/jokul/commit/26fcb4d5fe1c1f0eabb9d2ad9fa18eced5eedb5b))
- move summary-table to jokul package ([bed13b9](https://github.com/fremtind/jokul/commit/bed13b93003284872bf0497253e8e720bf4ba72e))
- move system-message to jokul package ([bf70502](https://github.com/fremtind/jokul/commit/bf70502870abbe736a96ff06c0310671dfc4df59))
- move table to jokul package ([bc2e494](https://github.com/fremtind/jokul/commit/bc2e4943182374646f75ca7b3767882e23e0d905))
- move tabs to jokul package ([70ea2a2](https://github.com/fremtind/jokul/commit/70ea2a2134c0cb6e5465139bf68bf66d186733dc))
- move toast into jokul package ([db94dd3](https://github.com/fremtind/jokul/commit/db94dd30fc1cdad277d03756fdaea73c043f80b0))
- move toggle-switch to jokul package ([1180677](https://github.com/fremtind/jokul/commit/1180677aee8cf2bab2c62302d247046ce23bb8a6))

## [0.12.1](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.12.0...@fremtind/jokul@0.12.1) (2024-09-25)

### Bug Fixes

- gi ikonet til PopupTip stor nok trykkflate ([4ea5472](https://github.com/fremtind/jokul/commit/4ea547217023082b2d8b18c22cb63b3912ecb607)), closes [#4107](https://github.com/fremtind/jokul/issues/4107)

# [0.12.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.11.0...@fremtind/jokul@0.12.0) (2024-09-25)

### Bug Fixes

- move from classnames to clsx ([85e23cf](https://github.com/fremtind/jokul/commit/85e23cfef5e5dd339c2eda08131f21713c3e8b3f))

### Features

- move feedback to jokul package ([73bc727](https://github.com/fremtind/jokul/commit/73bc72715babacf6b6df6a4f102f4af6a0127b8c))
- move Message to jokul package ([0e848d0](https://github.com/fremtind/jokul/commit/0e848d031b9ee356178d0627f96252bbbb38ae33))
- moved validators to jokul package ([9d81d98](https://github.com/fremtind/jokul/commit/9d81d985968fc3221edc41b2d37360e0350ea939))

# 0.11.0 (2024-09-25)

### Bug Fixes

- eksporter popover ut fgra components mappen ([2f72ea5](https://github.com/fremtind/jokul/commit/2f72ea5a5950314163b81f0d08855775c155d0e9))

### Features

- flytt popover til jokul pakken (monorepo) ([2df7993](https://github.com/fremtind/jokul/commit/2df79935c5714381bce6f3791906dbc8aacb21d4))
- reduser bundle size for framer-motion ([991b966](https://github.com/fremtind/jokul/commit/991b96665d966597f54aae277bd0c8b7a926271c))

## [0.10.1](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.10.0...@fremtind/jokul@0.10.1) (2024-09-25)

### Bug Fixes

- add export for Image components ([bc1c8da](https://github.com/fremtind/jokul/commit/bc1c8dacaf1ee9637f5f2440ec253dbbcc901820))

# [0.10.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.9.0...@fremtind/jokul@0.10.0) (2024-09-25)

### Features

- flytt datepicker og text-input til allpakka monorepo ([9e2f37f](https://github.com/fremtind/jokul/commit/9e2f37f59e0ace76bfad876aab4d7a87dd31c233))

# [0.9.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.8.1...@fremtind/jokul@0.9.0) (2024-09-24)

### Bug Fixes

- prefer clsx over classnames ([a5d2b43](https://github.com/fremtind/jokul/commit/a5d2b432f5a3f642f4e1a99c75b62c2f4e6341e5))

### Features

- add Accordion to jokul package ([5544594](https://github.com/fremtind/jokul/commit/55445940acaec2f082d73c393b8049ea6b7f9d31))
- add Breadcrumb to jokul package ([9974788](https://github.com/fremtind/jokul/commit/997478820f0a1854d662c3c9bd93f21e62affd2a))
- add Button to jokul package ([728d37f](https://github.com/fremtind/jokul/commit/728d37f110e0cabcbdfc580b844fa1d321bc572d))
- add Checkbox to jokul package ([4671a3f](https://github.com/fremtind/jokul/commit/4671a3f2cfe9ac1592166916fec35071030ff494))
- add Combobox to jokul package ([51a321b](https://github.com/fremtind/jokul/commit/51a321b409451234354094900fb84b1b7bed37f4))
- add CookieConsent to jokul package ([a189791](https://github.com/fremtind/jokul/commit/a1897914099b4cca30cd5bbdd7d303a3c58e0ef3))
- add List to jokul package ([97ca069](https://github.com/fremtind/jokul/commit/97ca069f00b2414315c62b5b5315cbbf714a4916))
- add Modal to jokul package ([7b8944f](https://github.com/fremtind/jokul/commit/7b8944fdae702a8db48c2ac958dd59d4d955dcfa))
- add RadioButton to jokul package ([a60db65](https://github.com/fremtind/jokul/commit/a60db65d7e724f32080966b0f105a35f254882fb))
- add Select to jokul package ([5d1fede](https://github.com/fremtind/jokul/commit/5d1fedeba01a7eeeae5706a4508b826042e4881f))

# [0.8.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.7.0...@fremtind/jokul@0.8.0) (2024-09-23)

### Bug Fixes

- bruk riktig import av SlotComponent og typer i Card ([56a21a3](https://github.com/fremtind/jokul/commit/56a21a3fe737d9abacb5ea49c1597d72070a2f44))
- bruk riktig import av SlotComponent og typer i Link og NavLink ([c48f055](https://github.com/fremtind/jokul/commit/c48f05534dcf1014312214438cc68f87aa6da087))
- mer opprydding av interne importer ([b798523](https://github.com/fremtind/jokul/commit/b798523ae03a3bee60ab4d2ced631fba98ca055a))

### Features

- flytt formatters og constants inn i jokul ([fc9b2b1](https://github.com/fremtind/jokul/commit/fc9b2b10ede98ff8a0463b196e713fce3a226695))

# [0.7.0](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.6.0...@fremtind/jokul@0.7.0) (2024-09-23)

### Bug Fixes

- failing build should throw so process halts ([d280056](https://github.com/fremtind/jokul/commit/d280056768e874423c4def6967513b44f3a13c35))

### Features

- copy tooltip and input-group into jokul package ([e7efaa1](https://github.com/fremtind/jokul/commit/e7efaa1dbb50ea7bf268737ad33c381bb3a853f4))

# 0.6.0 (2024-09-23)

### Features

- gjør Link og NavLink til polymorfe komponenter ([3d5f879](https://github.com/fremtind/jokul/commit/3d5f8792c342e34c40ff1c746e21267f60844f28))

# 0.5.0 (2024-09-19)

### Bug Fixes

- fjern all bruk av classnames ([b77491d](https://github.com/fremtind/jokul/commit/b77491d3a020a27829076fd89fd6079b2b9d2d8b))
- legg til eksporter av nye komponenter ([335e894](https://github.com/fremtind/jokul/commit/335e894074b4675f69d27a5f7c721cb137712e7c))

### Features

- kopier ny Card-komponent inn i jokul ([a3f09cc](https://github.com/fremtind/jokul/commit/a3f09cc07d7625ac940f189829d077b48c51da4e))
- legg inn alle Card-varianter og -avhengigheter i jokul ([8a87684](https://github.com/fremtind/jokul/commit/8a87684a05e323990b445a88572eb7f19fa84dc6))

# 0.4.0 (2024-09-17)

### Features

- eksporter alt i jokul-pakka fra rot ([ea9d6e6](https://github.com/fremtind/jokul/commit/ea9d6e677d3089702f84ca33405278016abe07c9))

# 0.3.0 (2024-09-16)

### Bug Fixes

- rett opp paths i package.json og døp om stilmapper ([f2e1a70](https://github.com/fremtind/jokul/commit/f2e1a70c4dce7a4e346ca1fb6f91b2446c284e0a))

### Features

- legg til komponentene icon og link-list i jokul ([d1ca70f](https://github.com/fremtind/jokul/commit/d1ca70fe9019d259d5489b38a883a0ee0f38780b))

# 0.2.0 (2024-09-16)

### Bug Fixes

- add exports for core/utils ([d924786](https://github.com/fremtind/jokul/commit/d924786df8bf1f4d0e44b8387ba0543be6b9bf60))
- types field should come first in exports block ([d8d679d](https://github.com/fremtind/jokul/commit/d8d679ddaae78bd8e299180fe5561183ad53c2c4))

### Features

- add loader component, break existing API ([6d15eb8](https://github.com/fremtind/jokul/commit/6d15eb8719f4ec1f62c20c76e71ac10d7a387f5e))

## [0.1.1](https://github.com/fremtind/jokul/compare/@fremtind/jokul@0.1.0...@fremtind/jokul@0.1.1) (2024-09-12)

### Bug Fixes

- add and fix package.json fields ([734517d](https://github.com/fremtind/jokul/commit/734517d784d7058bb347345f0be7bf7c85518556))

# 0.1.0 (2024-09-12)

### Bug Fixes

- missing rename from typopgraphy to navigation ([429a555](https://github.com/fremtind/jokul/commit/429a555ddf565969dff6e501505df53eb039b01c))
- remove grid from autoprefixer ([ae380a1](https://github.com/fremtind/jokul/commit/ae380a10759980163174a5d736ed04db2ac50030))
- rename typography to navigation ([9cd1d86](https://github.com/fremtind/jokul/commit/9cd1d861601bf74e5a4cfe045c1b3a538835be7b))
- sync with recent changes on main ([0654a46](https://github.com/fremtind/jokul/commit/0654a4679b78ac82c5c6edec6503334f5b5341ae))

### Features

- first early version of single-package exports ([85ae9f1](https://github.com/fremtind/jokul/commit/85ae9f19875f816df5308ea7efc24acac072e7e8))
`;function o(t){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Changelog"}),`
`,e.jsx(a,{children:m})]})}function k(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o()}export{k as default};
