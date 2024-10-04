/*
 * For komponenter som mountes utenfor roten av applikasjonen vil styring av theme og density
 * via data-attributter satt på rot ikke fungere. Denne util'en kan brukes av slike komponenter
 * for å finne riktige verdier ved å sende inn et element som er mountet innenfor applikasjonen
 */
export const getThemeAndDensity = (element: Element | undefined): { theme?: string; density?: string } => {
    if (!element) return {};

    const computedStyles = getComputedStyle(element);

    // Sett theme til dark hvis bakgrunnsfargen er mørkere enn 50% av hvit
    // dette gir oss slingringsmonn i tilfelle verdien av Jøkuls bakgrunnsfarge endres
    const theme =
        parseInt(computedStyles.getPropertyValue("--jkl-background-color").replace("#", ""), 16) < 0xffffff / 2
            ? "dark"
            : "light";

    const density = computedStyles.getPropertyValue("--jkl-density") === '"compact"' ? "compact" : "comfortable";

    return { theme, density };
};
