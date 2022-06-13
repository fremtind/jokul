# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [6.0.3](https://github.com/fremtind/jokul/compare/@fremtind/jkl-field-group-react@6.0.2...@fremtind/jkl-field-group-react@6.0.3) (2022-06-13)

### Bug Fixes

-   merk CSS og SCSS som side-effects ([dac2e2b](https://github.com/fremtind/jokul/commit/dac2e2b5f4d1b31485821bf6ad8ec4c7c2769cca))

### Performance Improvements

-   bruk tiny-glob for globbing av filer under bygg ([246952a](https://github.com/fremtind/jokul/commit/246952ae75afe20bcf0d007a0a068b76b114f9a6))

# [6.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-field-group-react@5.1.1...@fremtind/jkl-field-group-react@6.0.0) (2022-06-07)

### chore

-   fiks lintfeil ([4093d2a](https://github.com/fremtind/jokul/commit/4093d2a2ae7bbe0d30de882b9f5d144e8e77cede))

### BREAKING CHANGES

-   Pakken avhenger av en breaking versjon av core

# 5.1.0 (2022-04-28)

### Features

-   eksponer labelProps i skjemakomponenter ([db27e30](https://github.com/fremtind/jokul/commit/db27e309a8a72913d8761b2967e940113c47b779))

## 5.0.6 (2022-03-10)

### Bug Fixes

-   bruk den riktige genericen per type ([a8e8802](https://github.com/fremtind/jokul/commit/a8e88028c66379c3fac2cd10ae0478aadd1d5392))

# 5.0.0 (2022-02-07)

### Bug Fixes

-   fjern inverted-prop ([de5f8b8](https://github.com/fremtind/jokul/commit/de5f8b83ae8f025826f4c56d3aeb5e081dea66cc)), closes [#2646](https://github.com/fremtind/jokul/issues/2646)

### BREAKING CHANGES

-   Fjernet `inverted`-prop. Bruk `data-theme="dark"` om du trenger overstyre temaet.

## 4.1.9 (2022-02-02)

### Bug Fixes

-   slett utdaterte snapshots ([fcd47bb](https://github.com/fremtind/jokul/commit/fcd47bbaedaadd528130eb6d22b1608a8eb90aa4))

## 4.1.0 (2021-11-09)

### Features

-   eksporter propstype, legg til labelProps ([b99687f](https://github.com/fremtind/jokul/commit/b99687f7a198fef123fbdd3862151c2b6bcaf7a1))

## 4.0.0 (2021-10-21)

### chore

-   updates dependencies ([b975200](https://github.com/fremtind/jokul/commit/b97520045c02e4bcb44ebde159c60a7dff7f01d6))

### BREAKING CHANGES

-   depends on jkl-core v8 with breaking changes

## 3.1.0 (2021-09-07)

### Features

-   add data-testautoid to CheckBox, FieldGroup, TextInput and RadioButtons ([4c751ed](https://github.com/fremtind/jokul/commit/4c751ed9b69c1e67670a05d247783c27c8cd76b9))

## 3.0.4 (2021-09-03)

### Bug Fixes

-   default variant should be small ([ce1c05b](https://github.com/fremtind/jokul/commit/ce1c05bd9344f03b41ea23068d0f66e20714d134))

## 3.0.0 (2021-07-09)

### Documentation

-   show small label as default in docs ([06d9629](https://github.com/fremtind/jokul/commit/06d9629b25b1e2b730cbe5d88dcea621fc213907))

### BREAKING CHANGES

-   Depends on jkl-core version with breaking changes

## 2.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 1.6.6 (2021-02-12)

### Bug Fixes

-   add react 17 types as valid peerdep ([a074c34](https://github.com/fremtind/jokul/commit/a074c34dcece089ad6b4c581b8c920c8bdd4f1e0))

## 1.6.0 (2020-11-25)

### Features

-   update to react 17 ([4639058](https://github.com/fremtind/jokul/commit/4639058067eaa9be222825f8ac4f495a1e74cc0f))

## 1.5.0 (2020-09-02)

### Features

-   **field-group:** implement inverted mode in field group ([11dc6bb](https://github.com/fremtind/jokul/commit/11dc6bbca1635383f67fef4bb82de80fe6628c20))

## 1.4.0 (2020-07-29)

### Features

-   **build:** use @babel/runtime instead of inlining helpers in each file ([bbadce5](https://github.com/fremtind/jokul/commit/bbadce52ba4da5d540b479b07273332587bed436)), closes [#1136](https://github.com/fremtind/jokul/issues/1136)

## 1.3.8 (2020-05-13)

### Bug Fixes

-   import labels and links from core ([f2bba87](https://github.com/fremtind/jokul/commit/f2bba87aab70e887e44b11b4f390324ab3fa5a2b))

## 1.3.3 (2020-03-25)

### Bug Fixes

-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 1.3.0 (2020-03-06)

### Features

-   **portal:** implement dev and portal examples ([857f2e2](https://github.com/fremtind/jokul/commit/857f2e29359f9442a7da0c977a94d63dfbdfc194))

## 1.2.0 (2020-02-18)

### Bug Fixes

-   make use of new core color tokens ([075f7b3](https://github.com/fremtind/jokul/commit/075f7b37920805bf780120247461d79c3d8c406e))
-   **jkl:** rename classnames import and move types ([e06ef21](https://github.com/fremtind/jokul/commit/e06ef21062b345d5defab335253041dad7ae6134))

### Features

-   **fieldgroup-react:** add test for checking className prop support ([3f361bc](https://github.com/fremtind/jokul/commit/3f361bc8ce9b172efc712aec1dfded556b4b196b))

## 1.1.0 (2020-01-16)

### Bug Fixes

-   fix links to components in readme ([4e2ade2](https://github.com/fremtind/jokul/commit/4e2ade2f71d4fa1bd80e4e3d823691589207b641))

### Features

-   **portal:** use examples as documentation for all comp ([e99e56a](https://github.com/fremtind/jokul/commit/e99e56ab2f5bf13cd0e72bf010e6472a08ffabe9))
-   update to new typography naming ([5c061d7](https://github.com/fremtind/jokul/commit/5c061d7b52529f83a16cf944db240984b67f5229))

## 1.0.0 (2019-12-03)

### Bug Fixes

-   **field-group:** fix position of legend within fieldsets ([1c27076](https://github.com/fremtind/jokul/commit/1c2707658a9fd3eaef75f3635edc98e180cb13a7))

## 0.3.0 (2019-10-09)

### Features

-   **field-group:** add Field component for single input fields ([4457804](https://github.com/fremtind/jokul/commit/4457804))
-   **field-group:** implement new design of field group labels ([6df2939](https://github.com/fremtind/jokul/commit/6df2939))
-   **field-group:** remove Field component and update style of FieldGroup ([8a451ac](https://github.com/fremtind/jokul/commit/8a451ac))
-   **field-group:** update field group styling according to sketches ([69d94d8](https://github.com/fremtind/jokul/commit/69d94d8))
-   change name of label variants ([554749c](https://github.com/fremtind/jokul/commit/554749c))
-   extract label styles to core ([9fad287](https://github.com/fremtind/jokul/commit/9fad287))

## 0.2.0 (2019-08-30)

### Bug Fixes

-   **field-group:** add empty changelogs so portal builds ([ff1a3c5](https://github.com/fremtind/jokul/commit/ff1a3c5))

### Features

-   **field-group:** add field group style and react component ([f002974](https://github.com/fremtind/jokul/commit/f002974))
-   **field-group:** expand field group functionality ([8a9f40b](https://github.com/fremtind/jokul/commit/8a9f40b))
