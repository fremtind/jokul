# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [5.1.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-formatters-util@5.0.45...@fremtind/jkl-formatters-util@5.1.0) (2024-04-11)

### Features

- legg til formatterer og maske for datofelter ([2e3e888](https://github.com/fremtind/jokul/commit/2e3e8882cb3181d3fb9b0be68cc38fa1c39d55f3)), closes [#3648](https://github.com/fremtind/jokul/issues/3648)
- tillat kun punktum i datoer og legg til test ([aa95431](https://github.com/fremtind/jokul/commit/aa95431fa2ce25195f59cb92542ae4998c33bd8b))

# 5.0.0 (2023-07-07)

### chore

- oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### Code Refactoring

- migrer vekk fra deprecated tilde-importer i Sass ([7ef2cf7](https://github.com/fremtind/jokul/commit/7ef2cf7a510122c69b2c5658c402f3dd9f5322f7)), closes [#3418](https://github.com/fremtind/jokul/issues/3418)

### BREAKING CHANGES

- Avhenger av ny majorversjon av core
- Tilde-prefikset er fjernet i all Sass-kode. Avhengig av oppsettet ditt kan det hende du
ikke trenger gjøre noe. Om bygget ditt brekker, konfigurer Sass sin loadPaths så den
inkluderer node_modules.

## [4.1.7](https://github.com/fremtind/jokul/compare/@fremtind/jkl-formatters-util@4.1.6...@fremtind/jkl-formatters-util@4.1.7) (2023-05-09)

### Bug Fixes

- endret formateringen til xx xx xx xx med unntak av 8xx-nummer ([b4099fe](https://github.com/fremtind/jokul/commit/b4099fe35046c04ccd18314a6c1c1d87caa847a0))

# 4.1.0 (2023-05-02)

### Bug Fixes

- rett opp i format på formatBytes ([50bb520](https://github.com/fremtind/jokul/commit/50bb5205a78cc134fd4db1e37699c608f61c42ec))

### Features

- ny formateringsfunksjon formatBytes ([27476fa](https://github.com/fremtind/jokul/commit/27476fa28d8982adcbe6f0474e183e4c6711c0d4))

# [4.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-formatters-util@3.0.22...@fremtind/jkl-formatters-util@4.0.0) (2023-01-30)

### Features

- bump majorversjon av core ([0b25b9c](https://github.com/fremtind/jokul/commit/0b25b9ccb4d35214037e45158264fab2da196a5f))

### BREAKING CHANGES

- Avhenger av en versjon av jkl-core med breaking changes

## 3.0.8 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

## 3.0.5 (2022-11-11)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## 3.0.4 (2022-11-09)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## 2.5.5 (2022-08-12)

### Bug Fixes

-   fix a bug where delete and backspace would reset caret position ([126fc51](https://github.com/fremtind/jokul/commit/126fc51c6207a0a19dd18d8380ee9499dd56e2b9))
-   fix types for onKeyDown event handling ([bd1ccc5](https://github.com/fremtind/jokul/commit/bd1ccc506d8c0e5420cfe2c38de57d60d485872b))
-   handle adding to masked text from inside the text itself ([1e834a8](https://github.com/fremtind/jokul/commit/1e834a8c231c478d5e0add799e92efb53d2e0b54))

# 2.5.0 (2022-07-25)

### Features

-   add orgnr to registerWithMasks ([a891751](https://github.com/fremtind/jokul/commit/a8917515eac33f0b634f8f0249177c901727f364))

# 2.4.0 (2022-07-21)

### Features

-   created formatter and validator for organisasjonsnummer ([9cc096d](https://github.com/fremtind/jokul/commit/9cc096d03acc13de742a670d1837c4cf56a1eb98))

## 2.3.6 (2022-07-19)

### Bug Fixes

-   rydd opp i typer etter breaking change i hook-form ([8ae2b90](https://github.com/fremtind/jokul/commit/8ae2b906c6b8d503b53f5c8928f824f553e6a015))

## 2.3.5 (2022-06-28)

### Bug Fixes

-   **formatters-util:** bedre typing av options til register with mask ([3981302](https://github.com/fremtind/jokul/commit/39813026e5b7ba511b549c10d7ad5d3faeaa353b))

## [2.3.4](https://github.com/fremtind/jokul/compare/@fremtind/jkl-formatters-util@2.3.3...@fremtind/jkl-formatters-util@2.3.4) (2022-06-13)

### Bug Fixes

-   hjelp TypeScript forstå eksporten av maskeregistrering ([2dce2a3](https://github.com/fremtind/jokul/commit/2dce2a3bea536b61e29587ae843abfca5e699194))
-   merk CSS og SCSS som side-effects ([dac2e2b](https://github.com/fremtind/jokul/commit/dac2e2b5f4d1b31485821bf6ad8ec4c7c2769cca))

### Performance Improvements

-   bruk tiny-glob for globbing av filer under bygg ([246952a](https://github.com/fremtind/jokul/commit/246952ae75afe20bcf0d007a0a068b76b114f9a6))

## 2.3.2 (2022-06-08)

### Bug Fixes

-   rett opp de siste gamle internavhengighetene ([ba82a0e](https://github.com/fremtind/jokul/commit/ba82a0ee6cdccf20e41924e09f6949bf4e2bdd47))

## [2.3.1](https://github.com/fremtind/jokul/compare/@fremtind/jkl-formatters-util@2.0.10...@fremtind/jkl-formatters-util@2.3.1) (2022-06-07)

### Bug Fixes

-   lintfeil i constants formatters og hooks ([7385058](https://github.com/fremtind/jokul/commit/738505863844b9ec6a4bd24957aa24e714dae06f))
-   merk core som dev-dependency i formatters ([4502012](https://github.com/fremtind/jokul/commit/450201278b702480c807440acfbc05ee3e8375dc))

# [2.3.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-formatters-util@2.2.1...@fremtind/jkl-formatters-util@2.3.0) (2022-06-02)

### Features

-   legg til datoformatereren fra DatePicker ([d809647](https://github.com/fremtind/jokul/commit/d8096475fe5c2516d158e7bfa682d8f8cff2e5fb))

# 2.2.0 (2022-06-01)

### Bug Fixes

-   add support for nbsp ([6653bd4](https://github.com/fremtind/jokul/commit/6653bd4b5a4e1a1e37dbf0f801542312e955bd63))
-   sett automatisk align prop ved bruk av tallmaske ([0dd5061](https://github.com/fremtind/jokul/commit/0dd506173f542c05513f21983e1ed1085fc26b00))
-   støtt samme namesyntaks som hook-form ([16997dd](https://github.com/fremtind/jokul/commit/16997dda64425e5a0c8643dab350096039cfdf2b))

### Features

-   add masked input for numbers ([d0414e5](https://github.com/fremtind/jokul/commit/d0414e545d12b1b1c8483a2110f43f34525e1157))

# 2.1.0 (2022-06-01)

### Bug Fixes

-   add support for nbsp ([6653bd4](https://github.com/fremtind/jokul/commit/6653bd4b5a4e1a1e37dbf0f801542312e955bd63))
-   sett automatisk align prop ved bruk av tallmaske ([0dd5061](https://github.com/fremtind/jokul/commit/0dd506173f542c05513f21983e1ed1085fc26b00))

### Features

-   add masked input for numbers ([d0414e5](https://github.com/fremtind/jokul/commit/d0414e545d12b1b1c8483a2110f43f34525e1157))

## [2.0.9](https://github.com/fremtind/jokul/compare/@fremtind/jkl-formatters-util@2.0.8...@fremtind/jkl-formatters-util@2.0.9) (2022-04-29)

### Bug Fixes

-   fiks en bug hvor verdi 0 fikk formatValuta til å feile ([e84802b](https://github.com/fremtind/jokul/commit/e84802b433bf5ca0c177ea98a9f08d4225c4bef8))

# [2.0.0](https://github.com/fremtind/jokul/compare/@fremtind/jkl-formatters-util@1.2.2...@fremtind/jkl-formatters-util@2.0.0) (2022-03-07)

### Features

-   make parseNumber less naive and including ([dce2392](https://github.com/fremtind/jokul/commit/dce2392061bc8a7f59fc54241187e624d5ed4036))

### BREAKING CHANGES

-   number parsing is more strict

# 1.2.0 (2022-03-01)

### Features

-   legg til støtte for landkode i telefonnummer ([79adf9f](https://github.com/fremtind/jokul/commit/79adf9f7f36daf4ea9962c81a11fa4cf96d6711f))

# 1.1.0 (2022-02-22)

### Features

-   legg til bedre hjelpefunksjoner for masker i skjemafelter ([c5e2b5a](https://github.com/fremtind/jokul/commit/c5e2b5ab445cd87b455e7b3c4b0c876bfb6c43f7))

# 1.0.0 (2022-02-22)

### Features

-   legg til util-pakke med formateringsfunksjoner ([a8d2058](https://github.com/fremtind/jokul/commit/a8d205804e7e5626255afa14b3fc3dfb91ce6db2))
