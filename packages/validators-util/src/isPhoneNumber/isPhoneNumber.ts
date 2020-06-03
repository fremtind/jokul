export const PHONENR_REGEX = /^\d{8}$/;

export const isPhoneNumber = (value: string) => PHONENR_REGEX.test(value);
