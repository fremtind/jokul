# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 2.2.0 (2024-09-09)

### Features

-   bruk semantiske variabler i contextual menu ([a6fb4c2](https://github.com/fremtind/jokul/commit/a6fb4c2bb6abef8b2102d6d2fe1d02e9be5e7bfb))

## [2.1.14](https://github.com/fremtind/jokul/compare/@fremtind/jkl-contextual-menu@2.1.13...@fremtind/jkl-contextual-menu@2.1.14) (2024-09-04)

### Bug Fixes

-   sass-rekkefølge i contextual-menu ([326c4ae](https://github.com/fremtind/jokul/commit/326c4aea86c2b96eebc267834a46471decefe2d2))

# 2.1.0 (2023-09-18)

### Features

-   feat: updated to match Figma changes ([6df220a](https://github.com/fremtind/jokul/commit/6df220a7e6f06379ecddea16450894eedb844b36)), closes [#3663](https://github.com/fremtind/jokul/issues/3663)

# 2.0.0 (2023-07-07)

### chore

-   oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### Code Refactoring

-   migrer vekk fra deprecated tilde-importer i Sass ([7ef2cf7](https://github.com/fremtind/jokul/commit/7ef2cf7a510122c69b2c5658c402f3dd9f5322f7)), closes [#3418](https://github.com/fremtind/jokul/issues/3418)

### BREAKING CHANGES

-   Avhenger av ny majorversjon av core
-   Tilde-prefikset er fjernet i all Sass-kode. Avhengig av oppsettet ditt kan det hende du
    ikke trenger gjøre noe. Om bygget ditt brekker, konfigurer Sass sin loadPaths så den
    inkluderer node_modules.

## 1.0.3 (2023-03-21)

### Bug Fixes

-   sett charset i CSS-filene som genereres ([7346cb8](https://github.com/fremtind/jokul/commit/7346cb8644dd4b99bf0ae4d11c78a967b7b01618)), closes [#3467](https://github.com/fremtind/jokul/issues/3467)

## 1.0.2 (2023-03-20)

### Bug Fixes

-   forslag til skygge for å indikere elevasjon ([9c4e727](https://github.com/fremtind/jokul/commit/9c4e7275f52586dd2fb82062f81316b1a75991ae))

## 1.0.1 (2023-03-17)

### Bug Fixes

-   fjern disabled som mulighet ([45b23e4](https://github.com/fremtind/jokul/commit/45b23e49aabc668a010a0a5266349cc42f2a165f))

# 1.0.0 (2023-03-07)

### Bug Fixes

-   bedre håndtering av triggerElement for kontekstuell meny ([4686ede](https://github.com/fremtind/jokul/commit/4686ede5ba9483239e99ffeda995241899743a93))
-   bruk dropdown som z-index ([7571d54](https://github.com/fremtind/jokul/commit/7571d5441f9258b682689cc2b6ccec0b74a21dde))
-   fjern custom triggerknapp og bruk iconbutton ([f18c3a6](https://github.com/fremtind/jokul/commit/f18c3a672777805d8064f952e5b9a5bf6a9f1b5e))
-   fjern marginer rundt divider ([6579ad6](https://github.com/fremtind/jokul/commit/6579ad6ded7b89bc02f6b5a1e316ab780d7f305d))
-   pek på workspacets versjon av core ([d5fc72c](https://github.com/fremtind/jokul/commit/d5fc72c5bdb67f3c68d39f2908b2d3d1b9c44a13))
-   sørg for at menyen ikke har ramme i lys modus ([6279549](https://github.com/fremtind/jokul/commit/62795493edc3953946d2e45738a1c049e859ef1a))
-   sync paddinger og bredde med figmaskisser ([3c72ac8](https://github.com/fremtind/jokul/commit/3c72ac887e63592d21f18df9c486c144e1eb866d))

### Features

-   adding expandable items to contextual-menu ([c314651](https://github.com/fremtind/jokul/commit/c3146514dc79fb621f789aa67bfbdde190e2736b))
-   adding foundations for contextual-menu component ([83899ae](https://github.com/fremtind/jokul/commit/83899ae3dd5f5d79d2cc7f8138ae721446d03be9))
-   adding option for new menu position and adding compact styles ([17d0848](https://github.com/fremtind/jokul/commit/17d08481bdf46afff1c635112932a01a7f6eb192))
