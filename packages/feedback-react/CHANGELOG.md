# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [13.0.5](https://github.com/fremtind/jokul/compare/@fremtind/jkl-feedback-react@13.0.4...@fremtind/jkl-feedback-react@13.0.5) (2022-06-13)

### Bug Fixes

-   merk CSS og SCSS som side-effects ([dac2e2b](https://github.com/fremtind/jokul/commit/dac2e2b5f4d1b31485821bf6ad8ec4c7c2769cca))

### Performance Improvements

-   bruk tiny-glob for globbing av filer under bygg ([246952a](https://github.com/fremtind/jokul/commit/246952ae75afe20bcf0d007a0a068b76b114f9a6))

# [13.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-feedback-react@12.1.6...@fremtind/jkl-feedback-react@13.0.0) (2022-06-07)

### chore

-   fiks lintfeil ([4093d2a](https://github.com/fremtind/jokul/commit/4093d2a2ae7bbe0d30de882b9f5d144e8e77cede))

### BREAKING CHANGES

-   Pakken avhenger av en breaking versjon av core

# [12.1.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-feedback-react@12.0.56...@fremtind/jkl-feedback-react@12.1.0) (2022-05-06)

### Features

-   add maxLength to Feedback component ([7cb24fb](https://github.com/fremtind/jokul/commit/7cb24fbaf59e5cf2ee0c8e41e7161a7ae364f548)), closes [#2861](https://github.com/fremtind/jokul/issues/2861)

## 12.0.41 (2022-03-01)

### Bug Fixes

-   child keys on SmileyQuestion ([20d45bf](https://github.com/fremtind/jokul/commit/20d45bfb41219f0ba49f69f0c5922a709c7557c7))

## [12.0.30](https://github.com/fremtind/jokul/compare/@fremtind/jkl-feedback-react@12.0.29...@fremtind/jkl-feedback-react@12.0.30) (2022-02-07)

### Bug Fixes

-   fjern unødvendig avhengighet ([ead65c2](https://github.com/fremtind/jokul/commit/ead65c299dd29ef4ddc630c5b503d601f190511e))

## 12.0.4 (2021-12-01)

### Bug Fixes

-   legg til manglende helpLabel-type ([07e588d](https://github.com/fremtind/jokul/commit/07e588d964de3599b2d3d6c45c0477656a1f2f07))

## 12.0.0 (2021-11-26)

### Features

-   fjern SliderQuestion og erstatt preset med smileys ([a39891e](https://github.com/fremtind/jokul/commit/a39891e4b993fd4a65660ecb9dfb7c7b1dd4ba38))
-   legg til spørsmålstype med smileys ([f176c48](https://github.com/fremtind/jokul/commit/f176c48fb8f20b71b623919d75934082eead8e70))
-   **smileys:** juster utseende og mobilvisning ([f7799d3](https://github.com/fremtind/jokul/commit/f7799d3bf5c907dfc0efe7cdae3edd5ecc8b623a))

### BREAKING CHANGES

-   Typen "slider" kan ikke lenger benyttes når man spesifiserer spørsmål i Feedback. Typen "smiley" kan
    benyttes med samme verdier uten ytterligere endringer i API.

## 11.0.0 (2021-11-09)

### chore

-   oppdater bruken av radioknapper ([de30c8b](https://github.com/fremtind/jokul/commit/de30c8b1e577a8f68c4dda6356eb6a4f4e720c4d))

### BREAKING CHANGES

-   Avhenger av jkl-radio-button med breaking change

## 10.0.0 (2021-10-28)

### Code Refactoring

-   renamed *Message to *MessageBox where it is dependent on ([5effa3d](https://github.com/fremtind/jokul/commit/5effa3d9ed6a4eaaeba5d126306ea8320ec59f31))

### BREAKING CHANGES

-   Depends on package with breaking change

## 9.0.0 (2021-10-21)

### chore

-   updates dependencies ([b975200](https://github.com/fremtind/jokul/commit/b97520045c02e4bcb44ebde159c60a7dff7f01d6))

### BREAKING CHANGES

-   depends on jkl-core v8 with breaking changes

## 8.0.7 (2021-09-30)

### Bug Fixes

-   sett rekkefølge for å unnga race condition ([b5f35a0](https://github.com/fremtind/jokul/commit/b5f35a035145eddf0dc87604bee31a51b2b8e77b)), closes [#2301](https://github.com/fremtind/jokul/issues/2301)

## 8.0.4 (2021-09-22)

### Bug Fixes

-   change duplicate default success message ([6f498eb](https://github.com/fremtind/jokul/commit/6f498eb9f5e9683076353b26a16ca962bdfbe3b1))

## 8.0.3 (2021-09-15)

### Bug Fixes

-   add missing dependencies ([4f0b7ae](https://github.com/fremtind/jokul/commit/4f0b7ae6d0e33b19c74380aab7b4d27df229103a))

## 8.0.2 (2021-09-15)

### Bug Fixes

-   add back className prop to Feedback ([bc24e54](https://github.com/fremtind/jokul/commit/bc24e5412caacdaefe5b35d99ceb36db63b78c93))

## 8.0.1 (2021-09-15)

### Bug Fixes

-   **radio-question:** inline when less than three options ([4273c46](https://github.com/fremtind/jokul/commit/4273c46181f0ccedece3303e71a416beb8355d4c))

## 8.0.0 (2021-09-15)

### Features

-   add success message after submitting contact info ([82c7783](https://github.com/fremtind/jokul/commit/82c7783c7359e17b6488e903797034c56a62ac9d))
-   new feedback component with followup questions ([998eb30](https://github.com/fremtind/jokul/commit/998eb3045270d42b3bc97c143bdae12714d1b6d0))
-   provide better experience for keyboard nav and screen reader ([20a8a98](https://github.com/fremtind/jokul/commit/20a8a98c75fa0bb6dc69641714e2ab440774213d))

### BREAKING CHANGES

-   Partially new API for the component

## 7.0.8 (2021-09-03)

### Bug Fixes

-   default variant should be small ([ce1c05b](https://github.com/fremtind/jokul/commit/ce1c05bd9344f03b41ea23068d0f66e20714d134))

## 7.0.6 (2021-08-30)

### Bug Fixes

-   improve language ([99155b4](https://github.com/fremtind/jokul/commit/99155b46c3fdd89c5c22aa532f475ebfff4f0ef4))

## 7.0.0 (2021-07-09)

### Features

-   use new typographic scale ([8a2a691](https://github.com/fremtind/jokul/commit/8a2a691122a0c5a809429b1bdc2a4fea9eb8c258))

### BREAKING CHANGES

-   Depends on jkl-core version with breaking changes

## 6.0.1 (2021-07-06)

### Bug Fixes

-   fix type(os) ([79be4e7](https://github.com/fremtind/jokul/commit/79be4e7b27541f3ae7ba1db72d69183dc42331c2))

## 6.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 5.1.4 (2021-07-02)

### Bug Fixes

-   **feedback:** fix a bug causing submitted feedback to be submitted again ([e78bf30](https://github.com/fremtind/jokul/commit/e78bf3003c96d9efb268bdc282fbad784ce35cb2))

## 5.1.0 (2021-06-29)

### Features

-   **feedback-react:** add support for submit when unmounting the component ([2a85ee9](https://github.com/fremtind/jokul/commit/2a85ee9b5e1b1a8035a321007566d0026d562f1d))

## 5.0.0 (2021-06-07)

### Features

-   upgrade dependency jkl-core to v5.0.0 ([c3dc8dc](https://github.com/fremtind/jokul/commit/c3dc8dcbd3cba99502f1124cbe1dcaa688177f55))

### BREAKING CHANGES

-   Upgrades dependency jkl-core to v5.0.0, introducing breaking changes to color variables

## 4.0.0 (2021-05-20)

### Bug Fixes

-   **@fremtind/jkl-feedback-react:** fixes a11y-issues on the feedback module ([1f11a68](https://github.com/fremtind/jokul/commit/1f11a68f69dc9e66c84f67fd7e7b2dbc99710f20)), closes [#1749](https://github.com/fremtind/jokul/issues/1749)

### BREAKING CHANGES

-   **@fremtind/jkl-feedback-react:** The prop "description" is now required | The prop feedbackOptions has a new interface

## 3.0.0 (2021-03-12)

### Features

-   **feedback:** allow customizable feedback prompt ([97562df](https://github.com/fremtind/jokul/commit/97562dffe631af093be15b58ac30e4cdcc17eca3))

### BREAKING CHANGES

-   **feedback:** changed HTML structure

## 2.0.2 (2021-02-12)

### Bug Fixes

-   add react 17 types as valid peerdep ([a074c34](https://github.com/fremtind/jokul/commit/a074c34dcece089ad6b4c581b8c920c8bdd4f1e0))

## 2.0.0 (2021-02-08)

### Features

-   **feedback:** added wrapper, add test ([092e7b6](https://github.com/fremtind/jokul/commit/092e7b67b118b5da1a841857180d9d2d743d52ac))

### BREAKING CHANGES

-   **feedback:** ADDED WRAPPER

## 1.4.0 (2021-02-02)

### Features

-   **feedback:** add custom result option ([11baba1](https://github.com/fremtind/jokul/commit/11baba177b00fc782568bec090842e541f26d375))

## 1.3.0 (2020-12-15)

### Features

-   display types in portal ([5c62a16](https://github.com/fremtind/jokul/commit/5c62a161c278d3a5a136741aea8dcf9b62338bda))

## 1.2.0 (2020-11-25)

### Features

-   update to react 17 ([4639058](https://github.com/fremtind/jokul/commit/4639058067eaa9be222825f8ac4f495a1e74cc0f))

## 1.1.2 (2020-10-27)

### Bug Fixes

-   export payload type ([0b56868](https://github.com/fremtind/jokul/commit/0b56868a8f60e1bc67ed4eb0477d341625dfd757))

## 1.1.0 (2020-10-27)

### Bug Fixes

-   **feedback:** use non semantic element ([9e5c51b](https://github.com/fremtind/jokul/commit/9e5c51b464afb5f52e700cb14d6fecb98a9d5059))

### Features

-   **feedback:** initial feedback component ([9757a73](https://github.com/fremtind/jokul/commit/9757a730b5686ba2a437f3163411835669443a64)), closes [#1490](https://github.com/fremtind/jokul/issues/1490)
