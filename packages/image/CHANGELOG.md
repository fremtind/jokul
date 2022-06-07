# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-image@2.0.13...@fremtind/jkl-image@3.0.0) (2022-06-07)

### Code Refactoring

-   oppdater til nyeste core ([1db381f](https://github.com/fremtind/jokul/commit/1db381fdc0d3f1c35818d2feec49977331cd2fad))

### Features

-   legg til en index-fil for Sass ([c4f8d0c](https://github.com/fremtind/jokul/commit/c4f8d0cd31bcab0706a49be1bdf0214fbbbbf646))

### BREAKING CHANGES

-   Avhenger av ny majorversjon av core

# [2.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-image@0.6.0...@fremtind/jkl-image@2.0.0) (2022-02-07)

### Features

-   ny og forbedret Image-komponent ([fc6db8f](https://github.com/fremtind/jokul/commit/fc6db8fa115799b39a38150524a743805ac1771d))

### BREAKING CHANGES

-   Nytt API

# 0.6.0 (2022-02-07)

### Bug Fixes

-   fjern inverted-prop ([de5f8b8](https://github.com/fremtind/jokul/commit/de5f8b83ae8f025826f4c56d3aeb5e081dea66cc)), closes [#2646](https://github.com/fremtind/jokul/issues/2646)
-   manuell delinting sans descending specificity ([20de1c8](https://github.com/fremtind/jokul/commit/20de1c8811596b054867352177225fd197c70797))

### BREAKING CHANGES

-   Fjernet `inverted`-prop. Bruk `data-theme="dark"` om du trenger overstyre temaet.

## 0.5.0 (2021-10-21)

### Features

-   use new spacing scale ([5694495](https://github.com/fremtind/jokul/commit/5694495f56d3c1f0e675433b35cfb0e693b93a82)), closes [#2382](https://github.com/fremtind/jokul/issues/2382)

### BREAKING CHANGES

-   new spacing scale: see migration guide for jkl-core

## 0.4.0 (2021-07-09)

### chore

-   bump major version ([255a776](https://github.com/fremtind/jokul/commit/255a776d45a068645124499b870ecefec9d87f0e))

### BREAKING CHANGES

-   Depends on jkl-core-version with breaking changes

## 0.3.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### Features

-   **image:** add automatic dark mode ([b86299f](https://github.com/fremtind/jokul/commit/b86299f38ea238c5c3f8fff67346b8b25c389165))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 0.2.0 (2021-06-07)

### Features

-   new colors ([9144947](https://github.com/fremtind/jokul/commit/9144947766c73fbe5eaac3372495006e3b89dec7))

### BREAKING CHANGES

-   all color variables are changed

## 0.1.3 (2020-10-26)

### Bug Fixes

-   **image:** fixes issue where loader color were overwitten ([04be8f0](https://github.com/fremtind/jokul/commit/04be8f07c4bbfffea237e28774cdff85ec4b007b)), closes [#1481](https://github.com/fremtind/jokul/issues/1481)

## 0.1.0 (2020-10-07)

### Features

-   **image:** add image component ([8e99f33](https://github.com/fremtind/jokul/commit/8e99f33a12f2e598aff8a15eabe230ea666f0cbd))
