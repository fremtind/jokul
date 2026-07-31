import { teamsMatch } from "../discovery/codeowners.mjs";
import {
    discoverConsumerRepos,
    discoverTeams,
    formatAge,
    readDiscoveryCache,
    writeDiscoveryCache,
} from "../discovery/discovery.mjs";
import { domainForTeam, loadTeamStore } from "../discovery/team-store.mjs";
/** Interaktiv veiviser: fire steg (metrikk → team → Mixpanel → bekreft)
 *  med piltast-navigasjon og Esc-tilbake. Returnerer valgene til entry. */
import { shortName } from "../infra/format.mjs";
import { BACK, askChoice, askConfirm, askMultiChoice } from "./prompt.mjs";
import { METRICS, metricLabel } from "./report.mjs";
import { dim, panel, step } from "./ui.mjs";

const TOTAL_STEPS = 4;

/** Henter repo/team-oppdagelse (spør om mellomlager finnes). */
async function loadDiscovery(config) {
    const cached = config.refresh ? null : readDiscoveryCache(config);
    if (
        cached &&
        (await askConfirm(
            `Fant mellomlagret repo/team-info: ${cached.withTeams.length} repo, ` +
                `${cached.teams.length} team, oppdatert for ${formatAge(cached.savedAt)} siden.\n` +
                `Bruke den (hopper over GitHub-oppslag)?`,
            true,
        ))
    ) {
        console.log("↩︎  Bruker mellomlagret oppdagelse.");
        return { discovery: cached, usedCache: true };
    }
    const records = await discoverConsumerRepos(config);
    if (!records.length) {
        console.log("Ingen konsument-repoer funnet.");
        return null;
    }
    console.log(`Fant ${records.length} konsument-repo(er) i @${config.org}.`);
    console.log("\n🧭 Kartlegger team-eierskap...");
    const discovery = await discoverTeams(records, config);
    writeDiscoveryCache(config, discovery);
    return { discovery, usedCache: false };
}

/** Bygger tabellrader (domene/team/repoer) for team-valget. */
function buildTeamRows(discovery, config) {
    const { withTeams, teams, hasUnknown } = discovery;
    const store = loadTeamStore(config);
    const teamRepos = new Map();
    const unknownRepos = [];
    for (const r of withTeams) {
        const short = shortName(r.repo, config.org);
        if (!r.teams.length) unknownRepos.push(short);
        for (const t of r.teams) {
            if (!teamRepos.has(t)) teamRepos.set(t, []);
            teamRepos.get(t).push(short);
        }
    }
    const rows = teams
        .map((t) => ({
            domain: domainForTeam(store, t),
            team: shortName(t, config.org),
            value: t,
            repos: (teamRepos.get(t) ?? []).sort(),
        }))
        .sort(
            (a, b) =>
                a.domain.localeCompare(b.domain) ||
                a.team.localeCompare(b.team),
        );
    if (hasUnknown) {
        rows.push({
            domain: "Annet",
            team: "(ukjent – uten team)",
            value: "(ukjent)",
            repos: unknownRepos.sort(),
        });
    }
    return rows;
}

async function pickMetric(prefs) {
    const idx = METRICS.findIndex((m) => m.value === prefs.lastMetric);
    if (idx >= 0) {
        console.log(dim(`   Forrige gang: ${metricLabel(prefs.lastMetric)}`));
    }
    return askChoice("Hvilken metrikk vil du hente?", METRICS, {
        initialCursor: idx >= 0 ? idx : 0,
    });
}

async function pickTeams(discovery, config, prevSelected, prefs) {
    const rows = buildTeamRows(discovery, config);
    if (!rows.length) return null; // ingen team → alle

    console.log("\n📋 Team-oversikt\n");
    console.table(
        rows.map((r) => ({
            Domene: r.domain,
            Team: r.team,
            Repoer: r.repos.length,
            "Repo-navn": r.repos.join(", "),
        })),
    );

    const options = rows.map((r) => ({
        label: `${r.domain} › ${r.team} (${r.repos.length})`,
        value: r.value,
    }));
    const seed = prevSelected ? [...prevSelected] : (prefs.lastTeams ?? []);
    const preselected = seed
        .map((v) => options.findIndex((o) => o.value === v))
        .filter((i) => i >= 0);

    const picked = await askMultiChoice(
        "Hvilke team vil du ha info fra? (ingen valgt = alle · esc tilbake)",
        options,
        { preselected },
    );
    if (picked === BACK) return BACK;
    if (picked.length && picked.length !== options.length) {
        return new Set(picked);
    }
    return null;
}

async function pickMixpanel(current) {
    console.log(
        dim(
            "   Sender kun aggregerte tall (ingen kildekode) til " +
                "Jøkul-teamets dashboard.",
        ),
    );
    return askChoice(
        "Dele resultatet til Mixpanel?",
        [
            { label: "Nei – vis bare lokalt i terminalen", value: false },
            { label: "Ja – send aggregerte tall til Mixpanel", value: true },
        ],
        { initialCursor: current ? 1 : 0 },
    );
}

async function confirmRun(config, answers, discovery, usedCache) {
    const chosen = answers.selectedSet
        ? discovery.withTeams.filter((r) =>
              teamsMatch(r.teams, answers.selectedSet),
          )
        : discovery.withTeams;
    panel("Klar til å kjøre", [
        `Metrikk:   ${metricLabel(answers.metric)}`,
        `Team:      ${answers.selectedSet ? `${answers.selectedSet.size} valgt` : "Alle"}`,
        `Repoer:    ${chosen.length}`,
        `Mixpanel:  ${answers.sendMixpanel ? "Ja" : "Nei"}`,
    ]);
    const choice = await askChoice(
        "Hva vil du gjøre?",
        [
            {
                label: "Hent nyeste versjoner, så kjør",
                value: { update: true },
            },
            {
                label: "Bruk lokale repoer som de er",
                value: { update: false },
            },
            { label: "⤺ Endre valg", value: "back" },
        ],
        { initialCursor: usedCache ? 1 : 0 },
    );
    if (choice === BACK || choice === "back") return BACK;
    return choice;
}

/** Kjører hele veiviseren. Returnerer {answers, discovery, usedCache}
 *  eller null hvis brukeren avslutter. */
export async function runWizard(config, prefs) {
    let discovery = null;
    let usedCache = false;
    const answers = {
        metric: null,
        selectedSet: null,
        sendMixpanel: config.mixpanelEnabled,
        update: true,
    };

    let stepNo = 1;
    while (stepNo >= 1) {
        if (stepNo === 1) {
            step(1, TOTAL_STEPS, "Velg metrikk");
            const m = await pickMetric(prefs);
            if (m === BACK) {
                if (await askConfirm("Avslutte uten å kjøre?", false)) {
                    return null;
                }
                continue;
            }
            answers.metric = m;
            stepNo = 2;
        } else if (stepNo === 2) {
            step(2, TOTAL_STEPS, "Velg team");
            if (!discovery) {
                const d = await loadDiscovery(config);
                if (!d) return null;
                discovery = d.discovery;
                usedCache = d.usedCache;
            }
            const res = await pickTeams(
                discovery,
                config,
                answers.selectedSet,
                prefs,
            );
            if (res === BACK) {
                stepNo = 1;
                continue;
            }
            answers.selectedSet = res;
            stepNo = config.mixpanelEnabled ? 4 : 3;
        } else if (stepNo === 3) {
            step(3, TOTAL_STEPS, "Del til Mixpanel (valgfritt)");
            const res = await pickMixpanel(answers.sendMixpanel);
            if (res === BACK) {
                stepNo = 2;
                continue;
            }
            answers.sendMixpanel = res;
            stepNo = 4;
        } else if (stepNo === 4) {
            step(4, TOTAL_STEPS, "Bekreft og kjør");
            const res = await confirmRun(config, answers, discovery, usedCache);
            if (res === BACK) {
                stepNo = config.mixpanelEnabled ? 2 : 3;
                continue;
            }
            answers.update = res.update;
            break;
        }
    }

    return { answers, discovery, usedCache };
}
