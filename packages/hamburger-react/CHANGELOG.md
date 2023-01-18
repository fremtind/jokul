# Changelog

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 10.0.12 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

## 10.0.9 (2022-11-11)

### Bug Fixes

-   legg til manglende dependencies internt mellom pakker ([761936f](https://github.com/fremtind/jokul/commit/761936ff2ecdf7338dcddb7f33e984f229cef48b)), closes [#3232](https://github.com/fremtind/jokul/issues/3232)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## 10.0.8 (2022-11-09)

### Bug Fixes

-   legg til manglende dependencies internt mellom pakker ([761936f](https://github.com/fremtind/jokul/commit/761936ff2ecdf7338dcddb7f33e984f229cef48b)), closes [#3232](https://github.com/fremtind/jokul/issues/3232)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

# 10.0.0 (2022-09-08)

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))
-   kompaktversjon av hamburger ([ddbcc31](https://github.com/fremtind/jokul/commit/ddbcc312e7cd84617b5c56a961948b7547e686fd))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"

## [9.0.4](https://github.com/fremtind/jokul/compare/@fremtind/jkl-hamburger-react@9.0.3...@fremtind/jkl-hamburger-react@9.0.4) (2022-06-13)

### Bug Fixes

-   merk CSS og SCSS som side-effects ([dac2e2b](https://github.com/fremtind/jokul/commit/dac2e2b5f4d1b31485821bf6ad8ec4c7c2769cca))

### Performance Improvements

-   bruk tiny-glob for globbing av filer under bygg ([246952a](https://github.com/fremtind/jokul/commit/246952ae75afe20bcf0d007a0a068b76b114f9a6))

# [9.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-hamburger-react@8.0.15...@fremtind/jkl-hamburger-react@9.0.0) (2022-06-07)

### chore

-   fiks lintfeil ([4093d2a](https://github.com/fremtind/jokul/commit/4093d2a2ae7bbe0d30de882b9f5d144e8e77cede))

### BREAKING CHANGES

-   Pakken avhenger av en breaking versjon av core

## 8.0.10 (2022-04-08)

### Bug Fixes

-   småtrøbbel med test og typesjekk ([b1b1bc3](https://github.com/fremtind/jokul/commit/b1b1bc3eeb0fade11f8c19d9c1d6170ad808ef6d))

# 8.0.0 (2022-02-07)

### Bug Fixes

-   fjern inverted-prop ([de5f8b8](https://github.com/fremtind/jokul/commit/de5f8b83ae8f025826f4c56d3aeb5e081dea66cc)), closes [#2646](https://github.com/fremtind/jokul/issues/2646)

### BREAKING CHANGES

-   Fjernet `inverted`-prop. Bruk `data-theme="dark"` om du trenger overstyre temaet.

## 7.0.0 (2021-12-22)

### Bug Fixes

-   rett a11y-problemer i Hamburger ([721db9f](https://github.com/fremtind/jokul/commit/721db9f6632f523e2b38badbc0b54eddecf868bb)), closes [#2606](https://github.com/fremtind/jokul/issues/2606)

### BREAKING CHANGES

-   -   Fjernet `description`-propen. Den var en renamet `aria-label`. Bruk
        heller `aria-label`.
-   Hamburger krever nå at du gir den en ID og setter `aria-controls` med IDen
    til menyen hamburgeren styrer. Dette er for å gjøre det enklere å bygge en
    tilgjengelig hamburgermeny.

## 6.0.0 (2021-10-21)

### chore

-   updates dependencies ([b975200](https://github.com/fremtind/jokul/commit/b97520045c02e4bcb44ebde159c60a7dff7f01d6))

### BREAKING CHANGES

-   depends on jkl-core v8 with breaking changes

## 5.3.0 (2021-09-27)

### Features

-   add better semantics to hamburger menu ([3cdb8dd](https://github.com/fremtind/jokul/commit/3cdb8dde12923d205c85b06dd6a51db9ecd21f99))

## 5.2.6 (2021-09-21)

### Bug Fixes

-   rett en typefeil i Hamburger sin onClick ([9fe7e9e](https://github.com/fremtind/jokul/commit/9fe7e9e1125bfcedcadd0faa043e096ddb198d9f))

## 5.2.0 (2021-08-05)

### Bug Fixes

-   **hamburger-react:** fix logic for label alignment class ([a274a39](https://github.com/fremtind/jokul/commit/a274a39f1dfa845726aeb779441054ebfaf24e10))

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

### chore

-   bump major version ([255a776](https://github.com/fremtind/jokul/commit/255a776d45a068645124499b870ecefec9d87f0e))

### BREAKING CHANGES

-   Depends on jkl-core-version with breaking changes

## 4.0.0 (2021-07-09)

### Bug Fixes

-   update example and portal with new hamburger component ([94e1085](https://github.com/fremtind/jokul/commit/94e108567a16bc6dc867a7c2175672a0368424ce))

### Features

-   **hamburger:** make hamburger controlled ([d9b8723](https://github.com/fremtind/jokul/commit/d9b8723a0268571c42270ba79ad2dfd0deac25df))

### BREAKING CHANGES

-   **hamburger:** API is changed to be controlled

## 3.0.2 (2021-07-07)

### Bug Fixes

-   **hamburger:** fix dark mode in dev example ([ec19b1d](https://github.com/fremtind/jokul/commit/ec19b1d1cbe5ce4273bfb572e93b6836d6048045))

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

## 1.5.6 (2021-02-12)

### Bug Fixes

-   add react 17 types as valid peerdep ([a074c34](https://github.com/fremtind/jokul/commit/a074c34dcece089ad6b4c581b8c920c8bdd4f1e0))

## 1.5.0 (2020-11-25)

### Features

-   update to react 17 ([4639058](https://github.com/fremtind/jokul/commit/4639058067eaa9be222825f8ac4f495a1e74cc0f))

## 1.4.0 (2020-09-01)

### Features

-   implement global dark mode ([47b8e2d](https://github.com/fremtind/jokul/commit/47b8e2dc0abcd366212fc67f306f8523a63d11c8))

## 1.3.0 (2020-07-29)

### Features

-   **build:** use @babel/runtime instead of inlining helpers in each file ([bbadce5](https://github.com/fremtind/jokul/commit/bbadce52ba4da5d540b479b07273332587bed436)), closes [#1136](https://github.com/fremtind/jokul/issues/1136)

## 1.2.3 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 1.2.0 (2020-03-06)

### Features

-   **portal:** implement dev and portal examples ([857f2e2](https://github.com/fremtind/jokul/commit/857f2e29359f9442a7da0c977a94d63dfbdfc194))

## 1.1.0 (2020-01-16)

### Bug Fixes

-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

### Features

-   **portal:** use examples as documentation for all comp ([e99e56a](https://github.com/fremtind/jokul/commit/e99e56ab2f5bf13cd0e72bf010e6472a08ffabe9))

## 0.3.4 (2019-10-09)

### Bug Fixes

-   remove all alerts from examples ([26abee2](https://github.com/fremtind/jokul/commit/26abee2))

## 0.3.0 (2019-08-30)

### Bug Fixes

-   **build:** remove visual regression tests ([a4502ea](https://github.com/fremtind/jokul/commit/a4502ea))

### Features

-   **react-hooks,core:** move useClickOutside to react-hooks ([47626b7](https://github.com/fremtind/jokul/commit/47626b7))

## 0.2.0 (2019-08-02)

### Features

-   **test:** add visual regression testing ([1553b28](https://github.com/fremtind/jokul/commit/1553b28))

## 0.1.0 (2019-07-30)

### Bug Fixes

-   **hamburger:** add focusring on keynav ([aeaea10](https://github.com/fremtind/jokul/commit/aeaea10))
-   **hamburger:** fix example, change bg color on example in portal ([f1cbad0](https://github.com/fremtind/jokul/commit/f1cbad0))

### Features

-   **hambuger:** add clickoutside option ([607403f](https://github.com/fremtind/jokul/commit/607403f))
-   **hamburger:** add animated hamburger to us as main menu ([79eb9f2](https://github.com/fremtind/jokul/commit/79eb9f2))
