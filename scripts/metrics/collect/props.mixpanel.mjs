/** Prop-innsending til Mixpanel på tre nivåer: per verdi (drill-down),
 *  per prop på komponent (+ komponent-oppsummering), og aggregert. */
import { mixpanelDay, trackEvents } from "../mixpanel.mjs";

/** Drill-down: ett event per verdi for valgt komponent·prop. */
export async function sendPropValuesToMixpanel(
    entry,
    values,
    config,
    allowed = null,
) {
    const nowMs = Date.now();
    const day = mixpanelDay(nowMs);
    const { component, prop, category } = entry;
    const checkable = (val) => {
        const s = String(val);
        if (s === "(ukjent)" || s === "…spread") return false;
        if (/^\{[\s\S]*\}$/.test(s)) return false;
        return true;
    };
    const events = values.map((v) => ({
        event: config.propEvent,
        properties: {
            $insert_id: `prop:${component}:${prop}:${v.value}:${day}`,
            distinct_id: `${component}.${prop}=${v.value}`,
            time: nowMs,
            Komponent: component,
            Prop: prop,
            Kategori: category,
            Verdi: String(v.value),
            Verditype: v.kind,
            Gyldig:
                allowed && checkable(v.value)
                    ? allowed.has(String(v.value))
                    : undefined,
            "Tillatte verdier": allowed ? [...allowed].sort() : undefined,
            Forekomster: v.occurrences,
            Filer: v.files,
            Repoer: v.repos,
            Team: v.teams?.length ? v.teams : undefined,
            "Antall team": v.teams?.length ?? 0,
            Domener: v.domains?.length ? v.domains : undefined,
            "Antall domener": v.domains?.length ?? 0,
            "Jøkul-majorer": v.majors?.length ? v.majors : undefined,
            "Jøkul-versjoner": v.versions?.length ? v.versions : undefined,
            Pakke: config.package,
        },
    }));
    await trackEvents(events);
}

/** Komponent-nivå: ett event per prop på komponenten + oppsummering. */
export async function sendComponentPropsToMixpanel(group, config) {
    const nowMs = Date.now();
    const day = mixpanelDay(nowMs);
    const events = group.props.map((e) => ({
        event: config.propEvent,
        properties: {
            $insert_id: `prop:${e.component}:${e.prop}:${day}`,
            distinct_id: `${e.component} · ${e.prop}`,
            time: nowMs,
            Komponent: e.component,
            Prop: e.prop,
            Kategori: e.category,
            Forekomster: e.occurrences,
            Filer: e.files.length,
            Repoer: new Set(e.files.map((f) => f.repo)).size,
            Team: e.teams?.length ? e.teams : undefined,
            "Antall team": e.teams?.length ?? 0,
            Domener: e.domains?.length ? e.domains : undefined,
            "Antall domener": e.domains?.length ?? 0,
            "Jøkul-majorer": e.majors?.length ? e.majors : undefined,
            "Jøkul-versjoner": e.versions?.length ? e.versions : undefined,
            Pakke: config.package,
        },
    }));
    const summaryTeams = [
        ...new Set(group.props.flatMap((e) => e.teams ?? [])),
    ].sort();
    const summary = {
        event: `${config.propEvent} (komponent)`,
        properties: {
            $insert_id: `prop-komponent:${group.component}:${day}`,
            distinct_id: group.component,
            time: nowMs,
            Komponent: group.component,
            "Props i bruk": group.propCount,
            Filer: group.files,
            Repoer: group.repos,
            Team: summaryTeams.length ? summaryTeams : undefined,
            "Antall team": summaryTeams.length,
            ...Object.fromEntries(
                [...group.categories.entries()].map(([c, n]) => [
                    `Props ${c}`,
                    n,
                ]),
            ),
            Pakke: config.package,
        },
    };
    await trackEvents([...events, summary]);
}

/** Aggregert: ett event per komponent·prop (ikke-interaktiv oversikt). */
export async function sendPropUsageToMixpanel(usage, config) {
    const nowMs = Date.now();
    const day = mixpanelDay(nowMs);
    const events = usage.map((e) => ({
        event: config.propEvent,
        properties: {
            $insert_id: `prop:${e.component}:${e.prop}:${day}`,
            distinct_id: `${e.component} · ${e.prop}`,
            time: nowMs,
            Komponent: e.component,
            Prop: e.prop,
            Kategori: e.category,
            Repoer: e.repos.size,
            Pakker: e.packages.size,
            Filer: e.files,
            Team: e.teams?.length ? e.teams : undefined,
            "Antall team": e.teams?.length ?? 0,
            Domener: e.domains?.length ? e.domains : undefined,
            "Antall domener": e.domains?.length ?? 0,
            "Jøkul-majorer": e.majors?.length ? e.majors : undefined,
            "Jøkul-versjoner": e.versions?.length ? e.versions : undefined,
            Pakke: config.package,
        },
    }));
    await trackEvents(events);
}
