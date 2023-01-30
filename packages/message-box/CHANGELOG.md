# Changelog

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 7.0.8 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

# 7.0.0 (2022-09-08)

### Bug Fixes

-   ikonstørrelse i små containers ([e129ee6](https://github.com/fremtind/jokul/commit/e129ee62e14232169ae54326f296933919fe6f92))
-   luft og ikonstørrelse i kompakt messagebox ([7e5a14f](https://github.com/fremtind/jokul/commit/7e5a14f35f8eda4c787e72375b53a12c001caaa3))
-   småjusteringer av layout på compact ([083d3a8](https://github.com/fremtind/jokul/commit/083d3a8a764ff995f11bd3c8f2f65b036fc5c668))

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))
-   redesignet kompakt modus for message-box ([3072f81](https://github.com/fremtind/jokul/commit/3072f81ece6e9606b2aa9ee25421a45d8a173c1d))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"

# [6.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-message-box@5.2.10...@fremtind/jkl-message-box@6.0.0) (2022-06-07)

### Code Refactoring

-   oppdater til nyeste core ([1db381f](https://github.com/fremtind/jokul/commit/1db381fdc0d3f1c35818d2feec49977331cd2fad))
-   skriv og følg stilguiden for Sass i Jøkul ([1cc52a4](https://github.com/fremtind/jokul/commit/1cc52a4dea6af592ed48c45b38bc4fee07a749ae))
-   sweep for å rydde i Sass-variabler ([fa1b094](https://github.com/fremtind/jokul/commit/fa1b094189c2958d5407334ae063d36461229b11))

### Features

-   legg til en index-fil for Sass ([c4f8d0c](https://github.com/fremtind/jokul/commit/c4f8d0cd31bcab0706a49be1bdf0214fbbbbf646))

### BREAKING CHANGES

-   Sass-variabler i komponentpakkene er gjort private
-   Sass-variabler, mixins og CSS-animasjoner fra pakker annet enn core er gjort private
-   Avhenger av ny majorversjon av core

## [5.2.7](https://github.com/fremtind/jokul/compare/@fremtind/jkl-message-box@5.2.6...@fremtind/jkl-message-box@5.2.7) (2022-04-19)

### Bug Fixes

-   messagebox i forced-colors ([ad29075](https://github.com/fremtind/jokul/commit/ad29075d5981c5438d1e712c9a9768504d6989a0))
-   tag i forced-colors ([d67839d](https://github.com/fremtind/jokul/commit/d67839d13b5966c17241126c5f943bc0c7eeed15))

# 5.2.0 (2022-02-22)

### Features

-   legg til forceCompact ([81dfe9b](https://github.com/fremtind/jokul/commit/81dfe9be2fa9dc5f0d8eb341c4d74959a3874f33)), closes [#1480](https://github.com/fremtind/jokul/issues/1480)

## 5.1.4 (2022-02-07)

### Bug Fixes

-   manuell delinting sans descending specificity ([20de1c8](https://github.com/fremtind/jokul/commit/20de1c8811596b054867352177225fd197c70797))

## 5.1.0 (2021-12-22)

### Features

-   etabler en ny komponent for oppsummering av skjemafeil ([5ca33a5](https://github.com/fremtind/jokul/commit/5ca33a5ba285a101969f6b61b8f1eb51d5b58982))

## 5.0.0 (2021-10-21)

### Features

-   use new spacing scale ([5694495](https://github.com/fremtind/jokul/commit/5694495f56d3c1f0e675433b35cfb0e693b93a82)), closes [#2382](https://github.com/fremtind/jokul/issues/2382)

### BREAKING CHANGES

-   new spacing scale: see migration guide for jkl-core

## 4.1.0 (2021-10-13)

### Features

-   implement new message box design ([26c9933](https://github.com/fremtind/jokul/commit/26c99332aee727dafed7b8bca522a242141e774e))

## 4.0.0 (2021-07-09)

### Features

-   use new typographic scale ([da664c4](https://github.com/fremtind/jokul/commit/da664c4898ba2a580159f7cb808f030c61740989))

### BREAKING CHANGES

-   Depends on jkl-core version with breaking changes

## 3.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### Features

-   **message-box:** add automatic dark mode ([140cfae](https://github.com/fremtind/jokul/commit/140cfae672939b49b86c5ed35d4e191121fe331d))
-   **message-box:** add automatic dark mode ([a8ce2d4](https://github.com/fremtind/jokul/commit/a8ce2d4e232b7ce5801eb593118681bb1e7e9863))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 2.0.0 (2021-06-07)

### Features

-   new colors ([9144947](https://github.com/fremtind/jokul/commit/9144947766c73fbe5eaac3372495006e3b89dec7))

### BREAKING CHANGES

-   all color variables are changed

## 1.7.0 (2021-04-28)

### Features

-   **message-box:** make MessageBox dismissable ([f6eb66f](https://github.com/fremtind/jokul/commit/f6eb66f6bf7ee04375d95cd3a48e63677924ea71))

## 1.6.0 (2020-09-01)

### Features

-   implement global dark mode ([47b8e2d](https://github.com/fremtind/jokul/commit/47b8e2dc0abcd366212fc67f306f8523a63d11c8))

## 1.5.0 (2020-05-15)

### Features

-   **message-box:** refactor icon styling in message-box ([36c81b5](https://github.com/fremtind/jokul/commit/36c81b5935095984ec79a6059693909411d076b5))

## 1.4.0 (2020-04-27)

### Features

-   **minor ui changes:** more redable icon and more compact heading text ([181f21d](https://github.com/fremtind/jokul/commit/181f21d1ddc1e81ad381aa9f428bf6c08f165696)), closes [#904](https://github.com/fremtind/jokul/issues/904)

## 1.3.0 (2020-04-20)

### Features

-   new layout, with icons and darkmode ([2253fe8](https://github.com/fremtind/jokul/commit/2253fe873975028d74c615661a9edd4d8e0bd47b))

## 1.2.5 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 1.2.0 (2020-02-19)

### Features

-   export scss files with style pkgs ([edb6278](https://github.com/fremtind/jokul/commit/edb627838075d3d613ae78b6aae765c81067ba6a))

## 1.1.2 (2020-02-18)

### Bug Fixes

-   make use of new core color tokens ([075f7b3](https://github.com/fremtind/jokul/commit/075f7b37920805bf780120247461d79c3d8c406e))

## 1.1.0 (2020-01-16)

### Bug Fixes

-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

### Features

-   update components to use the new notification colors ([8bd78ff](https://github.com/fremtind/jokul/commit/8bd78ff371cf382c1c7fabfe1deab5e199e5750a))
-   update to new typography naming ([5c061d7](https://github.com/fremtind/jokul/commit/5c061d7b52529f83a16cf944db240984b67f5229))

## 1.0.0 (2019-12-03)

### Bug Fixes

-   **message-box:** set width using max-width to avoid bugs ([e917d88](https://github.com/fremtind/jokul/commit/e917d88615cb4eaf6cc20bf0f99103f09b6ee050))

## 0.7.3 (2019-08-30)

### Bug Fixes

-   **message-box:** fix component spacing and clean up css ([db54d92](https://github.com/fremtind/jokul/commit/db54d92))

## 0.7.2 (2019-08-02)

### Bug Fixes

-   **portal:** fixes based on pr feedback ([d3524ff](https://github.com/fremtind/jokul/commit/d3524ff))
-   **portal:** messagebox mobil width, fixed portal mobile style ([5521675](https://github.com/fremtind/jokul/commit/5521675))

## 0.7.0 (2019-07-30)

### Bug Fixes

-   **message-box:** dont let it grow beoynd its size ([9f3be1b](https://github.com/fremtind/jokul/commit/9f3be1b))

### Features

-   **messagebox:** add warning msgbox, add wc info in portal ([56da82f](https://github.com/fremtind/jokul/commit/56da82f))
-   **portal:** add components, refactor portal ([7e7d038](https://github.com/fremtind/jokul/commit/7e7d038))

## 0.6.0 (2019-07-18)

### Bug Fixes

-   **build:** add watch job to pkg json ([a0039e0](https://github.com/fremtind/jokul/commit/a0039e0))
-   **build:** normalize react package.json ([6c29e08](https://github.com/fremtind/jokul/commit/6c29e08)), closes [#156](https://github.com/fremtind/jokul/issues/156)

### Features

-   **build:** add watch job for css, refactor gulp ([8adafd6](https://github.com/fremtind/jokul/commit/8adafd6))

## 0.5.0 (2019-07-15)

### Bug Fixes

-   **build:** publish correct files for style pkgs ([a89d768](https://github.com/fremtind/jokul/commit/a89d768))

## 0.3.0 (2019-07-15)

### Bug Fixes

-   **core:** update message-box to use new core structure ([f95ea95](https://github.com/fremtind/jokul/commit/f95ea95))

### Features

-   **build:** publish correct files in all packages ([b1fbb8f](https://github.com/fremtind/jokul/commit/b1fbb8f))

## 0.2.0 (2019-07-15)

### Bug Fixes

-   **publish:** update access on logo and accodion ([3b557fb](https://github.com/fremtind/jokul/commit/3b557fb))

### Features

-   **build:** add browserlist pkg and browserlist to evry pkg ([3dcc9ca](https://github.com/fremtind/jokul/commit/3dcc9ca))

## 0.1.0 (2019-07-15)

### Bug Fixes

-   **message-box:** add gulp to message-box ([6ffec83](https://github.com/fremtind/jokul/commit/6ffec83))
-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))

### Features

-   **messagebox:** add error,info and success message ([68f05a9](https://github.com/fremtind/jokul/commit/68f05a9))
