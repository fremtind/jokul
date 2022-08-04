import { WithChildren } from "@fremtind/jkl-core";
import { useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { useState, Fragment, useRef, FC } from "react";
import { usePillStyles } from "./usePillStyles";

interface Props extends WithChildren {
    labels: [string, string];
    onToggle: (value: string) => void;
    defaultValue?: string;
    className?: string;
    hideLegend?: boolean;
    /**
     * Skal bare brukes i informasjonstette applikasjoner.
     * @default false
     */
    compact?: boolean;
}

export const ToggleSlider: FC<Props> = ({
    children,
    labels,
    className = "",
    onToggle,
    defaultValue,
    hideLegend = false,
    compact,
    ...rest
}) => {
    const [currentLabel, setCurrentLabel] = useState(defaultValue || labels[0]);
    const id = useId("jkl-toggle-slider");
    const legendId = useId("jkl-toggle-slider-legend");
    const activeRef = useRef<HTMLLabelElement>(null);

    const shouldTransform = currentLabel === labels[1];
    const pillStyles = usePillStyles(activeRef, shouldTransform, [compact]);

    const handleChange = (value: string) => {
        setCurrentLabel(value);
        return onToggle(value);
    };

    const toggle = (clickedLabel: string) => {
        const nextLabel = labels.find((label) => label !== clickedLabel && clickedLabel === currentLabel);
        if (nextLabel) {
            handleChange(nextLabel);
        }
    };

    return (
        <fieldset
            {...rest}
            className={cn("jkl-toggle-slider", className, {
                "jkl-toggle-slider--compact": compact,
            })}
            aria-labelledby={legendId}
            data-testid="jkl-toggle-slider"
        >
            <div
                id={legendId}
                className={cn("jkl-toggle-slider__legend", {
                    "jkl-toggle-slider__legend--sr-only": hideLegend,
                })}
            >
                {children}
            </div>
            <div className="jkl-toggle-slider__inputs">
                {labels.map((label) => (
                    <Fragment key={label}>
                        <input
                            className="jkl-toggle-slider__input"
                            type="radio"
                            value={label}
                            checked={label === currentLabel}
                            name={id}
                            id={`${label}-${id}`}
                            onClick={() => toggle(label)}
                            onChange={(e) => handleChange(e.target.value)}
                        />
                        <label
                            className={cn("jkl-toggle-slider__label", {
                                "jkl-toggle-slider__label--selected": label === currentLabel,
                            })}
                            ref={label === currentLabel ? activeRef : undefined}
                            htmlFor={`${label}-${id}`}
                        >
                            {label}
                        </label>
                    </Fragment>
                ))}
                <span className="jkl-toggle-slider__pill" style={pillStyles} aria-hidden />
            </div>
        </fieldset>
    );
};
