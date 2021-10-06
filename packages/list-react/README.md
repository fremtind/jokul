# [`@fremtind/jkl-list-react`](https://jokul.fremtind.no/komponenter/list)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/list).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://jokul.fremtind.no/developer/getting-started/)

## Bruk av React-pakken

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-list-react` eller `npm i @fremtind/jkl-list-react`. Stil-pakken blir automatisk installert som en avhengighet.
2. Importér _både_ React-pakken og stil-pakken i prosjektet ditt:

```js
import { UnorderedList, OrderedList, ListItem } from "@fremtind/jkl-list-react";
import "@fremtind/jkl-list/list.min.css";
```

### Bruk

`List` er sammensatt av komponentene `OrderedList` og `UnorderedList`. Disse brukes sammen med `ListItem` for å bygge en liste.

```jsx
<UnorderedList>
    <ListItem>Listeelement 1</ListItem>
    <ListItem>
        Listeelement 2
        <UnorderedList>
            <ListItem>Nøstet listeelement</ListItem>
        </UnorderedList>
    </ListItem>
</UnorderedList>

<OrderedList>
    <ListItem>Nummerert listeelement 1</ListItem>
    <ListItem>
        Nummerert listeelement 2
        <OrderedList>
            <ListItem>Nøstet nummerert listeelement</ListItem>
        </OrderedList>
    </ListItem>
</OrderedList>
```

### Props

Komponenten tar i bruk følgende props:

-   List

    -   `children`: **Påkrevd**. Listeelementene `ListItem`. `ReactNode`
    -   `className`: Eventuell(e) css-klassenavn for komponenten. `string`

-   ListItem
    -   `children`: **Påkrevd**. Innholdet i listeelementene. `ReactNode`
