import React, { useState, FC } from "react";
import classNames from "classnames";
import { nanoid } from "nanoid";
import { ScreenReaderOnly } from "@fremtind/jkl-core";

interface Props {
    labels: [string, string];
    onToggle: (value: string) => void;
    defaultValue?: string;
    className?: string;
    /** @deprecated */
    inverted?: boolean;
    screenReaderLabel?: string;
    screenReaderSelectedLabel?: string;
}

export const ToggleSlider: FC<Props> = ({
    labels,
    className = "",
    inverted,
    onToggle,
    defaultValue,
    children,
    screenReaderLabel,
    screenReaderSelectedLabel,
}) => {
    const [checked, setChecked] = useState(defaultValue !== labels[0]);
    const [currentLabel, setCurrentLabel] = useState(defaultValue || labels[0]);
    const [id] = useState(nanoid(8));

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
        <div
            className={classNames(
                "jkl-toggle-slider__wrapper",
                { "jkl-toggle-slider__wrapper--inverted": inverted },
                className,
            )}
        >
            <div role="region" aria-live="polite">
                <ScreenReaderOnly>{selectedLabel}</ScreenReaderOnly>
            </div>

            <label
                id={`${id}-label`}
                htmlFor={id}
                className="jkl-toggle-slider__label jkl-component-spacing--medium-right"
            >
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
                className={classNames("jkl-toggle-slider", {
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
