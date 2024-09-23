import { unicode } from "../../constants";

export const TELEFONNUMMER_REGEX = {
    mobil: /^([8]\d{2})(\d{2})(\d{3})$/,
    fast: /^([2-9]\d)(\d{2})(\d{2})(\d{2})$/,
    mobilPartial: /^([8]\d{2})(\d{1,2})?(\d{1,3})?$/,
    fastPartial: /^([2-9]\d)(\d{1,2})?(\d{1,2})?(\d{1,2})?$/,
};

type FormatTelefonnummerOptions = {
    partial?: boolean;
    countryCode?: string;
};

/**
 * Formaterer et telefonnummer etter språkrådets anbefalinger. Delene av telefonnummeret skilles med non-breaking space.
 * @param input Verdien som skal formateres
 * @param options Inkluder en valgfri landkode, eller angi at verdien er et ufullstendig telefonnummer og likevel skal formateres.
 * @returns Den formatererte verdien
 */
export function formatTelefonnummer(input: string, options?: FormatTelefonnummerOptions) {
    const strippedInput = input.replace(/\W/g, "");
    const mobilRegex = options?.partial ? TELEFONNUMMER_REGEX.mobilPartial : TELEFONNUMMER_REGEX.mobil;
    const fastRegex = options?.partial ? TELEFONNUMMER_REGEX.fastPartial : TELEFONNUMMER_REGEX.fast;

    const match = strippedInput.match(mobilRegex) || strippedInput.match(fastRegex);

    if (!match) {
        return input;
    }

    return [options?.countryCode ? `+${options.countryCode}` : undefined, ...match.slice(1)] // build array of number elements
        .filter(Boolean) // ensure all elements are valid
        .join(unicode.NON_BREAKING_SPACE); // build formattet string
}
