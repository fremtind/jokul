import React, { useState } from "react";
import { StateChangeOptions } from "downshift";

import { createFilter } from "./utils";
import { AutosuggestStringItemProps, CommonProps } from "./Autosuggest";
import BaseAutosuggest from "./BaseAutosuggest";

type Props = CommonProps & Omit<AutosuggestStringItemProps, "onInputChange">;

export function AutosuggestTypeahed(props: Props) {
    const [value, setValue] = useState("");

    const onStateChange = ({ selectedItem = null, inputValue = null }: StateChangeOptions<string>) => {
        if (selectedItem !== null) {
            setValue(selectedItem);
            props.onChange(selectedItem);
        } else if (inputValue !== null) {
            setValue(inputValue);
            props.onChange(inputValue);
        }
    };

    return (
        <BaseAutosuggest
            {...props}
            itemToString={(item: string | null) => (item ? item : "")}
            filter={createFilter()}
            downshiftProps={{
                selectedItem: value,
                onStateChange: onStateChange,
            }}
        />
    );
}
