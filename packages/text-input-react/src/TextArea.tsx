import React, { forwardRef, FocusEvent, useEffect, useRef, useState, RefObject } from "react";
import { Label, SupportLabel } from "@fremtind/jkl-typography-react";
import { LabelVariant } from "@fremtind/jkl-core";
import { BaseProps } from "./BaseInputField";
import classNames from "classnames";
import nanoid from "nanoid";

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
        const textAreaContentRows = (restProps.value || "").split("\n").length;

        let textAreaRows: number = textAreaContentRows;

        if (textAreaFocused && rows > textAreaContentRows) {
            textAreaRows = rows;
        }

        useEffect(() => {
            if (textAreaRef.current && !autoExpand) {
                // reset style attribute if no longer autoExpanding.
                textAreaRef.current.setAttribute("style", "");
            }
        }, [autoExpand]);

        useEffect(() => {
            const textAreaElement = textAreaRef.current;
            if (autoExpand && textAreaElement && !textAreaElement.style.height) {
                textAreaElement.style.overflowY = "hidden";
                calculateAndSetElementHeight(textAreaRows, textAreaElement);
            }
        }, []);

        useEffect(() => {
            const textAreaElement = textAreaRef.current;
            let rowToCalculateHeightFrom = textAreaRows;

            if (textAreaFocused) {
                // While the text-area has focus we keep the height 1 row higher than the actual row count.
                // If we don't do this it creates a weird scrolling effect that while we are transitioning from
                // one height to the next height.
                rowToCalculateHeightFrom += 1;
            } else if (restProps.value && rowToCalculateHeightFrom < rows) {
                rowToCalculateHeightFrom = rows;
            }

            if (autoExpand && textAreaElement) {
                calculateAndSetElementHeight(rowToCalculateHeightFrom, textAreaElement);
            }
        }, [textAreaRows, textAreaFocused]);

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

        function onFocus(e: FocusEvent<HTMLTextAreaElement>) {
            setTextAreaFocused(true);
            restProps.onFocus && restProps.onFocus(e);
        }

        function onBlur(e: FocusEvent<HTMLTextAreaElement>) {
            setTextAreaFocused(false);
            restProps.onBlur && restProps.onBlur(e);
        }
    },
);
TextArea.displayName = "TextArea";

function calculateAndSetElementHeight(rows: number, textAreaElement: HTMLTextAreaElement) {
    const lineHeightWithPx = window.getComputedStyle(textAreaElement).lineHeight;
    const lineHeight = parseInt(lineHeightWithPx.replace("px", ""));
    // 16px is sum of top and bottom padding
    textAreaElement.style.height = `${rows * lineHeight + 16}px`;
}
