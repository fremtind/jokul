# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [8.0.4](https://github.com/fremtind/jokul/compare/@fremtind/jkl-alert-message-react@8.0.3...@fremtind/jkl-alert-message-react@8.0.4) (2022-06-13)

### Bug Fixes

-   merk CSS og SCSS som side-effects ([dac2e2b](https://github.com/fremtind/jokul/commit/dac2e2b5f4d1b31485821bf6ad8ec4c7c2769cca))

### Performance Improvements

-   bruk tiny-glob for globbing av filer under bygg ([246952a](https://github.com/fremtind/jokul/commit/246952ae75afe20bcf0d007a0a068b76b114f9a6))

## 8.0.1 (2022-06-07)

### Bug Fixes

-   rett opp avhengighet av icon-button ([d179921](https://github.com/fremtind/jokul/commit/d1799213a7859e3e72d4aecc69a74f7c6b399d54))

# [8.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-alert-message-react@7.0.17...@fremtind/jkl-alert-message-react@8.0.0) (2022-06-07)

### chore

-   fiks lintfeil ([4093d2a](https://github.com/fremtind/jokul/commit/4093d2a2ae7bbe0d30de882b9f5d144e8e77cede))

### BREAKING CHANGES

-   Pakken avhenger av en breaking versjon av core

## 7.0.4 (2022-02-22)

### Bug Fixes

-   plasser lukk-knapp på linje med tittel og ikon ([224b0dc](https://github.com/fremtind/jokul/commit/224b0dc9828a8fa4c7b6ed6ce9b2db0bd371c2c2)), closes [#2623](https://github.com/fremtind/jokul/issues/2623)

# 7.0.0 (2022-02-07)

### Bug Fixes

-   fjern inverted-prop ([de5f8b8](https://github.com/fremtind/jokul/commit/de5f8b83ae8f025826f4c56d3aeb5e081dea66cc)), closes [#2646](https://github.com/fremtind/jokul/issues/2646)

### BREAKING CHANGES

-   Fjernet `inverted`-prop. Bruk `data-theme="dark"` om du trenger overstyre temaet.

## 6.0.5 (2021-11-18)

### Bug Fixes

-   gi AlertMessage riktig displayName, typing ([e32bdaa](https://github.com/fremtind/jokul/commit/e32bdaa81a097b4e5b130b1447346b40774ff2f7))

## 6.0.0 (2021-10-28)

### Bug Fixes

-   remove inverted option from alertMessage and always light mode inside component ([9b2466c](https://github.com/fremtind/jokul/commit/9b2466cf55cd093be9fed1ea5bb2ed86b92568b1))

### BREAKING CHANGES

-   Removed inverted option

## 5.0.0 (2021-10-21)

### chore

-   updates dependencies ([b975200](https://github.com/fremtind/jokul/commit/b97520045c02e4bcb44ebde159c60a7dff7f01d6))

### BREAKING CHANGES

-   depends on jkl-core v8 with breaking changes

## 4.2.3 (2021-10-20)

### Bug Fixes

-   always light mode inside MessageBox and AlertMessage ([547311f](https://github.com/fremtind/jokul/commit/547311f7e36aa0aef937dc62007225d9ad23b73c))

## 4.2.0 (2021-10-13)

### Features

-   implement new alert message design ([657861c](https://github.com/fremtind/jokul/commit/657861ccdd0789b7935357cb8dd5a9fdbe2ecc3d))

## 4.1.0 (2021-09-13)

### Features

-   prop for å styre role på MessageBox ([87646ae](https://github.com/fremtind/jokul/commit/87646ae6437cb368aa6567e637d59ab2ab923b71)), closes [#1687](https://github.com/fremtind/jokul/issues/1687)

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

## 1.6.1 (2021-03-25)

### Bug Fixes

-   <div> cannot appear as a descendant of <p> ([eda1926](https://github.com/fremtind/jokul/commit/eda192667077e06f1273fe0c32ea7414aa04acc4))

## 1.6.0 (2021-03-05)

### Features

-   add close button to alert messages ([71e6438](https://github.com/fremtind/jokul/commit/71e6438b3a4532eac238fc6f207bbf75f26cd467))

## 1.5.5 (2021-02-12)

### Bug Fixes

-   add react 17 types as valid peerdep ([a074c34](https://github.com/fremtind/jokul/commit/a074c34dcece089ad6b4c581b8c920c8bdd4f1e0))

## 1.5.0 (2020-12-15)

### Features

-   display types in portal ([5c62a16](https://github.com/fremtind/jokul/commit/5c62a161c278d3a5a136741aea8dcf9b62338bda))

## 1.4.0 (2020-11-25)

### Features

-   update to react 17 ([4639058](https://github.com/fremtind/jokul/commit/4639058067eaa9be222825f8ac4f495a1e74cc0f))

## 1.3.0 (2020-09-01)

### Features

-   implement global dark mode ([47b8e2d](https://github.com/fremtind/jokul/commit/47b8e2dc0abcd366212fc67f306f8523a63d11c8))

## 1.2.0 (2020-07-29)

### Features

-   **build:** use @babel/runtime instead of inlining helpers in each file ([bbadce5](https://github.com/fremtind/jokul/commit/bbadce52ba4da5d540b479b07273332587bed436)), closes [#1136](https://github.com/fremtind/jokul/issues/1136)

## 1.1.0 (2020-05-15)

### Bug Fixes

-   change maxWidth to maxContentWidth to make it more descriptive ([88c6c9f](https://github.com/fremtind/jokul/commit/88c6c9f2a8ce04b97ae5d636d41b5be0e7157854))
-   minor cleanup ([1fd5c8e](https://github.com/fremtind/jokul/commit/1fd5c8ec9b8f7d29513506ce8c507994da8daaae))

### Features

-   **alert-message:** rename and split messages package ([11373ac](https://github.com/fremtind/jokul/commit/11373ac88cbfc5ed2604846c742e8a05f8c0561d))
-   **portal:** lagt til do's and dont's ([122474c](https://github.com/fremtind/jokul/commit/122474c618ffaafde8e1117df2e985df09166cda))
