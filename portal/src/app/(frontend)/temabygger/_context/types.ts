import type { JokulThemeFile } from "@fremtind/jokul/theme";
import type { ColorScheme } from "@fremtind/jokul/utilities";
import type { Dispatch, ReactNode } from "react";
import type { ThemeDraftAction } from "./themeDraftReducer";

export type ThemeDraftColorTokenValue = Record<ColorScheme, string>;

export type ThemeDraftContextState = {
    draft: JokulThemeFile;
    dispatch: Dispatch<ThemeDraftAction>;
    storageLoaded: boolean;
};

export type ThemeDraftProviderProps = {
    children: ReactNode;
    initialDraft?: JokulThemeFile;
};
