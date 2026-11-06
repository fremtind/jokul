import { Ajv } from "ajv";
import { describe, expect, it } from "vitest";
import { generatePalette } from "../colors/generate.js";
import { colorMetadataLight } from "../colors/metadata.js";
import schema from "./theme-file.v1.schema.json" with { type: "json" };
import {
    THEME_FILE_SCHEMA_URL,
    THEME_FILE_VERSION,
    validateThemeFile,
} from "./themeFile.js";

const ajv = new Ajv({ allErrors: true });
const validateWithSchema = ajv.compile(schema);

const validTheme = {
    $schema: THEME_FILE_SCHEMA_URL,
    version: THEME_FILE_VERSION,
    name: "tema-a",
    title: "Tema A",
    colorTokens: generatePalette("#006F4E"),
    includeDarkMode: true,
    fonts: {
        family: {
            regular: "'Tema Sans', sans-serif",
            display: "'Tema Display', sans-serif",
            mono: "'Tema Mono', monospace",
        },
        weight: { normal: "400", bold: 600 },
        faces: [
            {
                family: "Tema Sans",
                weight: 400,
                style: "normal",
                fileName: "Tema Sans (Regular).woff2",
            },
        ],
    },
};

/** Lager en kopi av det gyldige temaet der verdien på `path` er byttet ut (eller fjernet med `undefined`). */
function withValue(path: string, value: unknown) {
    const theme = structuredClone(validTheme) as Record<string, unknown>;
    const keys = path.split(".");
    const last = keys.pop() as string;
    let target = theme as Record<string, unknown>;

    for (const key of keys) {
        target = target[key] as Record<string, unknown>;
    }

    if (value === undefined) {
        Reflect.deleteProperty(target, last);
    } else {
        target[last] = value;
    }

    return theme;
}

const fixtures: Array<[string, unknown]> = [
    ["gyldig tema", validTheme],
    ["uten $schema", withValue("$schema", undefined)],
    ["uten title", withValue("title", undefined)],
    ["uten fonts", withValue("fonts", undefined)],
    ["uten fonts.faces", withValue("fonts.faces", undefined)],
    ["tom fonts.faces", withValue("fonts.faces", [])],
    ["uten fonts.family.mono", withValue("fonts.family.mono", undefined)],
    ["includeDarkMode false", withValue("includeDarkMode", false)],
    [
        "hex med små bokstaver",
        withValue("colorTokens.text.default.light", "#00aa4e"),
    ],
    ["fontvekt med innledende null", withValue("fonts.weight.normal", "0400")],
    ["fontvekt 1000", withValue("fonts.weight.bold", 1000)],
    ["ikke et objekt", "tema"],
    ["null", null],
    ["liste", []],
    ["versjon 2", withValue("version", 2)],
    ["versjon som tekst", withValue("version", "1")],
    ["uten version", withValue("version", undefined)],
    ["uten name", withValue("name", undefined)],
    ["name med stor bokstav", withValue("name", "Tema-a")],
    ["name med dobbel bindestrek", withValue("name", "tema--a")],
    ["name som slutter på bindestrek", withValue("name", "tema-")],
    ["name som starter med tall", withValue("name", "1tema")],
    ["$schema som tall", withValue("$schema", 1)],
    ["title som tall", withValue("title", 1)],
    ["uten includeDarkMode", withValue("includeDarkMode", undefined)],
    ["includeDarkMode som tekst", withValue("includeDarkMode", "true")],
    ["ukjent felt", withValue("extra", true)],
    ["uten colorTokens", withValue("colorTokens", undefined)],
    ["colorTokens som liste", withValue("colorTokens", [])],
    ["uten fargegruppe", withValue("colorTokens.border", undefined)],
    ["ukjent fargegruppe", withValue("colorTokens.shadow", {})],
    ["uten fargerolle", withValue("colorTokens.text.accent", undefined)],
    ["ukjent fargerolle", withValue("colorTokens.text.muted", {})],
    ["uten dark", withValue("colorTokens.border.strong.dark", undefined)],
    [
        "ukjent felt i farge",
        withValue("colorTokens.background.page.comment", "x"),
    ],
    ["hex med tre sifre", withValue("colorTokens.text.default.light", "#fff")],
    ["hex uten #", withValue("colorTokens.text.default.light", "006F4E")],
    ["hex med alfa", withValue("colorTokens.text.default.dark", "#006F4E80")],
    ["fonts som tekst", withValue("fonts", "Tema Sans")],
    ["uten fonts.family", withValue("fonts.family", undefined)],
    ["uten fonts.weight", withValue("fonts.weight", undefined)],
    ["ukjent felt i fonts", withValue("fonts.extra", true)],
    ["ukjent felt i fonts.family", withValue("fonts.family.bold", "x")],
    ["ukjent felt i fonts.weight", withValue("fonts.weight.light", 300)],
    ["uten fonts.family.display", withValue("fonts.family.display", undefined)],
    ["tom fontfamilie", withValue("fonts.family.regular", "")],
    ["fontfamilie med bare mellomrom", withValue("fonts.family.regular", "  ")],
    [
        "fontfamilie med semikolon",
        withValue("fonts.family.regular", "Sans; color: red"),
    ],
    ["fontfamilie med krøllparentes", withValue("fonts.family.display", "a}")],
    ["fontfamilie med backslash", withValue("fonts.family.mono", "a\\b")],
    ["fontfamilie med linjeskift", withValue("fonts.family.mono", "a\nb")],
    ["fontvekt 0", withValue("fonts.weight.normal", 0)],
    ["fontvekt 1001", withValue("fonts.weight.normal", "1001")],
    ["fontvekt med desimal", withValue("fonts.weight.normal", 400.5)],
    ["fontvekt som ord", withValue("fonts.weight.bold", "bold")],
    ["fontvekt negativ", withValue("fonts.weight.bold", "-400")],
    ["faces som objekt", withValue("fonts.faces", {})],
    ["face som tekst", withValue("fonts.faces", ["Tema Sans"])],
    ["face uten fileName", withValue("fonts.faces.0.fileName", undefined)],
    ["face med ukjent felt", withValue("fonts.faces.0.url", "x")],
    ["face med anførselstegn", withValue("fonts.faces.0.family", 'Tema"Sans')],
    ["face med tom family", withValue("fonts.faces.0.family", " ")],
    ["face med ugyldig style", withValue("fonts.faces.0.style", "oblique")],
    ["face med vekt som tekst", withValue("fonts.faces.0.weight", "700")],
    ["face med vekt 0", withValue("fonts.faces.0.weight", 0)],
    ["face med woff", withValue("fonts.faces.0.fileName", "TemaSans.woff")],
    [
        "face med mappe i filnavnet",
        withValue("fonts.faces.0.fileName", "../TemaSans.woff2"),
    ],
    ["face med bare filendelse", withValue("fonts.faces.0.fileName", ".woff2")],
];

describe("JSON Schema for temafiler", () => {
    it("har riktig $id og versjon", () => {
        expect(schema.$id).toBe(THEME_FILE_SCHEMA_URL);
        expect(schema.properties.version.const).toBe(THEME_FILE_VERSION);
    });

    it("har de samme fargegruppene og -rollene som fargemetadataene", () => {
        const { properties } = schema.properties.colorTokens;
        const groups = Object.fromEntries(
            Object.entries(properties).map(
                ([group, { properties, required }]) => [
                    group,
                    { roles: Object.keys(properties), required },
                ],
            ),
        );
        const expected = Object.fromEntries(
            Object.entries(colorMetadataLight).map(([group, roles]) => [
                group,
                { roles: Object.keys(roles), required: Object.keys(roles) },
            ]),
        );

        expect(groups).toEqual(expected);
        expect(schema.properties.colorTokens.required).toEqual(
            Object.keys(colorMetadataLight),
        );
    });

    it.each(fixtures)(
        "gir samme svar som validateThemeFile: %s",
        (_, fixture) => {
            expect(validateWithSchema(fixture)).toBe(
                validateThemeFile(fixture).valid,
            );
        },
    );

    it("har både gyldige og ugyldige eksempler", () => {
        const results = fixtures.map(
            ([, fixture]) => validateThemeFile(fixture).valid,
        );

        expect(results).toContain(true);
        expect(results).toContain(false);
    });
});
