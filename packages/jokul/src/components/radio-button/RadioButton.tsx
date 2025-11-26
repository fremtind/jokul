import React, { forwardRef } from "react";
import { useId } from "../../hooks/useId/useId.js";
import { SupportLabel } from "../input-group/SupportLabel.js";
import { BaseRadioButton } from "./BaseRadioButton.js";
import { useRadioGroupContext } from "./radioGroupContext.js";
import type { RadioButtonProps } from "./types.js";

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
    (props, ref) => {
        const { checked, value, supportLabelProps, helpLabel, ...rest } = props;
        const { value: selectedValue, ...context } = useRadioGroupContext();
        const supportId = useId("jkl-support-label");

        return (
            <>
                <BaseRadioButton
                    {...context}
                    {...rest}
                    ref={ref}
                    checked={
                        typeof checked !== "undefined"
                            ? checked
                            : typeof selectedValue !== "undefined"
                              ? value === selectedValue
                              : undefined
                    }
                    value={value}
                    aria-describedby={helpLabel ? supportId : undefined}
                />
                <SupportLabel
                    {...supportLabelProps}
                    label={helpLabel}
                    labelType={"help"}
                    id={supportId}
                />
            </>
        );
    },
);

RadioButton.displayName = "RadioButton";
