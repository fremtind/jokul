import type { FontSlot } from "../_shared/customFont";
import type { FontSelectionId } from "../_shared/fontOptions";
import type { ColorScheme } from "../generator/types";
import type { ThemeDraft } from "./types";

type TokenTree = Record<string, Record<string, Record<string, string>>>;

export function getColorTokenValue(
    draft: ThemeDraft,
    group: string,
    role: string,
    colorScheme: ColorScheme,
): string {
    return (draft.colorTokens as TokenTree)[group]?.[role]?.[colorScheme] ?? "";
}

export function getFontSelection(
    draft: ThemeDraft,
    slot: FontSlot,
): FontSelectionId {
    return slot === "regular" ? draft.regularFont : draft.displayFont;
}
