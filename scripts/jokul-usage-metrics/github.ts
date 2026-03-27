import { extname } from "node:path";
import {
    DEPENDENCY_FIELDS,
    JOKUL_PACKAGE_PATTERN,
    SOURCE_FILE_EXTENSIONS,
    STYLESHEET_FILE_EXTENSIONS,
} from "./constants.ts";
import {
    getWorkspaceRoot,
    isIgnoredSourcePath,
    isPathInsideRoot,
} from "./utils.ts";

export async function listRepositories(config) {
    const repoEndpoint =
        config.githubOwnerType === "user"
            ? `/users/${config.githubOwner}/repos`
            : `/orgs/${config.githubOwner}/repos`;

    const repositories = await paginateGithub(
        `${repoEndpoint}?per_page=100&type=all&sort=full_name`,
        config.githubToken,
    );

    return repositories.filter((repo) => {
        if (!config.includeArchived && repo.archived) {
            return false;
        }

        if (!config.includeForks && repo.fork) {
            return false;
        }

        if (
            config.includeRepositories &&
            !config.includeRepositories.has(repo.name)
        ) {
            return false;
        }

        if (
            config.excludeRepositories &&
            config.excludeRepositories.has(repo.name)
        ) {
            return false;
        }

        return true;
    });
}

export async function getRepositoryTree(repo, githubToken) {
    return githubRequestJson(
        `/repos/${repo.owner.login}/${repo.name}/git/trees/${encodeURIComponent(repo.default_branch)}?recursive=1`,
        githubToken,
    );
}

export function findPackageJsonEntries(treeResponse, log) {
    const entries = Array.isArray(treeResponse.tree) ? treeResponse.tree : [];

    if (treeResponse.truncated) {
        log(
            "Git tree response was truncated for a repository; some files may be missing",
            true,
        );
    }

    return entries.filter(
        (entry) =>
            entry.type === "blob" &&
            entry.path.endsWith("package.json") &&
            !entry.path.includes("node_modules/"),
    );
}

export function findWorkspaceSourceEntries(
    treeResponse,
    workspaceRoot,
    nestedWorkspaceRoots,
    maxFiles,
    maxBytes,
    log,
) {
    const filtered = filterWorkspaceEntries(
        treeResponse,
        workspaceRoot,
        nestedWorkspaceRoots,
        (entryExtension, entrySize) =>
            SOURCE_FILE_EXTENSIONS.has(entryExtension) &&
            (typeof entrySize !== "number" || entrySize <= maxBytes),
    );

    filtered.sort((a, b) => a.path.localeCompare(b.path));

    if (filtered.length > maxFiles) {
        log(
            `Limiting source scan for ${workspaceRoot || "."} to ${maxFiles} file(s)`,
            true,
        );
    }

    return filtered.slice(0, maxFiles);
}

export function countWorkspaceStylesheetFiles(
    treeResponse,
    workspaceRoot,
    nestedWorkspaceRoots,
) {
    return filterWorkspaceEntries(
        treeResponse,
        workspaceRoot,
        nestedWorkspaceRoots,
        (entryExtension) => STYLESHEET_FILE_EXTENSIONS.has(entryExtension),
    ).length;
}

export async function getPackageJsonFromBlob(repo, sha, githubToken, log) {
    const text = await getTextBlobFromRepositoryEntry(repo, sha, githubToken);

    if (text === null) {
        return null;
    }

    try {
        return JSON.parse(text);
    } catch (error) {
        log(
            `Skipping invalid package.json in ${repo.full_name}: ${error instanceof Error ? error.message : String(error)}`,
            true,
        );
        return null;
    }
}

export async function getTextBlobFromRepositoryEntry(repo, sha, githubToken) {
    const blob = await githubRequestJson(
        `/repos/${repo.owner.login}/${repo.name}/git/blobs/${sha}`,
        githubToken,
    );

    if (blob.encoding !== "base64") {
        throw new Error(
            `Unsupported blob encoding "${blob.encoding}" for ${repo.full_name}`,
        );
    }

    return Buffer.from(blob.content, "base64").toString("utf8");
}

export function getJokulDependencyMatches(manifest) {
    const matches = [];

    for (const field of DEPENDENCY_FIELDS) {
        const dependencies = manifest[field];

        if (!dependencies || typeof dependencies !== "object") {
            continue;
        }

        for (const [dependencyName, dependencyRange] of Object.entries(
            dependencies,
        )) {
            if (!JOKUL_PACKAGE_PATTERN.test(dependencyName)) {
                continue;
            }

            matches.push({
                dependencyField: field,
                dependencyName,
                dependencyRange,
                packageFamily:
                    dependencyName === "@fremtind/jokul"
                        ? "consolidated"
                        : "legacy",
            });
        }
    }

    return matches;
}

export { getWorkspaceRoot };

function filterWorkspaceEntries(
    treeResponse,
    workspaceRoot,
    nestedWorkspaceRoots,
    includeEntry,
) {
    const entries = Array.isArray(treeResponse.tree) ? treeResponse.tree : [];

    return entries.filter((entry) => {
        if (entry.type !== "blob" || typeof entry.path !== "string") {
            return false;
        }

        if (!isPathInsideRoot(entry.path, workspaceRoot)) {
            return false;
        }

        if (
            nestedWorkspaceRoots.some((nestedRoot) =>
                isPathInsideRoot(entry.path, nestedRoot),
            )
        ) {
            return false;
        }

        if (isIgnoredSourcePath(entry.path)) {
            return false;
        }

        return includeEntry(extname(entry.path), entry.size);
    });
}

async function paginateGithub(initialPath, githubToken) {
    const results = [];
    let page = 1;

    while (true) {
        const separator = initialPath.includes("?") ? "&" : "?";
        const response = await githubRequestJson(
            `${initialPath}${separator}page=${page}`,
            githubToken,
        );

        if (!Array.isArray(response) || response.length === 0) {
            return results;
        }

        results.push(...response);
        page += 1;
    }
}

async function githubRequestJson(pathname, githubToken) {
    const response = await fetch(`https://api.github.com${pathname}`, {
        headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${githubToken}`,
            "User-Agent": "jokul-usage-metrics",
        },
    });

    if (!response.ok) {
        const body = await response.text();
        throw new Error(
            `GitHub API request failed for ${pathname} with ${response.status}: ${body}`,
        );
    }

    return response.json();
}
