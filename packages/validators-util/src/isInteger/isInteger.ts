export const INTEGER_REGEX = /^-?[\s\d]+$/;

export const isInteger = (value: string): boolean => {
    return INTEGER_REGEX.test(value);
};
