# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [10.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-select-react@9.4.0...@fremtind/jkl-select-react@10.0.0) (2022-06-07)

### chore

-   fiks lintfeil ([4093d2a](https://github.com/fremtind/jokul/commit/4093d2a2ae7bbe0d30de882b9f5d144e8e77cede))

### BREAKING CHANGES

-   Pakken avhenger av en breaking versjon av core

# [9.4.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-select-react@9.3.0...@fremtind/jkl-select-react@9.4.0) (2022-06-03)

### Features

-   gi mulighet til å sende et klassenavn til inputfeltet ([55f85bf](https://github.com/fremtind/jokul/commit/55f85bf251fb85cd1e45d0233e891bdd5467b73e))

# [9.3.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-select-react@9.2.3...@fremtind/jkl-select-react@9.3.0) (2022-06-02)

### Features

-   åpne for å merke skjemafelter som ugyldige uten errorLabel ([3c722ec](https://github.com/fremtind/jokul/commit/3c722ec34321789c37fe45b30d6bf975576489ee))

## [9.2.2](https://github.com/fremtind/jokul/compare/@fremtind/jkl-select-react@9.2.1...@fremtind/jkl-select-react@9.2.2) (2022-05-18)

### Bug Fixes

-   bruk riktig feilfarge i dark mode ([610232d](https://github.com/fremtind/jokul/commit/610232d65902820804dde8843970d642bc82e8f3)), closes [#2874](https://github.com/fremtind/jokul/issues/2874)

# 9.2.0 (2022-04-28)

### Features

-   eksponer labelProps i skjemakomponenter ([db27e30](https://github.com/fremtind/jokul/commit/db27e309a8a72913d8761b2967e940113c47b779))

## 9.1.6 (2022-04-08)

### Bug Fixes

-   fjern bruk av ID i selector etter React 18 ([058e389](https://github.com/fremtind/jokul/commit/058e3893d1794e4efeea93648ce6749985205627))
-   fjern core-toggle fra Select ([0decc92](https://github.com/fremtind/jokul/commit/0decc921d57d7f9ebc9f879a051b7dfb45e8c32b))

## [9.1.3](https://github.com/fremtind/jokul/compare/@fremtind/jkl-select-react@9.1.2...@fremtind/jkl-select-react@9.1.3) (2022-03-11)

### Bug Fixes

-   gjør React keys unike ([54c4a57](https://github.com/fremtind/jokul/commit/54c4a5784df21dc4cf71f3f3e377e4fd72a1e57e))

# [9.1.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-select-react@9.0.4...@fremtind/jkl-select-react@9.1.0) (2022-02-18)

### Bug Fixes

-   fix a bug where clicking the input field would close select ([627fe76](https://github.com/fremtind/jokul/commit/627fe76953de93e22190a249bf4c07f610b6671b)), closes [#2400](https://github.com/fremtind/jokul/issues/2400)
-   handle external value control ([d8aff3b](https://github.com/fremtind/jokul/commit/d8aff3bdb073fe30b9cb82c5f9c4bf4f10d16faf)), closes [#2589](https://github.com/fremtind/jokul/issues/2589)

### Features

-   add custom filtering function to select ([fa24e79](https://github.com/fremtind/jokul/commit/fa24e79803f0fe808c959938c278d4c8e11f9000))
-   add tests ([33e7690](https://github.com/fremtind/jokul/commit/33e7690071af36f513d0a2b0b300faec5d1a2a36))

# 9.0.0 (2022-02-07)

### Bug Fixes

-   fjern inverted-prop ([de5f8b8](https://github.com/fremtind/jokul/commit/de5f8b83ae8f025826f4c56d3aeb5e081dea66cc)), closes [#2646](https://github.com/fremtind/jokul/issues/2646)

### BREAKING CHANGES

-   Fjernet `inverted`-prop. Bruk `data-theme="dark"` om du trenger overstyre temaet.

## 8.0.11 (2022-02-02)

### Bug Fixes

-   slett utdaterte snapshots ([fcd47bb](https://github.com/fremtind/jokul/commit/fcd47bbaedaadd528130eb6d22b1608a8eb90aa4))

## 8.0.0 (2021-11-16)

### Bug Fixes

-   gjør så NativeSelect fungerer med react-hook-form ([2be8ad7](https://github.com/fremtind/jokul/commit/2be8ad7ded02e998937b4929eb4cd4b6b3cafa4a)), closes [#2456](https://github.com/fremtind/jokul/issues/2456)
-   gjør så Select støtter react-hook-form ([87d54b7](https://github.com/fremtind/jokul/commit/87d54b749899811b16f52f81c39c48d244652b46)), closes [#2456](https://github.com/fremtind/jokul/issues/2456)

### BREAKING CHANGES

-   Select: Output fra onChange, onBlur, og onFocus er endret til å ligne eventstrukturen
    (e.target.value) i stedet for å gi verdien direkte. Name er gjort til en påkrevd prop.
-   NativeSelect: Kaller ikke lenger onChange-funksjonen ved onBlur-eventet. Om du vil beholde den
    oppførselen, sett onBlur lik onChange der du bruker NativeSelect.

## 7.0.0 (2021-10-21)

### chore

-   updates dependencies ([b975200](https://github.com/fremtind/jokul/commit/b97520045c02e4bcb44ebde159c60a7dff7f01d6))

### BREAKING CHANGES

-   depends on jkl-core v8 with breaking changes

## 6.1.9 (2021-09-30)

### Bug Fixes

-   rett et problem i samspillet Select og Accordion ([7733fd2](https://github.com/fremtind/jokul/commit/7733fd21e6eab8797ad30f3a1d59011a84276c2b)), closes [#1466](https://github.com/fremtind/jokul/issues/1466)

## 6.1.4 (2021-09-20)

### Bug Fixes

-   oppdater core-toggle for bugfix rundt aria-label ([54a3902](https://github.com/fremtind/jokul/commit/54a39020606f19b18808ba6ff6ecd157ed775461))

## 6.1.3 (2021-09-17)

### Bug Fixes

-   oppdater core-toggle for bugfix rundt aria-label ([54a3902](https://github.com/fremtind/jokul/commit/54a39020606f19b18808ba6ff6ecd157ed775461))

## 6.1.2 (2021-09-10)

### Bug Fixes

-   fiks feil aria-label i Select ([b36cbf9](https://github.com/fremtind/jokul/commit/b36cbf91ccf10145ecb2646b3b75ae8140f03a51)), closes [#2126](https://github.com/fremtind/jokul/issues/2126) [#1688](https://github.com/fremtind/jokul/issues/1688)

## 6.1.0 (2021-08-24)

### Features

-   add support for arrow down on select button ([9b344b4](https://github.com/fremtind/jokul/commit/9b344b4c5d2a1fe1e050d66cd0b02c3a75c4ac22))

## 6.0.0 (2021-07-09)

### Features

-   use new typographic scale ([eaed7c1](https://github.com/fremtind/jokul/commit/eaed7c1301114e792350d8ca17de789b5925341b))

### BREAKING CHANGES

-   Depends on jkl-core version with breaking changes

## 5.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 4.0.0 (2021-06-07)

### Features

-   upgrade dependency jkl-core to v5.0.0 ([c3dc8dc](https://github.com/fremtind/jokul/commit/c3dc8dcbd3cba99502f1124cbe1dcaa688177f55))

### BREAKING CHANGES

-   Upgrades dependency jkl-core to v5.0.0, introducing breaking changes to color variables

## 3.0.7 (2021-02-12)

### Bug Fixes

-   add react 17 types as valid peerdep ([a074c34](https://github.com/fremtind/jokul/commit/a074c34dcece089ad6b4c581b8c920c8bdd4f1e0))

## 3.0.0 (2021-01-05)

### Features

-   **native select:** add support for name attribute ([852e2df](https://github.com/fremtind/jokul/commit/852e2dfaf4996c5ec1b38f6cbeaed646bf68dc98))
-   **select:** add support for ref forwarding to the Select component ([886ea59](https://github.com/fremtind/jokul/commit/886ea59136e5b0d846883727f0e02cadec098e99))

### BREAKING CHANGES

-   **select:** Added forwardRef, which may break behaviour

## 2.6.0 (2020-11-25)

### Features

-   update to react 17 ([4639058](https://github.com/fremtind/jokul/commit/4639058067eaa9be222825f8ac4f495a1e74cc0f))

## 2.5.0 (2020-11-19)

### Bug Fixes

-   **select-react:** move width to correct div ([1162d15](https://github.com/fremtind/jokul/commit/1162d1539f33092731f87fa8c53d6bf2fa3bae64))

### Features

-   **select-react:** add width prop to nativeselect ([9f8f575](https://github.com/fremtind/jokul/commit/9f8f575536840eee7f76c6db547cd8515e012a6b))

## 2.4.13 (2020-09-11)

### Bug Fixes

-   actually bundle nrk core components ([d764dc1](https://github.com/fremtind/jokul/commit/d764dc11909b388325353f8ceccaed0a3c97416d))

## 2.4.0 (2020-08-13)

### Bug Fixes

-   **select:** onBlur and onFocus called correctly when focus enters/leaves component ([10228e3](https://github.com/fremtind/jokul/commit/10228e3c42d996203cba6d08e6776b0bb60d1804))

### Features

-   **select:** add searchable functionality for Select ([1fe2a18](https://github.com/fremtind/jokul/commit/1fe2a18abd04b6b0f2088925bca110af62f755e4))

## 2.3.0 (2020-07-29)

### Features

-   **build:** use @babel/runtime instead of inlining helpers in each file ([bbadce5](https://github.com/fremtind/jokul/commit/bbadce52ba4da5d540b479b07273332587bed436)), closes [#1136](https://github.com/fremtind/jokul/issues/1136)

## 2.2.0 (2020-07-08)

### Features

-   legg til data-testautoid type og props på Select ([b30dbf0](https://github.com/fremtind/jokul/commit/b30dbf0fb193433862973f406fb7163c8d16c1d8))

## 2.1.0 (2020-07-03)

### Features

-   screen reader only label for select + width prop ([#1085](https://github.com/fremtind/jokul/issues/1085)) ([0b87de1](https://github.com/fremtind/jokul/commit/0b87de178b0d685ca09967ce3670f74305a1238a))

## 2.0.12 (2020-06-26)

### Bug Fixes

-   align nanoid version, and migrate to 3 ([a3d571d](https://github.com/fremtind/jokul/commit/a3d571db3e18937d40df5268c8f711232a72314e))

## 2.0.1 (2020-05-13)

### Bug Fixes

-   import labels and links from core ([f2bba87](https://github.com/fremtind/jokul/commit/f2bba87aab70e887e44b11b4f390324ab3fa5a2b))

## 2.0.0 (2020-05-11)

### Features

-   add expandArrow component ([50e0e8a](https://github.com/fremtind/jokul/commit/50e0e8a59c647be75d64beedb184e831b1910f7e))
-   add support for custom id ([fde58f0](https://github.com/fremtind/jokul/commit/fde58f0761283b6985fb9d3e797ef441460fef0f))
-   implement new, boxed design ([7b1796a](https://github.com/fremtind/jokul/commit/7b1796ac078edb2c6640b64bd20919a8d3bd79d1))
-   **native select:** add support for refs ([00d2c0f](https://github.com/fremtind/jokul/commit/00d2c0f46b390688ddb0198d1e894cf82a147168))
-   **select:** add support for inverted error label ([f88b9c6](https://github.com/fremtind/jokul/commit/f88b9c6c446e4a5f0c4ad690ae2fb415d4df19c9))

### BREAKING CHANGES

-   drop support for the initialInputValue prop

## 1.4.1 (2020-04-22)

### Bug Fixes

-   **changehandlers:** revert undocumented breaking change ([d6d0f55](https://github.com/fremtind/jokul/commit/d6d0f556709021e8f5509339dd452677a2363d40))

## 1.4.0 (2020-04-20)

### Features

-   **eventhandling:** add handling of blur and focus events ([748749f](https://github.com/fremtind/jokul/commit/748749ff705ffbde66a146e2fe989e6f8122b4eb))

## 1.3.3 (2020-03-25)

### Bug Fixes

-   add missing dependencies/dependency lists to hooks ([1edc8da](https://github.com/fremtind/jokul/commit/1edc8dabe612ca35a5fab7a6b57ec250dda01771))
-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 1.3.0 (2020-03-06)

### Features

-   **portal:** implement dev and portal examples ([857f2e2](https://github.com/fremtind/jokul/commit/857f2e29359f9442a7da0c977a94d63dfbdfc194))

## 1.2.2 (2020-02-18)

### Bug Fixes

-   make use of new color token (changed name) ([f14c149](https://github.com/fremtind/jokul/commit/f14c149f779e65fe0775afde4421aef26be8ed1d))
-   **jkl:** rename classnames import and move types ([e06ef21](https://github.com/fremtind/jokul/commit/e06ef21062b345d5defab335253041dad7ae6134))

## 1.2.0 (2020-01-16)

### Bug Fixes

-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))
-   **select-react:** make select set selectedValue if items change ([e74bd50](https://github.com/fremtind/jokul/commit/e74bd509a99fd43c854557b97e1e300bc7cb9ab3))

### Features

-   **portal:** use examples as documentation for all comp ([e99e56a](https://github.com/fremtind/jokul/commit/e99e56ab2f5bf13cd0e72bf010e6472a08ffabe9))
-   **select:** animate select ([97db449](https://github.com/fremtind/jokul/commit/97db449eb11b3454bb879ff2db9d1e44707ba8b9)), closes [#370](https://github.com/fremtind/jokul/issues/370)

## 1.1.0 (2019-12-17)

### Bug Fixes

-   **components:** removed styling from examples and refactored ([841ef16](https://github.com/fremtind/jokul/commit/841ef161c6f9d76cc08cbbd5fc77c4a97334e3db)), closes [#545](https://github.com/fremtind/jokul/issues/545)

### Features

-   **components:** modifications on select field ([0d9e8d5](https://github.com/fremtind/jokul/commit/0d9e8d5df72668bd7c47c34eef649b961bd04a35)), closes [#545](https://github.com/fremtind/jokul/issues/545)
-   **components on black background:** rewritten css ([04fb8c6](https://github.com/fremtind/jokul/commit/04fb8c62aecfb2aa2141687d561d36cf5893dd04)), closes [#544](https://github.com/fremtind/jokul/issues/544)

## 1.0.1 (2019-12-10)

### Bug Fixes

-   **select:** fix padding on forcecompact ([b5a276a](https://github.com/fremtind/jokul/commit/b5a276a8effd08a5cc276eb7dc927be11b4c6020))
-   **select:** increase padding on value-items in select ([2341c33](https://github.com/fremtind/jokul/commit/2341c33519b43df1e669cb3ebc61ed0f89bca4ca))

## 1.0.0 (2019-12-03)

### Bug Fixes

-   **select-react:** get actual label as initial display value ([2c9feeb](https://github.com/fremtind/jokul/commit/2c9feebda9e7be2e26a514cdd8b770e108ad0d99))
-   **select-react:** make Select & NativeSelect useable as uncontrolled ([b0bfca2](https://github.com/fremtind/jokul/commit/b0bfca26e11ea29f61592d92e8e987155b981a4f)), closes [#500](https://github.com/fremtind/jokul/issues/500)
-   **select-react:** remove unneeded deprecation warnings ([9644bcf](https://github.com/fremtind/jokul/commit/9644bcf6d6b346650203cf5f5685bbe355d29d1f))
-   **select-react:** update display value when value prop changes ([1fa7c2f](https://github.com/fremtind/jokul/commit/1fa7c2f4a1046be27298d73209b43b8e6cbcb341))
-   **select-react:** use valuePair label as initial display value ([d7b41f2](https://github.com/fremtind/jokul/commit/d7b41f25542ff789ae80d521a63f31af3c9ba23f))
-   fix visual jump when value is empty ([1301573](https://github.com/fremtind/jokul/commit/130157368ccff963f4b2d9173f317bf92e2b1e72))
-   remove stray references to dropdown pkg ([5763d60](https://github.com/fremtind/jokul/commit/5763d6074a4dda6a30d56874415cc0b3026920b8))

### Features

-   remove dropdown pkgs and replace with select pkgs ([14c2b4f](https://github.com/fremtind/jokul/commit/14c2b4fa5a236e2d7824834a7b074ae62ce870b4))
