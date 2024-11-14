import clsx from "clsx";
import React, { forwardRef } from "react";
import { InputGroup, InputGroupProps } from "../input-group/InputGroup.js";
import { BaseTextArea, BaseTextAreaProps } from "./BaseTextArea.js";

export interface TextAreaProps
    extends Omit<InputGroupProps, "children">,
        BaseTextAreaProps {}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    (props, ref) => {
        const {
            autoExpand,
            className,
            counter,
            density,
            errorLabel,
            helpLabel,
            inline,
            label,
            labelProps,
            startOpen,
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
