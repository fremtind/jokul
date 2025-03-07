# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 6.0.1 (2024-12-09)

### Bug Fixes

- fixes an issue with nested density-layouts ([235fd1f](https://github.com/fremtind/jokul/commit/235fd1fe755376c0e49c3a02b3e6585050258012))

# [6.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-tag@5.1.10...@fremtind/jkl-tag@6.0.0) (2024-11-20)

### Code Refactoring

- fjern dismissableAction property ([c6f22d8](https://github.com/fremtind/jokul/commit/c6f22d847c80d3e41929217573dc084d40221e68)), closes [#4288](https://github.com/fremtind/jokul/issues/4288)

### BREAKING CHANGES

- Fjernet den påkrevde dismissableAction-propen fra Tag-komponenten.

# 5.1.0 (2024-09-09)

### Features

- bruk semantiske fargevariabler ([e967724](https://github.com/fremtind/jokul/commit/e967724979b074f62aa92a8396292e17b51a4896))

# 5.0.0 (2023-07-07)

### chore

- oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### Code Refactoring

- migrer vekk fra deprecated tilde-importer i Sass ([7ef2cf7](https://github.com/fremtind/jokul/commit/7ef2cf7a510122c69b2c5658c402f3dd9f5322f7)), closes [#3418](https://github.com/fremtind/jokul/issues/3418)

### BREAKING CHANGES

- Avhenger av ny majorversjon av core
- Tilde-prefikset er fjernet i all Sass-kode. Avhengig av oppsettet ditt kan det hende du
ikke trenger gjøre noe. Om bygget ditt brekker, konfigurer Sass sin loadPaths så den
inkluderer node_modules.

## 4.0.4 (2023-03-21)

### Bug Fixes

- sett charset i CSS-filene som genereres ([7346cb8](https://github.com/fremtind/jokul/commit/7346cb8644dd4b99bf0ae4d11c78a967b7b01618)), closes [#3467](https://github.com/fremtind/jokul/issues/3467)

## [4.0.3](https://github.com/fremtind/jokul/compare/@fremtind/jkl-tag@4.0.2...@fremtind/jkl-tag@4.0.3) (2023-02-23)

### Bug Fixes

-   sync spacing med Figma ([d0cb08e](https://github.com/fremtind/jokul/commit/d0cb08e9bcbaa9146c29d63d11f911d69858493a))

# 4.0.0 (2023-01-30)

### Bug Fixes

-   juster padding og spacing i tag for nytt ikon ([e557691](https://github.com/fremtind/jokul/commit/e5576913baee9a9f33e7f00cf5a082b73429b1b6))

### Features

-   bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))

### BREAKING CHANGES

-   Avhenger av en versjon av jkl-core med breaking changes

## 3.0.8 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

# 3.0.0 (2022-09-08)

### Bug Fixes

-   faktisk bruk CSS-variabelen ([f0fcbf8](https://github.com/fremtind/jokul/commit/f0fcbf8d10e8aa0da42c5f2d22658d028a0bffb2))

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))
-   nytt kompaktdesign for Tag ([e2b0165](https://github.com/fremtind/jokul/commit/e2b01650b6349fa463d852f121e4b2dcd3c71411))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"

## [2.1.3](https://github.com/fremtind/jokul/compare/@fremtind/jkl-tag@2.1.2...@fremtind/jkl-tag@2.1.3) (2022-07-29)

### Bug Fixes

-   fjern dobbel outline fra dismiss-knapp og juster tykkelse ([2130e27](https://github.com/fremtind/jokul/commit/2130e27ae80a0cc2d68a080be620e7444ee175db))
-   sett SVG-fallback på riktig element ([897b49b](https://github.com/fremtind/jokul/commit/897b49b9b907e19b32985defd2a4fef0a1ed1097))

# 2.1.0 (2022-07-26)

### Bug Fixes

-   use margin in stead of class to pull icon to the right ([a4b8046](https://github.com/fremtind/jokul/commit/a4b80466aea5b763ce701876e247636165973d3f))

### Features

-   add support for dismissable tag ([bf26e6b](https://github.com/fremtind/jokul/commit/bf26e6bde013bbd927d72ba1806d68b6e813f83b))

# [2.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-tag@1.1.23...@fremtind/jkl-tag@2.0.0) (2022-06-07)

### Code Refactoring

-   sweep for å rydde i Sass-variabler ([fa1b094](https://github.com/fremtind/jokul/commit/fa1b094189c2958d5407334ae063d36461229b11))

### Features

-   legg til en index-fil for Sass ([c4f8d0c](https://github.com/fremtind/jokul/commit/c4f8d0cd31bcab0706a49be1bdf0214fbbbbf646))

### BREAKING CHANGES

-   Sass-variabler i komponentpakkene er gjort private

## [1.1.20](https://github.com/fremtind/jokul/compare/@fremtind/jkl-tag@1.1.19...@fremtind/jkl-tag@1.1.20) (2022-04-19)

### Bug Fixes

-   tag i forced-colors ([d67839d](https://github.com/fremtind/jokul/commit/d67839d13b5966c17241126c5f943bc0c7eeed15))

## 1.1.0 (2021-11-02)

### Features

-   ny tag-komponent ([394bb5e](https://github.com/fremtind/jokul/commit/394bb5e6626056291894ab41cf642f68571bb6a3))
