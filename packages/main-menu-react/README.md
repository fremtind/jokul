# [`@fremtind/jkl-main-menu-react`](https://jokul.fremtind.no/komponenter/mainmenu)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/mainmenu).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://jokul.fremtind.no/komigang/utvikling)

## Bruk av React-pakken

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-main-menu-react` eller `npm i @fremtind/jkl-main-menu-react`. Avhengigheter, inkludert stil-pakken, blir automatisk installert.
2. Importér _både_ React-pakken og nødvendige stil-pakker i prosjektet ditt:

```js
import { MainMenu, FullScreenMenu } from "@fremtind/jkl-main-menu-react";
import "@fremtind/jkl-main-menu/main-menu.min.css";
import "@fremtind/jkl-main-menu/full-screen-menu.min.css";
import "@fremtind/jkl-hamburger/hamburger.min.css";
```

### Bruk

Main menu tar inn en liste med menypunkter, som består av en lenketekst og enten en URL eller en ny liste med menypunkter. Slik kan du få nøstede menyer.

```tsx
const menuItems = [
    { linkText: "Forsikringer", content: "/forsikringer" },
    { linkText: "Fakturaer", content: "/fakturaer" },
    { linkText: "Valg", content: [{ linkText: "Tilganger", content: "/tilganger" }] },
];

return <MainMenu items={menuItems} />;
```

Som standard vil alle menypunktene legges i en hamburgermeny. Hvis du vil vise det øverste nivået med menypunkter kan du bruke prop-en `showTopLevel`. Menyen vil kollapse til en hamburgermeny på små skjermer. Du burde likevel sjekke at ikke menyen bryter før dette skjer dersom du har mange eller lange menypunkter.

```tsx
<MainMenu items={menuItems} showTopLevel />
```

I tillegg til lenketekst og innhold kan menypunktene ha en `basePath`, som brukes for å sjekke om menypunktet skal være markert som aktivt (for å vise at brukeren befinner seg på denne siden). Som standard sammenliknes `basePath` med `window.location.pathname`, men du kan også spesifisere din egen funksjon for dette med prop-en `isActiveFunction`.

```tsx
const myActiveFunction = (basePath: string, basePathOfCurrentlyOpenMenu: string) =>
    // merker som aktiv om menypunktet er åpent, eller er lik "test"
    basePath === (basePathOfCurrentlyOpenMenu || "test");
const menuItems = [
    { linkText: "Forsikringer", content: "test" }, // vil alltid markeres aktiv
    { linkText: "Fakturaer", content: "/fakturaer" },
    { linkText: "Valg", content: [{ linkText: "Tilganger", content: "/tilganger" }] },
];

return <MainMenu items={menuItems} isActiveFunction={myActiveFunction} />;
```

Du kan også spesifisere hvordan menyen skal navigere i løsningen din. Dette kan være praktisk om du for eksempel bruker `react-router` eller andre rutingsbiblioteker. Bruk prop-en `navigationFunction` til dette. Som standard brukes `window.location.assign(path)`.

```tsx
import { useHistory } from "react-router-dom";
const history = useHistory();

return <MainMenu items={menuItems} navigationFunction={history.push} />;
```
