import type { StateChangeOptions } from "downshift";
import React, { useEffect, useState } from "react";
import BaseAutosuggest from "./BaseAutosuggest.js";
import type { AutosuggestProps } from "./types.js";
import { filter } from "./utils.js";

export const Autosuggest = ({
    allItems,
    onChange = () => {
        /* default noop */
    },
    onConfirm = () => {
        /* noop */
    },
    onInputValueChange,
    onStateChange,
    value,
    isOpen,
    ...rest
}: AutosuggestProps): JSX.Element => {
    const [hits, setHits] = useState(allItems);

    useEffect(() => setHits(allItems), [allItems]);

    const handleStateChange = (changes: StateChangeOptions<string>) => {
        if (onStateChange) {
            onStateChange(changes);
        }

        if (changes.selectedItem !== undefined) {
            onChange(changes.selectedItem || "");
        } else if (changes.inputValue) {
            setHits(filter(allItems, changes.inputValue));
        }
    };

    const itemToString = (item: string | null) => (item ? item : "");

    return (
        <BaseAutosuggest
            {...rest}
            items={hits}
            itemToString={itemToString}
            onConfirm={onConfirm}
            downshiftProps={{
                selectedItem: value,
                onInputValueChange,
                onStateChange: handleStateChange,
                isOpen,
            }}
        />
    );
};
