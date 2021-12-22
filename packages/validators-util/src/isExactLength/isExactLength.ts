export const isExactLength = (value: string, length: number): boolean => {
    if (!length) {
        throw new Error("isExactLength must receive length");
    }

    return value.length === length;
};
