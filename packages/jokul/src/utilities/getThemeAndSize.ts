import type { Size } from "./types.js";

/*
 * For komponenter som mountes utenfor roten av applikasjonen vil styring av theme og size
 * via data-attributter satt på rot ikke fungere. Denne util'en kan brukes av slike komponenter
 * for å finne riktige verdier ved å sende inn et element som er mountet innenfor applikasjonen
 */
export const getThemeAndSize = (
    element: Element | undefined,
): { theme?: string; size?: Size } => {
    if (!element) return {};

    const computedStyles = getComputedStyle(element);

    // Sett theme til dark hvis bakgrunnsfargen er mørkere enn 50% av hvit
    // dette gir oss slingringsmonn i tilfelle verdien av Jøkuls bakgrunnsfarge endres
    const theme = computedStyles.colorScheme;

    const size = element.closest("[data-size]")?.getAttribute("data-size") as
        | Size
        | undefined;

    return { theme, size };
};
