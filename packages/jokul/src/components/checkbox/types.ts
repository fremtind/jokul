import type {
    ChangeEventHandler,
    FocusEventHandler,
    InputHTMLAttributes,
    ReactNode,
} from "react";
import type { DataTestAutoId, WithDisabled } from "../../utilities/types.js";

export interface CheckboxProps
    extends DataTestAutoId,
        Omit<InputHTMLAttributes<HTMLInputElement>, "disabled">,
        WithDisabled {
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
