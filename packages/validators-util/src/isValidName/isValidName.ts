// https://en.wikipedia.org/wiki/List_of_Unicode_characters
// Checks for all Punctuation, Symbols or Digits until Unicode position 191, but allows Apostrophe and Minus
export const INVALID_NAME_REGEX = /[!-&(-,.-@\[-`{-¿]+/;

export const isValidName = (value: string): boolean => !INVALID_NAME_REGEX.test(value);
