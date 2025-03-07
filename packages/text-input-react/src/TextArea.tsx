import {
    InputGroup,
    type InputGroupProps,
} from "@fremtind/jkl-input-group-react";
import cn from "classnames";
import React, { forwardRef } from "react";
import { BaseTextArea, BaseTextAreaProps } from "./BaseTextArea";

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
                className={cn("jkl-text-area", className, {
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
