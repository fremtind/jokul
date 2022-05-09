import { unicode } from "@forbrukerradet/jkl-constants-util";

export const FODSELSNUMMER_REGEX = {
    full: /^(\d{6})(\d{5})$/,
    partial: /^(\d{6})(\d{1,5})?$/,
};

type FormatFodselsnummerOptions = {
    partial?: boolean;
};

export function formatFodselsnummer(input: string, options?: FormatFodselsnummerOptions) {
    const strippedInput = input.replace(/\W/g, "");
    const regex = options?.partial ? FODSELSNUMMER_REGEX.partial : FODSELSNUMMER_REGEX.full;

    const match = strippedInput.match(regex);

    if (!match) {
        return input;
    }

    return match.slice(1).filter(Boolean).join(unicode.NON_BREAKING_SPACE);
}
