# [`@fremtind/jkl-alert-message-react`](https://fremtind.github.io/jokul/komponenter/alert-message)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://fremtind.github.io/jokul/komponenter/alert-message).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://fremtind.github.io/jokul/developer/getting-started/)

## Bruk av React-pakken

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-alert-message-react` eller `npm i @fremtind/jkl-alert-message-react`. Stil-pakken blir automatisk installert som en avhengighet.

2. Importer _både_ React-pakken (velg komponenten(e) du trenger) og stil-pakken i prosjektet ditt:

```js
import {
    InfoAlertMessage,
    ErrorAlertMessage,
    WarningAlertMessage,
    SuccessAlertMessage,
} from "@fremtind/jkl-alert-message-react";
import "@fremtind/jkl-alert-message/alert-message.min.css";
```

### Bruk

Komponenten tar følgende props:

-   `children`: **Påkrevd**. Innholdet i meldingsboksen. `ReactNode`
-   `maxContentWidth`: Setter maks bredde på innholdet. Innholdet vil søke mot senter av siden `string`
-   `paddingLeft`: Setter padding på venstre side av innholdet. `string`
-   `className`: Eventuell(e) css-klassenavn for komponenten. `string`
-   `role`: Overstyring av `role`-attributtet. For å "skru av" standardrollen kan du bruke verdien `none presentation` ([ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1/#none)). `string`

En enkel bruk av meldingsboksen kan se slik ut:

```jsx
<InfoAlertMessage>Filopplasting er for tiden slått av</InfoAlertMessage>
```

For å aligne innholdet i meldingen med teksten på resten av siden:

```jsx
<ErrorAlertMessage maxContentWidth="1532px" paddingLeft="1rem">
    Feilopplastingtjenesten opplever for tiden problemer
</ErrorAlertMessage>
```
