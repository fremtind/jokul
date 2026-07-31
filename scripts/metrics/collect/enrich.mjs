/**
 * Berikelse: kobler bruks-metrikkenes rader til team, domener og Jøkul-
 * versjoner per repo. Delt byggekloss for alle bruks-metrikker (ikke
 * orkestrering) – derfor eget lag mellom «collect» og «send».
 */
import { domainsForTeams, loadTeamStore } from "../discovery/team-store.mjs";
import { collectRepoVersions } from "./versions.collect.mjs";

/** repo -> { teams, domains, majors, versions } for de klonede repoene. */
export async function buildRepoContext(clones, config) {
    const store = loadTeamStore(config);
    const repoVersions = await collectRepoVersions(clones, config);
    const ctx = new Map();
    for (const c of clones) {
        const v = repoVersions.get(c.repo) ?? { specs: [], majors: [] };
        ctx.set(c.repo, {
            teams: c.teams ?? [],
            domains: domainsForTeams(store, c.teams ?? []),
            majors: v.majors,
            versions: v.specs,
        });
    }
    return ctx;
}

/** Beriker aggregerte bruks-rader (med .repos) med team/domener/versjoner. */
export function enrichRows(usage, ctx) {
    for (const item of usage) {
        const teams = new Set();
        const domains = new Set();
        const majors = new Set();
        const versions = new Set();
        for (const repo of item.repos) {
            const c = ctx.get(repo);
            if (!c) continue;
            for (const t of c.teams) teams.add(t);
            for (const d of c.domains) domains.add(d);
            for (const m of c.majors) majors.add(m);
            for (const s of c.versions) versions.add(s);
        }
        item.teams = [...teams].sort();
        item.domains = [...domains].sort();
        item.majors = [...majors].sort();
        item.versions = [...versions].sort();
    }
}

/** Beriker prop-oppføringer (med .files) med team/domener/versjoner. */
export function enrichPropEntries(props, ctx) {
    for (const e of props) {
        const teams = new Set();
        const domains = new Set();
        const majors = new Set();
        const versions = new Set();
        for (const f of e.files) {
            const c = ctx.get(f.repo);
            if (!c) continue;
            for (const t of c.teams) teams.add(t);
            for (const d of c.domains) domains.add(d);
            for (const m of c.majors) majors.add(m);
            for (const s of c.versions) versions.add(s);
        }
        e.teams = [...teams].sort();
        e.domains = [...domains].sort();
        e.majors = [...majors].sort();
        e.versions = [...versions].sort();
    }
}
