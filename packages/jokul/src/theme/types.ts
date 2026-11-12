import type { ColorScheme } from "../utilities/types.js";
import type colorMetadataFile from "./metadata/color.metadata.light.json";

/** En ferdig oppløst font, slik den skrives til `font.family.*` og `font.weight.*` i tokens. */
export type JokulThemeFont = {
    label?: string;
    family: string;
    weight: {
        normal: string;
        bold: string;
    };
};

export type JokulThemeFonts = {
    regular: JokulThemeFont;
    display?: JokulThemeFont;
};

/**
 * Filformatet temabyggeren eksporterer, og som `jokul theme build` leser.
 *
 * `name` brukes som `data-brand`-verdi, i filnavn og i Sass-variabler, og må
 * derfor være på kebab-case (f.eks. `"mitt-tema"`).
 */
export type JokulThemeFile = {
    name: string;
    colorTokens: EditableLightDarkPalette;
    includeDarkMode: boolean;
    fonts?: JokulThemeFonts;
};

type ColorMetadataTree = (typeof colorMetadataFile)["color"];

/** En hex-fargestreng som starter med `#`, typisk på formen `#rrggbb` eller `#rrggbbaa`. */
export type HexColor = `#${string}`;

/**
 * En streng på formen `"gruppe.rolle"` som identifiserer én bestemt fargetokens
 * i paletten, f.eks. `"background.page"` eller `"text.accent"`.
 *
 * Typen utledes automatisk fra JSON-metadataen, så alle gyldige kombinasjoner
 * av gruppe og rolle er representert — ingen ugyldige strenger er tillatt.
 */
export type ColorGroup = keyof ColorMetadataTree;
export type ColorRole = {
    [Group in keyof ColorMetadataTree]: `${Group}.${keyof ColorMetadataTree[Group] & string}`;
}[keyof ColorMetadataTree];

/**
 * Metadata-objektet for én enkelt fargetoken, slik det er definert i
 * `color.metadata.*.json`. Inneholder verdier for luminance, lightness og
 * chroma som brukes til å generere farger programmatisk.
 *
 * Typen er en union av alle mulige metadata-objekter på tvers av alle grupper
 * og roller i paletten.
 */
export type ColorMetadata = {
    [Group in keyof ColorMetadataTree]: ColorMetadataTree[Group][keyof ColorMetadataTree[Group]];
}[keyof ColorMetadataTree];

/**
 * En ferdig beregnet farge: metadata fra JSON-fila (luminance, lightness,
 * chroma) kombinert med den faktiske hex-verdien som er generert fra
 * en basisfarge.
 */
export type Color = ColorMetadata & {
    hex: HexColor;
};

/**
 * En generisk hjelpetype med samme nøkkelstruktur som fargepaletten i
 * `color.metadata.*.json` — dvs. et objekt med grupper (`background`, `text`,
 * `border`, …) der hver gruppe igjen har roller (`page`, `default`, …).
 *
 * Typeparameteren `T` bestemmer hva som lagres per farge-rolle.
 * Brukes som basis for `Palette`, `SimplePalette` og `SimpleLightDarkPalette`.
 */
type PaletteShaped<T = string> = {
    [Group in keyof ColorMetadataTree]: {
        [Role in keyof ColorMetadataTree[Group]]: T;
    };
};

/** En fullstendig palett der hver rolle inneholder metadata og beregnet hex-verdi. */
export type Palette = PaletteShaped<Color>;

/** En forenklet palett der hver rolle kun inneholder en hex-fargestreng. */
export type SimplePalette = PaletteShaped<HexColor>;

export type LightDarkPalette<T = HexColor> = PaletteShaped<
    Record<ColorScheme, T>
>;

/**
 * Palett-shape for redigerbar fargestate. Verdiene er `string`, ikke
 * `HexColor`, fordi tekstfeltene må kunne holde midlertidig ugyldige verdier.
 */
export type EditableLightDarkPalette = LightDarkPalette<string>;

/**
 * En forenklet palett der hver rolle inneholder to hex-farger —
 * én for lyst tema og én for mørkt tema. Brukes som det endelige
 * resultatet fra palettgeneratoren.
 */
export type SimpleLightDarkPalette = LightDarkPalette<HexColor>;
