import { describe, expect, it } from "vitest";
import { INITIAL_STATE } from "../_context/themeDraftReducer";
import type { ThemeDraft } from "../_context/types";
import {
    createThemeArchive,
    createThemeArchiveName,
    createThemeManifest,
} from "./themeArchive";
import { crc32 } from "./zip";

/** `d09GMg` er de fire første bytene i en woff2-fil. */
const FONT_DATA_URL = "data:font/woff2;base64,d09GMgABAAAAAA";

const withFont = (name: string): ThemeDraft => ({
    ...INITIAL_STATE,
    themeName: "Merkevare AS",
    regularFont: "custom",
    displayFont: "custom",
    customFonts: {
        regular: { name, size: 14, dataUrl: FONT_DATA_URL },
        display: { name, size: 14, dataUrl: FONT_DATA_URL },
    },
});

/**
 * Leser oppføringene ut av arkivet via de lokale filhodene. Formatet er
 * verifisert mot `unzip`; her er det innholdet som skal sjekkes.
 */
async function readEntries(archive: Blob) {
    const bytes = new Uint8Array(await archive.arrayBuffer());
    const fields = new DataView(bytes.buffer);
    const entries: { name: string; data: Uint8Array }[] = [];
    let offset = 0;

    while (
        offset + 30 <= bytes.byteLength &&
        fields.getUint32(offset, true) === 0x04034b50
    ) {
        const size = fields.getUint32(offset + 18, true);
        const nameLength = fields.getUint16(offset + 26, true);
        const extraLength = fields.getUint16(offset + 28, true);
        const start = offset + 30 + nameLength + extraLength;

        entries.push({
            name: new TextDecoder().decode(
                bytes.subarray(offset + 30, offset + 30 + nameLength),
            ),
            data: bytes.subarray(start, start + size),
        });

        offset = start + size;
    }

    return entries;
}

describe("crc32", () => {
    it("gir sjekkverdien fra ZIP-spesifikasjonen", () => {
        const data = new TextEncoder().encode("123456789");

        expect(crc32(data)).toBe(0xcbf43926);
    });
});

describe("createThemeArchiveName", () => {
    it("navngir arkivet etter temaet", () => {
        expect(createThemeArchiveName(withFont("Font.woff2"))).toBe(
            "tema-merkevare-as.zip",
        );
    });

    it("tåler et tema uten navn", () => {
        expect(createThemeArchiveName(INITIAL_STATE)).toBe("tema.zip");
    });
});

describe("createThemeManifest", () => {
    /**
     * Base64en hører til fontfila i arkivet. Lå den også i JSON-en, ville fila
     * blitt uleselig og mangedoblet i størrelse.
     */
    it("peker på fontfila i stedet for å gjenta innholdet", () => {
        const manifest = createThemeManifest(withFont("Font.woff2"));

        expect(manifest.theme.customFonts.regular).toEqual({
            name: "Font.woff2",
            size: 14,
            file: "fonter/Font.woff2",
        });
    });

    it("tar ikke med en fontfil som temaet ikke bruker", () => {
        const manifest = createThemeManifest({
            ...withFont("Font.woff2"),
            regularFont: "inter-variable",
            displayFont: "inter-variable-display",
        });

        expect(manifest.theme.customFonts).toEqual({});
    });
});

describe("createThemeArchive", () => {
    it("legger temaet og fonten i arkivet", async () => {
        const entries = await readEntries(
            createThemeArchive(withFont("Font.woff2")),
        );

        expect(entries.map((entry) => entry.name)).toEqual([
            "tema.json",
            "fonter/Font.woff2",
        ]);

        const manifest = JSON.parse(new TextDecoder().decode(entries[0].data));
        expect(manifest.theme.themeName).toBe("Merkevare AS");
        expect(entries[1].data.subarray(0, 4)).toEqual(
            new Uint8Array([0x77, 0x4f, 0x46, 0x32]),
        );
    });

    /**
     * Utkastet kan komme fra en forhåndsvisningslenke, og filnavnet derfra er
     * like mye å stole på som resten av lenka.
     */
    it("lar ikke et filnavn fra utkastet peke ut av fontmappa", async () => {
        const entries = await readEntries(
            createThemeArchive(withFont("../../.bashrc")),
        );

        expect(entries[1].name).toBe("fonter/bashrc");
    });
});
