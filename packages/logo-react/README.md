# [`@fremtind/jkl-logo-react`](https://fremtind.github.io/jokul/components/logo/)

## Beskrivelse

[Bruk og prinsipper](https://fremtind.github.io/jokul/components/logo/) er beskrevet i `@fremtind/jkl-logo` stil-pakken.

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

Felles for alle komponentene er at de tar inn følgende props:

-   `className`: Eventuell(e) css-klassenavn for komponenten. `string`
-   `title`: Eventuell title for tilgjengelighet. `string`

```js
<LogoSymbol className="symbol-example" />
<LogoMain />
<LogoStampDistributor />
<LogoStampInnovation />
<LogoStampInsurance />
<LogoStampTechnology />
```

`LogoAnimated` tar i tillegg til ovennevnte props også inn:

-   `showSymbol`: **Påkrevd**. Benyttes til å utløse animasjonen samt angi starttilstanden. `boolean`
-   `centered`: Sentrerer symbolet. `boolean`

```js
const [showSymbol, toggleSymbol] = useState(false);

<button onClick={() => toggleSymbol(!showSymbol)}>Animate Logo</button>

<LogoAnimated showSymbol={showSymbol} />
<LogoAnimated showSymbol={!showSymbol} />
```
