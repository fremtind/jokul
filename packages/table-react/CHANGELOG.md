# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [10.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-table-react@9.1.7...@fremtind/jkl-table-react@10.0.0) (2023-01-30)

### Features

- bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))

### BREAKING CHANGES

- Avhenger av en versjon av jkl-core med breaking changes

# 9.1.0 (2022-11-30)

### Features

-   add sticky table header ([604bfd0](https://github.com/fremtind/jokul/commit/604bfd09ce1c0b1f0d1edbca7dd95368d6da031f))

## 9.0.14 (2022-11-23)

### Bug Fixes

-   rett opp i feil rundt devDependencies ([936f310](https://github.com/fremtind/jokul/commit/936f310a585f3c7f7f11af816d5c54cd5a43dd43))

## 9.0.13 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

## 9.0.10 (2022-11-11)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## 9.0.9 (2022-11-09)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## 9.0.4 (2022-09-20)

### Bug Fixes

-   forenkle arvede html-attributter for å unngå feil ([eab3b1c](https://github.com/fremtind/jokul/commit/eab3b1ca687a2d1d959cd79ff082c57675db1929)), closes [#3108](https://github.com/fremtind/jokul/issues/3108)

# [9.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-table-react@8.0.17...@fremtind/jkl-table-react@9.0.0) (2022-09-08)

### chore

-   fjern forceCompact-props ([0f8bfeb](https://github.com/fremtind/jokul/commit/0f8bfebc68fe6ebf6368bf8a37e2af78f4d7b46d))

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"
-   forceCompact er fjernet. Bruk compact og regresjonstest steder du bruker kompaktvarianter.

## [8.0.4](https://github.com/fremtind/jokul/compare/@fremtind/jkl-table-react@8.0.3...@fremtind/jkl-table-react@8.0.4) (2022-06-13)

### Bug Fixes

-   merk CSS og SCSS som side-effects ([dac2e2b](https://github.com/fremtind/jokul/commit/dac2e2b5f4d1b31485821bf6ad8ec4c7c2769cca))

### Performance Improvements

-   bruk tiny-glob for globbing av filer under bygg ([246952a](https://github.com/fremtind/jokul/commit/246952ae75afe20bcf0d007a0a068b76b114f9a6))

# [8.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-table-react@7.5.7...@fremtind/jkl-table-react@8.0.0) (2022-06-07)

### chore

-   fiks lintfeil ([4093d2a](https://github.com/fremtind/jokul/commit/4093d2a2ae7bbe0d30de882b9f5d144e8e77cede))

### BREAKING CHANGES

-   Pakken avhenger av en breaking versjon av core

# [7.5.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-table-react@7.4.5...@fremtind/jkl-table-react@7.5.0) (2022-03-16)

### Features

-   add support for left/right aligning table header ([1b57ee7](https://github.com/fremtind/jokul/commit/1b57ee7c6d413d848a87724d51ede79bae131684))

## [7.4.2](https://github.com/fremtind/jokul/compare/@fremtind/jkl-table-react@7.4.1...@fremtind/jkl-table-react@7.4.2) (2022-03-10)

### Bug Fixes

-   bruk den riktige genericen per type ([a8e8802](https://github.com/fremtind/jokul/commit/a8e88028c66379c3fac2cd10ae0478aadd1d5392))

# 7.4.0 (2022-03-09)

### Features

-   add support for a callback when open state changes ([03e4ccf](https://github.com/fremtind/jokul/commit/03e4ccfb7a0b475f7f127045e6491d939d8f5b52))
-   change to a better prop name ([d0cec19](https://github.com/fremtind/jokul/commit/d0cec1987c35422a2181b4ded900a376864a455e))

# [7.3.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-table-react@7.2.9...@fremtind/jkl-table-react@7.3.0) (2022-03-07)

### Features

-   add ref support to Table components ([779b28d](https://github.com/fremtind/jokul/commit/779b28d8b0234ab6b235d652a57d9c6dd27d0be9))

## 7.2.5 (2022-02-11)

### Bug Fixes

-   fiks en warning om en sirkulær avhengighet ([2b61703](https://github.com/fremtind/jokul/commit/2b6170378387a975a64f0dd0fe86466d689d245e))

# [7.2.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-table-react@7.1.7...@fremtind/jkl-table-react@7.2.0) (2022-02-02)

### Bug Fixes

-   actually export component and types ([725339d](https://github.com/fremtind/jokul/commit/725339d000b403b10a25501e0aadfb16c57e5d4f))
-   add more accessibility props to ExpandableTableRow ([ba308e1](https://github.com/fremtind/jokul/commit/ba308e15f836e65236d8081aeacfc7ee382ad224))
-   fix a bug where enter keypress was not handled ([602c006](https://github.com/fremtind/jokul/commit/602c006625f94a52f66f274f848e4bb32fa6a6ad))
-   fix a bug where keyboard events would bubble ([ca26a2b](https://github.com/fremtind/jokul/commit/ca26a2bb2c12e743f23b117b536889322dbeb31f))
-   fix arrow hover effect when clickable is enabled ([b039007](https://github.com/fremtind/jokul/commit/b039007ef5e7335caab7ef6572843ad8d271c208))
-   fix naming and imports ([abb3ef6](https://github.com/fremtind/jokul/commit/abb3ef6168258e8dfefda8a9e9639d58cedd5d8f))
-   make expandable row more accessible ([9c6b573](https://github.com/fremtind/jokul/commit/9c6b573861c3103ef7f8042883c947c242bd030b))
-   rename ExpandableTableRowCell for a better defined use area ([4858b05](https://github.com/fremtind/jokul/commit/4858b05470a30fd9552fe4a98006d78297ce8561))

### Features

-   add base functionality for expanding rows ([4290cfc](https://github.com/fremtind/jokul/commit/4290cfc0def5d3b6ae0449e0e52b1527e332a02a))
-   animate expandable table ([e2fb733](https://github.com/fremtind/jokul/commit/e2fb7335f63c1e8b6a575680296222f1517150a7))
-   handle clickable row properly ([01c1ab9](https://github.com/fremtind/jokul/commit/01c1ab90f7d6b7646fe7d6a33bfed02a929f6797))
-   properly compose component from TableRow ([2774729](https://github.com/fremtind/jokul/commit/27747295310b99113d2426a77cce20e5da954eee))
-   set colSpan to be a controllable prop ([7cbf0d9](https://github.com/fremtind/jokul/commit/7cbf0d9db8fc654d5329e24d5c64641455f9eec4))
-   this map have no use anymore ([6bdf333](https://github.com/fremtind/jokul/commit/6bdf333c87225f82e56c72dc908847749d9368c3))
-   use data-th inside ExpandButton when table is shown as list ([4f10a7a](https://github.com/fremtind/jokul/commit/4f10a7a6a03ddeea35e2aee7bdad7697589580f4))
-   use TableRow ([6a0ecc1](https://github.com/fremtind/jokul/commit/6a0ecc1548d153de5e6a6b734cfe9f912ddcec4e))

## 7.1.0 (2021-12-06)

### Features

-   eksporter tabelltyper ([94bed82](https://github.com/fremtind/jokul/commit/94bed8248a1978dea6277045c9b15d0ac12d5692))

## 7.0.5 (2021-11-17)

### Bug Fixes

-   endre standard vertical-align i henhold til design ([a545a58](https://github.com/fremtind/jokul/commit/a545a58fbc219285304dea34b3ebc3963fe860b4)), closes [#2434](https://github.com/fremtind/jokul/issues/2434)

## 7.0.0 (2021-10-25)

### Features

-   variant av table-cell med toppjustering ([d4cf5bf](https://github.com/fremtind/jokul/commit/d4cf5bf22d70c034ff7a13ea5f72c56bba142093))

### BREAKING CHANGES

-   Feilaktig merket som majorversjon. Ingen breaking change.

## 6.0.0 (2021-10-25)

### Features

-   nye tabellkomponenter ([a135cf5](https://github.com/fremtind/jokul/commit/a135cf566ff0084c239931d31b31caca515dbdc8))

### BREAKING CHANGES

-   Se migreringsdokumentasjonen for \`table-react\`

## 5.0.0 (2021-10-21)

### chore

-   updates dependencies ([b975200](https://github.com/fremtind/jokul/commit/b97520045c02e4bcb44ebde159c60a7dff7f01d6))

### BREAKING CHANGES

-   depends on jkl-core v8 with breaking changes

## 4.0.3 (2021-08-30)

### Bug Fixes

-   add missing dependency ([76c0506](https://github.com/fremtind/jokul/commit/76c0506d71cdf749607d35bcb179733ae8357dd2))

## 4.0.0 (2021-07-09)

### chore

-   bump major version ([255a776](https://github.com/fremtind/jokul/commit/255a776d45a068645124499b870ecefec9d87f0e))

### BREAKING CHANGES

-   Depends on jkl-core-version with breaking changes

## 3.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 2.0.0 (2021-06-07)

### Features

-   upgrade dependency jkl-core to v5.0.0 ([c3dc8dc](https://github.com/fremtind/jokul/commit/c3dc8dcbd3cba99502f1124cbe1dcaa688177f55))

### BREAKING CHANGES

-   Upgrades dependency jkl-core to v5.0.0, introducing breaking changes to color variables

## 1.6.5 (2021-02-12)

### Bug Fixes

-   add react 17 types as valid peerdep ([a074c34](https://github.com/fremtind/jokul/commit/a074c34dcece089ad6b4c581b8c920c8bdd4f1e0))

## 1.6.0 (2020-12-15)

### Features

-   display types in portal ([5c62a16](https://github.com/fremtind/jokul/commit/5c62a161c278d3a5a136741aea8dcf9b62338bda))

## 1.5.0 (2020-11-25)

### Features

-   update to react 17 ([4639058](https://github.com/fremtind/jokul/commit/4639058067eaa9be222825f8ac4f495a1e74cc0f))

## 1.4.0 (2020-07-29)

### Features

-   **build:** use @babel/runtime instead of inlining helpers in each file ([bbadce5](https://github.com/fremtind/jokul/commit/bbadce52ba4da5d540b479b07273332587bed436)), closes [#1136](https://github.com/fremtind/jokul/issues/1136)

## 1.3.0 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

### Features

-   update typescript, prettier and babel ([ec1d27b](https://github.com/fremtind/jokul/commit/ec1d27b09ef6ff27344ae181686b4e3d8be0b333))

## 1.2.0 (2020-03-06)

### Features

-   **portal:** implement dev and portal examples ([857f2e2](https://github.com/fremtind/jokul/commit/857f2e29359f9442a7da0c977a94d63dfbdfc194))

## 1.1.0 (2020-01-16)

### Bug Fixes

-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

### Features

-   **portal:** use examples as documentation for all comp ([e99e56a](https://github.com/fremtind/jokul/commit/e99e56ab2f5bf13cd0e72bf010e6472a08ffabe9))

## 1.0.0 (2019-12-03)

### Features

-   **table-react:** change table row types to enum ([d9394a9](https://github.com/fremtind/jokul/commit/d9394a924c82f5d837a91a4cf008c9691b51567d))
-   **table-react:** export table row types from index ([d4afa3b](https://github.com/fremtind/jokul/commit/d4afa3bac4add3090189e726346c67d59a89326c))
-   **table-react:** use hrefLabel as title attribute on anchor rows ([e719622](https://github.com/fremtind/jokul/commit/e719622eeabf14fceb0b5382fc1e53b91d1bd1a4)), closes [#515](https://github.com/fremtind/jokul/issues/515)

## 0.3.0 (2019-09-26)

### Features

-   **table-react:** add className to table ([d3d4e06](https://github.com/fremtind/jokul/commit/d3d4e06)), closes [#377](https://github.com/fremtind/jokul/issues/377)

## 0.2.0 (2019-09-23)

### Bug Fixes

-   **jkl-table-react:** add default onRowClick with navigation ([01256b5](https://github.com/fremtind/jokul/commit/01256b5))
-   **jkl-table-react:** let the TableRow click handler handle navigation ([b94847a](https://github.com/fremtind/jokul/commit/b94847a))
-   **jkl-table-react:** use jkl-sr-only to hide anchors in tables ([6b79957](https://github.com/fremtind/jokul/commit/6b79957))
-   **jkl-table-react:** use th instead of td in table head row ([9228d0b](https://github.com/fremtind/jokul/commit/9228d0b))

### Features

-   **jkl-table:** change prop name for click a row in table ([5dfa8c9](https://github.com/fremtind/jokul/commit/5dfa8c9))
-   **jkl-table-react:** add Table react component ([8f3aaf0](https://github.com/fremtind/jokul/commit/8f3aaf0))
-   **jkl-table-react:** depend on correct jkl-core version ([229c99e](https://github.com/fremtind/jokul/commit/229c99e))
