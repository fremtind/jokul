export const EMAIL_REGEX =
    /^[a-zA-ZæøåÆØÅ0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-ZæøåÆØÅ0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

/**
 * Sjekker om verdien validerer som en gyldig epostadresse.
 * @param value Verdien som skal valideres
 * @returns Om verdien matcher regex for epost
 */
export const isValidEpost = (value: string): boolean => EMAIL_REGEX.test(value);
