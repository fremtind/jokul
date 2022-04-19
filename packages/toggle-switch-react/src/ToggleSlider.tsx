import React, { useState, FC, ReactNode } from "react";
import cn from "classnames";
import { useId } from "@fremtind/jkl-react-hooks";
import { ScreenReaderOnly } from "@fremtind/jkl-core";

interface Props {
    children?: ReactNode;
    labels: [string, string];
    onToggle: (value: string) => void;
    defaultValue?: string;
    className?: string;
    screenReaderLabel?: string;
    screenReaderSelectedLabel?: string;
}

export const ToggleSlider: FC<Props> = ({
    labels,
    className = "",
    onToggle,
    defaultValue,
    children,
    screenReaderLabel,
    screenReaderSelectedLabel,
}) => {
    const [checked, setChecked] = useState(defaultValue !== labels[0]);
    const [currentLabel, setCurrentLabel] = useState(defaultValue || labels[0]);
    const id = useId("jkl-toggle-slider");

    const selectedLabel = screenReaderSelectedLabel || `${currentLabel} valgt`;
    const ariaLabel = screenReaderLabel || `, ${selectedLabel}`;

    const handleChange = () => {
        const nextValue = !checked;
        const nextLabel = labels[nextValue ? 1 : 0];
        setChecked(nextValue);
        setCurrentLabel(nextLabel);
        return onToggle(nextLabel);
    };

    return (
        <div className={cn("jkl-toggle-slider__wrapper", className)}>
            <div role="region" aria-live="polite">
                <ScreenReaderOnly>{selectedLabel}</ScreenReaderOnly>
            </div>

            <label id={`${id}-label`} htmlFor={id} className="jkl-toggle-slider__label jkl-spacing-s--right">
                {children}
                <ScreenReaderOnly>{ariaLabel}</ScreenReaderOnly>
            </label>

            <button
                id={id}
                data-testid="jkl-toggle-slider"
                type="button"
                role="switch"
                aria-checked={checked}
                aria-labelledby={`${id}-label`}
                onClick={handleChange}
                className={cn("jkl-toggle-slider", {
                    "jkl-toggle-slider--checked": checked,
                    "jkl-toggle-slider--not-checked": !checked,
                })}
            >
                <span className="jkl-toggle-slider__pill" aria-hidden />
                <span className="jkl-toggle-slider--left">{labels[0]}</span>
                <span className="jkl-toggle-slider--right">{labels[1]}</span>
            </button>
        </div>
    );
};
