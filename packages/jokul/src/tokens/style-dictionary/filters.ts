import type { Filter, TransformedToken } from "style-dictionary";

/**
 * Sjekker om en token har en lys/mørk-verdistruktur.
 * Dette er en hjelpefunksjon som kan brukes direkte i kode,
 * samt som grunnlag for isColorSchemeValue-filteret.
 *
 * @param token - Token som skal sjekkes
 * @returns true hvis tokenet har både "light" og "dark" verdier
 */
export function isColorSchemeToken(token: TransformedToken): boolean {
    return (
        token.value !== null &&
        typeof token.value === "object" &&
        "light" in token.value &&
        "dark" in token.value
    );
}

/**
 * Sjekker om en token har en størrelsesavhengig verdistruktur.
 * Brukes for tokens som har ulike verdier for small, medium og large skjermstørrelser.
 *
 * @param token - Token som skal sjekkes
 * @returns true hvis tokenet har "small", "medium" og "large" verdier
 */
export function isSizeToken(token: TransformedToken): boolean {
    return (
        token.value !== null &&
        typeof token.value === "object" &&
        "small" in token.value &&
        "medium" in token.value &&
        "large" in token.value
    );
}

/**
 * Sjekker om en token er en brand font-token.
 * Disse ligger under path `font.face.*` eller `font.family.*`.
 */
export function isBrandFontToken(token: TransformedToken): boolean {
    return (
        token.path.length >= 2 &&
        token.path[0] === "font" &&
        ["face", "family"].includes(token.path[1])
    );
}

/**
 * Filter som identifiserer fargetokens med lys/mørk-verdier.
 * Disse tokenene blir behandlet med css/color-scheme-formatet
 * og bruker CSS light-dark()-funksjonen for automatisk fargevalg.
 */
export const isColorSchemeValue: Filter = {
    name: "isColorSchemeValue",
    filter: isColorSchemeToken,
};

/**
 * Filter som identifiserer størrelsesavhengige tokens.
 * Disse tokenene har ulike verdier for small, medium og large,
 * og blir eksportert med data-size-attributtselektorer i CSS.
 */
export const isSizeValue: Filter = {
    name: "isSizeValue",
    filter: isSizeToken,
};

/**
 * Filter for statiske tokens som verken er fargetema-avhengige (lys/mørk)
 * eller størrelsesavhengige (small/medium/large).
 * Disse tokenene eksporteres som vanlige CSS custom properties,
 * Sass-variabler og TypeScript-konstanter.
 */
export const isStaticToken: Filter = {
    name: "isStaticToken",
    filter: (token) => !isColorSchemeToken(token) && !isSizeToken(token),
};

/**
 * Filter for distributørspesifikke fonttokens.
 * Brukes for å generere @font-face og --jkl-font-family-* i brands/_fonts.scss.
 */
export const isBrandFontValue: Filter = {
    name: "isBrandFontValue",
    filter: isBrandFontToken,
};
