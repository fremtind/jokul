# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 5.0.0 (2021-10-25)

### Features

- nytt tabelldesign ([9f833fd](https://github.com/fremtind/jokul/commit/9f833fdb76fd1965a89370adcf49e6e5900ca59e))

### BREAKING CHANGES

- Bryter tabellen opp i flere klasser. Nye klassenavn, modifiers, med mer.

## 4.0.0 (2021-10-21)

### Features

- use new spacing scale ([5694495](https://github.com/fremtind/jokul/commit/5694495f56d3c1f0e675433b35cfb0e693b93a82)), closes [#2382](https://github.com/fremtind/jokul/issues/2382)

### BREAKING CHANGES

- new spacing scale: see migration guide for jkl-core

## 3.0.0 (2021-07-09)

### Bug Fixes

- **sass:** make sure to import functions where using rem() ([02268ab](https://github.com/fremtind/jokul/commit/02268ab1494165ac489978d17bd404030347d9ff))

### Features

- use new typographic scale ([105dac2](https://github.com/fremtind/jokul/commit/105dac262f5cf98e9005eeaf86536a5c617ea27c))

### BREAKING CHANGES

- Depends on jkl-core-version with breaking changes

## 2.0.0 (2021-06-07)

### Features

-   new colors ([9144947](https://github.com/fremtind/jokul/commit/9144947766c73fbe5eaac3372495006e3b89dec7))

### BREAKING CHANGES

-   all color variables are changed

## 1.2.2 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 1.2.1 (2020-03-16)

### Bug Fixes

-   **table:** fix bug causing shadow not to be drawn in IE 11 ([f8ec243](https://github.com/fremtind/jokul/commit/f8ec2430c68f7bafcfcc713ebc2f60ed133da0ac))

## 1.2.0 (2020-02-19)

### Features

-   export scss files with style pkgs ([edb6278](https://github.com/fremtind/jokul/commit/edb627838075d3d613ae78b6aae765c81067ba6a))

## 1.1.2 (2020-02-18)

### Bug Fixes

-   make use of new color token (changed name) ([f14c149](https://github.com/fremtind/jokul/commit/f14c149f779e65fe0775afde4421aef26be8ed1d))
-   make use of new core color tokens ([075f7b3](https://github.com/fremtind/jokul/commit/075f7b37920805bf780120247461d79c3d8c406e))
-   use new text-style mixins ([2873a57](https://github.com/fremtind/jokul/commit/2873a57f4570ddb87a7390a773433d26a9fde4ac))

## 1.1.0 (2020-01-16)

### Bug Fixes

-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

### Features

-   **table:** update table with new paragraph styles ([f5f8a35](https://github.com/fremtind/jokul/commit/f5f8a351bd4b3a0be90c6ea07f735b719c28a127))

## 0.3.0 (2019-10-09)

### Bug Fixes

-   **core:** add and use wcag-compliant error/focus colors ([c714b45](https://github.com/fremtind/jokul/commit/c714b45))

### Features

-   **core:** add pure white as a supporting color ([1558fa9](https://github.com/fremtind/jokul/commit/1558fa9))

## 0.2.0 (2019-09-23)

### Bug Fixes

-   **jkl-table:** move hover/active state to anchor-rows only ([f04128e](https://github.com/fremtind/jokul/commit/f04128e))
-   **jkl-table-react:** use jkl-sr-only to hide anchors in tables ([6b79957](https://github.com/fremtind/jokul/commit/6b79957))

### Features

-   **jkl-table:** add initial version of table ([582b456](https://github.com/fremtind/jokul/commit/582b456))
-   **jkl-table:** add support for anchor/link-rows ([8294390](https://github.com/fremtind/jokul/commit/8294390))
-   **jkl-table:** make anchor cover entire table data cell ([4be0b9a](https://github.com/fremtind/jokul/commit/4be0b9a))
-   **jkl-table:** make design-adjustments ([2ad87d2](https://github.com/fremtind/jokul/commit/2ad87d2))
-   **jkl-table:** remove right alignment of last column ([052e26b](https://github.com/fremtind/jokul/commit/052e26b))
