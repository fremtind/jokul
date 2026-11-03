import { useMemo } from "react";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import type { ThemeDraftResetScope } from "../_context/themeDraftReducer";
import type { BorderRadiusScaleId } from "../_shared/borderRadius";
import type { CustomFont, FontSlot } from "../_shared/customFont";
import {
    CUSTOM_FONT_SELECTION,
    type FontOptionId,
} from "../_shared/fontOptions";
import type { ColorScheme } from "../generator/types";

/**
 * Alle endringer av utkastet samlet ett sted. Komponentene kaller navngitte
 * funksjoner og trenger ikke kjenne action-formatet.
 */
export function useThemeDraftActions() {
    const { dispatch } = useThemeDraft();

    return useMemo(
        () => ({
            setThemeName: (themeName: string) =>
                dispatch({ type: "SET_THEME_NAME", themeName }),
            setIncludeDarkMode: (includeDarkMode: boolean) =>
                dispatch({ type: "SET_INCLUDE_DARK_MODE", includeDarkMode }),
            setBoldTitles: (boldTitles: boolean) =>
                dispatch({ type: "SET_BOLD_TITLES", boldTitles }),
            setBorderRadius: (borderRadius: BorderRadiusScaleId) =>
                dispatch({ type: "SET_BORDER_RADIUS", borderRadius }),
            selectFont: (slot: FontSlot, value: string) => {
                if (value === CUSTOM_FONT_SELECTION) {
                    dispatch({ type: "SELECT_CUSTOM_FONT", slot });
                    return;
                }

                const font = value as FontOptionId;
                dispatch(
                    slot === "regular"
                        ? { type: "SET_REGULAR_FONT", font }
                        : { type: "SET_DISPLAY_FONT", font },
                );
            },
            setCustomFont: (slot: FontSlot, font: CustomFont) =>
                dispatch({ type: "SET_CUSTOM_FONT", slot, font }),
            removeCustomFont: (slot: FontSlot) =>
                dispatch({ type: "REMOVE_CUSTOM_FONT", slot }),
            applyBaseColor: (value: string) =>
                dispatch({ type: "APPLY_BASE_COLOR", value }),
            updateColorToken: (
                group: string,
                role: string,
                colorScheme: ColorScheme,
                value: string,
            ) =>
                dispatch({
                    type: "UPDATE_COLOR_TOKEN",
                    group,
                    role,
                    colorScheme,
                    value,
                }),
            reset: (scope?: ThemeDraftResetScope) =>
                dispatch({ type: "RESET_DRAFT", scope }),
        }),
        [dispatch],
    );
}
