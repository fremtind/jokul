# Måling av Jøkul-bruk

Dette oppsettet sender daglige øyeblikksbilder av Jøkul-bruk til Mixpanel uten å bruke en egen database.

## Hva som samles inn

Arbeidsflyten kjører en GitHub-repo-skann for en eier, finner `package.json`-filer og leter etter:

- `@fremtind/jokul`
- eldre Jøkul-pakker som matcher `@fremtind/jkl-*`

For hver match sendes ett eller flere Mixpanel-event:

- `Pakkebruk`
- `Prosjektbruk`
- `Komponentbruk`
- `Propbruk`
- `Tokenbruk`
- `Hookbruk`
- `Hjelpefunksjonsbruk`
- `Temabruk`
- `Foreldet API-bruk`

Det sendes også ett oppsummeringsevent per kjøring:

- `Bruksskann fullført`

## Mixpanel-modell

Alle egendefinerte felter er nå på norsk. De eneste feltene som fortsatt er engelske er Mixpanel-feltene `token`, `distinct_id`, `$insert_id` og `time`, siden Mixpanel forventer disse navnene.

Hvert bruksevent inneholder blant annet:

- `maaledato`
- `maaledata_kilde` (`github-repo-skann`)
- `github_eier`
- `repo_navn`
- `repo_fullt_navn`
- `repo_standardgren`
- `repo_synlighet` (`privat`, `offentlig`, `intern`)
- `team`
- `pakke_rot`
- `package_json_sti`
- `pakke_navn`
- `pakke_er_privat`

Prosjekteventet er et oppsummeringsevent per pakke (`package.json`) som bruker Jøkul. Det inneholder blant annet:

- `antall_avhengigheter`
- `antall_samlede_avhengigheter`
- `antall_eldre_avhengigheter`
- `blander_samlet_og_eldre`
- `migreringsstatus` (`kun eldre`, `blandet`, `kun samlet`)
- `versjonsstatus` (`kun eldre`, `forhaandsversjon`, `oppdatert`, `utdatert`, `ukjent versjonskrav`)
- `gjeldende_jokul_versjon`
- `bruker_forhaandsversjon`
- `matcher_gjeldende_versjon`
- `antall_ukjente_versjonskrav`
- `antall_komponenter`
- `antall_props`
- `antall_tokensignaler`
- `antall_hooks`
- `antall_hjelpefunksjoner`
- `antall_temasignaler`
- `antall_foreldede_apier`
- `antall_foreldede_props`
- `antall_migreringsblokkere`
- `bruker_tema`
- `bruker_tokens`
- `bruker_tailwind`
- `antall_stilfiler` (`.css`, `.scss`, `.less` i pakkekoden)
- `antall_skannede_kildefiler`
- `antall_kildefiler_med_jokul_signaler`

Komponent-eventene inneholder i tillegg blant annet:

- `komponent_id`
- `komponentnavn`
- `pakkefamilie` (`samlet` eller `eldre`)
- `antall_filer`
- `antall_treff`

Komponenteventene er aggregert per komponent og `pakkefamilie` i hver pakke. De splittes ikke lenger per importsti, som reduserer støy når samme komponent importeres via flere stier.

Prop-eventene inneholder i tillegg blant annet:

- `komponent_id`
- `komponentnavn`
- `prop_navn`
- `pakkefamilie`
- `antall_filer`
- `antall_treff`

Propeventene er aggregert per komponentprop og `pakkefamilie` i hver pakke. De fanger direkte JSX-bruk på importerte Jøkul-komponenter, og teller bare props som er deklarert i Jøkul-koden. Arvede React-/DOM-attributter som bare kommer fra eksterne typer blir derfor ikke med.

Token-eventene inneholder i tillegg blant annet:

- `tokennavn`
- `tokenkategori`
- `tokenkilde` (`css-variabel`, `core-eksport`)
- `pakkefamilie`
- `antall_filer`
- `antall_treff`

Tokeneventene er aggregert per token og `pakkefamilie` i hver pakke. CSS-variabler rapporteres per eksakt tokennavn, og import av `tokens` fra `@fremtind/jokul/core` eller `@fremtind/jokul` rapporteres som `core-eksport`.

Hook- og hjelpefunksjonseventene følger samme mønster med henholdsvis:

- `hook_id` / `hooknavn`
- `hjelpefunksjon_id` / `hjelpefunksjon_navn`
- `importkilde`
- `pakkefamilie`
- `antall_filer`
- `antall_treff`

Temaeventene brukes for:

- importer fra `@fremtind/jokul/styles`, `@fremtind/jokul/tailwind`, `@fremtind/jokul/tailwind/v4`, `@fremtind/jokul/core/tokens.less`

De inneholder blant annet:

- `temasignal_type` (`stilimport`)
- `temasignal_navn`
- `importkilde`
- `pakkefamilie`
- `antall_filer`
- `antall_treff`

Eventene for foreldet bruk brukes til å rapportere statisk detektert bruk av kjente foreldede eksporter og props, som betaprefikser (`BETA_*`), symboler med `@deprecated` i Jøkul-koden, eller JSX-bruk av props som er markert som foreldet i komponenttypene. De inneholder blant annet:

- `api_type` (`komponent`, `hook`, `hjelpefunksjon`, `prop`, `api`)
- `api_navn`
- `foreldet_melding`
- `importkilde`
- `pakkefamilie`
- `antall_filer`
- `antall_treff`

Når den foreldede bruken gjelder en prop, sendes også:

- `komponentnavn`
- `komponent_id`
- `prop_navn`

Oppsummeringseventet `Bruksskann fullført` inneholder blant annet:

- `maaledato`
- `github_eier`
- `antall_repoer_skannet`
- `antall_package_json_skannet`
- `antall_kildefiler_skannet`
- `antall_kildefiler_med_jokul_signaler`
- `antall_repoer_med_bruk`
- `antall_brukseventer`
- `antall_pakkeeventer`
- `antall_prosjekteventer`
- `antall_komponenteventer`
- `antall_propeventer`
- `antall_tokeneventer`
- `antall_hookeventer`
- `antall_hjelpefunksjonseventer`
- `antall_temaeventer`
- `antall_foreldede_api_eventer`
- `antall_skannefeil`

Dette er nok til å svare på spørsmål som:

- Hvilke team bruker Jøkul?
- Hvilke repoer bruker fortsatt eldre pakker?
- Hvor mange repoer bruker `@fremtind/jokul` nå?
- Hvilke versjoner og versjonskrav er mest vanlige?
- Hvilke team ligger på forhåndsversjon, stabile versjonskrav eller utdatert versjonskrav?
- Hvilke team er fortsatt i migreringsstatus `kun eldre` eller `blandet`?
- Hvilke komponenter brukes mest?
- Hvilke tokens brukes mest?
- Hvilke hooks og hjelpefunksjoner brukes mest?
- Hvilke team bruker tokens, stilimporter eller Tailwind-integrasjonen?
- Hvilke team bruker fortsatt foreldede API-er?
- Hvilke team bruker fortsatt eldre komponentpakker?

## Nødvendige secrets

Legg inn disse GitHub Actions-secretene i repoet:

- `USAGE_METRICS_GITHUB_TOKEN`
  Trenger lesetilgang til repoene som skal skannes. For private repoer trenger du typisk `repo` og `read:org`.
- `MIXPANEL_PROJECT_TOKEN`
  Prosjekttoken for Mixpanel-prosjektet som skal motta eventene.

Standard-endepunkt i dette oppsettet er `https://api-eu.mixpanel.com/track`. Hvis Mixpanel-prosjektet ditt ligger i en annen region, kan du overstyre dette med `MIXPANEL_API_URL` i arbeidsflyten eller lokalt.

## Kildekode-skanning

Når en pakke bruker Jøkul, skanner skriptet også kildefiler og teller komponent-, prop-, token-, hook-, hjelpefunksjons-, tema- og foreldet-signaler. For å holde GitHub API-bruken nede gjelder disse standardgrensene:

- maks `150` kildefiler per pakke
- maks `150000` bytes per fil

Du kan overstyre dette med:

- `JOKUL_USAGE_MAX_SOURCE_FILES_PER_WORKSPACE`
- `JOKUL_USAGE_MAX_SOURCE_FILE_BYTES`

`antall_stilfiler` i prosjekteventet er ikke bundet til denne filgrensen. Den teller alle matchende `.css`, `.scss` og `.less`-filer i pakken etter de samme path-filtrene, også når bare et mindre utvalg filer blir innholdsskannet for signaler.

## Teamkartlegging

Arbeidsflyten bruker [`.github/jokul-usage-team-map.json`](../.github/jokul-usage-team-map.json) for å oversette repoer eller pakkestier til team.

Dette er det du typisk skal fylle inn:

- `defaultTeam`
  Brukes når ingen mapping matcher. La den stå som `unknown` hvis du heller vil rydde opp i dashboards senere enn å gjette feil team.
- `repoTeams`
  Bruk dette når ett helt repo tilhører ett team.
- `rules`
  Bruk dette for monorepoer eller andre repoer der ulike mapper og pakker tilhører ulike team.

Matchingen skjer i denne rekkefølgen:

1. `repoTeams["owner/repo-name"]`
2. `repoTeams["repo-name"]`
3. første match i `rules`
4. `defaultTeam`

Feltene i `rules` fungerer slik:

- `repoPattern`
  JavaScript-regex som matches mot fullt repo-navn, for eksempel `fremtind/mono-web`.
- `pathPattern`
  JavaScript-regex som matches mot stien til `package.json` i repoet, for eksempel `apps/claims/package.json`.
- `team`
  Verdien som sendes til Mixpanel i `team`.

Selve [`.github/jokul-usage-team-map.json`](../.github/jokul-usage-team-map.json) inneholder også `_documentation` og `_examples`. De er bare der som hjelp og ignoreres av skriptet.

Eksempel på format:

```json
{
  "defaultTeam": "unknown",
  "repoTeams": {
    "fremtind/sales-web": "sales",
    "fremtind/app-shell": "platform"
  },
  "rules": [
    {
      "repoPattern": "^fremtind/mono-web$",
      "pathPattern": "^apps/claims/",
      "team": "claims"
    }
  ]
}
```

## Kjøring lokalt

Skriptet laster automatisk `.env.metrics` fra repo-roten hvis filen finnes. Verdier som allerede er satt i shell-miljøet overstyrer filen. Du kan også velge en annen fil med `--env-file` eller slå av auto-loading med `--no-env-file`.

Eksempel på `.env.metrics`:

```bash
GITHUB_TOKEN=...
GITHUB_OWNER=fremtind
GITHUB_REPOSITORIES=repo-a,repo-b
MIXPANEL_PROJECT_TOKEN=...
JOKUL_USAGE_TEAM_MAP_PATH=.github/jokul-usage-team-map.json
```

Det ligger også et eksempel i [`.env.metrics.example`](../.env.metrics.example).

Deretter holder det å kjøre:

```bash
pnpm metrics:mixpanel -- --dry-run --verbose
```

Med `--verbose` logger skriptet også hvilke repoer, `package.json`-filer og kildefiler som faktisk blir skannet.

Eller med en annen env-fil:

```bash
pnpm metrics:mixpanel -- --env-file .env.metrics.test --dry-run --verbose
```

Du kan fortsatt sette variablene direkte i shell hvis du vil:

```bash
GITHUB_TOKEN=...
GITHUB_OWNER=fremtind
MIXPANEL_PROJECT_TOKEN=...
pnpm metrics:mixpanel -- --dry-run --verbose
```

`--dry-run` skriver eventene til stdout i stedet for å sende dem.

## Videre utvidelser

Dette oppsettet måler nå:

- repo- og pakkeadopsjon
- pakkeoppsummeringer med migrerings- og versjonsklassifisering
- komponent-, prop-, token-, hook- og hjelpefunksjonsbruk basert på importmønstre i kildekode
- temabruk basert på stil- og Tailwind-importer
- bruk av kjente foreldede eksporter og props

Det er fortsatt noen viktige begrensninger:

- ren stilbruk uten sporbare importer vil i praksis være svakere målt enn JS/TS-importer
- `versjonsstatus` bruker en innebygd semver-tolk for vanlige versjonskrav. Uvanlige referanser som `workspace:`, `file:` eller andre ikke-semver-formater havner i `ukjent versjonskrav`
- prop- og foreldet-detektering er statisk. Den fanger direkte JSX-props, men ikke alt som skjer via prop-spreads, hjelpeobjekter eller andre indirekte mønstre
- skriptet måler kodebruk, ikke faktisk rendring i kjøretid eller sluttbrukeratferd
