# [`@forbrukerradet/jkl-description-list-react`](https://jokul.fremtind.no/komponenter/descriptionlist)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://jokul.fremtind.no/komponenter/descriptionlist).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://jokul.fremtind.no/developer/getting-started/)

### Installasjon

1. Installér pakken med `yarn add @forbrukerradet/jkl-description-list-react` eller `npm i @forbrukerradet/jkl-description-list-react`. Stil-pakken blir automatisk installert som en avhengighet.

2. Importer React-pakken (velg komponenten(e) du trenger):

```js
import { DescriptionList, DescriptionTerm, DescriptionDetail } from "@forbrukerradet/jkl-description-list-react";
```

### Bruk

Komponenten tar følgende props:

-   `className`: Om man ønsker å gjøre noen visuelle justeringer, kan man sende inn en className. Vær obs på å bruke denne da det er meninga at man skal bruke komponenten slik som den er.

En enkel bruk av denne lista kan se slik ut:

```jsx
<DescriptionList>
    <DescriptionTerm>Forsikringer</DescriptionTerm>
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
