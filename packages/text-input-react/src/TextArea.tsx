import React, { forwardRef, FocusEvent, useRef, useState, RefObject } from "react";
import classNames from "classnames";
import nanoid from "nanoid";
import { Label, SupportLabel } from "@fremtind/jkl-typography-react";
import { LabelVariant } from "@fremtind/jkl-core";
import { BaseProps } from "./BaseInputField";
import { useExpandingTextArea } from "./useExpandingTextArea";

interface Props extends BaseProps {
    label: string;
    helpLabel?: string;
    errorLabel?: string;
    variant?: LabelVariant;
    inverted?: boolean;
    forceCompact?: boolean;
    rows?: number;
    autoExpand?: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
    (
        {
            id,
            variant,
            inverted,
            label,
            className,
            helpLabel,
            errorLabel,
            rows = 7,
            placeholder = " ",
            autoExpand = false,
            forceCompact,
            ...restProps
        },
        ref,
    ) => {
        const componentClassName = classNames("jkl-text-input jkl-text-area", className, {
            "jkl-text-input--compact": forceCompact,
            "jkl-text-input--inverted": inverted,
        });
        const [uid] = useState(id || `jkl-text-area-${nanoid(8)}`);
        const [supportId] = useState(`jkl-support-label-${nanoid(8)}`);

        const [textAreaFocused, setTextAreaFocused] = useState(false);
        const internalRef = useRef<HTMLTextAreaElement>(null);
        const textAreaRef = (ref as RefObject<HTMLTextAreaElement>) || internalRef;

        const { textAreaRows } = useExpandingTextArea(textAreaRef, rows, restProps.value, autoExpand, textAreaFocused);

        function onFocus(e: FocusEvent<HTMLTextAreaElement>) {
            setTextAreaFocused(true);
            restProps.onFocus && restProps.onFocus(e);
        }

        function onBlur(e: FocusEvent<HTMLTextAreaElement>) {
            setTextAreaFocused(false);
            restProps.onBlur && restProps.onBlur(e);
        }

        return (
            <div data-testid="jkl-text-area" className={componentClassName}>
                <Label standAlone htmlFor={uid} variant={variant} forceCompact={forceCompact}>
                    {label}
                </Label>
                <textarea
                    onFocus={onFocus}
                    onBlur={onBlur}
                    ref={textAreaRef}
                    aria-invalid={!!errorLabel}
                    className={`jkl-text-input__input jkl-text-input__input--${rows}-rows`}
                    id={uid}
                    rows={textAreaRows}
                    placeholder={placeholder}
                    aria-describedby={supportId}
                    {...restProps}
                />
                <SupportLabel
                    id={supportId}
                    helpLabel={helpLabel}
                    errorLabel={errorLabel}
                    forceCompact={forceCompact}
                />
            </div>
        );
    },
);
TextArea.displayName = "TextArea";
