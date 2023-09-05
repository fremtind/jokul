# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 4.1.0 (2023-09-05)

### Features

- changed stateful styling for QuestionIcon ([dcd9cb6](https://github.com/fremtind/jokul/commit/dcd9cb6c2b9e3df2bfa0cfc99d1a3619daf2a01c))
- new colors for light/dark mode ([7085c87](https://github.com/fremtind/jokul/commit/7085c879673b9dcd6641fc19bc8bd6823c70b4d1))

# 4.0.0 (2023-07-07)

### chore

- oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### Code Refactoring

- migrer vekk fra deprecated tilde-importer i Sass ([7ef2cf7](https://github.com/fremtind/jokul/commit/7ef2cf7a510122c69b2c5658c402f3dd9f5322f7)), closes [#3418](https://github.com/fremtind/jokul/issues/3418)

### BREAKING CHANGES

- Avhenger av ny majorversjon av core
- Tilde-prefikset er fjernet i all Sass-kode. Avhengig av oppsettet ditt kan det hende du
ikke trenger gjøre noe. Om bygget ditt brekker, konfigurer Sass sin loadPaths så den
inkluderer node_modules.

# [3.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-tooltip@2.0.6...@fremtind/jkl-tooltip@3.0.0) (2023-07-03)

### Bug Fixes

- bruk bedre verdier for min- og maksbredde ([8476c0a](https://github.com/fremtind/jokul/commit/8476c0aa2e3022c5f05435d7a2fa461f8a8ffc51))
- legg til fokusindikasjon på standard triggerkomponent ([b8dbaf9](https://github.com/fremtind/jokul/commit/b8dbaf9aec449ee0504252543dd329ab42a568c6))

### Features

- ny komponent PopupTip for håndtering av tooltip i labels mm ([23d0453](https://github.com/fremtind/jokul/commit/23d0453926913d28bfa8588518ff28619731cdfc))
- ny, modulær Tooltip-komponent ([c5aa7e5](https://github.com/fremtind/jokul/commit/c5aa7e5726028357ccb9f91c26e53f0da2ca7173))

### BREAKING CHANGES

- Nytt API for Tooltip-komponenten

## 2.0.3 (2023-03-21)

### Bug Fixes

- sett charset i CSS-filene som genereres ([7346cb8](https://github.com/fremtind/jokul/commit/7346cb8644dd4b99bf0ae4d11c78a967b7b01618)), closes [#3467](https://github.com/fremtind/jokul/issues/3467)

# 2.0.0 (2023-01-30)

### Code Refactoring

- bruk spørsmålsikon fra ikonpakka i Tooltip ([a6a8fae](https://github.com/fremtind/jokul/commit/a6a8fae77178f3401514c5f574b81ba05a92a5d5))

### Features

- bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))

### BREAKING CHANGES

- Avhenger av en versjon av jkl-core med breaking changes
- Du må nå importere stilarket fra jkl-icons dersom du bruker Tooltip

## 1.0.7 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

## 1.0.2 (2022-11-07)

### Bug Fixes

-   sørg for at toltip-ikonet ikke strekkes i Safari Mobile ([8f9613a](https://github.com/fremtind/jokul/commit/8f9613a6ee605364a323b41d77a72c09a26f0c15)), closes [#3223](https://github.com/fremtind/jokul/issues/3223)

# 1.0.0 (2022-09-28)

### Bug Fixes

-   animer inn aktiv-state på knappen ([49ae646](https://github.com/fremtind/jokul/commit/49ae6460cd74cbdb196773dd85b81f6bcbff0b01))
-   farger i ulike tilstander ([47aa101](https://github.com/fremtind/jokul/commit/47aa101dcbc45c092b188a13140debc50fe4ce77))
-   gi innholdet en minimumsbredde også ([bbcfca1](https://github.com/fremtind/jokul/commit/bbcfca1eb41b21b23ba6beedf1b38353b64d66a5))
-   gjør tooltip-containeren synlig i forced-colors ([83de76c](https://github.com/fremtind/jokul/commit/83de76c80ee35c7cc887d7c30a11cf610d28f3d7))
-   legg tilbake active state ved focus ([b25ae38](https://github.com/fremtind/jokul/commit/b25ae38300f18e532705a06224c62707b6193647))
-   oppdater i henhold til Figma-branch ([5526d32](https://github.com/fremtind/jokul/commit/5526d32c0c206a2f7ea04133a155525766fa523c))
-   plassering av tooltip med flere typografinivåer ([6b20f06](https://github.com/fremtind/jokul/commit/6b20f069d1c118c5c94cf5e261bc3e58e4b0ed14))
-   sett aktiv state også på hover ([8582fd8](https://github.com/fremtind/jokul/commit/8582fd8afb74c9f0f97da9809af955c532a9373f))
-   sett box shadow til transparent for animasjon ([3cc31fb](https://github.com/fremtind/jokul/commit/3cc31fb35b104dcc412fc02540e6818ec0a34e3c))

### Features

-   **tooltip:** add tooltip ([35a3bf8](https://github.com/fremtind/jokul/commit/35a3bf8ab49bc548d28dc32c68abfdaed25a0542))
