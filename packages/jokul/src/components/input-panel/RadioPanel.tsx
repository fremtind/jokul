import React, {
    ChangeEvent,
    ComponentPropsWithRef,
    ForwardedRef,
    forwardRef,
    useCallback,
    useContext,
    useEffect,
} from "react";
import { BasePanel } from "./BasePanel.js";
import { context } from "./radioPanelContext.js";

// aria-invalid has been deprecated for the "radio" role, it should go on the
// parent radiogroup
export type RadioPanelProps = Omit<
    ComponentPropsWithRef<"input">,
    "type" | "aria-invalid"
> & {
    value: string;
    label: string;
    extraLabel?: React.ReactNode;
    alwaysOpen?: boolean;
};

export const RadioPanel = forwardRef(function RadioPanel(
    {
        alwaysOpen = false,
        label,
        extraLabel,
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

    useEffect(() => {
        if (defaultChecked) {
            if (!onValueChange) {
                throw new Error(
                    "RadioPanel will not work properly when used outside a RadioPanelGroup",
                );
            }
            onValueChange(value);
        }
        // We never want to rerun this effect. Changing the default value after the
        // input control is first mounted should not cause any updates
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
