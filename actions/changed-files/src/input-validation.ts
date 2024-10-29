export function validatePatternsInput(input: string): string {
    if (!input) {
        throw new Error(
            `The action must be given an input named "patterns" with either a single pattern as a string or a multiline string list of patterns`,
        );
    }
    return input;
}

export function toList(input: string): string[] {
    if (Array.isArray(input)) {
        return input;
    }
    return input.split(/\n/);
}

export function validateOutputInput(
    input: string,
    defaultOutput = "string",
): "string" | "array" {
    if (!input) {
        return defaultOutput as "string";
    }

    const validValues: string[] = ["string", "array"];
    if (!validValues.includes(input)) {
        throw new Error(`Variable "output" must be one of ${validValues}`);
    }

    return input as "string" | "array";
}
