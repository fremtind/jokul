# Jøkul metrikk-verktøy (`get-metrics`)

Interaktivt CLI-verktøy som måler hvordan konsument-repoer i `fremtind`-organisasjonen
bruker `@fremtind/jokul`. Verktøyet oppdager repoer via GitHub, kloner/oppdaterer dem
lokalt, analyserer dem, og kan sende resultatet til Mixpanel.

## Kom i gang

```bash
pnpm get-metrics                              # interaktivt (anbefalt)
pnpm get-metrics --ci --metric all --mixpanel # uten spørsmål (CI/skript)
pnpm get-metrics --help                       # full oversikt over flagg
pnpm get-metrics --dry-run                    # vis hva som ville blitt hentet
```

Hele den interaktive reisen styres med tastaturet: **piltaster** flytter, **Enter**
bekrefter, **mellomrom** huker av i flervalg, **Esc** går ett steg tilbake og
**Ctrl+C** avbryter. Ingen `j/n`-skriving.

Sentrale flagg:

| Flagg | Beskrivelse |
| --- | --- |
| `--metric <versions\|components\|tokens\|props\|all>` | Hopp over metrikk-valget |
| `--ci` | Non-interaktivt: alle repoer, aggregert (alias `--non-interactive`) |
| `--dry-run` | Vis hvilke repoer/team som ville blitt hentet – uten å klone eller sende |
| `--mixpanel` | Send resultatet til Mixpanel |
| `--refresh` | Ignorer mellomlagret repo/team-oppdagelse |
| `--org <org>` | GitHub-org (standard `fremtind`) |
| `--dir <sti>` | Hvor kloner ligger (standard `../jokul-consumers`) |
| `--full` | Full klon (ikke shallow) |
| `--cache-ttl <dager>` | Levetid for oppdagelses-cache |
| `--keep-clones` | Ikke slett kloner etter kjøring |
| `--verbose` | Mer logg |
| `-h`, `--help` | Vis innebygd hjelp |

## Flyt (interaktiv)

Ved oppstart kjøres en **preflight** som sjekker at `git` og `gh` finnes og at du er
innlogget (`gh auth status`) – med konkret «neste steg» hvis noe mangler. Deretter
guides du gjennom fire steg:

1. **Velg metrikk** – `Alt`, `Versjoner`, `Komponenter`, `Tokens` eller `Props`.
   Forrige valg huskes og foreslås.
2. **Velg team** – oppdager konsument-repoer og team-eierskap (mellomlagres; kan
   gjenbrukes uten nye GitHub-oppslag). Team vises i en domene-tabell, og du huker av
   hvilke du vil se på (ingen avhuket = alle). Forrige utvalg forhåndsvelges.
3. **Del til Mixpanel?** – valgfri innsending (kun aggregerte tall, ingen kildekode).
4. **Bekreft og kjør** – en oppsummering viser metrikk, team, antall repoer og
   Mixpanel-valg. Du velger å hente/oppdatere til nyeste, bruke lokale kloner som de
   er, eller gå tilbake og endre valg.

Manglende repoer klones uansett; oppdatering av eksisterende kloner styres av valget i
steg 4. Til slutt skrives en **sluttrapport** med tidsbruk og en overskriftslinje per
metrikk.

`Alt` kjører versjoner → komponenter → tokens → props (aggregert) sekvensielt.

I `--ci`-modus hoppes alle spørsmål over: ingen team-filtrering, alle repoer, aggregert
kjøring, og eksisterende kloner oppdateres.

## Metrikker

### Versjoner (`Jøkul versjon`)
Hvilke `@fremtind/jokul`-versjoner konsumentene er på (per manifest/repo), fordelt på major,
React-major, modultype (ESM/CJS) og andel utdaterte.

### Komponenter (`Jøkul komponent`)
Hvilke komponenter som importeres/brukes, med antall repoer, pakker (workspaces) og filer.
Oppsummering av komponenter totalt / i bruk / ubrukt.

### Tokens (`Jøkul token` + `Jøkul token-adopsjon`)
Design-token-bruk (`--jkl-`-variabler) i stil- og kodefiler, med:

- **Fasit-status** mot Jøkul-kilden: `gyldig` (offentlig token), `privat`
  (intern/komponent-token, skjør) eller `ukjent` (typo/fjernet).
- **Kategori**: farge, typografi, avstand, radius, kantlinje, motion, brekkpunkt.
- **Forekomster** + skille mellom `var()`-konsum og `override` (redefinering/tematisering).
- **Fargeadopsjon** (`Jøkul token-adopsjon`): forholdet mellom token-farger og hardkodet
  hex, globalt og per repo (finner «verstinger»).

### Props (`Jøkul prop`)
Komponent-prop-bruk, kryssreferert mot den faktiske Jøkul-API-en:

- **API-kategori** per prop: `kjent`, `utfaset` (deprecated), `ukjent` (typo/ukjent),
  `html` (gyldig HTML/SVG-attributt) eller `spread` (`{...props}`).
- **Interaktiv drill-down**: velg komponent → «alle props» eller én prop → fil(er) → verdier.
- **Verdivalidering**: for props med lukket literal-union (f.eks. `button · variant`) vises
  `Gyldig` ✓/✗/– og tillatte verdier; ugyldige verdier oppsummeres.
- **Aggregert modus** (under `Alt` og `--ci`): oversikt uten drill-down.

## Fasit-modeller

To moduler bygger «fasiten» ved å lese Jøkul-kildekoden i dette repoet:

- **`fasit/component-api.mjs`** – bygger API-modellen per eksportert `*Props`-type
  (fra hver komponents `index.ts`), løser `extends`/`&`-kjeder, og finner tillatte verdier
  for enum/literal-union-props. Brukes til prop-klassifisering + verdivalidering.
- **`fasit/tokens.mjs`** – bygger token-fasiten fra de autogenererte
  `src/styles/theme/`-SCSS-filene (offentlige tokens) + alle `--jkl-`-deklarasjoner ellers
  i `src` (private). Gir `gyldig` / `privat` / `ukjent`.

## Team- og domene-berikelse

Repo → team → domene styres av **`taxonomy.mjs`** (kilden til sannhet): navne-regler
knytter repo-navn til team, og domene-regler grupperer team i forretningsområder.
Standardene skrives til `team-ownership.json` ved første kjøring og kan overstyres der
(per-repo `overrides` vinner alltid) uten kodeendring.

`buildRepoContext` (i `collect/enrich.mjs`) knytter hvert repo til `teams`, `domains`
(avledet fra team via team-store), samt Jøkul-`majors`/`versions`. `enrichRows` og
`enrichPropEntries` aggregerer disse opp på hver metrikk-rad, slik at **alle bruks-events
får `Team` + `Antall team` (og `Domener`, `Jøkul-versjoner`)** – som lister/unioner for
aggregerte rader, og direkte per-repo for adopsjon.

## Mixpanel-events

| Event | Kilde | Nivå |
| --- | --- | --- |
| `Jøkul versjon` | versjoner | per manifest + oppsummering |
| `Jøkul komponent` | komponenter | per komponent + oppsummering |
| `Jøkul token` | tokens | per token |
| `Jøkul token-adopsjon` | tokens | global + per repo |
| `Jøkul prop` | props | per komponent·prop / per verdi |

Alle events er idempotente per døgn via `$insert_id` (bruk `--refresh` for ny oppdagelse,
ikke for å omgå idempotens).

## Arkitektur

```
scripts/get-metrics.mjs              # CLI-inngang: tynn lim (preflight → wizard/CI → kjør)
scripts/metrics/
  config.mjs                         # flagg + event-navn
  taxonomy.mjs                       # kilden til sannhet: repo→team→domene
  mixpanel.mjs                       # trackEvents, mixpanelDay (send-transport)
  cli/                               # alt brukeren ser og styrer
    help.mjs                         # --help + introtekst
    wizard.mjs                       # 4-stegs veiviser (runWizard)
    report.mjs                       # metrikk-katalog, tørrkjøring, sluttrapport
    prompt.mjs                       # tastatur-meny (piltaster/enter/space/esc)
    ui.mjs                           # farger, overskrifter, steg, paneler (NO_COLOR-aware)
    preflight.mjs                    # sjekker git/gh/innlogging før start
    prefs.mjs                        # husker forrige metrikk/team-valg
  infra/                             # ren mekanikk, ingen domenekunnskap
    git.mjs, gh.mjs, async.mjs, format.mjs, semver.mjs, progress.mjs
  discovery/                         # oppdag → (klon)
    discovery.mjs, repo-metadata.mjs, codeowners.mjs, team-store.mjs, clone.mjs
  fasit/                             # Jøkuls EGEN kilde som fasit (ikke konsumentene)
    component-api.mjs                # prop-API-fasit (kjent/utfaset/enum-verdier)
    tokens.mjs                       # token-fasit (gyldig/privat/ukjent + kategori)
  collect/                           # samle → berik → rapportér → send, per metrikk
    run.mjs                          # orkestrering: runVersions/Components/Tokens/Props/All
    enrich.mjs                       # team/domene/versjon-berikelse (buildRepoContext, enrichRows)
    versions.collect.mjs   .report.mjs   .pnpm-catalog.mjs   .manifest-meta.mjs
    components.collect.mjs   .report.mjs   .mixpanel.mjs
    tokens.collect.mjs   .report.mjs   .mixpanel.mjs
    props.collect.mjs   .report.mjs   .mixpanel.mjs
    jsx.mjs                          # JSX-parsing (tagger, props, verdier)
    usage-report.mjs                 # felles «bruks»-rapport
```

## Mellomlagring

Alt legges under klone-katalogen (standard `../jokul-consumers`):

- **`.discovery-cache.json`** – oppdagede repoer + team (styres av `--cache-ttl` / `--refresh`).
- **`team-ownership.json`** – team-butikk: `overrides` + auto-cachet eierskap per repo.
- **`metrics-prefs.json`** – sist valgte metrikk/team (foreslås neste gang).

## Begrensninger

- Token-fasiten skiller offentlige vs private tokens, men dynamiske spacing-kombinasjoner
  godtas via mønster (ikke literal-oppslag).
- Hardkodet-hex-heuristikken teller også hex i bevisste token-overstyringer.
- Prop-verdivalidering dekker kun lukkede literal-unioner; åpne typer (`string`,
  `ReactNode`, `boolean`, callbacks) valideres ikke.
- `Omit`/`Pick` på prop-typer honoreres ikke fullt ut (kan over-approksimere `kjent`).
- Utkommentert JSX/CSS kan telles med (kommentarer strippes ikke i konsument-parsingen).
