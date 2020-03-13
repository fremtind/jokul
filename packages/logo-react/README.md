# [`@fremtind/jkl-logo-react`](https://fremtind.github.io/jokul/komponenter/logo)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://fremtind.github.io/jokul/komponenter/logo).

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

Logo og Logostempel trenger ingen props eller children ved bruk. Tekst for skjermlesere kan angis med `title`, og er som standard angitt til "Fremtind" for logoen og teksten i stempelet for stemplene. Et eksempel på generell bruk av komponentene kan se slik ut:

```jsx
<Logo className="logo-example" />
<LogoStampDistributor title="Laget av Fremtind" />
<LogoStampInnovation />
<LogoStampInsurance />
<LogoStampTechnology />
```

Prop-en `isSymbol` angir om det er logosymbolet eller logotypen som skal vises:

```jsx
<Logo />            // Viser logotype
<Logo isSymbol />   // Viser logosymbol
```

Dersom prop-en `animated` er angitt vil logoen animeres mellom tilstander:

```jsx
const [isSymbol, setIsSymbol] = useState(false);

<button onClick={() => setIsSymbol(!isSymbol)}>Veksle visning</button>

<Logo animated isSymbol={isSymbol} />
<Logo animated centered isSymbol={isSymbol} /> // Symbolet animeres til midten
```
