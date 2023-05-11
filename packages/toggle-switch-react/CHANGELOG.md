# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 12.0.0 (2023-05-11)

### Bug Fixes

- ikke la swipe styre disabled toggle ([9035b30](https://github.com/fremtind/jokul/commit/9035b309d4fdf9054cdbab1aed07bbefd92de28f))
- sørg for at ikonet vises riktig ([ad65034](https://github.com/fremtind/jokul/commit/ad650348d3d58ff0f28bcb2d4cb6911357f16bd3))

### Features

- fjern disabled state og gjør swipe handlers påkrevd ([4caccea](https://github.com/fremtind/jokul/commit/4cacceaeb8d221eae26dd5e1d27297532b7124d1))
- fjern hjelpetekst og lang vibrasjon ([f28e01e](https://github.com/fremtind/jokul/commit/f28e01e7851a0cded862adb170fda9ed5d754bd4))
- nytt API for ToggleSwitch ([aae86fa](https://github.com/fremtind/jokul/commit/aae86faa438ff17e184413dae565732e69456584))
- oppdater design på ToggleSwitch og legg til støtte for swipe ([e34582b](https://github.com/fremtind/jokul/commit/e34582ba56e06ca8168356f3e619b21f39ba07a3)), closes [#3458](https://github.com/fremtind/jokul/issues/3458)

### Reverts

- tilbakestill endrede navn i eksempel ([13f790a](https://github.com/fremtind/jokul/commit/13f790a93cc7d2e52fdc2b0ede8096bd0677a14a))

### BREAKING CHANGES

- onSwipe-funksjonene finnes ikke lenger, men onToggle trigges ved swipe
- Disabled state er ikke lenger støttet, og du må nå angi handlers for swipe høyre og venstre
- Hjelpetekst er fjernet, og komponenten krever import av jkl-icons-react

# [11.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-toggle-switch-react@10.0.16...@fremtind/jkl-toggle-switch-react@11.0.0) (2023-01-30)

### Features

- bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))

### BREAKING CHANGES

- Avhenger av en versjon av jkl-core med breaking changes

## 10.0.12 (2022-11-23)

### Bug Fixes

-   rett opp i feil rundt devDependencies ([936f310](https://github.com/fremtind/jokul/commit/936f310a585f3c7f7f11af816d5c54cd5a43dd43))

## 10.0.11 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

## 10.0.8 (2022-11-11)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## 10.0.7 (2022-11-09)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

# 10.0.0 (2022-09-08)

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))
-   nytt kompaktdesign for ToggleSwitch og ToggleSlider ([69c1296](https://github.com/fremtind/jokul/commit/69c1296d6ebbe3658d2715c3f7845fc5e5bd9a56))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"

## 9.0.5 (2022-07-21)

### Bug Fixes

-   legg til manglende aria-describedby i ToggleSwitch ([d8a46ba](https://github.com/fremtind/jokul/commit/d8a46babe2c8aa3d19e461be5b001dd182afe224))

## [9.0.4](https://github.com/fremtind/jokul/compare/@fremtind/jkl-toggle-switch-react@9.0.3...@fremtind/jkl-toggle-switch-react@9.0.4) (2022-06-13)

### Bug Fixes

-   merk CSS og SCSS som side-effects ([dac2e2b](https://github.com/fremtind/jokul/commit/dac2e2b5f4d1b31485821bf6ad8ec4c7c2769cca))

### Performance Improvements

-   bruk tiny-glob for globbing av filer under bygg ([246952a](https://github.com/fremtind/jokul/commit/246952ae75afe20bcf0d007a0a068b76b114f9a6))

# [9.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-toggle-switch-react@8.0.1...@fremtind/jkl-toggle-switch-react@9.0.0) (2022-06-07)

### Bug Fixes

-   demp eller fiks warnings ([ebe5873](https://github.com/fremtind/jokul/commit/ebe587339018a7375b9ee5eb942c59dc1b4866be))

### chore

-   fiks lintfeil ([4093d2a](https://github.com/fremtind/jokul/commit/4093d2a2ae7bbe0d30de882b9f5d144e8e77cede))

### BREAKING CHANGES

-   Pakken avhenger av en breaking versjon av core

# [8.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-toggle-switch-react@7.0.13...@fremtind/jkl-toggle-switch-react@8.0.0) (2022-05-13)

### Bug Fixes

-   add throttle to resize events ([a71c49e](https://github.com/fremtind/jokul/commit/a71c49e7f06edfe28c7d21881af0507849f1af83))
-   fix cypress tests and reset snapshots ([c44e9e8](https://github.com/fremtind/jokul/commit/c44e9e83f1c0c4241ab08fd56dfab43165e65b57))
-   removed anynomous function wrapping from throttle ([cea81aa](https://github.com/fremtind/jokul/commit/cea81aaaeb019675bf716371e593f05dc656370f))

### Features

-   semantic refactoring and new design ([8c255de](https://github.com/fremtind/jokul/commit/8c255dee301ff2f4dbf2f0cde288fd8562c20e80)), closes [#2037](https://github.com/fremtind/jokul/issues/2037) [#2823](https://github.com/fremtind/jokul/issues/2823)

### BREAKING CHANGES

-   -   removed prop screenReaderLabel
-   removed prop screenREaderSelectedLabel

# 7.0.0 (2022-02-07)

### Bug Fixes

-   fjern inverted-prop ([de5f8b8](https://github.com/fremtind/jokul/commit/de5f8b83ae8f025826f4c56d3aeb5e081dea66cc)), closes [#2646](https://github.com/fremtind/jokul/issues/2646)

### BREAKING CHANGES

-   Fjernet `inverted`-prop. Bruk `data-theme="dark"` om du trenger overstyre temaet.

## 6.0.0 (2021-10-21)

### chore

-   updates dependencies ([b975200](https://github.com/fremtind/jokul/commit/b97520045c02e4bcb44ebde159c60a7dff7f01d6))

### BREAKING CHANGES

-   depends on jkl-core v8 with breaking changes

## 5.0.0 (2021-07-09)

### chore

-   bump major version ([255a776](https://github.com/fremtind/jokul/commit/255a776d45a068645124499b870ecefec9d87f0e))

### BREAKING CHANGES

-   Depends on jkl-core-version with breaking changes

## 4.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 3.0.1 (2021-06-25)

### Bug Fixes

-   **labels:** use SupportLabel from jkl-core, not deprecated version ([c6d5d62](https://github.com/fremtind/jokul/commit/c6d5d62dafe6c084acd336381e376930290b0530))

## 3.0.0 (2021-06-07)

### Features

-   upgrade dependency jkl-core to v5.0.0 ([c3dc8dc](https://github.com/fremtind/jokul/commit/c3dc8dcbd3cba99502f1124cbe1dcaa688177f55))

### BREAKING CHANGES

-   Upgrades dependency jkl-core to v5.0.0, introducing breaking changes to color variables

## 2.6.7 (2021-02-12)

### Bug Fixes

-   add react 17 types as valid peerdep ([a074c34](https://github.com/fremtind/jokul/commit/a074c34dcece089ad6b4c581b8c920c8bdd4f1e0))

## 2.6.5 (2021-01-27)

### Bug Fixes

-   **@fremtind/jkl-toggle-switch-react:** improves accesibility in Toggle Switch ([ae1b477](https://github.com/fremtind/jokul/commit/ae1b477e9af9b7e6dd2e48cee24e17fccc80f829)), closes [#1556](https://github.com/fremtind/jokul/issues/1556)

## 2.6.4 (2021-01-25)

### Bug Fixes

-   **@fremtind/jkl-toggle-switch:** design adjustments on ToggleSlider ([d83426e](https://github.com/fremtind/jokul/commit/d83426eb23faf0c4dae0a49bf5689e7dc5fd0a64))

## 2.6.0 (2020-12-15)

### Features

-   display types in portal ([5c62a16](https://github.com/fremtind/jokul/commit/5c62a161c278d3a5a136741aea8dcf9b62338bda))

## 2.5.0 (2020-11-25)

### Features

-   update to react 17 ([4639058](https://github.com/fremtind/jokul/commit/4639058067eaa9be222825f8ac4f495a1e74cc0f))

## 2.4.0 (2020-11-04)

### Features

-   **toggle:** add toggle slider ([a42fd6b](https://github.com/fremtind/jokul/commit/a42fd6be9b04bdafceb69153f9b25f56d71498a6)), closes [#1482](https://github.com/fremtind/jokul/issues/1482)

## 2.3.0 (2020-07-29)

### Features

-   **build:** use @babel/runtime instead of inlining helpers in each file ([bbadce5](https://github.com/fremtind/jokul/commit/bbadce52ba4da5d540b479b07273332587bed436)), closes [#1136](https://github.com/fremtind/jokul/issues/1136)

## 2.2.0 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

### Features

-   update typescript, prettier and babel ([ec1d27b](https://github.com/fremtind/jokul/commit/ec1d27b09ef6ff27344ae181686b4e3d8be0b333))

## 2.1.0 (2020-03-06)

### Features

-   **portal:** implement dev and portal examples ([857f2e2](https://github.com/fremtind/jokul/commit/857f2e29359f9442a7da0c977a94d63dfbdfc194))

## 2.0.0 (2020-02-18)

### Bug Fixes

-   **jkl:** rename classnames import and move types ([e06ef21](https://github.com/fremtind/jokul/commit/e06ef21062b345d5defab335253041dad7ae6134))

### Features

-   **toggle-switch:** change toggle switch to button element (from input) ([2e9b340](https://github.com/fremtind/jokul/commit/2e9b3406f5bfbaa4233a3f63aa14bad017317efb))

### BREAKING CHANGES

-   **toggle-switch:** checked prop is replaced by pressed, onChange prop is replaced by onClick

## 1.1.0 (2020-01-16)

### Bug Fixes

-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

### Features

-   **portal:** use examples as documentation for all comp ([e99e56a](https://github.com/fremtind/jokul/commit/e99e56ab2f5bf13cd0e72bf010e6472a08ffabe9))

## 1.0.1 (2019-12-17)

### Bug Fixes

-   **toggle-switch:** fix formatting of toggle switch label ([a561fac](https://github.com/fremtind/jokul/commit/a561fac49abcd3b00e16cbddce41237ebeb63f1d))

## 1.0.0 (2019-12-03)

### Bug Fixes

-   change white color to correspond to design sketches ([c7396bc](https://github.com/fremtind/jokul/commit/c7396bccc4ff138871c9e92a3d5d34988677fb3b))
-   fix implementation of SupportLabel ([71ba3df](https://github.com/fremtind/jokul/commit/71ba3dfb1b49e2d59c96323ad71bc54d75e0e126))
-   rework onChange-handler ([b3a0d6a](https://github.com/fremtind/jokul/commit/b3a0d6a2514d83a4cb46bd532e057b10054c948b))
-   **toggle-switch-react:** update dependencies ([e36d18a](https://github.com/fremtind/jokul/commit/e36d18acda3dae45c24693b840b2f2e9d636fc4e))

### Features

-   **toggle-switch-react:** add disabled state ([f4de742](https://github.com/fremtind/jokul/commit/f4de7420d298e4b88e6f47c2a03b5d9e43837e77)), closes [#450](https://github.com/fremtind/jokul/issues/450)
-   **toggle-switch-react:** add inverted variant ([aab1360](https://github.com/fremtind/jokul/commit/aab13606bf763d72bb6a79057068276c6099a878))

## 0.2.1 (2019-08-30)

### Bug Fixes

-   **build:** remove visual regression tests ([a4502ea](https://github.com/fremtind/jokul/commit/a4502ea))
-   **toggle-switch:** change the design of toggle switch ([d0f98a0](https://github.com/fremtind/jokul/commit/d0f98a0))

## 0.2.0 (2019-08-02)

### Features

-   **test:** add visual regression testing ([1553b28](https://github.com/fremtind/jokul/commit/1553b28))

## 0.1.0 (2019-07-30)

### Bug Fixes

-   **checkbox:** refactor default checked to checked ([ae709fa](https://github.com/fremtind/jokul/commit/ae709fa))

### Features

-   **toggle:** add react wrapper ([064ba2f](https://github.com/fremtind/jokul/commit/064ba2f))
-   **toggle-switch-react:** add onChange handler and prop ([2c1422d](https://github.com/fremtind/jokul/commit/2c1422d))
