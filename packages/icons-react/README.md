# [`@forbrukerradet/jkl-icons-react`](https://jokul.fremtind.no/komponenter/icons)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/icons).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://jokul.fremtind.no/developer/getting-started/)

## Bruk av React-pakken

### Installasjon

1. Installér pakken med `yarn add @forbrukerradet/jkl-icons-react` eller `npm i @forbrukerradet/jkl-icons-react`. Stil-pakken blir automatisk installert som en avhengighet.
2. Importér _både_ React-pakken og stil-pakken i prosjektet ditt:

```js
import { ArrowDown } from "@forbrukerradet/jkl-icons-react";
```

### Bruk

```jsx
<div>
    <ArrowDown />
</div>
```

Ikonene arver farge fra foreldre komponenten, så om man ønsker endring i dark mode, må det styres av komponenten over. Nødvendig stil kommer fra core stil pakka.

```js
import { ArrowHorizontalAnimated } from "@forbrukerradet/jkl-icons-react";
import "@forbrukerradet/jkl-icons/animated-icons.min.css";
```

### Bruk

```jsx
<div>
    <ArrowHorizontalAnimated />
</div>
```

Når man bruker de animerte ikonene trenger vi å laste inn css fra ikonpakka.
