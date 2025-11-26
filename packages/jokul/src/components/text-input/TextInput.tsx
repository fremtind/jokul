import clsx from "clsx";
import React, { forwardRef } from "react";
import { InputGroup } from "../input-group/InputGroup.js";
import { BaseTextInput } from "./BaseTextInput.js";
import type { TextInputProps } from "./types.js";

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    (props, ref) => {
        const {
            "data-size": dataSize,
            label,
            className,
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
                data-size={dataSize}
                data-testid="jkl-text-input"
            >
                <BaseTextInput ref={ref} {...rest} className={inputClassName} />
            </InputGroup>
        );
    },
);

TextInput.displayName = "TextInput";
