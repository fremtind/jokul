export const EMAIL_REGEX = /^[a-zA-ZæøåÆØÅ0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-ZæøåÆØÅ0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

export const isValidEpost = (value: string) => EMAIL_REGEX.test(value);
