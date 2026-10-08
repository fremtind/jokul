# Sporing med data-track-attributter

Komponentene våre kommer ferdig utstyrt med noen `data-track-*`-attributter
i markup-en, så sporing blir enklere. Attributtene er bare vanlig
DOM-data. De funker med hva som helst som kan lese en attributt eller
lytte på et klikk, ikke bare GTM eller Mixpanel. Her er hva vi gjør, og
hvordan du drar nytte av det.

> **Dette forutsetter:** at du skrur på Mixpanel sin `autocapture`, eller
> setter opp GTM med auto-event-triggere. Sporer teamet ditt i dag
> manuelt (egne `mixpanel.track(...)`-kall med egne event-navn, slik de
> fleste gjør), må du enten skru på autocapture i tillegg, eller lese
> attributtene selv i klikk-handleren din. Se
> [Les attributtene med egen kode](#les-attributtene-med-egen-kode) for
> det siste alternativet.

- [Hva spores, hvorfor og hvordan](#hva-spores-hvorfor-og-hvordan)
- [Les attributtene med egen kode](#les-attributtene-med-egen-kode)
- [Google Tag Manager](#google-tag-manager)
- [Mixpanel autocapture](#mixpanel-autocapture)
- [Samtykke](#samtykke)
- [Migrering til Jøkul 7](#migrering-til-jøkul-7)

## Hva spores, hvorfor og hvordan?

Disse `data-track-*`-attributtene dukker opp i DOM-en på alle komponenter:

| Attributt | Beskrivelse | Kan overstyres? |
|---|---|---|
| `data-track-component-name` | Navnet på komponenten, f.eks. `"Button"` eller `"Checkbox"`. | Nei |
| `data-track-label` | Menneskelig lesbar. Hentet fra knappetekst, label, eller lignende. | Nei |
| `data-track-id` | Samme som label, men kan overskrives for å kunne differansiere knappene i tilfeller hvor det er mange med samme label. | Ja |

Attributtene har fornuftige defaults, men du kan overstyre dem med
`tracking`-propen:

```tsx
<Button tracking={{ id: "hovedknapp-kjop" }} variant="primary">
    Kjøp
</Button>
```

```tsx
<Checkbox tracking={{ id: "godta-vilkar" }} name="vilkar" value="godtatt">
    Jeg godtar vilkårene
</Checkbox>
```

```tsx
<TextInput tracking={{ id: "epost-felt" }} label="E-post" name="email" />
```

### Hvilke komponenter spores, og hva spores?

Tabellen under viser komponentene som har `tracking`-prop i dag: hvor
`data-track-label`/`data-track-id` henter default-verdien sin fra, og
hvilke ekstra attributter som følger med. `data-track-component-name` er
alltid med, og den kan du ikke overstyre uansett hva du gjør.

Ikke alle komponenter har en naturlig tekstkilde å hente label/id fra. Der det mangler står det bare en strek (–).

| Komponent | `COMPONENT_NAMES`-nøkkel | `data-track-label`/`-id` hentes fra | Ekstra attributter |
|---|---|---|---|
| Autosuggest | `Autosuggest` | `label`-prop | `data-track-variant`, `data-track-is-open`, `data-track-max-number-of-hits` |
| BreadcrumbItem | `Breadcrumb` | `children` | `data-track-is-last-element` |
| Button | `Button` | `children` | `data-track-variant` |
| Card | `Card` | `children` | `data-track-padding`, `data-track-outlined`, `data-track-clickable` |
| Checkbox | `Checkbox` | `children` | `data-track-selected`, `data-track-indeterminate`, `data-track-inline` |
| CheckboxPanel | `CheckboxPanel` | `label`-prop | `data-track-type`, `data-track-always-open`, `data-track-amount` |
| Chip | `Chip` | `children` | `data-track-variant` |
| Combobox | `Combobox` | `label`-prop | `data-track-has-tag-hover` |
| CookieConsent | `CookieConsent` | – | `data-track-blocking` |
| Countdown | `Countdown` | – | `data-track-from`, `data-track-is-paused` |
| DateInput | `DateInput` | `label`-prop | `data-track-min`, `data-track-max` |
| Expander (header) | `Expander` | `children` | `data-track-open`, `data-track-expand-direction` |
| ExpandablePanel (container) | `Expander` | – | `data-track-outlined` |
| Feedback | `Feedback` | `mainQuestionProps.label` | `data-track-type` |
| File | `File` | `fileName` | `data-track-state`, `data-track-variant`, `data-track-file-size` |
| FileInput | `FileInput` | – | `data-track-accept`, `data-track-multiple`, `data-track-variant` |
| Help | `Help` | `buttonText`-prop | `data-track-position`, `data-track-icon-position`, `data-track-show-button-text` |
| Icon | `Icon` | – | `data-track-variant` |
| InputGroup | `InputGroup` | `label`-prop | `data-track-inline` |
| InputPanel (RadioPanel) | `RadioPanel` | `label`-prop | `data-track-type`, `data-track-always-open`, `data-track-amount` |
| Link | `Link` | `children` | `data-track-external` |
| Loader | `Loader` | `textDescription`-prop | `data-track-variant` |
| Menu | `Menu` | – | `data-track-initial-placement`, `data-track-open-on-hover`, `data-track-is-open` |
| Message | `Message` | `children` | `data-track-dismissed`, `data-track-full-width` |
| Modal (ModalContainer) | `Modal` | – | `data-track-placement`, `data-track-slide-in` |
| NavLink | `NavLink` | `children` | `data-track-active`, `data-track-back` |
| NumberInput | `NumberInput` | `label`-prop | `data-track-stepper`, `data-track-align`, `data-track-width` |
| Pagination | `Pagination` | – | `data-track-current-page`, `data-track-number-of-pages` |
| Popover | `Popover` | – | `data-track-placement`, `data-track-open` |
| ProgressBar | `ProgressBar` | `title`-prop (kun label, ikke id) | `data-track-value`, `data-track-max` |
| RadioButton | `RadioButton` | `label`/`children` | `data-track-checked` |
| Search | `Search` | `label`-prop | *(ingen ekstra sentrale props. `data-track-value` er bevisst utelatt, se personvernseksjonen)* |
| Select | `Select` | `label`-prop | `data-track-multiple`, `data-track-searchable` |
| SystemMessage | `SystemMessage` | `children` | `data-track-dismissed`, `data-track-max-content-width` |
| Table | `Table` | `caption`-prop (streng) | `data-track-collapse-to-list` |
| Tabs | `Tabs` | – | `data-track-default-tab` |
| Tag | `Tag` | `children` | `data-track-variant` |
| TextArea | `TextArea` | `label`-prop | `data-track-rows`, `data-track-auto-expand` |
| TextInput | `TextInput` | `label`-prop | `data-track-type`, `data-track-max-length` |
| Toast (ToastRegion) | `Toast` | – | `data-track-placement`, `data-track-max-visible-toasts` |
| ToggleSwitch | `ToggleSwitch` | `children` | *(ingen ekstra sentrale props)* |
| Tooltip | `Tooltip` | – | `data-track-placement`, `data-track-trigger-on`, `data-track-initial-open` |
| Typography (Text) | `Typography` | `children` (streng) | `data-track-size`, `data-track-bold`, `data-track-subdued` |
| Typography (Title) | `Typography` | `children` (streng) | `data-track-size` |

Komponenter uten `tracking`-prop i dag (enten fordi det ikke er noen
gode props å hente ut uten ekstra transformasjonslogikk, eller fordi de
er rent presentasjonsmessige):
`IconButton`, `Image`, `LinkList`, `List`, `Logo`, `SummaryTable`,
`TableOfContents`, `SegmentedControl`, `ToggleSlider`, `DescriptionList`,
`Flex`, `Autosuggest`-forslagslisten (`Suggestion`), `Breadcrumb`
(containeren. `BreadcrumbItem` har tracking).

> **Icon dukker opp overalt.** `Icon` brukes dekorativt i mange andre
> komponenter (f.eks. som `aria-hidden`-ikon i `Button`), så det er helt
> normalt å se et nøstet `data-track-component-name="Icon"` på et
> barn-element inni en komponent som allerede spores.

### Hvor i DOM-en havner attributtene?

Vi har to typer komponenter her, og de oppfører seg litt forskjellig.

**Interagerbare komponenter** (`Button`, `Checkbox`, `TextInput`,
`RadioButton`, `Select`, `DateInput`, `NumberInput`, `Search`, `Combobox`,
`Link`, `NavLink`, `ToggleSwitch`, `Expander`-headeren, `Help`-knappen, m.fl.)
er de brukeren faktisk klikker på, skriver i eller endrer. De får
attributtene rett på elementet som mottar klikket eller endringen
(`<input>`, `<button>`, `<a>` osv.). Aldri på en wrapper-`<div>` rundt.
Så slipper du å skrive egen JS (som `closest()`) for å finne dem i GTM
eller Mixpanel.

> Én ting verdt å vite: teksten sitter som regel i et eget `<span>` inni.
> `Button`, `Link`, `Help` (som bruker `Button` under panseret) og
> `Expander`-headeren pakker den synlige teksten i et barn-element
> (`jkl-button__text`, `jkl-link__content`, `jkl-expander__label`). Ikke
> rett i rot-elementet. Klikker du midt i teksten er det teknisk sett
> dette span'et som blir klikket. Ikke selve `<button>`/`<a>`-en.
> `data-track-*` ligger fortsatt bare på rot-elementet.
>
> Spiller det noen rolle? Som regel ikke. Mixpanel sin autocapture leter
> alltid oppover til nærmeste klikkbare stamfar (`<a>`, `<button>`,
> `<input>`, `<select>` eller `role="button"`) før den leser av
> attributter. Så den finner dem uansett hvor i teksten du klikker. GTM
> er litt mer kresen. Bruker du "matches CSS selector" i triggeren (som
> vi anbefaler under), sjekker GTM elementet og alt over det. Da går det
> fint. Prøver du i stedet å lese attributtene rett av `{{Click
> Element}}` uten CSS-selector (f.eks. en eksakt sammenligning, eller
> egen JS som bare ser på `ev.target`) kan du bomme når klikket traff
> tekst-span'en. Bruk `closest()` hvis du er usikker.

**Ikke-interagerbare komponenter** (`Countdown`, `CookieConsent`,
`Icon`, `Message`, `Modal`, `Pagination`, `Popover`, `ProgressBar`,
`SystemMessage`, `Table`, `Tabs`, `Tag`, `Toast`, `Tooltip`, `Typography`,
m.fl.) har ikke noe "element brukeren faktisk interagerer med". De er
rent informative, eller mottar aldri selv et klikk-/endre-event. Her
legger vi attributtene på komponentens hovedelement i stedet (det
elementet som best representerer komponenten i DOM-en. F.eks. `<table>`
for `Table`, root-`<div>` for `Toast`-regionen, `<span>` for `Tag`). Da
er de i hvert fall tilgjengelige for inspeksjon og andre
triggermekanismer (se under), selv om vanlig klikk-autocapture ikke
fanger dem.

> Unntaket er `Card`. Er den `clickable`, rendres den som en faktisk
> `<a>`/`<button>`-rot. Er den ikke det, er den bare en vanlig `<div>`.
> Uansett havner attributtene på rot-elementet. `Card` havner altså i
> "interagerbar"-bøtta når `clickable` er satt, og i
> "ikke-interagerbar" ellers.

#### Ikke-interagerbare komponenter trigger ikke events av seg selv

Mixpanel sin autocapture og GTM sine innebygde "Click"/"Change"-triggere
er bygget rundt faktiske DOM-events. Så `data-track-*` på en
ikke-interagerbar komponent genererer ikke noe event av seg selv. Uansett
hvor mange attributter som står der. De er bare kontekst som venter på
å bli lest. Ikke et event i seg selv. To vanlige måter å bruke dem på:

1. Som kontekst til en interaksjon i nærheten. Klikker du en knapp inni
   et `Card` eller en `Message`, fyrer `Button`-eventet som vanlig. Men
   du kan berike det med en Custom JavaScript-variabel i GTM (eller lese
   det manuelt før `mixpanel.track(...)`) som går oppover i DOM-treet
   med `closest("[data-track-component-name='Card']")`. For eksempel
   for å vite hvilket kort klikket skjedde i:

   ```js
   // GTM Custom JavaScript-variabel: "Nærmeste Card-kontekst"
   function () {
       var el = {{Click Element}}.closest("[data-track-component-name='Card']");
       return el ? el.getAttribute("data-track-label") : undefined;
   }
   ```

2. **Som grunnlag for et event appen sender selv.** Vil du spore at en
   `Countdown` gikk ut, at en `ProgressBar` nådde 100 %, eller at en
   `Toast` ble vist, må appen sende eventet selv (`dataLayer.push(...)`
   i GTM, eller `mixpanel.track(...)`) når tilstanden faktisk endrer
   seg. Det finnes jo ikke noe DOM-event å henge seg på. Du har som
   regel verdiene liggende som props likevel. Så det er ofte enklere å
   sende dem rett som event-properties enn å lese dem av DOM-en.
   `data-track-*`-attributtene er fortsatt nyttige for QA/feilsøking (se
   [Sjekk at attributtene finnes](#sjekk-at-attributtene-finnes)) og for
   `closest()`-oppslag som i eksempel 1.

## Hvordan legge på sporing av egne egenskaper (`extra`-propen)

Trenger teamet ditt å spore egne, prosjektspesifikke detaljer utover
dette, bruk `extra`. Typisk brukt til avtalenavn, produktkategori eller
lignende:

```tsx
<Button
    tracking={{
        id: "hovedknapp-kjop",
        extra: { avtale: "V20" },
    }}
    variant="primary"
>
    Kjøp
</Button>
```

Dette gir attributtet `data-track-avtale="V20"` i DOM-en. Hver nøkkel i
`extra` konverteres fra camelCase til kebab-case og blir
`data-track-<kebab-case-nøkkel>`. Verdiene kan være `string`, `number`
eller `boolean`.

> `extra` er ment for team-/prosjektspesifikke behov som ikke er dekket
> av Jøkuls faste felt. Unngå navn som kolliderer med de faste feltene
> (`component-name`, `id`, `label`, `selected`, `variant`).

## Personvern: hva vi aldri sporer

Jøkul sporer hvilken komponent brukeren interagerte med. Aldri hva
brukeren skrev inn.

For `TextInput` betyr det konkret:

```tsx
<TextInput label="Fødselsnummer" name="fnr" value="12345678901" />
```

gir disse attributtene i DOM-en:

```html
<input
    data-track-component-name="Text Input"
    data-track-label="Fødselsnummer"
    data-track-id="Fødselsnummer"
/>
```

`data-track-label` er altså labelen på feltet, ikke innholdet. Det
brukeren skriver inn blir aldri et sporingsattributt. Det finnes ikke
engang en prop som slår det på.

| Spores | Spores ikke |
|---|---|
| Komponentnavn | Inntastet tekst |
| Label/knappetekst | Tall- og datoverdier |
| Om et valg er huket av | Filnavn og filinnhold |

### Ditt ansvar ved bruk av `extra` og `id`

Jøkuls defaults er trygge. Men `extra` og `id` fyller du selv ut. Ikke
legg personopplysninger der:

```tsx
// ❌ Ikke gjør dette
<Button tracking={{ id: "kjop", extra: { kundeNr: "01019012345" } }}>Kjøp</Button>

// ✅ Bruk ikke-identifiserende verdier
<Button tracking={{ id: "kjop", extra: { produktkategori: "bilforsikring" } }}>Kjøp</Button>
```

Husk også at `data-track-label` hentes fra synlig tekst. Inneholder
knappe- eller labelen personopplysninger, f.eks.
`"Slett konto 1234.56.78901"`, havner det rett i sporingen. Bruk `id`
i stedet. Vurder også om labelen bør formuleres annerledes.

Du trenger ikke være redd for å ødelegge sporingen ved et uhell heller.
Jøkuls egne attributter vinner alltid over `extra`. Lager `extra` ved et
uhell samme attributt-navn som et av Jøkuls egne (f.eks. `componentName`
eller `label`), blir det ganske enkelt ignorert. Jøkuls verdi blir
stående, ikke din.

## Les attributtene med egen kode

GTM og Mixpanel autocapture er to oppskrifter under, ikke en
forutsetning. Attributtene er bare vanlig DOM-data, så sporer teamet
ditt allerede manuelt (f.eks. et eget `mixpanel.track(...)`-kall i en
`onClick`), kan du lese dem rett derfra i stedet for å sette opp
autocapture:

```ts
function onButtonClick(event: React.MouseEvent) {
    const el = (event.target as HTMLElement).closest(
        "[data-track-component-name]",
    );
    if (!el) return;

    mixpanel.track("button_klikket", {
        komponent: el.getAttribute("data-track-component-name"),
        label: el.getAttribute("data-track-label"),
        id: el.getAttribute("data-track-id"),
    });
}
```

`closest()` sørger for at det funker selv om du klikket på tekst-spannet
inni knappen, ikke roten. Samme mønster funker med hvilket som helst
analyseverktøy, ikke bare Mixpanel.

## Google Tag Manager

GTM fanger ikke `data-*`-attributter automatisk, men du setter opp dette
én gang, så gjelder det for alle Jøkul-komponenter i appen.

### 1. Lag variablene

**Variabler → Ny → Auto-Event Variable** (type `DOM Attribute`) – én per
attributt du vil hente fra elementet brukeren interagerer med:

| Variabelnavn | Attribute Name |
|---|---|
| `DT - component-name` | `data-track-component-name` |
| `DT - label` | `data-track-label` |
| `DT - id` | `data-track-id` |

Som nevnt over ligger attributtene alltid på rot-elementet. Bruker du
"matches CSS selector" i triggeren (se under), trenger du ingen
`closest()`-oppslag eller andre fallbacks.

I tillegg trenger du to **Custom JavaScript**-variabler for app- og
teaminfo. De ligger på `<html>` og er ikke knyttet til et klikk,
så en vanlig Auto-Event Variable funker ikke der:

```js
// DT - app-name (tilsvarende for team)
function () {
    return document.documentElement.getAttribute("data-track-app-name");
}
```

### 2. Lag triggerne

- **Click – All Elements** med betingelsen
  `Click Element matches CSS selector` → `[data-track-component-name]`
- **Change** med samme CSS-selector, for skjemafelt

### 3. Lag tag'en

Send videre til `dataLayer` eller rett til f.eks. GA4, og koble den til
begge triggerne over:

```js
dataLayer.push({
    event: "jokul_component_interaction",
    component_name: "{{DT - component-name}}",
    component_label: "{{DT - label}}",
    component_id: "{{DT - id}}",
    app_name: "{{DT - app-name}}",
    team: "{{DT - team}}",
});
```

> `data-track-app-name` og `data-track-team` settes bare hvis du har
> gitt `CookieConsentProvider` en `appName` og `team`, og bare når
> brukeren har godtatt statistikk. Se
> [Hvilken samtykkekategori gjelder?](#hvilken-samtykkekategori-gjelder).

> Bruker du `extra`-propen, lager du bare en ny Auto-Event Variable med
> det tilsvarende attributtnavnet, f.eks. `data-track-avtale`.

## Mixpanel autocapture

Mixpanel plukker automatisk opp alle `data-*`-attributter på elementet
som klikkes eller endres, og legger dem i event-properties med
nøkkelformatet `$el_attr__<attributt-navn>`. Ingen kode per komponent
nødvendig.

### 1. Slå på autocapture, og registrer app/team

Super-properties henger seg automatisk på alle events. Attributtene for
app og team ligger på `<html>` og fanges ikke av
autocapture, så de må registreres her i stedet:

```ts
import mixpanel from "mixpanel-browser";

mixpanel.init("DITT_PROSJEKT_TOKEN", { autocapture: true });

const root = document.documentElement;
mixpanel.register({
    app_name: root.getAttribute("data-track-app-name"),
    team: root.getAttribute("data-track-team"),
});
```

> **Rekkefølge:** attributtene settes først når brukeren har godtatt
> statistikk. Kjør `register` etter at samtykket er i boks. Gjerne
> samme sted som du initialiserer Mixpanel. Se
> [Hvilken samtykkekategori gjelder?](#hvilken-samtykkekategori-gjelder).

### 2. Slik ser et event ut

Et klikk på

```tsx
<Button tracking={{ id: "hovedknapp-kjop" }} variant="primary">
    Kjøp
</Button>
```

gir et `[Auto] Element Click`-event med blant annet:

```json
{
    "$el_attr__data-track-component-name": "Button",
    "$el_attr__data-track-label": "Kjøp",
    "$el_attr__data-track-id": "hovedknapp-kjop",
    "app_name": "mine-sider",
    "team": "Mitt Team"
}
```

> `extra`-propen gir vanlige `data-track-*`-attributter, så de fanges
> opp automatisk. `extra: { avtale: "V20" }` blir
> `$el_attr__data-track-avtale`.

## Samtykke

### Hvilken samtykkekategori gjelder?

`statistics`. Be om den i `CookieConsentProvider`:

```tsx
<CookieConsentProvider
    functional
    statistics
    appName="mine-sider"
    team="Mitt Team"
>
    <App />
</CookieConsentProvider>
```

### Hvordan vet jeg om brukeren har samtykket?

Med `useCookieConsent`:

```tsx
import { useCookieConsent } from "@fremtind/jokul/cookie-consent";

const { consents } = useCookieConsent();
const harSamtykket = consents.statistics === "accepted";
```

`consents.statistics` kan være `"accepted"`, `"denied"` eller `null`
(ikke tatt stilling ennå). Verdien oppdaterer seg automatisk når
brukeren svarer i samtykkedialogen.

### Slik laster du Mixpanel etter samtykke, i praksis

Legg initialiseringen i en effekt som kjører når samtykket endrer seg:

```tsx
function Analytics() {
    const { consents } = useCookieConsent();

    useEffect(() => {
        if (consents.statistics !== "accepted") return;

        mixpanel.init("DITT_PROSJEKT_TOKEN", { autocapture: true });

        const root = document.documentElement;
        mixpanel.register({
            app_name: root.getAttribute("data-track-app-name"),
            team: root.getAttribute("data-track-team"),
        });
    }, [consents.statistics]);

    return null;
}
```

Plasser `<Analytics />` inne i `CookieConsentProvider`. Siden
`data-track-app-name` og `data-track-team` også først settes ved
samtykke, er dette riktig sted å lese dem.

### Hvordan gjør jeg det samme med GTM?

To alternativer:

1. **Consent Mode (anbefalt):** last containeren som vanlig, men send
   `analytics_storage: "denied"` som default og oppdater til
   `"granted"` når brukeren samtykker.
2. **Utsatt lasting:** injiser GTM-scriptet først når
   `consents.statistics === "accepted"`, etter samme mønster som
   Mixpanel-eksempelet over.

### Eksempel: GTM Consent Mode med `CookieConsentProvider`

Consent Mode består av to deler: **defaults** som settes før GTM lastes,
og **oppdateringer** som sendes når brukeren tar et valg.

#### 1. Sett defaults før GTM-scriptet

Dette må ligge i `index.html` (eller `app/layout.tsx` med
`dangerouslySetInnerHTML`) **over** GTM-snutten, ellers rekker containeren
å fyre av før defaultene er satt:

```html
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }

    gtag("consent", "default", {
        ad_storage: "denied",
        analytics_storage: "denied",
        functionality_storage: "denied",
        personalization_storage: "denied",
        security_storage: "granted",
        wait_for_update: 500,
    });
</script>
<!-- GTM-snutten kommer her -->
```

`wait_for_update` gir React-appen et lite vindu til å rekke å sende
`update` før taggene evalueres.

#### 2. Speil Jøkul-samtykket inn i Consent Mode

Lag en liten komponent som oversetter `consents` fra
[`useCookieConsent`](#hvordan-vet-jeg-om-brukeren-har-samtykket) til
Consent Mode-signaler:

```tsx
import { useEffect } from "react";
import { useCookieConsent } from "@fremtind/jokul/cookie-consent";
import type { ConsentState } from "@fremtind/jokul/cookie-consent";

const tilConsentMode = (state: ConsentState | undefined) =>
    state === "accepted" ? "granted" : "denied";

export function ConsentModeSync() {
    const { consents } = useCookieConsent();

    useEffect(() => {
        // Ikke send update før brukeren faktisk har tatt stilling
        if (consents.statistics === null && consents.functional === null) {
            return;
        }

        window.gtag?.("consent", "update", {
            analytics_storage: tilConsentMode(consents.statistics),
            functionality_storage: tilConsentMode(consents.functional),
            personalization_storage: tilConsentMode(consents.functional),
        });
    }, [consents.statistics, consents.functional]);

    return null;
}
```

#### 3. Koble det sammen

```tsx
<CookieConsentProvider
    functional
    statistics
    appName="mine-sider"
    team="Mitt Team"
>
    <ConsentModeSync />
    <App />
    <CookieConsent aboutPage="/personvern" />
</CookieConsentProvider>
```

Det er alt. Når brukeren svarer i dialogen, oppdaterer
`CookieConsentProvider` context-verdien, effekten kjører og GTM får en
`consent update`. Trekker brukeren samtykket tilbake senere, går
signalet tilbake til `"denied"` helt automatisk. Ingen egen opprydding
nødvendig.

> **Merk:** `ad_storage` styres ikke av Jøkuls samtykkekategorier.
> Bruker du markedsføringstagger, må teamet ditt håndtere den kategorien
> selv.

### Hva skjer hvis brukeren trekker samtykket tilbake?

`consents.statistics` blir `"denied"`, og `data-track-app-name`/
`data-track-team` fjernes fra `<html>`. Du må selv stoppe videre
sporing. Bruk f.eks. `mixpanel.opt_out_tracking()` eller sett
`analytics_storage: "denied"` i GTM.

### Hvordan lar jeg brukeren endre valget sitt senere?

```tsx
const { openConsentModal } = useCookieConsent();

<Button onClick={openConsentModal}>Endre informasjonskapsler</Button>
```

## Migrering til Jøkul 7

`appName` og `team` på `CookieConsentProvider` er valgfrie i Jøkul 6,
men blir **påkrevd fra Jøkul 7** når `statistics` er satt. Det gir oss i
Jøkul-teamet et bedre datagrunnlag, f.eks. til å se hvilke team som
henger igjen i overgangen mellom versjoner.

Ingenting er påtvunget ennå. Sett dem gjerne allerede nå i v6, så slipper
du å tenke på det igjen når du oppgraderer til v7:

```tsx
<CookieConsentProvider
    statistics
    appName="mine-sider"
    team="Mitt Team"
>
    <App />
</CookieConsentProvider>
```

Mangler `appName`/`team` mens `statistics` er satt, får du en
konsoll-advarsel i utviklingsmiljøet allerede i v6. Den er bare en
påminnelse, ikke en feil. Appen din virker helt fint uten.

## Feilsøking

### Sjekk at attributtene finnes

Før du feilsøker GTM eller Mixpanel: åpne DevTools, inspiser elementet og
se etter `data-track-component-name`. Er det ikke der, har komponenten
ingen innebygd sporing ennå. Se
[Hva spores, hvorfor og hvordan](#hva-spores-hvorfor-og-hvordan).

Rask oversikt over alle sporede elementer på siden:

```js
document.querySelectorAll("[data-track-component-name]").length;
```

### Google Tag Manager

Bruk **Preview**-modus (Forhåndsvis-knappen i GTM):

1. Klikk på en Jøkul-komponent i appen.
2. Finn `Click`-eventet i venstre kolonne i Tag Assistant.
3. Åpne **Variables**-fanen og sjekk at `DT - component-name`,
   `DT - label` og `DT - id` har verdier.
4. Åpne **Tags**-fanen og bekreft at tag'en din står under «Tags Fired».

| Symptom | Sannsynlig årsak |
|---|---|
| Variablene er `undefined` | Attributtnavnet i Auto-Event Variable er feilstavet |
| Tag'en fyrer ikke | CSS-selectoren i triggeren matcher ikke `[data-track-component-name]` |
| `DT - app-name` er tom | `statistics`-samtykke mangler, eller Custom JavaScript-variabelen leser feil attributt |
| Ingenting skjer i det hele tatt | Consent Mode blokkerer. Sjekk `analytics_storage` under **Consent**-fanen |

### Mixpanel

Skru på debug-logging, så skrives hvert event til konsollen:

```ts
mixpanel.set_config({ debug: true });
```

Et vellykket klikk gir en logglinje med `[Auto] Element Click` og alle
`$el_attr__data-track-*`-propertyene. Mangler de, er det som regel én av
disse:

| Symptom | Sannsynlig årsak |
|---|---|
| Ingen `[Auto]`-events | `autocapture: true` mangler i `init` |
| Events uten `$el_attr__data-track-*` | Du klikket på et barn-element uten attributtene. Sjekk at komponenten faktisk setter dem |
| `app_name` mangler | `mixpanel.register` kjørte før samtykke, da `<html>`-attributtene ennå ikke var satt |

Sjekk de registrerte super-propertiene direkte:

```js
mixpanel.get_property("app_name");
```

### Samtykke

Nullstill samtykket for å teste flyten på nytt. Slett cookien
`fremtind-cookie-consent` i DevTools → Application → Cookies, og last
siden på nytt.

> **Husk:** skru av `debug` og Preview-modus før du går til produksjon.
