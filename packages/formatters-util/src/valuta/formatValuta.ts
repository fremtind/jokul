import { unicode } from "@fremtind/jkl-constants-util";
import { formatNumber, FormatNumberOptions } from "../util/formatNumber";
import { parseNumber } from "../util/parseNumber";

interface FormatValutaOptions extends FormatNumberOptions {
    prefix?: string;
    /**
     * For å fjerne suffix, send inn en tom streng
     * @default "kr"
     */
    suffix?: string;
}

const defaultOptions: FormatValutaOptions = {
    locale: "no-NB",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    suffix: "kr",
};

/**
 * Formaterer et gitt tall som valuta. Som standard vises suffikset "kr" og tallet formateres med norsk lokalisasjon
 *
 * @param input Tallet som skal formateres til valuta
 * @param options Valgene fra formatNumber, pluss valg for prefix og suffix
 * @returns Formatert beløp
 */
export function formatValuta(input: string | number, options?: FormatValutaOptions) {
    const number = parseNumber(input);
    if (isNaN(number)) {
        return input.toString();
    }

    // Dersom tallet ikke er et heltall, pass på å alltid vise to desimaler
    // Antall desimaler kan i alle tilfeller overstyres via options
    const fractionOptions: Intl.NumberFormatOptions = Number.isInteger(number)
        ? {}
        : { minimumFractionDigits: 2, maximumFractionDigits: 2 };

    const suffix = options?.suffix !== undefined ? options.suffix : defaultOptions.suffix;
    const { prefix, ...formatOptions } = { ...defaultOptions, ...fractionOptions, ...options };

    const prefixString = prefix?.length ? `${prefix}${unicode.nbsp}` : "";
    const suffixString = suffix?.length ? `${unicode.nbsp}${suffix}` : "";
    const formattedNumber = formatNumber(number, formatOptions);

    return `${prefixString}${formattedNumber}${suffixString}`;
}
