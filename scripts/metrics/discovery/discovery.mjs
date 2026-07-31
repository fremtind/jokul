/** Oppdagelse av konsument-repoer + team (via GitHub), med mellomlagring. */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { mapPool } from "../infra/async.mjs";
import { gh } from "../infra/gh.mjs";
import { createProgress, createSpinner } from "../infra/progress.mjs";
import {
    fetchRemoteCodeowners,
    fetchRepoTeams,
    ownTeams,
} from "./codeowners.mjs";
import { getRepoMetadata } from "./repo-metadata.mjs";
import {
    cachedFor,
    domainsForTeams,
    loadTeamStore,
    overrideFor,
    recordTeams,
    saveTeamStore,
    teamsFromRules,
} from "./team-store.mjs";

/** Alle package.json i org-en som nevner pakken (repo-oppdagelse). */
export async function searchManifests(config) {
    const spinner = createSpinner(
        `🔎 Søker etter «${config.package}» i package.json i @${config.org}`,
    );
    let results;
    try {
        const raw = await gh([
            "search",
            "code",
            config.package,
            "--owner",
            config.org,
            "--filename",
            "package.json",
            "--limit",
            String(config.searchLimit),
            "--json",
            "repository,path",
        ]);
        results = JSON.parse(raw);
        spinner.stop(`  ${results.length} treff`);
    } catch (err) {
        spinner.fail();
        console.error(
            "❌ Kodesøk feilet. Er du innlogget med `gh auth login`?",
        );
        console.error(String(err.stderr || err.message));
        process.exit(1);
    }
    if (results.length >= config.searchLimit) {
        console.warn(
            `⚠️  Kodesøk returnerte ${config.searchLimit} treff (API-taket). Resultatet kan være ufullstendig.`,
        );
    }
    console.log();
    return results;
}

/** Unike, ikke-arkiverte konsument-repoer (uten eget repo). */
export async function discoverConsumerRepos(config) {
    const searchResults = await searchManifests(config);
    const meta = await getRepoMetadata(config);
    const counts = new Map();
    for (const { repository } of searchResults) {
        const key = repository.nameWithOwner.toLowerCase();
        if (key === config.selfRepo || !meta.has(key)) continue;
        counts.set(key, (counts.get(key) ?? 0) + 1);
    }
    return [...counts.entries()].map(([key, manifests]) => {
        const m = meta.get(key);
        return {
            repo: m.nameWithOwner,
            manifests,
            pushedAt: m.pushedAt,
            sizeKB: m.sizeKB,
            language: m.language,
        };
    });
}

/** Team-eierskap for team-menyen – før kloning. Rekkefølge:
 *  1) manuell overstyring
 *  2) navne-/prefiks-regel
 *  3) ferskt auto-cachet eierskap
 *  4) fersk oppdagelse: CODEOWNERS, deretter repo-tilgang som fallback. */
export async function discoverTeams(records, config) {
    const org = config.org.toLowerCase();
    const store = loadTeamStore(config);
    const progress = createProgress(records.length, "   Sjekket");
    const withTeams = await mapPool(
        records,
        config.concurrency,
        async (r) => {
            const override = overrideFor(store, r.repo);
            if (override) {
                return { ...r, teams: override, teamSource: "override" };
            }
            const ruled = teamsFromRules(store, r.repo, org);
            if (ruled?.length) {
                return { ...r, teams: ruled, teamSource: "regel" };
            }
            if (!config.refresh) {
                const hit = cachedFor(store, r.repo, config.teamStoreMaxAgeMs);
                if (hit) {
                    return { ...r, teams: hit.teams, teamSource: hit.source };
                }
            }
            const rules = await fetchRemoteCodeowners(r.repo);
            const teams = new Set();
            for (const rule of rules)
                for (const t of ownTeams(rule.owners, org)) teams.add(t);
            let source = teams.size ? "codeowners" : null;
            if (!teams.size) {
                for (const t of await fetchRepoTeams(r.repo, org)) teams.add(t);
                if (teams.size) source = "repo";
            }
            const list = [...teams];
            recordTeams(store, r.repo, list, source);
            return { ...r, teams: list, teamSource: source };
        },
        (done) => progress.tick(done),
    );
    progress.done();
    console.log();
    saveTeamStore(config, store);
    const withDomains = withTeams.map((r) => ({
        ...r,
        domains: domainsForTeams(store, r.teams),
    }));
    const universe = new Set();
    const domainUniverse = new Set();
    let hasUnknown = false;
    for (const r of withDomains) {
        if (!r.teams.length) hasUnknown = true;
        for (const t of r.teams) universe.add(t);
        for (const d of r.domains) domainUniverse.add(d);
    }
    return {
        withTeams: withDomains,
        teams: [...universe].sort(),
        domains: [...domainUniverse].sort(),
        hasUnknown,
    };
}

// ---- mellomlagring -------------------------------------------------------

const DISCOVERY_CACHE_VERSION = 2;

function discoveryCachePath(config) {
    return join(config.workspaceDir, ".discovery-cache.json");
}

export function readDiscoveryCache(config) {
    try {
        const data = JSON.parse(
            readFileSync(discoveryCachePath(config), "utf8"),
        );
        if (
            data.version !== DISCOVERY_CACHE_VERSION ||
            data.org !== config.org.toLowerCase() ||
            !Array.isArray(data.withTeams) ||
            !data.savedAt
        ) {
            return null;
        }
        const ageMs = Date.now() - new Date(data.savedAt).getTime();
        const maxAge = config.cacheMaxAgeMs ?? 0;
        if (maxAge > 0 && (Number.isNaN(ageMs) || ageMs > maxAge)) {
            return null;
        }
        return data;
    } catch {
        return null;
    }
}

export function writeDiscoveryCache(
    config,
    { withTeams, teams, domains, hasUnknown },
) {
    try {
        mkdirSync(config.workspaceDir, { recursive: true });
        writeFileSync(
            discoveryCachePath(config),
            JSON.stringify(
                {
                    version: DISCOVERY_CACHE_VERSION,
                    org: config.org.toLowerCase(),
                    savedAt: new Date().toISOString(),
                    withTeams,
                    teams,
                    domains,
                    hasUnknown,
                },
                null,
                2,
            ),
        );
    } catch (err) {
        console.warn(
            `   ⚠️  Kunne ikke lagre oppdagelses-cache: ${err.message}`,
        );
    }
}

export function formatAge(iso) {
    const min = Math.max(
        0,
        Math.round((Date.now() - new Date(iso).getTime()) / 60000),
    );
    if (min < 60) return `${min} min`;
    const hrs = Math.round(min / 60);
    if (hrs < 24) return `${hrs} t`;
    return `${Math.round(hrs / 24)} d`;
}
