# [`@fremtind/jkl-list-react`](https://fremtind.github.io/jokul/components/list/)

## Beskrivelse

[Bruk og prinsipper](https://fremtind.github.io/jokul/components/list/) er beskrevet i `@fremtind/jkl-list` stil-pakken.

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://fremtind.github.io/jokul/developer/getting-started/)

## Bruk av React-pakken

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-list-react` eller `npm i @fremtind/jkl-list-react`. Stil-pakken blir automatisk installert som en avhengighet.
2. Importér _både_ React-pakken og stil-pakken i prosjektet ditt:

```js
import { List, ListItem } from "@fremtind/jkl-list-react";
import "@fremtind/jkl-list/list.min.css";
```

### Bruk

`List` brukes sammen med `ItemList` for å bygge en liste.

```jsx
<List>
    <ListItem>Listeelement 1</ListItem>
    <ListItem>
        Listeelement 2
        <List>
            <ListItem>Nøstet listeelement</ListItem>
        </List>
    </ListItem>
</List>
```

Som standard er listene unummererte. Skal det benyttes nummererte lister brukes prop-en `ordered` på `List`.

```jsx
<List ordered>
    <ListItem>Nummerert listeelement 1</ListItem>
    <ListItem>
        Nummerert listeelement 2
        <List ordered>
            <ListItem>Nøstet nummerert listeelement</ListItem>
        </List>
    </ListItem>
</List>
```

### Props

Komponenten tar i bruk følgende props:

-   List

    -   `children`: **Påkrevd**. Listeelementene `ListItem`. `ReactNode`
    -   `className`: Eventuell(e) css-klassenavn for komponenten. `string`
    -   `ordered`: Angir om listen skal være nummerert. `boolean`

-   ListItem
    -   `children`: **Påkrevd**. Innholdet i listeelementene. `ReactNode`
