# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 3.0.3 (2023-03-21)

### Bug Fixes

- sett charset i CSS-filene som genereres ([7346cb8](https://github.com/fremtind/jokul/commit/7346cb8644dd4b99bf0ae4d11c78a967b7b01618)), closes [#3467](https://github.com/fremtind/jokul/issues/3467)

# 3.0.0 (2023-01-30)

### Features

- åpne for bruk av ikoner fra icons-react i icon-button ([e6ec85f](https://github.com/fremtind/jokul/commit/e6ec85f5e8871751459cf9fa8303c9fad6759723))
- bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))

### BREAKING CHANGES

- Avhenger av en versjon av jkl-core med breaking changes
- Krever nå at du sender inn en ikonkomponent som children. ButtonTitle er renamet til bare title.

## 2.0.8 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

# 2.0.0 (2022-09-08)

### Bug Fixes

-   regresjon i høykontrastmodus hvor ikonet forsvant ([d8ce2e3](https://github.com/fremtind/jokul/commit/d8ce2e37a7ee6f499c88a0c602d8ecc4a7a1097f))

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))
-   kompaktvariant av ikonknapp ([56f5e51](https://github.com/fremtind/jokul/commit/56f5e5102f4d2d9af46df39eb91f34701a2e3032))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"

## [1.0.9](https://github.com/fremtind/jokul/compare/@fremtind/jkl-icon-button@1.0.8...@fremtind/jkl-icon-button@1.0.9) (2022-07-29)

### Bug Fixes

-   hover- og fokusindikator for ikonknapp ([14e7885](https://github.com/fremtind/jokul/commit/14e788540d208fee690c075a4a7a322ba16dc5cb))

# [1.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-icon-button@0.5.23...@fremtind/jkl-icon-button@1.0.0) (2022-06-07)

### chore

-   fiks lintfeil ([4093d2a](https://github.com/fremtind/jokul/commit/4093d2a2ae7bbe0d30de882b9f5d144e8e77cede))

### Code Refactoring

-   oppdater til nyeste core ([1db381f](https://github.com/fremtind/jokul/commit/1db381fdc0d3f1c35818d2feec49977331cd2fad))

### Features

-   legg til en index-fil for Sass ([c4f8d0c](https://github.com/fremtind/jokul/commit/c4f8d0cd31bcab0706a49be1bdf0214fbbbbf646))

### BREAKING CHANGES

-   Pakken avhenger av en breaking versjon av core
-   Avhenger av ny majorversjon av core

## [0.5.20](https://github.com/fremtind/jokul/compare/@fremtind/jkl-icon-button@0.5.19...@fremtind/jkl-icon-button@0.5.20) (2022-04-19)

### Bug Fixes

-   iconbutton textinput og textarea i forced-colors ([c605f0d](https://github.com/fremtind/jokul/commit/c605f0d174d726757975a39112fbda11af914b8e))
-   skriv om svgmixin etter å ha sett Icons ([093e5ec](https://github.com/fremtind/jokul/commit/093e5ec2e71e5819e68ee2383463096185f9c1f3))

## 0.5.10 (2022-02-07)

### Bug Fixes

-   manuell delinting sans descending specificity ([20de1c8](https://github.com/fremtind/jokul/commit/20de1c8811596b054867352177225fd197c70797))

## 0.5.0 (2021-10-21)

### chore

-   updates dependencies ([b975200](https://github.com/fremtind/jokul/commit/b97520045c02e4bcb44ebde159c60a7dff7f01d6))

### BREAKING CHANGES

-   depends on jkl-core v8 with breaking changes

## 0.4.0 (2021-07-09)

### chore

-   bump major version ([255a776](https://github.com/fremtind/jokul/commit/255a776d45a068645124499b870ecefec9d87f0e))

### BREAKING CHANGES

-   Depends on jkl-core-version with breaking changes

## 0.3.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 0.2.3 (2020-05-11)

### Bug Fixes

-   **icon-button:** specify height of icon to correct alignment ([e95e0e9](https://github.com/fremtind/jokul/commit/e95e0e9f3e9d9708b8b36788463aa52e3ef853fc))

## 0.2.0 (2020-03-30)

### Bug Fixes

-   **icon-button:** remove redundant scss import ([ad2837a](https://github.com/fremtind/jokul/commit/ad2837a1961b245219ae111dae36e2450dbbee88))
-   **icon-button:** use reset-outline mixin ([3c5fbdd](https://github.com/fremtind/jokul/commit/3c5fbdd4eab20a8410c47b09e3eccd9b7fc73318))

### Features

-   **icon-button:** add color inherit ([c03900e](https://github.com/fremtind/jokul/commit/c03900e9673d01a59242f74c77eee7a5da991490))
-   **icon-button:** kick-off icon-button component ([ac97b55](https://github.com/fremtind/jokul/commit/ac97b556a35b9cb4eddd08d4e308e7e69dee03e1))
-   **icon-button-react:** wrap icon with button ([cddeeaf](https://github.com/fremtind/jokul/commit/cddeeafe5954678f6db37f404cbff0216685db4d))
