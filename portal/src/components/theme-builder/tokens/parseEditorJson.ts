import { THEME_MODES, TOKEN_DEFINITIONS } from "./definitions";
import { isRecord, readPath } from "./json";
import { tokensFromSchema } from "./serialization";
import { tokenValuesAreValid } from "./state";
import type { ColorSchemeJson, ColorToken } from "./types";

export function parseEditorJson(
    value: string,
): { ok: true; tokens: ColorToken[] } | { ok: false; error: string } {
    let parsed: unknown;
    try {
        parsed = JSON.parse(value);
    } catch {
        return {
            ok: false,
            error: "JSON-en kan ikke parses. Kontroller komma og klammer.",
        };
    }

    const missingTokenPaths = findMissingTokenPaths(parsed);
    if (missingTokenPaths.length > 0) {
        const sample = missingTokenPaths.slice(0, 3).join(", ");
        const suffix =
            missingTokenPaths.length > 3
                ? ` (+${missingTokenPaths.length - 3} til)`
                : "";
        return {
            ok: false,
            error: `JSON-en mangler ${missingTokenPaths.length} ${missingTokenPaths.length === 1 ? "token" : "tokens"}: ${sample}${suffix}.`,
        };
    }

    let tokens: ColorToken[];
    try {
        tokens = tokensFromSchema(parsed as ColorSchemeJson);
    } catch {
        return {
            ok: false,
            error: "JSON-en matcher ikke formatet for color tokens.",
        };
    }

    if (!tokenValuesAreValid(tokens)) {
        return { ok: false, error: "Alle verdier må bruke formatet #RRGGBB." };
    }
    return { ok: true, tokens };
}

function findMissingTokenPaths(source: unknown): string[] {
    if (!isRecord(source)) {
        return TOKEN_DEFINITIONS.map((definition) => `color.${definition.id}`);
    }

    const colorRoot = source.color;
    if (!isRecord(colorRoot)) {
        return TOKEN_DEFINITIONS.map((definition) => `color.${definition.id}`);
    }

    const missing: string[] = [];
    for (const definition of TOKEN_DEFINITIONS) {
        const tokenNode = readPath(colorRoot, definition.path);
        if (!isRecord(tokenNode)) {
            missing.push(`color.${definition.id}`);
            continue;
        }

        const value = tokenNode.value;
        if (!isRecord(value)) {
            missing.push(`color.${definition.id}`);
            continue;
        }

        if (THEME_MODES.some((mode) => typeof value[mode] !== "string")) {
            missing.push(`color.${definition.id}`);
        }
    }
    return missing;
}
