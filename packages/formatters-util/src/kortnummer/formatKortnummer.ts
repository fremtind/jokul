import { unicode } from "@forbrukerradet/jkl-constants-util";

export const KORTNUMMER_REGEX = {
    full: /^(\d{4})(\d{4})(\d{4})(\d{4})$/,
    partial: /^(\d{4})(\d{1,4})?(\d{1,4})?(\d{1,4})?$/,
};

type FormatKortnummerOptions = {
    partial?: boolean;
};

export function formatKortnummer(input: string, options?: FormatKortnummerOptions) {
    const strippedInput = input.replace(/[\s-.]/g, "");
    const regex = options?.partial ? KORTNUMMER_REGEX.partial : KORTNUMMER_REGEX.full;

    const match = strippedInput.match(regex);

    if (!match) {
        return input;
    }

    return match.slice(1).filter(Boolean).join(unicode.NON_BREAKING_SPACE);
}
