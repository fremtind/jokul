import React, {
    type ChangeEvent,
    type ForwardedRef,
    forwardRef,
    useCallback,
    useState,
} from "react";
import { BasePanel } from "../../shared/input-panel/BasePanel.js";
import type { CheckboxPanelProps } from "./types.js";

export const CheckboxPanel = forwardRef(function CheckboxPanel(
    {
        label,
        extraLabel,
        alwaysOpen = false,
        checked,
        defaultChecked,
        onChange,
        ...rest
    }: CheckboxPanelProps,
    ref: ForwardedRef<HTMLInputElement>,
) {
    const [_isChecked, setIsChecked] = useState(defaultChecked || false);

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            onChange?.(e);
            setIsChecked(e.target.checked);
        },
        [onChange],
    );

    const isControlled = typeof checked !== "undefined";
    const isChecked = isControlled ? checked : _isChecked;

    return (
        <BasePanel
            ref={ref}
            type="checkbox"
            isChecked={isChecked}
            defaultChecked={defaultChecked}
            checked={isControlled ? checked : undefined}
            onChange={handleChange}
            alwaysOpen={alwaysOpen}
            label={label}
            extraLabel={extraLabel}
            {...rest}
        />
    );
});
