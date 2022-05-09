# [`@forbrukerradet/jkl-checkbox-react`](https://jokul.fremtind.no/komponenter/checkbox)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/checkbox).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://jokul.fremtind.no/developer/getting-started/)

## Bruk av React-pakken

### Installasjon

1. Installér pakken med `yarn add @forbrukerradet/jkl-checkbox-react` eller `npm i @forbrukerradet/jkl-checkbox-react`. Stil-pakken blir automatisk installert som en avhengighet.
2. Importér _både_ React-pakken og stil-pakken i prosjektet ditt:

```js
import { Checkbox } from "@forbrukerradet/jkl-checkbox-react";
import "@forbrukerradet/jkl-checkbox/checkbox.min.css";
```

### Bruk

Som regel vil du bruke `Checkbox`-komponenten sammen med `FieldGroup` for å skape en forståelse av konteksten rundt valgene. Se [dokumentasjonen i den pakken](https://jokul.fremtind.no/komponenter/FieldGroup) for nærmere forklaring av funksjonaliteten.

`Checkbox` tar et `name`, som kan være det samme for flere bokser, og en `value` som er unik blandt avmerkingsbokser som deler samme `name`:

```jsx
<FieldGroup legend="Hvilke forsikringer har du kjøpt?">
    <Checkbox name="insurances" value="life">
        Livsforsikring
    </Checkbox>
    <Checkbox name="insurances" value="sickness">
        Kritisk sykdom
    </Checkbox>
    <Checkbox name="insurances" value="treatment">
        Behandlingsforsikring
    </Checkbox>
</FieldGroup>
```

Som standard stables avmerkingsboksene under hverandre. Om de skal stilles side om side kan du bruke prop'en `inline` (husk å sette `inline` på alle boksene):

```jsx
<Checkbox inline name="valg" value="1">Valg 1</Checkbox>
<Checkbox inline name="valg" value="2">Valg 2</Checkbox>

// Vil stilles opp slik:
// [ ] Valg 1  [ ] Valg 2
```

### Props

komponenten tar i bruk følgende props:

-   `children`: **Påkrevd**. Etiketten til avmerkingsboksen. `ReactNode`
-   `name`: **Påkrevd**. Navnet på valget som tas. `string`
-   `value`: **Påkrevd**. Valget som tas ved å krysse av. `string`
-   `checked`: Angir om boksen er merket av. `boolean`
-   `onChange`: Angir funksjon for å håndtere endring i verdi. Får en `ChangeEvent` som første argument.
-   `inline`: Angir om boksen skal stå på linje med andre bokser. `boolean`
-   `className`: Eventuell(e) css-klassenavn for komponenten. `string`
-   `forceCompact`: Angir at boksen skal vises i liten versjon uavhengig av skjermstørrelse. `boolean`
