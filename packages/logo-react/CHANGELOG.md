# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [10.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-logo-react@9.0.1...@fremtind/jkl-logo-react@10.0.0) (2022-06-07)

### chore

-   fiks lintfeil ([4093d2a](https://github.com/fremtind/jokul/commit/4093d2a2ae7bbe0d30de882b9f5d144e8e77cede))

### BREAKING CHANGES

-   Pakken avhenger av en breaking versjon av core

# 9.0.0 (2022-05-11)

### Bug Fixes

-   fjern utkommentert ubrukt prop ([f5df1fc](https://github.com/fremtind/jokul/commit/f5df1fc97d71e3402d81ee9490e9a8ed802ce234))

### Features

-   bedre håndtering av tittel for stemplene ([6521cc2](https://github.com/fremtind/jokul/commit/6521cc220b954c5aa8c0f3128dd8dbd1c99406b2))
-   legg til flere varianter av logostemplet ([271fc88](https://github.com/fremtind/jokul/commit/271fc88f657aaaa5f6d9cb72768b44349080b299))
-   legg til hook for snurrende logostempel ([90c46e2](https://github.com/fremtind/jokul/commit/90c46e2f64c387336bbff6eb014ad76babf357bb))
-   refaktorer LogoStamp til å være composite ([383f330](https://github.com/fremtind/jokul/commit/383f330ebca3a4f69ae87eb12a1c7a27e2527670))

### BREAKING CHANGES

-   LogoStamp tar ikke lenger propen variant, og må nå ha children i form av en av tekstkomponentene.

# 8.0.0 (2022-02-07)

### Bug Fixes

-   fjern inverted-prop ([de5f8b8](https://github.com/fremtind/jokul/commit/de5f8b83ae8f025826f4c56d3aeb5e081dea66cc)), closes [#2646](https://github.com/fremtind/jokul/issues/2646)

### BREAKING CHANGES

-   Fjernet `inverted`-prop. Bruk `data-theme="dark"` om du trenger overstyre temaet.

## 7.1.0 (2021-12-01)

### Features

-   legg til logostempel ([318b085](https://github.com/fremtind/jokul/commit/318b08520ab6b1296f642ac4258f1f3fe08c193c))

## 7.0.0 (2021-10-21)

### chore

-   updates dependencies ([b975200](https://github.com/fremtind/jokul/commit/b97520045c02e4bcb44ebde159c60a7dff7f01d6))

### BREAKING CHANGES

-   depends on jkl-core v8 with breaking changes

## 6.0.0 (2021-07-09)

### chore

-   bump major version ([255a776](https://github.com/fremtind/jokul/commit/255a776d45a068645124499b870ecefec9d87f0e))

### BREAKING CHANGES

-   Depends on jkl-core-version with breaking changes

## 5.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 4.0.0 (2021-06-07)

### Features

-   upgrade dependency jkl-core to v5.0.0 ([c3dc8dc](https://github.com/fremtind/jokul/commit/c3dc8dcbd3cba99502f1124cbe1dcaa688177f55))

### BREAKING CHANGES

-   Upgrades dependency jkl-core to v5.0.0, introducing breaking changes to color variables

## 3.3.6 (2021-02-12)

### Bug Fixes

-   add react 17 types as valid peerdep ([a074c34](https://github.com/fremtind/jokul/commit/a074c34dcece089ad6b4c581b8c920c8bdd4f1e0))

## 3.3.0 (2020-11-25)

### Features

-   update to react 17 ([4639058](https://github.com/fremtind/jokul/commit/4639058067eaa9be222825f8ac4f495a1e74cc0f))

## 3.2.0 (2020-09-01)

### Features

-   implement global dark mode ([47b8e2d](https://github.com/fremtind/jokul/commit/47b8e2dc0abcd366212fc67f306f8523a63d11c8))

## 3.1.9 (2020-08-27)

### Bug Fixes

-   **logo:** fix sizing issues with logo ([a1c50a6](https://github.com/fremtind/jokul/commit/a1c50a6bd7d4d63336e8d2bccad10388c720097f))

## 3.1.0 (2020-07-29)

### Features

-   **build:** use @babel/runtime instead of inlining helpers in each file ([bbadce5](https://github.com/fremtind/jokul/commit/bbadce52ba4da5d540b479b07273332587bed436)), closes [#1136](https://github.com/fremtind/jokul/issues/1136)

## 3.0.17 (2020-06-26)

### Bug Fixes

-   align nanoid version, and migrate to 3 ([a3d571d](https://github.com/fremtind/jokul/commit/a3d571db3e18937d40df5268c8f711232a72314e))

## 3.0.2 (2020-03-30)

### Bug Fixes

-   **logo:** add transforms for logo symbol support ([fb73270](https://github.com/fremtind/jokul/commit/fb7327055ee15c298f8e4a02b0e2149163dfae78))
-   **logo-react:** use .logo-example on LogoExample ([e067d18](https://github.com/fremtind/jokul/commit/e067d18f385724ad34ab71f7f94cdeafbfb527a9))

## 3.0.1 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 3.0.0 (2020-03-16)

### Features

-   **logo-react:** remove LogoStamp components ([41d18c2](https://github.com/fremtind/jokul/commit/41d18c22cf4e6fc3026dc65cc6558814ff5033c1))

### BREAKING CHANGES

-   **logo-react:** LogoStamp components are no longer available for use

## 2.1.0 (2020-03-06)

### Features

-   **portal:** implement dev and portal examples ([857f2e2](https://github.com/fremtind/jokul/commit/857f2e29359f9442a7da0c977a94d63dfbdfc194))

## 2.0.0 (2020-02-18)

### Bug Fixes

-   **jkl:** rename classnames import and move types ([e06ef21](https://github.com/fremtind/jokul/commit/e06ef21062b345d5defab335253041dad7ae6134))

### Features

-   **logo:** tweak bounding boxes, add "animated" prop ([b611af6](https://github.com/fremtind/jokul/commit/b611af69747b425a602eeb2ac02819912464250b))
-   **logo-react:** unify logo components ([1f5f630](https://github.com/fremtind/jokul/commit/1f5f63067fcf34db09f34df0004766328ac54a04))

### BREAKING CHANGES

-   **logo:** Logo component now requires "animated" prop to be true in order to animate. The logo now fills the
    entire width of the component, including the symbol version when "animated" is set to false
-   **logo-react:** logo components have been combined into one component: Logo

## 1.1.0 (2020-01-16)

### Bug Fixes

-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

### Features

-   **portal:** use examples as documentation for all comp ([e99e56a](https://github.com/fremtind/jokul/commit/e99e56ab2f5bf13cd0e72bf010e6472a08ffabe9))

## 1.0.0 (2019-12-03)

### Features

-   add img role to svg ([94bbd22](https://github.com/fremtind/jokul/commit/94bbd22041baec38eded605661737265d6b62474))
-   add title for accessibility ([d92cccd](https://github.com/fremtind/jokul/commit/d92cccd5530e647030337a28470565e62d66a4ff))

## 0.7.1 (2019-08-30)

### Bug Fixes

-   **build:** remove visual regression tests ([a4502ea](https://github.com/fremtind/jokul/commit/a4502ea))

## 0.7.0 (2019-08-02)

### Features

-   **logo:** add logostamp ([1f90862](https://github.com/fremtind/jokul/commit/1f90862))
-   **test:** add visual regression testing ([1553b28](https://github.com/fremtind/jokul/commit/1553b28))

## 0.6.0 (2019-07-30)

### Features

-   **portal:** add components, refactor portal ([7e7d038](https://github.com/fremtind/jokul/commit/7e7d038))

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

-   **build:** fix deterministic build order ([78566ef](https://github.com/fremtind/jokul/commit/78566ef))
-   **logo:** use currentColor instead og negative prop ([90df1fe](https://github.com/fremtind/jokul/commit/90df1fe))
-   **logo:** use currentColor instead og negative prop ([25b73a0](https://github.com/fremtind/jokul/commit/25b73a0))
-   **portal:** remove storybook and old portal ([c69d7fa](https://github.com/fremtind/jokul/commit/c69d7fa))
-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))
-   **typescript:** clean up tsconfig, make sure everything is typechecked ([745a0fb](https://github.com/fremtind/jokul/commit/745a0fb))
-   **typescript:** remove unnecessary tsconfig ([c594b9e](https://github.com/fremtind/jokul/commit/c594b9e))

### Features

-   **logo:** add logo package, better animate logo ([7ac247b](https://github.com/fremtind/jokul/commit/7ac247b))
-   **logo:** fix animation, minify svg ([5e93146](https://github.com/fremtind/jokul/commit/5e93146))

### BREAKING CHANGES

-   **logo:** no svg in style pkg
