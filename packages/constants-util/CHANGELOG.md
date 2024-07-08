# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.0.62-alpha.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-constants-util@3.0.61...@fremtind/jkl-constants-util@3.0.62-alpha.0) (2024-08-26)

**Note:** Version bump only for package @fremtind/jkl-constants-util

# 3.0.0 (2023-07-07)

### chore

-   oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### Code Refactoring

-   migrer vekk fra deprecated tilde-importer i Sass ([7ef2cf7](https://github.com/fremtind/jokul/commit/7ef2cf7a510122c69b2c5658c402f3dd9f5322f7)), closes [#3418](https://github.com/fremtind/jokul/issues/3418)

### BREAKING CHANGES

-   Avhenger av ny majorversjon av core
-   Tilde-prefikset er fjernet i all Sass-kode. Avhengig av oppsettet ditt kan det hende du
    ikke trenger gjøre noe. Om bygget ditt brekker, konfigurer Sass sin loadPaths så den
    inkluderer node_modules.

# [2.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-constants-util@1.0.16...@fremtind/jkl-constants-util@2.0.0) (2023-01-30)

### Features

-   bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))

### BREAKING CHANGES

-   Avhenger av en versjon av jkl-core med breaking changes

## 1.0.7 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

## 1.0.4 (2022-11-11)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## 1.0.3 (2022-11-09)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## 1.0.1 (2022-06-13)

### Bug Fixes

-   merk CSS og SCSS som side-effects ([dac2e2b](https://github.com/fremtind/jokul/commit/dac2e2b5f4d1b31485821bf6ad8ec4c7c2769cca))

### Performance Improvements

-   bruk tiny-glob for globbing av filer under bygg ([246952a](https://github.com/fremtind/jokul/commit/246952ae75afe20bcf0d007a0a068b76b114f9a6))

# 1.0.0 (2022-06-07)

### Bug Fixes

-   lintfeil i constants formatters og hooks ([7385058](https://github.com/fremtind/jokul/commit/738505863844b9ec6a4bd24957aa24e714dae06f))

### chore

-   promoter pakken til versjon 1.0.0 ([2de060f](https://github.com/fremtind/jokul/commit/2de060fa5c1f37347d1425a3d203b139cd39fc78))

### Code Refactoring

-   oppdater til nyeste core ([1db381f](https://github.com/fremtind/jokul/commit/1db381fdc0d3f1c35818d2feec49977331cd2fad))

### BREAKING CHANGES

-   Ingen faktisk breaking change.
-   Avhenger av ny majorversjon av core

## 0.4.4 (2022-04-08)

### Bug Fixes

-   småtrøbbel med test og typesjekk ([b1b1bc3](https://github.com/fremtind/jokul/commit/b1b1bc3eeb0fade11f8c19d9c1d6170ad808ef6d))

# 0.4.0 (2022-02-07)

### Bug Fixes

-   manuell delinting sans descending specificity ([20de1c8](https://github.com/fremtind/jokul/commit/20de1c8811596b054867352177225fd197c70797))

### chore

-   fjern ubrukt emoji ([23dea40](https://github.com/fremtind/jokul/commit/23dea4061330c480a2452583ba4623a71fc72879))

### BREAKING CHANGES

-   Om du brukte PILE_OF_POO får du legge til denne selv :D

# 0.3.0 (2022-02-02)

### Features

-   **constants:** add zero-width space unicode constant ([2e4c638](https://github.com/fremtind/jokul/commit/2e4c638aa2f2c8cbf6da971a0e7070ffd46151cb))

## 0.2.0 (2020-11-02)

### Features

-   add more arrows ([e69800c](https://github.com/fremtind/jokul/commit/e69800cc12df295c7b8bf49eae9b8f72a2e9e2b0))

## 0.1.0 (2020-10-29)

### Features

-   **constants:** add constants package ([6d7e508](https://github.com/fremtind/jokul/commit/6d7e50869f0061ad7d41329e709eac317dcb8a8b)), closes [#1499](https://github.com/fremtind/jokul/issues/1499)
