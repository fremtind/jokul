import { InputGroup, InputGroupProps } from "@fremtind/jkl-input-group-react";
import cn from "classnames";
import React, { forwardRef } from "react";
import { BaseTextInput, BaseTextInputProps } from "./BaseTextInput";

export type TextInputProps = Omit<InputGroupProps, "children"> &
    BaseTextInputProps & {
        "data-testautoid"?: string;
        inline?: boolean;
        inputClassName?: string;
    };

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
        };
        return (
            <InputGroup
                {...inputGroupProps}
                className={cn(className, "jkl-text-input", {
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
