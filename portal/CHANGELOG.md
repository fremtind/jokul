# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [19.0.5](https://github.com/fremtind/jokul/compare/@fremtind/portal@19.0.4...@fremtind/portal@19.0.5) (2023-08-07)

### Bug Fixes

- fix color code for varde color ([26d1359](https://github.com/fremtind/jokul/commit/26d13592c91764e7b182bfdf68de230a40f191e0)), closes [#3627](https://github.com/fremtind/jokul/issues/3627)

## [19.0.1](https://github.com/fremtind/jokul/compare/@fremtind/portal@19.0.0...@fremtind/portal@19.0.1) (2023-07-07)

### Bug Fixes

- headingklasser som ble renamet underveis ([be0429a](https://github.com/fremtind/jokul/commit/be0429aa0b6d335a2d8ac9c84465b3ae4798dd9e))

# [19.0.0](https://github.com/fremtind/jokul/compare/@fremtind/portal@18.4.4...@fremtind/portal@19.0.0) (2023-07-07)

### chore

- oppdater versjon på grunn av breaking change i core ([57ece48](https://github.com/fremtind/jokul/commit/57ece48fa0192fe825b544fdac24cdd56e58d0df))

### Code Refactoring

- migrer vekk fra deprecated tilde-importer i Sass ([7ef2cf7](https://github.com/fremtind/jokul/commit/7ef2cf7a510122c69b2c5658c402f3dd9f5322f7)), closes [#3418](https://github.com/fremtind/jokul/issues/3418)

### BREAKING CHANGES

- Avhenger av ny majorversjon av core
- Tilde-prefikset er fjernet i all Sass-kode. Avhengig av oppsettet ditt kan det hende du
ikke trenger gjøre noe. Om bygget ditt brekker, konfigurer Sass sin loadPaths så den
inkluderer node_modules.

# [18.4.0](https://github.com/fremtind/jokul/compare/@fremtind/portal@18.3.4...@fremtind/portal@18.4.0) (2023-07-03)

### Bug Fixes

- rett en feil i CodeBlock ([4e5bcb0](https://github.com/fremtind/jokul/commit/4e5bcb0797e9f92449c194eaa623e012ad8d83ac))

### Features

- vis jsdoc om vi har den ([4f2d51c](https://github.com/fremtind/jokul/commit/4f2d51cc4bf928f4d4711a341ba7beda60699581))

# [18.3.0](https://github.com/fremtind/jokul/compare/@fremtind/portal@18.2.26...@fremtind/portal@18.3.0) (2023-06-15)

### Features

- toast ([cbaeb46](https://github.com/fremtind/jokul/commit/cbaeb46dd805e21fe14d7a1debec206519c41d50))

# [18.2.0](https://github.com/fremtind/jokul/compare/@fremtind/portal@18.1.5...@fremtind/portal@18.2.0) (2023-05-08)

### Features

- satt opp ny komponent – combobox ([6c71023](https://github.com/fremtind/jokul/commit/6c71023084243c736a0b89d36bcb1b08ddadb5ce))

# [18.1.0](https://github.com/fremtind/jokul/compare/@fremtind/portal@18.0.10...@fremtind/portal@18.1.0) (2023-05-02)

### Bug Fixes

- primary på label, og en liten todo ([92afc31](https://github.com/fremtind/jokul/commit/92afc310a7493b7d1fcf411e1338c14bf6eac9b9))

### Features

- gjenbruk preview til visning av allerede opplastede filer ([4578726](https://github.com/fremtind/jokul/commit/457872674ed2f78e184219be65af1a32607c8476))

## [18.0.7](https://github.com/fremtind/jokul/compare/@fremtind/portal@18.0.6...@fremtind/portal@18.0.7) (2023-03-30)

### Bug Fixes

- seasonal ([c3de52a](https://github.com/fremtind/jokul/commit/c3de52a2cae4a325883cbee4fe1434d5c75d6719))

## [18.0.3](https://github.com/fremtind/jokul/compare/@fremtind/portal@18.0.2...@fremtind/portal@18.0.3) (2023-03-21)

### Bug Fixes

- legg til manglende luft under tagline ([2d78860](https://github.com/fremtind/jokul/commit/2d7886031242252b9ef14f1f3d6455bc3884874b))

# [18.0.0](https://github.com/fremtind/jokul/compare/@fremtind/portal@17.0.26...@fremtind/portal@18.0.0) (2023-03-20)

### Bug Fixes

- fjern unødvendig bruk av flex ([b4c9fcd](https://github.com/fremtind/jokul/commit/b4c9fcd08eb07b267a737030c27ab92e5683b066)), closes [#3451](https://github.com/fremtind/jokul/issues/3451)

### BREAKING CHANGES

- Om du har inline-elementer som direkte children til kortene vil disse ikke lenger ha display:block.
Wrap de i en div om du trenger.

## [17.0.22](https://github.com/fremtind/jokul/compare/@fremtind/portal@17.0.21...@fremtind/portal@17.0.22) (2023-03-07)

### Bug Fixes

- importer react- og stilpake for kontekstuell meny i portalen ([4d74ff5](https://github.com/fremtind/jokul/commit/4d74ff54cb2122f561ffd33432ecd752246b2a02))

# [17.0.0](https://github.com/fremtind/jokul/compare/@fremtind/portal@16.4.15...@fremtind/portal@17.0.0) (2023-01-16)

### Features

-   forenkle bruken av tooltip etter label i text-input ([dd96052](https://github.com/fremtind/jokul/commit/dd96052c7a750ba171d66aefe7cfbbaf91ee63fb))
-   forenkle bruken av tooltip med FieldGroup ([779eb91](https://github.com/fremtind/jokul/commit/779eb913fa992dac394ee0adf147c34b5b2ee78b))
-   legg til InputGroup-komponent ([6a8f329](https://github.com/fremtind/jokul/commit/6a8f329763a711135337bb286bffcd2b5480ec77))

### BREAKING CHANGES

-   `variant` er fjernet. Bruk `labelProps={{ variant }}` i stedet.
-   -   `variant` er fjernet. Bruk `labelProps={{ variant }}` i stedet.
-   `BaseInputField` er erstattet av `BaseTextInput`.
-   Du må importere CSS for
    [input-group](https://github.com/fremtind/jokul/tree/main/packages/input-group).

## [16.4.1](https://github.com/fremtind/jokul/compare/@fremtind/portal@16.4.0...@fremtind/portal@16.4.1) (2022-12-08)

### Bug Fixes

-   oppdater kbar for å få riktig oppførsel ved escape ([2b91e25](https://github.com/fremtind/jokul/commit/2b91e2596798f31dc3fc7f7dbe59c19727be609d)), closes [#3308](https://github.com/fremtind/jokul/issues/3308)

# [16.4.0](https://github.com/fremtind/jokul/compare/@fremtind/portal@16.3.0...@fremtind/portal@16.4.0) (2022-12-06)

### Bug Fixes

-   bredde på mobil for portal-image ([1b00c7d](https://github.com/fremtind/jokul/commit/1b00c7d4d79c0943374243dc53dc69ede2ca96e6))

### Features

-   nye fanekomponenter basert på lenker og URLer ([3f69586](https://github.com/fremtind/jokul/commit/3f695860aaf8ff98c8a95af5dfb9bad35725dd9a))

# [16.3.0](https://github.com/fremtind/jokul/compare/@fremtind/portal@16.2.2...@fremtind/portal@16.3.0) (2022-12-06)

### Bug Fixes

-   dropp hydration-feil fra mdx ved å bare rendre i klient ([4caf348](https://github.com/fremtind/jokul/commit/4caf348cc7a7ec59cc1988dc905af122e79fea50))
-   plasser kbar riktig i z-index ([8906eb5](https://github.com/fremtind/jokul/commit/8906eb5410bc79b7bf5c660fb759f18b3779c439))

### Features

-   hook opp kbar i usenavigationlinks ([4e0948b](https://github.com/fremtind/jokul/commit/4e0948bf057742b165679b8d7b178db6caab81c8))
-   legg til støtte for keywords, søk i den og group ([53cf355](https://github.com/fremtind/jokul/commit/53cf3555c15cda08f4ee2bbdb39a8cbe80650b8a))
-   mvp ([0af33f8](https://github.com/fremtind/jokul/commit/0af33f85bb18351b2cef082bfdcb3b0c907b918a))

# [16.2.0](https://github.com/fremtind/jokul/compare/@fremtind/portal@16.1.1...@fremtind/portal@16.2.0) (2022-12-05)

### Features

-   importerer bilder for å få riktig filsti i preview ([4481d3a](https://github.com/fremtind/jokul/commit/4481d3a6fd023b1ce3ae2ea43ca4f6cbd317b740))
-   nyopprettet demoside i portalen ([73f08a1](https://github.com/fremtind/jokul/commit/73f08a1eefd251e0c8c33396b1e09d2f15c209d1))

# [16.1.0](https://github.com/fremtind/jokul/compare/@fremtind/portal@16.0.57...@fremtind/portal@16.1.0) (2022-12-05)

### Bug Fixes

-   fjern sjekk som alltid er false ([35661c9](https://github.com/fremtind/jokul/commit/35661c9630c96ffe1ff7ac1037e21bf1232f70bd))
-   ikke nevn e-post siden det ikke skjer lenger ([531ead6](https://github.com/fremtind/jokul/commit/531ead6b7c2f41d793d2b803ebca0588c656cc5d))
-   registrer appnavn, versjon, miljø ([f0fb8a0](https://github.com/fremtind/jokul/commit/f0fb8a061bfec4ef36b38c9498ed18a93a4aa646))

### Features

-   ny pakke for analytics ([05e3428](https://github.com/fremtind/jokul/commit/05e3428cb0206cba4baebfb03c9c37d967cee163))

## 16.0.46 (2022-11-22)

### Bug Fixes

-   fjern workspace-prefix som ikke blir fjernet ([283540b](https://github.com/fremtind/jokul/commit/283540b45f1fe557168eede3ca3637077a10a15b))

## [16.0.41](https://github.com/fremtind/jokul/compare/@fremtind/portal@16.0.40...@fremtind/portal@16.0.41) (2022-11-16)

### Bug Fixes

-   rett opp farger i dark mode ([8dacec0](https://github.com/fremtind/jokul/commit/8dacec066a0e0ac71e46d61c5e0ee8392618bf8b)), closes [#3263](https://github.com/fremtind/jokul/issues/3263)

## [16.0.39](https://github.com/fremtind/jokul/compare/@fremtind/portal@16.0.37...@fremtind/portal@16.0.39) (2022-11-11)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## [16.0.38](https://github.com/fremtind/jokul/compare/@fremtind/portal@16.0.37...@fremtind/portal@16.0.38) (2022-11-09)

### Reverts

-   Revert "chore: rigg om doc-utils som en intern pakke" ([281b0e1](https://github.com/fremtind/jokul/commit/281b0e1d7f0c6b077da45c7dd9f98a6fb218675a))

## [16.0.25](https://github.com/fremtind/jokul/compare/@fremtind/portal@16.0.24...@fremtind/portal@16.0.25) (2022-10-11)

### Bug Fixes

-   se etter attributtene på riktig plass ([a8ad4bd](https://github.com/fremtind/jokul/commit/a8ad4bdb9857ed9c13c4a3211d72b328f641ba6c)), closes [#3193](https://github.com/fremtind/jokul/issues/3193)

## [16.0.22](https://github.com/fremtind/jokul/compare/@fremtind/portal@16.0.21...@fremtind/portal@16.0.22) (2022-10-10)

### Bug Fixes

-   flytt tastaturfokus ved sidenavigering ([6a210cc](https://github.com/fremtind/jokul/commit/6a210ccc12afc864ad7fa268994fa593847e90fa)), closes [#3138](https://github.com/fremtind/jokul/issues/3138)
-   ikke merk interne bokmerker som eksterne lenker ([aa89e59](https://github.com/fremtind/jokul/commit/aa89e594dfb1caa5df37d33d6cab011196d7f7fd))
-   overskriftsnivåer på landingssiden ([40c54bb](https://github.com/fremtind/jokul/commit/40c54bba1b0747e44d965959843b0b53053694b0))
-   timing og språk på navigasjonaannonsering ([dedc94e](https://github.com/fremtind/jokul/commit/dedc94e7a280b7f48669f2c177bfe35ddeaa2bc9))
-   vær høfflig med annonseringen ([628f485](https://github.com/fremtind/jokul/commit/628f4857c5a35b5d7b16c858fae9c37213bc0e77))

## [16.0.16](https://github.com/fremtind/jokul/compare/@fremtind/portal@16.0.15...@fremtind/portal@16.0.16) (2022-09-30)

### Bug Fixes

-   legg til title-small i tabellen også på profil ([ec7949e](https://github.com/fremtind/jokul/commit/ec7949e4ab5d419b87684f57fdc8e6b83223b9b5))

## [16.0.13](https://github.com/fremtind/jokul/compare/@fremtind/portal@16.0.12...@fremtind/portal@16.0.13) (2022-09-28)

### Bug Fixes

-   sørg for at hopp til innhold funker som forventet ([bf6e1ed](https://github.com/fremtind/jokul/commit/bf6e1edf8534518419898a1e901d185e85b96132)), closes [#3137](https://github.com/fremtind/jokul/issues/3137)

## [16.0.7](https://github.com/fremtind/jokul/compare/@fremtind/portal@16.0.6...@fremtind/portal@16.0.7) (2022-09-20)

### Bug Fixes

-   forenkle arvede html-attributter for å unngå feil ([eab3b1c](https://github.com/fremtind/jokul/commit/eab3b1ca687a2d1d959cd79ff082c57675db1929)), closes [#3108](https://github.com/fremtind/jokul/issues/3108)
-   reparer en liten search and replace-feil ([4dd17b6](https://github.com/fremtind/jokul/commit/4dd17b6758a719656724f52d8bd50eca9f028b56))

# [16.0.0](https://github.com/fremtind/jokul/compare/@fremtind/portal@15.1.2...@fremtind/portal@16.0.0) (2022-09-08)

### Bug Fixes

-   skjul tømmeknapp fram til vi har et filter ([47bf5be](https://github.com/fremtind/jokul/commit/47bf5bea84342a8739cd9d7cc2561e1f4f830004))

### Features

-   innfør konseptet density med navn i stedet for boolean prop compact ([fd96f78](https://github.com/fremtind/jokul/commit/fd96f78685ef9e3979dd43625491e868efbc3068))

### BREAKING CHANGES

-   data-compactlayout er nå data-layout-density="compact"

# [15.1.0](https://github.com/fremtind/jokul/compare/@fremtind/portal@15.0.54...@fremtind/portal@15.1.0) (2022-09-05)

### Features

-   nyoppretta lekegrind i portalen ([7779213](https://github.com/fremtind/jokul/commit/77792134b80d4dd9584e3e19731a5b1a77212bb4))
-   nyopprettet lekegrind ([f62fa6a](https://github.com/fremtind/jokul/commit/f62fa6a67bd5722d25a4b269736707c0b1616316))
-   nyopprettet lekegrind ([805958b](https://github.com/fremtind/jokul/commit/805958bb7ac0363ff07182b4b206cee73005e434))
-   nyopprettet lekegrind ([d714866](https://github.com/fremtind/jokul/commit/d7148667b2b8e2ef319826ea47e7ec1034c5967b))
-   nyopprettet lekegrind i portalen ([b4a65b7](https://github.com/fremtind/jokul/commit/b4a65b7c42cc756b5283d212ae43508b07521eb8))
-   nyopprettet lekegrind i portalen ([5b95649](https://github.com/fremtind/jokul/commit/5b95649d01e5d4598a5cae9eb0f273670abdab5e))
-   nyopprettet lekegrind i portalen ([755ba47](https://github.com/fremtind/jokul/commit/755ba47b7e94fcf492b65b343976a9fa029f17de))
-   nyopprettet lekegrind i portalen ([429a664](https://github.com/fremtind/jokul/commit/429a664eafe3852e459ece68f544b25240a24351))

## [15.0.51](https://github.com/fremtind/jokul/compare/@fremtind/portal@15.0.50...@fremtind/portal@15.0.51) (2022-08-23)

### Bug Fixes

-   finjustert på timing i meny ([bcd03f0](https://github.com/fremtind/jokul/commit/bcd03f0ed924c465744f8a5966e67fb4b75e7923))
-   kortet ned animasjon på meny ([5b5738a](https://github.com/fremtind/jokul/commit/5b5738a1d5dbfe6db669c36b9a38cb8ffbd9fccf)), closes [#2944](https://github.com/fremtind/jokul/issues/2944)

## [15.0.44](https://github.com/fremtind/jokul/compare/@fremtind/portal@15.0.43...@fremtind/portal@15.0.44) (2022-08-16)

### Bug Fixes

-   la til laoding og decoding i img ([95ae8bf](https://github.com/fremtind/jokul/commit/95ae8bf56ce3a720c2fcdae0c2fa178a8805c451)), closes [#2945](https://github.com/fremtind/jokul/issues/2945)

## [15.0.40](https://github.com/fremtind/jokul/compare/@fremtind/portal@15.0.39...@fremtind/portal@15.0.40) (2022-08-15)

### Bug Fixes

-   actually upgrade to MDX RC ([9ae88c5](https://github.com/fremtind/jokul/commit/9ae88c5f77a71fdc740d29fa571434dd03c7badc))
-   add sindres slugs ([7a0127e](https://github.com/fremtind/jokul/commit/7a0127e55e1ba5e67bd807d1fba4784e760ef4c6))
-   bruk next for all the things ([b7c8991](https://github.com/fremtind/jokul/commit/b7c8991780294c6d47f7fdffad6cbcd44f898b34))
-   debug en feilmelding fra Gatsby om at style er string ([e48aeb6](https://github.com/fremtind/jokul/commit/e48aeb6757b0d0685fd30bf48f4073be2647dc7c))
-   fjern workaround som ikke trengs lenger og skaper problemer ([1f881cd](https://github.com/fremtind/jokul/commit/1f881cdc270bf25c1f425583aecf4ca7c5b5facc))
-   font i ingress, blockquote ([749eb19](https://github.com/fremtind/jokul/commit/749eb196844848fa8adb6882e2c341a19ccf1a42))
-   html er ikke lenger tilgjengelig :( ([1cc9cfc](https://github.com/fremtind/jokul/commit/1cc9cfc92f4d92645d68be3d1469007b0f400bef))
-   layout takler ikke TypeScript-syntaks ([b9dd810](https://github.com/fremtind/jokul/commit/b9dd810271d809bfb501da07fe19c0210e4c8b42))
-   linjehøyde på delaytext etter at jkl får body-style ([5892986](https://github.com/fremtind/jokul/commit/58929862e66f49d0c569c729cd36a2b62e6938ed))
-   nøst opp i noen sirkulære referanser ([3af2006](https://github.com/fremtind/jokul/commit/3af2006c5b5ea78066fd3adb0979d9b99da54bfa))
-   regresjoner i portalen post-MDX-oppgradering ([5a78100](https://github.com/fremtind/jokul/commit/5a78100a05f5460ac1ac5f47031925db8d77bc0e))
-   samme ID på server og klient ([41ec721](https://github.com/fremtind/jokul/commit/41ec721e724c59f4a47f3fa1868c8735df2b2983))
-   syntaksfeil i MDX etter oppgradering ([40740cd](https://github.com/fremtind/jokul/commit/40740cd3360189625d83e9203aafa12f2e5404e1))

## [15.0.31](https://github.com/fremtind/jokul/compare/@fremtind/portal@15.0.30...@fremtind/portal@15.0.31) (2022-08-02)

### Bug Fixes

-   legg til manglende sidetitler ([2c0de74](https://github.com/fremtind/jokul/commit/2c0de748780393ffd6495d5d7dcf1a6d2325ab16))

## [15.0.14](https://github.com/fremtind/jokul/compare/@fremtind/portal@15.0.13...@fremtind/portal@15.0.14) (2022-07-19)

### Bug Fixes

-   støtt defaultValue fra react-hook-form ([09d9380](https://github.com/fremtind/jokul/commit/09d93809edca4b6467bb54cd7ac991fe9426bc1d)), closes [#2924](https://github.com/fremtind/jokul/issues/2924)

## [15.0.13](https://github.com/fremtind/jokul/compare/@fremtind/portal@15.0.12...@fremtind/portal@15.0.13) (2022-07-19)

### Bug Fixes

-   rydd opp i typer etter breaking change i hook-form ([8ae2b90](https://github.com/fremtind/jokul/commit/8ae2b906c6b8d503b53f5c8928f824f553e6a015))

## [15.0.7](https://github.com/fremtind/jokul/compare/@fremtind/portal@15.0.6...@fremtind/portal@15.0.7) (2022-06-13)

### Bug Fixes

-   importer core-stilene i portalen på annen måte ([d1e8112](https://github.com/fremtind/jokul/commit/d1e81123f4c7fd7fba5f4bca199e8c6727bd5fa0))

## [15.0.2](https://github.com/fremtind/jokul/compare/@fremtind/portal@15.0.1...@fremtind/portal@15.0.2) (2022-06-08)

### Bug Fixes

-   rett opp de siste gamle internavhengighetene ([ba82a0e](https://github.com/fremtind/jokul/commit/ba82a0ee6cdccf20e41924e09f6949bf4e2bdd47))

## [15.0.1](https://github.com/fremtind/jokul/compare/@fremtind/portal@15.0.0...@fremtind/portal@15.0.1) (2022-06-07)

### Bug Fixes

-   rett opp avhengighet av icon-button ([d179921](https://github.com/fremtind/jokul/commit/d1799213a7859e3e72d4aecc69a74f7c6b399d54))

# [15.0.0](https://github.com/fremtind/jokul/compare/@fremtind/portal@14.0.0...@fremtind/portal@15.0.0) (2022-06-07)

### Bug Fixes

-   oppdater Scss-kode fra main til ny verden ([b65beaa](https://github.com/fremtind/jokul/commit/b65beaac717f6e389a94cbaa87b16cf1416607dc))

### Code Refactoring

-   oppdater til nyeste core ([1db381f](https://github.com/fremtind/jokul/commit/1db381fdc0d3f1c35818d2feec49977331cd2fad))
-   prefiks CSS-variabler med jkl ([500ee0e](https://github.com/fremtind/jokul/commit/500ee0e1050de94d8cda07fb423c33837fbf2faa))
-   skriv og følg stilguiden for Sass i Jøkul ([1cc52a4](https://github.com/fremtind/jokul/commit/1cc52a4dea6af592ed48c45b38bc4fee07a749ae))
-   sweep for å rydde i Sass-variabler ([fa1b094](https://github.com/fremtind/jokul/commit/fa1b094189c2958d5407334ae063d36461229b11))

### BREAKING CHANGES

-   Sass-variabler i komponentpakkene er gjort private
-   Alle CSS-variabler har jkl-prefix
-   Sass-variabler, mixins og CSS-animasjoner fra pakker annet enn core er gjort private
-   Avhenger av ny majorversjon av core

# [14.0.0](https://github.com/fremtind/jokul/compare/@fremtind/portal@13.0.1...@fremtind/portal@14.0.0) (2022-06-07)

### Bug Fixes

-   oppdater Scss-kode fra main til ny verden ([b65beaa](https://github.com/fremtind/jokul/commit/b65beaac717f6e389a94cbaa87b16cf1416607dc))

### Code Refactoring

-   oppdater til nyeste core ([1db381f](https://github.com/fremtind/jokul/commit/1db381fdc0d3f1c35818d2feec49977331cd2fad))
-   prefiks CSS-variabler med jkl ([500ee0e](https://github.com/fremtind/jokul/commit/500ee0e1050de94d8cda07fb423c33837fbf2faa))
-   skriv og følg stilguiden for Sass i Jøkul ([1cc52a4](https://github.com/fremtind/jokul/commit/1cc52a4dea6af592ed48c45b38bc4fee07a749ae))
-   sweep for å rydde i Sass-variabler ([fa1b094](https://github.com/fremtind/jokul/commit/fa1b094189c2958d5407334ae063d36461229b11))

### BREAKING CHANGES

-   Sass-variabler i komponentpakkene er gjort private
-   Alle CSS-variabler har jkl-prefix
-   Sass-variabler, mixins og CSS-animasjoner fra pakker annet enn core er gjort private
-   Avhenger av ny majorversjon av core

# [13.0.0](https://github.com/fremtind/jokul/compare/@fremtind/portal@12.5.7...@fremtind/portal@13.0.0) (2022-06-02)

### Bug Fixes

-   fokusbug i Safari med reach router via Gatsby ([2a15977](https://github.com/fremtind/jokul/commit/2a159778510f971d425a32bd1bb7ae6fe34cf2dc))
-   form example ([dadea13](https://github.com/fremtind/jokul/commit/dadea13444e45512f463857ef594e62fdaa104c9))
-   onChange ved klikk på kalender ([5f5862c](https://github.com/fremtind/jokul/commit/5f5862cff61af967c9efef72d2efb926ae026f64))
-   stable portalgriden på små skjermer ([06d4337](https://github.com/fremtind/jokul/commit/06d4337e6b9e3b60675ae9b3ede3a2e167b10b57))
-   typefeil i portaleksempler ([7d7022e](https://github.com/fremtind/jokul/commit/7d7022e60f6e842df105fa8a3ca1e4b7858eba8f))
-   wip hooks form example ([373c973](https://github.com/fremtind/jokul/commit/373c9734b94d1bbbd421f365acf59dd39c6a47cd))

### chore

-   datepicker har breaking changes ([b9cb939](https://github.com/fremtind/jokul/commit/b9cb93934964de02cb28c90dff5ec261097f3613))

### Features

-   eksponer parsingfunksjon ([28b08dd](https://github.com/fremtind/jokul/commit/28b08dd5e587bafbcce98455924be4d65260cac7))

### BREAKING CHANGES

-   Se MIGRATION.md i datepicker-react.

# [12.5.0](https://github.com/fremtind/jokul/compare/@fremtind/portal@12.4.12...@fremtind/portal@12.5.0) (2022-05-13)

### Features

-   legg til komponenter for skeleton loaders ([ffe80ed](https://github.com/fremtind/jokul/commit/ffe80ed6350d1445af9f3c3eaeb36ed04d23cfc0))

## [12.4.11](https://github.com/fremtind/jokul/compare/@fremtind/portal@12.4.10...@fremtind/portal@12.4.11) (2022-05-11)

### Bug Fixes

-   bruk nytt API for LogoStamp i footer ([98aa0e2](https://github.com/fremtind/jokul/commit/98aa0e2a7e0c2b374726c16f09b2ff85193ef87a))

## [12.4.10](https://github.com/fremtind/jokul/compare/@fremtind/portal@12.4.9...@fremtind/portal@12.4.10) (2022-05-11)

### Bug Fixes

-   gjør FormatProvider litt smartere med lenker ([cd87693](https://github.com/fremtind/jokul/commit/cd87693f2ebd5f364b69efd5b6dba0b757119dd0))

## [12.4.2](https://github.com/fremtind/jokul/compare/@fremtind/portal@12.4.1...@fremtind/portal@12.4.2) (2022-04-25)

### Bug Fixes

-   navcards on frontpage now shows correct color on text ([064fa19](https://github.com/fremtind/jokul/commit/064fa1905df2468befdd74aed3afb7c803470e63))

## [12.4.1](https://github.com/fremtind/jokul/compare/@fremtind/portal@12.4.0...@fremtind/portal@12.4.1) (2022-04-25)

### Bug Fixes

-   rar artefakt på mobil ([ea2e7af](https://github.com/fremtind/jokul/commit/ea2e7af76e432f6d91495d108f97aa261ad5d96a))

# [12.4.0](https://github.com/fremtind/jokul/compare/@fremtind/portal@12.3.24...@fremtind/portal@12.4.0) (2022-04-22)

### Bug Fixes

-   align Feedback med innhold, skjul på forside ([0894920](https://github.com/fremtind/jokul/commit/08949207c9223ee0481de28db224af1a9dad40aa))
-   annonser PortalImage uten fullskjerm som et bilde ([db2723f](https://github.com/fremtind/jokul/commit/db2723f37f03728b1d14ac92d3569f9bae2940f6))
-   aspect-ratio for portretter ([5ec7959](https://github.com/fremtind/jokul/commit/5ec7959cc9dd1a512d6a7ad2fc5101dbc4d8c788))
-   fjern maksbredde ([ccdb8e3](https://github.com/fremtind/jokul/commit/ccdb8e3cbe9ebb633e59b5e973eb272c3cd03a90))
-   gi bilder i portalen en bunnmargin ([d2b0f3f](https://github.com/fremtind/jokul/commit/d2b0f3f0c45fecf7c33b8fbc5f86f28d196aea35))
-   gjør language optional og komponenten dummyproof ([15be101](https://github.com/fremtind/jokul/commit/15be1017c628529b8336c20080774c6a57c174ee))
-   good-enough grid for navkort ([eaef5a3](https://github.com/fremtind/jokul/commit/eaef5a3c6e97da2f8ca5c377900b115f9ec8371b))
-   hack rundt statebasert highlight av toppmeny ([885cf0a](https://github.com/fremtind/jokul/commit/885cf0aa909363389b03d5185d753f6053c80041))
-   hydreringsbug med skjuling av feedback ([fa1a426](https://github.com/fremtind/jokul/commit/fa1a426592cf7abcd92dbf66ab9162c1fa66b213))
-   lenker og imports ([b091b80](https://github.com/fremtind/jokul/commit/b091b80c23b3bc4b8592770a425425e7d8c9c704))
-   redesign kodeblokker i lyst tema ([872fc00](https://github.com/fremtind/jokul/commit/872fc0060a4f6ecf088a543e435fd2300c167e54))
-   senk grid gap ([e5428b7](https://github.com/fremtind/jokul/commit/e5428b79361d030ad4e4ccfa540889999c0a2dbf))
-   utvid formatprovider med støtte for bedre spacing ([569e049](https://github.com/fremtind/jokul/commit/569e049c09b956c8c8185593403a3df503fcf97d))

### Features

-   gjør mulig å skru av fullskjerm for PortalImage ([7226610](https://github.com/fremtind/jokul/commit/7226610f257ccea39b1f1d807bafc139c5db141b))
-   legg til huge-title som one-off for portalen ([a06ec28](https://github.com/fremtind/jokul/commit/a06ec28a8ebe489abd98e55d5e4ad9e4d8874c45))

## [12.3.23](https://github.com/fremtind/jokul/compare/@fremtind/portal@12.3.22...@fremtind/portal@12.3.23) (2022-04-19)

### Bug Fixes

-   bruk revert i stedet for unset ([300e808](https://github.com/fremtind/jokul/commit/300e8086b4a88e37407dadaf747d714d69919cdd))
-   knappefarger for animasjonsvideoer ([d10838b](https://github.com/fremtind/jokul/commit/d10838b892cd6a053d41c34200c10278fcc15c9a))
-   legg til støtte for utvikling på Windows ([e063849](https://github.com/fremtind/jokul/commit/e063849a6fdf40f21124b8b0e1ee036aecb430a3))
-   portal a11y-context ([d1d0815](https://github.com/fremtind/jokul/commit/d1d0815f8ca074d6d5c56b27844fc4afa94f3c91))
-   rydd vekk en linkvariant vi ikke skal ha ([e607fa8](https://github.com/fremtind/jokul/commit/e607fa8b56afe467fe02f127940c260778fdf7c5))
-   unset border og outline i forced-colors ([648c7cd](https://github.com/fremtind/jokul/commit/648c7cdd30805dc6e6dc74b3e12d7b20b2ff5cec))
-   vis diamant i CanvasText ([445b9f9](https://github.com/fremtind/jokul/commit/445b9f9f7b95925cd769c2251e33e24e6a952ee2))

## [12.3.21](https://github.com/fremtind/jokul/compare/@fremtind/portal@12.3.20...@fremtind/portal@12.3.21) (2022-04-08)

### Bug Fixes

-   bruk rette avhengigheter for å fikse caching ([51b0841](https://github.com/fremtind/jokul/commit/51b0841899d2332b3cfbd5fa37bb2e9ba6265228))
-   hydrering av portalen i Cypress ([d36e07f](https://github.com/fremtind/jokul/commit/d36e07fb2e244930e11f37be0b9c7cd3f8b7afb1))
-   oppdater condition for animasjon etter rename ([731dcf1](https://github.com/fremtind/jokul/commit/731dcf16d6e68284e31e12ceffe97b1edb3cc2fb))
-   skru av transition hvis Cypress ([859a75d](https://github.com/fremtind/jokul/commit/859a75dd332522b0db8f2fe44d81cab30f6e18f5))

## [12.3.16](https://github.com/fremtind/jokul/compare/@fremtind/portal@12.3.15...@fremtind/portal@12.3.16) (2022-03-16)

### Bug Fixes

-   begrens bredden til bilder i DoDont til boksens bredde ([66a077e](https://github.com/fremtind/jokul/commit/66a077ee7aedf9e8dbf48dac66d64756a7be2a4d))

## [12.3.5](https://github.com/fremtind/jokul/compare/@fremtind/portal@12.3.4...@fremtind/portal@12.3.5) (2022-03-04)

### Bug Fixes

-   skjul dekorativt CSS-innhold fra skjermlesere ([5976cf9](https://github.com/fremtind/jokul/commit/5976cf93234ab2d189dfd2de888fa45a88480c55)), closes [#2774](https://github.com/fremtind/jokul/issues/2774)

## 12.3.1 (2022-02-23)

### Bug Fixes

-   klikk mellom menypunkter fjerner ikke innholdet lenger ([194f0c5](https://github.com/fremtind/jokul/commit/194f0c5c4346535f868f15d2a767080dd4af7e56)), closes [#2496](https://github.com/fremtind/jokul/issues/2496)

# 12.3.0 (2022-02-22)

### Bug Fixes

-   fjern side om blogging fra listen med bloggposter ([6454d5d](https://github.com/fremtind/jokul/commit/6454d5d3f5e18b3e4817fa530cc218caae3baff1))

### Features

-   gjør om leaf nodes i menytreet til anchors ([d60cfa5](https://github.com/fremtind/jokul/commit/d60cfa5d7ddd4a1ecd929f779781f9650e1a20ce))
-   legg til en RSS-feed i portalen ([cb3823d](https://github.com/fremtind/jokul/commit/cb3823d8e240832533873f639ed5ed271c604e8b))

# [12.2.0](https://github.com/fremtind/jokul/compare/@fremtind/portal@12.1.0...@fremtind/portal@12.2.0) (2022-02-17)

### Features

-   **mdx:** legg til håndtering av blockquotes ([c4b5eb3](https://github.com/fremtind/jokul/commit/c4b5eb33868757b9f4c101b34af85616fe41fead))

# 12.1.0 (2022-02-11)

### Features

-   legg til en routernøytral brødsmulesti ([5ea8cee](https://github.com/fremtind/jokul/commit/5ea8cee12498ef94d19875ae13d4bc79876bd9db))

## [12.0.1](https://github.com/fremtind/jokul/compare/@fremtind/portal@12.0.0...@fremtind/portal@12.0.1) (2022-02-07)

### Bug Fixes

-   eksporter typer på riktig måte med isolatedModules ([9e8fe19](https://github.com/fremtind/jokul/commit/9e8fe19077fd0efc8715ecbf0141b5c5b9abd758))
-   fjern ie-fallback fra portalen ([bda48a6](https://github.com/fremtind/jokul/commit/bda48a644eb43f30f03709295a9d2d8531b3ea38))
-   ikke slett public mellom bygg, caching ([8f4d46f](https://github.com/fremtind/jokul/commit/8f4d46fdd3139c82088147d8dd0fb503bac25c20))
-   la ie være del av Gatsby-bygget pga bug ([09964aa](https://github.com/fremtind/jokul/commit/09964aa7a6f59b1fb79009ae0b4a8f8ab12080a4))
-   manuell delinting sans descending specificity ([20de1c8](https://github.com/fremtind/jokul/commit/20de1c8811596b054867352177225fd197c70797))
-   slett ubrukt kode ([008f29e](https://github.com/fremtind/jokul/commit/008f29e69dade8ca909e3674704c8f6331a30ea2))

# 12.0.0 (2022-02-07)

### Bug Fixes

-   fjern ie-fallback fra portalen ([bda48a6](https://github.com/fremtind/jokul/commit/bda48a644eb43f30f03709295a9d2d8531b3ea38))
-   la ie være del av Gatsby-bygget pga bug ([09964aa](https://github.com/fremtind/jokul/commit/09964aa7a6f59b1fb79009ae0b4a8f8ab12080a4))
-   manuell delinting sans descending specificity ([20de1c8](https://github.com/fremtind/jokul/commit/20de1c8811596b054867352177225fd197c70797))
-   oppdater breakpoints ([c4cd9c1](https://github.com/fremtind/jokul/commit/c4cd9c1c84cca2e79d524a87160214575b9f4bf4)), closes [#2605](https://github.com/fremtind/jokul/issues/2605)

### BREAKING CHANGES

-   -   Oppdaterte verdier for breakpoints kan gjøre at layout brekker på en dårlig måte i appen din
-   `small`-variabelen finnes ikke lenger i `breakpoints.ts`
-   `$breakpoint--small` finnes ikke lenger i `_breakpoints.scss`

## 11.0.8 (2022-02-02)

### Bug Fixes

-   sett en lesbar tekstfarge på vardebakgrunn ([f08e820](https://github.com/fremtind/jokul/commit/f08e8200125e11e06ab190ea233f7ef4b7f0cf9d)), closes [#2645](https://github.com/fremtind/jokul/issues/2645)

## 11.0.5 (2022-01-26)

### Bug Fixes

-   sett hidden når tilstanden er _ikke_ åpen ([d023582](https://github.com/fremtind/jokul/commit/d0235826e6f6ae4b1b722d71a05fe6c9d85c9011)), closes [#2672](https://github.com/fremtind/jokul/issues/2672)
-   unngå bevegelse i y-aksen ved reduce motion ([0d693e6](https://github.com/fremtind/jokul/commit/0d693e67b0b1a6a2f20a9eeb2f450695cb7cb72d))

## 11.0.0 (2021-12-22)

### Bug Fixes

-   rett a11y-problemer i Hamburger ([721db9f](https://github.com/fremtind/jokul/commit/721db9f6632f523e2b38badbc0b54eddecf868bb)), closes [#2606](https://github.com/fremtind/jokul/issues/2606)

### BREAKING CHANGES

-   -   Fjernet `description`-propen. Den var en renamet `aria-label`. Bruk
        heller `aria-label`.
-   Hamburger krever nå at du gir den en ID og setter `aria-controls` med IDen
    til menyen hamburgeren styrer. Dette er for å gjøre det enklere å bygge en
    tilgjengelig hamburgermeny.

## 10.4.0 (2021-12-21)

### Features

-   lanser expand-button ([c86d489](https://github.com/fremtind/jokul/commit/c86d4896f714271e407b85fc473eea7b8af549fb))
-   legg til bold som egen klasse ([2837d10](https://github.com/fremtind/jokul/commit/2837d109ea94f383fabaf0ad2cbb605facc6faa9))

## 10.3.17 (2021-12-20)

### Bug Fixes

-   docs fixup ([3c660ee](https://github.com/fremtind/jokul/commit/3c660eee5eec35205bdcd97478afc9eceb098ea1))

## 10.3.14 (2021-12-14)

### Bug Fixes

-   gjenopprett React Hooks menypunkt ([27b7208](https://github.com/fremtind/jokul/commit/27b720850a07caf7a711e954c9e8f4d5648eac5f)), closes [#2425](https://github.com/fremtind/jokul/issues/2425)

## 10.3.9 (2021-12-02)

### Bug Fixes

-   added jkl class to text under photos ([fdd9f85](https://github.com/fremtind/jokul/commit/fdd9f852f6330f8e44ef7d1f81613aaf797a754b))

## 10.3.0 (2021-11-24)

### Features

-   bruk Tag i uu-guiden i portalen ([6fd4bd9](https://github.com/fremtind/jokul/commit/6fd4bd93aeb626ff0044f7cd781d12982fb3ec96))

## 10.2.0 (2021-11-18)

### Features

-   legg til støtte for å velge hvilke typer som skal vises ([cc51007](https://github.com/fremtind/jokul/commit/cc51007a6c6f9da4e5df5e135306f17efa5f074a))

## 10.1.0 (2021-11-17)

### Bug Fixes

-   eradicate <the process :cowboy: ([544bf0d](https://github.com/fremtind/jokul/commit/544bf0dd60d37465c4d2ff73dc035b98a6717ddd))
-   fiks SVG-src for PortalImage og fjern gammel profilfarge ([463b96d](https://github.com/fremtind/jokul/commit/463b96df6f9c22d57618d9ccfd2d731963b754ca))
-   fjern unødvendig import ([be78644](https://github.com/fremtind/jokul/commit/be786442da0b4453f8cf377093e143117b1e049d))
-   fjern uriktig fargebruk fra DoDontExample ([f51bf6c](https://github.com/fremtind/jokul/commit/f51bf6ccf5ee430b3d972441d1fbaac55a2f575b))
-   la PortalImg bruke Gatsby sin image-pipeline ([086d5e8](https://github.com/fremtind/jokul/commit/086d5e8c8604d1f5e21370d72205e0e843710b97))

### Features

-   åpne for å sette className på PortalImage ([388884b](https://github.com/fremtind/jokul/commit/388884be88efcb2afa9fc8abc4f761e6c1b29680))
-   åpne for å vise PortalImage i en Grid ([6e78a23](https://github.com/fremtind/jokul/commit/6e78a23ce4ee48a893ed5e99fe6f4361b53c5f00))

## 10.0.0 (2021-11-16)

### Bug Fixes

-   gjør så Select støtter react-hook-form ([87d54b7](https://github.com/fremtind/jokul/commit/87d54b749899811b16f52f81c39c48d244652b46)), closes [#2456](https://github.com/fremtind/jokul/issues/2456)

### BREAKING CHANGES

-   Select: Output fra onChange, onBlur, og onFocus er endret til å ligne eventstrukturen
    (e.target.value) i stedet for å gi verdien direkte. Name er gjort til en påkrevd prop.

## 9.0.1 (2021-11-15)

### Bug Fixes

-   gjenopprett bilder i Bildebruk ([08a6203](https://github.com/fremtind/jokul/commit/08a6203440b1f1fd1d5c78c5b69184c69e353b99))

## 9.0.0 (2021-11-09)

### Features

-   refactor RadioButtons for bedre hook-form støtte ([467cb0c](https://github.com/fremtind/jokul/commit/467cb0cae3c5ba6ad789b12fedd0d0f2fb8aa97e)), closes [#2435](https://github.com/fremtind/jokul/issues/2435)

### BREAKING CHANGES

-   Komponenten har fått et helt nytt API. Se migreringsdok.

## 8.1.0 (2021-11-02)

### Features

-   react-implementasjon av tag-komponenten ([3005cee](https://github.com/fremtind/jokul/commit/3005cee21b691accae0e3713183fdb9e76f80090))

## 8.0.2 (2021-10-29)

### Bug Fixes

-   **portal:** riktig bakgrunn på menykort ([#2423](https://github.com/fremtind/jokul/issues/2423)) ([496c76c](https://github.com/fremtind/jokul/commit/496c76c878e6f03138f9f12775b4086702c1c3a2))

## 8.0.0 (2021-10-28)

### Code Refactoring

-   renamed *Message to *MessageBox a few more places ([b5bd136](https://github.com/fremtind/jokul/commit/b5bd136be645195306728dd10d0058910b936259))
-   renamed *Message to *MessageBox where it is dependent on ([5effa3d](https://github.com/fremtind/jokul/commit/5effa3d9ed6a4eaaeba5d126306ea8320ec59f31))

### BREAKING CHANGES

-   Depends on package with breaking change
-   Depends on package with breaking change

## 7.0.3 (2021-10-28)

### Bug Fixes

-   **portal:** riktig bakgrunn på menykort ([#2423](https://github.com/fremtind/jokul/issues/2423)) ([496c76c](https://github.com/fremtind/jokul/commit/496c76c878e6f03138f9f12775b4086702c1c3a2))

## 7.0.0 (2021-10-25)

### Features

-   nye tabellkomponenter ([a135cf5](https://github.com/fremtind/jokul/commit/a135cf566ff0084c239931d31b31caca515dbdc8))

### BREAKING CHANGES

-   Se migreringsdokumentasjonen for \`table-react\`

## 6.0.0 (2021-10-21)

### chore

-   updates dependencies ([b975200](https://github.com/fremtind/jokul/commit/b97520045c02e4bcb44ebde159c60a7dff7f01d6))

### BREAKING CHANGES

-   depends on jkl-core v8 with breaking changes

## 5.3.5 (2021-10-06)

### Bug Fixes

-   legg til manglende CSS reset for a.jkl-button ([21972e1](https://github.com/fremtind/jokul/commit/21972e14b5320fc26addb975739734dfacb94736)), closes [#2272](https://github.com/fremtind/jokul/issues/2272)

## 5.3.3 (2021-09-30)

### Bug Fixes

-   fjern unødig CoreToggle i MainMenu ([d690bda](https://github.com/fremtind/jokul/commit/d690bdac8bf76ca39ad12317183eb2cecd7ddfd0))
-   lukk menyen ved klikk på hjemknappen ([9803adb](https://github.com/fremtind/jokul/commit/9803adbe9e86fc9e13e6d7650b13a9d026431f06)), closes [#2269](https://github.com/fremtind/jokul/issues/2269)
-   venstrejuster tekst i portalmeny ([a17dfad](https://github.com/fremtind/jokul/commit/a17dfada6f9753249afc57830a690c9cacef810b))

## 5.3.2 (2021-09-30)

### Bug Fixes

-   lukk menyen ved klikk på hjemknappen ([9803adb](https://github.com/fremtind/jokul/commit/9803adbe9e86fc9e13e6d7650b13a9d026431f06)), closes [#2269](https://github.com/fremtind/jokul/issues/2269)
-   venstrejuster tekst i portalmeny ([a17dfad](https://github.com/fremtind/jokul/commit/a17dfada6f9753249afc57830a690c9cacef810b))

## 5.3.0 (2021-09-30)

### Features

-   use cursor:pointer style on select ([843a232](https://github.com/fremtind/jokul/commit/843a2326ce68de8ed5f70d1584380089299b9906)), closes [#2173](https://github.com/fremtind/jokul/issues/2173)

## 5.2.6 (2021-09-28)

### Bug Fixes

-   adjust font size in full screen menu ([405d132](https://github.com/fremtind/jokul/commit/405d1328da72760e8659732bb22a3866d8cc0bb6))

## 5.2.5 (2021-09-28)

### Bug Fixes

-   gjenopprett lukking av meny med Esc ([5a118e1](https://github.com/fremtind/jokul/commit/5a118e103487c39b7b6cd8659049884d133958a8))
-   legg på manglende aria-attributter ([483ccd6](https://github.com/fremtind/jokul/commit/483ccd67bcb4b1b4c8e52da14adef3e05375e561))
-   rett opp padding mellom tekst og pil ([2e31e69](https://github.com/fremtind/jokul/commit/2e31e694aec7b491858125dbfb6cf5e8c132814b)), closes [#2245](https://github.com/fremtind/jokul/issues/2245)
-   rett tastaturrekkefølge og utvidet-tilstand ([37c7ca3](https://github.com/fremtind/jokul/commit/37c7ca3393e9573b14e452c29e24c3749514d21b)), closes [#2241](https://github.com/fremtind/jokul/issues/2241)

## 5.2.0 (2021-09-15)

### Features

-   add new Slider component to Jøkul ([2cb471f](https://github.com/fremtind/jokul/commit/2cb471f8985d10bda91040b254f898c58e41f0ea))

## 5.1.0 (2021-09-13)

### Features

-   prop for å styre role på MessageBox ([87646ae](https://github.com/fremtind/jokul/commit/87646ae6437cb368aa6567e637d59ab2ab923b71)), closes [#1687](https://github.com/fremtind/jokul/issues/1687)

## 5.0.8 (2021-09-03)

### Bug Fixes

-   fixed font color in footer ([#2170](https://github.com/fremtind/jokul/issues/2170)) ([c70c6a7](https://github.com/fremtind/jokul/commit/c70c6a7894b7637e457e319420512ea88b1a060a))

## 5.0.7 (2021-09-02)

### Bug Fixes

-   fixed font color in footer ([#2170](https://github.com/fremtind/jokul/issues/2170)) ([c70c6a7](https://github.com/fremtind/jokul/commit/c70c6a7894b7637e457e319420512ea88b1a060a))

## 5.0.6 (2021-09-02)

### Bug Fixes

-   fixed font color in footer ([1f88d67](https://github.com/fremtind/jokul/commit/1f88d6791af68deb8d6d3d24218489d18e860304))

## 5.0.3 (2021-08-16)

### Performance Improvements

-   **portal:** slight performance enhancements/fixes ([edee432](https://github.com/fremtind/jokul/commit/edee432841265875bb8af98e5821ec00a55e27de))

## 5.0.0 (2021-07-09)

### Bug Fixes

-   **sass:** make sure to import functions where using rem() ([02268ab](https://github.com/fremtind/jokul/commit/02268ab1494165ac489978d17bd404030347d9ff))

### Features

-   use new typog. scale in portal ([e67b446](https://github.com/fremtind/jokul/commit/e67b446e20f5fa26f092ead46d7a355d999f9869))

### BREAKING CHANGES

-   Depends on jkl-core version with breaking changes

## 4.2.3 (2021-07-09)

### Bug Fixes

-   update example and portal with new hamburger component ([94e1085](https://github.com/fremtind/jokul/commit/94e108567a16bc6dc867a7c2175672a0368424ce))

## 4.2.2 (2021-07-07)

### Bug Fixes

-   upgrade form example using react-hook-form ([bc78b6e](https://github.com/fremtind/jokul/commit/bc78b6ee64248d44f0edf423552f3afa45927554))

## 4.2.1 (2021-07-07)

### Bug Fixes

-   **uu-guide:** fix filter background in uu guide for dark mode ([3fbd329](https://github.com/fremtind/jokul/commit/3fbd3290da3c54af6cad040364b28af4dff7d8a0))

## 4.2.0 (2021-07-06)

### Bug Fixes

-   **examples:** let do-dont-images fill container width ([28bb085](https://github.com/fremtind/jokul/commit/28bb0852febe7dd0c47f2aad9ee93d17ffb1bd68))

### Features

-   **portal:** implement automatic dark mode ([2215523](https://github.com/fremtind/jokul/commit/2215523d270ee1523bd5c2d4710f99c3de2c2c92))

## 4.1.0 (2021-06-24)

### Features

-   **@fremtind/jkl-description-list @fremtind/jkl-description-list-react:** new component: Descriptio ([6006c1e](https://github.com/fremtind/jokul/commit/6006c1e89cfa1a5ef016a5f4385cae6df97d9a62))

## 4.0.0 (2021-06-07)

### Bug Fixes

-   fixed contrast in codeblock ([6f19150](https://github.com/fremtind/jokul/commit/6f19150f9a93da8390d9707e5cec3e7aab45f2b2))

### Features

-   new colors ([9144947](https://github.com/fremtind/jokul/commit/9144947766c73fbe5eaac3372495006e3b89dec7))

### BREAKING CHANGES

-   all color variables are changed

## 3.28.9 (2021-05-27)

### Bug Fixes

-   upgrade prism-react-renderer from 1.2.0 to 1.2.1 ([1049502](https://github.com/fremtind/jokul/commit/1049502552422bea35f22491e03ed714576c7163))

## 3.28.8 (2021-05-03)

### Bug Fixes

-   **portal:** add skip sidemenu invisible link ([313f661](https://github.com/fremtind/jokul/commit/313f661552638f2814466857ef1e42ff431c9488))

## 3.28.7 (2021-04-14)

### Bug Fixes

-   **portal:** add focus state and trap to portalimg ([7127a44](https://github.com/fremtind/jokul/commit/7127a4460dca895ce4bd28afbaa73eaacc58d6cf))

## 3.28.0 (2021-03-05)

### Features

-   **portal:** update to gatsby 3 ([c9cee01](https://github.com/fremtind/jokul/commit/c9cee01ccce7f33f2abbc02961bf1751440b9602))

## 3.27.16 (2021-02-23)

### Bug Fixes

-   upgrade prism-react-renderer from 1.1.1 to 1.2.0 ([02c28d3](https://github.com/fremtind/jokul/commit/02c28d341439d0a0e8c9bffad915e6ff018d141b))

## 3.27.0 (2020-12-15)

### Features

-   display types in portal ([5c62a16](https://github.com/fremtind/jokul/commit/5c62a161c278d3a5a136741aea8dcf9b62338bda))

## 3.26.0 (2020-12-01)

### Bug Fixes

-   clean up css for filter background width ([7bd22b5](https://github.com/fremtind/jokul/commit/7bd22b54876fbada3153cbf8a68cc0a4a36a3d8c))
-   fix headers to h4 ([3a77749](https://github.com/fremtind/jokul/commit/3a777497d34c520b0b0725bcecf2a794553520f2))
-   moar codes ([81b649b](https://github.com/fremtind/jokul/commit/81b649b752fcd0ab6398833a6f2bd92baf36fa1e))
-   remove unused variables ([cda22cb](https://github.com/fremtind/jokul/commit/cda22cb8ecf80158abb726f362b3bad5b0ef3418))
-   try to fix typings of wcag ([e46e09a](https://github.com/fremtind/jokul/commit/e46e09a49c40e6033f9a49824e2d41794aa5654a))

### Features

-   add basic skeleton for universal design page ([d8a3a73](https://github.com/fremtind/jokul/commit/d8a3a735ec235a93300b2089fdbe8540498a8f1e))
-   add deep menu for UU ([beeb274](https://github.com/fremtind/jokul/commit/beeb2748769debb1c8ac901bcdfd7c667198b660))
-   add id to heading, add more articles ([7b1a771](https://github.com/fremtind/jokul/commit/7b1a771e9a103429b810507848e0c9f51d474cf5))
-   add label for screen reader ([2668922](https://github.com/fremtind/jokul/commit/2668922b07ce4d94c4db45153ac28cfcd5c43361))
-   add link support to uu page ([7ff25cc](https://github.com/fremtind/jokul/commit/7ff25cc515912e55b5d6e591a5be885b3155dfa3))
-   add link to articles ([b1d3b6c](https://github.com/fremtind/jokul/commit/b1d3b6c0d208f316a982548150c7f40c5608dc78))
-   add more articles, add label to search and pills ([c2ccd1f](https://github.com/fremtind/jokul/commit/c2ccd1fa44a65ac5e526eed61c4cd0af031557ad))
-   add more articles, fix main description ([cd598df](https://github.com/fremtind/jokul/commit/cd598dfa39db5c9780992c37ce6e363ee17aefc4))
-   add pills for visualizing tags ([d48d7bc](https://github.com/fremtind/jokul/commit/d48d7bc46d7f8e392062874b1fada3e1c91462f2))
-   add testguide ([726b7d1](https://github.com/fremtind/jokul/commit/726b7d1f15056ff467851df4dd5cceba05a840fe))
-   add UU essentials page ([5b28735](https://github.com/fremtind/jokul/commit/5b2873563cc6068e11451e72fb10a4765dd9f7f3))
-   articles may not match any wcag rules ([354b489](https://github.com/fremtind/jokul/commit/354b4899aa55e9dd21db10e12ff0e3b7933d53e5))
-   contain the width of article headers ([ec11ceb](https://github.com/fremtind/jokul/commit/ec11ceb4d77046a2dbdf5c2e15832118f6e04eed))
-   final touches to UU pages ([1807963](https://github.com/fremtind/jokul/commit/18079632fd04bfd90706c5fbba55811d866ec2f4))
-   fix pills for article tagging ([719e484](https://github.com/fremtind/jokul/commit/719e4840d7699ad6c0fdea6ddebfa3a6db54df82))
-   fix typo ([a667d1b](https://github.com/fremtind/jokul/commit/a667d1bdb86543253d88d5e9efd3dd4bfce50fff))
-   initial animation pass ([75bbbe7](https://github.com/fremtind/jokul/commit/75bbbe778c99e6ef9d3661f0119b084d9119ecb6))
-   minor changes to texts ([bfc7f8f](https://github.com/fremtind/jokul/commit/bfc7f8f7d808ba8181c651c08f2ca1c922c2749f))
-   moar types ([e99a642](https://github.com/fremtind/jokul/commit/e99a642192c9b7db448c80ddf8f776146ae890cc))
-   more essentials writings ([c66f51b](https://github.com/fremtind/jokul/commit/c66f51b3c26296f2fcbb75366892ca14cf535d78))
-   move tags under header ([5671a9f](https://github.com/fremtind/jokul/commit/5671a9f24786b259d891c9328941e6f2cbf6fd1d))
-   oCD ([96bcffd](https://github.com/fremtind/jokul/commit/96bcffddade7cf7f3d86369a7d871db6d6b4dd40))
-   only show links when links are present ([c87abd3](https://github.com/fremtind/jokul/commit/c87abd36d83febd0a733e892516530ab9448fe10))
-   remove role filter ([143502a](https://github.com/fremtind/jokul/commit/143502adea364b2c38634d0f5314f355bea6a906))
-   remove TODOs ([d91b6e4](https://github.com/fremtind/jokul/commit/d91b6e427ed374f1deeebfd24ae01258f4dd06db))
-   remove unnecessary sr-only label ([69d8a8e](https://github.com/fremtind/jokul/commit/69d8a8e2e396182c0758eb1dd675a8e4d92a5238))
-   restructure search and filter ([7f4f03b](https://github.com/fremtind/jokul/commit/7f4f03bcc79c66d5e6d63b48d59ff9179d562b50))
-   scroll to search results on button clickaroo ([33d5d54](https://github.com/fremtind/jokul/commit/33d5d547912d95e9e555ef0cc3cabf6a53870a07))
-   use jkl-list-react component for lists ([57df343](https://github.com/fremtind/jokul/commit/57df343f238001460f42929e113fd43064dc136c))
-   use rel="noopener noreferrer" when target is \_blank ([2b5b6d7](https://github.com/fremtind/jokul/commit/2b5b6d702c29557716f91e648d7990efe74a4860))
-   **portal-uu:** add more articles (mdx) ([23e1c81](https://github.com/fremtind/jokul/commit/23e1c819b8972cf38a3e6b0708f46e6a3544ba12))

## 3.25.1 (2020-11-27)

### Bug Fixes

-   **portal:** fix logo download links ([2260719](https://github.com/fremtind/jokul/commit/2260719b00eb50abbddbac911d2e2805ced6949a))

## 3.25.0 (2020-11-25)

### Bug Fixes

-   add missing dependency ([d671af2](https://github.com/fremtind/jokul/commit/d671af2c2ef497ce3244b63d5af50b582da4871d))

### Features

-   update to react 17 ([4639058](https://github.com/fremtind/jokul/commit/4639058067eaa9be222825f8ac4f495a1e74cc0f))

## 3.24.0 (2020-11-24)

### Features

-   **core:** update value of suksess color ([0f284aa](https://github.com/fremtind/jokul/commit/0f284aa5ae198e044e9213aed071c60a1951a90b))

## 3.23.0 (2020-11-18)

### Features

-   **@fremtind/jkl-summary-table:** a simple table with two columns ([db1bc55](https://github.com/fremtind/jokul/commit/db1bc55ff4df3a42ab9efa2a7df39c6775185e8b)), closes [#1484](https://github.com/fremtind/jokul/issues/1484)

## 3.22.0 (2020-11-04)

### Features

-   **flipper:** add flipper component ([45e7a48](https://github.com/fremtind/jokul/commit/45e7a48028102beb9af860730c16ac70ec8493ea))

## 3.21.1 (2020-11-03)

### Bug Fixes

-   **portal:** override type for list in portal ([846f531](https://github.com/fremtind/jokul/commit/846f531d3a202ab9fd03ba1a46ea9dbf052c5c21))

## 3.21.0 (2020-10-29)

### Features

-   **constants:** add constants package ([6d7e508](https://github.com/fremtind/jokul/commit/6d7e50869f0061ad7d41329e709eac317dcb8a8b)), closes [#1499](https://github.com/fremtind/jokul/issues/1499)

## 3.20.0 (2020-10-27)

### Features

-   **feedback:** initial feedback component ([9757a73](https://github.com/fremtind/jokul/commit/9757a730b5686ba2a437f3163411835669443a64)), closes [#1490](https://github.com/fremtind/jokul/issues/1490)

## 3.19.3 (2020-10-19)

### Bug Fixes

-   update html lang attribute ([817deba](https://github.com/fremtind/jokul/commit/817deba783837272b0c64c0bd40e6c2cb08be999))

## 3.19.2 (2020-10-19)

### Bug Fixes

-   update html lang attribute ([817deba](https://github.com/fremtind/jokul/commit/817deba783837272b0c64c0bd40e6c2cb08be999))

## 3.19.1 (2020-10-08)

### Bug Fixes

-   **portal:** fix title ([30edc7c](https://github.com/fremtind/jokul/commit/30edc7c87e29cf8c3ac22a593815310800bc791e))

## 3.19.0 (2020-10-07)

### Features

-   **image:** add image component ([8e99f33](https://github.com/fremtind/jokul/commit/8e99f33a12f2e598aff8a15eabe230ea666f0cbd))

## 3.18.0 (2020-08-26)

### Features

-   **autosuggest:** add autosuggest component ([ac3d399](https://github.com/fremtind/jokul/commit/ac3d3996be720d93ae4396dbdb120a1911e6025f))

## 3.17.3 (2020-08-21)

### Bug Fixes

-   **portal:** fix weird bug on front page ([01028b9](https://github.com/fremtind/jokul/commit/01028b9c67a32a9f0ce9ff98030e3e81a124c91e))

## 3.17.2 (2020-08-21)

### Bug Fixes

-   **portal:** prevent intro text from scrolljacking after page change ([e7e235a](https://github.com/fremtind/jokul/commit/e7e235a478e967438723bff885fba66197196819))

## 3.17.0 (2020-08-20)

### Bug Fixes

-   **portal:** fix image spacing ([44b4253](https://github.com/fremtind/jokul/commit/44b4253df6220446f9fc2d961b8e1326ae51d3b7))
-   **portal:** layout of dodont img in desktop ([36190e7](https://github.com/fremtind/jokul/commit/36190e725e849e83e77f74b44b382fdf4d992342))

### Features

-   **portal:** fixes most mobile layout issues ([69e0424](https://github.com/fremtind/jokul/commit/69e04242de285cbe149cdb4c8d23cf6194b79861))

## 3.16.3 (2020-08-17)

### Bug Fixes

-   **portal-main-menu:** change style to match new sketches ([819f626](https://github.com/fremtind/jokul/commit/819f6269bdb223bbe477695b42371c43b1e8cbd4))

## 3.16.0 (2020-08-13)

### Features

-   add icons package ([24c9748](https://github.com/fremtind/jokul/commit/24c974803b7d705d8a22cec719dbf3873373781f))

## 3.15.0 (2020-08-12)

### Features

-   **dividerline:** remove divider line package ([29bba94](https://github.com/fremtind/jokul/commit/29bba9448ecd0b6daa80c78dbf4a434abfe673b2))

## 3.14.0 (2020-08-12)

### Features

-   **dividerline:** remove divider line package ([29bba94](https://github.com/fremtind/jokul/commit/29bba9448ecd0b6daa80c78dbf4a434abfe673b2))

## 3.13.0 (2020-08-12)

### Bug Fixes

-   portal/package.json to reduce vulnerabilities ([7243f37](https://github.com/fremtind/jokul/commit/7243f37798fa0500171891b362f54841a8948d47))
-   **portal:** add prefix to dowload logo ([ad4cdd7](https://github.com/fremtind/jokul/commit/ad4cdd729559369b55ee04b51ca8588bb374ab57)), closes [#1190](https://github.com/fremtind/jokul/issues/1190)
-   handle reduced motion in animation ([86b5509](https://github.com/fremtind/jokul/commit/86b55093413c5a1c5afcbe81a4d43e31f194a7ca)), closes [#1121](https://github.com/fremtind/jokul/issues/1121)

### Features

-   add escape to close image ([37e8d9e](https://github.com/fremtind/jokul/commit/37e8d9ee76a14fcf3d55ae2815cb9c0d5cec6b1f))
-   **hook:** add prefer reduced motion hook ([aec7494](https://github.com/fremtind/jokul/commit/aec7494ea94363bc4941212b4d37fe8e1ac66b7a)), closes [#1067](https://github.com/fremtind/jokul/issues/1067)

## 3.12.0 (2020-08-11)

### Bug Fixes

-   handle reduced motion in animation ([86b5509](https://github.com/fremtind/jokul/commit/86b55093413c5a1c5afcbe81a4d43e31f194a7ca)), closes [#1121](https://github.com/fremtind/jokul/issues/1121)

### Features

-   add escape to close image ([37e8d9e](https://github.com/fremtind/jokul/commit/37e8d9ee76a14fcf3d55ae2815cb9c0d5cec6b1f))
-   **hook:** add prefer reduced motion hook ([aec7494](https://github.com/fremtind/jokul/commit/aec7494ea94363bc4941212b4d37fe8e1ac66b7a)), closes [#1067](https://github.com/fremtind/jokul/issues/1067)

## 3.11.0 (2020-08-11)

### Bug Fixes

-   handle reduced motion in animation ([86b5509](https://github.com/fremtind/jokul/commit/86b55093413c5a1c5afcbe81a4d43e31f194a7ca)), closes [#1121](https://github.com/fremtind/jokul/issues/1121)

### Features

-   **hook:** add prefer reduced motion hook ([aec7494](https://github.com/fremtind/jokul/commit/aec7494ea94363bc4941212b4d37fe8e1ac66b7a)), closes [#1067](https://github.com/fremtind/jokul/issues/1067)

## 3.10.3 (2020-08-06)

### Bug Fixes

-   **full-screen-menu:** adjust menu item animation ([3ff6529](https://github.com/fremtind/jokul/commit/3ff652988a50bcd426ea65418664779d27a22e8d))
-   **portal-header:** remove state for collapsing menu to prevent rerenders ([6560179](https://github.com/fremtind/jokul/commit/65601792a252556f620dcb08f00195f540a5a590)), closes [#1174](https://github.com/fremtind/jokul/issues/1174)

## 3.10.0 (2020-08-05)

### Bug Fixes

-   ta i bruk @fremtind/browserslist-config-jkl ([b75a518](https://github.com/fremtind/jokul/commit/b75a5185bb27ae548e8f2b144cad14e66cbf4e32))

### Features

-   lag bloggpost om IE 11 ([a521211](https://github.com/fremtind/jokul/commit/a52121133644f7695381042d69667f2264436c30))

## 3.9.2 (2020-07-07)

### Bug Fixes

-   **portal:** fix small accessibility issues ([045f70a](https://github.com/fremtind/jokul/commit/045f70a6aee6c22b57ac422bf8228f61b5c5943c))

## 3.9.0 (2020-07-07)

### Features

-   **portal:** improve logo documentation ([#1050](https://github.com/fremtind/jokul/issues/1050)) ([68e15c5](https://github.com/fremtind/jokul/commit/68e15c571be03216c2b66928d1ce9f6c7a672aaf)), closes [#1027](https://github.com/fremtind/jokul/issues/1027)

## 3.8.0 (2020-07-02)

### Features

-   **portal:** add animation to portal ([fa38aae](https://github.com/fremtind/jokul/commit/fa38aae91d6a85ec017a80df54a987de893fd3d8))

## 3.7.0 (2020-07-01)

### Features

-   **portal:** add support for dark mode to code blocks ([68437f0](https://github.com/fremtind/jokul/commit/68437f05cefd2de8f30950154d776eacedf20da7))

## 3.6.4 (2020-06-30)

### Bug Fixes

-   portal/package.json & portal/.snyk to reduce vulnerabilities ([#1060](https://github.com/fremtind/jokul/issues/1060)) ([5b35981](https://github.com/fremtind/jokul/commit/5b35981577282ac7984f26c4e0f0f7814066e739))

## 3.6.0 (2020-06-26)

### Features

-   add util package for validation ([417ac14](https://github.com/fremtind/jokul/commit/417ac145a3c021f3b5f9e5fc2824ce4021e55e21))

## 3.5.0 (2020-06-26)

### Features

-   **portal:** add ids to level 2 headings for linking ([4dfd1d3](https://github.com/fremtind/jokul/commit/4dfd1d33042a9148c9bc794572018f2445e60d50))

## 3.4.4 (2020-06-24)

### Bug Fixes

-   **portal:** adjust margins and font sizes on mobile ([f78acd5](https://github.com/fremtind/jokul/commit/f78acd5edcefffbb227ff6150b618d2754635e0d))

## 3.4.0 (2020-06-24)

### Features

-   **portal:** add support for docs from core package ([24e6b24](https://github.com/fremtind/jokul/commit/24e6b24d0148bcc78cc575e0954639278696de2e))

## 3.3.0 (2020-06-23)

### Bug Fixes

-   **portal:** add type to pages returned from useNavigationLinks ([9cb3ad1](https://github.com/fremtind/jokul/commit/9cb3ad1df9876fc6bcdac922d83f64a691fe8869))
-   **portal:** display blog posts correctly ([9f78030](https://github.com/fremtind/jokul/commit/9f78030d3d348d998ec6bb48a1792cc3b18d78e5))
-   **portal:** make home link close fullscreen menus ([817aa65](https://github.com/fremtind/jokul/commit/817aa65fcf73ed51ab85ea5a3f0fcf96d5292311)), closes [#917](https://github.com/fremtind/jokul/issues/917)

### Features

-   **portal:** add basic responsivity to layout ([10e0b2f](https://github.com/fremtind/jokul/commit/10e0b2f21fe9dbfa0f82211bc02895cdaa9c35ba))
-   **portal:** add layout plugin to avoid reendering static items ([cf6ef66](https://github.com/fremtind/jokul/commit/cf6ef6664294a32dd3eb6f0b136e79f5502a1872))
-   **portal:** add responsivity to main menu ([ca22441](https://github.com/fremtind/jokul/commit/ca22441aa9585e3c77bcd970b85094355e1312f9))
-   **portal:** add section/frontpage info to location context ([12030af](https://github.com/fremtind/jokul/commit/12030afdfbce0a6e1b160aea673a9e699449f732))

## 3.2.7 (2020-06-19)

### Bug Fixes

-   portal/package.json & portal/.snyk to reduce vulnerabilities ([22b5b24](https://github.com/fremtind/jokul/commit/22b5b24a3803e29f45d006cde2e1703a1540527f))

## 3.2.6 (2020-06-18)

### Bug Fixes

-   portal/package.json & portal/.snyk to reduce vulnerabilities ([4a22bb7](https://github.com/fremtind/jokul/commit/4a22bb7ef02c99bfbb247dd233e56743dc566798))

## 3.2.5 (2020-06-17)

### Bug Fixes

-   fix darkmode ([d38bb81](https://github.com/fremtind/jokul/commit/d38bb81b771d74fc00e89fd413fce0fc0b8c9de2))

## 3.2.4 (2020-06-15)

### Bug Fixes

-   fix bg ([8bf05e7](https://github.com/fremtind/jokul/commit/8bf05e7656ffd71d28c8d3b60826b413a5c3959d))
-   **portal:** explicitly set background color ([316230a](https://github.com/fremtind/jokul/commit/316230a90033cae02bbd36c293ebff2d24dc289a))

## 3.2.2 (2020-06-02)

### Bug Fixes

-   portal/package.json & portal/.snyk to reduce vulnerabilities ([aa99c43](https://github.com/fremtind/jokul/commit/aa99c437e4454fe94903cc568ad76483988b09e3))

## 3.2.0 (2020-05-27)

### Features

-   **cypress:** initial cypress setup ([3004668](https://github.com/fremtind/jokul/commit/300466834e2f79acc8ed501bb2b66f574328f80d))

## 3.1.0 (2020-05-15)

### Features

-   **alert-message:** rename and split messages package ([11373ac](https://github.com/fremtind/jokul/commit/11373ac88cbfc5ed2604846c742e8a05f8c0561d))
-   **messages:** add messages package ([6193027](https://github.com/fremtind/jokul/commit/619302746062ecc789252fea6201c359fe88995f))
-   **portal:** lagt til do's and dont's ([122474c](https://github.com/fremtind/jokul/commit/122474c618ffaafde8e1117df2e985df09166cda))

## 3.0.2 (2020-05-13)

### Bug Fixes

-   import labels and links from core ([f2bba87](https://github.com/fremtind/jokul/commit/f2bba87aab70e887e44b11b4f390324ab3fa5a2b))

## 3.0.1 (2020-05-11)

### Bug Fixes

-   portal/package.json & portal/.snyk to reduce vulnerabilities ([41ec150](https://github.com/fremtind/jokul/commit/41ec150077bdc9df642be678a0381c878b030c92))
-   portal/package.json & portal/.snyk to reduce vulnerabilities ([0f3be56](https://github.com/fremtind/jokul/commit/0f3be56108a1fa6e07b4a193fe5f258ecc02a05f))
-   portal/package.json & portal/.snyk to reduce vulnerabilities ([cd25fa4](https://github.com/fremtind/jokul/commit/cd25fa41ca7dc36ae5ea09102986f74b7851e5a9))
-   portal/package.json & portal/.snyk to reduce vulnerabilities ([837946b](https://github.com/fremtind/jokul/commit/837946b92fc7ca1a26af99088cf541cca97a93af))

## 3.0.0 (2020-04-27)

### Bug Fixes

-   **portal:** use correct hook for theme in sidebar ([b41ed3c](https://github.com/fremtind/jokul/commit/b41ed3cc18f0383d889b905f575eee2209dae423))
-   **portal:** use new TextInput in sidebar and fullscreen menu ([a874480](https://github.com/fremtind/jokul/commit/a874480c98ef8e24f930430d382b138cd7e31fe7))

### Features

-   **added documenation:** added documenation for css methodology ([0a2ebd1](https://github.com/fremtind/jokul/commit/0a2ebd1adcf20fdf8e8416c91438e0f6f1939aa5)), closes [#468](https://github.com/fremtind/jokul/issues/468)
-   **text-input:** consolidate text inputs and apply new style ([0b1cc84](https://github.com/fremtind/jokul/commit/0b1cc847c07790abf7feb303e1e24c3450090b27))

### BREAKING CHANGES

-   **text-input:** _ TextField is now called TextInput|_ The following variants have all been integrated into
    TextInput: ActionTextField, InlineTextField, BaseInputField

## 2.3.0 (2020-04-20)

### Bug Fixes

-   **codeblock:** account for code blocks without language ([13d4714](https://github.com/fremtind/jokul/commit/13d4714df02fd95b06750d0046a737f596463542))

### Features

-   **formatting:** add code highlighting to mdx parser ([8c366d4](https://github.com/fremtind/jokul/commit/8c366d4323356a878fef75c6c1649596b4579275))
-   **portal:** add favicon through Gatsby manifest ([b78cdf3](https://github.com/fremtind/jokul/commit/b78cdf3cd7f745c450dee2a0a428181aa59b8351)), closes [#747](https://github.com/fremtind/jokul/issues/747)

## 2.2.0 (2020-03-30)

### Features

-   **portal:** add icon-button css to gatsby-browser ([836b33a](https://github.com/fremtind/jokul/commit/836b33ad0895cceff5ceefdd3a4b8b521ba8a035))

## 2.1.0 (2020-03-25)

### Bug Fixes

-   add missing dependencies/dependency lists to hooks ([1edc8da](https://github.com/fremtind/jokul/commit/1edc8dabe612ca35a5fab7a6b57ec250dda01771))
-   **portal:** correct path comparison for determining menu active state ([74abad8](https://github.com/fremtind/jokul/commit/74abad8ebaf83bfa423088a3fbaf83a1f3ceaa6a))
-   **portal:** remove conditional hook call on front page ([d41a732](https://github.com/fremtind/jokul/commit/d41a732d78ac18efe7f9bb2aae6720820821edfb))

### Features

-   **portal:** add location context to avoid Location component ([852353e](https://github.com/fremtind/jokul/commit/852353e7898615c820419df77ba315f0059adc18))
-   **portal:** create all portal pages using MDX ([d109af9](https://github.com/fremtind/jokul/commit/d109af940cdb7c772a44f2116fb9de896b143a4c))
-   **portal:** create pretty paths for component pages ([68ac75e](https://github.com/fremtind/jokul/commit/68ac75efdcc0fc8b2d02a290e31b737c63c2950e))

## 2.0.0 (2020-03-06)

### Bug Fixes

-   **portal:** syntax changes in worded sentence ([8ce791a](https://github.com/fremtind/jokul/commit/8ce791a2513f984c2bf73b1471ec9dfdb95ef3cc))
-   implement className, and remove unused import ([224de84](https://github.com/fremtind/jokul/commit/224de843ca40b678e4fab7bfcb8368376c6983f0))
-   **portal:** convert layout to use css grid ([612dc5d](https://github.com/fremtind/jokul/commit/612dc5d15d75a111c411c3f725a7738e5df8618a))
-   **portal:** fix color name from deprecated snøhvit ([dbb4186](https://github.com/fremtind/jokul/commit/dbb418689b2ac28e1cab2c030308e4d44c77b38c))
-   **portal:** fix focus state of title ([3bd0c2e](https://github.com/fremtind/jokul/commit/3bd0c2e723577cb84eabfcf61faf270e61c5b2ef))
-   **portal:** fix header export ([6c22852](https://github.com/fremtind/jokul/commit/6c228529b13f5abae7891fe42394480b8b3b5962))
-   **portal:** fix more type issues ([5b4bfbf](https://github.com/fremtind/jokul/commit/5b4bfbf16454f85ede7ca7f5d4aa6f4270c355ca))
-   **portal:** fix types in frontpage components ([6a9bba2](https://github.com/fremtind/jokul/commit/6a9bba294f44f88d4ecb6f96078816c2fc7369c8))
-   **portal:** fix wrong case in import ([60df779](https://github.com/fremtind/jokul/commit/60df7796621094be89556d3223ce7a4a14d3991d))
-   **portal:** fix wrong use of hook ([f0bf89e](https://github.com/fremtind/jokul/commit/f0bf89ed56b80ba81e68ebb3b808acedca9bf7a9))
-   **portal:** fixes path/location based issues in prod build ([7c75f1c](https://github.com/fremtind/jokul/commit/7c75f1c55cb7955bf4748366daff866bbf3c963c))
-   **portal:** front page fixup ([b38085c](https://github.com/fremtind/jokul/commit/b38085cfb7972e2d8b95eb06157cb55330ec50c9))
-   **portal:** move Header component ([4ccdba5](https://github.com/fremtind/jokul/commit/4ccdba50c06ae3a990093b1c983b09d2747d0e29))
-   **portal:** refactor component structure ([abd749e](https://github.com/fremtind/jokul/commit/abd749ed3eaa9057325d3e27890f9d32ba091441))
-   **portal:** remove "Forsikring" from the Fremtind name ([d09b641](https://github.com/fremtind/jokul/commit/d09b6410cc2403297735f002ff25aa0b4bdf106c))
-   **portal:** remove unsued header code ([6abb412](https://github.com/fremtind/jokul/commit/6abb4123a877bccd5046c02ba33b078f82fcf7a8))
-   menu styling changes ([adc6be9](https://github.com/fremtind/jokul/commit/adc6be94a4b89dcbfcac717541ef7910485f93c5))

### Code Refactoring

-   **portal:** refactoring the portal ([f1f1d7e](https://github.com/fremtind/jokul/commit/f1f1d7e379e3d0c097f3d5b7b3eda5e5ecd377c1))

### Features

-   **portal:** add back github links ([3765cff](https://github.com/fremtind/jokul/commit/3765cff7335631531b4921af1d1bea701024dd14))
-   **portal:** add basic landing page content ([4a8dc2b](https://github.com/fremtind/jokul/commit/4a8dc2b72152f5ba7a1d52b8b184467a9fa5f820))
-   **portal:** add do-dont example component ([7c880c6](https://github.com/fremtind/jokul/commit/7c880c6abefc3ca01a0df79d363242c7288a879a))
-   **portal:** add fullscreen menus and dark mode ([3b7da49](https://github.com/fremtind/jokul/commit/3b7da4986352c22c081d8aaa3533083bbc106e15))
-   **portal:** add PoC for delayed text strings ([756a160](https://github.com/fremtind/jokul/commit/756a1604230818d093da8e0d2a02ad88a339a035))
-   **portal:** add PoC for fading out delayed text ([7ed33cd](https://github.com/fremtind/jokul/commit/7ed33cd57411d654dae03c94f171db89c25dd304))
-   **portal:** additions and fixes to portal landing and content ([31853bd](https://github.com/fremtind/jokul/commit/31853bdc9a49e7a2fafe28899c5eccb9a9860d91))
-   **portal:** animate menu items ([bf410ae](https://github.com/fremtind/jokul/commit/bf410aed23ee38432297feabf5aa9977d338902d))
-   **portal:** feat: made stuff in the portal ([1b75e62](https://github.com/fremtind/jokul/commit/1b75e6219ef2f2d18c6614897e0fd843f9db3224))
-   **portal:** finish implementing comp.examples ([8765859](https://github.com/fremtind/jokul/commit/8765859d88f88ab567c4ca1daad96e6d667992f1))
-   **portal:** front page fixes ([eff7576](https://github.com/fremtind/jokul/commit/eff7576d8e08df86c0dac7ee536e0cde32768a3e))
-   **portal:** frontpage changes ([cd28aa0](https://github.com/fremtind/jokul/commit/cd28aa0b0847e2627a0bcc067eb14a53e10546b8))
-   **portal:** implement dev and portal examples ([857f2e2](https://github.com/fremtind/jokul/commit/857f2e29359f9442a7da0c977a94d63dfbdfc194))
-   **portal:** more work on portal principles ([754cee0](https://github.com/fremtind/jokul/commit/754cee0b72bde7a90e8f566c841c951800342419))
-   **portal:** move footer to own component ([8865168](https://github.com/fremtind/jokul/commit/8865168e4efabcb8da94bff890bea77fe6d79bd5))
-   **portal:** new frontpage content ([9a63066](https://github.com/fremtind/jokul/commit/9a6306654abc3bf82646542182047595e1a0c67c))
-   **portal:** portal component examples and meu fixes ([2ffe8fe](https://github.com/fremtind/jokul/commit/2ffe8fe39ff826983f027dad1ea7ffa97a013ccf))
-   **portal:** proper theme handling in component example ([051580b](https://github.com/fremtind/jokul/commit/051580b2d56ec5101387cff97552ac611016bb4d))
-   **portal:** remember dark mode setting ([303999c](https://github.com/fremtind/jokul/commit/303999c1fb1bee2292850e425064d5fee3de850f))
-   **portal:** remove unused code, and add link support to card ([c1014f6](https://github.com/fremtind/jokul/commit/c1014f66d76d0db3f9d684d242326bf96cd1c4c6))
-   **portal:** updating the layout for the portal, work in progress ([80d3626](https://github.com/fremtind/jokul/commit/80d36266130a9e37cf2677d82340bdbf2e98a496))
-   implement component example ([9c34865](https://github.com/fremtind/jokul/commit/9c3486570b6dd74bc843431ffc9ddadd63b9d647))

### BREAKING CHANGES

-   **portal:** none

## 1.2.1 (2020-02-19)

### Bug Fixes

-   **portal:** use correct text style for site title ([5922949](https://github.com/fremtind/jokul/commit/59229491a2d3cafcf6c5e45baf28679b740aaefc))

## 1.2.0 (2020-02-18)

### Bug Fixes

-   make use of new core color tokens ([075f7b3](https://github.com/fremtind/jokul/commit/075f7b37920805bf780120247461d79c3d8c406e))
-   use new text-style mixins ([2873a57](https://github.com/fremtind/jokul/commit/2873a57f4570ddb87a7390a773433d26a9fde4ac))
-   **jkl:** rename classnames import and move types ([e06ef21](https://github.com/fremtind/jokul/commit/e06ef21062b345d5defab335253041dad7ae6134))
-   **portal:** stop using deprecated typography components from core ([c1c56e3](https://github.com/fremtind/jokul/commit/c1c56e390578ee31fd9c16d1cdd676be1609f5b6))

### Features

-   **portal:** add styles for typographic components ([081e345](https://github.com/fremtind/jokul/commit/081e345edd7c4a654ea097e92e33660c2b3416c1))
-   **portal:** add typographic React components ([fb40367](https://github.com/fremtind/jokul/commit/fb40367b3149e38f3920e1b836c82e6203a5ded6))

## 1.1.0 (2020-01-16)

### Bug Fixes

-   **portal:** add focus state to menu links ([e27e320](https://github.com/fremtind/jokul/commit/e27e320502b2316d2af18a6b3e15baae7d5a2dc5))
-   **portal:** document button, fix security issue with node-sass ([70ff97c](https://github.com/fremtind/jokul/commit/70ff97ce1072302d82f092c92513f7e96fe1d6c5))
-   **portal:** fix overlap with menu on portal hero page ([db3366c](https://github.com/fremtind/jokul/commit/db3366c5c589f691d2d197506636b82e3c186a56))
-   **portal:** fix portal home page header in dark mode ([fca741d](https://github.com/fremtind/jokul/commit/fca741d3887dec6de4010167e6c375baf3f7b0c8))
-   **portal:** refactor examples, show menu for large screens ([ae59e7a](https://github.com/fremtind/jokul/commit/ae59e7aef89098e09ad138bf7cf8574a0d56de7f))
-   **portal:** remove export of deleted Changelog component ([f0a3a17](https://github.com/fremtind/jokul/commit/f0a3a17fdf4f7d435c25a887ea2d8f8fe5073945))
-   fix lint issues after eslint update ([259db8b](https://github.com/fremtind/jokul/commit/259db8bf27f6751ec86c413129162728c3c903d6))
-   remove stretching of portal background image ([e3deea9](https://github.com/fremtind/jokul/commit/e3deea9ab2c13297f2c552a0dc40c7249b4d3bf8))
-   **portal:** stop menu from hiding on large screens ([7b49c62](https://github.com/fremtind/jokul/commit/7b49c62325e0d33705372e772013960080baa7a3))
-   **portal:** use inverted version of toggle for dark mode switch ([9b5a323](https://github.com/fremtind/jokul/commit/9b5a3231e306c0528852a48d5a3b9715e5f7508b))
-   **portal:** use jokul components, update doc and footer ([2bfe5cd](https://github.com/fremtind/jokul/commit/2bfe5cd5486d97ec66e92567a0169ed2ae6027d9))
-   **portal:** use new font api ([da9e4db](https://github.com/fremtind/jokul/commit/da9e4dbd3d9c97b47a48f251fb7f9b596d7f9660))

### Features

-   **portal:** add back filter to components menu ([18f593e](https://github.com/fremtind/jokul/commit/18f593eea9a34ab42c0f7daf6df9cff811e860ed))
-   **portal:** add filtering of components to menu ([1c47601](https://github.com/fremtind/jokul/commit/1c47601efbd1ce45b9cea8eda2d39acc458e57f0))
-   **portal:** add indicator for current page in menu ([a54b67e](https://github.com/fremtind/jokul/commit/a54b67e3193d180d1db095057dc91cc06ea45969))
-   **portal:** autogenerate component docs from example ([40249b5](https://github.com/fremtind/jokul/commit/40249b5189b69af74d1c2b8f38bad118a65b03c0))
-   **portal:** generate general docs from markdown ([8963311](https://github.com/fremtind/jokul/commit/8963311fbfc6f7ca0366ea64d28e6f0c83714e20))
-   **portal:** move all documentation into markdown files ([bdbc63a](https://github.com/fremtind/jokul/commit/bdbc63a0d30fa53192be7062fcb5259355ddac87))
-   **portal:** show typedef, refactor ([248a88e](https://github.com/fremtind/jokul/commit/248a88ee776ff4f16f1fa96de76bb047bbdb9e2a))
-   update to new typography naming ([5c061d7](https://github.com/fremtind/jokul/commit/5c061d7b52529f83a16cf944db240984b67f5229))
-   update to new typography-react paragraph naming ([412a7a2](https://github.com/fremtind/jokul/commit/412a7a2db96f77e962b5b1ffbee66a3f58e73e46))
-   **portal:** use jøkul components to render markdown docs ([4314211](https://github.com/fremtind/jokul/commit/43142111c73640317872ad2bfc4a65bb0c428c6d))
-   **react-hooks:** improve react hooks documentation, add to portal ([bb0ff2e](https://github.com/fremtind/jokul/commit/bb0ff2ea005343dd1ea2e5fda121b9aef478359d))

### Performance Improvements

-   **portal:** remove unused Changelog component ([7ec7f39](https://github.com/fremtind/jokul/commit/7ec7f39ce0cd5ca2a14f1105a5b0be4d25c3c3bb))
-   **portal:** use dart-sass as scss compiler in the portal ([4046fac](https://github.com/fremtind/jokul/commit/4046fac8141db0a9fe40d7eb531965cad755de21))

## 1.0.0 (2019-12-03)

### Bug Fixes

-   **portal:** change wrong imports in SelectExample ([dbe230f](https://github.com/fremtind/jokul/commit/dbe230fe39fda777913b7b349b5fd90c70763372))
-   **portal:** import correct select component in overview ([110cce6](https://github.com/fremtind/jokul/commit/110cce697af6ad3ebfe51570147648b67393521e))
-   **portal:** remove reference to old font stylesheet ([a7bee77](https://github.com/fremtind/jokul/commit/a7bee77162ff0002d962084542d52ea686e79739))
-   **portal:** use prefix path when loading webfonts ([cded83f](https://github.com/fremtind/jokul/commit/cded83f74aaeed19b9b3a074a47d195c10abc61a))
-   **portal-darkmode:** fix toggleswitch after breaking change ([4f51aea](https://github.com/fremtind/jokul/commit/4f51aea45ff7ae8edb949bda11ff04162c305a1c))

### Features

-   **progressbar:** add progressbar ([1ad8754](https://github.com/fremtind/jokul/commit/1ad8754a15e414ff017bce8d829472dfc9a7d01c))
-   **radio-button-react:** rename radio button components ([d09fe6f](https://github.com/fremtind/jokul/commit/d09fe6fd321f2242a94d7d60deb5ae7997da0ccf))
-   use new font in core and portal ([f07f959](https://github.com/fremtind/jokul/commit/f07f9599aa1ec402a332563cf1178aeef7fcc17c))

## 0.11.0 (2019-10-09)

### Bug Fixes

-   remove all alerts from examples ([26abee2](https://github.com/fremtind/jokul/commit/26abee2))
-   **portal:** reset style of accordions in main menu ([818d9dc](https://github.com/fremtind/jokul/commit/818d9dc))

### Features

-   **checkbox-react:** make onChange pass event as parameter ([321ff7a](https://github.com/fremtind/jokul/commit/321ff7a))
-   **field-group:** update field group styling according to sketches ([69d94d8](https://github.com/fremtind/jokul/commit/69d94d8))
-   change name of label variants ([554749c](https://github.com/fremtind/jokul/commit/554749c))
-   implement Field pattern in text input ([f3877e4](https://github.com/fremtind/jokul/commit/f3877e4))

## 0.10.0 (2019-09-23)

### Features

-   **jkl-table:** change prop name for click a row in table ([5dfa8c9](https://github.com/fremtind/jokul/commit/5dfa8c9))
-   **portal:** add page title and fix accessibility issues ([e210b78](https://github.com/fremtind/jokul/commit/e210b78))
-   **portal:** add table to documentation ([d0d362e](https://github.com/fremtind/jokul/commit/d0d362e))

## 0.9.0 (2019-08-30)

### Bug Fixes

-   **dropdown:** remove bottom margin ([7741df9](https://github.com/fremtind/jokul/commit/7741df9))
-   **portal:** add DropdownExample to portal ([344e417](https://github.com/fremtind/jokul/commit/344e417))
-   **portal:** fixed import to used build files ([5fdad6f](https://github.com/fremtind/jokul/commit/5fdad6f))
-   **portal:** remove gatsby image optimizing and use static image ([9e14a69](https://github.com/fremtind/jokul/commit/9e14a69)), closes [#267](https://github.com/fremtind/jokul/issues/267)
-   **portal:** remove old link prop ([2c06d33](https://github.com/fremtind/jokul/commit/2c06d33))
-   **portal:** restrict what codesandbox can access ([7557b40](https://github.com/fremtind/jokul/commit/7557b40))
-   **textinput:** add onblur to textfields ([c49a36e](https://github.com/fremtind/jokul/commit/c49a36e)), closes [#269](https://github.com/fremtind/jokul/issues/269)

### Features

-   **dropdown:** add invalid state, errortext and help text ([a731e52](https://github.com/fremtind/jokul/commit/a731e52))
-   **link:** updated link style ([8fe8671](https://github.com/fremtind/jokul/commit/8fe8671)), closes [#254](https://github.com/fremtind/jokul/issues/254)
-   **portal:** add codesandbox example ([cef235a](https://github.com/fremtind/jokul/commit/cef235a))
-   **portal:** add examples ([84d9c3c](https://github.com/fremtind/jokul/commit/84d9c3c))
-   **radiobutton:** add error state to radio button ([a2052a7](https://github.com/fremtind/jokul/commit/a2052a7))

## 0.8.0 (2019-08-02)

### Bug Fixes

-   **build:** make gatsby prefix paths ([d6f5493](https://github.com/fremtind/jokul/commit/d6f5493))
-   **ci:** colorize error output, fix texteample ([e239375](https://github.com/fremtind/jokul/commit/e239375))
-   **core:** fix help text spacing, error color, minor ios portal fix ([ae19bb7](https://github.com/fremtind/jokul/commit/ae19bb7))
-   **portal:** change bg image ([17b83db](https://github.com/fremtind/jokul/commit/17b83db))
-   **portal:** create script to build locally ([d4f9bf6](https://github.com/fremtind/jokul/commit/d4f9bf6))
-   **portal:** dogfood spacing api ([7b4611c](https://github.com/fremtind/jokul/commit/7b4611c))
-   **portal:** fix mobilstyling on front page ([130518f](https://github.com/fremtind/jokul/commit/130518f))
-   **portal:** fixes based on pr feedback ([d3524ff](https://github.com/fremtind/jokul/commit/d3524ff))
-   **portal:** messagebox mobil width, fixed portal mobile style ([5521675](https://github.com/fremtind/jokul/commit/5521675))
-   **portal:** use lighter green for typename in dark mode ([3a01d4d](https://github.com/fremtind/jokul/commit/3a01d4d))
-   **radiobutton:** fix radio button screenshot ([1cf87b3](https://github.com/fremtind/jokul/commit/1cf87b3))
-   **test:** change travis order, allow more diff on screenshots ([bb42529](https://github.com/fremtind/jokul/commit/bb42529))

### Features

-   **ci:** add image diff upload to aws ([1a00f7f](https://github.com/fremtind/jokul/commit/1a00f7f))
-   **ci:** add test docs ([7b5f109](https://github.com/fremtind/jokul/commit/7b5f109))
-   **core:** add atomic layout spacing classes ([7594f9d](https://github.com/fremtind/jokul/commit/7594f9d))
-   **firefox:** remove dotted line for good ([67187a6](https://github.com/fremtind/jokul/commit/67187a6))
-   **logo:** add logostamp ([1f90862](https://github.com/fremtind/jokul/commit/1f90862))
-   **portal:** use same code highlighter for all example code ([34bb322](https://github.com/fremtind/jokul/commit/34bb322))
-   **test:** add visual regression testing ([1553b28](https://github.com/fremtind/jokul/commit/1553b28))
-   **text-field:** add help and error text to field and area ([e18f117](https://github.com/fremtind/jokul/commit/e18f117)), closes [#41](https://github.com/fremtind/jokul/issues/41)

## 0.7.0 (2019-07-30)

### Bug Fixes

-   **checkbox:** fix style for older browser, add onchange handler ([d2f0497](https://github.com/fremtind/jokul/commit/d2f0497)), closes [#148](https://github.com/fremtind/jokul/issues/148)
-   **checkbox:** refactor default checked to checked ([ae709fa](https://github.com/fremtind/jokul/commit/ae709fa))
-   **hamburger:** fix example, change bg color on example in portal ([f1cbad0](https://github.com/fremtind/jokul/commit/f1cbad0))
-   **portal:** add loader to links ([b7c4849](https://github.com/fremtind/jokul/commit/b7c4849))
-   **portal:** align github and figma links in menu ([c7eb8ec](https://github.com/fremtind/jokul/commit/c7eb8ec))
-   **portal:** fixed image import, taborder in menu ([9c6e25a](https://github.com/fremtind/jokul/commit/9c6e25a))
-   **portal:** hide type for dividerline ([ff689a4](https://github.com/fremtind/jokul/commit/ff689a4))

### Features

-   **messagebox:** add warning msgbox, add wc info in portal ([56da82f](https://github.com/fremtind/jokul/commit/56da82f))
-   **portal:** add components, refactor portal ([7e7d038](https://github.com/fremtind/jokul/commit/7e7d038))
-   **portal:** add github links, add figma iframe to button ([7ee6c19](https://github.com/fremtind/jokul/commit/7ee6c19))
-   **portal:** add types to examples in portal ([625f169](https://github.com/fremtind/jokul/commit/625f169))
-   **portal:** document bulletlist ([6d7c1de](https://github.com/fremtind/jokul/commit/6d7c1de))
-   **portal:** document card ([d3e7033](https://github.com/fremtind/jokul/commit/d3e7033))
-   **portal:** document checkbox ([1c038e5](https://github.com/fremtind/jokul/commit/1c038e5))
-   **portal:** document divider line ([620740d](https://github.com/fremtind/jokul/commit/620740d))
-   **portal:** document loader ([5f83159](https://github.com/fremtind/jokul/commit/5f83159))
-   **portal:** fix styling of devloper pages ([988a90b](https://github.com/fremtind/jokul/commit/988a90b))
-   **portal:** update design, layout and front page ([6c4d018](https://github.com/fremtind/jokul/commit/6c4d018))
-   **typography:** add style and component for links ([9aeac8d](https://github.com/fremtind/jokul/commit/9aeac8d))

## 0.6.0 (2019-07-18)

### Bug Fixes

-   **bullet-list:** remove import of paragraph styles and align spacing ([ec24a21](https://github.com/fremtind/jokul/commit/ec24a21))
-   **merge:** merge ([d4a3ba8](https://github.com/fremtind/jokul/commit/d4a3ba8))
-   **portal:** fixed import ([19df8af](https://github.com/fremtind/jokul/commit/19df8af))
-   **portal:** make portal build correctly ([3ddfc85](https://github.com/fremtind/jokul/commit/3ddfc85))
-   **portal:** remove outline from code example ([fac9027](https://github.com/fremtind/jokul/commit/fac9027))
-   **portal:** update accordion page with changelog component ([2cb7855](https://github.com/fremtind/jokul/commit/2cb7855))
-   **portal:** use correct import path for core.min.css ([125a20a](https://github.com/fremtind/jokul/commit/125a20a))
-   **portal:** use correct sass imports in portal components ([f04d46f](https://github.com/fremtind/jokul/commit/f04d46f))

### Features

-   **portal:** add changelog component ([f71b454](https://github.com/fremtind/jokul/commit/f71b454))
-   **portal:** add changelog to button component ([a3639be](https://github.com/fremtind/jokul/commit/a3639be))
-   **portal:** add Datepicker example and consolidate example pages ([2987beb](https://github.com/fremtind/jokul/commit/2987beb))
-   **portal:** add documentation to portal ([7341621](https://github.com/fremtind/jokul/commit/7341621))
-   **portal:** add getting started guide ([76d742b](https://github.com/fremtind/jokul/commit/76d742b))
-   **portal:** implement live code editing with react-live ([6dc96a2](https://github.com/fremtind/jokul/commit/6dc96a2))

## 0.5.0 (2019-07-15)

### Bug Fixes

-   use correct syntax for importing sass index files ([46fa8f6](https://github.com/gatsbyjs/gatsby-starter-default/commit/46fa8f6))

## 0.1.1 (2019-07-15)

### Bug Fixes

-   **portal:** import specific files on a-la-carte page ([a557fb5](https://github.com/gatsbyjs/gatsby-starter-default/commit/a557fb5))

## 0.1.0 (2019-07-15)

### Bug Fixes

-   **portal:** add onchange method to dropbox example in portal ([bb15822](https://github.com/gatsbyjs/gatsby-starter-default/commit/bb15822))
-   **portal:** dogfood colors and spacing in example styling ([f8f0539](https://github.com/gatsbyjs/gatsby-starter-default/commit/f8f0539))
-   **portal:** fix case issue for imports ([de9e61e](https://github.com/gatsbyjs/gatsby-starter-default/commit/de9e61e))
-   **portal:** import and use bullet-list style ([52e28e5](https://github.com/gatsbyjs/gatsby-starter-default/commit/52e28e5))
-   **portal:** linting errors ([83168b4](https://github.com/gatsbyjs/gatsby-starter-default/commit/83168b4))
-   **portal:** remove yarn.lock from portal ([3e298e0](https://github.com/gatsbyjs/gatsby-starter-default/commit/3e298e0))
-   **portal:** use --prefix-path for building gatsby docs ([1111098](https://github.com/gatsbyjs/gatsby-starter-default/commit/1111098))

### Features

-   **portal:** add all components to a portal page ([ac8f233](https://github.com/gatsbyjs/gatsby-starter-default/commit/ac8f233))
-   **portal:** add bullet list to a-la-carte ([a87cf22](https://github.com/gatsbyjs/gatsby-starter-default/commit/a87cf22))
-   **portal:** add contribution guide ([dc76ab7](https://github.com/gatsbyjs/gatsby-starter-default/commit/dc76ab7))
-   **portal:** add styling to example and code presentation ([9bab469](https://github.com/gatsbyjs/gatsby-starter-default/commit/9bab469))
-   **portal:** inital version of portal created with gatsby ([722667f](https://github.com/gatsbyjs/gatsby-starter-default/commit/722667f))
-   **portal:** make markdown parser use our components ([61baa27](https://github.com/gatsbyjs/gatsby-starter-default/commit/61baa27))
-   **portal:** refactor example pages and improve doc rendering ([a5374b2](https://github.com/gatsbyjs/gatsby-starter-default/commit/a5374b2))
-   **portal:** separate style from presentation, tweak design ([0e75532](https://github.com/gatsbyjs/gatsby-starter-default/commit/0e75532))

### Reverts

-   **dropdown:** rebase to main without new dropdown stuff ([3b21e7b](https://github.com/gatsbyjs/gatsby-starter-default/commit/3b21e7b))
