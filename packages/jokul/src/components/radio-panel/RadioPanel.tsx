import React, {
    type ChangeEvent,
    type ForwardedRef,
    forwardRef,
    useCallback,
    useContext,
    useEffect,
} from "react";
import { BasePanel } from "../../shared/input-panel/BasePanel.js";
import { context } from "./radioPanelContext.js";
import type { RadioPanelProps } from "./types.js";

export const RadioPanel = forwardRef(function RadioPanel(
    {
        alwaysOpen = false,
        label,
        extraLabel,
        amount,
        checked,
        onChange,
        value,
        defaultChecked,
        ...rest
    }: RadioPanelProps,
    ref: ForwardedRef<HTMLInputElement>,
) {
    const { onValueChange, checkedValue } = useContext(context);

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            onChange?.(e);
            if (!onValueChange) {
                throw new Error(
                    "RadioPanel will not work properly when used outside a RadioPanelGroup",
                );
            }
            onValueChange(value);
        },
        [onChange, onValueChange, value],
    );

    // We never want to rerun this effect. Changing the default value after the
    // input control is first mounted should not cause any updates
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        if (defaultChecked) {
            if (!onValueChange) {
                throw new Error(
                    "RadioPanel will not work properly when used outside a RadioPanelGroup",
                );
            }
            onValueChange(value);
        }
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
    }, []);

    const isControlled = typeof checked !== "undefined";
    const isChecked = isControlled ? checked : checkedValue === value;

    return (
        <BasePanel
            ref={ref}
            type="radio"
            value={value}
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
