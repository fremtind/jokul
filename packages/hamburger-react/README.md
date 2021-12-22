# [`@fremtind/jkl-hamburger-react`](https://jokul.fremtind.no/komponenter/hamburger)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/hamburger).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://jokul.fremtind.no/developer/getting-started/)

## Bruk av React-pakken

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-hamburger-react` eller `npm i @fremtind/jkl-hamburger-react`. Stil-pakken blir automatisk installert som en avhengighet.
2. Importér _både_ React-pakken og stil-pakken i prosjektet ditt:

```js
import { Hamburger } from "@fremtind/jkl-hamburger-react";
import "@fremtind/jkl-hamburger/hamburger.min.css";
```

### Bruk

Sørg for at du får med deg riktige attributter for tilgjengelighet. [Se i portalen](https://jokul.fremtind.no/komponenter/hamburger#tilgjengelighet) om du er usikker.

```tsx
const [menuIsOpen, setMenuIsOpen] = useState(false);
const toggleMenu = () => setMenuIsOpen((prevState) => !prevState);

<Hamburger id="min-hamburger" onClick={toggleMenu} isOpen={menuIsOpen} aria-controls="min-meny" />

<div id="min-meny" aria-labelledby="min-hamburger" role="group" hidden={!menuIsOpen}>
    <ul>
        // ...menyobjekter
    </ul>
</div>
```
