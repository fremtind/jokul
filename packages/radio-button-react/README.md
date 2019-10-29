# [`@fremtind/jkl-radio-button-react`](https://fremtind.github.io/jokul/components/radiobutton/)

## Beskrivelse

[Bruk og prinsipper](https://fremtind.github.io/jokul/components/radiobutton/) er beskrevet i `@fremtind/jkl-radio-button` stil-pakken.

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://fremtind.github.io/jokul/developer/getting-started/)

## Bruk av React-komponenten

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-radio-button-react` eller `npm i @fremtind/jkl-radio-button-react`. Stil-pakken blir automatisk installert som en avhengighet.
2. Importér _både_ React-pakken og stil-pakken i prosjektet ditt:

```js
import { RadioButtonChoice } from "@fremtind/jkl-radio-button-react";
import "@fremtind/jkl-radio-button/radio-button.min.css";
```

Komponenten `RadioButton` brukes ikke for seg selv, men kun gjennom `RadioButtonChoice`. Denne komponenten håndterer alle valg og event handlers. Spørsmålet som stilles gis gjennom prop'en `legend` og valgene gis som et array av `string` eller `ValuePair`-verdier:

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
    <RadioButtonChoice
        name="coverage"
        legend="Hvilken dekning ønsker du?"
        choices={[{ value: "del", label: "Delkasko" }, { value: "full", label: "Fullkasko" }]}
        selectedValue={selectedValue}
        onChange={setSelectedValue}
    />
);
```

Radioknappene kan vises ved siden av hverandre ved hjelp av prop'en `inline`. Denne bør kun brukes dersom det er to relativt korte valg:

```tsx
<RadioButtonChoice inline choices={["Ja", "Nei"]} />
// Noen påkrevde props fjernet for lesbarhet
```

Komponenten tar imot hjelpe- og feilmeldinger gjennom `helpLabel` og `errorLabel`. Dersom `errorLabel` finnes vises _kun_ denne, og spørsmålet markeres som feilbesvart.

```tsx
const [selectedValue, setSelectedValue] = useState("");
const hasError = selectedValue === "";

return (
    <RadioButtonChoice
        inline
        legend="Vil du motta informasjon fra oss?"
        choices={["Ja", "Nei"]}
        helpLabel="Vi videreselger aldri kontaktinformasjonen din"
        errorLabel={hasError ? "Du må foreta et valg" : undefined}
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
