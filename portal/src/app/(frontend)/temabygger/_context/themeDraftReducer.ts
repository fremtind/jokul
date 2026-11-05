import {
    type BorderRadiusScaleId,
    DEFAULT_BORDER_RADIUS_SCALE_ID,
} from "../_shared/borderRadius";
import type { CustomFont, FontSlot } from "../_shared/customFont";
import {
    CUSTOM_FONT_SELECTION,
    DEFAULT_REGULAR_FONT_OPTION_ID,
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
    regularFont: DEFAULT_REGULAR_FONT_OPTION_ID,
    displayFont: DEFAULT_REGULAR_FONT_OPTION_ID,
    hasCustomDisplayFont: false,
    customFonts: {},
    themeName: "",
    authorName: "",
    authorEmail: "",
    includeDarkMode: false,
    borderRadius: DEFAULT_BORDER_RADIUS_SCALE_ID,
} as const satisfies ThemeDraft;

// ---------------------------------------------------------------------------
// Actions
// ---------------------------------------------------------------------------

export type ThemeDraftAction =
    | { type: "SET_THEME_NAME"; themeName: string }
    | { type: "SET_AUTHOR_NAME"; authorName: string }
    | { type: "SET_AUTHOR_EMAIL"; authorEmail: string }
    | { type: "SET_INCLUDE_DARK_MODE"; includeDarkMode: boolean }
    | { type: "SET_CUSTOM_FONT"; slot: FontSlot; font: CustomFont }
    | { type: "REMOVE_CUSTOM_FONT"; slot: FontSlot }
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
        // Tekstfeltene skriver én action per tastetrykk, så bare mellomrom
        // foran navnet kan fjernes: en `trim()` ville spist mellomrommet i
        // «Merkevare AS» i samme øyeblikk som det ble skrevet.
        case "SET_THEME_NAME":
            return { ...state, themeName: action.themeName.trimStart() };

        case "SET_AUTHOR_NAME":
            return { ...state, authorName: action.authorName.trimStart() };

        case "SET_AUTHOR_EMAIL":
            return { ...state, authorEmail: action.authorEmail.trim() };

        case "SET_INCLUDE_DARK_MODE":
            return { ...state, includeDarkMode: action.includeDarkMode };

        case "SET_CUSTOM_FONT": {
            const customFonts = {
                ...state.customFonts,
                [action.slot]: action.font,
            };

            if (action.slot === "regular") {
                return {
                    ...state,
                    customFonts,
                    regularFont: CUSTOM_FONT_SELECTION,
                };
            }

            return {
                ...state,
                customFonts,
                displayFont: CUSTOM_FONT_SELECTION,
                hasCustomDisplayFont: true,
            };
        }

        // Uten fil går slotet tilbake til en standardfont. Display følger vanlig
        // font igjen, siden den ikke lenger er valgt eksplisitt.
        case "REMOVE_CUSTOM_FONT": {
            const { [action.slot]: removed, ...customFonts } =
                state.customFonts;

            if (!removed) {
                return state;
            }

            if (action.slot === "regular") {
                return {
                    ...state,
                    customFonts,
                    regularFont: DEFAULT_REGULAR_FONT_OPTION_ID,
                    displayFont: state.hasCustomDisplayFont
                        ? state.displayFont
                        : DEFAULT_REGULAR_FONT_OPTION_ID,
                };
            }

            return {
                ...state,
                customFonts,
                displayFont: state.regularFont,
                hasCustomDisplayFont: false,
            };
        }

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
            return {
                ...action.draft,
                themeName: action.draft.themeName.trim(),
            };

        default:
            action satisfies never;
            return state;
    }
}
