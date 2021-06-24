# `@fremtind/jkl-description-list-react`

## Beskrivelse

Se portalen for [bruk og prinsipper](https://fremtind.github.io/jokul/komponenter/descriptionlist).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://fremtind.github.io/jokul/developer/getting-started/)

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-description-list-react` eller `npm i @fremtind/jkl-description-list-react`. Stil-pakken blir automatisk installert som en avhengighet.

2. Importer React-pakken (velg komponenten(e) du trenger):

```js
import { DescriptionList, DescriptionTerm, DescriptionDetail } from "@fremtind/jkl-description-list-react";
```

### Bruk

Komponenten tar følgende props:

-   `className`: Om man ønsker å gjøre noen visuelle justeringer, kan man sende inn en className. Vær obs på å bruke denne da det er meninga at man skal bruke komponenten slik som den er.

En enkel bruk av denne lista kan se slik ut:

```jsx
<DescriptionList>
    <DescriptionTerm>Forsikrifdfd fdfgdfgdfgdgddsdfsd</DescriptionTerm>
    <DescriptionDetail>SAGA Dødsrisiko Grunndekning Hovedforsikret</DescriptionDetail>
    <DescriptionDetail>SAGA Dødsrisiko Grunndekning Hovedforsikret</DescriptionDetail>
    <DescriptionDetail>SAGA Dødsrisiko Grunndekning Hovedforsikret</DescriptionDetail>
    <DescriptionDetail>SAGA Dødsrisiko Grunndekning Hovedforsikret</DescriptionDetail>
    <DescriptionDetail>SAGA Dødsrisiko Grunndekning Hovedforsikret</DescriptionDetail>

    <DescriptionTerm>Mat</DescriptionTerm>
    <DescriptionDetail>Sushi</DescriptionDetail>
    <DescriptionDetail>Carbonara</DescriptionDetail>
</DescriptionList>
```
