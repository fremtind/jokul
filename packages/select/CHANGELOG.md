# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 2.3.6 (2020-11-19)

### Bug Fixes

- move width from catch-all selector to child ([f13ba96](https://github.com/fremtind/jokul/commit/f13ba965cca8aba3ddb99088dbd00284ef0ce221)), closes [#1604](https://github.com/fremtind/jokul/issues/1604)

## 2.3.0 (2020-09-01)

### Features

- implement global dark mode ([47b8e2d](https://github.com/fremtind/jokul/commit/47b8e2dc0abcd366212fc67f306f8523a63d11c8))

## 2.2.0 (2020-08-13)

### Bug Fixes

- **select:** add missing prefix for mask-image in chrome >= 70 ([30c5e19](https://github.com/fremtind/jokul/commit/30c5e1914c9051315693ce7bf543a7b42d800307))

### Features

- **select:** add searchable functionality for Select ([1fe2a18](https://github.com/fremtind/jokul/commit/1fe2a18abd04b6b0f2088925bca110af62f755e4))

## 2.1.0 (2020-07-03)

### Features

- screen reader only label for select + width prop ([#1085](https://github.com/fremtind/jokul/issues/1085)) ([0b87de1](https://github.com/fremtind/jokul/commit/0b87de178b0d685ca09967ce3670f74305a1238a))

## 2.0.1 (2020-05-13)

### Bug Fixes

- **select:** use correct border color in dark mode ([4d4d0c7](https://github.com/fremtind/jokul/commit/4d4d0c7782638475dd5674ff68ff8f9d5b3a6a56))

## 2.0.0 (2020-05-11)

### Features

- implement new, boxed design ([7b1796a](https://github.com/fremtind/jokul/commit/7b1796ac078edb2c6640b64bd20919a8d3bd79d1))
- **select:** improve dark mode and focus states ([ac80eea](https://github.com/fremtind/jokul/commit/ac80eea7b474e85b19461b53820a5fd7cc09d4a1))

### BREAKING CHANGES

- drop support for the initialInputValue prop

## 1.3.5 (2020-03-25)

### Bug Fixes

- move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 1.3.4 (2020-03-16)

### Bug Fixes

- **select:** use bold weight in compact mode ([fc586fe](https://github.com/fremtind/jokul/commit/fc586fef4350ecec3ca7eab026c0388275a7ce5a))

## 1.3.0 (2020-02-19)

### Features

- export scss files with style pkgs ([edb6278](https://github.com/fremtind/jokul/commit/edb627838075d3d613ae78b6aae765c81067ba6a))

## 1.2.2 (2020-02-18)

### Bug Fixes

- make use of new color token (changed name) ([f14c149](https://github.com/fremtind/jokul/commit/f14c149f779e65fe0775afde4421aef26be8ed1d))
- use new text-style mixins ([2873a57](https://github.com/fremtind/jokul/commit/2873a57f4570ddb87a7390a773433d26a9fde4ac))

## 1.2.0 (2020-01-16)

### Bug Fixes

- fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

### Features

- **select:** animate select ([97db449](https://github.com/fremtind/jokul/commit/97db449eb11b3454bb879ff2db9d1e44707ba8b9)), closes [#370](https://github.com/fremtind/jokul/issues/370)
- update to new typography naming ([5c061d7](https://github.com/fremtind/jokul/commit/5c061d7b52529f83a16cf944db240984b67f5229))

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
