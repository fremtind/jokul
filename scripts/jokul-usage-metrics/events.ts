import { EVENT_NAMES } from "./constants.ts";

export function summarizeScanResults(scanResults) {
    return scanResults.reduce(
        (acc, result) => {
            acc.reposScanned += 1;
            acc.packageJsonFilesScanned += result.packageJsonFilesScanned;
            acc.sourceFilesScanned += result.sourceFilesScanned;
            acc.sourceFilesWithJokulSignals +=
                result.sourceFilesWithJokulSignals;
            acc.repositoriesWithUsage += result.events.length > 0 ? 1 : 0;
            acc.events += result.events.length;
            acc.packageEvents += result.packageEvents;
            acc.repositoryEvents += result.repositoryEvents;
            acc.componentEvents += result.componentEvents;
            acc.propEvents += result.propEvents;
            acc.tokenEvents += result.tokenEvents;
            acc.hookEvents += result.hookEvents;
            acc.utilityEvents += result.utilityEvents;
            acc.themeEvents += result.themeEvents;
            acc.deprecatedEvents += result.deprecatedEvents;
            acc.errors += result.errors;
            return acc;
        },
        {
            reposScanned: 0,
            packageJsonFilesScanned: 0,
            sourceFilesScanned: 0,
            sourceFilesWithJokulSignals: 0,
            repositoriesWithUsage: 0,
            events: 0,
            packageEvents: 0,
            repositoryEvents: 0,
            componentEvents: 0,
            propEvents: 0,
            tokenEvents: 0,
            hookEvents: 0,
            utilityEvents: 0,
            themeEvents: 0,
            deprecatedEvents: 0,
            errors: 0,
        },
    );
}

export function buildRepositoryUsageEvent({
    repo,
    workspace,
    summary,
    snapshot,
    token,
}) {
    return {
        event: EVENT_NAMES.repositoryUsage,
        properties: {
            ...buildCommonProperties({ repo, workspace, snapshot, token }),
            distinct_id: `${repo.full_name}:${workspace.packageJsonPath}:repository`,
            $insert_id: `${snapshot.snapshotDate}:${repo.full_name}:${workspace.packageJsonPath}:repository`,
            antall_avhengigheter: summary.dependencyCount,
            antall_samlede_avhengigheter: summary.consolidatedDependencyCount,
            antall_eldre_avhengigheter: summary.legacyDependencyCount,
            blander_samlet_og_eldre: summary.mixedLegacyAndConsolidated,
            migreringsstatus: translateMigrationState(summary.migrationState),
            versjonsstatus: translateVersionFreshness(summary.versionFreshness),
            gjeldende_jokul_versjon: summary.currentJokulVersion,
            bruker_forhaandsversjon: summary.usesPrereleaseRange,
            matcher_gjeldende_versjon: summary.currentVersionSatisfied,
            antall_ukjente_versjonskrav: summary.unknownConsolidatedRanges,
            antall_komponenter: summary.componentCount,
            antall_props: summary.propCount,
            antall_tokensignaler: summary.tokenCount,
            antall_hooks: summary.hookCount,
            antall_hjelpefunksjoner: summary.utilityCount,
            antall_temasignaler: summary.themeSignalCount,
            antall_foreldede_apier: summary.deprecatedApiCount,
            antall_foreldede_props: summary.deprecatedPropCount,
            antall_migreringsblokkere: summary.migrationBlockerCount,
            bruker_tema: summary.hasThemeUsage,
            bruker_tokens: summary.hasTokenUsage,
            bruker_tailwind: summary.hasTailwindUsage,
            antall_stilfiler: summary.stylesheetFileCount,
            antall_skannede_kildefiler: summary.sourceFilesScanned,
            antall_kildefiler_med_jokul_signaler:
                summary.sourceFilesWithJokulSignals,
        },
    };
}

export function buildPackageUsageEvent({
    repo,
    workspace,
    match,
    snapshot,
    token,
}) {
    return {
        event: EVENT_NAMES.packageUsage,
        properties: {
            ...buildCommonProperties({ repo, workspace, snapshot, token }),
            distinct_id: `${repo.full_name}:${workspace.packageJsonPath}`,
            $insert_id: `${snapshot.snapshotDate}:${repo.full_name}:${workspace.packageJsonPath}:${match.dependencyField}:${match.dependencyName}`,
            avhengighetsfelt: translateDependencyField(match.dependencyField),
            avhengighetsnavn: match.dependencyName,
            versjonskrav: match.dependencyRange,
            pakkefamilie: translatePackageFamily(match.packageFamily),
        },
    };
}

export function buildComponentUsageEvent({
    repo,
    workspace,
    usage,
    snapshot,
    token,
}) {
    return {
        event: EVENT_NAMES.componentUsage,
        properties: {
            ...buildCommonProperties({ repo, workspace, snapshot, token }),
            distinct_id: `${repo.full_name}:${workspace.packageJsonPath}:${usage.packageFamily}:${usage.componentKey}`,
            $insert_id: `${snapshot.snapshotDate}:${repo.full_name}:${workspace.packageJsonPath}:${usage.packageFamily}:${usage.componentKey}`,
            komponent_id: usage.componentKey,
            komponentnavn: usage.componentName,
            pakkefamilie: translatePackageFamily(usage.packageFamily),
            antall_filer: usage.files.size,
            antall_treff: usage.importOccurrences,
        },
    };
}

export function buildPropUsageEvent({
    repo,
    workspace,
    usage,
    snapshot,
    token,
}) {
    return {
        event: EVENT_NAMES.propUsage,
        properties: {
            ...buildCommonProperties({ repo, workspace, snapshot, token }),
            distinct_id: `${repo.full_name}:${workspace.packageJsonPath}:${usage.packageFamily}:${usage.componentKey}:${usage.propName}`,
            $insert_id: `${snapshot.snapshotDate}:${repo.full_name}:${workspace.packageJsonPath}:${usage.packageFamily}:${usage.componentKey}:${usage.propName}`,
            komponent_id: usage.componentKey,
            komponentnavn: usage.componentName,
            prop_navn: usage.propName,
            pakkefamilie: translatePackageFamily(usage.packageFamily),
            antall_filer: usage.files.size,
            antall_treff: usage.importOccurrences,
        },
    };
}

export function buildTokenUsageEvent({
    repo,
    workspace,
    usage,
    snapshot,
    token,
}) {
    return {
        event: EVENT_NAMES.tokenUsage,
        properties: {
            ...buildCommonProperties({ repo, workspace, snapshot, token }),
            distinct_id: `${repo.full_name}:${workspace.packageJsonPath}:${usage.packageFamily}:${usage.tokenSource}:${usage.tokenName}`,
            $insert_id: `${snapshot.snapshotDate}:${repo.full_name}:${workspace.packageJsonPath}:${usage.packageFamily}:${usage.tokenSource}:${usage.tokenName}`,
            tokennavn: usage.tokenName,
            tokenkategori: usage.tokenCategory,
            tokenkilde: translateTokenSource(usage.tokenSource),
            pakkefamilie: translatePackageFamily(usage.packageFamily),
            antall_filer: usage.files.size,
            antall_treff: usage.importOccurrences,
        },
    };
}

export function buildHookUsageEvent({
    repo,
    workspace,
    usage,
    snapshot,
    token,
}) {
    return {
        event: EVENT_NAMES.hookUsage,
        properties: {
            ...buildCommonProperties({ repo, workspace, snapshot, token }),
            distinct_id: `${repo.full_name}:${workspace.packageJsonPath}:${usage.hookKey}`,
            $insert_id: `${snapshot.snapshotDate}:${repo.full_name}:${workspace.packageJsonPath}:${usage.hookKey}:${usage.importSource}`,
            hook_id: usage.hookKey,
            hooknavn: usage.hookName,
            importkilde: usage.importSource,
            pakkefamilie: translatePackageFamily(usage.packageFamily),
            antall_filer: usage.files.size,
            antall_treff: usage.importOccurrences,
        },
    };
}

export function buildUtilityUsageEvent({
    repo,
    workspace,
    usage,
    snapshot,
    token,
}) {
    return {
        event: EVENT_NAMES.utilityUsage,
        properties: {
            ...buildCommonProperties({ repo, workspace, snapshot, token }),
            distinct_id: `${repo.full_name}:${workspace.packageJsonPath}:${usage.utilityKey}`,
            $insert_id: `${snapshot.snapshotDate}:${repo.full_name}:${workspace.packageJsonPath}:${usage.utilityKey}:${usage.importSource}`,
            hjelpefunksjon_id: usage.utilityKey,
            hjelpefunksjon_navn: usage.utilityName,
            importkilde: usage.importSource,
            pakkefamilie: translatePackageFamily(usage.packageFamily),
            antall_filer: usage.files.size,
            antall_treff: usage.importOccurrences,
        },
    };
}

export function buildThemeUsageEvent({
    repo,
    workspace,
    usage,
    snapshot,
    token,
}) {
    return {
        event: EVENT_NAMES.themeUsage,
        properties: {
            ...buildCommonProperties({ repo, workspace, snapshot, token }),
            distinct_id: `${repo.full_name}:${workspace.packageJsonPath}:theme:${usage.signalKind}:${usage.signalName}`,
            $insert_id: `${snapshot.snapshotDate}:${repo.full_name}:${workspace.packageJsonPath}:theme:${usage.signalKind}:${usage.signalName}`,
            temasignal_type: translateThemeSignalKind(usage.signalKind),
            temasignal_navn: usage.signalName,
            importkilde: usage.importSource,
            pakkefamilie: translatePackageFamily(usage.packageFamily),
            antall_filer: usage.files.size,
            antall_treff: usage.importOccurrences,
        },
    };
}

export function buildDeprecatedUsageEvent({
    repo,
    workspace,
    usage,
    snapshot,
    token,
}) {
    return {
        event: EVENT_NAMES.deprecatedApiUsage,
        properties: {
            ...buildCommonProperties({ repo, workspace, snapshot, token }),
            distinct_id: buildDeprecatedDistinctId(repo, workspace, usage),
            $insert_id: buildDeprecatedInsertId(
                repo,
                workspace,
                usage,
                snapshot,
            ),
            api_type: translateApiKind(usage.apiKind),
            api_navn: usage.apiName,
            importkilde: usage.importSource,
            pakkefamilie: translatePackageFamily(usage.packageFamily),
            foreldet_melding: usage.deprecationMessage,
            antall_filer: usage.files.size,
            antall_treff: usage.importOccurrences,
            ...(usage.componentName
                ? {
                      komponentnavn: usage.componentName,
                      komponent_id: usage.componentKey,
                  }
                : {}),
            ...(usage.propName ? { prop_navn: usage.propName } : {}),
        },
    };
}

export function buildSummaryEvent({ owner, snapshot, stats, token }) {
    return {
        event: EVENT_NAMES.scanCompleted,
        properties: {
            token,
            distinct_id: `scan:${owner}`,
            $insert_id: `scan:${owner}:${snapshot.snapshotDate}`,
            time: snapshot.snapshotTime,
            maaledato: snapshot.snapshotDate,
            github_eier: owner,
            antall_repoer_skannet: stats.reposScanned,
            antall_package_json_skannet: stats.packageJsonFilesScanned,
            antall_kildefiler_skannet: stats.sourceFilesScanned,
            antall_kildefiler_med_jokul_signaler:
                stats.sourceFilesWithJokulSignals,
            antall_repoer_med_bruk: stats.repositoriesWithUsage,
            antall_brukseventer: stats.events,
            antall_pakkeeventer: stats.packageEvents,
            antall_prosjekteventer: stats.repositoryEvents,
            antall_komponenteventer: stats.componentEvents,
            antall_propeventer: stats.propEvents,
            antall_tokeneventer: stats.tokenEvents,
            antall_hookeventer: stats.hookEvents,
            antall_hjelpefunksjonseventer: stats.utilityEvents,
            antall_temaeventer: stats.themeEvents,
            antall_foreldede_api_eventer: stats.deprecatedEvents,
            antall_skannefeil: stats.errors,
        },
    };
}

function buildDeprecatedDistinctId(repo, workspace, usage) {
    const base = `${repo.full_name}:${workspace.packageJsonPath}:deprecated:${usage.apiKind}:${usage.apiName}`;

    if (usage.componentName) {
        return `${base}:${usage.componentName}`;
    }

    return base;
}

function buildDeprecatedInsertId(repo, workspace, usage, snapshot) {
    const base = `${snapshot.snapshotDate}:${repo.full_name}:${workspace.packageJsonPath}:deprecated:${usage.apiKind}:${usage.apiName}:${usage.importSource}`;

    if (usage.componentName) {
        return `${base}:${usage.componentName}`;
    }

    return base;
}

function buildCommonProperties({ repo, workspace, snapshot, token }) {
    return {
        token,
        time: snapshot.snapshotTime,
        maaledato: snapshot.snapshotDate,
        maaledata_kilde: "github-repo-skann",
        github_eier: repo.owner.login,
        repo_navn: repo.name,
        repo_fullt_navn: repo.full_name,
        repo_standardgren: repo.default_branch,
        repo_synlighet: translateRepoVisibility(
            repo.visibility || (repo.private ? "private" : "public"),
        ),
        repo_er_arkivert: repo.archived,
        repo_er_fork: repo.fork,
        team: workspace.team,
        pakke_rot: workspace.rootDir || ".",
        package_json_sti: workspace.packageJsonPath,
        pakke_navn: workspace.workspacePackageName || "ukjent",
        pakke_er_privat: workspace.workspacePrivate === true,
    };
}

function translatePackageFamily(packageFamily) {
    switch (packageFamily) {
        case "consolidated":
            return "samlet";
        case "legacy":
            return "eldre";
        default:
            return packageFamily;
    }
}

function translateMigrationState(migrationState) {
    switch (migrationState) {
        case "mixed":
            return "blandet";
        case "consolidated-only":
            return "kun samlet";
        case "legacy-only":
            return "kun eldre";
        default:
            return migrationState;
    }
}

function translateVersionFreshness(versionFreshness) {
    switch (versionFreshness) {
        case "legacy-only":
            return "kun eldre";
        case "prerelease":
            return "forhaandsversjon";
        case "stable":
            return "oppdatert";
        case "outdated-range":
            return "utdatert";
        case "unknown-range":
            return "ukjent versjonskrav";
        default:
            return versionFreshness;
    }
}

function translateDependencyField(dependencyField) {
    switch (dependencyField) {
        case "dependencies":
            return "vanlige avhengigheter";
        case "devDependencies":
            return "utviklingsavhengigheter";
        case "peerDependencies":
            return "peer-avhengigheter";
        case "optionalDependencies":
            return "valgfrie avhengigheter";
        default:
            return dependencyField;
    }
}

function translateThemeSignalKind(signalKind) {
    switch (signalKind) {
        case "style-import":
            return "stilimport";
        default:
            return signalKind;
    }
}

function translateTokenSource(tokenSource) {
    switch (tokenSource) {
        case "css-variabel":
            return "css-variabel";
        case "core-eksport":
            return "core-eksport";
        default:
            return tokenSource;
    }
}

function translateApiKind(apiKind) {
    switch (apiKind) {
        case "component":
            return "komponent";
        case "hook":
            return "hook";
        case "utility":
            return "hjelpefunksjon";
        case "prop":
            return "prop";
        case "api":
            return "api";
        default:
            return apiKind;
    }
}

function translateRepoVisibility(visibility) {
    switch (visibility) {
        case "private":
            return "privat";
        case "public":
            return "offentlig";
        case "internal":
            return "intern";
        default:
            return visibility;
    }
}
