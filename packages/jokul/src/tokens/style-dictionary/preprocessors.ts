import type { Preprocessor } from "style-dictionary/types";

type TokenNode = Record<string, unknown>;
type LightDarkValue = { light: string; dark: string };

const REFERENCE_PATTERN = /^\{([^{}]+)\}$/;

function isLightDark(value: unknown): value is LightDarkValue {
    return (
        typeof value === "object" &&
        value !== null &&
        "light" in value &&
        "dark" in value
    );
}

function getAtPath(root: TokenNode, path: string): TokenNode | undefined {
    let node: unknown = root;
    for (const key of path.split(".")) {
        if (typeof node !== "object" || node === null) return undefined;
        node = (node as TokenNode)[key];
    }
    return typeof node === "object" && node !== null
        ? (node as TokenNode)
        : undefined;
}

/**
 * Følger en (eventuelt kjedet) referanse og returnerer lys/mørk-verdien den
 * peker på. Returnerer `undefined` hvis verdien ikke ender i et lys/mørk-token,
 * eller hvis referansene er sirkulære.
 */
function resolveLightDark(
    root: TokenNode,
    value: unknown,
    seen: Set<string> = new Set(),
): LightDarkValue | undefined {
    if (isLightDark(value)) return value;
    if (typeof value !== "string") return undefined;

    const path = REFERENCE_PATTERN.exec(value)?.[1];
    if (!path || seen.has(path)) return undefined;
    seen.add(path);

    const target = getAtPath(root, path);
    return resolveLightDark(root, target?.value, seen);
}

function inlineReferences(root: TokenNode, node: TokenNode): void {
    for (const child of Object.values(node)) {
        if (typeof child !== "object" || child === null) continue;
        const token = child as TokenNode;

        if ("value" in token) {
            const resolved = resolveLightDark(root, token.value);
            if (resolved && token.value !== resolved) {
                token.value = { ...resolved };
            }
        } else {
            inlineReferences(root, token);
        }
    }
}

/**
 * Filtrene kjører før referanser er løst, så et token som peker på et
 * lys/mørk-token (f.eks. `{color.@.background.page}`) ser ikke ut som et
 * fargeschema-token og blir filtrert bort. Her erstatter vi slike referanser
 * med verdien de peker på, før transforms og filtre kjører.
 */
export const inlineColorSchemeReferences: Preprocessor = {
    name: "jkl/inline-color-scheme-references",
    preprocessor: (dictionary) => {
        inlineReferences(dictionary as TokenNode, dictionary as TokenNode);
        return dictionary;
    },
};
