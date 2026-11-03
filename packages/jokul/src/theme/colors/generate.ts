import chroma from "chroma-js";
import { colorMetadataDark, colorMetadataLight } from "./metadata.js";
import type {
    ColorGroup,
    ColorMetadata,
    ColorScheme,
    HexColor,
    SimpleLightDarkPalette,
    SimplePalette,
} from "./types.js";
import {
    generateContrastColor,
    getLightnessFromHex,
    getLuminanceFromLightness,
} from "./utils.js";

/**
 * Genererer en farge basert på WCAG relativ luminance.
 *
 * Bruker basefargens fargetone og metning, men setter luminansen til verdien
 * spesifisert i metadata. Dersom den resulterende OKLCh-kromaen overstiger
 * metadataens chroma-tak, justeres den ned for å unngå overmetning.
 */
function generateColorWithLuminance(
    baseColor: HexColor,
    [role, metadata]: [string, ColorMetadata],
) {
    const luminance = metadata.luminance.$value;
    const color = chroma(baseColor).luminance(luminance);

    const hex =
        color.get("oklch.c") > metadata.chroma.$value
            ? (color.set("oklch.c", metadata.chroma.$value).hex() as HexColor)
            : (color.hex() as HexColor);

    return [role, hex];
}

/**
 * Genererer en farge basert på OKLCh-fargerommet.
 *
 * Bevarer basefargens fargetone (H) og begrenser kromaen (C) til
 * metadataens chroma-tak. Lysheten (L) hentes direkte fra metadata.
 * Gir jevnere perseptuell overgang mellom fargesteg enn WCAG-metoden.
 */
function generateColorWithOklch(
    baseColor: HexColor,
    [role, metadata]: [string, ColorMetadata],
) {
    const [, c, H] = chroma(baseColor).oklch();
    const L = metadata.lightness.$value / 100;
    const C = c > metadata.chroma.$value ? metadata.chroma.$value : c;

    return [role, chroma.oklch(L, C, H).hex() as HexColor];
}

/**
 * Genererer en komplett palett for ett fargetema (lyst eller mørkt).
 *
 * Alle fargeroller beregnes fra `baseColor` ved hjelp av valgt metode.
 * `background.contrast` settes alltid til basefargen, og `text.on-contrast`
 * settes til svart eller hvitt avhengig av hva som gir best kontrast mot
 * `background.contrast`.
 *
 * @param baseColor - Merkevarefargen paletten skal genereres fra.
 * @param colorScheme - Hvilke metadata-mål som brukes (`"light"` eller `"dark"`).
 * @param method - Algoritme for fargeberegning: WCAG luminance (`"wcag"`) eller OKLCh (`"oklch"`).
 */
function generateSinglePalette(
    baseColor: HexColor,
    colorScheme: ColorScheme = "light",
    method: "wcag" | "oklch" = "wcag",
): SimplePalette {
    const colorMetadata =
        colorScheme === "light" ? colorMetadataLight : colorMetadataDark;
    const convert =
        method === "wcag" ? generateColorWithLuminance : generateColorWithOklch;

    const palette = Object.fromEntries(
        Object.entries(colorMetadata).map(([group, roles]) => [
            group,
            Object.fromEntries(
                Object.entries(roles).map(([role, metadata]) =>
                    convert(baseColor, [role, metadata]),
                ),
            ),
        ]),
    );

    palette.background.contrast = baseColor;
    palette.text["on-contrast"] = generateContrastColor(baseColor);

    return palette as SimplePalette;
}

/**
 * Genererer en fullstendig lys/mørk-palett fra én merkevarefarge.
 *
 * Den lyse paletten genereres direkte fra `baseColor`. For det mørke temaet beregnes
 * en justert basisfarge automatisk: er basefargen mørk (lightness ≤ 40),
 * lyses den opp til 70; ellers speiles den til `100 - lightness`, minimum 40.
 * Dette sikrer at merkevarens fargetone er synlig i begge temaer.
 *
 * De to palettene flettes deretter sammen til en `SimpleLightDarkPalette`
 * der hvert fargetoken inneholder både `light`- og `dark`-verdien.
 *
 * @param baseColor - Merkevarefargen paletten skal genereres fra (hex).
 * @param method - Algoritme for fargeberegning: WCAG luminance (`"wcag"`, standard) eller OKLCh (`"oklch"`).
 * @returns En palett med hex-verdier for lyst og mørkt tema per fargetoken.
 *
 * @example
 * const palette = generatePalette("#006f4e");
 * palette.background.page.light; // lys bakgrunnsfarge
 * palette.background.page.dark;  // mørk bakgrunnsfarge
 */
export function generatePalette(
    baseColor: HexColor,
    method: "wcag" | "oklch" = "wcag",
): SimpleLightDarkPalette {
    let colorLightness = getLightnessFromHex(baseColor);
    colorLightness =
        colorLightness <= 40 ? 70 : Math.max(40, 100 - colorLightness);
    const darkBaseColor = chroma(baseColor)
        .luminance(getLuminanceFromLightness(colorLightness))
        .hex() as HexColor;

    const lightPalette = generateSinglePalette(baseColor, "light", method);
    const darkPalette = generateSinglePalette(darkBaseColor, "dark", method);

    const groups = Object.keys(lightPalette) as ColorGroup[];

    return Object.fromEntries(
        groups.map((group) => {
            // Lys og mørk palett har samme form, så rollene slås opp på samme nøkkel
            const lightRoles: Record<string, HexColor> = lightPalette[group];
            const darkRoles: Record<string, HexColor> = darkPalette[group];

            return [
                group,
                Object.fromEntries(
                    Object.entries(lightRoles).map(([role, light]) => [
                        role,
                        { light, dark: darkRoles[role] },
                    ]),
                ),
            ];
        }),
    ) as SimpleLightDarkPalette;
}
