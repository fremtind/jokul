import {
    ChangeEventHandler,
    FocusEventHandler,
    InputHTMLAttributes,
    ReactNode,
} from "react";
import { DataTestAutoId, Density } from "../../core/types.js";

export interface CheckboxProps
    extends DataTestAutoId,
        InputHTMLAttributes<HTMLInputElement> {
    children: ReactNode;
    name: string;
    value: string;
    checked?: boolean;
    inline?: boolean;
    className?: string;
    density?: Density;
    invalid?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    indeterminate?: boolean;
}
