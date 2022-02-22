import { unicode } from "@fremtind/jkl-constants-util";

export const TELEFONNUMMER_REGEX = {
    mobil: /^([4|9|8]\d{2})(\d{2})(\d{3})$/,
    fast: /^([2-7]\d)(\d{2})(\d{2})(\d{2})$/,
    mobilPartial: /^([4|9|8]\d{2})(\d{1,2})?(\d{1,3})?$/,
    fastPartial: /^([2-7]\d)(\d{1,2})?(\d{1,2})?(\d{1,2})?$/,
};

type FormatTelefonnummerOptions = {
    partial?: boolean;
};

export function formatTelefonnummer(input: string, options?: FormatTelefonnummerOptions) {
    const strippedInput = input.replace(/\W/g, "");
    const mobilRegex = options?.partial ? TELEFONNUMMER_REGEX.mobilPartial : TELEFONNUMMER_REGEX.mobil;
    const fastRegex = options?.partial ? TELEFONNUMMER_REGEX.fastPartial : TELEFONNUMMER_REGEX.fast;

    const match = strippedInput.match(mobilRegex) || strippedInput.match(fastRegex);

    if (!match) {
        return input;
    }

    return match.slice(1).filter(Boolean).join(unicode.NON_BREAKING_SPACE);
}
