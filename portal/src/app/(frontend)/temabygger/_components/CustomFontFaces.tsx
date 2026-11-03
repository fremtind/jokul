"use client";

import { useThemeDraft } from "../_context/ThemeDraftContext";
import { buildCustomFontFaceCss } from "../_shared/customFont";

/**
 * `@font-face` kan ikke uttrykkes som custom property, så opplastede fonter må
 * erklæres i et stilark. Reglene gjelder hele dokumentet uansett hvor de står,
 * og legges derfor ett sted — ikke i hver temaflate.
 */
export function CustomFontFaces() {
    const { draft } = useThemeDraft();
    const css = buildCustomFontFaceCss(draft.customFonts);

    if (!css) {
        return null;
    }

    return <style>{css}</style>;
}
