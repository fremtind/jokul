import clsx from "clsx";
import { type CSSProperties, useEffect, useRef } from "react";
import { isHex } from "../../_shared/utils";
import styles from "./color-picker.module.scss";

const FALLBACK_COLOR = "#000000";

type ColorPickerProps = {
    "aria-label": string;
    className?: string;
    value: string;
    onInput: (value: string) => void;
    onChange: () => void;
};

export function ColorPicker({
    "aria-label": ariaLabel,
    className,
    value,
    onInput,
    onChange,
}: ColorPickerProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const pickerValue = isHex(value) ? value : FALLBACK_COLOR;

    useEffect(() => {
        const input = inputRef.current;
        if (!input) {
            return;
        }

        // input oppdaterer underveis; nettleserens change avslutter redigeringen.
        input.addEventListener("change", onChange);
        return () => input.removeEventListener("change", onChange);
    }, [onChange]);

    return (
        <label className={clsx(styles.colorPicker, className)}>
            <span
                className={styles.swatch}
                style={
                    {
                        "--theme-builder-color-picker-value": pickerValue,
                    } as CSSProperties
                }
                aria-hidden="true"
            />
            <input
                ref={inputRef}
                className="jkl-sr-only"
                type="color"
                aria-label={ariaLabel}
                value={pickerValue}
                onInput={(event) => onInput(event.currentTarget.value)}
            />
        </label>
    );
}
