/**
 * Husk forrige valg (metrikk + team) mellom kjøringer. Best-effort:
 * feiler stille hvis filen ikke kan leses/skrives.
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

function prefsPath(config) {
    return join(config.workspaceDir, "metrics-prefs.json");
}

export function loadPrefs(config) {
    try {
        return JSON.parse(readFileSync(prefsPath(config), "utf8"));
    } catch {
        return {};
    }
}

export function savePrefs(config, prefs) {
    try {
        const p = prefsPath(config);
        mkdirSync(dirname(p), { recursive: true });
        writeFileSync(p, JSON.stringify(prefs, null, 2));
    } catch {
        /* preferanser er kjekt-å-ha, ikke kritisk */
    }
}
