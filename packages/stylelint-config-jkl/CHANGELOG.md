# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 8.0.5 (2025-01-08)

### Bug Fixes

- prefers gap/overflow shorthands ([be856d4](https://github.com/fremtind/jokul/commit/be856d40a274c7cfa88da109b2812e34840907a7))

# 8.0.0 (2023-07-07)

### chore

- oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### BREAKING CHANGES

- Avhenger av ny majorversjon av core

# 7.0.0 (2023-05-03)

### chore

- oppdater stylelint ([5f73b8f](https://github.com/fremtind/jokul/commit/5f73b8fbfb3585c05132b3c9f5f70f77226ea200))

### BREAKING CHANGES

- Dropper støtte for Stylelint 14, og legger til nye lintregler

# 6.0.0 (2022-11-01)

### chore

-   oppdater stylelint-config ([c2ed526](https://github.com/fremtind/jokul/commit/c2ed526b8b9c391921dfbe9d78c2b86eba9659ad))

### BREAKING CHANGES

-   Bumper majorversjon av basekonfigurasjon. Du kan oppleve at linteren finner nye feil.

# 5.0.0 (2022-09-05)

### chore

-   oppdater stylelint-config-standard ([71ffcdb](https://github.com/fremtind/jokul/commit/71ffcdbfb44a12cdb332c7a1644ea2a8db3bc174))

### BREAKING CHANGES

-   Oppdaterer til ny major av stylelint-config-standard

# 4.0.0 (2022-08-18)

### chore

-   oppdater til stylelint-config-standard 27 ([0c0763e](https://github.com/fremtind/jokul/commit/0c0763e2cc9b556dd30b3ddce70fb31bbff7fe68))

### BREAKING CHANGES

-   Oppdaterer stylelint-config-standard til versjon 27

# 3.0.0 (2022-06-08)

### chore

-   oppdater til stylelint-config-standard-scss 4.0.0 ([1bcee36](https://github.com/fremtind/jokul/commit/1bcee36c1fa676708162ee79ed3f926abc6d5047))

### BREAKING CHANGES

-   Oppdaterer basisconfigen til en ny major-versjon. Se
    https://github.com/stylelint-scss/stylelint-config-standard-scss/blob/main/CHANGELOG.md

## 2.0.8 (2022-06-07)

### Bug Fixes

-   skru av regel om kebab-case i animasjonsnavn ([5293091](https://github.com/fremtind/jokul/commit/529309108f3a1d5eb3486f7d6e52e7cdc6c267f3))
-   tillat underscore som første tegn i mixin, function ([4551602](https://github.com/fremtind/jokul/commit/4551602de1e1111316eb4fb648c567ce5ed127bd))

## [2.0.6](https://github.com/fremtind/jokul/compare/@fremtind/stylelint-config-jkl@2.0.5...@fremtind/stylelint-config-jkl@2.0.6) (2022-04-19)

### Bug Fixes

-   konfigurer stylelint til ikke å klage på systemfarger ([bfb9ad9](https://github.com/fremtind/jokul/commit/bfb9ad9ebdbfa50b9605a421127d595651dab9c1))

## 2.0.2 (2022-03-04)

### Bug Fixes

-   skjul dekorativt CSS-innhold fra skjermlesere ([5976cf9](https://github.com/fremtind/jokul/commit/5976cf93234ab2d189dfd2de888fa45a88480c55)), closes [#2774](https://github.com/fremtind/jokul/issues/2774)

# 2.0.0 (2022-02-17)

### chore

-   legg til function-no-unknown i stylelint ([f29c7c6](https://github.com/fremtind/jokul/commit/f29c7c647618432834db2d5a89350a365895e217))

### BREAKING CHANGES

-   Den anbefalte regelen function-no-unknown er skrudd på, som kan gi nye lintfeil.

# 1.1.0 (2022-02-07)

### Bug Fixes

-   skru av no-descending-specificity ([68184f7](https://github.com/fremtind/jokul/commit/68184f7fae92256c4c30e7a0be0a23d722bb325e))
-   tillat currentColor ([eade58f](https://github.com/fremtind/jokul/commit/eade58f6583a473a272df7745aaafe92bb3a4fbe))

### Features

-   organiser Jøkuls stylelint-config som en pakke ([90fbe9a](https://github.com/fremtind/jokul/commit/90fbe9a535700b479b3b5ef1c37e9b6cbd348976)), closes [#2596](https://github.com/fremtind/jokul/issues/2596)
