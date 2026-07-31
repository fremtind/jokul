/** Token-innsamling: teller --jkl-*-forekomster (var/override/bare) mot
 *  Jøkul-fasiten, og måler fargeadopsjon (token-farger vs hardkodet hex). */
import { mapPool } from "../infra/async.mjs";
import {
    STYLE_GLOBS,
    grepPathContent,
    listManifests,
    packageDirs,
    packageKey,
} from "../infra/git.mjs";
import { createProgress } from "../infra/progress.mjs";
import { readLocalCodeowners } from "../discovery/codeowners.mjs";
import { categorizeToken, classifyToken } from "../fasit/tokens.mjs";

const TOKEN_RE = /--jkl-[A-Za-z0-9-]+/g;
const HEX_GLOBS = STYLE_GLOBS.filter((g) => /(?:css|scss|sass|less)$/.test(g));
const HEX_RE = new RegExp(
    "#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}" +
        "|[0-9a-fA-F]{4}|[0-9a-fA-F]{3})(?![0-9a-fA-F])",
    "g",
);

function tokenKindAt(line, start, end) {
    if (/var\(\s*$/.test(line.slice(Math.max(0, start - 12), start)))
        return "var";
    if (/^\s*:/.test(line.slice(end))) return "override";
    return "bare";
}

export async function collectTokens(clones, config, teamFilter, catalog) {
    console.log(`🎨 Søker etter design-tokens i ${clones.length} klon(er)...`);
    const usage = new Map();
    const adoption = {
        colorTokenOcc: 0,
        hexOcc: 0,
        hexColors: new Set(),
        hexFiles: new Set(),
        hexRepos: new Set(),
        hexPackages: new Set(),
        byRepo: new Map(),
    };
    const progress = createProgress(clones.length, "   Søkt");
    await mapPool(
        clones,
        config.grepConcurrency,
        async ({ repo, dir, teams }) => {
            const [tokenLines, hexLines] = await Promise.all([
                grepPathContent(
                    dir,
                    ["-E", "-e", "--jkl-[A-Za-z0-9-]+"],
                    STYLE_GLOBS,
                ),
                grepPathContent(
                    dir,
                    ["-E", "-e", "#[0-9a-fA-F]{3,8}"],
                    HEX_GLOBS,
                ),
            ]);
            const dirs = packageDirs(await listManifests(dir));
            const rules = teamFilter ? readLocalCodeowners(dir) : null;
            const rc = adoption.byRepo.get(repo) ?? { token: 0, hex: 0 };
            for (const { path, content } of tokenLines) {
                if (teamFilter && !teamFilter(rules, path, teams)) continue;
                const pkg = packageKey(repo, path, dirs);
                TOKEN_RE.lastIndex = 0;
                let m;
                while ((m = TOKEN_RE.exec(content))) {
                    const name = m[0];
                    const kind = tokenKindAt(
                        content,
                        m.index,
                        m.index + name.length,
                    );
                    let u = usage.get(name);
                    if (!u) {
                        u = {
                            occurrences: 0,
                            usesVar: 0,
                            usesOverride: 0,
                            usesBare: 0,
                            repos: new Set(),
                            packages: new Set(),
                            files: new Set(),
                        };
                        usage.set(name, u);
                    }
                    u.occurrences++;
                    if (kind === "var") u.usesVar++;
                    else if (kind === "override") u.usesOverride++;
                    else u.usesBare++;
                    u.repos.add(repo);
                    u.packages.add(pkg);
                    u.files.add(`${repo}\u0000${path}`);
                    if (
                        categorizeToken(name) === "farge" &&
                        kind !== "override"
                    ) {
                        adoption.colorTokenOcc++;
                        rc.token++;
                    }
                }
            }
            for (const { path, content } of hexLines) {
                if (teamFilter && !teamFilter(rules, path, teams)) continue;
                const found = content.match(HEX_RE);
                if (!found) continue;
                const pkg = packageKey(repo, path, dirs);
                for (const hex of found) {
                    adoption.hexOcc++;
                    rc.hex++;
                    adoption.hexColors.add(hex.toLowerCase());
                    adoption.hexFiles.add(`${repo}\u0000${path}`);
                    adoption.hexRepos.add(repo);
                    adoption.hexPackages.add(pkg);
                }
            }
            adoption.byRepo.set(repo, rc);
        },
        (done) => progress.tick(done),
    );
    progress.done();
    console.log();
    const tokens = [...usage.entries()].map(([name, u]) => ({
        name,
        category: categorizeToken(name),
        status: classifyToken(name, catalog),
        occurrences: u.occurrences,
        usesVar: u.usesVar,
        usesOverride: u.usesOverride,
        usesBare: u.usesBare,
        repos: u.repos,
        packages: u.packages,
        files: u.files.size,
    }));
    return { tokens, adoption };
}
