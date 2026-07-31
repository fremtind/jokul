/** Lokal versjons-innsamling fra klonene + siste npm-versjon. */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { mapPool } from "../infra/async.mjs";
import { execFileAsync } from "../infra/gh.mjs";
import { listManifests } from "../infra/git.mjs";
import { createProgress } from "../infra/progress.mjs";
import { parseVersion } from "../infra/semver.mjs";
import {
    ownerTeamsForPath,
    readLocalCodeowners,
} from "../discovery/codeowners.mjs";
import { resolveLocalCatalog } from "./versions.pnpm-catalog.mjs";
import { manifestMeta } from "./versions.manifest-meta.mjs";

async function collectRepoFindings(
    { repo, dir, teams: repoTeams = [] },
    config,
) {
    const org = repo.split("/")[0].toLowerCase();
    const rules = readLocalCodeowners(dir);
    const manifests = await listManifests(dir);
    const findings = [];
    for (const path of manifests) {
        let pkg;
        try {
            pkg = JSON.parse(readFileSync(join(dir, path), "utf8"));
        } catch {
            continue;
        }
        for (const section of config.depSections) {
            const rawSpec = pkg[section]?.[config.package];
            if (!rawSpec) continue;
            let spec = rawSpec;
            let viaCatalog = false;
            if (/^catalog:/.test(rawSpec.trim())) {
                viaCatalog = true;
                spec =
                    resolveLocalCatalog(dir, rawSpec, config.package) ??
                    rawSpec;
            }
            const extra = manifestMeta(dir, pkg, config);
            const pathTeams = ownerTeamsForPath(rules, path, org);
            const teams = pathTeams.length ? pathTeams : repoTeams;
            findings.push({
                repo,
                path,
                section,
                spec,
                rawSpec,
                viaCatalog,
                ...extra,
                ownerTeam: teams[0] ?? null,
                teams,
                ownerSource: pathTeams.length
                    ? "codeowners"
                    : teams.length
                      ? "repo"
                      : null,
            });
            break;
        }
    }
    return findings;
}

export async function collectFindings(clones, config) {
    console.log(`📖 Leser manifester i ${clones.length} klon(er)...`);
    const progress = createProgress(clones.length, "   Lest");
    const per = await mapPool(
        clones,
        config.concurrency,
        (c) => collectRepoFindings(c, config),
        (done) => progress.tick(done),
    );
    progress.done();
    console.log();
    return per.flat();
}

/** Siste publiserte versjon fra npm, med fallback. */
export async function getLatestVersion(config, fallback) {
    try {
        const { stdout } = await execFileAsync(
            "npm",
            ["view", config.package, "version"],
            { encoding: "utf8" },
        );
        return stdout.trim();
    } catch {
        return fallback;
    }
}

/** Lettvekts repo -> {specs, majors} for @fremtind/jokul.
 *  Brukes til å berike de andre metrikkene med hvilken versjon repoet er på. */
export async function collectRepoVersions(clones, config) {
    const map = new Map();
    await mapPool(clones, config.concurrency, async ({ repo, dir }) => {
        const manifests = await listManifests(dir);
        const specs = new Set();
        const majors = new Set();
        for (const path of manifests) {
            let pkg;
            try {
                pkg = JSON.parse(readFileSync(join(dir, path), "utf8"));
            } catch {
                continue;
            }
            for (const section of config.depSections) {
                const raw = pkg[section]?.[config.package];
                if (!raw) continue;
                let spec = raw;
                if (/^catalog:/.test(raw.trim())) {
                    spec = resolveLocalCatalog(dir, raw, config.package) ?? raw;
                }
                specs.add(spec);
                const { major } = parseVersion(spec);
                if (major > 0) majors.add(`v${major}`);
                break;
            }
        }
        map.set(repo, { specs: [...specs].sort(), majors: [...majors].sort() });
    });
    return map;
}
