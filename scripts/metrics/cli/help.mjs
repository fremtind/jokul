/** Hjelp og introtekst for get-metrics. */
import { dim } from "./ui.mjs";

export function printHelp() {
    console.log(
        [
            "",
            "📊 get-metrics — mål hvordan fremtind-repoer bruker",
            "   @fremtind/jokul.",
            "",
            "Bruk:",
            "  pnpm get-metrics          Interaktivt (anbefalt): guides",
            "                            gjennom valgene steg for steg.",
            "  pnpm get-metrics --ci     Uten spørsmål (for CI/skript).",
            "",
            "Metrikker (--metric <navn>, ellers spør menyen):",
            "  all          Kjør alt: versjoner, komponenter, tokens, props",
            "  versions     Hvilke Jøkul-versjoner repoene er på (standard)",
            "  components   Hvilke komponenter som er i bruk",
            "  tokens       Design-token-bruk (--jkl-…) og adopsjon",
            "  props        Komponent-props med drill-down (eksperimentelt)",
            "",
            "Vanlige flagg:",
            "  --ci             Kjør uten spørsmål: alle repoer, aggregert",
            "                   (alias: --non-interactive)",
            "  --dry-run        Vis hva som ville blitt hentet – uten å klone",
            "  --mixpanel       Send resultatet til Mixpanel",
            "  --metric <navn>  Hopp over metrikk-menyen",
            "  --refresh        Ignorer mellomlagret repo/team-oppdagelse",
            "  --dir <sti>      Hvor klonene ligger (std ../jokul-consumers)",
            "  --org <org>      GitHub-org (standard fremtind)",
            "  --full           Full klon (ikke shallow)",
            "  --cache-ttl <n>  Cache-levetid for oppdagelse i dager (std 7)",
            "  --keep-clones    Ikke slett kloner etter kjøring",
            "  --verbose        Mer logg",
            "  -h, --help       Vis denne hjelpen",
            "",
            "Eksempler:",
            "  pnpm get-metrics",
            "  pnpm get-metrics --metric tokens --mixpanel",
            "  pnpm get-metrics --ci --metric all --mixpanel",
            "  pnpm get-metrics --dry-run",
            "",
        ].join("\n"),
    );
}

export function intro() {
    console.log(
        "\n📊 Jøkul metrikker · måler hvordan fremtind-repoer bruker " +
            "@fremtind/jokul.",
    );
    console.log(
        dim(
            "   Fire steg · piltaster flytter · Enter bekrefter · " +
                "Esc tilbake · Ctrl+C avbryter.",
        ),
    );
}
