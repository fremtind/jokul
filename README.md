# [Jøkul](https://jokul.fremtind.no)

![lint-test-typecheck](https://img.shields.io/github/workflow/status/fremtind/jokul/lint-test-typecheck)
![Visual regression tests](https://img.shields.io/github/workflow/status/fremtind/jokul/Visual%20regression%20tests?label=cypress)
[![NPM](https://img.shields.io/npm/l/@fremtind/jkl-core.svg?style=popout)](#Lisens)
[![All Contributors](https://img.shields.io/badge/all_contributors-18-green.svg?style=flat-rounded)](#contributors)

Jøkul er et [designsystem](https://www.invisionapp.com/inside-design/guide-to-design-systems/) som er utviklet av [Fremtind](https://fremtind.no).

-   **Stil**: Jøkul gir deg css- og scss-stilark for de grunnleggende komponentene og designmønstrene til Fremtind. De følger Fremtinds designprinsipper.
-   **Komponenter**: React-komponentene våre er klare til bruk. Vi har skrevet dem i Typescript, slik at utvikleropplevelsen blir bedre og det blir færre feil.
-   **Kan utvides**: Jøkul har innebygd støtte for css, scss og React, men er lagt opp til å kunne støtte andre rammeverk og fremtidig teknologi.

## [Kom i gang](https://jokul.fremtind.no/kom-i-gang/)

1. Klon repoet til maskinen din og naviger deg til mappen i terminalen
2. Installer avhengigheter og bygg pakkene med `yarn boot` [^windows]
3. Start portalen lokalt med `yarn dev` og åpne [localhost på port 8000](http://localhost:8000/)

**NB!** Når du sjekker ut en ny branch bør du bygge på nytt for å hindre at gammel bygget kode blir med når du kjører opp eksempler eller portalen. Kommandoen `yarn reboot` sletter alle bygde filer, installerer avhengigheter, og bygger pakkene på nytt.

**Tips**: Du kan starte opp én og én komponent ved å kjøre `yarn dev` i react-pakken til komponenten. Den vil lytte på endringer i både react-og stilpakkene.

## Bruk av pakkene

Du kan bruke Jøkul på to måter. Du kan enten ta inn kun stilark eller du kan bruke stilarkene og de ferdige komponentene. Komponentpakkene inneholder alt som trengs, inkludert avhengigheter til andre pakker. NB! Selv om komponentpakkene inneholder alle avhengigheter må du selv sørge for å importere stilpakken i koden din.

### React-pakker

`yarn add @fremtind/jkl-button-react`

```tsx
import { PrimaryButton } from "@fremtind/jkl-button-react";
import "@fremtind/jkl-button/button.min.css"; // husk å importere stilarket
...
<PrimaryButton onClick={doStuff}>Cool</PrimaryButton>
...
```

### Stilark-pakker

Hvis du ikke vil bruke React-komponentene, kan du bruke stilarkene direkte. Da laster du enten inn css-filene, eller du laster inn scss-filene inn i din egen scss-fil og får tilgang til Jøkuls variabler og mixins. Pass på at du har den riktige loaderen for å ta dette i bruk i prosjektet ditt.
`yarn add @fremtind/jkl-button`

```tsx
import "@fremtind/jkl-button/button.min.css";
...
<button classname="jkl-button--primary" onClick={doStuff}>Cool</button>
...
```

## [Dokumentasjon](https://jokul.fremtind.no/)

På [https://jokul.fremtind.no/](https://jokul.fremtind.no/) finner du informasjon om hvordan du bruker Jøkul, om designprinsippene til Fremtind og beskrivelse, bruksområder og kode for hver enkelt komponent.

## Endre Jøkul

Formålet vårt med Jøkul er at det skal gå raskere å utvikle Fremtind-løsninger. Det skal være enkelt og lett å vedlikeholde og de ferdige løsningene skal føles like, selv om de er spesifikke for ulike fagområder i Fremtind eller ulike kundebehov. All utvikling skjer åpent på GitHub. Det gjør at alle interesserte kan følge med, påvirke retningen vi går i og være med på å videreutvikle designsystemet.

### Bidragsguide

Vi setter pris på alle bidrag, enten du [rapporterer feil](https://github.com/fremtind/jokul/issues/new/choose), [har ønsker om ny funksjonalitet](https://github.com/fremtind/jokul/issues/new/choose), [bugfix](https://github.com/fremtind/jokul/labels/bug) eller [vil utvikle noe nytt](https://github.com/fremtind/jokul/labels/enhancement).

Les mer om hvordan du kan bidra i [guiden](https://jokul.fremtind.no/guider/hvordan-endre-jokul) vår.

### Oppførsel

Jøkul er et åpent og positivt felleskap der alle skal føle seg velkommen. Gjør deg kjent med [våre etiske regler for bidragsytere](./CODE_OF_CONDUCT.md) før du deltar med bidrag.

## Lisens

Jøkul er distribuert under [MIT-lisensen](./LICENSE) for åpen kildekode.

## Bidragsytere

Takk for bidrag fra disse flotte menneskene ([emoji-oversikt](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/piofinn"><img src="https://avatars1.githubusercontent.com/u/25739615?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Pio Rasch-Halvorsen</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=piofinn" title="Code">💻</a> <a href="https://github.com/fremtind/jokul/pulls?q=is%3Apr+reviewed-by%3Apiofinn" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/fremtind/jokul/commits?author=piofinn" title="Documentation">📖</a> <a href="https://github.com/fremtind/jokul/issues?q=author%3Apiofinn" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/gbrownlee"><img src="https://avatars1.githubusercontent.com/u/888229?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Glenn A. Brownlee</b></sub></a><br /><a href="#projectManagement-gbrownlee" title="Project Management">📆</a> <a href="#eventOrganizing-gbrownlee" title="Event Organizing">📋</a> <a href="https://github.com/fremtind/jokul/issues?q=author%3Agbrownlee" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/lfbergee"><img src="https://avatars0.githubusercontent.com/u/46530368?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Leiv Fredrik Berge</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=lfbergee" title="Code">💻</a> <a href="https://github.com/fremtind/jokul/commits?author=lfbergee" title="Documentation">📖</a> <a href="#infra-lfbergee" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/fremtind/jokul/pulls?q=is%3Apr+reviewed-by%3Alfbergee" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/Saegrov"><img src="https://avatars2.githubusercontent.com/u/124469?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Simen Sægrov</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=Saegrov" title="Code">💻</a> <a href="https://github.com/fremtind/jokul/pulls?q=is%3Apr+reviewed-by%3ASaegrov" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/Steinop"><img src="https://avatars3.githubusercontent.com/u/51952891?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Steinop</b></sub></a><br /><a href="#design-Steinop" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/ambientconflict"><img src="https://avatars2.githubusercontent.com/u/32671873?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ambientconflict</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=ambientconflict" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/nicolhag"><img src="https://avatars3.githubusercontent.com/u/7604910?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nicolai Hagen</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=nicolhag" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/stianlik"><img src="https://avatars0.githubusercontent.com/u/410251?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Stian Liknes</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=stianlik" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/hhannestad"><img src="https://avatars3.githubusercontent.com/u/51953832?v=4?s=100" width="100px;" alt=""/><br /><sub><b>hhannestad</b></sub></a><br /><a href="#design-hhannestad" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/idalower"><img src="https://avatars2.githubusercontent.com/u/47539074?v=4?s=100" width="100px;" alt=""/><br /><sub><b>idalower</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=idalower" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Gorild"><img src="https://avatars3.githubusercontent.com/u/51953080?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gorild</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=Gorild" title="Documentation">📖</a> <a href="https://github.com/fremtind/jokul/pulls?q=is%3Apr+reviewed-by%3AGorild" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/Mikkelinski"><img src="https://avatars1.githubusercontent.com/u/8458054?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mikkel Blytt</b></sub></a><br /><a href="#design-Mikkelinski" title="Design">🎨</a> <a href="https://github.com/fremtind/jokul/commits?author=Mikkelinski" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Martinvks"><img src="https://avatars1.githubusercontent.com/u/5469666?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Martinvks</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=Martinvks" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/42tte"><img src="https://avatars0.githubusercontent.com/u/8436510?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kristoffer Nordström</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=42tte" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/frisol97"><img src="https://avatars3.githubusercontent.com/u/51901763?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Frida Thorkildsen Solhaug</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=frisol97" title="Code">💻</a> <a href="https://github.com/fremtind/jokul/pulls?q=is%3Apr+reviewed-by%3Afrisol97" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/vegardsoerlie"><img src="https://avatars2.githubusercontent.com/u/14551408?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vegard Sørlie</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=vegardsoerlie" title="Code">💻</a></td>
    <td align="center"><a href="http://eniro.com"><img src="https://avatars3.githubusercontent.com/u/1997921?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Bjørn Ole Bakke</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=BjornBakke" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/almli"><img src="https://avatars2.githubusercontent.com/u/818715?v=4?s=100" width="100px;" alt=""/><br /><sub><b>almli</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=almli" title="Code">💻</a></td>
    <td align="center"><a href="https://thomasrognes.github.io/"><img src="https://avatars1.githubusercontent.com/u/33520517?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Thomas Rognes</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=thomasrognes" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/sigvehag"><img src="https://avatars0.githubusercontent.com/u/37373812?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sigve Hagesæter</b></sub></a><br /><a href="https://github.com/fremtind/jokul/issues?q=author%3Asigvehag" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/EspenSmith"><img src="https://avatars1.githubusercontent.com/u/58692206?v=4?s=100" width="100px;" alt=""/><br /><sub><b>EspenSmith</b></sub></a><br /><a href="#ideas-EspenSmith" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/Murstam"><img src="https://avatars1.githubusercontent.com/u/47025023?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Murstam</b></sub></a><br /><a href="#design-Murstam" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/fremtind-bot"><img src="https://avatars1.githubusercontent.com/u/57256715?v=4?s=100" width="100px;" alt=""/><br /><sub><b>fremtind-bot</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=fremtind-bot" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/joms"><img src="https://avatars2.githubusercontent.com/u/537060?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jo Emil Holen</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=joms" title="Code">💻</a> <a href="https://github.com/fremtind/jokul/commits?author=joms" title="Documentation">📖</a> <a href="https://github.com/fremtind/jokul/issues?q=author%3Ajoms" title="Bug reports">🐛</a> <a href="#blog-joms" title="Blogposts">📝</a> <a href="https://github.com/fremtind/jokul/pulls?q=is%3Apr+reviewed-by%3Ajoms" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/eduardoir"><img src="https://avatars1.githubusercontent.com/u/56429532?v=4?s=100" width="100px;" alt=""/><br /><sub><b>eduardodir</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=eduardodir" title="Code">💻</a></td>
    <td align="center"><a href="https://storksnestblog.wordpress.com"><img src="https://avatars2.githubusercontent.com/u/50489699?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sercan Leylek</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=SercanSercan" title="Code">💻</a> <a href="#blog-SercanSercan" title="Blogposts">📝</a> <a href="https://github.com/fremtind/jokul/issues?q=author%3ASercanSercan" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/CamillaDahlstroem"><img src="https://avatars2.githubusercontent.com/u/11536996?v=4?s=100" width="100px;" alt=""/><br /><sub><b>CamillaDahlstroem</b></sub></a><br /><a href="#design-CamillaDahlstroem" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/Mikaila94"><img src="https://avatars1.githubusercontent.com/u/10635523?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mikail Arslan</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=Mikaila94" title="Code">💻</a> <a href="#infra-Mikaila94" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/Fridaks"><img src="https://avatars1.githubusercontent.com/u/72193934?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Fridaks</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=Fridaks" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/larsare"><img src="https://avatars.githubusercontent.com/u/2777720?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Lars-Are Gudmundsen</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=larsare" title="Code">💻</a></td>
    <td align="center"><a href="http://audunberdal.no"><img src="https://avatars.githubusercontent.com/u/57794116?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Audun Berdal</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=AudunBerdal" title="Code">💻</a> <a href="https://github.com/fremtind/jokul/commits?author=AudunBerdal" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/fremtind-tony"><img src="https://avatars.githubusercontent.com/u/54317847?v=4?s=100" width="100px;" alt=""/><br /><sub><b>fremtind-tony</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=fremtind-tony" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/jarledb"><img src="https://avatars.githubusercontent.com/u/835878?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jarle Berentzen</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=jarledb" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Stormoen"><img src="https://avatars.githubusercontent.com/u/64519175?v=4?s=100" width="100px;" alt=""/><br /><sub><b>stormoen</b></sub></a><br /><a href="#design-stormoen" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/kennidenni"><img src="https://avatars.githubusercontent.com/u/31621649?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kenneth Apeland</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=kennidenni" title="Code">💻</a> <a href="#blog-kennidenni" title="Blogposts">📝</a> <a href="https://github.com/fremtind/jokul/issues?q=author%3Akennidenni" title="Bug reports">🐛</a> <a href="https://github.com/fremtind/jokul/pulls?q=is%3Apr+reviewed-by%3Akennidenni" title="Reviewed Pull Requests">👀</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/henrikhermansen"><img src="https://avatars.githubusercontent.com/u/435037?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Henrik Hermansen</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=henrikhermansen" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/BjorneOmaFremtind"><img src="https://avatars.githubusercontent.com/u/89779105?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Bjørne Oma</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=BjorneOmaFremtind" title="Code">💻</a> <a href="https://github.com/fremtind/jokul/issues?q=author%3ABjorneOmaFremtind" title="Bug reports">🐛</a> <a href="https://github.com/fremtind/jokul/pulls?q=is%3Apr+reviewed-by%3ABjorneOmaFremtind" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://wllm.no"><img src="https://avatars.githubusercontent.com/u/1223410?v=4?s=100" width="100px;" alt=""/><br /><sub><b>William Killerud</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=wkillerud" title="Documentation">📖</a> <a href="#infra-wkillerud" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/fremtind/jokul/commits?author=wkillerud" title="Code">💻</a> <a href="https://github.com/fremtind/jokul/issues?q=author%3Awkillerud" title="Bug reports">🐛</a> <a href="#blog-wkillerud" title="Blogposts">📝</a></td>
    <td align="center"><a href="https://github.com/espkva"><img src="https://avatars.githubusercontent.com/u/1224929?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Espen Kvalvik</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=espkva" title="Code">💻</a> <a href="https://github.com/fremtind/jokul/issues?q=author%3Aespkva" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/adriandersen"><img src="https://avatars.githubusercontent.com/u/31202534?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Adrian Andersen</b></sub></a><br /><a href="#infra-adriandersen" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://github.com/kathta"><img src="https://avatars.githubusercontent.com/u/9533278?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kathrine </b></sub></a><br /><a href="#design-kathta" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/tomef96"><img src="https://avatars.githubusercontent.com/u/31108801?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tom </b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=tomef96" title="Code">💻</a> <a href="https://github.com/fremtind/jokul/issues?q=author%3Atomef96" title="Bug reports">🐛</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/hjellek"><img src="https://avatars.githubusercontent.com/u/1640160?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Knut Eirik Leira Hjelle</b></sub></a><br /><a href="https://github.com/fremtind/jokul/issues?q=author%3Ahjellek" title="Bug reports">🐛</a> <a href="https://github.com/fremtind/jokul/commits?author=hjellek" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/karimarkhus"><img src="https://avatars.githubusercontent.com/u/91268511?v=4?s=100" width="100px;" alt=""/><br /><sub><b>karimarkhus</b></sub></a><br /><a href="https://github.com/fremtind/jokul/issues?q=author%3Akarimarkhus" title="Bug reports">🐛</a> <a href="#design-karimarkhus" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/HavardPede"><img src="https://avatars.githubusercontent.com/u/30959515?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Håvard Pedersen</b></sub></a><br /><a href="https://github.com/fremtind/jokul/issues?q=author%3AHavardPede" title="Bug reports">🐛</a> <a href="https://github.com/fremtind/jokul/commits?author=HavardPede" title="Code">💻</a> <a href="https://github.com/fremtind/jokul/pulls?q=is%3Apr+reviewed-by%3AHavardPede" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="http://oyvind.co"><img src="https://avatars.githubusercontent.com/u/4263132?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Øyvind Nordbø</b></sub></a><br /><a href="#design-onordbo" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/daa1"><img src="https://avatars.githubusercontent.com/u/353737?v=4?s=100" width="100px;" alt=""/><br /><sub><b>David Aasterud</b></sub></a><br /><a href="https://github.com/fremtind/jokul/issues?q=author%3Adaa1" title="Bug reports">🐛</a> <a href="https://github.com/fremtind/jokul/commits?author=daa1" title="Code">💻</a></td>
    <td align="center"><a href="https://matssom.com"><img src="https://avatars.githubusercontent.com/u/26466585?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mats Sommervold</b></sub></a><br /><a href="https://github.com/fremtind/jokul/commits?author=matssom" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Chrihenn"><img src="https://avatars.githubusercontent.com/u/25311543?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Christopher T. Hennum</b></sub></a><br /><a href="https://github.com/fremtind/jokul/issues?q=author%3AChrihenn" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

Dette prosjektet følger retningslinjene i spesifikasjonen [all-contributors](https://github.com/all-contributors/all-contributors). Vi setter pris på alle bidrag!

[^windows]: På grunn av en bug i patch-package på Windows vil denne kommandoen feile. Enten må du sjekke ut repoet med _UNIX-style line endings_, eller så må du først gjøre `yarn install` (som vil feile på `postinstall`), så manuelt legge til [denne endringen](https://github.com/ds300/patch-package/pull/301/files) i `node_modules/patch-package/dist/patch/parse.js` på linje 53. Deretter kan du kjøre `yarn postinstall` igjen, og så `yarn build`.
