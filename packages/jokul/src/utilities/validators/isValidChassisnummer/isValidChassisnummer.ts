export const CHASSISNR_REGEX = /^[a-zA-Z0-9]{9,17}$/;

/**
 * Sjekker om verdien validerer som et gyldig chassisnummer.
 * @param value Verdien som skal valideres
 * @returns Om verdien matcher regex for chassisnummer
 */
export const isValidChassisnummer = (value: string): boolean => CHASSISNR_REGEX.test(value);
