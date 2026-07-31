import { gh } from "../infra/gh.mjs";
import { createSpinner } from "../infra/progress.mjs";

/** Metadata (aktivitet, størrelse) for alle ikke-arkiverte repoer i org-en. */
export async function getRepoMetadata(config) {
    const spinner = createSpinner(`📇 Henter repo-oversikt for @${config.org}`);
    let raw;
    try {
        raw = await gh([
            "repo",
            "list",
            config.org,
            "--no-archived",
            "--limit",
            "4000",
            "--json",
            "nameWithOwner,pushedAt,diskUsage,primaryLanguage",
        ]);
    } catch (err) {
        spinner.fail();
        throw err;
    }
    const map = new Map();
    for (const r of JSON.parse(raw)) {
        map.set(r.nameWithOwner.toLowerCase(), {
            nameWithOwner: r.nameWithOwner,
            pushedAt: r.pushedAt,
            sizeKB: r.diskUsage ?? 0,
            language: r.primaryLanguage?.name ?? null,
        });
    }
    spinner.stop(`  ${map.size} repoer`);
    return map;
}
