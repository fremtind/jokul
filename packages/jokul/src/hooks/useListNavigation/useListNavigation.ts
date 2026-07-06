import { type RefObject, useCallback, useEffect, useRef } from "react";

/**
 * Enten `ref` eller `element` må gis. `ref` brukes når listen alltid
 * er i DOM-en; `element` foretrekkes når elementet mountes/unmountes
 * dynamisk (f.eks. portalert via floating-ui), slik at listeneren
 * re-festes når elementet faktisk er tilgjengelig.
 */
type UseListNavigationProps<T> =
    | {
          ref: RefObject<T | null>;
          disableTypeahead?: boolean;
          element?: never;
      }
    | {
          ref?: never;
          disableTypeahead?: boolean;
          element: T | null;
      };

const TYPEAHEAD_SEARCH_TIMEOUT = 500;
const MODIFIERS = ["Control", "Alt", "Shift", "Meta"];
const LIST_ITEM_SELECTOR =
    "[class~='jkl-select__option'],[class~='jkl-option'],[class~='jkl-search']";

export function useListNavigation<T extends HTMLElement>({
    ref,
    element,
    disableTypeahead = false,
}: UseListNavigationProps<T>): void {
    const searchResetTimer = useRef<number | NodeJS.Timeout | undefined>(
        undefined,
    );
    const searchTerm = useRef<string>("");
    const list = element ?? ref?.current ?? null;

    const typeahead = useCallback(
        (key: string): void => {
            if (disableTypeahead || MODIFIERS.includes(key)) return;

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
        [list, disableTypeahead],
    );

    const handleKeyNavigation = useCallback(
        (event: KeyboardEvent): void => {
            if (!list) return;

            const { key, target } = event;
            const current = target as HTMLElement;

            switch (key) {
                case "ArrowUp":
                case "PageUp": {
                    event.preventDefault();
                    focusButtonOrInput(
                        current.closest(LIST_ITEM_SELECTOR)
                            ?.previousElementSibling,
                    );
                    break;
                }
                case "ArrowDown":
                case "PageDown": {
                    event.preventDefault();
                    focusButtonOrInput(
                        current.closest(LIST_ITEM_SELECTOR)?.nextElementSibling,
                    );
                    break;
                }
                case "Home": {
                    event.preventDefault();
                    focusButtonOrInput(
                        current.closest(LIST_ITEM_SELECTOR)?.parentElement
                            ?.firstElementChild,
                    );
                    break;
                }
                case "End": {
                    event.preventDefault();
                    focusButtonOrInput(
                        current.closest(LIST_ITEM_SELECTOR)?.parentElement
                            ?.lastElementChild,
                    );
                    break;
                }
                // Vi gjør ingenting for modifiers eller mellomrom
                case "Tab":
                case "Shift":
                case "Control":
                case "Alt":
                case "Meta":
                case "Enter":
                case " ":
                    break;

                // Alle andre taster trigger typeahead
                default:
                    typeahead(key);
                    break;
            }
        },
        [list, typeahead],
    );

    useEffect(() => {
        if (!list) return;

        list.addEventListener("keydown", handleKeyNavigation);

        return () => {
            list.removeEventListener("keydown", handleKeyNavigation);
            clearTimeout(searchResetTimer.current);
        };
    }, [list, handleKeyNavigation]);
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
