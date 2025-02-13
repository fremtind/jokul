# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 5.1.12 (2024-12-18)

### Bug Fixes

- updates focus styles after review with designer ([ec80048](https://github.com/fremtind/jokul/commit/ec80048ac37499e67b6d56633b66d7a498aa92ba))

# 5.1.0 (2024-09-09)

### Features

- bruk semantiske variabler i breadcrumb ([d6a9ebb](https://github.com/fremtind/jokul/commit/d6a9ebb34a59fcbca9e55d84f3a0b71dae71eec8))

# 5.0.0 (2023-07-07)

### chore

- oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### Code Refactoring

- migrer vekk fra deprecated tilde-importer i Sass ([7ef2cf7](https://github.com/fremtind/jokul/commit/7ef2cf7a510122c69b2c5658c402f3dd9f5322f7)), closes [#3418](https://github.com/fremtind/jokul/issues/3418)

### BREAKING CHANGES

- Avhenger av ny majorversjon av core
- Tilde-prefikset er fjernet i all Sass-kode. Avhengig av oppsettet ditt kan det hende du
ikke trenger gjøre noe. Om bygget ditt brekker, konfigurer Sass sin loadPaths så den
inkluderer node_modules.

## 4.0.3 (2023-03-21)

### Bug Fixes

- sett charset i CSS-filene som genereres ([7346cb8](https://github.com/fremtind/jokul/commit/7346cb8644dd4b99bf0ae4d11c78a967b7b01618)), closes [#3467](https://github.com/fremtind/jokul/issues/3467)

# 4.0.0 (2023-01-30)

### Features

- bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))

### BREAKING CHANGES

- Avhenger av en versjon av jkl-core med breaking changes

## 3.0.9 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

## 3.0.4 (2022-10-18)

### Bug Fixes

-   fjern hovereffekt fra siste brødsmule ([2516a7f](https://github.com/fremtind/jokul/commit/2516a7fddb5d86ed135cb384ac94ebca23738ebb)), closes [#3128](https://github.com/fremtind/jokul/issues/3128)

# 3.0.0 (2022-09-08)

### Bug Fixes

-   bruk Jøkul-outline rundt siste brødsmule i sti ([1cdab46](https://github.com/fremtind/jokul/commit/1cdab4658168d353d673b10db3f2953ef36c1418))

### Features

-   differensier brødsmulesti i og utenfor kompakt layout ([76b085c](https://github.com/fremtind/jokul/commit/76b085cbd4d926b5727824c41329a28ad0a73984))

# [2.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-breadcrumb@1.0.12...@fremtind/jkl-breadcrumb@2.0.0) (2022-06-07)

### chore

-   fiks lintfeil ([4093d2a](https://github.com/fremtind/jokul/commit/4093d2a2ae7bbe0d30de882b9f5d144e8e77cede))

### Features

-   legg til en index-fil for Sass ([c4f8d0c](https://github.com/fremtind/jokul/commit/c4f8d0cd31bcab0706a49be1bdf0214fbbbbf646))

### BREAKING CHANGES

-   Pakken avhenger av en breaking versjon av core

# 1.0.0 (2022-02-11)

### Features

-   legg til en routernøytral brødsmulesti ([5ea8cee](https://github.com/fremtind/jokul/commit/5ea8cee12498ef94d19875ae13d4bc79876bd9db))
