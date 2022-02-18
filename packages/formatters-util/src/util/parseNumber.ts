export function parseNumber(input: string | number) {
    if (typeof input === "number") {
        return input;
    }

    // fjern tegn som ikke kan tolkes som tall og erstatt kommadesimal
    const strippedInput = input
        .replace(/[^\d.,-]/g, "")
        .replace(/[.,](\d{3})/g, "$1")
        .replace(/,/g, ".");
    const parsedNumber = Number.parseFloat(strippedInput);

    if (Number.isNaN(parsedNumber) || typeof parsedNumber !== "number") {
        return null;
    }

    return parsedNumber;
}
