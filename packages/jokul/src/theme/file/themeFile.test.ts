import { describe, expect, it } from "vitest";
import { generatePalette } from "../colors/generate.js";
import {
    type JokulThemeFile,
    THEME_FILE_SCHEMA_URL,
    THEME_FILE_VERSION,
    isHex,
    isThemeName,
    normalizeHex,
    parseThemeFile,
    validateThemeFile,
} from "./themeFile.js";

function createTheme(overrides: Record<string, unknown> = {}) {
    return {
        version: THEME_FILE_VERSION,
        name: "tema-a",
        title: "Tema A",
        colorTokens: generatePalette("#006F4E"),
        includeDarkMode: true,
        ...overrides,
    };
}

function errorsFor(value: unknown): string[] {
    const result = validateThemeFile(value);
    return result.valid ? [] : result.errors;
}

const validFonts = {
    family: {
        regular: "'Tema Sans', sans-serif",
        display: "'Tema Display', sans-serif",
        mono: "'Tema Mono', monospace",
    },
    weight: { normal: "400", bold: "600" },
    faces: [
        {
            family: "Tema Sans",
            weight: 400,
            style: "normal",
            fileName: "TemaSans-Regular.woff2",
        },
        {
            family: "Tema Sans",
            weight: 600,
            style: "italic",
            fileName: "Tema Sans (Bold Italic).woff2",
        },
    ],
};

describe("validateThemeFile", () => {
    it("godtar et generert tema, også etter en runde gjennom JSON", () => {
        const theme = createTheme({ fonts: validFonts });
        const result = validateThemeFile(JSON.parse(JSON.stringify(theme)));

        expect(result).toEqual({ valid: true, theme });
    });

    it("godtar et tema uten title og fonts", () => {
        const theme = createTheme({ title: undefined });
        const result = validateThemeFile(JSON.parse(JSON.stringify(theme)));

        expect(result.valid).toBe(true);
        expect(result.valid && result.theme).not.toHaveProperty("title");
        expect(result.valid && result.theme).not.toHaveProperty("fonts");
    });

    it("avviser ukjente felter", () => {
        const theme = createTheme({ extra: true });
        const colorTokens = structuredClone(theme.colorTokens);
        Object.assign(colorTokens.background.page, { comment: "skrivefeil" });

        expect(
            errorsFor({
                ...theme,
                colorTokens,
                fonts: {
                    ...validFonts,
                    family: { ...validFonts.family, bold: "x" },
                    weight: { ...validFonts.weight, light: "300" },
                    faces: [{ ...validFonts.faces[0], url: "x" }],
                    extra: true,
                },
            }),
        ).toEqual([
            "colorTokens.background.page.comment: ukjent felt.",
            "fonts.family.bold: ukjent felt.",
            "fonts.weight.light: ukjent felt.",
            "fonts.faces[0].url: ukjent felt.",
            "fonts.extra: ukjent felt.",
            "extra: ukjent felt.",
        ]);
    });

    it("godtar $schema, men tar det ikke med i temaet", () => {
        const theme = createTheme();
        const result = validateThemeFile({
            $schema: THEME_FILE_SCHEMA_URL,
            ...theme,
        });

        expect(result).toEqual({ valid: true, theme });
        expect(errorsFor({ ...theme, $schema: 1 })).toEqual([
            "$schema: må være en tekst, fikk 1.",
        ]);
    });

    it.each([null, [], "tema", 42])(
        "avviser %j som ikke er et objekt",
        (value) => {
            expect(errorsFor(value)).toEqual([
                `Temafila må være et JSON-objekt, fikk ${JSON.stringify(value)}.`,
            ]);
        },
    );

    it("avviser ukjent versjon og manglende felter", () => {
        expect(errorsFor({ version: 2 })).toEqual([
            "version: må være 1, fikk 2.",
            "name: mangler.",
            "includeDarkMode: mangler.",
            "colorTokens: mangler.",
        ]);
    });

    it.each(["Tema", "tema a", "1tema", "tema--a", "tema-", "tema_a", ""])(
        "avviser navnet %j",
        (name) => {
            expect(errorsFor(createTheme({ name }))).toEqual([
                `name: må bestå av små bokstaver (a–z), tall og enkle bindestreker, og starte med en bokstav, f.eks. "tema-a", fikk ${JSON.stringify(name)}.`,
            ]);
        },
    );

    it("avviser ugyldige farger, manglende roller og ukjente nøkler", () => {
        const theme = createTheme();
        const colorTokens = structuredClone(theme.colorTokens) as Record<
            string,
            Record<string, Record<string, unknown>>
        >;
        colorTokens.background.page.light = "#12345";
        colorTokens.background.page.dark = "rgb(0, 0, 0)";
        Reflect.deleteProperty(colorTokens.text, "default");
        colorTokens.text.ukjent = { light: "#000000", dark: "#FFFFFF" };
        colorTokens.ukjent = {};

        expect(errorsFor({ ...theme, colorTokens })).toEqual([
            'colorTokens.background.page.light: må være en hex-farge på formen #RRGGBB, fikk "#12345".',
            'colorTokens.background.page.dark: må være en hex-farge på formen #RRGGBB, fikk "rgb(0, 0, 0)".',
            "colorTokens.text.default: mangler.",
            "colorTokens.text.ukjent: ukjent fargerolle.",
            "colorTokens.ukjent: ukjent fargegruppe.",
        ]);
    });

    it("krever farger for mørk modus også når includeDarkMode er false", () => {
        const theme = createTheme({ includeDarkMode: false });
        const colorTokens = structuredClone(theme.colorTokens) as Record<
            string,
            Record<string, Record<string, unknown>>
        >;
        Reflect.deleteProperty(colorTokens.background.page, "dark");

        expect(errorsFor({ ...theme, colorTokens })).toEqual([
            "colorTokens.background.page.dark: mangler.",
        ]);
    });

    it("normaliserer fontvekter til tekst i weight og tall i faces", () => {
        const theme = createTheme({
            fonts: {
                family: validFonts.family,
                weight: { normal: 400, bold: "600" },
                faces: [{ ...validFonts.faces[0], weight: "400" }],
            },
        });

        const result = validateThemeFile(theme);

        expect(result.valid && result.theme.fonts).toEqual({
            family: validFonts.family,
            weight: { normal: "400", bold: "600" },
            faces: [validFonts.faces[0]],
        });
    });

    it("avviser fontverdier som kan bryte generert CSS", () => {
        const theme = createTheme({
            fonts: {
                family: {
                    regular: "sans-serif; } body { color: red",
                    display: "",
                },
                weight: { normal: "normal", bold: 1001 },
                faces: [
                    {
                        family: 'Tema "Sans"',
                        weight: 400,
                        style: "oblique",
                        fileName: "../TemaSans.woff2",
                    },
                    {
                        family: "Tema Sans",
                        weight: 400,
                        style: "normal",
                        fileName: "TemaSans.ttf",
                    },
                ],
            },
        });

        expect(errorsFor(theme)).toEqual([
            'fonts.family.regular: må være en CSS-verdi uten ; { } \\ eller linjeskift, fikk "sans-serif; } body { color: red".',
            'fonts.family.display: må være en CSS-verdi uten ; { } \\ eller linjeskift, fikk "".',
            'fonts.weight.normal: må være et heltall fra 1 til 1000, fikk "normal".',
            "fonts.weight.bold: må være et heltall fra 1 til 1000, fikk 1001.",
            'fonts.faces[0].family: må være et fontnavn uten " ; { } \\ eller linjeskift, fikk "Tema \\"Sans\\"".',
            'fonts.faces[0].style: må være "normal" eller "italic", fikk "oblique".',
            'fonts.faces[0].fileName: må være navnet på en .woff2-fil, uten mappe og bare med bokstavene a–z, tall, mellomrom og _ . + ( ) -, fikk "../TemaSans.woff2".',
            'fonts.faces[1].fileName: må være navnet på en .woff2-fil, uten mappe og bare med bokstavene a–z, tall, mellomrom og _ . + ( ) -, fikk "TemaSans.ttf".',
        ]);
    });

    it("krever family og weight når fonts er satt", () => {
        expect(errorsFor(createTheme({ fonts: {} }))).toEqual([
            "fonts.family: mangler.",
            "fonts.weight: mangler.",
        ]);
    });
});

describe("parseThemeFile", () => {
    it("returnerer temaet når fila er gyldig", () => {
        const theme: JokulThemeFile = createTheme() as JokulThemeFile;

        expect(parseThemeFile(theme)).toEqual(theme);
    });

    it("returnerer undefined når fila er ugyldig", () => {
        expect(parseThemeFile(createTheme({ version: 0 }))).toBeUndefined();
    });
});

describe("hjelpefunksjoner", () => {
    it.each([
        ["#006F4E", true],
        ["#006f4e", true],
        ["#06F", false],
        ["#006F4E80", false],
        ["006F4E", false],
    ])("isHex(%j) er %s", (value, expected) => {
        expect(isHex(value)).toBe(expected);
    });

    it("normalizeHex fjerner mellomrom og gjør om til store bokstaver", () => {
        expect(normalizeHex(" #00 6f4e ")).toBe("#006F4E");
    });

    it.each([
        ["tema-a", true],
        ["dnb", true],
        ["tema2", true],
        ["Tema-A", false],
        [undefined, false],
    ])("isThemeName(%j) er %s", (value, expected) => {
        expect(isThemeName(value)).toBe(expected);
    });
});
