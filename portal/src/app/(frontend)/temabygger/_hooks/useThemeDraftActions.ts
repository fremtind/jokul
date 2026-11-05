import { useMemo } from "react";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import type { CustomFont, FontSlot } from "../_shared/customFont";
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
            setAuthorName: (authorName: string) =>
                dispatch({ type: "SET_AUTHOR_NAME", authorName }),
            setAuthorEmail: (authorEmail: string) =>
                dispatch({ type: "SET_AUTHOR_EMAIL", authorEmail }),
            setIncludeDarkMode: (includeDarkMode: boolean) =>
                dispatch({ type: "SET_INCLUDE_DARK_MODE", includeDarkMode }),
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
        }),
        [dispatch],
    );
}
