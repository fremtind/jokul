/** Generisk «bruks»-rapport (navn · repoer · pakker · filer) for tokens og aggregerte props. */
import { mixpanelDay, trackEvents } from "../mixpanel.mjs";

export function printUsageReport(title, itemLabel, usage, limit = 40) {
    const sorted = [...usage].sort(
        (a, b) =>
            b.packages.size - a.packages.size ||
            b.files - a.files ||
            a.name.localeCompare(b.name),
    );
    console.log(`\n${title}\n`);
    console.table(
        sorted.slice(0, limit).map((c) => ({
            [itemLabel]: c.name,
            Repoer: c.repos.size,
            Pakker: c.packages.size,
            Filer: c.files,
        })),
    );
    console.log(
        `\nOppsummering: ${sorted.length} i bruk` +
            (sorted.length > limit ? ` (viser topp ${limit})` : "") +
            ".",
    );
    return sorted;
}

export async function sendUsageToMixpanel(usage, event, itemLabel, config) {
    const nowMs = Date.now();
    const day = mixpanelDay(nowMs);
    const events = usage.map((c) => ({
        event,
        properties: {
            $insert_id: `${event}:${c.name}:${day}`,
            distinct_id: c.name,
            time: nowMs,
            [itemLabel]: c.name,
            Repoer: c.repos.size,
            Pakker: c.packages.size,
            Filer: c.files,
            Domener: c.domains?.length ? c.domains : undefined,
            "Antall domener": c.domains?.length ?? 0,
            "Jøkul-majorer": c.majors?.length ? c.majors : undefined,
            "Jøkul-versjoner": c.versions?.length ? c.versions : undefined,
            Pakke: config.package,
        },
    }));
    await trackEvents(events);
}
