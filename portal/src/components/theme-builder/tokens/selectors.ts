import { TOKEN_SECTIONS } from "./definitions";
import type { ColorToken, TokenSection } from "./types";
import { getTokenId } from "./types";

export type TokenFilterState = {
    filter: string;
    showOnlyEdited: boolean;
    editedTokenIds: ReadonlySet<string>;
};

export function tokenMatchesFilter(
    token: Pick<ColorToken, "id">,
    filter: string,
): boolean {
    if (!filter.trim()) return true;
    return token.id.toLowerCase().includes(filter.trim().toLowerCase());
}

export function filterTokens(
    tokens: ColorToken[],
    { filter, showOnlyEdited, editedTokenIds }: TokenFilterState,
): ColorToken[] {
    if (!filter && !showOnlyEdited) return tokens;

    return tokens.filter((token) => {
        if (showOnlyEdited && !editedTokenIds.has(getTokenId(token))) {
            return false;
        }
        return tokenMatchesFilter(token, filter);
    });
}

export function groupTokensBySection(
    tokens: ColorToken[],
): Map<TokenSection, ColorToken[]> {
    const grouped = new Map<TokenSection, ColorToken[]>();
    for (const section of TOKEN_SECTIONS) grouped.set(section, []);

    for (const token of tokens) {
        grouped.get(token.section)?.push(token);
    }

    return grouped;
}
