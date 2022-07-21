# [`@fremtind/jkl-text-input-react`](https://jokul.fremtind.no/komponenter/textinput)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/textinput).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://jokul.fremtind.no/developer/getting-started/)

## Bruk av React-pakken

### Installasjon

1. Installèr pakken med `yarn add @fremtind/jkl-text-input-react` eller `npm i @fremtind/jkl-text-input-react`. Stil-pakken blir automatisk installert som en avhengighet.

2. Importer _både_ React-pakken (velg komponenten(e) du trenger) og stil-pakken i prosjektet ditt:

```js
import { TextInput, TextArea, BaseInputField } from "@fremtind/jkl-text-input-react";
import "@fremtind/jkl-text-input/text-input.min.css";
import "@fremtind/jkl-icon-button/icon-button.min.css";
```

Legg merke til at vi også importerer stilen fra `jkl-icon-button`. Denne pakken blir automatisk installert som en avhengighet, og brukes til å vise eventuelle handlinger i tekstfeltet (se under).

### Generell Bruk

Du må spesifisere en `label` for `TextInput` og `TextArea`.

Størrelsen på etiketten kan settes ved prop-en `variant`, hvor størrelsene er definert ved `"small" | "medium" | "large"`. Hvis komponentene skal brukes på mobile flater eller av andre årsaker trenger å være fremvist i sin kompakte variant må man ta i bruk `forceCompact`.

Det er to måter å avgrense den fysiske størrelsen til inndata-feltet, enten ved å bruke `width` eller `maxLength`. `maxLength` vil kun bestemme fysisk størrelse hvis `width` ikke er definert, siden `width` tar prioritet. Merk at `maxLength` fortsatt vil bestemme hvor mange tegn som kan tastes inn i feltet.

Komponentene tar imot hjelpe- og feilmeldinger gjennom `helpLabel` og `errorLabel`. Dersom `errorLabel` finnes vises _kun_ denne.

Et tekstfelt kan brukes i en linje med tekst ved å bruke prop-en `inline`. Når denne prop-en er satt vises ikke `label`, `helpLabel` eller `errorLabel`, men de vil fortsatt leses av skjermlesere og bør derfor settes som vanlig.

Man kan også knytte en handling til tekstfeltet gjennom prop-en `action`:

```jsx
type action = {
    icon: IconVariant, // "clear" | "search" | "calendar"
    label: string,
    onClick: (event: MouseEvent) => void,
};
```

Husk å sette `label` til en fornuftig beskrivelse av handlingen (f.eks. "nullstill søkefeltet"), da denne blir brukt av bl.a. skjermlesere.

### Særskilt bruk

#### BaseInputField

Denne er kun eksponert for å dekke spesielle behov og anbefales ikke å brukes.
Skal denne brukes frittstående må den akkompagneres av en `Label` fra [`@fremtind/jkl-core`](https://jokul.fremtind.no/komponenter/Typography) hvor `standAlone` og `htmlFor` skal være spesifisert. Eksempel på hvordan denne kan brukes:

```tsx
<Label standAlone htmlFor="complicatedquestion">
    Lorem ipsum...
</Label>
<BaseInputField id="complicatedquestion" aria-describedby={error ? "supportlabel" : undefined} />
<SupportLabel id="supportlabel" errorLabel={error && "Oida, her gikk noe galt!"}>
```
