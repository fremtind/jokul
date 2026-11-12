import {
    type EditableLightDarkPalette,
    type JokulThemeFile,
    generatePalette,
    isHex,
    normalizeHex,
} from "@fremtind/jokul/theme";
import type { ColorScheme } from "@fremtind/jokul/utilities";
import {
    DEFAULT_REGULAR_FONT_OPTION_ID,
    FONT_OPTIONS,
    type FontOptionId,
} from "../_shared/fontOptions";
import { INITIAL_COLOR_TOKENS } from "./initialColorTokens";

// ---------------------------------------------------------------------------
// Initiell state
// ---------------------------------------------------------------------------

export const INITIAL_STATE = {
    name: "",
    colorTokens: INITIAL_COLOR_TOKENS,
    fonts: {
        regular: {
            family: FONT_OPTIONS[DEFAULT_REGULAR_FONT_OPTION_ID].family,
            weight: FONT_OPTIONS[DEFAULT_REGULAR_FONT_OPTION_ID].weight,
        },
        display: {
            family: FONT_OPTIONS[DEFAULT_REGULAR_FONT_OPTION_ID].family,
            weight: FONT_OPTIONS[DEFAULT_REGULAR_FONT_OPTION_ID].weight,
        },
    },
    includeDarkMode: true,
} as const satisfies JokulThemeFile;

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
    | { type: "SET_DRAFT"; draft: JokulThemeFile };

// ---------------------------------------------------------------------------
// Reducer
// ---------------------------------------------------------------------------

export function themeDraftReducer(
    state: JokulThemeFile,
    action: ThemeDraftAction,
): JokulThemeFile {
    switch (action.type) {
        case "SET_THEME_NAME":
            return { ...state, name: action.themeName.trim() };

        case "SET_INCLUDE_DARK_MODE":
            return { ...state, includeDarkMode: action.includeDarkMode };

        case "SET_REGULAR_FONT":
            return {
                ...state,
                fonts: {
                    regular: FONT_OPTIONS[action.font],
                    display: state.fonts?.display,
                },
            };

        case "SET_DISPLAY_FONT":
            return {
                ...state,
                fonts: {
                    display: FONT_OPTIONS[action.font],
                    regular:
                        state.fonts?.regular ||
                        FONT_OPTIONS[DEFAULT_REGULAR_FONT_OPTION_ID],
                },
            };

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

            const newTokens = {
                ...state.colorTokens,
                [group]: {
                    ...tokens[group],
                    [role]: { ...token, [colorScheme]: normalized },
                },
            } as EditableLightDarkPalette;

            return {
                ...state,
                colorTokens: newTokens,
            };
        }

        case "SET_DRAFT":
            return {
                ...action.draft,
                name: action.draft.name.trim(),
            };

        default:
            action satisfies never;
            return state;
    }
}
