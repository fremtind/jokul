import { type ThemeDraftAction, themeDraftReducer } from "./themeDraftReducer";
import type { ThemeDraft } from "./types";

/**
 * Hvor mange steg som kan angres. Hvert steg holder et helt utkast, men
 * reduceren kopierer grunt, så alt som ikke endret seg — blant annet base64en
 * til opplastede fonter — deles mellom stegene.
 */
const MAX_HISTORY = 50;

export type ThemeDraftHistoryAction = (
    | ThemeDraftAction
    | { type: "UNDO" }
    | { type: "REDO" }
) & {
    /** Steget handlingen hører til. Settes av `ThemeDraftProvider`. */
    scope?: string;
};

/** Et utkast slik det var, og steget endringen som forlot det ble gjort i. */
export type ThemeDraftHistoryStep = {
    draft: ThemeDraft;
    scope?: string;
};

export type ThemeDraftHistory = {
    past: ThemeDraftHistoryStep[];
    present: ThemeDraft;
    future: ThemeDraftHistoryStep[];
    /**
     * Nøkkelen til endringen som ga `present`. Neste endring med samme nøkkel
     * skrives inn i det samme steget i stedet for å legge til et nytt.
     */
    lastKey: string | null;
};

export function initializeHistory(draft: ThemeDraft): ThemeDraftHistory {
    return { past: [], present: draft, future: [], lastKey: null };
}

/**
 * Cmd+Z skal bare kunne endre siden brukeren ser. Et steg fra et annet sted i
 * løypa blir derfor liggende, og angringen gjør ingenting — i stedet for å
 * flytte på farger eller fonter brukeren ikke har framfor seg.
 */
export function isInScope(
    step: ThemeDraftHistoryStep | undefined,
    scope: string | undefined,
): step is ThemeDraftHistoryStep {
    return step !== undefined && step.scope === scope;
}

/**
 * Et tekstfelt sender én action per tastetrykk, og fargevelgeren én per
 * bildeoppdatering mens den dras. Uten sammenslåing ville ett Cmd+Z tatt ett
 * tegn. Derfor blir endringer i samme felt på rad ett angresteg, mens resten
 * (select, avkryssing, filopplasting) er én action per handling og står alene.
 */
function getCoalesceKey(action: ThemeDraftAction): string | null {
    switch (action.type) {
        case "SET_THEME_NAME":
            return "themeName";

        case "SET_AUTHOR_NAME":
            return "authorName";

        case "SET_AUTHOR_EMAIL":
            return "authorEmail";

        case "APPLY_BASE_COLOR":
            return "baseColor";

        case "UPDATE_COLOR_TOKEN":
            return `colorToken:${action.group}.${action.role}.${action.colorScheme}`;

        default:
            return null;
    }
}

export function themeDraftHistoryReducer(
    state: ThemeDraftHistory,
    action: ThemeDraftHistoryAction,
): ThemeDraftHistory {
    switch (action.type) {
        // `lastKey` nullstilles, slik at neste tastetrykk i samme felt blir et
        // eget steg og ikke skriver over det utkastet vi nettopp hentet fram.
        case "UNDO": {
            const previous = state.past.at(-1);

            if (!isInScope(previous, action.scope)) {
                return state;
            }

            return {
                past: state.past.slice(0, -1),
                present: previous.draft,
                future: [
                    { draft: state.present, scope: previous.scope },
                    ...state.future,
                ],
                lastKey: null,
            };
        }

        case "REDO": {
            const [next, ...future] = state.future;

            if (!isInScope(next, action.scope)) {
                return state;
            }

            return {
                past: [
                    ...state.past,
                    { draft: state.present, scope: next.scope },
                ],
                present: next.draft,
                future,
                lastKey: null,
            };
        }

        /**
         * Et gjenopprettet utkast er utgangspunktet, ikke en endring. Kunne det
         * angres, ville første Cmd+Z kastet brukeren tilbake til et tomt tema.
         */
        case "SET_DRAFT":
            return initializeHistory(themeDraftReducer(state.present, action));

        default: {
            const present = themeDraftReducer(state.present, action);

            // Reduceren gir samme state tilbake når en action ikke fører til
            // noe. Et tomt steg ville bare gjort Cmd+Z til et blindtrykk.
            if (present === state.present) {
                return state;
            }

            const key = getCoalesceKey(action);

            if (key !== null && key === state.lastKey) {
                return { ...state, present, future: [] };
            }

            return {
                past: [
                    ...state.past,
                    { draft: state.present, scope: action.scope },
                ].slice(-MAX_HISTORY),
                present,
                future: [],
                lastKey: key,
            };
        }
    }
}
