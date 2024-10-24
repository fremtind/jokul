export const camelToKebab = (camelCasedString: string) =>
    camelCasedString.replace(/([A-Z])/g, '-$1').toLocaleLowerCase();

export const hyphenate = (phrase: string): string =>
    phrase.replace(/\s./, (match) => `-${match.slice(-1)}`).toLowerCase();

export const slugify = (input: string) =>
    input
        .toLocaleLowerCase()
        .replace(/æ/g, 'ae')
        .replace(/ø/, 'oe')
        .replace(/å/, 'aa')
        .replace(/(\W)/g, '-');
