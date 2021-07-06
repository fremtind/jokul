import React, { forwardRef, FocusEvent, useRef, useState, useEffect, RefObject } from "react";
import classNames from "classnames";
import { nanoid } from "nanoid";
import { Label, SupportLabel, LabelVariant } from "@fremtind/jkl-core";
import { BaseProps } from "./BaseInputField";

export interface Props extends BaseProps {
    label: string;
    helpLabel?: string;
    errorLabel?: string;
    variant?: LabelVariant;
    /** @deprecated */
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
        const hasSupportText = helpLabel || errorLabel;
        const describedBy = hasSupportText ? supportId : undefined;

        const [textAreaFocused, setTextAreaFocused] = useState(false);
        const [baseScrollHeight, setBaseScrollHeight] = useState(0);
        const [currentRows, setCurrentRows] = useState(1);
        const internalRef = useRef<HTMLTextAreaElement>(null);
        const textAreaRef = (ref as RefObject<HTMLTextAreaElement>) || internalRef;

        useEffect(() => {
            const textAreaElement = textAreaRef.current;
            if (autoExpand && textAreaElement) {
                const savedValue = textAreaElement.value;
                const savedPlaceholder = textAreaElement.placeholder;
                const savedRows = textAreaElement.rows;
                // BaseScrollHeight must be calculated from an empty textarea and empty placeholder.
                textAreaElement.value = "";
                textAreaElement.placeholder = "";
                textAreaElement.rows = 1;
                setBaseScrollHeight(textAreaElement.scrollHeight);
                textAreaElement.value = savedValue;
                textAreaElement.placeholder = savedPlaceholder;
                textAreaElement.rows = savedRows;
            }
        }, [textAreaRef, autoExpand]);

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
        }, [textAreaRef, restProps.value, textAreaFocused, baseScrollHeight, rows]);

        function onFocus(e: FocusEvent<HTMLTextAreaElement>) {
            setTextAreaFocused(true);
            restProps.onFocus && restProps.onFocus(e);
        }

        function onBlur(e: FocusEvent<HTMLTextAreaElement>) {
            setTextAreaFocused(false);
            restProps.onBlur && restProps.onBlur(e);
        }

        function calculateRows(textAreaElement: HTMLTextAreaElement, baseScrollHeight: number) {
            const lineHeightWithPx = window ? window.getComputedStyle(textAreaElement).lineHeight : "16px"; // Default to 16px
            const lineHeight = parseInt(lineHeightWithPx.replace("px", ""));
            const savedRows = textAreaElement.rows;
            // We need to set rows to 1 to shrink the textarea when removing characters.
            textAreaElement.rows = 1;
            const calculatedRows = Math.ceil((textAreaElement.scrollHeight - baseScrollHeight) / lineHeight) + 1;
            textAreaElement.rows = savedRows;
            return calculatedRows;
        }

        return (
            <div data-testid="jkl-text-area" className={componentClassName}>
                <Label standAlone htmlFor={uid} variant={variant} forceCompact={forceCompact}>
                    {label}
                </Label>
                <textarea
                    id={uid}
                    ref={textAreaRef}
                    className={`jkl-text-input__input jkl-text-input__input--${rows}-rows`}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    aria-invalid={!!errorLabel}
                    aria-describedby={describedBy}
                    placeholder={placeholder}
                    rows={autoExpand ? currentRows : undefined}
                    // Must set overflowX hidden for Firefox https://stackoverflow.com/a/22700700
                    style={autoExpand ? { height: "auto", overflowX: "hidden" } : undefined}
                    {...restProps}
                />
                <SupportLabel
                    inverted={inverted}
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
