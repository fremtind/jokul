import {
    type BorderRadiusScaleId,
    DEFAULT_BORDER_RADIUS_SCALE_ID,
} from "../_shared/borderRadius";
import type { CustomFont, FontSlot } from "../_shared/customFont";
import {
    CUSTOM_FONT_SELECTION,
    DEFAULT_REGULAR_FONT_OPTION_ID,
    type FontSelectionId,
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
    includeDarkMode: false,
    boldTitles: false,
    borderRadius: DEFAULT_BORDER_RADIUS_SCALE_ID,
} as const satisfies ThemeDraft;

// ---------------------------------------------------------------------------
// Actions
// ---------------------------------------------------------------------------

export type ThemeDraftAction =
    | { type: "SET_THEME_NAME"; themeName: string }
    | { type: "SET_INCLUDE_DARK_MODE"; includeDarkMode: boolean }
    | { type: "SET_BOLD_TITLES"; boldTitles: boolean }
    | { type: "SET_BORDER_RADIUS"; borderRadius: BorderRadiusScaleId }
    | { type: "SET_FONT"; slot: FontSlot; font: FontSelectionId }
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
    | { type: "SET_DRAFT"; draft: ThemeDraft }
    | { type: "RESET_DRAFT"; scope?: ThemeDraftResetScope };

/**
 * Stegene som har noe å nullstille. `lever-over` er utelatt: det steget
 * endrer ingenting i utkastet.
 */
export type ThemeDraftResetScope =
    | "identitet"
    | "grunnfarge"
    | "farger"
    | "mork-modus"
    | "hjorner";

// ---------------------------------------------------------------------------
// Reducer
// ---------------------------------------------------------------------------

export function themeDraftReducer(
    state: ThemeDraft,
    action: ThemeDraftAction,
): ThemeDraft {
    switch (action.type) {
        case "SET_THEME_NAME":
            return { ...state, themeName: action.themeName.trim() };

        case "SET_INCLUDE_DARK_MODE":
            return { ...state, includeDarkMode: action.includeDarkMode };

        case "SET_BOLD_TITLES":
            return { ...state, boldTitles: action.boldTitles };

        case "SET_BORDER_RADIUS":
            return { ...state, borderRadius: action.borderRadius };

        /**
         * «Annet» velges før fila finnes, og er det som gjør opplastingsfeltet
         * synlig. Fram til en fil ligger der, faller slotet tilbake til en
         * standardfont i forhåndsvisningen.
         *
         * Valget treffer bare sitt eget slot. Slotene har hver sin fil, så et
         * valg som smittet over på det andre ville pekt på en fil som ikke er
         * lastet opp.
         */
        case "SET_FONT":
            if (action.slot === "regular") {
                return {
                    ...state,
                    regularFont: action.font,
                    displayFont:
                        state.hasCustomDisplayFont ||
                        action.font === CUSTOM_FONT_SELECTION
                            ? state.displayFont
                            : action.font,
                };
            }

            return {
                ...state,
                displayFont: action.font,
                hasCustomDisplayFont: true,
            };

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

        // Valget står igjen på «Annet», slik at feltet blir stående åpent for en
        // ny fil. Å hoppe tilbake til en standardfont ville skjult feltet under
        // brukeren idet de byttet ut fila.
        case "REMOVE_CUSTOM_FONT": {
            const { [action.slot]: removed, ...customFonts } =
                state.customFonts;

            if (!removed) {
                return state;
            }

            return { ...state, customFonts };
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

        // Egen action, ikke `SET_DRAFT` med utgangspunktet: nullstilling er en
        // endring brukeren har gjort, og skal kunne angres som alt annet.
        case "RESET_DRAFT":
            return action.scope
                ? resetScope(state, action.scope)
                : INITIAL_STATE;

        default:
            action satisfies never;
            return state;
    }
}

/** Nullstiller bare det ett steg har ansvar for, og lar resten stå. */
function resetScope(
    state: ThemeDraft,
    scope: ThemeDraftResetScope,
): ThemeDraft {
    switch (scope) {
        case "identitet":
            return {
                ...state,
                themeName: INITIAL_STATE.themeName,
                regularFont: INITIAL_STATE.regularFont,
                displayFont: INITIAL_STATE.displayFont,
                hasCustomDisplayFont: INITIAL_STATE.hasCustomDisplayFont,
                customFonts: INITIAL_STATE.customFonts,
                boldTitles: INITIAL_STATE.boldTitles,
            };

        case "grunnfarge":
            return { ...state, colorTokens: INITIAL_STATE.colorTokens };

        case "farger":
            return {
                ...state,
                colorTokens: resetColorScheme(state.colorTokens, "light"),
            };

        case "mork-modus":
            return {
                ...state,
                colorTokens: resetColorScheme(state.colorTokens, "dark"),
            };

        case "hjorner":
            return { ...state, borderRadius: INITIAL_STATE.borderRadius };

        default:
            scope satisfies never;
            return state;
    }
}

function resetColorScheme(
    tokens: EditableLightDarkPalette,
    colorScheme: ColorScheme,
): EditableLightDarkPalette {
    type Tokens = Record<string, Record<string, Record<ColorScheme, string>>>;
    const current = tokens as Tokens;
    const initial = INITIAL_COLOR_TOKENS as Tokens;

    return Object.fromEntries(
        Object.entries(current).map(([group, roles]) => [
            group,
            Object.fromEntries(
                Object.entries(roles).map(([role, token]) => [
                    role,
                    {
                        ...token,
                        [colorScheme]: initial[group]?.[role]?.[colorScheme],
                    },
                ]),
            ),
        ]),
    ) as EditableLightDarkPalette;
}
