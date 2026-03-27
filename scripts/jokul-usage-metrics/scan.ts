import { summarizeDependencyUsage } from "./classification.ts";
import {
    buildComponentUsageEvent,
    buildDeprecatedUsageEvent,
    buildHookUsageEvent,
    buildPackageUsageEvent,
    buildPropUsageEvent,
    buildRepositoryUsageEvent,
    buildThemeUsageEvent,
    buildTokenUsageEvent,
    buildUtilityUsageEvent,
} from "./events.ts";
import {
    countWorkspaceStylesheetFiles,
    findPackageJsonEntries,
    findWorkspaceSourceEntries,
    getJokulDependencyMatches,
    getPackageJsonFromBlob,
    getRepositoryTree,
    getTextBlobFromRepositoryEntry,
    getWorkspaceRoot,
} from "./github.ts";
import {
    accumulateUsage,
    extractSignalsFromSource,
} from "./source-analysis.ts";
import { resolveTeam } from "./team-map.ts";
import { isPathInsideRoot } from "./utils.ts";

export async function scanRepository(
    repo,
    config,
    teamMap,
    catalogs,
    snapshot,
    log,
) {
    let packageJsonFilesScanned = 0;
    let sourceFilesScanned = 0;
    let sourceFilesWithJokulSignals = 0;
    let errors = 0;

    try {
        log(`Reading repository tree for ${repo.full_name}`);
        const tree = await getRepositoryTree(repo, config.githubToken);
        const packageJsonEntries = findPackageJsonEntries(tree, log);
        const packageEvents = [];
        const workspaces = [];

        for (const entry of packageJsonEntries) {
            packageJsonFilesScanned += 1;
            log(`Scanning manifest ${repo.full_name}:${entry.path}`);
            const manifest = await getPackageJsonFromBlob(
                repo,
                entry.sha,
                config.githubToken,
                log,
            );

            if (!manifest) {
                continue;
            }

            const matches = getJokulDependencyMatches(manifest);

            if (matches.length === 0) {
                continue;
            }

            const workspace = {
                rootDir: getWorkspaceRoot(entry.path),
                packageJsonPath: entry.path,
                workspacePackageName: manifest.name,
                workspacePrivate: manifest.private,
                dependencyMatches: matches,
                team: resolveTeam(teamMap, {
                    fullName: repo.full_name,
                    repoName: repo.name,
                    packagePath: entry.path,
                }),
            };

            workspaces.push(workspace);

            for (const match of matches) {
                packageEvents.push(
                    buildPackageUsageEvent({
                        repo,
                        workspace,
                        match,
                        snapshot,
                        token: config.mixpanelProjectToken,
                    }),
                );
            }
        }

        const workspaceRoots = workspaces.map((workspace) => workspace.rootDir);
        const componentEvents = [];
        const propEvents = [];
        const tokenEvents = [];
        const hookEvents = [];
        const utilityEvents = [];
        const themeEvents = [];
        const deprecatedEvents = [];
        const repositoryEvents = [];

        for (const workspace of workspaces) {
            log(
                `Scanning workspace ${repo.full_name}:${workspace.packageJsonPath}`,
            );
            const nestedWorkspaceRoots = workspaceRoots.filter(
                (rootDir) =>
                    rootDir &&
                    rootDir !== workspace.rootDir &&
                    isPathInsideRoot(rootDir, workspace.rootDir),
            );
            const stylesheetFileCount = countWorkspaceStylesheetFiles(
                tree,
                workspace.rootDir,
                nestedWorkspaceRoots,
            );
            const sourceEntries = findWorkspaceSourceEntries(
                tree,
                workspace.rootDir,
                nestedWorkspaceRoots,
                config.maxSourceFilesPerWorkspace,
                config.maxSourceFileBytes,
                log,
            );
            let workspaceSourceFilesScanned = 0;
            let workspaceSourceFilesWithJokulSignals = 0;
            const summaries = {
                components: new Map(),
                props: new Map(),
                tokens: new Map(),
                hooks: new Map(),
                utilities: new Map(),
                themes: new Map(),
                deprecated: new Map(),
            };

            for (const entry of sourceEntries) {
                sourceFilesScanned += 1;
                workspaceSourceFilesScanned += 1;
                log(`Scanning source ${repo.full_name}:${entry.path}`);
                const sourceText = await getTextBlobFromRepositoryEntry(
                    repo,
                    entry.sha,
                    config.githubToken,
                );

                if (sourceText === null) {
                    continue;
                }

                const signals = extractSignalsFromSource(sourceText, catalogs);
                const hadSignals =
                    signals.components.length > 0 ||
                    signals.props.length > 0 ||
                    signals.tokens.length > 0 ||
                    signals.hooks.length > 0 ||
                    signals.utilities.length > 0 ||
                    signals.themes.length > 0 ||
                    signals.deprecated.length > 0;

                if (hadSignals) {
                    sourceFilesWithJokulSignals += 1;
                    workspaceSourceFilesWithJokulSignals += 1;
                }

                for (const usage of signals.components) {
                    accumulateUsage(summaries.components, usage, entry.path, [
                        usage.componentKey,
                        usage.packageFamily,
                    ]);
                }

                for (const usage of signals.props) {
                    accumulateUsage(summaries.props, usage, entry.path, [
                        usage.componentKey,
                        usage.packageFamily,
                        usage.propName,
                    ]);
                }

                for (const usage of signals.tokens) {
                    accumulateUsage(summaries.tokens, usage, entry.path, [
                        usage.tokenName,
                        usage.tokenSource,
                        usage.packageFamily,
                    ]);
                }

                for (const usage of signals.hooks) {
                    accumulateUsage(summaries.hooks, usage, entry.path, [
                        usage.hookName,
                        usage.importSource,
                    ]);
                }

                for (const usage of signals.utilities) {
                    accumulateUsage(summaries.utilities, usage, entry.path, [
                        usage.utilityName,
                        usage.importSource,
                    ]);
                }

                for (const usage of signals.themes) {
                    accumulateUsage(summaries.themes, usage, entry.path, [
                        usage.signalKind,
                        usage.signalName,
                    ]);
                }

                for (const usage of signals.deprecated) {
                    accumulateUsage(summaries.deprecated, usage, entry.path, [
                        usage.apiKind,
                        usage.apiName,
                        usage.componentName || "",
                        usage.importSource || "",
                    ]);
                }
            }

            const repositorySummary = buildWorkspaceRepositorySummary({
                dependencyMatches: workspace.dependencyMatches,
                summaries,
                stylesheetFileCount,
                sourceFilesScanned: workspaceSourceFilesScanned,
                sourceFilesWithJokulSignals:
                    workspaceSourceFilesWithJokulSignals,
            });

            repositoryEvents.push(
                buildRepositoryUsageEvent({
                    repo,
                    workspace,
                    summary: repositorySummary,
                    snapshot,
                    token: config.mixpanelProjectToken,
                }),
            );

            componentEvents.push(
                ...Array.from(summaries.components.values()).map((usage) =>
                    buildComponentUsageEvent({
                        repo,
                        workspace,
                        usage,
                        snapshot,
                        token: config.mixpanelProjectToken,
                    }),
                ),
            );

            propEvents.push(
                ...Array.from(summaries.props.values()).map((usage) =>
                    buildPropUsageEvent({
                        repo,
                        workspace,
                        usage,
                        snapshot,
                        token: config.mixpanelProjectToken,
                    }),
                ),
            );

            tokenEvents.push(
                ...Array.from(summaries.tokens.values()).map((usage) =>
                    buildTokenUsageEvent({
                        repo,
                        workspace,
                        usage,
                        snapshot,
                        token: config.mixpanelProjectToken,
                    }),
                ),
            );

            hookEvents.push(
                ...Array.from(summaries.hooks.values()).map((usage) =>
                    buildHookUsageEvent({
                        repo,
                        workspace,
                        usage,
                        snapshot,
                        token: config.mixpanelProjectToken,
                    }),
                ),
            );

            utilityEvents.push(
                ...Array.from(summaries.utilities.values()).map((usage) =>
                    buildUtilityUsageEvent({
                        repo,
                        workspace,
                        usage,
                        snapshot,
                        token: config.mixpanelProjectToken,
                    }),
                ),
            );

            themeEvents.push(
                ...Array.from(summaries.themes.values()).map((usage) =>
                    buildThemeUsageEvent({
                        repo,
                        workspace,
                        usage,
                        snapshot,
                        token: config.mixpanelProjectToken,
                    }),
                ),
            );

            deprecatedEvents.push(
                ...Array.from(summaries.deprecated.values()).map((usage) =>
                    buildDeprecatedUsageEvent({
                        repo,
                        workspace,
                        usage,
                        snapshot,
                        token: config.mixpanelProjectToken,
                    }),
                ),
            );
        }

        return {
            events: [
                ...packageEvents,
                ...repositoryEvents,
                ...componentEvents,
                ...propEvents,
                ...tokenEvents,
                ...hookEvents,
                ...utilityEvents,
                ...themeEvents,
                ...deprecatedEvents,
            ],
            packageJsonFilesScanned,
            sourceFilesScanned,
            sourceFilesWithJokulSignals,
            packageEvents: packageEvents.length,
            repositoryEvents: repositoryEvents.length,
            componentEvents: componentEvents.length,
            propEvents: propEvents.length,
            tokenEvents: tokenEvents.length,
            hookEvents: hookEvents.length,
            utilityEvents: utilityEvents.length,
            themeEvents: themeEvents.length,
            deprecatedEvents: deprecatedEvents.length,
            errors,
        };
    } catch (error) {
        errors += 1;
        log(
            `Failed to scan ${repo.full_name}: ${error instanceof Error ? error.message : String(error)}`,
            true,
        );

        return {
            events: [],
            packageJsonFilesScanned,
            sourceFilesScanned,
            sourceFilesWithJokulSignals,
            packageEvents: 0,
            repositoryEvents: 0,
            componentEvents: 0,
            propEvents: 0,
            tokenEvents: 0,
            hookEvents: 0,
            utilityEvents: 0,
            themeEvents: 0,
            deprecatedEvents: 0,
            errors,
        };
    }
}

function buildWorkspaceRepositorySummary({
    dependencyMatches,
    summaries,
    stylesheetFileCount,
    sourceFilesScanned,
    sourceFilesWithJokulSignals,
}) {
    const dependencySummary = summarizeDependencyUsage(dependencyMatches);
    const themeUsages = Array.from(summaries.themes.values()) as Array<{
        signalName: string;
    }>;
    const deprecatedUsages = Array.from(
        summaries.deprecated.values(),
    ) as Array<{ apiKind: string }>;
    const deprecatedPropCount = deprecatedUsages.filter(
        (usage) => usage.apiKind === "prop",
    ).length;
    const deprecatedApiCount = deprecatedUsages.length - deprecatedPropCount;

    return {
        ...dependencySummary,
        componentCount: summaries.components.size,
        propCount: summaries.props.size,
        tokenCount: summaries.tokens.size,
        hookCount: summaries.hooks.size,
        utilityCount: summaries.utilities.size,
        themeSignalCount: summaries.themes.size,
        deprecatedApiCount,
        deprecatedPropCount,
        migrationBlockerCount: deprecatedUsages.length,
        hasThemeUsage: summaries.themes.size > 0,
        hasTokenUsage: summaries.tokens.size > 0,
        hasTailwindUsage: themeUsages.some((usage) =>
            usage.signalName.startsWith("@fremtind/jokul/tailwind"),
        ),
        stylesheetFileCount,
        sourceFilesScanned,
        sourceFilesWithJokulSignals,
    };
}
