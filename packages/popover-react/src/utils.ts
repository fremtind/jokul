export const getThemeAndDensity = (element: Element | undefined): { theme?: string; density?: string } => {
    if (!element) return {};

    const computedStyles = getComputedStyle(element);

    const theme =
        parseInt(computedStyles.getPropertyValue("--jkl-background-color").replace("#", ""), 16) < 0xffffff / 2
            ? "dark"
            : "light";

    const density = computedStyles.getPropertyValue("--jkl-density") === '"compact"' ? "compact" : "comfortable";

    return { theme, density };
};
