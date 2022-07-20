import { useEffect, RefObject } from "react";

type Timer = number | undefined;
type KeyBuffer = { keys: string } | undefined;
type Direction = "prev" | "next" | "first" | "last";
interface MoveDetails {
    event: KeyboardEvent;
    list: HTMLElement;
    currentFocus: HTMLButtonElement;
}
interface ListDetails {
    list: HTMLElement;
    search: KeyBuffer;
    searchResetTimer: Timer;
}
interface SearchDetails extends ListDetails {
    key: string;
}
interface EventDetails extends ListDetails {
    event: KeyboardEvent;
}
type UseListNavigationProps<T> = {
    ref: RefObject<T>;
};

export function useListNavigation<T extends HTMLElement>({ ref }: UseListNavigationProps<T>): void {
    useEffect(() => {
        let searchResetTimer: Timer;
        const search: KeyBuffer = { keys: "" }; // keypress buffer is an object to preserve state
        const list = ref.current;
        const handler = (event: KeyboardEvent) => {
            if (list) {
                handleListKeyNav({ list, event, search, searchResetTimer });
            }
        };

        if (list) {
            list.addEventListener("keydown", handler);
        }

        return () => {
            if (list) {
                list.removeEventListener("keydown", handler);
            }
        };
    }, [ref]);
}

function handleMoveTo(direction: Direction, { event, list, currentFocus }: MoveDetails) {
    event.preventDefault();
    moveFocusTo(direction, list, currentFocus);
}

function handleListKeyNav({ list, event, search, searchResetTimer }: EventDetails) {
    const { key, target } = event;
    const currentFocus = target as HTMLButtonElement;

    const moveDetails = {
        event,
        list,
        currentFocus,
    };

    switch (key) {
        case "ArrowUp" || "PageUp":
            handleMoveTo("prev", moveDetails);
            break;
        case "ArrowDown" || "PageDown":
            handleMoveTo("next", moveDetails);
            break;
        case "Home":
            handleMoveTo("first", moveDetails);
            break;
        case "End":
            handleMoveTo("last", moveDetails);
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

function moveFocusTo(direction: Direction, list: HTMLElement, current: HTMLButtonElement) {
    const thisOption = current;
    switch (direction) {
        case "prev":
            const prevOption: HTMLButtonElement | null =
                thisOption && (thisOption.previousElementSibling as HTMLButtonElement);
            if (prevOption) {
                prevOption.focus();
            }
            break;
        case "next":
            const nextOption: HTMLButtonElement | null =
                thisOption && (thisOption.nextElementSibling as HTMLButtonElement);
            if (nextOption) {
                nextOption.focus();
            }
            break;
        case "first":
            const firstItem: HTMLButtonElement | null = list.querySelector<HTMLButtonElement>(`[role="option"]`);
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
