# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 11.2.0 (2023-12-04)

### Features

- accordion uses details/summary elements ([b898531](https://github.com/fremtind/jokul/commit/b8985319b59a8b3f1f36972a1aa4cfebf0a0bd61)), closes [#3767](https://github.com/fremtind/jokul/issues/3767)

# 11.1.0 (2023-09-14)

### Features

- added hover color to text and changed padding on mobile ([1b482fd](https://github.com/fremtind/jokul/commit/1b482fdf791390d81fe4b574170952b4fc7f5974))
- changed backgroundcolor when expanded to skifer ([39baa03](https://github.com/fremtind/jokul/commit/39baa03a1baa407e6cdd6d44181e69caf390ec65))

# 11.0.0 (2023-07-07)

### chore

- oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### Code Refactoring

- migrer vekk fra deprecated tilde-importer i Sass ([7ef2cf7](https://github.com/fremtind/jokul/commit/7ef2cf7a510122c69b2c5658c402f3dd9f5322f7)), closes [#3418](https://github.com/fremtind/jokul/issues/3418)

### BREAKING CHANGES

- Avhenger av ny majorversjon av core
- Tilde-prefikset er fjernet i all Sass-kode. Avhengig av oppsettet ditt kan det hende du
ikke trenger gjøre noe. Om bygget ditt brekker, konfigurer Sass sin loadPaths så den
inkluderer node_modules.

## [10.0.6](https://github.com/fremtind/jokul/compare/@fremtind/jkl-accordion@10.0.5...@fremtind/jkl-accordion@10.0.6) (2023-06-07)

### Bug Fixes

- bruk fargen til temaet, ikke parent ([9fe89bf](https://github.com/fremtind/jokul/commit/9fe89bf1532dd2aa4ba643effa84237aa6553649))

## 10.0.3 (2023-03-21)

### Bug Fixes

- sett charset i CSS-filene som genereres ([7346cb8](https://github.com/fremtind/jokul/commit/7346cb8644dd4b99bf0ae4d11c78a967b7b01618)), closes [#3467](https://github.com/fremtind/jokul/issues/3467)

# 10.0.0 (2023-01-30)

### Features

- bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))
- ta i bruk nye ikoner i AccordionItem ([f9c6a32](https://github.com/fremtind/jokul/commit/f9c6a32f9a924721e71f2e111f6260b052ee5bd0))

### BREAKING CHANGES

- Avhenger av en versjon av jkl-core med breaking changes
- Du må nå importere stilarket fra jkl-icons fr at komponentnen skal se riktig ut

## 9.0.5 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

# [9.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-accordion@8.0.3...@fremtind/jkl-accordion@9.0.0) (2022-10-11)

### Bug Fixes

-   sync Accordion med oppdatert design fra Figma ([777fc21](https://github.com/fremtind/jokul/commit/777fc21e12cc2c27598d35466d968dc4fd6ef652)), closes [#3132](https://github.com/fremtind/jokul/issues/3132)

### BREAKING CHANGES

-   CSS-variabelen som setter venstremargin på tittelen er fjernet.

# 8.0.0 (2022-09-08)

### Bug Fixes

-   bold tittel når åpen i kompaktmodus ([2a7645d](https://github.com/fremtind/jokul/commit/2a7645d2c5bc3318e326ae72b7936b269f8a3985))
-   fjern ekstrapadding i accordiontittel ([05468c4](https://github.com/fremtind/jokul/commit/05468c497fc1875211d4af9300f423509b1a482e))
-   fjern jkl-prefix fra public mixin ([2c580da](https://github.com/fremtind/jokul/commit/2c580dac204555ecf4caa144288636b391563483))
-   plassering av pila i flere kontekster ([6cc2831](https://github.com/fremtind/jokul/commit/6cc28313f394dbf842e627c8910fed5744a72e98))
-   rett opp feil farge i dark mode på accordion etter refactor ([a1d4120](https://github.com/fremtind/jokul/commit/a1d4120fa302f7ff0d788d93297528289ff3a90c))

### Features

-   compact-variant av accordion ([1b3d5a3](https://github.com/fremtind/jokul/commit/1b3d5a35ae4b0c4d95815b54fdc2a0d78b16634b))
-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"
-   -   jkl-expand-arrow er nå jkl-accordion-item\_\_arrow
-   variabelen --jkl-accordion-accent er fjernet siden den var ubrukt internt

# [7.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-accordion@6.0.13...@fremtind/jkl-accordion@7.0.0) (2022-06-07)

### Bug Fixes

-   rett feil i forced-colors etter merge ([6656441](https://github.com/fremtind/jokul/commit/665644113c3d145d99ea6069cf543f8fe7bb280a))

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

## [6.0.10](https://github.com/fremtind/jokul/compare/@fremtind/jkl-accordion@6.0.9...@fremtind/jkl-accordion@6.0.10) (2022-04-19)

### Bug Fixes

-   accordion bugs med forced-colors ([7d5bfc0](https://github.com/fremtind/jokul/commit/7d5bfc09d91238ea1e34fd32dbdcf765088fffea))
-   bruk ButtonText for AccordionItem sin pil i forced-colors ([2606294](https://github.com/fremtind/jokul/commit/2606294a67e0dbd6f6a2a54c2b67c310c4fbcd5b))
-   fyll piler med farge og jobb rundt navnekollisjon ([f056ef8](https://github.com/fremtind/jokul/commit/f056ef89ac784e180d74abb07691055364363b43))
-   skriv om svgmixin etter å ha sett Icons ([093e5ec](https://github.com/fremtind/jokul/commit/093e5ec2e71e5819e68ee2383463096185f9c1f3))
-   unset border og outline i forced-colors ([648c7cd](https://github.com/fremtind/jokul/commit/648c7cdd30805dc6e6dc74b3e12d7b20b2ff5cec))

# 6.0.0 (2022-02-07)

### Bug Fixes

-   fjern inverted-prop ([de5f8b8](https://github.com/fremtind/jokul/commit/de5f8b83ae8f025826f4c56d3aeb5e081dea66cc)), closes [#2646](https://github.com/fremtind/jokul/issues/2646)
-   manuell delinting sans descending specificity ([20de1c8](https://github.com/fremtind/jokul/commit/20de1c8811596b054867352177225fd197c70797))

### BREAKING CHANGES

-   Fjernet `inverted`-prop. Bruk `data-theme="dark"` om du trenger overstyre temaet.

## 5.0.1 (2021-11-01)

### Bug Fixes

-   **accordion:** symmetrisk padding i AccordionItem ([c2bc8b0](https://github.com/fremtind/jokul/commit/c2bc8b0ff1158f789385699e291dbab389ddb4d2))

## 5.0.0 (2021-10-21)

### Features

-   use new spacing scale ([5694495](https://github.com/fremtind/jokul/commit/5694495f56d3c1f0e675433b35cfb0e693b93a82)), closes [#2382](https://github.com/fremtind/jokul/issues/2382)

### BREAKING CHANGES

-   new spacing scale: see migration guide for jkl-core

## 4.0.0 (2021-07-09)

### Features

-   use new typographic scale ([c588ee2](https://github.com/fremtind/jokul/commit/c588ee26a9f2c7433f72d7c58d8afc115c1c5ab5))

### BREAKING CHANGES

-   Depends on jkl-core version with breaking changes

## 3.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### Features

-   **accordion:** add automatic dark mode ([77b4f1e](https://github.com/fremtind/jokul/commit/77b4f1e1cdd42b0157af3e9b1edfcf3fbf7799e9))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 2.0.0 (2021-06-07)

### Features

-   new colors ([9144947](https://github.com/fremtind/jokul/commit/9144947766c73fbe5eaac3372495006e3b89dec7))

### BREAKING CHANGES

-   all color variables are changed

## 1.2.0 (2020-09-01)

### Features

-   implement global dark mode ([47b8e2d](https://github.com/fremtind/jokul/commit/47b8e2dc0abcd366212fc67f306f8523a63d11c8))

## 1.1.35 (2020-08-28)

### Bug Fixes

-   override css custom properties when inverted mode is set ([d5c3686](https://github.com/fremtind/jokul/commit/d5c368669e17942570c44bad4fd19989e260e7c8))

## 1.1.29 (2020-08-13)

### Bug Fixes

-   **accordion:** fix accordion spacing issue ([a35771b](https://github.com/fremtind/jokul/commit/a35771bc0a06760592f2d2fcf07ee2f92f98b6a8))

## 1.1.28 (2020-08-12)

### Bug Fixes

-   **accordion:** remove active bounce ([5f671d1](https://github.com/fremtind/jokul/commit/5f671d178103d367b82180e7a9dea51f44e4961f))

## 1.1.27 (2020-08-11)

### Bug Fixes

-   remove expanded blue color accordion ([2b3d62f](https://github.com/fremtind/jokul/commit/2b3d62fdfdcd9b9f527ab50cc1362c9c3177d7ee))

## 1.1.5 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 1.1.4 (2020-03-16)

### Bug Fixes

-   **accordion:** make accordion fill entire width of container ([f15f3b3](https://github.com/fremtind/jokul/commit/f15f3b32b509827ff208d45835dd06d5874744d7))

## 1.1.0 (2020-02-19)

### Features

-   export scss files with style pkgs ([edb6278](https://github.com/fremtind/jokul/commit/edb627838075d3d613ae78b6aae765c81067ba6a))

## 1.0.16 (2020-02-18)

### Bug Fixes

-   make use of new color token (changed name) ([f14c149](https://github.com/fremtind/jokul/commit/f14c149f779e65fe0775afde4421aef26be8ed1d))
-   use new text-style mixins ([2873a57](https://github.com/fremtind/jokul/commit/2873a57f4570ddb87a7390a773433d26a9fde4ac))

## 1.0.14 (2020-01-16)

### Bug Fixes

-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

## 1.0.0 (2019-12-03)

### Bug Fixes

-   **accordion-react:** only scale title when on active state ([dbc0b2c](https://github.com/fremtind/jokul/commit/dbc0b2c1977aba0cb1ffd53decb1a03296d26844)), closes [#489](https://github.com/fremtind/jokul/issues/489)

## 0.9.0 (2019-10-09)

### Bug Fixes

-   **accordion:** use display block on title components ([056fdfb](https://github.com/fremtind/jokul/commit/056fdfb)), closes [#397](https://github.com/fremtind/jokul/issues/397)
-   **core:** add and use wcag-compliant error/focus colors ([c714b45](https://github.com/fremtind/jokul/commit/c714b45))

### Features

-   **accordion:** implement new design for regular page component ([a54ca35](https://github.com/fremtind/jokul/commit/a54ca35))

## 0.8.0 (2019-08-30)

### Bug Fixes

-   **accordion-react:** don't use button as flex and div inside button ([b035498](https://github.com/fremtind/jokul/commit/b035498))

### Features

-   **accordion:** add focus state to accordion ([3807fd6](https://github.com/fremtind/jokul/commit/3807fd6))

## 0.7.0 (2019-08-02)

### Features

-   **firefox:** remove dotted line for good ([67187a6](https://github.com/fremtind/jokul/commit/67187a6))

## 0.6.2 (2019-07-30)

### Bug Fixes

-   **accordion:** make accordion 100% width ([d665fab](https://github.com/fremtind/jokul/commit/d665fab))

## 0.6.0 (2019-07-18)

### Bug Fixes

-   **build:** add watch job to pkg json ([a0039e0](https://github.com/fremtind/jokul/commit/a0039e0))

### Features

-   **accordion:** consolidate style with sketches and remove unused svgs ([8e7e986](https://github.com/fremtind/jokul/commit/8e7e986))
-   **build:** add watch job for css, refactor gulp ([8adafd6](https://github.com/fremtind/jokul/commit/8adafd6))
-   **portal:** add getting started guide ([76d742b](https://github.com/fremtind/jokul/commit/76d742b))

## 0.5.0 (2019-07-15)

### Bug Fixes

-   use correct syntax for importing sass index files ([46fa8f6](https://github.com/fremtind/jokul/commit/46fa8f6))
-   **build:** publish correct files for style pkgs ([a89d768](https://github.com/fremtind/jokul/commit/a89d768))

## 0.3.0 (2019-07-15)

### Bug Fixes

-   **build:** publish correct files from core and accordion ([0a929ee](https://github.com/fremtind/jokul/commit/0a929ee))

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

-   update focus styles to only show on keyboard nav ([b7555a8](https://github.com/fremtind/jokul/commit/b7555a8))
-   **accordion:** remove merge artifact from code ([731e7ff](https://github.com/fremtind/jokul/commit/731e7ff))
-   **accordion:** remove rogue comment ([1df59c1](https://github.com/fremtind/jokul/commit/1df59c1))
-   **accordion:** specify text color to fix bug in safari ([54ce8a1](https://github.com/fremtind/jokul/commit/54ce8a1))
-   **accordion:** update package name to correct value ([e34db42](https://github.com/fremtind/jokul/commit/e34db42))
-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))

### Features

-   accordion stylesheet ([b156cd9](https://github.com/fremtind/jokul/commit/b156cd9))
-   basic setup for accordion-react wrapper ([d868fc0](https://github.com/fremtind/jokul/commit/d868fc0))
-   **accordion:** change accordion style to use chevron ornament ([8896087](https://github.com/fremtind/jokul/commit/8896087))
-   **accordion:** refactor BEM structure for more concise styles ([a7d016a](https://github.com/fremtind/jokul/commit/a7d016a))
-   **accordion:** replace chevron svg with css ([14409d8](https://github.com/fremtind/jokul/commit/14409d8))
-   **accordion:** update style to match new sketches ([2ea6350](https://github.com/fremtind/jokul/commit/2ea6350))
-   **accordion:** update styles on accordion ([22a43b7](https://github.com/fremtind/jokul/commit/22a43b7))

### Performance Improvements

-   **build:** use gulp for all style packages ([5699683](https://github.com/fremtind/jokul/commit/5699683))
