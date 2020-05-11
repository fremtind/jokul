# [`@fremtind/jkl-radio-button-react`](hhttps://fremtind.github.io/jokul/komponenter/radiobutton)

## Beskrivelse

Se portalen for [bruk og prinsipper](hhttps://fremtind.github.io/jokul/komponenter/radiobutton).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://fremtind.github.io/jokul/developer/getting-started/)

## Bruk av React-komponenten

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-radio-button-react` eller `npm i @fremtind/jkl-radio-button-react`. Stil-pakken blir automatisk installert som en avhengighet.
2. Importér _både_ React-pakken og stil-pakken i prosjektet ditt:

```js
import { RadioButtons } from "@fremtind/jkl-radio-button-react";
import "@fremtind/jkl-radio-button/radio-button.min.css";
```

Komponenten `RadioButtonOption` brukes ikke for seg selv, men kun gjennom `RadioButtons`. Denne komponenten håndterer alle valg og event handlers. Spørsmålet som stilles gis gjennom prop'en `legend` og valgene gis som et array av `string` eller `ValuePair`-verdier:

```ts
type ValuePair = {
    value: string;
    label: string;
};
```

Du må også spesifisere et `name` som gis til alle valgene, en `selectedValue` og en `onChange`-funksjon som får et `ChangeEvent` som første argument. Komponenten brukes altså som en kontrollert konponent:

```tsx
const [selectedValue, setSelectedValue] = useState("full");
return (
    <RadioButtons
        name="coverage"
        legend="Hvilken dekning ønsker du?"
        choices={[
            { value: "del", label: "Delkasko" },
            { value: "full", label: "Fullkasko" },
        ]}
        selectedValue={selectedValue}
        onChange={setSelectedValue}
    />
);
```

Radioknappene kan vises ved siden av hverandre ved hjelp av prop'en `inline`. Denne bør kun brukes dersom det er to relativt korte valg:

```tsx
<RadioButtons inline choices={["Ja", "Nei"]} />
// Noen påkrevde props fjernet for lesbarhet
```

Komponenten tar imot hjelpe- og feilmeldinger gjennom `helpLabel` og `errorLabel`. Dersom `errorLabel` finnes vises _kun_ denne, og spørsmålet markeres som feilbesvart.

```tsx
const [selectedValue, setSelectedValue] = useState("");
const hasError = selectedValue === "";

return (
    <RadioButtons
        inline
        legend="Vil du motta informasjon fra oss?"
        choices={["Ja", "Nei"]}
        helpLabel="Vi videreselger aldri kontaktinformasjonen din"
        errorLabel={hasError ? "Du må foreta et valg" : undefined}
    />
);
```

Komponenten kan også brukes uten forhåndsvalg. Da lar du `selectedValue` stå tom.

```tsx
const [selectedValue, setSelectedValue] = useState("");

return (
    <RadioButtons
        name="coverage"
        legend="Hvilken dekning ønsker du?"
        choices={[
            { value: "del", label: "Delkasko" },
            { value: "full", label: "Fullkasko" },
        ]}
        selectedValue={selectedValue}
        onChange={setSelectedValue}
    />
);
```

### Props

komponenten tar i bruk følgende props:

-   `name`: **Påkrevd**. Navnet på valget som tas. `string`
-   `legend`: **Påkrevd**. Overskriften på valget.`string`
-   `choices`: **Påkrevd**. Array med valgalternativene. `Array<string | ValuePair>`
-   `selectedValue`: Angir det valgte alternativet. `string`
-   `onChange`: Angir funksjon for å håndtere endring i verdi. Får en `ChangeEvent` som første argument.
-   `helpLabel`: Hjelpetekst som vises under valgene. `string`
-   `errorLabel` (**Erstatter** `helpLabel`): Feilmelding som vises under valgene. `string`
-   `inline`: Angir om boksen skal stå på linje med andre bokser. `boolean`
-   `className`: Eventuell(e) css-klassenavn for komponenten. `string`
-   `forceCompact`: Angir at boksen skal vises i liten versjon uavhengig av skjermstørrelse. `boolean`
