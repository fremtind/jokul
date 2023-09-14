# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 2.1.0 (2023-09-06)

### Features

-   updated to match Figma changes ([d13f136](https://github.com/fremtind/jokul/commit/d13f13664c2d7a5b404437323608400dd359fae3)), closes [#3672](https://github.com/fremtind/jokul/issues/3672)

# 2.0.0 (2023-07-07)

### chore

-   oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### Code Refactoring

-   migrer vekk fra deprecated tilde-importer i Sass ([7ef2cf7](https://github.com/fremtind/jokul/commit/7ef2cf7a510122c69b2c5658c402f3dd9f5322f7)), closes [#3418](https://github.com/fremtind/jokul/issues/3418)

### BREAKING CHANGES

-   Avhenger av ny majorversjon av core
-   Tilde-prefikset er fjernet i all Sass-kode. Avhengig av oppsettet ditt kan det hende du
    ikke trenger gjøre noe. Om bygget ditt brekker, konfigurer Sass sin loadPaths så den
    inkluderer node_modules.

# 1.0.0 (2023-06-15)

### Bug Fixes

-   bruk ny timingverdi som gir balanse ([08b8540](https://github.com/fremtind/jokul/commit/08b85409e96574625c738cc0b7947872dd4113e4))

### Features

-   toast ([cbaeb46](https://github.com/fremtind/jokul/commit/cbaeb46dd805e21fe14d7a1debec206519c41d50))
