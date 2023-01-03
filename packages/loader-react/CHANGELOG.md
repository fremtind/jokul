# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 10.0.11 (2023-01-03)

### Bug Fixes

- rett opp i feil bruk av aria-label i Loader ([2a0b40e](https://github.com/fremtind/jokul/commit/2a0b40e8e79d2f661df2f8f9caf4e31f8dbec0f7))

## 10.0.9 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

## [10.0.6](https://github.com/fremtind/jokul/compare/@fremtind/jkl-loader-react@10.0.4...@fremtind/jkl-loader-react@10.0.6) (2022-11-11)

### Bug Fixes

-   legg til manglende dependencies internt mellom pakker ([761936f](https://github.com/fremtind/jokul/commit/761936ff2ecdf7338dcddb7f33e984f229cef48b)), closes [#3232](https://github.com/fremtind/jokul/issues/3232)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## [10.0.5](https://github.com/fremtind/jokul/compare/@fremtind/jkl-loader-react@10.0.4...@fremtind/jkl-loader-react@10.0.5) (2022-11-09)

### Bug Fixes

-   legg til manglende dependencies internt mellom pakker ([761936f](https://github.com/fremtind/jokul/commit/761936ff2ecdf7338dcddb7f33e984f229cef48b)), closes [#3232](https://github.com/fremtind/jokul/issues/3232)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## [10.0.4](https://github.com/fremtind/jokul/compare/@fremtind/jkl-loader-react@10.0.3...@fremtind/jkl-loader-react@10.0.4) (2022-11-02)

### Bug Fixes

-   **loader-react:** size props can also be string to allow percent values ([d961f48](https://github.com/fremtind/jokul/commit/d961f4869bfc14f902129dd061cdd94fad6568fe))

## 10.0.3 (2022-11-02)

### Bug Fixes

-   **loader-react:** add missing className prop in SkeletonElement ([bae791f](https://github.com/fremtind/jokul/commit/bae791fff61e5a25fa741320061cfff3a6f36a09))

# 10.0.0 (2022-10-07)

### Bug Fixes

-   fjern prematur annonsering av innhold ved sidebytte ([a5d28f3](https://github.com/fremtind/jokul/commit/a5d28f3bf805031ffb0c3d1ecf72a1c6ebdec6a1)), closes [#3155](https://github.com/fremtind/jokul/issues/3155)

### BREAKING CHANGES

-   aria-live er fjernet fra loaderne. Om du trenger at loaderens tekst for skjermleser annonseres må du
    selv sørge for å sette aria-live. Sørg for at meldingen ikke leses opp ved sidenavigering.

# 9.0.0 (2022-09-08)

### chore

-   fjern forceCompact-props ([0f8bfeb](https://github.com/fremtind/jokul/commit/0f8bfebc68fe6ebf6368bf8a37e2af78f4d7b46d))

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"
-   forceCompact er fjernet. Bruk compact og regresjonstest steder du bruker kompaktvarianter.

## [8.0.3](https://github.com/fremtind/jokul/compare/@fremtind/jkl-loader-react@8.0.2...@fremtind/jkl-loader-react@8.0.3) (2022-06-13)

### Bug Fixes

-   merk CSS og SCSS som side-effects ([dac2e2b](https://github.com/fremtind/jokul/commit/dac2e2b5f4d1b31485821bf6ad8ec4c7c2769cca))

### Performance Improvements

-   bruk tiny-glob for globbing av filer under bygg ([246952a](https://github.com/fremtind/jokul/commit/246952ae75afe20bcf0d007a0a068b76b114f9a6))

# [8.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-loader-react@7.2.0...@fremtind/jkl-loader-react@8.0.0) (2022-06-07)

### chore

-   fiks lintfeil ([4093d2a](https://github.com/fremtind/jokul/commit/4093d2a2ae7bbe0d30de882b9f5d144e8e77cede))

### BREAKING CHANGES

-   Pakken avhenger av en breaking versjon av core

# 7.2.0 (2022-05-13)

### Features

-   legg til komponenter for skeleton loaders ([ffe80ed](https://github.com/fremtind/jokul/commit/ffe80ed6350d1445af9f3c3eaeb36ed04d23cfc0))

## 7.1.0 (2021-12-01)

### Features

-   legg til inline og delay-props ([3527f84](https://github.com/fremtind/jokul/commit/3527f84422f90eaa6aae201965d55d6ee3c9ece7))

## 7.0.0 (2021-10-21)

### chore

-   updates dependencies ([b975200](https://github.com/fremtind/jokul/commit/b97520045c02e4bcb44ebde159c60a7dff7f01d6))

### BREAKING CHANGES

-   depends on jkl-core v8 with breaking changes

## 6.0.0 (2021-10-07)

### Features

-   la loader ta farge fra teksten rundt ([e529255](https://github.com/fremtind/jokul/commit/e52925548dcdb8e1228bc445df18bc191bb6aaf5)), closes [#2348](https://github.com/fremtind/jokul/issues/2348)

### BREAKING CHANGES

-   Propen negative har ikke lenger noen effekt, og er fjernet

## 5.0.0 (2021-10-06)

### Features

-   redesign knappeloader så den beholder layout ([9732d00](https://github.com/fremtind/jokul/commit/9732d007e92bb50ccb75a44d5a6fe74a641941f1)), closes [#2122](https://github.com/fremtind/jokul/issues/2122)

### Reverts

-   Revert "feat: redesign knappeloader så den beholder layout" ([54011df](https://github.com/fremtind/jokul/commit/54011dfb1ca5bba65e45b95dfe0fec4fb9eb340d))

### BREAKING CHANGES

-   APIet til Button endrer seg ikke, men det er en del breaking changes i CSS om du bygger HTML selv.
    Se React-komponent for veiledning. Loader-komponenten mister inline-prop. Erstattes av
    variant="medium".

## 4.1.0 (2021-10-06)

### Features

-   redesign knappeloader så den beholder layout ([344d8d3](https://github.com/fremtind/jokul/commit/344d8d3d1710125ac44211fa7788045e2ec7a36c)), closes [#2122](https://github.com/fremtind/jokul/issues/2122)

## 4.0.0 (2021-07-09)

### chore

-   bump major version ([255a776](https://github.com/fremtind/jokul/commit/255a776d45a068645124499b870ecefec9d87f0e))

### BREAKING CHANGES

-   Depends on jkl-core-version with breaking changes

## 3.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 2.1.0 (2021-07-02)

### Features

-   **loader-react:** add aria-live and politeness prop ([#2059](https://github.com/fremtind/jokul/issues/2059)) ([4260554](https://github.com/fremtind/jokul/commit/42605542e8663583c0e2297c3f9f5b595ca32ec4)), closes [#2058](https://github.com/fremtind/jokul/issues/2058)

## 2.0.0 (2021-06-07)

### Features

-   upgrade dependency jkl-core to v5.0.0 ([c3dc8dc](https://github.com/fremtind/jokul/commit/c3dc8dcbd3cba99502f1124cbe1dcaa688177f55))

### BREAKING CHANGES

-   Upgrades dependency jkl-core to v5.0.0, introducing breaking changes to color variables

## 1.5.6 (2021-02-12)

### Bug Fixes

-   add react 17 types as valid peerdep ([a074c34](https://github.com/fremtind/jokul/commit/a074c34dcece089ad6b4c581b8c920c8bdd4f1e0))

## 1.5.0 (2020-11-25)

### Features

-   update to react 17 ([4639058](https://github.com/fremtind/jokul/commit/4639058067eaa9be222825f8ac4f495a1e74cc0f))

## 1.4.0 (2020-10-01)

### Features

-   add data-testautoid for loader ([d793b23](https://github.com/fremtind/jokul/commit/d793b23d7534dd75ede3be40029e545d84f090c0))
-   expose dataTestAutoId as a prop ([098b32d](https://github.com/fremtind/jokul/commit/098b32ddc84dcc06451b559ef15c5cf697cc5642))

## 1.3.0 (2020-07-29)

### Features

-   **build:** use @babel/runtime instead of inlining helpers in each file ([bbadce5](https://github.com/fremtind/jokul/commit/bbadce52ba4da5d540b479b07273332587bed436)), closes [#1136](https://github.com/fremtind/jokul/issues/1136)

## 1.2.3 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 1.2.0 (2020-03-06)

### Features

-   **portal:** implement dev and portal examples ([857f2e2](https://github.com/fremtind/jokul/commit/857f2e29359f9442a7da0c977a94d63dfbdfc194))

## 1.1.2 (2020-02-18)

### Bug Fixes

-   **jkl:** rename classnames import and move types ([e06ef21](https://github.com/fremtind/jokul/commit/e06ef21062b345d5defab335253041dad7ae6134))

## 1.1.0 (2020-01-16)

### Bug Fixes

-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

### Features

-   **portal:** use examples as documentation for all comp ([e99e56a](https://github.com/fremtind/jokul/commit/e99e56ab2f5bf13cd0e72bf010e6472a08ffabe9))

## 0.3.0 (2019-10-09)

### Features

-   **loader:** add aria-label and title to loader component ([8479e2b](https://github.com/fremtind/jokul/commit/8479e2b))
-   **loader-react:** make text description compulsory ([9d0a484](https://github.com/fremtind/jokul/commit/9d0a484))

## 0.2.0 (2019-09-26)

### Bug Fixes

-   **loader-react:** add missing space in componentClassName function ([7edc767](https://github.com/fremtind/jokul/commit/7edc767))

### Features

-   **loader-react:** make loader accept className as prop ([1b83cb7](https://github.com/fremtind/jokul/commit/1b83cb7))

## 0.1.0 (2019-07-18)

### Bug Fixes

-   **build:** normalize react package.json ([6c29e08](https://github.com/fremtind/jokul/commit/6c29e08)), closes [#156](https://github.com/fremtind/jokul/issues/156)
-   **loader:** add missing tsconfig file ([dd981af](https://github.com/fremtind/jokul/commit/dd981af))

### Features

-   **loader:** add inline style ([d1cc7d8](https://github.com/fremtind/jokul/commit/d1cc7d8))
-   **loader:** add react loader ([e27132c](https://github.com/fremtind/jokul/commit/e27132c))
