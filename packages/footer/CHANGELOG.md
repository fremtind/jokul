# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 5.0.1 (2023-03-21)

### Bug Fixes

- sett charset i CSS-filene som genereres ([7346cb8](https://github.com/fremtind/jokul/commit/7346cb8644dd4b99bf0ae4d11c78a967b7b01618)), closes [#3467](https://github.com/fremtind/jokul/issues/3467)

# 5.0.0 (2023-02-23)

### Bug Fixes

-   links now have body/small-screen ([8a96e23](https://github.com/fremtind/jokul/commit/8a96e2355a5818703a2f9b4ba4bdd7e443da4e83))
-   style adjustment ([465a9a4](https://github.com/fremtind/jokul/commit/465a9a4d812ab10eb4025b8dcf8572fe7b0eeb0c))

### Features

-   new contact-information component ([7ce002e](https://github.com/fremtind/jokul/commit/7ce002e7c0506a4b2eea6c21a98ab39e02a568b4))
-   new footer design ([da47a8d](https://github.com/fremtind/jokul/commit/da47a8dc48ea0b3417cd38501ecdeb4167751932))
-   started on new footer ([03af268](https://github.com/fremtind/jokul/commit/03af268ae3c51ca3f1bcd5d14bf7c4de00653ea8))

### BREAKING CHANGES

-   new api for footer component

# 4.0.0 (2023-01-30)

### Features

-   bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))

### BREAKING CHANGES

-   Avhenger av en versjon av jkl-core med breaking changes

## 3.0.8 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

# 3.0.0 (2022-09-08)

### Bug Fixes

-   arv typografi fra omgivelsene ([81afe8c](https://github.com/fremtind/jokul/commit/81afe8c76ede4b56c06b00390a6db5ec6958e478))
-   ikke sett likhetstegn mellom kompakt og kolonnelayout i footer ([f693788](https://github.com/fremtind/jokul/commit/f693788c96290e26d665cb9a3c2b8b0f41a71ab6))

# [2.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-footer@1.0.6...@fremtind/jkl-footer@2.0.0) (2022-06-07)

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

# 1.0.0 (2022-03-14)

### Features

-   ny footerkomponent ([13fc85a](https://github.com/fremtind/jokul/commit/13fc85ae2969f42c3197a03410fb6cdaaa70c624))
