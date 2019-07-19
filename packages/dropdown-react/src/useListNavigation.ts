import { useRef, useEffect, RefObject } from "react";

type Timer = NodeJS.Timeout | undefined;
type SearchTerm = { term: string } | undefined;
type Direction = "prev" | "next" | "first" | "last";

export function useListNavigation(enableSearch: boolean): RefObject<HTMLUListElement> {
    const listRef = useRef<HTMLUListElement>(null);
    let search: SearchTerm;
    let searchResetTimer: Timer;
    if (enableSearch) search = { term: "" };
    useEffect(() => {
        const listElement = listRef.current;
        if (listElement) {
            listElement.addEventListener("keydown", (event) =>
                handleListKeyNav(listElement, event, search, searchResetTimer),
            );
        }
    }, []);

    return listRef;
}

function handleListKeyNav(list: HTMLUListElement, event: KeyboardEvent, search: SearchTerm, searchResetTimer: Timer) {
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

function findItem(list: HTMLUListElement, key: string, search: SearchTerm, timer: Timer): HTMLButtonElement | null {
    const listItems = list.querySelectorAll(`[role="option"]`);
    if (!listItems.length) return null;

    if (search) {
        search.term = search.term.concat(key);
        resetWhenIdle(search, timer);

        for (var n = 0; n < listItems.length; n++) {
            var label = (listItems[n] as HTMLButtonElement).innerText;
            if (label && label.toLowerCase().indexOf(search.term) === 0) {
                return listItems[n] as HTMLButtonElement;
            }
        }
    }

    return null;
}

function resetWhenIdle(search: SearchTerm, timer: Timer) {
    if (timer) {
        clearTimeout(timer);
        timer = undefined;
    }
    timer = setTimeout(
        () => {
            search ? (search.term = "") : (search = { term: "" });
            timer = undefined;
        },
        500,
        search,
        timer,
    );
}
