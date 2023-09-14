# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [15.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-button-react@14.0.6...@fremtind/jkl-button-react@15.0.0) (2023-09-14)

### Bug Fixes

- oppdaterte kodeeksempel til å stemme overens med nye props ([df56b72](https://github.com/fremtind/jokul/commit/df56b72774133635a55f0ebf2823cf1f1835a6d1))

### Features

- added possibility to use all icons ([fcf6be6](https://github.com/fremtind/jokul/commit/fcf6be63a7e0f66f45adf0ca5c9a937cb59f47d2))
- changed render of icon and changed name of icon-prop and you can use both props at the same ti ([e7af26f](https://github.com/fremtind/jokul/commit/e7af26f52d21b6984773fa66704e568f51269058))

### BREAKING CHANGES

- Prop name arrow is now iconLeft and/or iconRight
- It's now possible to use all icons and not just left and right arrow. Therefore the arrow prop is
now re-named to icon

## 14.0.5 (2023-09-05)

### Bug Fixes

-   deleted snapshot files ([5cad560](https://github.com/fremtind/jokul/commit/5cad560a9757a56715ed64f93265e56efffaa427))

# 14.0.0 (2023-07-07)

### chore

-   oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### BREAKING CHANGES

-   Avhenger av ny majorversjon av core

# [13.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-button-react@12.0.20...@fremtind/jkl-button-react@13.0.0) (2023-01-30)

### Features

-   bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))

### BREAKING CHANGES

-   Avhenger av en versjon av jkl-core med breaking changes

## 12.0.14 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

## [12.0.11](https://github.com/fremtind/jokul/compare/@fremtind/jkl-button-react@12.0.9...@fremtind/jkl-button-react@12.0.11) (2022-11-11)

### Bug Fixes

-   legg til manglende dependencies internt mellom pakker ([761936f](https://github.com/fremtind/jokul/commit/761936ff2ecdf7338dcddb7f33e984f229cef48b)), closes [#3232](https://github.com/fremtind/jokul/issues/3232)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## [12.0.10](https://github.com/fremtind/jokul/compare/@fremtind/jkl-button-react@12.0.9...@fremtind/jkl-button-react@12.0.10) (2022-11-09)

### Bug Fixes

-   legg til manglende dependencies internt mellom pakker ([761936f](https://github.com/fremtind/jokul/commit/761936ff2ecdf7338dcddb7f33e984f229cef48b)), closes [#3232](https://github.com/fremtind/jokul/issues/3232)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## 12.0.4 (2022-10-07)

### Bug Fixes

-   bruk useAriaLiveRegion for å sette aria-live ([85d3a11](https://github.com/fremtind/jokul/commit/85d3a116477495a55e4849f70408fc4532ccc4a5)), closes [#3155](https://github.com/fremtind/jokul/issues/3155)

# 12.0.0 (2022-09-08)

### Bug Fixes

-   bruk ny compact prop overalt i Button ([b8c3dec](https://github.com/fremtind/jokul/commit/b8c3decb4b21a4d7f39a4ffb21bd18dc6c6295d0))

### chore

-   fjern forceCompact-props ([0f8bfeb](https://github.com/fremtind/jokul/commit/0f8bfebc68fe6ebf6368bf8a37e2af78f4d7b46d))

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))
-   nytt design for kompakte knapper ([86cfcf8](https://github.com/fremtind/jokul/commit/86cfcf8f0ddca7269d5550b450da71593e160fd6))

### Performance Improvements

-   bruk useCallback for intern metode i Button ([efc5ede](https://github.com/fremtind/jokul/commit/efc5eded52becc6be64415b6ed4d065bf5854cd5))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"
-   forceCompact er fjernet. Bruk compact og regresjonstest steder du bruker kompaktvarianter.

## [11.0.4](https://github.com/fremtind/jokul/compare/@fremtind/jkl-button-react@11.0.3...@fremtind/jkl-button-react@11.0.4) (2022-06-13)

### Bug Fixes

-   merk CSS og SCSS som side-effects ([dac2e2b](https://github.com/fremtind/jokul/commit/dac2e2b5f4d1b31485821bf6ad8ec4c7c2769cca))

### Performance Improvements

-   bruk tiny-glob for globbing av filer under bygg ([246952a](https://github.com/fremtind/jokul/commit/246952ae75afe20bcf0d007a0a068b76b114f9a6))

## [11.0.2](https://github.com/fremtind/jokul/compare/@fremtind/jkl-button-react@11.0.1...@fremtind/jkl-button-react@11.0.2) (2022-06-08)

### Bug Fixes

-   rett opp de siste gamle internavhengighetene ([ba82a0e](https://github.com/fremtind/jokul/commit/ba82a0ee6cdccf20e41924e09f6949bf4e2bdd47))

# [11.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-button-react@10.1.12...@fremtind/jkl-button-react@11.0.0) (2022-06-07)

### chore

-   fiks lintfeil ([4093d2a](https://github.com/fremtind/jokul/commit/4093d2a2ae7bbe0d30de882b9f5d144e8e77cede))

### BREAKING CHANGES

-   Pakken avhenger av en breaking versjon av core

## 10.1.10 (2022-05-06)

### Bug Fixes

-   children is no longer optional ([8684f8a](https://github.com/fremtind/jokul/commit/8684f8a76b9eb0125be0501b8db75e4653b4ac45))

# [10.1.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-button-react@10.0.4...@fremtind/jkl-button-react@10.1.0) (2022-03-07)

### Bug Fixes

-   fixed code example for arrow in button ([2cf93d9](https://github.com/fremtind/jokul/commit/2cf93d998d37caaf205db5c18c946345d756f22c))
-   ikke ha withLoader som default, forventes ikke av Cypress ([b12391b](https://github.com/fremtind/jokul/commit/b12391bff46dbc5367eac7c4dd7d6d5eea8b1522))

### Features

-   added optional arrows to buttons ([5880bfb](https://github.com/fremtind/jokul/commit/5880bfbc9da3bdea12664157b5ea8dfae2c5167e)), closes [#2772](https://github.com/fremtind/jokul/issues/2772)

# [10.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-button-react@9.0.0...@fremtind/jkl-button-react@10.0.0) (2022-02-07)

### Bug Fixes

-   eksporter typer på riktig måte med isolatedModules ([9e8fe19](https://github.com/fremtind/jokul/commit/9e8fe19077fd0efc8715ecbf0141b5c5b9abd758))
-   fjern inverted-prop ([de5f8b8](https://github.com/fremtind/jokul/commit/de5f8b83ae8f025826f4c56d3aeb5e081dea66cc)), closes [#2646](https://github.com/fremtind/jokul/issues/2646)

### BREAKING CHANGES

-   Fjernet `inverted`-prop. Bruk `data-theme="dark"` om du trenger overstyre temaet.

# 9.0.0 (2022-02-07)

### Bug Fixes

-   fjern inverted-prop ([de5f8b8](https://github.com/fremtind/jokul/commit/de5f8b83ae8f025826f4c56d3aeb5e081dea66cc)), closes [#2646](https://github.com/fremtind/jokul/issues/2646)

### BREAKING CHANGES

-   Fjernet `inverted`-prop. Bruk `data-theme="dark"` om du trenger overstyre temaet.

## 8.0.12 (2022-01-04)

### Bug Fixes

-   sett korrekt aria-hidden basert på showLoader ([81c2fcc](https://github.com/fremtind/jokul/commit/81c2fcca1cdb9e8eb54ab0bbee63ffd6e04d3fd9)), closes [#2647](https://github.com/fremtind/jokul/issues/2647)

## 8.0.0 (2021-10-21)

### chore

-   updates dependencies ([b975200](https://github.com/fremtind/jokul/commit/b97520045c02e4bcb44ebde159c60a7dff7f01d6))

### BREAKING CHANGES

-   depends on jkl-core v8 with breaking changes

## 7.0.0 (2021-10-07)

### Code Refactoring

-   **loading-state:** fjern bruk av negative-prop i loaderen ([69f4d42](https://github.com/fremtind/jokul/commit/69f4d426a68ccd4c3295d1be80544eb10ad19e37))

### BREAKING CHANGES

-   **loading-state:** Avhenger av en versjon av loader med breaking changes

## 6.0.0 (2021-10-06)

### Features

-   redesign knappeloader så den beholder layout ([9732d00](https://github.com/fremtind/jokul/commit/9732d007e92bb50ccb75a44d5a6fe74a641941f1)), closes [#2122](https://github.com/fremtind/jokul/issues/2122)

### Reverts

-   Revert "feat: redesign knappeloader så den beholder layout" ([54011df](https://github.com/fremtind/jokul/commit/54011dfb1ca5bba65e45b95dfe0fec4fb9eb340d))
-   Revert "docs: tillat default true på boolProps i eksempler" ([deaff68](https://github.com/fremtind/jokul/commit/deaff681bf795d1f434332911f287db07e5d489c))
-   Revert "chore: reset Cypress baseline for knapper" ([7dda3c1](https://github.com/fremtind/jokul/commit/7dda3c1bfcdffd86ffbd8e7e59d609d1b4f7b4af))
-   Revert "chore: update cypress snapshots [ci skip cypress]" ([438c4ef](https://github.com/fremtind/jokul/commit/438c4ef702b9fa0d8f0f9fdb40c281c13556363d))
-   Revert "docs: strukturer om dokumentasjonen av lenkeknapper" ([c42252e](https://github.com/fremtind/jokul/commit/c42252e89057d065184c013ca3aaccfeb51d8e59))

### BREAKING CHANGES

-   APIet til Button endrer seg ikke, men det er en del breaking changes i CSS om du bygger HTML selv.
    Se React-komponent for veiledning. Loader-komponenten mister inline-prop. Erstattes av
    variant="medium".

## 5.1.0 (2021-10-06)

### Bug Fixes

-   legg til manglende CSS reset for a.jkl-button ([21972e1](https://github.com/fremtind/jokul/commit/21972e14b5320fc26addb975739734dfacb94736)), closes [#2272](https://github.com/fremtind/jokul/issues/2272)

### Features

-   redesign knappeloader så den beholder layout ([344d8d3](https://github.com/fremtind/jokul/commit/344d8d3d1710125ac44211fa7788045e2ec7a36c)), closes [#2122](https://github.com/fremtind/jokul/issues/2122)

## 5.0.1 (2021-07-13)

### Bug Fixes

-   changed when withLoader div shows in button ([8ea1aaa](https://github.com/fremtind/jokul/commit/8ea1aaa5793c79708062c58bdebb545d274e4f62))

## 5.0.0 (2021-07-09)

### Features

-   use new typographic scale ([bf3da67](https://github.com/fremtind/jokul/commit/bf3da67d7ee14e36db26a03f1b0aac06780e828b))

### BREAKING CHANGES

-   Depends on jkl-core version with breaking changes

## 4.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 3.1.1 (2021-06-29)

### Bug Fixes

-   fix leaking styles from cookie consent ([7ff24c6](https://github.com/fremtind/jokul/commit/7ff24c6e54c3f41a6779fa450b8a84566eb58e60))

## 3.1.0 (2021-06-29)

### Bug Fixes

-   rip snapshots ([557ee05](https://github.com/fremtind/jokul/commit/557ee053d7ac3f5af5de0b1ab9e951b61b506be8))

### Features

-   **cookie-consent:** legg til integrasjonstest ([ff2bbca](https://github.com/fremtind/jokul/commit/ff2bbcad2ca1e054488221fbbbebec2d24b0d8ba))

## 3.0.0 (2021-06-07)

### Features

-   upgrade dependency jkl-core to v5.0.0 ([c3dc8dc](https://github.com/fremtind/jokul/commit/c3dc8dcbd3cba99502f1124cbe1dcaa688177f55))

### BREAKING CHANGES

-   Upgrades dependency jkl-core to v5.0.0, introducing breaking changes to color variables

## 2.5.11 (2021-02-12)

### Bug Fixes

-   add react 17 types as valid peerdep ([a074c34](https://github.com/fremtind/jokul/commit/a074c34dcece089ad6b4c581b8c920c8bdd4f1e0))

## 2.5.9 (2021-02-02)

### Bug Fixes

-   **button:** fix rerender issue ([90828c4](https://github.com/fremtind/jokul/commit/90828c4e198edce46506865419ad2c8418d6f4c1)), closes [#1783](https://github.com/fremtind/jokul/issues/1783)

## 2.5.5 (2021-01-21)

### Bug Fixes

-   **@fremtind/jkl-button:** fixes clipped focus-bug in button ([ad6d1aa](https://github.com/fremtind/jokul/commit/ad6d1aa685de2cb8f6081fef20df1aad12d9579b)), closes [#1704](https://github.com/fremtind/jokul/issues/1704)

## 2.5.1 (2020-12-16)

### Bug Fixes

-   **button:** add missing types from button ([76d0259](https://github.com/fremtind/jokul/commit/76d0259e32ef1c394bca06a0927f313e708ff907))

## 2.5.0 (2020-12-15)

### Features

-   display types in portal ([5c62a16](https://github.com/fremtind/jokul/commit/5c62a161c278d3a5a136741aea8dcf9b62338bda))

## 2.4.1 (2020-11-26)

### Bug Fixes

-   **button:** set classname on wrapper for with loader ([977e1b2](https://github.com/fremtind/jokul/commit/977e1b250a1ce87829625fb061be122e42be250a))

## 2.4.0 (2020-11-25)

### Features

-   **button:** add loading state to button ([e142122](https://github.com/fremtind/jokul/commit/e142122ccdad719e82f1b1a5263d55b52c5c435b)), closes [#1492](https://github.com/fremtind/jokul/issues/1492)

## 2.3.0 (2020-11-25)

### Features

-   update to react 17 ([4639058](https://github.com/fremtind/jokul/commit/4639058067eaa9be222825f8ac4f495a1e74cc0f))

## 2.2.0 (2020-11-04)

### Features

-   **button:** add action button ([39dd441](https://github.com/fremtind/jokul/commit/39dd4419f8372ad698fbab897b0527c8fc3d5de7)), closes [#1485](https://github.com/fremtind/jokul/issues/1485)

### Reverts

-   **button:** remove action button, keep other changes to button ([7f81c58](https://github.com/fremtind/jokul/commit/7f81c584b3ba6cf26595e590c1e2321e21a53282))

## 2.1.0 (2020-10-23)

### Features

-   **button:** add touch-specific animations ([b2a258d](https://github.com/fremtind/jokul/commit/b2a258d2805d12a49016e57e26883deaa044ad5b)), closes [#711](https://github.com/fremtind/jokul/issues/711)

## 2.0.0 (2020-09-22)

### Features

-   **button-react:** enabling forwardRef on button components ([97858dc](https://github.com/fremtind/jokul/commit/97858dc72c556b2162743ce2d92ad764506df674)), closes [#1362](https://github.com/fremtind/jokul/issues/1362)

### BREAKING CHANGES

-   **button-react:** Ref now points to button element

## 1.6.0 (2020-07-29)

### Features

-   **build:** use @babel/runtime instead of inlining helpers in each file ([bbadce5](https://github.com/fremtind/jokul/commit/bbadce52ba4da5d540b479b07273332587bed436)), closes [#1136](https://github.com/fremtind/jokul/issues/1136)

## 1.5.0 (2020-05-27)

### Features

-   **cypress:** initial cypress setup ([3004668](https://github.com/fremtind/jokul/commit/300466834e2f79acc8ed501bb2b66f574328f80d))

## 1.4.0 (2020-05-20)

### Bug Fixes

-   export interface in an actual functioning manner ([928222b](https://github.com/fremtind/jokul/commit/928222b619e5964c45d9fc33a4c980ba8d68750c))

### Features

-   expose prop interface for textinput and button ([5be19a4](https://github.com/fremtind/jokul/commit/5be19a4d7af4ae80fcda180faf0473960de868ff))

## 1.3.3 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 1.3.0 (2020-03-06)

### Features

-   implement component example ([9c34865](https://github.com/fremtind/jokul/commit/9c3486570b6dd74bc843431ffc9ddadd63b9d647))
-   **portal:** add do-dont example component ([7c880c6](https://github.com/fremtind/jokul/commit/7c880c6abefc3ca01a0df79d363242c7288a879a))
-   **portal:** implement dev and portal examples ([857f2e2](https://github.com/fremtind/jokul/commit/857f2e29359f9442a7da0c977a94d63dfbdfc194))
-   **portal:** portal component examples and meu fixes ([2ffe8fe](https://github.com/fremtind/jokul/commit/2ffe8fe39ff826983f027dad1ea7ffa97a013ccf))

## 1.2.0 (2020-02-18)

### Bug Fixes

-   make use of new color token (changed name) ([f14c149](https://github.com/fremtind/jokul/commit/f14c149f779e65fe0775afde4421aef26be8ed1d))
-   **button-react:** fix toggle-switch pressed state in button example ([2501f7e](https://github.com/fremtind/jokul/commit/2501f7e88aab8627adf4d8366b4595308a2f563d))
-   use new text-style mixins ([2873a57](https://github.com/fremtind/jokul/commit/2873a57f4570ddb87a7390a773433d26a9fde4ac))
-   **jkl:** rename classnames import and move types ([e06ef21](https://github.com/fremtind/jokul/commit/e06ef21062b345d5defab335253041dad7ae6134))

### Features

-   **button:** add inverted color mode for buttons ([4e9c2d5](https://github.com/fremtind/jokul/commit/4e9c2d5a4a6aed610eb87f354fa65415be34a323))
-   **button-react:** add support for all button attrs except disabled ([47950d9](https://github.com/fremtind/jokul/commit/47950d9303409261ced43da5779c20aef97665ba))
-   **button-react:** add support for type prop on buttons ([40ab289](https://github.com/fremtind/jokul/commit/40ab289d8a05bd7624c97f147c7f5e85e9cab6a9))
-   **button-react:** make onClick handler optional ([45552c8](https://github.com/fremtind/jokul/commit/45552c85d8e4ab5ffd026163d1591547efbcc599))

## 1.1.0 (2020-01-16)

### Bug Fixes

-   **portal:** document button, fix security issue with node-sass ([70ff97c](https://github.com/fremtind/jokul/commit/70ff97ce1072302d82f092c92513f7e96fe1d6c5))
-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

### Features

-   **portal:** use examples as documentation for all comp ([e99e56a](https://github.com/fremtind/jokul/commit/e99e56ab2f5bf13cd0e72bf010e6472a08ffabe9))

## 1.0.0 (2019-12-03)

### Features

-   **button:** implement forceCompact on buttons ([faf1257](https://github.com/fremtind/jokul/commit/faf1257b731d1d48bccea7d2caf76f929b9689c6))

## 0.6.1 (2019-08-30)

### Bug Fixes

-   **build:** remove visual regression tests ([a4502ea](https://github.com/fremtind/jokul/commit/a4502ea))

## 0.6.0 (2019-08-02)

### Features

-   **test:** add visual regression testing ([1553b28](https://github.com/fremtind/jokul/commit/1553b28))

## 0.5.3 (2019-07-30)

### Bug Fixes

-   **button:** add larger desktop buttons ([040030d](https://github.com/fremtind/jokul/commit/040030d)), closes [#117](https://github.com/fremtind/jokul/issues/117)

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

-   remove unneeded attribute ([a8c3619](https://github.com/fremtind/jokul/commit/a8c3619))
-   **build:** fix deterministic build order ([78566ef](https://github.com/fremtind/jokul/commit/78566ef))
-   **button:** change classname to be lower case ([66e0c2e](https://github.com/fremtind/jokul/commit/66e0c2e))
-   **button:** fix button-react structure ([c3c249a](https://github.com/fremtind/jokul/commit/c3c249a))
-   **button:** fix lint error ([0a34fc8](https://github.com/fremtind/jokul/commit/0a34fc8))
-   **portal:** remove storybook and old portal ([c69d7fa](https://github.com/fremtind/jokul/commit/c69d7fa))
-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))
-   **storybook:** fix style import in storybook ([6f9e4de](https://github.com/fremtind/jokul/commit/6f9e4de))
-   **typescript:** clean up tsconfig, make sure everything is typechecked ([745a0fb](https://github.com/fremtind/jokul/commit/745a0fb))
-   **typescript:** remove unnecessary tsconfig ([c594b9e](https://github.com/fremtind/jokul/commit/c594b9e))
