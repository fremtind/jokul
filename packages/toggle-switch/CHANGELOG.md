# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 10.0.10 (2022-12-06)

### Bug Fixes

- reduser z-index for label til det minste nødvendige ([d344ffa](https://github.com/fremtind/jokul/commit/d344ffabaa49da706db3689820d0d89e144f0b38))

## 10.0.8 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

# 10.0.0 (2022-09-08)

### Bug Fixes

-   margin på medium pluss skjerm ([f04b17e](https://github.com/fremtind/jokul/commit/f04b17eff161b3ab18f2713f9e39e8c7a6e3d9a1))

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))
-   nytt kompaktdesign for ToggleSwitch og ToggleSlider ([69c1296](https://github.com/fremtind/jokul/commit/69c1296d6ebbe3658d2715c3f7845fc5e5bd9a56))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"

# [9.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-toggle-switch@8.0.1...@fremtind/jkl-toggle-switch@9.0.0) (2022-06-07)

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

# [8.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-toggle-switch@7.0.12...@fremtind/jkl-toggle-switch@8.0.0) (2022-05-13)

### Bug Fixes

-   fix cypress tests and reset snapshots ([c44e9e8](https://github.com/fremtind/jokul/commit/c44e9e83f1c0c4241ab08fd56dfab43165e65b57))

### Features

-   semantic refactoring and new design ([8c255de](https://github.com/fremtind/jokul/commit/8c255dee301ff2f4dbf2f0cde288fd8562c20e80)), closes [#2037](https://github.com/fremtind/jokul/issues/2037) [#2823](https://github.com/fremtind/jokul/issues/2823)

### BREAKING CHANGES

-   -   removed prop screenReaderLabel
-   removed prop screenREaderSelectedLabel

## [7.0.10](https://github.com/fremtind/jokul/compare/@fremtind/jkl-toggle-switch@7.0.9...@fremtind/jkl-toggle-switch@7.0.10) (2022-04-19)

### Bug Fixes

-   toggle lint ([58666ea](https://github.com/fremtind/jokul/commit/58666ea02cc0b257d4dc9ca1bc7f88af368f0c73))
-   toggles i forced-color ([2b3ca54](https://github.com/fremtind/jokul/commit/2b3ca54b859c427124fbe49148651aab9cfca6b7))

# 7.0.0 (2022-02-07)

### Bug Fixes

-   fjern inverted-prop ([de5f8b8](https://github.com/fremtind/jokul/commit/de5f8b83ae8f025826f4c56d3aeb5e081dea66cc)), closes [#2646](https://github.com/fremtind/jokul/issues/2646)
-   manuell delinting sans descending specificity ([20de1c8](https://github.com/fremtind/jokul/commit/20de1c8811596b054867352177225fd197c70797))
-   rett syntaksfeil etter autofiks ([adf687d](https://github.com/fremtind/jokul/commit/adf687d4bd954e1ba9c20139f6f4082d091c40ed))

### BREAKING CHANGES

-   Fjernet `inverted`-prop. Bruk `data-theme="dark"` om du trenger overstyre temaet.

## 6.0.0 (2021-10-21)

### Features

-   use new spacing scale ([5694495](https://github.com/fremtind/jokul/commit/5694495f56d3c1f0e675433b35cfb0e693b93a82)), closes [#2382](https://github.com/fremtind/jokul/issues/2382)

### BREAKING CHANGES

-   new spacing scale: see migration guide for jkl-core

## 5.0.0 (2021-07-09)

### Features

-   use new typographic scale ([0edcff9](https://github.com/fremtind/jokul/commit/0edcff9e671ab7a693cdbbefb2110f72b5decc7d))

### BREAKING CHANGES

-   Depends on jkl-core-version with breaking changes

## 4.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### Features

-   **toggle:** add automatic dark mode ([250d96a](https://github.com/fremtind/jokul/commit/250d96aaf2afa9e073a02cfc186b0b9d2974fd74))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 3.0.1 (2021-06-25)

### Bug Fixes

-   **sass:** upgrade sass and stop using dep. syntax ([194d414](https://github.com/fremtind/jokul/commit/194d4145cbde712eb351ef6b41cefe6a47f40b5e))

## 3.0.0 (2021-06-07)

### Features

-   new colors ([9144947](https://github.com/fremtind/jokul/commit/9144947766c73fbe5eaac3372495006e3b89dec7))

### BREAKING CHANGES

-   all color variables are changed

## 2.2.7 (2021-01-25)

### Bug Fixes

-   **@fremtind/jkl-toggle-switch:** design adjustments on ToggleSlider ([d83426e](https://github.com/fremtind/jokul/commit/d83426eb23faf0c4dae0a49bf5689e7dc5fd0a64))

## 2.2.0 (2020-11-04)

### Features

-   **toggle:** add toggle slider ([a42fd6b](https://github.com/fremtind/jokul/commit/a42fd6be9b04bdafceb69153f9b25f56d71498a6)), closes [#1482](https://github.com/fremtind/jokul/issues/1482)

## 2.1.5 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 2.1.0 (2020-02-19)

### Features

-   export scss files with style pkgs ([edb6278](https://github.com/fremtind/jokul/commit/edb627838075d3d613ae78b6aae765c81067ba6a))

## 2.0.0 (2020-02-18)

### Bug Fixes

-   make use of new color token (changed name) ([f14c149](https://github.com/fremtind/jokul/commit/f14c149f779e65fe0775afde4421aef26be8ed1d))
-   make use of new core color tokens ([075f7b3](https://github.com/fremtind/jokul/commit/075f7b37920805bf780120247461d79c3d8c406e))
-   **toggle-switch:** ensure correct evt target when pressed ([76dd6f1](https://github.com/fremtind/jokul/commit/76dd6f1aa05251a062c39f61c1132b2b029e3040))
-   **toggle-switch:** use new color variable for white color ([17919b6](https://github.com/fremtind/jokul/commit/17919b6c614b576f3c9407becf92d61e148aae1e))
-   use new text-style mixins ([2873a57](https://github.com/fremtind/jokul/commit/2873a57f4570ddb87a7390a773433d26a9fde4ac))

### Features

-   **toggle-switch:** change toggle switch to button element (from input) ([2e9b340](https://github.com/fremtind/jokul/commit/2e9b3406f5bfbaa4233a3f63aa14bad017317efb))

### BREAKING CHANGES

-   **toggle-switch:** checked prop is replaced by pressed, onChange prop is replaced by onClick

## 1.1.0 (2020-01-16)

### Features

-   update components to use the new notification colors ([8bd78ff](https://github.com/fremtind/jokul/commit/8bd78ff371cf382c1c7fabfe1deab5e199e5750a))
-   update to new typography naming ([5c061d7](https://github.com/fremtind/jokul/commit/5c061d7b52529f83a16cf944db240984b67f5229))

## 1.0.1 (2019-12-17)

### Bug Fixes

-   **toggle-switch:** fix formatting of toggle switch label ([a561fac](https://github.com/fremtind/jokul/commit/a561fac49abcd3b00e16cbddce41237ebeb63f1d))

## 1.0.0 (2019-12-03)

### Bug Fixes

-   change white color to correspond to design sketches ([c7396bc](https://github.com/fremtind/jokul/commit/c7396bccc4ff138871c9e92a3d5d34988677fb3b))
-   fix component spacing for label ([07a34fc](https://github.com/fremtind/jokul/commit/07a34fc75be40054aa2cd1e0e61638f802bae2e5))
-   fix focus state ([ae4aa57](https://github.com/fremtind/jokul/commit/ae4aa5781cd751f3cc3cd00287a834a6986c5352))
-   fix implementation of SupportLabel ([71ba3df](https://github.com/fremtind/jokul/commit/71ba3dfb1b49e2d59c96323ad71bc54d75e0e126))

### Features

-   **toggle-switch-react:** add disabled state ([f4de742](https://github.com/fremtind/jokul/commit/f4de7420d298e4b88e6f47c2a03b5d9e43837e77)), closes [#450](https://github.com/fremtind/jokul/issues/450)
-   **toggle-switch-react:** add inverted variant ([aab1360](https://github.com/fremtind/jokul/commit/aab13606bf763d72bb6a79057068276c6099a878))

## 0.1.7 (2019-10-09)

### Bug Fixes

-   **core:** add and use wcag-compliant error/focus colors ([c714b45](https://github.com/fremtind/jokul/commit/c714b45))

## 0.1.3 (2019-08-30)

### Bug Fixes

-   **toggle-switch:** change the design of toggle switch ([d0f98a0](https://github.com/fremtind/jokul/commit/d0f98a0))
-   **toggleswitch:** update styling of toggler ([32c0b7f](https://github.com/fremtind/jokul/commit/32c0b7f))

## 0.1.0 (2019-07-30)

### Bug Fixes

-   **toggle:** add focus ring ([017d688](https://github.com/fremtind/jokul/commit/017d688))
-   **toggle:** clean up css ([58cac92](https://github.com/fremtind/jokul/commit/58cac92))
-   **toggle-switch:** fix position of switch, correct helper import ([3c528ce](https://github.com/fremtind/jokul/commit/3c528ce))
-   **toggle-switch:** small optimizations of style rules ([f8baa24](https://github.com/fremtind/jokul/commit/f8baa24))

### Features

-   **toggle:** add initial style for toggle ([19c72a9](https://github.com/fremtind/jokul/commit/19c72a9))
-   **toggle:** add react wrapper ([064ba2f](https://github.com/fremtind/jokul/commit/064ba2f))
