import type { CSSProperties } from "react";
import {
    COLOR_ROLES,
    COLOR_VARIANTS,
    type ColorGroup,
    type ColorSchemeSource,
    type ColorVariant,
    type EditableColorToken,
    type PreviewColorScheme,
} from "./types";

const HEX_COLOR_PATTERN = /^#[0-9A-F]{6}$/;
const EXPECTED_TOKEN_COUNT =
    COLOR_VARIANTS.length *
    Object.values(COLOR_ROLES).reduce(
        (count, roles) => count + roles.length,
        0,
    );

export function flattenColorTokens(
    source: ColorSchemeSource,
): EditableColorToken[] {
    const tokens: EditableColorToken[] = [];

    for (const variant of COLOR_VARIANTS) {
        for (const group of Object.keys(COLOR_ROLES) as ColorGroup[]) {
            for (const role of COLOR_ROLES[group]) {
                const tokenValue = source.color[variant][group][role].value;

                tokens.push({
                    id: `${variant}.${group}.${role}`,
                    path: ["color", variant, group, role],
                    variant,
                    group,
                    role,
                    label: formatTokenLabel(role),
                    light: tokenValue.light,
                    dark: tokenValue.dark,
                });
            }
        }
    }

    return tokens;
}

export function buildColorSchemeExport(
    tokens: EditableColorToken[],
): ColorSchemeSource {
    const color = {
        type: "colorScheme",
    } as ColorSchemeSource["color"];

    for (const variant of COLOR_VARIANTS) {
        color[variant] = {
            background: {
                page: { value: { light: "", dark: "" } },
                container: { value: { light: "", dark: "" } },
                action: { value: { light: "", dark: "" } },
            },
            text: {
                default: { value: { light: "", dark: "" } },
                subdued: { value: { light: "", dark: "" } },
                "on-action": { value: { light: "", dark: "" } },
            },
            border: {
                strong: { value: { light: "", dark: "" } },
                default: { value: { light: "", dark: "" } },
                subdued: { value: { light: "", dark: "" } },
            },
        };
    }

    for (const token of tokens) {
        color[token.variant][token.group][token.role] = {
            value: {
                light: token.light,
                dark: token.dark,
            },
        };
    }

    return { color };
}

export function parseColorSchemeEditorValue(value: string):
    | {
          ok: true;
          tokens: EditableColorToken[];
      }
    | {
          ok: false;
          error: string;
      } {
    let parsed: unknown;

    try {
        parsed = JSON.parse(value);
    } catch {
        return {
            ok: false,
            error: "JSON-en kan ikke parses. Kontroller komma og klammer.",
        };
    }

    try {
        const tokens = flattenColorTokens(parsed as ColorSchemeSource);

        if (tokens.length !== EXPECTED_TOKEN_COUNT) {
            return {
                ok: false,
                error: "JSON-en mangler en eller flere fargetokens.",
            };
        }

        if (tokensHaveValidationErrors(tokens)) {
            return {
                ok: false,
                error: "Alle verdier må bruke formatet #RRGGBB.",
            };
        }

        return {
            ok: true,
            tokens,
        };
    } catch {
        return {
            ok: false,
            error: "JSON-en matcher ikke formatet for color tokens.",
        };
    }
}

export function getTokensForVariant(
    tokens: EditableColorToken[],
    variant: ColorVariant,
): EditableColorToken[] {
    return tokens.filter((token) => token.variant === variant);
}

export function normalizeHexValue(value: string): string {
    return value.replace(/\s+/g, "").toUpperCase();
}

export function getHexValidationMessage(value: string): string | undefined {
    if (HEX_COLOR_PATTERN.test(value)) {
        return undefined;
    }

    return "Bruk formatet #RRGGBB";
}

export function getColorInputValue(value: string): string {
    return HEX_COLOR_PATTERN.test(value) ? value : "#000000";
}

export function tokensHaveValidationErrors(
    tokens: EditableColorToken[],
): boolean {
    return tokens.some(
        (token) =>
            Boolean(getHexValidationMessage(token.light)) ||
            Boolean(getHexValidationMessage(token.dark)),
    );
}

export function areTokensEqual(
    left: EditableColorToken[],
    right: EditableColorToken[],
): boolean {
    if (left.length !== right.length) {
        return false;
    }

    return left.every((token, index) => {
        const other = right[index];

        return (
            token.id === other.id &&
            token.light === other.light &&
            token.dark === other.dark
        );
    });
}

export function getBrandSlug(brandName: string): string {
    const slug = brandName
        .trim()
        .toLowerCase()
        .replaceAll("æ", "ae")
        .replaceAll("ø", "o")
        .replaceAll("å", "a")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

    return slug || "custom-brand";
}

export function getThemeBuilderPreviewStyle(
    tokens: EditableColorToken[],
    activeVariant: ColorVariant,
    previewColorScheme: PreviewColorScheme,
): CSSProperties {
    const style: CSSProperties & Record<string, string> = {};

    for (const token of tokens) {
        style[`--jkl-color-${token.variant}-${token.group}-${token.role}`] =
            `light-dark(${token.light}, ${token.dark})`;
    }

    for (const token of tokens) {
        if (token.variant !== activeVariant) {
            continue;
        }

        style[`--jkl-color-${token.group}-${token.role}`] =
            `light-dark(${token.light}, ${token.dark})`;
    }

    if (previewColorScheme !== "system") {
        style.colorScheme = previewColorScheme;
    }

    return style;
}

function formatTokenLabel(role: string): string {
    return role
        .split("-")
        .map((part) => `${part[0].toUpperCase()}${part.slice(1)}`)
        .join(" ");
}
