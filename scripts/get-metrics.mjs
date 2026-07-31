#!/usr/bin/env node
import { intro, printHelp } from "./metrics/cli/help.mjs";
import {
    printDryRun,
    printFinalReport,
} from "./metrics/cli/report.mjs";
import { runWizard } from "./metrics/cli/wizard.mjs";
/**
 * get-metrics.mjs — interaktivt metrikk-verktøy for Jøkul.
 *
 * Måler hvordan fremtind-repoer bruker @fremtind/jokul. Kjør uten flagg for
 * en guidet reise i 4 steg:
 *   1) Velg metrikk   2) Velg team   3) Mixpanel?   4) Bekreft og kjør
 * Piltaster flytter · Enter bekrefter · Esc går tilbake · Ctrl+C avbryter.
 *
 * Kjøring:
 *   pnpm get-metrics                       (interaktivt, anbefalt)
 *   pnpm get-metrics --ci --metric all     (uten spørsmål, for CI)
 *   pnpm get-metrics --help                (full oversikt over flagg)
 *
 * Denne fila er tynn lim: den parser flagg, kjører preflight og delegerer
 * til veiviseren (cli/wizard) eller CI-stien, og kjører valgt metrikk.
 */
import { parseArgs } from "./metrics/config.mjs";
import { preflight } from "./metrics/cli/preflight.mjs";
import { loadPrefs, savePrefs } from "./metrics/cli/prefs.mjs";
import { closePrompt } from "./metrics/cli/prompt.mjs";
import { ensureClones } from "./metrics/discovery/clone.mjs";
import {
    makeFileTeamFilter,
    teamsMatch,
} from "./metrics/discovery/codeowners.mjs";
import {
    discoverConsumerRepos,
    discoverTeams,
    writeDiscoveryCache,
} from "./metrics/discovery/discovery.mjs";
import { runMetric } from "./metrics/collect/run.mjs";

/** Ikke-interaktiv sti (--ci): alle repoer, aggregert, ingen spørsmål. */
async function runCi(config) {
    const started = Date.now();
    const records = await discoverConsumerRepos(config);
    if (!records.length) {
        console.log("Ingen konsument-repoer funnet.");
        return;
    }
    console.log(`Fant ${records.length} konsument-repo(er) i @${config.org}.`);
    console.log("\n🧭 Kartlegger team-eierskap...");
    const discovery = await discoverTeams(records, config);
    writeDiscoveryCache(config, discovery);
    const chosen = discovery.withTeams;
    const metric = config.metric ?? "versions";

    if (config.dryRun) {
        printDryRun(
            config,
            { metric, selectedSet: null, sendMixpanel: config.mixpanelEnabled },
            chosen,
        );
        return;
    }

    const clones = await ensureClones(chosen, config, { update: true });
    if (!clones.length) {
        console.log("Ingen kloner tilgjengelig. Avbryter.");
        return;
    }
    const teamFilter = makeFileTeamFilter(null, config.org.toLowerCase());
    const results = await runMetric(metric, {
        clones,
        config,
        selectedSet: null,
        teamFilter,
        sendMixpanel: config.mixpanelEnabled,
    });
    printFinalReport(config, results, Date.now() - started);
}

async function main() {
    const config = parseArgs();
    if (config.help) {
        printHelp();
        return;
    }

    process.on("SIGINT", () => {
        closePrompt();
        console.log("\nAvbrutt.");
        process.exit(130);
    });

    if (!(await preflight())) process.exit(1);
    if (config.ci) return runCi(config);

    intro();
    const prefs = loadPrefs(config);

    const wiz = await runWizard(config, prefs);
    if (!wiz) {
        closePrompt();
        return;
    }
    const { answers, discovery } = wiz;

    const chosen = answers.selectedSet
        ? discovery.withTeams.filter((r) =>
              teamsMatch(r.teams, answers.selectedSet),
          )
        : discovery.withTeams;
    if (!chosen.length) {
        console.log("Ingen repoer for valgte team.");
        closePrompt();
        return;
    }

    if (config.dryRun) {
        printDryRun(config, answers, chosen);
        closePrompt();
        return;
    }

    savePrefs(config, {
        lastMetric: answers.metric,
        lastTeams: answers.selectedSet ? [...answers.selectedSet] : [],
    });

    // For props gjøres flere valg etter kloning; behold prompten åpen der.
    if (answers.metric !== "props") closePrompt();

    const started = Date.now();
    const clones = await ensureClones(chosen, config, {
        update: answers.update,
    });
    if (!clones.length) {
        console.log("Ingen kloner tilgjengelig. Avbryter.");
        closePrompt();
        return;
    }

    const teamFilter = makeFileTeamFilter(
        answers.selectedSet,
        config.org.toLowerCase(),
    );
    const results = await runMetric(answers.metric, {
        clones,
        config,
        selectedSet: answers.selectedSet,
        teamFilter,
        sendMixpanel: answers.sendMixpanel,
    });

    closePrompt();
    printFinalReport(config, results, Date.now() - started);
}

main().catch((err) => {
    closePrompt();
    console.error(String(err.stack || err));
    process.exit(1);
});
