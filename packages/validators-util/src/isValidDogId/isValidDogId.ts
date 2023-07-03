export const DOGID_REGEX = /^5780[0-9]{11}$/;

/**
 * Validerer at verdien er et gyldig norsk ID-nummer for hund.
 * @deprecated This only validates norwegian id-tags, that is probably more restrictive than you want
 * expect this function to change, use carefully
 */
export const isValidDogId = (value: string): boolean => DOGID_REGEX.test(value);
