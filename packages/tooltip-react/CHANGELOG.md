# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.5.2](https://github.com/fremtind/jokul/compare/@fremtind/jkl-tooltip-react@4.5.1...@fremtind/jkl-tooltip-react@4.5.2) (2024-11-12)

### Bug Fixes

- la bruker interagere med åpent PopupTip ([1ff8ff7](https://github.com/fremtind/jokul/commit/1ff8ff7e7c2f1a3d115520e014e5621965efd58c))

# 4.5.0 (2024-11-04)

### Bug Fixes

- ikke les opp material symbols i Tooltip ([d589410](https://github.com/fremtind/jokul/commit/d58941093ddc69ec30d7f89a62137a869e4cf63f))

### Features

- gå vekk fra framer motion for animasjon av tooltip ([aed7d15](https://github.com/fremtind/jokul/commit/aed7d157e8f62a3459d15c1b720405b26529ee41))
- reduser bevegelse i tooltip v/prefersReducedMotion ([c4867d9](https://github.com/fremtind/jokul/commit/c4867d9fbef47e7912498a875b247891d9636fb5))

## [4.4.1](https://github.com/fremtind/jokul/compare/@fremtind/jkl-tooltip-react@4.4.0...@fremtind/jkl-tooltip-react@4.4.1) (2024-10-04)

### Bug Fixes

- close Select's listbox when tooltip trigger receives focus ([c450730](https://github.com/fremtind/jokul/commit/c450730bb9e86e8c84e3e399cb1b807ed9227405)), closes [#4134](https://github.com/fremtind/jokul/issues/4134)

# 4.4.0 (2024-10-04)

### Bug Fixes

- tooltip observes data-layout-density attribute ([9601a3f](https://github.com/fremtind/jokul/commit/9601a3f9c31ca076729cda234f3d04787ff334ec))

### Features

- extract utility for calculating theme and density ([65a850c](https://github.com/fremtind/jokul/commit/65a850ca988f077b2e4759262beed239b84a99d9))

# 4.3.0 (2024-09-25)

### Bug Fixes

- bruk riktigere version range for framer motion ([5224e9b](https://github.com/fremtind/jokul/commit/5224e9b320893a237f6cf48741b2a1ac4fb74d51))

### Features

- reduser bundle-size for framer og tillat flere versjoner ([94cc27a](https://github.com/fremtind/jokul/commit/94cc27aad9c0b5de15472ce916e5c3ba8b9af793))

## 4.2.24 (2024-08-19)

### Bug Fixes

- riktig størrelse av ikon i tooltip ([f09d757](https://github.com/fremtind/jokul/commit/f09d757b26a78459a1a89c91a9781f7448c0cdb6))

## 4.2.21 (2024-07-25)

### Bug Fixes

- duplicate key error with tooltip triggered by hover ([dbb9c37](https://github.com/fremtind/jokul/commit/dbb9c37d13fa87ba7ae17fded76941373c8d1d98)), closes [#3918](https://github.com/fremtind/jokul/issues/3918)

## [4.2.20](https://github.com/fremtind/jokul/compare/@fremtind/jkl-tooltip-react@4.2.19...@fremtind/jkl-tooltip-react@4.2.20) (2024-06-12)

### Bug Fixes

- bruk riktig aria-label på TooltipTrigger ([b8a81b3](https://github.com/fremtind/jokul/commit/b8a81b3c7e765c5df588ad7bf533e2d5c4066d32))

## [4.2.6](https://github.com/fremtind/jokul/compare/@fremtind/jkl-tooltip-react@4.2.5...@fremtind/jkl-tooltip-react@4.2.6) (2023-10-03)

### Bug Fixes

- ikke la jkl-klassen overstyre bakgrunnsfarge ([b330a9d](https://github.com/fremtind/jokul/commit/b330a9dbfce3b816ae87af0aea74c84e3a56d691))

# 4.2.0 (2023-09-05)

### Features

-   changed stateful styling for QuestionIcon ([dcd9cb6](https://github.com/fremtind/jokul/commit/dcd9cb6c2b9e3df2bfa0cfc99d1a3619daf2a01c))

# 4.1.0 (2023-08-24)

### Features

-   rendre tooltip i en portal på rot av ([89a5544](https://github.com/fremtind/jokul/commit/89a5544f41c2652f34a3b34b4accf686f42201b3))

# 4.0.0 (2023-07-07)

### chore

-   oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### BREAKING CHANGES

-   Avhenger av ny majorversjon av core

# [3.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-tooltip-react@2.0.18...@fremtind/jkl-tooltip-react@3.0.0) (2023-07-03)

### Bug Fixes

-   bruk bedre verdier for min- og maksbredde ([8476c0a](https://github.com/fremtind/jokul/commit/8476c0aa2e3022c5f05435d7a2fa461f8a8ffc51))
-   bruk span for TooltipContent så den kan brukes i avsnitt ([8721bc2](https://github.com/fremtind/jokul/commit/8721bc2b0863f85f0b4a5e8923ab685b681ce7bf))

### Features

-   endre default delay til 250ms ([3bf8007](https://github.com/fremtind/jokul/commit/3bf80078a22a3a7b13e49df0db83799f501d0865))
-   ny komponent PopupTip for håndtering av tooltip i labels mm ([23d0453](https://github.com/fremtind/jokul/commit/23d0453926913d28bfa8588518ff28619731cdfc))
-   ny, modulær Tooltip-komponent ([c5aa7e5](https://github.com/fremtind/jokul/commit/c5aa7e5726028357ccb9f91c26e53f0da2ca7173))
-   sørg for at tooltip leses av skjermlesere som en del av innholdet i trigger ([63f3462](https://github.com/fremtind/jokul/commit/63f346203798a3fae462bcba3a01f0d230cc9d1a))

### BREAKING CHANGES

-   Nytt API for Tooltip-komponenten

# [2.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-tooltip-react@1.0.24...@fremtind/jkl-tooltip-react@2.0.0) (2023-01-30)

### Code Refactoring

-   bruk spørsmålsikon fra ikonpakka i Tooltip ([a6a8fae](https://github.com/fremtind/jokul/commit/a6a8fae77178f3401514c5f574b81ba05a92a5d5))

### Features

-   bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))

### BREAKING CHANGES

-   Avhenger av en versjon av jkl-core med breaking changes
-   Du må nå importere stilarket fra jkl-icons dersom du bruker Tooltip

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
