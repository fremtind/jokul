import { formatNumber, FormatNumberOptions } from "../util/formatNumber.js";
import { parseNumber } from "../util/parseNumber.js";

export type LengthUnit =
    | "kilometer"
    | "meter"
    | "decimeter"
    | "centimeter"
    | "millimeter"
    | "micrometer"
    | "nanometer"
    | "picometer"
    | "mile"
    | "yard"
    | "foot"
    | "inch"
    | "point";

export interface FormatAvstandOptions extends FormatNumberOptions {
    /**
     * Lengdeenheten som skal vises for tallet, f.eks. "kilometer" eller "foot".
     * Hvis du _ikke_ ønsker å vise noen enhet bør du heller bruke `formatNumber` direkte.
     *
     * @default "kilometer"
     */
    unit?: LengthUnit;
    /**
     * Valgfritt suffiks som vises etter lengdeenheten. Ønsker du for eksempel
     * å vise "km/år" kan du setter "kilometer" som `unit` og "/år" som `suffix`.
     */
    suffix?: string;
}

const defaultOptions: FormatNumberOptions = {
    style: "unit",
    unit: "kilometer",
};

/**
 * Formaterer en avstand med norsk locale på tallverdien.
 * @param input Verdien som skal formateres
 * @param options Lengdeenheten som skal vises for tallet, f.eks. "kilometer" eller "foot". Default: "kilometer". Kan også angi en valgfri suffix, f.eks. "/år".
 * @returns Den formaterte verdien.
 */
export function formatAvstand(
    input: string | number,
    options?: FormatAvstandOptions,
) {
    const number = parseNumber(input);
    if (!number) {
        return input.toString();
    }

    const { suffix, ...formatOptions } = { ...defaultOptions, ...options };

    return [formatNumber(number, formatOptions), suffix].join("");
}
