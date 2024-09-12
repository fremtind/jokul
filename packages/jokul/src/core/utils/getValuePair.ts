import { ValuePair } from "../index";

export function getValuePair(item: string | ValuePair): ValuePair {
    return typeof item === "string" ? { value: item, label: item } : item;
}
