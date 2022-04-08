import type { ValuePair } from "@fremtind/jkl-core";

export function toLower(str = "") {
    return str.toLowerCase().replace(/[\W_]+/g, ""); // strip all non-alphanumeric chars
}

export function toItemLabel(value: string | undefined, items: Array<string | ValuePair>): string {
    if (!value) {
        return "";
    }
    const item = items.find((i) => (typeof i === "string" ? i === value : i.value === value));
    if (!item) {
        return value;
    }
    return typeof item === "string" ? item : item.label;
}

export function focusSelected(listEl: HTMLElement, selected: string | undefined) {
    let focusedItem: HTMLElement | null;
    if (selected) {
        // move focus to selected option
        focusedItem = listEl.querySelector(`[aria-selected="true"]`);
    } else {
        // move focus to first option
        focusedItem = listEl.querySelector('[role="option"]');
    }
    focusedItem?.focus();
}
