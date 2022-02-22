import { formatNumber, FormatNumberOptions } from "../util/formatNumber";
import { parseNumber } from "../util/parseNumber";

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

export function formatAvstand(input: string | number, options?: FormatAvstandOptions) {
    const number = parseNumber(input);
    if (!number) {
        return input.toString();
    }

    const { suffix, ...formatOptions } = { ...defaultOptions, ...options };

    return [formatNumber(number, formatOptions), suffix].join("");
}
