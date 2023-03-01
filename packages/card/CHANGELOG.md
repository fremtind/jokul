# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 8.0.3 (2023-03-01)

### Bug Fixes

- fjern bevegelse i pila ved hover for navcard ([c57a3fd](https://github.com/fremtind/jokul/commit/c57a3fdfc179cb282b30c65f904414b449f7cbd9)), closes [#3400](https://github.com/fremtind/jokul/issues/3400)

# 8.0.0 (2023-01-30)

### Features

- bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))

### BREAKING CHANGES

- Avhenger av en versjon av jkl-core med breaking changes

## 7.0.9 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

## 7.0.3 (2022-09-22)

### Bug Fixes

-   description har nå body stil ved comfortable og small ved compact ([a012265](https://github.com/fremtind/jokul/commit/a012265774ce8908b282a563ca9e3b8f7c6fd2e6)), closes [#3120](https://github.com/fremtind/jokul/issues/3120)

# 7.0.0 (2022-09-08)

### Bug Fixes

-   unbold navcard-link i kompaktmodus ([e12d63b](https://github.com/fremtind/jokul/commit/e12d63b167f04d725519f3bb82d88b2b3b0c854c))

### Code Refactoring

-   flytt det gamle kortet til en egen fil ([e1ec9f5](https://github.com/fremtind/jokul/commit/e1ec9f5983b7e661e2cb348b259dc3e68dcc1ee8))

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))
-   kompaktvarianter av NavCard, InfoCard, TaskCard ([6d0f260](https://github.com/fremtind/jokul/commit/6d0f260f3cf18a3efe6ad19c1067e11c5cbb85c3))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"
-   Bundler ikke lenger CSSen til button i card. Inkluder button-cssen selv.

# [6.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-card@5.1.11...@fremtind/jkl-card@6.0.0) (2022-06-07)

### Bug Fixes

-   rett feil i forced-colors etter merge ([6656441](https://github.com/fremtind/jokul/commit/665644113c3d145d99ea6069cf543f8fe7bb280a))

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

## 5.2.1 (2022-06-02)

### Bug Fixes

-   hold pila etter navlink inline ([94a9345](https://github.com/fremtind/jokul/commit/94a9345a6471939bed706eea33f8c9cb95ab1fbf))

# 5.2.0 (2022-05-30)

### Features

-   add title to InfoCard and fix example ([eee03c0](https://github.com/fremtind/jokul/commit/eee03c04b52bafca9859de7bbcb81e54620074fd))

## [5.1.8](https://github.com/fremtind/jokul/compare/@fremtind/jkl-card@5.1.7...@fremtind/jkl-card@5.1.8) (2022-04-19)

### Bug Fixes

-   bruk revert i stedet for unset ([300e808](https://github.com/fremtind/jokul/commit/300e8086b4a88e37407dadaf747d714d69919cdd))
-   legg til border rundt kort i forced-colors ([597d396](https://github.com/fremtind/jokul/commit/597d3967cb787e4708da663cf1324330523b9b89))
-   unset border og outline i forced-colors ([648c7cd](https://github.com/fremtind/jokul/commit/648c7cdd30805dc6e6dc74b3e12d7b20b2ff5cec))

# [5.1.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-card@5.0.11...@fremtind/jkl-card@5.1.0) (2022-02-17)

### Bug Fixes

-   **nav-card:** fjern animasjon av pil ved hover ([f4c57ac](https://github.com/fremtind/jokul/commit/f4c57ac969689b63594ccb6be47ac2767b6ca446))
-   **nav-card:** justering av pil i lenke ved hover ([f868ce6](https://github.com/fremtind/jokul/commit/f868ce6988aeff8d66425f075cc67d1c1b2fb4a9))

### Features

-   legg til InfoCard-komponent ([c4c7a1e](https://github.com/fremtind/jokul/commit/c4c7a1e2f7ae0ec20403069f2bf51a1ca9e729b1))
-   legg til NavCard-komponent ([4335747](https://github.com/fremtind/jokul/commit/433574798fd3dc905c326d1241df5e7b842e0455))
-   legg til TaskCard-komponent ([8c8134b](https://github.com/fremtind/jokul/commit/8c8134b9b86da16961a68a40c790665f0fe1baa6))

## 5.0.10 (2022-02-07)

### Bug Fixes

-   manuell delinting sans descending specificity ([20de1c8](https://github.com/fremtind/jokul/commit/20de1c8811596b054867352177225fd197c70797))

## 5.0.0 (2021-10-21)

### Features

-   use new spacing scale ([5694495](https://github.com/fremtind/jokul/commit/5694495f56d3c1f0e675433b35cfb0e693b93a82)), closes [#2382](https://github.com/fremtind/jokul/issues/2382)

### BREAKING CHANGES

-   new spacing scale: see migration guide for jkl-core

## 4.0.0 (2021-07-09)

### Bug Fixes

-   **sass:** make sure to import functions where using rem() ([02268ab](https://github.com/fremtind/jokul/commit/02268ab1494165ac489978d17bd404030347d9ff))

### chore

-   bump major version ([255a776](https://github.com/fremtind/jokul/commit/255a776d45a068645124499b870ecefec9d87f0e))

### BREAKING CHANGES

-   Depends on jkl-core-version with breaking changes

## 3.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 2.0.0 (2021-06-07)

### Features

-   new colors ([9144947](https://github.com/fremtind/jokul/commit/9144947766c73fbe5eaac3372495006e3b89dec7))

### BREAKING CHANGES

-   all color variables are changed

## 1.3.0 (2021-03-02)

### Features

-   add focus outline on keyboard nav for clickable card ([#1858](https://github.com/fremtind/jokul/issues/1858)) ([7e38cde](https://github.com/fremtind/jokul/commit/7e38cde02635e1cd842578c6f68e661ccf5ade5c)), closes [#1853](https://github.com/fremtind/jokul/issues/1853)

## 1.2.5 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 1.2.0 (2020-02-19)

### Features

-   export scss files with style pkgs ([edb6278](https://github.com/fremtind/jokul/commit/edb627838075d3d613ae78b6aae765c81067ba6a))

## 1.1.2 (2020-02-18)

### Bug Fixes

-   make use of new color token (changed name) ([f14c149](https://github.com/fremtind/jokul/commit/f14c149f779e65fe0775afde4421aef26be8ed1d))
-   make use of new core color tokens ([075f7b3](https://github.com/fremtind/jokul/commit/075f7b37920805bf780120247461d79c3d8c406e))

## 1.1.0 (2020-01-16)

### Bug Fixes

-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

### Features

-   update to new typography naming ([5c061d7](https://github.com/fremtind/jokul/commit/5c061d7b52529f83a16cf944db240984b67f5229))

## 1.0.0 (2019-12-03)

### Bug Fixes

-   **card:** add core & fix title ([4120174](https://github.com/fremtind/jokul/commit/412017454b83b1ddec4a9124dd84680d3d2d0d7a))
-   **card:** fix transition on hover ([bf945e4](https://github.com/fremtind/jokul/commit/bf945e4600fb3a78d6253ede9aa0b23e80e9e817))

### Features

-   **card:** make card clickable & move transition/shadow ([3e18478](https://github.com/fremtind/jokul/commit/3e184784fbaf2eb1126c1192a5165fb972fcd3f8))
-   **card:** make card-component ready for v1 ([86c7171](https://github.com/fremtind/jokul/commit/86c71711f2a85255f032f1e7cdce9319bfb971ee)), closes [#453](https://github.com/fremtind/jokul/issues/453)

## 0.6.2 (2019-07-30)

### Bug Fixes

-   **css:** add zindexscale and shaddow ([87e526f](https://github.com/fremtind/jokul/commit/87e526f))

## 0.6.0 (2019-07-18)

### Bug Fixes

-   **build:** add watch job to pkg json ([a0039e0](https://github.com/fremtind/jokul/commit/a0039e0))

### Features

-   **build:** add watch job for css, refactor gulp ([8adafd6](https://github.com/fremtind/jokul/commit/8adafd6))

## 0.5.0 (2019-07-15)

### Bug Fixes

-   use correct syntax for importing sass index files ([46fa8f6](https://github.com/fremtind/jokul/commit/46fa8f6))
-   **build:** publish correct files for style pkgs ([a89d768](https://github.com/fremtind/jokul/commit/a89d768))

## 0.3.0 (2019-07-15)

### Features

-   **build:** publish correct files in all packages ([b1fbb8f](https://github.com/fremtind/jokul/commit/b1fbb8f))
-   **core:** flatten structure of core package ([5b2287b](https://github.com/fremtind/jokul/commit/5b2287b))

## 0.2.0 (2019-07-15)

### Bug Fixes

-   **publish:** update access on logo and accodion ([3b557fb](https://github.com/fremtind/jokul/commit/3b557fb))

### Features

-   **build:** add browserlist pkg and browserlist to evry pkg ([3dcc9ca](https://github.com/fremtind/jokul/commit/3dcc9ca))

## 0.1.0 (2019-07-15)

### Bug Fixes

-   **all:** fix formatting errors in html and scss files ([5e20a63](https://github.com/fremtind/jokul/commit/5e20a63))
-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))

### Features

-   **card:** add styles for card component ([d868846](https://github.com/fremtind/jokul/commit/d868846))
-   **card:** add styles for hover and focus on card component ([c346518](https://github.com/fremtind/jokul/commit/c346518))

### Performance Improvements

-   **build:** use gulp for all style packages ([5699683](https://github.com/fremtind/jokul/commit/5699683))
