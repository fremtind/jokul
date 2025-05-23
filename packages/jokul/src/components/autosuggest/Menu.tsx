import clsx from "clsx";
import type { PropGetters } from "downshift";
import React, { type ReactNode } from "react";

interface MenuProps<T> {
    downshiftProps: Pick<PropGetters<T>, "getMenuProps" | "getItemProps">;
    highlightedIndex: number | undefined | null;
    items: T[];
    itemToString: (item: T | null) => string;
    noHitsMessage?: ReactNode;
    maxNumberOfHits?: number;
    noHits?: { items: T[]; text: ReactNode };
}

function Menu<T>({
    downshiftProps: { getMenuProps, getItemProps },
    highlightedIndex,
    items,
    itemToString,
    noHitsMessage,
    maxNumberOfHits = Number.POSITIVE_INFINITY,
    noHits,
}: MenuProps<T>): JSX.Element | null {
    const visibleItems =
        items.length > maxNumberOfHits
            ? items.slice(0, maxNumberOfHits)
            : items;

    if (visibleItems.length === 0 && !noHitsMessage && !noHits) {
        return null;
    }

    const itemList =
        visibleItems.length === 0 && noHits ? noHits.items : visibleItems;

    return (
        <div data-testid="autosuggest__menu" className="jkl-autosuggest__menu">
            {(noHitsMessage || noHits) && visibleItems.length === 0 && (
                <div
                    className="jkl-autosuggest__no-hits-message"
                    aria-live="polite"
                >
                    {noHitsMessage || noHits?.text}
                </div>
            )}

            {itemList.length > 0 && (
                <ul
                    {...getMenuProps({
                        className: "jkl-autosuggest__item-list",
                    })}
                >
                    {itemList.map((item, index) => (
                        <li
                            {...getItemProps({
                                item,
                                className: clsx("jkl-autosuggest__item", {
                                    "jkl-autosuggest__item--active":
                                        index === highlightedIndex,
                                }),
                            })}
                            data-testid="autosuggest__item"
                            key={itemToString(item)}
                        >
                            {itemToString(item)}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Menu;
