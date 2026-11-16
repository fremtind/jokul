import { type ThemeDraftAction, themeDraftReducer } from "./themeDraftReducer";
import type { ThemeDraft } from "./types";

const MAX_UNDO_STEPS = 100;

type HistoryEntry = { draft: ThemeDraft; step: string };

export type ThemeDraftHistory = {
    past: HistoryEntry[];
    present: ThemeDraft;
    future: HistoryEntry[];
    activeEdit: string | null;
};

export type ThemeDraftHistoryAction =
    | ThemeDraftAction
    | { type: "UNDO"; step: string }
    | { type: "REDO"; step: string }
    | { type: "RESET_HISTORY" }
    | {
          type: "EDIT_FIELD";
          field: string;
          action: Exclude<ThemeDraftAction, { type: "SET_DRAFT" }>;
      }
    | { type: "END_EDIT"; field: string };

export function getHistoryStep(segments: string[]) {
    const [step, mode] = segments.filter((segment) => !segment.startsWith("("));
    return step === "farger" && mode === "morkt" ? "farger/morkt" : step;
}

export function initializeThemeDraftHistory(
    draft: ThemeDraft,
): ThemeDraftHistory {
    return { past: [], present: draft, future: [], activeEdit: null };
}

function getStepForAction(
    action: Exclude<ThemeDraftAction, { type: "SET_DRAFT" }>,
) {
    switch (action.type) {
        case "SET_THEME_NAME":
        case "SET_REGULAR_FONT":
        case "SET_DISPLAY_FONT":
            return "identitet";
        case "APPLY_BASE_COLOR":
        case "SET_INCLUDE_DARK_MODE":
            return "grunnfarge";
        case "UPDATE_COLOR_TOKEN":
            return action.colorScheme === "dark" ? "farger/morkt" : "farger";
        case "SET_COLOR_TOKENS":
            return "farger";
    }
}

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
    if (action.type === "UNDO") {
        const previous = state.past.at(-1);
        if (!previous || previous.step !== action.step) {
            return state;
        }

        return {
            past: state.past.slice(0, -1),
            present: previous.draft,
            future: [
                ...state.future,
                { draft: state.present, step: previous.step },
            ],
            activeEdit: null,
        };
    }

    if (action.type === "REDO") {
        const next = state.future.at(-1);
        if (!next || next.step !== action.step) {
            return state;
        }

        return {
            past: [
                ...state.past,
                { draft: state.present, step: next.step },
            ].slice(-MAX_UNDO_STEPS),
            present: next.draft,
            future: state.future.slice(0, -1),
            activeEdit: null,
        };
    }

    if (action.type === "END_EDIT") {
        return state.activeEdit === action.field
            ? { ...state, activeEdit: null }
            : state;
    }

    if (action.type === "RESET_HISTORY") {
        return initializeThemeDraftHistory(state.present);
    }

    if (action.type === "SET_DRAFT") {
        return initializeThemeDraftHistory(
            themeDraftReducer(state.present, action),
        );
    }

    const draftAction = action.type === "EDIT_FIELD" ? action.action : action;
    const nextDraft = themeDraftReducer(state.present, draftAction);

    if (hasSameDraftValues(state.present, nextDraft)) {
        return action.type !== "EDIT_FIELD" && state.activeEdit !== null
            ? { ...state, activeEdit: null }
            : state;
    }

    const editingStep = getStepForAction(draftAction);
    const continuesActiveEdit =
        action.type === "EDIT_FIELD" &&
        action.field === state.activeEdit &&
        state.past.at(-1)?.step === editingStep;

    if (continuesActiveEdit) {
        return { ...state, present: nextDraft, future: [] };
    }

    return {
        past: [
            ...state.past,
            { draft: state.present, step: editingStep },
        ].slice(-MAX_UNDO_STEPS),
        present: nextDraft,
        future: [],
        activeEdit: action.type === "EDIT_FIELD" ? action.field : null,
    };
}
