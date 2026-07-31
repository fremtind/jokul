/** CODEOWNERS-parsing (lokalt + fjern) for team-eierskap. Team uten «@». */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { gh } from "../infra/gh.mjs";

const CODEOWNERS_PATHS = [
    ".github/CODEOWNERS",
    "CODEOWNERS",
    "docs/CODEOWNERS",
];

function patternToRegex(pattern) {
    let p = pattern;
    const anchored = p.startsWith("/");
    if (anchored) p = p.slice(1);
    if (p.endsWith("/")) p = p.slice(0, -1);
    let re = "";
    for (let i = 0; i < p.length; i++) {
        const c = p[i];
        if (c === "*") {
            if (p[i + 1] === "*") {
                re += ".*";
                i++;
                if (p[i + 1] === "/") i++;
            } else {
                re += "[^/]*";
            }
        } else if (c === "?") {
            re += "[^/]";
        } else if (".+^${}()|[]\\".includes(c)) {
            re += `\\${c}`;
        } else {
            re += c;
        }
    }
    return new RegExp(`${anchored ? "^" : "(^|/)"}${re}(/.*)?$`);
}

function parseCodeowners(text) {
    const rules = [];
    for (const line of text.split(/\r?\n/)) {
        const noComment = line.replace(/\s+#.*$/, "").trim();
        if (!noComment || noComment.startsWith("#")) continue;
        const [pattern, ...owners] = noComment.split(/\s+/);
        if (!pattern || owners.length === 0) continue;
        rules.push({ regex: patternToRegex(pattern), owners });
    }
    return rules;
}

/** Team-eiere i vår egen org (@org/team) — dropper enkeltpersoner/andre orgs. */
export function ownTeams(owners, org) {
    return owners
        .filter(
            (o) =>
                o.startsWith("@") &&
                o.slice(1).toLowerCase().startsWith(`${org}/`),
        )
        .map((o) => o.slice(1));
}

/** Team-eier(e) for en sti. Siste matchende regel med et org-team vinner. */
export function ownerTeamsForPath(rules, path, org) {
    let teams = [];
    for (const rule of rules) {
        if (!rule.regex.test(path)) continue;
        const owned = ownTeams(rule.owners, org);
        if (owned.length) teams = owned;
    }
    return teams;
}

/** CODEOWNERS fra en klon på disk. */
export function readLocalCodeowners(dir) {
    for (const rel of CODEOWNERS_PATHS) {
        try {
            return parseCodeowners(readFileSync(join(dir, rel), "utf8"));
        } catch {
            // prøv neste plassering
        }
    }
    return [];
}

/** CODEOWNERS via GitHub API (team-menyen før kloning). */
export async function fetchRemoteCodeowners(repo) {
    for (const rel of CODEOWNERS_PATHS) {
        try {
            const text = await gh([
                "api",
                `repos/${repo}/contents/${rel}`,
                "-H",
                "Accept: application/vnd.github.raw",
            ]);
            return parseCodeowners(text);
        } catch {
            // prøv neste plassering
        }
    }
    return [];
}

/** Team med tilgang til repoet (GitHub-API) – fallback når CODEOWNERS mangler
 *  org-team. Velger sterkeste tilgangsnivå (admin/maintain → push → resten).
 *  Returnerer «org/team-slug», samme format som CODEOWNERS-team. */
export async function fetchRepoTeams(repo, org) {
    let teams;
    try {
        teams = JSON.parse(
            await gh(["api", `repos/${repo}/teams`, "--paginate"]),
        );
    } catch {
        return [];
    }
    if (!Array.isArray(teams) || !teams.length) return [];
    const uniq = (list) => [...new Set(list.map((t) => `${org}/${t.slug}`))];
    const tiers = [["admin", "maintain"], ["push"], ["triage", "pull"]];
    for (const tier of tiers) {
        const picked = teams.filter((t) => tier.includes(t.permission));
        if (picked.length) return uniq(picked);
    }
    return uniq(teams); // ukjente/egendefinerte roller
}

export function teamsMatch(teams, selectedSet) {
    if (!selectedSet) return true;
    if (!teams || teams.length === 0) return selectedSet.has("(ukjent)");
    return teams.some((t) => selectedSet.has(t));
}

export function makeFileTeamFilter(selectedSet, org) {
    if (!selectedSet) return null;
    return (rules, path, fallbackTeams = []) => {
        const teams = ownerTeamsForPath(rules, path, org);
        return teamsMatch(teams.length ? teams : fallbackTeams, selectedSet);
    };
}
