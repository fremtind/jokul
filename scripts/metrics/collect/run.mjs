/** Orkestrering: kjør valgt metrikk mot de klonede repoene. */
import { shortName } from "../infra/format.mjs";
import { askChoice, askMultiChoice, closePrompt } from "../cli/prompt.mjs";
import { teamsMatch } from "../discovery/codeowners.mjs";
import { sendToMixpanel } from "../mixpanel.mjs";
import { buildRepoContext, enrichPropEntries, enrichRows } from "./enrich.mjs";
import {
    allowedPropValues,
    buildComponentApi,
} from "../fasit/component-api.mjs";
import {
    collectComponents,
    discoverComponents,
} from "./components.collect.mjs";
import { sendComponentsToMixpanel } from "./components.mixpanel.mjs";
import { printComponentReport } from "./components.report.mjs";
import {
    collectPropIndex,
    collectPropValues,
    collectProps,
    groupIndexByComponent,
} from "./props.collect.mjs";
import {
    sendComponentPropsToMixpanel,
    sendPropUsageToMixpanel,
    sendPropValuesToMixpanel,
} from "./props.mixpanel.mjs";
import {
    printComponentPropsReport,
    printPropApiReport,
    printPropValueReport,
} from "./props.report.mjs";
import { buildTokenCatalog } from "../fasit/tokens.mjs";
import { collectTokens } from "./tokens.collect.mjs";
import {
    sendTokenAdoptionToMixpanel,
    sendTokensToMixpanel,
} from "./tokens.mixpanel.mjs";
import {
    printTokenAdoptionReport,
    printTokenApiReport,
    printTokenReport,
} from "./tokens.report.mjs";
import { printUsageReport } from "./usage-report.mjs";
import { collectFindings, getLatestVersion } from "./versions.collect.mjs";
import { aggregate, printReport } from "./versions.report.mjs";

async function runVersions(clones, config, selectedSet, sendMixpanel) {
    const all = await collectFindings(clones, config);
    const findings = selectedSet
        ? all.filter((f) => teamsMatch(f.teams, selectedSet))
        : all;
    if (!findings.length) {
        console.log("Ingen @fremtind/jokul-manifester i utvalget.");
        return null;
    }
    const agg = aggregate(findings);
    const latest = await getLatestVersion(config, agg.sortedSpecs[0]);
    printReport(findings, agg, latest, config);
    if (sendMixpanel) {
        await sendToMixpanel(
            findings,
            {
                latest,
                repoCount: agg.uniqueRepos.size,
                manifestCount: findings.length,
                byMajor: agg.byMajor,
                distinctSpecs: agg.sortedSpecs.length,
                reactByMajor: agg.reactByMajor,
                moduleTypeCounts: agg.moduleTypeCounts,
                legacyManifestCount: agg.legacyManifestCount,
                legacyRepoCount: agg.legacyRepoCount,
            },
            config,
        );
    }
    return (
        `${agg.uniqueRepos.size} repo · nyeste ${latest ?? "?"} · ` +
        `${agg.sortedSpecs.length} distinkte versjoner`
    );
}

async function runComponents(clones, config, teamFilter, sendMixpanel) {
    const usage = await collectComponents(
        discoverComponents(config),
        clones,
        config,
        teamFilter,
    );
    printComponentReport(usage, config);
    if (sendMixpanel) {
        enrichRows(usage, await buildRepoContext(clones, config));
        await sendComponentsToMixpanel(usage, config);
    }
    return `${usage.length} komponenter i bruk`;
}

async function runTokens(clones, config, teamFilter, sendMixpanel) {
    const catalog = buildTokenCatalog(config);
    const { tokens, adoption } = await collectTokens(
        clones,
        config,
        teamFilter,
        catalog,
    );
    printTokenApiReport(tokens);
    printTokenReport(tokens);
    printTokenAdoptionReport(adoption);
    if (sendMixpanel) {
        const ctx = await buildRepoContext(clones, config);
        enrichRows(tokens, ctx);
        await sendTokensToMixpanel(tokens, config);
        await sendTokenAdoptionToMixpanel(adoption, config, ctx);
    }
    const total = adoption.colorTokenOcc + adoption.hexOcc;
    const rate = total ? Math.round((adoption.colorTokenOcc / total) * 100) : 0;
    return `${tokens.length} tokens · fargeadopsjon ${rate}%`;
}

async function runPropsSummary(clones, config, teamFilter, sendMixpanel) {
    const components = discoverComponents(config);
    const api = buildComponentApi(components, config);
    const usage = await collectProps(
        components,
        clones,
        config,
        teamFilter,
        api,
    );
    printPropApiReport(usage);
    printUsageReport(
        "🔧 Prop-bruk per komponent (eksperimentelt)",
        "Komponent · prop",
        usage,
    );
    if (sendMixpanel) {
        enrichRows(usage, await buildRepoContext(clones, config));
        await sendPropUsageToMixpanel(usage, config);
    }
    return `${usage.length} komponent·prop-kombinasjoner`;
}

async function runProps(clones, config, teamFilter, sendMixpanel) {
    if (config.ci) {
        return runPropsSummary(clones, config, teamFilter, sendMixpanel);
    }

    const components = discoverComponents(config);
    const api = buildComponentApi(components, config);

    // Interaktivt: velg komponent → alle props / én prop → fil(er) → verdier.
    const index = await collectPropIndex(
        components,
        clones,
        config,
        teamFilter,
        api,
    );
    if (!index.length) {
        console.log(
            "Fant ingen props på @fremtind/jokul-komponenter i utvalget.",
        );
        return null;
    }

    printPropApiReport(index);

    const groups = groupIndexByComponent(index);

    const catTag = (g) => {
        const parts = [];
        const dep = g.categories.get("utfaset");
        const unk = g.categories.get("ukjent");
        if (dep) parts.push(`⚠️ ${dep}`);
        if (unk) parts.push(`❓ ${unk}`);
        return parts.length ? ` · ${parts.join(" ")}` : "";
    };

    const componentOptions = groups
        .map((g) => ({
            label: `${g.component} (${g.propCount} props · ${g.files} filer)${catTag(g)}`,
            value: g,
        }))
        .reverse();
    const group = await askChoice(
        "\nHvilken komponent vil du se på?",
        componentOptions,
        { initialCursor: componentOptions.length - 1 },
    );

    const propTag = (e) =>
        e.category === "utfaset"
            ? " ⚠️ utfaset"
            : e.category === "ukjent"
              ? " ❓ ukjent"
              : "";
    const propOptions = [
        ...group.props
            .map((e) => ({
                label: `${e.prop}${propTag(e)} (${e.files.length} filer)`,
                value: e,
            }))
            .reverse(),
        {
            label: `📋 Alle props på «${group.component}» (${group.propCount})`,
            value: "ALL",
        },
    ];
    const picked = await askChoice(
        `\nHvilken prop på «${group.component}»? («Alle props» for hele komponenten)`,
        propOptions,
        { initialCursor: propOptions.length - 1 },
    );

    if (picked === "ALL") {
        closePrompt();
        printComponentPropsReport(group);
        if (sendMixpanel) {
            const ctx = await buildRepoContext(clones, config);
            enrichPropEntries(group.props, ctx);
            await sendComponentPropsToMixpanel(group, config);
        }
        return null;
    }

    const entry = picked;
    const fileOptions = entry.files
        .map((f) => ({
            label: `${shortName(f.repo, config.org)}/${f.path}`,
            value: f,
        }))
        .reverse();
    const pickedFiles = await askMultiChoice(
        `\nHvilke filer vil du hente «${entry.component} · ${entry.prop}»-verdier fra? («a» = alle)`,
        fileOptions,
        { initialCursor: fileOptions.length - 1, emptyMeansAll: true },
    );
    closePrompt();

    const ctx = sendMixpanel ? await buildRepoContext(clones, config) : null;
    const values = collectPropValues(entry, pickedFiles, components, ctx);
    const allowed = allowedPropValues(api, entry.component, entry.prop);
    printPropValueReport(entry, values, allowed);
    if (sendMixpanel && values.length) {
        await sendPropValuesToMixpanel(entry, values, config, allowed);
    }
    return null;
}

async function runAll(clones, config, selectedSet, teamFilter, sendMixpanel) {
    return [
        {
            label: "Versjoner",
            headline: await runVersions(
                clones,
                config,
                selectedSet,
                sendMixpanel,
            ),
        },
        {
            label: "Komponenter",
            headline: await runComponents(
                clones,
                config,
                teamFilter,
                sendMixpanel,
            ),
        },
        {
            label: "Tokens",
            headline: await runTokens(clones, config, teamFilter, sendMixpanel),
        },
        {
            label: "Props",
            headline: await runPropsSummary(
                clones,
                config,
                teamFilter,
                sendMixpanel,
            ),
        },
    ];
}

/** Dispatcher. Returnerer [{ label, headline }] for sluttrapporten. */
export async function runMetric(
    metric,
    { clones, config, selectedSet, teamFilter, sendMixpanel },
) {
    if (metric === "all") {
        return runAll(clones, config, selectedSet, teamFilter, sendMixpanel);
    }
    if (metric === "versions") {
        const headline = await runVersions(
            clones,
            config,
            selectedSet,
            sendMixpanel,
        );
        return [{ label: "Versjoner", headline }];
    }
    if (metric === "components") {
        const headline = await runComponents(
            clones,
            config,
            teamFilter,
            sendMixpanel,
        );
        return [{ label: "Komponenter", headline }];
    }
    if (metric === "tokens") {
        const headline = await runTokens(
            clones,
            config,
            teamFilter,
            sendMixpanel,
        );
        return [{ label: "Tokens", headline }];
    }
    const headline = await runProps(clones, config, teamFilter, sendMixpanel);
    return [{ label: "Props", headline }];
}
