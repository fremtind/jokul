export const getComputedProperty = (node: HTMLElement | SVGSVGElement | null, cssProperty: string) => {
    return (node && window?.getComputedStyle(node)?.getPropertyValue(cssProperty)) || "N/A";
};
