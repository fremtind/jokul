export const hyphenate = (phrase: string) => phrase.replace(/\ ./, (match) => `-${match.slice(-1)}`).toLowerCase();
