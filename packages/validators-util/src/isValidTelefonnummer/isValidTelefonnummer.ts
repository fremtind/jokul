export const PHONENR_REGEX = /^\d{8}$/;

export const isValidTelefonnummer = (value: string): boolean => PHONENR_REGEX.test(value);
