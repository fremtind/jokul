# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 11.2.0 (2025-02-12)

### Features

- supports setting cookie path for cookie-consent ([f501696](https://github.com/fremtind/jokul/commit/f5016965726b2db9e17cd825686e4a0aa7f7dbff))

# [11.1.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-cookie-consent-react@11.0.1...@fremtind/jkl-cookie-consent-react@11.1.0) (2025-01-23)

### Features

- adds a data attribute indicating if consent is open or not ([c9306ee](https://github.com/fremtind/jokul/commit/c9306ee03b83877b1c7b6f312b0300511ccc3d46))

# 11.0.0 (2025-01-20)

### Bug Fixes

- changes CookieConsent to single step ui ([bae8c78](https://github.com/fremtind/jokul/commit/bae8c781921366cb4f53fb4a9d575e3f42a342ae)), closes [#4403](https://github.com/fremtind/jokul/issues/4403)

### BREAKING CHANGES

- - The "blocking" prop now controls if the dialog is a modal or not
- Interfaces "Consent" and "ConsentComponentBaseProps" and
  "CookieConsentProviderProps" are changed to types
- Methods "openConsentModalWithSettings" and "openConsentModalWithDefaults"
  are replaced with "openConsentModal" when using the hook

## 10.2.11 (2024-09-13)

### Bug Fixes

- rettet feil ved lagring av samtykker ([5e99ca2](https://github.com/fremtind/jokul/commit/5e99ca281c464ae818de9e6ffd720812ceb3216c))

# 10.1.0 (2024-08-27)

### Features

-   domain of the cookie is now configurable ([f9fb6e2](https://github.com/fremtind/jokul/commit/f9fb6e23dcfff6dacca018c5c3e46e7b8738fed4)), closes [#3906](https://github.com/fremtind/jokul/issues/3906)
-   name of the cookie is now configurable ([debd977](https://github.com/fremtind/jokul/commit/debd9773f0e7401e3a781d4f654491a5034a1e21)), closes [#3906](https://github.com/fremtind/jokul/issues/3906)
-   useCookieConsent hook also returns openConsentModalWithDefaults ([7b45f0a](https://github.com/fremtind/jokul/commit/7b45f0a5bf732b9977c070532d67df1c43ae5021))

## 10.0.42 (2024-08-08)

### Bug Fixes

-   the button in the modal consent form submits again ([5e21a6f](https://github.com/fremtind/jokul/commit/5e21a6f02ffd90a06027f1755bb8f7cbedbe31ba))

## 10.0.6 (2023-09-05)

### Bug Fixes

-   deleted snapshot files ([5cad560](https://github.com/fremtind/jokul/commit/5cad560a9757a56715ed64f93265e56efffaa427))

# 10.0.0 (2023-07-07)

### chore

-   oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### BREAKING CHANGES

-   Avhenger av ny majorversjon av core

# 9.0.0 (2023-05-22)

### chore

-   ta i bruk modal i cookieconsent ([9fded60](https://github.com/fremtind/jokul/commit/9fded6028f55393eb71baa3ad8a82078e4a193fe))

### Features

-   modal ([e2ddf77](https://github.com/fremtind/jokul/commit/e2ddf77af01f9c7e0e662bf3c582fc470bb29d82))

### BREAKING CHANGES

-   Du må inkludere CSSen til `@fremtind/jkl-modal`.

# [8.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-cookie-consent-react@7.1.5...@fremtind/jkl-cookie-consent-react@8.0.0) (2023-01-30)

### Features

-   bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))

### BREAKING CHANGES

-   Avhenger av en versjon av jkl-core med breaking changes

# [7.1.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-cookie-consent-react@7.0.17...@fremtind/jkl-cookie-consent-react@7.1.0) (2022-12-05)

### Features

-   useCookieConsent returnerer nå samtykkene ([8876485](https://github.com/fremtind/jokul/commit/88764857a40b329c03663591328b5675eb15abc2))

## 7.0.17 (2022-12-01)

### Bug Fixes

-   forhindre undefined-feil på serversiden ([e78ae73](https://github.com/fremtind/jokul/commit/e78ae736af43d671a17707c0e18fbd8dbf3bef67))

## 7.0.15 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

## [7.0.12](https://github.com/fremtind/jokul/compare/@fremtind/jkl-cookie-consent-react@7.0.10...@fremtind/jkl-cookie-consent-react@7.0.12) (2022-11-11)

### Bug Fixes

-   legg til manglende dependencies internt mellom pakker ([761936f](https://github.com/fremtind/jokul/commit/761936ff2ecdf7338dcddb7f33e984f229cef48b)), closes [#3232](https://github.com/fremtind/jokul/issues/3232)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## [7.0.11](https://github.com/fremtind/jokul/compare/@fremtind/jkl-cookie-consent-react@7.0.10...@fremtind/jkl-cookie-consent-react@7.0.11) (2022-11-09)

### Bug Fixes

-   legg til manglende dependencies internt mellom pakker ([761936f](https://github.com/fremtind/jokul/commit/761936ff2ecdf7338dcddb7f33e984f229cef48b)), closes [#3232](https://github.com/fremtind/jokul/issues/3232)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## [6.0.5](https://github.com/fremtind/jokul/compare/@fremtind/jkl-cookie-consent-react@6.0.4...@fremtind/jkl-cookie-consent-react@6.0.5) (2022-06-13)

### Bug Fixes

-   merk CSS og SCSS som side-effects ([dac2e2b](https://github.com/fremtind/jokul/commit/dac2e2b5f4d1b31485821bf6ad8ec4c7c2769cca))

### Performance Improvements

-   bruk tiny-glob for globbing av filer under bygg ([246952a](https://github.com/fremtind/jokul/commit/246952ae75afe20bcf0d007a0a068b76b114f9a6))

## [6.0.3](https://github.com/fremtind/jokul/compare/@fremtind/jkl-cookie-consent-react@5.1.37...@fremtind/jkl-cookie-consent-react@6.0.3) (2022-06-08)

### Bug Fixes

-   legg på jkl-klassen siden vi rendres utenfor rotnoden ([78b6f4f](https://github.com/fremtind/jokul/commit/78b6f4f7769db5b27d429207a212da685fd1e407))

## [6.0.2](https://github.com/fremtind/jokul/compare/@fremtind/jkl-cookie-consent-react@6.0.1...@fremtind/jkl-cookie-consent-react@6.0.2) (2022-06-08)

### Bug Fixes

-   lukk modalen i teardown ([cbd408a](https://github.com/fremtind/jokul/commit/cbd408a9360454ce23149c0dcbf3499d9cd40c13))

# [6.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-cookie-consent-react@5.1.35...@fremtind/jkl-cookie-consent-react@6.0.0) (2022-06-07)

### chore

-   fiks lintfeil ([4093d2a](https://github.com/fremtind/jokul/commit/4093d2a2ae7bbe0d30de882b9f5d144e8e77cede))

### BREAKING CHANGES

-   Pakken avhenger av en breaking versjon av core

## 5.1.28 (2022-04-08)

### Bug Fixes

-   bruk et pattern som funker med hydrering ([8fc9b35](https://github.com/fremtind/jokul/commit/8fc9b35876fe89c56aab2eb5d3f28765181af8bb))

## 5.1.0 (2021-12-03)

### Features

-   eksporter typer ([7f0e50e](https://github.com/fremtind/jokul/commit/7f0e50ef491fc0ad9c3234cc12d992ebc6c8bce2))

## 5.0.0 (2021-10-21)

### chore

-   updates dependencies ([b975200](https://github.com/fremtind/jokul/commit/b97520045c02e4bcb44ebde159c60a7dff7f01d6))

### BREAKING CHANGES

-   depends on jkl-core v8 with breaking changes

## 4.0.0 (2021-07-09)

### Features

-   use new typographic scale ([4678e44](https://github.com/fremtind/jokul/commit/4678e4443e7009c5fcde2bfeb977d119aed6895f))

### BREAKING CHANGES

-   Depends on jkl-core version with breaking changes

## 3.0.3 (2021-07-07)

### Bug Fixes

-   **cookie-consent:** upgrade react-hook-form syntax ([9dc4003](https://github.com/fremtind/jokul/commit/9dc40034c233af8024d6f5e1467cc88d5fb69428))
-   upgrade react-hook-form syntax in cookie-consent ([8c998fc](https://github.com/fremtind/jokul/commit/8c998fce89979fd4864b5b46b27b957adb4e0e2a))

## 3.0.1 (2021-07-06)

### Bug Fixes

-   fix typo ([9895c82](https://github.com/fremtind/jokul/commit/9895c82e9383b3c2a24440727d920c9ab9408b96))
-   hurr durr sentence length ([fdd205d](https://github.com/fremtind/jokul/commit/fdd205d179a03765a37828a98b424ffff35f2742))

## 3.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 2.0.1 (2021-06-29)

### Bug Fixes

-   fix leaking styles from cookie consent ([7ff24c6](https://github.com/fremtind/jokul/commit/7ff24c6e54c3f41a6779fa450b8a84566eb58e60))
-   update tests with new cookie value ([173488e](https://github.com/fremtind/jokul/commit/173488ea4d25b5d2f37f1e6d227ee839b9e478f1))
-   use samesite=lax to fulfill new cookie requirements ([43f6048](https://github.com/fremtind/jokul/commit/43f6048d6d3e5f120a21b28c1670fc5d2864bf70))

## 2.0.0 (2021-06-29)

### Bug Fixes

-   gtfo snapshots ([13382f1](https://github.com/fremtind/jokul/commit/13382f192be2d64a8ed64097ea4ba74f1c80399b))
-   increase readability of code ([9faeaf0](https://github.com/fremtind/jokul/commit/9faeaf092a26d736b546c09e02e8cc175679af64))
-   uh, dunno why this was gone ([110068e](https://github.com/fremtind/jokul/commit/110068eff8d5ba6b3e2b329af97d9aabe39dd26f))
-   upgrade deps ([6459c61](https://github.com/fremtind/jokul/commit/6459c61d9a912a026734b7d66efe0cc8cfa91335))
-   **cookie-consent:** fix styling syntax ([31c1334](https://github.com/fremtind/jokul/commit/31c13346b627fc11578bc65f1e02a8663834bdab))
-   **cookie-consent:** fix typos ([f9cbda4](https://github.com/fremtind/jokul/commit/f9cbda4ad974d22e090cc9b6615600effdc0a8fc))
-   **cookie-consent:** use common type for onAccept callback ([ee03a5c](https://github.com/fremtind/jokul/commit/ee03a5c79320920a56a5042c5fa607afbe726590))

### Features

-   add test to CookieConsentContext ([1f30175](https://github.com/fremtind/jokul/commit/1f301751c9ed9ba4ccf9c01766dd2f826d9ad9e1))
-   simplify filtering out null-variables from the consent ([2c4d99d](https://github.com/fremtind/jokul/commit/2c4d99dc1575f85d0f019a9ff7b6146b473b648d))
-   simplify the consent requirement check ([35da487](https://github.com/fremtind/jokul/commit/35da48778eb338edbbe95834ab186111dc87e49a))
-   use common functions to convert consent value types ([44888a8](https://github.com/fremtind/jokul/commit/44888a8e63e125365818e01c46b1876d05e5a093))
-   **cookie-consent:** legg til integrasjonstest ([ff2bbca](https://github.com/fremtind/jokul/commit/ff2bbcad2ca1e054488221fbbbebec2d24b0d8ba))
-   **cookie-consent:** legg til ny cookie consent komponent ([0b98c81](https://github.com/fremtind/jokul/commit/0b98c81b85fff720aba27428ec673e07cf938b8f))
-   **cookie-consent:** oppdater styling for cookie-consent modal ([f72e625](https://github.com/fremtind/jokul/commit/f72e6250f6b6a596f2f631ebdc664a524ae70a66))

### BREAKING CHANGES

-   **cookie-consent:** ny cookie-consent komponent
