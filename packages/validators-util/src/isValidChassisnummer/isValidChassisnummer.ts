export const CHASSISNR_REGEX = /^[a-zA-Z0-9]{9,17}$/;

export const isValidChassisnummer = (value: string) => CHASSISNR_REGEX.test(value);
