import React, { ReactNode } from "react";

import { createFilter } from "./utils";
import BaseAutosuggest from "./BaseAutosuggest";

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
      }) & {
    isInvalid?: boolean;
    errorText?: string;
    placeholder?: string;
    noHitsMessage?: ReactNode;
    maxNumberOfHits?: number;
    onInputChange?: (inputValue: string) => void;
};

export interface AutosuggestStringItemProps {
    allItems: string[];
    onChange: (item: string | null) => void;
    itemToString?: null;
    keys?: null;
}

interface AutosuggestObjectItemProps<T> {
    allItems: T[];
    onChange: (item: T | null) => void;
    itemToString: (item: T | null) => string;
    keys: string[];
}

type Props<T extends object> = CommonProps & (AutosuggestObjectItemProps<T> | AutosuggestStringItemProps);

export function Autosuggest<T extends object>(props: Props<T>) {
    return props.keys ? (
        <BaseAutosuggest
            {...props}
            filter={createFilter(props.keys)}
            downshiftProps={{
                onChange: props.onChange,
                onInputValueChange: props.onInputChange,
            }}
        />
    ) : (
        <BaseAutosuggest
            {...props}
            itemToString={(item: string | null) => (item ? item : "")}
            filter={createFilter()}
            downshiftProps={{
                onChange: props.onChange,
                onInputValueChange: props.onInputChange,
            }}
        />
    );
}
