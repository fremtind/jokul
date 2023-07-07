# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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

## 1.0.1 (2023-03-21)

### Bug Fixes

- sett charset i CSS-filene som genereres ([7346cb8](https://github.com/fremtind/jokul/commit/7346cb8644dd4b99bf0ae4d11c78a967b7b01618)), closes [#3467](https://github.com/fremtind/jokul/issues/3467)

# 1.0.0 (2023-02-23)

### Bug Fixes

-   correct color for contact-information ([c1ab59c](https://github.com/fremtind/jokul/commit/c1ab59c601446a015d2fe1981563a37ddf2ae54c))
-   style adjustment ([465a9a4](https://github.com/fremtind/jokul/commit/465a9a4d812ab10eb4025b8dcf8572fe7b0eeb0c))

### Features

-   new contact-information component ([7ce002e](https://github.com/fremtind/jokul/commit/7ce002e7c0506a4b2eea6c21a98ab39e02a568b4))
