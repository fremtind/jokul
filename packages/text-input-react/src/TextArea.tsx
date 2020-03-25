import React, { FocusEvent, useEffect, useRef, useState } from "react";
import { Label, SupportLabel } from "@fremtind/jkl-typography-react";
import { BaseInputProps } from "./BaseInputField";
import classNames from "classnames";

interface Props extends BaseInputProps {
    label: string;
    onBlur?: (value: FocusEvent<HTMLTextAreaElement>) => void;
    rows?: number;
    helpLabel?: string;
    errorLabel?: string;
    autoExpand?: boolean;
}

export const TextArea = ({
    id,
    variant,
    label,
    className,
    helpLabel,
    errorLabel,
    rows = 7,
    placeholder = " ",
    autoExpand = false,
    forceCompact,
    ...restProps
}: Props) => {
    const componentClassName = classNames("jkl-text-field jkl-text-area", className, {
        "jkl-text-field--compact": forceCompact,
    });

    const [textAreaFocused, setTextAreaFocused] = useState(false);
    const [baseScrollHeight, setBaseScrollHeight] = useState(0);
    const [currentRows, setCurrentRows] = useState(1);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        const textAreaElement = textAreaRef.current;
        if (autoExpand && textAreaElement) {
            const savedValue = textAreaElement.value;
            const savedPlaceholder = textAreaElement.placeholder;
            // BaseScrollHeight must be calculated from an empty textarea and empty placeholder.
            textAreaElement.value = "";
            textAreaElement.placeholder = "";
            setBaseScrollHeight(textAreaElement.scrollHeight);
            textAreaElement.value = savedValue;
            textAreaElement.placeholder = savedPlaceholder;
        }
    }, [autoExpand]);

    useEffect(() => {
        const textAreaElement = textAreaRef.current;
        const minimumRows = rows;

        if (textAreaElement) {
            const calculatedRows = calculateRows(textAreaElement, baseScrollHeight);
            if (textAreaFocused || restProps.value) {
                setCurrentRows(Math.max(minimumRows, calculatedRows));
            } else {
                setCurrentRows(calculatedRows);
            }
        }
    }, [restProps.value, textAreaFocused, baseScrollHeight, rows]);

    return (
        <label data-testid="jkl-text-field" className={componentClassName}>
            <Label variant={variant} forceCompact={forceCompact}>
                {label}
            </Label>
            <textarea
                onFocus={onFocus}
                onBlur={onBlur}
                ref={textAreaRef}
                aria-invalid={!!errorLabel}
                className={`jkl-text-field__input jkl-text-field__input--${rows}-rows`}
                id={id}
                rows={autoExpand ? currentRows : undefined}
                placeholder={placeholder}
                // Must set overflowX hidden for Firefox https://stackoverflow.com/a/22700700
                style={autoExpand ? { height: "auto", overflowX: "hidden" } : undefined}
                {...restProps}
            />
            <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} forceCompact={forceCompact} />
        </label>
    );

    function onFocus(e: FocusEvent<HTMLTextAreaElement>) {
        setTextAreaFocused(true);
        restProps.onFocus && restProps.onFocus(e);
    }

    function onBlur(e: FocusEvent<HTMLTextAreaElement>) {
        setTextAreaFocused(false);
        restProps.onBlur && restProps.onBlur(e);
    }
};

function calculateRows(textAreaElement: HTMLTextAreaElement, baseScrollHeight: number) {
    const lineHeightWithPx = window.getComputedStyle(textAreaElement).lineHeight;
    const lineHeight = parseInt(lineHeightWithPx.replace("px", ""));
    const savedRows = textAreaElement.rows;
    // We need to set rows to 1 to shrink the textarea when removing characters.
    textAreaElement.rows = 1;
    const calculatedRows = Math.ceil((textAreaElement.scrollHeight - baseScrollHeight) / lineHeight) + 1;
    textAreaElement.rows = savedRows;
    return calculatedRows;
}
