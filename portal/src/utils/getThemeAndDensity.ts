/**
 * Retrieves the theme and density from the computed styles of a given element.
 *
 * This utility is specifically designed for scenarios where the side menu is rendered
 * at the root level, requiring us to fetch the local dark/light theme value from the trigger element.
 * This is necessary because the theme can be controlled locally for different parts of the UI.
 *
 * @param element - The HTML element to compute styles from.
 * @returns An object containing the theme ('dark' or 'light') and density ('compact' or 'comfortable').
 */
export const getThemeAndDensity = (element: HTMLElement | null): { theme?: string; density?: string } => {
    if (!element) return {};

    const computedStyles = getComputedStyle(element);

    const theme =
        parseInt(computedStyles.getPropertyValue("--jkl-background-color").replace("#", ""), 16) < 0xffffff / 2
            ? "dark"
            : "light";

    const density = computedStyles.getPropertyValue("--jkl-density") === '"compact"' ? "compact" : "comfortable";

    return { theme, density };
};
