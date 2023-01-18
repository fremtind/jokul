# Changelog

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 3.0.13 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

## 3.0.10 (2022-11-11)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## 3.0.9 (2022-11-09)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## 3.0.4 (2022-09-20)

### Bug Fixes

-   forenkle arvede html-attributter for å unngå feil ([eab3b1c](https://github.com/fremtind/jokul/commit/eab3b1ca687a2d1d959cd79ff082c57675db1929)), closes [#3108](https://github.com/fremtind/jokul/issues/3108)

# [3.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-footer-react@2.0.21...@fremtind/jkl-footer-react@3.0.0) (2022-09-08)

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))
-   legg til compact-prop på Footer-komponenten ([d574077](https://github.com/fremtind/jokul/commit/d574077dfeb823cc953b32880f719aefa39a2ce0))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"

## [2.0.4](https://github.com/fremtind/jokul/compare/@fremtind/jkl-footer-react@2.0.3...@fremtind/jkl-footer-react@2.0.4) (2022-06-13)

### Bug Fixes

-   merk CSS og SCSS som side-effects ([dac2e2b](https://github.com/fremtind/jokul/commit/dac2e2b5f4d1b31485821bf6ad8ec4c7c2769cca))

### Performance Improvements

-   bruk tiny-glob for globbing av filer under bygg ([246952a](https://github.com/fremtind/jokul/commit/246952ae75afe20bcf0d007a0a068b76b114f9a6))

# [2.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-footer-react@1.0.9...@fremtind/jkl-footer-react@2.0.0) (2022-06-07)

### chore

-   fiks lintfeil ([4093d2a](https://github.com/fremtind/jokul/commit/4093d2a2ae7bbe0d30de882b9f5d144e8e77cede))

### BREAKING CHANGES

-   Pakken avhenger av en breaking versjon av core

## 1.0.2 (2022-04-08)

### Bug Fixes

-   småtrøbbel med test og typesjekk ([b1b1bc3](https://github.com/fremtind/jokul/commit/b1b1bc3eeb0fade11f8c19d9c1d6170ad808ef6d))

# 1.0.0 (2022-03-14)

### Features

-   legg til onClick i FooterLink-typen ([ff0d915](https://github.com/fremtind/jokul/commit/ff0d91529c9d42b9e2c651e833cf62e1a464dedd))
-   ny footerkomponent ([13fc85a](https://github.com/fremtind/jokul/commit/13fc85ae2969f42c3197a03410fb6cdaaa70c624))
