# [`@fremtind/jkl-hamburger-react`](https://fremtind.github.io/jokul/components/hamburger/)

## Beskrivelse

[Bruk og prinsipper](https://fremtind.github.io/jokul/components/hamburger/) er beskrevet i `@fremtind/jkl-hamburger` stil-pakken.

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://fremtind.github.io/jokul/developer/getting-started/)

## Bruk av React-pakken

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-hamburger-react` eller `npm i @fremtind/jkl-hamburger-react`. Stil-pakken blir automatisk installert som en avhengighet.
2. Importér _både_ React-pakken og stil-pakken i prosjektet ditt:

```js
import { Hamburger } from "@fremtind/jkl-hamburger-react";
import "@fremtind/jkl-hamburger/hamburger.min.css";
```

### Bruk

Bruk på lys bakgrunn

```jsx
<div>
    <Hamburger />
</div>
```

Ved bruk på mørk bakgrunn brukes prop-en `negative` for å invertere ikonene.

```jsx
<div style={{ backgroundColor: "black" }}>
    <Hamburger negative />
</div>
```
