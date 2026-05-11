import { type RefObject, useLayoutEffect } from "react";

type TimerHandle = { id: number | undefined };
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
    searchResetTimer: TimerHandle;
}
interface SearchDetails extends ListDetails {
    key: string;
}
interface EventDetails extends ListDetails {
    event: KeyboardEvent;
}
/**
 * Enten `ref` eller `element` må gis. `ref` brukes når listen alltid
 * er i DOM-en; `element` foretrekkes når elementet mountes/unmountes
 * dynamisk (f.eks. portalert via floating-ui), slik at listeneren
 * re-festes når elementet faktisk er tilgjengelig.
 */
type UseListNavigationProps<T> =
    | {
          ref: RefObject<T | null>;
          element?: never;
      }
    | {
          ref?: never;
          element: T | null;
      };

export function useListNavigation<T extends HTMLElement>({
    ref,
    element,
}: UseListNavigationProps<T>): void {
    // Bruker `useLayoutEffect` slik at keydown-listeneren er på plass før
    // browseren maler neste frame. Det er viktig for konsumenter som
    // flytter fokus inn i lista i en `requestAnimationFrame`-callback
    // (som Select), ellers kan første tastetrykk gå tapt.
    useLayoutEffect(() => {
        // `ref?.current` leses inne i effekten — refen er fylt i commit-
        // fasen, og var `null` i render-tid for callere som passerer
        // `ref` (som Combobox).
        const list = element ?? ref?.current ?? null;
        if (!list) return;

        // `TimerHandle` er et muterbart objekt slik at `resetWhenIdle`
        // kan oppdatere `id` på samme referanse — `setTimeout`-handlen må
        // være delt på tvers av tastetrykk for at `clearTimeout` skal
        // kunne avbryte forrige timeout.
        const searchResetTimer: TimerHandle = { id: undefined };
        const search: KeyBuffer = { keys: "" }; // keypress buffer is an object to preserve state
        const handler = (event: KeyboardEvent) => {
            handleListKeyNav({ list, event, search, searchResetTimer });
        };

        list.addEventListener("keydown", handler);
        return () => {
            list.removeEventListener("keydown", handler);
            if (searchResetTimer.id !== undefined) {
                clearTimeout(searchResetTimer.id);
            }
        };
    }, [element, ref]);
}

function handleMoveTo(
    direction: Direction,
    { event, list, currentFocus }: MoveDetails,
) {
    event.preventDefault();
    moveFocusTo(direction, list, currentFocus);
}

function handleListKeyNav({
    list,
    event,
    search,
    searchResetTimer,
}: EventDetails) {
    const { key, target } = event;
    const currentFocus = target as HTMLButtonElement;

    const moveDetails = {
        event,
        list,
        currentFocus,
    };

    switch (key) {
        case "ArrowUp":
        case "PageUp":
            handleMoveTo("prev", moveDetails);
            break;
        case "ArrowDown":
        case "PageDown":
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
        case "Enter":
        case " ":
            break;

        default:
            if (search !== undefined) {
                const searchResult = findItem({
                    list,
                    key,
                    search,
                    searchResetTimer,
                });
                if (searchResult) {
                    searchResult.focus();
                }
            }
            break;
    }
}

function moveFocusTo(
    direction: Direction,
    list: HTMLElement,
    current: HTMLButtonElement,
) {
    const thisOption = current;
    switch (direction) {
        case "prev": {
            const prevOption: HTMLButtonElement | null =
                thisOption &&
                (thisOption.previousElementSibling as HTMLButtonElement);
            if (prevOption) {
                prevOption.focus();
            }
            break;
        }
        case "next": {
            const nextOption: HTMLButtonElement | null =
                thisOption &&
                (thisOption.nextElementSibling as HTMLButtonElement);
            if (nextOption) {
                nextOption.focus();
            }
            break;
        }
        case "first": {
            const firstItem =
                list.querySelector<HTMLButtonElement>(`[role="option"]`);
            if (firstItem) {
                firstItem.focus();
            }
            break;
        }
        case "last": {
            const listItems =
                list.querySelectorAll<HTMLButtonElement>(`[role="option"]`);
            if (listItems.length) {
                listItems[listItems.length - 1].focus();
            }
            break;
        }
    }
}

function findItem({
    list,
    key,
    search,
    searchResetTimer,
}: SearchDetails): HTMLButtonElement | null {
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

function resetWhenIdle(search: KeyBuffer, timer: TimerHandle) {
    if (timer.id !== undefined) {
        clearTimeout(timer.id);
        timer.id = undefined;
    }
    timer.id = window.setTimeout(() => {
        if (search) {
            search.keys = "";
        }
        timer.id = undefined;
    }, 500);
}
