import { cpus } from "node:os";
import { join, resolve } from "node:path";

const PACKAGE = "@fremtind/jokul";
const SEARCH_LIMIT = 1000; // API-taket for kodesøk (kun repo-oppdagelse)
const DEP_SECTIONS = [
    "dependencies",
    "devDependencies",
    "peerDependencies",
    "optionalDependencies",
];
const CPU = Math.max(2, cpus().length);

export function parseArgs(argv = process.argv.slice(2)) {
    const getArg = (name, fallback) => {
        const i = argv.indexOf(`--${name}`);
        return i !== -1 && argv[i + 1] ? argv[i + 1] : fallback;
    };
    const org = getArg("org", "fremtind");
    const workspaceDir = resolve(
        process.cwd(),
        getArg("dir", join("..", "jokul-consumers")),
    );
    return {
        package: PACKAGE,
        searchLimit: SEARCH_LIMIT,
        depSections: DEP_SECTIONS,
        org,
        out: getArg("out", null),
        concurrency: Number(getArg("concurrency", String(CPU))),
        selfRepo: `${org}/jokul`.toLowerCase(),
        verbose: argv.includes("--verbose"),
        mixpanelEnabled: argv.includes("--mixpanel"),
        mixpanelEvent: getArg("event", "Jøkul versjon"),
        componentEvent: getArg("event", "Jøkul komponent"),
        tokenEvent: getArg("token-event", "Jøkul token"),
        tokenAdoptionEvent: getArg(
            "token-adoption-event",
            "Jøkul token-adopsjon",
        ),
        propEvent: getArg("prop-event", "Jøkul prop"),
        componentsDir: "packages/jokul/src/components",
        searchConcurrency: Number(getArg("search-concurrency", "3")),
        cloneConcurrency: Number(getArg("clone-concurrency", "8")),
        grepConcurrency: Number(getArg("grep-concurrency", String(CPU))),
        keepClones: argv.includes("--keep-clones"),
        workspaceDir,
        teamStorePath: resolve(
            process.cwd(),
            getArg("team-store", join(workspaceDir, "team-ownership.json")),
        ),
        teamStoreMaxAgeMs: Number(getArg("team-store-ttl", "30")) * 86_400_000,
        shallow: !argv.includes("--full"),
        ci: argv.includes("--ci") || argv.includes("--non-interactive"),
        help: argv.includes("--help") || argv.includes("-h"),
        dryRun: argv.includes("--dry-run"),
        refresh: argv.includes("--refresh"),
        metric: getArg("metric", null),
        cacheMaxAgeMs: Number(getArg("cache-ttl", "7")) * 86_400_000,
    };
}
