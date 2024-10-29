const replaceAllButLastOccurence = (
    input: string | string[],
    search: string,
) => {
    const arrInput = Array.isArray(input) ? input : input.split("");
    const indexOfSearch = arrInput.lastIndexOf(search);

    return (
        arrInput
            // remove all instances of the notator except the last one
            .filter((f, i) => {
                if (f !== search) {
                    return true;
                }

                return i === indexOfSearch;
            })
            .join("")
    );
};

/**
 * Parser en formatert string til et Number.
 * @param input Kandidaten som skal parses til et tall
 * @returns Verdien som et Number
 */
export function parseNumber(input: string | number) {
    if (typeof input === "number") {
        return input;
    }

    // remove all spaces from number
    const spaceRegex = /\s/g;
    const arrNumber = input.replaceAll(spaceRegex, "").split("");

    // find what separator is used for decimal notation
    const decimalNotator = arrNumber.reduce<"." | "," | null>(
        (notator, currentItem) => {
            if (currentItem === "," || currentItem === ".") {
                return currentItem;
            }

            return notator;
        },
        null,
    );

    if (decimalNotator === ".") {
        return Number(
            replaceAllButLastOccurence(arrNumber, ".").replace(",", ""),
        );
    } else if (decimalNotator === ",") {
        return Number(
            replaceAllButLastOccurence(arrNumber, ",")
                .replace(".", "")
                .replace(",", "."),
        );
    } else {
        return Number(arrNumber.join(""));
    }
}
