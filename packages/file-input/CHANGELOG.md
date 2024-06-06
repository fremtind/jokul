# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 2.0.10 (2024-06-06)

### Bug Fixes

- handle Files with path set better ([696f155](https://github.com/fremtind/jokul/commit/696f155853f7cfc06153d1a8c4b0019facb7a10d)), closes [#3891](https://github.com/fremtind/jokul/issues/3891)

# 2.0.0 (2023-07-07)

### chore

- oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### Code Refactoring

- migrer vekk fra deprecated tilde-importer i Sass ([7ef2cf7](https://github.com/fremtind/jokul/commit/7ef2cf7a510122c69b2c5658c402f3dd9f5322f7)), closes [#3418](https://github.com/fremtind/jokul/issues/3418)

### BREAKING CHANGES

- Avhenger av ny majorversjon av core
- Tilde-prefikset er fjernet i all Sass-kode. Avhengig av oppsettet ditt kan det hende du
ikke trenger gjøre noe. Om bygget ditt brekker, konfigurer Sass sin loadPaths så den
inkluderer node_modules.

# 1.0.0 (2023-05-02)

### Bug Fixes

- unngå at progressbar forsvinner ved kort filnavn ([9880538](https://github.com/fremtind/jokul/commit/988053897dbb890430f5cd4cb9d285b2e14ef728))

### Features

- small-variant av filinput ([9b0efc8](https://github.com/fremtind/jokul/commit/9b0efc833ded1b48de30d94b5a299a4c400edbb9))
