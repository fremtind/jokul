import tokenRoles from "../../../../packages/jokul/src/tokens";

type ColorRoleTokens = (typeof tokenRoles)["color"];

export type ColorVariant = keyof ColorRoleTokens & string;
export type ColorGroup = keyof ColorRoleTokens[ColorVariant] & string;
export type TokenRole = {
    [Variant in ColorVariant]: {
        [Group in keyof ColorRoleTokens[Variant] &
            string]: keyof ColorRoleTokens[Variant][Group] & string;
    }[keyof ColorRoleTokens[Variant] & string];
}[ColorVariant] &
    string;
export type ColorRoleEntry = {
    variant: ColorVariant;
    group: ColorGroup;
    role: TokenRole;
};
export type ThemeMode = "light" | "dark";
export type EditorMode = "visual" | "json";

export const COLOR_VARIANTS = Object.keys(tokenRoles.color) as ColorVariant[];

export const COLOR_ROLE_ENTRIES = Object.entries(tokenRoles.color).flatMap(
    ([variant, groups]) =>
        Object.entries(groups).flatMap(([group, roles]) =>
            Object.keys(roles).map((role) => ({
                variant,
                group,
                role,
            })),
        ),
) as ColorRoleEntry[];

export const COLOR_ROLES = COLOR_ROLE_ENTRIES.reduce(
    (rolesByGroup, { group, role }) => {
        rolesByGroup[group] ??= [];

        if (!rolesByGroup[group].includes(role)) {
            rolesByGroup[group].push(role);
        }

        return rolesByGroup;
    },
    {} as Record<ColorGroup, TokenRole[]>,
);

export type ColorTokenValue = {
    light: string;
    dark: string;
};

type ColorTokenNode = {
    value: ColorTokenValue;
};

type ColorTokensByGroup = {
    [Group in ColorGroup]: Record<string, ColorTokenNode>;
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
    brandName: string;
    tokens: EditableColorToken[];
};
