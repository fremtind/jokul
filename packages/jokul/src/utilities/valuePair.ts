export type ValuePair = {
    value: string;
    label: string;
    description?: string;
};

export function getValuePair(item: string | ValuePair): ValuePair {
    return typeof item === "string" ? { value: item, label: item } : item;
}
