# [`@fremtind/jkl-messages-react`](https://fremtind.github.io/jokul/komponenter/messages)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://fremtind.github.io/jokul/komponenter/messages).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://fremtind.github.io/jokul/developer/getting-started/)

## Bruk av React-pakken

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-messages-react` eller `npm i @fremtind/jkl-messages-react`. Stil-pakken blir automatisk installert som en avhengighet.

2. Importer _både_ React-pakken (velg komponenten(e) du trenger) og stil-pakken i prosjektet ditt:

```js
import { MessageBox, SystemMessage } from "@fremtind/jkl-messages-react";
import "@fremtind/jkl-messags/message-box.min.css";
import "@fremtind/jkl-messags/system-message.min.css";
```

### Bruk

Pakken `jkl-messages-react` inneholder et sett med meldingskomponenter:

-   `MessageBox`
-   `SystemMessage`

#### MessageBox

Komponenten tar følgende props:

-   `messageType`: **Påkrevd**. Meldingsboks type. `string`
-   `title`: **Påkrevd**. Overskriften til meldingsboksen. `string`
-   `children`: **Påkrevd**. Innholdet i meldingsboksen. `ReactNode`
-   `fullWidth`: `boolean`
-   `className`: Eventuell(e) css-klassenavn for komponenten. `string`

En enkel bruk av meldingsboksen kan se slik ut:

```jsx
<MessageBox messageType="success" title="Opplasting fullført">
    Filene ble lastet opp uten feil
</MessageBox>
```

Du kan sende mer enn bare ren tekst som innhold. Innholdet blir rendret inne i et `<div>`-element:

```jsx
<MessageBox messageType="error" title="Feil under innsending av skjema">
    <Body>Skjemaet kunne ikke sendes inn på grunn av feil i følgende felter:</Body>
    <UnorderedList>
        <ListItem>Fødselsnummer</ListItem>
        <ListItem>Epostadresse</ListItem>
        <ListItem>Telefonnummer</ListItem>
    </UnorderedList>
    <Body>Rett opp feilene og send deretter inn skjemaet på nytt</Body>
</MessageBox>
```

#### SystemMessage

Komponenten tar følgende props:

-   `messageType`: **Påkrevd**. Meldingsboks type. `string`
-   `children`: **Påkrevd**. Innholdet i meldingsboksen. `ReactNode`
-   `maxWidth`: Setter maks bredde på innholdet. Innholdet vil søke mot senter av siden `string`
-   `paddingLeft`: Setter padding på venstre side av innholdet. `string`
-   `className`: Eventuell(e) css-klassenavn for komponenten. `string`

En enkel bruk av meldingsboksen kan se slik ut:

```jsx
<SystemMessage messageType="info">Filopplasting er for tiden slått av</SystemMessage>
```

For å aligne innholdet i meldingen med teksten på resten av siden:

```jsx
<SystemMessage messageType="error" maxWidth="1532px" paddingLeft="1rem">
    Feilopplastingtjenesten opplever for tiden problemer
</SystemMessage>
```
