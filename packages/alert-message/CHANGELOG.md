# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 7.0.6 (2022-11-22)

### Bug Fixes

- gjør at ikonet får riktig størrelse hvis man globalt setter box-sixing:border-box ([343a413](https://github.com/fremtind/jokul/commit/343a4135a10c3e66625df80c3e8ffcc68a2fd375))

# 7.0.0 (2022-09-08)

### Bug Fixes

-   ikonstørrelse i små containers ([e129ee6](https://github.com/fremtind/jokul/commit/e129ee62e14232169ae54326f296933919fe6f92))
-   ikonstørrelse kompakt alertmessage ([88fee9b](https://github.com/fremtind/jokul/commit/88fee9b07bbe8adf925efb7e7268b6b305f26b0e))

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))
-   kompakt alert message ([33e249d](https://github.com/fremtind/jokul/commit/33e249d3c99cfa97333d25d50bedff9e36ef29e9))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"

# [6.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-alert-message@5.0.23...@fremtind/jkl-alert-message@6.0.0) (2022-06-07)

### Code Refactoring

-   oppdater til nyeste core ([1db381f](https://github.com/fremtind/jokul/commit/1db381fdc0d3f1c35818d2feec49977331cd2fad))
-   skriv og følg stilguiden for Sass i Jøkul ([1cc52a4](https://github.com/fremtind/jokul/commit/1cc52a4dea6af592ed48c45b38bc4fee07a749ae))

### Features

-   legg til en index-fil for Sass ([c4f8d0c](https://github.com/fremtind/jokul/commit/c4f8d0cd31bcab0706a49be1bdf0214fbbbbf646))

### BREAKING CHANGES

-   Sass-variabler, mixins og CSS-animasjoner fra pakker annet enn core er gjort private
-   Avhenger av ny majorversjon av core

## [5.0.20](https://github.com/fremtind/jokul/compare/@fremtind/jkl-alert-message@5.0.19...@fremtind/jkl-alert-message@5.0.20) (2022-04-19)

### Bug Fixes

-   bruk fallbackfarger for AlertMessage SVGer ([5ce4131](https://github.com/fremtind/jokul/commit/5ce41314d369a57c5a0f878812918e3b97fd51fc))
-   gjør alert-message tilgjengelig i forced-colors ([85d84e1](https://github.com/fremtind/jokul/commit/85d84e171ec72e9fdb80e361dedb5f04467c7124))
-   skriv om svgmixin etter å ha sett Icons ([093e5ec](https://github.com/fremtind/jokul/commit/093e5ec2e71e5819e68ee2383463096185f9c1f3))
-   tag i forced-colors ([d67839d](https://github.com/fremtind/jokul/commit/d67839d13b5966c17241126c5f943bc0c7eeed15))

## 5.0.10 (2022-02-07)

### Bug Fixes

-   manuell delinting sans descending specificity ([20de1c8](https://github.com/fremtind/jokul/commit/20de1c8811596b054867352177225fd197c70797))

## 5.0.0 (2021-10-21)

### Features

-   use new spacing scale ([5694495](https://github.com/fremtind/jokul/commit/5694495f56d3c1f0e675433b35cfb0e693b93a82)), closes [#2382](https://github.com/fremtind/jokul/issues/2382)

### BREAKING CHANGES

-   new spacing scale: see migration guide for jkl-core

## 4.1.0 (2021-10-13)

### Features

-   implement new alert message design ([657861c](https://github.com/fremtind/jokul/commit/657861ccdd0789b7935357cb8dd5a9fdbe2ecc3d))

## 4.0.0 (2021-07-09)

### chore

-   bump major version ([255a776](https://github.com/fremtind/jokul/commit/255a776d45a068645124499b870ecefec9d87f0e))

### BREAKING CHANGES

-   Depends on jkl-core-version with breaking changes

## 3.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### Features

-   **alert-message:** add automatic dark mode ([4a184b7](https://github.com/fremtind/jokul/commit/4a184b795a1ebb3493cf6688ea317b4aa54afd85))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 2.0.0 (2021-06-07)

### Features

-   new colors ([9144947](https://github.com/fremtind/jokul/commit/9144947766c73fbe5eaac3372495006e3b89dec7))

### BREAKING CHANGES

-   all color variables are changed

## 1.3.0 (2021-03-05)

### Features

-   add close button to alert messages ([71e6438](https://github.com/fremtind/jokul/commit/71e6438b3a4532eac238fc6f207bbf75f26cd467))

## 1.2.4 (2020-09-21)

### Bug Fixes

-   fix a bug where alert-message would go outside screen bounds ([db41eba](https://github.com/fremtind/jokul/commit/db41ebae9406ada218feed0b57f8ce2d35cee990))

## 1.2.0 (2020-09-01)

### Features

-   implement global dark mode ([47b8e2d](https://github.com/fremtind/jokul/commit/47b8e2dc0abcd366212fc67f306f8523a63d11c8))

## 1.1.0 (2020-05-15)

### Features

-   **alert-message:** rename and split messages package ([11373ac](https://github.com/fremtind/jokul/commit/11373ac88cbfc5ed2604846c742e8a05f8c0561d))
