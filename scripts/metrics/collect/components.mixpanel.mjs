/** Komponent-innsending til Mixpanel: ett event per komponent (beriket med
 *  team/domener/versjoner) + ett oppsummeringsevent for hele org. */
import { mixpanelDay, trackEvents } from "../mixpanel.mjs";

export async function sendComponentsToMixpanel(usage, config) {
    const nowMs = Date.now();
    const day = mixpanelDay(nowMs);

    const events = usage
        .filter((c) => !c.failed)
        .map((c) => ({
            event: config.componentEvent,
            properties: {
                $insert_id: `komponent:${c.name}:${day}`,
                distinct_id: c.name,
                time: nowMs,
                Komponent: c.name,
                Repoer: c.repos.size,
                Pakker: c.packages.size,
                Filer: c.files,
                Team: c.teams?.length ? c.teams : undefined,
                "Antall team": c.teams?.length ?? 0,
                Domener: c.domains?.length ? c.domains : undefined,
                "Antall domener": c.domains?.length ?? 0,
                "Jøkul-majorer": c.majors?.length ? c.majors : undefined,
                "Jøkul-versjoner": c.versions?.length ? c.versions : undefined,
                "I bruk": c.packages.size > 0,
                Pakke: config.package,
            },
        }));

    const usedCount = usage.filter((c) => c.packages.size > 0).length;
    const summary = {
        event: `${config.componentEvent} (oppsummering)`,
        properties: {
            $insert_id: `komponent-summary:${config.org}:${day}`,
            distinct_id: `${config.org}/${config.package}`,
            time: nowMs,
            "Komponenter totalt": usage.length,
            "Komponenter i bruk": usedCount,
            "Komponenter ubrukt": usage.length - usedCount,
            Pakke: config.package,
        },
    };

    await trackEvents([...events, summary]);
}
