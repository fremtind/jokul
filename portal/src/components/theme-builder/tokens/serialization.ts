import schema from "../../../../../packages/jokul/src/tokens/color.tokens.json";
import { THEME_MODES, TOKEN_DEFINITIONS } from "./definitions";
import { isColorTokenNode, isRecord } from "./json";
import type {
    ColorSchemeJson,
    ColorToken,
    ColorTokenNode,
    ThemeMode,
} from "./types";

type MutableJsonObject = Record<string, unknown>;

function readTokenNode(
    source: ColorSchemeJson,
    path: string[],
): ColorTokenNode | undefined {
    let node: unknown = source.color;
    for (const segment of path) {
        if (!isRecord(node)) return undefined;
        node = node[segment];
    }
    return isColorTokenNode(node) ? node : undefined;
}

export function tokensFromSchema(
    source: ColorSchemeJson = schema as unknown as ColorSchemeJson,
): ColorToken[] {
    return TOKEN_DEFINITIONS.map((definition) => {
        const value = readTokenNode(source, definition.path)?.value;
        const modes = Object.fromEntries(
            THEME_MODES.map((mode) => [mode, value?.[mode] ?? ""]),
        ) as Record<ThemeMode, string>;
        return { ...definition, path: [...definition.path], ...modes };
    });
}

export function tokensToSchema(tokens: ColorToken[]): ColorSchemeJson {
    const color = { type: "colorScheme" } as ColorSchemeJson["color"];

    for (const token of tokens) {
        let node: MutableJsonObject = color;
        for (const segment of token.path.slice(0, -1)) {
            node[segment] ??= {};
            node = node[segment] as MutableJsonObject;
        }

        const value = Object.fromEntries(
            THEME_MODES.map((mode) => [mode, token[mode]]),
        ) as Record<ThemeMode, string>;
        node[token.path[token.path.length - 1]] = { value };
    }

    return { color };
}
