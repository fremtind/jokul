# [`@fremtind/jkl-message-box-react`](https://fremtind.github.io/jokul/komponenter/messagebox)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://fremtind.github.io/jokul/komponenter/messagebox).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://fremtind.github.io/jokul/developer/getting-started/)

## Bruk av React-pakken

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-message-box-react` eller `npm i @fremtind/jkl-message-box-react`. Stil-pakken blir automatisk installert som en avhengighet.

2. Importer _både_ React-pakken (velg komponenten(e) du trenger) og stil-pakken i prosjektet ditt:

```js
import { InfoMessage, ErrorMessage, WarningMessage, SuccessMessage } from "@fremtind/jkl-message-box-react";
import "@fremtind/jkl-message-box/message-box.min.css";
```

### Bruk

Komponentene tar følgende props:

-   `children`: **Påkrevd**. Innholdet i meldingsboksen. `ReactNode`
-   `title`: Overskriften til meldingsboksen. `string`
-   `fullWidth`: Angir om meldingsboksen skal ta opp hele bredden av beholderen den er inne i. `boolean`
-   `className`: Eventuell(e) css-klassenavn for komponenten. `string`
-   `role`: Overstyring av `role`-attributtet. For å "skru av" standardrollen kan du bruke verdien `none presentation` ([ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1/#none)). `string`

En enkel bruk av meldingsboksen kan se slik ut:

```jsx
<SuccessMessage title="Opplasting fullført">Filene ble lastet opp uten feil</SuccessMessage>
```

Du kan sende mer enn bare ren tekst som innhold. Innholdet blir rendret inne i et `<div>`-element:

```jsx
<ErrorMessage title="Feil under innsending av skjema">
    <Body>Skjemaet kunne ikke sendes inn på grunn av feil i følgende felter:</Body>
    <UnorderedList>
        <ListItem>Fødselsnummer</ListItem>
        <ListItem>Epostadresse</ListItem>
        <ListItem>Telefonnummer</ListItem>
    </UnorderedList>
    <Body>Rett opp feilene og send deretter inn skjemaet på nytt</Body>
</ErrorMessage>
```

### Tilgjengelighet

Når vi bruker meldinger med farge, må vi alltid huske å ha en god og beskrivende overskrift, siden farge ikke er et godt nok kjennetegn for alle brukere. Skriv en presis meldingstekst, der du sier det viktigste først.
