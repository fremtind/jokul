# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 8.0.0 (2023-07-07)

### chore

- oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### Code Refactoring

- migrer vekk fra deprecated tilde-importer i Sass ([7ef2cf7](https://github.com/fremtind/jokul/commit/7ef2cf7a510122c69b2c5658c402f3dd9f5322f7)), closes [#3418](https://github.com/fremtind/jokul/issues/3418)

### BREAKING CHANGES

- Avhenger av ny majorversjon av core
- Tilde-prefikset er fjernet i all Sass-kode. Avhengig av oppsettet ditt kan det hende du
ikke trenger gjøre noe. Om bygget ditt brekker, konfigurer Sass sin loadPaths så den
inkluderer node_modules.

## 7.0.3 (2023-03-21)

### Bug Fixes

- sett charset i CSS-filene som genereres ([7346cb8](https://github.com/fremtind/jokul/commit/7346cb8644dd4b99bf0ae4d11c78a967b7b01618)), closes [#3467](https://github.com/fremtind/jokul/issues/3467)

# 7.0.0 (2023-01-30)

### Features

- bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))

### BREAKING CHANGES

- Avhenger av en versjon av jkl-core med breaking changes

## 6.0.8 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

# [5.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-description-list@4.0.23...@fremtind/jkl-description-list@5.0.0) (2022-06-07)

### Code Refactoring

-   oppdater til nyeste core ([1db381f](https://github.com/fremtind/jokul/commit/1db381fdc0d3f1c35818d2feec49977331cd2fad))
-   skriv og følg stilguiden for Sass i Jøkul ([1cc52a4](https://github.com/fremtind/jokul/commit/1cc52a4dea6af592ed48c45b38bc4fee07a749ae))

### Features

-   legg til en index-fil for Sass ([c4f8d0c](https://github.com/fremtind/jokul/commit/c4f8d0cd31bcab0706a49be1bdf0214fbbbbf646))

### BREAKING CHANGES

-   Sass-variabler, mixins og CSS-animasjoner fra pakker annet enn core er gjort private
-   Avhenger av ny majorversjon av core

## 4.0.10 (2022-02-07)

### Bug Fixes

-   manuell delinting sans descending specificity ([20de1c8](https://github.com/fremtind/jokul/commit/20de1c8811596b054867352177225fd197c70797))

## 4.0.0 (2021-10-21)

### Features

-   use new spacing scale ([5694495](https://github.com/fremtind/jokul/commit/5694495f56d3c1f0e675433b35cfb0e693b93a82)), closes [#2382](https://github.com/fremtind/jokul/issues/2382)

### BREAKING CHANGES

-   new spacing scale: see migration guide for jkl-core

## 3.0.0 (2021-07-09)

### Features

-   use new typographic variables ([835706e](https://github.com/fremtind/jokul/commit/835706e0e706608b0c553cf5d79151d564708f75))

### BREAKING CHANGES

-   Depends on jkl-core version with breaking changes

## 2.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 1.1.0 (2021-06-24)

### Features

-   **@fremtind/jkl-description-list @fremtind/jkl-description-list-react:** new component: Descriptio ([6006c1e](https://github.com/fremtind/jokul/commit/6006c1e89cfa1a5ef016a5f4385cae6df97d9a62))
