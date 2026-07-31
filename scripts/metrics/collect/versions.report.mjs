import { writeFileSync } from "node:fs";
import { shortName } from "../infra/format.mjs";
import { compareDesc, parseVersion } from "../infra/semver.mjs";

/** Grupper funn per spec og major, og finn unike repoer. */
export function aggregate(findings) {
    const bySpec = new Map();
    for (const f of findings) {
        if (!bySpec.has(f.spec)) bySpec.set(f.spec, []);
        bySpec.get(f.spec).push(f);
    }
    const sortedSpecs = [...bySpec.keys()].sort(compareDesc);

    const byMajor = new Map();
    for (const f of findings) {
        const major = parseVersion(f.spec).major;
        byMajor.set(major, (byMajor.get(major) ?? 0) + 1);
    }

    const uniqueRepos = new Set(findings.map((f) => f.repo));

    const reactByMajor = new Map();
    let esm = 0;
    let cjs = 0;
    let legacyManifestCount = 0;
    const legacyRepos = new Set();

    for (const f of findings) {
        if (f.reactVersion) {
            const m = parseVersion(f.reactVersion).major;
            reactByMajor.set(m, (reactByMajor.get(m) ?? 0) + 1);
        }
        if (f.moduleType === "esm") esm++;
        else cjs++;
        if (f.legacyJokulPackages?.length) {
            legacyManifestCount++;
            legacyRepos.add(f.repo);
        }
    }

    return {
        bySpec,
        sortedSpecs,
        byMajor,
        uniqueRepos,
        reactByMajor,
        moduleTypeCounts: { esm, cjs },
        legacyManifestCount,
        legacyRepoCount: legacyRepos.size,
    };
}

export function printReport(findings, agg, latest, config) {
    const { bySpec, sortedSpecs, byMajor, uniqueRepos } = agg;
    const latestMajor = parseVersion(latest).major;

    console.log(`📦 Siste publiserte versjon: ${latest}`);
    console.log(
        `👥 ${uniqueRepos.size} repo(er) / ${findings.length} manifest(er)\n`,
    );

    console.log("📦 Versjoner i bruk:");
    console.table(
        sortedSpecs.map((spec) => {
            const rows = bySpec.get(spec);
            return {
                Versjon: spec,
                Repoer: new Set(rows.map((r) => r.repo)).size,
                Manifester: rows.length,
                "Siste major":
                    parseVersion(spec).major === latestMajor ? "✓" : "·",
            };
        }),
    );

    // Detaljer per versjon. Grupperer per repo; monorepo-er kollapses til én
    // linje. Bruk --verbose for å liste hver enkelt manifest-sti.
    for (const spec of sortedSpecs) {
        const rows = bySpec.get(spec);
        const byRepo = new Map();
        for (const row of rows) {
            if (!byRepo.has(row.repo)) byRepo.set(row.repo, []);
            byRepo.get(row.repo).push(row);
        }
        console.log(
            `  ${spec}  —  ${byRepo.size} repo(er), ${rows.length} manifest(er)`,
        );
        for (const [repoFull, repoRows] of byRepo) {
            const repo = shortName(repoFull, config.org);
            const catalogs = [
                ...new Set(
                    repoRows.filter((r) => r.viaCatalog).map((r) => r.rawSpec),
                ),
            ];
            const catalogSuffix =
                catalogs.length === 1 ? `  (${catalogs[0]})` : "";

            if (repoRows.length === 1) {
                const row = repoRows[0];
                const loc =
                    row.path === "package.json" ? repo : `${repo}/${row.path}`;
                const suffix = row.viaCatalog ? `  (${row.rawSpec})` : "";
                console.log(`     • ${loc}${suffix}`);
                continue;
            }

            console.log(
                `     • ${repo} — ${repoRows.length} manifest(er)${catalogSuffix}`,
            );
            if (config.verbose) {
                for (const row of repoRows) {
                    const suffix =
                        row.viaCatalog && !catalogSuffix
                            ? `  (${row.rawSpec})`
                            : "";
                    console.log(`         - ${row.path}${suffix}`);
                }
            }
        }
        console.log();
    }

    console.log("─".repeat(50));
    console.log("📊 Fordeling per major-versjon:");
    console.table(
        [...byMajor.keys()]
            .sort((a, b) => b - a)
            .map((major) => ({
                Major: `v${major}.x`,
                Manifester: byMajor.get(major),
            })),
    );
    console.log("─".repeat(50));
    console.log("🧩 Tilleggsmetrikker:");
    if (agg.reactByMajor.size > 0) {
        console.log("   React (major):");
        for (const m of [...agg.reactByMajor.keys()].sort((a, b) => b - a)) {
            console.log(`     v${m}.x: ${agg.reactByMajor.get(m)}`);
        }
    }
    console.log(
        `   Modultype: ESM ${agg.moduleTypeCounts.esm} / CJS ${agg.moduleTypeCounts.cjs}`,
    );
    console.log(
        `   Legacy @fremtind/jkl-*: ${agg.legacyManifestCount} manifest(er) i ${agg.legacyRepoCount} repo(er)`,
    );
    console.log();
    console.log();
    console.log("─".repeat(50));
    console.log("👥 Per team (flest repoer bak siste major øverst):");
    const teams = [...teamBreakdown(findings, latest).entries()].sort(
        (a, b) => {
            // (ukjent) er ikke et team å følge opp – sorter det nederst.
            const aUnknown = a[0] === "(ukjent)";
            const bUnknown = b[0] === "(ukjent)";
            if (aUnknown !== bUnknown) return aUnknown ? 1 : -1;
            return (
                b[1].behindRepos.size - a[1].behindRepos.size ||
                b[1].repos.size - a[1].repos.size
            );
        },
    );
    console.table(
        teams.map(([team, t]) => ({
            Team: shortName(team, config.org),
            Repoer: t.repos.size,
            Manifester: t.manifests,
            "Bak siste major": t.behindRepos.size,
            Status: t.behindRepos.size > 0 ? "⚠️" : "✓",
        })),
    );
    console.log();

    // Løft frem repoer uten team-eier – de mest handlingsbare å følge opp.
    const unknownRepos = [
        ...new Set(
            findings
                .filter((f) => !f.ownerTeam)
                .map((f) => shortName(f.repo, config.org)),
        ),
    ].sort();
    if (unknownRepos.length > 0) {
        console.log(
            `ℹ️  ${unknownRepos.length} repo(er) uten team-eier (mangler CODEOWNERS-team):`,
        );
        for (const repo of unknownRepos) console.log(`     • ${repo}`);
        console.log();
    }
}

export function writeReport(path, findings, agg, latest, config) {
    const { bySpec, sortedSpecs, uniqueRepos } = agg;
    const report = {
        generatedAt: new Date().toISOString(),
        package: config.package,
        latest,
        repoCount: uniqueRepos.size,
        manifestCount: findings.length,
        bySpec: Object.fromEntries(
            sortedSpecs.map((s) => [s, bySpec.get(s).map((f) => f.repo)]),
        ),
        findings,
    };
    writeFileSync(path, JSON.stringify(report, null, 2));
    console.log(`💾 Skrev rapport til ${path}`);
}

export function teamBreakdown(findings, latest) {
    const latestMajor = parseVersion(latest).major;
    const byTeam = new Map();
    for (const f of findings) {
        const team = f.ownerTeam || "(ukjent)";
        if (!byTeam.has(team)) {
            byTeam.set(team, {
                repos: new Set(),
                manifests: 0,
                behindRepos: new Set(),
            });
        }
        const t = byTeam.get(team);
        t.repos.add(f.repo);
        t.manifests++;
        if (parseVersion(f.spec).major < latestMajor) t.behindRepos.add(f.repo);
    }
    return byTeam;
}
