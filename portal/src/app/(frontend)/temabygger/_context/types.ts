import type { Dispatch, ReactNode } from "react";
import type { FontOptionId } from "../_shared/fontOptions";
import type { ColorScheme, EditableLightDarkPalette } from "../generator/types";
import type { ThemeDraftAction } from "./themeDraftReducer";

export type ThemeDraft = {
    colorTokens: EditableLightDarkPalette;
    regularFont: FontOptionId;
    displayFont: FontOptionId;
    themeName: string;
    includeDarkMode: boolean;
};

export type ThemeDraftColorTokenValue = Record<ColorScheme, string>;

export type ThemeDraftContextState = {
    draft: ThemeDraft;
    dispatch: Dispatch<ThemeDraftAction>;
};

export type ThemeDraftProviderProps = {
    children: ReactNode;
    initialDraft?: ThemeDraft;
};
