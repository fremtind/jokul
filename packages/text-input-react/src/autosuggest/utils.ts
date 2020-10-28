import { matchSorter } from "match-sorter";

export function filter<T>(allItems: T[], inputValue: string | null, keys?: string[]) {
    const options = keys ? { keys } : {};
    if (!inputValue) {
        return allItems;
    }
    return matchSorter(allItems, inputValue, options);
}
