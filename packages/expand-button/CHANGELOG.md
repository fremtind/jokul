# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 7.1.0 (2024-09-09)

### Features

- bruk semantiske fargevariabler ([e967724](https://github.com/fremtind/jokul/commit/e967724979b074f62aa92a8396292e17b51a4896))

## 7.0.7 (2024-09-03)

### Bug Fixes

- bruk outline i stedet for box-shadow for fokusringer ([9aca3f7](https://github.com/fremtind/jokul/commit/9aca3f7505079d8afd5b57c36011a5c7637cee89))

## [7.0.6](https://github.com/fremtind/jokul/compare/@fremtind/jkl-expand-button@7.0.5...@fremtind/jkl-expand-button@7.0.6) (2024-09-02)

### Bug Fixes

- sass-order in components used by doc-utils ([16cbbde](https://github.com/fremtind/jokul/commit/16cbbde31bed04b26442b2f7fa89cd447d65e55a)), closes [#4017](https://github.com/fremtind/jokul/issues/4017)

## 7.0.3 (2024-08-19)

### Bug Fixes

- juster plassering av pil i expandbutton ([cc9d4bd](https://github.com/fremtind/jokul/commit/cc9d4bdac5f06d81e7b7edfcc31c448e631fca25))

# 7.0.0 (2023-12-08)

### Features

- make ExpandButton work before React has mounted clientside ([9ce4216](https://github.com/fremtind/jokul/commit/9ce42163c04cc9977cad3787b7e47710e454febb))

### BREAKING CHANGES

- Typing for the event in the onClick callback changed from React.MouseEvent<HTMLButtonElement> to
React.MouseEvent<HTMLElement>

# [6.2.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-expand-button@6.1.7...@fremtind/jkl-expand-button@6.2.0) (2023-11-24)

### Features

- support rendering ExpandButton as a summary element ([b3e1006](https://github.com/fremtind/jokul/commit/b3e1006c44f4690be30c7620a717c869a5dac3b4)), closes [#3751](https://github.com/fremtind/jokul/issues/3751)

# [6.1.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-expand-button@6.0.2...@fremtind/jkl-expand-button@6.1.0) (2023-09-14)

### Features

-   updated to match Figma changes ([f8fae4a](https://github.com/fremtind/jokul/commit/f8fae4aa20a339362689298217fa0e5770935107)), closes [#3665](https://github.com/fremtind/jokul/issues/3665)

# 6.0.0 (2023-07-07)

### chore

-   oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### Code Refactoring

-   migrer vekk fra deprecated tilde-importer i Sass ([7ef2cf7](https://github.com/fremtind/jokul/commit/7ef2cf7a510122c69b2c5658c402f3dd9f5322f7)), closes [#3418](https://github.com/fremtind/jokul/issues/3418)

### BREAKING CHANGES

-   Avhenger av ny majorversjon av core
-   Tilde-prefikset er fjernet i all Sass-kode. Avhengig av oppsettet ditt kan det hende du
    ikke trenger gjøre noe. Om bygget ditt brekker, konfigurer Sass sin loadPaths så den
    inkluderer node_modules.

## 5.0.3 (2023-05-22)

### Bug Fixes

-   øk specificity også for display ([7e68db1](https://github.com/fremtind/jokul/commit/7e68db1e85c0e234698c3ae264178084792ac668)), closes [#3551](https://github.com/fremtind/jokul/issues/3551)

## 5.0.1 (2023-03-21)

### Bug Fixes

-   sett charset i CSS-filene som genereres ([7346cb8](https://github.com/fremtind/jokul/commit/7346cb8644dd4b99bf0ae4d11c78a967b7b01618)), closes [#3467](https://github.com/fremtind/jokul/issues/3467)

# [5.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-expand-button@4.0.2...@fremtind/jkl-expand-button@5.0.0) (2023-02-28)

### Features

-   arv fontstørrelse fra omgivelsene i ExpandButton ([d1fd1da](https://github.com/fremtind/jokul/commit/d1fd1da2061f345cb912c941149faa660482f751))

### BREAKING CHANGES

-   CSS-variablene --jkl-expand-button-\* som styrer fontstørrelser og
    størrelser på ikonet er ikke lenger brukt. Størrelsen arves i
    stedet utenfra. Sett fontstørrelse på parent, eller med en egen
    klasse på samme element som jkl-expand-button.

# 4.0.0 (2023-01-30)

### Bug Fixes

-   juster plassering av pila etter nye SVGer ([7999757](https://github.com/fremtind/jokul/commit/7999757e987d79324f8bb1fc67cc0913466705df))

### Features

-   bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))

### BREAKING CHANGES

-   Avhenger av en versjon av jkl-core med breaking changes

## 3.0.11 (2022-12-20)

### Bug Fixes

-   legg til manglende selector for animerte ikon ([3a5fc4e](https://github.com/fremtind/jokul/commit/3a5fc4e970c96d2b853b1211b74fe98b85f5fe82)), closes [#3331](https://github.com/fremtind/jokul/issues/3331)

## 3.0.10 (2022-12-19)

### Bug Fixes

-   øk specificity for expand-button sin pil ([dff913f](https://github.com/fremtind/jokul/commit/dff913facc834ee92ac84726c8455f92bdadb67a)), closes [#3323](https://github.com/fremtind/jokul/issues/3323)

## 3.0.8 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

# 3.0.0 (2022-09-08)

### Bug Fixes

-   expand-button funker nå med data-compactlayout ([2ec2a16](https://github.com/fremtind/jokul/commit/2ec2a1637f1092e346fe02ccaa627f17c4439e1a))
-   expand-section legger seg ikke opp i tekststørrelse på innholdet ([d797b5e](https://github.com/fremtind/jokul/commit/d797b5ee995482a33a23ebf7491eb56997ea75bd))
-   finjuster vertikal align på ExpandButton ([203c2d3](https://github.com/fremtind/jokul/commit/203c2d3fb492f29c02b97b05ebefff687a3e1da5))

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))

### Reverts

-   Revert "refactor: bruk ContentToggle for pilene i ExpandButton" ([126894f](https://github.com/fremtind/jokul/commit/126894f1ca3f04c4e556292a1eaa587237dcec59))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"

# [2.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-expand-button@1.2.14...@fremtind/jkl-expand-button@2.0.0) (2022-06-07)

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

## [1.2.11](https://github.com/fremtind/jokul/compare/@fremtind/jkl-expand-button@1.2.10...@fremtind/jkl-expand-button@1.2.11) (2022-04-19)

### Bug Fixes

-   expandbutton i forced-colors ([e672db6](https://github.com/fremtind/jokul/commit/e672db64774d32f6709e9e3edcab580fd75dfe65))
-   skriv om svgmixin etter å ha sett Icons ([093e5ec](https://github.com/fremtind/jokul/commit/093e5ec2e71e5819e68ee2383463096185f9c1f3))

## [1.2.1](https://github.com/fremtind/jokul/compare/@fremtind/jkl-expand-button@1.2.0...@fremtind/jkl-expand-button@1.2.1) (2022-02-07)

### Bug Fixes

-   manuell delinting sans descending specificity ([20de1c8](https://github.com/fremtind/jokul/commit/20de1c8811596b054867352177225fd197c70797))

# [1.2.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-expand-button@1.1.3...@fremtind/jkl-expand-button@1.2.0) (2022-02-02)

### Features

-   add support for just having icon ([c69d42c](https://github.com/fremtind/jokul/commit/c69d42cb2d6d0f3088bec46d739a794f64dc95b8))
-   animate expandable table ([e2fb733](https://github.com/fremtind/jokul/commit/e2fb7335f63c1e8b6a575680296222f1517150a7))

## 1.1.0 (2021-12-21)

### Features

-   lanser expand-button ([c86d489](https://github.com/fremtind/jokul/commit/c86d4896f714271e407b85fc473eea7b8af549fb))
