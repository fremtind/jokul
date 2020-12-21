import React, { useState, FC } from "react";
import classNames from "classnames";
import { nanoid } from "nanoid";
import { ScreenReaderOnly } from "@fremtind/jkl-core";

interface Props {
    labels: [string, string];
    onToggle: (value: string) => void;
    defaultValue?: string;
    className?: string;
    inverted?: boolean;
    screenReaderLabel?: string;
    screenReaderSelected?: string;
}

export const ToggleSlider: FC<Props> = ({
    labels,
    className = "",
    inverted,
    onToggle,
    defaultValue,
    children,
    screenReaderLabel,
    screenReaderSelected,
}) => {
    const [checked, setChecked] = useState(defaultValue !== labels[0]);
    const [currentLabel, setCurrentLabel] = useState(defaultValue || labels[0]);
    const [id] = useState(nanoid(8));

    const ariaLabel = screenReaderLabel || `${labels[0]} eller ${labels[1]}`;
    const selectedAriaLabel = screenReaderSelected || `${currentLabel} valgt`;

    const handleChange = () => {
        const nextValue = !checked;
        const nextLabel = nextValue ? labels[1] : labels[0];
        setChecked(nextValue);
        setCurrentLabel(nextLabel);
        return onToggle(nextLabel);
    };

    return (
        <div className={`jkl-toggle-slider__wrapper ${className}`}>
            <label htmlFor={id} aria-label={ariaLabel} className="jkl-micro jkl-component-spacing--medium-right">
                {children}
            </label>
            <button
                id={id}
                data-testid="jkl-toggle-slider"
                type="button"
                role="switch"
                aria-checked={checked}
                onClick={handleChange}
                className={classNames("jkl-toggle-slider", {
                    "jkl-toggle-slider--inverted": inverted,
                    "jkl-toggle-slider--checked": checked,
                    "jkl-toggle-slider--not-checked": !checked,
                })}
            >
                <div role="region" aria-live="polite">
                    <ScreenReaderOnly>{selectedAriaLabel}</ScreenReaderOnly>
                </div>
                <span className="jkl-toggle-slider__pill" aria-hidden />
                <span className="jkl-micro jkl-toggle-slider--left">{labels[0]}</span>
                <span className="jkl-micro jkl-toggle-slider--right">{labels[1]}</span>
            </button>
        </div>
    );
};
