# [`@fremtind/jkl-toggle-switch-react`](https://fremtind.github.io/jokul/toggle-switch-react/documentation/ToggleSwitch/)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://fremtind.github.io/jokul/toggle-switch-react/documentation/ToggleSwitch/).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://fremtind.github.io/jokul/developer/getting-started/)

## Bruk av React-pakken

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-toggle-switch-react` eller `npm i @fremtind/jkl-toggle-switch-react`. Stil-pakken blir automatisk installert som en avhengighet.

2. Importer _både_ React-pakken (velg komponenten(e) du trenger) og stil-pakken i prosjektet ditt:

```js
import { ToggleSwitch } from "@fremtind/jkl-toggle-switch-react";
import "@fremtind/jkl-toggle-switch/toggle-switch.min.css";
```

### Bruk

Som standard blir `ToggleSwitch` fremvist som en komponent tiltenkt lys bakgrunn, men skal bryteren brukes på mørk bakgrunn kan man ta i bruk prop-en `inverted`.

```jsx
<ToggleSwitch>
    Switch1
</ToggleSwitch>
<ToggleSwitch inverted>
    Switch2
</ToggleSwitch>
```

`ToggleSwitch` brukes som en kontrollert komponent gjennom prop-en `checked` og en `onChange`-handler som tar et `ChangeEvent` som første argument:

```jsx
const [darkmodeIsOn, setDarkmodeIsOn] = useState(false);

<ToggleSwitch checked={darkmodeIsOn} onChange={() => setDarkmodeIsOn(!darkmodeIsOn)}>
    Darkmode
</ToggleSwitch>;
```

Skal bryteren være deaktivert legges prop-en `disabled` til. Hvis det ønskes at bruker skal bli gjort oppmerksom på hvorfor bryteren er deaktivert benyttes prop-en `helpLabel`.

```jsx
<ToggleSwitch disabled helpLabel="Du har ikke tilgang til darkmode>
    Darkmode
</ToggleSwitch>
```

### Props

Komponenten tar i bruk følgende props:

-   `children`: **Påkrevd**. Etiketten til bryteren. `ReactNode`
-   `checked`: Angir om bryterens status er av/på. `boolean`
-   `className`: Eventuell(e) css-klassenavn for komponenten. `string`
-   `onChange`: Angir funksjon for å håndtere endring i verdi. Får en `ChangeEvent` som første argument.
-   `disabled`: Angir om bryteren er deaktivert. `boolean`
-   `inverted`: Angir om bryteren skal bruke inverterte farger (til mørke bakgrunner). `boolean`
-   `helpLabel`: Hjelpetekst som vises under bryterne. `string`
