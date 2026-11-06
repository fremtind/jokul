import { colorMetadataLight } from "../colors/metadata.js";
import {
    COLOR_SCHEMES,
    type ColorScheme,
    type HexColor,
    type SimpleLightDarkPalette,
} from "../colors/types.js";

/** Versjonen av temafilformatet som denne versjonen av Jøkul leser og skriver. */
export const THEME_FILE_VERSION = 1;

/**
 * Adressen til JSON Schema-et for temafiler. Sett den som `$schema` i en temafil
 * for å få autofullføring og validering i editoren.
 */
export const THEME_FILE_SCHEMA_URL =
    "https://jokul.fremtind.no/schemas/theme-file/v1.json";

/**
 * Én fontfil som temaet leverer selv. Feltene tilsvarer `brandFontFace`-tokens
 * (`font.face.*` i `typography.<tema>.tokens.json`).
 */
export type JokulThemeFontFace = {
    /** Navnet fonten registreres med i `@font-face`, f.eks. `"Tema Sans"`. */
    family: string;
    /** Tallverdi for `font-weight`, f.eks. `400`. */
    weight: number;
    style: "normal" | "italic";
    /** Filnavn på en `.woff2`-fil i `fonts/`-mappa ved siden av temafila. */
    fileName: string;
};

/**
 * Ferdig oppløste fontverdier for et tema. Strukturen følger `font.family.*`,
 * `font.weight.*` og `font.face.*` i `typography.<tema>.tokens.json`.
 */
export type JokulThemeFonts = {
    /** CSS-verdier for `font-family`, inkludert fallback-fonter. */
    family: {
        regular: string;
        display: string;
        mono?: string;
    };
    /** CSS-verdier for `font-weight` til normal og fet tekst, f.eks. `"400"` og `"600"`. */
    weight: {
        normal: string;
        bold: string;
    };
    /** Fontfiler temaet leverer selv. Utelates når fontene lastes på annen måte. */
    faces?: JokulThemeFontFace[];
};

/**
 * Et tema slik det eksporteres fra temabyggeren og leses av `jokul theme build`.
 * Fila er ren JSON og valideres med `validateThemeFile` eller `parseThemeFile`,
 * eller med JSON Schema-et på `THEME_FILE_SCHEMA_URL`.
 */
export type JokulThemeFile = {
    version: typeof THEME_FILE_VERSION;
    /**
     * Maskinlesbart navn på temaet. Brukes i `[data-brand="<name>"]`, i filnavn
     * og i typer, og må derfor oppfylle `isThemeName`, f.eks. `"tema-a"`.
     */
    name: string;
    /** Visningsnavn for temaet, f.eks. `"Tema A"`. */
    title?: string;
    colorTokens: SimpleLightDarkPalette;
    /**
     * Om temaet skal støtte mørk modus. Fargene for mørk modus skal være med
     * i `colorTokens` uansett.
     */
    includeDarkMode: boolean;
    /** Utelates for å bruke Jøkuls standardfonter. */
    fonts?: JokulThemeFonts;
};

export type ThemeFileValidationResult =
    | { valid: true; theme: JokulThemeFile }
    | { valid: false; errors: string[] };

const HEX_COLOR_PATTERN = /^#[0-9a-fA-F]{6}$/;
const THEME_NAME_PATTERN = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/;
const FONT_FILE_NAME_PATTERN = /^[A-Za-z0-9 _.+()-]+\.woff2$/;
// Verdiene havner rett i generert CSS og SCSS, så tegn som kan bryte ut av
// deklarasjonen eller starte Sass-interpolering er ikke lov.
const UNSAFE_CSS_VALUE_PATTERN = /[;{}\\\n\r]/;
const UNSAFE_FONT_FAMILY_NAME_PATTERN = /[;{}\\\n\r"]/;

/** Sann når verdien er en hex-farge på formen `#RRGGBB`. Store og små bokstaver godtas. */
export const isHex = (value: string): value is HexColor =>
    HEX_COLOR_PATTERN.test(value);

/** Fjerner mellomrom og gjør om til store bokstaver, slik at verdien får en stabil form. */
export const normalizeHex = (value: string): string =>
    value.replace(/\s+/g, "").toUpperCase();

/**
 * Sann når verdien kan brukes som `name` i en temafil: små bokstaver (a–z),
 * tall og enkle bindestreker, og første tegn må være en bokstav.
 */
export const isThemeName = (value: unknown): value is string =>
    typeof value === "string" && THEME_NAME_PATTERN.test(value);

/**
 * Validerer at en verdi, typisk resultatet av `JSON.parse`, er en gyldig temafil.
 *
 * Returnerer enten temaet eller en liste med lesbare feilmeldinger som peker
 * på feltet som er feil. Ukjente felter regnes som feil, slik at skrivefeil
 * i feltnavn ikke blir oversett. Unntaket er `$schema`, som godtas, men ikke
 * tas med i temaet som returneres.
 */
export function validateThemeFile(value: unknown): ThemeFileValidationResult {
    if (!isRecord(value)) {
        return {
            valid: false,
            errors: [
                `Temafila må være et JSON-objekt, fikk ${describe(value)}.`,
            ],
        };
    }

    const errors: string[] = [];

    if (value.version !== THEME_FILE_VERSION) {
        errors.push(
            invalid("version", value.version, `må være ${THEME_FILE_VERSION}`),
        );
    }

    if (!isThemeName(value.name)) {
        errors.push(
            invalid(
                "name",
                value.name,
                'må bestå av små bokstaver (a–z), tall og enkle bindestreker, og starte med en bokstav, f.eks. "tema-a"',
            ),
        );
    }

    if (value.$schema !== undefined && typeof value.$schema !== "string") {
        errors.push(invalid("$schema", value.$schema, "må være en tekst"));
    }

    if (value.title !== undefined && typeof value.title !== "string") {
        errors.push(invalid("title", value.title, "må være en tekst"));
    }

    if (typeof value.includeDarkMode !== "boolean") {
        errors.push(
            invalid(
                "includeDarkMode",
                value.includeDarkMode,
                "må være true eller false",
            ),
        );
    }

    const colorTokens = validateColorTokens(value.colorTokens, errors);
    const fonts =
        value.fonts === undefined
            ? undefined
            : validateFonts(value.fonts, errors);

    rejectUnknownKeys(value, THEME_FILE_KEYS, undefined, errors);

    if (errors.length > 0 || !colorTokens) {
        return { valid: false, errors };
    }

    const theme: JokulThemeFile = {
        version: THEME_FILE_VERSION,
        name: value.name as string,
        colorTokens,
        includeDarkMode: value.includeDarkMode as boolean,
    };

    if (typeof value.title === "string") {
        theme.title = value.title;
    }

    if (fonts) {
        theme.fonts = fonts;
    }

    return { valid: true, theme };
}

/**
 * Leser en temafil, typisk resultatet av `JSON.parse`. Returnerer `undefined`
 * hvis verdien ikke er en gyldig temafil. Bruk `validateThemeFile` for å få
 * vite hva som er feil.
 */
export function parseThemeFile(value: unknown): JokulThemeFile | undefined {
    const result = validateThemeFile(value);

    return result.valid ? result.theme : undefined;
}

function validateColorTokens(
    value: unknown,
    errors: string[],
): SimpleLightDarkPalette | undefined {
    if (!isRecord(value)) {
        errors.push(invalid("colorTokens", value, "må være et objekt"));
        return undefined;
    }

    const palette: Record<
        string,
        Record<string, Record<ColorScheme, HexColor>>
    > = {};

    for (const [group, roles] of Object.entries(colorMetadataLight)) {
        const groupPath = `colorTokens.${group}`;
        const groupValue = value[group];

        if (!isRecord(groupValue)) {
            errors.push(invalid(groupPath, groupValue, "må være et objekt"));
            continue;
        }

        palette[group] = {};

        for (const role of Object.keys(roles)) {
            const rolePath = `${groupPath}.${role}`;
            const roleValue = groupValue[role];

            if (!isRecord(roleValue)) {
                errors.push(
                    invalid(
                        rolePath,
                        roleValue,
                        "må være et objekt med light og dark",
                    ),
                );
                continue;
            }

            const color = {} as Record<ColorScheme, HexColor>;

            for (const scheme of COLOR_SCHEMES) {
                const hex = roleValue[scheme];

                if (typeof hex === "string" && isHex(hex)) {
                    color[scheme] = hex;
                } else {
                    errors.push(
                        invalid(
                            `${rolePath}.${scheme}`,
                            hex,
                            "må være en hex-farge på formen #RRGGBB",
                        ),
                    );
                }
            }

            rejectUnknownKeys(roleValue, COLOR_SCHEMES, rolePath, errors);
            palette[group][role] = color;
        }

        for (const role of Object.keys(groupValue)) {
            if (!(role in roles)) {
                errors.push(`${groupPath}.${role}: ukjent fargerolle.`);
            }
        }
    }

    for (const group of Object.keys(value)) {
        if (!(group in colorMetadataLight)) {
            errors.push(`colorTokens.${group}: ukjent fargegruppe.`);
        }
    }

    return palette as SimpleLightDarkPalette;
}

function validateFonts(
    value: unknown,
    errors: string[],
): JokulThemeFonts | undefined {
    if (!isRecord(value)) {
        errors.push(invalid("fonts", value, "må være et objekt"));
        return undefined;
    }

    const errorCount = errors.length;
    const { family, weight, faces } = value;

    if (!isRecord(family)) {
        errors.push(invalid("fonts.family", family, "må være et objekt"));
    } else {
        validateCssValue(family.regular, "fonts.family.regular", errors);
        validateCssValue(family.display, "fonts.family.display", errors);
        if (family.mono !== undefined) {
            validateCssValue(family.mono, "fonts.family.mono", errors);
        }
        rejectUnknownKeys(
            family,
            ["regular", "display", "mono"],
            "fonts.family",
            errors,
        );
    }

    let normalWeight: number | undefined;
    let boldWeight: number | undefined;

    if (!isRecord(weight)) {
        errors.push(invalid("fonts.weight", weight, "må være et objekt"));
    } else {
        normalWeight = validateFontWeight(
            weight.normal,
            "fonts.weight.normal",
            errors,
        );
        boldWeight = validateFontWeight(
            weight.bold,
            "fonts.weight.bold",
            errors,
        );
        rejectUnknownKeys(weight, ["normal", "bold"], "fonts.weight", errors);
    }

    let validFaces: JokulThemeFontFace[] | undefined;

    if (faces !== undefined) {
        if (!Array.isArray(faces)) {
            errors.push(invalid("fonts.faces", faces, "må være en liste"));
        } else {
            validFaces = faces.map((face, index) =>
                validateFontFace(face, `fonts.faces[${index}]`, errors),
            );
        }
    }

    rejectUnknownKeys(value, ["family", "weight", "faces"], "fonts", errors);

    if (errors.length > errorCount || !isRecord(family)) {
        return undefined;
    }

    const fonts: JokulThemeFonts = {
        family: {
            regular: family.regular as string,
            display: family.display as string,
        },
        weight: {
            normal: String(normalWeight),
            bold: String(boldWeight),
        },
    };

    if (typeof family.mono === "string") {
        fonts.family.mono = family.mono;
    }

    if (validFaces) {
        fonts.faces = validFaces;
    }

    return fonts;
}

function validateFontFace(
    value: unknown,
    path: string,
    errors: string[],
): JokulThemeFontFace {
    if (!isRecord(value)) {
        errors.push(invalid(path, value, "må være et objekt"));
        // Feilen over gjør at temaet avvises, så returverdien brukes aldri.
        return {} as JokulThemeFontFace;
    }

    const { family, style, fileName } = value;

    if (
        typeof family !== "string" ||
        family.trim() === "" ||
        UNSAFE_FONT_FAMILY_NAME_PATTERN.test(family)
    ) {
        errors.push(
            invalid(
                `${path}.family`,
                family,
                'må være et fontnavn uten " ; { } \\ eller linjeskift',
            ),
        );
    }

    const weight = validateFontWeight(value.weight, `${path}.weight`, errors);

    if (style !== "normal" && style !== "italic") {
        errors.push(
            invalid(`${path}.style`, style, 'må være "normal" eller "italic"'),
        );
    }

    if (
        typeof fileName !== "string" ||
        !FONT_FILE_NAME_PATTERN.test(fileName)
    ) {
        errors.push(
            invalid(
                `${path}.fileName`,
                fileName,
                "må være navnet på en .woff2-fil, uten mappe og bare med bokstavene a–z, tall, mellomrom og _ . + ( ) -",
            ),
        );
    }

    rejectUnknownKeys(
        value,
        ["family", "weight", "style", "fileName"],
        path,
        errors,
    );

    return {
        family: family as string,
        weight: weight as number,
        style: style as JokulThemeFontFace["style"],
        fileName: fileName as string,
    };
}

function validateCssValue(value: unknown, path: string, errors: string[]) {
    if (
        typeof value !== "string" ||
        value.trim() === "" ||
        UNSAFE_CSS_VALUE_PATTERN.test(value)
    ) {
        errors.push(
            invalid(
                path,
                value,
                "må være en CSS-verdi uten ; { } \\ eller linjeskift",
            ),
        );
    }
}

/** Godtar både `400` og `"400"`, siden begge er vanlige i håndskrevne filer. */
function validateFontWeight(
    value: unknown,
    path: string,
    errors: string[],
): number | undefined {
    const weight =
        typeof value === "string" && /^\d+$/.test(value)
            ? Number(value)
            : value;

    if (
        typeof weight === "number" &&
        Number.isInteger(weight) &&
        weight >= 1 &&
        weight <= 1000
    ) {
        return weight;
    }

    errors.push(invalid(path, value, "må være et heltall fra 1 til 1000"));
    return undefined;
}

const THEME_FILE_KEYS = [
    "$schema",
    "version",
    "name",
    "title",
    "colorTokens",
    "includeDarkMode",
    "fonts",
] as const;

function rejectUnknownKeys(
    value: Record<string, unknown>,
    allowedKeys: readonly string[],
    path: string | undefined,
    errors: string[],
) {
    for (const key of Object.keys(value)) {
        if (!allowedKeys.includes(key)) {
            errors.push(`${path ? `${path}.` : ""}${key}: ukjent felt.`);
        }
    }
}

function invalid(path: string, value: unknown, expectation: string): string {
    if (value === undefined) {
        return `${path}: mangler.`;
    }

    return `${path}: ${expectation}, fikk ${describe(value)}.`;
}

function describe(value: unknown): string {
    return JSON.stringify(value) ?? String(value);
}

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
