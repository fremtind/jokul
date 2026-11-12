import { COLOR_SCHEMES } from "../../utilities/types.js";
import colorMetadataFile from "../metadata/color.metadata.light.json" with {
    type: "json",
};
import type { JokulThemeFile } from "../types.js";
import { isHex, isThemeName } from "../utils.js";

export type ThemeFileValidationResult =
    | { valid: true; theme: JokulThemeFile }
    | { valid: false; errors: string[] };

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

function validateColorTokens(value: unknown, errors: string[]) {
    if (!isRecord(value)) {
        errors.push("`colorTokens` må være et objekt.");
        return;
    }

    for (const [group, roles] of Object.entries(colorMetadataFile.color)) {
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

    if (value.display) {
        validateFont(value.display, "fonts.display", errors);
    }

    validateFont(value.regular, "fonts.regular", errors);
}

/**
 * Validerer en temafil og returnerer enten temaet eller en liste med lesbare
 * feilmeldinger.
 */
export function validateThemeFile(value: unknown): ThemeFileValidationResult {
    if (!isRecord(value)) {
        return { valid: false, errors: ["Temafilen må være et JSON-objekt."] };
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
