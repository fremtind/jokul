import type { Dispatch, ReactNode } from "react";
import type { BorderRadiusScaleId } from "../_shared/borderRadius";
import type { CustomFonts } from "../_shared/customFont";
import type { FontSelectionId } from "../_shared/fontOptions";
import type { ColorScheme, EditableLightDarkPalette } from "../generator/types";
import type { ThemeDraftAction } from "./themeDraftReducer";

export type ThemeDraft = {
    colorTokens: EditableLightDarkPalette;
    regularFont: FontSelectionId;
    displayFont: FontSelectionId;
    hasCustomDisplayFont: boolean;
    customFonts: CustomFonts;
    themeName: string;
    /** Den som har laget temaet, slik vi vet hvem vi svarer når det kommer inn. */
    authorName: string;
    authorEmail: string;
    includeDarkMode: boolean;
    borderRadius: BorderRadiusScaleId;
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
