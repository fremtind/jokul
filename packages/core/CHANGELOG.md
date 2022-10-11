# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 11.1.0 (2022-10-11)

### Features

-   ny mixin use-font-family for å få fontfamilie mer riktig fallback ([4959663](https://github.com/fremtind/jokul/commit/49596634828fcc4e3651ef0a60ce1b81dcd4f386))

## [11.0.1](https://github.com/fremtind/jokul/compare/@fremtind/jkl-core@11.0.0...@fremtind/jkl-core@11.0.1) (2022-09-08)

### Bug Fixes

-   rydd opp noen etternølere etter compact reboot ([3ea49aa](https://github.com/fremtind/jokul/commit/3ea49aa11dc51c7e72ee78c9405fc0fb8bea695e))

# 11.0.0 (2022-09-08)

### Bug Fixes

-   bruk samme tykkelse på outline som rundt checbox, radio ([245bcc6](https://github.com/fremtind/jokul/commit/245bcc63c07ed495b36c8f0a7fadf39ea64b6a72))
-   eksporter getCompactValue fra rotnivå ([f10156c](https://github.com/fremtind/jokul/commit/f10156cf40b14e6e696224c4ce10bc07fdd6a27c))
-   fjern jkl-prefix fra public mixin ([2c580da](https://github.com/fremtind/jokul/commit/2c580dac204555ecf4caa144288636b391563483))
-   ikke inkluder CSS i jkl-namespace ([651ff2d](https://github.com/fremtind/jokul/commit/651ff2d6e0d78bf89fc985133aeb03592cc76450))
-   la brukerne nøste hele trær med data-compactlayout ([7427b7a](https://github.com/fremtind/jokul/commit/7427b7ae274a0919866964378c331604138afc37))
-   legg til manglende easing og timing i motion.ts ([3ba5ffd](https://github.com/fremtind/jokul/commit/3ba5ffd81b1fd9d48211f1422665efc4154f3917))
-   sync linkdesign med Figma ([16eb235](https://github.com/fremtind/jokul/commit/16eb235a752806ff36e196d1638b5f1e7f36fb02))
-   visuell justering ved tastaturfokus ([126a50a](https://github.com/fremtind/jokul/commit/126a50a4b5818d9d95c120fffe85e719a4089c93))

### chore

-   fjern forceCompact-props ([0f8bfeb](https://github.com/fremtind/jokul/commit/0f8bfebc68fe6ebf6368bf8a37e2af78f4d7b46d))

### Features

-   eksponer variabler for typografi på rotnivå ([ab5ba30](https://github.com/fremtind/jokul/commit/ab5ba30aadd91357ddc4ce0487fb75eb9b2df246))
-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))
-   legg til nytt compact-API og deprecate det eksisterende ([47c0f5d](https://github.com/fremtind/jokul/commit/47c0f5dd1a0a9221aa79854809e7877c9977b553))

### Performance Improvements

-   dropp å generer en media query med likt innhold for text-style small ([b8293db](https://github.com/fremtind/jokul/commit/b8293dbc516d69c763f89ac9ed027bba235e69a5))
-   fjern unødvendig \* selector ([10f51a5](https://github.com/fremtind/jokul/commit/10f51a5f8c7fa4b6f1dabf4ef6258aba20704b0f))
-   som for small, unngå å generere media query med duplikat stil ([f45f6c7](https://github.com/fremtind/jokul/commit/f45f6c79416043d0ccff73ebde59eeba6aee6c9d))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"
-   data-compactlayout krever nå en verdi true eller false
-   forceCompact er fjernet. Bruk compact og regresjonstest steder du bruker kompaktvarianter.

# 10.1.0 (2022-09-01)

### Features

-   legg til nytt typografinivå Title Small ([decd931](https://github.com/fremtind/jokul/commit/decd931791b93beac18c21b8614bff842301bdc5)), closes [#3045](https://github.com/fremtind/jokul/issues/3045)

## [10.0.11](https://github.com/fremtind/jokul/compare/@fremtind/jkl-core@10.0.10...@fremtind/jkl-core@10.0.11) (2022-08-18)

### Bug Fixes

-   legg til offset på fokusring for bedre lesbarhet ([56bc228](https://github.com/fremtind/jokul/commit/56bc22895dc6c8a3104874d6854ac2ee5d3e76a8))

## [10.0.8](https://github.com/fremtind/jokul/compare/@fremtind/jkl-core@10.0.7...@fremtind/jkl-core@10.0.8) (2022-07-28)

### Bug Fixes

-   legg til manglende id-prop på label ([e723225](https://github.com/fremtind/jokul/commit/e723225b5f33350f82218374c651763eaa75108f))

## 10.0.7 (2022-07-26)

### Bug Fixes

-   legg inn en author style for hidden-attributtet ([a7a100f](https://github.com/fremtind/jokul/commit/a7a100f8fc2956e517ea5e5832dfe4eeb294c553)), closes [#2968](https://github.com/fremtind/jokul/issues/2968)

## 10.0.4 (2022-07-21)

### Bug Fixes

-   ordne typingen til SupportLabel så ID er påkrevd ([a0d1686](https://github.com/fremtind/jokul/commit/a0d16869ec51118a1e3dada3940ea76e1755cd27))

## [10.0.3](https://github.com/fremtind/jokul/compare/@fremtind/jkl-core@10.0.2...@fremtind/jkl-core@10.0.3) (2022-06-13)

### Bug Fixes

-   merk CSS og SCSS som side-effects ([dac2e2b](https://github.com/fremtind/jokul/commit/dac2e2b5f4d1b31485821bf6ad8ec4c7c2769cca))

### Performance Improvements

-   bruk tiny-glob for globbing av filer under bygg ([246952a](https://github.com/fremtind/jokul/commit/246952ae75afe20bcf0d007a0a068b76b114f9a6))

## 10.0.2 (2022-06-09)

### Bug Fixes

-   pakk med all Sass-kildekoden ([70b42db](https://github.com/fremtind/jokul/commit/70b42db0771f70385bf5bf60d286f65c5d837d2d))

# [10.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-core@9.6.1...@fremtind/jkl-core@10.0.0) (2022-06-07)

### Bug Fixes

-   importrekkefølge og syntaks ([55ef8ce](https://github.com/fremtind/jokul/commit/55ef8ce647772b7061eb72d46f4ab63884ea74e7))

### Code Refactoring

-   bruk det nye modulsystemet til Sass overalt ([90da923](https://github.com/fremtind/jokul/commit/90da9237e45ab4339829591b745b525c8780dcc3))
-   oppdater til nyeste core ([1db381f](https://github.com/fremtind/jokul/commit/1db381fdc0d3f1c35818d2feec49977331cd2fad))
-   prefiks CSS-variabler med jkl ([500ee0e](https://github.com/fremtind/jokul/commit/500ee0e1050de94d8cda07fb423c33837fbf2faa))
-   rydd opp i plassering og navn blant motion-funksjoner ([63667c9](https://github.com/fremtind/jokul/commit/63667c9e679d12e4868344378249fb84c3b18e8c))
-   skriv og følg stilguiden for Sass i Jøkul ([1cc52a4](https://github.com/fremtind/jokul/commit/1cc52a4dea6af592ed48c45b38bc4fee07a749ae))

### Features

-   legg til en index-fil for Sass ([c4f8d0c](https://github.com/fremtind/jokul/commit/c4f8d0cd31bcab0706a49be1bdf0214fbbbbf646))

### BREAKING CHANGES

-   Alle CSS-variabler har jkl-prefix
-   Sass-variabler, mixins og CSS-animasjoner fra pakker annet enn core er gjort private
-   Avhenger av ny majorversjon av core
-   Maps fra motion er gjort private, jkl-motion er nå easing, jkl-timing er nå timing.
-   For brukere av Sass-koden vil dere kunne oppleve breaking changes. Se MIGRATION.md.
    Om du importeres CSS i prosjektet ditt er det ingen breaking change.

# [9.7.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-core@9.6.2...@fremtind/jkl-core@9.7.0) (2022-06-02)

### Features

-   screen-hjelper for skjermer opp til et gitt sted ([83a3b49](https://github.com/fremtind/jokul/commit/83a3b49ba563907ff4092b55edc2b65c6f8042ed))

## 9.6.2 (2022-06-02)

### Bug Fixes

-   hold pila etter navlink inline ([94a9345](https://github.com/fremtind/jokul/commit/94a9345a6471939bed706eea33f8c9cb95ab1fbf))

## 9.6.1 (2022-05-13)

### Bug Fixes

-   skjul gradienten om animasjonen ikke kjører ([08b7fe2](https://github.com/fremtind/jokul/commit/08b7fe2f2e716e9ba86419309e88efea3754c1fb))

# 9.6.0 (2022-04-28)

### Features

-   eksponer labelProps i skjemakomponenter ([db27e30](https://github.com/fremtind/jokul/commit/db27e309a8a72913d8761b2967e940113c47b779))

# [9.5.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-core@9.4.0...@fremtind/jkl-core@9.5.0) (2022-04-22)

### Features

-   core eksporterer to interfaces for children ([f213598](https://github.com/fremtind/jokul/commit/f21359802590123bf2ac5b135949f19a3e03360b))

# [9.4.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-core@9.3.2...@fremtind/jkl-core@9.4.0) (2022-04-19)

### Bug Fixes

-   alt i Safari må ha et mellomrom for å fungere ([936e98b](https://github.com/fremtind/jokul/commit/936e98b0c0f2f8100996ced0897e52ca73eb75f1))
-   bruk revert i stedet for unset ([300e808](https://github.com/fremtind/jokul/commit/300e8086b4a88e37407dadaf747d714d69919cdd))
-   bruk revert som keyword i reset-outline ([f89b524](https://github.com/fremtind/jokul/commit/f89b524c071bc023785ae5c00afc2793d7211a4d))
-   bruk unset i stedet for initial ([5091fcd](https://github.com/fremtind/jokul/commit/5091fcd5103f8a5d022162033dcc06a005a3dd59))
-   checkbox og supportlabelikon i forced-colors ([0501475](https://github.com/fremtind/jokul/commit/0501475d815d56031e969020907102d48cddb12b))
-   feedback i forced-colors ([087365f](https://github.com/fremtind/jokul/commit/087365f79f39d8aaceb611de7c0bc51406ce448f))
-   gi feilikon en fill for kontrast ([793ba36](https://github.com/fremtind/jokul/commit/793ba36b9504607a0d109eacbc4e37491a2a0ea2))
-   gjør så reset-outline rydder opp etter seg i forced-colors ([a20f4ae](https://github.com/fremtind/jokul/commit/a20f4aef0707ca791dcc47c50cf889c1ecbc8114))
-   la vanlige lenker få understrek ([91b0402](https://github.com/fremtind/jokul/commit/91b040228e5779868bec1d5cdf39847b7d6c6859))
-   overstyr svg og path med svg fallback, ikke bare klassen ([f7feb4f](https://github.com/fremtind/jokul/commit/f7feb4f0f511b4cdf2134434460f84627552717c))
-   rett opp guard mot manglende window for Gatsby ([94c64c2](https://github.com/fremtind/jokul/commit/94c64c2aa406c4b7d55d96971d4a8de9206649a3))
-   skriv om svgmixin etter å ha sett Icons ([093e5ec](https://github.com/fremtind/jokul/commit/093e5ec2e71e5819e68ee2383463096185f9c1f3))
-   spacingskala-eksempel ([b415d77](https://github.com/fremtind/jokul/commit/b415d77c40e8fb411de0bcb8492a6e256e198b13))
-   tillat alle systemfargene i helperen ([0510917](https://github.com/fremtind/jokul/commit/05109175cf9efe7673ccb3a4118c317203492878))
-   unset border og outline i forced-colors ([648c7cd](https://github.com/fremtind/jokul/commit/648c7cdd30805dc6e6dc74b3e12d7b20b2ff5cec))

### Features

-   legg til hjelpere for forced-color-mode ([0ffc43d](https://github.com/fremtind/jokul/commit/0ffc43db2ae9b41d5bb29795a25bcca751d65c5d))

# [9.3.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-core@9.2.0...@fremtind/jkl-core@9.3.0) (2022-03-14)

### Features

-   eksporter screens-mixins via jkl ([d067215](https://github.com/fremtind/jokul/commit/d067215a80fb5a356fe72b5aba9f5767a1e15b1a))

# [9.2.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-core@9.1.3...@fremtind/jkl-core@9.2.0) (2022-03-11)

### Features

-   eksponer easing og timing fra Sass i TypeScript ([58515c8](https://github.com/fremtind/jokul/commit/58515c857be6ed9d598e3147a6e6600fbb766d2a))
-   sett defaultverdi for motion-mixin til "standard" ([99fa497](https://github.com/fremtind/jokul/commit/99fa49705db63e030d958b8539eaa27f4a8246a3))

## 9.1.2 (2022-03-04)

### Bug Fixes

-   skjul dekorativt CSS-innhold fra skjermlesere ([5976cf9](https://github.com/fremtind/jokul/commit/5976cf93234ab2d189dfd2de888fa45a88480c55)), closes [#2774](https://github.com/fremtind/jokul/issues/2774)

# [9.1.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-core@9.0.1...@fremtind/jkl-core@9.1.0) (2022-02-17)

### Features

-   **shadows:** legg til nye skyggevariabler for kort ([dda0aed](https://github.com/fremtind/jokul/commit/dda0aed45b3937226bd819a97715c058f52413d7))

## 9.0.1 (2022-02-08)

### Bug Fixes

-   **datepicker:** add mixin to remove inner outer button ([bde1ca0](https://github.com/fremtind/jokul/commit/bde1ca0ca8ef1057b2e8cc02f1ef259ce713184c)), closes [#2707](https://github.com/fremtind/jokul/issues/2707)

# 9.0.0 (2022-02-07)

### Bug Fixes

-   fjern inverted-prop ([de5f8b8](https://github.com/fremtind/jokul/commit/de5f8b83ae8f025826f4c56d3aeb5e081dea66cc)), closes [#2646](https://github.com/fremtind/jokul/issues/2646)
-   fjern normalisering for ie ([f15329a](https://github.com/fremtind/jokul/commit/f15329aa25ca4ec0ec3f1da009bbb1879d9adced))
-   manuell delinting sans descending specificity ([20de1c8](https://github.com/fremtind/jokul/commit/20de1c8811596b054867352177225fd197c70797))
-   oppdater breakpoints ([c4cd9c1](https://github.com/fremtind/jokul/commit/c4cd9c1c84cca2e79d524a87160214575b9f4bf4)), closes [#2605](https://github.com/fremtind/jokul/issues/2605)
-   rett syntaksfeil etter autofiks ([adf687d](https://github.com/fremtind/jokul/commit/adf687d4bd954e1ba9c20139f6f4082d091c40ed))

### BREAKING CHANGES

-   -   Oppdaterte verdier for breakpoints kan gjøre at layout brekker på en dårlig måte i appen din
-   `small`-variabelen finnes ikke lenger i `breakpoints.ts`
-   `$breakpoint--small` finnes ikke lenger i `_breakpoints.scss`
-   Fjernet `inverted`-prop. Bruk `data-theme="dark"` om du trenger overstyre temaet.

## 8.3.3 (2022-02-02)

### Bug Fixes

-   bruk currentColor som fill i warningikon ([d6d5801](https://github.com/fremtind/jokul/commit/d6d5801d574256923843c93aadc14a86ecf5f995))
-   gjør så SupportLabel sin inngang kan animeres ([d819ba6](https://github.com/fremtind/jokul/commit/d819ba6fd3dfc6900dce67c02009ce98e7d1e2f1))
-   redesign label for feilmelding ([b5eeabc](https://github.com/fremtind/jokul/commit/b5eeabc6fc755ceec2dc8144c85af42c5f1b86c6)), closes [#2631](https://github.com/fremtind/jokul/issues/2631)

## 8.3.2 (2022-02-01)

### Bug Fixes

-   fiks aligmnent av navlinks piler utenfor flex ([b1ebe62](https://github.com/fremtind/jokul/commit/b1ebe62ef1e53b90f5d93444460f59d7a22150d8)), closes [#2684](https://github.com/fremtind/jokul/issues/2684)

## 8.3.0 (2021-12-21)

### Features

-   legg til bold som egen klasse ([2837d10](https://github.com/fremtind/jokul/commit/2837d109ea94f383fabaf0ad2cbb605facc6faa9))

## 8.2.0 (2021-12-17)

### Features

-   legg til to nye mixins i core for responsivt design ([e0cddcd](https://github.com/fremtind/jokul/commit/e0cddcdc5c27c5d7ed355b8250d5c400cacebf2d))

## 8.1.0 (2021-11-09)

### Features

-   core eksporterer typer for komponentene ([b895b36](https://github.com/fremtind/jokul/commit/b895b36abbdaf4c7ee6ca4c034f23e717c41c048))

## 8.0.0 (2021-10-21)

### chore

-   updates dependencies ([b975200](https://github.com/fremtind/jokul/commit/b97520045c02e4bcb44ebde159c60a7dff7f01d6))

### Features

-   new spacing scale ([9eaae68](https://github.com/fremtind/jokul/commit/9eaae688c2d45a296696b740704a59a3d8b5c17b)), closes [#2382](https://github.com/fremtind/jokul/issues/2382)

### BREAKING CHANGES

-   depends on jkl-core v8 with breaking changes
-   new spacing scale: see migration guide for jkl-core

## 7.4.0 (2021-10-18)

### Features

-   videresend native HTML props til SupportLabel ([da3f4b2](https://github.com/fremtind/jokul/commit/da3f4b2c418f90d7f65f6d48b721778db835ca87))

## 7.3.0 (2021-10-13)

### Features

-   add new message colors ([075336e](https://github.com/fremtind/jokul/commit/075336ee16bddf2e89a12d77c4710f6b2e0da896))

## 7.2.0 (2021-10-08)

### Features

-   add new color notation to color docs ([abe695b](https://github.com/fremtind/jokul/commit/abe695bb149e1aa9401135c6907dc61cef60b776))

## 7.1.0 (2021-08-31)

### Features

-   **sass:** forward functions to new jkl entrypoint ([451662a](https://github.com/fremtind/jokul/commit/451662ab03b23dac383eecf3c28a5c4ed7bff8e3))

## 7.0.1 (2021-08-06)

### Bug Fixes

-   **text-styles:** use correct weight for heading 2 on small screens ([7ca9516](https://github.com/fremtind/jokul/commit/7ca9516795ea72307166144007310bcd74c4f43e))

## 7.0.0 (2021-07-09)

### Bug Fixes

-   **sass:** make sure to import functions where using rem() ([02268ab](https://github.com/fremtind/jokul/commit/02268ab1494165ac489978d17bd404030347d9ff))

### Features

-   **jkl:** add new typog. scale and new text-style mixin ([69e1604](https://github.com/fremtind/jokul/commit/69e160458ade25b319efadc1e76ac58184c3faf9))
-   **labels:** use new typog. scale in field labels ([8b96f69](https://github.com/fremtind/jokul/commit/8b96f690fea59d6d5571c057f78c6736fee98e4a))
-   **links:** update import of typographic variables ([3d408e6](https://github.com/fremtind/jokul/commit/3d408e63598f51ce62d5366de6b195d03fbcb3af))

### BREAKING CHANGES

-   **jkl:** Removes the old jkl-text-style mixin and old utility classes

## 6.0.0 (2021-07-06)

### Features

-   **core:** add base class with automatic dark mode ([2183410](https://github.com/fremtind/jokul/commit/2183410328619848caea2e8a4e5efdddb4b65fba))
-   **labels:** add automatic dark mode ([e9f4a4d](https://github.com/fremtind/jokul/commit/e9f4a4d64762fc7cc6907c1088fe01f12472a9a3))
-   **links:** add automatic dark mode ([982ba1e](https://github.com/fremtind/jokul/commit/982ba1ee2682760c489e8ff783ad0dbaed3cd0fd))
-   **sass:** add helper for defining dark/light mode vars ([47de260](https://github.com/fremtind/jokul/commit/47de2606d2cf7156dc70238fcc65d7737a752af6))

### BREAKING CHANGES

-   **core:** Base class .jkl must now be set to get Fremtind Grotesk font

## 5.0.2 (2021-07-02)

### Bug Fixes

-   changed focus state for NavLink ([178e972](https://github.com/fremtind/jokul/commit/178e9726fc57770ae793204fd65d2d83cfb9f05a))

## 5.0.1 (2021-06-25)

### Bug Fixes

-   **sass:** upgrade sass and stop using dep. syntax ([194d414](https://github.com/fremtind/jokul/commit/194d4145cbde712eb351ef6b41cefe6a47f40b5e))

## 5.0.0 (2021-06-07)

### Features

-   new colors ([9144947](https://github.com/fremtind/jokul/commit/9144947766c73fbe5eaac3372495006e3b89dec7))

### BREAKING CHANGES

-   all color variables are changed

## 4.21.1 (2021-02-12)

### Bug Fixes

-   add react 17 types as valid peerdep ([a074c34](https://github.com/fremtind/jokul/commit/a074c34dcece089ad6b4c581b8c920c8bdd4f1e0))

## 4.21.0 (2021-02-11)

### Features

-   **core:** add keyboard mixin ([606078b](https://github.com/fremtind/jokul/commit/606078ba5f019897f00b88f5623bc5b52b519720))

## 4.20.0 (2021-01-18)

### Features

-   **core:** add back nav link ([687f03f](https://github.com/fremtind/jokul/commit/687f03f55018a9da013ff7f3ab18e54d05724a9e))

## 4.19.0 (2021-01-11)

### Features

-   **core:** add back nav link ([687f03f](https://github.com/fremtind/jokul/commit/687f03f55018a9da013ff7f3ab18e54d05724a9e))

## 4.18.0 (2020-12-15)

### Features

-   display types in portal ([5c62a16](https://github.com/fremtind/jokul/commit/5c62a161c278d3a5a136741aea8dcf9b62338bda))

## 4.17.0 (2020-11-24)

### Features

-   **core:** update value of suksess color ([0f284aa](https://github.com/fremtind/jokul/commit/0f284aa5ae198e044e9213aed071c60a1951a90b))

## 4.16.0 (2020-11-19)

### Features

-   **core:** expand layout spacing scale with new value ([fdce942](https://github.com/fremtind/jokul/commit/fdce94252c2267d6ba9b40bbab0377c4df201c45)), closes [#1043](https://github.com/fremtind/jokul/issues/1043)

## 4.15.0 (2020-10-23)

### Features

-   **core:** update tablistener to handle touch events ([a8293e9](https://github.com/fremtind/jokul/commit/a8293e9b2a8d455d42ea99051e1eccccd6f2c647))

## 4.14.2 (2020-09-02)

### Bug Fixes

-   **core:** add a font stack ([903043f](https://github.com/fremtind/jokul/commit/903043fabe465e6ea10bd1a90541ed8cd33e7010))

## 4.14.1 (2020-09-01)

### Bug Fixes

-   **labels:** fix typo in labels.scss ([881b59b](https://github.com/fremtind/jokul/commit/881b59b1b048177859530f2eeda3edff96be9c94))

## 4.14.0 (2020-09-01)

### Features

-   implement global dark mode ([47b8e2d](https://github.com/fremtind/jokul/commit/47b8e2dc0abcd366212fc67f306f8523a63d11c8))

## 4.13.0 (2020-08-20)

### Features

-   **portal:** fixes most mobile layout issues ([69e0424](https://github.com/fremtind/jokul/commit/69e04242de285cbe149cdb4c8d23cf6194b79861))

## 4.12.1 (2020-08-17)

### Bug Fixes

-   **links:** update focus style on links and nav links ([0552e9c](https://github.com/fremtind/jokul/commit/0552e9c18c0430a40ef19d2aedeabbc211068710))

## 4.12.0 (2020-08-14)

### Features

-   **links:** add nav link component ([28f0da9](https://github.com/fremtind/jokul/commit/28f0da9290f1b40a430178c8ed0ce1206a87520d)), closes [#1185](https://github.com/fremtind/jokul/issues/1185)

## 4.11.0 (2020-08-13)

### Features

-   **link:** update link styles ([880eb48](https://github.com/fremtind/jokul/commit/880eb48aadf1772b1e18675a310263ca8270927d)), closes [#1167](https://github.com/fremtind/jokul/issues/1167)

## 4.10.0 (2020-08-13)

### Features

-   add icons package ([24c9748](https://github.com/fremtind/jokul/commit/24c974803b7d705d8a22cec719dbf3873373781f))

## 4.9.0 (2020-07-29)

### Features

-   **build:** use @babel/runtime instead of inlining helpers in each file ([bbadce5](https://github.com/fremtind/jokul/commit/bbadce52ba4da5d540b479b07273332587bed436)), closes [#1136](https://github.com/fremtind/jokul/issues/1136)

## 4.8.0 (2020-07-08)

### Features

-   legg til data-testautoid type og props på Select ([b30dbf0](https://github.com/fremtind/jokul/commit/b30dbf0fb193433862973f406fb7163c8d16c1d8))

## 4.7.0 (2020-07-03)

### Features

-   **core:** add utility classes for colors ([f052e72](https://github.com/fremtind/jokul/commit/f052e721bf8a462670028d1f50797178bee2b6ef)), closes [#1065](https://github.com/fremtind/jokul/issues/1065)

## 4.6.0 (2020-07-01)

### Features

-   **core:** add utility classes for all spacings ([6edbb8e](https://github.com/fremtind/jokul/commit/6edbb8e5b0f440c6b8ad1582d8af70e29326a560))

## 4.5.5 (2020-06-26)

### Bug Fixes

-   **core:** make text style util classes respect compact mode ([1c04b73](https://github.com/fremtind/jokul/commit/1c04b73f94de60ead9d423966c0a250a1da2dd86))

## 4.5.4 (2020-06-25)

### Bug Fixes

-   **label:** add classname prop ([370d410](https://github.com/fremtind/jokul/commit/370d410e3af47d292f5c9ce60eaa2d512a4b5fff))

## 4.5.0 (2020-06-23)

### Features

-   **core:** add helper function for dynamic sizing in sass ([2d913fd](https://github.com/fremtind/jokul/commit/2d913fd46a6f2cb72d28c4f4204646e213f89b0f))
-   **core:** add more screen size mixins for easier use ([9ec7de5](https://github.com/fremtind/jokul/commit/9ec7de545ecf9ccc60dfd1869b99f0f195d9058c))

## 4.4.0 (2020-05-13)

### Bug Fixes

-   import labels and links from core ([f2bba87](https://github.com/fremtind/jokul/commit/f2bba87aab70e887e44b11b4f390324ab3fa5a2b))

### Features

-   **core:** add typographic components ([1bd28a5](https://github.com/fremtind/jokul/commit/1bd28a54ecadd6626666dec0362d9ec8e38d5a90))

## 4.3.1 (2020-05-11)

### Bug Fixes

-   **labels:** adjust label spacings ([5e4f74a](https://github.com/fremtind/jokul/commit/5e4f74a7392d7cc924baf612ac8b8fe135602918)), closes [#900](https://github.com/fremtind/jokul/issues/900)

## 4.3.0 (2020-04-27)

### Features

-   **support-label:** add support for id and sr-only to SupportLabel ([419a301](https://github.com/fremtind/jokul/commit/419a301fa0f7e691331c8058bc6abf7205f7634c))
-   add inverted mode to error label ([d44985f](https://github.com/fremtind/jokul/commit/d44985ffadcc1149a98c83579c6c4812dd4f8dad))

## 4.2.0 (2020-04-20)

### Features

-   **links:** add external prop and style to links ([f1a47f0](https://github.com/fremtind/jokul/commit/f1a47f09cc7ed5c8a1c5ac19de8b9b8ed78ffac9)), closes [#905](https://github.com/fremtind/jokul/issues/905)

## 4.1.1 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 4.1.0 (2020-03-16)

### Features

-   **core:** add support for prefers-reduced-motion ([ee9886b](https://github.com/fremtind/jokul/commit/ee9886bf1daf894c9b912ae02a92929b2e4fa8da))

## 4.0.0 (2020-03-05)

### Features

-   **core:** add new func colors, remove illustration colors ([7847426](https://github.com/fremtind/jokul/commit/7847426fe77f723cd68085d4d995b3d867693c86))
-   **core:** update warning and error colors ([13f6976](https://github.com/fremtind/jokul/commit/13f697673012acd39d5d8ecb6fd835805d2e18b2))
-   **links:** add indicator for external links ([4562e46](https://github.com/fremtind/jokul/commit/4562e469cf865b9d5f04f133d1db37450bbd2731))
-   **react-hooks:** add hook for responsivity in js ([4c36d27](https://github.com/fremtind/jokul/commit/4c36d27a8928a329e4ead16636f7f5a33d6b423f))

### BREAKING CHANGES

-   **core:** Removes illustration colors: sand, jord, sol, blomst, skog, hav

## 3.0.0 (2020-02-18)

### Bug Fixes

-   make use of new core color tokens ([075f7b3](https://github.com/fremtind/jokul/commit/075f7b37920805bf780120247461d79c3d8c406e))
-   **core:** assign $varde value in correct order ([7c300ce](https://github.com/fremtind/jokul/commit/7c300ce23b18215544c00431f8555acc719043a8))
-   **core:** specify font weight for all text styles ([d1e73de](https://github.com/fremtind/jokul/commit/d1e73de064c2e2cd4209816977d01cd1968299e7))

### Features

-   **core:** add error handling to text style mixin ([d17e544](https://github.com/fremtind/jokul/commit/d17e544e918bfb2d34444fbf22805cad0aec90eb))
-   **core:** change names of varde color scale entries ([4d9adca](https://github.com/fremtind/jokul/commit/4d9adca35cf0ec761d474d5c72300e40f8834246))
-   **core:** rename/restructure text styles and typography classes ([d0510fb](https://github.com/fremtind/jokul/commit/d0510fba55597052d9f2c9fd53360f86db6a26fe))
-   **core:** update to new color values ([ea38d34](https://github.com/fremtind/jokul/commit/ea38d34e7c6ff01d4683d59040dd0efa73e5a5bd))

### BREAKING CHANGES

-   **core:** All text style mixins and typography classes have new names and new usage
-   **core:** Varde color scale entries changed from $varde-20, $varde-40 ... $varde-200 to $varde-10, $varde-20
    ... $varde-100
-   **core:** color tokens have changed

## 2.0.0 (2020-01-16)

### Bug Fixes

-   **core:** remove font-weight ([d63ab8c](https://github.com/fremtind/jokul/commit/d63ab8cbfc6436c1cd78fdac4af8b703d09e02b3))
-   **core:** stop reset-outline mixin from overriding padding ([8303f5a](https://github.com/fremtind/jokul/commit/8303f5aa6c594b995fbc24052d1ca10ff0d810b3))
-   **core:** use better check for document in tablistener ([8a027e5](https://github.com/fremtind/jokul/commit/8a027e5fb3e3febd6098d7214b591b76ef3f54a9))
-   **links:** adjust padding around links for new font ([a884fbd](https://github.com/fremtind/jokul/commit/a884fbd90629997c801a68542799254faa6096fe))
-   **motion:** fix reversed bezier-timing ([99acfa6](https://github.com/fremtind/jokul/commit/99acfa636b1cc36d16f1618672c2949df2dbc4e7))
-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

### Features

-   **portal:** use examples as documentation for all comp ([e99e56a](https://github.com/fremtind/jokul/commit/e99e56ab2f5bf13cd0e72bf010e6472a08ffabe9))
-   new function colors (notification colors) ([17deb16](https://github.com/fremtind/jokul/commit/17deb165aa2549110540e8f5510b6571e4869a86)), closes [#617](https://github.com/fremtind/jokul/issues/617) [#618](https://github.com/fremtind/jokul/issues/618)
-   unify naming spanning typography-react, mixins, classes ([f90174a](https://github.com/fremtind/jokul/commit/f90174a638ebe5438fab72770f8d089fecd7b986)), closes [#592](https://github.com/fremtind/jokul/issues/592)

### BREAKING CHANGES

-   variable names for function colors are changed
-   changes to naming of certain components, paragraphs, headings and classes regarding typography

## 1.1.0 (2019-12-17)

### Bug Fixes

-   **core:** fix import and example of screenreaderonly ([4ac4a93](https://github.com/fremtind/jokul/commit/4ac4a93de97b295410a1dd4679967ce293e1b9f3))

### Features

-   **components:** css endringer, flytting av funksjon ([7390edd](https://github.com/fremtind/jokul/commit/7390eddfadd941a0465267afba35a81ca446f438)), closes [#545](https://github.com/fremtind/jokul/issues/545)
-   **core:** make a component of screenreader only ([5a4a038](https://github.com/fremtind/jokul/commit/5a4a038b9fb5d61cfc46d804326386670cb3990e))

## 1.0.0 (2019-12-03)

### Bug Fixes

-   fix implementation of SupportLabel ([71ba3df](https://github.com/fremtind/jokul/commit/71ba3dfb1b49e2d59c96323ad71bc54d75e0e126))
-   tweak font weights ([be3e1b7](https://github.com/fremtind/jokul/commit/be3e1b7a8f9b6e15b8c77de85adaba58cd0b4800))
-   **core:** add back sr-only class to core.scss ([a126e68](https://github.com/fremtind/jokul/commit/a126e68e5229e622c808ea24fc9c808f823ed10e))
-   **core:** add missing import in headings.scss ([97dd0d9](https://github.com/fremtind/jokul/commit/97dd0d9de3cb3f193eed8716638471571dcb90ee))
-   **core:** remove rule with side effects from normalize ([1430118](https://github.com/fremtind/jokul/commit/1430118a72a25dd9f749731930efb1b3c6cb3dfc))

### Features

-   add compact mode mixin ([ca9fa96](https://github.com/fremtind/jokul/commit/ca9fa96b7de2be50646af0cb444206c3eebcfc4a))
-   **core:** add compact mode to paragraphs and headings ([7533c45](https://github.com/fremtind/jokul/commit/7533c458b95d010a15950d4dbc5772d2cc93a28d))
-   **core:** add global compact version to labels ([63f5f9f](https://github.com/fremtind/jokul/commit/63f5f9f04836978fecb015c974b23703dbd969a4))
-   **core:** move fieldset styling to reset.css ([9046a65](https://github.com/fremtind/jokul/commit/9046a65a131ff70c79411778d11aa6e66c22d8de))
-   **core:** specify font fallback strategy ([94816d1](https://github.com/fremtind/jokul/commit/94816d1d9fa2e123f0931e18345d182ed4727cf4)), closes [#464](https://github.com/fremtind/jokul/issues/464)
-   **progressbar:** add progressbar ([1ad8754](https://github.com/fremtind/jokul/commit/1ad8754a15e414ff017bce8d829472dfc9a7d01c))
-   **text-field:** implement in line version of TextField ([5999a32](https://github.com/fremtind/jokul/commit/5999a3229f4c752e60f346ee1051f395505d188e))
-   add energetic (75ms) timing ([c48e4a3](https://github.com/fremtind/jokul/commit/c48e4a315fc53be287596e0e9af7157ee578f3c3))
-   use new font in core and portal ([f07f959](https://github.com/fremtind/jokul/commit/f07f9599aa1ec402a332563cf1178aeef7fcc17c))

## 0.11.0 (2019-10-09)

### Bug Fixes

-   **core:** add and use wcag-compliant error/focus colors ([c714b45](https://github.com/fremtind/jokul/commit/c714b45))

### Features

-   **core:** add a screenreader-only mixin ([e8e20b4](https://github.com/fremtind/jokul/commit/e8e20b4))
-   **core:** add pure white as a supporting color ([1558fa9](https://github.com/fremtind/jokul/commit/1558fa9))
-   **core:** add reset.scss file ([4c50296](https://github.com/fremtind/jokul/commit/4c50296))
-   **core:** tweak small font size for legibility ([0d70dc9](https://github.com/fremtind/jokul/commit/0d70dc9))
-   **datepicker:** implement new version and styles ([6f1b3e9](https://github.com/fremtind/jokul/commit/6f1b3e9))
-   **datepicker:** make datepicker shorter until opened ([ef87993](https://github.com/fremtind/jokul/commit/ef87993))
-   **field-group:** remove Field component and update style of FieldGroup ([8a451ac](https://github.com/fremtind/jokul/commit/8a451ac))
-   **field-group:** update field group styling according to sketches ([69d94d8](https://github.com/fremtind/jokul/commit/69d94d8))
-   change name of label variants ([554749c](https://github.com/fremtind/jokul/commit/554749c))
-   extract label styles to core ([9fad287](https://github.com/fremtind/jokul/commit/9fad287))

## 0.10.0 (2019-09-23)

### Features

-   **jkl-core:** add class for content that is used by screen readers ([07e8170](https://github.com/fremtind/jokul/commit/07e8170))

## 0.9.0 (2019-08-30)

### Bug Fixes

-   **core:** adjust hover/focus animation for links ([6085638](https://github.com/fremtind/jokul/commit/6085638))
-   **core:** change rotation origin for chevron ([3ff682f](https://github.com/fremtind/jokul/commit/3ff682f))
-   **core:** fix correct font weight for H4 ([2ebd781](https://github.com/fremtind/jokul/commit/2ebd781))
-   **core:** fix correct line height and font size for support text ([0bd0a1e](https://github.com/fremtind/jokul/commit/0bd0a1e))

### Features

-   **core:** add temporary shade for placeholder text ([86f2aa7](https://github.com/fremtind/jokul/commit/86f2aa7))
-   **link:** updated link style ([8fe8671](https://github.com/fremtind/jokul/commit/8fe8671)), closes [#254](https://github.com/fremtind/jokul/issues/254)
-   **react-hooks,core:** move useClickOutside to react-hooks ([47626b7](https://github.com/fremtind/jokul/commit/47626b7))

## 0.8.0 (2019-08-02)

### Bug Fixes

-   **core:** better name for support text scss ([00e0907](https://github.com/fremtind/jokul/commit/00e0907))
-   **core:** fix help text spacing, error color, minor ios portal fix ([ae19bb7](https://github.com/fremtind/jokul/commit/ae19bb7))
-   **textfield:** better naming, fix spacing, add test ([c5e8e82](https://github.com/fremtind/jokul/commit/c5e8e82))

### Features

-   **core:** add atomic layout spacing classes ([7594f9d](https://github.com/fremtind/jokul/commit/7594f9d))
-   **firefox:** remove dotted line for good ([67187a6](https://github.com/fremtind/jokul/commit/67187a6))
-   **text-field:** add help and error text to field and area ([e18f117](https://github.com/fremtind/jokul/commit/e18f117)), closes [#41](https://github.com/fremtind/jokul/issues/41)

## 0.7.0 (2019-07-30)

### Bug Fixes

-   **core:** remove unused font sizes ([d81a26a](https://github.com/fremtind/jokul/commit/d81a26a))
-   **core:** ship font inline ([06b4d48](https://github.com/fremtind/jokul/commit/06b4d48))
-   **core:** update font-family in [@font-face](https://github.com/font-face) to name used in styles ([01fcb2f](https://github.com/fremtind/jokul/commit/01fcb2f))
-   **css:** add zindexscale and shaddow ([87e526f](https://github.com/fremtind/jokul/commit/87e526f))
-   **font:** add regular font ([b5aaf4b](https://github.com/fremtind/jokul/commit/b5aaf4b))
-   **tablistener:** only listen to Tab key, not arrows ([27ba820](https://github.com/fremtind/jokul/commit/27ba820))

### Features

-   **hambuger:** add clickoutside option ([607403f](https://github.com/fremtind/jokul/commit/607403f))
-   **hamburger:** add animated hamburger to us as main menu ([79eb9f2](https://github.com/fremtind/jokul/commit/79eb9f2))
-   **motion:** add motion to core ([bbd7cb3](https://github.com/fremtind/jokul/commit/bbd7cb3)), closes [#35](https://github.com/fremtind/jokul/issues/35)
-   **typography:** add style and component for links ([9aeac8d](https://github.com/fremtind/jokul/commit/9aeac8d))

## 0.6.0 (2019-07-18)

### Bug Fixes

-   **build:** normalize react package.json ([6c29e08](https://github.com/fremtind/jokul/commit/6c29e08)), closes [#156](https://github.com/fremtind/jokul/issues/156)
-   **core:** remove dependency we no longer use, add to readme ([237b21b](https://github.com/fremtind/jokul/commit/237b21b))

### Features

-   **build:** add watch job for css, refactor gulp ([8adafd6](https://github.com/fremtind/jokul/commit/8adafd6))
-   **core:** add spacing after typographic elements ([6844eab](https://github.com/fremtind/jokul/commit/6844eab))

## 0.5.0 (2019-07-15)

### Bug Fixes

-   use correct syntax for importing sass index files ([46fa8f6](https://github.com/fremtind/jokul/commit/46fa8f6))
-   **build:** publish correct files for style pkgs ([a89d768](https://github.com/fremtind/jokul/commit/a89d768))

## 0.3.0 (2019-07-15)

### Bug Fixes

-   **build:** publish correct files from core and accordion ([0a929ee](https://github.com/fremtind/jokul/commit/0a929ee))
-   **core:** restore all.scss in core/variables ([16bc54e](https://github.com/fremtind/jokul/commit/16bc54e))

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

-   **normalize:** remove margins from paragraph and headings ([9e4544b](https://github.com/fremtind/jokul/commit/9e4544b))
-   fix build order on initial setup ([cf7481c](https://github.com/fremtind/jokul/commit/cf7481c))
-   **all:** fix formatting errors in html and scss files ([5e20a63](https://github.com/fremtind/jokul/commit/5e20a63))
-   **all:** remove css main files ([c9a4ca0](https://github.com/fremtind/jokul/commit/c9a4ca0))
-   **build:** fix deterministic build order ([78566ef](https://github.com/fremtind/jokul/commit/78566ef))
-   **core:** make rem-function return number instead of string ([2026fc5](https://github.com/fremtind/jokul/commit/2026fc5))
-   **core:** put back necessary PropTypes in example ([66bbfca](https://github.com/fremtind/jokul/commit/66bbfca))
-   **core:** rename variable and fix formatting ([852e72e](https://github.com/fremtind/jokul/commit/852e72e))
-   **core:** stop build from copying .ts files into build folder ([4a17085](https://github.com/fremtind/jokul/commit/4a17085))
-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))
-   **typescript:** clean up tsconfig, make sure everything is typechecked ([745a0fb](https://github.com/fremtind/jokul/commit/745a0fb))
-   **typography:** make font-size/line-height responsive ([edb236e](https://github.com/fremtind/jokul/commit/edb236e))

### Features

-   **core:** add build scripts for modules ([af72f54](https://github.com/fremtind/jokul/commit/af72f54))
-   **core:** add function for converting px to rem ([712b9b5](https://github.com/fremtind/jokul/commit/712b9b5))
-   **core:** add line heights and update font sizes ([980bf98](https://github.com/fremtind/jokul/commit/980bf98))
-   **core:** add ornaments mixins to core ([82aaf79](https://github.com/fremtind/jokul/commit/82aaf79))
-   **core:** implement font-face for better font handling ([03a6069](https://github.com/fremtind/jokul/commit/03a6069))
-   **typography:** add line heights to typography classes ([76df23d](https://github.com/fremtind/jokul/commit/76df23d))
-   **typography:** implement smallest text size as component ([4ef3fa0](https://github.com/fremtind/jokul/commit/4ef3fa0))
