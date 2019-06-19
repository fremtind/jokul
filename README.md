# [Jøkul]() av [Fremtind](https://fremtind.no)

Jøkul er et [designsystem](https://www.invisionapp.com/inside-design/guide-to-design-systems/) utviklet av [Fremtind](https://fremtind.no).

-   **Stil**: Jøkul gir deg css og scss stilark for basis komponenter og designmønstre som følger design prinsippene til Fremtind.
-   **Komponenter**: React-komponenter som er klar til bruk. Skrevet i Typescript for mindre feil og bedre utvikleropplevelse.
-   **Utvidbar**: Støtter css, scss og React ut av boksen, men er lagt opp til å kunne støtte andre rammeverk og fremtidige teknologier.

## Kom i gang

Jøkul kan bli brukt på to måter, enten ved å laste inn bare stilark eller ved å bruke de klare komponentene. Komponent-pakkene inneholder det de trenger, inkludert avhengigheter til andre pakker. **Viktig**: Du må sette opp en `loader` i ditt byggsystem for å håntere scss-importer, feks `style-loader` for Webpack.

### React-pakker

`yarn install @fremtind/jkl-button-react`

```tsx
import { PrimaryButton } from "@fremtind/jkl-button-react";
...
<PrimaryButton onClick={doStuff}>Cool</PrimaryButton>
...
```

### Stilark-pakker

Hvis du ikke vil bruke React-komponentene, så kan du bruke stilarkene direkte. Da kan du enten laste inn css filene, eller du kan laste scss filene inn i din scss fil og få tilgang på Jøkuls variabler og mixins. Pass på at du uansett trenger en riktig loader for å ta det i bruk i ditt prosjekt.
`yarn install @fremtind/jkl-button/build/css/button.css`

```tsx
import "@fremtind/jkl-button";
...
<button classname="jkl-button--primary" onClick={doStuff}>Cool</button>
...
```

## [Dokumentasjon]()

Vi jobber på spreng for å få på plass portalen og storybook for å dokumentere hver enkelt komponent og detaljert informasjon om design prinsipper og bruk.

## Bidra

Jøkul er til for å gjøre utvikling av Fremtind løsninger raksere, enklere, lettere å vedlikeholde og føles mer likt på tvers av løsninger. All utvikling skjer åpent på GitHub, så alle som er interessert kan følge med, påvirke retningen og bidra til videreutvikling av designsystemet.

### [Bidragsguide]()

Vi setter pris på alle bidrag, fra [rapportering av feil](), [ønsker om ny funksjonalitet](), [bugfix]() eller [nytutvikling]().

Les mer om hvordan du kan bidra ved å lese vår [guide]().

### [Oppførselskode](https://no.wikipedia.org/wiki/Kardemommeloven)

> Man skal ikke plage andre, man skal være grei og snill, og for øvrig kan man gjøre hva man vil.
>
> \- Kardemommeloven

## Lisens

//TODO: AVKLAR MED LEGAL
Jøkul er [lisensiert med MIT](./LICENSE).
