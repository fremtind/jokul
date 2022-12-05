# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 11.0.8 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

# 11.0.0 (2022-09-08)

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))
-   kompaktversjon av hamburger ([ddbcc31](https://github.com/fremtind/jokul/commit/ddbcc312e7cd84617b5c56a961948b7547e686fd))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"

# [10.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-hamburger@9.0.13...@fremtind/jkl-hamburger@10.0.0) (2022-06-07)

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

## [9.0.10](https://github.com/fremtind/jokul/compare/@fremtind/jkl-hamburger@9.0.9...@fremtind/jkl-hamburger@9.0.10) (2022-04-19)

### Bug Fixes

-   oh my lord it's a hamburger ([b871433](https://github.com/fremtind/jokul/commit/b87143300db48c511ea4276f8136c479a0c2ac0a))
-   unset border og outline i forced-colors ([648c7cd](https://github.com/fremtind/jokul/commit/648c7cdd30805dc6e6dc74b3e12d7b20b2ff5cec))

# 9.0.0 (2022-02-07)

### Bug Fixes

-   fjern inverted-prop ([de5f8b8](https://github.com/fremtind/jokul/commit/de5f8b83ae8f025826f4c56d3aeb5e081dea66cc)), closes [#2646](https://github.com/fremtind/jokul/issues/2646)
-   manuell delinting sans descending specificity ([20de1c8](https://github.com/fremtind/jokul/commit/20de1c8811596b054867352177225fd197c70797))

### BREAKING CHANGES

-   Fjernet `inverted`-prop. Bruk `data-theme="dark"` om du trenger overstyre temaet.

## 8.0.0 (2022-01-04)

### Bug Fixes

-   fjern padding fra hamburger ([72e8899](https://github.com/fremtind/jokul/commit/72e8899fcfaed69225d54a3c18118dea571e5683))

### BREAKING CHANGES

-   spacing rundt hamburger er fjernet

## 7.0.0 (2021-10-21)

### Features

-   use new spacing scale ([5694495](https://github.com/fremtind/jokul/commit/5694495f56d3c1f0e675433b35cfb0e693b93a82)), closes [#2382](https://github.com/fremtind/jokul/issues/2382)

### BREAKING CHANGES

-   new spacing scale: see migration guide for jkl-core

## 6.0.0 (2021-09-27)

### Code Refactoring

-   use aria-expanded attr to control appearance ([de1ee5a](https://github.com/fremtind/jokul/commit/de1ee5a9d0e2835f063a3224d79db22694ac9715))

### BREAKING CHANGES

-   It is no longer possible to use the jkl-hamburger--is-open class to change the appearance of the
    hamburger menu. Use aria-expanded="true" instead

## 5.2.0 (2021-08-05)

### Features

-   add support for label placement ([bc396af](https://github.com/fremtind/jokul/commit/bc396af43385cfb6e5c08873188459184637828d))
-   **hamburger:** add control for animating label ([7369810](https://github.com/fremtind/jokul/commit/73698103d09829215b38b96b6ca36f149dab2add))

## 5.1.0 (2021-07-13)

### Features

-   **hamburger:** add support for a text in the hamburger button ([512b2c6](https://github.com/fremtind/jokul/commit/512b2c6a579f85e72b7382f43eb045885ba9410c))
-   **hamburger:** make toggle-animation perhty ([0caacb9](https://github.com/fremtind/jokul/commit/0caacb92d851405652bb422ec233c922f5bd7441))
-   move labels into content toggle ([216463c](https://github.com/fremtind/jokul/commit/216463cf2e564198e3ca0a0a935d1a7ce2f709e4))
-   second try on animating the menu text ([a9f33ee](https://github.com/fremtind/jokul/commit/a9f33ee27c1dcd7a42973b378e54938f45cade07))

## 5.0.0 (2021-07-09)

### Bug Fixes

-   remove import of old font-size variables ([46284c3](https://github.com/fremtind/jokul/commit/46284c3a893c55664a3ef10a4a74806b046f6159))

### BREAKING CHANGES

-   Depends on jkl-core version with breaking changes

## 4.0.0 (2021-07-09)

### Features

-   **hamburger:** make hamburger controlled ([d9b8723](https://github.com/fremtind/jokul/commit/d9b8723a0268571c42270ba79ad2dfd0deac25df))

### BREAKING CHANGES

-   **hamburger:** API is changed to be controlled

## 3.1.0 (2021-07-07)

### Features

-   **hamburger:** update animation for hamburger component ([b7a30fe](https://github.com/fremtind/jokul/commit/b7a30fe803ecf172c5d1df29fe00538b3bfa669b))

## 3.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### Features

-   **hamburger:** add automatic dark mode ([13dacc4](https://github.com/fremtind/jokul/commit/13dacc424813fcca47c81ed23dd23ed172d3fafe))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 2.0.0 (2021-06-07)

### Features

-   new colors ([9144947](https://github.com/fremtind/jokul/commit/9144947766c73fbe5eaac3372495006e3b89dec7))

### BREAKING CHANGES

-   all color variables are changed

## 1.2.0 (2020-09-01)

### Features

-   implement global dark mode ([47b8e2d](https://github.com/fremtind/jokul/commit/47b8e2dc0abcd366212fc67f306f8523a63d11c8))

## 1.1.5 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 1.1.0 (2020-02-19)

### Features

-   export scss files with style pkgs ([edb6278](https://github.com/fremtind/jokul/commit/edb627838075d3d613ae78b6aae765c81067ba6a))

## 1.0.16 (2020-02-18)

### Bug Fixes

-   make use of new core color tokens ([075f7b3](https://github.com/fremtind/jokul/commit/075f7b37920805bf780120247461d79c3d8c406e))

## 1.0.14 (2020-01-16)

### Bug Fixes

-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

## 0.2.5 (2019-10-09)

### Bug Fixes

-   **core:** add and use wcag-compliant error/focus colors ([c714b45](https://github.com/fremtind/jokul/commit/c714b45))

## 0.2.0 (2019-08-02)

### Bug Fixes

-   **core:** fix help text spacing, error color, minor ios portal fix ([ae19bb7](https://github.com/fremtind/jokul/commit/ae19bb7))

### Features

-   **firefox:** remove dotted line for good ([67187a6](https://github.com/fremtind/jokul/commit/67187a6))

## 0.1.0 (2019-07-30)

### Bug Fixes

-   **hamburger:** add focusring on keynav ([aeaea10](https://github.com/fremtind/jokul/commit/aeaea10))
-   **hamburger:** remove outline in chrome ([8fdbecf](https://github.com/fremtind/jokul/commit/8fdbecf))
-   **hamburger:** square off burger ([169bb32](https://github.com/fremtind/jokul/commit/169bb32))

### Features

-   **hambuger:** add clickoutside option ([607403f](https://github.com/fremtind/jokul/commit/607403f))
-   **hamburger:** add animated hamburger to us as main menu ([79eb9f2](https://github.com/fremtind/jokul/commit/79eb9f2))
