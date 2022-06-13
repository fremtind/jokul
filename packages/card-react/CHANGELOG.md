# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [6.0.4](https://github.com/fremtind/jokul/compare/@fremtind/jkl-card-react@6.0.3...@fremtind/jkl-card-react@6.0.4) (2022-06-13)

### Bug Fixes

-   merk CSS og SCSS som side-effects ([dac2e2b](https://github.com/fremtind/jokul/commit/dac2e2b5f4d1b31485821bf6ad8ec4c7c2769cca))

### Performance Improvements

-   bruk tiny-glob for globbing av filer under bygg ([246952a](https://github.com/fremtind/jokul/commit/246952ae75afe20bcf0d007a0a068b76b114f9a6))

# [6.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-card-react@5.2.16...@fremtind/jkl-card-react@6.0.0) (2022-06-07)

### chore

-   fiks lintfeil ([4093d2a](https://github.com/fremtind/jokul/commit/4093d2a2ae7bbe0d30de882b9f5d144e8e77cede))

### Code Refactoring

-   oppdater til nyeste core ([1db381f](https://github.com/fremtind/jokul/commit/1db381fdc0d3f1c35818d2feec49977331cd2fad))

### BREAKING CHANGES

-   Pakken avhenger av en breaking versjon av core
-   Avhenger av ny majorversjon av core

# 5.3.0 (2022-05-30)

### Features

-   add title to InfoCard and fix example ([eee03c0](https://github.com/fremtind/jokul/commit/eee03c04b52bafca9859de7bbcb81e54620074fd))

## 5.2.5 (2022-03-10)

### Bug Fixes

-   bruk den riktige genericen per type ([a8e8802](https://github.com/fremtind/jokul/commit/a8e88028c66379c3fac2cd10ae0478aadd1d5392))

# 5.2.0 (2022-02-22)

### Features

-   la brukere overstyre komponenten brukt av NavCard ([afd53da](https://github.com/fremtind/jokul/commit/afd53da8a65223fdfb5fe295277014b996991bf4))

# [5.1.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-card-react@5.0.20...@fremtind/jkl-card-react@5.1.0) (2022-02-17)

### Bug Fixes

-   rett opp feil import i et av eksemplene ([2a2053f](https://github.com/fremtind/jokul/commit/2a2053f04bc92b36a464ac13956eb2defc83cc79))

### Features

-   legg til InfoCard-komponent ([c4c7a1e](https://github.com/fremtind/jokul/commit/c4c7a1e2f7ae0ec20403069f2bf51a1ca9e729b1))
-   legg til NavCard-komponent ([4335747](https://github.com/fremtind/jokul/commit/433574798fd3dc905c326d1241df5e7b842e0455))
-   legg til TaskCard-komponent ([8c8134b](https://github.com/fremtind/jokul/commit/8c8134b9b86da16961a68a40c790665f0fe1baa6))
-   skriv om API for padding og oppdater dokumentasjon ([f7c1fb5](https://github.com/fremtind/jokul/commit/f7c1fb56fba7c17dc60e310e22b421e3870dff02))

## 5.0.0 (2021-10-21)

### chore

-   updates dependencies ([b975200](https://github.com/fremtind/jokul/commit/b97520045c02e4bcb44ebde159c60a7dff7f01d6))

### BREAKING CHANGES

-   depends on jkl-core v8 with breaking changes

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

## 2.0.0 (2021-06-07)

### Features

-   upgrade dependency jkl-core to v5.0.0 ([c3dc8dc](https://github.com/fremtind/jokul/commit/c3dc8dcbd3cba99502f1124cbe1dcaa688177f55))

### BREAKING CHANGES

-   Upgrades dependency jkl-core to v5.0.0, introducing breaking changes to color variables

## 1.4.14 (2021-02-12)

### Bug Fixes

-   add react 17 types as valid peerdep ([a074c34](https://github.com/fremtind/jokul/commit/a074c34dcece089ad6b4c581b8c920c8bdd4f1e0))

## 1.4.0 (2020-11-25)

### Features

-   update to react 17 ([4639058](https://github.com/fremtind/jokul/commit/4639058067eaa9be222825f8ac4f495a1e74cc0f))

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
-   update to new typography naming ([5c061d7](https://github.com/fremtind/jokul/commit/5c061d7b52529f83a16cf944db240984b67f5229))

## 1.0.2 (2019-12-17)

### Bug Fixes

-   **card:** lets title be a optional prop ([1ed7c19](https://github.com/fremtind/jokul/commit/1ed7c191f2a4f2ca94e75b5ec864adaae0d5535e)), closes [#576](https://github.com/fremtind/jokul/issues/576)

## 1.0.0 (2019-12-03)

### Bug Fixes

-   **card:** add core & fix title ([4120174](https://github.com/fremtind/jokul/commit/412017454b83b1ddec4a9124dd84680d3d2d0d7a))
-   **card:** change prop name ([a9e2eba](https://github.com/fremtind/jokul/commit/a9e2eba90f00bb677826f0fe952adff3b8b1f2be))
-   **card:** fix empty div ([6fcbaf5](https://github.com/fremtind/jokul/commit/6fcbaf5d63fad260fb8ea3d545747d079233884d))
-   **card:** fix image import ([6a546d4](https://github.com/fremtind/jokul/commit/6a546d42aca4b3e809d648a6d5a921992fcaf909))
-   **card:** fix space on className ([513eaf2](https://github.com/fremtind/jokul/commit/513eaf20b25df75cb2845a4ed066ed1900946717))
-   **card:** make props mandatory ([47559f6](https://github.com/fremtind/jokul/commit/47559f6d7a404da75d60ae65b8b1bca506205e92))

### Features

-   **card:** make card clickable & move transition/shadow ([3e18478](https://github.com/fremtind/jokul/commit/3e184784fbaf2eb1126c1192a5165fb972fcd3f8))
-   **card:** make card-component ready for v1 ([2b608b7](https://github.com/fremtind/jokul/commit/2b608b7ecc345261e5918823040cb9710a112c35)), closes [#453](https://github.com/fremtind/jokul/issues/453)
-   **card:** make card-component ready for v1 ([86c7171](https://github.com/fremtind/jokul/commit/86c71711f2a85255f032f1e7cdce9319bfb971ee)), closes [#453](https://github.com/fremtind/jokul/issues/453)

## 0.6.1 (2019-08-30)

### Bug Fixes

-   **build:** remove visual regression tests ([a4502ea](https://github.com/fremtind/jokul/commit/a4502ea))

## 0.6.0 (2019-08-02)

### Features

-   **test:** add visual regression testing ([1553b28](https://github.com/fremtind/jokul/commit/1553b28))

## 0.5.1 (2019-07-18)

### Bug Fixes

-   **build:** normalize react package.json ([6c29e08](https://github.com/fremtind/jokul/commit/6c29e08)), closes [#156](https://github.com/fremtind/jokul/issues/156)

## 0.2.0 (2019-07-15)

### Bug Fixes

-   **publish:** update access on logo and accodion ([3b557fb](https://github.com/fremtind/jokul/commit/3b557fb))

### Features

-   **build:** add browserlist pkg and browserlist to evry pkg ([3dcc9ca](https://github.com/fremtind/jokul/commit/3dcc9ca))

## 0.1.0 (2019-07-15)

### Bug Fixes

-   **accordion-react:** clean up hackathon code ([167748f](https://github.com/fremtind/jokul/commit/167748f))
-   **build:** fix deterministic build order ([78566ef](https://github.com/fremtind/jokul/commit/78566ef))
-   **card-react:** add style to example files ([ff21edc](https://github.com/fremtind/jokul/commit/ff21edc))
-   **card-react:** add style to story ([06479f5](https://github.com/fremtind/jokul/commit/06479f5))
-   **portal:** remove storybook and old portal ([c69d7fa](https://github.com/fremtind/jokul/commit/c69d7fa))
-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))
-   **typescript:** clean up tsconfig, make sure everything is typechecked ([745a0fb](https://github.com/fremtind/jokul/commit/745a0fb))
-   **typescript:** remove unnecessary tsconfig ([c594b9e](https://github.com/fremtind/jokul/commit/c594b9e))

### Features

-   **card-react:** add card react component ([70cd43d](https://github.com/fremtind/jokul/commit/70cd43d))
