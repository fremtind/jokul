import { type ThemeDraftAction, themeDraftReducer } from "./themeDraftReducer";
import type { ThemeDraft } from "./types";

/**
 * Hvert angresteg holder et helt utkast. Reduceren kopierer grunt, så verdier
 * som ikke endres deles mellom stegene i stedet for å kopieres på nytt.
 */
const MAX_HISTORY = 50;

export type ThemeDraftHistoryAction = (
    | ThemeDraftAction
    | { type: "UNDO" }
    | { type: "REDO" }
    | { type: "RESET_HISTORY" }
    | { type: "END_EDIT"; field: string }
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
 * løypa blir derfor liggende, og angringen gjør ingenting.
 */
export function isInScope(
    step: ThemeDraftHistoryStep | undefined,
    scope: string | undefined,
): step is ThemeDraftHistoryStep {
    return step !== undefined && step.scope === scope;
}

/**
 * Tekstfelt og fargevelger sender én action per tastetrykk eller bildeoppdatering.
 * Endringer i samme felt samles til ett angresteg fram til END_EDIT, mens
 * select og avkryssing er én action per handling og står alene.
 */
function getCoalesceKey(action: ThemeDraftAction): string | null {
    switch (action.type) {
        case "SET_THEME_NAME":
            return "themeName";

        case "APPLY_BASE_COLOR":
            return "background.contrast.light";

        case "UPDATE_COLOR_TOKEN":
            return `${action.group}.${action.role}.${action.colorScheme}`;

        default:
            return null;
    }
}

// Utkastreduceren lager noen ganger et nytt objekt selv når verdiene er like.
// Det skal ikke gi brukeren et tomt angresteg.
function hasSameDraftValues(current: ThemeDraft, next: ThemeDraft) {
    return (
        current.themeName === next.themeName &&
        current.regularFont === next.regularFont &&
        current.displayFont === next.displayFont &&
        current.hasCustomDisplayFont === next.hasCustomDisplayFont &&
        current.includeDarkMode === next.includeDarkMode &&
        current.colorTokens === next.colorTokens
    );
}

export function themeDraftHistoryReducer(
    state: ThemeDraftHistory,
    action: ThemeDraftHistoryAction,
): ThemeDraftHistory {
    switch (action.type) {
        // Neste tastetrykk i samme felt skal bli et nytt steg etter angring.
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
                ].slice(-MAX_HISTORY),
                present: next.draft,
                future,
                lastKey: null,
            };
        }

        // En ny redigeringsøkt i samme felt skal bli et eget angresteg.
        case "END_EDIT":
            return state.lastKey === action.field
                ? { ...state, lastKey: null }
                : state;

        // Videre navigasjon beholder utkastet, men tømmer angrehistorikken.
        case "RESET_HISTORY":
            return initializeHistory(state.present);

        /** Et gjenopprettet utkast er utgangspunktet, ikke en endring som kan angres. */
        case "SET_DRAFT":
            return initializeHistory(themeDraftReducer(state.present, action));

        default: {
            const present = themeDraftReducer(state.present, action);
            const key = getCoalesceKey(action);

            if (hasSameDraftValues(state.present, present)) {
                return key === null && state.lastKey !== null
                    ? { ...state, lastKey: null }
                    : state;
            }

            if (
                key !== null &&
                key === state.lastKey &&
                isInScope(state.past.at(-1), action.scope)
            ) {
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
