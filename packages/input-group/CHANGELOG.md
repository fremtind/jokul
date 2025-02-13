# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 3.1.0 (2024-09-09)

### Features

- bruk semantiske fargevariabler ([e967724](https://github.com/fremtind/jokul/commit/e967724979b074f62aa92a8396292e17b51a4896))

## 3.0.10 (2024-02-08)

### Bug Fixes

- legg tekst ved siden av ikonet i error-label under tekstfelt ([003bb66](https://github.com/fremtind/jokul/commit/003bb66a3cb2172b9502e3731c7f112a3c2118ad))

# 3.0.0 (2023-07-07)

### chore

- oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### Code Refactoring

- migrer vekk fra deprecated tilde-importer i Sass ([7ef2cf7](https://github.com/fremtind/jokul/commit/7ef2cf7a510122c69b2c5658c402f3dd9f5322f7)), closes [#3418](https://github.com/fremtind/jokul/issues/3418)

### BREAKING CHANGES

- Avhenger av ny majorversjon av core
- Tilde-prefikset er fjernet i all Sass-kode. Avhengig av oppsettet ditt kan det hende du
ikke trenger gjøre noe. Om bygget ditt brekker, konfigurer Sass sin loadPaths så den
inkluderer node_modules.

## [2.1.2](https://github.com/fremtind/jokul/compare/@fremtind/jkl-input-group@2.1.1...@fremtind/jkl-input-group@2.1.2) (2023-05-04)

### Bug Fixes

- rett opp display i ikoner, oppførsel i supportlabel ([37c3d2f](https://github.com/fremtind/jokul/commit/37c3d2fbf3503ad8ad5aa9944f8136e1aff64248))

## [2.1.1](https://github.com/fremtind/jokul/compare/@fremtind/jkl-input-group@2.1.0...@fremtind/jkl-input-group@2.1.1) (2023-05-03)

### Bug Fixes

- størrelse på ikon for supportlabel ([68dc83e](https://github.com/fremtind/jokul/commit/68dc83e9eb4436f6f8bdc422f44a9c465f63e6ba))

# 2.1.0 (2023-05-02)

### Features

- legg til mulighet for andre statuser i supportlabel ([403894c](https://github.com/fremtind/jokul/commit/403894c0a0d1c645682a0e5a2973deb0ca804ce6))

## 2.0.3 (2023-03-21)

### Bug Fixes

- sett charset i CSS-filene som genereres ([7346cb8](https://github.com/fremtind/jokul/commit/7346cb8644dd4b99bf0ae4d11c78a967b7b01618)), closes [#3467](https://github.com/fremtind/jokul/issues/3467)

# 2.0.0 (2023-01-30)

### Features

- bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))
- legg til FieldGroup i input-group ([587b54c](https://github.com/fremtind/jokul/commit/587b54cb8cc48b12f89498036415045fa5e71d05))
- legg til Label og SupportLabel i InputGroup ([ce7b666](https://github.com/fremtind/jokul/commit/ce7b66681eb7c42a61565c6f0115790927d3dc22))

### BREAKING CHANGES

- Avhenger av en versjon av jkl-core med breaking changes

# 1.0.0 (2023-01-16)

### Bug Fixes

-   breddebugs etter merge med main ([5853b7a](https://github.com/fremtind/jokul/commit/5853b7a5ffeccfda615687bc2aec3bcd721972fe))

### Features

-   legg til InputGroup-komponent ([6a8f329](https://github.com/fremtind/jokul/commit/6a8f329763a711135337bb286bffcd2b5480ec77))
