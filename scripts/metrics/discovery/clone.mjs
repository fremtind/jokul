import { execFile } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { promisify } from "node:util";
import { mapPool } from "../infra/async.mjs";
import { createProgress } from "../infra/progress.mjs";

const execFileAsync = promisify(execFile);
const MAX_BUFFER = 256 * 1024 * 1024;

/** Klon repo hvis det mangler, ellers oppdater til siste commit (om update). Idempotent. */
export async function cloneOrUpdateRepo(
    repo,
    targetDir,
    { shallow = true, update = true } = {},
) {
    const name = repo.split("/")[1];
    const dir = join(targetDir, name);
    try {
        if (existsSync(join(dir, ".git"))) {
            if (!update) return { repo, dir, status: "eksisterende" };
            const depth = shallow ? ["--depth", "1"] : [];
            await execFileAsync(
                "git",
                ["-C", dir, "fetch", ...depth, "origin", "HEAD"],
                { maxBuffer: MAX_BUFFER },
            );
            await execFileAsync(
                "git",
                ["-C", dir, "reset", "--hard", "FETCH_HEAD"],
                { maxBuffer: MAX_BUFFER },
            );
            return { repo, dir, status: "oppdatert" };
        }
        mkdirSync(targetDir, { recursive: true });
        const args = ["repo", "clone", repo, dir];
        if (shallow) args.push("--", "--depth", "1", "--single-branch");
        await execFileAsync("gh", args, { maxBuffer: MAX_BUFFER });
        return { repo, dir, status: "klonet" };
    } catch (err) {
        return {
            repo,
            dir,
            status: "feilet",
            error: String(err.stderr || err.message),
        };
    }
}

export async function cloneRepos(
    repos,
    targetDir,
    config,
    { shallow = true, update = true } = {},
) {
    const verb = update
        ? "Henter/oppdaterer"
        : "Henter (uten å oppdatere eksisterende)";
    console.log(
        `\n📦 ${verb} ${repos.length} repo(er) til ${targetDir} ` +
            `(${config.cloneConcurrency} parallelt)...`,
    );
    const progress = createProgress(repos.length, "   Ferdig");
    const results = await mapPool(
        repos,
        config.cloneConcurrency,
        (repo) => cloneOrUpdateRepo(repo, targetDir, { shallow, update }),
        (done) => progress.tick(done),
    );
    progress.done();
    console.log();
    return results;
}

/** Klon/oppdater valgte repoer og returner {repo, dir, teams} for de vellykkede. */
export async function ensureClones(records, config, { update = true } = {}) {
    const results = await cloneRepos(
        records.map((r) => r.repo),
        config.workspaceDir,
        config,
        { shallow: config.shallow, update },
    );
    const grouped = results.reduce((acc, r) => {
        (acc[r.status] ??= []).push(r);
        return acc;
    }, {});
    console.log("Klonstatus:");
    for (const [status, list] of Object.entries(grouped)) {
        console.log(`  • ${status}: ${list.length}`);
    }
    const failed = grouped.feilet ?? [];
    if (failed.length) {
        console.warn("⚠️  Kunne ikke hente:");
        for (const f of failed) console.warn(`   ${f.repo}: ${f.error}`);
    }
    console.log();
    const teamsByRepo = new Map(records.map((r) => [r.repo, r.teams ?? []]));
    return results
        .filter((r) => r.status !== "feilet")
        .map((r) => ({
            repo: r.repo,
            dir: r.dir,
            teams: teamsByRepo.get(r.repo) ?? [],
        }));
}
