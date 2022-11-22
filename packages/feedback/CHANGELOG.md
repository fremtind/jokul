# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 11.0.8 (2022-11-22)

### Bug Fixes

- fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

# [10.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-feedback@9.0.13...@fremtind/jkl-feedback@10.0.0) (2022-06-07)

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

## [9.0.10](https://github.com/fremtind/jokul/compare/@fremtind/jkl-feedback@9.0.9...@fremtind/jkl-feedback@9.0.10) (2022-04-19)

### Bug Fixes

-   feedback i forced-colors ([087365f](https://github.com/fremtind/jokul/commit/087365f79f39d8aaceb611de7c0bc51406ce448f))
-   skriv om svgmixin etter å ha sett Icons ([093e5ec](https://github.com/fremtind/jokul/commit/093e5ec2e71e5819e68ee2383463096185f9c1f3))

# 9.0.0 (2022-02-07)

### Bug Fixes

-   fjern inverted-prop ([de5f8b8](https://github.com/fremtind/jokul/commit/de5f8b83ae8f025826f4c56d3aeb5e081dea66cc)), closes [#2646](https://github.com/fremtind/jokul/issues/2646)
-   manuell delinting sans descending specificity ([20de1c8](https://github.com/fremtind/jokul/commit/20de1c8811596b054867352177225fd197c70797))

### BREAKING CHANGES

-   Fjernet `inverted`-prop. Bruk `data-theme="dark"` om du trenger overstyre temaet.

## 8.1.0 (2021-11-26)

### Features

-   legg til spørsmålstype med smileys ([f176c48](https://github.com/fremtind/jokul/commit/f176c48fb8f20b71b623919d75934082eead8e70))
-   **smileys:** juster utseende og mobilvisning ([f7799d3](https://github.com/fremtind/jokul/commit/f7799d3bf5c907dfc0efe7cdae3edd5ecc8b623a))

## 8.0.0 (2021-10-21)

### Features

-   use new spacing scale ([5694495](https://github.com/fremtind/jokul/commit/5694495f56d3c1f0e675433b35cfb0e693b93a82)), closes [#2382](https://github.com/fremtind/jokul/issues/2382)

### BREAKING CHANGES

-   new spacing scale: see migration guide for jkl-core

## 7.0.0 (2021-09-15)

### Features

-   new feedback component with followup questions ([998eb30](https://github.com/fremtind/jokul/commit/998eb3045270d42b3bc97c143bdae12714d1b6d0))

### BREAKING CHANGES

-   Partially new API for the component

## 6.0.0 (2021-07-09)

### Features

-   use new typographic scale ([8a2a691](https://github.com/fremtind/jokul/commit/8a2a691122a0c5a809429b1bdc2a4fea9eb8c258))

### BREAKING CHANGES

-   Depends on jkl-core version with breaking changes

## 5.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### Features

-   **feedback:** add automatic dark mode ([dfabd8b](https://github.com/fremtind/jokul/commit/dfabd8b74e3814e88231e0aedf196ab9605e08ac))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 4.0.0 (2021-06-07)

### Features

-   new colors ([9144947](https://github.com/fremtind/jokul/commit/9144947766c73fbe5eaac3372495006e3b89dec7))

### BREAKING CHANGES

-   all color variables are changed

## 3.0.1 (2021-05-26)

### Bug Fixes

-   restore keyboard focus indication ([c203d26](https://github.com/fremtind/jokul/commit/c203d268a60ff73ae1ccbf54bca9106d6bb1e659))

## 3.0.0 (2021-03-12)

### Features

-   **feedback:** allow customizable feedback prompt ([97562df](https://github.com/fremtind/jokul/commit/97562dffe631af093be15b58ac30e4cdcc17eca3))

### BREAKING CHANGES

-   **feedback:** changed HTML structure

## 2.0.0 (2021-02-08)

### Features

-   **feedback:** added wrapper, add test ([092e7b6](https://github.com/fremtind/jokul/commit/092e7b67b118b5da1a841857180d9d2d743d52ac))

### BREAKING CHANGES

-   **feedback:** ADDED WRAPPER

## 1.2.0 (2021-02-02)

### Features

-   **feedback:** add custom result option ([11baba1](https://github.com/fremtind/jokul/commit/11baba177b00fc782568bec090842e541f26d375))

## 1.1.1 (2020-10-27)

### Bug Fixes

-   default to lighttheme ([85558e6](https://github.com/fremtind/jokul/commit/85558e6b61b92b765991f331eb9d3f089c02728e))

## 1.1.0 (2020-10-27)

### Features

-   **feedback:** initial feedback component ([9757a73](https://github.com/fremtind/jokul/commit/9757a730b5686ba2a437f3163411835669443a64)), closes [#1490](https://github.com/fremtind/jokul/issues/1490)
