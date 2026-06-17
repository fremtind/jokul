import type { ReactNode } from "react";
import type { FontOptionId } from "../_shared/fontOptions";
import type { ColorScheme, EditableLightDarkPalette } from "../generator/types";

export type ThemeDraftColorTokenValue = Record<ColorScheme, string>;
export type ThemeDraftColorTokensState = EditableLightDarkPalette;

export type ThemeDraftColorState = {
    tokens: ThemeDraftColorTokensState;
    applyBaseColor: (value: string) => void;
    updateToken: (
        group: string,
        role: string,
        colorScheme: ColorScheme,
        value: string,
    ) => void;
    replaceTokens: (nextColorTokens: ThemeDraftColorTokensState) => void;
};

export type ThemeDraftTypographyState = {
    regularFont: FontOptionId;
    displayFont: FontOptionId;
    setRegularFont: (id: FontOptionId) => void;
    setDisplayFont: (id: FontOptionId) => void;
};

export type ThemeDraftIdentityState = {
    themeName: string;
    setThemeName: (name: string) => void;
};

export type ThemeDraftSettingsState = {
    includeDarkMode: boolean;
    setIncludeDarkMode: (includeDarkMode: boolean) => void;
};

export type ThemeDraftContextState = {
    color: ThemeDraftColorState;
    identity: ThemeDraftIdentityState;
    saveThemeDraft: () => void;
    settings: ThemeDraftSettingsState;
    typography: ThemeDraftTypographyState;
};

export type ThemeDraftProviderProps = {
    children: ReactNode;
};
