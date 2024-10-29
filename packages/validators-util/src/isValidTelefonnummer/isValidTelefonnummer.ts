export const PHONENR_REGEX = /^\d{8}$/;

/**
 * Validerer om en kandidat er et gyldig (uformatert) telefonnummer uten landkode.
 * @param value Kandidat for telefonnummer
 * @returns Om kandidaten er et gyldig telefonnummer
 */
export const isValidTelefonnummer = (value: string): boolean =>
    PHONENR_REGEX.test(value);
