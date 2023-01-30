# Changelog

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 9.0.0 (2023-01-16)

### Features

-   forenkle bruken av tooltip med FieldGroup ([779eb91](https://github.com/fremtind/jokul/commit/779eb913fa992dac394ee0adf147c34b5b2ee78b))

### BREAKING CHANGES

-   `variant` er fjernet. Bruk `labelProps={{ variant }}` i stedet.

## 8.0.12 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

## 8.0.9 (2022-11-11)

### Bug Fixes

-   legg til manglende dependencies internt mellom pakker ([761936f](https://github.com/fremtind/jokul/commit/761936ff2ecdf7338dcddb7f33e984f229cef48b)), closes [#3232](https://github.com/fremtind/jokul/issues/3232)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## 8.0.8 (2022-11-09)

### Bug Fixes

-   legg til manglende dependencies internt mellom pakker ([761936f](https://github.com/fremtind/jokul/commit/761936ff2ecdf7338dcddb7f33e984f229cef48b)), closes [#3232](https://github.com/fremtind/jokul/issues/3232)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

# 8.0.0 (2022-09-08)

### chore

-   fjern forceCompact-props ([0f8bfeb](https://github.com/fremtind/jokul/commit/0f8bfebc68fe6ebf6368bf8a37e2af78f4d7b46d))

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))
-   nytt kompaktdesign for radioknapper ([89f9eff](https://github.com/fremtind/jokul/commit/89f9eff1db04947fe05d59ebd7b67490688cae62))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"
-   forceCompact er fjernet. Bruk compact og regresjonstest steder du bruker kompaktvarianter.

## 7.1.2 (2022-07-25)

### Bug Fixes

-   ikke overskriv name med undefined fra context ([f95d2d6](https://github.com/fremtind/jokul/commit/f95d2d64b66bd61e648b49489de190ac1b35eca0))

# 7.1.0 (2022-07-22)

### Features

-   skill ut og eksporter en BaseRadioButton for avanserte scenarier ([482c6f5](https://github.com/fremtind/jokul/commit/482c6f5cae6fe32497233cf9142a656430ca52b7))

## 7.0.5 (2022-07-21)

### Bug Fixes

-   hjelp skjermleser annonsere at radiogruppen har valideringsfeil ([af4121b](https://github.com/fremtind/jokul/commit/af4121b82cba61543f5ac1b30f1902f7ca30b406))

## [7.0.4](https://github.com/fremtind/jokul/compare/@fremtind/jkl-radio-button-react@7.0.3...@fremtind/jkl-radio-button-react@7.0.4) (2022-06-13)

### Bug Fixes

-   merk CSS og SCSS som side-effects ([dac2e2b](https://github.com/fremtind/jokul/commit/dac2e2b5f4d1b31485821bf6ad8ec4c7c2769cca))

### Performance Improvements

-   bruk tiny-glob for globbing av filer under bygg ([246952a](https://github.com/fremtind/jokul/commit/246952ae75afe20bcf0d007a0a068b76b114f9a6))

# [7.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-radio-button-react@6.2.1...@fremtind/jkl-radio-button-react@7.0.0) (2022-06-07)

### chore

-   fiks lintfeil ([4093d2a](https://github.com/fremtind/jokul/commit/4093d2a2ae7bbe0d30de882b9f5d144e8e77cede))

### BREAKING CHANGES

-   Pakken avhenger av en breaking versjon av core

# 6.2.0 (2022-04-28)

### Features

-   bruk children som label i RadioButton ([4841a25](https://github.com/fremtind/jokul/commit/4841a2564afb84b80b9ce88e231379868b742227))

## 6.1.5 (2022-02-02)

### Bug Fixes

-   bruk skjemakategori til skjemakomp ([d17a3ce](https://github.com/fremtind/jokul/commit/d17a3cefc9c3b61cb3c551143461e1bb471d8c62))
-   slett utdaterte snapshots ([fcd47bb](https://github.com/fremtind/jokul/commit/fcd47bbaedaadd528130eb6d22b1608a8eb90aa4))

## 6.1.0 (2022-01-07)

### Features

-   **radio-button:** changed label to ReactNode ([2a04d76](https://github.com/fremtind/jokul/commit/2a04d7684bba850a2cdaea693d5f32a721fd6e57))

## 6.0.0 (2021-11-09)

### Features

-   refactor RadioButtons for bedre hook-form støtte ([467cb0c](https://github.com/fremtind/jokul/commit/467cb0cae3c5ba6ad789b12fedd0d0f2fb8aa97e)), closes [#2435](https://github.com/fremtind/jokul/issues/2435)

### BREAKING CHANGES

-   Komponenten har fått et helt nytt API. Se migreringsdok.

## 5.0.0 (2021-10-21)

### chore

-   updates dependencies ([b975200](https://github.com/fremtind/jokul/commit/b97520045c02e4bcb44ebde159c60a7dff7f01d6))

### BREAKING CHANGES

-   depends on jkl-core v8 with breaking changes

## 4.2.0 (2021-09-15)

### Features

-   add forwardRef to radio buttons ([24856c3](https://github.com/fremtind/jokul/commit/24856c3474af68247831c3e7cd14bb55ada82222))

## 4.1.0 (2021-09-07)

### Features

-   add data-testautoid to CheckBox, FieldGroup, TextInput and RadioButtons ([4c751ed](https://github.com/fremtind/jokul/commit/4c751ed9b69c1e67670a05d247783c27c8cd76b9))

## 4.0.0 (2021-07-09)

### Features

-   use new typographic scale ([19cf729](https://github.com/fremtind/jokul/commit/19cf729c29ddda8b10d656122ca8f5d70b684037))

### BREAKING CHANGES

-   Depends on jkl-core version with breaking changes

## 3.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 2.0.0 (2021-06-07)

### Features

-   upgrade dependency jkl-core to v5.0.0 ([c3dc8dc](https://github.com/fremtind/jokul/commit/c3dc8dcbd3cba99502f1124cbe1dcaa688177f55))

### BREAKING CHANGES

-   Upgrades dependency jkl-core to v5.0.0, introducing breaking changes to color variables

## 1.9.5 (2021-02-12)

### Bug Fixes

-   add react 17 types as valid peerdep ([a074c34](https://github.com/fremtind/jokul/commit/a074c34dcece089ad6b4c581b8c920c8bdd4f1e0))

## 1.9.0 (2020-12-15)

### Features

-   display types in portal ([5c62a16](https://github.com/fremtind/jokul/commit/5c62a161c278d3a5a136741aea8dcf9b62338bda))

## 1.8.0 (2020-11-25)

### Features

-   update to react 17 ([4639058](https://github.com/fremtind/jokul/commit/4639058067eaa9be222825f8ac4f495a1e74cc0f))

## 1.7.0 (2020-10-29)

### Features

-   add support for more attributes on RadioButtonOption ([65e4c5a](https://github.com/fremtind/jokul/commit/65e4c5a5b522520399e3fceba2a5d7549f72e317))

## 1.6.0 (2020-09-02)

### Features

-   **field-group:** implement inverted mode in field group ([11dc6bb](https://github.com/fremtind/jokul/commit/11dc6bbca1635383f67fef4bb82de80fe6628c20))

## 1.5.0 (2020-07-29)

### Features

-   **build:** use @babel/runtime instead of inlining helpers in each file ([bbadce5](https://github.com/fremtind/jokul/commit/bbadce52ba4da5d540b479b07273332587bed436)), closes [#1136](https://github.com/fremtind/jokul/issues/1136)

## 1.4.0 (2020-07-06)

### Features

-   **radio-buttons:** make labels responsive ([85317fb](https://github.com/fremtind/jokul/commit/85317fbba3bd647452833ecb7de6d8ad23a697ac)), closes [#986](https://github.com/fremtind/jokul/issues/986)

## 1.3.3 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 1.3.0 (2020-03-06)

### Features

-   **portal:** implement dev and portal examples ([857f2e2](https://github.com/fremtind/jokul/commit/857f2e29359f9442a7da0c977a94d63dfbdfc194))
-   **portal:** portal component examples and meu fixes ([2ffe8fe](https://github.com/fremtind/jokul/commit/2ffe8fe39ff826983f027dad1ea7ffa97a013ccf))

## 1.2.0 (2020-02-18)

### Bug Fixes

-   **jkl:** rename classnames import and move types ([e06ef21](https://github.com/fremtind/jokul/commit/e06ef21062b345d5defab335253041dad7ae6134))
-   **radiobutton-react:** add support for className prop ([6f058ef](https://github.com/fremtind/jokul/commit/6f058ef95cec01ceb1a0322a65413097583ada68))

### Features

-   **radio-button:** add inverted mode ([fda7e5f](https://github.com/fremtind/jokul/commit/fda7e5f26ed7742be1a4fce9afe5ba5a4cacf292))

## 1.1.0 (2020-01-16)

### Bug Fixes

-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

### Features

-   **portal:** use examples as documentation for all comp ([e99e56a](https://github.com/fremtind/jokul/commit/e99e56ab2f5bf13cd0e72bf010e6472a08ffabe9))

## 1.0.0 (2019-12-03)

### Features

-   **radio-button:** implement compact/mobile version ([e3c2c6f](https://github.com/fremtind/jokul/commit/e3c2c6fdc4de9b59900f1dc8a0b132cea0cb733a))
-   **radio-button-react:** rename radio button components ([d09fe6f](https://github.com/fremtind/jokul/commit/d09fe6fd321f2242a94d7d60deb5ae7997da0ccf))

## 0.8.0 (2019-10-09)

### Bug Fixes

-   make radio/checkbox stack vertically by default ([11bcdbd](https://github.com/fremtind/jokul/commit/11bcdbd)), closes [#387](https://github.com/fremtind/jokul/issues/387)
-   **radio-button:** fix variant names in example ([775992a](https://github.com/fremtind/jokul/commit/775992a))

### Features

-   implement Field pattern in text input ([f3877e4](https://github.com/fremtind/jokul/commit/f3877e4))
-   **radio-button:** use updated field group in radio button groups ([ea1f67e](https://github.com/fremtind/jokul/commit/ea1f67e))

## 0.7.0 (2019-08-30)

### Bug Fixes

-   **build:** remove visual regression tests ([a4502ea](https://github.com/fremtind/jokul/commit/a4502ea))

### Features

-   **field-group:** add field group style and react component ([f002974](https://github.com/fremtind/jokul/commit/f002974))
-   **field-group:** expand field group functionality ([8a9f40b](https://github.com/fremtind/jokul/commit/8a9f40b))
-   **radiobutton:** add error state to radio button ([a2052a7](https://github.com/fremtind/jokul/commit/a2052a7))

## 0.6.0 (2019-08-02)

### Bug Fixes

-   **radiobutton:** fix radio button screenshot ([1cf87b3](https://github.com/fremtind/jokul/commit/1cf87b3))
-   **test:** change travis order, allow more diff on screenshots ([bb42529](https://github.com/fremtind/jokul/commit/bb42529))

### Features

-   **test:** add visual regression testing ([1553b28](https://github.com/fremtind/jokul/commit/1553b28))

## 0.5.3 (2019-07-30)

### Bug Fixes

-   **radio-button:** refactor structure to match other components ([d66f256](https://github.com/fremtind/jokul/commit/d66f256))

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

-   **all:** css imports in other examples ([c4a40a2](https://github.com/fremtind/jokul/commit/c4a40a2))
-   **build:** fix deterministic build order ([78566ef](https://github.com/fremtind/jokul/commit/78566ef))
-   **portal:** remove storybook and old portal ([c69d7fa](https://github.com/fremtind/jokul/commit/c69d7fa))
-   **publish:** add scope to all publishable packages ([db6da7a](https://github.com/fremtind/jokul/commit/db6da7a))
-   **typescript:** clean up tsconfig, make sure everything is typechecked ([745a0fb](https://github.com/fremtind/jokul/commit/745a0fb))
-   **typescript:** remove unnecessary tsconfig ([c594b9e](https://github.com/fremtind/jokul/commit/c594b9e))

### Features

-   **storybook:** add textfield and radio story ([f8044c1](https://github.com/fremtind/jokul/commit/f8044c1)), closes [#4](https://github.com/fremtind/jokul/issues/4)
