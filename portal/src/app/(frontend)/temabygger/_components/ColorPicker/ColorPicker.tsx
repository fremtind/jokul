import clsx from "clsx";
import { type CSSProperties, useEffect, useRef } from "react";
import { isHex } from "../../_shared/utils";
import styles from "./color-picker.module.scss";

const FALLBACK_COLOR = "#000000";

type ColorPickerProps = {
    "aria-label": string;
    className?: string;
    value: string;
    onChange: (value: string) => void;
    onChangeEnd: () => void;
};

export function ColorPicker({
    "aria-label": ariaLabel,
    className,
    value,
    onChange,
    onChangeEnd,
}: ColorPickerProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const pickerValue = isHex(value) ? value : FALLBACK_COLOR;

    useEffect(() => {
        const input = inputRef.current;
        if (!input) {
            return;
        }

        // onInput oppdaterer fargen underveis. change avslutter redigeringen når valget bekreftes.
        input.addEventListener("change", onChangeEnd);
        return () => input.removeEventListener("change", onChangeEnd);
    }, [onChangeEnd]);

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
                onInput={(event) => onChange(event.currentTarget.value)}
            />
        </label>
    );
}
