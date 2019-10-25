export interface SelectValuePair {
    value: string;
    label: string;
}

export function getSelectValuePair(item: string | SelectValuePair): SelectValuePair {
    return typeof item === "string" ? { value: item, label: item } : item;
}
