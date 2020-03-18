# [`@fremtind/jkl-card-react`](https://fremtind.github.io/jokul/komponenter/card)

## Beskrivelse

Se portalen for [bruk og prinsipper](https://fremtind.github.io/jokul/komponenter/card).

## Kom i gang

[Lær hvordan du kan ta i bruk Jøkul](https://fremtind.github.io/jokul/developer/getting-started/)

## Bruk av React-pakken

### Installasjon

1. Installèr pakken med `yarn add @fremtind/jkl-card-react` eller `npm i @fremtind/jkl-card-react`. Stil-pakken blir automatisk installert som en avhengighet.

2. Importer _både_ React-pakken og stil-pakken i prosjektet ditt:

```js
import { Card } from "@fremtind/jkl-card-react";
import "@fremtind/jkl-card/card.min.css";
```

## Bruk

Den mest grunnleggende varianten av `Card`-komponenten består bare av en container og en tittel, derfor er en alltid nødt til å definere `title`-propen. `children` gjør det mulig å legge til paragrafer og eventuelle andre komponenter.

## Props

-   `title`: **Påkrevd** Angir tittelen på kortet `title`
-   `children`: Eventuelt annet innhold, enten ren html eller jøkul-komponenter `ReactNode`
-   `className`: Eventuell(e) css-klassenavn for komponenten. `string`
-   `media`: Angir kilden til bilder/illustrasjoner. `Media`
-   `action`: Angir typen knapp (primær/sekundær/tertiær), funksjon og tekst på knappen. `Action`
-   `dark`: Angir at kortet skal være darkmode. `boolean`

## Action

Bruker stilen til `Button` og har tre varianter. `type` definerer hvilke type knapp. `name` er teksten som skal stå på knappen (f.eks _Les mer_). `onClick` er hvilke funksjon knappen skal utføre.

```tsx
export type validButtons = "primary" | "secondary" | "tertiary";

export type Action = {
    type: validButtons;
    name: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
};
```

Husk å skrive `action` som et objekt med to curly brackets:

```tsx
<Card title="Skade" action={{ type: "primary", name: "Meld skade", onClick: handleClick }}></Card>
```

## Media

Består av `src`og `alt` og angir src-path til bilder eller illustrasjoner. `alt` er den alternative teksten for screenreaders.
