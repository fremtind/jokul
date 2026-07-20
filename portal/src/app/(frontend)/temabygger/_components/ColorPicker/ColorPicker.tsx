import clsx from "clsx";
import type { CSSProperties } from "react";
import { isHex } from "../../_shared/utils";
import styles from "./color-picker.module.scss";

const FALLBACK_COLOR = "#000000";

type ColorPickerProps = {
    "aria-label": string;
    className?: string;
    value: string;
    onChange: (value: string) => void;
};

export function ColorPicker({
    "aria-label": ariaLabel,
    className,
    value,
    onChange,
}: ColorPickerProps) {
    const pickerValue = isHex(value) ? value : FALLBACK_COLOR;

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
                className="jkl-sr-only"
                type="color"
                aria-label={ariaLabel}
                value={pickerValue}
                onChange={(event) => onChange(event.target.value)}
            />
        </label>
    );
}
