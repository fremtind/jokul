/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: unknown): boolean {
    return Boolean(item) && typeof item === "object" && !Array.isArray(item);
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
export default function deepMerge<T extends object, R>(
    target: T,
    source: R,
): T {
    const output = { ...target };
    /* eslint-disable @typescript-eslint/ban-ts-comment */
    if (isObject(target) && isObject(source)) {
        // @ts-ignore
        Object.keys(source).forEach((key) => {
            // @ts-ignore
            if (isObject(source[key])) {
                if (!(key in target)) {
                    // @ts-ignore
                    Object.assign(output, { [key]: source[key] });
                } else {
                    // @ts-ignore
                    output[key] = deepMerge(target[key], source[key]);
                }
            } else {
                // @ts-ignore
                Object.assign(output, { [key]: source[key] });
            }
        });
    }
    /* eslint-enable @typescript-eslint/ban-ts-comment */

    return output;
}
