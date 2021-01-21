export const DOGID_REGEX = /^5780[0-9]{11}$/;

export const isValidDogId = (value: string) => DOGID_REGEX.test(value);
