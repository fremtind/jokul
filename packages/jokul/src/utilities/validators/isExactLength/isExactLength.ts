/**
 * Sjekker om verdien er av eksakt lengde.
 * @param value Verdien som skal valideres
 * @param length Lengden verdien må ha for å anses som gyldig
 * @returns Om verdien er av eksakt lengde
 */
export const isExactLength = (value: string, length: number): boolean => {
    if (!length) {
        throw new Error("isExactLength must receive length");
    }

    return value.length === length;
};
