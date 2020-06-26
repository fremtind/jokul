export const REGNR_REGEX = /^[a-zA-Z]{2}\d{5}/;

export const isValidRegistreringsnummer = (value: string) => REGNR_REGEX.test(value);
