# Oversikt: distributørtemaer

> Kortversjon av `THEME-GENERATION-PLAN.md` og `DISTRIBUTOR-THEMES-REPO-PLAN.md`.

## Mål

Distributører (f.eks. forsikringspartnere) skal kunne ha egne Jøkul-temaer. Temaene ligger i et nytt privat repo, `@fremtind/distributor-themes`, og bygges med `@fremtind/jokul`. Repoet registrerer også hvilken distributør som bruker hvilket tema.

Et tema starter enten som en fil eksportert fra temabyggeren eller som én farge. Det ender som ferdig CSS/SCSS som tas i bruk med `data-brand="<navn>"`.

De to repoene henger sammen kun gjennom fire ting: det versjonerte temafilformatet, `jokul theme`-CLI-et, CLI-ets utdatastruktur (inkludert en manifestfil) og selektoren `[data-brand]`.

## Endringer i `@fremtind/jokul`

**Nytt**

- **`@fremtind/jokul/theme`-inngang (nettleser-trygg).** Eksponerer:
    - palettgenerering (`generatePalette` og hjelpefunksjoner), flyttet ut av portalen
    - temafilformatet: `JokulThemeFile`, `parseThemeFile`, `isHex`, `normalizeHex`
    - konvertering fra palett til tokens-JSON for merkevare
- **`jokul theme`-CLI.** Den eneste offentlige måten å bygge temaer på:
    - `generate <hex>` lager en temafil fra en farge
    - `build <filer…>` lager tokens, SCSS og eventuelt CSS
    - `validate <filer…>` kontrollerer temafiler
    - Byggeflagg: `--css`, `--index` (én samlet import pluss `manifest.json`) og `--types` (`brands.d.ts`).
    - Fonter som ligger ved siden av temafilen kopieres til utdata.
- **Tillegg i temafilen.** Valgfri `fonts.faces` lar temaer levere egne lisensierte fontfiler. Listen med fontvalg i temabyggeren blir i portalen.
- **Utvidbar `Brand`-type.** Det nye grensesnittet `JokulBrands` lar konsumenter legge til egne `data-brand`-verdier med module augmentation. Det re-eksporteres fra `@fremtind/jokul`.
- **Dokumentasjon for temabygging.** En README for flyten «Instruksjoner for å bygge tema».

**Endret**

- **Style-dictionary-oppsett.** Kan nå bygge et hvilket som helst temanavn fra en hvilken som helst arbeidsmappe, ikke bare det innebygde `dnb`. Eksisterende `dnb`-utdata skal være byte-for-byte identisk.
- **Pakking.** Den Node-spesifikke byggekoden publiseres, men eksporteres ikke. Basis-tokenfilene følger nå med pakken. `chroma-js` og `hsluv` blir ordinære avhengigheter. `style-dictionary` og `sass` blir valgfrie peer-avhengigheter, slik at CLI-et avslutter med et installasjonshint hvis de mangler.
- **Ubrukt «saturated»-fargemetadata** fjernes.
- **Genererte eksterne temaer** får variabelen `$webfonts-dir-<navn>` i stedet for en sti inn i jokuls egen kildekode.

## Endringer i portalen

- Fargegeneratoren slettes og importeres fra `@fremtind/jokul/theme`.
- Eksporten fra temabyggeren lager en `JokulThemeFile`, slik at den fungerer direkte med `jokul theme build`.
- `brandTitles` blir en delvis record.

## Det nye private repoet (`fremtind/distributor-themes`)

- **Innhold.** Én mappe per tema (`theme.json` pluss valgfrie fonter) og `distributors.json`, som kobler distributører til temaer. Flere distributører kan dele et tema.
- **Skript.** `theme:add` importerer en eksport fra temabyggeren. `theme:generate` lager et tema fra en hex-farge. Et kort byggeskript kjører jokul-CLI-et og skriver JS-inngangen.
- **Publisert pakke** (til GitHub Packages), med:
    - CSS for alle temaer i én import, eller ett tema om gangen
    - tilsvarende SCSS
    - `manifest.json`
    - en JS/TS-inngang med temalisten, distributørlisten, `getThemeForDistributor(id)` og typene `ThemeName` og `DistributorId`
    - typeutvidelse slik at `data-brand` typesjekkes
- **CI og release.**
    - CI kjører bygg og tester. En kompatibilitetsmatrise sjekker at bygde temaer fortsatt definerer alle fargevariabler som siste 5.x- og 6.x-versjon av jokul leser.
    - Release bruker changesets.
    - Renovate oppdaterer den låste jokul-versjonen, slik at token-endringer når temaene automatisk.
- **Peer-område.** `@fremtind/jokul` `^5 || ^6`, med nedre grense satt til første 5.x-utgivelse som støtter merkevarefarger og -fonter.

## Rekkefølge

1. jokul: temamodul, CLI og tilleggene i del A.
2. Portalen byttes over til pakken.
3. Sett opp det private repoet.
4. Importer det første virkelige temaet.
5. CI, release og Renovate.
