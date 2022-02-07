# [`@fremtind/jkl-toggle-switch-react`](https://jokul.fremtind.no/komponenter/toggleswitch)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/toggleswitch).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://jokul.fremtind.no/developer/getting-started/)

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

`ToggleSwitch` brukes som en kontrollert komponent gjennom prop-en `pressed` og en `onClick`-handler som tar et `MouseEvent` som første argument:

```jsx
const [darkmodeIsOn, setDarkmodeIsOn] = useState(false);

<ToggleSwitch pressed={darkmodeIsOn} onClick={() => setDarkmodeIsOn(!darkmodeIsOn)}>
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
-   `pressed`: Angir om bryterens status er av/på. `boolean`
-   `className`: Eventuell(e) css-klassenavn for komponenten. `string`
-   `onClick`: Angir funksjon for å håndtere endring i verdi. Får en `MouseEvent` som første argument.
-   `disabled`: Angir om bryteren er deaktivert. `boolean`
-   `helpLabel`: Hjelpetekst som vises under bryterne. `string`
