import React, { useState, FC } from "react";
import classNames from "classnames";
import { nanoid } from "nanoid";

interface Props {
    labels: [string, string];
    onToggle: (value: string) => void;
    defaultValue?: string;
    className?: string;
    inverted?: boolean;
}

export const ToggleSlider: FC<Props> = ({ labels, className = "", inverted, onToggle, defaultValue, children }) => {
    const [checked, setChecked] = useState(defaultValue !== labels[0]);
    const [id] = useState(nanoid(8));

    const handleChange = () => {
        const nextValue = !checked;
        setChecked(nextValue);
        return onToggle(nextValue ? labels[1] : labels[0]);
    };

    return (
        <div
            className={classNames(
                "jkl-toggle-slider__wrapper",
                { "jkl-toggle-slider__wrapper--inverted": inverted },
                className,
            )}
        >
            <label htmlFor={id} className="jkl-toggle-slider__label jkl-component-spacing--medium-right">
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
