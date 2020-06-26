export const PHONENR_REGEX = /^\d{8}$/;

export const isValidTelefonnummer = (value: string) => PHONENR_REGEX.test(value);
