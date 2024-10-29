export interface HasMinimumWordsOptions {
    minimumWords?: number;
}

/**
 * Sjekk at verdien har minimum et gitt antall ord.
 * @param value Verdien som skal valideres
 * @param options Objekt med konfigurasjon for minimum antall ord som kreves
 * @returns Om verdien har minimum antall ord
 */
export const hasMinimumWords = (
    value: string,
    options?: HasMinimumWordsOptions,
): boolean =>
    value.split(" ").filter((str) => !["", " "].includes(str)).length >=
    (options?.minimumWords || 2);
