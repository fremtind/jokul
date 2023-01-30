# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-icon-button-react@2.0.19...@fremtind/jkl-icon-button-react@3.0.0) (2023-01-30)

### Features

- åpne for bruk av ikoner fra icons-react i icon-button ([e6ec85f](https://github.com/fremtind/jokul/commit/e6ec85f5e8871751459cf9fa8303c9fad6759723))
- bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))

### BREAKING CHANGES

- Avhenger av en versjon av jkl-core med breaking changes
- Krever nå at du sender inn en ikonkomponent som children. ButtonTitle er renamet til bare title.

## [2.0.15](https://github.com/fremtind/jokul/compare/@fremtind/jkl-icon-button-react@2.0.14...@fremtind/jkl-icon-button-react@2.0.15) (2022-11-28)

### Bug Fixes

-   fikset bug der jøkul sitt className var forsvunnet ([16d7533](https://github.com/fremtind/jokul/commit/16d753307156470f73b196175e0d63043e0f8f85))

## 2.0.14 (2022-11-28)

### Bug Fixes

-   gjør at custom className ikke overrider default className ([6ed60c6](https://github.com/fremtind/jokul/commit/6ed60c6cce16d1e1423d8e509585941c81a9fec0))

## 2.0.12 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

## 2.0.9 (2022-11-11)

### Bug Fixes

-   legg til manglende dependencies internt mellom pakker ([761936f](https://github.com/fremtind/jokul/commit/761936ff2ecdf7338dcddb7f33e984f229cef48b)), closes [#3232](https://github.com/fremtind/jokul/issues/3232)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## 2.0.8 (2022-11-09)

### Bug Fixes

-   legg til manglende dependencies internt mellom pakker ([761936f](https://github.com/fremtind/jokul/commit/761936ff2ecdf7338dcddb7f33e984f229cef48b)), closes [#3232](https://github.com/fremtind/jokul/issues/3232)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

# 2.0.0 (2022-09-08)

### Bug Fixes

-   regresjon i høykontrastmodus hvor ikonet forsvant ([d8ce2e3](https://github.com/fremtind/jokul/commit/d8ce2e37a7ee6f499c88a0c602d8ecc4a7a1097f))

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))
-   kompaktvariant av ikonknapp ([56f5e51](https://github.com/fremtind/jokul/commit/56f5e5102f4d2d9af46df39eb91f34701a2e3032))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"

## [1.0.4](https://github.com/fremtind/jokul/compare/@fremtind/jkl-icon-button-react@1.0.3...@fremtind/jkl-icon-button-react@1.0.4) (2022-06-13)

### Bug Fixes

-   merk CSS og SCSS som side-effects ([dac2e2b](https://github.com/fremtind/jokul/commit/dac2e2b5f4d1b31485821bf6ad8ec4c7c2769cca))

### Performance Improvements

-   bruk tiny-glob for globbing av filer under bygg ([246952a](https://github.com/fremtind/jokul/commit/246952ae75afe20bcf0d007a0a068b76b114f9a6))

## [1.0.2](https://github.com/fremtind/jokul/compare/@fremtind/jkl-icon-button-react@1.0.1...@fremtind/jkl-icon-button-react@1.0.2) (2022-06-08)

### Bug Fixes

-   rett opp de siste gamle internavhengighetene ([ba82a0e](https://github.com/fremtind/jokul/commit/ba82a0ee6cdccf20e41924e09f6949bf4e2bdd47))

## 1.0.1 (2022-06-07)

### Bug Fixes

-   rett opp avhengighet av icon-button ([d179921](https://github.com/fremtind/jokul/commit/d1799213a7859e3e72d4aecc69a74f7c6b399d54))

# [1.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-icon-button-react@0.8.25...@fremtind/jkl-icon-button-react@1.0.0) (2022-06-07)

### chore

-   fiks lintfeil ([4093d2a](https://github.com/fremtind/jokul/commit/4093d2a2ae7bbe0d30de882b9f5d144e8e77cede))

### BREAKING CHANGES

-   Pakken avhenger av en breaking versjon av core

## [0.8.27](https://github.com/fremtind/jokul/compare/@fremtind/jkl-icon-button-react@0.8.26...@fremtind/jkl-icon-button-react@0.8.27) (2022-06-02)

### Bug Fixes

-   flytt fokus tilbake til iconbutton ved tab, docs ([ff605b5](https://github.com/fremtind/jokul/commit/ff605b5db03e2ced89d477f1997f927097e2bc36))

## 0.8.15 (2022-03-10)

### Bug Fixes

-   bruk den riktige genericen per type ([a8e8802](https://github.com/fremtind/jokul/commit/a8e88028c66379c3fac2cd10ae0478aadd1d5392))

## 0.8.0 (2021-12-14)

### Features

-   eksporter typer for ikonknappkomponenten ([270778e](https://github.com/fremtind/jokul/commit/270778e3b6f7bc97ac7b465b683ae5323e5e4b17))

## 0.7.0 (2021-10-21)

### chore

-   updates dependencies ([b975200](https://github.com/fremtind/jokul/commit/b97520045c02e4bcb44ebde159c60a7dff7f01d6))

### BREAKING CHANGES

-   depends on jkl-core v8 with breaking changes

## 0.6.0 (2021-07-09)

### chore

-   bump major version ([255a776](https://github.com/fremtind/jokul/commit/255a776d45a068645124499b870ecefec9d87f0e))

### BREAKING CHANGES

-   Depends on jkl-core-version with breaking changes

## 0.5.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 0.4.8 (2021-02-12)

### Bug Fixes

-   add react 17 types as valid peerdep ([a074c34](https://github.com/fremtind/jokul/commit/a074c34dcece089ad6b4c581b8c920c8bdd4f1e0))

## 0.4.0 (2020-11-25)

### Features

-   update to react 17 ([4639058](https://github.com/fremtind/jokul/commit/4639058067eaa9be222825f8ac4f495a1e74cc0f))

## 0.3.0 (2020-07-29)

### Features

-   **build:** use @babel/runtime instead of inlining helpers in each file ([bbadce5](https://github.com/fremtind/jokul/commit/bbadce52ba4da5d540b479b07273332587bed436)), closes [#1136](https://github.com/fremtind/jokul/issues/1136)

## 0.2.0 (2020-03-30)

### Bug Fixes

-   **icon-button:** fix lint issues ([1bf604c](https://github.com/fremtind/jokul/commit/1bf604cc94e77e24ba9f17c44de06575e4459b4a))
-   **icon-button-react:** edit page title ([c923a08](https://github.com/fremtind/jokul/commit/c923a08865d9e6c8fb5479df107a74a902f232c2))
-   **icon-button-react:** fix IconVariant reference ([776a6d5](https://github.com/fremtind/jokul/commit/776a6d5a6fcc426d457ee96fd19a1393a1661786))
-   **icon-button-react:** fix lint errors ([96c4955](https://github.com/fremtind/jokul/commit/96c495545e01e9ceb1f74d3d05f80add97d7dfe7))
-   **icon-button-react:** fix lint issue ([9ce50fb](https://github.com/fremtind/jokul/commit/9ce50fb49589df4fd8ebbbbe28e4187a4e71af8c))
-   **icon-button-react:** set dependency version to 0.1.0 ([7b9c214](https://github.com/fremtind/jokul/commit/7b9c2146bc8bd7916b734f2b8181b2fa59cdaade))
-   **icon-button-react:** use default value on iconType ([935a894](https://github.com/fremtind/jokul/commit/935a89416696ada8cdc28b1593056be9cb559c10))

### Features

-   **icon-button-react:** add CalendarIcon ([3a74e0c](https://github.com/fremtind/jokul/commit/3a74e0cb44640d386dc9e1012e7ccbe3ae84c1e0))
-   **icon-button-react:** extend component with onClick ([7d200ad](https://github.com/fremtind/jokul/commit/7d200adf483361bfee394d9a10997f9b0b5818b6))
-   **icon-button-react:** extend props interface ([e7fbd20](https://github.com/fremtind/jokul/commit/e7fbd20c2c43f4d9e45aadb665fcd1138c85c2ab))
-   **icon-button-react:** kick-off icon-button-react component ([216b3b8](https://github.com/fremtind/jokul/commit/216b3b89c97501318324ce8e6cc9057871bfd83a))
-   **icon-button-react:** use choiceValues on example page ([319b438](https://github.com/fremtind/jokul/commit/319b43819227f934e0592a9f16bae9095aed6d99))
-   **icon-button-react:** wrap icon with button ([cddeeaf](https://github.com/fremtind/jokul/commit/cddeeafe5954678f6db37f404cbff0216685db4d))
