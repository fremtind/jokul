# [`@fremtind/jkl-radio-button-react`](hhttps://jokul.fremtind.no/komponenter/radiobutton)

## Beskrivelse

Se portalen for [bruk og prinsipper](hhttps://jokul.fremtind.no/komponenter/radiobutton).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://jokul.fremtind.no/developer/getting-started/)

## Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-radio-button-react` eller `npm i @fremtind/jkl-radio-button-react`. Stil-pakken blir automatisk installert som en avhengighet.
2. Importér _både_ React-pakken og stil-pakken i prosjektet ditt:

```js
import { RadioButtonGroup, RadioButton } from "@fremtind/jkl-radio-button-react";
import "@fremtind/jkl-radio-button/radio-button.min.css";
```

## Bruk

Komponenten `RadioButton` brukes ikke for seg selv, men kun gjennom `RadioButtonGroup`. Spørsmålet som stilles gis gjennom `legend` på `RadioButtonGroup` og valgene gis som children av type `RadioButton`. Du må også spesifisere et `name` som gis til alle valgene.

Om du bruker `react-hook-form` vil bruken kunne se slik ut:

```tsx
<RadioButtonGroup legend="Hvilken dekning ønsker du?">
    <RadioButton {...register("coverage", { required: true })} label="Delkasko" value="del" />
    <RadioButton {...register("coverage", { required: true })} label="Fullkasko" value="full" />
</RadioButtonGroup>
```

En mer manuell variant kan se slik ut:

```tsx
const choices = ["Jeg vil at dere skal ringe meg", "Jeg vil at dere skal sende en e-post"];
const [selectedValue, setSelectedValue] = useState("");

return (
    <RadioButtonGroup
        legend="Hvordan vil du bli kontaktet?"
        name="kontaktmetode"
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
    >
        {choices.map((value) => (
            <RadioButton key={value} label={value} value={value} />
        ))}
    </RadioButtonGroup>
);
```

Radioknappene kan vises ved siden av hverandre om `inline` er satt. Denne bør kun brukes dersom det er to relativt korte valg:

```tsx
<RadioButtonGroup legend="Er noen sjåfører under 23 år?" inline>
    <RadioButton {...register("u23", { required: true })} label="Ja" value="y" />
    <RadioButton {...register("u23", { required: true })} label="Nei" value="n" />
</RadioButtonGroup>
```

Det finnes også en `forceCompact`-variant som brukes på samme måte:

```tsx
<RadioButtonGroup legend="Er noen sjåfører under 23 år?" forceCompact>
    <RadioButton {...register("u23", { required: true })} label="Ja" value="y" />
    <RadioButton {...register("u23", { required: true })} label="Nei" value="n" />
</RadioButtonGroup>
```

`RadioButtonGroup` tar imot hjelpe- og feilmeldinger gjennom `helpLabel` og `errorLabel`. Dersom `errorLabel` finnes vises _kun_ denne, og skjemafeltene markeres som ugyldige.

### Frittstående radioknapper

Om du er i en situasjon hvor du må ha radioknapper på ulike steder i DOMen kan du bruke `BaseRadioButton`. Om du skal bruke denne er det opp til deg å gjøre jobben som vanligvis gjøres av `RadioButtonGroup` og dens `context`. Sørg for å teste skjemaet ditt grundig med skjermleser.
