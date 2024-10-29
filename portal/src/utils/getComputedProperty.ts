export const getComputedProperty = (
    node: HTMLElement | SVGSVGElement | null,
    cssProperty: string,
): string => {
    return (
        (node &&
            window?.getComputedStyle(node)?.getPropertyValue(cssProperty)) ||
        "N/A"
    );
};
