import { unicode } from "@fremtind/jokul";

export const camelToKebab = (camelCasedString: string) =>
    camelCasedString.replace(/([A-Z])/g, "-$1").toLocaleLowerCase();

export const hyphenate = (phrase: string): string =>
    phrase.replace(/\s./, (match) => `-${match.slice(-1)}`).toLowerCase();

export const slugify = (input: string) =>
    input
        .toLocaleLowerCase()
        .replace(/æ/g, "ae")
        .replace(/ø/, "oe")
        .replace(/å/, "aa")
        .replace(/(\W)/g, "-");

// Split en string med camel (eller Title-) Case ord og putt inn
// HTML encoded softbreaks slik at veldigLangeOrdICamelCase senere
// kan brekkes på bedre steder enn "tilfeldig".
export const camelShyte = (camelCasedString: string) =>
    camelCasedString.replace(/([a-z](?=[A-Z]))/g, `$1${unicode.SOFT_HYPHEN}`);
