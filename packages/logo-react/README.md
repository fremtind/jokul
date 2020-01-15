# [`@fremtind/jkl-logo-react`](https://fremtind.github.io/jokul/logo-react/documentation/Logo/)

## Beskrivelse

[Bruk og prinsipper](https://fremtind.github.io/jokul/logo-react/documentation/Logo/) er beskrevet i `@fremtind/jkl-logo` stil-pakken.

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://fremtind.github.io/jokul/developer/getting-started/)

## Bruk av React-pakken

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-logo-react` eller `npm i @fremtind/jkl-logo-react`. Stil-pakken blir automatisk installert som en avhengighet.

2. Importer _både_ React-pakken (velg komponenten(e) du trenger) og stil-pakken i prosjektet ditt:

```js
import {
    LogoAnimated,
    LogoMain,
    LogoSymbol,
    LogoStampDistributor,
    LogoStampInnovation,
    LogoStampInsurance,
    LogoStampTechnology,
} from "@fremtind/jkl-logo-react";
import "@fremtind/jkl-logo/logo.min.css";
```

### Bruk

Et eksempel på generell bruk av komponentene kan se slik ut:

```js
<LogoSymbol className="symbol-example" />
<LogoMain />
<LogoStampDistributor />
<LogoStampInnovation />
<LogoStampInsurance />
<LogoStampTechnology />
```

Merk at prop-en `title` kan benyttes der det er behov for økt tilgjengelighet. Standardverdien er `Fremtind` for de ulike logotypene, med unntak av stemplene som har mer spesifikke standardverdier.

`LogoAnimated` er litt annerledes i bruk og krever at prop-en `isSymbol` benyttes. `isSymbol` angir om det er logosymbolet eller logotypen som skal vises. Logoen animeres når denne prop-en endres. Et eksempel på bruk kan se slik ut:

```js
const [isSymbol, toggleSymbol] = useState(false);

<button onClick={() => toggleSymbol(!isSymbol)}>Animate Logo</button>

<LogoAnimated isSymbol={isSymbol} />
<LogoAnimated isSymbol={!isSymbol} />
```
