import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { chunk, sleep } from "./infra/async.mjs";
import { shortName } from "./infra/format.mjs";
import { createProgress } from "./infra/progress.mjs";
import { compareDesc, parseVersion } from "./infra/semver.mjs";
import { domainForTeam, loadTeamStore } from "./discovery/team-store.mjs";

let envLoaded = false;
/** Laster env-fila (portal/.env) én gang, uten å overstyre eksisterende env. */
function loadEnvFile() {
    if (envLoaded) return;
    envLoaded = true;
    const candidates = [process.env.MIXPANEL_ENV_FILE, "portal/.env", ".env"];
    for (const rel of candidates.filter(Boolean)) {
        const abs = resolve(process.cwd(), rel);
        if (existsSync(abs)) {
            try {
                process.loadEnvFile(abs);
            } catch {
                /* ignorer – f.eks. eldre Node */
            }
            break;
        }
    }
}

export function mixpanelConfig() {
    loadEnvFile();
    const token =
        process.env.MIXPANEL_PROJECT_TOKEN ||
        process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN;
    // Prosjektet ligger på EU (jf. portal/next.config.mjs → api-eu.mixpanel.com)
    const region = (process.env.MIXPANEL_REGION || "eu").toLowerCase();
    return { token, region };
}

export async function postTrack(url, batch) {
    for (let attempt = 0; ; attempt++) {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(batch),
        });

        if (res.status === 429 || res.status >= 500) {
            if (attempt >= 5) {
                throw new Error(
                    `Mixpanel svarte ${res.status} etter ${attempt} forsøk`,
                );
            }
            const ra =
                Number(res.headers.get("Retry-After")) ||
                Math.min(60, 2 ** attempt);
            console.warn(`⏳ Mixpanel ${res.status}. Venter ${ra}s...`);
            await sleep((ra + Math.random()) * 1000);
            continue;
        }

        // verbose=1 → { status: 1 } ved suksess, { status: 0, error } ellers.
        const body = await res.json().catch(() => null);
        if (!res.ok || !body || body.status !== 1) {
            throw new Error(
                `Mixpanel-kall feilet (${res.status}): ${body?.error ?? "ukjent feil"}`,
            );
        }
        return batch.length;
    }
}

/** Dagsstempel (idempotens per døgn) for $insert_id. */
export const mixpanelDay = (ms = Date.now()) =>
    new Date(ms).toISOString().slice(0, 10);

/** Sender ferdig-bygde events til Mixpanel /track: injiserer token, batcher og viser progresjon. */
export async function trackEvents(events, label = "   Sendt") {
    const { token, region } = mixpanelConfig();
    if (!token) {
        throw new Error(
            "Mangler Mixpanel project token — sett MIXPANEL_PROJECT_TOKEN " +
                "i portal/.env eller som miljøvariabel.",
        );
    }
    const host = region === "eu" ? "api-eu.mixpanel.com" : "api.mixpanel.com";
    const url = `https://${host}/track?verbose=1`;
    const withToken = events.map((e) => ({
        ...e,
        properties: { ...e.properties, token },
    }));
    const batches = chunk(withToken, 50);
    const progress = createProgress(withToken.length, label);
    let sent = 0;
    for (const batch of batches) {
        sent += await postTrack(url, batch);
        progress.tick(sent);
    }
    progress.done();
    console.log(`\n📈 Sendte ${sent} event(er) til Mixpanel (${host}).`);
    return sent;
}

/** Sender People-profiler til Mixpanel /engage ($set). Gjenbruker postTrack + token/region. */
export async function sendProfiles(profiles, label = "   Profiler") {
    if (!profiles.length) return 0;
    const { token, region } = mixpanelConfig();
    if (!token) {
        throw new Error(
            "Mangler Mixpanel project token — sett MIXPANEL_PROJECT_TOKEN " +
                "i portal/.env eller som miljøvariabel.",
        );
    }
    const host = region === "eu" ? "api-eu.mixpanel.com" : "api.mixpanel.com";
    const url = `https://${host}/engage?verbose=1`;
    const withToken = profiles.map((p) => ({ ...p, $token: token }));
    const batches = chunk(withToken, 50);
    const progress = createProgress(withToken.length, label);
    let sent = 0;
    for (const batch of batches) {
        sent += await postTrack(url, batch);
        progress.tick(sent);
    }
    progress.done();
    console.log(
        `\n👥 Oppdaterte ${sent} People-profil(er) i Mixpanel (${host}).`,
    );
    return sent;
}

/** Grupperer funn på en nøkkel (team eller domene) og teller opp versjons-status. */
function groupFindings(findings, keyOf, latestMajor) {
    const groups = new Map();
    for (const f of findings) {
        const key = keyOf(f);
        let g = groups.get(key);
        if (!g) {
            g = {
                repos: new Set(),
                teams: new Set(),
                manifests: 0,
                onLatest: 0,
                behindRepos: new Set(),
                majors: new Set(),
                specs: new Set(),
            };
            groups.set(key, g);
        }
        const major = parseVersion(f.spec).major;
        g.repos.add(f.repo);
        if (f.ownerTeam) g.teams.add(f.ownerTeam);
        g.manifests++;
        g.specs.add(f.spec);
        if (major > 0) g.majors.add(`v${major}`);
        if (major === latestMajor) g.onLatest++;
        else if (major < latestMajor) g.behindRepos.add(f.repo);
    }
    return groups;
}

/** Felles versjons-/repo-felter for både team- og domene-profiler. */
function profileStats(g, config) {
    const share = g.manifests
        ? Number((g.onLatest / g.manifests).toFixed(3))
        : 0;
    return {
        "Antall repoer": g.repos.size,
        Repoer: [...g.repos].map((r) => shortName(r, config.org)).sort(),
        "Antall manifester": g.manifests,
        "Jøkul-majorer": [...g.majors].sort(),
        "Jøkul-versjoner": [...g.specs].sort(compareDesc),
        "Nyeste versjon sett": [...g.specs].sort(compareDesc)[0],
        "Manifester på nyeste major": g.onLatest,
        "Andel på nyeste major": share,
        "Repoer bak siste major": g.behindRepos.size,
    };
}

export async function sendToMixpanel(findings, meta, config) {
    const nowMs = Date.now();
    const nowIso = new Date(nowMs).toISOString();
    const day = mixpanelDay(nowMs); // idempotent per døgn
    const latestMajor = parseVersion(meta.latest).major;
    const store = loadTeamStore(config);
    const domainOf = (team) => (team ? domainForTeam(store, team) : "Annet");
    const domainManifests = new Map();
    for (const f of findings) {
        const d = domainOf(f.ownerTeam);
        domainManifests.set(d, (domainManifests.get(d) ?? 0) + 1);
    }

    // Ett event per manifest — lesbare, flate property-navn.
    const events = findings.map((f) => {
        const major = parseVersion(f.spec).major;
        const repo = shortName(f.repo, config.org);
        const reactMajor = f.reactVersion
            ? `v${parseVersion(f.reactVersion).major}`
            : undefined;
        return {
            event: config.mixpanelEvent,
            properties: {
                $insert_id: `${repo}:${f.path}:${day}`,
                distinct_id: repo,
                Repo: repo,
                time: nowMs,
                Manifest: f.path,
                Avhengighetstype: f.section,
                Versjon: f.spec,
                Major: `v${major}`,
                "Nyeste versjon": meta.latest,
                "På nyeste major": major === latestMajor,
                "Via catalog": Boolean(f.viaCatalog),
                "Catalog-referanse": f.viaCatalog ? f.rawSpec : undefined,
                React: f.reactVersion || undefined,
                "React major": reactMajor,
                Tailwind: f.tailwindVersion || undefined,
                TypeScript: f.typescriptVersion || undefined,
                Next: f.nextVersion || undefined,
                Vite: f.viteVersion || undefined,
                Modultype: f.moduleType,
                "Package manager": f.packageManager || undefined,
                "Node-engine": f.nodeEngine || undefined,
                "Antall legacy-pakker": f.legacyJokulPackages?.length ?? 0,
                "Legacy-pakker": f.legacyJokulPackages?.length
                    ? f.legacyJokulPackages
                    : undefined,
                Domene: domainOf(f.ownerTeam),
                "Alle domener": f.teams?.length
                    ? [...new Set(f.teams.map(domainOf))]
                    : undefined,
                Team: shortName(f.ownerTeam, config.org) || "(ukjent)",
                "Alle team": f.teams?.length
                    ? f.teams.map((t) => shortName(t, config.org))
                    : undefined,
                "Eier-kilde": f.ownerSource || undefined,
                Pakke: config.package,
            },
        };
    });

    // Ett oppsummerings-event for enkle dashboard-tall.
    const summary = {
        event: `${config.mixpanelEvent} (oppsummering)`,
        properties: {
            time: nowMs,
            $insert_id: `summary:${config.org}:${day}`,
            distinct_id: `${config.org}/${config.package}`,
            Repoer: meta.repoCount,
            Manifester: meta.manifestCount,
            "Antall versjoner": meta.distinctSpecs,
            "Nyeste versjon": meta.latest,
            Pakke: config.package,
            "ESM-manifester": meta.moduleTypeCounts.esm,
            "CJS-manifester": meta.moduleTypeCounts.cjs,
            "Legacy-manifester": meta.legacyManifestCount,
            "Legacy-repoer": meta.legacyRepoCount,
            ...Object.fromEntries(
                [...meta.reactByMajor.entries()].map(([m, c]) => [
                    `React på v${m}`,
                    c,
                ]),
            ),
            ...Object.fromEntries(
                [...domainManifests.entries()].map(([d, c]) => [
                    `Manifester i ${d}`,
                    c,
                ]),
            ),
        },
    };

    await trackEvents([...events, summary]);

    // People-profiler: ett vedvarende sammendrag per team og per domene.
    const teamGroups = groupFindings(
        findings,
        (f) => f.ownerTeam || "(ukjent)",
        latestMajor,
    );
    const domainGroups = groupFindings(
        findings,
        (f) => domainOf(f.ownerTeam),
        latestMajor,
    );
    const teamProfiles = [...teamGroups.entries()].map(([team, g]) => ({
        $distinct_id: `team:${team}`,
        $set: {
            $name: shortName(team, config.org) || team,
            Type: "Team",
            Team: shortName(team, config.org) || team,
            Domene: domainOf(team === "(ukjent)" ? null : team),
            ...profileStats(g, config),
            "Sist oppdatert": nowIso,
            Pakke: config.package,
        },
    }));
    const domainProfiles = [...domainGroups.entries()].map(([domain, g]) => ({
        $distinct_id: `domene:${domain}`,
        $set: {
            $name: domain,
            Type: "Domene",
            Domene: domain,
            Team: [...g.teams].map((t) => shortName(t, config.org)).sort(),
            "Antall team": g.teams.size,
            ...profileStats(g, config),
            "Sist oppdatert": nowIso,
            Pakke: config.package,
        },
    }));

    await sendProfiles([...teamProfiles, ...domainProfiles]);
}
