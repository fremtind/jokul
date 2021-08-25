import React, { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";
import cn from "classnames";

import { Label, LabelVariant, SupportLabel } from "@fremtind/jkl-core";

interface Props {
    className?: string;
    label: string;
    helpLabel?: string;
    errorLabel?: string;
    variant?: LabelVariant;
    name: string;
    id?: string;
    from?: number;
    to?: number;
    value?: number;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Slider: React.VFC<Props> = ({
    className,
    label,
    helpLabel,
    errorLabel,
    variant = "medium",
    id,
    from = 1,
    to = 5,
    value,
    ...rest
}) => {
    const numsteps = to - (from - 1);
    const steps = [...Array(numsteps).keys()];
    const [uid] = useState(id || `jkl-slider-${nanoid(8)}`);

    const [progressWidth, setProgressWidth] = useState<number>();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const gaps = to - from;
        const totalWidth = inputRef.current?.clientWidth || 0;
        const partWidth = (totalWidth / gaps) * ((value || from) - from);
        setProgressWidth(partWidth);
    }, [value, inputRef, from, to]);

    return (
        <div
            className={cn("jkl-slider", className, {
                "jkl-slider--invalid": !!errorLabel,
            })}
        >
            <Label standAlone htmlFor={uid} variant={variant}>
                {label}
            </Label>
            <input
                ref={inputRef}
                className="jkl-slider__slider"
                type="range"
                list="jkl-slider__values"
                min={from}
                max={to}
                id={uid}
                value={value}
                {...rest}
                style={
                    {
                        "--progress-width": `${progressWidth}px`,
                    } as React.CSSProperties
                }
            />
            <div id="jkl-slider__values" className="jkl-slider__values">
                {steps.map((step) => (
                    <span
                        key={step}
                        data-value={step + from}
                        className={cn({
                            "jkl-slider__value": true,
                            "jkl-slider__value--current": value === step + from,
                        })}
                    />
                ))}
            </div>
            <SupportLabel className="jkl-layout-spacing--xs-top" helpLabel={helpLabel} errorLabel={errorLabel} />
        </div>
    );
};

Slider.displayName = "Slider";
