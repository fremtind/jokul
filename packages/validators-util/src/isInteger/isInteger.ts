export const INTEGER_REGEX = /^-?[\s\d]+$/;

export const isInteger = (value: string | number): boolean => {
    return INTEGER_REGEX.test(String(value));
};
