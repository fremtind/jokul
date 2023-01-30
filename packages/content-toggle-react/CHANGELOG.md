# Changelog

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 4.0.11 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

## 4.0.8 (2022-11-11)

### Bug Fixes

-   legg til manglende dependencies internt mellom pakker ([761936f](https://github.com/fremtind/jokul/commit/761936ff2ecdf7338dcddb7f33e984f229cef48b)), closes [#3232](https://github.com/fremtind/jokul/issues/3232)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## 4.0.7 (2022-11-09)

### Bug Fixes

-   legg til manglende dependencies internt mellom pakker ([761936f](https://github.com/fremtind/jokul/commit/761936ff2ecdf7338dcddb7f33e984f229cef48b)), closes [#3232](https://github.com/fremtind/jokul/issues/3232)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## 4.0.4 (2022-10-07)

### Bug Fixes

-   bruk useAriaLiveRegion for å sette aria-live ([85d3a11](https://github.com/fremtind/jokul/commit/85d3a116477495a55e4849f70408fc4532ccc4a5)), closes [#3155](https://github.com/fremtind/jokul/issues/3155)
-   custom aria-live-håndtering for ContentToggle ([bd3b14f](https://github.com/fremtind/jokul/commit/bd3b14ff4f7d88b6cef5bdb4bc40271430b4ccab))
-   fjern uendelig loop ved toggle ([e42dfd0](https://github.com/fremtind/jokul/commit/e42dfd0b8c3accd1c227cfa13f5323d199ee24ee))

## [3.0.3](https://github.com/fremtind/jokul/compare/@fremtind/jkl-content-toggle-react@3.0.2...@fremtind/jkl-content-toggle-react@3.0.3) (2022-06-13)

### Bug Fixes

-   merk CSS og SCSS som side-effects ([dac2e2b](https://github.com/fremtind/jokul/commit/dac2e2b5f4d1b31485821bf6ad8ec4c7c2769cca))

### Performance Improvements

-   bruk tiny-glob for globbing av filer under bygg ([246952a](https://github.com/fremtind/jokul/commit/246952ae75afe20bcf0d007a0a068b76b114f9a6))

# [3.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-content-toggle-react@2.0.26...@fremtind/jkl-content-toggle-react@3.0.0) (2022-06-07)

### chore

-   fiks lintfeil ([4093d2a](https://github.com/fremtind/jokul/commit/4093d2a2ae7bbe0d30de882b9f5d144e8e77cede))

### BREAKING CHANGES

-   Pakken avhenger av en breaking versjon av core

## 2.0.6 (2021-12-20)

### Bug Fixes

-   sett default aria-live til polite ([23e1dd7](https://github.com/fremtind/jokul/commit/23e1dd7df2013ed94acb87ba3bf96f6e1f47bf64))

## 2.0.0 (2021-10-21)

### chore

-   updates dependencies ([b975200](https://github.com/fremtind/jokul/commit/b97520045c02e4bcb44ebde159c60a7dff7f01d6))

### BREAKING CHANGES

-   depends on jkl-core v8 with breaking changes

## 1.2.4 (2021-08-11)

### Bug Fixes

-   **@fremtind/jkl-content-toggle-react:** sets correct version for @fremtind/jkl-content-toggle in pa ([9563701](https://github.com/fremtind/jokul/commit/956370172c7cdbd4a508ace18da88b21174ec8b5))

## 1.2.0 (2021-07-13)

### Features

-   move labels into content toggle ([216463c](https://github.com/fremtind/jokul/commit/216463cf2e564198e3ca0a0a935d1a7ce2f709e4))

## 1.1.0 (2021-07-09)

### Features

-   version bump to 1.0.0, upgrade jkl-core dependency ([4a4be9f](https://github.com/fremtind/jokul/commit/4a4be9fb06ab7ed5c2ed2c1f377d32586c8d42e1))

## 0.4.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 0.3.0 (2021-06-07)

### Features

-   upgrade dependency jkl-core to v5.0.0 ([c3dc8dc](https://github.com/fremtind/jokul/commit/c3dc8dcbd3cba99502f1124cbe1dcaa688177f55))

### BREAKING CHANGES

-   Upgrades dependency jkl-core to v5.0.0, introducing breaking changes to color variables

## 0.2.5 (2021-02-12)

### Bug Fixes

-   add react 17 types as valid peerdep ([a074c34](https://github.com/fremtind/jokul/commit/a074c34dcece089ad6b4c581b8c920c8bdd4f1e0))

## 0.2.0 (2020-12-15)

### Features

-   display types in portal ([5c62a16](https://github.com/fremtind/jokul/commit/5c62a161c278d3a5a136741aea8dcf9b62338bda))

## 0.1.0 (2020-11-25)

### Features

-   update to react 17 ([4639058](https://github.com/fremtind/jokul/commit/4639058067eaa9be222825f8ac4f495a1e74cc0f))
