# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 12.1.0 (2024-06-11)

### Bug Fixes

- bruk riktig padding på ghost button ([85b907a](https://github.com/fremtind/jokul/commit/85b907a6a2d5332542c812f3a9222e38e3636d30))

### Features

- ny knappevariant, GhostButton ([4721168](https://github.com/fremtind/jokul/commit/472116874fb445b11644d0a33059c71a92869c1b))

# [12.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-button@11.0.2...@fremtind/jkl-button@12.0.0) (2023-09-14)

### Features

-   added possibility to use all icons ([fcf6be6](https://github.com/fremtind/jokul/commit/fcf6be63a7e0f66f45adf0ca5c9a937cb59f47d2))
-   changed render of icon and changed name of icon-prop and you can use both props at the same ti ([e7af26f](https://github.com/fremtind/jokul/commit/e7af26f52d21b6984773fa66704e568f51269058))

### BREAKING CHANGES

-   Prop name arrow is now iconLeft and/or iconRight
-   It's now possible to use all icons and not just left and right arrow. Therefore the arrow prop is
    now re-named to icon

# 11.0.0 (2023-07-07)

### chore

-   oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### Code Refactoring

-   migrer vekk fra deprecated tilde-importer i Sass ([7ef2cf7](https://github.com/fremtind/jokul/commit/7ef2cf7a510122c69b2c5658c402f3dd9f5322f7)), closes [#3418](https://github.com/fremtind/jokul/issues/3418)

### BREAKING CHANGES

-   Avhenger av ny majorversjon av core
-   Tilde-prefikset er fjernet i all Sass-kode. Avhengig av oppsettet ditt kan det hende du
    ikke trenger gjøre noe. Om bygget ditt brekker, konfigurer Sass sin loadPaths så den
    inkluderer node_modules.

## 10.0.8 (2023-06-07)

### Bug Fixes

-   sync med figma etter review ([3685f51](https://github.com/fremtind/jokul/commit/3685f51711ca74f9193a458859f3acfc33157c57)), closes [#3556](https://github.com/fremtind/jokul/issues/3556)

## 10.0.7 (2023-06-07)

### Bug Fixes

-   senk inline padding for tertiærknappen ([fd2171c](https://github.com/fremtind/jokul/commit/fd2171ca6346058c03f2bb69a335dd467950f3df)), closes [#3556](https://github.com/fremtind/jokul/issues/3556)

## 10.0.3 (2023-03-21)

### Bug Fixes

-   sett charset i CSS-filene som genereres ([7346cb8](https://github.com/fremtind/jokul/commit/7346cb8644dd4b99bf0ae4d11c78a967b7b01618)), closes [#3467](https://github.com/fremtind/jokul/issues/3467)

# 10.0.0 (2023-01-30)

### Bug Fixes

-   juster plassering av ikon etter nye SVGer ([15f126f](https://github.com/fremtind/jokul/commit/15f126f31e78f8378ac4e7961392d6bf537284f6))

### Features

-   bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))

### BREAKING CHANGES

-   Avhenger av en versjon av jkl-core med breaking changes

## 9.0.8 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

# 9.0.0 (2022-09-08)

### Bug Fixes

-   button slider-høyde på mobil ([837f2c9](https://github.com/fremtind/jokul/commit/837f2c9d368a91749a35e1b3603c48f8eff21f77))
-   fontjuteringer på Button ([bf23781](https://github.com/fremtind/jokul/commit/bf23781aa798d374e26ce1ba52d946e465edf121))
-   juster knappehøyden i kompakt modus ([1fe35c0](https://github.com/fremtind/jokul/commit/1fe35c041a9279009c54917f3ed420825e2270bb))
-   knappehøyde på mobil ([0296526](https://github.com/fremtind/jokul/commit/029652610aae0558749a1a12713bfde4052ba62b))
-   legg til manglende box-shadow transition på secondary ([b453939](https://github.com/fremtind/jokul/commit/b45393934b21c35b0f1552d1430b867c04480a6c))
-   spesifisitet for linjehøyde på mobil ([e5fcd48](https://github.com/fremtind/jokul/commit/e5fcd484379afca4c6bbcbe10fcad1b6cf8109b1))
-   typografiregresjon i knapper på desktop ([afd481e](https://github.com/fremtind/jokul/commit/afd481ee6a9baf394bde6fa41c041bf0a459b19a))

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))
-   nytt design for kompakte knapper ([86cfcf8](https://github.com/fremtind/jokul/commit/86cfcf8f0ddca7269d5550b450da71593e160fd6))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"

# [8.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-button@7.0.13...@fremtind/jkl-button@8.0.0) (2022-06-07)

### Code Refactoring

-   oppdater til nyeste core ([1db381f](https://github.com/fremtind/jokul/commit/1db381fdc0d3f1c35818d2feec49977331cd2fad))
-   prefiks CSS-variabler med jkl ([500ee0e](https://github.com/fremtind/jokul/commit/500ee0e1050de94d8cda07fb423c33837fbf2faa))
-   skriv og følg stilguiden for Sass i Jøkul ([1cc52a4](https://github.com/fremtind/jokul/commit/1cc52a4dea6af592ed48c45b38bc4fee07a749ae))

### Features

-   legg til en index-fil for Sass ([c4f8d0c](https://github.com/fremtind/jokul/commit/c4f8d0cd31bcab0706a49be1bdf0214fbbbbf646))

### BREAKING CHANGES

-   Alle CSS-variabler har jkl-prefix
-   Sass-variabler, mixins og CSS-animasjoner fra pakker annet enn core er gjort private
-   Avhenger av ny majorversjon av core

## [7.0.10](https://github.com/fremtind/jokul/compare/@fremtind/jkl-button@7.0.9...@fremtind/jkl-button@7.0.10) (2022-04-19)

### Bug Fixes

-   bruk revert i stedet for unset ([300e808](https://github.com/fremtind/jokul/commit/300e8086b4a88e37407dadaf747d714d69919cdd))
-   button når forced-colors er på ([205f594](https://github.com/fremtind/jokul/commit/205f594001fa247cf8352ac396f9edb275218daa))
-   unset border og outline i forced-colors ([648c7cd](https://github.com/fremtind/jokul/commit/648c7cdd30805dc6e6dc74b3e12d7b20b2ff5cec))

# 7.0.0 (2022-02-07)

### Bug Fixes

-   fjern inverted-prop ([de5f8b8](https://github.com/fremtind/jokul/commit/de5f8b83ae8f025826f4c56d3aeb5e081dea66cc)), closes [#2646](https://github.com/fremtind/jokul/issues/2646)
-   manuell delinting sans descending specificity ([20de1c8](https://github.com/fremtind/jokul/commit/20de1c8811596b054867352177225fd197c70797))

### BREAKING CHANGES

-   Fjernet `inverted`-prop. Bruk `data-theme="dark"` om du trenger overstyre temaet.

## 6.0.4 (2021-12-08)

### Bug Fixes

-   make all button elements respect width constraint ([a1b9715](https://github.com/fremtind/jokul/commit/a1b97157e23ecda666ec7b9fdd92c0c899517f61))

## 6.0.0 (2021-10-21)

### Features

-   use new spacing scale ([5694495](https://github.com/fremtind/jokul/commit/5694495f56d3c1f0e675433b35cfb0e693b93a82)), closes [#2382](https://github.com/fremtind/jokul/issues/2382)

### BREAKING CHANGES

-   new spacing scale: see migration guide for jkl-core

## 5.0.2 (2021-10-07)

### Bug Fixes

-   fjern clip-path på knapper for å vise touch-effekt riktig ([33ab605](https://github.com/fremtind/jokul/commit/33ab605f6b1ba70bddb939d07cbe16c1602d596f)), closes [#2356](https://github.com/fremtind/jokul/issues/2356)

## 5.0.0 (2021-10-06)

### Features

-   redesign knappeloader så den beholder layout ([9732d00](https://github.com/fremtind/jokul/commit/9732d007e92bb50ccb75a44d5a6fe74a641941f1)), closes [#2122](https://github.com/fremtind/jokul/issues/2122)

### Reverts

-   Revert "feat: redesign knappeloader så den beholder layout" ([54011df](https://github.com/fremtind/jokul/commit/54011dfb1ca5bba65e45b95dfe0fec4fb9eb340d))

### BREAKING CHANGES

-   APIet til Button endrer seg ikke, men det er en del breaking changes i CSS om du bygger HTML selv.
    Se React-komponent for veiledning. Loader-komponenten mister inline-prop. Erstattes av
    variant="medium".

## 4.1.0 (2021-10-06)

### Bug Fixes

-   legg til manglende CSS reset for a.jkl-button ([21972e1](https://github.com/fremtind/jokul/commit/21972e14b5320fc26addb975739734dfacb94736)), closes [#2272](https://github.com/fremtind/jokul/issues/2272)

### Features

-   redesign knappeloader så den beholder layout ([344d8d3](https://github.com/fremtind/jokul/commit/344d8d3d1710125ac44211fa7788045e2ec7a36c)), closes [#2122](https://github.com/fremtind/jokul/issues/2122)

## 4.0.4 (2021-09-09)

### Bug Fixes

-   retter strekfarge for invertert jkl-button--tertiary ([8a6a43e](https://github.com/fremtind/jokul/commit/8a6a43e7aafb1cf1878333e908f8cc96a6afd177)), closes [#1593](https://github.com/fremtind/jokul/issues/1593)

## 4.0.0 (2021-07-09)

### Features

-   use new typographic scale ([bf3da67](https://github.com/fremtind/jokul/commit/bf3da67d7ee14e36db26a03f1b0aac06780e828b))

### BREAKING CHANGES

-   Depends on jkl-core version with breaking changes

## 3.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### Features

-   **button:** add automatic dark mode ([d31c3bf](https://github.com/fremtind/jokul/commit/d31c3bf43fdf2bcf6b3f41ef3af0d3b18c81f876))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 2.0.0 (2021-06-07)

### Features

-   new colors ([9144947](https://github.com/fremtind/jokul/commit/9144947766c73fbe5eaac3372495006e3b89dec7))

### BREAKING CHANGES

-   all color variables are changed

## 1.8.5 (2021-01-21)

### Bug Fixes

-   **@fremtind/jkl-button:** fixes clipped focus-bug in button ([ad6d1aa](https://github.com/fremtind/jokul/commit/ad6d1aa685de2cb8f6081fef20df1aad12d9579b)), closes [#1704](https://github.com/fremtind/jokul/issues/1704)

## 1.8.1 (2020-11-26)

### Bug Fixes

-   **button:** set classname on wrapper for with loader ([977e1b2](https://github.com/fremtind/jokul/commit/977e1b250a1ce87829625fb061be122e42be250a))

## 1.8.0 (2020-11-25)

### Features

-   **button:** add loading state to button ([e142122](https://github.com/fremtind/jokul/commit/e142122ccdad719e82f1b1a5263d55b52c5c435b)), closes [#1492](https://github.com/fremtind/jokul/issues/1492)

## 1.7.0 (2020-10-23)

### Features

-   **button:** add touch-specific animations ([b2a258d](https://github.com/fremtind/jokul/commit/b2a258d2805d12a49016e57e26883deaa044ad5b)), closes [#711](https://github.com/fremtind/jokul/issues/711)

## 1.6.0 (2020-09-01)

### Features

-   implement global dark mode ([47b8e2d](https://github.com/fremtind/jokul/commit/47b8e2dc0abcd366212fc67f306f8523a63d11c8))

## 1.5.0 (2020-06-17)

### Features

-   **button:** this will add blue color on hover for all button variants ([d61f5f5](https://github.com/fremtind/jokul/commit/d61f5f5d20e111157aac7b6c78687541b9cf9279)), closes [#936](https://github.com/fremtind/jokul/issues/936)
-   **button:** this will use core motion mixin to define transitioning ([86d2d0a](https://github.com/fremtind/jokul/commit/86d2d0a40ade88f91d6034f3ff6f5a8f3d98761c)), closes [#936](https://github.com/fremtind/jokul/issues/936)

## 1.4.5 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)
-   **button:** correct height for normal size button ([73d0aa0](https://github.com/fremtind/jokul/commit/73d0aa07fca1fb7469303fd2a66b8a8a9abf338a))
-   **button:** use correct sizes for compact buttons ([c8f26bc](https://github.com/fremtind/jokul/commit/c8f26bcc937d4e9ace6b5fed3694b993709b8644))

## 1.4.4 (2020-03-16)

### Bug Fixes

-   **button:** unset min-width on compact tertiary button ([99e3b3c](https://github.com/fremtind/jokul/commit/99e3b3cc9e923066aad0177eda1d3a914a2a2bcb)), closes [#802](https://github.com/fremtind/jokul/issues/802)

## 1.4.0 (2020-02-19)

### Features

-   export scss files with style pkgs ([edb6278](https://github.com/fremtind/jokul/commit/edb627838075d3d613ae78b6aae765c81067ba6a))

## 1.3.0 (2020-02-18)

### Bug Fixes

-   make use of new color token (changed name) ([f14c149](https://github.com/fremtind/jokul/commit/f14c149f779e65fe0775afde4421aef26be8ed1d))
-   use new text-style mixins ([2873a57](https://github.com/fremtind/jokul/commit/2873a57f4570ddb87a7390a773433d26a9fde4ac))

### Features

-   **button:** add inverted color mode for buttons ([4e9c2d5](https://github.com/fremtind/jokul/commit/4e9c2d5a4a6aed610eb87f354fa65415be34a323))
-   **button:** make button text bold ([70a1736](https://github.com/fremtind/jokul/commit/70a17367ec3f42aba65e0a4779ff8edf8e054da2))

## 1.2.0 (2020-01-16)

### Bug Fixes

-   **button:** remove min-width for TertiaryButton ([8280409](https://github.com/fremtind/jokul/commit/828040969097aa21c2b5e570a6b8515a21ee5bb7))
-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

### Features

-   **button:** set minimum width for buttons ([fe9257d](https://github.com/fremtind/jokul/commit/fe9257d587db97d8f5e8622b756411f1d93b329f))

## 1.1.0 (2019-12-17)

### Features

-   **components:** css endringer, flytting av funksjon ([7390edd](https://github.com/fremtind/jokul/commit/7390eddfadd941a0465267afba35a81ca446f438)), closes [#545](https://github.com/fremtind/jokul/issues/545)
-   **components on black background:** rewritten css ([04fb8c6](https://github.com/fremtind/jokul/commit/04fb8c62aecfb2aa2141687d561d36cf5893dd04)), closes [#544](https://github.com/fremtind/jokul/issues/544)

## 1.0.1 (2019-12-10)

### Bug Fixes

-   **button:** use correct shade of white on the buttons ([3755a17](https://github.com/fremtind/jokul/commit/3755a1728051b29cab03af9b94163d4d1fb1bcf5))

## 1.0.0 (2019-12-03)

### Features

-   **button:** implement forceCompact on buttons ([faf1257](https://github.com/fremtind/jokul/commit/faf1257b731d1d48bccea7d2caf76f929b9689c6))
-   add compact mode mixin ([ca9fa96](https://github.com/fremtind/jokul/commit/ca9fa96b7de2be50646af0cb444206c3eebcfc4a))
-   add support for global compact mode ([cc11026](https://github.com/fremtind/jokul/commit/cc11026207dfef2a0b3b074b88e071783d2820fd)), closes [#494](https://github.com/fremtind/jokul/issues/494)

## 0.8.0 (2019-10-09)

### Bug Fixes

-   **core:** add and use wcag-compliant error/focus colors ([c714b45](https://github.com/fremtind/jokul/commit/c714b45))

### Features

-   **button:** change cursor from default to pointer ([6438b75](https://github.com/fremtind/jokul/commit/6438b75))

## 0.7.0 (2019-08-02)

### Features

-   **firefox:** remove dotted line for good ([67187a6](https://github.com/fremtind/jokul/commit/67187a6))

## 0.6.2 (2019-07-30)

### Bug Fixes

-   **button:** add larger desktop buttons ([040030d](https://github.com/fremtind/jokul/commit/040030d)), closes [#117](https://github.com/fremtind/jokul/issues/117)
-   **button:** remove dottet line for firefox ([b23b36c](https://github.com/fremtind/jokul/commit/b23b36c))
-   **button:** simplify button scss ([69e6d5b](https://github.com/fremtind/jokul/commit/69e6d5b))

## 0.6.0 (2019-07-18)

### Bug Fixes

-   **build:** add watch job to pkg json ([a0039e0](https://github.com/fremtind/jokul/commit/a0039e0))

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

-   **all:** remove css main files ([c9a4ca0](https://github.com/fremtind/jokul/commit/c9a4ca0))
-   **all:** various build and import errors ([8d9a507](https://github.com/fremtind/jokul/commit/8d9a507))
-   **button:** add example README.md ([d9d2f21](https://github.com/fremtind/jokul/commit/d9d2f21))
-   **button:** change hover and active states and remove box shadow ([0216cda](https://github.com/fremtind/jokul/commit/0216cda))
-   **button:** clean up unnecessary code after redesigning button ([41d0e0c](https://github.com/fremtind/jokul/commit/41d0e0c))
-   **button:** correct focus ring ([8fb5415](https://github.com/fremtind/jokul/commit/8fb5415))
-   **button:** fix button-react structure ([c3c249a](https://github.com/fremtind/jokul/commit/c3c249a))
-   **button:** fix inconsistencies in button styles ([9ca5cc7](https://github.com/fremtind/jokul/commit/9ca5cc7))
-   **button:** fix scss import in example ([b506ba9](https://github.com/fremtind/jokul/commit/b506ba9))
-   **button:** remove button.css from commit ([c147286](https://github.com/fremtind/jokul/commit/c147286))
-   **button:** remove React from example ([3d7aecb](https://github.com/fremtind/jokul/commit/3d7aecb))
-   **button:** tweak line-height ([0b2cff1](https://github.com/fremtind/jokul/commit/0b2cff1))
-   **core:** add focus ring to button and remove max width ([6171efe](https://github.com/fremtind/jokul/commit/6171efe))
-   update focus styles to only show on keyboard nav ([b7555a8](https://github.com/fremtind/jokul/commit/b7555a8))
-   **core:** don't import all of core into button ([687f0ab](https://github.com/fremtind/jokul/commit/687f0ab))
-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))

### Code Refactoring

-   flatten structure in all style packages ([dd875e5](https://github.com/fremtind/jokul/commit/dd875e5)), closes [#7](https://github.com/fremtind/jokul/issues/7)

### Features

-   **portal:** make markdown parser use our components ([61baa27](https://github.com/fremtind/jokul/commit/61baa27))

### Performance Improvements

-   **build:** use gulp for all style packages ([5699683](https://github.com/fremtind/jokul/commit/5699683))

### BREAKING CHANGES

-   moves entry point in style packages. any style imports must be updated accordingly
