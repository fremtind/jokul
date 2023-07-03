import type { Density } from "@fremtind/jkl-core";
import type { LabelProps, SupportLabelProps } from "@fremtind/jkl-input-group-react";
import type { PopupTipProps } from "@fremtind/jkl-tooltip-react";
import type { StateChangeOptions } from "downshift";
import React, { type ReactNode, useEffect, useState } from "react";
import BaseAutosuggest from "./BaseAutosuggest";
import { filter } from "./utils";

export type CommonProps = (
    | {
          label: string;
          labelProps?: Omit<LabelProps, "children" | "density" | "htmlFor" | "standAlone">;
          inputId?: null;
          labelId?: null;
      }
    | {
          label?: null;
          labelProps?: null;
          inputId: string;
          labelId: string;
      }
) & {
    className?: string;
    isOpen?: boolean;
    /** @deprecated Bruk helpLabel eller flytt denne teksten ovenfor skjemafeltets label */
    leadText?: string;
    errorLabel?: string;
    helpLabel?: string;
    supportLabelProps?: Omit<SupportLabelProps, "id" | "errorLabel" | "helpLabel" | "density">;
    tooltipProps?: PopupTipProps;
    variant?: "large" | "medium" | "small";
    density?: Density;
    placeholder?: string;
    /** @deprecated Bruk noHits med text og evt. defaultverdier for items */
    noHitsMessage?: ReactNode;
    maxNumberOfHits?: number;
    showDropdownControllerButton?: boolean;
    onInputValueChange?: (inputValue: string) => void;
    noHits?: { items: string[]; text: ReactNode };
};

export interface AutosuggestStringItemProps {
    allItems: string[];
    value: string;
    onChange?: (item: string) => void;
    onStateChange?: (changes: StateChangeOptions<string>) => void;
    onConfirm?: () => void;
}

export type AutosuggestProps = CommonProps & AutosuggestStringItemProps;

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
