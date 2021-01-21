# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 3.7.6 (2021-01-21)

### Bug Fixes

- **datepicker:** fix broken aria reference when no supportlabel ([bd35dfd](https://github.com/fremtind/jokul/commit/bd35dfd5309156098e5dbde1a485a0322fe778e1))

## 3.7.0 (2020-11-25)

### Features

- update to react 17 ([4639058](https://github.com/fremtind/jokul/commit/4639058067eaa9be222825f8ac4f495a1e74cc0f))

## 3.6.2 (2020-11-19)

### Bug Fixes

- **datepicker-react:** add width auto to nativeselect in calendar ([68977c9](https://github.com/fremtind/jokul/commit/68977c995bc502dee3b5068f5bda23ca25fc1c64))

## 3.6.0 (2020-11-18)

### Features

- **datepicker-react:** add width prop ([54a722b](https://github.com/fremtind/jokul/commit/54a722ba39dd23d5b6b8715e82724c8f5c12c1ab)), closes [#1611](https://github.com/fremtind/jokul/issues/1611)

## 3.5.7 (2020-11-12)

### Bug Fixes

- **datepicker:** fix bug when clicking input field didnt open datepicker ([07ec25e](https://github.com/fremtind/jokul/commit/07ec25eb21df1ae963ee04f1e257fbf871b884d5)), closes [#1510](https://github.com/fremtind/jokul/issues/1510)
- **datepicker:** fix bug where onBlur/onFocus didn't get called ([6a582f7](https://github.com/fremtind/jokul/commit/6a582f7c64506140f75592ad756f6aef4e959b36)), closes [#1555](https://github.com/fremtind/jokul/issues/1555)
- **datepicker:** keep focus on input field when clicking it ([8384fe5](https://github.com/fremtind/jokul/commit/8384fe50e9dd814d2d6cd0f3f661391e22975af3)), closes [#1501](https://github.com/fremtind/jokul/issues/1501)
- **datepicker:** refactor internals to fix React 17 and off by 1 err ([d87570f](https://github.com/fremtind/jokul/commit/d87570f548fabdac379eb5315844fb5317072eac)), closes [#1510](https://github.com/fremtind/jokul/issues/1510) [#1512](https://github.com/fremtind/jokul/issues/1512)

## 3.5.0 (2020-10-07)

### Features

- add value, refactor and bugfix DatePicker ([6eba4ce](https://github.com/fremtind/jokul/commit/6eba4ce3b1fb6165e0c4365aba1cf33bfd2fd794))

## 3.4.0 (2020-09-28)

### Features

- **datepicker-react:** return event when onChange, onBlur, onFocus triggered ([27aeb14](https://github.com/fremtind/jokul/commit/27aeb145715fabb024139d582d200a18efb6c2de)), closes [#1386](https://github.com/fremtind/jokul/issues/1386)

## 3.3.23 (2020-09-22)

### Bug Fixes

- **datepicker:** make next/prev month buttons work properly ([3d8a644](https://github.com/fremtind/jokul/commit/3d8a6442a56443203897236d314c34eab9083b3f))

## 3.3.21 (2020-09-11)

### Bug Fixes

- actually bundle nrk core components ([d764dc1](https://github.com/fremtind/jokul/commit/d764dc11909b388325353f8ceccaed0a3c97416d))

## 3.3.0 (2020-07-29)

### Features

- **build:** use @babel/runtime instead of inlining helpers in each file ([bbadce5](https://github.com/fremtind/jokul/commit/bbadce52ba4da5d540b479b07273332587bed436)), closes [#1136](https://github.com/fremtind/jokul/issues/1136)

## 3.2.16 (2020-06-26)

### Bug Fixes

- align nanoid version, and migrate to 3 ([a3d571d](https://github.com/fremtind/jokul/commit/a3d571db3e18937d40df5268c8f711232a72314e))

## 3.2.0 (2020-05-13)

### Bug Fixes

- import labels and links from core ([f2bba87](https://github.com/fremtind/jokul/commit/f2bba87aab70e887e44b11b4f390324ab3fa5a2b))

### Features

- add props for calendar button states ([cf545bc](https://github.com/fremtind/jokul/commit/cf545bc3fb21cbd6781aa9efa56627ba469c5c4b))
- **datepicker:** add better handling of compact mdoe ([40c5872](https://github.com/fremtind/jokul/commit/40c587243dd40bf5627b4fcb7fcfd9264e248e69))
- **datepicker:** implement new design and add dark mode ([2f3de1e](https://github.com/fremtind/jokul/commit/2f3de1e60b53b78b5c433ba9dcfe8d9c45e2fc28))

## 3.1.0 (2020-04-20)

### Bug Fixes

- **datepicker-react:** use effect for initialDate ([fe743d5](https://github.com/fremtind/jokul/commit/fe743d5884e87a125576e1735aec6c28d9e90fe5))
- **datepicker-react:** use new Date instead of undefined ([ec973b0](https://github.com/fremtind/jokul/commit/ec973b02b35e7f77efc0e010136583b41a80d7bf))

### Features

- add handling of blur and focus events ([16a84c5](https://github.com/fremtind/jokul/commit/16a84c53a3a229907ecaec19e27968804937344d))

## 3.0.0 (2020-03-30)

### Bug Fixes

- **datepicker-react:** edit css reference ([24aa7e6](https://github.com/fremtind/jokul/commit/24aa7e63988ff5a05d0257f9aa0ff4eebe2adfad))

### Documentation

- update README.md ([54a30c8](https://github.com/fremtind/jokul/commit/54a30c8770107bf4aded0b8bc73ec8ab88767000))

### BREAKING CHANGES

- you must import icon-button styles

## 2.0.1 (2020-03-25)

### Bug Fixes

- move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 2.0.0 (2020-03-16)

### Bug Fixes

- **datepicker-react:** add dev:style command to watch scss builds ([f2e9088](https://github.com/fremtind/jokul/commit/f2e908825c4c299ef03ec15139e00d32cc5962f8))
- **datepicker-react:** add handling of empty dates in datepicker ([12caf46](https://github.com/fremtind/jokul/commit/12caf4646037b9993ef4dc13fd86795797f837c6)), closes [#801](https://github.com/fremtind/jokul/issues/801)

### BREAKING CHANGES

- **datepicker-react:** The function passed to the onChange prop on Datepicker must now accept a Date or undefined as its
first argument

## 1.4.0 (2020-03-06)

### Features

- **portal:** implement dev and portal examples ([857f2e2](https://github.com/fremtind/jokul/commit/857f2e29359f9442a7da0c977a94d63dfbdfc194))

## 1.3.0 (2020-02-24)

### Bug Fixes

- **datepicker-react:** fix small problems with calendar button ([927626b](https://github.com/fremtind/jokul/commit/927626b95b6f6516a63e1b8dbe6af2879047bf30))
- **datepicker-react:** stop month nav from closing calendar ([2b3c52a](https://github.com/fremtind/jokul/commit/2b3c52af6baffa8658037952fe53ab2e83370a89))
- **datepicker-react:** use ref for storing unique id ([01aedf6](https://github.com/fremtind/jokul/commit/01aedf65fcdccc74026f39362ef8f3e56fd24be6))

### Features

- **datepicker:** add button to open datepicker calendar ([df636f8](https://github.com/fremtind/jokul/commit/df636f87a1934f970f3cff962564cf7d5032bef8)), closes [#593](https://github.com/fremtind/jokul/issues/593) [#773](https://github.com/fremtind/jokul/issues/773) [#774](https://github.com/fremtind/jokul/issues/774)
- **datepicker:** use core-toggle for datepicker calendar ([a868bdb](https://github.com/fremtind/jokul/commit/a868bdb9f50f31bf5839b37a515e010b8abb98bd))
- **datepicker-react:** expose calendar button title as a prop ([ea708b4](https://github.com/fremtind/jokul/commit/ea708b4efa485abff210b24ca3aedee14d500503))

## 1.2.2 (2020-02-18)

### Bug Fixes

- **jkl:** rename classnames import and move types ([e06ef21](https://github.com/fremtind/jokul/commit/e06ef21062b345d5defab335253041dad7ae6134))

## 1.2.0 (2020-01-16)

### Bug Fixes

- fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

### Features

- **portal:** use examples as documentation for all comp ([e99e56a](https://github.com/fremtind/jokul/commit/e99e56ab2f5bf13cd0e72bf010e6472a08ffabe9))

## 1.1.0 (2019-12-17)

### Features

-   add functionality for disabling dates ([cc8bb42](https://github.com/fremtind/jokul/commit/cc8bb42eb00e6b9566df99b3fdb8e51f7366143b)), closes [#567](https://github.com/fremtind/jokul/issues/567)

## 1.0.0 (2019-12-03)

### Bug Fixes

-   **datepicker-react:** datepicker fire onChange on edit ([df0cb61](https://github.com/fremtind/jokul/commit/df0cb6138d0fb255dd9eb2b2a347999151bde36d))
-   **datepicker-react:** datepicker fire onChange on edit ([be99c8b](https://github.com/fremtind/jokul/commit/be99c8b1a9f753977483e2c29c0978241fa8d3d8))

### Features

-   **datepicker:** implement compact version of datepicker ([c8168a5](https://github.com/fremtind/jokul/commit/c8168a5f336c93980ca3e05a8205f3d7bb057e45))
-   remove dropdown pkgs and replace with select pkgs ([14c2b4f](https://github.com/fremtind/jokul/commit/14c2b4fa5a236e2d7824834a7b074ae62ce870b4))

### Reverts

-   revert datepicker docs ([c1b4b87](https://github.com/fremtind/jokul/commit/c1b4b875c5fba7a034af8ca8d341eba821e7f7a1))
-   revert unnecessary changes to datepicker docs ([3fc3bd1](https://github.com/fremtind/jokul/commit/3fc3bd1c73e4b298fc93cbc3df50bcf2c4977c9e))

## 0.11.0 (2019-10-09)

### Bug Fixes

-   **datepicker-react:** add text-input as a dependency ([d574043](https://github.com/fremtind/jokul/commit/d574043))
-   **datepicker-react:** make tests run with new component structure ([e22d76b](https://github.com/fremtind/jokul/commit/e22d76b))
-   remove all alerts from examples ([26abee2](https://github.com/fremtind/jokul/commit/26abee2))

### Features

-   **datepicker:** implement new version and styles ([6f1b3e9](https://github.com/fremtind/jokul/commit/6f1b3e9))
-   **datepicker:** make datepicker shorter until opened ([ef87993](https://github.com/fremtind/jokul/commit/ef87993))
-   **datepicker:** update datepicker with new label design and variants ([9c479b6](https://github.com/fremtind/jokul/commit/9c479b6))
-   change name of label variants ([554749c](https://github.com/fremtind/jokul/commit/554749c))
-   extract label styles to core ([9fad287](https://github.com/fremtind/jokul/commit/9fad287))

## 0.10.0 (2019-09-23)

### Features

-   **jkl-datepicker-react:** fix loss of focus when opening datepicker ([87a8ab8](https://github.com/fremtind/jokul/commit/87a8ab8)), closes [#364](https://github.com/fremtind/jokul/issues/364)

## 0.9.0 (2019-08-30)

### Bug Fixes

-   **build:** remove visual regression tests ([a4502ea](https://github.com/fremtind/jokul/commit/a4502ea))
-   **date-picker-react:** remove test that didn't make sense ([6592a0d](https://github.com/fremtind/jokul/commit/6592a0d))
-   **date-picker-react:** set datestring with the inital date value ([db35ed0](https://github.com/fremtind/jokul/commit/db35ed0))
-   **datepicker:** allow classname to pass ([63d4394](https://github.com/fremtind/jokul/commit/63d4394)), closes [#290](https://github.com/fremtind/jokul/issues/290)
-   **datepicker:** only close datepicker when picking a day ([b1995f7](https://github.com/fremtind/jokul/commit/b1995f7))
-   **datepicker-react:** make datepicker close on focus outside ([901152f](https://github.com/fremtind/jokul/commit/901152f))
-   **react-hooks:** use correct event firing in tests ([3f74393](https://github.com/fremtind/jokul/commit/3f74393))

### Features

-   **datepicker:** add bottomText to datepicker ([7123c8e](https://github.com/fremtind/jokul/commit/7123c8e))
-   **datepicker:** close datepicker on choosing date ([104e5ae](https://github.com/fremtind/jokul/commit/104e5ae))
-   **datepicker-react:** add ability to type text in the datepicker ([d4233ba](https://github.com/fremtind/jokul/commit/d4233ba))
-   **datepicker-react:** add ability to type text in the datepicker ([704aa12](https://github.com/fremtind/jokul/commit/704aa12))
-   **datepicker-react:** add placeholder prop ([6b51aaa](https://github.com/fremtind/jokul/commit/6b51aaa))
-   **datepicker-react:** make datepicker close on enter/escape ([126725b](https://github.com/fremtind/jokul/commit/126725b))

## 0.8.0 (2019-08-02)

### Bug Fixes

-   **datepicker-react:** stop datepicker from submitting forms when opened ([b540721](https://github.com/fremtind/jokul/commit/b540721))

### Features

-   **datepicker-react:** add support for custom month/day names ([1b72a44](https://github.com/fremtind/jokul/commit/1b72a44))
-   **test:** add visual regression testing ([1553b28](https://github.com/fremtind/jokul/commit/1553b28))

## 0.7.0 (2019-07-30)

### Bug Fixes

-   **datepicker:** minor css fixes ([fc924bc](https://github.com/fremtind/jokul/commit/fc924bc))
-   **datepicker:** update according to changes in text-input ([1284e98](https://github.com/fremtind/jokul/commit/1284e98))

### Features

-   **datepicker-react:** use select from jkl-dropdown for month picker ([b57ff76](https://github.com/fremtind/jokul/commit/b57ff76))

## 0.6.0 (2019-07-18)

### Bug Fixes

-   **build:** normalize react package.json ([6c29e08](https://github.com/fremtind/jokul/commit/6c29e08)), closes [#156](https://github.com/fremtind/jokul/issues/156)
-   **datepicker-react:** specify entry points for the package ([a59adb5](https://github.com/fremtind/jokul/commit/a59adb5))

### Features

-   **datepicker:** update style according to sketches ([dc3d82b](https://github.com/fremtind/jokul/commit/dc3d82b))

## 0.2.1 (2019-07-15)

### Bug Fixes

-   **core:** use correct path for normalize in datepicker example ([919f778](https://github.com/fremtind/jokul/commit/919f778))

## 0.2.0 (2019-07-15)

### Bug Fixes

-   **publish:** update access on logo and accodion ([3b557fb](https://github.com/fremtind/jokul/commit/3b557fb))

### Features

-   **build:** add browserlist pkg and browserlist to every pkg ([3dcc9ca](https://github.com/fremtind/jokul/commit/3dcc9ca))

## 0.1.0 (2019-07-15)

### Bug Fixes

-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))

### Features

-   **datepicker:** add initial datepicker ([c64365c](https://github.com/fremtind/jokul/commit/c64365c))
-   **datepicker:** split style into its own pkg ([1a4acb7](https://github.com/fremtind/jokul/commit/1a4acb7))
