import { unicode } from "@forbrukerradet/jkl-constants-util";

export const KONTONUMMER_REGEX = {
    full: /^(\d{4})(\d{2})(\d{5})$/,
    partial: /^(\d{4})(\d{1,2})?(\d{1,5})?$/,
};

type FormatKontonummerOptions = {
    partial?: boolean;
    separator?: string;
};

export function formatKontonummer(input: string, options?: FormatKontonummerOptions) {
    const strippedInput = input.replace(/\W/g, "");
    const regex = options?.partial ? KONTONUMMER_REGEX.partial : KONTONUMMER_REGEX.full;

    const match = strippedInput.match(regex);

    if (!match) {
        return input;
    }

    return match
        .slice(1)
        .filter(Boolean)
        .join(options?.separator || unicode.NON_BREAKING_SPACE);
}
