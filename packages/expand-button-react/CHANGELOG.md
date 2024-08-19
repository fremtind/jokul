# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 7.0.8 (2024-08-19)

### Bug Fixes

- juster plassering av pil i expandbutton ([cc9d4bd](https://github.com/fremtind/jokul/commit/cc9d4bdac5f06d81e7b7edfcc31c448e631fca25))

# 7.0.0 (2023-12-08)

### Features

- make ExpandButton work before React has mounted clientside ([9ce4216](https://github.com/fremtind/jokul/commit/9ce42163c04cc9977cad3787b7e47710e454febb))

### BREAKING CHANGES

- Typing for the event in the onClick callback changed from React.MouseEvent<HTMLButtonElement> to
React.MouseEvent<HTMLElement>

## 6.1.2 (2023-12-05)

### Bug Fixes

- revert commit 462cad439 to restore functionality in Safari/FF ([3505245](https://github.com/fremtind/jokul/commit/3505245e300ed74feb1bfcc83c95cb384fb552c7))

# [6.1.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-expand-button-react@6.0.15...@fremtind/jkl-expand-button-react@6.1.0) (2023-11-24)

### Features

- make use of details and summary to have ExpandSection work without JS ([462cad4](https://github.com/fremtind/jokul/commit/462cad4397da6d67f371d3f2eca8f718cc1c9678)), closes [#3751](https://github.com/fremtind/jokul/issues/3751)
- support rendering ExpandButton as a summary element ([b3e1006](https://github.com/fremtind/jokul/commit/b3e1006c44f4690be30c7620a717c869a5dac3b4)), closes [#3751](https://github.com/fremtind/jokul/issues/3751)

## 6.0.4 (2023-09-14)

### Bug Fixes

-   try removing accordion snapshots to see diff ([9a6cd15](https://github.com/fremtind/jokul/commit/9a6cd15065eb2809b3210bb61fda54deabb012cb))

# 6.0.0 (2023-07-07)

### chore

-   oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### BREAKING CHANGES

-   Avhenger av ny majorversjon av core

# [5.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-expand-button-react@4.0.17...@fremtind/jkl-expand-button-react@5.0.0) (2023-01-30)

### Features

-   bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))

### BREAKING CHANGES

-   Avhenger av en versjon av jkl-core med breaking changes

## 4.0.12 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

## 4.0.9 (2022-11-11)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## 4.0.8 (2022-11-09)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

# 4.0.0 (2022-09-08)

### Bug Fixes

-   expand-button funker nå med data-compactlayout ([2ec2a16](https://github.com/fremtind/jokul/commit/2ec2a1637f1092e346fe02ccaa627f17c4439e1a))

### chore

-   fjern forceCompact-props ([0f8bfeb](https://github.com/fremtind/jokul/commit/0f8bfebc68fe6ebf6368bf8a37e2af78f4d7b46d))

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))

### Reverts

-   Revert "refactor: bruk ContentToggle for pilene i ExpandButton" ([126894f](https://github.com/fremtind/jokul/commit/126894f1ca3f04c4e556292a1eaa587237dcec59))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"
-   forceCompact er fjernet. Bruk compact og regresjonstest steder du bruker kompaktvarianter.

## 3.0.12 (2022-08-15)

### Bug Fixes

-   legg til manglende dependencies i effekt ([56a1f8d](https://github.com/fremtind/jokul/commit/56a1f8d41ddc4171036cddef9e75db52a9d00a43))

## [3.0.4](https://github.com/fremtind/jokul/compare/@fremtind/jkl-expand-button-react@3.0.3...@fremtind/jkl-expand-button-react@3.0.4) (2022-06-13)

### Bug Fixes

-   merk CSS og SCSS som side-effects ([dac2e2b](https://github.com/fremtind/jokul/commit/dac2e2b5f4d1b31485821bf6ad8ec4c7c2769cca))

### Performance Improvements

-   bruk tiny-glob for globbing av filer under bygg ([246952a](https://github.com/fremtind/jokul/commit/246952ae75afe20bcf0d007a0a068b76b114f9a6))

# [3.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-expand-button-react@2.0.5...@fremtind/jkl-expand-button-react@3.0.0) (2022-06-07)

### chore

-   fiks lintfeil ([4093d2a](https://github.com/fremtind/jokul/commit/4093d2a2ae7bbe0d30de882b9f5d144e8e77cede))

### BREAKING CHANGES

-   Pakken avhenger av en breaking versjon av core

# 2.0.0 (2022-04-08)

### Bug Fixes

-   småtrøbbel med test og typesjekk ([b1b1bc3](https://github.com/fremtind/jokul/commit/b1b1bc3eeb0fade11f8c19d9c1d6170ad808ef6d))

### chore

-   skriv vekk fra core-components ([09117c8](https://github.com/fremtind/jokul/commit/09117c8364fadc9dc9f489d7a6ab47e76a14065b))

### BREAKING CHANGES

-   ExpandSection: onToggle og expandButtonProps.id fjernet. Ingen endring i ExpandButton.

# [1.2.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-expand-button-react@1.1.6...@fremtind/jkl-expand-button-react@1.2.0) (2022-02-02)

### Bug Fixes

-   make expandable row more accessible ([9c6b573](https://github.com/fremtind/jokul/commit/9c6b573861c3103ef7f8042883c947c242bd030b))
-   make th-text only show on small screens in collapsed mode ([37e35c4](https://github.com/fremtind/jokul/commit/37e35c4b015bc8716db2331c5f0583f3a526d7bd))

### Features

-   add id prop to ExpandButton ([c8dd8df](https://github.com/fremtind/jokul/commit/c8dd8df04cddcd5b2a293db5fc893d7b43141c6d))
-   add support for just having icon ([c69d42c](https://github.com/fremtind/jokul/commit/c69d42cb2d6d0f3088bec46d739a794f64dc95b8))

## 1.1.4 (2022-01-26)

### Bug Fixes

-   legg til manglende typer for å styre selv ([e08680b](https://github.com/fremtind/jokul/commit/e08680bb31e5f79cd04fa6bb0a4d97ebbe9e0ddb))

## 1.1.3 (2022-01-26)

### Bug Fixes

-   **expand-button:** changed to type=button ([9622e34](https://github.com/fremtind/jokul/commit/9622e341a08da4c3a44e74a901301417cec2c1f2))

## 1.1.0 (2021-12-21)

### Features

-   lanser expand-button ([c86d489](https://github.com/fremtind/jokul/commit/c86d4896f714271e407b85fc473eea7b8af549fb))
