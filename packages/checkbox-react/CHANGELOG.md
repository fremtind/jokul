# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 8.0.11 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

## 8.0.8 (2022-11-11)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## 8.0.7 (2022-11-09)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

# 8.0.0 (2022-09-08)

### chore

-   fjern forceCompact-props ([0f8bfeb](https://github.com/fremtind/jokul/commit/0f8bfebc68fe6ebf6368bf8a37e2af78f4d7b46d))

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"
-   forceCompact er fjernet. Bruk compact og regresjonstest steder du bruker kompaktvarianter.

## [7.0.4](https://github.com/fremtind/jokul/compare/@fremtind/jkl-checkbox-react@7.0.3...@fremtind/jkl-checkbox-react@7.0.4) (2022-06-13)

### Bug Fixes

-   merk CSS og SCSS som side-effects ([dac2e2b](https://github.com/fremtind/jokul/commit/dac2e2b5f4d1b31485821bf6ad8ec4c7c2769cca))

### Performance Improvements

-   bruk tiny-glob for globbing av filer under bygg ([246952a](https://github.com/fremtind/jokul/commit/246952ae75afe20bcf0d007a0a068b76b114f9a6))

# [7.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-checkbox-react@6.1.13...@fremtind/jkl-checkbox-react@7.0.0) (2022-06-07)

### chore

-   fiks lintfeil ([4093d2a](https://github.com/fremtind/jokul/commit/4093d2a2ae7bbe0d30de882b9f5d144e8e77cede))

### BREAKING CHANGES

-   Pakken avhenger av en breaking versjon av core

## [6.1.5](https://github.com/fremtind/jokul/compare/@fremtind/jkl-checkbox-react@6.1.4...@fremtind/jkl-checkbox-react@6.1.5) (2022-03-11)

### Bug Fixes

-   retter en regresjon hvis Checkbox ikke fungerte om den ble gitt en ID ([b3c5c3c](https://github.com/fremtind/jokul/commit/b3c5c3cf7be89fbfc4808a6d7e683a359e017883))

## 6.1.4 (2022-03-10)

### Bug Fixes

-   bruk den riktige genericen per type ([a8e8802](https://github.com/fremtind/jokul/commit/a8e88028c66379c3fac2cd10ae0478aadd1d5392))

# [6.1.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-checkbox-react@6.0.1...@fremtind/jkl-checkbox-react@6.1.0) (2022-02-17)

### Features

-   legg til støtte for html-attributter på checkbox ([6f797d5](https://github.com/fremtind/jokul/commit/6f797d5f893535688bf697d4ffef33a2901693c0))

# 6.0.0 (2022-02-07)

### Bug Fixes

-   fjern inverted-prop ([de5f8b8](https://github.com/fremtind/jokul/commit/de5f8b83ae8f025826f4c56d3aeb5e081dea66cc)), closes [#2646](https://github.com/fremtind/jokul/issues/2646)

### BREAKING CHANGES

-   Fjernet `inverted`-prop. Bruk `data-theme="dark"` om du trenger overstyre temaet.

## 5.1.8 (2022-02-02)

### Bug Fixes

-   bruk skjemakategori til skjemakomp ([d17a3ce](https://github.com/fremtind/jokul/commit/d17a3cefc9c3b61cb3c551143461e1bb471d8c62))
-   slett utdaterte snapshots ([fcd47bb](https://github.com/fremtind/jokul/commit/fcd47bbaedaadd528130eb6d22b1608a8eb90aa4))

## 5.1.0 (2021-12-02)

### Features

-   eksporter komponentprops ([d7af150](https://github.com/fremtind/jokul/commit/d7af15065351e056d65fb473c62167241d909723))

## 5.0.0 (2021-10-21)

### chore

-   updates dependencies ([b975200](https://github.com/fremtind/jokul/commit/b97520045c02e4bcb44ebde159c60a7dff7f01d6))

### BREAKING CHANGES

-   depends on jkl-core v8 with breaking changes

## 4.1.0 (2021-09-07)

### Features

-   add data-testautoid to CheckBox, FieldGroup, TextInput and RadioButtons ([4c751ed](https://github.com/fremtind/jokul/commit/4c751ed9b69c1e67670a05d247783c27c8cd76b9))

## 4.0.0 (2021-07-09)

### Features

-   use new typographic scale ([1d5e654](https://github.com/fremtind/jokul/commit/1d5e6547f32f6be43a4cd91cd952304a5e2b1e0b))

### BREAKING CHANGES

-   Depends on jkl-core version with breaking changes

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

## 1.10.5 (2021-02-12)

### Bug Fixes

-   add react 17 types as valid peerdep ([a074c34](https://github.com/fremtind/jokul/commit/a074c34dcece089ad6b4c581b8c920c8bdd4f1e0))

## 1.10.0 (2020-12-15)

### Features

-   display types in portal ([5c62a16](https://github.com/fremtind/jokul/commit/5c62a161c278d3a5a136741aea8dcf9b62338bda))

## 1.9.0 (2020-11-25)

### Features

-   update to react 17 ([4639058](https://github.com/fremtind/jokul/commit/4639058067eaa9be222825f8ac4f495a1e74cc0f))

## 1.8.0 (2020-08-25)

### Features

-   **checkbox:** update design to match sketches ([400904e](https://github.com/fremtind/jokul/commit/400904e40dbf88975352ba68f5e6b0d7395a94b1))

## 1.7.0 (2020-07-29)

### Features

-   **build:** use @babel/runtime instead of inlining helpers in each file ([bbadce5](https://github.com/fremtind/jokul/commit/bbadce52ba4da5d540b479b07273332587bed436)), closes [#1136](https://github.com/fremtind/jokul/issues/1136)

## 1.6.0 (2020-07-07)

### Features

-   **checkbox:** add support for refs to checkbox ([14f3880](https://github.com/fremtind/jokul/commit/14f388053bc635484a6e37b048712f57194ef62a))

## 1.5.0 (2020-07-06)

### Features

-   **checkbox:** make labels responsive ([116afcd](https://github.com/fremtind/jokul/commit/116afcd3a611ba30bf8400e4001d2716a8662b21)), closes [#985](https://github.com/fremtind/jokul/issues/985)

## 1.4.10 (2020-06-26)

### Bug Fixes

-   align nanoid version, and migrate to 3 ([a3d571d](https://github.com/fremtind/jokul/commit/a3d571db3e18937d40df5268c8f711232a72314e))

## 1.4.0 (2020-05-11)

### Features

-   add support for dark/inverted mode ([eaf1a1f](https://github.com/fremtind/jokul/commit/eaf1a1f001fec39d207abac67062179efa7a7cc9))

## 1.3.0 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

### Features

-   update typescript, prettier and babel ([ec1d27b](https://github.com/fremtind/jokul/commit/ec1d27b09ef6ff27344ae181686b4e3d8be0b333))

## 1.2.2 (2020-03-16)

### Bug Fixes

-   **checkbox:** fix html structure to avoid onClick event bugs ([02b2343](https://github.com/fremtind/jokul/commit/02b2343f7323e6c3ab11ed8e58bb5bdafc9d54a8))
-   **checkbox:** make fake checkmark clickable again ([e9688d6](https://github.com/fremtind/jokul/commit/e9688d6253148207031fe2363751f91656897cf4))
-   **checkbox:** make text bold when checkbox is checked ([7126a44](https://github.com/fremtind/jokul/commit/7126a44c4e66b94ad9cd214a281fc1940840b04c))

## 1.2.0 (2020-03-06)

### Features

-   **portal:** implement dev and portal examples ([857f2e2](https://github.com/fremtind/jokul/commit/857f2e29359f9442a7da0c977a94d63dfbdfc194))

## 1.1.2 (2020-02-18)

### Bug Fixes

-   **jkl:** rename classnames import and move types ([e06ef21](https://github.com/fremtind/jokul/commit/e06ef21062b345d5defab335253041dad7ae6134))

## 1.1.0 (2020-01-16)

### Bug Fixes

-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

### Features

-   **portal:** use examples as documentation for all comp ([e99e56a](https://github.com/fremtind/jokul/commit/e99e56ab2f5bf13cd0e72bf010e6472a08ffabe9))

## 1.0.0 (2019-12-03)

### Features

-   **checkbox:** add error state to checkbox ([6c9a554](https://github.com/fremtind/jokul/commit/6c9a5542721cf10b9221f2bd5371cf55e625bc3a))
-   **checkbox:** implement compact/mobile version of checkbox ([7bacff8](https://github.com/fremtind/jokul/commit/7bacff8c5f82580907040cf31259ad098b9f31b4))

## 0.8.0 (2019-10-09)

### Bug Fixes

-   **checkbox-react:** update props in tests to match new interface ([2f363e6](https://github.com/fremtind/jokul/commit/2f363e6))
-   make radio/checkbox stack vertically by default ([11bcdbd](https://github.com/fremtind/jokul/commit/11bcdbd)), closes [#387](https://github.com/fremtind/jokul/issues/387)

### Features

-   **checkbox-react:** make onChange pass event as parameter ([321ff7a](https://github.com/fremtind/jokul/commit/321ff7a))

## 0.7.0 (2019-08-30)

### Bug Fixes

-   **build:** remove visual regression tests ([a4502ea](https://github.com/fremtind/jokul/commit/a4502ea))
-   **checkbox:** add classnames to props ([e89edee](https://github.com/fremtind/jokul/commit/e89edee)), closes [#264](https://github.com/fremtind/jokul/issues/264)
-   **checkbox:** fix correct spacing and font sizes for checkbox ([fca4177](https://github.com/fremtind/jokul/commit/fca4177))

### Features

-   **checkbox:** add checkbox group style and react component ([8c9ec35](https://github.com/fremtind/jokul/commit/8c9ec35))
-   **checkbox-react:** make children required for checkbox ([ac0887c](https://github.com/fremtind/jokul/commit/ac0887c))
-   **field-group:** add field group style and react component ([f002974](https://github.com/fremtind/jokul/commit/f002974))
-   **field-group:** expand field group functionality ([8a9f40b](https://github.com/fremtind/jokul/commit/8a9f40b))

## 0.6.0 (2019-08-02)

### Features

-   **test:** add visual regression testing ([1553b28](https://github.com/fremtind/jokul/commit/1553b28))

## 0.5.3 (2019-07-30)

### Bug Fixes

-   **checkbox:** fix style for older browser, add onchange handler ([d2f0497](https://github.com/fremtind/jokul/commit/d2f0497)), closes [#148](https://github.com/fremtind/jokul/issues/148)
-   **checkbox:** refactor default checked to checked ([ae709fa](https://github.com/fremtind/jokul/commit/ae709fa))

## 0.5.1 (2019-07-18)

### Bug Fixes

-   **build:** normalize react package.json ([6c29e08](https://github.com/fremtind/jokul/commit/6c29e08)), closes [#156](https://github.com/fremtind/jokul/issues/156)
-   **css:** output prefixed css files, fix import from core ([db7413d](https://github.com/fremtind/jokul/commit/db7413d))

## 0.2.0 (2019-07-15)

### Bug Fixes

-   **publish:** update access on logo and accodion ([3b557fb](https://github.com/fremtind/jokul/commit/3b557fb))

### Features

-   **build:** add browserlist pkg and browserlist to evry pkg ([3dcc9ca](https://github.com/fremtind/jokul/commit/3dcc9ca))

## 0.1.0 (2019-07-15)

### Bug Fixes

-   **checkbox:** add core css to checkbox-react example ([c800bab](https://github.com/fremtind/jokul/commit/c800bab))
-   **checkbox:** fix checkbox-react build error ([967b342](https://github.com/fremtind/jokul/commit/967b342))
-   **checkbox:** rename data-testid for checkbox ([cf98164](https://github.com/fremtind/jokul/commit/cf98164))
-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))
-   **typescript:** clean up tsconfig, make sure everything is typechecked ([745a0fb](https://github.com/fremtind/jokul/commit/745a0fb))
-   **typescript:** remove unnecessary tsconfig ([c594b9e](https://github.com/fremtind/jokul/commit/c594b9e))

### Features

-   **checkbox:** add Jokul checkbox as a react packaged ([69ef671](https://github.com/fremtind/jokul/commit/69ef671))
