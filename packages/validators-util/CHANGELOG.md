# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 2.2.2 (2022-02-01)

### Bug Fixes

-   **isValidName:** added support for minus symbol in names ([a38d2cc](https://github.com/fremtind/jokul/commit/a38d2cc1cbbe0daa15780890a315a0cf5eabbb60))

## 2.2.0 (2021-12-22)

### Features

-   **validators:** added validators for isValidName and hasMinimumWords ([19247cb](https://github.com/fremtind/jokul/commit/19247cbb412a18a0de0d722ebc136d1904e48fee))

## 2.1.0 (2021-12-21)

### Features

-   changed from ssn to fodselsnummer and made the documentation simpler ([604c08f](https://github.com/fremtind/jokul/commit/604c08f77d54ccbbc3029650cb9de3af91bbbcbc))
-   created new form validators ([92e1e35](https://github.com/fremtind/jokul/commit/92e1e35b129dc22f0e93b7290092374323e57aa2))

## 2.0.0 (2021-10-01)

### Bug Fixes

-   oppdater valideringsreglene for chassisnummer ([d402028](https://github.com/fremtind/jokul/commit/d402028436033925f456f4a7d0775592a1a7aec8)), closes [#1662](https://github.com/fremtind/jokul/issues/1662)

### BREAKING CHANGES

-   isValidChassisnummer tillater nå ikke-numeriske strings og strings på 17 tegn. Om du parser
    resultatet som et tall eller har en lengdebegrensning i databaseskjemaet ditt må du oppdatere
    appen din til å støtte den nye regelen.

## 1.3.10 (2021-03-22)

### Bug Fixes

-   add deprecation warning dogid ([fae6b35](https://github.com/fremtind/jokul/commit/fae6b353ecd4859d446438ea0d4dbb09ef447e6c))

## 1.3.0 (2020-11-02)

### Features

-   **@fremtind/jkl-validators-util:** adds validator for dog-id to validator-utils ([3a81afd](https://github.com/fremtind/jokul/commit/3a81afdfa9f095fac59ca51f02ff3b2fcd8d2ded)), closes [#1508](https://github.com/fremtind/jokul/issues/1508)

## 1.2.19 (2020-11-02)

### Bug Fixes

-   **@fremtind/jkl-validators-util:** renames package-folder-name from validations-util to validators- ([78d95d4](https://github.com/fremtind/jokul/commit/78d95d4f05e0ad14f406fdf0d8b5183f8d573b93)), closes [#1472](https://github.com/fremtind/jokul/issues/1472)

## 1.2.0 (2020-07-29)

### Features

-   **build:** use @babel/runtime instead of inlining helpers in each file ([bbadce5](https://github.com/fremtind/jokul/commit/bbadce52ba4da5d540b479b07273332587bed436)), closes [#1136](https://github.com/fremtind/jokul/issues/1136)

## 1.1.0 (2020-06-26)

### Features

-   add util package for validation ([417ac14](https://github.com/fremtind/jokul/commit/417ac145a3c021f3b5f9e5fc2824ce4021e55e21))
