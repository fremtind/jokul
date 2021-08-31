import { useRef, useEffect, RefObject } from "react";

type Timer = number | undefined;
type KeyBuffer = { keys: string } | undefined;
type Direction = "prev" | "next" | "first" | "last";
interface MoveDetails {
    event: KeyboardEvent;
    list: HTMLUListElement;
    currentFocus: HTMLButtonElement;
}
interface ListDetails {
    list: HTMLUListElement;
    search: KeyBuffer;
    searchResetTimer: Timer;
}
interface SearchDetails extends ListDetails {
    key: string;
}
interface EventDetails extends ListDetails {
    event: KeyboardEvent;
}

export function useListNavigation(typeAheadIsEnabled = true): RefObject<HTMLUListElement> {
    const listRef = useRef<HTMLUListElement>(null);
    let search: KeyBuffer;
    let searchResetTimer: Timer;
    if (typeAheadIsEnabled) {
        search = { keys: "" }; // keypress buffer is object to preserve state
    }
    useEffect(() => {
        const list = listRef.current;
        if (list) {
            list.addEventListener("keydown", (event) => handleListKeyNav({ list, event, search, searchResetTimer }));
        }
        return () => {
            if (list) {
                list.removeEventListener("keydown", (event) =>
                    handleListKeyNav({ list, event, search, searchResetTimer }),
                );
            }
        };
    }, [search, searchResetTimer]);

    return listRef;
}

function handleMoveTo(direction: Direction, { event, list, currentFocus }: MoveDetails) {
    event.preventDefault();
    moveFocusTo(direction, list, currentFocus);
}

function handleListKeyNav({ list, event, search, searchResetTimer }: EventDetails, moveFunction = handleMoveTo) {
    const { key, target } = event;
    const currentFocus = target as HTMLButtonElement;

    const moveDetails = {
        event,
        list,
        currentFocus,
    };

    switch (key) {
        case "ArrowUp" || "PageUp":
            moveFunction("prev", moveDetails);
            break;
        case "ArrowDown" || "PageDown":
            moveFunction("next", moveDetails);
            break;
        case "Home":
            moveFunction("first", moveDetails);
            break;
        case "End":
            moveFunction("last", moveDetails);
            break;
        case "Tab":
            // in a standard select, tab does nothing in-menu
            event.preventDefault();
            break;
        case "Enter" || " ":
            break;

        default:
            if (search !== undefined) {
                const searchResult = findItem({ list, key, search, searchResetTimer });
                if (searchResult) {
                    searchResult.focus();
                }
            }
            break;
    }
}

function moveFocusTo(direction: Direction, list: HTMLUListElement, current: HTMLButtonElement) {
    const thisLI = current.parentElement;
    switch (direction) {
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

function findItem({ list, key, search, searchResetTimer }: SearchDetails): HTMLButtonElement | null {
    const listItems = list.querySelectorAll(`[role="option"]`);
    if (!listItems.length) return null;

    if (search) {
        search.keys = search.keys.concat(key);
        resetWhenIdle(search, searchResetTimer);

        for (let n = 0; n < listItems.length; n++) {
            const label = (listItems[n] as HTMLButtonElement).innerText;
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
