# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 5.0.0 (2021-07-09)

### Features

- use new typographic scale ([bf3da67](https://github.com/fremtind/jokul/commit/bf3da67d7ee14e36db26a03f1b0aac06780e828b))

### BREAKING CHANGES

- Depends on jkl-core version with breaking changes

## 4.0.0 (2021-07-06)

### chore

- bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### BREAKING CHANGES

- Now depends on jkl-core 6.0.0, which introduces breaking changes

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
