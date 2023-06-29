const ILLEGAL_CHARS_REGEX = /[[\]{}%¤/()$@£€^~*?_;:"]+/;
export const ILLEGAL_CHARS_STRING = '[]{}%¤/()$@£€^~*?_;:"';

/**
 * Sjekker at verdien ikke har spesialtegn som ikke er tillatt.
 * @param value Verdien som skal valideres
 * @returns Om verdien er fri for spesialtegn som ikke er tillatt
 */
export const hasNoIllegalCharacters = (value: string): boolean => !ILLEGAL_CHARS_REGEX.test(value);
