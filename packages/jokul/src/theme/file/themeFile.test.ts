import { describe, expect, it } from "vitest";
import { generatePalette } from "../colors/generate.js";
import {
    THEME_FILE_VERSION,
    isThemeName,
    normalizeHex,
    parseThemeFile,
    validateThemeFile,
} from "./themeFile.js";

const validTheme = {
    version: THEME_FILE_VERSION,
    name: "mitt-tema",
    colorTokens: generatePalette("#006F4E"),
    includeDarkMode: true,
    fonts: {
        regular: {
            family: "'Mitt Tema', sans-serif",
            weight: { normal: "400", bold: "600" },
        },
        display: {
            family: "'Mitt Tema Display', sans-serif",
            weight: { normal: "400", bold: "600" },
        },
    },
};

describe("parseThemeFile", () => {
    it("godtar en gyldig temafil", () => {
        expect(parseThemeFile(validTheme)).toEqual(validTheme);
    });

    it("godtar en temafil uten fonter", () => {
        const { fonts: _, ...withoutFonts } = validTheme;
        expect(parseThemeFile(withoutFonts)).toEqual(withoutFonts);
    });

    it.each([
        null,
        [],
        "tema",
        { ...validTheme, version: 2 },
        { ...validTheme, name: "Mitt tema" },
        { ...validTheme, includeDarkMode: "ja" },
        { ...validTheme, colorTokens: {} },
        { ...validTheme, fonts: { regular: validTheme.fonts.regular } },
    ])("avviser ugyldig input %#", (value) => {
        expect(parseThemeFile(value)).toBeUndefined();
    });
});

describe("validateThemeFile", () => {
    it("peker på fargen som er ugyldig", () => {
        const result = validateThemeFile({
            ...validTheme,
            colorTokens: {
                ...validTheme.colorTokens,
                text: {
                    ...validTheme.colorTokens.text,
                    accent: { light: "#123", dark: "#000000" },
                },
            },
        });

        expect(result).toEqual({
            valid: false,
            errors: [
                "`colorTokens.text.accent.light` må være en farge på formen #RRGGBB.",
            ],
        });
    });
});

describe("isThemeName", () => {
    it.each(["dnb", "mitt-tema", "tema2"])("godtar %s", (name) => {
        expect(isThemeName(name)).toBe(true);
    });

    it.each(["", "Mitt", "2tema", "mitt--tema", "mitt-", "mitt tema"])(
        "avviser %j",
        (name) => {
            expect(isThemeName(name)).toBe(false);
        },
    );
});

describe("normalizeHex", () => {
    it("fjerner mellomrom og gjør om til store bokstaver", () => {
        expect(normalizeHex(" #00 6f4e ")).toBe("#006F4E");
    });
});
