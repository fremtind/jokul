import { unicode } from "../../constants/index.js";

export const KONTONUMMER_REGEX = {
    full: /^(\d{4})(\d{2})(\d{5})$/,
    partial: /^(\d{4})(\d{1,2})?(\d{1,5})?$/,
};

type FormatKontonummerOptions = {
    partial?: boolean;
    separator?: string;
};

/**
 * Formaterer et kontonummer, med eller uten punktum som skilletegn. Default er med non-breaking space.
 * @param input Verdien som skal formateres
 * @param options Angi at verdien er et ufullstendig kontonummer og likevel skal formateres.
 * @returns Den formaterte verdien
 */
export function formatKontonummer(
    input: string,
    options?: FormatKontonummerOptions,
) {
    const strippedInput = input.replace(/\W/g, "");
    const regex = options?.partial
        ? KONTONUMMER_REGEX.partial
        : KONTONUMMER_REGEX.full;

    const match = strippedInput.match(regex);

    if (!match) {
        return input;
    }

    return match
        .slice(1)
        .filter(Boolean)
        .join(options?.separator || unicode.NON_BREAKING_SPACE);
}
