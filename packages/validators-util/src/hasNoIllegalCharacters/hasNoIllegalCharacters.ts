const ILLEGAL_CHARS_REGEX = /[[\]{}%¤/()$@£€^~*?_;:"]+/;
export const ILLEGAL_CHARS_STRING = '[]{}%¤/()$@£€^~*?_;:"';

export const hasNoIllegalCharacters = (value: string): boolean => !ILLEGAL_CHARS_REGEX.test(value);
