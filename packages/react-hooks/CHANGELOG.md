# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 10.1.0 (2022-10-07)

### Bug Fixes

-   arraystøtte for useAriaLiveRegion ([e1b3b99](https://github.com/fremtind/jokul/commit/e1b3b99911696205fa8ac66ff16ca110bc125d7b))

### Features

-   legg til ny hook useAriaLiveRegion ([11c91f1](https://github.com/fremtind/jokul/commit/11c91f106151078729a1d6fa7bf7b47c402178af)), closes [#3155](https://github.com/fremtind/jokul/issues/3155)

# 10.0.0 (2022-09-08)

### Bug Fixes

-   easing og timing options i useAnimatedHeight brukes nå for oppslag, ikke rett som verdier ([07bdb8e](https://github.com/fremtind/jokul/commit/07bdb8e2f9d6afb806518c88e0ecfc2a349f8d54))

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"

## 9.1.6 (2022-08-15)

### Bug Fixes

-   samme ID på server og klient ([41ec721](https://github.com/fremtind/jokul/commit/41ec721e724c59f4a47f3fa1868c8735df2b2983))

# 9.1.0 (2022-07-21)

### Features

-   useAnimatedHeight sine callbacks får refen som animeres som et parameter ([4230900](https://github.com/fremtind/jokul/commit/42309007fe057afcaccac0e11e68a975c6e3577c))

## [9.0.4](https://github.com/fremtind/jokul/compare/@fremtind/jkl-react-hooks@9.0.3...@fremtind/jkl-react-hooks@9.0.4) (2022-06-13)

### Bug Fixes

-   merk CSS og SCSS som side-effects ([dac2e2b](https://github.com/fremtind/jokul/commit/dac2e2b5f4d1b31485821bf6ad8ec4c7c2769cca))

### Performance Improvements

-   bruk tiny-glob for globbing av filer under bygg ([246952a](https://github.com/fremtind/jokul/commit/246952ae75afe20bcf0d007a0a068b76b114f9a6))

## 9.0.1 (2022-06-07)

### Bug Fixes

-   ikke animer åpen om vi rerendrer i samme state ([a6c19ed](https://github.com/fremtind/jokul/commit/a6c19ed61d68056cfd7cfd6494d5183690138f84))

# [9.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-react-hooks@8.2.3...@fremtind/jkl-react-hooks@9.0.0) (2022-06-07)

### Bug Fixes

-   lintfeil i constants formatters og hooks ([7385058](https://github.com/fremtind/jokul/commit/738505863844b9ec6a4bd24957aa24e714dae06f))

### Code Refactoring

-   oppdater til nyeste core ([1db381f](https://github.com/fremtind/jokul/commit/1db381fdc0d3f1c35818d2feec49977331cd2fad))
-   skriv og følg stilguiden for Sass i Jøkul ([1cc52a4](https://github.com/fremtind/jokul/commit/1cc52a4dea6af592ed48c45b38bc4fee07a749ae))

### BREAKING CHANGES

-   Sass-variabler, mixins og CSS-animasjoner fra pakker annet enn core er gjort private
-   Avhenger av ny majorversjon av core

## [8.2.5](https://github.com/fremtind/jokul/compare/@fremtind/jkl-react-hooks@8.2.4...@fremtind/jkl-react-hooks@8.2.5) (2022-06-02)

### Bug Fixes

-   vi trenger ikke en ref for å fjerne en lytter ([73c01d7](https://github.com/fremtind/jokul/commit/73c01d7a5f512acd5bcb0575b85e4df4b4b317e1))

# [8.2.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-react-hooks@8.1.1...@fremtind/jkl-react-hooks@8.2.0) (2022-04-19)

### Features

-   legg til en ny hook i useAnimatedHeight ([4294839](https://github.com/fremtind/jokul/commit/4294839e5dc62b5e327bef08bb03407e9c49bcf2))
-   useBrowserPreferences har en verdi for høykontrasttema ([f2f8275](https://github.com/fremtind/jokul/commit/f2f82754b6844288d42ddbc2300ba659e1e467ab))

## [8.1.1](https://github.com/fremtind/jokul/compare/@fremtind/jkl-react-hooks@8.1.0...@fremtind/jkl-react-hooks@8.1.1) (2022-04-19)

### Bug Fixes

-   using React default export to avoid warnings when using react below v18 ([7b5f0fa](https://github.com/fremtind/jokul/commit/7b5f0fa5f32ec048edb76104331211afb72090f6))

# 8.1.0 (2022-04-08)

### Bug Fixes

-   bruk et pattern som funker med hydrering ([8fc9b35](https://github.com/fremtind/jokul/commit/8fc9b35876fe89c56aab2eb5d3f28765181af8bb))
-   bruk useId fra React der vi kan for å fikse hydrering ([4845325](https://github.com/fremtind/jokul/commit/4845325b962224e012335fcfff568da3d9cab7ed))
-   fjern all bruk av useLayoutEffect ([18ddc3f](https://github.com/fremtind/jokul/commit/18ddc3ffe0ee92eaf23237d0235a4ef52bf5ad51))
-   ikke baser animasjon på antall renders ([1941cd8](https://github.com/fremtind/jokul/commit/1941cd8eae3e180915e7371755610c34098414e1))

### Features

-   legg til en ny hook i useAnimatedHeight ([665ab46](https://github.com/fremtind/jokul/commit/665ab46b742b4130fe385b15fde6adbd07ac4f0c))

# [8.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-react-hooks@7.2.2...@fremtind/jkl-react-hooks@8.0.0) (2022-03-11)

### Bug Fixes

-   bruk rAF som den gamle useScreen ([3a42560](https://github.com/fremtind/jokul/commit/3a42560cbbd16973674b354e92db26e0df241c1d))
-   gi muligheten til å skru throttling helt av ([cac8ceb](https://github.com/fremtind/jokul/commit/cac8ceb13605d4dc100e242e0fba5f9e39afa7ea))
-   ikke returner nytt objekt for hvert kall ([e80adf3](https://github.com/fremtind/jokul/commit/e80adf3430b003e447edaa9e56d00dcf71645c0e))
-   legg tilbake bruk av deprecated addListener ([78fa7e2](https://github.com/fremtind/jokul/commit/78fa7e256f42ac7cfe19d3d114cc484c119ebcbb))
-   støtt kombinasjonen core-toggle og prefersReducedMotion ([8d0c9ef](https://github.com/fremtind/jokul/commit/8d0c9efb0feea692450cd601d00b91645c9b2c8f))
-   **useScreen:** bruk lagret event listener for å sikre opprydding ved unmount ([bb66ab6](https://github.com/fremtind/jokul/commit/bb66ab6e60547a99c50e1c3fa6d86536827f20e6))
-   **useScreen:** rydd opp event listeners ([f6dd1a2](https://github.com/fremtind/jokul/commit/f6dd1a28303e1b703b6f1984f949ff13364071e0))

### chore

-   slett useReducedMotion ([623cf6c](https://github.com/fremtind/jokul/commit/623cf6c2a0e14576ffca61d73ec1cef460ee9d41))

### Features

-   useAnimatedHeight trenger ikke lenger hjelp fra CSS ([3a304a8](https://github.com/fremtind/jokul/commit/3a304a848f79d45bdcf287d293ac5eb95843f9c5))
-   **useScreen:** skriv om useScreen til å bruke media queries ([bbe2f67](https://github.com/fremtind/jokul/commit/bbe2f674142ef1a9e4f659fd99e63ac69a4b5235))

### BREAKING CHANGES

-   useReducedMotion erstattes av useBrowserPreferences, som returnerer et objekt med blant annet
    prefersReducedMotion
-   **useScreen:** useScreen returnerer ikke lenger informasjon om skjermstørrelse i piksler

# [7.2.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-react-hooks@7.1.2...@fremtind/jkl-react-hooks@7.2.0) (2022-02-17)

### Features

-   legg til valg om å skru av suffixgenerering ([0fcdc5c](https://github.com/fremtind/jokul/commit/0fcdc5cec8e24876770b2f139c8ce8c0fd59b98e))

# [7.1.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-react-hooks@7.0.0...@fremtind/jkl-react-hooks@7.1.0) (2022-02-07)

### Features

-   legg til hook for å hente dimensjoner fra et element ([0c5d123](https://github.com/fremtind/jokul/commit/0c5d123489cc3f6b0c65c0e3ed08e724309e05b9))

# [7.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-react-hooks@6.2.0...@fremtind/jkl-react-hooks@7.0.0) (2022-02-07)

### Bug Fixes

-   oppdater breakpoints ([c4cd9c1](https://github.com/fremtind/jokul/commit/c4cd9c1c84cca2e79d524a87160214575b9f4bf4)), closes [#2605](https://github.com/fremtind/jokul/issues/2605)
-   sync useScreen med Sass-mixins ([9f93b49](https://github.com/fremtind/jokul/commit/9f93b49cf1cc29e365365e36ef8e393cba615cba))

### BREAKING CHANGES

-   -   Oppdaterte verdier for breakpoints kan gjøre at layout brekker på en dårlig måte i appen din
-   `small`-variabelen finnes ikke lenger i `breakpoints.ts`
-   `$breakpoint--small` finnes ikke lenger i `_breakpoints.scss`

# [6.2.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-react-hooks@6.1.7...@fremtind/jkl-react-hooks@6.2.0) (2022-02-02)

### Features

-   add useId hook ([7afa48b](https://github.com/fremtind/jokul/commit/7afa48bb1a8cc56f516eff20af2fe48e33a98bca))

## 6.1.4 (2021-12-21)

### Bug Fixes

-   eksporter options-typer ([55966ad](https://github.com/fremtind/jokul/commit/55966ad991e78d87d88b86ab4a4b38cd2a601dfd))

## 6.1.0 (2021-11-30)

### Features

-   eksporter proptypes fra hooks ([bda3fa5](https://github.com/fremtind/jokul/commit/bda3fa5833600b3d3232d7d3c3b6751ae337e495))

## 6.0.0 (2021-10-21)

### chore

-   updates dependencies ([b975200](https://github.com/fremtind/jokul/commit/b97520045c02e4bcb44ebde159c60a7dff7f01d6))

### BREAKING CHANGES

-   depends on jkl-core v8 with breaking changes

## 5.0.0 (2021-07-09)

### Documentation

-   **examples:** update examples to use new typog. scale ([1d9abfd](https://github.com/fremtind/jokul/commit/1d9abfd6a6535b5047ae0765a328a8cc8d73f7ba))

### BREAKING CHANGES

-   **examples:** Depends on jkl-core version with breaking changes

## 4.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### Features

-   add new hook for browser preferences ([e246eb8](https://github.com/fremtind/jokul/commit/e246eb8687794801ed089314a9d06521b0cf137e))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 3.0.0 (2021-06-29)

### Features

-   **cookie-consent:** legg til ny cookie consent komponent ([0b98c81](https://github.com/fremtind/jokul/commit/0b98c81b85fff720aba27428ec673e07cf938b8f))
-   **react-hooks:** add usePreviousValue hook to record previous value ([9f1d026](https://github.com/fremtind/jokul/commit/9f1d02669d11e6a35e151f8e5371970a04491962))

### BREAKING CHANGES

-   **cookie-consent:** ny cookie-consent komponent
-   **react-hooks:** new usePreviousValue hook

## 2.1.1 (2021-06-24)

### Bug Fixes

-   **useAnimatedHeight:** ignore bubbling transitions ([3ac7f25](https://github.com/fremtind/jokul/commit/3ac7f25b52d80e7284a5758b3d499660b74bcedb))

## 2.1.0 (2021-06-17)

### Features

-   **useAnimatedHeight:** add callbacks for animation start and end ([d0899b7](https://github.com/fremtind/jokul/commit/d0899b7bd336aad8ca26a849eb75d7d3505ef857))

## 2.0.0 (2021-06-07)

### Features

-   new colors ([9144947](https://github.com/fremtind/jokul/commit/9144947766c73fbe5eaac3372495006e3b89dec7))

### BREAKING CHANGES

-   all color variables are changed

## 1.10.5 (2021-02-12)

### Bug Fixes

-   add react 17 types as valid peerdep ([a074c34](https://github.com/fremtind/jokul/commit/a074c34dcece089ad6b4c581b8c920c8bdd4f1e0))

## 1.10.0 (2020-12-15)

### Features

-   display types in portal ([5c62a16](https://github.com/fremtind/jokul/commit/5c62a161c278d3a5a136741aea8dcf9b62338bda))

## 1.9.0 (2020-11-25)

### Features

-   update to react 17 ([4639058](https://github.com/fremtind/jokul/commit/4639058067eaa9be222825f8ac4f495a1e74cc0f))

## 1.8.5 (2020-11-20)

### Bug Fixes

-   **react-hooks:** fix small device check in useScreen ([aec1a22](https://github.com/fremtind/jokul/commit/aec1a22318047cbf7d0ebe4fdfef5e08a0fd2216))

## 1.8.0 (2020-10-07)

### Features

-   **useintersection:** allow observing svg elements ([8a8dbcb](https://github.com/fremtind/jokul/commit/8a8dbcb104027d0c716442d26301efb11a7f6798))

## 1.7.0 (2020-10-07)

### Features

-   **image:** add image component ([8e99f33](https://github.com/fremtind/jokul/commit/8e99f33a12f2e598aff8a15eabe230ea666f0cbd))

## 1.6.0 (2020-08-13)

### Bug Fixes

-   **use-anitmated-height:** fix bug when transitioning element with height 0 ([4231345](https://github.com/fremtind/jokul/commit/42313457a9eee18f4aa06a3096506dd8b15e3f56))
-   handle reduced motion in animation ([86b5509](https://github.com/fremtind/jokul/commit/86b55093413c5a1c5afcbe81a4d43e31f194a7ca)), closes [#1121](https://github.com/fremtind/jokul/issues/1121)

### Features

-   **hook:** add prefer reduced motion hook ([aec7494](https://github.com/fremtind/jokul/commit/aec7494ea94363bc4941212b4d37fe8e1ac66b7a)), closes [#1067](https://github.com/fremtind/jokul/issues/1067)

## 1.5.0 (2020-08-11)

### Bug Fixes

-   handle reduced motion in animation ([86b5509](https://github.com/fremtind/jokul/commit/86b55093413c5a1c5afcbe81a4d43e31f194a7ca)), closes [#1121](https://github.com/fremtind/jokul/issues/1121)

### Features

-   **hook:** add prefer reduced motion hook ([aec7494](https://github.com/fremtind/jokul/commit/aec7494ea94363bc4941212b4d37fe8e1ac66b7a)), closes [#1067](https://github.com/fremtind/jokul/issues/1067)

## 1.4.0 (2020-08-11)

### Bug Fixes

-   handle reduced motion in animation ([86b5509](https://github.com/fremtind/jokul/commit/86b55093413c5a1c5afcbe81a4d43e31f194a7ca)), closes [#1121](https://github.com/fremtind/jokul/issues/1121)

### Features

-   **hook:** add prefer reduced motion hook ([aec7494](https://github.com/fremtind/jokul/commit/aec7494ea94363bc4941212b4d37fe8e1ac66b7a)), closes [#1067](https://github.com/fremtind/jokul/issues/1067)

## 1.3.0 (2020-07-29)

### Features

-   **build:** use @babel/runtime instead of inlining helpers in each file ([bbadce5](https://github.com/fremtind/jokul/commit/bbadce52ba4da5d540b479b07273332587bed436)), closes [#1136](https://github.com/fremtind/jokul/issues/1136)

## 1.2.0 (2020-05-28)

### Features

-   add hook to wrap scrollintoview ([dcde26a](https://github.com/fremtind/jokul/commit/dcde26a888833ecf1ba6646ea9c7e6086d13e57c)), closes [#967](https://github.com/fremtind/jokul/issues/967)

## 1.1.4 (2020-03-30)

### Bug Fixes

-   **animation:** ensure correct behavior on first load ([066578b](https://github.com/fremtind/jokul/commit/066578bae76aaf8d4cfe769e5231d0f5388e6c21)), closes [#868](https://github.com/fremtind/jokul/issues/868)

## 1.1.3 (2020-03-25)

### Bug Fixes

-   add missing dependencies/dependency lists to hooks ([1edc8da](https://github.com/fremtind/jokul/commit/1edc8dabe612ca35a5fab7a6b57ec250dda01771))
-   improve types in hooks example ([57cf5e0](https://github.com/fremtind/jokul/commit/57cf5e0305d1f9b8ff42afd61fdfabd5de0e2e0a))
-   move browserslist declaration to root package.json ([51c790e](https://github.com/fremtind/jokul/commit/51c790ea79ca3d667871380c6bfbe85a5738920b)), closes [#862](https://github.com/fremtind/jokul/issues/862)

## 1.1.2 (2020-03-16)

### Bug Fixes

-   **react-hooks:** correct return signature in useAnimatedHeight ([c20ef3c](https://github.com/fremtind/jokul/commit/c20ef3cb6d7cda14cba6751bf8f62fc1fcd866d5))

## 1.1.0 (2020-03-06)

### Features

-   **portal:** implement dev and portal examples ([857f2e2](https://github.com/fremtind/jokul/commit/857f2e29359f9442a7da0c977a94d63dfbdfc194))

## 1.0.0 (2020-03-05)

### Bug Fixes

-   **react-hooks:** fix check for window object in useScreen ([fce24bc](https://github.com/fremtind/jokul/commit/fce24bc8bf96960a15334017c2c54fc7cd75762d))
-   **react-hooks:** fix import ([c47c0bc](https://github.com/fremtind/jokul/commit/c47c0bcb9ebf320ef67800c8925179406504a520))

### Features

-   **core:** add new func colors, remove illustration colors ([7847426](https://github.com/fremtind/jokul/commit/7847426fe77f723cd68085d4d995b3d867693c86))
-   **react-hooks:** add hook for responsivity in js ([4c36d27](https://github.com/fremtind/jokul/commit/4c36d27a8928a329e4ead16636f7f5a33d6b423f))

### BREAKING CHANGES

-   **core:** Removes illustration colors: sand, jord, sol, blomst, skog, hav

## 0.4.0 (2020-02-18)

### Bug Fixes

-   make use of new color token (changed name) ([f14c149](https://github.com/fremtind/jokul/commit/f14c149f779e65fe0775afde4421aef26be8ed1d))
-   use new text-style mixins ([2873a57](https://github.com/fremtind/jokul/commit/2873a57f4570ddb87a7390a773433d26a9fde4ac))

### Features

-   **react-hooks:** pass event to function in useKeyListener ([432ce11](https://github.com/fremtind/jokul/commit/432ce1160d85c7674e98277b2309d93f9f355d46))

## 0.3.0 (2020-01-16)

### Bug Fixes

-   fix lint issues after eslint update ([259db8b](https://github.com/fremtind/jokul/commit/259db8bf27f6751ec86c413129162728c3c903d6))
-   **dividerline:** use intersection hook in dividerline ([4d983b6](https://github.com/fremtind/jokul/commit/4d983b6dec70efd8ff60093f9e103a1344867f86))
-   **react-hooks:** fix click outside example ([51a1a71](https://github.com/fremtind/jokul/commit/51a1a71ccc2a6ad69bf6eb52e8e3f30d12f7d32a))

### Features

-   **portal:** use examples as documentation for all comp ([e99e56a](https://github.com/fremtind/jokul/commit/e99e56ab2f5bf13cd0e72bf010e6472a08ffabe9))
-   **react-hooks:** add intersection observer hook ([6a6e787](https://github.com/fremtind/jokul/commit/6a6e7875542e8563d7f802500525194335c9ba19))
-   **react-hooks:** add mutationobserver component ([d6caea6](https://github.com/fremtind/jokul/commit/d6caea6dca91cc7a92a193fc8ac9bdda6906f2e0))
-   **react-hooks:** improve react hooks documentation, add to portal ([bb0ff2e](https://github.com/fremtind/jokul/commit/bb0ff2ea005343dd1ea2e5fda121b9aef478359d))

## 0.2.0 (2019-08-30)

### Bug Fixes

-   **react-hooks:** add checks for document existence ([accbd3c](https://github.com/fremtind/jokul/commit/accbd3c))
-   **react-hooks:** use correct event firing in tests ([3f74393](https://github.com/fremtind/jokul/commit/3f74393))

### Features

-   **react-hooks:** add key listener hook ([9ba7417](https://github.com/fremtind/jokul/commit/9ba7417))
-   **react-hooks:** extract animation hook into separate package ([706ad61](https://github.com/fremtind/jokul/commit/706ad61))
-   **react-hooks,core:** move useClickOutside to react-hooks ([47626b7](https://github.com/fremtind/jokul/commit/47626b7))
