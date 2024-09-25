/**
 * This algorithm is called the Modulus 11 algorithm, and produces a checksum
 * based on its input. It's documented very well in Norwegian here:
 * https://no.wikipedia.org/wiki/MOD11
 *
 * It's used here to validate that an organization number is valid.
 */
const calculateChecksum = (reversedNumbers: number[]) => {
    const controlSum = reversedNumbers.map((number, i) => number * ((i % 6) + 2)).reduce((a, b) => a + b, 0);
    const result = 11 - (controlSum % 11);
    return result === 11 ? 0 : result;
};

/**
 * Sjekker om verdien validerer som et gyldig organisasjonsnummer etter Modulus 11-algoritmen (https://no.wikipedia.org/wiki/MOD11).
 * @param value Verdien som skal valideres
 * @returns Om verdien er et gyldig organisasjonsnummer
 */
export const isValidOrganisasjonsnummer = (value: string) => {
    if (!value || value.length !== 9) {
        return false;
    }

    const [controlDigit, ...numbers] = value
        .split("")
        .map((number) => Number(number))
        .reverse();

    return calculateChecksum(numbers) === controlDigit;
};
