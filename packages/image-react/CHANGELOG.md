# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 6.0.0 (2023-07-07)

### chore

- oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### BREAKING CHANGES

- Avhenger av ny majorversjon av core

# [5.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-image-react@4.0.14...@fremtind/jkl-image-react@5.0.0) (2023-01-30)

### Features

- bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))

### BREAKING CHANGES

- Avhenger av en versjon av jkl-core med breaking changes

## 4.0.11 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

## 4.0.8 (2022-11-11)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## 4.0.7 (2022-11-09)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## 3.0.12 (2022-08-16)

### Bug Fixes

-   la til loading og decoding på img ([b21371b](https://github.com/fremtind/jokul/commit/b21371b1752f93df91de4614175151f5f536a1eb)), closes [#2945](https://github.com/fremtind/jokul/issues/2945)

## [3.0.4](https://github.com/fremtind/jokul/compare/@fremtind/jkl-image-react@3.0.3...@fremtind/jkl-image-react@3.0.4) (2022-06-13)

### Bug Fixes

-   merk CSS og SCSS som side-effects ([dac2e2b](https://github.com/fremtind/jokul/commit/dac2e2b5f4d1b31485821bf6ad8ec4c7c2769cca))

### Performance Improvements

-   bruk tiny-glob for globbing av filer under bygg ([246952a](https://github.com/fremtind/jokul/commit/246952ae75afe20bcf0d007a0a068b76b114f9a6))

# [3.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-image-react@2.0.16...@fremtind/jkl-image-react@3.0.0) (2022-06-07)

### chore

-   fiks lintfeil ([4093d2a](https://github.com/fremtind/jokul/commit/4093d2a2ae7bbe0d30de882b9f5d144e8e77cede))

### BREAKING CHANGES

-   Pakken avhenger av en breaking versjon av core

## 2.0.5 (2022-03-01)

### Bug Fixes

-   exporter type for ImageProps ([c5dc5d5](https://github.com/fremtind/jokul/commit/c5dc5d50801bd36601c341e9b7d4b01d78bd6328))

## [2.0.2](https://github.com/fremtind/jokul/compare/@fremtind/jkl-image-react@2.0.1...@fremtind/jkl-image-react@2.0.2) (2022-02-11)

### Bug Fixes

-   **deps:** bruk riktig versjon av stilpakken ([23eece8](https://github.com/fremtind/jokul/commit/23eece85f222e2fcf5bde47b975775a39b36baa8))

# [2.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-image-react@0.8.0...@fremtind/jkl-image-react@2.0.0) (2022-02-07)

### Features

-   ny og forbedret Image-komponent ([fc6db8f](https://github.com/fremtind/jokul/commit/fc6db8fa115799b39a38150524a743805ac1771d))

### BREAKING CHANGES

-   Nytt API

# 0.8.0 (2022-02-07)

### Bug Fixes

-   fjern inverted-prop ([de5f8b8](https://github.com/fremtind/jokul/commit/de5f8b83ae8f025826f4c56d3aeb5e081dea66cc)), closes [#2646](https://github.com/fremtind/jokul/issues/2646)

### BREAKING CHANGES

-   Fjernet `inverted`-prop. Bruk `data-theme="dark"` om du trenger overstyre temaet.

## 0.7.0 (2021-10-21)

### chore

-   updates dependencies ([b975200](https://github.com/fremtind/jokul/commit/b97520045c02e4bcb44ebde159c60a7dff7f01d6))

### BREAKING CHANGES

-   depends on jkl-core v8 with breaking changes

## 0.6.0 (2021-07-09)

### chore

-   bump major version ([255a776](https://github.com/fremtind/jokul/commit/255a776d45a068645124499b870ecefec9d87f0e))

### BREAKING CHANGES

-   Depends on jkl-core-version with breaking changes

## 0.5.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 0.4.0 (2021-06-07)

### Features

-   upgrade dependency jkl-core to v5.0.0 ([c3dc8dc](https://github.com/fremtind/jokul/commit/c3dc8dcbd3cba99502f1124cbe1dcaa688177f55))

### BREAKING CHANGES

-   Upgrades dependency jkl-core to v5.0.0, introducing breaking changes to color variables

## 0.3.5 (2021-02-12)

### Bug Fixes

-   add react 17 types as valid peerdep ([a074c34](https://github.com/fremtind/jokul/commit/a074c34dcece089ad6b4c581b8c920c8bdd4f1e0))

## 0.3.0 (2020-12-15)

### Features

-   display types in portal ([5c62a16](https://github.com/fremtind/jokul/commit/5c62a161c278d3a5a136741aea8dcf9b62338bda))

## 0.2.0 (2020-11-25)

### Features

-   update to react 17 ([4639058](https://github.com/fremtind/jokul/commit/4639058067eaa9be222825f8ac4f495a1e74cc0f))

## 0.1.0 (2020-10-07)

### Features

-   **image:** add image component ([8e99f33](https://github.com/fremtind/jokul/commit/8e99f33a12f2e598aff8a15eabe230ea666f0cbd))
