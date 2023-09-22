# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [11.1.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-message-box-react@11.0.5...@fremtind/jkl-message-box-react@11.1.0) (2023-09-21)

### Features

- deleted snapshots ([545e346](https://github.com/fremtind/jokul/commit/545e3460f3834ff07c2161ee0b6a6dc11286c6dd))
- oppdaterte globale variabler for light/dark mode med funksjonsfarger ([4666eca](https://github.com/fremtind/jokul/commit/4666ecae207c17adc3b174528b9b9f3e917df42e))

## 11.0.4 (2023-09-14)

### Bug Fixes

-   try removing accordion snapshots to see diff ([9a6cd15](https://github.com/fremtind/jokul/commit/9a6cd15065eb2809b3210bb61fda54deabb012cb))

# 11.0.0 (2023-07-07)

### chore

-   oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### BREAKING CHANGES

-   Avhenger av ny majorversjon av core

## [10.0.5](https://github.com/fremtind/jokul/compare/@fremtind/jkl-message-box-react@10.0.4...@fremtind/jkl-message-box-react@10.0.5) (2023-03-07)

### Bug Fixes

-   ikke rendre tittelelementet om title er tom string ([8c9db6f](https://github.com/fremtind/jokul/commit/8c9db6f44d11e8c33999adf6a3d8dd72e32063bc)), closes [#3445](https://github.com/fremtind/jokul/issues/3445)
-   rett en animasjonsfeil i formerrormessagebox ([af3b21e](https://github.com/fremtind/jokul/commit/af3b21e5ce20d87d5d3c3e750a0d6e6d3c14bab0))

# [10.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-message-box-react@9.0.11...@fremtind/jkl-message-box-react@10.0.0) (2023-01-30)

### Bug Fixes

-   bruk riktig versjon av jkl-icon-react i MessageBox ([0d32576](https://github.com/fremtind/jokul/commit/0d32576b0a450e03f945a473f7d136cd98c166ef))

### Features

-   bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))
-   ta i bruk de nye ikonene i MessageBox ([ea6f952](https://github.com/fremtind/jokul/commit/ea6f95206ca475a7fcaef0403681543e915cbde2))

### BREAKING CHANGES

-   Avhenger av en versjon av jkl-core med breaking changes
-   Du må nå importere stilpakken til jkl-icons for å vise komponenten riktig

## 9.0.8 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

## 9.0.5 (2022-11-11)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## 9.0.4 (2022-11-09)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

# 9.0.0 (2022-10-07)

### Bug Fixes

-   fjern default role fra meldingsboks ([416d242](https://github.com/fremtind/jokul/commit/416d242c999483dfa3f85d94d9ac6e68440eb05f))

### BREAKING CHANGES

-   role blir ikke lenger satt automatisk. Om du trenger at innholdet annonseres som en status eller
    alert må du selv sette role.

# 8.0.0 (2022-09-08)

### Bug Fixes

-   bruk IDen som ble generert for aria-controls ([c80eff7](https://github.com/fremtind/jokul/commit/c80eff7218688344583fef0ae98d0f8c4b148701))
-   dom-validering og hydreringsbug i MessageBox ([3310266](https://github.com/fremtind/jokul/commit/3310266626092e0a30e0fd06d0840e94c5f0c60f))
-   redesignet kompakt modus for MessageBox ([e5dc5bd](https://github.com/fremtind/jokul/commit/e5dc5bdd119ae4a8f562b7e0bbf284335e4df9fe))

### chore

-   fjern forceCompact-props ([0f8bfeb](https://github.com/fremtind/jokul/commit/0f8bfebc68fe6ebf6368bf8a37e2af78f4d7b46d))

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"
-   forceCompact er fjernet. Bruk compact og regresjonstest steder du bruker kompaktvarianter.

## [7.0.4](https://github.com/fremtind/jokul/compare/@fremtind/jkl-message-box-react@7.0.3...@fremtind/jkl-message-box-react@7.0.4) (2022-06-13)

### Bug Fixes

-   merk CSS og SCSS som side-effects ([dac2e2b](https://github.com/fremtind/jokul/commit/dac2e2b5f4d1b31485821bf6ad8ec4c7c2769cca))

### Performance Improvements

-   bruk tiny-glob for globbing av filer under bygg ([246952a](https://github.com/fremtind/jokul/commit/246952ae75afe20bcf0d007a0a068b76b114f9a6))

## 7.0.1 (2022-06-07)

### Bug Fixes

-   animer FormErrorMessageBox med useAnimatedHeight ([3ed164f](https://github.com/fremtind/jokul/commit/3ed164fccc1c8c9339a91cb766d288e1d81b8902))

# [7.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-message-box-react@6.3.14...@fremtind/jkl-message-box-react@7.0.0) (2022-06-07)

### chore

-   fiks lintfeil ([4093d2a](https://github.com/fremtind/jokul/commit/4093d2a2ae7bbe0d30de882b9f5d144e8e77cede))

### BREAKING CHANGES

-   Pakken avhenger av en breaking versjon av core

# 6.3.0 (2022-02-22)

### Features

-   legg til forceCompact ([81dfe9b](https://github.com/fremtind/jokul/commit/81dfe9be2fa9dc5f0d8eb341c4d74959a3874f33)), closes [#1480](https://github.com/fremtind/jokul/issues/1480)

## 6.2.6 (2022-02-02)

### Bug Fixes

-   bruk currentColor som fill i warningikon ([d6d5801](https://github.com/fremtind/jokul/commit/d6d5801d574256923843c93aadc14a86ecf5f995))
-   gjør oppsummering av skjemafeil mindre chatty ([9b52db4](https://github.com/fremtind/jokul/commit/9b52db4e6609b11b323607b588fe6adccd10f54a))
-   oppdater ikon for WarningMessageBox ([20fdcb1](https://github.com/fremtind/jokul/commit/20fdcb17d49be3fe6d533470e62dd402e79404b8))

## 6.2.0 (2021-12-22)

### Features

-   etabler en ny komponent for oppsummering av skjemafeil ([2a1bd43](https://github.com/fremtind/jokul/commit/2a1bd43411cf9528afb3aabcb5813de56229b5dc))

## 6.1.0 (2021-11-23)

### Features

-   eksporter MessageBoxProps ([3ecff42](https://github.com/fremtind/jokul/commit/3ecff429fbfae98e30a40255dba92700e6022ac7))

## 6.0.0 (2021-10-28)

### Bug Fixes

-   renamed Message to MessageBox, fix dark mode, removed inverted option ([ffeee2a](https://github.com/fremtind/jokul/commit/ffeee2afd00b84ef3c6db61f0fe8acfb7264bae5))

### Code Refactoring

-   renamed *Message to *MessageBox a few more places ([b5bd136](https://github.com/fremtind/jokul/commit/b5bd136be645195306728dd10d0058910b936259))

### BREAKING CHANGES

-   Depends on package with breaking change
-   Renamed *Message to *MessageBox and removed inverted option

## 5.0.1 (2021-10-25)

### Bug Fixes

-   enabled other components as children to messagebox ([#2407](https://github.com/fremtind/jokul/issues/2407)) ([f531c68](https://github.com/fremtind/jokul/commit/f531c68e88eb01cceecfb6a0133efc4efd66df99))

## 5.0.0 (2021-10-21)

### chore

-   updates dependencies ([b975200](https://github.com/fremtind/jokul/commit/b97520045c02e4bcb44ebde159c60a7dff7f01d6))

### BREAKING CHANGES

-   depends on jkl-core v8 with breaking changes

## 4.2.3 (2021-10-20)

### Bug Fixes

-   always light mode inside MessageBox and AlertMessage ([547311f](https://github.com/fremtind/jokul/commit/547311f7e36aa0aef937dc62007225d9ad23b73c))

## 4.2.0 (2021-10-13)

### Features

-   implement new message box design ([26c9933](https://github.com/fremtind/jokul/commit/26c99332aee727dafed7b8bca522a242141e774e))

## 4.1.0 (2021-09-13)

### Features

-   prop for å styre role på MessageBox ([87646ae](https://github.com/fremtind/jokul/commit/87646ae6437cb368aa6567e637d59ab2ab923b71)), closes [#1687](https://github.com/fremtind/jokul/issues/1687)

## 4.0.0 (2021-07-09)

### Features

-   use new typographic scale ([da664c4](https://github.com/fremtind/jokul/commit/da664c4898ba2a580159f7cb808f030c61740989))

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

## 1.8.0 (2021-04-28)

### Features

-   **message-box:** make MessageBox dismissable ([f6eb66f](https://github.com/fremtind/jokul/commit/f6eb66f6bf7ee04375d95cd3a48e63677924ea71))

## 1.7.7 (2021-03-25)

### Bug Fixes

-   <div> cannot appear as a descendant of <p> ([044c257](https://github.com/fremtind/jokul/commit/044c2579b1ce16cb3812b32b24fd18ee835be7ee))

## 1.7.6 (2021-02-12)

### Bug Fixes

-   add react 17 types as valid peerdep ([a074c34](https://github.com/fremtind/jokul/commit/a074c34dcece089ad6b4c581b8c920c8bdd4f1e0))

## 1.7.0 (2020-11-25)

### Features

-   update to react 17 ([4639058](https://github.com/fremtind/jokul/commit/4639058067eaa9be222825f8ac4f495a1e74cc0f))

## 1.6.0 (2020-07-29)

### Features

-   **build:** use @babel/runtime instead of inlining helpers in each file ([bbadce5](https://github.com/fremtind/jokul/commit/bbadce52ba4da5d540b479b07273332587bed436)), closes [#1136](https://github.com/fremtind/jokul/issues/1136)

## 1.5.0 (2020-05-15)

### Bug Fixes

-   **portal:** add back tilgjenglighet section ([8906d5b](https://github.com/fremtind/jokul/commit/8906d5bfaaaf2835f371ca0d6bc7d19d1b02f292))

### Features

-   **alert-message:** rename and split messages package ([11373ac](https://github.com/fremtind/jokul/commit/11373ac88cbfc5ed2604846c742e8a05f8c0561d))
-   **message-box:** make title optional in message-box ([540b463](https://github.com/fremtind/jokul/commit/540b463f0c94a6267a27c8723762559e54a12943))
-   **message-box:** refactor icon styling in message-box ([36c81b5](https://github.com/fremtind/jokul/commit/36c81b5935095984ec79a6059693909411d076b5))
-   **messages:** add messages package ([6193027](https://github.com/fremtind/jokul/commit/619302746062ecc789252fea6201c359fe88995f))

## 1.4.0 (2020-04-27)

### Features

-   **minor ui changes:** more redable icon and more compact heading text ([181f21d](https://github.com/fremtind/jokul/commit/181f21d1ddc1e81ad381aa9f428bf6c08f165696)), closes [#904](https://github.com/fremtind/jokul/issues/904)

## 1.3.0 (2020-04-20)

### Features

-   new layout, with icons and darkmode ([2253fe8](https://github.com/fremtind/jokul/commit/2253fe873975028d74c615661a9edd4d8e0bd47b))

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
-   update to new typography-react paragraph naming ([412a7a2](https://github.com/fremtind/jokul/commit/412a7a2db96f77e962b5b1ffbee66a3f58e73e46))

## 1.0.0 (2019-12-03)

### Features

-   **message-box-react:** make structure more semantic ([cca5a31](https://github.com/fremtind/jokul/commit/cca5a319dd0b439218d4180368caabc61d6abe2e))

## 0.7.1 (2019-08-30)

### Bug Fixes

-   **build:** remove visual regression tests ([a4502ea](https://github.com/fremtind/jokul/commit/a4502ea))
-   **message-box:** fix component spacing and clean up css ([db54d92](https://github.com/fremtind/jokul/commit/db54d92))

## 0.7.0 (2019-08-02)

### Features

-   **test:** add visual regression testing ([1553b28](https://github.com/fremtind/jokul/commit/1553b28))

## 0.6.0 (2019-07-30)

### Features

-   **messagebox:** add warning msgbox, add wc info in portal ([56da82f](https://github.com/fremtind/jokul/commit/56da82f))
-   **portal:** add components, refactor portal ([7e7d038](https://github.com/fremtind/jokul/commit/7e7d038))

## 0.5.1 (2019-07-18)

### Bug Fixes

-   **build:** normalize react package.json ([6c29e08](https://github.com/fremtind/jokul/commit/6c29e08)), closes [#156](https://github.com/fremtind/jokul/issues/156)

## 0.2.1 (2019-07-15)

### Bug Fixes

-   **core:** update message-box to use new core structure ([f95ea95](https://github.com/fremtind/jokul/commit/f95ea95))

## 0.2.0 (2019-07-15)

### Bug Fixes

-   **publish:** update access on logo and accodion ([3b557fb](https://github.com/fremtind/jokul/commit/3b557fb))

### Features

-   **build:** add browserlist pkg and browserlist to evry pkg ([3dcc9ca](https://github.com/fremtind/jokul/commit/3dcc9ca))

## 0.1.0 (2019-07-15)

### Bug Fixes

-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))

### Features

-   **messagebox:** add error,info and success message ([68f05a9](https://github.com/fremtind/jokul/commit/68f05a9))
