/** Varig, redigerbar lokal butikk for team-eierskap per repo.
 *  - overrides: manuelle rettelser som alltid vinner (repo -> ["org/team", ...]).
 *  - rules:     deterministiske navne-regler (repo-navn -> team) – se taxonomy.mjs.
 *  - domains:   forretningsområde-gruppering – se taxonomy.mjs.
 *  - repos:     auto-oppdaget cache (repo -> {teams, source, updatedAt}) så vi
 *               slipper å spørre GitHub på nytt for kjente repo. */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { DEFAULT_DOMAINS, DEFAULT_RULES } from "../taxonomy.mjs";

const TEAM_STORE_VERSION = 1;

export function loadTeamStore(config) {
    const org = config.org.toLowerCase();
    let data = {};
    try {
        const parsed = JSON.parse(readFileSync(config.teamStorePath, "utf8"));
        if (!parsed.org || parsed.org === org) data = parsed;
    } catch {
        // ingen fil ennå
    }
    return {
        version: TEAM_STORE_VERSION,
        org,
        overrides: data.overrides ?? {},
        rules: DEFAULT_RULES, // alltid fra taxonomy.mjs (kode = kilden til sannhet)
        domains: DEFAULT_DOMAINS, // alltid fra taxonomy.mjs
        repos: data.repos ?? {},
    };
}

/** Manuell overstyring (vinner alltid). Returnerer team-liste eller null. */
export function overrideFor(store, repo) {
    const t = store.overrides?.[repo];
    return Array.isArray(t) && t.length ? t : null;
}

function nameMatchesPrefix(name, prefix) {
    if (name === prefix) return true;
    if (!name.startsWith(prefix)) return false;
    const next = name[prefix.length];
    return next === "-" || next === "_" || next === ".";
}

function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Sant hvis «word» finnes som et helt ledd i navnet (avgrenset av -, _, .). */
function nameContainsWord(name, word) {
    return new RegExp(`(^|[-_.])${escapeRegExp(word)}([-_.]|$)`).test(name);
}

function ruleMatches(rule, name) {
    if (rule.name) return name === rule.name.toLowerCase();
    if (rule.prefix) return nameMatchesPrefix(name, rule.prefix.toLowerCase());
    if (rule.word) return nameContainsWord(name, rule.word.toLowerCase());
    if (rule.regex) {
        try {
            return new RegExp(rule.regex, "i").test(name);
        } catch {
            return false;
        }
    }
    return false;
}

/** Eierskap fra navne-/prefiks-regler. Returnerer «org/team»-liste eller null. */
export function teamsFromRules(store, repo, org) {
    const name = repo.split("/")[1]?.toLowerCase() ?? "";
    for (const rule of store.rules ?? []) {
        if (!ruleMatches(rule, name)) continue;
        return (rule.teams ?? []).map((t) =>
            t.includes("/") ? t.toLowerCase() : `${org}/${t.toLowerCase()}`,
        );
    }
    return null;
}

function domainMatches(rule, slug) {
    if (rule.team) return slug === rule.team.toLowerCase();
    if (rule.teamPrefix)
        return nameMatchesPrefix(slug, rule.teamPrefix.toLowerCase());
    if (rule.teamRegex) {
        try {
            return new RegExp(rule.teamRegex, "i").test(slug);
        } catch {
            return false;
        }
    }
    return false;
}

/** Domenet (forretningsområdet) for ett team. */
export function domainForTeam(store, team) {
    const slug = (team.includes("/") ? team.split("/")[1] : team).toLowerCase();
    const cfg = store.domains ?? DEFAULT_DOMAINS;
    for (const rule of cfg.rules ?? []) {
        if (domainMatches(rule, slug)) return rule.domain;
    }
    return cfg.fallback ?? "Annet";
}

/** Unike domener for en team-liste (tom liste -> «Annet»/fallback). */
export function domainsForTeams(store, teams) {
    const cfg = store.domains ?? DEFAULT_DOMAINS;
    if (!teams?.length) return [cfg.fallback ?? "Annet"];
    return [...new Set(teams.map((t) => domainForTeam(store, t)))].sort();
}

/** Auto-cachet eierskap hvis det finnes og er ferskt nok. */
export function cachedFor(store, repo, maxAgeMs) {
    const e = store.repos?.[repo];
    if (!e || !Array.isArray(e.teams)) return null;
    if (maxAgeMs > 0) {
        const age = Date.now() - new Date(e.updatedAt).getTime();
        if (Number.isNaN(age) || age > maxAgeMs) return null;
    }
    return e;
}

/** Skriv/oppdater auto-oppdaget eierskap for et repo. */
export function recordTeams(store, repo, teams, source) {
    store.repos[repo] = { teams, source, updatedAt: new Date().toISOString() };
}

export function saveTeamStore(config, store) {
    try {
        mkdirSync(dirname(config.teamStorePath), { recursive: true });
        writeFileSync(
            config.teamStorePath,
            `${JSON.stringify(
                {
                    version: TEAM_STORE_VERSION,
                    org: config.org.toLowerCase(),
                    updatedAt: new Date().toISOString(),
                    overrides: store.overrides ?? {},
                    repos: store.repos ?? {},
                },
                null,
                2,
            )}\n`,
        );
    } catch (err) {
        console.warn(`   ⚠️  Kunne ikke lagre team-butikk: ${err.message}`);
    }
}
