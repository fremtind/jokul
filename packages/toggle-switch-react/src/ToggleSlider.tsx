import { Density, WithChildren } from "@fremtind/jkl-core";
import { useId, useSwipeGesture } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, {
    useState,
    Fragment,
    useRef,
    FC,
    MouseEventHandler,
} from "react";
import { type ToggleChangeHandler } from "./ToggleSwitch";
import { usePillStyles } from "./usePillStyles";

interface Props extends WithChildren {
    labels: [string, string];
    onToggle: (value: string) => void;
    defaultValue?: string;
    className?: string;
    hideLegend?: boolean;
    density?: Density;
}

export const ToggleSlider: FC<Props> = ({
    children,
    labels,
    className = "",
    onToggle,
    defaultValue,
    hideLegend = false,
    density,
    ...rest
}) => {
    const [currentLabel, setCurrentLabel] = useState(defaultValue || labels[0]);
    const id = useId("jkl-toggle-slider");
    const legendId = useId("jkl-toggle-slider-legend");
    const activeRef = useRef<HTMLLabelElement>(null);

    const shouldTransform = currentLabel === labels[1];
    const pillStyles = usePillStyles(activeRef, shouldTransform, [density]);

    const handleChange: ToggleChangeHandler<HTMLElement> = (_, pressed) => {
        setCurrentLabel(pressed ? labels[1] : labels[0]);
        onToggle(pressed ? labels[1] : labels[0]);
    };

    const handleClick: MouseEventHandler<HTMLInputElement> = (event) => {
        const { value } = event.currentTarget;
        setCurrentLabel(value);
        onToggle(value);
    };

    const { gestureHandlers } = useSwipeGesture<HTMLDivElement>({
        onClick: handleClick,
        onChange: handleChange,
    });
    const { onClick, ...swipeHandlers } = gestureHandlers;

    if (process.env.NODE_ENV !== "production") {
        console.error(
            "WARNING: ToggleSlider component has been deprecated and will be removed in some future version of the library",
        );
    }

    return (
        <fieldset
            {...rest}
            className={cn("jkl-toggle-slider", className)}
            aria-labelledby={legendId}
            data-testid="jkl-toggle-slider"
            data-density={density}
        >
            <div
                id={legendId}
                className={cn("jkl-toggle-slider__legend", {
                    "jkl-toggle-slider__legend--sr-only": hideLegend,
                })}
            >
                {children}
            </div>
            <div className="jkl-toggle-slider__inputs" {...swipeHandlers}>
                {labels.map((label) => (
                    <Fragment key={label}>
                        <input
                            className="jkl-toggle-slider__input"
                            type="radio"
                            value={label}
                            checked={label === currentLabel}
                            name={id}
                            id={`${label}-${id}`}
                            onClick={onClick}
                            onChange={() => {}}
                        />
                        <label
                            className={cn("jkl-toggle-slider__label", {
                                "jkl-toggle-slider__label--selected":
                                    label === currentLabel,
                            })}
                            ref={label === currentLabel ? activeRef : undefined}
                            htmlFor={`${label}-${id}`}
                        >
                            {label}
                        </label>
                    </Fragment>
                ))}
                <span
                    className="jkl-toggle-slider__pill"
                    style={pillStyles}
                    aria-hidden
                />
            </div>
        </fieldset>
    );
};
