# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 6.0.10 (2022-02-07)

### Bug Fixes

-   manuell delinting sans descending specificity ([20de1c8](https://github.com/fremtind/jokul/commit/20de1c8811596b054867352177225fd197c70797))

## 6.0.0 (2021-10-21)

### Features

-   use new spacing scale ([5694495](https://github.com/fremtind/jokul/commit/5694495f56d3c1f0e675433b35cfb0e693b93a82)), closes [#2382](https://github.com/fremtind/jokul/issues/2382)

### BREAKING CHANGES

-   new spacing scale: see migration guide for jkl-core

## 5.0.0 (2021-07-09)

### chore

-   bump major version ([255a776](https://github.com/fremtind/jokul/commit/255a776d45a068645124499b870ecefec9d87f0e))

### BREAKING CHANGES

-   Depends on jkl-core-version with breaking changes

## 4.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### Features

-   **list:** add automatic dark mode ([0c6c24c](https://github.com/fremtind/jokul/commit/0c6c24c3d362514b4fc5eb93051a2be60fb18312))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 3.0.0 (2021-06-07)

### Features

-   new colors ([9144947](https://github.com/fremtind/jokul/commit/9144947766c73fbe5eaac3372495006e3b89dec7))

### BREAKING CHANGES

-   all color variables are changed

## 2.1.8 (2021-02-17)

### Bug Fixes

-   **list:** fix display of icon list in IE ([7f6dfb4](https://github.com/fremtind/jokul/commit/7f6dfb4ad035753c1bf9c91ccb61a42f7cb44c54)), closes [#1827](https://github.com/fremtind/jokul/issues/1827)

## 2.1.1 (2020-11-30)

### Bug Fixes

-   list icon top placement ([fbb5a01](https://github.com/fremtind/jokul/commit/fbb5a01569ff9e978cd1dd2a538509ad7181b244))

## 2.1.0 (2020-11-27)

### Features

-   **list:** new checklist icons ([26260dc](https://github.com/fremtind/jokul/commit/26260dca4a0623fef86745f6f5616da7a4b33579))

## 2.0.0 (2020-11-03)

### Features

-   **list:** add check and cross list items ([7c53131](https://github.com/fremtind/jokul/commit/7c53131d00712b1c41ec77dd341bb962e71c37fb)), closes [#1483](https://github.com/fremtind/jokul/issues/1483)

### BREAKING CHANGES

-   **list:** BREAKING

## 1.2.5 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 1.2.0 (2020-02-19)

### Features

-   export scss files with style pkgs ([edb6278](https://github.com/fremtind/jokul/commit/edb627838075d3d613ae78b6aae765c81067ba6a))

## 1.1.0 (2020-01-16)

### Bug Fixes

-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

### Features

-   update to new typography naming ([5c061d7](https://github.com/fremtind/jokul/commit/5c061d7b52529f83a16cf944db240984b67f5229))

## 0.7.0 (2019-07-30)

### Features

-   **portal:** document bulletlist ([6d7c1de](https://github.com/fremtind/jokul/commit/6d7c1de))

## 0.6.0 (2019-07-18)

### Bug Fixes

-   **build:** add watch job to pkg json ([a0039e0](https://github.com/fremtind/jokul/commit/a0039e0))
-   **bullet-list:** remove import of paragraph styles and align spacing ([ec24a21](https://github.com/fremtind/jokul/commit/ec24a21))

### Features

-   **build:** add watch job for css, refactor gulp ([8adafd6](https://github.com/fremtind/jokul/commit/8adafd6))

## 0.5.0 (2019-07-15)

### Bug Fixes

-   use correct syntax for importing sass index files ([46fa8f6](https://github.com/fremtind/jokul/commit/46fa8f6))
-   **build:** publish correct files for style pkgs ([a89d768](https://github.com/fremtind/jokul/commit/a89d768))

## 0.3.0 (2019-07-15)

### Features

-   **build:** publish correct files in all packages ([b1fbb8f](https://github.com/fremtind/jokul/commit/b1fbb8f))
-   **core:** flatten structure of core package ([5b2287b](https://github.com/fremtind/jokul/commit/5b2287b))

## 0.2.0 (2019-07-15)

### Bug Fixes

-   **publish:** update access on logo and accodion ([3b557fb](https://github.com/fremtind/jokul/commit/3b557fb))

### Features

-   **build:** add browserlist pkg and browserlist to evry pkg ([3dcc9ca](https://github.com/fremtind/jokul/commit/3dcc9ca))

## 0.1.0 (2019-07-15)

### Bug Fixes

-   **bullet-list:** refactor style and update example ([5cd05a1](https://github.com/fremtind/jokul/commit/5cd05a1))
-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))

### Features

-   **bullet-list:** enable semantic nesting in bullet lists@ ([63b47c1](https://github.com/fremtind/jokul/commit/63b47c1))
-   **bulletlist:** add style and react wrapper for bullet list ([e30b16f](https://github.com/fremtind/jokul/commit/e30b16f))
-   **css build:** example implementation of new css build job with gulp ([74eb3b8](https://github.com/fremtind/jokul/commit/74eb3b8)), closes [#34](https://github.com/fremtind/jokul/issues/34)
