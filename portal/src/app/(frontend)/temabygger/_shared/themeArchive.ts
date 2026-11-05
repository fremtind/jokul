import slugify from "slugify";
import { getFontSelection } from "../_context/themeDraftSelectors";
import type { ThemeDraft } from "../_context/types";
import { type CustomFont, FONT_SLOTS, type FontSlot } from "./customFont";
import { CUSTOM_FONT_SELECTION } from "./fontOptions";
import { type ZipEntry, createZipArchive, encodeTextForZip } from "./zip";

/** Fila mottakeren leser temaet ut av. */
export const THEME_MANIFEST_NAME = "tema.json";

const FONT_DIRECTORY = "fonter";

export const THEME_ARCHIVE_VERSION = 1;

type ArchiveFont = Omit<CustomFont, "dataUrl"> & {
    /** Stien til fontfila i arkivet. */
    file: string;
};

/**
 * Temaet slik det ligger i `tema.json`. Formen er bevisst ikke den samme som i
 * forhåndsvisningslenka: der bæres fontene som base64 fordi en lenke ikke kan
 * ha vedlegg, mens de her ligger som egne filer, og JSON-en bare peker på dem.
 * Det gjør fila lesbar for den som skal legge temaet inn i kode og Figma.
 */
export type ThemeArchiveManifest = {
    version: typeof THEME_ARCHIVE_VERSION;
    theme: Omit<ThemeDraft, "customFonts"> & {
        customFonts: Partial<Record<FontSlot, ArchiveFont>>;
    };
};

export function createThemeArchiveName(draft: ThemeDraft): string {
    const slug = slugify(draft.themeName, { lower: true, strict: true });

    return slug ? `tema-${slug}.zip` : "tema.zip";
}

/**
 * Samme fil kan ligge i begge slotene. Da skal den bare bli med én gang, ellers
 * ser det ut som om det er to fonter i temaet.
 */
export function getUploadedFonts(draft: ThemeDraft): CustomFont[] {
    const fonts = new Map<string, CustomFont>();

    for (const slot of FONT_SLOTS) {
        const font = getArchiveFontSource(draft, slot);

        if (font) {
            fonts.set(font.name, font);
        }
    }

    return [...fonts.values()];
}

function getArchiveFontSource(
    draft: ThemeDraft,
    slot: FontSlot,
): CustomFont | undefined {
    const font = draft.customFonts[slot];

    return getFontSelection(draft, slot) === CUSTOM_FONT_SELECTION && font
        ? font
        : undefined;
}

export function createThemeManifest(draft: ThemeDraft): ThemeArchiveManifest {
    const customFonts: Partial<Record<FontSlot, ArchiveFont>> = {};

    for (const slot of FONT_SLOTS) {
        const font = getArchiveFontSource(draft, slot);

        if (font) {
            const { dataUrl, ...rest } = font;
            customFonts[slot] = { ...rest, file: getFontPath(font) };
        }
    }

    return {
        version: THEME_ARCHIVE_VERSION,
        theme: { ...draft, customFonts },
    };
}

export function createThemeArchive(draft: ThemeDraft): Blob {
    const entries: ZipEntry[] = [
        {
            name: THEME_MANIFEST_NAME,
            data: encodeTextForZip(
                `${JSON.stringify(createThemeManifest(draft), null, 4)}\n`,
            ),
        },
        ...getUploadedFonts(draft).map((font) => ({
            name: getFontPath(font),
            data: decodeDataUrl(font.dataUrl),
        })),
    ];

    return createZipArchive(entries);
}

export function downloadThemeArchive(draft: ThemeDraft): void {
    const url = URL.createObjectURL(createThemeArchive(draft));
    const link = document.createElement("a");

    link.href = url;
    link.download = createThemeArchiveName(draft);
    link.click();

    URL.revokeObjectURL(url);
}

function getFontPath(font: CustomFont): string {
    return `${FONT_DIRECTORY}/${getSafeFileName(font.name)}`;
}

/**
 * Utkastet kan komme fra en forhåndsvisningslenke, og et filnavn derfra er like
 * mye å stole på som resten av lenka. Navnet brukes som sti i arkivet, så alt
 * som kunne pekt ut av fontmappa fjernes.
 */
function getSafeFileName(name: string): string {
    const base = name.split(/[\\/]/).at(-1) ?? "";
    const safe = base.replace(/[^\w.-]+/g, "-").replace(/^[.-]+/, "");

    return safe || "font";
}

function decodeDataUrl(dataUrl: string): Uint8Array<ArrayBuffer> {
    const binary = atob(dataUrl.slice(dataUrl.indexOf(",") + 1));
    const bytes = new Uint8Array(binary.length);

    for (let index = 0; index < binary.length; index++) {
        bytes[index] = binary.charCodeAt(index);
    }

    return bytes;
}
