# [`@fremtind/jkl-hamburger-react`](https://fremtind.github.io/jokul/komponenter/hamburger)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://fremtind.github.io/jokul/komponenter/hamburger).

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

Vi anbefaler at du refererer til elementet som åpnes/lukkes av hamburgermenyen ved hjelp av `aria-controls`-attributten:

```jsx
const [menuIsOpen, setMenuIsOpen] = useState(false);
const toggleMenu = () => setMenuIsOpen((prevState) => !prevState);

<Hamburger onClick={toggleMenu} isOpen={menuIsOpen} aria-controls="min-meny" />

<ul id="min-meny" hidden={!menuIsOpen}>
    // ...menyobjekter
</ul>
```
