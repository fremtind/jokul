# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [11.0.17](https://github.com/fremtind/jokul/compare/@fremtind/jkl-cookie-consent@11.0.16...@fremtind/jkl-cookie-consent@11.0.17) (2024-09-04)

### Bug Fixes

- sass-rekkefølge i cookie-consent ([412e7b7](https://github.com/fremtind/jokul/commit/412e7b7b4fa06b3a7068e441e13650d6616f4944))

# 11.0.0 (2023-07-07)

### chore

- oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### Code Refactoring

- migrer vekk fra deprecated tilde-importer i Sass ([7ef2cf7](https://github.com/fremtind/jokul/commit/7ef2cf7a510122c69b2c5658c402f3dd9f5322f7)), closes [#3418](https://github.com/fremtind/jokul/issues/3418)

### BREAKING CHANGES

- Avhenger av ny majorversjon av core
- Tilde-prefikset er fjernet i all Sass-kode. Avhengig av oppsettet ditt kan det hende du
ikke trenger gjøre noe. Om bygget ditt brekker, konfigurer Sass sin loadPaths så den
inkluderer node_modules.

## 10.0.3 (2023-03-21)

### Bug Fixes

- sett charset i CSS-filene som genereres ([7346cb8](https://github.com/fremtind/jokul/commit/7346cb8644dd4b99bf0ae4d11c78a967b7b01618)), closes [#3467](https://github.com/fremtind/jokul/issues/3467)

# 10.0.0 (2023-01-30)

### Features

- bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))

### BREAKING CHANGES

- Avhenger av en versjon av jkl-core med breaking changes

## 9.0.9 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

## 9.0.4 (2022-10-26)

### Bug Fixes

-   hindre automatisk scrolling når modal åpnes ([37da950](https://github.com/fremtind/jokul/commit/37da950cc980530f1ffdaa387568ba8e9d6ece57))

# [8.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-cookie-consent@6.0.15...@fremtind/jkl-cookie-consent@8.0.0) (2022-06-08)

### chore

-   merk endring i klassenavn som breaking ([b6ac7a7](https://github.com/fremtind/jokul/commit/b6ac7a7d71eec57282dd9987f7a49b554350e505))

### BREAKING CHANGES

-   Modalen har fått nye klassenavn. Se React-pakken for referanseimplementasjon.

# [7.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-cookie-consent@6.0.13...@fremtind/jkl-cookie-consent@7.0.0) (2022-06-07)

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

## [6.0.10](https://github.com/fremtind/jokul/compare/@fremtind/jkl-cookie-consent@6.0.9...@fremtind/jkl-cookie-consent@6.0.10) (2022-04-19)

### Bug Fixes

-   gi modal en border for økt kontrast ([82a1258](https://github.com/fremtind/jokul/commit/82a1258f21bfbda643b4ed3abac8c0ff239bf710))

# 6.0.0 (2022-02-07)

### Bug Fixes

-   fjern inverted-prop ([de5f8b8](https://github.com/fremtind/jokul/commit/de5f8b83ae8f025826f4c56d3aeb5e081dea66cc)), closes [#2646](https://github.com/fremtind/jokul/issues/2646)

### BREAKING CHANGES

-   Fjernet `inverted`-prop. Bruk `data-theme="dark"` om du trenger overstyre temaet.

## 5.0.0 (2021-10-21)

### Features

-   use new spacing scale ([5694495](https://github.com/fremtind/jokul/commit/5694495f56d3c1f0e675433b35cfb0e693b93a82)), closes [#2382](https://github.com/fremtind/jokul/issues/2382)

### BREAKING CHANGES

-   new spacing scale: see migration guide for jkl-core

## 4.0.0 (2021-07-09)

### Features

-   use new typographic scale ([4678e44](https://github.com/fremtind/jokul/commit/4678e4443e7009c5fcde2bfeb977d119aed6895f))

### BREAKING CHANGES

-   Depends on jkl-core version with breaking changes

## 3.0.3 (2021-07-09)

### Bug Fixes

-   actually use correct bg in dark mode ([61ff028](https://github.com/fremtind/jokul/commit/61ff028f90962a3726ffbd4e84f53ade71d3e5aa))

## 3.0.2 (2021-07-09)

### Bug Fixes

-   **dark mode:** use correct bg-color in dark mode ([fbfb0f5](https://github.com/fremtind/jokul/commit/fbfb0f5d6d30cbce781d76877984a736b05d549c))

## 3.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 2.0.1 (2021-06-29)

### Bug Fixes

-   fix leaking styles from cookie consent ([7ff24c6](https://github.com/fremtind/jokul/commit/7ff24c6e54c3f41a6779fa450b8a84566eb58e60))

## 2.0.0 (2021-06-29)

### Bug Fixes

-   use variable from core in stead of static code ([8f0dda0](https://github.com/fremtind/jokul/commit/8f0dda010b7bc5cfda539fa79ba54947321bb006))
-   **cookie-consent:** fix styling syntax ([31c1334](https://github.com/fremtind/jokul/commit/31c13346b627fc11578bc65f1e02a8663834bdab))

### Features

-   mobile styling of modal ([ee6185d](https://github.com/fremtind/jokul/commit/ee6185d45ecafb46e5815d049cb8b9d473d39340))
-   **cookie-consent:** legg til ny cookie consent komponent ([0b98c81](https://github.com/fremtind/jokul/commit/0b98c81b85fff720aba27428ec673e07cf938b8f))
-   **cookie-consent:** oppdater styling for cookie-consent modal ([f72e625](https://github.com/fremtind/jokul/commit/f72e6250f6b6a596f2f631ebdc664a524ae70a66))

### BREAKING CHANGES

-   **cookie-consent:** ny cookie-consent komponent
