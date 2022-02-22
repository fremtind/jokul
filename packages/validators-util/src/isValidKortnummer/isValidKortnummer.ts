const KORTNUMMER_REGEX = /^(\d{4}\s?){4}$/;

const luhn = (input: string) => {
    const inputAsArray = input.replace(/\D/g, "").split("");

    if (inputAsArray.length !== 15) {
        return null;
    }

    function multiplyDigit(index: number, number: string) {
        // Gang hver andre index med 2 (index 0, 2, 4, etc.)
        const multiplier = index % 2 === 0 ? 2 : 1;
        const rawNumber = Number.parseInt(number) * multiplier;
        // Legg sammen sifrene hvis rawNumber har to sifre
        const crossSum = Math.floor(rawNumber / 10) + (rawNumber % 10);

        return crossSum;
    }

    const checksum = inputAsArray.reduce((sum, digit, index) => sum + multiplyDigit(index, digit), 0);
    const checkDigit = Math.abs((checksum % 10) - 10);

    return checkDigit;
};

export const isValidKortnummer = (input: string) => {
    if (!KORTNUMMER_REGEX.test(input)) {
        return false;
    }

    const strippedInput = input.replace(/\D/g, "");
    const checkDigit = Number.parseInt(strippedInput.slice(-1));
    const firstFifteen = strippedInput.substring(0, strippedInput.length - 1);

    return checkDigit === luhn(firstFifteen);
};
