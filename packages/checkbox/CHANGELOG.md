# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 8.0.8 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

# 8.0.0 (2022-09-08)

### Bug Fixes

-   fiks rekkefølge mobil og kompakt ([45db6c2](https://github.com/fremtind/jokul/commit/45db6c2514acd2245cecf729deba78ae855ca3d3))

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))
-   nytt design for kompakt checkbox ([b97880e](https://github.com/fremtind/jokul/commit/b97880e7e58f264fc107d53ea7a5702114f37c9a))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"

# [7.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-checkbox@6.0.13...@fremtind/jkl-checkbox@7.0.0) (2022-06-07)

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

## [6.0.10](https://github.com/fremtind/jokul/compare/@fremtind/jkl-checkbox@6.0.9...@fremtind/jkl-checkbox@6.0.10) (2022-04-19)

### Bug Fixes

-   bruk Highlight på samme måte som radio ([56a10ed](https://github.com/fremtind/jokul/commit/56a10ed517f126a673b0f61e8468935079a93f66))
-   checkbox fixup skjemafelter skal ha buttontext outline ([f4b05f1](https://github.com/fremtind/jokul/commit/f4b05f16c925c417e0a77c54926658460d99c18f))
-   checkbox og supportlabelikon i forced-colors ([0501475](https://github.com/fremtind/jokul/commit/0501475d815d56031e969020907102d48cddb12b))
-   select i forced-colors ([66a6d37](https://github.com/fremtind/jokul/commit/66a6d37a827fbcd49be02cea543a196117066014))
-   unset border og outline i forced-colors ([648c7cd](https://github.com/fremtind/jokul/commit/648c7cdd30805dc6e6dc74b3e12d7b20b2ff5cec))

# 6.0.0 (2022-02-07)

### Bug Fixes

-   fjern inverted-prop ([de5f8b8](https://github.com/fremtind/jokul/commit/de5f8b83ae8f025826f4c56d3aeb5e081dea66cc)), closes [#2646](https://github.com/fremtind/jokul/issues/2646)
-   manuell delinting sans descending specificity ([20de1c8](https://github.com/fremtind/jokul/commit/20de1c8811596b054867352177225fd197c70797))

### BREAKING CHANGES

-   Fjernet `inverted`-prop. Bruk `data-theme="dark"` om du trenger overstyre temaet.

## 5.0.10 (2022-02-02)

### Bug Fixes

-   redesign feilstate for checkbox ([8a4098d](https://github.com/fremtind/jokul/commit/8a4098d1331e927c146c59a81c73137d8b390d1f)), closes [#2631](https://github.com/fremtind/jokul/issues/2631)

## 5.0.3 (2021-11-24)

### Bug Fixes

-   animasjonsfix for Safari ([39982c1](https://github.com/fremtind/jokul/commit/39982c168e7d0a5b99ad72476444055eb889651a)), closes [#2531](https://github.com/fremtind/jokul/issues/2531)

## 5.0.0 (2021-10-21)

### Features

-   use new spacing scale ([5694495](https://github.com/fremtind/jokul/commit/5694495f56d3c1f0e675433b35cfb0e693b93a82)), closes [#2382](https://github.com/fremtind/jokul/issues/2382)

### BREAKING CHANGES

-   new spacing scale: see migration guide for jkl-core

## 4.0.0 (2021-07-09)

### Features

-   use new typographic scale ([1d5e654](https://github.com/fremtind/jokul/commit/1d5e6547f32f6be43a4cd91cd952304a5e2b1e0b))

### BREAKING CHANGES

-   Depends on jkl-core version with breaking changes

## 3.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### Features

-   **checkbox:** add automatic dark mode ([5c88c42](https://github.com/fremtind/jokul/commit/5c88c42b50ec946bb154bf4d49cb064c94c3ba4f))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 2.0.2 (2021-07-02)

### Bug Fixes

-   changed hoverstate for checkbox ([84b336f](https://github.com/fremtind/jokul/commit/84b336f976d1614583e91ea60c058ad3738c4ecf))

## 2.0.1 (2021-06-25)

### Bug Fixes

-   **sass:** upgrade sass and stop using dep. syntax ([194d414](https://github.com/fremtind/jokul/commit/194d4145cbde712eb351ef6b41cefe6a47f40b5e))

## 2.0.0 (2021-06-07)

### Features

-   new colors ([9144947](https://github.com/fremtind/jokul/commit/9144947766c73fbe5eaac3372495006e3b89dec7))

### BREAKING CHANGES

-   all color variables are changed

## 1.4.1 (2020-08-28)

### Bug Fixes

-   override css custom properties when inverted mode is set ([d5c3686](https://github.com/fremtind/jokul/commit/d5c368669e17942570c44bad4fd19989e260e7c8))

## 1.4.0 (2020-08-25)

### Features

-   **checkbox:** update design to match sketches ([400904e](https://github.com/fremtind/jokul/commit/400904e40dbf88975352ba68f5e6b0d7395a94b1))

## 1.3.0 (2020-07-06)

### Features

-   **checkbox:** make labels responsive ([116afcd](https://github.com/fremtind/jokul/commit/116afcd3a611ba30bf8400e4001d2716a8662b21)), closes [#985](https://github.com/fremtind/jokul/issues/985)

## 1.2.0 (2020-05-11)

### Bug Fixes

-   **checkbox:** adjust spacings for new labels ([32273a2](https://github.com/fremtind/jokul/commit/32273a2116fa56b9a3cf3eedc51ad3c777b98667))

### Features

-   add support for dark/inverted mode ([eaf1a1f](https://github.com/fremtind/jokul/commit/eaf1a1f001fec39d207abac67062179efa7a7cc9))

## 1.1.5 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 1.1.4 (2020-03-16)

### Bug Fixes

-   **checkbox:** fix html structure to avoid onClick event bugs ([02b2343](https://github.com/fremtind/jokul/commit/02b2343f7323e6c3ab11ed8e58bb5bdafc9d54a8))
-   **checkbox:** make fake checkmark clickable again ([e9688d6](https://github.com/fremtind/jokul/commit/e9688d6253148207031fe2363751f91656897cf4))
-   **checkbox:** make text bold when checkbox is checked ([7126a44](https://github.com/fremtind/jokul/commit/7126a44c4e66b94ad9cd214a281fc1940840b04c))

## 1.1.0 (2020-02-19)

### Features

-   export scss files with style pkgs ([edb6278](https://github.com/fremtind/jokul/commit/edb627838075d3d613ae78b6aae765c81067ba6a))

## 1.0.16 (2020-02-18)

### Bug Fixes

-   make use of new core color tokens ([075f7b3](https://github.com/fremtind/jokul/commit/075f7b37920805bf780120247461d79c3d8c406e))
-   use new text-style mixins ([2873a57](https://github.com/fremtind/jokul/commit/2873a57f4570ddb87a7390a773433d26a9fde4ac))

## 1.0.14 (2020-01-16)

### Bug Fixes

-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

## 1.0.0 (2019-12-03)

### Bug Fixes

-   **checkbox:** use correct size for mobile/compact version ([68c8782](https://github.com/fremtind/jokul/commit/68c878227287009b9af1859a0421c41191fcc5d2))

### Features

-   **checkbox:** add error state to checkbox ([6c9a554](https://github.com/fremtind/jokul/commit/6c9a5542721cf10b9221f2bd5371cf55e625bc3a))
-   **checkbox:** implement compact/mobile version of checkbox ([7bacff8](https://github.com/fremtind/jokul/commit/7bacff8c5f82580907040cf31259ad098b9f31b4))
-   add compact mode mixin ([ca9fa96](https://github.com/fremtind/jokul/commit/ca9fa96b7de2be50646af0cb444206c3eebcfc4a))
-   add support for global compact mode ([cc11026](https://github.com/fremtind/jokul/commit/cc11026207dfef2a0b3b074b88e071783d2820fd)), closes [#494](https://github.com/fremtind/jokul/issues/494)

## 0.8.4 (2019-10-09)

### Bug Fixes

-   **core:** add and use wcag-compliant error/focus colors ([c714b45](https://github.com/fremtind/jokul/commit/c714b45))
-   **jkl-checkbox:** give checkboxes correct vertical spacing when stacked ([879f8e4](https://github.com/fremtind/jokul/commit/879f8e4))

## 0.8.0 (2019-08-30)

### Bug Fixes

-   **checkbox:** fix correct spacing and font sizes for checkbox ([fca4177](https://github.com/fremtind/jokul/commit/fca4177))

### Features

-   **checkbox:** add checkbox group style and react component ([8c9ec35](https://github.com/fremtind/jokul/commit/8c9ec35))
-   **field-group:** add field group style and react component ([f002974](https://github.com/fremtind/jokul/commit/f002974))

## 0.7.0 (2019-07-30)

### Bug Fixes

-   **checkbox:** fix style for older browser, add onchange handler ([d2f0497](https://github.com/fremtind/jokul/commit/d2f0497)), closes [#148](https://github.com/fremtind/jokul/issues/148)

### Features

-   **portal:** document checkbox ([1c038e5](https://github.com/fremtind/jokul/commit/1c038e5))

## 0.6.0 (2019-07-18)

### Bug Fixes

-   **build:** add watch job to pkg json ([a0039e0](https://github.com/fremtind/jokul/commit/a0039e0))
-   **css:** output prefixed css files, fix import from core ([db7413d](https://github.com/fremtind/jokul/commit/db7413d))

### Features

-   **build:** add watch job for css, refactor gulp ([8adafd6](https://github.com/fremtind/jokul/commit/8adafd6))

## 0.5.0 (2019-07-15)

### Bug Fixes

-   use correct syntax for importing sass index files ([46fa8f6](https://github.com/fremtind/jokul/commit/46fa8f6))
-   **build:** publish correct files for style pkgs ([a89d768](https://github.com/fremtind/jokul/commit/a89d768))

## 0.3.0 (2019-07-15)

### Features

-   **build:** publish correct files in all packages ([b1fbb8f](https://github.com/fremtind/jokul/commit/b1fbb8f))
-   **core:** flatten structure of core package ([5b2287b](https://github.com/fremtind/jokul/commit/5b2287b))

## 0.2.0 (2019-07-15)

### Bug Fixes

-   **publish:** update access on logo and accodion ([3b557fb](https://github.com/fremtind/jokul/commit/3b557fb))

### Features

-   **build:** add browserlist pkg and browserlist to evry pkg ([3dcc9ca](https://github.com/fremtind/jokul/commit/3dcc9ca))

## 0.1.0 (2019-07-15)

### Bug Fixes

-   **checkbox:** extract variables for checkbox ([11ead55](https://github.com/fremtind/jokul/commit/11ead55))
-   **checkbox:** fix outline, and border-radius on iOS ([a620bfe](https://github.com/fremtind/jokul/commit/a620bfe))
-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))

### Features

-   **checkbox:** add Jokul checkbox ([76e6cb8](https://github.com/fremtind/jokul/commit/76e6cb8)), closes [#72](https://github.com/fremtind/jokul/issues/72)

### Performance Improvements

-   **build:** use gulp for all style packages ([5699683](https://github.com/fremtind/jokul/commit/5699683))
