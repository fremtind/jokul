import { ColorSpace, contrastWCAG21, sRGB } from "colorjs.io/fn";
import type { CSSProperties } from "react";
import {
    COLOR_ROLE_ENTRIES,
    type ColorSchemeSource,
    type ColorVariant,
    type EditableColorToken,
} from "./types";

const HEX_COLOR_PATTERN = /^#[0-9A-F]{6}$/;
const EXPECTED_TOKEN_COUNT = COLOR_ROLE_ENTRIES.length;
const PREVIEW_BASE_VARIANT: ColorVariant = "neutral";
const WCAG_TEXT_CONTRAST_AAA = 7;
const WCAG_TEXT_CONTRAST_AA = 4.5;
const WCAG_UI_CONTRAST_MINIMUM = 3;

export type ContrastRequirementId = "text" | "ui";

export type ContrastStatus = {
    label: string;
    variant: "error" | "info" | "success" | "warning";
};

export type ContrastRequirementDefinition = {
    label: string;
    minimum: number;
};

export type ContrastEvaluation =
    | {
          kind: "invalid";
      }
    | {
          kind: "measured";
          passes: boolean;
          ratio: number;
          status: ContrastStatus;
      };

export const CONTRAST_REQUIREMENTS: Record<
    ContrastRequirementId,
    ContrastRequirementDefinition
> = {
    text: {
        label: "AA tekst",
        minimum: WCAG_TEXT_CONTRAST_AA,
    },
    ui: {
        label: "Ikke-tekst",
        minimum: WCAG_UI_CONTRAST_MINIMUM,
    },
};

ColorSpace.register(sRGB);

export function flattenColorTokens(
    source: ColorSchemeSource,
): EditableColorToken[] {
    const tokens: EditableColorToken[] = [];

    for (const { variant, group, role } of COLOR_ROLE_ENTRIES) {
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

    return tokens;
}

export function buildColorSchemeExport(
    tokens: EditableColorToken[],
): ColorSchemeSource {
    const color = {
        type: "colorScheme",
    } as ColorSchemeSource["color"];

    for (const { variant, group, role } of COLOR_ROLE_ENTRIES) {
        color[variant] ??= {} as ColorSchemeSource["color"][ColorVariant];
        color[variant][group] ??= {};
        color[variant][group][role] = { value: { light: "", dark: "" } };
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

export function getColorContrastRatio(
    foreground: string,
    background: string,
): number | undefined {
    if (
        !HEX_COLOR_PATTERN.test(foreground) ||
        !HEX_COLOR_PATTERN.test(background)
    ) {
        return undefined;
    }

    return contrastWCAG21(foreground, background);
}

export function evaluateColorContrast(
    foreground: string | undefined,
    background: string | undefined,
    requirementId: ContrastRequirementId,
): ContrastEvaluation {
    if (!foreground || !background) {
        return { kind: "invalid" };
    }

    const ratio = getColorContrastRatio(foreground, background);

    if (!ratio) {
        return { kind: "invalid" };
    }

    const requirement = CONTRAST_REQUIREMENTS[requirementId];

    return {
        kind: "measured",
        passes: ratio >= requirement.minimum,
        ratio,
        status: getContrastStatus(ratio, requirementId),
    };
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

export function buildThemePreviewScopeStyle(
    tokens: EditableColorToken[],
): CSSProperties {
    const style: CSSProperties & Record<string, string> = {};

    for (const token of tokens) {
        style[`--jkl-color-${token.variant}-${token.group}-${token.role}`] =
            `light-dark(${token.light}, ${token.dark})`;
    }

    for (const token of tokens) {
        if (token.variant !== PREVIEW_BASE_VARIANT) {
            continue;
        }

        style[`--jkl-color-${token.group}-${token.role}`] =
            `light-dark(${token.light}, ${token.dark})`;
    }

    return style;
}

function getContrastStatus(
    ratio: number,
    requirementId: ContrastRequirementId,
): ContrastStatus {
    if (ratio >= WCAG_TEXT_CONTRAST_AAA) {
        return { label: "AAA tekst", variant: "success" };
    }

    if (
        requirementId === "text" &&
        ratio >= CONTRAST_REQUIREMENTS.text.minimum
    ) {
        return { label: "AA tekst", variant: "warning" };
    }

    if (requirementId === "ui" && ratio >= CONTRAST_REQUIREMENTS.ui.minimum) {
        return { label: "Ikke-tekst", variant: "info" };
    }

    return { label: "Ikke bestått", variant: "error" };
}

function formatTokenLabel(role: string): string {
    return role
        .split("-")
        .map((part) => `${part[0].toUpperCase()}${part.slice(1)}`)
        .join(" ");
}
