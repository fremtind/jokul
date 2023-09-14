# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [11.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-card-react@10.0.8...@fremtind/jkl-card-react@11.0.0) (2023-09-14)

### Bug Fixes

- deleted snapshots ([a9c92ce](https://github.com/fremtind/jokul/commit/a9c92ce300b4fadac843605dc74c8e4210db8ab0))
- slettet snapshots ([d053741](https://github.com/fremtind/jokul/commit/d053741f933a5ec4c117777dd647cfa4e49eb8fa))

### Features

- removed possibility to insert an image in InfoCard ([dec3c38](https://github.com/fremtind/jokul/commit/dec3c3810945a5fea203c1f58205f710f7b9caa2))
- taskCard has now only three possible background colors ([3877af0](https://github.com/fremtind/jokul/commit/3877af04457980cbdf78ed0a873b1901d079178a))

### BREAKING CHANGES

- There is no longer possible to add an image to InfoCard
- very-subdued background color does no longer exist

## 10.0.7 (2023-09-05)

### Bug Fixes

-   deleted snapshot files ([5cad560](https://github.com/fremtind/jokul/commit/5cad560a9757a56715ed64f93265e56efffaa427))

# 10.0.0 (2023-07-07)

### chore

-   oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### Code Refactoring

-   migrer vekk fra deprecated tilde-importer i Sass ([7ef2cf7](https://github.com/fremtind/jokul/commit/7ef2cf7a510122c69b2c5658c402f3dd9f5322f7)), closes [#3418](https://github.com/fremtind/jokul/issues/3418)

### BREAKING CHANGES

-   Avhenger av ny majorversjon av core
-   Tilde-prefikset er fjernet i all Sass-kode. Avhengig av oppsettet ditt kan det hende du
    ikke trenger gjøre noe. Om bygget ditt brekker, konfigurer Sass sin loadPaths så den
    inkluderer node_modules.

# [9.1.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-card-react@9.0.25...@fremtind/jkl-card-react@9.1.0) (2023-06-07)

### Features

-   legg til støtte for semantiske bakgrunnsfarger i TaskCard ([1f2cadb](https://github.com/fremtind/jokul/commit/1f2cadb9fe7ed2ee22d38362fa41825d0359c782))

## 9.0.15 (2023-05-12)

### Bug Fixes

-   pruk padding i stedet for margin på innholdet i kort ([9ce285a](https://github.com/fremtind/jokul/commit/9ce285a78c7bb9de4cb04e85de2d0e8e611f2600))

# [9.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-card-react@8.0.13...@fremtind/jkl-card-react@9.0.0) (2023-03-20)

### Bug Fixes

-   fjern unødvendig bruk av flex ([b4c9fcd](https://github.com/fremtind/jokul/commit/b4c9fcd08eb07b267a737030c27ab92e5683b066)), closes [#3451](https://github.com/fremtind/jokul/issues/3451)

### BREAKING CHANGES

-   Om du har inline-elementer som direkte children til kortene vil disse ikke lenger ha display:block.
    Wrap de i en div om du trenger.

## [8.0.10](https://github.com/fremtind/jokul/compare/@fremtind/jkl-card-react@8.0.7...@fremtind/jkl-card-react@8.0.10) (2023-03-01)

### Bug Fixes

-   fjern bevegelse i pila ved hover for navcard ([c57a3fd](https://github.com/fremtind/jokul/commit/c57a3fdfc179cb282b30c65f904414b449f7cbd9)), closes [#3400](https://github.com/fremtind/jokul/issues/3400)

# [8.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-card-react@7.0.30...@fremtind/jkl-card-react@8.0.0) (2023-01-30)

### Features

-   bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))

### BREAKING CHANGES

-   Avhenger av en versjon av jkl-core med breaking changes

## [7.0.21](https://github.com/fremtind/jokul/compare/@fremtind/jkl-card-react@7.0.20...@fremtind/jkl-card-react@7.0.21) (2022-12-01)

### Bug Fixes

-   la til muligheten for å sette padding til 0 ([fd19b37](https://github.com/fremtind/jokul/commit/fd19b37bd86824fe8f59e0a5788d5ee94ef085f8)), closes [#3283](https://github.com/fremtind/jokul/issues/3283)

## 7.0.16 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

## [7.0.13](https://github.com/fremtind/jokul/compare/@fremtind/jkl-card-react@7.0.11...@fremtind/jkl-card-react@7.0.13) (2022-11-11)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## [7.0.12](https://github.com/fremtind/jokul/compare/@fremtind/jkl-card-react@7.0.11...@fremtind/jkl-card-react@7.0.12) (2022-11-09)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

# 7.0.0 (2022-09-08)

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))
-   kompaktvarianter av NavCard, InfoCard, TaskCard ([6d0f260](https://github.com/fremtind/jokul/commit/6d0f260f3cf18a3efe6ad19c1067e11c5cbb85c3))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"

## 6.0.13 (2022-08-16)

### Bug Fixes

-   la til loading og decoding på img ([b21371b](https://github.com/fremtind/jokul/commit/b21371b1752f93df91de4614175151f5f536a1eb)), closes [#2945](https://github.com/fremtind/jokul/issues/2945)

## [6.0.4](https://github.com/fremtind/jokul/compare/@fremtind/jkl-card-react@6.0.3...@fremtind/jkl-card-react@6.0.4) (2022-06-13)

### Bug Fixes

-   merk CSS og SCSS som side-effects ([dac2e2b](https://github.com/fremtind/jokul/commit/dac2e2b5f4d1b31485821bf6ad8ec4c7c2769cca))

### Performance Improvements

-   bruk tiny-glob for globbing av filer under bygg ([246952a](https://github.com/fremtind/jokul/commit/246952ae75afe20bcf0d007a0a068b76b114f9a6))

# [6.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-card-react@5.2.16...@fremtind/jkl-card-react@6.0.0) (2022-06-07)

### chore

-   fiks lintfeil ([4093d2a](https://github.com/fremtind/jokul/commit/4093d2a2ae7bbe0d30de882b9f5d144e8e77cede))

### Code Refactoring

-   oppdater til nyeste core ([1db381f](https://github.com/fremtind/jokul/commit/1db381fdc0d3f1c35818d2feec49977331cd2fad))

### BREAKING CHANGES

-   Pakken avhenger av en breaking versjon av core
-   Avhenger av ny majorversjon av core

# 5.3.0 (2022-05-30)

### Features

-   add title to InfoCard and fix example ([eee03c0](https://github.com/fremtind/jokul/commit/eee03c04b52bafca9859de7bbcb81e54620074fd))

## 5.2.5 (2022-03-10)

### Bug Fixes

-   bruk den riktige genericen per type ([a8e8802](https://github.com/fremtind/jokul/commit/a8e88028c66379c3fac2cd10ae0478aadd1d5392))

# 5.2.0 (2022-02-22)

### Features

-   la brukere overstyre komponenten brukt av NavCard ([afd53da](https://github.com/fremtind/jokul/commit/afd53da8a65223fdfb5fe295277014b996991bf4))

# [5.1.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-card-react@5.0.20...@fremtind/jkl-card-react@5.1.0) (2022-02-17)

### Bug Fixes

-   rett opp feil import i et av eksemplene ([2a2053f](https://github.com/fremtind/jokul/commit/2a2053f04bc92b36a464ac13956eb2defc83cc79))

### Features

-   legg til InfoCard-komponent ([c4c7a1e](https://github.com/fremtind/jokul/commit/c4c7a1e2f7ae0ec20403069f2bf51a1ca9e729b1))
-   legg til NavCard-komponent ([4335747](https://github.com/fremtind/jokul/commit/433574798fd3dc905c326d1241df5e7b842e0455))
-   legg til TaskCard-komponent ([8c8134b](https://github.com/fremtind/jokul/commit/8c8134b9b86da16961a68a40c790665f0fe1baa6))
-   skriv om API for padding og oppdater dokumentasjon ([f7c1fb5](https://github.com/fremtind/jokul/commit/f7c1fb56fba7c17dc60e310e22b421e3870dff02))

## 5.0.0 (2021-10-21)

### chore

-   updates dependencies ([b975200](https://github.com/fremtind/jokul/commit/b97520045c02e4bcb44ebde159c60a7dff7f01d6))

### BREAKING CHANGES

-   depends on jkl-core v8 with breaking changes

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

## 1.4.14 (2021-02-12)

### Bug Fixes

-   add react 17 types as valid peerdep ([a074c34](https://github.com/fremtind/jokul/commit/a074c34dcece089ad6b4c581b8c920c8bdd4f1e0))

## 1.4.0 (2020-11-25)

### Features

-   update to react 17 ([4639058](https://github.com/fremtind/jokul/commit/4639058067eaa9be222825f8ac4f495a1e74cc0f))

## 1.3.0 (2020-07-29)

### Features

-   **build:** use @babel/runtime instead of inlining helpers in each file ([bbadce5](https://github.com/fremtind/jokul/commit/bbadce52ba4da5d540b479b07273332587bed436)), closes [#1136](https://github.com/fremtind/jokul/issues/1136)

## 1.2.3 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

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
-   update to new typography naming ([5c061d7](https://github.com/fremtind/jokul/commit/5c061d7b52529f83a16cf944db240984b67f5229))

## 1.0.2 (2019-12-17)

### Bug Fixes

-   **card:** lets title be a optional prop ([1ed7c19](https://github.com/fremtind/jokul/commit/1ed7c191f2a4f2ca94e75b5ec864adaae0d5535e)), closes [#576](https://github.com/fremtind/jokul/issues/576)

## 1.0.0 (2019-12-03)

### Bug Fixes

-   **card:** add core & fix title ([4120174](https://github.com/fremtind/jokul/commit/412017454b83b1ddec4a9124dd84680d3d2d0d7a))
-   **card:** change prop name ([a9e2eba](https://github.com/fremtind/jokul/commit/a9e2eba90f00bb677826f0fe952adff3b8b1f2be))
-   **card:** fix empty div ([6fcbaf5](https://github.com/fremtind/jokul/commit/6fcbaf5d63fad260fb8ea3d545747d079233884d))
-   **card:** fix image import ([6a546d4](https://github.com/fremtind/jokul/commit/6a546d42aca4b3e809d648a6d5a921992fcaf909))
-   **card:** fix space on className ([513eaf2](https://github.com/fremtind/jokul/commit/513eaf20b25df75cb2845a4ed066ed1900946717))
-   **card:** make props mandatory ([47559f6](https://github.com/fremtind/jokul/commit/47559f6d7a404da75d60ae65b8b1bca506205e92))

### Features

-   **card:** make card clickable & move transition/shadow ([3e18478](https://github.com/fremtind/jokul/commit/3e184784fbaf2eb1126c1192a5165fb972fcd3f8))
-   **card:** make card-component ready for v1 ([2b608b7](https://github.com/fremtind/jokul/commit/2b608b7ecc345261e5918823040cb9710a112c35)), closes [#453](https://github.com/fremtind/jokul/issues/453)
-   **card:** make card-component ready for v1 ([86c7171](https://github.com/fremtind/jokul/commit/86c71711f2a85255f032f1e7cdce9319bfb971ee)), closes [#453](https://github.com/fremtind/jokul/issues/453)

## 0.6.1 (2019-08-30)

### Bug Fixes

-   **build:** remove visual regression tests ([a4502ea](https://github.com/fremtind/jokul/commit/a4502ea))

## 0.6.0 (2019-08-02)

### Features

-   **test:** add visual regression testing ([1553b28](https://github.com/fremtind/jokul/commit/1553b28))

## 0.5.1 (2019-07-18)

### Bug Fixes

-   **build:** normalize react package.json ([6c29e08](https://github.com/fremtind/jokul/commit/6c29e08)), closes [#156](https://github.com/fremtind/jokul/issues/156)

## 0.2.0 (2019-07-15)

### Bug Fixes

-   **publish:** update access on logo and accodion ([3b557fb](https://github.com/fremtind/jokul/commit/3b557fb))

### Features

-   **build:** add browserlist pkg and browserlist to evry pkg ([3dcc9ca](https://github.com/fremtind/jokul/commit/3dcc9ca))

## 0.1.0 (2019-07-15)

### Bug Fixes

-   **accordion-react:** clean up hackathon code ([167748f](https://github.com/fremtind/jokul/commit/167748f))
-   **build:** fix deterministic build order ([78566ef](https://github.com/fremtind/jokul/commit/78566ef))
-   **card-react:** add style to example files ([ff21edc](https://github.com/fremtind/jokul/commit/ff21edc))
-   **card-react:** add style to story ([06479f5](https://github.com/fremtind/jokul/commit/06479f5))
-   **portal:** remove storybook and old portal ([c69d7fa](https://github.com/fremtind/jokul/commit/c69d7fa))
-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))
-   **typescript:** clean up tsconfig, make sure everything is typechecked ([745a0fb](https://github.com/fremtind/jokul/commit/745a0fb))
-   **typescript:** remove unnecessary tsconfig ([c594b9e](https://github.com/fremtind/jokul/commit/c594b9e))

### Features

-   **card-react:** add card react component ([70cd43d](https://github.com/fremtind/jokul/commit/70cd43d))
