import type { ChangeEvent } from "react";
import type { ValuePair } from "../../utilities/valuePair.js";
import type { InputGroupProps, LabelProps } from "../input-group/types.js";

export type ComboboxValuePair = ValuePair & {
    tagLabel?: string;
    isMarked?: boolean;
};

export interface ComboboxPartialChangeEvent
    extends Partial<Omit<ChangeEvent<HTMLElement>, "target">> {
    type: "change" | "blur";
    target: {
        name: string;
        value: string;
        selectedOptions: Array<ValuePair>;
    };
}

export type ComboboxChangeEventHandler = (
    event: ComboboxPartialChangeEvent,
) => void;

export interface ComboboxProps extends InputGroupProps {
    id?: string;
    placeholder?: string;
    labelProps?: Omit<LabelProps, "children" | "htmlFor" | "standAlone">;
    items: Array<ValuePair>;
    noMatchingOption?: string;
    label: string;
    name: string;
    value?: Array<ValuePair>;
    width?: string;
    helpLabel?: string;
    errorLabel?: string;
    className?: string;
    invalid?: boolean;
    hasTagHover?: boolean;
    onChange: ComboboxChangeEventHandler;
    onBlur?: ComboboxChangeEventHandler;
    onFocus?: ComboboxChangeEventHandler;
}
