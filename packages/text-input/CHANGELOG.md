# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [8.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-text-input@7.0.16...@fremtind/jkl-text-input@8.0.0) (2022-06-07)

### Code Refactoring

-   oppdater til nyeste core ([1db381f](https://github.com/fremtind/jokul/commit/1db381fdc0d3f1c35818d2feec49977331cd2fad))
-   prefiks CSS-variabler med jkl ([500ee0e](https://github.com/fremtind/jokul/commit/500ee0e1050de94d8cda07fb423c33837fbf2faa))
-   skriv og følg stilguiden for Sass i Jøkul ([1cc52a4](https://github.com/fremtind/jokul/commit/1cc52a4dea6af592ed48c45b38bc4fee07a749ae))
-   sweep for å rydde i Sass-variabler ([fa1b094](https://github.com/fremtind/jokul/commit/fa1b094189c2958d5407334ae063d36461229b11))

### Features

-   legg til en index-fil for Sass ([c4f8d0c](https://github.com/fremtind/jokul/commit/c4f8d0cd31bcab0706a49be1bdf0214fbbbbf646))

### BREAKING CHANGES

-   Sass-variabler i komponentpakkene er gjort private
-   Alle CSS-variabler har jkl-prefix
-   Sass-variabler, mixins og CSS-animasjoner fra pakker annet enn core er gjort private
-   Avhenger av ny majorversjon av core

# 7.1.0 (2022-06-01)

### Features

-   ny modifier --align-right til valuta-inputs ([4cdf2e0](https://github.com/fremtind/jokul/commit/4cdf2e064200a1aeaa1a8e63fa3b9d160d9f0c03))

## [7.0.13](https://github.com/fremtind/jokul/compare/@fremtind/jkl-text-input@7.0.12...@fremtind/jkl-text-input@7.0.13) (2022-04-19)

### Bug Fixes

-   autosuggest i forced-colors ([1d86dd9](https://github.com/fremtind/jokul/commit/1d86dd9253535c68924f8c8a8d427b0f372bdfd0))
-   bruk revert i stedet for unset ([300e808](https://github.com/fremtind/jokul/commit/300e8086b4a88e37407dadaf747d714d69919cdd))
-   iconbutton textinput og textarea i forced-colors ([c605f0d](https://github.com/fremtind/jokul/commit/c605f0d174d726757975a39112fbda11af914b8e))
-   skriv om svgmixin etter å ha sett Icons ([093e5ec](https://github.com/fremtind/jokul/commit/093e5ec2e71e5819e68ee2383463096185f9c1f3))
-   unset border og outline i forced-colors ([648c7cd](https://github.com/fremtind/jokul/commit/648c7cdd30805dc6e6dc74b3e12d7b20b2ff5cec))

## 7.0.7 (2022-03-04)

### Bug Fixes

-   ikke vis error state bare fordi :invalid matcher ([1677202](https://github.com/fremtind/jokul/commit/167720203bf9fd3f9756cfb8f6d7a46bdea07674))

## 7.0.6 (2022-02-25)

### Bug Fixes

-   fikser feil med høyde på ekspanderende textarea m teller ([54cc419](https://github.com/fremtind/jokul/commit/54cc41935e9a01e1554ee706cc4940d453a7be71)), closes [#2751](https://github.com/fremtind/jokul/issues/2751)
-   høydefeil ved kompakt og start åpen ([f4f4b8b](https://github.com/fremtind/jokul/commit/f4f4b8ba960601970ed9dd79542b99758dc5a234))
-   scrollbarforbedringer ([24ddcb0](https://github.com/fremtind/jokul/commit/24ddcb0858b33aa9bdad0d21d7107a196e961d2c))
-   scrollbarposisjon flyttet pga start åpen med teller ([139a545](https://github.com/fremtind/jokul/commit/139a545745f9afb74c00534eecaefedec3f40506))
-   sett bakgrunnsfarge først ved fokus ([aba58ac](https://github.com/fremtind/jokul/commit/aba58acf4582b9fb7e5d7c252f561ba273fad160))
-   skriv om beregningen av høyde ved autoekspandering ([2b318ef](https://github.com/fremtind/jokul/commit/2b318efb0b7a60a5be1200db836d005ddeb9ca2a)), closes [#2752](https://github.com/fremtind/jokul/issues/2752)
-   topp padding med teller og innhold uten fokus ([92a65d2](https://github.com/fremtind/jokul/commit/92a65d25ea1beeb62586bb60759f5f2b49827237))

## 7.0.5 (2022-02-22)

### Bug Fixes

-   add correct max-height to textarea with counter ([c736b18](https://github.com/fremtind/jokul/commit/c736b1842758e303a176d0a58de10be86294148d))

## 7.0.2 (2022-02-14)

### Bug Fixes

-   fjern scrollbar på tomt compact textarea ([7652abf](https://github.com/fremtind/jokul/commit/7652abf27b56c07ab15cddcc7806e8dd4f382c7b)), closes [#2634](https://github.com/fremtind/jokul/issues/2634)
-   startOpen fungerer sammen med withCounter ([4b917ce](https://github.com/fremtind/jokul/commit/4b917ce63e7a1a143bb88ba9c859c0b0643b7c4e)), closes [#2721](https://github.com/fremtind/jokul/issues/2721)

# 7.0.0 (2022-02-07)

### Bug Fixes

-   fjern inverted-prop ([de5f8b8](https://github.com/fremtind/jokul/commit/de5f8b83ae8f025826f4c56d3aeb5e081dea66cc)), closes [#2646](https://github.com/fremtind/jokul/issues/2646)
-   manuell delinting sans descending specificity ([20de1c8](https://github.com/fremtind/jokul/commit/20de1c8811596b054867352177225fd197c70797))

### BREAKING CHANGES

-   Fjernet `inverted`-prop. Bruk `data-theme="dark"` om du trenger overstyre temaet.

## 6.0.14 (2022-02-02)

### Bug Fixes

-   redesign feilstate for text-input ([c532e27](https://github.com/fremtind/jokul/commit/c532e27692c0b5fe3397b62694129aa014b97e49)), closes [#2631](https://github.com/fremtind/jokul/issues/2631) [#2631](https://github.com/fremtind/jokul/issues/2631) [#2631](https://github.com/fremtind/jokul/issues/2631) [#1417](https://github.com/fremtind/jokul/issues/1417)

## 6.0.8 (2021-12-09)

### Bug Fixes

-   bruk riktig lengde for TextInput ([8ae7835](https://github.com/fremtind/jokul/commit/8ae783500e44576baeea28627b28d070789980bf))

## 6.0.7 (2021-12-08)

### Bug Fixes

-   fix maxWidth bug with narrow screens ([256c2ef](https://github.com/fremtind/jokul/commit/256c2ef60f2b662e244d698e72d08e977e5af723)), closes [#2576](https://github.com/fremtind/jokul/issues/2576)

## 6.0.5 (2021-11-24)

### Bug Fixes

-   animasjonsfix for Safari ([39982c1](https://github.com/fremtind/jokul/commit/39982c168e7d0a5b99ad72476444055eb889651a)), closes [#2531](https://github.com/fremtind/jokul/issues/2531)

## 6.0.4 (2021-11-19)

### Bug Fixes

-   rett feil linjehøyde for kompakte tekstfelt ([a260923](https://github.com/fremtind/jokul/commit/a26092381ed7043d30b19b73c70e44f0f7e0ae11))

## 6.0.3 (2021-11-18)

### Bug Fixes

-   unngå å kutte toppen av Å i Chrome ([02e4922](https://github.com/fremtind/jokul/commit/02e49228682cd41d10ea5b8edb25f55eb253041b)), closes [#2503](https://github.com/fremtind/jokul/issues/2503)

## 6.0.0 (2021-10-21)

### Features

-   use new spacing scale ([5694495](https://github.com/fremtind/jokul/commit/5694495f56d3c1f0e675433b35cfb0e693b93a82)), closes [#2382](https://github.com/fremtind/jokul/issues/2382)

### BREAKING CHANGES

-   new spacing scale: see migration guide for jkl-core

## 5.2.0 (2021-10-18)

### Bug Fixes

-   added css to support marking in dark mode in text input ([f4ca342](https://github.com/fremtind/jokul/commit/f4ca34220f03127fb2ddc77c3c7db75c9947b090)), closes [#2376](https://github.com/fremtind/jokul/issues/2376)
-   reduser bevegelse ved focus i textarea med teller ([9e32d55](https://github.com/fremtind/jokul/commit/9e32d5578b5ab1090c12e7c0315c1a164daa81aa))
-   vis riktig selectionfarge for textarea med teller ([597aae0](https://github.com/fremtind/jokul/commit/597aae0ebdb71a312b17e8e2428adf035b855f94))

### Features

-   legg til støtte for en teller i jkl-text-area ([8ba841e](https://github.com/fremtind/jokul/commit/8ba841ef2ffdd7a5716996d67b08d67a5adcbfe7)), closes [#1477](https://github.com/fremtind/jokul/issues/1477)

## 5.1.6 (2021-10-13)

### Bug Fixes

-   added css to support marking in dark mode in text input ([f4ca342](https://github.com/fremtind/jokul/commit/f4ca34220f03127fb2ddc77c3c7db75c9947b090)), closes [#2376](https://github.com/fremtind/jokul/issues/2376)

## 5.1.2 (2021-09-30)

### Bug Fixes

-   sync padding i TextInput med Figma ([f269f4f](https://github.com/fremtind/jokul/commit/f269f4f2750caad0d2bcf01d1b84b20dff048131))

## 5.1.0 (2021-09-15)

### Features

-   **text-area:** add inline and startOpen props ([88e4897](https://github.com/fremtind/jokul/commit/88e4897c50e490fa427208bca4c212093bb8db40))

## 5.0.0 (2021-07-09)

### Features

-   use new typographic scale ([8b9c490](https://github.com/fremtind/jokul/commit/8b9c4906b76a19f0b6abb158781d5a7564ad793e))

### BREAKING CHANGES

-   Depends on jkl-core version with breaking changes

## 4.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### Features

-   **text-input:** add automatic dark mode ([0ad0bda](https://github.com/fremtind/jokul/commit/0ad0bdabe94b604cccc690aad6c84779e090e7ce))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 3.0.0 (2021-06-07)

### Features

-   new colors ([9144947](https://github.com/fremtind/jokul/commit/9144947766c73fbe5eaac3372495006e3b89dec7))

### BREAKING CHANGES

-   all color variables are changed

## 2.2.17 (2021-04-28)

### Bug Fixes

-   **datepicker:** use better clickoutside target for closing calendar ([4a19fcb](https://github.com/fremtind/jokul/commit/4a19fcb59787a50661d4e15ddeddb49c2c585dbd)), closes [#1889](https://github.com/fremtind/jokul/issues/1889)

## 2.2.16 (2021-03-05)

### Bug Fixes

-   **text-input:** add better keyboard focus to action ([08d9d35](https://github.com/fremtind/jokul/commit/08d9d35dc77d4a01d4e280ad922500cadebb57ee))

## 2.2.5 (2020-09-24)

### Bug Fixes

-   **text-input:** changes alignment ([fd044a8](https://github.com/fremtind/jokul/commit/fd044a87e10eb0841d5205e50e544904f54f99c3))

## 2.2.4 (2020-09-11)

### Bug Fixes

-   **text-input:** uses search icon ([1c00d95](https://github.com/fremtind/jokul/commit/1c00d954f642454847b501f591732aca2dec3fde))

## 2.2.0 (2020-09-01)

### Features

-   implement global dark mode ([47b8e2d](https://github.com/fremtind/jokul/commit/47b8e2dc0abcd366212fc67f306f8523a63d11c8))

## 2.1.0 (2020-08-26)

### Features

-   **autosuggest:** add autosuggest component ([ac3d399](https://github.com/fremtind/jokul/commit/ac3d3996be720d93ae4396dbdb120a1911e6025f))

## 2.0.2 (2020-05-13)

### Bug Fixes

-   **text-input:** use correct border color in dark mode ([a8f5f64](https://github.com/fremtind/jokul/commit/a8f5f64ddbd89c4b4c936dd75c85c4f5949b8867))

## 2.0.0 (2020-04-27)

### Bug Fixes

-   **text-input:** correct behaviour of width prop ([d752601](https://github.com/fremtind/jokul/commit/d752601b8e11100600026c5683f10e211680c155))
-   **text-input:** use more neutral selection color ([920219b](https://github.com/fremtind/jokul/commit/920219bb07acb226a4e2c9ee67e635c863083c28))

### Features

-   **design:** updated to boxed design ([8b8ab7c](https://github.com/fremtind/jokul/commit/8b8ab7c6ba74657a70e0142deaaeb41dc473e377))
-   **text-input:** consolidate text inputs and apply new style ([0b1cc84](https://github.com/fremtind/jokul/commit/0b1cc847c07790abf7feb303e1e24c3450090b27))
-   **text-input:** start implementing new text inputs ([b2bcfab](https://github.com/fremtind/jokul/commit/b2bcfab37a4c1da542ebd49ad5fdba249e17b63a))
-   minor color tweaks ([3071c7e](https://github.com/fremtind/jokul/commit/3071c7e4d21859f81844d6b152322de1fbb2f323))

### BREAKING CHANGES

-   **text-input:** _ TextField is now called TextInput|_ The following variants have all been integrated into
    TextInput: ActionTextField, InlineTextField, BaseInputField

## 1.3.7 (2020-04-20)

### Bug Fixes

-   use correct height for compact text inputs ([4c76b52](https://github.com/fremtind/jokul/commit/4c76b527ff5317bf601ec7186793140cf022eac1)), closes [#877](https://github.com/fremtind/jokul/issues/877)

## 1.3.5 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 1.3.4 (2020-03-16)

### Bug Fixes

-   **text-input:** use bold font weight in compact mode ([0809200](https://github.com/fremtind/jokul/commit/0809200709dbb4d9bdb9028654e87b4024f9b1d2))

## 1.3.0 (2020-02-19)

### Features

-   export scss files with style pkgs ([edb6278](https://github.com/fremtind/jokul/commit/edb627838075d3d613ae78b6aae765c81067ba6a))
-   **text-input:** tweak action icon placement and add focus state ([7b37ee1](https://github.com/fremtind/jokul/commit/7b37ee1bd6aee1c33db48f3b85024693d63790dd))

## 1.2.2 (2020-02-18)

### Bug Fixes

-   make use of new core color tokens ([075f7b3](https://github.com/fremtind/jokul/commit/075f7b37920805bf780120247461d79c3d8c406e))
-   use new text-style mixins ([2873a57](https://github.com/fremtind/jokul/commit/2873a57f4570ddb87a7390a773433d26a9fde4ac))

## 1.2.0 (2020-01-16)

### Bug Fixes

-   **text-input:** change to bigger line-height ([39731ae](https://github.com/fremtind/jokul/commit/39731ae2d4b77b5328c1679b373e56c5a9003902)), closes [#611](https://github.com/fremtind/jokul/issues/611)
-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

### Features

-   update to new typography naming ([5c061d7](https://github.com/fremtind/jokul/commit/5c061d7b52529f83a16cf944db240984b67f5229))

## 1.1.0 (2019-12-17)

### Bug Fixes

-   **components:** removed styling from examples and refactored ([841ef16](https://github.com/fremtind/jokul/commit/841ef161c6f9d76cc08cbbd5fc77c4a97334e3db)), closes [#545](https://github.com/fremtind/jokul/issues/545)

### Features

-   **components:** css endringer, flytting av funksjon ([7390edd](https://github.com/fremtind/jokul/commit/7390eddfadd941a0465267afba35a81ca446f438)), closes [#545](https://github.com/fremtind/jokul/issues/545)
-   **components on black background:** rewritten css ([04fb8c6](https://github.com/fremtind/jokul/commit/04fb8c62aecfb2aa2141687d561d36cf5893dd04)), closes [#544](https://github.com/fremtind/jokul/issues/544)

## 1.0.0 (2019-12-03)

### Bug Fixes

-   fix icon placement when width isn't default ([5b2e655](https://github.com/fremtind/jokul/commit/5b2e655323cd5cbffcb6575deec413c1e43a8e32))
-   include small-device so action-icon is responsive ([e6dc30a](https://github.com/fremtind/jokul/commit/e6dc30a7249fa728c917120c92d3b8b493540679))

### Features

-   **text-field:** implement in line version of TextField ([5999a32](https://github.com/fremtind/jokul/commit/5999a3229f4c752e60f346ee1051f395505d188e))
-   add compact mode mixin ([ca9fa96](https://github.com/fremtind/jokul/commit/ca9fa96b7de2be50646af0cb444206c3eebcfc4a))
-   add support for global compact mode ([cc11026](https://github.com/fremtind/jokul/commit/cc11026207dfef2a0b3b074b88e071783d2820fd)), closes [#494](https://github.com/fremtind/jokul/issues/494)

## 0.10.0 (2019-10-09)

### Bug Fixes

-   **core:** add and use wcag-compliant error/focus colors ([c714b45](https://github.com/fremtind/jokul/commit/c714b45))

### Features

-   extract label styles to core ([9fad287](https://github.com/fremtind/jokul/commit/9fad287))
-   implement Field pattern in text input ([f3877e4](https://github.com/fremtind/jokul/commit/f3877e4))
-   **text-field:** add option to force compact mode ([07c7fea](https://github.com/fremtind/jokul/commit/07c7fea))
-   **text-field:** implement new design for text inputs ([13b45c6](https://github.com/fremtind/jokul/commit/13b45c6))
-   **text-input:** restore text field styles ([93ec3b7](https://github.com/fremtind/jokul/commit/93ec3b7))

## 0.9.0 (2019-08-30)

### Bug Fixes

-   **text-input:** remove padding that causes double spacing ([b8ce82b](https://github.com/fremtind/jokul/commit/b8ce82b))
-   **textarea:** animate line on hover ([8cb6b72](https://github.com/fremtind/jokul/commit/8cb6b72)), closes [#265](https://github.com/fremtind/jokul/issues/265)

### Features

-   **core:** add temporary shade for placeholder text ([86f2aa7](https://github.com/fremtind/jokul/commit/86f2aa7))
-   **text-field:** add placeholder to text field ([d974be0](https://github.com/fremtind/jokul/commit/d974be0))
-   **text-input:** clean up text-input ([cd8c876](https://github.com/fremtind/jokul/commit/cd8c876))

## 0.8.0 (2019-08-02)

### Bug Fixes

-   **core:** fix help text spacing, error color, minor ios portal fix ([ae19bb7](https://github.com/fremtind/jokul/commit/ae19bb7))
-   **text-input:** fix rounded corners on iOS and set correct height ([fc4675b](https://github.com/fremtind/jokul/commit/fc4675b))
-   **text-input:** fix text-area height when expanded ([ad4f42f](https://github.com/fremtind/jokul/commit/ad4f42f))
-   **textfield:** better naming, fix spacing, add test ([c5e8e82](https://github.com/fremtind/jokul/commit/c5e8e82))

### Features

-   **text-field:** add help and error text to field and area ([e18f117](https://github.com/fremtind/jokul/commit/e18f117)), closes [#41](https://github.com/fremtind/jokul/issues/41)

## 0.7.0 (2019-07-30)

### Bug Fixes

-   **css:** fixed import ([014a7df](https://github.com/fremtind/jokul/commit/014a7df))
-   **datepicker:** update according to changes in text-input ([1284e98](https://github.com/fremtind/jokul/commit/1284e98))
-   **text-input:** show underline in mobile Safari ([26f909d](https://github.com/fremtind/jokul/commit/26f909d))

### Features

-   **portal:** add components, refactor portal ([7e7d038](https://github.com/fremtind/jokul/commit/7e7d038))
-   **text-input:** update style according to sketches ([d60c022](https://github.com/fremtind/jokul/commit/d60c022))

## 0.6.0 (2019-07-18)

### Bug Fixes

-   **build:** add watch job to pkg json ([a0039e0](https://github.com/fremtind/jokul/commit/a0039e0))

### Features

-   **build:** add watch job for css, refactor gulp ([8adafd6](https://github.com/fremtind/jokul/commit/8adafd6))
-   **datepicker:** update style according to sketches ([dc3d82b](https://github.com/fremtind/jokul/commit/dc3d82b))

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

-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))
-   **text-input:** adjust label spacing on textarea ([e232e61](https://github.com/fremtind/jokul/commit/e232e61))
-   **textinput:** fixed spacing ([a74c448](https://github.com/fremtind/jokul/commit/a74c448))
-   **typescript:** clean up tsconfig, make sure everything is typechecked ([745a0fb](https://github.com/fremtind/jokul/commit/745a0fb))

### Features

-   **textarea:** add textarea, refactor text field ([da253d2](https://github.com/fremtind/jokul/commit/da253d2))

### Performance Improvements

-   **build:** use gulp for all style packages ([5699683](https://github.com/fremtind/jokul/commit/5699683))
