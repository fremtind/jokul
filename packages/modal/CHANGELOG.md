# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 2.2.0 (2024-09-09)

### Features

- bruk semantiske fargevariabler ([e967724](https://github.com/fremtind/jokul/commit/e967724979b074f62aa92a8396292e17b51a4896))

# 2.1.0 (2023-09-05)

### Features

-   updated to match Figma changes ([0724f7d](https://github.com/fremtind/jokul/commit/0724f7d3163d3affbfef992faaf92b94ac25f42c)), closes [#3667](https://github.com/fremtind/jokul/issues/3667)

## 2.0.1 (2023-07-12)

### Bug Fixes

-   changed margin on jkl-modal for small devices ([a32323c](https://github.com/fremtind/jokul/commit/a32323c46654641b3571b7066fab82eb0fe43608))

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

## 1.0.1 (2023-05-23)

### Bug Fixes

-   rett opp feil dependency av modalen ([76370bd](https://github.com/fremtind/jokul/commit/76370bd801a83718572ee36827db46afa18bee0c))

# 1.0.0 (2023-05-22)

### Features

-   modal ([e2ddf77](https://github.com/fremtind/jokul/commit/e2ddf77af01f9c7e0e662bf3c582fc470bb29d82))
