# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 6.0.6 (2022-11-11)

### Bug Fixes

- legg til manglende dependencies internt mellom pakker ([761936f](https://github.com/fremtind/jokul/commit/761936ff2ecdf7338dcddb7f33e984f229cef48b)), closes [#3232](https://github.com/fremtind/jokul/issues/3232)

### Reverts

- Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## 6.0.5 (2022-11-09)

### Bug Fixes

- legg til manglende dependencies internt mellom pakker ([761936f](https://github.com/fremtind/jokul/commit/761936ff2ecdf7338dcddb7f33e984f229cef48b)), closes [#3232](https://github.com/fremtind/jokul/issues/3232)

### Reverts

- Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

# 6.0.0 (2022-09-08)

### chore

-   fjern forceCompact-props ([0f8bfeb](https://github.com/fremtind/jokul/commit/0f8bfebc68fe6ebf6368bf8a37e2af78f4d7b46d))

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))
-   legg til bold varianter av pilikoner ([0244f5d](https://github.com/fremtind/jokul/commit/0244f5d7b9ff25654324adb372b071237c62a63c))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"
-   forceCompact er fjernet. Bruk compact og regresjonstest steder du bruker kompaktvarianter.

## [5.0.3](https://github.com/fremtind/jokul/compare/@fremtind/jkl-icons-react@5.0.2...@fremtind/jkl-icons-react@5.0.3) (2022-06-13)

### Bug Fixes

-   merk CSS og SCSS som side-effects ([dac2e2b](https://github.com/fremtind/jokul/commit/dac2e2b5f4d1b31485821bf6ad8ec4c7c2769cca))

### Performance Improvements

-   bruk tiny-glob for globbing av filer under bygg ([246952a](https://github.com/fremtind/jokul/commit/246952ae75afe20bcf0d007a0a068b76b114f9a6))

# [5.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-icons-react@4.1.19...@fremtind/jkl-icons-react@5.0.0) (2022-06-07)

### chore

-   fiks lintfeil ([4093d2a](https://github.com/fremtind/jokul/commit/4093d2a2ae7bbe0d30de882b9f5d144e8e77cede))

### BREAKING CHANGES

-   Pakken avhenger av en breaking versjon av core

## 4.1.5 (2022-02-07)

### Bug Fixes

-   skjul ikoner fra skjermlesere ([4854caa](https://github.com/fremtind/jokul/commit/4854caaa2a4a9215d05b6a87448db89fe4acc57f)), closes [#2679](https://github.com/fremtind/jokul/issues/2679)

## 4.1.0 (2021-12-21)

### Features

-   eksporter typer ([0ed794e](https://github.com/fremtind/jokul/commit/0ed794e00f0c4b9d391e697860cd204782ae056c))
-   legg til className prop i animerte ikoner ([ff77555](https://github.com/fremtind/jokul/commit/ff7755574f4301bb65afc57ff1143f4d58ec8413))

## 4.0.0 (2021-10-21)

### chore

-   updates dependencies ([b975200](https://github.com/fremtind/jokul/commit/b97520045c02e4bcb44ebde159c60a7dff7f01d6))

### BREAKING CHANGES

-   depends on jkl-core v8 with breaking changes

## 3.0.0 (2021-07-09)

### Documentation

-   use new typographic scale in examples ([b442f59](https://github.com/fremtind/jokul/commit/b442f59192d257741967156b12c468a8b734fbda))

### BREAKING CHANGES

-   Depends on jkl-core version with breaking changes

## 2.0.0 (2021-07-06)

### chore

-   bump major version ([559a384](https://github.com/fremtind/jokul/commit/559a384a5315931ad2ea7acc8328b383acbdbd8b))

### BREAKING CHANGES

-   Now depends on jkl-core 6.0.0, which introduces breaking changes

## 1.4.0 (2021-03-25)

### Bug Fixes

-   **icons:** use explicit props ([ba0fc21](https://github.com/fremtind/jokul/commit/ba0fc21c7db0d3aebab69c9fa44e7610c77da07c))

### Features

-   **icons:** add title and desc as props ([3ed96e6](https://github.com/fremtind/jokul/commit/3ed96e65072b65bc18cd17011c0dbed590a3b35e)), closes [#1811](https://github.com/fremtind/jokul/issues/1811)

## 1.3.5 (2021-02-12)

### Bug Fixes

-   add react 17 types as valid peerdep ([a074c34](https://github.com/fremtind/jokul/commit/a074c34dcece089ad6b4c581b8c920c8bdd4f1e0))

## 1.3.0 (2020-12-15)

### Features

-   display types in portal ([5c62a16](https://github.com/fremtind/jokul/commit/5c62a161c278d3a5a136741aea8dcf9b62338bda))

## 1.2.0 (2020-11-25)

### Features

-   update to react 17 ([4639058](https://github.com/fremtind/jokul/commit/4639058067eaa9be222825f8ac4f495a1e74cc0f))

## 1.1.0 (2020-08-13)

### Features

-   add icons package ([24c9748](https://github.com/fremtind/jokul/commit/24c974803b7d705d8a22cec719dbf3873373781f))
