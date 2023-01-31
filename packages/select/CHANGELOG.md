# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 10.0.0 (2023-01-30)

### Features

- bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))
- ta i bruk nye ikoner i Select ([eae24e8](https://github.com/fremtind/jokul/commit/eae24e826922b3056ef2d38fa8a76d3a08b4f70d))

### BREAKING CHANGES

- Avhenger av en versjon av jkl-core med breaking changes
- Du må nå importere stilarket til jkl-icons for at komponenten skal se riktig ut

## 9.2.6 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

# 9.2.0 (2022-09-27)

### Features

-   la listen i select scrolle ved mange valg ([7d76394](https://github.com/fremtind/jokul/commit/7d763943dedb92802e378cc3ff975aa04d88ea60))

## [9.1.1](https://github.com/fremtind/jokul/compare/@fremtind/jkl-select@9.1.0...@fremtind/jkl-select@9.1.1) (2022-09-21)

### Bug Fixes

-   sett riktig størrelse på valgene i compact select ([669eaae](https://github.com/fremtind/jokul/commit/669eaae91b69fded9344b43f334092c5438b9795)), closes [#3106](https://github.com/fremtind/jokul/issues/3106)

# [9.1.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-select@9.0.3...@fremtind/jkl-select@9.1.0) (2022-09-20)

### Bug Fixes

-   bruk et flagg for å kontrollere markering ved hover ([6a27ce5](https://github.com/fremtind/jokul/commit/6a27ce5db887dec6e11ee35be2b2b04f0df1d0bb))
-   la valg i select bli markert ved hover ([a50d123](https://github.com/fremtind/jokul/commit/a50d1230120c918bb0deb8ab5d1965a52ec14cbc))

### Features

-   la kun ett valg være fokusert av gangen ([bf62cda](https://github.com/fremtind/jokul/commit/bf62cdab4de2e587a422ba5ff238d9c8833abdf4))
-   legg til indikator for valgt element i select ([c130333](https://github.com/fremtind/jokul/commit/c1303330dfae36b6fdd3218515618e53d1abafa4)), closes [#3001](https://github.com/fremtind/jokul/issues/3001)

### Reverts

-   fjern markering av valgt element med pil ([619a1f9](https://github.com/fremtind/jokul/commit/619a1f9bedb093cacc308a51d54075cc53d78969))

## 9.0.3 (2022-09-15)

### Bug Fixes

-   bruk riktig padding på compact Select med søk ([952b17e](https://github.com/fremtind/jokul/commit/952b17e7e93964c1f95a5b9a8a2bac624505edcd))

# 9.0.0 (2022-09-08)

### Bug Fixes

-   juster padding for compact og native ([a943295](https://github.com/fremtind/jokul/commit/a9432954269fbfccdb803b39fc74256b767cbdeb))
-   padding på compact options ([a6bcc17](https://github.com/fremtind/jokul/commit/a6bcc17fc8c1508eeb450acb8a4a4ef07aa64c7d))
-   pila overlapper ikke lenger lange verdier ([29f446f](https://github.com/fremtind/jokul/commit/29f446fdc7750df4e7797b750d2b70e0fb2bb236))
-   pilbugs i select ([249cad0](https://github.com/fremtind/jokul/commit/249cad06462564c6c7cbff09344c176a213bef59))
-   plassering av innhold mellom native og ikke ([7946a47](https://github.com/fremtind/jokul/commit/7946a472464e081e7a3e4739db6ef31fccd456a5))
-   plasseringen av pila i compact ([1be7b84](https://github.com/fremtind/jokul/commit/1be7b846e960d59663de5e51b85045e52042fca5))
-   unngå navnekollisjon med accordion sin expand-arrow ([1a6a9dc](https://github.com/fremtind/jokul/commit/1a6a9dc95aaa3f220c731ee124bde06c44c46ce6))

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))
-   nytt kompaktdesign for Select ([a958df2](https://github.com/fremtind/jokul/commit/a958df2d22264204002ba0f6341c26549a4f3f86))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"
-   jkl-select-expand-arrow er nå jkl-select\_\_arrow
-   jkl-expand-arrow er nå jkl-select-expand-arrow

## 8.0.12 (2022-08-12)

### Bug Fixes

-   redesign hover og focus på select uten layout shift ([b891f94](https://github.com/fremtind/jokul/commit/b891f940b010a2bc8c659dcaed2a4367498043fc)), closes [#3001](https://github.com/fremtind/jokul/issues/3001)

## 8.0.11 (2022-08-04)

### Bug Fixes

-   fjern checkmark fra søkbar select og bruk pil i stedet ([e1d2128](https://github.com/fremtind/jokul/commit/e1d21287fd2262f22357b03890688e7fdee476b2))
-   ord har nå alltid like stod plass dersom de er i fokus eller selected ([734979b](https://github.com/fremtind/jokul/commit/734979b2bdd4d3fd8e85e9b36bc0a442386a0aef))

## [8.0.3](https://github.com/fremtind/jokul/compare/@fremtind/jkl-select@8.0.2...@fremtind/jkl-select@8.0.3) (2022-06-13)

### Bug Fixes

-   bruk bakgrunnsfargen fra temaet på åpen native select ([bb22305](https://github.com/fremtind/jokul/commit/bb223051f0eb4a770ae7dacb27f4867b731f91dd)), closes [#2807](https://github.com/fremtind/jokul/issues/2807)

# [8.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-select@7.0.13...@fremtind/jkl-select@8.0.0) (2022-06-07)

### Code Refactoring

-   oppdater til nyeste core ([1db381f](https://github.com/fremtind/jokul/commit/1db381fdc0d3f1c35818d2feec49977331cd2fad))
-   prefiks CSS-variabler med jkl ([500ee0e](https://github.com/fremtind/jokul/commit/500ee0e1050de94d8cda07fb423c33837fbf2faa))
-   sweep for å rydde i Sass-variabler ([fa1b094](https://github.com/fremtind/jokul/commit/fa1b094189c2958d5407334ae063d36461229b11))

### Features

-   legg til en index-fil for Sass ([c4f8d0c](https://github.com/fremtind/jokul/commit/c4f8d0cd31bcab0706a49be1bdf0214fbbbbf646))

### BREAKING CHANGES

-   Sass-variabler i komponentpakkene er gjort private
-   Alle CSS-variabler har jkl-prefix
-   Avhenger av ny majorversjon av core

## [7.0.14](https://github.com/fremtind/jokul/compare/@fremtind/jkl-select@7.0.13...@fremtind/jkl-select@7.0.14) (2022-05-18)

### Bug Fixes

-   bruk riktig feilfarge i dark mode ([610232d](https://github.com/fremtind/jokul/commit/610232d65902820804dde8843970d642bc82e8f3)), closes [#2874](https://github.com/fremtind/jokul/issues/2874)

## [7.0.10](https://github.com/fremtind/jokul/compare/@fremtind/jkl-select@7.0.9...@fremtind/jkl-select@7.0.10) (2022-04-19)

### Bug Fixes

-   fjern core-toggle fra Select ([3d7acc4](https://github.com/fremtind/jokul/commit/3d7acc459f64a491c8786ac1f76785971c9d0e1a))
-   fyll piler med farge og jobb rundt navnekollisjon ([f056ef8](https://github.com/fremtind/jokul/commit/f056ef89ac784e180d74abb07691055364363b43))
-   select i forced-colors ([66a6d37](https://github.com/fremtind/jokul/commit/66a6d37a827fbcd49be02cea543a196117066014))

## 7.0.9 (2022-04-08)

### Bug Fixes

-   fjern core-toggle fra Select ([0decc92](https://github.com/fremtind/jokul/commit/0decc921d57d7f9ebc9f879a051b7dfb45e8c32b))

## 7.0.4 (2022-03-04)

### Bug Fixes

-   skjul dekorativt CSS-innhold fra skjermlesere ([5976cf9](https://github.com/fremtind/jokul/commit/5976cf93234ab2d189dfd2de888fa45a88480c55)), closes [#2774](https://github.com/fremtind/jokul/issues/2774)

## [7.0.2](https://github.com/fremtind/jokul/compare/@fremtind/jkl-select@7.0.1...@fremtind/jkl-select@7.0.2) (2022-02-17)

### Bug Fixes

-   **select:** make sure Select stays within 100% width ([b142853](https://github.com/fremtind/jokul/commit/b1428535234131a3b02be7895f1b2ccf5de9d99b))

# 7.0.0 (2022-02-07)

### Bug Fixes

-   fjern inverted-prop ([de5f8b8](https://github.com/fremtind/jokul/commit/de5f8b83ae8f025826f4c56d3aeb5e081dea66cc)), closes [#2646](https://github.com/fremtind/jokul/issues/2646)
-   manuell delinting sans descending specificity ([20de1c8](https://github.com/fremtind/jokul/commit/20de1c8811596b054867352177225fd197c70797))

### BREAKING CHANGES

-   Fjernet `inverted`-prop. Bruk `data-theme="dark"` om du trenger overstyre temaet.

## 6.0.10 (2022-02-02)

### Bug Fixes

-   redesign feilstate for select ([c9adece](https://github.com/fremtind/jokul/commit/c9adeceef2255f4b8d892979faf4c2471db6daab)), closes [#2631](https://github.com/fremtind/jokul/issues/2631)

## 6.0.3 (2021-11-24)

### Bug Fixes

-   animasjonsfix for Safari ([39982c1](https://github.com/fremtind/jokul/commit/39982c168e7d0a5b99ad72476444055eb889651a)), closes [#2531](https://github.com/fremtind/jokul/issues/2531)

## 6.0.0 (2021-10-21)

### Features

-   use new spacing scale ([5694495](https://github.com/fremtind/jokul/commit/5694495f56d3c1f0e675433b35cfb0e693b93a82)), closes [#2382](https://github.com/fremtind/jokul/issues/2382)

### BREAKING CHANGES

-   new spacing scale: see migration guide for jkl-core

## 5.1.1 (2021-09-30)

### Bug Fixes

-   rett padding, støtt lange labels i Select ([2101522](https://github.com/fremtind/jokul/commit/210152290d269d171fe856e868086ba9431cfb15)), closes [#1592](https://github.com/fremtind/jokul/issues/1592) [#2246](https://github.com/fremtind/jokul/issues/2246) [#2247](https://github.com/fremtind/jokul/issues/2247)

## 5.1.0 (2021-09-30)

### Features

-   use cursor:pointer style on select ([843a232](https://github.com/fremtind/jokul/commit/843a2326ce68de8ed5f70d1584380089299b9906)), closes [#2173](https://github.com/fremtind/jokul/issues/2173)

## 5.0.3 (2021-08-24)

### Bug Fixes

-   add hover color and cursor for select ([e9855d3](https://github.com/fremtind/jokul/commit/e9855d3c5b9d01719c9ed9da82d71ac4a8ea7d5c))
-   remove pointer style ([0ccc6ed](https://github.com/fremtind/jokul/commit/0ccc6ed2ac04c19be7847191a641da0baff76347))

## 5.0.0 (2021-07-09)

### Features

-   use new typographic scale ([eaed7c1](https://github.com/fremtind/jokul/commit/eaed7c1301114e792350d8ca17de789b5925341b))

### BREAKING CHANGES

-   Depends on jkl-core version with breaking changes

## 4.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### Features

-   **select:** add automatic dark mode ([bcce917](https://github.com/fremtind/jokul/commit/bcce917f5d3e2a0c1acea7e637ad9752e1de516a))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 3.0.0 (2021-06-07)

### Features

-   new colors ([9144947](https://github.com/fremtind/jokul/commit/9144947766c73fbe5eaac3372495006e3b89dec7))

### BREAKING CHANGES

-   all color variables are changed

## 2.3.10 (2021-01-06)

### Bug Fixes

-   **select:** remove background color from select wrapper div ([66a7946](https://github.com/fremtind/jokul/commit/66a79466be80da8235710547d4b1a9bcef2e7920))

## 2.3.6 (2020-11-19)

### Bug Fixes

-   move width from catch-all selector to child ([f13ba96](https://github.com/fremtind/jokul/commit/f13ba965cca8aba3ddb99088dbd00284ef0ce221)), closes [#1604](https://github.com/fremtind/jokul/issues/1604)

## 2.3.0 (2020-09-01)

### Features

-   implement global dark mode ([47b8e2d](https://github.com/fremtind/jokul/commit/47b8e2dc0abcd366212fc67f306f8523a63d11c8))

## 2.2.0 (2020-08-13)

### Bug Fixes

-   **select:** add missing prefix for mask-image in chrome >= 70 ([30c5e19](https://github.com/fremtind/jokul/commit/30c5e1914c9051315693ce7bf543a7b42d800307))

### Features

-   **select:** add searchable functionality for Select ([1fe2a18](https://github.com/fremtind/jokul/commit/1fe2a18abd04b6b0f2088925bca110af62f755e4))

## 2.1.0 (2020-07-03)

### Features

-   screen reader only label for select + width prop ([#1085](https://github.com/fremtind/jokul/issues/1085)) ([0b87de1](https://github.com/fremtind/jokul/commit/0b87de178b0d685ca09967ce3670f74305a1238a))

## 2.0.1 (2020-05-13)

### Bug Fixes

-   **select:** use correct border color in dark mode ([4d4d0c7](https://github.com/fremtind/jokul/commit/4d4d0c7782638475dd5674ff68ff8f9d5b3a6a56))

## 2.0.0 (2020-05-11)

### Features

-   implement new, boxed design ([7b1796a](https://github.com/fremtind/jokul/commit/7b1796ac078edb2c6640b64bd20919a8d3bd79d1))
-   **select:** improve dark mode and focus states ([ac80eea](https://github.com/fremtind/jokul/commit/ac80eea7b474e85b19461b53820a5fd7cc09d4a1))

### BREAKING CHANGES

-   drop support for the initialInputValue prop

## 1.3.5 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 1.3.4 (2020-03-16)

### Bug Fixes

-   **select:** use bold weight in compact mode ([fc586fe](https://github.com/fremtind/jokul/commit/fc586fef4350ecec3ca7eab026c0388275a7ce5a))

## 1.3.0 (2020-02-19)

### Features

-   export scss files with style pkgs ([edb6278](https://github.com/fremtind/jokul/commit/edb627838075d3d613ae78b6aae765c81067ba6a))

## 1.2.2 (2020-02-18)

### Bug Fixes

-   make use of new color token (changed name) ([f14c149](https://github.com/fremtind/jokul/commit/f14c149f779e65fe0775afde4421aef26be8ed1d))
-   use new text-style mixins ([2873a57](https://github.com/fremtind/jokul/commit/2873a57f4570ddb87a7390a773433d26a9fde4ac))

## 1.2.0 (2020-01-16)

### Bug Fixes

-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

### Features

-   **select:** animate select ([97db449](https://github.com/fremtind/jokul/commit/97db449eb11b3454bb879ff2db9d1e44707ba8b9)), closes [#370](https://github.com/fremtind/jokul/issues/370)
-   update to new typography naming ([5c061d7](https://github.com/fremtind/jokul/commit/5c061d7b52529f83a16cf944db240984b67f5229))

## 1.1.0 (2019-12-17)

### Bug Fixes

-   **components:** removed styling from examples and refactored ([841ef16](https://github.com/fremtind/jokul/commit/841ef161c6f9d76cc08cbbd5fc77c4a97334e3db)), closes [#545](https://github.com/fremtind/jokul/issues/545)

### Features

-   **components:** css endringer, flytting av funksjon ([7390edd](https://github.com/fremtind/jokul/commit/7390eddfadd941a0465267afba35a81ca446f438)), closes [#545](https://github.com/fremtind/jokul/issues/545)
-   **components:** modifications on select field ([0d9e8d5](https://github.com/fremtind/jokul/commit/0d9e8d5df72668bd7c47c34eef649b961bd04a35)), closes [#545](https://github.com/fremtind/jokul/issues/545)
-   **components on black background:** rewritten css ([04fb8c6](https://github.com/fremtind/jokul/commit/04fb8c62aecfb2aa2141687d561d36cf5893dd04)), closes [#544](https://github.com/fremtind/jokul/issues/544)

## 1.0.1 (2019-12-10)

### Bug Fixes

-   **select:** fix padding on forcecompact ([b5a276a](https://github.com/fremtind/jokul/commit/b5a276a8effd08a5cc276eb7dc927be11b4c6020))
-   **select:** increase padding on value-items in select ([2341c33](https://github.com/fremtind/jokul/commit/2341c33519b43df1e669cb3ebc61ed0f89bca4ca))
-   **select:** stop native arrow from showing in IE11 ([f4a65f8](https://github.com/fremtind/jokul/commit/f4a65f8060b7a4de072a24ca73950af3c86b29cd)), closes [#572](https://github.com/fremtind/jokul/issues/572)

## 1.0.0 (2019-12-03)

### Features

-   add compact mode mixin ([ca9fa96](https://github.com/fremtind/jokul/commit/ca9fa96b7de2be50646af0cb444206c3eebcfc4a))
-   add support for global compact mode ([cc11026](https://github.com/fremtind/jokul/commit/cc11026207dfef2a0b3b074b88e071783d2820fd)), closes [#494](https://github.com/fremtind/jokul/issues/494)
-   remove dropdown pkgs and replace with select pkgs ([14c2b4f](https://github.com/fremtind/jokul/commit/14c2b4fa5a236e2d7824834a7b074ae62ce870b4))
