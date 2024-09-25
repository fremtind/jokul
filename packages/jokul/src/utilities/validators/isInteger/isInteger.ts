export const INTEGER_REGEX = /^-?[\s\d]+$/;

/**
 * Sjekker om verdien er et gyldig heltall.
 * @param value Verdien som skal valideres
 * @returns Om verdien er et gyldig heltall
 */
export const isInteger = (value: string | number): boolean => {
    return INTEGER_REGEX.test(String(value));
};
