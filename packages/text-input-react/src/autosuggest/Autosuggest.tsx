import { StateChangeOptions } from "downshift";
import React, { ReactNode, useEffect, useState } from "react";

import BaseAutosuggest from "./BaseAutosuggest";
import { filter } from "./utils";

export type CommonProps = (
    | {
          label: string;
          inputId?: null;
          labelId?: null;
      }
    | {
          label?: null;
          inputId: string;
          labelId: string;
      }
) & {
    className?: string;
    isOpen?: boolean;
    leadText?: string;
    errorLabel?: string;
    helpLabel?: string;
    variant?: "large" | "medium" | "small";
    placeholder?: string;
    noHitsMessage?: ReactNode;
    maxNumberOfHits?: number;
    showDropdownControllerButton?: boolean;
    onInputValueChange?: (inputValue: string) => void;
    /** @deprecated */
    inverted?: boolean;
};

export interface AutosuggestStringItemProps {
    allItems: string[];
    value: string;
    onChange?: (item: string) => void;
    onStateChange?: (changes: StateChangeOptions<string>) => void;
    onConfirm?: () => void;
}

type Props = CommonProps & AutosuggestStringItemProps;

export function Autosuggest({
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
}: Props) {
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
}
