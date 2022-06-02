# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [9.3.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-text-input-react@9.2.1...@fremtind/jkl-text-input-react@9.3.0) (2022-06-02)

### Features

-   åpne for å merke skjemafelter som ugyldige uten errorLabel ([3c722ec](https://github.com/fremtind/jokul/commit/3c722ec34321789c37fe45b30d6bf975576489ee))

# 9.2.0 (2022-06-01)

### Features

-   ny prop align for valutainputs ([47919e2](https://github.com/fremtind/jokul/commit/47919e2cd01485221d2e5e89469d05aed6cc06f8))

# 9.1.0 (2022-04-28)

### Features

-   eksponer labelProps i skjemakomponenter ([db27e30](https://github.com/fremtind/jokul/commit/db27e309a8a72913d8761b2967e940113c47b779))

## 9.0.10 (2022-03-10)

### Bug Fixes

-   bruk den riktige genericen per type ([a8e8802](https://github.com/fremtind/jokul/commit/a8e88028c66379c3fac2cd10ae0478aadd1d5392))

## 9.0.8 (2022-03-04)

### Bug Fixes

-   rett opp feil bruk av aria-label ([9c0b73f](https://github.com/fremtind/jokul/commit/9c0b73fac789b3ceab8dfef63b939f7468764270)), closes [#2780](https://github.com/fremtind/jokul/issues/2780)

## 9.0.7 (2022-03-01)

### Bug Fixes

-   intern tilstand oppdateres selv med onBlur ([1e9b0bd](https://github.com/fremtind/jokul/commit/1e9b0bd27f7f4920a9dc20737a5e59b0ef4465ab)), closes [#2770](https://github.com/fremtind/jokul/issues/2770)

## 9.0.6 (2022-02-25)

### Bug Fixes

-   skriv om beregningen av høyde ved autoekspandering ([2b318ef](https://github.com/fremtind/jokul/commit/2b318efb0b7a60a5be1200db836d005ddeb9ca2a)), closes [#2752](https://github.com/fremtind/jokul/issues/2752)

## 9.0.2 (2022-02-14)

### Bug Fixes

-   autoExpand sometimes acts as startOpen ([8f23d8a](https://github.com/fremtind/jokul/commit/8f23d8ac9ec3f1f69d2b97cd167818db4318c19d)), closes [#2717](https://github.com/fremtind/jokul/issues/2717)

# [9.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-text-input-react@8.0.0...@fremtind/jkl-text-input-react@9.0.0) (2022-02-07)

### Bug Fixes

-   eksporter typer på riktig måte med isolatedModules ([9e8fe19](https://github.com/fremtind/jokul/commit/9e8fe19077fd0efc8715ecbf0141b5c5b9abd758))
-   fjern inverted-prop ([de5f8b8](https://github.com/fremtind/jokul/commit/de5f8b83ae8f025826f4c56d3aeb5e081dea66cc)), closes [#2646](https://github.com/fremtind/jokul/issues/2646)

### BREAKING CHANGES

-   Fjernet `inverted`-prop. Bruk `data-theme="dark"` om du trenger overstyre temaet.

# [8.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-text-input-react@7.0.23...@fremtind/jkl-text-input-react@8.0.0) (2022-02-07)

### Bug Fixes

-   fjern inverted-prop ([de5f8b8](https://github.com/fremtind/jokul/commit/de5f8b83ae8f025826f4c56d3aeb5e081dea66cc)), closes [#2646](https://github.com/fremtind/jokul/issues/2646)

### BREAKING CHANGES

-   Fjernet `inverted`-prop. Bruk `data-theme="dark"` om du trenger overstyre temaet.

## 7.0.22 (2022-02-02)

### Bug Fixes

-   redesign feilstate for text-input ([c532e27](https://github.com/fremtind/jokul/commit/c532e27692c0b5fe3397b62694129aa014b97e49)), closes [#2631](https://github.com/fremtind/jokul/issues/2631) [#2631](https://github.com/fremtind/jokul/issues/2631) [#2631](https://github.com/fremtind/jokul/issues/2631) [#1417](https://github.com/fremtind/jokul/issues/1417)
-   redesign label for feilmelding ([b5eeabc](https://github.com/fremtind/jokul/commit/b5eeabc6fc755ceec2dc8144c85af42c5f1b86c6)), closes [#2631](https://github.com/fremtind/jokul/issues/2631)
-   slett utdaterte snapshots ([fcd47bb](https://github.com/fremtind/jokul/commit/fcd47bbaedaadd528130eb6d22b1608a8eb90aa4))

## 7.0.12 (2021-12-09)

### Bug Fixes

-   deprecate leadText ([1075ca4](https://github.com/fremtind/jokul/commit/1075ca475583c34dc3c7297c2f1a5f86b27075f5))

## 7.0.11 (2021-12-09)

### Bug Fixes

-   bruk riktig lengde for TextInput ([8ae7835](https://github.com/fremtind/jokul/commit/8ae783500e44576baeea28627b28d070789980bf))

## 7.0.10 (2021-12-08)

### Bug Fixes

-   fix maxWidth bug with narrow screens ([256c2ef](https://github.com/fremtind/jokul/commit/256c2ef60f2b662e244d698e72d08e977e5af723)), closes [#2576](https://github.com/fremtind/jokul/issues/2576)

## 7.0.5 (2021-11-18)

### Bug Fixes

-   unngå å kutte toppen av Å i Chrome ([02e4922](https://github.com/fremtind/jokul/commit/02e49228682cd41d10ea5b8edb25f55eb253041b)), closes [#2503](https://github.com/fremtind/jokul/issues/2503)

## 7.0.0 (2021-10-21)

### chore

-   updates dependencies ([b975200](https://github.com/fremtind/jokul/commit/b97520045c02e4bcb44ebde159c60a7dff7f01d6))

### BREAKING CHANGES

-   depends on jkl-core v8 with breaking changes

## 6.3.0 (2021-10-18)

### Features

-   legg til støtte for en teller i TextArea ([c17c42b](https://github.com/fremtind/jokul/commit/c17c42bb736f5c30f14cd9aa9d7c7863db16edf4)), closes [#1477](https://github.com/fremtind/jokul/issues/1477)

## 6.2.2 (2021-09-30)

### Bug Fixes

-   sync padding i TextInput med Figma ([f269f4f](https://github.com/fremtind/jokul/commit/f269f4f2750caad0d2bcf01d1b84b20dff048131))

## 6.2.0 (2021-09-15)

### Features

-   **text-area:** add inline and startOpen props ([88e4897](https://github.com/fremtind/jokul/commit/88e4897c50e490fa427208bca4c212093bb8db40))

## 6.1.0 (2021-09-07)

### Features

-   add data-testautoid to CheckBox, FieldGroup, TextInput and RadioButtons ([4c751ed](https://github.com/fremtind/jokul/commit/4c751ed9b69c1e67670a05d247783c27c8cd76b9))

## 6.0.6 (2021-09-03)

### Bug Fixes

-   default variant should be small ([ce1c05b](https://github.com/fremtind/jokul/commit/ce1c05bd9344f03b41ea23068d0f66e20714d134))

## 6.0.0 (2021-07-09)

### Features

-   use new typographic scale ([8b9c490](https://github.com/fremtind/jokul/commit/8b9c4906b76a19f0b6abb158781d5a7564ad793e))

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

## 3.8.15 (2021-06-02)

### Bug Fixes

-   **text-area:** remove describedby attr when field has no message ([dddc472](https://github.com/fremtind/jokul/commit/dddc472ff7b6ed47ac96f15128b9f00d24a9c4cf))

## 3.8.8 (2021-02-16)

### Bug Fixes

-   **text-input:** expose default value prop ([11d7525](https://github.com/fremtind/jokul/commit/11d752585e2fa39b25b9386591ba224b087a2d2b))

## 3.8.7 (2021-02-12)

### Bug Fixes

-   add react 17 types as valid peerdep ([a074c34](https://github.com/fremtind/jokul/commit/a074c34dcece089ad6b4c581b8c920c8bdd4f1e0))

## 3.8.0 (2020-12-15)

### Features

-   display types in portal ([5c62a16](https://github.com/fremtind/jokul/commit/5c62a161c278d3a5a136741aea8dcf9b62338bda))

## 3.7.0 (2020-11-25)

### Features

-   update to react 17 ([4639058](https://github.com/fremtind/jokul/commit/4639058067eaa9be222825f8ac4f495a1e74cc0f))

## 3.6.0 (2020-11-12)

### Features

-   **text-input-react:** add onClick prop to BaseInputField ([a45fd3d](https://github.com/fremtind/jokul/commit/a45fd3def73ec13ca8d57778cec3eec36482f701))

## 3.5.14 (2020-10-28)

### Bug Fixes

-   update related to match sorter ([5e43a3c](https://github.com/fremtind/jokul/commit/5e43a3ca1fc3ad25bbb522deb763821f52462f88))

## 3.5.10 (2020-09-24)

### Bug Fixes

-   **text-input:** changes alignment ([fd044a8](https://github.com/fremtind/jokul/commit/fd044a87e10eb0841d5205e50e544904f54f99c3))

## 3.5.9 (2020-09-11)

### Bug Fixes

-   **text-input:** uses search icon ([1c00d95](https://github.com/fremtind/jokul/commit/1c00d954f642454847b501f591732aca2dec3fde))

## 3.5.0 (2020-08-26)

### Features

-   **autosuggest:** add autosuggest component ([ac3d399](https://github.com/fremtind/jokul/commit/ac3d3996be720d93ae4396dbdb120a1911e6025f))

## 3.4.0 (2020-07-29)

### Features

-   **build:** use @babel/runtime instead of inlining helpers in each file ([bbadce5](https://github.com/fremtind/jokul/commit/bbadce52ba4da5d540b479b07273332587bed436)), closes [#1136](https://github.com/fremtind/jokul/issues/1136)

## 3.3.9 (2020-06-26)

### Bug Fixes

-   align nanoid version, and migrate to 3 ([a3d571d](https://github.com/fremtind/jokul/commit/a3d571db3e18937d40df5268c8f711232a72314e))

## 3.3.3 (2020-06-04)

### Bug Fixes

-   **text-input:** account for padding when setting width ([819a138](https://github.com/fremtind/jokul/commit/819a1380ed7418feacd4a6366fe589e722c3737a)), closes [#965](https://github.com/fremtind/jokul/issues/965)
-   **text-input:** remove extraneous class from input field ([5cc474e](https://github.com/fremtind/jokul/commit/5cc474e91de771439108ee6cbc826ff6d3de06be)), closes [#969](https://github.com/fremtind/jokul/issues/969)

## 3.3.1 (2020-05-27)

### Bug Fixes

-   **text-input-react:** add missing nanoid dependency ([9f17ad1](https://github.com/fremtind/jokul/commit/9f17ad15ee7e45555b95da375231da0e37c2276e))

## 3.3.0 (2020-05-20)

### Bug Fixes

-   export interface in an actual functioning manner ([928222b](https://github.com/fremtind/jokul/commit/928222b619e5964c45d9fc33a4c980ba8d68750c))

### Features

-   expose prop interface for textinput and button ([5be19a4](https://github.com/fremtind/jokul/commit/5be19a4d7af4ae80fcda180faf0473960de868ff))

## 3.2.0 (2020-05-13)

### Bug Fixes

-   import labels and links from core ([f2bba87](https://github.com/fremtind/jokul/commit/f2bba87aab70e887e44b11b4f390324ab3fa5a2b))
-   **BaseInputField:** fix proper passing of className prop ([#950](https://github.com/fremtind/jokul/issues/950)) ([d76736a](https://github.com/fremtind/jokul/commit/d76736ad67dae896b573b7267e1719e694ab1778))

### Features

-   **text-input:** expose more properties on action button ([cea9e75](https://github.com/fremtind/jokul/commit/cea9e758a768fa5b3e66bbaf3943e23e5b617929))

## 3.1.0 (2020-05-11)

### Features

-   **text-input-react:** add functionality to pass onKey events ([3abc52f](https://github.com/fremtind/jokul/commit/3abc52fa6b0afabb890f4a18a27f3f24bb1a6d44))

## 3.0.0 (2020-04-27)

### Bug Fixes

-   **text-input-react:** ensure consistent hook calls ([db29140](https://github.com/fremtind/jokul/commit/db2914018817d3b16d6acaadf4fdd626cfef9fd2))
-   **textarea:** ensure correct initial height for autoexpand ([3aac406](https://github.com/fremtind/jokul/commit/3aac40669722043fd4688041883480cd2fedb07e))

### Features

-   **text-area:** add support for inverted mode ([152dd5e](https://github.com/fremtind/jokul/commit/152dd5eede1d915f390f21308b4fe6efcf6326ca))
-   **text-input:** consolidate text inputs and apply new style ([0b1cc84](https://github.com/fremtind/jokul/commit/0b1cc847c07790abf7feb303e1e24c3450090b27))
-   **text-input:** start implementing new text inputs ([b2bcfab](https://github.com/fremtind/jokul/commit/b2bcfab37a4c1da542ebd49ad5fdba249e17b63a))
-   **text-input-react:** add support for ref forwarding ([8b2a517](https://github.com/fremtind/jokul/commit/8b2a5172c6e66f880957aa7f576eb6eb9ca4fb17))
-   **text-input-react:** expose base input component ([15b0409](https://github.com/fremtind/jokul/commit/15b04091b1f5771e850a30edc31d2ff14cd52d96))
-   add support for inverted error labels ([a55f35b](https://github.com/fremtind/jokul/commit/a55f35b91d98e1ddd82da3b138ff3edd8de5b5a5))

### BREAKING CHANGES

-   **text-input-react:** Behaviour of refs on TextArea and TextInput may change
-   **text-input:** _ TextField is now called TextInput|_ The following variants have all been integrated into
    TextInput: ActionTextField, InlineTextField, BaseInputField

## 2.0.0 (2020-03-30)

### Documentation

-   update README.md ([54a30c8](https://github.com/fremtind/jokul/commit/54a30c8770107bf4aded0b8bc73ec8ab88767000))

### BREAKING CHANGES

-   you must import icon-button styles

## 1.3.3 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)
-   **removed tests:** removed test for autoexpand ([9019667](https://github.com/fremtind/jokul/commit/9019667e73c80d11e86aaa20fe681de176808d16)), closes [#851](https://github.com/fremtind/jokul/issues/851)
-   **suppoert for autoexpand:** support for autoexpand ([8720e08](https://github.com/fremtind/jokul/commit/8720e08b108204546c2e538df7c0ed59898046e9))
-   **support for autoexpand:** added support for autoexpand ([0732d67](https://github.com/fremtind/jokul/commit/0732d671b125e7419045f8b7237a64a0677f0e5e)), closes [#851](https://github.com/fremtind/jokul/issues/851)
-   **text-input-react:** fix correct height with long placeholder ([10acacb](https://github.com/fremtind/jokul/commit/10acacb14c5abe77b737b16d51185dd00f8d587e))
-   **text-input-react:** fix wrong firefox height ([d32498a](https://github.com/fremtind/jokul/commit/d32498a3baecbcc7a92864a2e6b6bf82d7b14fd9))
-   **text-input-react:** only set rows when auto expanding ([400d836](https://github.com/fremtind/jokul/commit/400d8369e8afc8a4cbb37ccceef51282203e10de))
-   **text-input-react:** remove unnecessary overflowY hidden ([00d0046](https://github.com/fremtind/jokul/commit/00d0046430bb8d3699ea0ed8fcaff286b752e64e))

## 1.3.0 (2020-03-06)

### Features

-   **portal:** implement dev and portal examples ([857f2e2](https://github.com/fremtind/jokul/commit/857f2e29359f9442a7da0c977a94d63dfbdfc194))
-   **text-input-react:** add autoExpand to TextArea ([919193b](https://github.com/fremtind/jokul/commit/919193b542c50c583da6d4575386cce3e1ae758c)), closes [#769](https://github.com/fremtind/jokul/issues/769)

## 1.2.1 (2020-02-24)

### Bug Fixes

-   **text-input-react:** adjust size of "clear" action icon ([19761c4](https://github.com/fremtind/jokul/commit/19761c44fdea534fdc177a3753db10e8d0b53870))

## 1.2.0 (2020-02-19)

### Bug Fixes

-   **text-input-react:** fix cropped search icon ([5d45405](https://github.com/fremtind/jokul/commit/5d4540517ab748111a25c598ba282bf72ca2a3e2))

### Features

-   **text-input:** tweak action icon placement and add focus state ([7b37ee1](https://github.com/fremtind/jokul/commit/7b37ee1bd6aee1c33db48f3b85024693d63790dd))

## 1.1.2 (2020-02-18)

### Bug Fixes

-   **jkl:** rename classnames import and move types ([e06ef21](https://github.com/fremtind/jokul/commit/e06ef21062b345d5defab335253041dad7ae6134))

## 1.1.0 (2020-01-16)

### Bug Fixes

-   **text-input:** fix lint ([50145a2](https://github.com/fremtind/jokul/commit/50145a29f0c7760b7b9664ff0ea47b6089767216))
-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

### Features

-   **portal:** use examples as documentation for all comp ([e99e56a](https://github.com/fremtind/jokul/commit/e99e56ab2f5bf13cd0e72bf010e6472a08ffabe9))
-   update to new typography naming ([5c061d7](https://github.com/fremtind/jokul/commit/5c061d7b52529f83a16cf944db240984b67f5229))

## 1.0.0 (2019-12-03)

### Bug Fixes

-   add type to button ([aa8f825](https://github.com/fremtind/jokul/commit/aa8f82548fe19c6bd6be16cd88e2643fcf28348d))
-   fix circular dependency in index, move into utils.ts ([fc79bc0](https://github.com/fremtind/jokul/commit/fc79bc0af338127ef306496cd39fceac939d65f0))
-   send props to BaseInputField and fix invalid-state ([9fcf5ec](https://github.com/fremtind/jokul/commit/9fcf5ecfd98c1b22609b29e8d9453140d04d4821))

### Features

-   **action-text-field:** add new text-field component ([4fdd80b](https://github.com/fremtind/jokul/commit/4fdd80b06d51ec633f2dd28ebcb1bc5a71f6c8ac))
-   **text-field:** implement in line version of TextField ([5999a32](https://github.com/fremtind/jokul/commit/5999a3229f4c752e60f346ee1051f395505d188e))
-   add aria-describedby to BaseInputField ([9e8898e](https://github.com/fremtind/jokul/commit/9e8898e9bbb8683631adcee32eacc3a4bc0506ea))
-   add BaseInputField component and enable stand-alone use of Label ([7f37cd4](https://github.com/fremtind/jokul/commit/7f37cd43dd336a18f80edb070017edbdb9dd77ce))
-   add className and remove forceCompact ([c9171c6](https://github.com/fremtind/jokul/commit/c9171c66a65e226c3bf133a8beffde696e4bf5bf))
-   add description prop to action-button ([b6c6139](https://github.com/fremtind/jokul/commit/b6c613970b281fd122de5a004232d51f7f57df0b))
-   add description prop to button ([8c73461](https://github.com/fremtind/jokul/commit/8c734610d1b639e577ec0882549077da062e2aa9))

## 0.9.0 (2019-10-09)

### Bug Fixes

-   **text-field-test:** fixed test for max-length ([9dd8cb1](https://github.com/fremtind/jokul/commit/9dd8cb1)), closes [#419](https://github.com/fremtind/jokul/issues/419)

### Features

-   **field-group:** remove Field component and update style of FieldGroup ([8a451ac](https://github.com/fremtind/jokul/commit/8a451ac))
-   extract label styles to core ([9fad287](https://github.com/fremtind/jokul/commit/9fad287))
-   implement Field pattern in text input ([f3877e4](https://github.com/fremtind/jokul/commit/f3877e4))
-   **text-field:** add max length to text-input ([4c27f39](https://github.com/fremtind/jokul/commit/4c27f39)), closes [#418](https://github.com/fremtind/jokul/issues/418)
-   **text-field:** add option to force compact mode ([07c7fea](https://github.com/fremtind/jokul/commit/07c7fea))
-   **text-field:** implement new design for text inputs ([13b45c6](https://github.com/fremtind/jokul/commit/13b45c6))
-   **text-input-react:** restore structure of text areas ([588dad5](https://github.com/fremtind/jokul/commit/588dad5))
-   **text-input-react:** restore structure of text inputs ([c520540](https://github.com/fremtind/jokul/commit/c520540))

## 0.8.0 (2019-08-30)

### Bug Fixes

-   **build:** remove visual regression tests ([a4502ea](https://github.com/fremtind/jokul/commit/a4502ea))
-   **text-input-react:** add onFocus event prop type to textField ([591a836](https://github.com/fremtind/jokul/commit/591a836))
-   **textinput:** add onblur to textfields ([c49a36e](https://github.com/fremtind/jokul/commit/c49a36e)), closes [#269](https://github.com/fremtind/jokul/issues/269)

### Features

-   **dropdown:** add invalid state, errortext and help text ([a731e52](https://github.com/fremtind/jokul/commit/a731e52))
-   **text-field:** add placeholder to text field ([d974be0](https://github.com/fremtind/jokul/commit/d974be0))
-   **text-input:** clean up text-input ([cd8c876](https://github.com/fremtind/jokul/commit/cd8c876))
-   **text-input-react:** only draw placeholder if provided ([cde4dad](https://github.com/fremtind/jokul/commit/cde4dad))

## 0.7.0 (2019-08-02)

### Bug Fixes

-   **core:** fix help text spacing, error color, minor ios portal fix ([ae19bb7](https://github.com/fremtind/jokul/commit/ae19bb7))
-   **text-input-react:** pass className to textarea ([4133513](https://github.com/fremtind/jokul/commit/4133513))
-   **textfield:** better naming, fix spacing, add test ([c5e8e82](https://github.com/fremtind/jokul/commit/c5e8e82))

### Features

-   **test:** add visual regression testing ([1553b28](https://github.com/fremtind/jokul/commit/1553b28))
-   **text-field:** add help and error text to field and area ([e18f117](https://github.com/fremtind/jokul/commit/e18f117)), closes [#41](https://github.com/fremtind/jokul/issues/41)
-   **text-input-react:** add inline version ([3fab7da](https://github.com/fremtind/jokul/commit/3fab7da))

## 0.6.0 (2019-07-30)

### Features

-   **text-input:** update style according to sketches ([d60c022](https://github.com/fremtind/jokul/commit/d60c022))

## 0.5.1 (2019-07-18)

### Bug Fixes

-   **build:** normalize react package.json ([6c29e08](https://github.com/fremtind/jokul/commit/6c29e08)), closes [#156](https://github.com/fremtind/jokul/issues/156)

## 0.2.0 (2019-07-15)

### Bug Fixes

-   **publish:** update access on logo and accodion ([3b557fb](https://github.com/fremtind/jokul/commit/3b557fb))

### Features

-   **build:** add browserlist pkg and browserlist to evry pkg ([3dcc9ca](https://github.com/fremtind/jokul/commit/3dcc9ca))

## 0.1.0 (2019-07-15)

### Bug Fixes

-   **build:** fix deterministic build order ([78566ef](https://github.com/fremtind/jokul/commit/78566ef))
-   **portal:** remove storybook and old portal ([c69d7fa](https://github.com/fremtind/jokul/commit/c69d7fa))
-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))
-   **textinput:** fixed spacing ([a74c448](https://github.com/fremtind/jokul/commit/a74c448))
-   **typescript:** clean up tsconfig, make sure everything is typechecked ([745a0fb](https://github.com/fremtind/jokul/commit/745a0fb))
-   **typescript:** remove unnecessary tsconfig ([c594b9e](https://github.com/fremtind/jokul/commit/c594b9e))

### Features

-   **datepicker:** add initial datepicker ([c64365c](https://github.com/fremtind/jokul/commit/c64365c))
-   **textarea:** add textarea, refactor text field ([da253d2](https://github.com/fremtind/jokul/commit/da253d2))
