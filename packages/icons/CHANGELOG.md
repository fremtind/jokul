# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 9.0.0 (2023-07-07)

### chore

- oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### Code Refactoring

- migrer vekk fra deprecated tilde-importer i Sass ([7ef2cf7](https://github.com/fremtind/jokul/commit/7ef2cf7a510122c69b2c5658c402f3dd9f5322f7)), closes [#3418](https://github.com/fremtind/jokul/issues/3418)

### BREAKING CHANGES

- Avhenger av ny majorversjon av core
- Tilde-prefikset er fjernet i all Sass-kode. Avhengig av oppsettet ditt kan det hende du
ikke trenger gjøre noe. Om bygget ditt brekker, konfigurer Sass sin loadPaths så den
inkluderer node_modules.

## [8.0.3](https://github.com/fremtind/jokul/compare/@fremtind/jkl-icons@8.0.2...@fremtind/jkl-icons@8.0.3) (2023-06-23)

### Bug Fixes

- gjenopprett animasjon av PlusRemoveAnimated ([e6c288a](https://github.com/fremtind/jokul/commit/e6c288ada0d56df14e46950059adadc475cb471a)), closes [#3581](https://github.com/fremtind/jokul/issues/3581)

# [8.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-icons@7.0.4...@fremtind/jkl-icons@8.0.0) (2023-05-04)

### Bug Fixes

- bruk regular-ikon med headings også i compact ([a7ff6c6](https://github.com/fremtind/jokul/commit/a7ff6c6d0702c0597a9a8fe91bfc65a888ef231c))
- gjør ikoner inline som de var ([6ed38a7](https://github.com/fremtind/jokul/commit/6ed38a7726446d0e42c32f7ae4feb9c6c2f17312))
- rett opp display i ikoner, oppførsel i supportlabel ([37c3d2f](https://github.com/fremtind/jokul/commit/37c3d2fbf3503ad8ad5aa9944f8136e1aff64248))

### Features

- muliggjør styring av ikon-SVG gjennom CSS ([d83ed97](https://github.com/fremtind/jokul/commit/d83ed9760a6421189f35bcdb7fb52e3aa3aec8a6))

### BREAKING CHANGES

- Forventer ny struktur på ikonkomponent der hver SVG rendres i en div med visse klasser, for så å
skjules med CSS. Se IconFactory.tsx

## 7.0.3 (2023-03-21)

### Bug Fixes

- sett charset i CSS-filene som genereres ([7346cb8](https://github.com/fremtind/jokul/commit/7346cb8644dd4b99bf0ae4d11c78a967b7b01618)), closes [#3467](https://github.com/fremtind/jokul/issues/3467)

# 7.0.0 (2023-01-30)

### Bug Fixes

- fiks feil posisjonering av noen animerte ikoner ([ff118fd](https://github.com/fremtind/jokul/commit/ff118fd6fc5ef3e426902f6757e72ee614d5809a))
- fixup animerte ikoners CSS ([08ec332](https://github.com/fremtind/jokul/commit/08ec3323d6c1b8f1f5ef48a6d8d35cfceaa29553))
- fjern ubrukt fargevariabel ([09ac0da](https://github.com/fremtind/jokul/commit/09ac0da26350d7319d1c3a727d548339226b6199))
- fjern unødvendig høydeoverstyring ([b302f27](https://github.com/fremtind/jokul/commit/b302f27e299cc06822f72b95d4d50e7fb172b0e9))
- gjør rotasjonen litt mer tydelig ([591e8c1](https://github.com/fremtind/jokul/commit/591e8c1524d8c8c18ad33022937a45919a1df753))
- sikre riktig visning av animerte piler ([6a486dc](https://github.com/fremtind/jokul/commit/6a486dcaf0978ac0f86ffe3b1e1131d5c465eafd))

### chore

- slett animert hamburger-til-close ([ce13543](https://github.com/fremtind/jokul/commit/ce13543fcb7334c1c345dbfb9faf0c19085633ec))

### Code Refactoring

- flytt CSSen for ikoner til ikonpakka ([02e7945](https://github.com/fremtind/jokul/commit/02e7945f5a23a5b7e13f1718719f8547c8f7a5a7))

### Features

- bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))
- nytt ikon for kopiering ([c4507ab](https://github.com/fremtind/jokul/commit/c4507abef05030eb0b0783c8668b8fb5f6708cd7))

### BREAKING CHANGES

- Avhenger av en versjon av jkl-core med breaking changes
- Animert hamburger-til-lukk er fjernet. Bruk ContentToggle om du ønsker beholde den samme effekten.
- animated-icons.css og animated-icons.min.css bygges ikke separat lenger. Endre importer til
icons.css eller icons.min.css

## 6.0.8 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

# [5.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-icons@4.0.23...@fremtind/jkl-icons@5.0.0) (2022-06-07)

### Code Refactoring

-   oppdater til nyeste core ([1db381f](https://github.com/fremtind/jokul/commit/1db381fdc0d3f1c35818d2feec49977331cd2fad))

### Features

-   legg til en index-fil for Sass ([c4f8d0c](https://github.com/fremtind/jokul/commit/c4f8d0cd31bcab0706a49be1bdf0214fbbbbf646))

### BREAKING CHANGES

-   Avhenger av ny majorversjon av core

## 4.0.10 (2022-02-07)

### Bug Fixes

-   manuell delinting sans descending specificity ([20de1c8](https://github.com/fremtind/jokul/commit/20de1c8811596b054867352177225fd197c70797))

## 4.0.0 (2021-10-21)

### chore

-   updates dependencies ([b975200](https://github.com/fremtind/jokul/commit/b97520045c02e4bcb44ebde159c60a7dff7f01d6))

### BREAKING CHANGES

-   depends on jkl-core v8 with breaking changes

## 3.0.0 (2021-07-09)

### Documentation

-   use new typographic scale in examples ([b442f59](https://github.com/fremtind/jokul/commit/b442f59192d257741967156b12c468a8b734fbda))

### BREAKING CHANGES

-   Depends on jkl-core version with breaking changes

## 2.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 1.2.0 (2021-03-25)

### Features

-   **icons:** add title and desc as props ([3ed96e6](https://github.com/fremtind/jokul/commit/3ed96e65072b65bc18cd17011c0dbed590a3b35e)), closes [#1811](https://github.com/fremtind/jokul/issues/1811)

## 1.1.0 (2020-08-13)

### Features

-   add icons package ([24c9748](https://github.com/fremtind/jokul/commit/24c974803b7d705d8a22cec719dbf3873373781f))
