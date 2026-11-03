import { describe, expect, it } from "vitest";
import { INITIAL_STATE } from "../_context/themeDraftReducer";
import { createThemeFile, toThemeName } from "./themeFile";

describe("toThemeName", () => {
    it.each([
        ["Mitt tema", "mitt-tema"],
        ["Sparebank 1 Østlandet", "sparebank-1-ostlandet"],
        ["Bærum Bås", "baerum-bas"],
        ["  1 Tema!  ", "tema"],
        ["", "mitt-tema"],
        ["123", "mitt-tema"],
    ])("gjør %j om til %j", (input, expected) => {
        expect(toThemeName(input)).toBe(expected);
    });
});

describe("createThemeFile", () => {
    it("lager en gyldig temafil fra utkastet", () => {
        const draft = { ...INITIAL_STATE, themeName: "Mitt tema" };

        expect(createThemeFile(draft)).toMatchObject({
            version: 1,
            name: "mitt-tema",
            title: "Mitt tema",
            colorTokens: draft.colorTokens,
            includeDarkMode: draft.includeDarkMode,
            fonts: {
                regular: {
                    family: "'Jokul', 'Adjusted Arial Fallback', arial, sans-serif",
                    weight: { normal: "400", bold: "600" },
                },
            },
        });
    });

    it("gir undefined når en farge er ugyldig", () => {
        const draft = INITIAL_STATE;
        const [group, roles] = Object.entries(draft.colorTokens)[0];
        const [role, value] = Object.entries(roles)[0];

        expect(
            createThemeFile({
                ...draft,
                colorTokens: {
                    ...draft.colorTokens,
                    [group]: { ...roles, [role]: { ...value, light: "#12" } },
                },
            }),
        ).toBeUndefined();
    });
});
