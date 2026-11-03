import colorMetadataLightFile from "../../tokens/metadata/color.metadata.light.json" with {
    type: "json",
};
import {
    COLOR_SCHEMES,
    type EditableLightDarkPalette,
    type HexColor,
} from "../colors/types.js";

export const THEME_FILE_VERSION = 1;

/** En ferdig oppløst font, slik den skrives til `font.family.*` og `font.weight.*` i tokens. */
export type JokulThemeFont = {
    family: string;
    weight: {
        normal: string;
        bold: string;
    };
};

export type JokulThemeFonts = {
    regular: JokulThemeFont;
    display: JokulThemeFont;
};

/**
 * Filformatet temabyggeren eksporterer, og som `jokul theme build` leser.
 *
 * `name` brukes som `data-brand`-verdi, i filnavn og i Sass-variabler, og må
 * derfor være på kebab-case (f.eks. `"mitt-tema"`).
 */
export type JokulThemeFile = {
    version: typeof THEME_FILE_VERSION;
    name: string;
    colorTokens: EditableLightDarkPalette;
    includeDarkMode: boolean;
    fonts?: JokulThemeFonts;
};

export type ThemeFileValidationResult =
    | { valid: true; theme: JokulThemeFile }
    | { valid: false; errors: string[] };

const HEX_COLOR_PATTERN = /^#[0-9a-fA-F]{6}$/;
const THEME_NAME_PATTERN = /^[a-z][a-z0-9]*(-[a-z0-9]+)*$/;

/** Sann når verdien matcher `#RRGGBB`. Case-insensitiv ved input — `normalizeHex` uppercaser ved lagring. */
export const isHex = (value: string): value is HexColor =>
    HEX_COLOR_PATTERN.test(value);

/** Stripper mellomrom og gjør om til store bokstaver — stabil form for lagring og sammenligning. */
export const normalizeHex = (value: string): string =>
    value.replace(/\s+/g, "").toUpperCase();

/** Sann når verdien kan brukes som `name` i en temafil. */
export const isThemeName = (value: unknown): value is string =>
    typeof value === "string" && THEME_NAME_PATTERN.test(value);

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

function validateColorTokens(value: unknown, errors: string[]) {
    if (!isRecord(value)) {
        errors.push("`colorTokens` må være et objekt.");
        return;
    }

    for (const [group, roles] of Object.entries(colorMetadataLightFile.color)) {
        for (const role of Object.keys(roles)) {
            const groupValue = value[group];
            const token = isRecord(groupValue) ? groupValue[role] : undefined;

            for (const scheme of COLOR_SCHEMES) {
                const color = isRecord(token) ? token[scheme] : undefined;
                if (typeof color !== "string" || !isHex(color)) {
                    errors.push(
                        `\`colorTokens.${group}.${role}.${scheme}\` må være en farge på formen #RRGGBB.`,
                    );
                }
            }
        }
    }
}

function validateFont(value: unknown, path: string, errors: string[]) {
    if (!isRecord(value)) {
        errors.push(`\`${path}\` må være et objekt.`);
        return;
    }

    if (typeof value.family !== "string" || value.family.trim() === "") {
        errors.push(`\`${path}.family\` må være en ikke-tom streng.`);
    }

    const weight = value.weight;
    for (const key of ["normal", "bold"] as const) {
        if (!isRecord(weight) || typeof weight[key] !== "string") {
            errors.push(`\`${path}.weight.${key}\` må være en streng.`);
        }
    }
}

function validateFonts(value: unknown, errors: string[]) {
    if (value === undefined) {
        return;
    }

    if (!isRecord(value)) {
        errors.push("`fonts` må være et objekt.");
        return;
    }

    validateFont(value.regular, "fonts.regular", errors);
    validateFont(value.display, "fonts.display", errors);
}

/**
 * Validerer en temafil og returnerer enten temaet eller en liste med lesbare
 * feilmeldinger.
 */
export function validateThemeFile(value: unknown): ThemeFileValidationResult {
    if (!isRecord(value)) {
        return { valid: false, errors: ["Temafilen må være et JSON-objekt."] };
    }

    if (value.version !== THEME_FILE_VERSION) {
        return {
            valid: false,
            errors: [
                `Ukjent versjon av temafilen: ${JSON.stringify(value.version)}. Forventet ${THEME_FILE_VERSION}.`,
            ],
        };
    }

    const errors: string[] = [];

    if (!isThemeName(value.name)) {
        errors.push(
            "`name` må være på kebab-case og starte med en bokstav, f.eks. `mitt-tema`.",
        );
    }

    if (typeof value.includeDarkMode !== "boolean") {
        errors.push("`includeDarkMode` må være `true` eller `false`.");
    }

    validateColorTokens(value.colorTokens, errors);
    validateFonts(value.fonts, errors);

    if (errors.length > 0) {
        return { valid: false, errors };
    }

    return { valid: true, theme: value as JokulThemeFile };
}

/** Leser en temafil, eller returnerer `undefined` om den ikke er gyldig. */
export function parseThemeFile(value: unknown): JokulThemeFile | undefined {
    const result = validateThemeFile(value);

    return result.valid ? result.theme : undefined;
}
