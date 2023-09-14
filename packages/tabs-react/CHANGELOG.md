# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 5.0.3 (2023-09-14)

### Bug Fixes

- try removing accordion snapshots to see diff ([9a6cd15](https://github.com/fremtind/jokul/commit/9a6cd15065eb2809b3210bb61fda54deabb012cb))

# 5.0.0 (2023-07-07)

### chore

- oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### BREAKING CHANGES

- Avhenger av ny majorversjon av core

# [4.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-tabs-react@3.1.2...@fremtind/jkl-tabs-react@4.0.0) (2023-01-30)

### Features

- bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))

### BREAKING CHANGES

- Avhenger av en versjon av jkl-core med breaking changes

# 3.1.0 (2022-12-06)

### Bug Fixes

-   bruk første link om treff mangler på route ([982a3a8](https://github.com/fremtind/jokul/commit/982a3a8142445cae287c85bb9b380ca58745b754))

### Features

-   nye fanekomponenter basert på lenker og URLer ([3f69586](https://github.com/fremtind/jokul/commit/3f695860aaf8ff98c8a95af5dfb9bad35725dd9a))

## 3.0.11 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

## 3.0.8 (2022-11-11)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## 3.0.7 (2022-11-09)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

# [3.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-tabs-react@2.1.11...@fremtind/jkl-tabs-react@3.0.0) (2022-09-08)

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))
-   nytt kompaktdesign for tabs ([eee6e72](https://github.com/fremtind/jokul/commit/eee6e726c5a45ccd666d18915c90ecba9130b5b2))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"

# 2.1.0 (2022-07-11)

### Features

-   add defaultTab prop to tabs ([072f676](https://github.com/fremtind/jokul/commit/072f67647632ad81dbd79e449f00dbf0862d7f42))

## [2.0.4](https://github.com/fremtind/jokul/compare/@fremtind/jkl-tabs-react@2.0.3...@fremtind/jkl-tabs-react@2.0.4) (2022-06-13)

### Bug Fixes

-   merk CSS og SCSS som side-effects ([dac2e2b](https://github.com/fremtind/jokul/commit/dac2e2b5f4d1b31485821bf6ad8ec4c7c2769cca))

### Performance Improvements

-   bruk tiny-glob for globbing av filer under bygg ([246952a](https://github.com/fremtind/jokul/commit/246952ae75afe20bcf0d007a0a068b76b114f9a6))

# [2.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-tabs-react@1.3.23...@fremtind/jkl-tabs-react@2.0.0) (2022-06-07)

### chore

-   fiks lintfeil ([4093d2a](https://github.com/fremtind/jokul/commit/4093d2a2ae7bbe0d30de882b9f5d144e8e77cede))

### BREAKING CHANGES

-   Pakken avhenger av en breaking versjon av core

## 1.3.18 (2022-04-08)

### Bug Fixes

-   fjern all bruk av useLayoutEffect ([18ddc3f](https://github.com/fremtind/jokul/commit/18ddc3ffe0ee92eaf23237d0235a4ef52bf5ad51))

## 1.3.0 (2021-12-21)

### Bug Fixes

-   fix correct prop destructuring and propagation ([0a72180](https://github.com/fremtind/jokul/commit/0a72180129922e92788d0a24274586f09dd6b1e8))

### Features

-   add onChange event to tabs ([9603169](https://github.com/fremtind/jokul/commit/96031692bf763318f2da06faf477308f32ed63d7))
-   add test for onChange in tabs ([ac666b6](https://github.com/fremtind/jokul/commit/ac666b6382d36b949bfde407632f37bf2c30b244))
-   only trigger onChange when there's an actual change ([9efecd0](https://github.com/fremtind/jokul/commit/9efecd00c2dd6628487519b7c3b851acfbddc1e8))

## 1.2.0 (2021-11-26)

### Features

-   alter Tabs styling ([f9f24be](https://github.com/fremtind/jokul/commit/f9f24beb4ea942bb83ba10089b915c364a95cf8c))

## 1.1.0 (2021-11-09)

### Features

-   legg til Tabs komponent ([b7f31f8](https://github.com/fremtind/jokul/commit/b7f31f82106d02b9a4a4ce28f3124908e4b249ec))
