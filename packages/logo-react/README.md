# [`@fremtind/jkl-logo-react`](https://fremtind.github.io/jokul/logo-react/documentation/Logo/)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://fremtind.github.io/jokul/logo-react/documentation/Logo/).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://fremtind.github.io/jokul/developer/getting-started/)

## Bruk av React-pakken

### Installasjon

1. Installér pakken med `yarn add @fremtind/jkl-logo-react` eller `npm i @fremtind/jkl-logo-react`. Stil-pakken blir automatisk installert som en avhengighet.

2. Importer _både_ React-pakken (velg komponenten(e) du trenger) og stil-pakken i prosjektet ditt:

```js
import {
    Logo,
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
<Logo className="logo-example" />
<LogoStampDistributor />
<LogoStampInnovation />
<LogoStampInsurance />
<LogoStampTechnology />
```

Prop-en `isSymbol` angir om det er logosymbolet eller logotypen som skal vises:

```js
<Logo isSymbol />
<Logo isSymbol centered />
```

Logoen animeres når `isSymbol` endres:

```js
const [isSymbol, toggleSymbol] = useState(false);

<button onClick={() => toggleSymbol(!isSymbol)}>Animate Logo</button>

<Logo isSymbol={isSymbol} />
<Logo isSymbol={!isSymbol} />
```

Merk at prop-en `title` kan benyttes der det er behov for økt tilgjengelighet. Standardverdien er `Fremtind` for de ulike logotypene, med unntak av stemplene som har mer spesifikke standardverdier.
