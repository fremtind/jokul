export const CHASSISNR_REGEX = /^\d{9}$/;

export const isChassisNumber = (value: string) => CHASSISNR_REGEX.test(value);
