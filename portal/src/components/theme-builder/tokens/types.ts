export type ThemeMode = "light" | "dark";
export type EditorMode = "visual" | "json";
export type ContrastRequirementId = "text" | "ui";
export type TokenSection = "root" | string;
export type TokenGroup = string;
export type TokenRole = string;

export type ColorToken = {
    /** Stien under `color`, f.eks. `["warning", "background", "page"]`. */
    path: string[];
    /** Stabil sti uten `color`, f.eks. `warning.background.page`. */
    id: string;
    /** Visningsseksjon: `root` for root-tokens, ellers første funksjonelle segment. */
    section: TokenSection;
    group: TokenGroup;
    role: TokenRole;
} & Record<ThemeMode, string>;

export type ColorTokenDefinition = Pick<
    ColorToken,
    "path" | "id" | "section" | "group" | "role"
>;

type MutableJsonObject = Record<string, unknown>;

export type ColorSchemeJson = {
    color: { type: "colorScheme" } & MutableJsonObject;
};

export type ColorTokenNode = { value: Record<ThemeMode, string> };

export const getTokenId = (token: Pick<ColorToken, "id">): string => token.id;
