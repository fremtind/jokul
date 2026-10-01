import type {
    ChangeEventHandler,
    FocusEventHandler,
    InputHTMLAttributes,
    ReactNode,
} from "react";
import type { DataTestAutoId } from "../../utilities/types.js";
import type { Tracking } from "../types.js";

export interface CheckboxProps
    extends DataTestAutoId,
        InputHTMLAttributes<HTMLInputElement> {
    tracking?: Tracking;
    trackingComponentName?: string;
    trackingLabel?: ReactNode;
    trackingExtraProps?: Record<string, string | number | boolean | undefined>;
    disableDefaultTrackingProps?: boolean;
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
