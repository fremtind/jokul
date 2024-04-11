# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 2.2.6 (2024-04-11)

### Bug Fixes

- fjernet marked color fra selected options ([e2d5ec6](https://github.com/fremtind/jokul/commit/e2d5ec6e8c70003e0d252c8b23e7686b0f5fd221))

## 2.2.5 (2024-01-25)

### Bug Fixes

- endret størrelse på tag og høyde slik at komponenten matcher andre som text input, select osv ([ef2a849](https://github.com/fremtind/jokul/commit/ef2a849639cd88e54b6baf6a9c0a34abe42ff5d4))

## 2.2.4 (2023-12-11)

### Bug Fixes

- endret font weight på tags som har hasTagHover ([acafb5d](https://github.com/fremtind/jokul/commit/acafb5d07c269f7807d74cd6441225b4975dd43e))

# 2.2.0 (2023-11-07)

### Features

- la til styling ved markerte tags ([5509def](https://github.com/fremtind/jokul/commit/5509def412d9668c09a6bcfed2d97fd01440ffaa))
- removed function that removes all selected tags and added keys for removing selected tags inst ([8aca586](https://github.com/fremtind/jokul/commit/8aca586ecc75d6b383f09deaee72c43344776dfa))

# 2.1.0 (2023-09-13)

### Features

-   updated to match Figma changes ([43bad28](https://github.com/fremtind/jokul/commit/43bad2814d706bb9f78c95c514688d530af96f01)), closes [#3662](https://github.com/fremtind/jokul/issues/3662)

# 2.0.0 (2023-07-07)

### chore

-   oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### Code Refactoring

-   migrer vekk fra deprecated tilde-importer i Sass ([7ef2cf7](https://github.com/fremtind/jokul/commit/7ef2cf7a510122c69b2c5658c402f3dd9f5322f7)), closes [#3418](https://github.com/fremtind/jokul/issues/3418)

### BREAKING CHANGES

-   Avhenger av ny majorversjon av core
-   Tilde-prefikset er fjernet i all Sass-kode. Avhengig av oppsettet ditt kan det hende du
    ikke trenger gjøre noe. Om bygget ditt brekker, konfigurer Sass sin loadPaths så den
    inkluderer node_modules.

# 1.2.0 (2023-06-05)

### Features

-   legg til støtte for sekundærtekst ([220396c](https://github.com/fremtind/jokul/commit/220396c58530865704a857282ddd0c8dd4bbd092))

# [1.1.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-combobox@1.0.1...@fremtind/jkl-combobox@1.1.0) (2023-05-12)

### Features

-   la til muligheten for å rendre ut feilmelding dersom valget ikke finnes i listen ([8451903](https://github.com/fremtind/jokul/commit/84519031c5dd076602abaef44fae17a8699c7f4a))

## [1.0.2](https://github.com/fremtind/jokul/compare/@fremtind/jkl-combobox@1.0.1...@fremtind/jkl-combobox@1.0.2) (2023-05-11)

### Bug Fixes

-   la til z index på tags ([2addb66](https://github.com/fremtind/jokul/commit/2addb6608c18766eb14fc021bec49b9cf29eb53b))
-   skjul input felt visult når menyen er lukket ([9799b28](https://github.com/fremtind/jokul/commit/9799b28047d7056de104ae6ff0e1145d17744428))

## 1.0.1 (2023-05-11)

### Bug Fixes

-   endret notasjon på css klasser ([5b1fade](https://github.com/fremtind/jokul/commit/5b1faded363d4a91a9aa237f5d1eba75aaa25b88))
-   endret styling for input når meny er lukket slik at den fortsatt er klikkbar ([c276b92](https://github.com/fremtind/jokul/commit/c276b921cbdda647131d3175e9ad72f3a52445b0))
-   fjernet bakgrunnfarge på inputfelt, fant dark-mode bug på text color og gjorde hele elementet k ([6b95c14](https://github.com/fremtind/jokul/commit/6b95c14191fdb15783d69ed6f048f9d3f0149cbd))
-   gjorde om tweaking av input feltet. må tygge litt mer på den, men vil få ut bugfiks som denne p ([0667d62](https://github.com/fremtind/jokul/commit/0667d6248acc04539ffdb4c71e14a45a76043b31))
-   la til padding slik at tekst ikke kommer bak knappene ([dad5646](https://github.com/fremtind/jokul/commit/dad5646a6fa322a3b7733eff2941cc4f942d2e79))
-   skjul input felt dersom menyen er lukket og det er valgt én eller flere verdier ([ba5e9a7](https://github.com/fremtind/jokul/commit/ba5e9a7399a0bbbe23ba62f18a4da5fbbdee7859))

# 1.0.0 (2023-05-08)

### Bug Fixes

-   **combobox:** jobbet med tastaturnav ([e4fa07f](https://github.com/fremtind/jokul/commit/e4fa07fb24fd316542dfd8d3ff5ab10a23516ed3))
-   **combobox:** ryddet opp i kode ([e5a81d9](https://github.com/fremtind/jokul/commit/e5a81d9bb42acb4ea90f0c36f4176a102f0f0242))
-   **combobox:** work in progress ([0fa246e](https://github.com/fremtind/jokul/commit/0fa246ec8b24941415e60933c55d42fcc113fb21))
-   fjernet buggy hover-state ([6e97615](https://github.com/fremtind/jokul/commit/6e976157300a0a914d46482a067fa0fff4caf2b4))
-   onBlur skifter til riktig element ([2c7e718](https://github.com/fremtind/jokul/commit/2c7e7180777b88d0469bafdea506c2c584322f07))

### Features

-   **combobox:** justert styling, satt tag til compact ([f4e8f0f](https://github.com/fremtind/jokul/commit/f4e8f0f25658ce32b2c5df7044d234ff5b2cf8e4))
-   oppdaterte combobox-eksempel og endret noe styling ([2882f03](https://github.com/fremtind/jokul/commit/2882f03bc058dd07eec310c6a6d73f710ffd7727))
-   satt opp ny komponent – combobox ([6c71023](https://github.com/fremtind/jokul/commit/6c71023084243c736a0b89d36bcb1b08ddadb5ce))
