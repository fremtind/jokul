export const CHASSISNR_REGEX = /^[a-zA-Z0-9]{9,17}$/;

export const isValidChassisnummer = (value: string): boolean => CHASSISNR_REGEX.test(value);
