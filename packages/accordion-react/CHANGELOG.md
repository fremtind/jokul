# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [10.1.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-accordion-react@10.0.16...@fremtind/jkl-accordion-react@10.1.0) (2023-12-04)

### Features

- accordion uses details/summary elements ([b898531](https://github.com/fremtind/jokul/commit/b8985319b59a8b3f1f36972a1aa4cfebf0a0bd61)), closes [#3767](https://github.com/fremtind/jokul/issues/3767)

## 10.0.5 (2023-09-14)

### Bug Fixes

- deleted snapshots folder ([b742384](https://github.com/fremtind/jokul/commit/b74238480f6131af19b9f70b796377a4978a6ce3))

## 10.0.4 (2023-09-14)

### Bug Fixes

-   try removing accordion snapshots to see diff ([9a6cd15](https://github.com/fremtind/jokul/commit/9a6cd15065eb2809b3210bb61fda54deabb012cb))

# 10.0.0 (2023-07-07)

### chore

-   oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### BREAKING CHANGES

-   Avhenger av ny majorversjon av core

# [9.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-accordion-react@8.0.15...@fremtind/jkl-accordion-react@9.0.0) (2023-01-30)

### Features

-   bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))
-   gjør pilen fet når AccorionItem er åpent ([736f11d](https://github.com/fremtind/jokul/commit/736f11d3e76aec60b8edfd66186cf769c8241f48))
-   ta i bruk nye ikoner i AccordionItem ([f9c6a32](https://github.com/fremtind/jokul/commit/f9c6a32f9a924721e71f2e111f6260b052ee5bd0))

### BREAKING CHANGES

-   Avhenger av en versjon av jkl-core med breaking changes
-   Du må nå importere stilarket fra jkl-icons fr at komponentnen skal se riktig ut

## 8.0.12 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

## 8.0.9 (2022-11-11)

### Bug Fixes

-   legg til manglende dependencies internt mellom pakker ([761936f](https://github.com/fremtind/jokul/commit/761936ff2ecdf7338dcddb7f33e984f229cef48b)), closes [#3232](https://github.com/fremtind/jokul/issues/3232)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## 8.0.8 (2022-11-09)

### Bug Fixes

-   legg til manglende dependencies internt mellom pakker ([761936f](https://github.com/fremtind/jokul/commit/761936ff2ecdf7338dcddb7f33e984f229cef48b)), closes [#3232](https://github.com/fremtind/jokul/issues/3232)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## [8.0.7](https://github.com/fremtind/jokul/compare/@fremtind/jkl-accordion-react@8.0.6...@fremtind/jkl-accordion-react@8.0.7) (2022-10-11)

### Bug Fixes

-   sync designet på Accordion med Figma ([d7dd108](https://github.com/fremtind/jokul/commit/d7dd108fcd9501e5794a0925467e19af0dacc476)), closes [#3132](https://github.com/fremtind/jokul/issues/3132)

# 8.0.0 (2022-09-08)

### Bug Fixes

-   plassering av pila i flere kontekster ([6cc2831](https://github.com/fremtind/jokul/commit/6cc28313f394dbf842e627c8910fed5744a72e98))

### Features

-   compact-variant av Accordion ([61a3647](https://github.com/fremtind/jokul/commit/61a364770e2a225b00e55b149ac089cc8ee44769))
-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))
-   kompakt alert message ([33e249d](https://github.com/fremtind/jokul/commit/33e249d3c99cfa97333d25d50bedff9e36ef29e9))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"

## [7.0.4](https://github.com/fremtind/jokul/compare/@fremtind/jkl-accordion-react@7.0.3...@fremtind/jkl-accordion-react@7.0.4) (2022-06-13)

### Bug Fixes

-   merk CSS og SCSS som side-effects ([dac2e2b](https://github.com/fremtind/jokul/commit/dac2e2b5f4d1b31485821bf6ad8ec4c7c2769cca))

### Performance Improvements

-   bruk tiny-glob for globbing av filer under bygg ([246952a](https://github.com/fremtind/jokul/commit/246952ae75afe20bcf0d007a0a068b76b114f9a6))

# [7.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-accordion-react@6.0.15...@fremtind/jkl-accordion-react@7.0.0) (2022-06-07)

### chore

-   fiks lintfeil ([4093d2a](https://github.com/fremtind/jokul/commit/4093d2a2ae7bbe0d30de882b9f5d144e8e77cede))

### BREAKING CHANGES

-   Pakken avhenger av en breaking versjon av core

# 6.0.0 (2022-02-07)

### Bug Fixes

-   fjern inverted-prop ([de5f8b8](https://github.com/fremtind/jokul/commit/de5f8b83ae8f025826f4c56d3aeb5e081dea66cc)), closes [#2646](https://github.com/fremtind/jokul/issues/2646)

### BREAKING CHANGES

-   Fjernet `inverted`-prop. Bruk `data-theme="dark"` om du trenger overstyre temaet.

## 5.1.0 (2021-11-19)

### Features

-   **@fremtind/jkl-accordion-react:** add onClick prop to AccordionItem ([410b90d](https://github.com/fremtind/jokul/commit/410b90d8eca92b72f13fb8c896ebf03fa5230806)), closes [#2515](https://github.com/fremtind/jokul/issues/2515) [#2515](https://github.com/fremtind/jokul/issues/2515) [#2515](https://github.com/fremtind/jokul/issues/2515) [#2515](https://github.com/fremtind/jokul/issues/2515)
-   **accordion-react:** expor interfaces as types ([4949d3c](https://github.com/fremtind/jokul/commit/4949d3c95b2a2c4ffeb028c5afe701f36912bb11)), closes [#2515](https://github.com/fremtind/jokul/issues/2515)

## 5.0.0 (2021-10-21)

### chore

-   updates dependencies ([b975200](https://github.com/fremtind/jokul/commit/b97520045c02e4bcb44ebde159c60a7dff7f01d6))

### BREAKING CHANGES

-   depends on jkl-core v8 with breaking changes

## 4.0.7 (2021-09-30)

### Bug Fixes

-   rett et problem i samspillet Select og Accordion ([7733fd2](https://github.com/fremtind/jokul/commit/7733fd21e6eab8797ad30f3a1d59011a84276c2b)), closes [#1466](https://github.com/fremtind/jokul/issues/1466)

## 4.0.5 (2021-09-17)

### Bug Fixes

-   oppdater core-toggle for bugfix rundt aria-label ([54a3902](https://github.com/fremtind/jokul/commit/54a39020606f19b18808ba6ff6ecd157ed775461))

## 4.0.0 (2021-07-09)

### Features

-   use new typographic scale ([c588ee2](https://github.com/fremtind/jokul/commit/c588ee26a9f2c7433f72d7c58d8afc115c1c5ab5))

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

## 1.7.5 (2021-02-12)

### Bug Fixes

-   add react 17 types as valid peerdep ([a074c34](https://github.com/fremtind/jokul/commit/a074c34dcece089ad6b4c581b8c920c8bdd4f1e0))

## 1.7.0 (2020-12-15)

### Features

-   display types in portal ([5c62a16](https://github.com/fremtind/jokul/commit/5c62a161c278d3a5a136741aea8dcf9b62338bda))

## 1.6.0 (2020-11-25)

### Features

-   update to react 17 ([4639058](https://github.com/fremtind/jokul/commit/4639058067eaa9be222825f8ac4f495a1e74cc0f))

## 1.5.24 (2020-09-11)

### Bug Fixes

-   actually bundle nrk core components ([d764dc1](https://github.com/fremtind/jokul/commit/d764dc11909b388325353f8ceccaed0a3c97416d))

## 1.5.5 (2020-08-13)

### Bug Fixes

-   **accordion:** fix accordion spacing issue ([a35771b](https://github.com/fremtind/jokul/commit/a35771bc0a06760592f2d2fcf07ee2f92f98b6a8))

## 1.5.0 (2020-07-29)

### Features

-   **build:** use @babel/runtime instead of inlining helpers in each file ([bbadce5](https://github.com/fremtind/jokul/commit/bbadce52ba4da5d540b479b07273332587bed436)), closes [#1136](https://github.com/fremtind/jokul/issues/1136)

## 1.4.0 (2020-05-27)

### Features

-   **cypress:** initial cypress setup ([3004668](https://github.com/fremtind/jokul/commit/300466834e2f79acc8ed501bb2b66f574328f80d))

## 1.3.3 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 1.3.0 (2020-03-06)

### Features

-   **portal:** implement dev and portal examples ([857f2e2](https://github.com/fremtind/jokul/commit/857f2e29359f9442a7da0c977a94d63dfbdfc194))

## 1.2.2 (2020-02-18)

### Bug Fixes

-   **jkl:** rename classnames import and move types ([e06ef21](https://github.com/fremtind/jokul/commit/e06ef21062b345d5defab335253041dad7ae6134))

## 1.2.0 (2020-01-16)

### Bug Fixes

-   **portal:** refactor examples, show menu for large screens ([ae59e7a](https://github.com/fremtind/jokul/commit/ae59e7aef89098e09ad138bf7cf8574a0d56de7f))
-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

### Features

-   **portal:** autogenerate component docs from example ([40249b5](https://github.com/fremtind/jokul/commit/40249b5189b69af74d1c2b8f38bad118a65b03c0))
-   **portal:** show typedef, refactor ([248a88e](https://github.com/fremtind/jokul/commit/248a88ee776ff4f16f1fa96de76bb047bbdb9e2a))
-   **portal:** use examples as documentation for all comp ([e99e56a](https://github.com/fremtind/jokul/commit/e99e56ab2f5bf13cd0e72bf010e6472a08ffabe9))

## 1.1.0 (2019-12-10)

### Features

-   **accordion-react:** add support for custom className on AccordionItem ([ae612ef](https://github.com/fremtind/jokul/commit/ae612ef1b95c80989b81b650dda926d749a0f0c9))

## 0.9.0 (2019-08-30)

### Bug Fixes

-   **accordion-react:** don't use button as flex and div inside button ([b035498](https://github.com/fremtind/jokul/commit/b035498))
-   **build:** remove visual regression tests ([a4502ea](https://github.com/fremtind/jokul/commit/a4502ea))

### Features

-   **accordion:** add focus state to accordion ([3807fd6](https://github.com/fremtind/jokul/commit/3807fd6))
-   **accordion:** extract animating height into a react hook ([196748c](https://github.com/fremtind/jokul/commit/196748c))
-   **accordion:** initial version of animated accordion ([2112b5a](https://github.com/fremtind/jokul/commit/2112b5a)), closes [#270](https://github.com/fremtind/jokul/issues/270)
-   **react-hooks:** extract animation hook into separate package ([706ad61](https://github.com/fremtind/jokul/commit/706ad61))

## 0.8.0 (2019-08-02)

### Features

-   **test:** add visual regression testing ([1553b28](https://github.com/fremtind/jokul/commit/1553b28))

## 0.7.0 (2019-07-30)

### Bug Fixes

-   **accordion:** make accordion 100% width ([d665fab](https://github.com/fremtind/jokul/commit/d665fab))

### Features

-   **portal:** add components, refactor portal ([7e7d038](https://github.com/fremtind/jokul/commit/7e7d038))

## 0.6.0 (2019-07-18)

### Bug Fixes

-   **build:** normalize react package.json ([6c29e08](https://github.com/fremtind/jokul/commit/6c29e08)), closes [#156](https://github.com/fremtind/jokul/issues/156)

### Features

-   **portal:** add getting started guide ([76d742b](https://github.com/fremtind/jokul/commit/76d742b))

## 0.2.0 (2019-07-15)

### Bug Fixes

-   **publish:** update access on logo and accodion ([3b557fb](https://github.com/fremtind/jokul/commit/3b557fb))

### Features

-   **build:** add browserlist pkg and browserlist to evry pkg ([3dcc9ca](https://github.com/fremtind/jokul/commit/3dcc9ca))

## 0.1.0 (2019-07-15)

### Bug Fixes

-   **accordion-react:** clean up hackathon code ([167748f](https://github.com/fremtind/jokul/commit/167748f))
-   **accordion-react:** fix structure of accordionitem content ([0d0c29b](https://github.com/fremtind/jokul/commit/0d0c29b))
-   **accordion-react:** fix toggling of accordionitem ([35dbecf](https://github.com/fremtind/jokul/commit/35dbecf))
-   **build:** fix deterministic build order ([78566ef](https://github.com/fremtind/jokul/commit/78566ef))
-   **portal:** remove storybook and old portal ([c69d7fa](https://github.com/fremtind/jokul/commit/c69d7fa))
-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))
-   **typescript:** clean up tsconfig, make sure everything is typechecked ([745a0fb](https://github.com/fremtind/jokul/commit/745a0fb))
-   **typescript:** remove unnecessary tsconfig ([c594b9e](https://github.com/fremtind/jokul/commit/c594b9e))

### Features

-   basic setup for accordion-react wrapper ([d868fc0](https://github.com/fremtind/jokul/commit/d868fc0))
-   **accordion:** replace chevron svg with css ([14409d8](https://github.com/fremtind/jokul/commit/14409d8))
-   **accordion-react:** add button type to accordion header ([9b0a7f3](https://github.com/fremtind/jokul/commit/9b0a7f3))
-   **accordion-react:** implement accordion using \`@nrk/core-toggle\` ([fbc25fb](https://github.com/fremtind/jokul/commit/fbc25fb))
