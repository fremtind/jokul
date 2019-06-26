# [Jøkul]() av [Fremtind](https://fremtind.no)

[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-rounded)](#contributors)
[![build status](https://travis-ci.org/fremtind/jokul.svg?branch=master)](https://travis-ci.org/fremtind/jokul.svg?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/fremtind/jokul.svg)](https://greenkeeper.io/)

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
import "@fremtind/jkl-button/button.css";
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

Jøkul er [lisensiert med MIT](./LICENSE).

## Contributors

Takk for bidrag fra disse flotte menneskene ([emoji-oversikt](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://github.com/piofinn"><img src="https://avatars1.githubusercontent.com/u/25739615?v=4" width="100px;" alt="piofinn"/><br /><sub><b>piofinn</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=piofinn" title="Code">💻</a> <a href="#review-piofinn" title="Reviewed Pull Requests">👀</a></td><td align="center"><a href="https://github.com/gbrownlee"><img src="https://avatars1.githubusercontent.com/u/888229?v=4" width="100px;" alt="Glenn A. Brownlee"/><br /><sub><b>Glenn A. Brownlee</b></sub></a><br /><a href="#projectManagement-gbrownlee" title="Project Management">📆</a> <a href="#eventOrganizing-gbrownlee" title="Event Organizing">📋</a></td><td align="center"><a href="https://github.com/lfbergee"><img src="https://avatars0.githubusercontent.com/u/46530368?v=4" width="100px;" alt="Leiv Fredrik Berge"/><br /><sub><b>Leiv Fredrik Berge</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=lfbergee" title="Code">💻</a> <a href="https://github.com/fremtind/jokul/commits?author=lfbergee" title="Documentation">📖</a> <a href="#infra-lfbergee" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td><td align="center"><a href="https://github.com/Saegrov"><img src="https://avatars2.githubusercontent.com/u/124469?v=4" width="100px;" alt="Simen Sægrov"/><br /><sub><b>Simen Sægrov</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=Saegrov" title="Code">💻</a></td><td align="center"><a href="https://github.com/Steinop"><img src="https://avatars3.githubusercontent.com/u/51952891?v=4" width="100px;" alt="Steinop"/><br /><sub><b>Steinop</b></sub></a><br /><a href="#design-Steinop" title="Design">🎨</a></td><td align="center"><a href="https://github.com/nicolhag"><img src="https://avatars3.githubusercontent.com/u/7604910?v=4" width="100px;" alt="Nicolai Hagen"/><br /><sub><b>Nicolai Hagen</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=nicolhag" title="Code">💻</a></td><td align="center"><a href="https://github.com/stianlik"><img src="https://avatars0.githubusercontent.com/u/410251?v=4" width="100px;" alt="Stian Liknes"/><br /><sub><b>Stian Liknes</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=stianlik" title="Code">💻</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
