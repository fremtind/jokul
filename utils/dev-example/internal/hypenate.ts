export const hyphenate = (phrase: string): string =>
    phrase.replace(/\ ./, (match) => `-${match.slice(-1)}`).toLowerCase();
