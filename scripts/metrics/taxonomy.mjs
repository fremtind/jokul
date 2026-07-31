/**
 * taxonomy.mjs — KILDEN TIL SANNHET for hvordan konsument-repoer knyttes til
 * team og forretningsområder («domener»). Dette er domenekunnskap, ikke kode-
 * mekanikk, og styrer gruppering i BÅDE team-menyen og alle rapporter/metrikker.
 *
 * ▸ Implikasjoner å være klar over:
 *   • Rekkefølge betyr noe: FØRSTE regel som matcher vinner. Legg spesifikke
 *     regler før generelle.
 *   • Dette er STANDARDVERDIER. De skrives til «team-ownership.json» ved første
 *     kjøring og kan overstyres der uten kodeendring. En bevisst tom «rules: []»
 *     i JSON-fila slår av standardreglene; «domains» overstyres som helhet.
 *   • Presedens for eierskap ved oppdagelse:
 *       1) overrides (manuelt, per repo)  2) rules (her)  3) fersk cache
 *       4) CODEOWNERS  5) repo-tilgang (GitHub)  6) «(ukjent)»
 *   • Korte tokens (bm/bsf) MÅ være et helt ledd i repo-navnet – se «word».
 *   • Endrer du domene-navn her, endrer du grupperingsetikettene overalt.
 */

// ── Repo → team ───────────────────────────────────────────────────────────
// Utleder team fra repo-NAVN. Første regel som matcher vinner.
//   name  = eksakt repo-navn (uten org-prefiks)
//   word  = tokenet som et HELT ledd hvor som helst i navnet
//           (avgrenset av «-», «_», «.» eller start/slutt) – trygt for korte
//           tokens: «bm» treffer bm-tilbud/kunde-bm, men ikke bmw-config
//   regex = fritt mønster (case-insensitivt) for spesialtilfeller
// «teams» uten «/» får org-prefiks automatisk (f.eks. «jokul» → «fremtind/jokul»).
export const DEFAULT_RULES = [
    { name: "fremtind.no", teams: ["jokul"] },
    { word: "bm", teams: ["kundelosninger-bm"] },
    { word: "bsf", teams: ["boligselgerforsikring"] },
    { word: "flyt", teams: ["flyt"] },
    { word: "skadesaker", teams: ["skadesaker"] },
    { word: "seopp", teams: ["seopp"] },
    { word: "smart-utvikling", teams: ["smart-utvikling"] },
    { name: "3d-insurance-game", teams: ["sommerprosjekt"] },
    { name: "product-config-manager", teams: ["sommerprosjekt"] },
];

// ── Team → forretningsområde («domene») ───────────────────────────────────
// Grupperer team i domener for menyen og rapportene. Matcher mot team-SLUG
// (delen etter «org/»). Første regel som matcher vinner; «fallback» brukes for
// team som ikke matcher noen regel (også repo helt uten team).
//   team       = eksakt team-slug
//   teamPrefix = slug som STARTER med prefikset (ekte prefiks, f.eks. oppgjor-*)
//   teamRegex  = fritt mønster (case-insensitivt)
export const DEFAULT_DOMAINS = {
    fallback: "Annet",
    rules: [
        { domain: "Privatmarked", teamRegex: "(^|-)pm(-|$)" },
        { domain: "Bedriftsmarked", teamRegex: "(^|-)bm(-|$)" },
        { domain: "Oppgjør", teamPrefix: "oppgjor" },
        { domain: "Oppgjør", team: "skadesaker" },
        { domain: "Oppgjør", team: "flyt" },
        { domain: "Oppgjør", team: "team-radgiverklienter" },
        { domain: "Oppgjør", team: "seopp" },
        { domain: "Smart utvikling", teamRegex: "smart-utvikling(-|$)" },
        { domain: "Boligselgerforsikring", team: "boligselgerforsikring" },
        { domain: "Jøkul", team: "jokul" },
    ],
};
