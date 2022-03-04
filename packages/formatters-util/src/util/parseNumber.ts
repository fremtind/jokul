const replaceAllButLastOccurence = (input: string | string[], search: string) => {
    // indexOf returns the first index, so flip the input to find the
    // notator furthest back
    const arrInput = Array.isArray(input) ? input.reverse() : input.split("").reverse();
    const indexOfSearch = arrInput.indexOf(search);

    return (
        arrInput
            // remove all instances of the notator except the last one
            .filter((f, i) => {
                if (f !== search) {
                    return true;
                }

                return i === indexOfSearch;
            })
            // flip back and return as string
            .reverse()
            .join("")
    );
};

export function parseNumber(input: string | number) {
    if (typeof input === "number") {
        return input;
    }

    // remove all spaces from number
    const arrNumber = input.split("").filter((n) => n !== " ");

    // find what separator is used for decimal notation
    const decimalNotator = arrNumber.reduce<"." | "," | null>((notator, currentItem) => {
        if (currentItem === "," || currentItem === ".") {
            return currentItem;
        }

        return notator;
    }, null);

    if (decimalNotator === ".") {
        return Number(replaceAllButLastOccurence(arrNumber, ".").replace(",", ""));
    } else if (decimalNotator === ",") {
        return Number(replaceAllButLastOccurence(arrNumber, ",").replace(".", "").replace(",", "."));
    } else {
        return Number(arrNumber.join(""));
    }
}
