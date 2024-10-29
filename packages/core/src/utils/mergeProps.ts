export function mergeProps(
    baseProps: Record<string, any>,
    addedProps: Record<string, any>,
) {
    const overrides = { ...addedProps };

    for (const prop in addedProps) {
        const basePropValue = baseProps[prop];
        const addedPropValue = addedProps[prop];

        if (/^on[A-Z]/.test(prop)) {
            // Propen er en event handler. Slå sammen hvis
            // den finnes på både base og added
            if (basePropValue && addedPropValue) {
                overrides[prop] = (...args: unknown[]) => {
                    addedPropValue(...args);
                    basePropValue(...args);
                };
            } else if (basePropValue) {
                overrides[prop] = basePropValue;
            }
        }

        if (prop === "style") {
            overrides[prop] = { ...basePropValue, ...addedPropValue };
        }

        if (prop === "className") {
            overrides[prop] = [basePropValue, addedPropValue]
                .filter(Boolean)
                .join(" ");
        }
    }

    return { ...baseProps, ...overrides };
}
