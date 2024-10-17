# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 3.4.38 (2024-10-17)

### Bug Fixes

- finished renaming contextual-menu => menu ([18ada17](https://github.com/fremtind/jokul/commit/18ada17a8b8ee8bad339c588ec307c2c482ce79a))

## 3.4.16 (2024-03-14)

### Bug Fixes

-   remove superfluous div ([ee3b095](https://github.com/fremtind/jokul/commit/ee3b095191e11b678325311cf3944fe8d61a33c9)), closes [#3813](https://github.com/fremtind/jokul/issues/3813)

# [3.4.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-contextual-menu-react@3.3.2...@fremtind/jkl-contextual-menu-react@3.4.0) (2023-09-27)

### Features

-   legg til mulighet for å hindre lukk ved klikk utenfor ([1298e8c](https://github.com/fremtind/jokul/commit/1298e8ccab37cea7769e11dadd04a04e14aa1faf))
-   legg til prop for å styre ekstern pil ([9b8975c](https://github.com/fremtind/jokul/commit/9b8975c2ae02eee8e7f89a5b06895ddec13237f1))

# 3.3.0 (2023-09-18)

### Bug Fixes

-   pR Feedback ([f5c012d](https://github.com/fremtind/jokul/commit/f5c012db6f4e5fd21656e129300cb0ccb3714754))

### Features

-   feat: updated to match Figma changes ([6df220a](https://github.com/fremtind/jokul/commit/6df220a7e6f06379ecddea16450894eedb844b36)), closes [#3663](https://github.com/fremtind/jokul/issues/3663)

# 3.2.0 (2023-08-24)

### Bug Fixes

-   sett jkl rotklasse på kontekstuell meny ([871daba](https://github.com/fremtind/jokul/commit/871daba12cd8120b2f86187f3a1754b5cf01354e))

### Features

-   rendre contextual meny i en portal på rot ([a3a6407](https://github.com/fremtind/jokul/commit/a3a64074d6e77bbe8f9349df9de8b76e42e8ee8f))

# 3.1.0 (2023-08-07)

### Features

-   add support for isOpen and onToggle props ([e3c641f](https://github.com/fremtind/jokul/commit/e3c641f80f7635625f542a4abd758fdaf520e399)), closes [#3626](https://github.com/fremtind/jokul/issues/3626)

# [3.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-contextual-menu-react@2.1.3...@fremtind/jkl-contextual-menu-react@3.0.0) (2023-07-07)

### chore

-   oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### BREAKING CHANGES

-   Avhenger av ny majorversjon av core

## 2.1.3 (2023-07-04)

### Bug Fixes

-   spesifiser type for eksportert hook som typescript ikke får inferred ([a12a6fa](https://github.com/fremtind/jokul/commit/a12a6fa3178d98d7a703f0f6e7bae2dac593efaf))

# 2.1.0 (2023-07-03)

### Bug Fixes

-   bruk className-propen som blir sendt inn ([85ed532](https://github.com/fremtind/jokul/commit/85ed53227fb2b45b7a28ad320facfba51cb0c6ad))
-   la onClick stoppe default oppførsel for event ([aaefdf2](https://github.com/fremtind/jokul/commit/aaefdf23ad5fdd056a6102c09205d88a7ace7dbd))

### Features

-   ny komponent for toggles i kontekstuell meny ([a79cce8](https://github.com/fremtind/jokul/commit/a79cce8e2677bd522db64306549e206abae47f1d))

# [2.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-contextual-menu-react@1.0.5...@fremtind/jkl-contextual-menu-react@2.0.0) (2023-05-03)

### chore

-   gjør react-is til en peerDependency ([a6e9011](https://github.com/fremtind/jokul/commit/a6e9011612d99c230e195cfed5160985037558d8))

### BREAKING CHANGES

-   Du må installere react-is og @types/react-is selv

## 1.0.2 (2023-03-20)

### Bug Fixes

-   plasser submeny under på små skjermer ([21b91aa](https://github.com/fremtind/jokul/commit/21b91aa5f380fdf0898682e2aea059d825b4c2cf)), closes [#3457](https://github.com/fremtind/jokul/issues/3457)

## 1.0.1 (2023-03-17)

### Bug Fixes

-   fjern disabled som mulighet ([45b23e4](https://github.com/fremtind/jokul/commit/45b23e49aabc668a010a0a5266349cc42f2a165f))

# 1.0.0 (2023-03-07)

### Bug Fixes

-   bedre håndtering av innhold i menyen som ikke er knapper ([19fb1cc](https://github.com/fremtind/jokul/commit/19fb1cc199001711e0278b407fc2b84e43e555af))
-   bedre håndtering av triggerElement for kontekstuell meny ([4686ede](https://github.com/fremtind/jokul/commit/4686ede5ba9483239e99ffeda995241899743a93))
-   fjern custom triggerknapp og bruk iconbutton ([f18c3a6](https://github.com/fremtind/jokul/commit/f18c3a672777805d8064f952e5b9a5bf6a9f1b5e))
-   gjør description påkrevd i triggerkomponenten ([ad55685](https://github.com/fremtind/jokul/commit/ad55685df215378786e1af6c39e029a53a2e447f))
-   legg til støtte for klassenavn uten å miste Jøkul-klassen ([6f2ade8](https://github.com/fremtind/jokul/commit/6f2ade88524d518f09d46d2b714d38c6b97dc67c))
-   pek integrasjonstester mot riktig URL ([2d8cd3d](https://github.com/fremtind/jokul/commit/2d8cd3d731099f52be3e33543b88b23e6d6ad672))
-   pek på workspacets versjon av core ([d5fc72c](https://github.com/fremtind/jokul/commit/d5fc72c5bdb67f3c68d39f2908b2d3d1b9c44a13))
-   spesifiser type for children på en riktigere måte ([6eab19e](https://github.com/fremtind/jokul/commit/6eab19eebf020c893255a1d82c57de26456dacc0))

### Features

-   adding expandable items to contextual-menu ([c314651](https://github.com/fremtind/jokul/commit/c3146514dc79fb621f789aa67bfbdde190e2736b))
-   adding foundations for contextual-menu component ([83899ae](https://github.com/fremtind/jokul/commit/83899ae3dd5f5d79d2cc7f8138ae721446d03be9))
-   adding option for new menu position and adding compact styles ([17d0848](https://github.com/fremtind/jokul/commit/17d08481bdf46afff1c635112932a01a7f6eb192))
-   gjør triggerElement påkrevd for ContextualMenu ([7406d6d](https://github.com/fremtind/jokul/commit/7406d6dbdf326d99d987ca997da666c1a2af1014))
-   videresend props for divider-komponenten ([8ca291f](https://github.com/fremtind/jokul/commit/8ca291ffc20b70a1711148a2e038bde1be80f7a8))
