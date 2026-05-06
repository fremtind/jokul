import schema from "../../../../../packages/jokul/src/tokens/color.tokens.json";
import { isColorTokenNode, isRecord } from "./json";
import type {
    ColorTokenDefinition,
    ThemeMode,
    TokenGroup,
    TokenRole,
    TokenSection,
} from "./types";

export const ROOT_TOKEN_SECTION = "root";

const ROOT_COLOR_GROUPS = new Set(["background", "text", "border"]);

function createTokenDefinition(path: string[]): ColorTokenDefinition {
    const isRootToken = ROOT_COLOR_GROUPS.has(path[0]);
    const group = isRootToken ? path[0] : path[1];
    const role = path[path.length - 1];

    return {
        path,
        id: path.join("."),
        section: isRootToken ? ROOT_TOKEN_SECTION : path[0],
        group,
        role,
    };
}

function collectTokenDefinitions(
    node: Record<string, unknown>,
    path: string[] = [],
): ColorTokenDefinition[] {
    const definitions: ColorTokenDefinition[] = [];

    for (const [key, value] of Object.entries(node)) {
        if (key === "type") continue;

        const nextPath = [...path, key];
        if (isColorTokenNode(value)) {
            definitions.push(createTokenDefinition(nextPath));
            continue;
        }
        if (isRecord(value)) {
            definitions.push(...collectTokenDefinitions(value, nextPath));
        }
    }

    return definitions;
}

export const TOKEN_DEFINITIONS: ColorTokenDefinition[] =
    collectTokenDefinitions(schema.color as Record<string, unknown>);

export const TOKEN_SECTIONS: TokenSection[] = TOKEN_DEFINITIONS.reduce(
    (sections, definition) => {
        if (!sections.includes(definition.section)) {
            sections.push(definition.section);
        }
        return sections;
    },
    [] as TokenSection[],
);

export const TOKEN_ROLES_BY_SECTION = TOKEN_DEFINITIONS.reduce(
    (acc, { section, group, role }) => {
        acc[section] ??= {};
        acc[section][group] ??= [];
        if (!acc[section][group].includes(role)) {
            acc[section][group].push(role);
        }
        return acc;
    },
    {} as Record<TokenSection, Record<TokenGroup, TokenRole[]>>,
);

export const THEME_MODES = Object.keys(
    schema.color.background.page.value,
) as ThemeMode[];
