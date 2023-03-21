# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 9.0.3 (2023-03-21)

### Bug Fixes

- sett charset i CSS-filene som genereres ([7346cb8](https://github.com/fremtind/jokul/commit/7346cb8644dd4b99bf0ae4d11c78a967b7b01618)), closes [#3467](https://github.com/fremtind/jokul/issues/3467)

# 9.0.0 (2023-01-30)

### Features

- bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))

### BREAKING CHANGES

- Avhenger av en versjon av jkl-core med breaking changes

## 8.0.8 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

# [7.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-list@6.0.23...@fremtind/jkl-list@7.0.0) (2022-06-07)

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

## [6.0.20](https://github.com/fremtind/jokul/compare/@fremtind/jkl-list@6.0.19...@fremtind/jkl-list@6.0.20) (2022-04-19)

### Bug Fixes

-   lister i forced-colors ([d1e975a](https://github.com/fremtind/jokul/commit/d1e975affabba6cd903203745e63070722c7cd27))

## 6.0.14 (2022-03-04)

### Bug Fixes

-   jkl-prefix på remfunksjon etter refactor ([ef567ed](https://github.com/fremtind/jokul/commit/ef567ed4eb1b691ec680dc98733a3ae36ac02a24))
-   skjul dekorativt CSS-innhold fra skjermlesere ([5976cf9](https://github.com/fremtind/jokul/commit/5976cf93234ab2d189dfd2de888fa45a88480c55)), closes [#2774](https://github.com/fremtind/jokul/issues/2774)

## 6.0.10 (2022-02-07)

### Bug Fixes

-   manuell delinting sans descending specificity ([20de1c8](https://github.com/fremtind/jokul/commit/20de1c8811596b054867352177225fd197c70797))

## 6.0.0 (2021-10-21)

### Features

-   use new spacing scale ([5694495](https://github.com/fremtind/jokul/commit/5694495f56d3c1f0e675433b35cfb0e693b93a82)), closes [#2382](https://github.com/fremtind/jokul/issues/2382)

### BREAKING CHANGES

-   new spacing scale: see migration guide for jkl-core

## 5.0.0 (2021-07-09)

### chore

-   bump major version ([255a776](https://github.com/fremtind/jokul/commit/255a776d45a068645124499b870ecefec9d87f0e))

### BREAKING CHANGES

-   Depends on jkl-core-version with breaking changes

## 4.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### Features

-   **list:** add automatic dark mode ([0c6c24c](https://github.com/fremtind/jokul/commit/0c6c24c3d362514b4fc5eb93051a2be60fb18312))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 3.0.0 (2021-06-07)

### Features

-   new colors ([9144947](https://github.com/fremtind/jokul/commit/9144947766c73fbe5eaac3372495006e3b89dec7))

### BREAKING CHANGES

-   all color variables are changed

## 2.1.8 (2021-02-17)

### Bug Fixes

-   **list:** fix display of icon list in IE ([7f6dfb4](https://github.com/fremtind/jokul/commit/7f6dfb4ad035753c1bf9c91ccb61a42f7cb44c54)), closes [#1827](https://github.com/fremtind/jokul/issues/1827)

## 2.1.1 (2020-11-30)

### Bug Fixes

-   list icon top placement ([fbb5a01](https://github.com/fremtind/jokul/commit/fbb5a01569ff9e978cd1dd2a538509ad7181b244))

## 2.1.0 (2020-11-27)

### Features

-   **list:** new checklist icons ([26260dc](https://github.com/fremtind/jokul/commit/26260dca4a0623fef86745f6f5616da7a4b33579))

## 2.0.0 (2020-11-03)

### Features

-   **list:** add check and cross list items ([7c53131](https://github.com/fremtind/jokul/commit/7c53131d00712b1c41ec77dd341bb962e71c37fb)), closes [#1483](https://github.com/fremtind/jokul/issues/1483)

### BREAKING CHANGES

-   **list:** BREAKING

## 1.2.5 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 1.2.0 (2020-02-19)

### Features

-   export scss files with style pkgs ([edb6278](https://github.com/fremtind/jokul/commit/edb627838075d3d613ae78b6aae765c81067ba6a))

## 1.1.0 (2020-01-16)

### Bug Fixes

-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

### Features

-   update to new typography naming ([5c061d7](https://github.com/fremtind/jokul/commit/5c061d7b52529f83a16cf944db240984b67f5229))

## 0.7.0 (2019-07-30)

### Features

-   **portal:** document bulletlist ([6d7c1de](https://github.com/fremtind/jokul/commit/6d7c1de))

## 0.6.0 (2019-07-18)

### Bug Fixes

-   **build:** add watch job to pkg json ([a0039e0](https://github.com/fremtind/jokul/commit/a0039e0))
-   **bullet-list:** remove import of paragraph styles and align spacing ([ec24a21](https://github.com/fremtind/jokul/commit/ec24a21))

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

-   **bullet-list:** refactor style and update example ([5cd05a1](https://github.com/fremtind/jokul/commit/5cd05a1))
-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))

### Features

-   **bullet-list:** enable semantic nesting in bullet lists@ ([63b47c1](https://github.com/fremtind/jokul/commit/63b47c1))
-   **bulletlist:** add style and react wrapper for bullet list ([e30b16f](https://github.com/fremtind/jokul/commit/e30b16f))
-   **css build:** example implementation of new css build job with gulp ([74eb3b8](https://github.com/fremtind/jokul/commit/74eb3b8)), closes [#34](https://github.com/fremtind/jokul/issues/34)
