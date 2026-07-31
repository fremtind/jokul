/** Presentasjon delt av interaktiv og CI-kjøring: metrikk-katalogen,
 *  tørrkjørings-rapport og sluttrapport. */
import { shortName } from "../infra/format.mjs";
import { dim, heading, panel } from "./ui.mjs";

export const METRICS = [
    { value: "all", label: "Alt · versjoner, komponenter, tokens og props" },
    {
        value: "versions",
        label: "Versjoner · hvilke Jøkul-versjoner repoene er på",
    },
    {
        value: "components",
        label: "Komponenter · hvilke komponenter er i bruk",
    },
    {
        value: "tokens",
        label: "Tokens · design-token-bruk (--jkl-…) og adopsjon",
    },
    { value: "props", label: "Props · komponent-props med drill-down (eksp.)" },
];

export const metricLabel = (v) =>
    METRICS.find((m) => m.value === v)?.label ?? v;

export function printDryRun(config, answers, chosen) {
    heading("🔍 Tørrkjøring (--dry-run) — ingenting hentes eller sendes");
    panel("Ville analysert", [
        `Metrikk:  ${metricLabel(answers.metric)}`,
        `Team:     ${answers.selectedSet ? `${answers.selectedSet.size} valgt` : "Alle"}`,
        `Mixpanel: ${answers.sendMixpanel ? "Ja" : "Nei"}`,
        `Repoer (${chosen.length}):`,
    ]);
    for (const r of chosen) {
        console.log(`    • ${shortName(r.repo, config.org)}`);
    }
}

export function printFinalReport(config, results, ms) {
    heading("✅ Ferdig");
    for (const r of results ?? []) {
        if (r.headline) console.log(`  ${r.label}: ${r.headline}`);
    }
    console.log(
        dim(
            `  Tid ${(ms / 1000).toFixed(1)}s · kloner i ${config.workspaceDir}`,
        ),
    );
}
