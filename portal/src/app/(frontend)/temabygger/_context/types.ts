import type { Dispatch, ReactNode } from "react";

import type { FontOptionId } from "../_shared/fontOptions";
import type { ColorScheme, EditableLightDarkPalette } from "../generator/types";
import type { ThemeDraftHistoryAction } from "./themeDraftHistoryReducer";

export type ThemeDraft = {
    colorTokens: EditableLightDarkPalette;
    regularFont: FontOptionId;
    displayFont: FontOptionId;
    hasCustomDisplayFont: boolean;
    themeName: string;
    includeDarkMode: boolean;
};

export type ThemeDraftColorTokenValue = Record<ColorScheme, string>;

export type ThemeDraftContextState = {
    draft: ThemeDraft;
    dispatch: Dispatch<ThemeDraftHistoryAction>;
    storageLoaded: boolean;
    canUndo: boolean;
    canRedo: boolean;
};

export type ThemeDraftProviderProps = {
    children: ReactNode;
    initialDraft?: ThemeDraft;
};
