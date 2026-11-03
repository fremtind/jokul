export const FONT_SLOTS = ["regular", "display"] as const;

export type FontSlot = (typeof FONT_SLOTS)[number];

export type CustomFont = {
    name: string;
    size: number;
    dataUrl: string;
};

export type CustomFonts = Partial<Record<FontSlot, CustomFont>>;

export const CUSTOM_FONT_ACCEPT = ".woff2,.woff,.ttf,.otf";

/**
 * Utkastet lagres som JSON i localStorage, der base64 tar en tredjedel mer
 * plass enn fila. Med to fontslots holder grensa summen godt innenfor kvoten
 * på rundt 5 MB, og en nettfont som er større enn dette har ingenting å gjøre
 * i et tema uansett.
 */
export const CUSTOM_FONT_MAX_SIZE_BYTES = 1_000_000;

const CUSTOM_FONT_FAMILY_NAMES = {
    regular: "jkl-custom-regular",
    display: "jkl-custom-display",
} as const satisfies Record<FontSlot, string>;

/**
 * Fontfila bærer bare vektene den selv inneholder. Spennet erklæres fullt, slik
 * at en variabel font brukes slik den er tegnet. En statisk font med én vekt
 * vises da med samme vekt overalt — det er fontfila brukeren faktisk lastet opp,
 * i stedet for en kunstig fet variant nettleseren har regnet seg fram til.
 */
const CUSTOM_FONT_WEIGHT_RANGE = "100 900";

export const CUSTOM_FONT_WEIGHTS = {
    normal: "400",
    bold: "600",
} as const;

export function getCustomFontFamily(slot: FontSlot): string {
    return `"${CUSTOM_FONT_FAMILY_NAMES[slot]}", sans-serif`;
}

/**
 * Data-URL-en havner i en `url()` i et stilark. Mønsteret slipper bare gjennom
 * base64, som ikke kan inneholde anførselstegn, parenteser eller bakoverstrek,
 * og dermed ikke kan bryte ut av deklarasjonen.
 */
const FONT_DATA_URL_PATTERN =
    /^data:[\w.+-]*\/?[\w.+-]*;base64,[A-Za-z0-9+/]+={0,2}$/;

export function isCustomFont(value: unknown): value is CustomFont {
    if (typeof value !== "object" || value === null || Array.isArray(value)) {
        return false;
    }

    const font = value as Partial<CustomFont>;

    return (
        typeof font.name === "string" &&
        typeof font.size === "number" &&
        typeof font.dataUrl === "string" &&
        FONT_DATA_URL_PATTERN.test(font.dataUrl)
    );
}

export function isCustomFonts(value: unknown): value is CustomFonts {
    if (typeof value !== "object" || value === null || Array.isArray(value)) {
        return false;
    }

    return Object.entries(value).every(
        ([slot, font]) =>
            FONT_SLOTS.includes(slot as FontSlot) && isCustomFont(font),
    );
}

export function readCustomFont(file: File): Promise<CustomFont> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            const dataUrl = reader.result;

            if (
                typeof dataUrl !== "string" ||
                !FONT_DATA_URL_PATTERN.test(dataUrl)
            ) {
                reject(new Error("Fontfila kunne ikke leses"));
                return;
            }

            resolve({ name: file.name, size: file.size, dataUrl });
        };

        reader.onerror = () => {
            reject(reader.error ?? new Error("Fontfila kunne ikke leses"));
        };

        reader.readAsDataURL(file);
    });
}

export function buildCustomFontFaceCss(fonts: CustomFonts): string {
    return FONT_SLOTS.flatMap((slot) => {
        const font = fonts[slot];

        if (!font) {
            return [];
        }

        return [
            [
                "@font-face {",
                `font-family: "${CUSTOM_FONT_FAMILY_NAMES[slot]}";`,
                "font-display: swap;",
                `font-weight: ${CUSTOM_FONT_WEIGHT_RANGE};`,
                `src: url("${font.dataUrl}");`,
                "}",
            ].join(" "),
        ];
    }).join("\n");
}
