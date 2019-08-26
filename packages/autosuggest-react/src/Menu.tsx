import React, { ReactNode } from "react";
import { PropGetters } from "downshift";

interface MenuProps<T> {
    downshiftProps: Pick<PropGetters<T>, "getMenuProps" | "getItemProps">;
    highlightedIndex: number | null;
    items: T[];
    itemToString: (item: T | null) => string;
    noHitsMessage?: ReactNode;
    maxNumberOfHits?: number;
}

function Menu<T>({
    downshiftProps: { getMenuProps, getItemProps },
    highlightedIndex,
    items,
    itemToString,
    noHitsMessage,
    maxNumberOfHits = Infinity,
}: MenuProps<T>) {
    const visibleItems = items.length > maxNumberOfHits ? items.slice(0, maxNumberOfHits) : items;

    if (visibleItems.length === 0 && !noHitsMessage) {
        return null;
    }

    return (
        <div data-testid="jkl-autosuggest__menu" style={{ position: "relative" }}>
            <ul
                {...getMenuProps({
                    className: "jkl-autosuggest__menu",
                })}
            >
                {visibleItems.length === 0 && noHitsMessage}
                {visibleItems.map((item, index) => (
                    <li
                        {...getItemProps({
                            item,
                            className: `
                                        jkl-autosuggest__item
                                        ${index === highlightedIndex ? "jkl-autosuggest__item--active" : ""}
                                        `,
                        })}
                        data-testid="jkl-autosuggest__item"
                        key={itemToString(item)}
                    >
                        {itemToString(item)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Menu;
