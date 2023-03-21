# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 4.0.3 (2023-03-21)

### Bug Fixes

- sett charset i CSS-filene som genereres ([7346cb8](https://github.com/fremtind/jokul/commit/7346cb8644dd4b99bf0ae4d11c78a967b7b01618)), closes [#3467](https://github.com/fremtind/jokul/issues/3467)

# 4.0.0 (2023-01-30)

### Features

- bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))

### BREAKING CHANGES

- Avhenger av en versjon av jkl-core med breaking changes

# 3.1.0 (2022-12-06)

### Features

-   nye fanekomponenter basert på lenker og URLer ([3f69586](https://github.com/fremtind/jokul/commit/3f695860aaf8ff98c8a95af5dfb9bad35725dd9a))

## 3.0.8 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

# 3.0.0 (2022-09-08)

### Bug Fixes

-   juster plassering av fokusring i faneliste ([6110217](https://github.com/fremtind/jokul/commit/61102177f2308e82e2f3b4fc5967cd8750fa9d76))
-   legg til litt padding på compact tabs ([ebb838e](https://github.com/fremtind/jokul/commit/ebb838e564c26010c7e26bbd378c8da1a86e6535))

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))
-   nytt kompaktdesign for tabs ([eee6e72](https://github.com/fremtind/jokul/commit/eee6e726c5a45ccd666d18915c90ecba9130b5b2))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"

# [2.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-tabs@1.2.20...@fremtind/jkl-tabs@2.0.0) (2022-06-07)

### Code Refactoring

-   oppdater til nyeste core ([1db381f](https://github.com/fremtind/jokul/commit/1db381fdc0d3f1c35818d2feec49977331cd2fad))
-   prefiks CSS-variabler med jkl ([500ee0e](https://github.com/fremtind/jokul/commit/500ee0e1050de94d8cda07fb423c33837fbf2faa))

### Features

-   legg til en index-fil for Sass ([c4f8d0c](https://github.com/fremtind/jokul/commit/c4f8d0cd31bcab0706a49be1bdf0214fbbbbf646))

### BREAKING CHANGES

-   Alle CSS-variabler har jkl-prefix
-   Avhenger av ny majorversjon av core

## [1.2.17](https://github.com/fremtind/jokul/compare/@fremtind/jkl-tabs@1.2.16...@fremtind/jkl-tabs@1.2.17) (2022-04-19)

### Bug Fixes

-   bruk revert i stedet for unset ([300e808](https://github.com/fremtind/jokul/commit/300e8086b4a88e37407dadaf747d714d69919cdd))
-   tabs i forced-colors ([8e96916](https://github.com/fremtind/jokul/commit/8e969160a2f0183755f61f58c5794d056bcea120))
-   typo ([4323f22](https://github.com/fremtind/jokul/commit/4323f225f878d0aa9bc8b13d8a6f1ff4dbce1cb8))
-   unset border og outline i forced-colors ([648c7cd](https://github.com/fremtind/jokul/commit/648c7cdd30805dc6e6dc74b3e12d7b20b2ff5cec))

## 1.2.7 (2022-02-07)

### Bug Fixes

-   manuell delinting sans descending specificity ([20de1c8](https://github.com/fremtind/jokul/commit/20de1c8811596b054867352177225fd197c70797))

## 1.2.0 (2021-11-26)

### Features

-   alter Tabs styling ([f9f24be](https://github.com/fremtind/jokul/commit/f9f24beb4ea942bb83ba10089b915c364a95cf8c))

## 1.1.0 (2021-11-09)

### Bug Fixes

-   tabs package.json ([7b7ec96](https://github.com/fremtind/jokul/commit/7b7ec96d826dfa47b7cea12c40591205a8984b3d))

### Features

-   legg til Tabs komponent ([b7f31f8](https://github.com/fremtind/jokul/commit/b7f31f82106d02b9a4a4ce28f3124908e4b249ec))
