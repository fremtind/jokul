import clsx from "clsx";
import React, { forwardRef } from "react";
import { InputGroup } from "../input-group/InputGroup.js";
import { BaseTextInput } from "./BaseTextInput.js";
import type { TextInputProps } from "./types.js";

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    (props, ref) => {
        const {
            label,
            className,
            density,
            errorLabel,
            helpLabel,
            inline,
            inputClassName,
            labelProps,
            supportLabelProps,
            tooltip,
            description,
            ...rest
        } = props;
        const inputGroupProps = {
            label,
            density,
            errorLabel,
            helpLabel,
            labelProps,
            inline,
            supportLabelProps,
            tooltip,
            description,
        };
        return (
            <InputGroup
                {...inputGroupProps}
                className={clsx(className, "jkl-text-input", {
                    "jkl-text-input--inline": inline,
                })}
                data-testid="jkl-text-input"
                density={inline ? "compact" : density}
            >
                <BaseTextInput ref={ref} {...rest} className={inputClassName} />
            </InputGroup>
        );
    },
);

TextInput.displayName = "TextInput";
