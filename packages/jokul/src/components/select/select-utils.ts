export function toLower(str = "") {
    return str.toLowerCase().replace(/[\W_]+/g, ""); // strip all non-alphanumeric chars
}

export function focusSelected(
    listEl: HTMLElement,
    selected: string | undefined,
) {
    let focusedItem: HTMLElement | null = null;
    if (selected) {
        // Move focus to selected option
        focusedItem = listEl.querySelector(
            `[aria-selected="true"]:not([hidden])`,
        );
    }
    if (!selected || !focusedItem) {
        // Move focus to first option if either no selected value or the value could not be found.
        // This may happen with searchable selects if the currently selected value is filtered out.
        focusedItem = listEl.querySelector('[role="option"]');
    }
    focusedItem?.focus();
    // Make sure the selected/focused item is visible in the list if it scrolls
    listEl.scrollTop = focusedItem?.offsetTop || 0;
}
