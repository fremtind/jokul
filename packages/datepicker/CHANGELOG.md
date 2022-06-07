# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [8.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-datepicker@6.0.16...@fremtind/jkl-datepicker@8.0.0) (2022-06-07)

### Code Refactoring

-   oppdater til nyeste core ([1db381f](https://github.com/fremtind/jokul/commit/1db381fdc0d3f1c35818d2feec49977331cd2fad))
-   prefiks CSS-variabler med jkl ([500ee0e](https://github.com/fremtind/jokul/commit/500ee0e1050de94d8cda07fb423c33837fbf2faa))
-   skriv og følg stilguiden for Sass i Jøkul ([1cc52a4](https://github.com/fremtind/jokul/commit/1cc52a4dea6af592ed48c45b38bc4fee07a749ae))

### Features

-   legg til en index-fil for Sass ([c4f8d0c](https://github.com/fremtind/jokul/commit/c4f8d0cd31bcab0706a49be1bdf0214fbbbbf646))

### BREAKING CHANGES

-   Alle CSS-variabler har jkl-prefix
-   Sass-variabler, mixins og CSS-animasjoner fra pakker annet enn core er gjort private
-   Avhenger av ny majorversjon av core

# [7.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-datepicker@6.0.19...@fremtind/jkl-datepicker@7.0.0) (2022-06-02)

### Bug Fixes

-   dobbel åpneanimasjon ([7236363](https://github.com/fremtind/jokul/commit/72363634033422b176026a1b4a0fd698f76a56be))
-   extended ([060203e](https://github.com/fremtind/jokul/commit/060203e2ddf1d2e7ad294df144233f33b96ee75b))
-   fokus ved åpning av kalender igjen, etter ny måned ([7a705a9](https://github.com/fremtind/jokul/commit/7a705a938bcf2b0d428f3ba66b2dabe2b284d55b))
-   legg tilbake hidden pga animasjonsbug ([58ec5da](https://github.com/fremtind/jokul/commit/58ec5da444784a74d3d1bab7ac11faf8aa84b849))
-   tilpass plasseringen av kalenderpoup på flere steder ([b3eae1e](https://github.com/fremtind/jokul/commit/b3eae1e71a955e51da4d9ec1acdcce8bb8f9f651))
-   tweak plassering på mobil så vi ikke lager horisontal scroll ([4152b74](https://github.com/fremtind/jokul/commit/4152b74e70a0ae5df00ea76f38d5d11ad7a83b4b))

### chore

-   datepicker har breaking changes ([b9cb939](https://github.com/fremtind/jokul/commit/b9cb93934964de02cb28c90dff5ec261097f3613))

### BREAKING CHANGES

-   Se MIGRATION.md i datepicker-react.

## [6.0.13](https://github.com/fremtind/jokul/compare/@fremtind/jkl-datepicker@6.0.12...@fremtind/jkl-datepicker@6.0.13) (2022-04-19)

### Bug Fixes

-   bruk den nye mixinen til å forbedre kalenderikonet ([e946395](https://github.com/fremtind/jokul/commit/e94639590516dede979fbf6774fa591e170080ea))
-   bruk revert i stedet for unset ([300e808](https://github.com/fremtind/jokul/commit/300e8086b4a88e37407dadaf747d714d69919cdd))
-   skriv om svgmixin etter å ha sett Icons ([093e5ec](https://github.com/fremtind/jokul/commit/093e5ec2e71e5819e68ee2383463096185f9c1f3))
-   unset border og outline i forced-colors ([648c7cd](https://github.com/fremtind/jokul/commit/648c7cdd30805dc6e6dc74b3e12d7b20b2ff5cec))

## 6.0.1 (2022-02-08)

### Bug Fixes

-   **datepicker:** use remove-inner-outer-button mixin on year-selector ([a5fde17](https://github.com/fremtind/jokul/commit/a5fde173632195e7ee40a3ba8d34de13c02f65d7)), closes [#2707](https://github.com/fremtind/jokul/issues/2707)

# 6.0.0 (2022-02-07)

### Bug Fixes

-   fjern inverted-prop ([de5f8b8](https://github.com/fremtind/jokul/commit/de5f8b83ae8f025826f4c56d3aeb5e081dea66cc)), closes [#2646](https://github.com/fremtind/jokul/issues/2646)
-   manuell delinting sans descending specificity ([20de1c8](https://github.com/fremtind/jokul/commit/20de1c8811596b054867352177225fd197c70797))

### BREAKING CHANGES

-   Fjernet `inverted`-prop. Bruk `data-theme="dark"` om du trenger overstyre temaet.

## 5.0.5 (2021-11-24)

### Bug Fixes

-   animasjonsfix for Safari ([39982c1](https://github.com/fremtind/jokul/commit/39982c168e7d0a5b99ad72476444055eb889651a)), closes [#2531](https://github.com/fremtind/jokul/issues/2531)

## 5.0.0 (2021-10-21)

### Features

-   use new spacing scale ([5694495](https://github.com/fremtind/jokul/commit/5694495f56d3c1f0e675433b35cfb0e693b93a82)), closes [#2382](https://github.com/fremtind/jokul/issues/2382)

### BREAKING CHANGES

-   new spacing scale: see migration guide for jkl-core

## 4.0.0 (2021-07-09)

### Features

-   use new typographic scale ([50b8815](https://github.com/fremtind/jokul/commit/50b8815a325be0a92302a9c033f320c53cfa941c))

### BREAKING CHANGES

-   Depends on jkl-core version with breaking changes

## 3.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### Features

-   **datepicker:** add automatic dark mode ([e783a1e](https://github.com/fremtind/jokul/commit/e783a1eac35ce1b1b95fd96396ce619f9c607a78))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 2.0.0 (2021-06-07)

### Features

-   new colors ([9144947](https://github.com/fremtind/jokul/commit/9144947766c73fbe5eaac3372495006e3b89dec7))

### BREAKING CHANGES

-   all color variables are changed

## 1.5.28 (2020-08-28)

### Bug Fixes

-   override css custom properties when inverted mode is set ([d5c3686](https://github.com/fremtind/jokul/commit/d5c368669e17942570c44bad4fd19989e260e7c8))

## 1.5.5 (2020-05-29)

### Bug Fixes

-   fiks en bug hvor CSP vil blokkere inline CSS ([a07e7fb](https://github.com/fremtind/jokul/commit/a07e7fb568ce6289667bcd53f3213a5f459abb00))

## 1.5.4 (2020-05-19)

### Bug Fixes

-   **datepicker:** add z-index to datepicker wrapper ([5ea8621](https://github.com/fremtind/jokul/commit/5ea8621535be6b440f6cea39dc0bd58a4630a34d))

## 1.5.0 (2020-05-13)

### Features

-   **datepicker:** implement new design and add dark mode ([2f3de1e](https://github.com/fremtind/jokul/commit/2f3de1e60b53b78b5c433ba9dcfe8d9c45e2fc28))

## 1.4.5 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 1.4.4 (2020-03-16)

### Bug Fixes

-   **datepicker:** remove wrong width for small-device ([bc1aa1c](https://github.com/fremtind/jokul/commit/bc1aa1c406a1dc95b93385aded1ad34cf1aa3bf6))

## 1.4.0 (2020-02-24)

### Features

-   **datepicker:** add button to open datepicker calendar ([df636f8](https://github.com/fremtind/jokul/commit/df636f87a1934f970f3cff962564cf7d5032bef8)), closes [#593](https://github.com/fremtind/jokul/issues/593) [#773](https://github.com/fremtind/jokul/issues/773) [#774](https://github.com/fremtind/jokul/issues/774)
-   **datepicker:** use core-toggle for datepicker calendar ([a868bdb](https://github.com/fremtind/jokul/commit/a868bdb9f50f31bf5839b37a515e010b8abb98bd))

## 1.3.0 (2020-02-19)

### Features

-   export scss files with style pkgs ([edb6278](https://github.com/fremtind/jokul/commit/edb627838075d3d613ae78b6aae765c81067ba6a))

## 1.2.2 (2020-02-18)

### Bug Fixes

-   make use of new color token (changed name) ([f14c149](https://github.com/fremtind/jokul/commit/f14c149f779e65fe0775afde4421aef26be8ed1d))
-   make use of new core color tokens ([075f7b3](https://github.com/fremtind/jokul/commit/075f7b37920805bf780120247461d79c3d8c406e))
-   use new text-style mixins ([2873a57](https://github.com/fremtind/jokul/commit/2873a57f4570ddb87a7390a773433d26a9fde4ac))

## 1.2.0 (2020-01-16)

### Bug Fixes

-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

### Features

-   update to new typography naming ([5c061d7](https://github.com/fremtind/jokul/commit/5c061d7b52529f83a16cf944db240984b67f5229))

## 1.1.0 (2019-12-17)

### Features

-   **components on black background:** rewritten css ([04fb8c6](https://github.com/fremtind/jokul/commit/04fb8c62aecfb2aa2141687d561d36cf5893dd04)), closes [#544](https://github.com/fremtind/jokul/issues/544)
-   add functionality for disabling dates ([cc8bb42](https://github.com/fremtind/jokul/commit/cc8bb42eb00e6b9566df99b3fdb8e51f7366143b)), closes [#567](https://github.com/fremtind/jokul/issues/567)

## 1.0.0 (2019-12-03)

### Bug Fixes

-   **datepicker:** fix alignment of year value in picker ([ccd1527](https://github.com/fremtind/jokul/commit/ccd1527539f316752aec3efc6015e6adfa400a9e))

### Features

-   **datepicker:** implement compact version of datepicker ([c8168a5](https://github.com/fremtind/jokul/commit/c8168a5f336c93980ca3e05a8205f3d7bb057e45))
-   add keyboard focus state on selected day ([9585a92](https://github.com/fremtind/jokul/commit/9585a92292e267c05bdfa2df762047db9b9bdb77)), closes [#420](https://github.com/fremtind/jokul/issues/420)
-   remove dropdown pkgs and replace with select pkgs ([14c2b4f](https://github.com/fremtind/jokul/commit/14c2b4fa5a236e2d7824834a7b074ae62ce870b4))

### Reverts

-   revert datepicker docs ([c1b4b87](https://github.com/fremtind/jokul/commit/c1b4b875c5fba7a034af8ca8d341eba821e7f7a1))
-   revert unnecessary changes to datepicker docs ([3fc3bd1](https://github.com/fremtind/jokul/commit/3fc3bd1c73e4b298fc93cbc3df50bcf2c4977c9e))

## 0.9.0 (2019-10-09)

### Features

-   **core:** add pure white as a supporting color ([1558fa9](https://github.com/fremtind/jokul/commit/1558fa9))
-   **datepicker:** add space after weekday names ([104895b](https://github.com/fremtind/jokul/commit/104895b))
-   **datepicker:** implement new version and styles ([6f1b3e9](https://github.com/fremtind/jokul/commit/6f1b3e9))
-   **datepicker:** let screenreaders read calendar caption ([cc837ac](https://github.com/fremtind/jokul/commit/cc837ac))
-   **datepicker:** make datepicker shorter until opened ([ef87993](https://github.com/fremtind/jokul/commit/ef87993))
-   **datepicker:** update datepicker with new label design and variants ([9c479b6](https://github.com/fremtind/jokul/commit/9c479b6))

## 0.8.0 (2019-08-30)

### Bug Fixes

-   **datepicker:** capitalize months in selection box ([47b632c](https://github.com/fremtind/jokul/commit/47b632c))
-   **datepicker:** move date-picker popup 2px down ([82831e8](https://github.com/fremtind/jokul/commit/82831e8))

### Features

-   **datepicker:** add bottomText to datepicker ([7123c8e](https://github.com/fremtind/jokul/commit/7123c8e))

## 0.7.0 (2019-07-30)

### Bug Fixes

-   **css:** add zindexscale and shaddow ([87e526f](https://github.com/fremtind/jokul/commit/87e526f))
-   **datepicker:** minor css fixes ([fc924bc](https://github.com/fremtind/jokul/commit/fc924bc))
-   **datepicker:** update according to changes in text-input ([1284e98](https://github.com/fremtind/jokul/commit/1284e98))

### Features

-   **datepicker-react:** use select from jkl-dropdown for month picker ([b57ff76](https://github.com/fremtind/jokul/commit/b57ff76))

## 0.6.0 (2019-07-18)

### Bug Fixes

-   **build:** add watch job to pkg json ([a0039e0](https://github.com/fremtind/jokul/commit/a0039e0))
-   **datepicker:** remove prefixed style rules ([6f4d4c2](https://github.com/fremtind/jokul/commit/6f4d4c2))

### Features

-   **build:** add watch job for css, refactor gulp ([8adafd6](https://github.com/fremtind/jokul/commit/8adafd6))
-   **datepicker:** update style according to sketches ([dc3d82b](https://github.com/fremtind/jokul/commit/dc3d82b))

## 0.5.0 (2019-07-15)

### Bug Fixes

-   use correct syntax for importing sass index files ([46fa8f6](https://github.com/fremtind/jokul/commit/46fa8f6))
-   **build:** publish correct files for style pkgs ([a89d768](https://github.com/fremtind/jokul/commit/a89d768))

## 0.3.0 (2019-07-15)

### Features

-   **build:** publish correct files in all packages ([b1fbb8f](https://github.com/fremtind/jokul/commit/b1fbb8f))

## 0.2.0 (2019-07-15)

### Bug Fixes

-   **publish:** update access on logo and accodion ([3b557fb](https://github.com/fremtind/jokul/commit/3b557fb))

### Features

-   **build:** add browserlist pkg and browserlist to evry pkg ([3dcc9ca](https://github.com/fremtind/jokul/commit/3dcc9ca))

## 0.1.0 (2019-07-15)

### Bug Fixes

-   **datepicker:** merge, use gulp job for datepicker ([323f414](https://github.com/fremtind/jokul/commit/323f414))
-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))

### Features

-   **datepicker:** split style into its own pkg ([1a4acb7](https://github.com/fremtind/jokul/commit/1a4acb7))

### Performance Improvements

-   **build:** use gulp for all style packages ([5699683](https://github.com/fremtind/jokul/commit/5699683))
