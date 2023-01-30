# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-tooltip-react@1.0.24...@fremtind/jkl-tooltip-react@2.0.0) (2023-01-30)

### Code Refactoring

- bruk spørsmålsikon fra ikonpakka i Tooltip ([a6a8fae](https://github.com/fremtind/jokul/commit/a6a8fae77178f3401514c5f574b81ba05a92a5d5))

### Features

- bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))

### BREAKING CHANGES

- Avhenger av en versjon av jkl-core med breaking changes
- Du må nå importere stilarket fra jkl-icons dersom du bruker Tooltip

## 1.0.15 (2022-12-02)

### Bug Fixes

-   forbedre brukeropplevelse for tooltip ([94d8573](https://github.com/fremtind/jokul/commit/94d8573abeaac589f0453ce66fdb693307cabfcf))
-   lukk tooltip når fokus flyttes vekk fra knappen ([dff5c56](https://github.com/fremtind/jokul/commit/dff5c563dfbea5840bb27535f2083972e70c760f))

## 1.0.11 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

## [1.0.8](https://github.com/fremtind/jokul/compare/@fremtind/jkl-tooltip-react@1.0.7...@fremtind/jkl-tooltip-react@1.0.8) (2022-11-15)

### Bug Fixes

-   changed padding for tooltip arrow hence the design sketches ([9c78d5e](https://github.com/fremtind/jokul/commit/9c78d5eb365870acf2efc99eadb07e14a081c9ba)), closes [#3256](https://github.com/fremtind/jokul/issues/3256)

## [1.0.7](https://github.com/fremtind/jokul/compare/@fremtind/jkl-tooltip-react@1.0.5...@fremtind/jkl-tooltip-react@1.0.7) (2022-11-11)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## [1.0.6](https://github.com/fremtind/jokul/compare/@fremtind/jkl-tooltip-react@1.0.5...@fremtind/jkl-tooltip-react@1.0.6) (2022-11-09)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## [1.0.2](https://github.com/fremtind/jokul/compare/@fremtind/jkl-tooltip-react@1.0.1...@fremtind/jkl-tooltip-react@1.0.2) (2022-10-07)

### Bug Fixes

-   fjern overflødig aria-live som ga dobbel opplesing ([c7d839d](https://github.com/fremtind/jokul/commit/c7d839d70bc7468e906569d0500d6bdf3137339a))
-   flytt aria-live til selve popupen i tooltip, slik at hjelpetekst ikke leses opp ved sidenaviger ([ee35671](https://github.com/fremtind/jokul/commit/ee356715eb98f934046a8d51fd1eff28d9aa7f3c)), closes [#3155](https://github.com/fremtind/jokul/issues/3155)

# 1.0.0 (2022-09-28)

### Bug Fixes

-   la teksten leses flere ganger med skjermleser ([de0b63d](https://github.com/fremtind/jokul/commit/de0b63d9e169d2f79c791cca6848d3261c67a39c))
-   plassering av tooltip med flere typografinivåer ([6b20f06](https://github.com/fremtind/jokul/commit/6b20f069d1c118c5c94cf5e261bc3e58e4b0ed14))
-   sett easeIn og duration 100 som speccet ([57d9a9b](https://github.com/fremtind/jokul/commit/57d9a9b1dfdabdcd1ed2f0387411e058c50afa88))

### Features

-   **tooltip:** add tooltip ([35a3bf8](https://github.com/fremtind/jokul/commit/35a3bf8ab49bc548d28dc32c68abfdaed25a0542))
