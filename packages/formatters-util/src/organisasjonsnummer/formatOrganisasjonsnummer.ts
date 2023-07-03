import { unicode } from "@fremtind/jkl-constants-util";

export const ORGANISASJONSNUMMER_REGEX = {
    full: /^(\d{3})(\d{3})(\d{3})$/,
    partial: /^(\d{3})(\d{1,3})?(\d{1,5})?$/,
};

type FormatOrganisasjonsnummerOptions = {
    partial?: boolean;
};

/**
 * Formaterer et organisasjonsnummer. Delene av organisasjonsnummeret skilles med non-breaking space.
 * @param input Verdien som skal formateres
 * @param options Angi at verdien er et ufullstendig organisasjonsnummer og likevel skal formateres.
 * @returns Den formaterte verdien
 */
export function formatOrganisasjonsnummer(input: string, options?: FormatOrganisasjonsnummerOptions) {
    const strippedInput = input.replace(/[\s-.]/g, "");
    const regex = options?.partial ? ORGANISASJONSNUMMER_REGEX.partial : ORGANISASJONSNUMMER_REGEX.full;

    const match = strippedInput.match(regex);

    if (!match) {
        return input;
    }

    return match.slice(1).filter(Boolean).join(unicode.NON_BREAKING_SPACE);
}
