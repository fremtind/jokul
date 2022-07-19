export function toLower(str = "") {
    return str.toLowerCase().replace(/[\W_]+/g, ""); // strip all non-alphanumeric chars
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
