import type { ChangeEvent, InputHTMLAttributes } from "react";
import type { Density } from "../../core/types.js";
import type { ValuePair } from "../../utilities/valuePair.js";
import type { HelpProps } from "../help/index.js";
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
    labelProps?: Omit<
        LabelProps,
        "children" | "density" | "htmlFor" | "standAlone"
    >;
    items: Array<ValuePair>;
    noMatchingOption?: string;
    label: string;
    name: string;
    value?: Array<ValuePair>;
    density?: Density;
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

export type BETA_ComboboxProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "children" | "defaultValue"
> & {
    label: string;
    description?: string;
    help?: HelpProps;
    errorMessage?: string;
    multiselect?: boolean;
    options: string[];
    defaultValue?: string[];
};
