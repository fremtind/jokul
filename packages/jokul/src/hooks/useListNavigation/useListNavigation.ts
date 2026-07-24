import { type RefObject, useCallback, useEffect, useRef } from "react";

/**
 * Enten `ref` eller `element` må gis. `ref` brukes når listen alltid
 * er i DOM-en; `element` foretrekkes når elementet mountes/unmountes
 * dynamisk (f.eks. portalert via floating-ui), slik at listeneren
 * re-festes når elementet faktisk er tilgjengelig.
 */
type UseListNavigationProps<T> = {
    disableTypeahead?: boolean;
} & (
    | {
          ref: RefObject<T | null>;
          element?: never;
      }
    | {
          ref?: never;
          element: T | null;
      }
);

const TYPEAHEAD_SEARCH_TIMEOUT = 500;
const MODIFIERS = ["Control", "Alt", "Shift", "Meta"];
const LIST_ITEM_SELECTOR =
    "[role='option'][class~='jkl-select__option'],[class~='jkl-combobox__option'],[class~='jkl-option'],[class~='jkl-search']";

export function useListNavigation<T extends HTMLElement>({
    ref,
    element,
    disableTypeahead = false,
}: UseListNavigationProps<T>): void {
    const searchResetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
        undefined,
    );
    const searchTerm = useRef<string>("");

    const typeahead = useCallback(
        (key: string): void => {
            if (disableTypeahead || MODIFIERS.includes(key)) return;
            const list = element ?? ref?.current ?? null;

            searchTerm.current = searchTerm.current.concat(key);
            clearTimeout(searchResetTimer.current);
            searchResetTimer.current = setTimeout(() => {
                searchTerm.current = "";
                searchResetTimer.current = undefined;
            }, TYPEAHEAD_SEARCH_TIMEOUT);

            if (!searchTerm.current.length) return;

            const listItems =
                list?.querySelectorAll<HTMLElement>(LIST_ITEM_SELECTOR);
            if (!listItems || !listItems.length) return;

            for (const item of listItems) {
                if (
                    item.innerText
                        ?.toLowerCase()
                        .indexOf(searchTerm.current.toLowerCase()) === 0
                ) {
                    focusButtonOrInput(item);
                    return;
                }
            }
        },
        [element, ref, disableTypeahead],
    );

    const handleKeyNavigation = useCallback(
        (event: KeyboardEvent): void => {
            const list = element ?? ref?.current ?? null;
            if (!list) return;

            const { key, target } = event;
            const current = target as HTMLElement;
            const allItems = Array.from(
                list.querySelectorAll<HTMLElement>(LIST_ITEM_SELECTOR),
            );

            switch (key) {
                case "ArrowUp": {
                    event.preventDefault();
                    const index = allItems.indexOf(
                        current.closest(LIST_ITEM_SELECTOR) as HTMLElement,
                    );
                    focusButtonOrInput(allItems[index - 1]);
                    break;
                }
                case "ArrowDown": {
                    event.preventDefault();
                    const index = allItems.indexOf(
                        current.closest(LIST_ITEM_SELECTOR) as HTMLElement,
                    );
                    focusButtonOrInput(allItems[index + 1]);
                    break;
                }
                case "PageUp":
                case "Home": {
                    event.preventDefault();
                    focusButtonOrInput(allItems[0]);
                    break;
                }
                case "PageDown":
                case "End": {
                    event.preventDefault();
                    focusButtonOrInput(allItems[allItems.length - 1]);
                    break;
                }
                // Vi gjør ingenting for modifiers eller mellomrom
                case "Shift":
                case "Control":
                case "Alt":
                case "Meta":
                case "Enter":
                case "Escape":
                case " ":
                    break;

                case "Tab":
                    event.preventDefault();
                    break;

                // Alle andre taster trigger typeahead
                default:
                    typeahead(key);
                    break;
            }
        },
        [element, ref, typeahead],
    );

    useEffect(() => {
        const list = element ?? ref?.current ?? null;
        if (!list) return;

        list.addEventListener("keydown", handleKeyNavigation);

        return () => {
            list.removeEventListener("keydown", handleKeyNavigation);
            clearTimeout(searchResetTimer.current);
        };
    }, [element, ref, handleKeyNavigation]);
}

function focusButtonOrInput(element?: Element | null): void {
    if (!element) return;

    if (element.nodeName === "BUTTON" || element.nodeName === "INPUT") {
        (element as HTMLElement).focus();
    } else {
        element
            .querySelector<HTMLInputElement | HTMLButtonElement>("input,button")
            ?.focus();
    }
}
