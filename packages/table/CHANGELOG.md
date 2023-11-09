# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [9.0.8](https://github.com/fremtind/jokul/compare/@fremtind/jkl-table@9.0.7...@fremtind/jkl-table@9.0.8) (2023-11-09)

### Bug Fixes

- make table hover consistent with select ([6ce0019](https://github.com/fremtind/jokul/commit/6ce0019e400e33cc86fa60c9c376f5d875cf763c)), closes [#3730](https://github.com/fremtind/jokul/issues/3730)

# 9.0.0 (2023-07-07)

### chore

- oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### Code Refactoring

- migrer vekk fra deprecated tilde-importer i Sass ([7ef2cf7](https://github.com/fremtind/jokul/commit/7ef2cf7a510122c69b2c5658c402f3dd9f5322f7)), closes [#3418](https://github.com/fremtind/jokul/issues/3418)

### BREAKING CHANGES

- Avhenger av ny majorversjon av core
- Tilde-prefikset er fjernet i all Sass-kode. Avhengig av oppsettet ditt kan det hende du
ikke trenger gjøre noe. Om bygget ditt brekker, konfigurer Sass sin loadPaths så den
inkluderer node_modules.

## 8.1.3 (2023-03-21)

### Bug Fixes

- sett charset i CSS-filene som genereres ([7346cb8](https://github.com/fremtind/jokul/commit/7346cb8644dd4b99bf0ae4d11c78a967b7b01618)), closes [#3467](https://github.com/fremtind/jokul/issues/3467)

# 8.1.0 (2023-02-02)

### Bug Fixes

- bruk fontstiler for riktig størrelse i kompakt ([825b1cd](https://github.com/fremtind/jokul/commit/825b1cdefdf988d9c5c7439594a230ef8e3f1e66))

### Features

- paginering i tabeller ([7fdf478](https://github.com/fremtind/jokul/commit/7fdf47899aa48fc6e2e893b8547d0a19d4b9944b))
- støtte for sortering med tabellheader ([12a589d](https://github.com/fremtind/jokul/commit/12a589d6cce67c18ea45ae7da2b86a858822ceba))

# 8.0.0 (2023-01-30)

### Features

- bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))

### BREAKING CHANGES

- Avhenger av en versjon av jkl-core med breaking changes

## 7.1.2 (2022-12-05)

### Bug Fixes

-   legg til luft over headingen ([f23d04d](https://github.com/fremtind/jokul/commit/f23d04de452711412ddb28430ea902558e470ce5))

## [7.1.1](https://github.com/fremtind/jokul/compare/@fremtind/jkl-table@7.1.0...@fremtind/jkl-table@7.1.1) (2022-12-02)

### Bug Fixes

-   use box shadow as border so it stays with the sticky content ([24fc4bc](https://github.com/fremtind/jokul/commit/24fc4bc33d07cdb3d473b3fefaaee8d1f721bde9))

# 7.1.0 (2022-11-30)

### Features

-   add sticky table header ([604bfd0](https://github.com/fremtind/jokul/commit/604bfd09ce1c0b1f0d1edbca7dd95368d6da031f))

## 7.0.8 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

# 7.0.0 (2022-09-08)

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"

## 6.0.10 (2022-08-05)

### Bug Fixes

-   fjern position sticky fra th ([8a555fe](https://github.com/fremtind/jokul/commit/8a555fee131ebceac4b7f47820385242769441e5)), closes [#2965](https://github.com/fremtind/jokul/issues/2965)

# [6.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-table@5.5.6...@fremtind/jkl-table@6.0.0) (2022-06-07)

### Code Refactoring

-   oppdater til nyeste core ([1db381f](https://github.com/fremtind/jokul/commit/1db381fdc0d3f1c35818d2feec49977331cd2fad))
-   prefiks CSS-variabler med jkl ([500ee0e](https://github.com/fremtind/jokul/commit/500ee0e1050de94d8cda07fb423c33837fbf2faa))
-   skriv og følg stilguiden for Sass i Jøkul ([1cc52a4](https://github.com/fremtind/jokul/commit/1cc52a4dea6af592ed48c45b38bc4fee07a749ae))
-   sweep for å rydde i Sass-variabler ([fa1b094](https://github.com/fremtind/jokul/commit/fa1b094189c2958d5407334ae063d36461229b11))

### Features

-   legg til en index-fil for Sass ([c4f8d0c](https://github.com/fremtind/jokul/commit/c4f8d0cd31bcab0706a49be1bdf0214fbbbbf646))

### BREAKING CHANGES

-   Sass-variabler i komponentpakkene er gjort private
-   Alle CSS-variabler har jkl-prefix
-   Sass-variabler, mixins og CSS-animasjoner fra pakker annet enn core er gjort private
-   Avhenger av ny majorversjon av core

## [5.5.3](https://github.com/fremtind/jokul/compare/@fremtind/jkl-table@5.5.2...@fremtind/jkl-table@5.5.3) (2022-04-19)

### Bug Fixes

-   bruk revert i stedet for unset ([300e808](https://github.com/fremtind/jokul/commit/300e8086b4a88e37407dadaf747d714d69919cdd))
-   tabellrader som er knapper ([3aa1ac4](https://github.com/fremtind/jokul/commit/3aa1ac41f8f4ffc4cea20a17db83ed0beb7c74e3))
-   unset border og outline i forced-colors ([648c7cd](https://github.com/fremtind/jokul/commit/648c7cdd30805dc6e6dc74b3e12d7b20b2ff5cec))

## 5.5.2 (2022-04-08)

### Bug Fixes

-   bruk rett venstre og høyrepadding i tabellceller ([01645ad](https://github.com/fremtind/jokul/commit/01645ade760a461b5b89cfb8d26c17b3f1e9b823)), closes [#2826](https://github.com/fremtind/jokul/issues/2826)

# [5.5.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-table@5.4.1...@fremtind/jkl-table@5.5.0) (2022-03-16)

### Features

-   add support for left/right aligning table header ([1b57ee7](https://github.com/fremtind/jokul/commit/1b57ee7c6d413d848a87724d51ede79bae131684))

# [5.4.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-table@5.3.1...@fremtind/jkl-table@5.4.0) (2022-03-14)

### Bug Fixes

-   fix hover color for expanded table row ([d8b0885](https://github.com/fremtind/jokul/commit/d8b0885fe148fc32b911afd776b3e5db5c79f46f))

### Features

-   make expand row more appealing on mobile ([97a6b32](https://github.com/fremtind/jokul/commit/97a6b328dbcf181a113df36fa2fe51b913e936a6))

# [5.3.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-table@5.2.7...@fremtind/jkl-table@5.3.0) (2022-03-10)

### Features

-   fix animation timing for expandable tablerow ([70e1a42](https://github.com/fremtind/jokul/commit/70e1a42b4a5dc4b0070a03f7c80d2000c1739fae))

## 5.2.7 (2022-03-09)

### Bug Fixes

-   fix a bug where arrow wouldn't align to text ([a56dbf8](https://github.com/fremtind/jokul/commit/a56dbf8953ffb5e2f67943a3749185db269ffe08))

## [5.2.1](https://github.com/fremtind/jokul/compare/@fremtind/jkl-table@5.2.0...@fremtind/jkl-table@5.2.1) (2022-02-07)

### Bug Fixes

-   manuell delinting sans descending specificity ([20de1c8](https://github.com/fremtind/jokul/commit/20de1c8811596b054867352177225fd197c70797))

# [5.2.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-table@5.1.10...@fremtind/jkl-table@5.2.0) (2022-02-02)

### Bug Fixes

-   fix a bug where the child wrapper got the wrong display value ([527276b](https://github.com/fremtind/jokul/commit/527276bbc7e5fcbf5ca324fcac51aea5397bc744))
-   fix arrow hover effect when clickable is enabled ([b039007](https://github.com/fremtind/jokul/commit/b039007ef5e7335caab7ef6572843ad8d271c208))
-   make th-text only show on small screens in collapsed mode ([37e35c4](https://github.com/fremtind/jokul/commit/37e35c4b015bc8716db2331c5f0583f3a526d7bd))
-   use Jøkul motion definitions ([86a14bc](https://github.com/fremtind/jokul/commit/86a14bcd07ec48d9b5181baf211c7ab783e6b0e6))

### Features

-   add base functionality for expanding rows ([4290cfc](https://github.com/fremtind/jokul/commit/4290cfc0def5d3b6ae0449e0e52b1527e332a02a))
-   animate expandable table ([e2fb733](https://github.com/fremtind/jokul/commit/e2fb7335f63c1e8b6a575680296222f1517150a7))
-   use data-th inside ExpandButton when table is shown as list ([4f10a7a](https://github.com/fremtind/jokul/commit/4f10a7a6a03ddeea35e2aee7bdad7697589580f4))

## 5.1.3 (2021-11-17)

### Bug Fixes

-   endre standard vertical-align i henhold til design ([a545a58](https://github.com/fremtind/jokul/commit/a545a58fbc219285304dea34b3ebc3963fe860b4)), closes [#2434](https://github.com/fremtind/jokul/issues/2434)

## 5.1.0 (2021-10-25)

### Features

-   variant av table-cell med toppjustering ([d4cf5bf](https://github.com/fremtind/jokul/commit/d4cf5bf22d70c034ff7a13ea5f72c56bba142093))

## 5.0.0 (2021-10-25)

### Features

-   nytt tabelldesign ([9f833fd](https://github.com/fremtind/jokul/commit/9f833fdb76fd1965a89370adcf49e6e5900ca59e))

### BREAKING CHANGES

-   Bryter tabellen opp i flere klasser. Nye klassenavn, modifiers, med mer.

## 4.0.0 (2021-10-21)

### Features

-   use new spacing scale ([5694495](https://github.com/fremtind/jokul/commit/5694495f56d3c1f0e675433b35cfb0e693b93a82)), closes [#2382](https://github.com/fremtind/jokul/issues/2382)

### BREAKING CHANGES

-   new spacing scale: see migration guide for jkl-core

## 3.0.0 (2021-07-09)

### Bug Fixes

-   **sass:** make sure to import functions where using rem() ([02268ab](https://github.com/fremtind/jokul/commit/02268ab1494165ac489978d17bd404030347d9ff))

### Features

-   use new typographic scale ([105dac2](https://github.com/fremtind/jokul/commit/105dac262f5cf98e9005eeaf86536a5c617ea27c))

### BREAKING CHANGES

-   Depends on jkl-core-version with breaking changes

## 2.0.0 (2021-06-07)

### Features

-   new colors ([9144947](https://github.com/fremtind/jokul/commit/9144947766c73fbe5eaac3372495006e3b89dec7))

### BREAKING CHANGES

-   all color variables are changed

## 1.2.2 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 1.2.1 (2020-03-16)

### Bug Fixes

-   **table:** fix bug causing shadow not to be drawn in IE 11 ([f8ec243](https://github.com/fremtind/jokul/commit/f8ec2430c68f7bafcfcc713ebc2f60ed133da0ac))

## 1.2.0 (2020-02-19)

### Features

-   export scss files with style pkgs ([edb6278](https://github.com/fremtind/jokul/commit/edb627838075d3d613ae78b6aae765c81067ba6a))

## 1.1.2 (2020-02-18)

### Bug Fixes

-   make use of new color token (changed name) ([f14c149](https://github.com/fremtind/jokul/commit/f14c149f779e65fe0775afde4421aef26be8ed1d))
-   make use of new core color tokens ([075f7b3](https://github.com/fremtind/jokul/commit/075f7b37920805bf780120247461d79c3d8c406e))
-   use new text-style mixins ([2873a57](https://github.com/fremtind/jokul/commit/2873a57f4570ddb87a7390a773433d26a9fde4ac))

## 1.1.0 (2020-01-16)

### Bug Fixes

-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

### Features

-   **table:** update table with new paragraph styles ([f5f8a35](https://github.com/fremtind/jokul/commit/f5f8a351bd4b3a0be90c6ea07f735b719c28a127))

## 0.3.0 (2019-10-09)

### Bug Fixes

-   **core:** add and use wcag-compliant error/focus colors ([c714b45](https://github.com/fremtind/jokul/commit/c714b45))

### Features

-   **core:** add pure white as a supporting color ([1558fa9](https://github.com/fremtind/jokul/commit/1558fa9))

## 0.2.0 (2019-09-23)

### Bug Fixes

-   **jkl-table:** move hover/active state to anchor-rows only ([f04128e](https://github.com/fremtind/jokul/commit/f04128e))
-   **jkl-table-react:** use jkl-sr-only to hide anchors in tables ([6b79957](https://github.com/fremtind/jokul/commit/6b79957))

### Features

-   **jkl-table:** add initial version of table ([582b456](https://github.com/fremtind/jokul/commit/582b456))
-   **jkl-table:** add support for anchor/link-rows ([8294390](https://github.com/fremtind/jokul/commit/8294390))
-   **jkl-table:** make anchor cover entire table data cell ([4be0b9a](https://github.com/fremtind/jokul/commit/4be0b9a))
-   **jkl-table:** make design-adjustments ([2ad87d2](https://github.com/fremtind/jokul/commit/2ad87d2))
-   **jkl-table:** remove right alignment of last column ([052e26b](https://github.com/fremtind/jokul/commit/052e26b))
