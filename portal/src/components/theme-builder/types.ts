export const COLOR_VARIANTS = [
    "neutral",
    "accent",
    "warning",
    "success",
    "info",
    "error",
] as const;

export const COLOR_ROLES = {
    background: ["page", "container", "action"],
    text: ["default", "subdued", "on-action"],
    border: ["strong", "default", "subdued"],
} as const;

export type ColorVariant = (typeof COLOR_VARIANTS)[number];
export type ColorGroup = keyof typeof COLOR_ROLES;
export type TokenRole = (typeof COLOR_ROLES)[ColorGroup][number];
export type ThemeMode = "light" | "dark";
export type PreviewColorScheme = "system" | "light" | "dark";
export type EditorMode = "visual" | "json";

export type ColorTokenValue = {
    light: string;
    dark: string;
};

type ColorTokenNode = {
    value: ColorTokenValue;
};

type ColorTokensByGroup = {
    [Group in ColorGroup]: Record<
        (typeof COLOR_ROLES)[Group][number],
        ColorTokenNode
    >;
};

type ColorTokensByVariant = {
    [Variant in ColorVariant]: ColorTokensByGroup;
};

export type ColorSchemeSource = {
    color: {
        type: "colorScheme";
    } & ColorTokensByVariant;
};

export type EditableColorToken = {
    id: string;
    path: readonly ["color", ColorVariant, ColorGroup, TokenRole];
    variant: ColorVariant;
    group: ColorGroup;
    role: TokenRole;
    label: string;
    light: string;
    dark: string;
};

export type ThemeBuilderState = {
    activeVariant: ColorVariant;
    brandName: string;
    previewColorScheme: PreviewColorScheme;
    tokens: EditableColorToken[];
};
