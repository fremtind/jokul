import type {
    ChangeEventHandler,
    FocusEventHandler,
    InputHTMLAttributes,
    ReactNode,
} from "react";
import type { DataTestAutoId } from "../../core/types.js";

export interface CheckboxProps
    extends DataTestAutoId,
        InputHTMLAttributes<HTMLInputElement> {
    children: ReactNode;
    name: string;
    value: string;
    checked?: boolean;
    inline?: boolean;
    className?: string;
    invalid?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    indeterminate?: boolean;
}
