export interface SelectValuePair {
    value: string;
    label: string;
}

export function getSelectValuePairFrom(item: string | SelectValuePair): SelectValuePair {
    return typeof item === "string" ? { value: item, label: item } : item;
}
