# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 8.0.9 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

## 8.0.6 (2022-11-11)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## 8.0.5 (2022-11-09)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

# 8.0.0 (2022-09-08)

### Bug Fixes

-   fjern jkl-body fra SummaryTable ([5b07902](https://github.com/fremtind/jokul/commit/5b0790250b288c8195202cb3202bcaab0b79d66d))

## [7.0.3](https://github.com/fremtind/jokul/compare/@fremtind/jkl-summary-table-react@7.0.2...@fremtind/jkl-summary-table-react@7.0.3) (2022-06-13)

### Bug Fixes

-   merk CSS og SCSS som side-effects ([dac2e2b](https://github.com/fremtind/jokul/commit/dac2e2b5f4d1b31485821bf6ad8ec4c7c2769cca))

### Performance Improvements

-   bruk tiny-glob for globbing av filer under bygg ([246952a](https://github.com/fremtind/jokul/commit/246952ae75afe20bcf0d007a0a068b76b114f9a6))

# [7.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-summary-table-react@6.0.18...@fremtind/jkl-summary-table-react@7.0.0) (2022-06-07)

### chore

-   fiks lintfeil ([4093d2a](https://github.com/fremtind/jokul/commit/4093d2a2ae7bbe0d30de882b9f5d144e8e77cede))

### Code Refactoring

-   oppdater til nyeste core ([1db381f](https://github.com/fremtind/jokul/commit/1db381fdc0d3f1c35818d2feec49977331cd2fad))

### BREAKING CHANGES

-   Pakken avhenger av en breaking versjon av core
-   Avhenger av ny majorversjon av core

## [6.0.10](https://github.com/fremtind/jokul/compare/@fremtind/jkl-summary-table-react@6.0.9...@fremtind/jkl-summary-table-react@6.0.10) (2022-03-07)

### Bug Fixes

-   makes header and content props of SummaryTableRow more flexible ([783c2de](https://github.com/fremtind/jokul/commit/783c2dec4acef7356e77587e6b1b035750d265dd))

## 6.0.1 (2022-01-21)

### Bug Fixes

-   lesbar farge på mørk bakgrunn i eksempler ([ad323ac](https://github.com/fremtind/jokul/commit/ad323ac291da0157742a1f307e0eb8cfb5815e31)), closes [#2661](https://github.com/fremtind/jokul/issues/2661)

## 6.0.0 (2022-01-12)

### Features

-   makes summary-table more flexible ([374f557](https://github.com/fremtind/jokul/commit/374f5579b3ddf2de2f2bc0662583c0ac8c8b1c06)), closes [#2617](https://github.com/fremtind/jokul/issues/2617)

### BREAKING CHANGES

-   breaking: new props for summary-table

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

## 1.4.3 (2021-02-12)

### Bug Fixes

-   add react 17 types as valid peerdep ([a074c34](https://github.com/fremtind/jokul/commit/a074c34dcece089ad6b4c581b8c920c8bdd4f1e0))

## 1.4.0 (2021-01-22)

### Features

-   **summarytable:** add bold th option ([ddedc30](https://github.com/fremtind/jokul/commit/ddedc301e734eac23e4aed9d3cd206b903fe2d9b))

## 1.3.1 (2021-01-07)

### Bug Fixes

-   **summary-table-react:** add style pkg as dependency to ensure correct behaviour ([955bdab](https://github.com/fremtind/jokul/commit/955bdab07b373b9f3828a584f858eed25601800e))

## 1.3.0 (2020-12-15)

### Features

-   display types in portal ([5c62a16](https://github.com/fremtind/jokul/commit/5c62a161c278d3a5a136741aea8dcf9b62338bda))

## 1.2.1 (2020-12-01)

### Bug Fixes

-   **@fremtind/jkl-summary-table:** refactores SummaryTable to be a single component without wrappers ([694f1da](https://github.com/fremtind/jokul/commit/694f1da3faf4090ca3874f2e9601c7d144f62f63))

## 1.2.0 (2020-11-25)

### Features

-   update to react 17 ([4639058](https://github.com/fremtind/jokul/commit/4639058067eaa9be222825f8ac4f495a1e74cc0f))

## 1.1.0 (2020-11-18)

### Features

-   **@fremtind/jkl-summary-table:** a simple table with two columns ([db1bc55](https://github.com/fremtind/jokul/commit/db1bc55ff4df3a42ab9efa2a7df39c6775185e8b)), closes [#1484](https://github.com/fremtind/jokul/issues/1484)
