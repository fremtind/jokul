# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 12.0.19 (2022-11-11)

### Reverts

- Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## 12.0.18 (2022-11-09)

### Reverts

- Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

# 12.0.0 (2022-09-08)

### Bug Fixes

-   fjern kompakt kalenderpopup ([64b528c](https://github.com/fremtind/jokul/commit/64b528ce92cac4d5b59401ce0e20cc8f65d4bffd))
-   videresend density til utvidet velger ([a6dcc8f](https://github.com/fremtind/jokul/commit/a6dcc8f5a40b74acdd7e7602aab5a81dd03b2080))

### chore

-   fjern forceCompact-props ([0f8bfeb](https://github.com/fremtind/jokul/commit/0f8bfebc68fe6ebf6368bf8a37e2af78f4d7b46d))

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"
-   forceCompact er fjernet. Bruk compact og regresjonstest steder du bruker kompaktvarianter.

## [11.0.25](https://github.com/fremtind/jokul/compare/@fremtind/jkl-datepicker-react@11.0.24...@fremtind/jkl-datepicker-react@11.0.25) (2022-08-19)

### Bug Fixes

-   fix isBlurTargetOutside for safari ([0653826](https://github.com/fremtind/jokul/commit/06538265b1963d2bb919547bb1c9bfc435f0d1b9))

## [11.0.20](https://github.com/fremtind/jokul/compare/@fremtind/jkl-datepicker-react@11.0.19...@fremtind/jkl-datepicker-react@11.0.20) (2022-08-15)

### Bug Fixes

-   use input wrapper div as onBlur root ([5fee636](https://github.com/fremtind/jokul/commit/5fee636a9c170d4df64d6f5cab0950b19bc34bd6)), closes [#3010](https://github.com/fremtind/jokul/issues/3010)

## 11.0.17 (2022-08-10)

### Bug Fixes

-   legg til date-fns som en dependency i datepicker-react ([2199aed](https://github.com/fremtind/jokul/commit/2199aedc3a703b75bc9ce6375d4265a2880970b0)), closes [#2988](https://github.com/fremtind/jokul/issues/2988)

## [11.0.16](https://github.com/fremtind/jokul/compare/@fremtind/jkl-datepicker-react@11.0.15...@fremtind/jkl-datepicker-react@11.0.16) (2022-08-05)

### Bug Fixes

-   compare nodes instead of classList while checking the blur target ([760008d](https://github.com/fremtind/jokul/commit/760008d9fa237d069389f971f905eaa4ad4e76bd)), closes [#2997](https://github.com/fremtind/jokul/issues/2997)

## [11.0.6](https://github.com/fremtind/jokul/compare/@fremtind/jkl-datepicker-react@11.0.5...@fremtind/jkl-datepicker-react@11.0.6) (2022-06-13)

### Bug Fixes

-   merk CSS og SCSS som side-effects ([dac2e2b](https://github.com/fremtind/jokul/commit/dac2e2b5f4d1b31485821bf6ad8ec4c7c2769cca))

### Performance Improvements

-   bruk tiny-glob for globbing av filer under bygg ([246952a](https://github.com/fremtind/jokul/commit/246952ae75afe20bcf0d007a0a068b76b114f9a6))

## 11.0.1 (2022-06-07)

### Bug Fixes

-   rett opp avhengighet av icon-button ([d179921](https://github.com/fremtind/jokul/commit/d1799213a7859e3e72d4aecc69a74f7c6b399d54))

# [11.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-datepicker-react@10.0.1...@fremtind/jkl-datepicker-react@11.0.0) (2022-06-07)

### Bug Fixes

-   demp eller fiks warnings ([ebe5873](https://github.com/fremtind/jokul/commit/ebe587339018a7375b9ee5eb942c59dc1b4866be))

### chore

-   fiks lintfeil ([4093d2a](https://github.com/fremtind/jokul/commit/4093d2a2ae7bbe0d30de882b9f5d144e8e77cede))

### BREAKING CHANGES

-   Pakken avhenger av en breaking versjon av core

## [10.0.1](https://github.com/fremtind/jokul/compare/@fremtind/jkl-datepicker-react@10.0.0...@fremtind/jkl-datepicker-react@10.0.1) (2022-06-03)

### Bug Fixes

-   bruk rett klassenavn på månedsvelgeren ([54add81](https://github.com/fremtind/jokul/commit/54add81eb5d278303852928c22866a22b9149596))
-   kjenn igjen månedsknapper som del av DatePiker ([46d0b30](https://github.com/fremtind/jokul/commit/46d0b30b64373689d9cb405201010e81b5f511b0))
-   kjenn igjen skjemafelter i extended som del av DatePicker ([2e3de7e](https://github.com/fremtind/jokul/commit/2e3de7ede73629b07f316cfb7d7a0b73664a2f43))
-   stopp onBlur i Safari ved klikk i input så kalender ([c8975de](https://github.com/fremtind/jokul/commit/c8975de4b177d055242bd985db9028ef077aecfb))

# [10.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-datepicker-react@9.1.5...@fremtind/jkl-datepicker-react@10.0.0) (2022-06-02)

### Bug Fixes

-   animasjonsbug hvis man traff label-elementet, som er bredt ([1f58576](https://github.com/fremtind/jokul/commit/1f58576507562441eef910b4731650a3fa1e1d93))
-   break all the things ([6b4e03c](https://github.com/fremtind/jokul/commit/6b4e03c5cd1b681951587fb5e8cf5d7f3b1ffa28))
-   bruk riktig type på inputfelt for å få pil opp og ned ([f34d185](https://github.com/fremtind/jokul/commit/f34d18503b5974f00e3ae1048f8c9bbe6e9b67cd))
-   dobbel åpneanimasjon ([7236363](https://github.com/fremtind/jokul/commit/72363634033422b176026a1b4a0fd698f76a56be))
-   escape for å lukke kalender utenfra ([1a9e759](https://github.com/fremtind/jokul/commit/1a9e7598333e721262381a080c87259d4222f344))
-   extended ([060203e](https://github.com/fremtind/jokul/commit/060203e2ddf1d2e7ad294df144233f33b96ee75b))
-   flush DOM før vi leter etter neste fokus ([93404e8](https://github.com/fremtind/jokul/commit/93404e81391d678200d98092e65a4895ef0d9e6a))
-   flytt fokus tilbake til iconbutton ved tab, docs ([ff605b5](https://github.com/fremtind/jokul/commit/ff605b5db03e2ced89d477f1997f927097e2bc36))
-   fokus ved åpning av kalender igjen, etter ny måned ([7a705a9](https://github.com/fremtind/jokul/commit/7a705a938bcf2b0d428f3ba66b2dabe2b284d55b))
-   gjør equalitysjekk på tidspunkt, ikke objektref ([11b9f86](https://github.com/fremtind/jokul/commit/11b9f86eeaff9c878ad6257880acbacbbe6b6541))
-   ikke flytt fokus out of bounds ([63d04b6](https://github.com/fremtind/jokul/commit/63d04b68ce4eab6faf1f5389516be03725bdef13))
-   its got the looks ([8a037d1](https://github.com/fremtind/jokul/commit/8a037d14d232bdb7ca339fa7e7a322033331851a))
-   keebs ([aa26639](https://github.com/fremtind/jokul/commit/aa266397a648bb4e4c67e6c215f0107b3b2092a0))
-   keebs internt i en måned ([4247a5a](https://github.com/fremtind/jokul/commit/4247a5ab19cb56ea9d834032841b7b259907133a))
-   la folk velge dagen i dag hvis disablebefore er satt til i dag ([b0574c4](https://github.com/fremtind/jokul/commit/b0574c468b62258826628edaec31baa617d650da))
-   legg tilbake hidden pga animasjonsbug ([58ec5da](https://github.com/fremtind/jokul/commit/58ec5da444784a74d3d1bab7ac11faf8aa84b849))
-   lint ([fe80bec](https://github.com/fremtind/jokul/commit/fe80bece7b730859e399148d7c32cf26266165f2))
-   lintfeil ([d941dbb](https://github.com/fremtind/jokul/commit/d941dbb061180de3d18dfe31076c3805d782669d))
-   make build ([8aa3f50](https://github.com/fremtind/jokul/commit/8aa3f501fc6be6632d0d31e60c24c3b74e03054e))
-   onChange ved klikk på kalender ([5f5862c](https://github.com/fremtind/jokul/commit/5f5862cff61af967c9efef72d2efb926ae026f64))
-   sett automatisk minste eller største tillatte i extended ([95e653a](https://github.com/fremtind/jokul/commit/95e653acc6c8b2b713ba202dc991ca323b23f04c))
-   skjermleseropplevelse ([efe1358](https://github.com/fremtind/jokul/commit/efe13586e04144e7a965b27a1ec217645cf5cf28))
-   tastaturnavigasjon mellom måneder ([69aad9f](https://github.com/fremtind/jokul/commit/69aad9f3078fed6c3a8d702f085e2094031c9944))
-   valgbare datoer utenfor måned skal være klikkbare ([d3efab7](https://github.com/fremtind/jokul/commit/d3efab75343bf445c79a53bb0762c9923672b6ac))
-   wip hooks form example ([373c973](https://github.com/fremtind/jokul/commit/373c9734b94d1bbbd421f365acf59dd39c6a47cd))

### chore

-   datepicker har breaking changes ([b9cb939](https://github.com/fremtind/jokul/commit/b9cb93934964de02cb28c90dff5ec261097f3613))

### Features

-   åpne for å merke skjemafelter som ugyldige uten errorLabel ([3c722ec](https://github.com/fremtind/jokul/commit/3c722ec34321789c37fe45b30d6bf975576489ee))
-   eksponer parsingfunksjon ([28b08dd](https://github.com/fremtind/jokul/commit/28b08dd5e587bafbcce98455924be4d65260cac7))
-   eksponer valideringsfunksjoner ([2d591ab](https://github.com/fremtind/jokul/commit/2d591aba67c47d2ebe910d7dce12ef93fb374f7d))

### BREAKING CHANGES

-   Se MIGRATION.md i datepicker-react.

# 9.1.0 (2022-04-28)

### Features

-   eksponer labelProps i skjemakomponenter ([db27e30](https://github.com/fremtind/jokul/commit/db27e309a8a72913d8761b2967e940113c47b779))

## 9.0.18 (2022-04-08)

### Bug Fixes

-   bruk et format som er likt på server og klient ([cf5719b](https://github.com/fremtind/jokul/commit/cf5719bc3c142fcb524adf3ed1bc2b0213a7573e))
-   bruk useId fra React der vi kan for å fikse hydrering ([4845325](https://github.com/fremtind/jokul/commit/4845325b962224e012335fcfff568da3d9cab7ed))
-   fjern kodeeksempel som skapte problemer med hydrering ([5a1474f](https://github.com/fremtind/jokul/commit/5a1474fc466e1820a8b4875929802099330efe8b))
-   gjør DatePicker idempotent ([4e8ef6a](https://github.com/fremtind/jokul/commit/4e8ef6ad8edb284061fe990cd5272eab2226a02e))
-   skru av hover i simulerte klikk ([0fb4778](https://github.com/fremtind/jokul/commit/0fb47782c9a3d80ef9e776cc6332b0e65a24b921))
-   småtrøbbel med test og typesjekk ([b1b1bc3](https://github.com/fremtind/jokul/commit/b1b1bc3eeb0fade11f8c19d9c1d6170ad808ef6d))

## [9.0.13](https://github.com/fremtind/jokul/compare/@fremtind/jkl-datepicker-react@9.0.12...@fremtind/jkl-datepicker-react@9.0.13) (2022-03-09)

### Bug Fixes

-   annonser endring av kalenderåret i datovelger ([436f4f3](https://github.com/fremtind/jokul/commit/436f4f3d61346cae53851e8d1b0fd37e3b0feead)), closes [#2750](https://github.com/fremtind/jokul/issues/2750)

# [9.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-datepicker-react@8.0.27...@fremtind/jkl-datepicker-react@9.0.0) (2022-02-07)

### Bug Fixes

-   fjern inverted-prop ([de5f8b8](https://github.com/fremtind/jokul/commit/de5f8b83ae8f025826f4c56d3aeb5e081dea66cc)), closes [#2646](https://github.com/fremtind/jokul/issues/2646)

### BREAKING CHANGES

-   Fjernet `inverted`-prop. Bruk `data-theme="dark"` om du trenger overstyre temaet.

## 8.0.26 (2022-02-02)

### Bug Fixes

-   bruk skjemakategori til skjemakomp ([d17a3ce](https://github.com/fremtind/jokul/commit/d17a3cefc9c3b61cb3c551143461e1bb471d8c62))
-   slett utdaterte snapshots ([fcd47bb](https://github.com/fremtind/jokul/commit/fcd47bbaedaadd528130eb6d22b1608a8eb90aa4))

## 8.0.18 (2021-12-16)

### Bug Fixes

-   sett forceCompact på child components ([9d79ffe](https://github.com/fremtind/jokul/commit/9d79ffedb040928a66d7dd708408cec7d3760307)), closes [#2600](https://github.com/fremtind/jokul/issues/2600)

## 8.0.0 (2021-10-21)

### chore

-   updates dependencies ([b975200](https://github.com/fremtind/jokul/commit/b97520045c02e4bcb44ebde159c60a7dff7f01d6))

### BREAKING CHANGES

-   depends on jkl-core v8 with breaking changes

## 7.3.0 (2021-10-13)

### Features

-   **datepicker-react:** enable onKeyDown prop on DatePicker ([4c97543](https://github.com/fremtind/jokul/commit/4c9754362312b71d4b5082314b7e93277b6f0f6e)), closes [#2377](https://github.com/fremtind/jokul/issues/2377)

## 7.2.0 (2021-09-21)

### Bug Fixes

-   wrap handlinger i act, rydd i bruk av async ([2caf95e](https://github.com/fremtind/jokul/commit/2caf95e553ceaa32c54f2e5636e23051338a2424))

### Features

-   utvid onChange med metadata om valideringsfeil ([e402604](https://github.com/fremtind/jokul/commit/e402604ed1ab6bfb4396653270017163a2855f26)), closes [#2198](https://github.com/fremtind/jokul/issues/2198)

## 7.1.0 (2021-09-07)

### Features

-   add data-testautoid ([22ae35d](https://github.com/fremtind/jokul/commit/22ae35d7da2f3d66f45881e71201bd2ec1f9331d))

## 7.0.0 (2021-07-09)

### Features

-   use new typographic scale ([50b8815](https://github.com/fremtind/jokul/commit/50b8815a325be0a92302a9c033f320c53cfa941c))

### BREAKING CHANGES

-   Depends on jkl-core version with breaking changes

## 6.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 5.2.0 (2021-06-24)

### Features

-   **datepicker:** close calendar when valid date entered ([ffb499d](https://github.com/fremtind/jokul/commit/ffb499d9e4bc8f21b38d1a02b87549584fe013ce)), closes [#2033](https://github.com/fremtind/jokul/issues/2033)

## 5.1.0 (2021-06-16)

### Features

-   **datepicker-react:** add useFocusOutside to datepicker to close if… ([#2025](https://github.com/fremtind/jokul/issues/2025)) ([04f8442](https://github.com/fremtind/jokul/commit/04f8442d8930b3dcf3c302d5644eba38a2e1dfbc)), closes [#1888](https://github.com/fremtind/jokul/issues/1888)

## 5.0.0 (2021-06-07)

### Features

-   upgrade dependency jkl-core to v5.0.0 ([c3dc8dc](https://github.com/fremtind/jokul/commit/c3dc8dcbd3cba99502f1124cbe1dcaa688177f55))

### BREAKING CHANGES

-   Upgrades dependency jkl-core to v5.0.0, introducing breaking changes to color variables

## 4.0.4 (2021-04-28)

### Bug Fixes

-   **datepicker:** use better clickoutside target for closing calendar ([4a19fcb](https://github.com/fremtind/jokul/commit/4a19fcb59787a50661d4e15ddeddb49c2c585dbd)), closes [#1889](https://github.com/fremtind/jokul/issues/1889)

## 4.0.0 (2021-03-23)

### Features

-   **datepicker:** add name as a prop ([b6c8006](https://github.com/fremtind/jokul/commit/b6c8006598eba999c9a3f4fc5300ebceaa1a252e)), closes [#1902](https://github.com/fremtind/jokul/issues/1902)
-   **datepicker:** use forwardRef on DatePicker ([872d88e](https://github.com/fremtind/jokul/commit/872d88e8354de165feb4def776f0224f2ab1e874))
-   **datepicker:** use textboxRef on BaseInputField ([e2faa63](https://github.com/fremtind/jokul/commit/e2faa6362c1ebae6853ad503a5b790db8e8f80b2)), closes [#1902](https://github.com/fremtind/jokul/issues/1902)

### BREAKING CHANGES

-   **datepicker:** add forwardRef to datepicker

## 3.7.15 (2021-03-12)

### Bug Fixes

-   **datepicker:** better handling of invalid dates ([8caad94](https://github.com/fremtind/jokul/commit/8caad94839f88ecacb982f46071a9527964efd00)), closes [#1881](https://github.com/fremtind/jokul/issues/1881)

## 3.7.13 (2021-03-02)

### Bug Fixes

-   **datepicker-react:** allow multiple date formats for datepicker input ([116b44e](https://github.com/fremtind/jokul/commit/116b44ec48405e7fae2a942bdac26b3be186b71d)), closes [#1605](https://github.com/fremtind/jokul/issues/1605)

## 3.7.11 (2021-02-12)

### Bug Fixes

-   add react 17 types as valid peerdep ([a074c34](https://github.com/fremtind/jokul/commit/a074c34dcece089ad6b4c581b8c920c8bdd4f1e0))

## 3.7.6 (2021-01-21)

### Bug Fixes

-   **datepicker:** fix broken aria reference when no supportlabel ([bd35dfd](https://github.com/fremtind/jokul/commit/bd35dfd5309156098e5dbde1a485a0322fe778e1))

## 3.7.0 (2020-11-25)

### Features

-   update to react 17 ([4639058](https://github.com/fremtind/jokul/commit/4639058067eaa9be222825f8ac4f495a1e74cc0f))

## 3.6.2 (2020-11-19)

### Bug Fixes

-   **datepicker-react:** add width auto to nativeselect in calendar ([68977c9](https://github.com/fremtind/jokul/commit/68977c995bc502dee3b5068f5bda23ca25fc1c64))

## 3.6.0 (2020-11-18)

### Features

-   **datepicker-react:** add width prop ([54a722b](https://github.com/fremtind/jokul/commit/54a722ba39dd23d5b6b8715e82724c8f5c12c1ab)), closes [#1611](https://github.com/fremtind/jokul/issues/1611)

## 3.5.7 (2020-11-12)

### Bug Fixes

-   **datepicker:** fix bug when clicking input field didnt open datepicker ([07ec25e](https://github.com/fremtind/jokul/commit/07ec25eb21df1ae963ee04f1e257fbf871b884d5)), closes [#1510](https://github.com/fremtind/jokul/issues/1510)
-   **datepicker:** fix bug where onBlur/onFocus didn't get called ([6a582f7](https://github.com/fremtind/jokul/commit/6a582f7c64506140f75592ad756f6aef4e959b36)), closes [#1555](https://github.com/fremtind/jokul/issues/1555)
-   **datepicker:** keep focus on input field when clicking it ([8384fe5](https://github.com/fremtind/jokul/commit/8384fe50e9dd814d2d6cd0f3f661391e22975af3)), closes [#1501](https://github.com/fremtind/jokul/issues/1501)
-   **datepicker:** refactor internals to fix React 17 and off by 1 err ([d87570f](https://github.com/fremtind/jokul/commit/d87570f548fabdac379eb5315844fb5317072eac)), closes [#1510](https://github.com/fremtind/jokul/issues/1510) [#1512](https://github.com/fremtind/jokul/issues/1512)

## 3.5.0 (2020-10-07)

### Features

-   add value, refactor and bugfix DatePicker ([6eba4ce](https://github.com/fremtind/jokul/commit/6eba4ce3b1fb6165e0c4365aba1cf33bfd2fd794))

## 3.4.0 (2020-09-28)

### Features

-   **datepicker-react:** return event when onChange, onBlur, onFocus triggered ([27aeb14](https://github.com/fremtind/jokul/commit/27aeb145715fabb024139d582d200a18efb6c2de)), closes [#1386](https://github.com/fremtind/jokul/issues/1386)

## 3.3.23 (2020-09-22)

### Bug Fixes

-   **datepicker:** make next/prev month buttons work properly ([3d8a644](https://github.com/fremtind/jokul/commit/3d8a6442a56443203897236d314c34eab9083b3f))

## 3.3.21 (2020-09-11)

### Bug Fixes

-   actually bundle nrk core components ([d764dc1](https://github.com/fremtind/jokul/commit/d764dc11909b388325353f8ceccaed0a3c97416d))

## 3.3.0 (2020-07-29)

### Features

-   **build:** use @babel/runtime instead of inlining helpers in each file ([bbadce5](https://github.com/fremtind/jokul/commit/bbadce52ba4da5d540b479b07273332587bed436)), closes [#1136](https://github.com/fremtind/jokul/issues/1136)

## 3.2.16 (2020-06-26)

### Bug Fixes

-   align nanoid version, and migrate to 3 ([a3d571d](https://github.com/fremtind/jokul/commit/a3d571db3e18937d40df5268c8f711232a72314e))

## 3.2.0 (2020-05-13)

### Bug Fixes

-   import labels and links from core ([f2bba87](https://github.com/fremtind/jokul/commit/f2bba87aab70e887e44b11b4f390324ab3fa5a2b))

### Features

-   add props for calendar button states ([cf545bc](https://github.com/fremtind/jokul/commit/cf545bc3fb21cbd6781aa9efa56627ba469c5c4b))
-   **datepicker:** add better handling of compact mdoe ([40c5872](https://github.com/fremtind/jokul/commit/40c587243dd40bf5627b4fcb7fcfd9264e248e69))
-   **datepicker:** implement new design and add dark mode ([2f3de1e](https://github.com/fremtind/jokul/commit/2f3de1e60b53b78b5c433ba9dcfe8d9c45e2fc28))

## 3.1.0 (2020-04-20)

### Bug Fixes

-   **datepicker-react:** use effect for initialDate ([fe743d5](https://github.com/fremtind/jokul/commit/fe743d5884e87a125576e1735aec6c28d9e90fe5))
-   **datepicker-react:** use new Date instead of undefined ([ec973b0](https://github.com/fremtind/jokul/commit/ec973b02b35e7f77efc0e010136583b41a80d7bf))

### Features

-   add handling of blur and focus events ([16a84c5](https://github.com/fremtind/jokul/commit/16a84c53a3a229907ecaec19e27968804937344d))

## 3.0.0 (2020-03-30)

### Bug Fixes

-   **datepicker-react:** edit css reference ([24aa7e6](https://github.com/fremtind/jokul/commit/24aa7e63988ff5a05d0257f9aa0ff4eebe2adfad))

### Documentation

-   update README.md ([54a30c8](https://github.com/fremtind/jokul/commit/54a30c8770107bf4aded0b8bc73ec8ab88767000))

### BREAKING CHANGES

-   you must import icon-button styles

## 2.0.1 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 2.0.0 (2020-03-16)

### Bug Fixes

-   **datepicker-react:** add dev:style command to watch scss builds ([f2e9088](https://github.com/fremtind/jokul/commit/f2e908825c4c299ef03ec15139e00d32cc5962f8))
-   **datepicker-react:** add handling of empty dates in datepicker ([12caf46](https://github.com/fremtind/jokul/commit/12caf4646037b9993ef4dc13fd86795797f837c6)), closes [#801](https://github.com/fremtind/jokul/issues/801)

### BREAKING CHANGES

-   **datepicker-react:** The function passed to the onChange prop on Datepicker must now accept a Date or undefined as its
    first argument

## 1.4.0 (2020-03-06)

### Features

-   **portal:** implement dev and portal examples ([857f2e2](https://github.com/fremtind/jokul/commit/857f2e29359f9442a7da0c977a94d63dfbdfc194))

## 1.3.0 (2020-02-24)

### Bug Fixes

-   **datepicker-react:** fix small problems with calendar button ([927626b](https://github.com/fremtind/jokul/commit/927626b95b6f6516a63e1b8dbe6af2879047bf30))
-   **datepicker-react:** stop month nav from closing calendar ([2b3c52a](https://github.com/fremtind/jokul/commit/2b3c52af6baffa8658037952fe53ab2e83370a89))
-   **datepicker-react:** use ref for storing unique id ([01aedf6](https://github.com/fremtind/jokul/commit/01aedf65fcdccc74026f39362ef8f3e56fd24be6))

### Features

-   **datepicker:** add button to open datepicker calendar ([df636f8](https://github.com/fremtind/jokul/commit/df636f87a1934f970f3cff962564cf7d5032bef8)), closes [#593](https://github.com/fremtind/jokul/issues/593) [#773](https://github.com/fremtind/jokul/issues/773) [#774](https://github.com/fremtind/jokul/issues/774)
-   **datepicker:** use core-toggle for datepicker calendar ([a868bdb](https://github.com/fremtind/jokul/commit/a868bdb9f50f31bf5839b37a515e010b8abb98bd))
-   **datepicker-react:** expose calendar button title as a prop ([ea708b4](https://github.com/fremtind/jokul/commit/ea708b4efa485abff210b24ca3aedee14d500503))

## 1.2.2 (2020-02-18)

### Bug Fixes

-   **jkl:** rename classnames import and move types ([e06ef21](https://github.com/fremtind/jokul/commit/e06ef21062b345d5defab335253041dad7ae6134))

## 1.2.0 (2020-01-16)

### Bug Fixes

-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

### Features

-   **portal:** use examples as documentation for all comp ([e99e56a](https://github.com/fremtind/jokul/commit/e99e56ab2f5bf13cd0e72bf010e6472a08ffabe9))

## 1.1.0 (2019-12-17)

### Features

-   add functionality for disabling dates ([cc8bb42](https://github.com/fremtind/jokul/commit/cc8bb42eb00e6b9566df99b3fdb8e51f7366143b)), closes [#567](https://github.com/fremtind/jokul/issues/567)

## 1.0.0 (2019-12-03)

### Bug Fixes

-   **datepicker-react:** datepicker fire onChange on edit ([df0cb61](https://github.com/fremtind/jokul/commit/df0cb6138d0fb255dd9eb2b2a347999151bde36d))
-   **datepicker-react:** datepicker fire onChange on edit ([be99c8b](https://github.com/fremtind/jokul/commit/be99c8b1a9f753977483e2c29c0978241fa8d3d8))

### Features

-   **datepicker:** implement compact version of datepicker ([c8168a5](https://github.com/fremtind/jokul/commit/c8168a5f336c93980ca3e05a8205f3d7bb057e45))
-   remove dropdown pkgs and replace with select pkgs ([14c2b4f](https://github.com/fremtind/jokul/commit/14c2b4fa5a236e2d7824834a7b074ae62ce870b4))

### Reverts

-   revert datepicker docs ([c1b4b87](https://github.com/fremtind/jokul/commit/c1b4b875c5fba7a034af8ca8d341eba821e7f7a1))
-   revert unnecessary changes to datepicker docs ([3fc3bd1](https://github.com/fremtind/jokul/commit/3fc3bd1c73e4b298fc93cbc3df50bcf2c4977c9e))

## 0.11.0 (2019-10-09)

### Bug Fixes

-   **datepicker-react:** add text-input as a dependency ([d574043](https://github.com/fremtind/jokul/commit/d574043))
-   **datepicker-react:** make tests run with new component structure ([e22d76b](https://github.com/fremtind/jokul/commit/e22d76b))
-   remove all alerts from examples ([26abee2](https://github.com/fremtind/jokul/commit/26abee2))

### Features

-   **datepicker:** implement new version and styles ([6f1b3e9](https://github.com/fremtind/jokul/commit/6f1b3e9))
-   **datepicker:** make datepicker shorter until opened ([ef87993](https://github.com/fremtind/jokul/commit/ef87993))
-   **datepicker:** update datepicker with new label design and variants ([9c479b6](https://github.com/fremtind/jokul/commit/9c479b6))
-   change name of label variants ([554749c](https://github.com/fremtind/jokul/commit/554749c))
-   extract label styles to core ([9fad287](https://github.com/fremtind/jokul/commit/9fad287))

## 0.10.0 (2019-09-23)

### Features

-   **jkl-datepicker-react:** fix loss of focus when opening datepicker ([87a8ab8](https://github.com/fremtind/jokul/commit/87a8ab8)), closes [#364](https://github.com/fremtind/jokul/issues/364)

## 0.9.0 (2019-08-30)

### Bug Fixes

-   **build:** remove visual regression tests ([a4502ea](https://github.com/fremtind/jokul/commit/a4502ea))
-   **date-picker-react:** remove test that didn't make sense ([6592a0d](https://github.com/fremtind/jokul/commit/6592a0d))
-   **date-picker-react:** set datestring with the inital date value ([db35ed0](https://github.com/fremtind/jokul/commit/db35ed0))
-   **datepicker:** allow classname to pass ([63d4394](https://github.com/fremtind/jokul/commit/63d4394)), closes [#290](https://github.com/fremtind/jokul/issues/290)
-   **datepicker:** only close datepicker when picking a day ([b1995f7](https://github.com/fremtind/jokul/commit/b1995f7))
-   **datepicker-react:** make datepicker close on focus outside ([901152f](https://github.com/fremtind/jokul/commit/901152f))
-   **react-hooks:** use correct event firing in tests ([3f74393](https://github.com/fremtind/jokul/commit/3f74393))

### Features

-   **datepicker:** add bottomText to datepicker ([7123c8e](https://github.com/fremtind/jokul/commit/7123c8e))
-   **datepicker:** close datepicker on choosing date ([104e5ae](https://github.com/fremtind/jokul/commit/104e5ae))
-   **datepicker-react:** add ability to type text in the datepicker ([d4233ba](https://github.com/fremtind/jokul/commit/d4233ba))
-   **datepicker-react:** add ability to type text in the datepicker ([704aa12](https://github.com/fremtind/jokul/commit/704aa12))
-   **datepicker-react:** add placeholder prop ([6b51aaa](https://github.com/fremtind/jokul/commit/6b51aaa))
-   **datepicker-react:** make datepicker close on enter/escape ([126725b](https://github.com/fremtind/jokul/commit/126725b))

## 0.8.0 (2019-08-02)

### Bug Fixes

-   **datepicker-react:** stop datepicker from submitting forms when opened ([b540721](https://github.com/fremtind/jokul/commit/b540721))

### Features

-   **datepicker-react:** add support for custom month/day names ([1b72a44](https://github.com/fremtind/jokul/commit/1b72a44))
-   **test:** add visual regression testing ([1553b28](https://github.com/fremtind/jokul/commit/1553b28))

## 0.7.0 (2019-07-30)

### Bug Fixes

-   **datepicker:** minor css fixes ([fc924bc](https://github.com/fremtind/jokul/commit/fc924bc))
-   **datepicker:** update according to changes in text-input ([1284e98](https://github.com/fremtind/jokul/commit/1284e98))

### Features

-   **datepicker-react:** use select from jkl-dropdown for month picker ([b57ff76](https://github.com/fremtind/jokul/commit/b57ff76))

## 0.6.0 (2019-07-18)

### Bug Fixes

-   **build:** normalize react package.json ([6c29e08](https://github.com/fremtind/jokul/commit/6c29e08)), closes [#156](https://github.com/fremtind/jokul/issues/156)
-   **datepicker-react:** specify entry points for the package ([a59adb5](https://github.com/fremtind/jokul/commit/a59adb5))

### Features

-   **datepicker:** update style according to sketches ([dc3d82b](https://github.com/fremtind/jokul/commit/dc3d82b))

## 0.2.1 (2019-07-15)

### Bug Fixes

-   **core:** use correct path for normalize in datepicker example ([919f778](https://github.com/fremtind/jokul/commit/919f778))

## 0.2.0 (2019-07-15)

### Bug Fixes

-   **publish:** update access on logo and accodion ([3b557fb](https://github.com/fremtind/jokul/commit/3b557fb))

### Features

-   **build:** add browserlist pkg and browserlist to every pkg ([3dcc9ca](https://github.com/fremtind/jokul/commit/3dcc9ca))

## 0.1.0 (2019-07-15)

### Bug Fixes

-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))

### Features

-   **datepicker:** add initial datepicker ([c64365c](https://github.com/fremtind/jokul/commit/c64365c))
-   **datepicker:** split style into its own pkg ([1a4acb7](https://github.com/fremtind/jokul/commit/1a4acb7))
