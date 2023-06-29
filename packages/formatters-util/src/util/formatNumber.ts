import { parseNumber } from "./parseNumber";

export interface FormatNumberOptions extends Intl.NumberFormatOptions {
    /**
     * Hvilken lokalisasjon tallet skal formateres med
     * @default "no-NB"
     */
    locale?: string;
}

const defaultOptions: FormatNumberOptions = {
    locale: "no-NB",
};

/**
 * Formaterer et tall med norsk locale.
 * @param input Verdien som skal formateres
 * @param options Innstillinger for formateringen. Se https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options for detaljer.
 * @returns Den formatererte verdien
 */
export function formatNumber(input: string | number, options?: FormatNumberOptions): string {
    const number = parseNumber(input);
    if (!number) {
        return input.toString();
    }

    const { locale, ...otherOptions } = { ...defaultOptions, ...options };
    const formatter = new Intl.NumberFormat(locale, otherOptions);

    return formatter.format(number);
}
