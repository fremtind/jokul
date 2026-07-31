/** Komponent-innsamling: finner offentlige subpath-komponenter lokalt og
 *  teller import-forekomster (repo/pakke/fil) via git grep i klonene. */
import { existsSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { mapPool } from "../infra/async.mjs";
import {
    CODE_GLOBS,
    grepPathContent,
    listManifests,
    packageDirs,
    packageKey,
    specRegex,
} from "../infra/git.mjs";
import { createProgress } from "../infra/progress.mjs";
import { readLocalCodeowners } from "../discovery/codeowners.mjs";

const hasIndex = (dir) =>
    existsSync(join(dir, "index.ts")) || existsSync(join(dir, "index.tsx"));

/** Leser lokale komponenter og utleder subpath-navnet (f.eks. «button», «beta/select»). */
export function discoverComponents(config) {
    const root = resolve(process.cwd(), config.componentsDir);
    const names = [];
    for (const entry of readdirSync(root, { withFileTypes: true })) {
        if (!entry.isDirectory()) continue;
        const dir = join(root, entry.name);
        if (hasIndex(dir)) {
            names.push(entry.name);
            continue; // egen index → offentlig komponent, ikke grav dypere
        }
        for (const child of readdirSync(dir, { withFileTypes: true })) {
            if (child.isDirectory() && hasIndex(join(dir, child.name))) {
                names.push(`${entry.name}/${child.name}`);
            }
        }
    }
    return names.sort();
}

/** Søker etter komponent-importer lokalt med git grep i alle klonene. */
export async function collectComponents(
    components,
    clones,
    config,
    teamFilter,
) {
    console.log(
        `🔎 Søker etter ${components.length} komponent-importer i ${clones.length} klon(er)...`,
    );
    const usage = new Map(
        components.map((n) => [
            n,
            { repos: new Set(), packages: new Set(), files: new Set() },
        ]),
    );
    const progress = createProgress(clones.length, "   Søkt");
    await mapPool(
        clones,
        config.grepConcurrency,
        async ({ repo, dir, teams }) => {
            const lines = await grepPathContent(
                dir,
                ["-F", `${config.package}/`],
                CODE_GLOBS,
            );
            if (!lines.length) return;
            const dirs = packageDirs(await listManifests(dir));
            const rules = teamFilter ? readLocalCodeowners(dir) : null;
            const specRe = specRegex(config.package);
            for (const { path, content } of lines) {
                if (teamFilter && !teamFilter(rules, path, teams)) continue;
                specRe.lastIndex = 0;
                let m;
                while ((m = specRe.exec(content))) {
                    const u = usage.get(m[1]);
                    if (!u) continue; // ikke en komponent (f.eks. /hooks, /utilities)
                    u.repos.add(repo);
                    u.files.add(`${repo}\u0000${path}`);
                    u.packages.add(packageKey(repo, path, dirs));
                }
            }
        },
        (done) => progress.tick(done),
    );
    progress.done();
    console.log();
    return components.map((name) => {
        const u = usage.get(name);
        return {
            name,
            repos: u.repos,
            packages: u.packages,
            files: u.files.size,
            failed: false,
        };
    });
}
