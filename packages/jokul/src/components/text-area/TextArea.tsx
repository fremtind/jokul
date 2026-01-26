import clsx from "clsx";
import React, { forwardRef } from "react";
import { InputGroup } from "../input-group/InputGroup.js";
import { BaseTextArea } from "./BaseTextArea.js";
import type { TextAreaProps } from "./types.js";

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    (props, ref) => {
        const {
            autoExpand,
            className,
            counter,
            errorLabel,
            helpLabel,
            inline,
            label,
            labelProps,
            startOpen,
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
        const textAreaProps = { autoExpand, counter, startOpen };
        return (
            <InputGroup
                className={clsx("jkl-text-area", className, {
                    "jkl-text-area--start-open": startOpen,
                    "jkl-text-area--auto-expand": autoExpand,
                })}
                data-testid="jkl-text-area"
                {...inputGroupProps}
            >
                <BaseTextArea ref={ref} {...rest} {...textAreaProps} />
            </InputGroup>
        );
    },
);
TextArea.displayName = "TextArea";
