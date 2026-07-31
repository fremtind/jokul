/** Token-innsending til Mixpanel: ett event per token + adopsjon (global
 *  + per repo, beriket med team/domener/versjoner). */
import { mixpanelDay, trackEvents } from "../mixpanel.mjs";

export async function sendTokensToMixpanel(tokens, config) {
    const nowMs = Date.now();
    const day = mixpanelDay(nowMs);
    const events = tokens.map((t) => ({
        event: config.tokenEvent,
        properties: {
            $insert_id: `${config.tokenEvent}:${t.name}:${day}`,
            distinct_id: t.name,
            time: nowMs,
            Token: t.name,
            Kategori: t.category,
            Status: t.status,
            Forekomster: t.occurrences,
            "var()": t.usesVar,
            Overstyringer: t.usesOverride,
            "Rå referanser": t.usesBare,
            Repoer: t.repos.size,
            Pakker: t.packages.size,
            Filer: t.files,
            Team: t.teams?.length ? t.teams : undefined,
            "Antall team": t.teams?.length ?? 0,
            Domener: t.domains?.length ? t.domains : undefined,
            "Antall domener": t.domains?.length ?? 0,
            "Jøkul-majorer": t.majors?.length ? t.majors : undefined,
            "Jøkul-versjoner": t.versions?.length ? t.versions : undefined,
            Pakke: config.package,
        },
    }));
    await trackEvents(events);
}

export async function sendTokenAdoptionToMixpanel(
    adoption,
    config,
    ctx = null,
) {
    const nowMs = Date.now();
    const day = mixpanelDay(nowMs);
    const rate = (t, h) =>
        t + h === 0 ? undefined : Number((t / (t + h)).toFixed(4));
    const summary = {
        event: config.tokenAdoptionEvent,
        properties: {
            $insert_id: `token-adopsjon:global:${day}`,
            distinct_id: "global",
            time: nowMs,
            Nivå: "global",
            "Token-farger": adoption.colorTokenOcc,
            "Hardkodet hex": adoption.hexOcc,
            "Distinkte hex": adoption.hexColors.size,
            Fargeadopsjon: rate(adoption.colorTokenOcc, adoption.hexOcc),
            Filer: adoption.hexFiles.size,
            Repoer: adoption.hexRepos.size,
            Pakker: adoption.hexPackages.size,
            Pakke: config.package,
        },
    };
    const perRepo = [...adoption.byRepo.entries()].map(([repo, v]) => {
        const c = ctx?.get(repo);
        return {
            event: config.tokenAdoptionEvent,
            properties: {
                $insert_id: `token-adopsjon:${repo}:${day}`,
                distinct_id: repo,
                time: nowMs,
                Nivå: "repo",
                Repo: repo,
                "Token-farger": v.token,
                "Hardkodet hex": v.hex,
                Fargeadopsjon: rate(v.token, v.hex),
                Team: c?.teams?.length ? c.teams : undefined,
                "Antall team": c?.teams?.length ?? 0,
                Domener: c?.domains?.length ? c.domains : undefined,
                "Antall domener": c?.domains?.length ?? 0,
                "Jøkul-majorer": c?.majors?.length ? c.majors : undefined,
                "Jøkul-versjoner": c?.versions?.length ? c.versions : undefined,
                Pakke: config.package,
            },
        };
    });
    await trackEvents([summary, ...perRepo]);
}
