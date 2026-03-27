import { buildCatalogs } from "./jokul-usage-metrics/catalogs.ts";
import {
    createConfig,
    createSnapshot,
    parseCliArgs,
    printHelp,
} from "./jokul-usage-metrics/config.ts";
import { loadEnvFile } from "./jokul-usage-metrics/env-file.ts";
import {
    buildSummaryEvent,
    summarizeScanResults,
} from "./jokul-usage-metrics/events.ts";
import { listRepositories } from "./jokul-usage-metrics/github.ts";
import { sendEventsToMixpanel } from "./jokul-usage-metrics/mixpanel.ts";
import { scanRepository } from "./jokul-usage-metrics/scan.ts";
import { loadTeamMap } from "./jokul-usage-metrics/team-map.ts";
import {
    createLogger,
    mapWithConcurrency,
} from "./jokul-usage-metrics/utils.ts";

const flags = parseCliArgs();

if (flags.showHelp) {
    printHelp();
    process.exit(0);
}

const log = createLogger(flags.isVerbose);
loadEnvFile(flags, log);
const config = createConfig(flags);
const snapshot = createSnapshot();
const teamMap = loadTeamMap(config.teamMapPath, log);
const catalogs = buildCatalogs();

const main = async () => {
    const repositories = await listRepositories(config);
    log(
        `Scanning ${repositories.length} repositories in ${config.githubOwner} for Jøkul usage`,
    );

    const scanResults = await mapWithConcurrency(repositories, 5, (repo) =>
        scanRepository(repo, config, teamMap, catalogs, snapshot, log),
    );
    const stats = summarizeScanResults(scanResults);
    const events = [
        ...scanResults.flatMap((result) => result.events),
        buildSummaryEvent({
            owner: config.githubOwner,
            snapshot,
            stats,
            token: config.mixpanelProjectToken,
        }),
    ];

    if (flags.isDryRun) {
        log(
            `Dry run: prepared ${events.length} Mixpanel event(s) from ${stats.repositoriesWithUsage} repo(s)`,
        );
        console.log(
            JSON.stringify(
                {
                    stats,
                    sampleEvents: events.slice(0, 30),
                },
                null,
                2,
            ),
        );
        return;
    }

    await sendEventsToMixpanel(events, config.mixpanelApiUrl, log);
    log(
        `Sent ${events.length} Mixpanel event(s) from ${stats.repositoriesWithUsage} repo(s)`,
    );
};

main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
});
