import matchSorter from "match-sorter";

export function createFilter<T>(keys?: string[]) {
    const options = keys ? { keys } : {};
    return (allItems: T[], inputValue: string | null) => {
        if (!inputValue) {
            return allItems;
        }
        return matchSorter(allItems, inputValue, options);
    };
}
