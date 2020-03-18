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
    const [rows2, setRows2] = useState(1);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const textAreaContentRows = (restProps.value || "").split("\n").length;

    let textAreaRows: number = textAreaContentRows;

    if (textAreaFocused && rows > textAreaContentRows) {
        textAreaRows = rows;
    }

    useEffect(() => {
        const textAreaElement = textAreaRef.current;
        if (autoExpand && textAreaElement) {
            const savedValue = textAreaElement.value;
            textAreaElement.value = "";
            setBaseScrollHeight(textAreaElement.scrollHeight);
            textAreaElement.value = savedValue;
        }
    }, []);

    useEffect(() => {
        const textAreaElement = textAreaRef.current;
        if (textAreaElement) {
            const savedRows = textAreaElement.rows;
            textAreaElement.rows = 1;
            let rows = Math.ceil((textAreaElement.scrollHeight - baseScrollHeight) / 32) + 1;
            if (baseScrollHeight === 0) {
                rows = rows2;
            }
            textAreaElement.rows = savedRows;
            setRows2(rows);
        }
    }, [restProps.value]);

    /*useEffect(() => {
        const textAreaElement = textAreaRef.current;
        if (autoExpand && textAreaElement && !textAreaElement.style.height) {
            setBaseScrollHeight(textAreaElement.scrollHeight);
            console.log(textAreaElement.scrollHeight);
            textAreaElement.style.overflowY = "hidden";
            calculateAndSetElementHeight(textAreaRows, textAreaElement, textAreaElement.scrollHeight);
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
            calculateAndSetElementHeight(rowToCalculateHeightFrom, textAreaElement, baseScrollHeight);
        }
    }, [textAreaRows, textAreaFocused]);*/
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
                rows={rows2}
                placeholder={placeholder}
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

function calculateAndSetElementHeight(rows: number, textAreaElement: HTMLTextAreaElement, baseScrollHeight: number) {
    const lineHeightWithPx = window.getComputedStyle(textAreaElement).lineHeight;
    const lineHeight = parseInt(lineHeightWithPx.replace("px", ""));
    rows = (textAreaElement.scrollHeight - baseScrollHeight) / lineHeight;
    console.log("Lineheight ", lineHeight);
    console.log("Scrollheight ", textAreaElement.scrollHeight);
    console.log("BaseScrollHeight ", baseScrollHeight);
    textAreaElement.style.height = `${rows * lineHeight + 8}px`;
}
