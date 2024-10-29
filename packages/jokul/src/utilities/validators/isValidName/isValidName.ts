// https://en.wikipedia.org/wiki/List_of_Unicode_characters
// Checks for all Punctuation, Symbols or Digits until Unicode position 191, but allows Apostrophe and Minus
export const INVALID_NAME_REGEX = /[!-&(-,.-@\[-`{-¿]+/;

/**
 * Sjekker om verdien inneholder spesialtegn som ikke er vanlige i navn.
 * @param value Verdien som skal valideres
 * @returns Om verdien anses som et gyldig navn
 */
export const isValidName = (value: string): boolean =>
    !INVALID_NAME_REGEX.test(value);
