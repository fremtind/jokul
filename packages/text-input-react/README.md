# [`@fremtind/jkl-text-input-react`](https://fremtind.github.io/jokul/components/textfield/)

## Beskrivelse

[Bruk og prinsipper](https://fremtind.github.io/jokul/components/textfield/) er beskrevet i `@fremtind/jkl-text-input` stil-pakken.

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://fremtind.github.io/jokul/developer/getting-started/)

## Bruk av React-pakken

### Installasjon

1. Installèr pakken med `yarn add @fremtind/jkl-text-input-react` eller `npm i @fremtind/jkl-text-input-react`. Stil-pakken blir automatisk installert som en avhengighet.

2. Importer _både_ React-pakken (velg komponenten(e) du trenger) og stil-pakken i prosjektet ditt:

```js
import { TextField, TextArea, ActionTextField, InlineTextField, BaseInputField } from "@fremtind/jkl-text-input-react";
import "@fremtind/jkl-text-input/text-input.min.css";
```

### Generell Bruk

Du må spesifisere en `label` for `TextField`, `TextArea`, `ActionTextField` og `InlineTextField`. Etiketten vil ikke vises for sistnevnte, men blir fortsatt tatt i bruk til skjermlesere.

Størrelsen på etiketten kan settes ved prop-en `variant`, hvor størrelsene er definert ved `"small" | "medium" | "large"`. Hvis komponentene skal brukes på mobile flater eller av andre årsaker trenger å være fremvist i sin kompakte variant må man ta i bruk `forceCompact`.

Det er to måter å avgrense den fysiske størrelsen til inndata-feltet, enten ved å bruke `width` eller `maxLength`. `maxLength` vil kun bestemme fysisk størrelse hvis `width` ikke er definert, siden `width` tar prioritet. Merk at `maxLength` fortsatt vil bestemme hvor mange tegn som kan tastes inn i feltet.

```jsx
if (width) {
    return { width }; // prioritize width prop
}

if (maxLength && maxLength < 15) {
    return { width: `${maxLength + 3}ch` }; // else use maxLength if not large
}
```

Komponentene tar imot hjelpe- og feilmeldinger gjennom `helpLabel` og `errorLabel`. Dersom `errorLabel` finnes vises _kun_ denne. Disse vil _ikke_ vises for komponenten `InlineTextField` og må fremvises på andre måter. Siden komponenten ikke har feil- og hjelpetekst brukes prop-en `invalid` for å sette feiltilstand.

Handlingen/Ikonet som skal brukes på et `ActionTextField` gis gjennom prop-en `action`:

```jsx
type action = {
    icon: IconVariant, // "clear", "delete", "search" eller "edit"
    label: string,
    onClick: (event: MouseEvent) => void,
};
```

### Særskilt bruk

#### BaseInputField

Denne er kun eksponert for å dekke spesielle behov og anbefales ikke å brukes.
Skal denne brukes frittstående må den akkompagneres av en `Label` fra [`@fremtind/jkl-typography-react`](https://fremtind.github.io/jokul/components/typography/) hvor `standAlone` og `htmlFor` skal være spesifisert. Eksempel på hvordan denne kan brukes:

```tsx
<Label standAlone htmlFor="complicatedquestion">
    Lorem ipsum...
</Label>
<p className="description" id="longdescription">...dolor sit amet</p>
<BaseInputField id="complicatedquestion" ariaDescribedby="longdescription" />
<SupportLabel errorLabel={error && "Oida, her gikk noe galt!"}>
```
