# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 6.0.0 (2022-02-07)

### Bug Fixes

-   fjern inverted-prop ([de5f8b8](https://github.com/fremtind/jokul/commit/de5f8b83ae8f025826f4c56d3aeb5e081dea66cc)), closes [#2646](https://github.com/fremtind/jokul/issues/2646)
-   manuell delinting sans descending specificity ([20de1c8](https://github.com/fremtind/jokul/commit/20de1c8811596b054867352177225fd197c70797))

### BREAKING CHANGES

-   Fjernet `inverted`-prop. Bruk `data-theme="dark"` om du trenger overstyre temaet.

## 5.0.10 (2022-02-02)

### Bug Fixes

-   redesign feilstate for radio-button ([13acee1](https://github.com/fremtind/jokul/commit/13acee131d84782d8f013fefd246df8986590c30)), closes [#2631](https://github.com/fremtind/jokul/issues/2631)

## 5.0.3 (2021-11-24)

### Bug Fixes

-   animasjonsfix for Safari ([39982c1](https://github.com/fremtind/jokul/commit/39982c168e7d0a5b99ad72476444055eb889651a)), closes [#2531](https://github.com/fremtind/jokul/issues/2531)

## 5.0.0 (2021-10-21)

### Features

-   use new spacing scale ([5694495](https://github.com/fremtind/jokul/commit/5694495f56d3c1f0e675433b35cfb0e693b93a82)), closes [#2382](https://github.com/fremtind/jokul/issues/2382)

### BREAKING CHANGES

-   new spacing scale: see migration guide for jkl-core

## 4.0.0 (2021-07-09)

### Features

-   use new typographic scale ([19cf729](https://github.com/fremtind/jokul/commit/19cf729c29ddda8b10d656122ca8f5d70b684037))

### BREAKING CHANGES

-   Depends on jkl-core version with breaking changes

## 3.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### Features

-   **radio-button:** add automatic dark mode ([2c5c492](https://github.com/fremtind/jokul/commit/2c5c492e1aca203136b149f07bde968376961847))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 2.0.1 (2021-06-25)

### Bug Fixes

-   **sass:** upgrade sass and stop using dep. syntax ([194d414](https://github.com/fremtind/jokul/commit/194d4145cbde712eb351ef6b41cefe6a47f40b5e))

## 2.0.0 (2021-06-07)

### Features

-   new colors ([9144947](https://github.com/fremtind/jokul/commit/9144947766c73fbe5eaac3372495006e3b89dec7))

### BREAKING CHANGES

-   all color variables are changed

## 1.4.0 (2020-09-02)

### Features

-   **radio-buttons:** update style to follow sketches ([bbca2d0](https://github.com/fremtind/jokul/commit/bbca2d0ae58a2e9e2214d86f01e7646ad8186f8a))

## 1.3.0 (2020-07-06)

### Features

-   **radio-buttons:** make labels responsive ([85317fb](https://github.com/fremtind/jokul/commit/85317fbba3bd647452833ecb7de6d8ad23a697ac)), closes [#986](https://github.com/fremtind/jokul/issues/986)

## 1.2.9 (2020-05-11)

### Bug Fixes

-   **radio buttons:** adjust size spacing for new labels ([4508c06](https://github.com/fremtind/jokul/commit/4508c06e2619c8e2f30518c0ebfd9748c021c6c7))

## 1.2.5 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 1.2.0 (2020-02-19)

### Features

-   export scss files with style pkgs ([edb6278](https://github.com/fremtind/jokul/commit/edb627838075d3d613ae78b6aae765c81067ba6a))

## 1.1.0 (2020-02-18)

### Bug Fixes

-   make use of new core color tokens ([075f7b3](https://github.com/fremtind/jokul/commit/075f7b37920805bf780120247461d79c3d8c406e))
-   use new text-style mixins ([2873a57](https://github.com/fremtind/jokul/commit/2873a57f4570ddb87a7390a773433d26a9fde4ac))

### Features

-   **radio-button:** add inverted mode ([fda7e5f](https://github.com/fremtind/jokul/commit/fda7e5f26ed7742be1a4fce9afe5ba5a4cacf292))

## 1.0.14 (2020-01-16)

### Bug Fixes

-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

## 1.0.0 (2019-12-03)

### Bug Fixes

-   **radio-button:** fix wrong use of [@extend](https://github.com/extend) ([365edc0](https://github.com/fremtind/jokul/commit/365edc0e7ad4b911d94fce6464b2d2da36bcbf7d))
-   **radio-button:** use right size for compact middle dot ([09f96a1](https://github.com/fremtind/jokul/commit/09f96a15cdcf7430fd2aa7a99837ab7248b02d8f))

### Features

-   **radio-button:** implement compact/mobile version ([e3c2c6f](https://github.com/fremtind/jokul/commit/e3c2c6fdc4de9b59900f1dc8a0b132cea0cb733a))
-   **radio-button:** use correct spacing in compact mode ([863f1e7](https://github.com/fremtind/jokul/commit/863f1e7b3723dd884dbbc530f950b6594ae2ab8f))
-   **radio-button-react:** rename radio button components ([d09fe6f](https://github.com/fremtind/jokul/commit/d09fe6fd321f2242a94d7d60deb5ae7997da0ccf))
-   add compact mode mixin ([ca9fa96](https://github.com/fremtind/jokul/commit/ca9fa96b7de2be50646af0cb444206c3eebcfc4a))
-   add support for global compact mode ([cc11026](https://github.com/fremtind/jokul/commit/cc11026207dfef2a0b3b074b88e071783d2820fd)), closes [#494](https://github.com/fremtind/jokul/issues/494)

## 0.9.0 (2019-10-09)

### Bug Fixes

-   **core:** add and use wcag-compliant error/focus colors ([c714b45](https://github.com/fremtind/jokul/commit/c714b45))

### Features

-   **radio-button:** use updated field group in radio button groups ([ea1f67e](https://github.com/fremtind/jokul/commit/ea1f67e))

## 0.8.0 (2019-08-30)

### Bug Fixes

-   **radio-button:** fix correct component spacing ([47a97e3](https://github.com/fremtind/jokul/commit/47a97e3))
-   **radio-button:** fix correct hover and active state ([c8c7d87](https://github.com/fremtind/jokul/commit/c8c7d87))

### Features

-   **field-group:** add field group style and react component ([f002974](https://github.com/fremtind/jokul/commit/f002974))
-   **radiobutton:** add error state to radio button ([a2052a7](https://github.com/fremtind/jokul/commit/a2052a7))

## 0.7.0 (2019-07-30)

### Bug Fixes

-   **radio-button:** refactor structure to match other components ([d66f256](https://github.com/fremtind/jokul/commit/d66f256))
-   **radio-button:** style fieldset and label correctly ([bc806a7](https://github.com/fremtind/jokul/commit/bc806a7))

### Features

-   **portal:** add components, refactor portal ([7e7d038](https://github.com/fremtind/jokul/commit/7e7d038))

## 0.6.0 (2019-07-18)

### Bug Fixes

-   **build:** add watch job to pkg json ([a0039e0](https://github.com/fremtind/jokul/commit/a0039e0))

### Features

-   **build:** add watch job for css, refactor gulp ([8adafd6](https://github.com/fremtind/jokul/commit/8adafd6))

## 0.5.0 (2019-07-15)

### Bug Fixes

-   use correct syntax for importing sass index files ([46fa8f6](https://github.com/fremtind/jokul/commit/46fa8f6))
-   **build:** publish correct files for style pkgs ([a89d768](https://github.com/fremtind/jokul/commit/a89d768))

## 0.3.0 (2019-07-15)

### Features

-   **build:** publish correct files in all packages ([b1fbb8f](https://github.com/fremtind/jokul/commit/b1fbb8f))
-   **core:** flatten structure of core package ([5b2287b](https://github.com/fremtind/jokul/commit/5b2287b))

## 0.2.0 (2019-07-15)

### Bug Fixes

-   **publish:** update access on logo and accodion ([3b557fb](https://github.com/fremtind/jokul/commit/3b557fb))

### Features

-   **build:** add browserlist pkg and browserlist to evry pkg ([3dcc9ca](https://github.com/fremtind/jokul/commit/3dcc9ca))

## 0.1.0 (2019-07-15)

### Bug Fixes

-   **all:** remove css main files ([c9a4ca0](https://github.com/fremtind/jokul/commit/c9a4ca0))
-   **all:** various build and import errors ([8d9a507](https://github.com/fremtind/jokul/commit/8d9a507))
-   **build:** fix deterministic build order ([78566ef](https://github.com/fremtind/jokul/commit/78566ef))
-   update focus styles to only show on keyboard nav ([b7555a8](https://github.com/fremtind/jokul/commit/b7555a8))
-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))
-   **radiobutton:** fix import ([f795ca2](https://github.com/fremtind/jokul/commit/f795ca2))

### Code Refactoring

-   flatten structure in all style packages ([dd875e5](https://github.com/fremtind/jokul/commit/dd875e5)), closes [#7](https://github.com/fremtind/jokul/issues/7)

### Performance Improvements

-   **build:** use gulp for all style packages ([5699683](https://github.com/fremtind/jokul/commit/5699683))

### BREAKING CHANGES

-   moves entry point in style packages. any style imports must be updated accordingly
