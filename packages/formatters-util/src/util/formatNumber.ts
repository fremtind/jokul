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

export function formatNumber(input: string | number, options?: FormatNumberOptions) {
    const number = parseNumber(input);
    if (!number) {
        return input.toString();
    }

    const { locale, ...otherOptions } = { ...defaultOptions, ...options };
    const formatter = new Intl.NumberFormat(locale, otherOptions);

    return formatter.format(number);
}
