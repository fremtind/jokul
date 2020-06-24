export const CHASSISNR_REGEX = /^\d{9}$/;

export const isValidChassisnummer = (value: string) => CHASSISNR_REGEX.test(value);
