import { useRef, useEffect, RefObject } from "react";

type Timer = NodeJS.Timeout | undefined;
type KeyBuffer = { keys: string } | undefined;
type Direction = "prev" | "next" | "first" | "last";

export function useListNavigation(typeAheadIsEnabled: boolean = true): RefObject<HTMLUListElement> {
    const listRef = useRef<HTMLUListElement>(null);
    let typedKeys: KeyBuffer;
    let searchResetTimer: Timer;
    if (typeAheadIsEnabled) {
        typedKeys = { keys: "" }; // keypress buffer is object to preserve state
    }
    useEffect(() => {
        const listElement = listRef.current;
        if (listElement) {
            listElement.addEventListener("keydown", (event) =>
                handleListKeyNav(listElement, event, typedKeys, searchResetTimer),
            );
        }
    }, []);

    return listRef;
}

function handleListKeyNav(list: HTMLUListElement, event: KeyboardEvent, search: KeyBuffer, searchResetTimer: Timer) {
    const { key, target } = event;
    const currentFocus = target as HTMLButtonElement;
    switch (key) {
        case "ArrowUp":
        case "PageUp":
            event.preventDefault();
            moveFocus(list, currentFocus, "prev");
            break;
        case "ArrowDown":
        case "PageDown":
            event.preventDefault();
            moveFocus(list, currentFocus, "next");
            break;
        case "Home":
            event.preventDefault();
            moveFocus(list, currentFocus, "first");
            break;
        case "End":
            event.preventDefault();
            moveFocus(list, currentFocus, "last");
            break;
        case "Enter":
        case " ":
            break;
        case "Tab":
            event.preventDefault();
            // in a standard select, tab does nothing in-menu
            break;

        default:
            if (search !== undefined) {
                const searchResult = findItem(list, key, search, searchResetTimer);
                if (searchResult) {
                    searchResult.focus();
                }
            }
            break;
    }
}

function moveFocus(list: HTMLUListElement, current: HTMLButtonElement, dir: Direction) {
    const thisLI = current.parentElement;
    switch (dir) {
        case "prev":
            const prevLI = thisLI && thisLI.previousElementSibling;
            if (prevLI) {
                const prevItem = prevLI.querySelector<HTMLButtonElement>(`[role="option"]`);
                if (prevItem) {
                    prevItem.focus();
                }
            }
            break;
        case "next":
            const nextLI = thisLI && thisLI.nextElementSibling;
            if (nextLI) {
                const nextItem = nextLI.querySelector<HTMLButtonElement>(`[role="option"]`);
                if (nextItem) {
                    nextItem.focus();
                }
            }
            break;
        case "first":
            const firstItem = list.querySelector<HTMLButtonElement>(`[role="option"]`);
            if (firstItem) {
                firstItem.focus();
            }
            break;
        case "last":
            const listItems = list.querySelectorAll<HTMLButtonElement>(`[role="option"]`);
            if (listItems.length) {
                listItems[listItems.length - 1].focus();
            }
            break;
    }
}

function findItem(list: HTMLUListElement, key: string, search: KeyBuffer, timer: Timer): HTMLButtonElement | null {
    const listItems = list.querySelectorAll(`[role="option"]`);
    if (!listItems.length) return null;

    if (search) {
        search.keys = search.keys.concat(key);
        resetWhenIdle(search, timer);

        for (var n = 0; n < listItems.length; n++) {
            var label = (listItems[n] as HTMLButtonElement).innerText;
            if (label && label.toLowerCase().indexOf(search.keys) === 0) {
                return listItems[n] as HTMLButtonElement;
            }
        }
    }

    return null;
}

function resetWhenIdle(search: KeyBuffer, timer: Timer) {
    if (timer) {
        clearTimeout(timer);
        timer = undefined;
    }
    timer = setTimeout(
        () => {
            search ? (search.keys = "") : (search = { keys: "" });
            timer = undefined;
        },
        500,
        search,
        timer,
    );
}
