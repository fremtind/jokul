import {
    DEFAULT_FONT_OPTION_ID,
    type FontOptionId,
} from "../_shared/fontOptions";
import { isHex, normalizeHex } from "../_shared/utils";
import { generatePalette } from "../generator/generate";
import type { ColorScheme, EditableLightDarkPalette } from "../generator/types";
import { INITIAL_COLOR_TOKENS } from "./initialColorTokens";
import type { ThemeDraft } from "./types";

// ---------------------------------------------------------------------------
// Initiell state
// ---------------------------------------------------------------------------

export const INITIAL_STATE = {
    colorTokens: INITIAL_COLOR_TOKENS,
    regularFont: DEFAULT_FONT_OPTION_ID,
    displayFont: DEFAULT_FONT_OPTION_ID,
    themeName: "",
    includeDarkMode: true,
} as const satisfies ThemeDraft;

// ---------------------------------------------------------------------------
// Actions
// ---------------------------------------------------------------------------

export type ThemeDraftAction =
    | { type: "SET_THEME_NAME"; themeName: string }
    | { type: "SET_INCLUDE_DARK_MODE"; includeDarkMode: boolean }
    | { type: "SET_REGULAR_FONT"; font: FontOptionId }
    | { type: "SET_DISPLAY_FONT"; font: FontOptionId }
    | { type: "SET_COLOR_TOKENS"; tokens: EditableLightDarkPalette }
    | { type: "APPLY_BASE_COLOR"; value: string }
    | {
          type: "UPDATE_COLOR_TOKEN";
          group: string;
          role: string;
          colorScheme: ColorScheme;
          value: string;
      }
    | { type: "SET_DRAFT"; draft: ThemeDraft };

// ---------------------------------------------------------------------------
// Reducer
// ---------------------------------------------------------------------------

export function themeDraftReducer(
    state: ThemeDraft,
    action: ThemeDraftAction,
): ThemeDraft {
    switch (action.type) {
        case "SET_THEME_NAME":
            return { ...state, themeName: action.themeName };

        case "SET_INCLUDE_DARK_MODE":
            return { ...state, includeDarkMode: action.includeDarkMode };

        case "SET_REGULAR_FONT":
            return { ...state, regularFont: action.font };

        case "SET_DISPLAY_FONT":
            return { ...state, displayFont: action.font };

        case "SET_COLOR_TOKENS":
            return { ...state, colorTokens: action.tokens };

        case "APPLY_BASE_COLOR": {
            const normalized = normalizeHex(action.value);

            if (isHex(normalized)) {
                return { ...state, colorTokens: generatePalette(normalized) };
            }

            // Ugyldig hex — skriv direkte til background.contrast.light
            const contrastToken = state.colorTokens.background?.contrast;
            if (!contrastToken) {
                return state;
            }

            return {
                ...state,
                colorTokens: {
                    ...state.colorTokens,
                    background: {
                        ...state.colorTokens.background,
                        contrast: {
                            ...contrastToken,
                            light: normalized,
                        },
                    },
                },
            };
        }

        case "UPDATE_COLOR_TOKEN": {
            const { group, role, colorScheme, value } = action;
            const normalized = normalizeHex(value);
            const tokens = state.colorTokens as Record<
                string,
                Record<string, Record<ColorScheme, string>>
            >;
            const token = tokens[group]?.[role];

            if (!token) {
                return state;
            }

            return {
                ...state,
                colorTokens: {
                    ...state.colorTokens,
                    [group]: {
                        ...tokens[group],
                        [role]: { ...token, [colorScheme]: normalized },
                    },
                } as EditableLightDarkPalette,
            };
        }

        case "SET_DRAFT":
            return action.draft;

        default:
            action satisfies never;
            return state;
    }
}
